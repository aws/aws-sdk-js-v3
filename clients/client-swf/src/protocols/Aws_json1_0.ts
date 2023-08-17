// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
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

import {
  CountClosedWorkflowExecutionsCommandInput,
  CountClosedWorkflowExecutionsCommandOutput,
} from "../commands/CountClosedWorkflowExecutionsCommand";
import {
  CountOpenWorkflowExecutionsCommandInput,
  CountOpenWorkflowExecutionsCommandOutput,
} from "../commands/CountOpenWorkflowExecutionsCommand";
import {
  CountPendingActivityTasksCommandInput,
  CountPendingActivityTasksCommandOutput,
} from "../commands/CountPendingActivityTasksCommand";
import {
  CountPendingDecisionTasksCommandInput,
  CountPendingDecisionTasksCommandOutput,
} from "../commands/CountPendingDecisionTasksCommand";
import {
  DeprecateActivityTypeCommandInput,
  DeprecateActivityTypeCommandOutput,
} from "../commands/DeprecateActivityTypeCommand";
import { DeprecateDomainCommandInput, DeprecateDomainCommandOutput } from "../commands/DeprecateDomainCommand";
import {
  DeprecateWorkflowTypeCommandInput,
  DeprecateWorkflowTypeCommandOutput,
} from "../commands/DeprecateWorkflowTypeCommand";
import {
  DescribeActivityTypeCommandInput,
  DescribeActivityTypeCommandOutput,
} from "../commands/DescribeActivityTypeCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "../commands/DescribeDomainCommand";
import {
  DescribeWorkflowExecutionCommandInput,
  DescribeWorkflowExecutionCommandOutput,
} from "../commands/DescribeWorkflowExecutionCommand";
import {
  DescribeWorkflowTypeCommandInput,
  DescribeWorkflowTypeCommandOutput,
} from "../commands/DescribeWorkflowTypeCommand";
import {
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput,
} from "../commands/GetWorkflowExecutionHistoryCommand";
import { ListActivityTypesCommandInput, ListActivityTypesCommandOutput } from "../commands/ListActivityTypesCommand";
import {
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput,
} from "../commands/ListClosedWorkflowExecutionsCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput,
} from "../commands/ListOpenWorkflowExecutionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWorkflowTypesCommandInput, ListWorkflowTypesCommandOutput } from "../commands/ListWorkflowTypesCommand";
import {
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput,
} from "../commands/PollForActivityTaskCommand";
import {
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput,
} from "../commands/PollForDecisionTaskCommand";
import {
  RecordActivityTaskHeartbeatCommandInput,
  RecordActivityTaskHeartbeatCommandOutput,
} from "../commands/RecordActivityTaskHeartbeatCommand";
import {
  RegisterActivityTypeCommandInput,
  RegisterActivityTypeCommandOutput,
} from "../commands/RegisterActivityTypeCommand";
import { RegisterDomainCommandInput, RegisterDomainCommandOutput } from "../commands/RegisterDomainCommand";
import {
  RegisterWorkflowTypeCommandInput,
  RegisterWorkflowTypeCommandOutput,
} from "../commands/RegisterWorkflowTypeCommand";
import {
  RequestCancelWorkflowExecutionCommandInput,
  RequestCancelWorkflowExecutionCommandOutput,
} from "../commands/RequestCancelWorkflowExecutionCommand";
import {
  RespondActivityTaskCanceledCommandInput,
  RespondActivityTaskCanceledCommandOutput,
} from "../commands/RespondActivityTaskCanceledCommand";
import {
  RespondActivityTaskCompletedCommandInput,
  RespondActivityTaskCompletedCommandOutput,
} from "../commands/RespondActivityTaskCompletedCommand";
import {
  RespondActivityTaskFailedCommandInput,
  RespondActivityTaskFailedCommandOutput,
} from "../commands/RespondActivityTaskFailedCommand";
import {
  RespondDecisionTaskCompletedCommandInput,
  RespondDecisionTaskCompletedCommandOutput,
} from "../commands/RespondDecisionTaskCompletedCommand";
import {
  SignalWorkflowExecutionCommandInput,
  SignalWorkflowExecutionCommandOutput,
} from "../commands/SignalWorkflowExecutionCommand";
import {
  StartWorkflowExecutionCommandInput,
  StartWorkflowExecutionCommandOutput,
} from "../commands/StartWorkflowExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import {
  TerminateWorkflowExecutionCommandInput,
  TerminateWorkflowExecutionCommandOutput,
} from "../commands/TerminateWorkflowExecutionCommand";
import {
  UndeprecateActivityTypeCommandInput,
  UndeprecateActivityTypeCommandOutput,
} from "../commands/UndeprecateActivityTypeCommand";
import { UndeprecateDomainCommandInput, UndeprecateDomainCommandOutput } from "../commands/UndeprecateDomainCommand";
import {
  UndeprecateWorkflowTypeCommandInput,
  UndeprecateWorkflowTypeCommandOutput,
} from "../commands/UndeprecateWorkflowTypeCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  ActivityType,
  ActivityTypeDetail,
  ActivityTypeInfo,
  ActivityTypeInfos,
  CancelTimerDecisionAttributes,
  CancelWorkflowExecutionDecisionAttributes,
  CloseStatusFilter,
  CompleteWorkflowExecutionDecisionAttributes,
  ContinueAsNewWorkflowExecutionDecisionAttributes,
  CountClosedWorkflowExecutionsInput,
  CountOpenWorkflowExecutionsInput,
  CountPendingActivityTasksInput,
  CountPendingDecisionTasksInput,
  Decision,
  DecisionTask,
  DefaultUndefinedFault,
  DeprecateActivityTypeInput,
  DeprecateDomainInput,
  DeprecateWorkflowTypeInput,
  DescribeActivityTypeInput,
  DescribeDomainInput,
  DescribeWorkflowExecutionInput,
  DescribeWorkflowTypeInput,
  DomainAlreadyExistsFault,
  DomainDeprecatedFault,
  ExecutionTimeFilter,
  FailWorkflowExecutionDecisionAttributes,
  GetWorkflowExecutionHistoryInput,
  History,
  HistoryEvent,
  LimitExceededFault,
  ListActivityTypesInput,
  ListClosedWorkflowExecutionsInput,
  ListDomainsInput,
  ListOpenWorkflowExecutionsInput,
  ListTagsForResourceInput,
  ListWorkflowTypesInput,
  OperationNotPermittedFault,
  PollForActivityTaskInput,
  PollForDecisionTaskInput,
  RecordActivityTaskHeartbeatInput,
  RecordMarkerDecisionAttributes,
  RegisterActivityTypeInput,
  RegisterDomainInput,
  RegisterWorkflowTypeInput,
  RequestCancelActivityTaskDecisionAttributes,
  RequestCancelExternalWorkflowExecutionDecisionAttributes,
  RequestCancelWorkflowExecutionInput,
  ResourceTag,
  RespondActivityTaskCanceledInput,
  RespondActivityTaskCompletedInput,
  RespondActivityTaskFailedInput,
  RespondDecisionTaskCompletedInput,
  ScheduleActivityTaskDecisionAttributes,
  ScheduleLambdaFunctionDecisionAttributes,
  SignalExternalWorkflowExecutionDecisionAttributes,
  SignalWorkflowExecutionInput,
  StartChildWorkflowExecutionDecisionAttributes,
  StartTimerDecisionAttributes,
  StartWorkflowExecutionInput,
  TagFilter,
  TagResourceInput,
  TaskList,
  TerminateWorkflowExecutionInput,
  TooManyTagsFault,
  TypeAlreadyExistsFault,
  TypeDeprecatedFault,
  UndeprecateActivityTypeInput,
  UndeprecateDomainInput,
  UndeprecateWorkflowTypeInput,
  UnknownResourceFault,
  UntagResourceInput,
  WorkflowExecution,
  WorkflowExecutionAlreadyStartedFault,
  WorkflowExecutionDetail,
  WorkflowExecutionFilter,
  WorkflowExecutionInfo,
  WorkflowExecutionInfos,
  WorkflowType,
  WorkflowTypeDetail,
  WorkflowTypeFilter,
  WorkflowTypeInfo,
  WorkflowTypeInfos,
} from "../models/models_0";
import { SWFServiceException as __BaseException } from "../models/SWFServiceException";

/**
 * serializeAws_json1_0CountClosedWorkflowExecutionsCommand
 */
export const se_CountClosedWorkflowExecutionsCommand = async (
  input: CountClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CountClosedWorkflowExecutions");
  let body: any;
  body = JSON.stringify(se_CountClosedWorkflowExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CountOpenWorkflowExecutionsCommand
 */
export const se_CountOpenWorkflowExecutionsCommand = async (
  input: CountOpenWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CountOpenWorkflowExecutions");
  let body: any;
  body = JSON.stringify(se_CountOpenWorkflowExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CountPendingActivityTasksCommand
 */
export const se_CountPendingActivityTasksCommand = async (
  input: CountPendingActivityTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CountPendingActivityTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CountPendingDecisionTasksCommand
 */
export const se_CountPendingDecisionTasksCommand = async (
  input: CountPendingDecisionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CountPendingDecisionTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeprecateActivityTypeCommand
 */
export const se_DeprecateActivityTypeCommand = async (
  input: DeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeprecateActivityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeprecateDomainCommand
 */
export const se_DeprecateDomainCommand = async (
  input: DeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeprecateDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeprecateWorkflowTypeCommand
 */
export const se_DeprecateWorkflowTypeCommand = async (
  input: DeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeprecateWorkflowType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeActivityTypeCommand
 */
export const se_DescribeActivityTypeCommand = async (
  input: DescribeActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeActivityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeWorkflowExecutionCommand
 */
export const se_DescribeWorkflowExecutionCommand = async (
  input: DescribeWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkflowExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeWorkflowTypeCommand
 */
export const se_DescribeWorkflowTypeCommand = async (
  input: DescribeWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkflowType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetWorkflowExecutionHistoryCommand
 */
export const se_GetWorkflowExecutionHistoryCommand = async (
  input: GetWorkflowExecutionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetWorkflowExecutionHistory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListActivityTypesCommand
 */
export const se_ListActivityTypesCommand = async (
  input: ListActivityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListActivityTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListClosedWorkflowExecutionsCommand
 */
export const se_ListClosedWorkflowExecutionsCommand = async (
  input: ListClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListClosedWorkflowExecutions");
  let body: any;
  body = JSON.stringify(se_ListClosedWorkflowExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDomains");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListOpenWorkflowExecutionsCommand
 */
export const se_ListOpenWorkflowExecutionsCommand = async (
  input: ListOpenWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOpenWorkflowExecutions");
  let body: any;
  body = JSON.stringify(se_ListOpenWorkflowExecutionsInput(input, context));
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
 * serializeAws_json1_0ListWorkflowTypesCommand
 */
export const se_ListWorkflowTypesCommand = async (
  input: ListWorkflowTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkflowTypes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PollForActivityTaskCommand
 */
export const se_PollForActivityTaskCommand = async (
  input: PollForActivityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PollForActivityTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PollForDecisionTaskCommand
 */
export const se_PollForDecisionTaskCommand = async (
  input: PollForDecisionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PollForDecisionTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RecordActivityTaskHeartbeatCommand
 */
export const se_RecordActivityTaskHeartbeatCommand = async (
  input: RecordActivityTaskHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RecordActivityTaskHeartbeat");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterActivityTypeCommand
 */
export const se_RegisterActivityTypeCommand = async (
  input: RegisterActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterActivityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterDomainCommand
 */
export const se_RegisterDomainCommand = async (
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterWorkflowTypeCommand
 */
export const se_RegisterWorkflowTypeCommand = async (
  input: RegisterWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterWorkflowType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RequestCancelWorkflowExecutionCommand
 */
export const se_RequestCancelWorkflowExecutionCommand = async (
  input: RequestCancelWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RequestCancelWorkflowExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RespondActivityTaskCanceledCommand
 */
export const se_RespondActivityTaskCanceledCommand = async (
  input: RespondActivityTaskCanceledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RespondActivityTaskCanceled");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RespondActivityTaskCompletedCommand
 */
export const se_RespondActivityTaskCompletedCommand = async (
  input: RespondActivityTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RespondActivityTaskCompleted");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RespondActivityTaskFailedCommand
 */
export const se_RespondActivityTaskFailedCommand = async (
  input: RespondActivityTaskFailedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RespondActivityTaskFailed");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RespondDecisionTaskCompletedCommand
 */
export const se_RespondDecisionTaskCompletedCommand = async (
  input: RespondDecisionTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RespondDecisionTaskCompleted");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SignalWorkflowExecutionCommand
 */
export const se_SignalWorkflowExecutionCommand = async (
  input: SignalWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SignalWorkflowExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartWorkflowExecutionCommand
 */
export const se_StartWorkflowExecutionCommand = async (
  input: StartWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartWorkflowExecution");
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
 * serializeAws_json1_0TerminateWorkflowExecutionCommand
 */
export const se_TerminateWorkflowExecutionCommand = async (
  input: TerminateWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateWorkflowExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UndeprecateActivityTypeCommand
 */
export const se_UndeprecateActivityTypeCommand = async (
  input: UndeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UndeprecateActivityType");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UndeprecateDomainCommand
 */
export const se_UndeprecateDomainCommand = async (
  input: UndeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UndeprecateDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UndeprecateWorkflowTypeCommand
 */
export const se_UndeprecateWorkflowTypeCommand = async (
  input: UndeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UndeprecateWorkflowType");
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
 * deserializeAws_json1_0CountClosedWorkflowExecutionsCommand
 */
export const de_CountClosedWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountClosedWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CountClosedWorkflowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CountClosedWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError
 */
const de_CountClosedWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountClosedWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0CountOpenWorkflowExecutionsCommand
 */
export const de_CountOpenWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountOpenWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CountOpenWorkflowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CountOpenWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError
 */
const de_CountOpenWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountOpenWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0CountPendingActivityTasksCommand
 */
export const de_CountPendingActivityTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingActivityTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CountPendingActivityTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CountPendingActivityTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CountPendingActivityTasksCommandError
 */
const de_CountPendingActivityTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingActivityTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0CountPendingDecisionTasksCommand
 */
export const de_CountPendingDecisionTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingDecisionTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CountPendingDecisionTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CountPendingDecisionTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CountPendingDecisionTasksCommandError
 */
const de_CountPendingDecisionTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingDecisionTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeprecateActivityTypeCommand
 */
export const de_DeprecateActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateActivityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeprecateActivityTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeprecateActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeprecateActivityTypeCommandError
 */
const de_DeprecateActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateActivityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf#TypeDeprecatedFault":
      throw await de_TypeDeprecatedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeprecateDomainCommand
 */
export const de_DeprecateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeprecateDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeprecateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeprecateDomainCommandError
 */
const de_DeprecateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainDeprecatedFault":
    case "com.amazonaws.swf#DomainDeprecatedFault":
      throw await de_DomainDeprecatedFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeprecateWorkflowTypeCommand
 */
export const de_DeprecateWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeprecateWorkflowTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeprecateWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0DeprecateWorkflowTypeCommandError
 */
const de_DeprecateWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateWorkflowTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf#TypeDeprecatedFault":
      throw await de_TypeDeprecatedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeActivityTypeCommand
 */
export const de_DescribeActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeActivityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ActivityTypeDetail(data, context);
  const response: DescribeActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeActivityTypeCommandError
 */
const de_DescribeActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeDomainCommand
 */
export const de_DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeDomainCommandError
 */
const de_DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeWorkflowExecutionCommand
 */
export const de_DescribeWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkflowExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_WorkflowExecutionDetail(data, context);
  const response: DescribeWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeWorkflowExecutionCommandError
 */
const de_DescribeWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0DescribeWorkflowTypeCommand
 */
export const de_DescribeWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkflowTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_WorkflowTypeDetail(data, context);
  const response: DescribeWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeWorkflowTypeCommandError
 */
const de_DescribeWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetWorkflowExecutionHistoryCommand
 */
export const de_GetWorkflowExecutionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetWorkflowExecutionHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_History(data, context);
  const response: GetWorkflowExecutionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError
 */
const de_GetWorkflowExecutionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListActivityTypesCommand
 */
export const de_ListActivityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListActivityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ActivityTypeInfos(data, context);
  const response: ListActivityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListActivityTypesCommandError
 */
const de_ListActivityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivityTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListClosedWorkflowExecutionsCommand
 */
export const de_ListClosedWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListClosedWorkflowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_WorkflowExecutionInfos(data, context);
  const response: ListClosedWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError
 */
const de_ListClosedWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDomainsCommandError
 */
const de_ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListOpenWorkflowExecutionsCommand
 */
export const de_ListOpenWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOpenWorkflowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_WorkflowExecutionInfos(data, context);
  const response: ListOpenWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError
 */
const de_ListOpenWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListWorkflowTypesCommand
 */
export const de_ListWorkflowTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkflowTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_WorkflowTypeInfos(data, context);
  const response: ListWorkflowTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListWorkflowTypesCommandError
 */
const de_ListWorkflowTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0PollForActivityTaskCommand
 */
export const de_PollForActivityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForActivityTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PollForActivityTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PollForActivityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PollForActivityTaskCommandError
 */
const de_PollForActivityTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForActivityTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0PollForDecisionTaskCommand
 */
export const de_PollForDecisionTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForDecisionTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PollForDecisionTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DecisionTask(data, context);
  const response: PollForDecisionTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PollForDecisionTaskCommandError
 */
const de_PollForDecisionTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForDecisionTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RecordActivityTaskHeartbeatCommand
 */
export const de_RecordActivityTaskHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordActivityTaskHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RecordActivityTaskHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RecordActivityTaskHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError
 */
const de_RecordActivityTaskHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordActivityTaskHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RegisterActivityTypeCommand
 */
export const de_RegisterActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterActivityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterActivityTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0RegisterActivityTypeCommandError
 */
const de_RegisterActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterActivityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf#TypeAlreadyExistsFault":
      throw await de_TypeAlreadyExistsFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RegisterDomainCommand
 */
export const de_RegisterDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0RegisterDomainCommandError
 */
const de_RegisterDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainAlreadyExistsFault":
    case "com.amazonaws.swf#DomainAlreadyExistsFault":
      throw await de_DomainAlreadyExistsFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TooManyTagsFault":
    case "com.amazonaws.swf#TooManyTagsFault":
      throw await de_TooManyTagsFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RegisterWorkflowTypeCommand
 */
export const de_RegisterWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterWorkflowTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0RegisterWorkflowTypeCommandError
 */
const de_RegisterWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkflowTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf#TypeAlreadyExistsFault":
      throw await de_TypeAlreadyExistsFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RequestCancelWorkflowExecutionCommand
 */
export const de_RequestCancelWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCancelWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RequestCancelWorkflowExecutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RequestCancelWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError
 */
const de_RequestCancelWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCancelWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RespondActivityTaskCanceledCommand
 */
export const de_RespondActivityTaskCanceledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCanceledCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RespondActivityTaskCanceledCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskCanceledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0RespondActivityTaskCanceledCommandError
 */
const de_RespondActivityTaskCanceledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCanceledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RespondActivityTaskCompletedCommand
 */
export const de_RespondActivityTaskCompletedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCompletedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RespondActivityTaskCompletedCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskCompletedCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0RespondActivityTaskCompletedCommandError
 */
const de_RespondActivityTaskCompletedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCompletedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RespondActivityTaskFailedCommand
 */
export const de_RespondActivityTaskFailedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskFailedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RespondActivityTaskFailedCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskFailedCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0RespondActivityTaskFailedCommandError
 */
const de_RespondActivityTaskFailedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskFailedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0RespondDecisionTaskCompletedCommand
 */
export const de_RespondDecisionTaskCompletedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondDecisionTaskCompletedCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RespondDecisionTaskCompletedCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RespondDecisionTaskCompletedCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0RespondDecisionTaskCompletedCommandError
 */
const de_RespondDecisionTaskCompletedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondDecisionTaskCompletedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0SignalWorkflowExecutionCommand
 */
export const de_SignalWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SignalWorkflowExecutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SignalWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0SignalWorkflowExecutionCommandError
 */
const de_SignalWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0StartWorkflowExecutionCommand
 */
export const de_StartWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartWorkflowExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartWorkflowExecutionCommandError
 */
const de_StartWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DefaultUndefinedFault":
    case "com.amazonaws.swf#DefaultUndefinedFault":
      throw await de_DefaultUndefinedFaultRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf#TypeDeprecatedFault":
      throw await de_TypeDeprecatedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
    case "WorkflowExecutionAlreadyStartedFault":
    case "com.amazonaws.swf#WorkflowExecutionAlreadyStartedFault":
      throw await de_WorkflowExecutionAlreadyStartedFaultRes(parsedOutput, context);
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
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TooManyTagsFault":
    case "com.amazonaws.swf#TooManyTagsFault":
      throw await de_TooManyTagsFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0TerminateWorkflowExecutionCommand
 */
export const de_TerminateWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateWorkflowExecutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TerminateWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0TerminateWorkflowExecutionCommandError
 */
const de_TerminateWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0UndeprecateActivityTypeCommand
 */
export const de_UndeprecateActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateActivityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UndeprecateActivityTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UndeprecateActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0UndeprecateActivityTypeCommandError
 */
const de_UndeprecateActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateActivityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf#TypeAlreadyExistsFault":
      throw await de_TypeAlreadyExistsFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0UndeprecateDomainCommand
 */
export const de_UndeprecateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UndeprecateDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UndeprecateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0UndeprecateDomainCommandError
 */
const de_UndeprecateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainAlreadyExistsFault":
    case "com.amazonaws.swf#DomainAlreadyExistsFault":
      throw await de_DomainAlreadyExistsFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0UndeprecateWorkflowTypeCommand
 */
export const de_UndeprecateWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UndeprecateWorkflowTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UndeprecateWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_0UndeprecateWorkflowTypeCommandError
 */
const de_UndeprecateWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateWorkflowTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf#TypeAlreadyExistsFault":
      throw await de_TypeAlreadyExistsFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      throw await de_OperationNotPermittedFaultRes(parsedOutput, context);
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      throw await de_UnknownResourceFaultRes(parsedOutput, context);
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
 * deserializeAws_json1_0DefaultUndefinedFaultRes
 */
const de_DefaultUndefinedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultUndefinedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DefaultUndefinedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0DomainAlreadyExistsFaultRes
 */
const de_DomainAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DomainAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0DomainDeprecatedFaultRes
 */
const de_DomainDeprecatedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainDeprecatedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DomainDeprecatedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0LimitExceededFaultRes
 */
const de_LimitExceededFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0OperationNotPermittedFaultRes
 */
const de_OperationNotPermittedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new OperationNotPermittedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TooManyTagsFaultRes
 */
const de_TooManyTagsFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<TooManyTagsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyTagsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TypeAlreadyExistsFaultRes
 */
const de_TypeAlreadyExistsFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TypeAlreadyExistsFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0TypeDeprecatedFaultRes
 */
const de_TypeDeprecatedFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<TypeDeprecatedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TypeDeprecatedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0UnknownResourceFaultRes
 */
const de_UnknownResourceFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownResourceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnknownResourceFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultRes
 */
const de_WorkflowExecutionAlreadyStartedFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkflowExecutionAlreadyStartedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new WorkflowExecutionAlreadyStartedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActivityType omitted.

// se_CancelTimerDecisionAttributes omitted.

// se_CancelWorkflowExecutionDecisionAttributes omitted.

// se_CloseStatusFilter omitted.

// se_CompleteWorkflowExecutionDecisionAttributes omitted.

// se_ContinueAsNewWorkflowExecutionDecisionAttributes omitted.

/**
 * serializeAws_json1_0CountClosedWorkflowExecutionsInput
 */
const se_CountClosedWorkflowExecutionsInput = (
  input: CountClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return take(input, {
    closeStatusFilter: _json,
    closeTimeFilter: (_) => se_ExecutionTimeFilter(_, context),
    domain: [],
    executionFilter: _json,
    startTimeFilter: (_) => se_ExecutionTimeFilter(_, context),
    tagFilter: _json,
    typeFilter: _json,
  });
};

/**
 * serializeAws_json1_0CountOpenWorkflowExecutionsInput
 */
const se_CountOpenWorkflowExecutionsInput = (input: CountOpenWorkflowExecutionsInput, context: __SerdeContext): any => {
  return take(input, {
    domain: [],
    executionFilter: _json,
    startTimeFilter: (_) => se_ExecutionTimeFilter(_, context),
    tagFilter: _json,
    typeFilter: _json,
  });
};

// se_CountPendingActivityTasksInput omitted.

// se_CountPendingDecisionTasksInput omitted.

// se_Decision omitted.

// se_DecisionList omitted.

// se_DeprecateActivityTypeInput omitted.

// se_DeprecateDomainInput omitted.

// se_DeprecateWorkflowTypeInput omitted.

// se_DescribeActivityTypeInput omitted.

// se_DescribeDomainInput omitted.

// se_DescribeWorkflowExecutionInput omitted.

// se_DescribeWorkflowTypeInput omitted.

/**
 * serializeAws_json1_0ExecutionTimeFilter
 */
const se_ExecutionTimeFilter = (input: ExecutionTimeFilter, context: __SerdeContext): any => {
  return take(input, {
    latestDate: (_) => Math.round(_.getTime() / 1000),
    oldestDate: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_FailWorkflowExecutionDecisionAttributes omitted.

// se_GetWorkflowExecutionHistoryInput omitted.

// se_ListActivityTypesInput omitted.

/**
 * serializeAws_json1_0ListClosedWorkflowExecutionsInput
 */
const se_ListClosedWorkflowExecutionsInput = (
  input: ListClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return take(input, {
    closeStatusFilter: _json,
    closeTimeFilter: (_) => se_ExecutionTimeFilter(_, context),
    domain: [],
    executionFilter: _json,
    maximumPageSize: [],
    nextPageToken: [],
    reverseOrder: [],
    startTimeFilter: (_) => se_ExecutionTimeFilter(_, context),
    tagFilter: _json,
    typeFilter: _json,
  });
};

// se_ListDomainsInput omitted.

/**
 * serializeAws_json1_0ListOpenWorkflowExecutionsInput
 */
const se_ListOpenWorkflowExecutionsInput = (input: ListOpenWorkflowExecutionsInput, context: __SerdeContext): any => {
  return take(input, {
    domain: [],
    executionFilter: _json,
    maximumPageSize: [],
    nextPageToken: [],
    reverseOrder: [],
    startTimeFilter: (_) => se_ExecutionTimeFilter(_, context),
    tagFilter: _json,
    typeFilter: _json,
  });
};

// se_ListTagsForResourceInput omitted.

// se_ListWorkflowTypesInput omitted.

// se_PollForActivityTaskInput omitted.

// se_PollForDecisionTaskInput omitted.

// se_RecordActivityTaskHeartbeatInput omitted.

// se_RecordMarkerDecisionAttributes omitted.

// se_RegisterActivityTypeInput omitted.

// se_RegisterDomainInput omitted.

// se_RegisterWorkflowTypeInput omitted.

// se_RequestCancelActivityTaskDecisionAttributes omitted.

// se_RequestCancelExternalWorkflowExecutionDecisionAttributes omitted.

// se_RequestCancelWorkflowExecutionInput omitted.

// se_ResourceTag omitted.

// se_ResourceTagKeyList omitted.

// se_ResourceTagList omitted.

// se_RespondActivityTaskCanceledInput omitted.

// se_RespondActivityTaskCompletedInput omitted.

// se_RespondActivityTaskFailedInput omitted.

// se_RespondDecisionTaskCompletedInput omitted.

// se_ScheduleActivityTaskDecisionAttributes omitted.

// se_ScheduleLambdaFunctionDecisionAttributes omitted.

// se_SignalExternalWorkflowExecutionDecisionAttributes omitted.

// se_SignalWorkflowExecutionInput omitted.

// se_StartChildWorkflowExecutionDecisionAttributes omitted.

// se_StartTimerDecisionAttributes omitted.

// se_StartWorkflowExecutionInput omitted.

// se_TagFilter omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_TaskList omitted.

// se_TerminateWorkflowExecutionInput omitted.

// se_UndeprecateActivityTypeInput omitted.

// se_UndeprecateDomainInput omitted.

// se_UndeprecateWorkflowTypeInput omitted.

// se_UntagResourceInput omitted.

// se_WorkflowExecution omitted.

// se_WorkflowExecutionFilter omitted.

// se_WorkflowType omitted.

// se_WorkflowTypeFilter omitted.

// de_ActivityTask omitted.

// de_ActivityTaskCanceledEventAttributes omitted.

// de_ActivityTaskCancelRequestedEventAttributes omitted.

// de_ActivityTaskCompletedEventAttributes omitted.

// de_ActivityTaskFailedEventAttributes omitted.

// de_ActivityTaskScheduledEventAttributes omitted.

// de_ActivityTaskStartedEventAttributes omitted.

// de_ActivityTaskStatus omitted.

// de_ActivityTaskTimedOutEventAttributes omitted.

// de_ActivityType omitted.

// de_ActivityTypeConfiguration omitted.

/**
 * deserializeAws_json1_0ActivityTypeDetail
 */
const de_ActivityTypeDetail = (output: any, context: __SerdeContext): ActivityTypeDetail => {
  return take(output, {
    configuration: _json,
    typeInfo: (_: any) => de_ActivityTypeInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ActivityTypeInfo
 */
const de_ActivityTypeInfo = (output: any, context: __SerdeContext): ActivityTypeInfo => {
  return take(output, {
    activityType: _json,
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deprecationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ActivityTypeInfoList
 */
const de_ActivityTypeInfoList = (output: any, context: __SerdeContext): ActivityTypeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActivityTypeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ActivityTypeInfos
 */
const de_ActivityTypeInfos = (output: any, context: __SerdeContext): ActivityTypeInfos => {
  return take(output, {
    nextPageToken: __expectString,
    typeInfos: (_: any) => de_ActivityTypeInfoList(_, context),
  }) as any;
};

// de_CancelTimerFailedEventAttributes omitted.

// de_CancelWorkflowExecutionFailedEventAttributes omitted.

// de_ChildWorkflowExecutionCanceledEventAttributes omitted.

// de_ChildWorkflowExecutionCompletedEventAttributes omitted.

// de_ChildWorkflowExecutionFailedEventAttributes omitted.

// de_ChildWorkflowExecutionStartedEventAttributes omitted.

// de_ChildWorkflowExecutionTerminatedEventAttributes omitted.

// de_ChildWorkflowExecutionTimedOutEventAttributes omitted.

// de_CompleteWorkflowExecutionFailedEventAttributes omitted.

// de_ContinueAsNewWorkflowExecutionFailedEventAttributes omitted.

/**
 * deserializeAws_json1_0DecisionTask
 */
const de_DecisionTask = (output: any, context: __SerdeContext): DecisionTask => {
  return take(output, {
    events: (_: any) => de_HistoryEventList(_, context),
    nextPageToken: __expectString,
    previousStartedEventId: __expectLong,
    startedEventId: __expectLong,
    taskToken: __expectString,
    workflowExecution: _json,
    workflowType: _json,
  }) as any;
};

// de_DecisionTaskCompletedEventAttributes omitted.

// de_DecisionTaskScheduledEventAttributes omitted.

// de_DecisionTaskStartedEventAttributes omitted.

// de_DecisionTaskTimedOutEventAttributes omitted.

// de_DefaultUndefinedFault omitted.

// de_DomainAlreadyExistsFault omitted.

// de_DomainConfiguration omitted.

// de_DomainDeprecatedFault omitted.

// de_DomainDetail omitted.

// de_DomainInfo omitted.

// de_DomainInfoList omitted.

// de_DomainInfos omitted.

// de_ExternalWorkflowExecutionCancelRequestedEventAttributes omitted.

// de_ExternalWorkflowExecutionSignaledEventAttributes omitted.

// de_FailWorkflowExecutionFailedEventAttributes omitted.

/**
 * deserializeAws_json1_0History
 */
const de_History = (output: any, context: __SerdeContext): History => {
  return take(output, {
    events: (_: any) => de_HistoryEventList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0HistoryEvent
 */
const de_HistoryEvent = (output: any, context: __SerdeContext): HistoryEvent => {
  return take(output, {
    activityTaskCancelRequestedEventAttributes: _json,
    activityTaskCanceledEventAttributes: _json,
    activityTaskCompletedEventAttributes: _json,
    activityTaskFailedEventAttributes: _json,
    activityTaskScheduledEventAttributes: _json,
    activityTaskStartedEventAttributes: _json,
    activityTaskTimedOutEventAttributes: _json,
    cancelTimerFailedEventAttributes: _json,
    cancelWorkflowExecutionFailedEventAttributes: _json,
    childWorkflowExecutionCanceledEventAttributes: _json,
    childWorkflowExecutionCompletedEventAttributes: _json,
    childWorkflowExecutionFailedEventAttributes: _json,
    childWorkflowExecutionStartedEventAttributes: _json,
    childWorkflowExecutionTerminatedEventAttributes: _json,
    childWorkflowExecutionTimedOutEventAttributes: _json,
    completeWorkflowExecutionFailedEventAttributes: _json,
    continueAsNewWorkflowExecutionFailedEventAttributes: _json,
    decisionTaskCompletedEventAttributes: _json,
    decisionTaskScheduledEventAttributes: _json,
    decisionTaskStartedEventAttributes: _json,
    decisionTaskTimedOutEventAttributes: _json,
    eventId: __expectLong,
    eventTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    eventType: __expectString,
    externalWorkflowExecutionCancelRequestedEventAttributes: _json,
    externalWorkflowExecutionSignaledEventAttributes: _json,
    failWorkflowExecutionFailedEventAttributes: _json,
    lambdaFunctionCompletedEventAttributes: _json,
    lambdaFunctionFailedEventAttributes: _json,
    lambdaFunctionScheduledEventAttributes: _json,
    lambdaFunctionStartedEventAttributes: _json,
    lambdaFunctionTimedOutEventAttributes: _json,
    markerRecordedEventAttributes: _json,
    recordMarkerFailedEventAttributes: _json,
    requestCancelActivityTaskFailedEventAttributes: _json,
    requestCancelExternalWorkflowExecutionFailedEventAttributes: _json,
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes: _json,
    scheduleActivityTaskFailedEventAttributes: _json,
    scheduleLambdaFunctionFailedEventAttributes: _json,
    signalExternalWorkflowExecutionFailedEventAttributes: _json,
    signalExternalWorkflowExecutionInitiatedEventAttributes: _json,
    startChildWorkflowExecutionFailedEventAttributes: _json,
    startChildWorkflowExecutionInitiatedEventAttributes: _json,
    startLambdaFunctionFailedEventAttributes: _json,
    startTimerFailedEventAttributes: _json,
    timerCanceledEventAttributes: _json,
    timerFiredEventAttributes: _json,
    timerStartedEventAttributes: _json,
    workflowExecutionCancelRequestedEventAttributes: _json,
    workflowExecutionCanceledEventAttributes: _json,
    workflowExecutionCompletedEventAttributes: _json,
    workflowExecutionContinuedAsNewEventAttributes: _json,
    workflowExecutionFailedEventAttributes: _json,
    workflowExecutionSignaledEventAttributes: _json,
    workflowExecutionStartedEventAttributes: _json,
    workflowExecutionTerminatedEventAttributes: _json,
    workflowExecutionTimedOutEventAttributes: _json,
  }) as any;
};

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

// de_LambdaFunctionCompletedEventAttributes omitted.

// de_LambdaFunctionFailedEventAttributes omitted.

// de_LambdaFunctionScheduledEventAttributes omitted.

// de_LambdaFunctionStartedEventAttributes omitted.

// de_LambdaFunctionTimedOutEventAttributes omitted.

// de_LimitExceededFault omitted.

// de_ListTagsForResourceOutput omitted.

// de_MarkerRecordedEventAttributes omitted.

// de_OperationNotPermittedFault omitted.

// de_PendingTaskCount omitted.

// de_RecordMarkerFailedEventAttributes omitted.

// de_RequestCancelActivityTaskFailedEventAttributes omitted.

// de_RequestCancelExternalWorkflowExecutionFailedEventAttributes omitted.

// de_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes omitted.

// de_ResourceTag omitted.

// de_ResourceTagList omitted.

// de_Run omitted.

// de_ScheduleActivityTaskFailedEventAttributes omitted.

// de_ScheduleLambdaFunctionFailedEventAttributes omitted.

// de_SignalExternalWorkflowExecutionFailedEventAttributes omitted.

// de_SignalExternalWorkflowExecutionInitiatedEventAttributes omitted.

// de_StartChildWorkflowExecutionFailedEventAttributes omitted.

// de_StartChildWorkflowExecutionInitiatedEventAttributes omitted.

// de_StartLambdaFunctionFailedEventAttributes omitted.

// de_StartTimerFailedEventAttributes omitted.

// de_TagList omitted.

// de_TaskList omitted.

// de_TimerCanceledEventAttributes omitted.

// de_TimerFiredEventAttributes omitted.

// de_TimerStartedEventAttributes omitted.

// de_TooManyTagsFault omitted.

// de_TypeAlreadyExistsFault omitted.

// de_TypeDeprecatedFault omitted.

// de_UnknownResourceFault omitted.

// de_WorkflowExecution omitted.

// de_WorkflowExecutionAlreadyStartedFault omitted.

// de_WorkflowExecutionCanceledEventAttributes omitted.

// de_WorkflowExecutionCancelRequestedEventAttributes omitted.

// de_WorkflowExecutionCompletedEventAttributes omitted.

// de_WorkflowExecutionConfiguration omitted.

// de_WorkflowExecutionContinuedAsNewEventAttributes omitted.

// de_WorkflowExecutionCount omitted.

/**
 * deserializeAws_json1_0WorkflowExecutionDetail
 */
const de_WorkflowExecutionDetail = (output: any, context: __SerdeContext): WorkflowExecutionDetail => {
  return take(output, {
    executionConfiguration: _json,
    executionInfo: (_: any) => de_WorkflowExecutionInfo(_, context),
    latestActivityTaskTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestExecutionContext: __expectString,
    openCounts: _json,
  }) as any;
};

// de_WorkflowExecutionFailedEventAttributes omitted.

/**
 * deserializeAws_json1_0WorkflowExecutionInfo
 */
const de_WorkflowExecutionInfo = (output: any, context: __SerdeContext): WorkflowExecutionInfo => {
  return take(output, {
    cancelRequested: __expectBoolean,
    closeStatus: __expectString,
    closeTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    execution: _json,
    executionStatus: __expectString,
    parent: _json,
    startTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    tagList: _json,
    workflowType: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionInfoList
 */
const de_WorkflowExecutionInfoList = (output: any, context: __SerdeContext): WorkflowExecutionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkflowExecutionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WorkflowExecutionInfos
 */
const de_WorkflowExecutionInfos = (output: any, context: __SerdeContext): WorkflowExecutionInfos => {
  return take(output, {
    executionInfos: (_: any) => de_WorkflowExecutionInfoList(_, context),
    nextPageToken: __expectString,
  }) as any;
};

// de_WorkflowExecutionOpenCounts omitted.

// de_WorkflowExecutionSignaledEventAttributes omitted.

// de_WorkflowExecutionStartedEventAttributes omitted.

// de_WorkflowExecutionTerminatedEventAttributes omitted.

// de_WorkflowExecutionTimedOutEventAttributes omitted.

// de_WorkflowType omitted.

// de_WorkflowTypeConfiguration omitted.

/**
 * deserializeAws_json1_0WorkflowTypeDetail
 */
const de_WorkflowTypeDetail = (output: any, context: __SerdeContext): WorkflowTypeDetail => {
  return take(output, {
    configuration: _json,
    typeInfo: (_: any) => de_WorkflowTypeInfo(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0WorkflowTypeInfo
 */
const de_WorkflowTypeInfo = (output: any, context: __SerdeContext): WorkflowTypeInfo => {
  return take(output, {
    creationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deprecationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    status: __expectString,
    workflowType: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0WorkflowTypeInfoList
 */
const de_WorkflowTypeInfoList = (output: any, context: __SerdeContext): WorkflowTypeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorkflowTypeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WorkflowTypeInfos
 */
const de_WorkflowTypeInfos = (output: any, context: __SerdeContext): WorkflowTypeInfos => {
  return take(output, {
    nextPageToken: __expectString,
    typeInfos: (_: any) => de_WorkflowTypeInfoList(_, context),
  }) as any;
};

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `SimpleWorkflowService.${operation}`,
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
