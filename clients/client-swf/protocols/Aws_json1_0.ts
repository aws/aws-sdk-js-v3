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
  ActivityTaskCancelRequestedEventAttributes,
  ActivityTaskCanceledEventAttributes,
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
  WorkflowExecutionCancelRequestedEventAttributes,
  WorkflowExecutionCanceledEventAttributes,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_0CountClosedWorkflowExecutionsCommand = async (
  input: CountClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.CountClosedWorkflowExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CountClosedWorkflowExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CountOpenWorkflowExecutionsCommand = async (
  input: CountOpenWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.CountOpenWorkflowExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CountOpenWorkflowExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CountPendingActivityTasksCommand = async (
  input: CountPendingActivityTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.CountPendingActivityTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CountPendingActivityTasksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CountPendingDecisionTasksCommand = async (
  input: CountPendingDecisionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.CountPendingDecisionTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CountPendingDecisionTasksInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeprecateActivityTypeCommand = async (
  input: DeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DeprecateActivityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeprecateActivityTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeprecateDomainCommand = async (
  input: DeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DeprecateDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeprecateDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeprecateWorkflowTypeCommand = async (
  input: DeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DeprecateWorkflowType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeprecateWorkflowTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeActivityTypeCommand = async (
  input: DescribeActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DescribeActivityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeActivityTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DescribeDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeWorkflowExecutionCommand = async (
  input: DescribeWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DescribeWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeWorkflowTypeCommand = async (
  input: DescribeWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.DescribeWorkflowType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeWorkflowTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetWorkflowExecutionHistoryCommand = async (
  input: GetWorkflowExecutionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.GetWorkflowExecutionHistory",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetWorkflowExecutionHistoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListActivityTypesCommand = async (
  input: ListActivityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListActivityTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListActivityTypesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListClosedWorkflowExecutionsCommand = async (
  input: ListClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListClosedWorkflowExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListClosedWorkflowExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListDomains",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListDomainsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListOpenWorkflowExecutionsCommand = async (
  input: ListOpenWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListOpenWorkflowExecutions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListOpenWorkflowExecutionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListWorkflowTypesCommand = async (
  input: ListWorkflowTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.ListWorkflowTypes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListWorkflowTypesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PollForActivityTaskCommand = async (
  input: PollForActivityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.PollForActivityTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PollForActivityTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PollForDecisionTaskCommand = async (
  input: PollForDecisionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.PollForDecisionTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PollForDecisionTaskInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RecordActivityTaskHeartbeatCommand = async (
  input: RecordActivityTaskHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RecordActivityTaskHeartbeat",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RecordActivityTaskHeartbeatInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RegisterActivityTypeCommand = async (
  input: RegisterActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RegisterActivityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RegisterActivityTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RegisterDomainCommand = async (
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RegisterDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RegisterDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RegisterWorkflowTypeCommand = async (
  input: RegisterWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RegisterWorkflowType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RegisterWorkflowTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RequestCancelWorkflowExecutionCommand = async (
  input: RequestCancelWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RequestCancelWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RequestCancelWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RespondActivityTaskCanceledCommand = async (
  input: RespondActivityTaskCanceledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RespondActivityTaskCanceled",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RespondActivityTaskCanceledInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RespondActivityTaskCompletedCommand = async (
  input: RespondActivityTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RespondActivityTaskCompleted",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RespondActivityTaskCompletedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RespondActivityTaskFailedCommand = async (
  input: RespondActivityTaskFailedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RespondActivityTaskFailed",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RespondActivityTaskFailedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RespondDecisionTaskCompletedCommand = async (
  input: RespondDecisionTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.RespondDecisionTaskCompleted",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RespondDecisionTaskCompletedInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SignalWorkflowExecutionCommand = async (
  input: SignalWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.SignalWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0SignalWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartWorkflowExecutionCommand = async (
  input: StartWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.StartWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TerminateWorkflowExecutionCommand = async (
  input: TerminateWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.TerminateWorkflowExecution",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TerminateWorkflowExecutionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UndeprecateActivityTypeCommand = async (
  input: UndeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.UndeprecateActivityType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UndeprecateActivityTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UndeprecateDomainCommand = async (
  input: UndeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.UndeprecateDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UndeprecateDomainInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UndeprecateWorkflowTypeCommand = async (
  input: UndeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.UndeprecateWorkflowType",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UndeprecateWorkflowTypeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "SimpleWorkflowService.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CountClosedWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountClosedWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
  const response: CountClosedWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountClosedWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0CountOpenWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountOpenWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
  const response: CountOpenWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountOpenWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0CountPendingActivityTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingActivityTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CountPendingActivityTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PendingTaskCount(data, context);
  const response: CountPendingActivityTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CountPendingActivityTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingActivityTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0CountPendingDecisionTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingDecisionTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CountPendingDecisionTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PendingTaskCount(data, context);
  const response: CountPendingDecisionTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CountPendingDecisionTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingDecisionTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DeprecateActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateActivityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeprecateActivityTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeprecateActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeprecateActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateActivityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf#TypeDeprecatedFault":
      response = {
        ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DeprecateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeprecateDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeprecateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeprecateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainDeprecatedFault":
    case "com.amazonaws.swf#DomainDeprecatedFault":
      response = {
        ...(await deserializeAws_json1_0DomainDeprecatedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DeprecateWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeprecateWorkflowTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeprecateWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeprecateWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateWorkflowTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf#TypeDeprecatedFault":
      response = {
        ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeActivityTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ActivityTypeDetail(data, context);
  const response: DescribeActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DomainDetail(data, context);
  const response: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeWorkflowExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionDetail(data, context);
  const response: DescribeWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0DescribeWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeWorkflowTypeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowTypeDetail(data, context);
  const response: DescribeWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0GetWorkflowExecutionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0History(data, context);
  const response: GetWorkflowExecutionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListActivityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivityTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListActivityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ActivityTypeInfos(data, context);
  const response: ListActivityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListActivityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivityTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListClosedWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
  const response: ListClosedWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DomainInfos(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListOpenWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
  const response: ListOpenWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0ListWorkflowTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowTypesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListWorkflowTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowTypeInfos(data, context);
  const response: ListWorkflowTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListWorkflowTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0PollForActivityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForActivityTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PollForActivityTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ActivityTask(data, context);
  const response: PollForActivityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PollForActivityTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForActivityTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0PollForDecisionTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForDecisionTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PollForDecisionTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DecisionTask(data, context);
  const response: PollForDecisionTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PollForDecisionTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForDecisionTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RecordActivityTaskHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordActivityTaskHeartbeatCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ActivityTaskStatus(data, context);
  const response: RecordActivityTaskHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordActivityTaskHeartbeatCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RegisterActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterActivityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RegisterActivityTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RegisterActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterActivityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf#TypeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RegisterDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RegisterDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RegisterDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainAlreadyExistsFault":
    case "com.amazonaws.swf#DomainAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsFault":
    case "com.amazonaws.swf#TooManyTagsFault":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RegisterWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RegisterWorkflowTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RegisterWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkflowTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf#TypeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RequestCancelWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCancelWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RequestCancelWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCancelWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RespondActivityTaskCanceledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCanceledCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RespondActivityTaskCanceledCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskCanceledCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RespondActivityTaskCanceledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCanceledCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RespondActivityTaskCompletedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCompletedCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RespondActivityTaskCompletedCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskCompletedCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RespondActivityTaskCompletedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCompletedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RespondActivityTaskFailedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskFailedCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RespondActivityTaskFailedCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskFailedCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RespondActivityTaskFailedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskFailedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0RespondDecisionTaskCompletedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondDecisionTaskCompletedCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RespondDecisionTaskCompletedCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RespondDecisionTaskCompletedCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RespondDecisionTaskCompletedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondDecisionTaskCompletedCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0SignalWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0SignalWorkflowExecutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SignalWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SignalWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0StartWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartWorkflowExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0Run(data, context);
  const response: StartWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DefaultUndefinedFault":
    case "com.amazonaws.swf#DefaultUndefinedFault":
      response = {
        ...(await deserializeAws_json1_0DefaultUndefinedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf#TypeDeprecatedFault":
      response = {
        ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "WorkflowExecutionAlreadyStartedFault":
    case "com.amazonaws.swf#WorkflowExecutionAlreadyStartedFault":
      response = {
        ...(await deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsFault":
    case "com.amazonaws.swf#TooManyTagsFault":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0TerminateWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TerminateWorkflowExecutionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TerminateWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TerminateWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UndeprecateActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateActivityTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UndeprecateActivityTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UndeprecateActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UndeprecateActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateActivityTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf#TypeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UndeprecateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UndeprecateDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UndeprecateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UndeprecateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DomainAlreadyExistsFault":
    case "com.amazonaws.swf#DomainAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UndeprecateWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UndeprecateWorkflowTypeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UndeprecateWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UndeprecateWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateWorkflowTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf#TypeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_json1_0DefaultUndefinedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultUndefinedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0DefaultUndefinedFault(body, context);
  const contents: DefaultUndefinedFault = {
    name: "DefaultUndefinedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0DomainAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0DomainAlreadyExistsFault(body, context);
  const contents: DomainAlreadyExistsFault = {
    name: "DomainAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0DomainDeprecatedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainDeprecatedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0DomainDeprecatedFault(body, context);
  const contents: DomainDeprecatedFault = {
    name: "DomainDeprecatedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0LimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededFault(body, context);
  const contents: LimitExceededFault = {
    name: "LimitExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0OperationNotPermittedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0OperationNotPermittedFault(body, context);
  const contents: OperationNotPermittedFault = {
    name: "OperationNotPermittedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0TooManyTagsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TooManyTagsFault(body, context);
  const contents: TooManyTagsFault = {
    name: "TooManyTagsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0TypeAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TypeAlreadyExistsFault(body, context);
  const contents: TypeAlreadyExistsFault = {
    name: "TypeAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0TypeDeprecatedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeDeprecatedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TypeDeprecatedFault(body, context);
  const contents: TypeDeprecatedFault = {
    name: "TypeDeprecatedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0UnknownResourceFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownResourceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0UnknownResourceFault(body, context);
  const contents: UnknownResourceFault = {
    name: "UnknownResourceFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkflowExecutionAlreadyStartedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault(body, context);
  const contents: WorkflowExecutionAlreadyStartedFault = {
    name: "WorkflowExecutionAlreadyStartedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_0ActivityType = (input: ActivityType, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_json1_0CancelTimerDecisionAttributes = (
  input: CancelTimerDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.timerId !== undefined && input.timerId !== null && { timerId: input.timerId }),
  };
};

const serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes = (
  input: CancelWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && input.details !== null && { details: input.details }),
  };
};

const serializeAws_json1_0CloseStatusFilter = (input: CloseStatusFilter, context: __SerdeContext): any => {
  return {
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes = (
  input: CompleteWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.result !== undefined && input.result !== null && { result: input.result }),
  };
};

const serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes = (
  input: ContinueAsNewWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy }),
    ...(input.executionStartToCloseTimeout !== undefined &&
      input.executionStartToCloseTimeout !== null && {
        executionStartToCloseTimeout: input.executionStartToCloseTimeout,
      }),
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole }),
    ...(input.tagList !== undefined &&
      input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) }),
    ...(input.taskList !== undefined &&
      input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
    ...(input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }),
    ...(input.taskStartToCloseTimeout !== undefined &&
      input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
    ...(input.workflowTypeVersion !== undefined &&
      input.workflowTypeVersion !== null && { workflowTypeVersion: input.workflowTypeVersion }),
  };
};

const serializeAws_json1_0CountClosedWorkflowExecutionsInput = (
  input: CountClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.closeStatusFilter !== undefined &&
      input.closeStatusFilter !== null && {
        closeStatusFilter: serializeAws_json1_0CloseStatusFilter(input.closeStatusFilter, context),
      }),
    ...(input.closeTimeFilter !== undefined &&
      input.closeTimeFilter !== null && {
        closeTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.closeTimeFilter, context),
      }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.executionFilter !== undefined &&
      input.executionFilter !== null && {
        executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
      }),
    ...(input.startTimeFilter !== undefined &&
      input.startTimeFilter !== null && {
        startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
      }),
    ...(input.tagFilter !== undefined &&
      input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) }),
    ...(input.typeFilter !== undefined &&
      input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }),
  };
};

const serializeAws_json1_0CountOpenWorkflowExecutionsInput = (
  input: CountOpenWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.executionFilter !== undefined &&
      input.executionFilter !== null && {
        executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
      }),
    ...(input.startTimeFilter !== undefined &&
      input.startTimeFilter !== null && {
        startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
      }),
    ...(input.tagFilter !== undefined &&
      input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) }),
    ...(input.typeFilter !== undefined &&
      input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }),
  };
};

const serializeAws_json1_0CountPendingActivityTasksInput = (
  input: CountPendingActivityTasksInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.taskList !== undefined &&
      input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
  };
};

const serializeAws_json1_0CountPendingDecisionTasksInput = (
  input: CountPendingDecisionTasksInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.taskList !== undefined &&
      input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
  };
};

const serializeAws_json1_0Decision = (input: Decision, context: __SerdeContext): any => {
  return {
    ...(input.cancelTimerDecisionAttributes !== undefined &&
      input.cancelTimerDecisionAttributes !== null && {
        cancelTimerDecisionAttributes: serializeAws_json1_0CancelTimerDecisionAttributes(
          input.cancelTimerDecisionAttributes,
          context
        ),
      }),
    ...(input.cancelWorkflowExecutionDecisionAttributes !== undefined &&
      input.cancelWorkflowExecutionDecisionAttributes !== null && {
        cancelWorkflowExecutionDecisionAttributes: serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes(
          input.cancelWorkflowExecutionDecisionAttributes,
          context
        ),
      }),
    ...(input.completeWorkflowExecutionDecisionAttributes !== undefined &&
      input.completeWorkflowExecutionDecisionAttributes !== null && {
        completeWorkflowExecutionDecisionAttributes: serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes(
          input.completeWorkflowExecutionDecisionAttributes,
          context
        ),
      }),
    ...(input.continueAsNewWorkflowExecutionDecisionAttributes !== undefined &&
      input.continueAsNewWorkflowExecutionDecisionAttributes !== null && {
        continueAsNewWorkflowExecutionDecisionAttributes:
          serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes(
            input.continueAsNewWorkflowExecutionDecisionAttributes,
            context
          ),
      }),
    ...(input.decisionType !== undefined && input.decisionType !== null && { decisionType: input.decisionType }),
    ...(input.failWorkflowExecutionDecisionAttributes !== undefined &&
      input.failWorkflowExecutionDecisionAttributes !== null && {
        failWorkflowExecutionDecisionAttributes: serializeAws_json1_0FailWorkflowExecutionDecisionAttributes(
          input.failWorkflowExecutionDecisionAttributes,
          context
        ),
      }),
    ...(input.recordMarkerDecisionAttributes !== undefined &&
      input.recordMarkerDecisionAttributes !== null && {
        recordMarkerDecisionAttributes: serializeAws_json1_0RecordMarkerDecisionAttributes(
          input.recordMarkerDecisionAttributes,
          context
        ),
      }),
    ...(input.requestCancelActivityTaskDecisionAttributes !== undefined &&
      input.requestCancelActivityTaskDecisionAttributes !== null && {
        requestCancelActivityTaskDecisionAttributes: serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes(
          input.requestCancelActivityTaskDecisionAttributes,
          context
        ),
      }),
    ...(input.requestCancelExternalWorkflowExecutionDecisionAttributes !== undefined &&
      input.requestCancelExternalWorkflowExecutionDecisionAttributes !== null && {
        requestCancelExternalWorkflowExecutionDecisionAttributes:
          serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes(
            input.requestCancelExternalWorkflowExecutionDecisionAttributes,
            context
          ),
      }),
    ...(input.scheduleActivityTaskDecisionAttributes !== undefined &&
      input.scheduleActivityTaskDecisionAttributes !== null && {
        scheduleActivityTaskDecisionAttributes: serializeAws_json1_0ScheduleActivityTaskDecisionAttributes(
          input.scheduleActivityTaskDecisionAttributes,
          context
        ),
      }),
    ...(input.scheduleLambdaFunctionDecisionAttributes !== undefined &&
      input.scheduleLambdaFunctionDecisionAttributes !== null && {
        scheduleLambdaFunctionDecisionAttributes: serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes(
          input.scheduleLambdaFunctionDecisionAttributes,
          context
        ),
      }),
    ...(input.signalExternalWorkflowExecutionDecisionAttributes !== undefined &&
      input.signalExternalWorkflowExecutionDecisionAttributes !== null && {
        signalExternalWorkflowExecutionDecisionAttributes:
          serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes(
            input.signalExternalWorkflowExecutionDecisionAttributes,
            context
          ),
      }),
    ...(input.startChildWorkflowExecutionDecisionAttributes !== undefined &&
      input.startChildWorkflowExecutionDecisionAttributes !== null && {
        startChildWorkflowExecutionDecisionAttributes:
          serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes(
            input.startChildWorkflowExecutionDecisionAttributes,
            context
          ),
      }),
    ...(input.startTimerDecisionAttributes !== undefined &&
      input.startTimerDecisionAttributes !== null && {
        startTimerDecisionAttributes: serializeAws_json1_0StartTimerDecisionAttributes(
          input.startTimerDecisionAttributes,
          context
        ),
      }),
  };
};

const serializeAws_json1_0DecisionList = (input: Decision[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0Decision(entry, context);
    });
};

const serializeAws_json1_0DeprecateActivityTypeInput = (
  input: DeprecateActivityTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityType !== undefined &&
      input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
  };
};

const serializeAws_json1_0DeprecateDomainInput = (input: DeprecateDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_0DeprecateWorkflowTypeInput = (
  input: DeprecateWorkflowTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.workflowType !== undefined &&
      input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
  };
};

const serializeAws_json1_0DescribeActivityTypeInput = (
  input: DescribeActivityTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityType !== undefined &&
      input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
  };
};

const serializeAws_json1_0DescribeDomainInput = (input: DescribeDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_0DescribeWorkflowExecutionInput = (
  input: DescribeWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.execution !== undefined &&
      input.execution !== null && { execution: serializeAws_json1_0WorkflowExecution(input.execution, context) }),
  };
};

const serializeAws_json1_0DescribeWorkflowTypeInput = (
  input: DescribeWorkflowTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.workflowType !== undefined &&
      input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
  };
};

const serializeAws_json1_0ExecutionTimeFilter = (input: ExecutionTimeFilter, context: __SerdeContext): any => {
  return {
    ...(input.latestDate !== undefined &&
      input.latestDate !== null && { latestDate: Math.round(input.latestDate.getTime() / 1000) }),
    ...(input.oldestDate !== undefined &&
      input.oldestDate !== null && { oldestDate: Math.round(input.oldestDate.getTime() / 1000) }),
  };
};

const serializeAws_json1_0FailWorkflowExecutionDecisionAttributes = (
  input: FailWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && input.details !== null && { details: input.details }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
  };
};

const serializeAws_json1_0GetWorkflowExecutionHistoryInput = (
  input: GetWorkflowExecutionHistoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.execution !== undefined &&
      input.execution !== null && { execution: serializeAws_json1_0WorkflowExecution(input.execution, context) }),
    ...(input.maximumPageSize !== undefined &&
      input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
    ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
  };
};

const serializeAws_json1_0ListActivityTypesInput = (input: ListActivityTypesInput, context: __SerdeContext): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.maximumPageSize !== undefined &&
      input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
    ...(input.registrationStatus !== undefined &&
      input.registrationStatus !== null && { registrationStatus: input.registrationStatus }),
    ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
  };
};

const serializeAws_json1_0ListClosedWorkflowExecutionsInput = (
  input: ListClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.closeStatusFilter !== undefined &&
      input.closeStatusFilter !== null && {
        closeStatusFilter: serializeAws_json1_0CloseStatusFilter(input.closeStatusFilter, context),
      }),
    ...(input.closeTimeFilter !== undefined &&
      input.closeTimeFilter !== null && {
        closeTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.closeTimeFilter, context),
      }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.executionFilter !== undefined &&
      input.executionFilter !== null && {
        executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
      }),
    ...(input.maximumPageSize !== undefined &&
      input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
    ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
    ...(input.startTimeFilter !== undefined &&
      input.startTimeFilter !== null && {
        startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
      }),
    ...(input.tagFilter !== undefined &&
      input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) }),
    ...(input.typeFilter !== undefined &&
      input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }),
  };
};

const serializeAws_json1_0ListDomainsInput = (input: ListDomainsInput, context: __SerdeContext): any => {
  return {
    ...(input.maximumPageSize !== undefined &&
      input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
    ...(input.registrationStatus !== undefined &&
      input.registrationStatus !== null && { registrationStatus: input.registrationStatus }),
    ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
  };
};

const serializeAws_json1_0ListOpenWorkflowExecutionsInput = (
  input: ListOpenWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.executionFilter !== undefined &&
      input.executionFilter !== null && {
        executionFilter: serializeAws_json1_0WorkflowExecutionFilter(input.executionFilter, context),
      }),
    ...(input.maximumPageSize !== undefined &&
      input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
    ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
    ...(input.startTimeFilter !== undefined &&
      input.startTimeFilter !== null && {
        startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(input.startTimeFilter, context),
      }),
    ...(input.tagFilter !== undefined &&
      input.tagFilter !== null && { tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context) }),
    ...(input.typeFilter !== undefined &&
      input.typeFilter !== null && { typeFilter: serializeAws_json1_0WorkflowTypeFilter(input.typeFilter, context) }),
  };
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_0ListWorkflowTypesInput = (input: ListWorkflowTypesInput, context: __SerdeContext): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.maximumPageSize !== undefined &&
      input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
    ...(input.registrationStatus !== undefined &&
      input.registrationStatus !== null && { registrationStatus: input.registrationStatus }),
    ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
  };
};

const serializeAws_json1_0PollForActivityTaskInput = (
  input: PollForActivityTaskInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.identity !== undefined && input.identity !== null && { identity: input.identity }),
    ...(input.taskList !== undefined &&
      input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
  };
};

const serializeAws_json1_0PollForDecisionTaskInput = (
  input: PollForDecisionTaskInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.identity !== undefined && input.identity !== null && { identity: input.identity }),
    ...(input.maximumPageSize !== undefined &&
      input.maximumPageSize !== null && { maximumPageSize: input.maximumPageSize }),
    ...(input.nextPageToken !== undefined && input.nextPageToken !== null && { nextPageToken: input.nextPageToken }),
    ...(input.reverseOrder !== undefined && input.reverseOrder !== null && { reverseOrder: input.reverseOrder }),
    ...(input.taskList !== undefined &&
      input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
  };
};

const serializeAws_json1_0RecordActivityTaskHeartbeatInput = (
  input: RecordActivityTaskHeartbeatInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && input.details !== null && { details: input.details }),
    ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
  };
};

const serializeAws_json1_0RecordMarkerDecisionAttributes = (
  input: RecordMarkerDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && input.details !== null && { details: input.details }),
    ...(input.markerName !== undefined && input.markerName !== null && { markerName: input.markerName }),
  };
};

const serializeAws_json1_0RegisterActivityTypeInput = (
  input: RegisterActivityTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultTaskHeartbeatTimeout !== undefined &&
      input.defaultTaskHeartbeatTimeout !== null && { defaultTaskHeartbeatTimeout: input.defaultTaskHeartbeatTimeout }),
    ...(input.defaultTaskList !== undefined &&
      input.defaultTaskList !== null && {
        defaultTaskList: serializeAws_json1_0TaskList(input.defaultTaskList, context),
      }),
    ...(input.defaultTaskPriority !== undefined &&
      input.defaultTaskPriority !== null && { defaultTaskPriority: input.defaultTaskPriority }),
    ...(input.defaultTaskScheduleToCloseTimeout !== undefined &&
      input.defaultTaskScheduleToCloseTimeout !== null && {
        defaultTaskScheduleToCloseTimeout: input.defaultTaskScheduleToCloseTimeout,
      }),
    ...(input.defaultTaskScheduleToStartTimeout !== undefined &&
      input.defaultTaskScheduleToStartTimeout !== null && {
        defaultTaskScheduleToStartTimeout: input.defaultTaskScheduleToStartTimeout,
      }),
    ...(input.defaultTaskStartToCloseTimeout !== undefined &&
      input.defaultTaskStartToCloseTimeout !== null && {
        defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_json1_0RegisterDomainInput = (input: RegisterDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_json1_0ResourceTagList(input.tags, context) }),
    ...(input.workflowExecutionRetentionPeriodInDays !== undefined &&
      input.workflowExecutionRetentionPeriodInDays !== null && {
        workflowExecutionRetentionPeriodInDays: input.workflowExecutionRetentionPeriodInDays,
      }),
  };
};

const serializeAws_json1_0RegisterWorkflowTypeInput = (
  input: RegisterWorkflowTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultChildPolicy !== undefined &&
      input.defaultChildPolicy !== null && { defaultChildPolicy: input.defaultChildPolicy }),
    ...(input.defaultExecutionStartToCloseTimeout !== undefined &&
      input.defaultExecutionStartToCloseTimeout !== null && {
        defaultExecutionStartToCloseTimeout: input.defaultExecutionStartToCloseTimeout,
      }),
    ...(input.defaultLambdaRole !== undefined &&
      input.defaultLambdaRole !== null && { defaultLambdaRole: input.defaultLambdaRole }),
    ...(input.defaultTaskList !== undefined &&
      input.defaultTaskList !== null && {
        defaultTaskList: serializeAws_json1_0TaskList(input.defaultTaskList, context),
      }),
    ...(input.defaultTaskPriority !== undefined &&
      input.defaultTaskPriority !== null && { defaultTaskPriority: input.defaultTaskPriority }),
    ...(input.defaultTaskStartToCloseTimeout !== undefined &&
      input.defaultTaskStartToCloseTimeout !== null && {
        defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout,
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes = (
  input: RequestCancelActivityTaskDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityId !== undefined && input.activityId !== null && { activityId: input.activityId }),
  };
};

const serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes = (
  input: RequestCancelExternalWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control !== undefined && input.control !== null && { control: input.control }),
    ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
  };
};

const serializeAws_json1_0RequestCancelWorkflowExecutionInput = (
  input: RequestCancelWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
  };
};

const serializeAws_json1_0ResourceTag = (input: ResourceTag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_0ResourceTagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0ResourceTagList = (input: ResourceTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0ResourceTag(entry, context);
    });
};

const serializeAws_json1_0RespondActivityTaskCanceledInput = (
  input: RespondActivityTaskCanceledInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && input.details !== null && { details: input.details }),
    ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
  };
};

const serializeAws_json1_0RespondActivityTaskCompletedInput = (
  input: RespondActivityTaskCompletedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.result !== undefined && input.result !== null && { result: input.result }),
    ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
  };
};

const serializeAws_json1_0RespondActivityTaskFailedInput = (
  input: RespondActivityTaskFailedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && input.details !== null && { details: input.details }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
    ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
  };
};

const serializeAws_json1_0RespondDecisionTaskCompletedInput = (
  input: RespondDecisionTaskCompletedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.decisions !== undefined &&
      input.decisions !== null && { decisions: serializeAws_json1_0DecisionList(input.decisions, context) }),
    ...(input.executionContext !== undefined &&
      input.executionContext !== null && { executionContext: input.executionContext }),
    ...(input.taskToken !== undefined && input.taskToken !== null && { taskToken: input.taskToken }),
  };
};

const serializeAws_json1_0ScheduleActivityTaskDecisionAttributes = (
  input: ScheduleActivityTaskDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityId !== undefined && input.activityId !== null && { activityId: input.activityId }),
    ...(input.activityType !== undefined &&
      input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) }),
    ...(input.control !== undefined && input.control !== null && { control: input.control }),
    ...(input.heartbeatTimeout !== undefined &&
      input.heartbeatTimeout !== null && { heartbeatTimeout: input.heartbeatTimeout }),
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.scheduleToCloseTimeout !== undefined &&
      input.scheduleToCloseTimeout !== null && { scheduleToCloseTimeout: input.scheduleToCloseTimeout }),
    ...(input.scheduleToStartTimeout !== undefined &&
      input.scheduleToStartTimeout !== null && { scheduleToStartTimeout: input.scheduleToStartTimeout }),
    ...(input.startToCloseTimeout !== undefined &&
      input.startToCloseTimeout !== null && { startToCloseTimeout: input.startToCloseTimeout }),
    ...(input.taskList !== undefined &&
      input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
    ...(input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }),
  };
};

const serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes = (
  input: ScheduleLambdaFunctionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control !== undefined && input.control !== null && { control: input.control }),
    ...(input.id !== undefined && input.id !== null && { id: input.id }),
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.startToCloseTimeout !== undefined &&
      input.startToCloseTimeout !== null && { startToCloseTimeout: input.startToCloseTimeout }),
  };
};

const serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes = (
  input: SignalExternalWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control !== undefined && input.control !== null && { control: input.control }),
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
    ...(input.signalName !== undefined && input.signalName !== null && { signalName: input.signalName }),
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
  };
};

const serializeAws_json1_0SignalWorkflowExecutionInput = (
  input: SignalWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
    ...(input.signalName !== undefined && input.signalName !== null && { signalName: input.signalName }),
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
  };
};

const serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes = (
  input: StartChildWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy }),
    ...(input.control !== undefined && input.control !== null && { control: input.control }),
    ...(input.executionStartToCloseTimeout !== undefined &&
      input.executionStartToCloseTimeout !== null && {
        executionStartToCloseTimeout: input.executionStartToCloseTimeout,
      }),
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole }),
    ...(input.tagList !== undefined &&
      input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) }),
    ...(input.taskList !== undefined &&
      input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
    ...(input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }),
    ...(input.taskStartToCloseTimeout !== undefined &&
      input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    ...(input.workflowType !== undefined &&
      input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
  };
};

const serializeAws_json1_0StartTimerDecisionAttributes = (
  input: StartTimerDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control !== undefined && input.control !== null && { control: input.control }),
    ...(input.startToFireTimeout !== undefined &&
      input.startToFireTimeout !== null && { startToFireTimeout: input.startToFireTimeout }),
    ...(input.timerId !== undefined && input.timerId !== null && { timerId: input.timerId }),
  };
};

const serializeAws_json1_0StartWorkflowExecutionInput = (
  input: StartWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.executionStartToCloseTimeout !== undefined &&
      input.executionStartToCloseTimeout !== null && {
        executionStartToCloseTimeout: input.executionStartToCloseTimeout,
      }),
    ...(input.input !== undefined && input.input !== null && { input: input.input }),
    ...(input.lambdaRole !== undefined && input.lambdaRole !== null && { lambdaRole: input.lambdaRole }),
    ...(input.tagList !== undefined &&
      input.tagList !== null && { tagList: serializeAws_json1_0TagList(input.tagList, context) }),
    ...(input.taskList !== undefined &&
      input.taskList !== null && { taskList: serializeAws_json1_0TaskList(input.taskList, context) }),
    ...(input.taskPriority !== undefined && input.taskPriority !== null && { taskPriority: input.taskPriority }),
    ...(input.taskStartToCloseTimeout !== undefined &&
      input.taskStartToCloseTimeout !== null && { taskStartToCloseTimeout: input.taskStartToCloseTimeout }),
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
    ...(input.workflowType !== undefined &&
      input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
  };
};

const serializeAws_json1_0TagFilter = (input: TagFilter, context: __SerdeContext): any => {
  return {
    ...(input.tag !== undefined && input.tag !== null && { tag: input.tag }),
  };
};

const serializeAws_json1_0TagList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_json1_0ResourceTagList(input.tags, context) }),
  };
};

const serializeAws_json1_0TaskList = (input: TaskList, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_0TerminateWorkflowExecutionInput = (
  input: TerminateWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy !== undefined && input.childPolicy !== null && { childPolicy: input.childPolicy }),
    ...(input.details !== undefined && input.details !== null && { details: input.details }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
    ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
  };
};

const serializeAws_json1_0UndeprecateActivityTypeInput = (
  input: UndeprecateActivityTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityType !== undefined &&
      input.activityType !== null && { activityType: serializeAws_json1_0ActivityType(input.activityType, context) }),
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
  };
};

const serializeAws_json1_0UndeprecateDomainInput = (input: UndeprecateDomainInput, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_0UndeprecateWorkflowTypeInput = (
  input: UndeprecateWorkflowTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && input.domain !== null && { domain: input.domain }),
    ...(input.workflowType !== undefined &&
      input.workflowType !== null && { workflowType: serializeAws_json1_0WorkflowType(input.workflowType, context) }),
  };
};

const serializeAws_json1_0UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined &&
      input.tagKeys !== null && { tagKeys: serializeAws_json1_0ResourceTagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_0WorkflowExecution = (input: WorkflowExecution, context: __SerdeContext): any => {
  return {
    ...(input.runId !== undefined && input.runId !== null && { runId: input.runId }),
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
  };
};

const serializeAws_json1_0WorkflowExecutionFilter = (input: WorkflowExecutionFilter, context: __SerdeContext): any => {
  return {
    ...(input.workflowId !== undefined && input.workflowId !== null && { workflowId: input.workflowId }),
  };
};

const serializeAws_json1_0WorkflowType = (input: WorkflowType, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_json1_0WorkflowTypeFilter = (input: WorkflowTypeFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const deserializeAws_json1_0ActivityTask = (output: any, context: __SerdeContext): ActivityTask => {
  return {
    activityId: __expectString(output.activityId),
    activityType:
      output.activityType !== undefined && output.activityType !== null
        ? deserializeAws_json1_0ActivityType(output.activityType, context)
        : undefined,
    input: __expectString(output.input),
    startedEventId: __expectInt(output.startedEventId),
    taskToken: __expectString(output.taskToken),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityTaskCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCanceledEventAttributes => {
  return {
    details: __expectString(output.details),
    latestCancelRequestedEventId: __expectInt(output.latestCancelRequestedEventId),
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
  } as any;
};

const deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCancelRequestedEventAttributes => {
  return {
    activityId: __expectString(output.activityId),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
  } as any;
};

const deserializeAws_json1_0ActivityTaskCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCompletedEventAttributes => {
  return {
    result: __expectString(output.result),
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
  } as any;
};

const deserializeAws_json1_0ActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskFailedEventAttributes => {
  return {
    details: __expectString(output.details),
    reason: __expectString(output.reason),
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
  } as any;
};

const deserializeAws_json1_0ActivityTaskScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskScheduledEventAttributes => {
  return {
    activityId: __expectString(output.activityId),
    activityType:
      output.activityType !== undefined && output.activityType !== null
        ? deserializeAws_json1_0ActivityType(output.activityType, context)
        : undefined,
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    heartbeatTimeout: __expectString(output.heartbeatTimeout),
    input: __expectString(output.input),
    scheduleToCloseTimeout: __expectString(output.scheduleToCloseTimeout),
    scheduleToStartTimeout: __expectString(output.scheduleToStartTimeout),
    startToCloseTimeout: __expectString(output.startToCloseTimeout),
    taskList:
      output.taskList !== undefined && output.taskList !== null
        ? deserializeAws_json1_0TaskList(output.taskList, context)
        : undefined,
    taskPriority: __expectString(output.taskPriority),
  } as any;
};

const deserializeAws_json1_0ActivityTaskStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskStartedEventAttributes => {
  return {
    identity: __expectString(output.identity),
    scheduledEventId: __expectInt(output.scheduledEventId),
  } as any;
};

const deserializeAws_json1_0ActivityTaskStatus = (output: any, context: __SerdeContext): ActivityTaskStatus => {
  return {
    cancelRequested: __expectBoolean(output.cancelRequested),
  } as any;
};

const deserializeAws_json1_0ActivityTaskTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskTimedOutEventAttributes => {
  return {
    details: __expectString(output.details),
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
    timeoutType: __expectString(output.timeoutType),
  } as any;
};

const deserializeAws_json1_0ActivityType = (output: any, context: __SerdeContext): ActivityType => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_0ActivityTypeConfiguration = (
  output: any,
  context: __SerdeContext
): ActivityTypeConfiguration => {
  return {
    defaultTaskHeartbeatTimeout: __expectString(output.defaultTaskHeartbeatTimeout),
    defaultTaskList:
      output.defaultTaskList !== undefined && output.defaultTaskList !== null
        ? deserializeAws_json1_0TaskList(output.defaultTaskList, context)
        : undefined,
    defaultTaskPriority: __expectString(output.defaultTaskPriority),
    defaultTaskScheduleToCloseTimeout: __expectString(output.defaultTaskScheduleToCloseTimeout),
    defaultTaskScheduleToStartTimeout: __expectString(output.defaultTaskScheduleToStartTimeout),
    defaultTaskStartToCloseTimeout: __expectString(output.defaultTaskStartToCloseTimeout),
  } as any;
};

const deserializeAws_json1_0ActivityTypeDetail = (output: any, context: __SerdeContext): ActivityTypeDetail => {
  return {
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_0ActivityTypeConfiguration(output.configuration, context)
        : undefined,
    typeInfo:
      output.typeInfo !== undefined && output.typeInfo !== null
        ? deserializeAws_json1_0ActivityTypeInfo(output.typeInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ActivityTypeInfo = (output: any, context: __SerdeContext): ActivityTypeInfo => {
  return {
    activityType:
      output.activityType !== undefined && output.activityType !== null
        ? deserializeAws_json1_0ActivityType(output.activityType, context)
        : undefined,
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    deprecationDate:
      output.deprecationDate !== undefined && output.deprecationDate !== null
        ? new Date(Math.round(output.deprecationDate * 1000))
        : undefined,
    description: __expectString(output.description),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0ActivityTypeInfoList = (output: any, context: __SerdeContext): ActivityTypeInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ActivityTypeInfo(entry, context);
    });
};

const deserializeAws_json1_0ActivityTypeInfos = (output: any, context: __SerdeContext): ActivityTypeInfos => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    typeInfos:
      output.typeInfos !== undefined && output.typeInfos !== null
        ? deserializeAws_json1_0ActivityTypeInfoList(output.typeInfos, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CancelTimerFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CancelTimerFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    timerId: __expectString(output.timerId),
  } as any;
};

const deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CancelWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
  } as any;
};

const deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionCanceledEventAttributes => {
  return {
    details: __expectString(output.details),
    initiatedEventId: __expectInt(output.initiatedEventId),
    startedEventId: __expectInt(output.startedEventId),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionCompletedEventAttributes => {
  return {
    initiatedEventId: __expectInt(output.initiatedEventId),
    result: __expectString(output.result),
    startedEventId: __expectInt(output.startedEventId),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionFailedEventAttributes => {
  return {
    details: __expectString(output.details),
    initiatedEventId: __expectInt(output.initiatedEventId),
    reason: __expectString(output.reason),
    startedEventId: __expectInt(output.startedEventId),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionStartedEventAttributes => {
  return {
    initiatedEventId: __expectInt(output.initiatedEventId),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionTerminatedEventAttributes => {
  return {
    initiatedEventId: __expectInt(output.initiatedEventId),
    startedEventId: __expectInt(output.startedEventId),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionTimedOutEventAttributes => {
  return {
    initiatedEventId: __expectInt(output.initiatedEventId),
    startedEventId: __expectInt(output.startedEventId),
    timeoutType: __expectString(output.timeoutType),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CompleteWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
  } as any;
};

const deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ContinueAsNewWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
  } as any;
};

const deserializeAws_json1_0DecisionTask = (output: any, context: __SerdeContext): DecisionTask => {
  return {
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_0HistoryEventList(output.events, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
    previousStartedEventId: __expectInt(output.previousStartedEventId),
    startedEventId: __expectInt(output.startedEventId),
    taskToken: __expectString(output.taskToken),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DecisionTaskCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskCompletedEventAttributes => {
  return {
    executionContext: __expectString(output.executionContext),
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
  } as any;
};

const deserializeAws_json1_0DecisionTaskScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskScheduledEventAttributes => {
  return {
    startToCloseTimeout: __expectString(output.startToCloseTimeout),
    taskList:
      output.taskList !== undefined && output.taskList !== null
        ? deserializeAws_json1_0TaskList(output.taskList, context)
        : undefined,
    taskPriority: __expectString(output.taskPriority),
  } as any;
};

const deserializeAws_json1_0DecisionTaskStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskStartedEventAttributes => {
  return {
    identity: __expectString(output.identity),
    scheduledEventId: __expectInt(output.scheduledEventId),
  } as any;
};

const deserializeAws_json1_0DecisionTaskTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskTimedOutEventAttributes => {
  return {
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
    timeoutType: __expectString(output.timeoutType),
  } as any;
};

const deserializeAws_json1_0DefaultUndefinedFault = (output: any, context: __SerdeContext): DefaultUndefinedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0DomainAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DomainAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0DomainConfiguration = (output: any, context: __SerdeContext): DomainConfiguration => {
  return {
    workflowExecutionRetentionPeriodInDays: __expectString(output.workflowExecutionRetentionPeriodInDays),
  } as any;
};

const deserializeAws_json1_0DomainDeprecatedFault = (output: any, context: __SerdeContext): DomainDeprecatedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0DomainDetail = (output: any, context: __SerdeContext): DomainDetail => {
  return {
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_0DomainConfiguration(output.configuration, context)
        : undefined,
    domainInfo:
      output.domainInfo !== undefined && output.domainInfo !== null
        ? deserializeAws_json1_0DomainInfo(output.domainInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DomainInfo = (output: any, context: __SerdeContext): DomainInfo => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0DomainInfoList = (output: any, context: __SerdeContext): DomainInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0DomainInfo(entry, context);
    });
};

const deserializeAws_json1_0DomainInfos = (output: any, context: __SerdeContext): DomainInfos => {
  return {
    domainInfos:
      output.domainInfos !== undefined && output.domainInfos !== null
        ? deserializeAws_json1_0DomainInfoList(output.domainInfos, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): ExternalWorkflowExecutionCancelRequestedEventAttributes => {
  return {
    initiatedEventId: __expectInt(output.initiatedEventId),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes = (
  output: any,
  context: __SerdeContext
): ExternalWorkflowExecutionSignaledEventAttributes => {
  return {
    initiatedEventId: __expectInt(output.initiatedEventId),
    workflowExecution:
      output.workflowExecution !== undefined && output.workflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.workflowExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): FailWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
  } as any;
};

const deserializeAws_json1_0History = (output: any, context: __SerdeContext): History => {
  return {
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_json1_0HistoryEventList(output.events, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_0HistoryEvent = (output: any, context: __SerdeContext): HistoryEvent => {
  return {
    activityTaskCancelRequestedEventAttributes:
      output.activityTaskCancelRequestedEventAttributes !== undefined &&
      output.activityTaskCancelRequestedEventAttributes !== null
        ? deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes(
            output.activityTaskCancelRequestedEventAttributes,
            context
          )
        : undefined,
    activityTaskCanceledEventAttributes:
      output.activityTaskCanceledEventAttributes !== undefined && output.activityTaskCanceledEventAttributes !== null
        ? deserializeAws_json1_0ActivityTaskCanceledEventAttributes(output.activityTaskCanceledEventAttributes, context)
        : undefined,
    activityTaskCompletedEventAttributes:
      output.activityTaskCompletedEventAttributes !== undefined && output.activityTaskCompletedEventAttributes !== null
        ? deserializeAws_json1_0ActivityTaskCompletedEventAttributes(
            output.activityTaskCompletedEventAttributes,
            context
          )
        : undefined,
    activityTaskFailedEventAttributes:
      output.activityTaskFailedEventAttributes !== undefined && output.activityTaskFailedEventAttributes !== null
        ? deserializeAws_json1_0ActivityTaskFailedEventAttributes(output.activityTaskFailedEventAttributes, context)
        : undefined,
    activityTaskScheduledEventAttributes:
      output.activityTaskScheduledEventAttributes !== undefined && output.activityTaskScheduledEventAttributes !== null
        ? deserializeAws_json1_0ActivityTaskScheduledEventAttributes(
            output.activityTaskScheduledEventAttributes,
            context
          )
        : undefined,
    activityTaskStartedEventAttributes:
      output.activityTaskStartedEventAttributes !== undefined && output.activityTaskStartedEventAttributes !== null
        ? deserializeAws_json1_0ActivityTaskStartedEventAttributes(output.activityTaskStartedEventAttributes, context)
        : undefined,
    activityTaskTimedOutEventAttributes:
      output.activityTaskTimedOutEventAttributes !== undefined && output.activityTaskTimedOutEventAttributes !== null
        ? deserializeAws_json1_0ActivityTaskTimedOutEventAttributes(output.activityTaskTimedOutEventAttributes, context)
        : undefined,
    cancelTimerFailedEventAttributes:
      output.cancelTimerFailedEventAttributes !== undefined && output.cancelTimerFailedEventAttributes !== null
        ? deserializeAws_json1_0CancelTimerFailedEventAttributes(output.cancelTimerFailedEventAttributes, context)
        : undefined,
    cancelWorkflowExecutionFailedEventAttributes:
      output.cancelWorkflowExecutionFailedEventAttributes !== undefined &&
      output.cancelWorkflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes(
            output.cancelWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionCanceledEventAttributes:
      output.childWorkflowExecutionCanceledEventAttributes !== undefined &&
      output.childWorkflowExecutionCanceledEventAttributes !== null
        ? deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes(
            output.childWorkflowExecutionCanceledEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionCompletedEventAttributes:
      output.childWorkflowExecutionCompletedEventAttributes !== undefined &&
      output.childWorkflowExecutionCompletedEventAttributes !== null
        ? deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes(
            output.childWorkflowExecutionCompletedEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionFailedEventAttributes:
      output.childWorkflowExecutionFailedEventAttributes !== undefined &&
      output.childWorkflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes(
            output.childWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionStartedEventAttributes:
      output.childWorkflowExecutionStartedEventAttributes !== undefined &&
      output.childWorkflowExecutionStartedEventAttributes !== null
        ? deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes(
            output.childWorkflowExecutionStartedEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionTerminatedEventAttributes:
      output.childWorkflowExecutionTerminatedEventAttributes !== undefined &&
      output.childWorkflowExecutionTerminatedEventAttributes !== null
        ? deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes(
            output.childWorkflowExecutionTerminatedEventAttributes,
            context
          )
        : undefined,
    childWorkflowExecutionTimedOutEventAttributes:
      output.childWorkflowExecutionTimedOutEventAttributes !== undefined &&
      output.childWorkflowExecutionTimedOutEventAttributes !== null
        ? deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes(
            output.childWorkflowExecutionTimedOutEventAttributes,
            context
          )
        : undefined,
    completeWorkflowExecutionFailedEventAttributes:
      output.completeWorkflowExecutionFailedEventAttributes !== undefined &&
      output.completeWorkflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes(
            output.completeWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    continueAsNewWorkflowExecutionFailedEventAttributes:
      output.continueAsNewWorkflowExecutionFailedEventAttributes !== undefined &&
      output.continueAsNewWorkflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes(
            output.continueAsNewWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    decisionTaskCompletedEventAttributes:
      output.decisionTaskCompletedEventAttributes !== undefined && output.decisionTaskCompletedEventAttributes !== null
        ? deserializeAws_json1_0DecisionTaskCompletedEventAttributes(
            output.decisionTaskCompletedEventAttributes,
            context
          )
        : undefined,
    decisionTaskScheduledEventAttributes:
      output.decisionTaskScheduledEventAttributes !== undefined && output.decisionTaskScheduledEventAttributes !== null
        ? deserializeAws_json1_0DecisionTaskScheduledEventAttributes(
            output.decisionTaskScheduledEventAttributes,
            context
          )
        : undefined,
    decisionTaskStartedEventAttributes:
      output.decisionTaskStartedEventAttributes !== undefined && output.decisionTaskStartedEventAttributes !== null
        ? deserializeAws_json1_0DecisionTaskStartedEventAttributes(output.decisionTaskStartedEventAttributes, context)
        : undefined,
    decisionTaskTimedOutEventAttributes:
      output.decisionTaskTimedOutEventAttributes !== undefined && output.decisionTaskTimedOutEventAttributes !== null
        ? deserializeAws_json1_0DecisionTaskTimedOutEventAttributes(output.decisionTaskTimedOutEventAttributes, context)
        : undefined,
    eventId: __expectInt(output.eventId),
    eventTimestamp:
      output.eventTimestamp !== undefined && output.eventTimestamp !== null
        ? new Date(Math.round(output.eventTimestamp * 1000))
        : undefined,
    eventType: __expectString(output.eventType),
    externalWorkflowExecutionCancelRequestedEventAttributes:
      output.externalWorkflowExecutionCancelRequestedEventAttributes !== undefined &&
      output.externalWorkflowExecutionCancelRequestedEventAttributes !== null
        ? deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes(
            output.externalWorkflowExecutionCancelRequestedEventAttributes,
            context
          )
        : undefined,
    externalWorkflowExecutionSignaledEventAttributes:
      output.externalWorkflowExecutionSignaledEventAttributes !== undefined &&
      output.externalWorkflowExecutionSignaledEventAttributes !== null
        ? deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes(
            output.externalWorkflowExecutionSignaledEventAttributes,
            context
          )
        : undefined,
    failWorkflowExecutionFailedEventAttributes:
      output.failWorkflowExecutionFailedEventAttributes !== undefined &&
      output.failWorkflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes(
            output.failWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    lambdaFunctionCompletedEventAttributes:
      output.lambdaFunctionCompletedEventAttributes !== undefined &&
      output.lambdaFunctionCompletedEventAttributes !== null
        ? deserializeAws_json1_0LambdaFunctionCompletedEventAttributes(
            output.lambdaFunctionCompletedEventAttributes,
            context
          )
        : undefined,
    lambdaFunctionFailedEventAttributes:
      output.lambdaFunctionFailedEventAttributes !== undefined && output.lambdaFunctionFailedEventAttributes !== null
        ? deserializeAws_json1_0LambdaFunctionFailedEventAttributes(output.lambdaFunctionFailedEventAttributes, context)
        : undefined,
    lambdaFunctionScheduledEventAttributes:
      output.lambdaFunctionScheduledEventAttributes !== undefined &&
      output.lambdaFunctionScheduledEventAttributes !== null
        ? deserializeAws_json1_0LambdaFunctionScheduledEventAttributes(
            output.lambdaFunctionScheduledEventAttributes,
            context
          )
        : undefined,
    lambdaFunctionStartedEventAttributes:
      output.lambdaFunctionStartedEventAttributes !== undefined && output.lambdaFunctionStartedEventAttributes !== null
        ? deserializeAws_json1_0LambdaFunctionStartedEventAttributes(
            output.lambdaFunctionStartedEventAttributes,
            context
          )
        : undefined,
    lambdaFunctionTimedOutEventAttributes:
      output.lambdaFunctionTimedOutEventAttributes !== undefined &&
      output.lambdaFunctionTimedOutEventAttributes !== null
        ? deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes(
            output.lambdaFunctionTimedOutEventAttributes,
            context
          )
        : undefined,
    markerRecordedEventAttributes:
      output.markerRecordedEventAttributes !== undefined && output.markerRecordedEventAttributes !== null
        ? deserializeAws_json1_0MarkerRecordedEventAttributes(output.markerRecordedEventAttributes, context)
        : undefined,
    recordMarkerFailedEventAttributes:
      output.recordMarkerFailedEventAttributes !== undefined && output.recordMarkerFailedEventAttributes !== null
        ? deserializeAws_json1_0RecordMarkerFailedEventAttributes(output.recordMarkerFailedEventAttributes, context)
        : undefined,
    requestCancelActivityTaskFailedEventAttributes:
      output.requestCancelActivityTaskFailedEventAttributes !== undefined &&
      output.requestCancelActivityTaskFailedEventAttributes !== null
        ? deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes(
            output.requestCancelActivityTaskFailedEventAttributes,
            context
          )
        : undefined,
    requestCancelExternalWorkflowExecutionFailedEventAttributes:
      output.requestCancelExternalWorkflowExecutionFailedEventAttributes !== undefined &&
      output.requestCancelExternalWorkflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes(
            output.requestCancelExternalWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes:
      output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !== undefined &&
      output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !== null
        ? deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(
            output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes,
            context
          )
        : undefined,
    scheduleActivityTaskFailedEventAttributes:
      output.scheduleActivityTaskFailedEventAttributes !== undefined &&
      output.scheduleActivityTaskFailedEventAttributes !== null
        ? deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes(
            output.scheduleActivityTaskFailedEventAttributes,
            context
          )
        : undefined,
    scheduleLambdaFunctionFailedEventAttributes:
      output.scheduleLambdaFunctionFailedEventAttributes !== undefined &&
      output.scheduleLambdaFunctionFailedEventAttributes !== null
        ? deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes(
            output.scheduleLambdaFunctionFailedEventAttributes,
            context
          )
        : undefined,
    signalExternalWorkflowExecutionFailedEventAttributes:
      output.signalExternalWorkflowExecutionFailedEventAttributes !== undefined &&
      output.signalExternalWorkflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes(
            output.signalExternalWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    signalExternalWorkflowExecutionInitiatedEventAttributes:
      output.signalExternalWorkflowExecutionInitiatedEventAttributes !== undefined &&
      output.signalExternalWorkflowExecutionInitiatedEventAttributes !== null
        ? deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes(
            output.signalExternalWorkflowExecutionInitiatedEventAttributes,
            context
          )
        : undefined,
    startChildWorkflowExecutionFailedEventAttributes:
      output.startChildWorkflowExecutionFailedEventAttributes !== undefined &&
      output.startChildWorkflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes(
            output.startChildWorkflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    startChildWorkflowExecutionInitiatedEventAttributes:
      output.startChildWorkflowExecutionInitiatedEventAttributes !== undefined &&
      output.startChildWorkflowExecutionInitiatedEventAttributes !== null
        ? deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes(
            output.startChildWorkflowExecutionInitiatedEventAttributes,
            context
          )
        : undefined,
    startLambdaFunctionFailedEventAttributes:
      output.startLambdaFunctionFailedEventAttributes !== undefined &&
      output.startLambdaFunctionFailedEventAttributes !== null
        ? deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes(
            output.startLambdaFunctionFailedEventAttributes,
            context
          )
        : undefined,
    startTimerFailedEventAttributes:
      output.startTimerFailedEventAttributes !== undefined && output.startTimerFailedEventAttributes !== null
        ? deserializeAws_json1_0StartTimerFailedEventAttributes(output.startTimerFailedEventAttributes, context)
        : undefined,
    timerCanceledEventAttributes:
      output.timerCanceledEventAttributes !== undefined && output.timerCanceledEventAttributes !== null
        ? deserializeAws_json1_0TimerCanceledEventAttributes(output.timerCanceledEventAttributes, context)
        : undefined,
    timerFiredEventAttributes:
      output.timerFiredEventAttributes !== undefined && output.timerFiredEventAttributes !== null
        ? deserializeAws_json1_0TimerFiredEventAttributes(output.timerFiredEventAttributes, context)
        : undefined,
    timerStartedEventAttributes:
      output.timerStartedEventAttributes !== undefined && output.timerStartedEventAttributes !== null
        ? deserializeAws_json1_0TimerStartedEventAttributes(output.timerStartedEventAttributes, context)
        : undefined,
    workflowExecutionCancelRequestedEventAttributes:
      output.workflowExecutionCancelRequestedEventAttributes !== undefined &&
      output.workflowExecutionCancelRequestedEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes(
            output.workflowExecutionCancelRequestedEventAttributes,
            context
          )
        : undefined,
    workflowExecutionCanceledEventAttributes:
      output.workflowExecutionCanceledEventAttributes !== undefined &&
      output.workflowExecutionCanceledEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes(
            output.workflowExecutionCanceledEventAttributes,
            context
          )
        : undefined,
    workflowExecutionCompletedEventAttributes:
      output.workflowExecutionCompletedEventAttributes !== undefined &&
      output.workflowExecutionCompletedEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes(
            output.workflowExecutionCompletedEventAttributes,
            context
          )
        : undefined,
    workflowExecutionContinuedAsNewEventAttributes:
      output.workflowExecutionContinuedAsNewEventAttributes !== undefined &&
      output.workflowExecutionContinuedAsNewEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes(
            output.workflowExecutionContinuedAsNewEventAttributes,
            context
          )
        : undefined,
    workflowExecutionFailedEventAttributes:
      output.workflowExecutionFailedEventAttributes !== undefined &&
      output.workflowExecutionFailedEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionFailedEventAttributes(
            output.workflowExecutionFailedEventAttributes,
            context
          )
        : undefined,
    workflowExecutionSignaledEventAttributes:
      output.workflowExecutionSignaledEventAttributes !== undefined &&
      output.workflowExecutionSignaledEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes(
            output.workflowExecutionSignaledEventAttributes,
            context
          )
        : undefined,
    workflowExecutionStartedEventAttributes:
      output.workflowExecutionStartedEventAttributes !== undefined &&
      output.workflowExecutionStartedEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionStartedEventAttributes(
            output.workflowExecutionStartedEventAttributes,
            context
          )
        : undefined,
    workflowExecutionTerminatedEventAttributes:
      output.workflowExecutionTerminatedEventAttributes !== undefined &&
      output.workflowExecutionTerminatedEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes(
            output.workflowExecutionTerminatedEventAttributes,
            context
          )
        : undefined,
    workflowExecutionTimedOutEventAttributes:
      output.workflowExecutionTimedOutEventAttributes !== undefined &&
      output.workflowExecutionTimedOutEventAttributes !== null
        ? deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes(
            output.workflowExecutionTimedOutEventAttributes,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_0HistoryEventList = (output: any, context: __SerdeContext): HistoryEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0HistoryEvent(entry, context);
    });
};

const deserializeAws_json1_0LambdaFunctionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionCompletedEventAttributes => {
  return {
    result: __expectString(output.result),
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
  } as any;
};

const deserializeAws_json1_0LambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionFailedEventAttributes => {
  return {
    details: __expectString(output.details),
    reason: __expectString(output.reason),
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
  } as any;
};

const deserializeAws_json1_0LambdaFunctionScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduledEventAttributes => {
  return {
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    id: __expectString(output.id),
    input: __expectString(output.input),
    name: __expectString(output.name),
    startToCloseTimeout: __expectString(output.startToCloseTimeout),
  } as any;
};

const deserializeAws_json1_0LambdaFunctionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionStartedEventAttributes => {
  return {
    scheduledEventId: __expectInt(output.scheduledEventId),
  } as any;
};

const deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionTimedOutEventAttributes => {
  return {
    scheduledEventId: __expectInt(output.scheduledEventId),
    startedEventId: __expectInt(output.startedEventId),
    timeoutType: __expectString(output.timeoutType),
  } as any;
};

const deserializeAws_json1_0LimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_json1_0ResourceTagList(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0MarkerRecordedEventAttributes = (
  output: any,
  context: __SerdeContext
): MarkerRecordedEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    details: __expectString(output.details),
    markerName: __expectString(output.markerName),
  } as any;
};

const deserializeAws_json1_0OperationNotPermittedFault = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0PendingTaskCount = (output: any, context: __SerdeContext): PendingTaskCount => {
  return {
    count: __expectInt(output.count),
    truncated: __expectBoolean(output.truncated),
  } as any;
};

const deserializeAws_json1_0RecordMarkerFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RecordMarkerFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    markerName: __expectString(output.markerName),
  } as any;
};

const deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelActivityTaskFailedEventAttributes => {
  return {
    activityId: __expectString(output.activityId),
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
  } as any;
};

const deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelExternalWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    initiatedEventId: __expectInt(output.initiatedEventId),
    runId: __expectString(output.runId),
    workflowId: __expectString(output.workflowId),
  } as any;
};

const deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelExternalWorkflowExecutionInitiatedEventAttributes => {
  return {
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    runId: __expectString(output.runId),
    workflowId: __expectString(output.workflowId),
  } as any;
};

const deserializeAws_json1_0ResourceTag = (output: any, context: __SerdeContext): ResourceTag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_0ResourceTagList = (output: any, context: __SerdeContext): ResourceTag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ResourceTag(entry, context);
    });
};

const deserializeAws_json1_0Run = (output: any, context: __SerdeContext): Run => {
  return {
    runId: __expectString(output.runId),
  } as any;
};

const deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ScheduleActivityTaskFailedEventAttributes => {
  return {
    activityId: __expectString(output.activityId),
    activityType:
      output.activityType !== undefined && output.activityType !== null
        ? deserializeAws_json1_0ActivityType(output.activityType, context)
        : undefined,
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
  } as any;
};

const deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ScheduleLambdaFunctionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    id: __expectString(output.id),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): SignalExternalWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    initiatedEventId: __expectInt(output.initiatedEventId),
    runId: __expectString(output.runId),
    workflowId: __expectString(output.workflowId),
  } as any;
};

const deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): SignalExternalWorkflowExecutionInitiatedEventAttributes => {
  return {
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    input: __expectString(output.input),
    runId: __expectString(output.runId),
    signalName: __expectString(output.signalName),
    workflowId: __expectString(output.workflowId),
  } as any;
};

const deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartChildWorkflowExecutionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    initiatedEventId: __expectInt(output.initiatedEventId),
    workflowId: __expectString(output.workflowId),
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartChildWorkflowExecutionInitiatedEventAttributes => {
  return {
    childPolicy: __expectString(output.childPolicy),
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    executionStartToCloseTimeout: __expectString(output.executionStartToCloseTimeout),
    input: __expectString(output.input),
    lambdaRole: __expectString(output.lambdaRole),
    tagList:
      output.tagList !== undefined && output.tagList !== null
        ? deserializeAws_json1_0TagList(output.tagList, context)
        : undefined,
    taskList:
      output.taskList !== undefined && output.taskList !== null
        ? deserializeAws_json1_0TaskList(output.taskList, context)
        : undefined,
    taskPriority: __expectString(output.taskPriority),
    taskStartToCloseTimeout: __expectString(output.taskStartToCloseTimeout),
    workflowId: __expectString(output.workflowId),
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartLambdaFunctionFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    message: __expectString(output.message),
    scheduledEventId: __expectInt(output.scheduledEventId),
  } as any;
};

const deserializeAws_json1_0StartTimerFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartTimerFailedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    timerId: __expectString(output.timerId),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_0TaskList = (output: any, context: __SerdeContext): TaskList => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_0TimerCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): TimerCanceledEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    startedEventId: __expectInt(output.startedEventId),
    timerId: __expectString(output.timerId),
  } as any;
};

const deserializeAws_json1_0TimerFiredEventAttributes = (
  output: any,
  context: __SerdeContext
): TimerFiredEventAttributes => {
  return {
    startedEventId: __expectInt(output.startedEventId),
    timerId: __expectString(output.timerId),
  } as any;
};

const deserializeAws_json1_0TimerStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): TimerStartedEventAttributes => {
  return {
    control: __expectString(output.control),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    startToFireTimeout: __expectString(output.startToFireTimeout),
    timerId: __expectString(output.timerId),
  } as any;
};

const deserializeAws_json1_0TooManyTagsFault = (output: any, context: __SerdeContext): TooManyTagsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0TypeAlreadyExistsFault = (output: any, context: __SerdeContext): TypeAlreadyExistsFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0TypeDeprecatedFault = (output: any, context: __SerdeContext): TypeDeprecatedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0UnknownResourceFault = (output: any, context: __SerdeContext): UnknownResourceFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0WorkflowExecution = (output: any, context: __SerdeContext): WorkflowExecution => {
  return {
    runId: __expectString(output.runId),
    workflowId: __expectString(output.workflowId),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionAlreadyStartedFault => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCanceledEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    details: __expectString(output.details),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCancelRequestedEventAttributes => {
  return {
    cause: __expectString(output.cause),
    externalInitiatedEventId: __expectInt(output.externalInitiatedEventId),
    externalWorkflowExecution:
      output.externalWorkflowExecution !== undefined && output.externalWorkflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.externalWorkflowExecution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCompletedEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    result: __expectString(output.result),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionConfiguration = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionConfiguration => {
  return {
    childPolicy: __expectString(output.childPolicy),
    executionStartToCloseTimeout: __expectString(output.executionStartToCloseTimeout),
    lambdaRole: __expectString(output.lambdaRole),
    taskList:
      output.taskList !== undefined && output.taskList !== null
        ? deserializeAws_json1_0TaskList(output.taskList, context)
        : undefined,
    taskPriority: __expectString(output.taskPriority),
    taskStartToCloseTimeout: __expectString(output.taskStartToCloseTimeout),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionContinuedAsNewEventAttributes => {
  return {
    childPolicy: __expectString(output.childPolicy),
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    executionStartToCloseTimeout: __expectString(output.executionStartToCloseTimeout),
    input: __expectString(output.input),
    lambdaRole: __expectString(output.lambdaRole),
    newExecutionRunId: __expectString(output.newExecutionRunId),
    tagList:
      output.tagList !== undefined && output.tagList !== null
        ? deserializeAws_json1_0TagList(output.tagList, context)
        : undefined,
    taskList:
      output.taskList !== undefined && output.taskList !== null
        ? deserializeAws_json1_0TaskList(output.taskList, context)
        : undefined,
    taskPriority: __expectString(output.taskPriority),
    taskStartToCloseTimeout: __expectString(output.taskStartToCloseTimeout),
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionCount = (output: any, context: __SerdeContext): WorkflowExecutionCount => {
  return {
    count: __expectInt(output.count),
    truncated: __expectBoolean(output.truncated),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionDetail = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionDetail => {
  return {
    executionConfiguration:
      output.executionConfiguration !== undefined && output.executionConfiguration !== null
        ? deserializeAws_json1_0WorkflowExecutionConfiguration(output.executionConfiguration, context)
        : undefined,
    executionInfo:
      output.executionInfo !== undefined && output.executionInfo !== null
        ? deserializeAws_json1_0WorkflowExecutionInfo(output.executionInfo, context)
        : undefined,
    latestActivityTaskTimestamp:
      output.latestActivityTaskTimestamp !== undefined && output.latestActivityTaskTimestamp !== null
        ? new Date(Math.round(output.latestActivityTaskTimestamp * 1000))
        : undefined,
    latestExecutionContext: __expectString(output.latestExecutionContext),
    openCounts:
      output.openCounts !== undefined && output.openCounts !== null
        ? deserializeAws_json1_0WorkflowExecutionOpenCounts(output.openCounts, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionFailedEventAttributes => {
  return {
    decisionTaskCompletedEventId: __expectInt(output.decisionTaskCompletedEventId),
    details: __expectString(output.details),
    reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionInfo = (output: any, context: __SerdeContext): WorkflowExecutionInfo => {
  return {
    cancelRequested: __expectBoolean(output.cancelRequested),
    closeStatus: __expectString(output.closeStatus),
    closeTimestamp:
      output.closeTimestamp !== undefined && output.closeTimestamp !== null
        ? new Date(Math.round(output.closeTimestamp * 1000))
        : undefined,
    execution:
      output.execution !== undefined && output.execution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.execution, context)
        : undefined,
    executionStatus: __expectString(output.executionStatus),
    parent:
      output.parent !== undefined && output.parent !== null
        ? deserializeAws_json1_0WorkflowExecution(output.parent, context)
        : undefined,
    startTimestamp:
      output.startTimestamp !== undefined && output.startTimestamp !== null
        ? new Date(Math.round(output.startTimestamp * 1000))
        : undefined,
    tagList:
      output.tagList !== undefined && output.tagList !== null
        ? deserializeAws_json1_0TagList(output.tagList, context)
        : undefined,
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionInfoList = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0WorkflowExecutionInfo(entry, context);
    });
};

const deserializeAws_json1_0WorkflowExecutionInfos = (output: any, context: __SerdeContext): WorkflowExecutionInfos => {
  return {
    executionInfos:
      output.executionInfos !== undefined && output.executionInfos !== null
        ? deserializeAws_json1_0WorkflowExecutionInfoList(output.executionInfos, context)
        : undefined,
    nextPageToken: __expectString(output.nextPageToken),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionOpenCounts = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionOpenCounts => {
  return {
    openActivityTasks: __expectInt(output.openActivityTasks),
    openChildWorkflowExecutions: __expectInt(output.openChildWorkflowExecutions),
    openDecisionTasks: __expectInt(output.openDecisionTasks),
    openLambdaFunctions: __expectInt(output.openLambdaFunctions),
    openTimers: __expectInt(output.openTimers),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionSignaledEventAttributes => {
  return {
    externalInitiatedEventId: __expectInt(output.externalInitiatedEventId),
    externalWorkflowExecution:
      output.externalWorkflowExecution !== undefined && output.externalWorkflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.externalWorkflowExecution, context)
        : undefined,
    input: __expectString(output.input),
    signalName: __expectString(output.signalName),
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionStartedEventAttributes => {
  return {
    childPolicy: __expectString(output.childPolicy),
    continuedExecutionRunId: __expectString(output.continuedExecutionRunId),
    executionStartToCloseTimeout: __expectString(output.executionStartToCloseTimeout),
    input: __expectString(output.input),
    lambdaRole: __expectString(output.lambdaRole),
    parentInitiatedEventId: __expectInt(output.parentInitiatedEventId),
    parentWorkflowExecution:
      output.parentWorkflowExecution !== undefined && output.parentWorkflowExecution !== null
        ? deserializeAws_json1_0WorkflowExecution(output.parentWorkflowExecution, context)
        : undefined,
    tagList:
      output.tagList !== undefined && output.tagList !== null
        ? deserializeAws_json1_0TagList(output.tagList, context)
        : undefined,
    taskList:
      output.taskList !== undefined && output.taskList !== null
        ? deserializeAws_json1_0TaskList(output.taskList, context)
        : undefined,
    taskPriority: __expectString(output.taskPriority),
    taskStartToCloseTimeout: __expectString(output.taskStartToCloseTimeout),
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes = (
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

const deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionTimedOutEventAttributes => {
  return {
    childPolicy: __expectString(output.childPolicy),
    timeoutType: __expectString(output.timeoutType),
  } as any;
};

const deserializeAws_json1_0WorkflowType = (output: any, context: __SerdeContext): WorkflowType => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_json1_0WorkflowTypeConfiguration = (
  output: any,
  context: __SerdeContext
): WorkflowTypeConfiguration => {
  return {
    defaultChildPolicy: __expectString(output.defaultChildPolicy),
    defaultExecutionStartToCloseTimeout: __expectString(output.defaultExecutionStartToCloseTimeout),
    defaultLambdaRole: __expectString(output.defaultLambdaRole),
    defaultTaskList:
      output.defaultTaskList !== undefined && output.defaultTaskList !== null
        ? deserializeAws_json1_0TaskList(output.defaultTaskList, context)
        : undefined,
    defaultTaskPriority: __expectString(output.defaultTaskPriority),
    defaultTaskStartToCloseTimeout: __expectString(output.defaultTaskStartToCloseTimeout),
  } as any;
};

const deserializeAws_json1_0WorkflowTypeDetail = (output: any, context: __SerdeContext): WorkflowTypeDetail => {
  return {
    configuration:
      output.configuration !== undefined && output.configuration !== null
        ? deserializeAws_json1_0WorkflowTypeConfiguration(output.configuration, context)
        : undefined,
    typeInfo:
      output.typeInfo !== undefined && output.typeInfo !== null
        ? deserializeAws_json1_0WorkflowTypeInfo(output.typeInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0WorkflowTypeInfo = (output: any, context: __SerdeContext): WorkflowTypeInfo => {
  return {
    creationDate:
      output.creationDate !== undefined && output.creationDate !== null
        ? new Date(Math.round(output.creationDate * 1000))
        : undefined,
    deprecationDate:
      output.deprecationDate !== undefined && output.deprecationDate !== null
        ? new Date(Math.round(output.deprecationDate * 1000))
        : undefined,
    description: __expectString(output.description),
    status: __expectString(output.status),
    workflowType:
      output.workflowType !== undefined && output.workflowType !== null
        ? deserializeAws_json1_0WorkflowType(output.workflowType, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0WorkflowTypeInfoList = (output: any, context: __SerdeContext): WorkflowTypeInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0WorkflowTypeInfo(entry, context);
    });
};

const deserializeAws_json1_0WorkflowTypeInfos = (output: any, context: __SerdeContext): WorkflowTypeInfos => {
  return {
    nextPageToken: __expectString(output.nextPageToken),
    typeInfos:
      output.typeInfos !== undefined && output.typeInfos !== null
        ? deserializeAws_json1_0WorkflowTypeInfoList(output.typeInfos, context)
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
