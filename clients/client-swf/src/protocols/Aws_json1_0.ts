// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
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
  ActivityTask,
  ActivityTaskCanceledEventAttributes,
  ActivityTaskCancelRequestedEventAttributes,
  ActivityTaskCompletedEventAttributes,
  ActivityTaskFailedEventAttributes,
  ActivityTaskScheduledEventAttributes,
  ActivityTaskStartedEventAttributes,
  ActivityTaskStatus,
  ActivityTaskTimedOutEventAttributes,
  ActivityType,
  ActivityTypeConfiguration,
  ActivityTypeDetail,
  ActivityTypeInfo,
  ActivityTypeInfos,
  CancelTimerDecisionAttributes,
  CancelTimerFailedEventAttributes,
  CancelWorkflowExecutionDecisionAttributes,
  CancelWorkflowExecutionFailedEventAttributes,
  ChildWorkflowExecutionCanceledEventAttributes,
  ChildWorkflowExecutionCompletedEventAttributes,
  ChildWorkflowExecutionFailedEventAttributes,
  ChildWorkflowExecutionStartedEventAttributes,
  ChildWorkflowExecutionTerminatedEventAttributes,
  ChildWorkflowExecutionTimedOutEventAttributes,
  CloseStatusFilter,
  CompleteWorkflowExecutionDecisionAttributes,
  CompleteWorkflowExecutionFailedEventAttributes,
  ContinueAsNewWorkflowExecutionDecisionAttributes,
  ContinueAsNewWorkflowExecutionFailedEventAttributes,
  CountClosedWorkflowExecutionsInput,
  CountOpenWorkflowExecutionsInput,
  CountPendingActivityTasksInput,
  CountPendingDecisionTasksInput,
  Decision,
  DecisionTask,
  DecisionTaskCompletedEventAttributes,
  DecisionTaskScheduledEventAttributes,
  DecisionTaskStartedEventAttributes,
  DecisionTaskTimedOutEventAttributes,
  DefaultUndefinedFault,
  DeprecateActivityTypeInput,
  DeprecateDomainInput,
  DeprecateWorkflowTypeInput,
  DescribeActivityTypeInput,
  DescribeDomainInput,
  DescribeWorkflowExecutionInput,
  DescribeWorkflowTypeInput,
  DomainAlreadyExistsFault,
  DomainConfiguration,
  DomainDeprecatedFault,
  DomainDetail,
  DomainInfo,
  DomainInfos,
  ExecutionTimeFilter,
  ExternalWorkflowExecutionCancelRequestedEventAttributes,
  ExternalWorkflowExecutionSignaledEventAttributes,
  FailWorkflowExecutionDecisionAttributes,
  FailWorkflowExecutionFailedEventAttributes,
  GetWorkflowExecutionHistoryInput,
  History,
  HistoryEvent,
  LambdaFunctionCompletedEventAttributes,
  LambdaFunctionFailedEventAttributes,
  LambdaFunctionScheduledEventAttributes,
  LambdaFunctionStartedEventAttributes,
  LambdaFunctionTimedOutEventAttributes,
  LimitExceededFault,
  ListActivityTypesInput,
  ListClosedWorkflowExecutionsInput,
  ListDomainsInput,
  ListOpenWorkflowExecutionsInput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListWorkflowTypesInput,
  MarkerRecordedEventAttributes,
  OperationNotPermittedFault,
  PendingTaskCount,
  PollForActivityTaskInput,
  PollForDecisionTaskInput,
  RecordActivityTaskHeartbeatInput,
  RecordMarkerDecisionAttributes,
  RecordMarkerFailedEventAttributes,
  RegisterActivityTypeInput,
  RegisterDomainInput,
  RegisterWorkflowTypeInput,
  RequestCancelActivityTaskDecisionAttributes,
  RequestCancelActivityTaskFailedEventAttributes,
  RequestCancelExternalWorkflowExecutionDecisionAttributes,
  RequestCancelExternalWorkflowExecutionFailedEventAttributes,
  RequestCancelExternalWorkflowExecutionInitiatedEventAttributes,
  RequestCancelWorkflowExecutionInput,
  ResourceTag,
  RespondActivityTaskCanceledInput,
  RespondActivityTaskCompletedInput,
  RespondActivityTaskFailedInput,
  RespondDecisionTaskCompletedInput,
  Run,
  ScheduleActivityTaskDecisionAttributes,
  ScheduleActivityTaskFailedEventAttributes,
  ScheduleLambdaFunctionDecisionAttributes,
  ScheduleLambdaFunctionFailedEventAttributes,
  SignalExternalWorkflowExecutionDecisionAttributes,
  SignalExternalWorkflowExecutionFailedEventAttributes,
  SignalExternalWorkflowExecutionInitiatedEventAttributes,
  SignalWorkflowExecutionInput,
  StartChildWorkflowExecutionDecisionAttributes,
  StartChildWorkflowExecutionFailedEventAttributes,
  StartChildWorkflowExecutionInitiatedEventAttributes,
  StartLambdaFunctionFailedEventAttributes,
  StartTimerDecisionAttributes,
  StartTimerFailedEventAttributes,
  StartWorkflowExecutionInput,
  TagFilter,
  TagResourceInput,
  TaskList,
  TerminateWorkflowExecutionInput,
  TimerCanceledEventAttributes,
  TimerFiredEventAttributes,
  TimerStartedEventAttributes,
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
  WorkflowExecutionCanceledEventAttributes,
  WorkflowExecutionCancelRequestedEventAttributes,
  WorkflowExecutionCompletedEventAttributes,
  WorkflowExecutionConfiguration,
  WorkflowExecutionContinuedAsNewEventAttributes,
  WorkflowExecutionCount,
  WorkflowExecutionDetail,
  WorkflowExecutionFailedEventAttributes,
  WorkflowExecutionFilter,
  WorkflowExecutionInfo,
  WorkflowExecutionInfos,
  WorkflowExecutionOpenCounts,
  WorkflowExecutionSignaledEventAttributes,
  WorkflowExecutionStartedEventAttributes,
  WorkflowExecutionTerminatedEventAttributes,
  WorkflowExecutionTimedOutEventAttributes,
  WorkflowType,
  WorkflowTypeConfiguration,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.CountClosedWorkflowExecutions",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.CountOpenWorkflowExecutions",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.CountPendingActivityTasks",
  };
  let body: any;
  body = JSON.stringify(se_CountPendingActivityTasksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CountPendingDecisionTasksCommand
 */
export const se_CountPendingDecisionTasksCommand = async (
  input: CountPendingDecisionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.CountPendingDecisionTasks",
  };
  let body: any;
  body = JSON.stringify(se_CountPendingDecisionTasksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeprecateActivityTypeCommand
 */
export const se_DeprecateActivityTypeCommand = async (
  input: DeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DeprecateActivityType",
  };
  let body: any;
  body = JSON.stringify(se_DeprecateActivityTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeprecateDomainCommand
 */
export const se_DeprecateDomainCommand = async (
  input: DeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DeprecateDomain",
  };
  let body: any;
  body = JSON.stringify(se_DeprecateDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeprecateWorkflowTypeCommand
 */
export const se_DeprecateWorkflowTypeCommand = async (
  input: DeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DeprecateWorkflowType",
  };
  let body: any;
  body = JSON.stringify(se_DeprecateWorkflowTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeActivityTypeCommand
 */
export const se_DescribeActivityTypeCommand = async (
  input: DescribeActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DescribeActivityType",
  };
  let body: any;
  body = JSON.stringify(se_DescribeActivityTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DescribeDomain",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeWorkflowExecutionCommand
 */
export const se_DescribeWorkflowExecutionCommand = async (
  input: DescribeWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DescribeWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeWorkflowTypeCommand
 */
export const se_DescribeWorkflowTypeCommand = async (
  input: DescribeWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DescribeWorkflowType",
  };
  let body: any;
  body = JSON.stringify(se_DescribeWorkflowTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetWorkflowExecutionHistoryCommand
 */
export const se_GetWorkflowExecutionHistoryCommand = async (
  input: GetWorkflowExecutionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.GetWorkflowExecutionHistory",
  };
  let body: any;
  body = JSON.stringify(se_GetWorkflowExecutionHistoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListActivityTypesCommand
 */
export const se_ListActivityTypesCommand = async (
  input: ListActivityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListActivityTypes",
  };
  let body: any;
  body = JSON.stringify(se_ListActivityTypesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListClosedWorkflowExecutionsCommand
 */
export const se_ListClosedWorkflowExecutionsCommand = async (
  input: ListClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListClosedWorkflowExecutions",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListDomains",
  };
  let body: any;
  body = JSON.stringify(se_ListDomainsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListOpenWorkflowExecutionsCommand
 */
export const se_ListOpenWorkflowExecutionsCommand = async (
  input: ListOpenWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListOpenWorkflowExecutions",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListWorkflowTypesCommand
 */
export const se_ListWorkflowTypesCommand = async (
  input: ListWorkflowTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListWorkflowTypes",
  };
  let body: any;
  body = JSON.stringify(se_ListWorkflowTypesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PollForActivityTaskCommand
 */
export const se_PollForActivityTaskCommand = async (
  input: PollForActivityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.PollForActivityTask",
  };
  let body: any;
  body = JSON.stringify(se_PollForActivityTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PollForDecisionTaskCommand
 */
export const se_PollForDecisionTaskCommand = async (
  input: PollForDecisionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.PollForDecisionTask",
  };
  let body: any;
  body = JSON.stringify(se_PollForDecisionTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RecordActivityTaskHeartbeatCommand
 */
export const se_RecordActivityTaskHeartbeatCommand = async (
  input: RecordActivityTaskHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RecordActivityTaskHeartbeat",
  };
  let body: any;
  body = JSON.stringify(se_RecordActivityTaskHeartbeatInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterActivityTypeCommand
 */
export const se_RegisterActivityTypeCommand = async (
  input: RegisterActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RegisterActivityType",
  };
  let body: any;
  body = JSON.stringify(se_RegisterActivityTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterDomainCommand
 */
export const se_RegisterDomainCommand = async (
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RegisterDomain",
  };
  let body: any;
  body = JSON.stringify(se_RegisterDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RegisterWorkflowTypeCommand
 */
export const se_RegisterWorkflowTypeCommand = async (
  input: RegisterWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RegisterWorkflowType",
  };
  let body: any;
  body = JSON.stringify(se_RegisterWorkflowTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RequestCancelWorkflowExecutionCommand
 */
export const se_RequestCancelWorkflowExecutionCommand = async (
  input: RequestCancelWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RequestCancelWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(se_RequestCancelWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RespondActivityTaskCanceledCommand
 */
export const se_RespondActivityTaskCanceledCommand = async (
  input: RespondActivityTaskCanceledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RespondActivityTaskCanceled",
  };
  let body: any;
  body = JSON.stringify(se_RespondActivityTaskCanceledInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RespondActivityTaskCompletedCommand
 */
export const se_RespondActivityTaskCompletedCommand = async (
  input: RespondActivityTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RespondActivityTaskCompleted",
  };
  let body: any;
  body = JSON.stringify(se_RespondActivityTaskCompletedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RespondActivityTaskFailedCommand
 */
export const se_RespondActivityTaskFailedCommand = async (
  input: RespondActivityTaskFailedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RespondActivityTaskFailed",
  };
  let body: any;
  body = JSON.stringify(se_RespondActivityTaskFailedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RespondDecisionTaskCompletedCommand
 */
export const se_RespondDecisionTaskCompletedCommand = async (
  input: RespondDecisionTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RespondDecisionTaskCompleted",
  };
  let body: any;
  body = JSON.stringify(se_RespondDecisionTaskCompletedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0SignalWorkflowExecutionCommand
 */
export const se_SignalWorkflowExecutionCommand = async (
  input: SignalWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.SignalWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(se_SignalWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartWorkflowExecutionCommand
 */
export const se_StartWorkflowExecutionCommand = async (
  input: StartWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.StartWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(se_StartWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TerminateWorkflowExecutionCommand
 */
export const se_TerminateWorkflowExecutionCommand = async (
  input: TerminateWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.TerminateWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(se_TerminateWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UndeprecateActivityTypeCommand
 */
export const se_UndeprecateActivityTypeCommand = async (
  input: UndeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.UndeprecateActivityType",
  };
  let body: any;
  body = JSON.stringify(se_UndeprecateActivityTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UndeprecateDomainCommand
 */
export const se_UndeprecateDomainCommand = async (
  input: UndeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.UndeprecateDomain",
  };
  let body: any;
  body = JSON.stringify(se_UndeprecateDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UndeprecateWorkflowTypeCommand
 */
export const se_UndeprecateWorkflowTypeCommand = async (
  input: UndeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.UndeprecateWorkflowType",
  };
  let body: any;
  body = JSON.stringify(se_UndeprecateWorkflowTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
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
  contents = de_WorkflowExecutionCount(data, context);
  const response: CountClosedWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_WorkflowExecutionCount(data, context);
  const response: CountOpenWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PendingTaskCount(data, context);
  const response: CountPendingActivityTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_PendingTaskCount(data, context);
  const response: CountPendingDecisionTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DomainDetail(data, context);
  const response: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DomainInfos(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ActivityTask(data, context);
  const response: PollForActivityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ActivityTaskStatus(data, context);
  const response: RecordActivityTaskHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_Run(data, context);
  const response: StartWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_DefaultUndefinedFault(body, context);
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
  const deserialized: any = de_DomainAlreadyExistsFault(body, context);
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
  const deserialized: any = de_DomainDeprecatedFault(body, context);
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
  const deserialized: any = de_LimitExceededFault(body, context);
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
  const deserialized: any = de_OperationNotPermittedFault(body, context);
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
  const deserialized: any = de_TooManyTagsFault(body, context);
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
  const deserialized: any = de_TypeAlreadyExistsFault(body, context);
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
  const deserialized: any = de_TypeDeprecatedFault(body, context);
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
  const deserialized: any = de_UnknownResourceFault(body, context);
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
  const deserialized: any = de_WorkflowExecutionAlreadyStartedFault(body, context);
  const exception = new WorkflowExecutionAlreadyStartedFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0ActivityType
 */
const se_ActivityType = (input: ActivityType, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_0CancelTimerDecisionAttributes
 */
const se_CancelTimerDecisionAttributes = (input: CancelTimerDecisionAttributes, context: __SerdeContext): any => {
  return {
    ...(input.timerId != null && { timerId: input.timerId }),
  };
};

/**
 * serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes
 */
const se_CancelWorkflowExecutionDecisionAttributes = (
  input: CancelWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.details != null && { details: input.details }),
  };
};

/**
 * serializeAws_json1_0CloseStatusFilter
 */
const se_CloseStatusFilter = (input: CloseStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes
 */
const se_CompleteWorkflowExecutionDecisionAttributes = (
  input: CompleteWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.result != null && { result: input.result }),
  };
};

/**
 * serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes
 */
const se_ContinueAsNewWorkflowExecutionDecisionAttributes = (
  input: ContinueAsNewWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy != null && { childPolicy: input.childPolicy }),
    ...(input.executionStartToCloseTimeout != null && {
      executionStartToCloseTimeout: input.executionStartToCloseTimeout,
    }),
    ...(input.input != null && { input: input.input }),
    ...(input.lambdaRole != null && { lambdaRole: input.lambdaRole }),
    ...(input.tagList != null && { tagList: se_TagList(input.tagList, context) }),
    ...(input.taskList != null && { taskList: se_TaskList(input.taskList, context) }),
    ...(input.taskPriority != null && { taskPriority: input.taskPriority }),
    ...(input.taskStartToCloseTimeout != null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
    ...(input.workflowTypeVersion != null && { workflowTypeVersion: input.workflowTypeVersion }),
  };
};

/**
 * serializeAws_json1_0CountClosedWorkflowExecutionsInput
 */
const se_CountClosedWorkflowExecutionsInput = (
  input: CountClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.closeStatusFilter != null && {
      closeStatusFilter: se_CloseStatusFilter(input.closeStatusFilter, context),
    }),
    ...(input.closeTimeFilter != null && { closeTimeFilter: se_ExecutionTimeFilter(input.closeTimeFilter, context) }),
    ...(input.domain != null && { domain: input.domain }),
    ...(input.executionFilter != null && {
      executionFilter: se_WorkflowExecutionFilter(input.executionFilter, context),
    }),
    ...(input.startTimeFilter != null && { startTimeFilter: se_ExecutionTimeFilter(input.startTimeFilter, context) }),
    ...(input.tagFilter != null && { tagFilter: se_TagFilter(input.tagFilter, context) }),
    ...(input.typeFilter != null && { typeFilter: se_WorkflowTypeFilter(input.typeFilter, context) }),
  };
};

/**
 * serializeAws_json1_0CountOpenWorkflowExecutionsInput
 */
const se_CountOpenWorkflowExecutionsInput = (input: CountOpenWorkflowExecutionsInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.executionFilter != null && {
      executionFilter: se_WorkflowExecutionFilter(input.executionFilter, context),
    }),
    ...(input.startTimeFilter != null && { startTimeFilter: se_ExecutionTimeFilter(input.startTimeFilter, context) }),
    ...(input.tagFilter != null && { tagFilter: se_TagFilter(input.tagFilter, context) }),
    ...(input.typeFilter != null && { typeFilter: se_WorkflowTypeFilter(input.typeFilter, context) }),
  };
};

/**
 * serializeAws_json1_0CountPendingActivityTasksInput
 */
const se_CountPendingActivityTasksInput = (input: CountPendingActivityTasksInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.taskList != null && { taskList: se_TaskList(input.taskList, context) }),
  };
};

/**
 * serializeAws_json1_0CountPendingDecisionTasksInput
 */
const se_CountPendingDecisionTasksInput = (input: CountPendingDecisionTasksInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.taskList != null && { taskList: se_TaskList(input.taskList, context) }),
  };
};

/**
 * serializeAws_json1_0Decision
 */
const se_Decision = (input: Decision, context: __SerdeContext): any => {
  return {
    ...(input.cancelTimerDecisionAttributes != null && {
      cancelTimerDecisionAttributes: se_CancelTimerDecisionAttributes(input.cancelTimerDecisionAttributes, context),
    }),
    ...(input.cancelWorkflowExecutionDecisionAttributes != null && {
      cancelWorkflowExecutionDecisionAttributes: se_CancelWorkflowExecutionDecisionAttributes(
        input.cancelWorkflowExecutionDecisionAttributes,
        context
      ),
    }),
    ...(input.completeWorkflowExecutionDecisionAttributes != null && {
      completeWorkflowExecutionDecisionAttributes: se_CompleteWorkflowExecutionDecisionAttributes(
        input.completeWorkflowExecutionDecisionAttributes,
        context
      ),
    }),
    ...(input.continueAsNewWorkflowExecutionDecisionAttributes != null && {
      continueAsNewWorkflowExecutionDecisionAttributes: se_ContinueAsNewWorkflowExecutionDecisionAttributes(
        input.continueAsNewWorkflowExecutionDecisionAttributes,
        context
      ),
    }),
    ...(input.decisionType != null && { decisionType: input.decisionType }),
    ...(input.failWorkflowExecutionDecisionAttributes != null && {
      failWorkflowExecutionDecisionAttributes: se_FailWorkflowExecutionDecisionAttributes(
        input.failWorkflowExecutionDecisionAttributes,
        context
      ),
    }),
    ...(input.recordMarkerDecisionAttributes != null && {
      recordMarkerDecisionAttributes: se_RecordMarkerDecisionAttributes(input.recordMarkerDecisionAttributes, context),
    }),
    ...(input.requestCancelActivityTaskDecisionAttributes != null && {
      requestCancelActivityTaskDecisionAttributes: se_RequestCancelActivityTaskDecisionAttributes(
        input.requestCancelActivityTaskDecisionAttributes,
        context
      ),
    }),
    ...(input.requestCancelExternalWorkflowExecutionDecisionAttributes != null && {
      requestCancelExternalWorkflowExecutionDecisionAttributes:
        se_RequestCancelExternalWorkflowExecutionDecisionAttributes(
          input.requestCancelExternalWorkflowExecutionDecisionAttributes,
          context
        ),
    }),
    ...(input.scheduleActivityTaskDecisionAttributes != null && {
      scheduleActivityTaskDecisionAttributes: se_ScheduleActivityTaskDecisionAttributes(
        input.scheduleActivityTaskDecisionAttributes,
        context
      ),
    }),
    ...(input.scheduleLambdaFunctionDecisionAttributes != null && {
      scheduleLambdaFunctionDecisionAttributes: se_ScheduleLambdaFunctionDecisionAttributes(
        input.scheduleLambdaFunctionDecisionAttributes,
        context
      ),
    }),
    ...(input.signalExternalWorkflowExecutionDecisionAttributes != null && {
      signalExternalWorkflowExecutionDecisionAttributes: se_SignalExternalWorkflowExecutionDecisionAttributes(
        input.signalExternalWorkflowExecutionDecisionAttributes,
        context
      ),
    }),
    ...(input.startChildWorkflowExecutionDecisionAttributes != null && {
      startChildWorkflowExecutionDecisionAttributes: se_StartChildWorkflowExecutionDecisionAttributes(
        input.startChildWorkflowExecutionDecisionAttributes,
        context
      ),
    }),
    ...(input.startTimerDecisionAttributes != null && {
      startTimerDecisionAttributes: se_StartTimerDecisionAttributes(input.startTimerDecisionAttributes, context),
    }),
  };
};

/**
 * serializeAws_json1_0DecisionList
 */
const se_DecisionList = (input: Decision[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Decision(entry, context);
    });
};

/**
 * serializeAws_json1_0DeprecateActivityTypeInput
 */
const se_DeprecateActivityTypeInput = (input: DeprecateActivityTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.activityType != null && { activityType: se_ActivityType(input.activityType, context) }),
    ...(input.domain != null && { domain: input.domain }),
  };
};

/**
 * serializeAws_json1_0DeprecateDomainInput
 */
const se_DeprecateDomainInput = (input: DeprecateDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeprecateWorkflowTypeInput
 */
const se_DeprecateWorkflowTypeInput = (input: DeprecateWorkflowTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.workflowType != null && { workflowType: se_WorkflowType(input.workflowType, context) }),
  };
};

/**
 * serializeAws_json1_0DescribeActivityTypeInput
 */
const se_DescribeActivityTypeInput = (input: DescribeActivityTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.activityType != null && { activityType: se_ActivityType(input.activityType, context) }),
    ...(input.domain != null && { domain: input.domain }),
  };
};

/**
 * serializeAws_json1_0DescribeDomainInput
 */
const se_DescribeDomainInput = (input: DescribeDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DescribeWorkflowExecutionInput
 */
const se_DescribeWorkflowExecutionInput = (input: DescribeWorkflowExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.execution != null && { execution: se_WorkflowExecution(input.execution, context) }),
  };
};

/**
 * serializeAws_json1_0DescribeWorkflowTypeInput
 */
const se_DescribeWorkflowTypeInput = (input: DescribeWorkflowTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.workflowType != null && { workflowType: se_WorkflowType(input.workflowType, context) }),
  };
};

/**
 * serializeAws_json1_0ExecutionTimeFilter
 */
const se_ExecutionTimeFilter = (input: ExecutionTimeFilter, context: __SerdeContext): any => {
  return {
    ...(input.latestDate != null && { latestDate: Math.round(input.latestDate.getTime() / 1000) }),
    ...(input.oldestDate != null && { oldestDate: Math.round(input.oldestDate.getTime() / 1000) }),
  };
};

/**
 * serializeAws_json1_0FailWorkflowExecutionDecisionAttributes
 */
const se_FailWorkflowExecutionDecisionAttributes = (
  input: FailWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.details != null && { details: input.details }),
    ...(input.reason != null && { reason: input.reason }),
  };
};

/**
 * serializeAws_json1_0GetWorkflowExecutionHistoryInput
 */
const se_GetWorkflowExecutionHistoryInput = (input: GetWorkflowExecutionHistoryInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.execution != null && { execution: se_WorkflowExecution(input.execution, context) }),
    ...(input.maximumPageSize != null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken != null && { nextPageToken: input.nextPageToken }),
    ...(input.reverseOrder != null && { reverseOrder: input.reverseOrder }),
  };
};

/**
 * serializeAws_json1_0ListActivityTypesInput
 */
const se_ListActivityTypesInput = (input: ListActivityTypesInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.maximumPageSize != null && { maximumPageSize: input.maximumPageSize }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextPageToken != null && { nextPageToken: input.nextPageToken }),
    ...(input.registrationStatus != null && { registrationStatus: input.registrationStatus }),
    ...(input.reverseOrder != null && { reverseOrder: input.reverseOrder }),
  };
};

/**
 * serializeAws_json1_0ListClosedWorkflowExecutionsInput
 */
const se_ListClosedWorkflowExecutionsInput = (
  input: ListClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.closeStatusFilter != null && {
      closeStatusFilter: se_CloseStatusFilter(input.closeStatusFilter, context),
    }),
    ...(input.closeTimeFilter != null && { closeTimeFilter: se_ExecutionTimeFilter(input.closeTimeFilter, context) }),
    ...(input.domain != null && { domain: input.domain }),
    ...(input.executionFilter != null && {
      executionFilter: se_WorkflowExecutionFilter(input.executionFilter, context),
    }),
    ...(input.maximumPageSize != null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken != null && { nextPageToken: input.nextPageToken }),
    ...(input.reverseOrder != null && { reverseOrder: input.reverseOrder }),
    ...(input.startTimeFilter != null && { startTimeFilter: se_ExecutionTimeFilter(input.startTimeFilter, context) }),
    ...(input.tagFilter != null && { tagFilter: se_TagFilter(input.tagFilter, context) }),
    ...(input.typeFilter != null && { typeFilter: se_WorkflowTypeFilter(input.typeFilter, context) }),
  };
};

/**
 * serializeAws_json1_0ListDomainsInput
 */
const se_ListDomainsInput = (input: ListDomainsInput, context: __SerdeContext): any => {
  return {
    ...(input.maximumPageSize != null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken != null && { nextPageToken: input.nextPageToken }),
    ...(input.registrationStatus != null && { registrationStatus: input.registrationStatus }),
    ...(input.reverseOrder != null && { reverseOrder: input.reverseOrder }),
  };
};

/**
 * serializeAws_json1_0ListOpenWorkflowExecutionsInput
 */
const se_ListOpenWorkflowExecutionsInput = (input: ListOpenWorkflowExecutionsInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.executionFilter != null && {
      executionFilter: se_WorkflowExecutionFilter(input.executionFilter, context),
    }),
    ...(input.maximumPageSize != null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken != null && { nextPageToken: input.nextPageToken }),
    ...(input.reverseOrder != null && { reverseOrder: input.reverseOrder }),
    ...(input.startTimeFilter != null && { startTimeFilter: se_ExecutionTimeFilter(input.startTimeFilter, context) }),
    ...(input.tagFilter != null && { tagFilter: se_TagFilter(input.tagFilter, context) }),
    ...(input.typeFilter != null && { typeFilter: se_WorkflowTypeFilter(input.typeFilter, context) }),
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
 * serializeAws_json1_0ListWorkflowTypesInput
 */
const se_ListWorkflowTypesInput = (input: ListWorkflowTypesInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.maximumPageSize != null && { maximumPageSize: input.maximumPageSize }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextPageToken != null && { nextPageToken: input.nextPageToken }),
    ...(input.registrationStatus != null && { registrationStatus: input.registrationStatus }),
    ...(input.reverseOrder != null && { reverseOrder: input.reverseOrder }),
  };
};

/**
 * serializeAws_json1_0PollForActivityTaskInput
 */
const se_PollForActivityTaskInput = (input: PollForActivityTaskInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.identity != null && { identity: input.identity }),
    ...(input.taskList != null && { taskList: se_TaskList(input.taskList, context) }),
  };
};

/**
 * serializeAws_json1_0PollForDecisionTaskInput
 */
const se_PollForDecisionTaskInput = (input: PollForDecisionTaskInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.identity != null && { identity: input.identity }),
    ...(input.maximumPageSize != null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken != null && { nextPageToken: input.nextPageToken }),
    ...(input.reverseOrder != null && { reverseOrder: input.reverseOrder }),
    ...(input.taskList != null && { taskList: se_TaskList(input.taskList, context) }),
  };
};

/**
 * serializeAws_json1_0RecordActivityTaskHeartbeatInput
 */
const se_RecordActivityTaskHeartbeatInput = (input: RecordActivityTaskHeartbeatInput, context: __SerdeContext): any => {
  return {
    ...(input.details != null && { details: input.details }),
    ...(input.taskToken != null && { taskToken: input.taskToken }),
  };
};

/**
 * serializeAws_json1_0RecordMarkerDecisionAttributes
 */
const se_RecordMarkerDecisionAttributes = (input: RecordMarkerDecisionAttributes, context: __SerdeContext): any => {
  return {
    ...(input.details != null && { details: input.details }),
    ...(input.markerName != null && { markerName: input.markerName }),
  };
};

/**
 * serializeAws_json1_0RegisterActivityTypeInput
 */
const se_RegisterActivityTypeInput = (input: RegisterActivityTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.defaultTaskHeartbeatTimeout != null && {
      defaultTaskHeartbeatTimeout: input.defaultTaskHeartbeatTimeout,
    }),
    ...(input.defaultTaskList != null && { defaultTaskList: se_TaskList(input.defaultTaskList, context) }),
    ...(input.defaultTaskPriority != null && { defaultTaskPriority: input.defaultTaskPriority }),
    ...(input.defaultTaskScheduleToCloseTimeout != null && {
      defaultTaskScheduleToCloseTimeout: input.defaultTaskScheduleToCloseTimeout,
    }),
    ...(input.defaultTaskScheduleToStartTimeout != null && {
      defaultTaskScheduleToStartTimeout: input.defaultTaskScheduleToStartTimeout,
    }),
    ...(input.defaultTaskStartToCloseTimeout != null && {
      defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.domain != null && { domain: input.domain }),
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_0RegisterDomainInput
 */
const se_RegisterDomainInput = (input: RegisterDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_ResourceTagList(input.tags, context) }),
    ...(input.workflowExecutionRetentionPeriodInDays != null && {
      workflowExecutionRetentionPeriodInDays: input.workflowExecutionRetentionPeriodInDays,
    }),
  };
};

/**
 * serializeAws_json1_0RegisterWorkflowTypeInput
 */
const se_RegisterWorkflowTypeInput = (input: RegisterWorkflowTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.defaultChildPolicy != null && { defaultChildPolicy: input.defaultChildPolicy }),
    ...(input.defaultExecutionStartToCloseTimeout != null && {
      defaultExecutionStartToCloseTimeout: input.defaultExecutionStartToCloseTimeout,
    }),
    ...(input.defaultLambdaRole != null && { defaultLambdaRole: input.defaultLambdaRole }),
    ...(input.defaultTaskList != null && { defaultTaskList: se_TaskList(input.defaultTaskList, context) }),
    ...(input.defaultTaskPriority != null && { defaultTaskPriority: input.defaultTaskPriority }),
    ...(input.defaultTaskStartToCloseTimeout != null && {
      defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.domain != null && { domain: input.domain }),
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes
 */
const se_RequestCancelActivityTaskDecisionAttributes = (
  input: RequestCancelActivityTaskDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityId != null && { activityId: input.activityId }),
  };
};

/**
 * serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes
 */
const se_RequestCancelExternalWorkflowExecutionDecisionAttributes = (
  input: RequestCancelExternalWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control != null && { control: input.control }),
    ...(input.runId != null && { runId: input.runId }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
  };
};

/**
 * serializeAws_json1_0RequestCancelWorkflowExecutionInput
 */
const se_RequestCancelWorkflowExecutionInput = (
  input: RequestCancelWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.runId != null && { runId: input.runId }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
  };
};

/**
 * serializeAws_json1_0ResourceTag
 */
const se_ResourceTag = (input: ResourceTag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_0ResourceTagKeyList
 */
const se_ResourceTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0ResourceTagList
 */
const se_ResourceTagList = (input: ResourceTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResourceTag(entry, context);
    });
};

/**
 * serializeAws_json1_0RespondActivityTaskCanceledInput
 */
const se_RespondActivityTaskCanceledInput = (input: RespondActivityTaskCanceledInput, context: __SerdeContext): any => {
  return {
    ...(input.details != null && { details: input.details }),
    ...(input.taskToken != null && { taskToken: input.taskToken }),
  };
};

/**
 * serializeAws_json1_0RespondActivityTaskCompletedInput
 */
const se_RespondActivityTaskCompletedInput = (
  input: RespondActivityTaskCompletedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.result != null && { result: input.result }),
    ...(input.taskToken != null && { taskToken: input.taskToken }),
  };
};

/**
 * serializeAws_json1_0RespondActivityTaskFailedInput
 */
const se_RespondActivityTaskFailedInput = (input: RespondActivityTaskFailedInput, context: __SerdeContext): any => {
  return {
    ...(input.details != null && { details: input.details }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.taskToken != null && { taskToken: input.taskToken }),
  };
};

/**
 * serializeAws_json1_0RespondDecisionTaskCompletedInput
 */
const se_RespondDecisionTaskCompletedInput = (
  input: RespondDecisionTaskCompletedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.decisions != null && { decisions: se_DecisionList(input.decisions, context) }),
    ...(input.executionContext != null && { executionContext: input.executionContext }),
    ...(input.taskToken != null && { taskToken: input.taskToken }),
  };
};

/**
 * serializeAws_json1_0ScheduleActivityTaskDecisionAttributes
 */
const se_ScheduleActivityTaskDecisionAttributes = (
  input: ScheduleActivityTaskDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityId != null && { activityId: input.activityId }),
    ...(input.activityType != null && { activityType: se_ActivityType(input.activityType, context) }),
    ...(input.control != null && { control: input.control }),
    ...(input.heartbeatTimeout != null && { heartbeatTimeout: input.heartbeatTimeout }),
    ...(input.input != null && { input: input.input }),
    ...(input.scheduleToCloseTimeout != null && { scheduleToCloseTimeout: input.scheduleToCloseTimeout }),
    ...(input.scheduleToStartTimeout != null && { scheduleToStartTimeout: input.scheduleToStartTimeout }),
    ...(input.startToCloseTimeout != null && { startToCloseTimeout: input.startToCloseTimeout }),
    ...(input.taskList != null && { taskList: se_TaskList(input.taskList, context) }),
    ...(input.taskPriority != null && { taskPriority: input.taskPriority }),
  };
};

/**
 * serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes
 */
const se_ScheduleLambdaFunctionDecisionAttributes = (
  input: ScheduleLambdaFunctionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control != null && { control: input.control }),
    ...(input.id != null && { id: input.id }),
    ...(input.input != null && { input: input.input }),
    ...(input.name != null && { name: input.name }),
    ...(input.startToCloseTimeout != null && { startToCloseTimeout: input.startToCloseTimeout }),
  };
};

/**
 * serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes
 */
const se_SignalExternalWorkflowExecutionDecisionAttributes = (
  input: SignalExternalWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control != null && { control: input.control }),
    ...(input.input != null && { input: input.input }),
    ...(input.runId != null && { runId: input.runId }),
    ...(input.signalName != null && { signalName: input.signalName }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
  };
};

/**
 * serializeAws_json1_0SignalWorkflowExecutionInput
 */
const se_SignalWorkflowExecutionInput = (input: SignalWorkflowExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.input != null && { input: input.input }),
    ...(input.runId != null && { runId: input.runId }),
    ...(input.signalName != null && { signalName: input.signalName }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
  };
};

/**
 * serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes
 */
const se_StartChildWorkflowExecutionDecisionAttributes = (
  input: StartChildWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy != null && { childPolicy: input.childPolicy }),
    ...(input.control != null && { control: input.control }),
    ...(input.executionStartToCloseTimeout != null && {
      executionStartToCloseTimeout: input.executionStartToCloseTimeout,
    }),
    ...(input.input != null && { input: input.input }),
    ...(input.lambdaRole != null && { lambdaRole: input.lambdaRole }),
    ...(input.tagList != null && { tagList: se_TagList(input.tagList, context) }),
    ...(input.taskList != null && { taskList: se_TaskList(input.taskList, context) }),
    ...(input.taskPriority != null && { taskPriority: input.taskPriority }),
    ...(input.taskStartToCloseTimeout != null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
    ...(input.workflowType != null && { workflowType: se_WorkflowType(input.workflowType, context) }),
  };
};

/**
 * serializeAws_json1_0StartTimerDecisionAttributes
 */
const se_StartTimerDecisionAttributes = (input: StartTimerDecisionAttributes, context: __SerdeContext): any => {
  return {
    ...(input.control != null && { control: input.control }),
    ...(input.startToFireTimeout != null && { startToFireTimeout: input.startToFireTimeout }),
    ...(input.timerId != null && { timerId: input.timerId }),
  };
};

/**
 * serializeAws_json1_0StartWorkflowExecutionInput
 */
const se_StartWorkflowExecutionInput = (input: StartWorkflowExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.childPolicy != null && { childPolicy: input.childPolicy }),
    ...(input.domain != null && { domain: input.domain }),
    ...(input.executionStartToCloseTimeout != null && {
      executionStartToCloseTimeout: input.executionStartToCloseTimeout,
    }),
    ...(input.input != null && { input: input.input }),
    ...(input.lambdaRole != null && { lambdaRole: input.lambdaRole }),
    ...(input.tagList != null && { tagList: se_TagList(input.tagList, context) }),
    ...(input.taskList != null && { taskList: se_TaskList(input.taskList, context) }),
    ...(input.taskPriority != null && { taskPriority: input.taskPriority }),
    ...(input.taskStartToCloseTimeout != null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
    ...(input.workflowType != null && { workflowType: se_WorkflowType(input.workflowType, context) }),
  };
};

/**
 * serializeAws_json1_0TagFilter
 */
const se_TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.tag != null && { tag: input.tag }),
  };
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_ResourceTagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0TaskList
 */
const se_TaskList = (input: TaskList, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0TerminateWorkflowExecutionInput
 */
const se_TerminateWorkflowExecutionInput = (input: TerminateWorkflowExecutionInput, context: __SerdeContext): any => {
  return {
    ...(input.childPolicy != null && { childPolicy: input.childPolicy }),
    ...(input.details != null && { details: input.details }),
    ...(input.domain != null && { domain: input.domain }),
    ...(input.reason != null && { reason: input.reason }),
    ...(input.runId != null && { runId: input.runId }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
  };
};

/**
 * serializeAws_json1_0UndeprecateActivityTypeInput
 */
const se_UndeprecateActivityTypeInput = (input: UndeprecateActivityTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.activityType != null && { activityType: se_ActivityType(input.activityType, context) }),
    ...(input.domain != null && { domain: input.domain }),
  };
};

/**
 * serializeAws_json1_0UndeprecateDomainInput
 */
const se_UndeprecateDomainInput = (input: UndeprecateDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0UndeprecateWorkflowTypeInput
 */
const se_UndeprecateWorkflowTypeInput = (input: UndeprecateWorkflowTypeInput, context: __SerdeContext): any => {
  return {
    ...(input.domain != null && { domain: input.domain }),
    ...(input.workflowType != null && { workflowType: se_WorkflowType(input.workflowType, context) }),
  };
};

/**
 * serializeAws_json1_0UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_ResourceTagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0WorkflowExecution
 */
const se_WorkflowExecution = (input: WorkflowExecution, context: __SerdeContext): any => {
  return {
    ...(input.runId != null && { runId: input.runId }),
    ...(input.workflowId != null && { workflowId: input.workflowId }),
  };
};

/**
 * serializeAws_json1_0WorkflowExecutionFilter
 */
const se_WorkflowExecutionFilter = (input: WorkflowExecutionFilter, context: __SerdeContext): any => {
  return {
    ...(input.workflowId != null && { workflowId: input.workflowId }),
  };
};

/**
 * serializeAws_json1_0WorkflowType
 */
const se_WorkflowType = (input: WorkflowType, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_json1_0WorkflowTypeFilter
 */
const se_WorkflowTypeFilter = (input: WorkflowTypeFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * deserializeAws_json1_0ActivityTask
 */
const de_ActivityTask = (output: any, context: __SerdeContext): ActivityTask => {
  return {
    activityId: __expectString(output.activityId),
    activityType: output.activityType != null ? de_ActivityType(output.activityType, context) : undefined,
    input: __expectString(output.input),
    startedEventId: __expectLong(output.startedEventId),
    taskToken: __expectString(output.taskToken),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTaskCanceledEventAttributes
 */
const de_ActivityTaskCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCanceledEventAttributes => {
  return {
    details: __expectString(output.details),
    latestCancelRequestedEventId: __expectLong(output.latestCancelRequestedEventId),
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes
 */
const de_ActivityTaskCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCancelRequestedEventAttributes => {
  return {
    activityId: __expectString(output.activityId),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTaskCompletedEventAttributes
 */
const de_ActivityTaskCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCompletedEventAttributes => {
  return {
    result: __expectString(output.result),
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTaskFailedEventAttributes
 */
const de_ActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskFailedEventAttributes => {
  return {
    details: __expectString(output.details),
    reason: __expectString(output.reason),
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTaskScheduledEventAttributes
 */
const de_ActivityTaskScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskScheduledEventAttributes => {
  return {
    activityId: __expectString(output.activityId),
    activityType: output.activityType != null ? de_ActivityType(output.activityType, context) : undefined,
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    heartbeatTimeout: __expectString(output.heartbeatTimeout),
    input: __expectString(output.input),
    scheduleToCloseTimeout: __expectString(output.scheduleToCloseTimeout),
    scheduleToStartTimeout: __expectString(output.scheduleToStartTimeout),
    startToCloseTimeout: __expectString(output.startToCloseTimeout),
    taskList: output.taskList != null ? de_TaskList(output.taskList, context) : undefined,
    taskPriority: __expectString(output.taskPriority),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTaskStartedEventAttributes
 */
const de_ActivityTaskStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskStartedEventAttributes => {
  return {
    identity: __expectString(output.identity),
    scheduledEventId: __expectLong(output.scheduledEventId),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTaskStatus
 */
const de_ActivityTaskStatus = (output: any, context: __SerdeContext): ActivityTaskStatus => {
  return {
    cancelRequested: __expectBoolean(output.cancelRequested),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTaskTimedOutEventAttributes
 */
const de_ActivityTaskTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskTimedOutEventAttributes => {
  return {
    details: __expectString(output.details),
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
    timeoutType: __expectString(output.timeoutType),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityType
 */
const de_ActivityType = (output: any, context: __SerdeContext): ActivityType => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTypeConfiguration
 */
const de_ActivityTypeConfiguration = (output: any, context: __SerdeContext): ActivityTypeConfiguration => {
  return {
    defaultTaskHeartbeatTimeout: __expectString(output.defaultTaskHeartbeatTimeout),
    defaultTaskList: output.defaultTaskList != null ? de_TaskList(output.defaultTaskList, context) : undefined,
    defaultTaskPriority: __expectString(output.defaultTaskPriority),
    defaultTaskScheduleToCloseTimeout: __expectString(output.defaultTaskScheduleToCloseTimeout),
    defaultTaskScheduleToStartTimeout: __expectString(output.defaultTaskScheduleToStartTimeout),
    defaultTaskStartToCloseTimeout: __expectString(output.defaultTaskStartToCloseTimeout),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTypeDetail
 */
const de_ActivityTypeDetail = (output: any, context: __SerdeContext): ActivityTypeDetail => {
  return {
    configuration:
      output.configuration != null ? de_ActivityTypeConfiguration(output.configuration, context) : undefined,
    typeInfo: output.typeInfo != null ? de_ActivityTypeInfo(output.typeInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTypeInfo
 */
const de_ActivityTypeInfo = (output: any, context: __SerdeContext): ActivityTypeInfo => {
  return {
    activityType: output.activityType != null ? de_ActivityType(output.activityType, context) : undefined,
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    deprecationDate:
      output.deprecationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.deprecationDate)))
        : undefined,
    description: __expectString(output.description),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0ActivityTypeInfoList
 */
const de_ActivityTypeInfoList = (output: any, context: __SerdeContext): ActivityTypeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ActivityTypeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ActivityTypeInfos
 */
const de_ActivityTypeInfos = (output: any, context: __SerdeContext): ActivityTypeInfos => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    typeInfos: output.typeInfos != null ? de_ActivityTypeInfoList(output.typeInfos, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CancelTimerFailedEventAttributes
 */
const de_CancelTimerFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CancelTimerFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    timerId: __expectString(output.timerId),
  } as any;
};

/**
 * deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes
 */
const de_CancelWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CancelWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes
 */
const de_ChildWorkflowExecutionCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionCanceledEventAttributes => {
  return {
    details: __expectString(output.details),
    initiatedEventId: __expectLong(output.initiatedEventId),
    startedEventId: __expectLong(output.startedEventId),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes
 */
const de_ChildWorkflowExecutionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionCompletedEventAttributes => {
  return {
    initiatedEventId: __expectLong(output.initiatedEventId),
    result: __expectString(output.result),
    startedEventId: __expectLong(output.startedEventId),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes
 */
const de_ChildWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionFailedEventAttributes => {
  return {
    details: __expectString(output.details),
    initiatedEventId: __expectLong(output.initiatedEventId),
    reason: __expectString(output.reason),
    startedEventId: __expectLong(output.startedEventId),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes
 */
const de_ChildWorkflowExecutionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionStartedEventAttributes => {
  return {
    initiatedEventId: __expectLong(output.initiatedEventId),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes
 */
const de_ChildWorkflowExecutionTerminatedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionTerminatedEventAttributes => {
  return {
    initiatedEventId: __expectLong(output.initiatedEventId),
    startedEventId: __expectLong(output.startedEventId),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes
 */
const de_ChildWorkflowExecutionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionTimedOutEventAttributes => {
  return {
    initiatedEventId: __expectLong(output.initiatedEventId),
    startedEventId: __expectLong(output.startedEventId),
    timeoutType: __expectString(output.timeoutType),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes
 */
const de_CompleteWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CompleteWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes
 */
const de_ContinueAsNewWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ContinueAsNewWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0DecisionTask
 */
const de_DecisionTask = (output: any, context: __SerdeContext): DecisionTask => {
  return {
    events: output.events != null ? de_HistoryEventList(output.events, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
    previousStartedEventId: __expectLong(output.previousStartedEventId),
    startedEventId: __expectLong(output.startedEventId),
    taskToken: __expectString(output.taskToken),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DecisionTaskCompletedEventAttributes
 */
const de_DecisionTaskCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskCompletedEventAttributes => {
  return {
    executionContext: __expectString(output.executionContext),
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0DecisionTaskScheduledEventAttributes
 */
const de_DecisionTaskScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskScheduledEventAttributes => {
  return {
    startToCloseTimeout: __expectString(output.startToCloseTimeout),
    taskList: output.taskList != null ? de_TaskList(output.taskList, context) : undefined,
    taskPriority: __expectString(output.taskPriority),
  } as any;
};

/**
 * deserializeAws_json1_0DecisionTaskStartedEventAttributes
 */
const de_DecisionTaskStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskStartedEventAttributes => {
  return {
    identity: __expectString(output.identity),
    scheduledEventId: __expectLong(output.scheduledEventId),
  } as any;
};

/**
 * deserializeAws_json1_0DecisionTaskTimedOutEventAttributes
 */
const de_DecisionTaskTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskTimedOutEventAttributes => {
  return {
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
    timeoutType: __expectString(output.timeoutType),
  } as any;
};

/**
 * deserializeAws_json1_0DefaultUndefinedFault
 */
const de_DefaultUndefinedFault = (output: any, context: __SerdeContext): DefaultUndefinedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0DomainAlreadyExistsFault
 */
const de_DomainAlreadyExistsFault = (output: any, context: __SerdeContext): DomainAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0DomainConfiguration
 */
const de_DomainConfiguration = (output: any, context: __SerdeContext): DomainConfiguration => {
  return {
    workflowExecutionRetentionPeriodInDays: __expectString(output.workflowExecutionRetentionPeriodInDays),
  } as any;
};

/**
 * deserializeAws_json1_0DomainDeprecatedFault
 */
const de_DomainDeprecatedFault = (output: any, context: __SerdeContext): DomainDeprecatedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0DomainDetail
 */
const de_DomainDetail = (output: any, context: __SerdeContext): DomainDetail => {
  return {
    configuration: output.configuration != null ? de_DomainConfiguration(output.configuration, context) : undefined,
    domainInfo: output.domainInfo != null ? de_DomainInfo(output.domainInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DomainInfo
 */
const de_DomainInfo = (output: any, context: __SerdeContext): DomainInfo => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0DomainInfoList
 */
const de_DomainInfoList = (output: any, context: __SerdeContext): DomainInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DomainInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DomainInfos
 */
const de_DomainInfos = (output: any, context: __SerdeContext): DomainInfos => {
  return {
    domainInfos: output.domainInfos != null ? de_DomainInfoList(output.domainInfos, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes
 */
const de_ExternalWorkflowExecutionCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): ExternalWorkflowExecutionCancelRequestedEventAttributes => {
  return {
    initiatedEventId: __expectLong(output.initiatedEventId),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes
 */
const de_ExternalWorkflowExecutionSignaledEventAttributes = (
  output: any,
  context: __SerdeContext
): ExternalWorkflowExecutionSignaledEventAttributes => {
  return {
    initiatedEventId: __expectLong(output.initiatedEventId),
    workflowExecution:
      output.workflowExecution != null ? de_WorkflowExecution(output.workflowExecution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes
 */
const de_FailWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): FailWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0History
 */
const de_History = (output: any, context: __SerdeContext): History => {
  return {
    events: output.events != null ? de_HistoryEventList(output.events, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_0HistoryEvent
 */
const de_HistoryEvent = (output: any, context: __SerdeContext): HistoryEvent => {
  return {
    activityTaskCancelRequestedEventAttributes:
      output.activityTaskCancelRequestedEventAttributes != null
        ? de_ActivityTaskCancelRequestedEventAttributes(output.activityTaskCancelRequestedEventAttributes, context)
        : undefined,
    activityTaskCanceledEventAttributes:
      output.activityTaskCanceledEventAttributes != null
        ? de_ActivityTaskCanceledEventAttributes(output.activityTaskCanceledEventAttributes, context)
        : undefined,
    activityTaskCompletedEventAttributes:
      output.activityTaskCompletedEventAttributes != null
        ? de_ActivityTaskCompletedEventAttributes(output.activityTaskCompletedEventAttributes, context)
        : undefined,
    activityTaskFailedEventAttributes:
      output.activityTaskFailedEventAttributes != null
        ? de_ActivityTaskFailedEventAttributes(output.activityTaskFailedEventAttributes, context)
        : undefined,
    activityTaskScheduledEventAttributes:
      output.activityTaskScheduledEventAttributes != null
        ? de_ActivityTaskScheduledEventAttributes(output.activityTaskScheduledEventAttributes, context)
        : undefined,
    activityTaskStartedEventAttributes:
      output.activityTaskStartedEventAttributes != null
        ? de_ActivityTaskStartedEventAttributes(output.activityTaskStartedEventAttributes, context)
        : undefined,
    activityTaskTimedOutEventAttributes:
      output.activityTaskTimedOutEventAttributes != null
        ? de_ActivityTaskTimedOutEventAttributes(output.activityTaskTimedOutEventAttributes, context)
        : undefined,
    cancelTimerFailedEventAttributes:
      output.cancelTimerFailedEventAttributes != null
        ? de_CancelTimerFailedEventAttributes(output.cancelTimerFailedEventAttributes, context)
        : undefined,
    cancelWorkflowExecutionFailedEventAttributes:
      output.cancelWorkflowExecutionFailedEventAttributes != null
        ? de_CancelWorkflowExecutionFailedEventAttributes(output.cancelWorkflowExecutionFailedEventAttributes, context)
        : undefined,
    childWorkflowExecutionCanceledEventAttributes:
      output.childWorkflowExecutionCanceledEventAttributes != null
        ? de_ChildWorkflowExecutionCanceledEventAttributes(
            output.childWorkflowExecutionCanceledEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionCompletedEventAttributes:
      output.childWorkflowExecutionCompletedEventAttributes != null
        ? de_ChildWorkflowExecutionCompletedEventAttributes(
            output.childWorkflowExecutionCompletedEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionFailedEventAttributes:
      output.childWorkflowExecutionFailedEventAttributes != null
        ? de_ChildWorkflowExecutionFailedEventAttributes(output.childWorkflowExecutionFailedEventAttributes, context)
        : undefined,
    childWorkflowExecutionStartedEventAttributes:
      output.childWorkflowExecutionStartedEventAttributes != null
        ? de_ChildWorkflowExecutionStartedEventAttributes(output.childWorkflowExecutionStartedEventAttributes, context)
        : undefined,
    childWorkflowExecutionTerminatedEventAttributes:
      output.childWorkflowExecutionTerminatedEventAttributes != null
        ? de_ChildWorkflowExecutionTerminatedEventAttributes(
            output.childWorkflowExecutionTerminatedEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionTimedOutEventAttributes:
      output.childWorkflowExecutionTimedOutEventAttributes != null
        ? de_ChildWorkflowExecutionTimedOutEventAttributes(
            output.childWorkflowExecutionTimedOutEventAttributes,
            context
          )
        : undefined,
    completeWorkflowExecutionFailedEventAttributes:
      output.completeWorkflowExecutionFailedEventAttributes != null
        ? de_CompleteWorkflowExecutionFailedEventAttributes(
            output.completeWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    continueAsNewWorkflowExecutionFailedEventAttributes:
      output.continueAsNewWorkflowExecutionFailedEventAttributes != null
        ? de_ContinueAsNewWorkflowExecutionFailedEventAttributes(
            output.continueAsNewWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    decisionTaskCompletedEventAttributes:
      output.decisionTaskCompletedEventAttributes != null
        ? de_DecisionTaskCompletedEventAttributes(output.decisionTaskCompletedEventAttributes, context)
        : undefined,
    decisionTaskScheduledEventAttributes:
      output.decisionTaskScheduledEventAttributes != null
        ? de_DecisionTaskScheduledEventAttributes(output.decisionTaskScheduledEventAttributes, context)
        : undefined,
    decisionTaskStartedEventAttributes:
      output.decisionTaskStartedEventAttributes != null
        ? de_DecisionTaskStartedEventAttributes(output.decisionTaskStartedEventAttributes, context)
        : undefined,
    decisionTaskTimedOutEventAttributes:
      output.decisionTaskTimedOutEventAttributes != null
        ? de_DecisionTaskTimedOutEventAttributes(output.decisionTaskTimedOutEventAttributes, context)
        : undefined,
    eventId: __expectLong(output.eventId),
    eventTimestamp:
      output.eventTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventTimestamp)))
        : undefined,
    eventType: __expectString(output.eventType),
    externalWorkflowExecutionCancelRequestedEventAttributes:
      output.externalWorkflowExecutionCancelRequestedEventAttributes != null
        ? de_ExternalWorkflowExecutionCancelRequestedEventAttributes(
            output.externalWorkflowExecutionCancelRequestedEventAttributes,
            context
          )
        : undefined,
    externalWorkflowExecutionSignaledEventAttributes:
      output.externalWorkflowExecutionSignaledEventAttributes != null
        ? de_ExternalWorkflowExecutionSignaledEventAttributes(
            output.externalWorkflowExecutionSignaledEventAttributes,
            context
          )
        : undefined,
    failWorkflowExecutionFailedEventAttributes:
      output.failWorkflowExecutionFailedEventAttributes != null
        ? de_FailWorkflowExecutionFailedEventAttributes(output.failWorkflowExecutionFailedEventAttributes, context)
        : undefined,
    lambdaFunctionCompletedEventAttributes:
      output.lambdaFunctionCompletedEventAttributes != null
        ? de_LambdaFunctionCompletedEventAttributes(output.lambdaFunctionCompletedEventAttributes, context)
        : undefined,
    lambdaFunctionFailedEventAttributes:
      output.lambdaFunctionFailedEventAttributes != null
        ? de_LambdaFunctionFailedEventAttributes(output.lambdaFunctionFailedEventAttributes, context)
        : undefined,
    lambdaFunctionScheduledEventAttributes:
      output.lambdaFunctionScheduledEventAttributes != null
        ? de_LambdaFunctionScheduledEventAttributes(output.lambdaFunctionScheduledEventAttributes, context)
        : undefined,
    lambdaFunctionStartedEventAttributes:
      output.lambdaFunctionStartedEventAttributes != null
        ? de_LambdaFunctionStartedEventAttributes(output.lambdaFunctionStartedEventAttributes, context)
        : undefined,
    lambdaFunctionTimedOutEventAttributes:
      output.lambdaFunctionTimedOutEventAttributes != null
        ? de_LambdaFunctionTimedOutEventAttributes(output.lambdaFunctionTimedOutEventAttributes, context)
        : undefined,
    markerRecordedEventAttributes:
      output.markerRecordedEventAttributes != null
        ? de_MarkerRecordedEventAttributes(output.markerRecordedEventAttributes, context)
        : undefined,
    recordMarkerFailedEventAttributes:
      output.recordMarkerFailedEventAttributes != null
        ? de_RecordMarkerFailedEventAttributes(output.recordMarkerFailedEventAttributes, context)
        : undefined,
    requestCancelActivityTaskFailedEventAttributes:
      output.requestCancelActivityTaskFailedEventAttributes != null
        ? de_RequestCancelActivityTaskFailedEventAttributes(
            output.requestCancelActivityTaskFailedEventAttributes,
            context
          )
        : undefined,
    requestCancelExternalWorkflowExecutionFailedEventAttributes:
      output.requestCancelExternalWorkflowExecutionFailedEventAttributes != null
        ? de_RequestCancelExternalWorkflowExecutionFailedEventAttributes(
            output.requestCancelExternalWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes:
      output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes != null
        ? de_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(
            output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes,
            context
          )
        : undefined,
    scheduleActivityTaskFailedEventAttributes:
      output.scheduleActivityTaskFailedEventAttributes != null
        ? de_ScheduleActivityTaskFailedEventAttributes(output.scheduleActivityTaskFailedEventAttributes, context)
        : undefined,
    scheduleLambdaFunctionFailedEventAttributes:
      output.scheduleLambdaFunctionFailedEventAttributes != null
        ? de_ScheduleLambdaFunctionFailedEventAttributes(output.scheduleLambdaFunctionFailedEventAttributes, context)
        : undefined,
    signalExternalWorkflowExecutionFailedEventAttributes:
      output.signalExternalWorkflowExecutionFailedEventAttributes != null
        ? de_SignalExternalWorkflowExecutionFailedEventAttributes(
            output.signalExternalWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    signalExternalWorkflowExecutionInitiatedEventAttributes:
      output.signalExternalWorkflowExecutionInitiatedEventAttributes != null
        ? de_SignalExternalWorkflowExecutionInitiatedEventAttributes(
            output.signalExternalWorkflowExecutionInitiatedEventAttributes,
            context
          )
        : undefined,
    startChildWorkflowExecutionFailedEventAttributes:
      output.startChildWorkflowExecutionFailedEventAttributes != null
        ? de_StartChildWorkflowExecutionFailedEventAttributes(
            output.startChildWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    startChildWorkflowExecutionInitiatedEventAttributes:
      output.startChildWorkflowExecutionInitiatedEventAttributes != null
        ? de_StartChildWorkflowExecutionInitiatedEventAttributes(
            output.startChildWorkflowExecutionInitiatedEventAttributes,
            context
          )
        : undefined,
    startLambdaFunctionFailedEventAttributes:
      output.startLambdaFunctionFailedEventAttributes != null
        ? de_StartLambdaFunctionFailedEventAttributes(output.startLambdaFunctionFailedEventAttributes, context)
        : undefined,
    startTimerFailedEventAttributes:
      output.startTimerFailedEventAttributes != null
        ? de_StartTimerFailedEventAttributes(output.startTimerFailedEventAttributes, context)
        : undefined,
    timerCanceledEventAttributes:
      output.timerCanceledEventAttributes != null
        ? de_TimerCanceledEventAttributes(output.timerCanceledEventAttributes, context)
        : undefined,
    timerFiredEventAttributes:
      output.timerFiredEventAttributes != null
        ? de_TimerFiredEventAttributes(output.timerFiredEventAttributes, context)
        : undefined,
    timerStartedEventAttributes:
      output.timerStartedEventAttributes != null
        ? de_TimerStartedEventAttributes(output.timerStartedEventAttributes, context)
        : undefined,
    workflowExecutionCancelRequestedEventAttributes:
      output.workflowExecutionCancelRequestedEventAttributes != null
        ? de_WorkflowExecutionCancelRequestedEventAttributes(
            output.workflowExecutionCancelRequestedEventAttributes,
            context
          )
        : undefined,
    workflowExecutionCanceledEventAttributes:
      output.workflowExecutionCanceledEventAttributes != null
        ? de_WorkflowExecutionCanceledEventAttributes(output.workflowExecutionCanceledEventAttributes, context)
        : undefined,
    workflowExecutionCompletedEventAttributes:
      output.workflowExecutionCompletedEventAttributes != null
        ? de_WorkflowExecutionCompletedEventAttributes(output.workflowExecutionCompletedEventAttributes, context)
        : undefined,
    workflowExecutionContinuedAsNewEventAttributes:
      output.workflowExecutionContinuedAsNewEventAttributes != null
        ? de_WorkflowExecutionContinuedAsNewEventAttributes(
            output.workflowExecutionContinuedAsNewEventAttributes,
            context
          )
        : undefined,
    workflowExecutionFailedEventAttributes:
      output.workflowExecutionFailedEventAttributes != null
        ? de_WorkflowExecutionFailedEventAttributes(output.workflowExecutionFailedEventAttributes, context)
        : undefined,
    workflowExecutionSignaledEventAttributes:
      output.workflowExecutionSignaledEventAttributes != null
        ? de_WorkflowExecutionSignaledEventAttributes(output.workflowExecutionSignaledEventAttributes, context)
        : undefined,
    workflowExecutionStartedEventAttributes:
      output.workflowExecutionStartedEventAttributes != null
        ? de_WorkflowExecutionStartedEventAttributes(output.workflowExecutionStartedEventAttributes, context)
        : undefined,
    workflowExecutionTerminatedEventAttributes:
      output.workflowExecutionTerminatedEventAttributes != null
        ? de_WorkflowExecutionTerminatedEventAttributes(output.workflowExecutionTerminatedEventAttributes, context)
        : undefined,
    workflowExecutionTimedOutEventAttributes:
      output.workflowExecutionTimedOutEventAttributes != null
        ? de_WorkflowExecutionTimedOutEventAttributes(output.workflowExecutionTimedOutEventAttributes, context)
        : undefined,
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
 * deserializeAws_json1_0LambdaFunctionCompletedEventAttributes
 */
const de_LambdaFunctionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionCompletedEventAttributes => {
  return {
    result: __expectString(output.result),
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionFailedEventAttributes
 */
const de_LambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionFailedEventAttributes => {
  return {
    details: __expectString(output.details),
    reason: __expectString(output.reason),
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionScheduledEventAttributes
 */
const de_LambdaFunctionScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduledEventAttributes => {
  return {
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    id: __expectString(output.id),
    input: __expectString(output.input),
    name: __expectString(output.name),
    startToCloseTimeout: __expectString(output.startToCloseTimeout),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionStartedEventAttributes
 */
const de_LambdaFunctionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionStartedEventAttributes => {
  return {
    scheduledEventId: __expectLong(output.scheduledEventId),
  } as any;
};

/**
 * deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes
 */
const de_LambdaFunctionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionTimedOutEventAttributes => {
  return {
    scheduledEventId: __expectLong(output.scheduledEventId),
    startedEventId: __expectLong(output.startedEventId),
    timeoutType: __expectString(output.timeoutType),
  } as any;
};

/**
 * deserializeAws_json1_0LimitExceededFault
 */
const de_LimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    tags: output.tags != null ? de_ResourceTagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0MarkerRecordedEventAttributes
 */
const de_MarkerRecordedEventAttributes = (output: any, context: __SerdeContext): MarkerRecordedEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    details: __expectString(output.details),
    markerName: __expectString(output.markerName),
  } as any;
};

/**
 * deserializeAws_json1_0OperationNotPermittedFault
 */
const de_OperationNotPermittedFault = (output: any, context: __SerdeContext): OperationNotPermittedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0PendingTaskCount
 */
const de_PendingTaskCount = (output: any, context: __SerdeContext): PendingTaskCount => {
  return {
    count: __expectInt32(output.count),
    truncated: __expectBoolean(output.truncated),
  } as any;
};

/**
 * deserializeAws_json1_0RecordMarkerFailedEventAttributes
 */
const de_RecordMarkerFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RecordMarkerFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    markerName: __expectString(output.markerName),
  } as any;
};

/**
 * deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes
 */
const de_RequestCancelActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelActivityTaskFailedEventAttributes => {
  return {
    activityId: __expectString(output.activityId),
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes
 */
const de_RequestCancelExternalWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelExternalWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    initiatedEventId: __expectLong(output.initiatedEventId),
    runId: __expectString(output.runId),
    workflowId: __expectString(output.workflowId),
  } as any;
};

/**
 * deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
 */
const de_RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelExternalWorkflowExecutionInitiatedEventAttributes => {
  return {
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    runId: __expectString(output.runId),
    workflowId: __expectString(output.workflowId),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceTag
 */
const de_ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceTagList
 */
const de_ResourceTagList = (output: any, context: __SerdeContext): ResourceTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Run
 */
const de_Run = (output: any, context: __SerdeContext): Run => {
  return {
    runId: __expectString(output.runId),
  } as any;
};

/**
 * deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes
 */
const de_ScheduleActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ScheduleActivityTaskFailedEventAttributes => {
  return {
    activityId: __expectString(output.activityId),
    activityType: output.activityType != null ? de_ActivityType(output.activityType, context) : undefined,
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
  } as any;
};

/**
 * deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes
 */
const de_ScheduleLambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ScheduleLambdaFunctionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes
 */
const de_SignalExternalWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): SignalExternalWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    initiatedEventId: __expectLong(output.initiatedEventId),
    runId: __expectString(output.runId),
    workflowId: __expectString(output.workflowId),
  } as any;
};

/**
 * deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes
 */
const de_SignalExternalWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): SignalExternalWorkflowExecutionInitiatedEventAttributes => {
  return {
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    input: __expectString(output.input),
    runId: __expectString(output.runId),
    signalName: __expectString(output.signalName),
    workflowId: __expectString(output.workflowId),
  } as any;
};

/**
 * deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes
 */
const de_StartChildWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartChildWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    initiatedEventId: __expectLong(output.initiatedEventId),
    workflowId: __expectString(output.workflowId),
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes
 */
const de_StartChildWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartChildWorkflowExecutionInitiatedEventAttributes => {
  return {
    childPolicy: __expectString(output.childPolicy),
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    executionStartToCloseTimeout: __expectString(output.executionStartToCloseTimeout),
    input: __expectString(output.input),
    lambdaRole: __expectString(output.lambdaRole),
    tagList: output.tagList != null ? de_TagList(output.tagList, context) : undefined,
    taskList: output.taskList != null ? de_TaskList(output.taskList, context) : undefined,
    taskPriority: __expectString(output.taskPriority),
    taskStartToCloseTimeout: __expectString(output.taskStartToCloseTimeout),
    workflowId: __expectString(output.workflowId),
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes
 */
const de_StartLambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartLambdaFunctionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    message: __expectString(output.message),
    scheduledEventId: __expectLong(output.scheduledEventId),
  } as any;
};

/**
 * deserializeAws_json1_0StartTimerFailedEventAttributes
 */
const de_StartTimerFailedEventAttributes = (output: any, context: __SerdeContext): StartTimerFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    timerId: __expectString(output.timerId),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
 */
const de_TagList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_0TaskList
 */
const de_TaskList = (output: any, context: __SerdeContext): TaskList => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_0TimerCanceledEventAttributes
 */
const de_TimerCanceledEventAttributes = (output: any, context: __SerdeContext): TimerCanceledEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    startedEventId: __expectLong(output.startedEventId),
    timerId: __expectString(output.timerId),
  } as any;
};

/**
 * deserializeAws_json1_0TimerFiredEventAttributes
 */
const de_TimerFiredEventAttributes = (output: any, context: __SerdeContext): TimerFiredEventAttributes => {
  return {
    startedEventId: __expectLong(output.startedEventId),
    timerId: __expectString(output.timerId),
  } as any;
};

/**
 * deserializeAws_json1_0TimerStartedEventAttributes
 */
const de_TimerStartedEventAttributes = (output: any, context: __SerdeContext): TimerStartedEventAttributes => {
  return {
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    startToFireTimeout: __expectString(output.startToFireTimeout),
    timerId: __expectString(output.timerId),
  } as any;
};

/**
 * deserializeAws_json1_0TooManyTagsFault
 */
const de_TooManyTagsFault = (output: any, context: __SerdeContext): TooManyTagsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0TypeAlreadyExistsFault
 */
const de_TypeAlreadyExistsFault = (output: any, context: __SerdeContext): TypeAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0TypeDeprecatedFault
 */
const de_TypeDeprecatedFault = (output: any, context: __SerdeContext): TypeDeprecatedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0UnknownResourceFault
 */
const de_UnknownResourceFault = (output: any, context: __SerdeContext): UnknownResourceFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecution
 */
const de_WorkflowExecution = (output: any, context: __SerdeContext): WorkflowExecution => {
  return {
    runId: __expectString(output.runId),
    workflowId: __expectString(output.workflowId),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault
 */
const de_WorkflowExecutionAlreadyStartedFault = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionAlreadyStartedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes
 */
const de_WorkflowExecutionCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCanceledEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    details: __expectString(output.details),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes
 */
const de_WorkflowExecutionCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCancelRequestedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    externalInitiatedEventId: __expectLong(output.externalInitiatedEventId),
    externalWorkflowExecution:
      output.externalWorkflowExecution != null
        ? de_WorkflowExecution(output.externalWorkflowExecution, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes
 */
const de_WorkflowExecutionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCompletedEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    result: __expectString(output.result),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionConfiguration
 */
const de_WorkflowExecutionConfiguration = (output: any, context: __SerdeContext): WorkflowExecutionConfiguration => {
  return {
    childPolicy: __expectString(output.childPolicy),
    executionStartToCloseTimeout: __expectString(output.executionStartToCloseTimeout),
    lambdaRole: __expectString(output.lambdaRole),
    taskList: output.taskList != null ? de_TaskList(output.taskList, context) : undefined,
    taskPriority: __expectString(output.taskPriority),
    taskStartToCloseTimeout: __expectString(output.taskStartToCloseTimeout),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes
 */
const de_WorkflowExecutionContinuedAsNewEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionContinuedAsNewEventAttributes => {
  return {
    childPolicy: __expectString(output.childPolicy),
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    executionStartToCloseTimeout: __expectString(output.executionStartToCloseTimeout),
    input: __expectString(output.input),
    lambdaRole: __expectString(output.lambdaRole),
    newExecutionRunId: __expectString(output.newExecutionRunId),
    tagList: output.tagList != null ? de_TagList(output.tagList, context) : undefined,
    taskList: output.taskList != null ? de_TaskList(output.taskList, context) : undefined,
    taskPriority: __expectString(output.taskPriority),
    taskStartToCloseTimeout: __expectString(output.taskStartToCloseTimeout),
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionCount
 */
const de_WorkflowExecutionCount = (output: any, context: __SerdeContext): WorkflowExecutionCount => {
  return {
    count: __expectInt32(output.count),
    truncated: __expectBoolean(output.truncated),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionDetail
 */
const de_WorkflowExecutionDetail = (output: any, context: __SerdeContext): WorkflowExecutionDetail => {
  return {
    executionConfiguration:
      output.executionConfiguration != null
        ? de_WorkflowExecutionConfiguration(output.executionConfiguration, context)
        : undefined,
    executionInfo: output.executionInfo != null ? de_WorkflowExecutionInfo(output.executionInfo, context) : undefined,
    latestActivityTaskTimestamp:
      output.latestActivityTaskTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.latestActivityTaskTimestamp)))
        : undefined,
    latestExecutionContext: __expectString(output.latestExecutionContext),
    openCounts: output.openCounts != null ? de_WorkflowExecutionOpenCounts(output.openCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionFailedEventAttributes
 */
const de_WorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionFailedEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectLong(output.decisionTaskCompletedEventId),
    details: __expectString(output.details),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionInfo
 */
const de_WorkflowExecutionInfo = (output: any, context: __SerdeContext): WorkflowExecutionInfo => {
  return {
    cancelRequested: __expectBoolean(output.cancelRequested),
    closeStatus: __expectString(output.closeStatus),
    closeTimestamp:
      output.closeTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.closeTimestamp)))
        : undefined,
    execution: output.execution != null ? de_WorkflowExecution(output.execution, context) : undefined,
    executionStatus: __expectString(output.executionStatus),
    parent: output.parent != null ? de_WorkflowExecution(output.parent, context) : undefined,
    startTimestamp:
      output.startTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTimestamp)))
        : undefined,
    tagList: output.tagList != null ? de_TagList(output.tagList, context) : undefined,
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionInfoList
 */
const de_WorkflowExecutionInfoList = (output: any, context: __SerdeContext): WorkflowExecutionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowExecutionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WorkflowExecutionInfos
 */
const de_WorkflowExecutionInfos = (output: any, context: __SerdeContext): WorkflowExecutionInfos => {
  return {
    executionInfos:
      output.executionInfos != null ? de_WorkflowExecutionInfoList(output.executionInfos, context) : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionOpenCounts
 */
const de_WorkflowExecutionOpenCounts = (output: any, context: __SerdeContext): WorkflowExecutionOpenCounts => {
  return {
    openActivityTasks: __expectInt32(output.openActivityTasks),
    openChildWorkflowExecutions: __expectInt32(output.openChildWorkflowExecutions),
    openDecisionTasks: __expectInt32(output.openDecisionTasks),
    openLambdaFunctions: __expectInt32(output.openLambdaFunctions),
    openTimers: __expectInt32(output.openTimers),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes
 */
const de_WorkflowExecutionSignaledEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionSignaledEventAttributes => {
  return {
    externalInitiatedEventId: __expectLong(output.externalInitiatedEventId),
    externalWorkflowExecution:
      output.externalWorkflowExecution != null
        ? de_WorkflowExecution(output.externalWorkflowExecution, context)
        : undefined,
    input: __expectString(output.input),
    signalName: __expectString(output.signalName),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionStartedEventAttributes
 */
const de_WorkflowExecutionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionStartedEventAttributes => {
  return {
    childPolicy: __expectString(output.childPolicy),
    continuedExecutionRunId: __expectString(output.continuedExecutionRunId),
    executionStartToCloseTimeout: __expectString(output.executionStartToCloseTimeout),
    input: __expectString(output.input),
    lambdaRole: __expectString(output.lambdaRole),
    parentInitiatedEventId: __expectLong(output.parentInitiatedEventId),
    parentWorkflowExecution:
      output.parentWorkflowExecution != null
        ? de_WorkflowExecution(output.parentWorkflowExecution, context)
        : undefined,
    tagList: output.tagList != null ? de_TagList(output.tagList, context) : undefined,
    taskList: output.taskList != null ? de_TaskList(output.taskList, context) : undefined,
    taskPriority: __expectString(output.taskPriority),
    taskStartToCloseTimeout: __expectString(output.taskStartToCloseTimeout),
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes
 */
const de_WorkflowExecutionTerminatedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionTerminatedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    childPolicy: __expectString(output.childPolicy),
    details: __expectString(output.details),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes
 */
const de_WorkflowExecutionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionTimedOutEventAttributes => {
  return {
    childPolicy: __expectString(output.childPolicy),
    timeoutType: __expectString(output.timeoutType),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowType
 */
const de_WorkflowType = (output: any, context: __SerdeContext): WorkflowType => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowTypeConfiguration
 */
const de_WorkflowTypeConfiguration = (output: any, context: __SerdeContext): WorkflowTypeConfiguration => {
  return {
    defaultChildPolicy: __expectString(output.defaultChildPolicy),
    defaultExecutionStartToCloseTimeout: __expectString(output.defaultExecutionStartToCloseTimeout),
    defaultLambdaRole: __expectString(output.defaultLambdaRole),
    defaultTaskList: output.defaultTaskList != null ? de_TaskList(output.defaultTaskList, context) : undefined,
    defaultTaskPriority: __expectString(output.defaultTaskPriority),
    defaultTaskStartToCloseTimeout: __expectString(output.defaultTaskStartToCloseTimeout),
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowTypeDetail
 */
const de_WorkflowTypeDetail = (output: any, context: __SerdeContext): WorkflowTypeDetail => {
  return {
    configuration:
      output.configuration != null ? de_WorkflowTypeConfiguration(output.configuration, context) : undefined,
    typeInfo: output.typeInfo != null ? de_WorkflowTypeInfo(output.typeInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowTypeInfo
 */
const de_WorkflowTypeInfo = (output: any, context: __SerdeContext): WorkflowTypeInfo => {
  return {
    creationDate:
      output.creationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDate)))
        : undefined,
    deprecationDate:
      output.deprecationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.deprecationDate)))
        : undefined,
    description: __expectString(output.description),
    status: __expectString(output.status),
    workflowType: output.workflowType != null ? de_WorkflowType(output.workflowType, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0WorkflowTypeInfoList
 */
const de_WorkflowTypeInfoList = (output: any, context: __SerdeContext): WorkflowTypeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowTypeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0WorkflowTypeInfos
 */
const de_WorkflowTypeInfos = (output: any, context: __SerdeContext): WorkflowTypeInfos => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    typeInfos: output.typeInfos != null ? de_WorkflowTypeInfoList(output.typeInfos, context) : undefined,
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
