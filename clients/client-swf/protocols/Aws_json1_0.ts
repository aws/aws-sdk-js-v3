import {
  CountClosedWorkflowExecutionsCommandInput,
  CountClosedWorkflowExecutionsCommandOutput
} from "../commands/CountClosedWorkflowExecutionsCommand";
import {
  CountOpenWorkflowExecutionsCommandInput,
  CountOpenWorkflowExecutionsCommandOutput
} from "../commands/CountOpenWorkflowExecutionsCommand";
import {
  CountPendingActivityTasksCommandInput,
  CountPendingActivityTasksCommandOutput
} from "../commands/CountPendingActivityTasksCommand";
import {
  CountPendingDecisionTasksCommandInput,
  CountPendingDecisionTasksCommandOutput
} from "../commands/CountPendingDecisionTasksCommand";
import {
  DeprecateActivityTypeCommandInput,
  DeprecateActivityTypeCommandOutput
} from "../commands/DeprecateActivityTypeCommand";
import {
  DeprecateDomainCommandInput,
  DeprecateDomainCommandOutput
} from "../commands/DeprecateDomainCommand";
import {
  DeprecateWorkflowTypeCommandInput,
  DeprecateWorkflowTypeCommandOutput
} from "../commands/DeprecateWorkflowTypeCommand";
import {
  DescribeActivityTypeCommandInput,
  DescribeActivityTypeCommandOutput
} from "../commands/DescribeActivityTypeCommand";
import {
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput
} from "../commands/DescribeDomainCommand";
import {
  DescribeWorkflowExecutionCommandInput,
  DescribeWorkflowExecutionCommandOutput
} from "../commands/DescribeWorkflowExecutionCommand";
import {
  DescribeWorkflowTypeCommandInput,
  DescribeWorkflowTypeCommandOutput
} from "../commands/DescribeWorkflowTypeCommand";
import {
  GetWorkflowExecutionHistoryCommandInput,
  GetWorkflowExecutionHistoryCommandOutput
} from "../commands/GetWorkflowExecutionHistoryCommand";
import {
  ListActivityTypesCommandInput,
  ListActivityTypesCommandOutput
} from "../commands/ListActivityTypesCommand";
import {
  ListClosedWorkflowExecutionsCommandInput,
  ListClosedWorkflowExecutionsCommandOutput
} from "../commands/ListClosedWorkflowExecutionsCommand";
import {
  ListDomainsCommandInput,
  ListDomainsCommandOutput
} from "../commands/ListDomainsCommand";
import {
  ListOpenWorkflowExecutionsCommandInput,
  ListOpenWorkflowExecutionsCommandOutput
} from "../commands/ListOpenWorkflowExecutionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListWorkflowTypesCommandInput,
  ListWorkflowTypesCommandOutput
} from "../commands/ListWorkflowTypesCommand";
import {
  PollForActivityTaskCommandInput,
  PollForActivityTaskCommandOutput
} from "../commands/PollForActivityTaskCommand";
import {
  PollForDecisionTaskCommandInput,
  PollForDecisionTaskCommandOutput
} from "../commands/PollForDecisionTaskCommand";
import {
  RecordActivityTaskHeartbeatCommandInput,
  RecordActivityTaskHeartbeatCommandOutput
} from "../commands/RecordActivityTaskHeartbeatCommand";
import {
  RegisterActivityTypeCommandInput,
  RegisterActivityTypeCommandOutput
} from "../commands/RegisterActivityTypeCommand";
import {
  RegisterDomainCommandInput,
  RegisterDomainCommandOutput
} from "../commands/RegisterDomainCommand";
import {
  RegisterWorkflowTypeCommandInput,
  RegisterWorkflowTypeCommandOutput
} from "../commands/RegisterWorkflowTypeCommand";
import {
  RequestCancelWorkflowExecutionCommandInput,
  RequestCancelWorkflowExecutionCommandOutput
} from "../commands/RequestCancelWorkflowExecutionCommand";
import {
  RespondActivityTaskCanceledCommandInput,
  RespondActivityTaskCanceledCommandOutput
} from "../commands/RespondActivityTaskCanceledCommand";
import {
  RespondActivityTaskCompletedCommandInput,
  RespondActivityTaskCompletedCommandOutput
} from "../commands/RespondActivityTaskCompletedCommand";
import {
  RespondActivityTaskFailedCommandInput,
  RespondActivityTaskFailedCommandOutput
} from "../commands/RespondActivityTaskFailedCommand";
import {
  RespondDecisionTaskCompletedCommandInput,
  RespondDecisionTaskCompletedCommandOutput
} from "../commands/RespondDecisionTaskCompletedCommand";
import {
  SignalWorkflowExecutionCommandInput,
  SignalWorkflowExecutionCommandOutput
} from "../commands/SignalWorkflowExecutionCommand";
import {
  StartWorkflowExecutionCommandInput,
  StartWorkflowExecutionCommandOutput
} from "../commands/StartWorkflowExecutionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  TerminateWorkflowExecutionCommandInput,
  TerminateWorkflowExecutionCommandOutput
} from "../commands/TerminateWorkflowExecutionCommand";
import {
  UndeprecateActivityTypeCommandInput,
  UndeprecateActivityTypeCommandOutput
} from "../commands/UndeprecateActivityTypeCommand";
import {
  UndeprecateDomainCommandInput,
  UndeprecateDomainCommandOutput
} from "../commands/UndeprecateDomainCommand";
import {
  UndeprecateWorkflowTypeCommandInput,
  UndeprecateWorkflowTypeCommandOutput
} from "../commands/UndeprecateWorkflowTypeCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
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
  WorkflowTypeInfos
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

export const serializeAws_json1_0CountClosedWorkflowExecutionsCommand = async (
  input: CountClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.CountClosedWorkflowExecutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0CountClosedWorkflowExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CountOpenWorkflowExecutionsCommand = async (
  input: CountOpenWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.CountOpenWorkflowExecutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0CountOpenWorkflowExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CountPendingActivityTasksCommand = async (
  input: CountPendingActivityTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.CountPendingActivityTasks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0CountPendingActivityTasksInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CountPendingDecisionTasksCommand = async (
  input: CountPendingDecisionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.CountPendingDecisionTasks"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0CountPendingDecisionTasksInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeprecateActivityTypeCommand = async (
  input: DeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.DeprecateActivityType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DeprecateActivityTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeprecateDomainCommand = async (
  input: DeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.DeprecateDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DeprecateDomainInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeprecateWorkflowTypeCommand = async (
  input: DeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.DeprecateWorkflowType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DeprecateWorkflowTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeActivityTypeCommand = async (
  input: DescribeActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.DescribeActivityType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeActivityTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.DescribeDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeDomainInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeWorkflowExecutionCommand = async (
  input: DescribeWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.DescribeWorkflowExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeWorkflowExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeWorkflowTypeCommand = async (
  input: DescribeWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.DescribeWorkflowType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0DescribeWorkflowTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetWorkflowExecutionHistoryCommand = async (
  input: GetWorkflowExecutionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.GetWorkflowExecutionHistory"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0GetWorkflowExecutionHistoryInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListActivityTypesCommand = async (
  input: ListActivityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.ListActivityTypes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListActivityTypesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListClosedWorkflowExecutionsCommand = async (
  input: ListClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.ListClosedWorkflowExecutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListClosedWorkflowExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.ListDomains"
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
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.ListOpenWorkflowExecutions"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListOpenWorkflowExecutionsInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.ListTagsForResource"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListTagsForResourceInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListWorkflowTypesCommand = async (
  input: ListWorkflowTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.ListWorkflowTypes"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0ListWorkflowTypesInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PollForActivityTaskCommand = async (
  input: PollForActivityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.PollForActivityTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0PollForActivityTaskInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PollForDecisionTaskCommand = async (
  input: PollForDecisionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.PollForDecisionTask"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0PollForDecisionTaskInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RecordActivityTaskHeartbeatCommand = async (
  input: RecordActivityTaskHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RecordActivityTaskHeartbeat"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RecordActivityTaskHeartbeatInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RegisterActivityTypeCommand = async (
  input: RegisterActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RegisterActivityType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RegisterActivityTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RegisterDomainCommand = async (
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RegisterDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RegisterDomainInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RegisterWorkflowTypeCommand = async (
  input: RegisterWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RegisterWorkflowType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RegisterWorkflowTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RequestCancelWorkflowExecutionCommand = async (
  input: RequestCancelWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RequestCancelWorkflowExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RequestCancelWorkflowExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RespondActivityTaskCanceledCommand = async (
  input: RespondActivityTaskCanceledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RespondActivityTaskCanceled"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RespondActivityTaskCanceledInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RespondActivityTaskCompletedCommand = async (
  input: RespondActivityTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RespondActivityTaskCompleted"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RespondActivityTaskCompletedInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RespondActivityTaskFailedCommand = async (
  input: RespondActivityTaskFailedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RespondActivityTaskFailed"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RespondActivityTaskFailedInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RespondDecisionTaskCompletedCommand = async (
  input: RespondDecisionTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.RespondDecisionTaskCompleted"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0RespondDecisionTaskCompletedInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0SignalWorkflowExecutionCommand = async (
  input: SignalWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.SignalWorkflowExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0SignalWorkflowExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartWorkflowExecutionCommand = async (
  input: StartWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.StartWorkflowExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0StartWorkflowExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.TagResource"
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
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.TerminateWorkflowExecution"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0TerminateWorkflowExecutionInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UndeprecateActivityTypeCommand = async (
  input: UndeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.UndeprecateActivityType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UndeprecateActivityTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UndeprecateDomainCommand = async (
  input: UndeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.UndeprecateDomain"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UndeprecateDomainInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UndeprecateWorkflowTypeCommand = async (
  input: UndeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.UndeprecateWorkflowType"
  };
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_0UndeprecateWorkflowTypeInput(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-amz-json-1.0",
    "X-Amz-Target": "SimpleWorkflowService.UntagResource"
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0CountClosedWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountClosedWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
  const response: CountClosedWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "WorkflowExecutionCount",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountClosedWorkflowExecutionsCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0CountOpenWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountOpenWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionCount(data, context);
  const response: CountOpenWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "WorkflowExecutionCount",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountOpenWorkflowExecutionsCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0CountPendingActivityTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingActivityTasksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CountPendingActivityTasksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PendingTaskCount(data, context);
  const response: CountPendingActivityTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PendingTaskCount",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CountPendingActivityTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingActivityTasksCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0CountPendingDecisionTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingDecisionTasksCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0CountPendingDecisionTasksCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PendingTaskCount(data, context);
  const response: CountPendingDecisionTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PendingTaskCount",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CountPendingDecisionTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingDecisionTasksCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0DeprecateActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateActivityTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeprecateActivityTypeCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeprecateActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeprecateActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateActivityTypeCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
      response = {
        ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0DeprecateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeprecateDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeprecateDomainCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeprecateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateDomainCommandOutput> => {
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
    case "DomainDeprecatedFault":
    case "com.amazonaws.swf.base.model#DomainDeprecatedFault":
      response = {
        ...(await deserializeAws_json1_0DomainDeprecatedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0DeprecateWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeprecateWorkflowTypeCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: DeprecateWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeprecateWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateWorkflowTypeCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
      response = {
        ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0DescribeActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeActivityTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ActivityTypeDetail(data, context);
  const response: DescribeActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivityTypeDetail",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityTypeCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DomainDetail(data, context);
  const response: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DomainDetail",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0DescribeWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeWorkflowExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionDetail(data, context);
  const response: DescribeWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "WorkflowExecutionDetail",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowExecutionCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0DescribeWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DescribeWorkflowTypeCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowTypeDetail(data, context);
  const response: DescribeWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "WorkflowTypeDetail",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowTypeCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0GetWorkflowExecutionHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionHistoryCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0History(data, context);
  const response: GetWorkflowExecutionHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "History",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionHistoryCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0ListActivityTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivityTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListActivityTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ActivityTypeInfos(data, context);
  const response: ListActivityTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivityTypeInfos",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListActivityTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivityTypesCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0ListClosedWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
  const response: ListClosedWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "WorkflowExecutionInfos",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClosedWorkflowExecutionsCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DomainInfos(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DomainInfos",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
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

export const deserializeAws_json1_0ListOpenWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowExecutionInfos(data, context);
  const response: ListOpenWorkflowExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "WorkflowExecutionInfos",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenWorkflowExecutionsCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
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
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0ListWorkflowTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowTypesCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0ListWorkflowTypesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0WorkflowTypeInfos(data, context);
  const response: ListWorkflowTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "WorkflowTypeInfos",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListWorkflowTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowTypesCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0PollForActivityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForActivityTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0PollForActivityTaskCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ActivityTask(data, context);
  const response: PollForActivityTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivityTask",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PollForActivityTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForActivityTaskCommandOutput> => {
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
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0PollForDecisionTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForDecisionTaskCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0PollForDecisionTaskCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DecisionTask(data, context);
  const response: PollForDecisionTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DecisionTask",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PollForDecisionTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForDecisionTaskCommandOutput> => {
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
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0RecordActivityTaskHeartbeatCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordActivityTaskHeartbeatCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ActivityTaskStatus(data, context);
  const response: RecordActivityTaskHeartbeatCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ActivityTaskStatus",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordActivityTaskHeartbeatCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0RegisterActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterActivityTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RegisterActivityTypeCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RegisterActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RegisterActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterActivityTypeCommandOutput> => {
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
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0RegisterDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RegisterDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterDomainCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RegisterDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> => {
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
    case "DomainAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#DomainAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsFault":
    case "com.amazonaws.swf.base.model#TooManyTagsFault":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsFaultResponse(
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

export const deserializeAws_json1_0RegisterWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RegisterWorkflowTypeCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RegisterWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RegisterWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkflowTypeCommandOutput> => {
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
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0RequestCancelWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCancelWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RequestCancelWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCancelWorkflowExecutionCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0RespondActivityTaskCanceledCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCanceledCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RespondActivityTaskCanceledCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskCanceledCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RespondActivityTaskCanceledCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCanceledCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0RespondActivityTaskCompletedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCompletedCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RespondActivityTaskCompletedCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskCompletedCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RespondActivityTaskCompletedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCompletedCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0RespondActivityTaskFailedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskFailedCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RespondActivityTaskFailedCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RespondActivityTaskFailedCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RespondActivityTaskFailedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskFailedCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0RespondDecisionTaskCompletedCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondDecisionTaskCompletedCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RespondDecisionTaskCompletedCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: RespondDecisionTaskCompletedCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RespondDecisionTaskCompletedCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondDecisionTaskCompletedCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0SignalWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0SignalWorkflowExecutionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: SignalWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0SignalWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalWorkflowExecutionCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0StartWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0StartWorkflowExecutionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0Run(data, context);
  const response: StartWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Run",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowExecutionCommandOutput> => {
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
    case "DefaultUndefinedFault":
    case "com.amazonaws.swf.base.model#DefaultUndefinedFault":
      response = {
        ...(await deserializeAws_json1_0DefaultUndefinedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
      response = {
        ...(await deserializeAws_json1_0TypeDeprecatedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "WorkflowExecutionAlreadyStartedFault":
    case "com.amazonaws.swf.base.model#WorkflowExecutionAlreadyStartedFault":
      response = {
        ...(await deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse(
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
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
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsFault":
    case "com.amazonaws.swf.base.model#TooManyTagsFault":
      response = {
        ...(await deserializeAws_json1_0TooManyTagsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0TerminateWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkflowExecutionCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TerminateWorkflowExecutionCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: TerminateWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TerminateWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkflowExecutionCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0UndeprecateActivityTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateActivityTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UndeprecateActivityTypeCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UndeprecateActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UndeprecateActivityTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateActivityTypeCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0UndeprecateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateDomainCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UndeprecateDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UndeprecateDomainCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UndeprecateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateDomainCommandOutput> => {
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
    case "DomainAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#DomainAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0UndeprecateWorkflowTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateWorkflowTypeCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UndeprecateWorkflowTypeCommandError(
      output,
      context
    );
  }
  await collectBody(output.body, context);
  const response: UndeprecateWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UndeprecateWorkflowTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateWorkflowTypeCommandOutput> => {
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
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
      response = {
        ...(await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
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
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = {
        ...(await deserializeAws_json1_0LimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = {
        ...(await deserializeAws_json1_0OperationNotPermittedFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = {
        ...(await deserializeAws_json1_0UnknownResourceFaultResponse(
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

const deserializeAws_json1_0DefaultUndefinedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DefaultUndefinedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0DefaultUndefinedFault(
    body,
    context
  );
  const contents: DefaultUndefinedFault = {
    name: "DefaultUndefinedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0DomainAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0DomainAlreadyExistsFault(
    body,
    context
  );
  const contents: DomainAlreadyExistsFault = {
    name: "DomainAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0DomainDeprecatedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DomainDeprecatedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0DomainDeprecatedFault(
    body,
    context
  );
  const contents: DomainDeprecatedFault = {
    name: "DomainDeprecatedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0LimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0LimitExceededFault(
    body,
    context
  );
  const contents: LimitExceededFault = {
    name: "LimitExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0OperationNotPermittedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0OperationNotPermittedFault(
    body,
    context
  );
  const contents: OperationNotPermittedFault = {
    name: "OperationNotPermittedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TooManyTagsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TooManyTagsFault(
    body,
    context
  );
  const contents: TooManyTagsFault = {
    name: "TooManyTagsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TypeAlreadyExistsFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeAlreadyExistsFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TypeAlreadyExistsFault(
    body,
    context
  );
  const contents: TypeAlreadyExistsFault = {
    name: "TypeAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TypeDeprecatedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TypeDeprecatedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0TypeDeprecatedFault(
    body,
    context
  );
  const contents: TypeDeprecatedFault = {
    name: "TypeDeprecatedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0UnknownResourceFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnknownResourceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0UnknownResourceFault(
    body,
    context
  );
  const contents: UnknownResourceFault = {
    name: "UnknownResourceFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkflowExecutionAlreadyStartedFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault(
    body,
    context
  );
  const contents: WorkflowExecutionAlreadyStartedFault = {
    name: "WorkflowExecutionAlreadyStartedFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_0ActivityType = (
  input: ActivityType,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_0CancelTimerDecisionAttributes = (
  input: CancelTimerDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.timerId !== undefined && { timerId: input.timerId })
  };
};

const serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes = (
  input: CancelWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && { details: input.details })
  };
};

const serializeAws_json1_0CloseStatusFilter = (
  input: CloseStatusFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.status !== undefined && { status: input.status })
  };
};

const serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes = (
  input: CompleteWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.result !== undefined && { result: input.result })
  };
};

const serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes = (
  input: ContinueAsNewWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy !== undefined && { childPolicy: input.childPolicy }),
    ...(input.executionStartToCloseTimeout !== undefined && {
      executionStartToCloseTimeout: input.executionStartToCloseTimeout
    }),
    ...(input.input !== undefined && { input: input.input }),
    ...(input.lambdaRole !== undefined && { lambdaRole: input.lambdaRole }),
    ...(input.tagList !== undefined && {
      tagList: serializeAws_json1_0TagList(input.tagList, context)
    }),
    ...(input.taskList !== undefined && {
      taskList: serializeAws_json1_0TaskList(input.taskList, context)
    }),
    ...(input.taskPriority !== undefined && {
      taskPriority: input.taskPriority
    }),
    ...(input.taskStartToCloseTimeout !== undefined && {
      taskStartToCloseTimeout: input.taskStartToCloseTimeout
    }),
    ...(input.workflowTypeVersion !== undefined && {
      workflowTypeVersion: input.workflowTypeVersion
    })
  };
};

const serializeAws_json1_0Decision = (
  input: Decision,
  context: __SerdeContext
): any => {
  return {
    ...(input.cancelTimerDecisionAttributes !== undefined && {
      cancelTimerDecisionAttributes: serializeAws_json1_0CancelTimerDecisionAttributes(
        input.cancelTimerDecisionAttributes,
        context
      )
    }),
    ...(input.cancelWorkflowExecutionDecisionAttributes !== undefined && {
      cancelWorkflowExecutionDecisionAttributes: serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes(
        input.cancelWorkflowExecutionDecisionAttributes,
        context
      )
    }),
    ...(input.completeWorkflowExecutionDecisionAttributes !== undefined && {
      completeWorkflowExecutionDecisionAttributes: serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes(
        input.completeWorkflowExecutionDecisionAttributes,
        context
      )
    }),
    ...(input.continueAsNewWorkflowExecutionDecisionAttributes !==
      undefined && {
      continueAsNewWorkflowExecutionDecisionAttributes: serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes(
        input.continueAsNewWorkflowExecutionDecisionAttributes,
        context
      )
    }),
    ...(input.decisionType !== undefined && {
      decisionType: input.decisionType
    }),
    ...(input.failWorkflowExecutionDecisionAttributes !== undefined && {
      failWorkflowExecutionDecisionAttributes: serializeAws_json1_0FailWorkflowExecutionDecisionAttributes(
        input.failWorkflowExecutionDecisionAttributes,
        context
      )
    }),
    ...(input.recordMarkerDecisionAttributes !== undefined && {
      recordMarkerDecisionAttributes: serializeAws_json1_0RecordMarkerDecisionAttributes(
        input.recordMarkerDecisionAttributes,
        context
      )
    }),
    ...(input.requestCancelActivityTaskDecisionAttributes !== undefined && {
      requestCancelActivityTaskDecisionAttributes: serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes(
        input.requestCancelActivityTaskDecisionAttributes,
        context
      )
    }),
    ...(input.requestCancelExternalWorkflowExecutionDecisionAttributes !==
      undefined && {
      requestCancelExternalWorkflowExecutionDecisionAttributes: serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes(
        input.requestCancelExternalWorkflowExecutionDecisionAttributes,
        context
      )
    }),
    ...(input.scheduleActivityTaskDecisionAttributes !== undefined && {
      scheduleActivityTaskDecisionAttributes: serializeAws_json1_0ScheduleActivityTaskDecisionAttributes(
        input.scheduleActivityTaskDecisionAttributes,
        context
      )
    }),
    ...(input.scheduleLambdaFunctionDecisionAttributes !== undefined && {
      scheduleLambdaFunctionDecisionAttributes: serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes(
        input.scheduleLambdaFunctionDecisionAttributes,
        context
      )
    }),
    ...(input.signalExternalWorkflowExecutionDecisionAttributes !==
      undefined && {
      signalExternalWorkflowExecutionDecisionAttributes: serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes(
        input.signalExternalWorkflowExecutionDecisionAttributes,
        context
      )
    }),
    ...(input.startChildWorkflowExecutionDecisionAttributes !== undefined && {
      startChildWorkflowExecutionDecisionAttributes: serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes(
        input.startChildWorkflowExecutionDecisionAttributes,
        context
      )
    }),
    ...(input.startTimerDecisionAttributes !== undefined && {
      startTimerDecisionAttributes: serializeAws_json1_0StartTimerDecisionAttributes(
        input.startTimerDecisionAttributes,
        context
      )
    })
  };
};

const serializeAws_json1_0DecisionList = (
  input: Decision[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0Decision(entry, context));
};

const serializeAws_json1_0ExecutionTimeFilter = (
  input: ExecutionTimeFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.latestDate !== undefined && {
      latestDate: Math.round(input.latestDate.getTime() / 1000)
    }),
    ...(input.oldestDate !== undefined && {
      oldestDate: Math.round(input.oldestDate.getTime() / 1000)
    })
  };
};

const serializeAws_json1_0FailWorkflowExecutionDecisionAttributes = (
  input: FailWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && { details: input.details }),
    ...(input.reason !== undefined && { reason: input.reason })
  };
};

const serializeAws_json1_0RecordMarkerDecisionAttributes = (
  input: RecordMarkerDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && { details: input.details }),
    ...(input.markerName !== undefined && { markerName: input.markerName })
  };
};

const serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes = (
  input: RequestCancelActivityTaskDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityId !== undefined && { activityId: input.activityId })
  };
};

const serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes = (
  input: RequestCancelExternalWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control !== undefined && { control: input.control }),
    ...(input.runId !== undefined && { runId: input.runId }),
    ...(input.workflowId !== undefined && { workflowId: input.workflowId })
  };
};

const serializeAws_json1_0ResourceTag = (
  input: ResourceTag,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_json1_0ResourceTagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0ResourceTagList = (
  input: ResourceTag[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_json1_0ResourceTag(entry, context));
};

const serializeAws_json1_0ScheduleActivityTaskDecisionAttributes = (
  input: ScheduleActivityTaskDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityId !== undefined && { activityId: input.activityId }),
    ...(input.activityType !== undefined && {
      activityType: serializeAws_json1_0ActivityType(
        input.activityType,
        context
      )
    }),
    ...(input.control !== undefined && { control: input.control }),
    ...(input.heartbeatTimeout !== undefined && {
      heartbeatTimeout: input.heartbeatTimeout
    }),
    ...(input.input !== undefined && { input: input.input }),
    ...(input.scheduleToCloseTimeout !== undefined && {
      scheduleToCloseTimeout: input.scheduleToCloseTimeout
    }),
    ...(input.scheduleToStartTimeout !== undefined && {
      scheduleToStartTimeout: input.scheduleToStartTimeout
    }),
    ...(input.startToCloseTimeout !== undefined && {
      startToCloseTimeout: input.startToCloseTimeout
    }),
    ...(input.taskList !== undefined && {
      taskList: serializeAws_json1_0TaskList(input.taskList, context)
    }),
    ...(input.taskPriority !== undefined && {
      taskPriority: input.taskPriority
    })
  };
};

const serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes = (
  input: ScheduleLambdaFunctionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control !== undefined && { control: input.control }),
    ...(input.id !== undefined && { id: input.id }),
    ...(input.input !== undefined && { input: input.input }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.startToCloseTimeout !== undefined && {
      startToCloseTimeout: input.startToCloseTimeout
    })
  };
};

const serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes = (
  input: SignalExternalWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control !== undefined && { control: input.control }),
    ...(input.input !== undefined && { input: input.input }),
    ...(input.runId !== undefined && { runId: input.runId }),
    ...(input.signalName !== undefined && { signalName: input.signalName }),
    ...(input.workflowId !== undefined && { workflowId: input.workflowId })
  };
};

const serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes = (
  input: StartChildWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy !== undefined && { childPolicy: input.childPolicy }),
    ...(input.control !== undefined && { control: input.control }),
    ...(input.executionStartToCloseTimeout !== undefined && {
      executionStartToCloseTimeout: input.executionStartToCloseTimeout
    }),
    ...(input.input !== undefined && { input: input.input }),
    ...(input.lambdaRole !== undefined && { lambdaRole: input.lambdaRole }),
    ...(input.tagList !== undefined && {
      tagList: serializeAws_json1_0TagList(input.tagList, context)
    }),
    ...(input.taskList !== undefined && {
      taskList: serializeAws_json1_0TaskList(input.taskList, context)
    }),
    ...(input.taskPriority !== undefined && {
      taskPriority: input.taskPriority
    }),
    ...(input.taskStartToCloseTimeout !== undefined && {
      taskStartToCloseTimeout: input.taskStartToCloseTimeout
    }),
    ...(input.workflowId !== undefined && { workflowId: input.workflowId }),
    ...(input.workflowType !== undefined && {
      workflowType: serializeAws_json1_0WorkflowType(
        input.workflowType,
        context
      )
    })
  };
};

const serializeAws_json1_0StartTimerDecisionAttributes = (
  input: StartTimerDecisionAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.control !== undefined && { control: input.control }),
    ...(input.startToFireTimeout !== undefined && {
      startToFireTimeout: input.startToFireTimeout
    }),
    ...(input.timerId !== undefined && { timerId: input.timerId })
  };
};

const serializeAws_json1_0TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.tag !== undefined && { tag: input.tag })
  };
};

const serializeAws_json1_0TagList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_json1_0TaskList = (
  input: TaskList,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_0WorkflowExecution = (
  input: WorkflowExecution,
  context: __SerdeContext
): any => {
  return {
    ...(input.runId !== undefined && { runId: input.runId }),
    ...(input.workflowId !== undefined && { workflowId: input.workflowId })
  };
};

const serializeAws_json1_0WorkflowExecutionFilter = (
  input: WorkflowExecutionFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.workflowId !== undefined && { workflowId: input.workflowId })
  };
};

const serializeAws_json1_0WorkflowType = (
  input: WorkflowType,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_0WorkflowTypeFilter = (
  input: WorkflowTypeFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_0CountClosedWorkflowExecutionsInput = (
  input: CountClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.closeStatusFilter !== undefined && {
      closeStatusFilter: serializeAws_json1_0CloseStatusFilter(
        input.closeStatusFilter,
        context
      )
    }),
    ...(input.closeTimeFilter !== undefined && {
      closeTimeFilter: serializeAws_json1_0ExecutionTimeFilter(
        input.closeTimeFilter,
        context
      )
    }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.executionFilter !== undefined && {
      executionFilter: serializeAws_json1_0WorkflowExecutionFilter(
        input.executionFilter,
        context
      )
    }),
    ...(input.startTimeFilter !== undefined && {
      startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(
        input.startTimeFilter,
        context
      )
    }),
    ...(input.tagFilter !== undefined && {
      tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context)
    }),
    ...(input.typeFilter !== undefined && {
      typeFilter: serializeAws_json1_0WorkflowTypeFilter(
        input.typeFilter,
        context
      )
    })
  };
};

const serializeAws_json1_0CountOpenWorkflowExecutionsInput = (
  input: CountOpenWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.executionFilter !== undefined && {
      executionFilter: serializeAws_json1_0WorkflowExecutionFilter(
        input.executionFilter,
        context
      )
    }),
    ...(input.startTimeFilter !== undefined && {
      startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(
        input.startTimeFilter,
        context
      )
    }),
    ...(input.tagFilter !== undefined && {
      tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context)
    }),
    ...(input.typeFilter !== undefined && {
      typeFilter: serializeAws_json1_0WorkflowTypeFilter(
        input.typeFilter,
        context
      )
    })
  };
};

const serializeAws_json1_0CountPendingActivityTasksInput = (
  input: CountPendingActivityTasksInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.taskList !== undefined && {
      taskList: serializeAws_json1_0TaskList(input.taskList, context)
    })
  };
};

const serializeAws_json1_0CountPendingDecisionTasksInput = (
  input: CountPendingDecisionTasksInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.taskList !== undefined && {
      taskList: serializeAws_json1_0TaskList(input.taskList, context)
    })
  };
};

const serializeAws_json1_0DeprecateActivityTypeInput = (
  input: DeprecateActivityTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityType !== undefined && {
      activityType: serializeAws_json1_0ActivityType(
        input.activityType,
        context
      )
    }),
    ...(input.domain !== undefined && { domain: input.domain })
  };
};

const serializeAws_json1_0DeprecateDomainInput = (
  input: DeprecateDomainInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_0DeprecateWorkflowTypeInput = (
  input: DeprecateWorkflowTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.workflowType !== undefined && {
      workflowType: serializeAws_json1_0WorkflowType(
        input.workflowType,
        context
      )
    })
  };
};

const serializeAws_json1_0DescribeActivityTypeInput = (
  input: DescribeActivityTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityType !== undefined && {
      activityType: serializeAws_json1_0ActivityType(
        input.activityType,
        context
      )
    }),
    ...(input.domain !== undefined && { domain: input.domain })
  };
};

const serializeAws_json1_0DescribeDomainInput = (
  input: DescribeDomainInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_0DescribeWorkflowExecutionInput = (
  input: DescribeWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.execution !== undefined && {
      execution: serializeAws_json1_0WorkflowExecution(input.execution, context)
    })
  };
};

const serializeAws_json1_0DescribeWorkflowTypeInput = (
  input: DescribeWorkflowTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.workflowType !== undefined && {
      workflowType: serializeAws_json1_0WorkflowType(
        input.workflowType,
        context
      )
    })
  };
};

const serializeAws_json1_0GetWorkflowExecutionHistoryInput = (
  input: GetWorkflowExecutionHistoryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.execution !== undefined && {
      execution: serializeAws_json1_0WorkflowExecution(input.execution, context)
    }),
    ...(input.maximumPageSize !== undefined && {
      maximumPageSize: input.maximumPageSize
    }),
    ...(input.nextPageToken !== undefined && {
      nextPageToken: input.nextPageToken
    }),
    ...(input.reverseOrder !== undefined && {
      reverseOrder: input.reverseOrder
    })
  };
};

const serializeAws_json1_0ListActivityTypesInput = (
  input: ListActivityTypesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.maximumPageSize !== undefined && {
      maximumPageSize: input.maximumPageSize
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.nextPageToken !== undefined && {
      nextPageToken: input.nextPageToken
    }),
    ...(input.registrationStatus !== undefined && {
      registrationStatus: input.registrationStatus
    }),
    ...(input.reverseOrder !== undefined && {
      reverseOrder: input.reverseOrder
    })
  };
};

const serializeAws_json1_0ListClosedWorkflowExecutionsInput = (
  input: ListClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.closeStatusFilter !== undefined && {
      closeStatusFilter: serializeAws_json1_0CloseStatusFilter(
        input.closeStatusFilter,
        context
      )
    }),
    ...(input.closeTimeFilter !== undefined && {
      closeTimeFilter: serializeAws_json1_0ExecutionTimeFilter(
        input.closeTimeFilter,
        context
      )
    }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.executionFilter !== undefined && {
      executionFilter: serializeAws_json1_0WorkflowExecutionFilter(
        input.executionFilter,
        context
      )
    }),
    ...(input.maximumPageSize !== undefined && {
      maximumPageSize: input.maximumPageSize
    }),
    ...(input.nextPageToken !== undefined && {
      nextPageToken: input.nextPageToken
    }),
    ...(input.reverseOrder !== undefined && {
      reverseOrder: input.reverseOrder
    }),
    ...(input.startTimeFilter !== undefined && {
      startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(
        input.startTimeFilter,
        context
      )
    }),
    ...(input.tagFilter !== undefined && {
      tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context)
    }),
    ...(input.typeFilter !== undefined && {
      typeFilter: serializeAws_json1_0WorkflowTypeFilter(
        input.typeFilter,
        context
      )
    })
  };
};

const serializeAws_json1_0ListDomainsInput = (
  input: ListDomainsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maximumPageSize !== undefined && {
      maximumPageSize: input.maximumPageSize
    }),
    ...(input.nextPageToken !== undefined && {
      nextPageToken: input.nextPageToken
    }),
    ...(input.registrationStatus !== undefined && {
      registrationStatus: input.registrationStatus
    }),
    ...(input.reverseOrder !== undefined && {
      reverseOrder: input.reverseOrder
    })
  };
};

const serializeAws_json1_0ListOpenWorkflowExecutionsInput = (
  input: ListOpenWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.executionFilter !== undefined && {
      executionFilter: serializeAws_json1_0WorkflowExecutionFilter(
        input.executionFilter,
        context
      )
    }),
    ...(input.maximumPageSize !== undefined && {
      maximumPageSize: input.maximumPageSize
    }),
    ...(input.nextPageToken !== undefined && {
      nextPageToken: input.nextPageToken
    }),
    ...(input.reverseOrder !== undefined && {
      reverseOrder: input.reverseOrder
    }),
    ...(input.startTimeFilter !== undefined && {
      startTimeFilter: serializeAws_json1_0ExecutionTimeFilter(
        input.startTimeFilter,
        context
      )
    }),
    ...(input.tagFilter !== undefined && {
      tagFilter: serializeAws_json1_0TagFilter(input.tagFilter, context)
    }),
    ...(input.typeFilter !== undefined && {
      typeFilter: serializeAws_json1_0WorkflowTypeFilter(
        input.typeFilter,
        context
      )
    })
  };
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
};

const serializeAws_json1_0ListWorkflowTypesInput = (
  input: ListWorkflowTypesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.maximumPageSize !== undefined && {
      maximumPageSize: input.maximumPageSize
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.nextPageToken !== undefined && {
      nextPageToken: input.nextPageToken
    }),
    ...(input.registrationStatus !== undefined && {
      registrationStatus: input.registrationStatus
    }),
    ...(input.reverseOrder !== undefined && {
      reverseOrder: input.reverseOrder
    })
  };
};

const serializeAws_json1_0PollForActivityTaskInput = (
  input: PollForActivityTaskInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.identity !== undefined && { identity: input.identity }),
    ...(input.taskList !== undefined && {
      taskList: serializeAws_json1_0TaskList(input.taskList, context)
    })
  };
};

const serializeAws_json1_0PollForDecisionTaskInput = (
  input: PollForDecisionTaskInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.identity !== undefined && { identity: input.identity }),
    ...(input.maximumPageSize !== undefined && {
      maximumPageSize: input.maximumPageSize
    }),
    ...(input.nextPageToken !== undefined && {
      nextPageToken: input.nextPageToken
    }),
    ...(input.reverseOrder !== undefined && {
      reverseOrder: input.reverseOrder
    }),
    ...(input.taskList !== undefined && {
      taskList: serializeAws_json1_0TaskList(input.taskList, context)
    })
  };
};

const serializeAws_json1_0RecordActivityTaskHeartbeatInput = (
  input: RecordActivityTaskHeartbeatInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && { details: input.details }),
    ...(input.taskToken !== undefined && { taskToken: input.taskToken })
  };
};

const serializeAws_json1_0RegisterActivityTypeInput = (
  input: RegisterActivityTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultTaskHeartbeatTimeout !== undefined && {
      defaultTaskHeartbeatTimeout: input.defaultTaskHeartbeatTimeout
    }),
    ...(input.defaultTaskList !== undefined && {
      defaultTaskList: serializeAws_json1_0TaskList(
        input.defaultTaskList,
        context
      )
    }),
    ...(input.defaultTaskPriority !== undefined && {
      defaultTaskPriority: input.defaultTaskPriority
    }),
    ...(input.defaultTaskScheduleToCloseTimeout !== undefined && {
      defaultTaskScheduleToCloseTimeout: input.defaultTaskScheduleToCloseTimeout
    }),
    ...(input.defaultTaskScheduleToStartTimeout !== undefined && {
      defaultTaskScheduleToStartTimeout: input.defaultTaskScheduleToStartTimeout
    }),
    ...(input.defaultTaskStartToCloseTimeout !== undefined && {
      defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_0RegisterDomainInput = (
  input: RegisterDomainInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && { description: input.description }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_0ResourceTagList(input.tags, context)
    }),
    ...(input.workflowExecutionRetentionPeriodInDays !== undefined && {
      workflowExecutionRetentionPeriodInDays:
        input.workflowExecutionRetentionPeriodInDays
    })
  };
};

const serializeAws_json1_0RegisterWorkflowTypeInput = (
  input: RegisterWorkflowTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultChildPolicy !== undefined && {
      defaultChildPolicy: input.defaultChildPolicy
    }),
    ...(input.defaultExecutionStartToCloseTimeout !== undefined && {
      defaultExecutionStartToCloseTimeout:
        input.defaultExecutionStartToCloseTimeout
    }),
    ...(input.defaultLambdaRole !== undefined && {
      defaultLambdaRole: input.defaultLambdaRole
    }),
    ...(input.defaultTaskList !== undefined && {
      defaultTaskList: serializeAws_json1_0TaskList(
        input.defaultTaskList,
        context
      )
    }),
    ...(input.defaultTaskPriority !== undefined && {
      defaultTaskPriority: input.defaultTaskPriority
    }),
    ...(input.defaultTaskStartToCloseTimeout !== undefined && {
      defaultTaskStartToCloseTimeout: input.defaultTaskStartToCloseTimeout
    }),
    ...(input.description !== undefined && { description: input.description }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_json1_0RequestCancelWorkflowExecutionInput = (
  input: RequestCancelWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.runId !== undefined && { runId: input.runId }),
    ...(input.workflowId !== undefined && { workflowId: input.workflowId })
  };
};

const serializeAws_json1_0RespondActivityTaskCanceledInput = (
  input: RespondActivityTaskCanceledInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && { details: input.details }),
    ...(input.taskToken !== undefined && { taskToken: input.taskToken })
  };
};

const serializeAws_json1_0RespondActivityTaskCompletedInput = (
  input: RespondActivityTaskCompletedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.result !== undefined && { result: input.result }),
    ...(input.taskToken !== undefined && { taskToken: input.taskToken })
  };
};

const serializeAws_json1_0RespondActivityTaskFailedInput = (
  input: RespondActivityTaskFailedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.details !== undefined && { details: input.details }),
    ...(input.reason !== undefined && { reason: input.reason }),
    ...(input.taskToken !== undefined && { taskToken: input.taskToken })
  };
};

const serializeAws_json1_0RespondDecisionTaskCompletedInput = (
  input: RespondDecisionTaskCompletedInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.decisions !== undefined && {
      decisions: serializeAws_json1_0DecisionList(input.decisions, context)
    }),
    ...(input.executionContext !== undefined && {
      executionContext: input.executionContext
    }),
    ...(input.taskToken !== undefined && { taskToken: input.taskToken })
  };
};

const serializeAws_json1_0SignalWorkflowExecutionInput = (
  input: SignalWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.input !== undefined && { input: input.input }),
    ...(input.runId !== undefined && { runId: input.runId }),
    ...(input.signalName !== undefined && { signalName: input.signalName }),
    ...(input.workflowId !== undefined && { workflowId: input.workflowId })
  };
};

const serializeAws_json1_0StartWorkflowExecutionInput = (
  input: StartWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy !== undefined && { childPolicy: input.childPolicy }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.executionStartToCloseTimeout !== undefined && {
      executionStartToCloseTimeout: input.executionStartToCloseTimeout
    }),
    ...(input.input !== undefined && { input: input.input }),
    ...(input.lambdaRole !== undefined && { lambdaRole: input.lambdaRole }),
    ...(input.tagList !== undefined && {
      tagList: serializeAws_json1_0TagList(input.tagList, context)
    }),
    ...(input.taskList !== undefined && {
      taskList: serializeAws_json1_0TaskList(input.taskList, context)
    }),
    ...(input.taskPriority !== undefined && {
      taskPriority: input.taskPriority
    }),
    ...(input.taskStartToCloseTimeout !== undefined && {
      taskStartToCloseTimeout: input.taskStartToCloseTimeout
    }),
    ...(input.workflowId !== undefined && { workflowId: input.workflowId }),
    ...(input.workflowType !== undefined && {
      workflowType: serializeAws_json1_0WorkflowType(
        input.workflowType,
        context
      )
    })
  };
};

const serializeAws_json1_0TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tags !== undefined && {
      tags: serializeAws_json1_0ResourceTagList(input.tags, context)
    })
  };
};

const serializeAws_json1_0TerminateWorkflowExecutionInput = (
  input: TerminateWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.childPolicy !== undefined && { childPolicy: input.childPolicy }),
    ...(input.details !== undefined && { details: input.details }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.reason !== undefined && { reason: input.reason }),
    ...(input.runId !== undefined && { runId: input.runId }),
    ...(input.workflowId !== undefined && { workflowId: input.workflowId })
  };
};

const serializeAws_json1_0UndeprecateActivityTypeInput = (
  input: UndeprecateActivityTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.activityType !== undefined && {
      activityType: serializeAws_json1_0ActivityType(
        input.activityType,
        context
      )
    }),
    ...(input.domain !== undefined && { domain: input.domain })
  };
};

const serializeAws_json1_0UndeprecateDomainInput = (
  input: UndeprecateDomainInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_json1_0UndeprecateWorkflowTypeInput = (
  input: UndeprecateWorkflowTypeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.workflowType !== undefined && {
      workflowType: serializeAws_json1_0WorkflowType(
        input.workflowType,
        context
      )
    })
  };
};

const serializeAws_json1_0UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && {
      tagKeys: serializeAws_json1_0ResourceTagKeyList(input.tagKeys, context)
    })
  };
};

const deserializeAws_json1_0ActivityTask = (
  output: any,
  context: __SerdeContext
): ActivityTask => {
  let contents: any = {
    __type: "ActivityTask",
    activityId: undefined,
    activityType: undefined,
    input: undefined,
    startedEventId: undefined,
    taskToken: undefined,
    workflowExecution: undefined
  };
  if (output.activityId !== undefined && output.activityId !== null) {
    contents.activityId = output.activityId;
  }
  if (output.activityType !== undefined && output.activityType !== null) {
    contents.activityType = deserializeAws_json1_0ActivityType(
      output.activityType,
      context
    );
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.taskToken !== undefined && output.taskToken !== null) {
    contents.taskToken = output.taskToken;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCancelRequestedEventAttributes => {
  let contents: any = {
    __type: "ActivityTaskCancelRequestedEventAttributes",
    activityId: undefined,
    decisionTaskCompletedEventId: undefined
  };
  if (output.activityId !== undefined && output.activityId !== null) {
    contents.activityId = output.activityId;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTaskCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCanceledEventAttributes => {
  let contents: any = {
    __type: "ActivityTaskCanceledEventAttributes",
    details: undefined,
    latestCancelRequestedEventId: undefined,
    scheduledEventId: undefined,
    startedEventId: undefined
  };
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (
    output.latestCancelRequestedEventId !== undefined &&
    output.latestCancelRequestedEventId !== null
  ) {
    contents.latestCancelRequestedEventId = output.latestCancelRequestedEventId;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTaskCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskCompletedEventAttributes => {
  let contents: any = {
    __type: "ActivityTaskCompletedEventAttributes",
    result: undefined,
    scheduledEventId: undefined,
    startedEventId: undefined
  };
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskFailedEventAttributes => {
  let contents: any = {
    __type: "ActivityTaskFailedEventAttributes",
    details: undefined,
    reason: undefined,
    scheduledEventId: undefined,
    startedEventId: undefined
  };
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTaskScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskScheduledEventAttributes => {
  let contents: any = {
    __type: "ActivityTaskScheduledEventAttributes",
    activityId: undefined,
    activityType: undefined,
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    heartbeatTimeout: undefined,
    input: undefined,
    scheduleToCloseTimeout: undefined,
    scheduleToStartTimeout: undefined,
    startToCloseTimeout: undefined,
    taskList: undefined,
    taskPriority: undefined
  };
  if (output.activityId !== undefined && output.activityId !== null) {
    contents.activityId = output.activityId;
  }
  if (output.activityType !== undefined && output.activityType !== null) {
    contents.activityType = deserializeAws_json1_0ActivityType(
      output.activityType,
      context
    );
  }
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (
    output.heartbeatTimeout !== undefined &&
    output.heartbeatTimeout !== null
  ) {
    contents.heartbeatTimeout = output.heartbeatTimeout;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (
    output.scheduleToCloseTimeout !== undefined &&
    output.scheduleToCloseTimeout !== null
  ) {
    contents.scheduleToCloseTimeout = output.scheduleToCloseTimeout;
  }
  if (
    output.scheduleToStartTimeout !== undefined &&
    output.scheduleToStartTimeout !== null
  ) {
    contents.scheduleToStartTimeout = output.scheduleToStartTimeout;
  }
  if (
    output.startToCloseTimeout !== undefined &&
    output.startToCloseTimeout !== null
  ) {
    contents.startToCloseTimeout = output.startToCloseTimeout;
  }
  if (output.taskList !== undefined && output.taskList !== null) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined && output.taskPriority !== null) {
    contents.taskPriority = output.taskPriority;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTaskStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskStartedEventAttributes => {
  let contents: any = {
    __type: "ActivityTaskStartedEventAttributes",
    identity: undefined,
    scheduledEventId: undefined
  };
  if (output.identity !== undefined && output.identity !== null) {
    contents.identity = output.identity;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTaskStatus = (
  output: any,
  context: __SerdeContext
): ActivityTaskStatus => {
  let contents: any = {
    __type: "ActivityTaskStatus",
    cancelRequested: undefined
  };
  if (output.cancelRequested !== undefined && output.cancelRequested !== null) {
    contents.cancelRequested = output.cancelRequested;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTaskTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): ActivityTaskTimedOutEventAttributes => {
  let contents: any = {
    __type: "ActivityTaskTimedOutEventAttributes",
    details: undefined,
    scheduledEventId: undefined,
    startedEventId: undefined,
    timeoutType: undefined
  };
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timeoutType !== undefined && output.timeoutType !== null) {
    contents.timeoutType = output.timeoutType;
  }
  return contents;
};

const deserializeAws_json1_0ActivityType = (
  output: any,
  context: __SerdeContext
): ActivityType => {
  let contents: any = {
    __type: "ActivityType",
    name: undefined,
    version: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTypeConfiguration = (
  output: any,
  context: __SerdeContext
): ActivityTypeConfiguration => {
  let contents: any = {
    __type: "ActivityTypeConfiguration",
    defaultTaskHeartbeatTimeout: undefined,
    defaultTaskList: undefined,
    defaultTaskPriority: undefined,
    defaultTaskScheduleToCloseTimeout: undefined,
    defaultTaskScheduleToStartTimeout: undefined,
    defaultTaskStartToCloseTimeout: undefined
  };
  if (
    output.defaultTaskHeartbeatTimeout !== undefined &&
    output.defaultTaskHeartbeatTimeout !== null
  ) {
    contents.defaultTaskHeartbeatTimeout = output.defaultTaskHeartbeatTimeout;
  }
  if (output.defaultTaskList !== undefined && output.defaultTaskList !== null) {
    contents.defaultTaskList = deserializeAws_json1_0TaskList(
      output.defaultTaskList,
      context
    );
  }
  if (
    output.defaultTaskPriority !== undefined &&
    output.defaultTaskPriority !== null
  ) {
    contents.defaultTaskPriority = output.defaultTaskPriority;
  }
  if (
    output.defaultTaskScheduleToCloseTimeout !== undefined &&
    output.defaultTaskScheduleToCloseTimeout !== null
  ) {
    contents.defaultTaskScheduleToCloseTimeout =
      output.defaultTaskScheduleToCloseTimeout;
  }
  if (
    output.defaultTaskScheduleToStartTimeout !== undefined &&
    output.defaultTaskScheduleToStartTimeout !== null
  ) {
    contents.defaultTaskScheduleToStartTimeout =
      output.defaultTaskScheduleToStartTimeout;
  }
  if (
    output.defaultTaskStartToCloseTimeout !== undefined &&
    output.defaultTaskStartToCloseTimeout !== null
  ) {
    contents.defaultTaskStartToCloseTimeout =
      output.defaultTaskStartToCloseTimeout;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTypeDetail = (
  output: any,
  context: __SerdeContext
): ActivityTypeDetail => {
  let contents: any = {
    __type: "ActivityTypeDetail",
    configuration: undefined,
    typeInfo: undefined
  };
  if (output.configuration !== undefined && output.configuration !== null) {
    contents.configuration = deserializeAws_json1_0ActivityTypeConfiguration(
      output.configuration,
      context
    );
  }
  if (output.typeInfo !== undefined && output.typeInfo !== null) {
    contents.typeInfo = deserializeAws_json1_0ActivityTypeInfo(
      output.typeInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ActivityTypeInfo = (
  output: any,
  context: __SerdeContext
): ActivityTypeInfo => {
  let contents: any = {
    __type: "ActivityTypeInfo",
    activityType: undefined,
    creationDate: undefined,
    deprecationDate: undefined,
    description: undefined,
    status: undefined
  };
  if (output.activityType !== undefined && output.activityType !== null) {
    contents.activityType = deserializeAws_json1_0ActivityType(
      output.activityType,
      context
    );
  }
  if (output.creationDate !== undefined && output.creationDate !== null) {
    contents.creationDate = new Date(Math.round(output.creationDate * 1000));
  }
  if (output.deprecationDate !== undefined && output.deprecationDate !== null) {
    contents.deprecationDate = new Date(
      Math.round(output.deprecationDate * 1000)
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTypeInfoList = (
  output: any,
  context: __SerdeContext
): ActivityTypeInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ActivityTypeInfo(entry, context)
  );
};

const deserializeAws_json1_0ActivityTypeInfos = (
  output: any,
  context: __SerdeContext
): ActivityTypeInfos => {
  let contents: any = {
    __type: "ActivityTypeInfos",
    nextPageToken: undefined,
    typeInfos: undefined
  };
  if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.typeInfos !== undefined && output.typeInfos !== null) {
    contents.typeInfos = deserializeAws_json1_0ActivityTypeInfoList(
      output.typeInfos,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0CancelTimerFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CancelTimerFailedEventAttributes => {
  let contents: any = {
    __type: "CancelTimerFailedEventAttributes",
    cause: undefined,
    decisionTaskCompletedEventId: undefined,
    timerId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.timerId !== undefined && output.timerId !== null) {
    contents.timerId = output.timerId;
  }
  return contents;
};

const deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CancelWorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "CancelWorkflowExecutionFailedEventAttributes",
    cause: undefined,
    decisionTaskCompletedEventId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  return contents;
};

const deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionCanceledEventAttributes => {
  let contents: any = {
    __type: "ChildWorkflowExecutionCanceledEventAttributes",
    details: undefined,
    initiatedEventId: undefined,
    startedEventId: undefined,
    workflowExecution: undefined,
    workflowType: undefined
  };
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionCompletedEventAttributes => {
  let contents: any = {
    __type: "ChildWorkflowExecutionCompletedEventAttributes",
    initiatedEventId: undefined,
    result: undefined,
    startedEventId: undefined,
    workflowExecution: undefined,
    workflowType: undefined
  };
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "ChildWorkflowExecutionFailedEventAttributes",
    details: undefined,
    initiatedEventId: undefined,
    reason: undefined,
    startedEventId: undefined,
    workflowExecution: undefined,
    workflowType: undefined
  };
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionStartedEventAttributes => {
  let contents: any = {
    __type: "ChildWorkflowExecutionStartedEventAttributes",
    initiatedEventId: undefined,
    workflowExecution: undefined,
    workflowType: undefined
  };
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionTerminatedEventAttributes => {
  let contents: any = {
    __type: "ChildWorkflowExecutionTerminatedEventAttributes",
    initiatedEventId: undefined,
    startedEventId: undefined,
    workflowExecution: undefined,
    workflowType: undefined
  };
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): ChildWorkflowExecutionTimedOutEventAttributes => {
  let contents: any = {
    __type: "ChildWorkflowExecutionTimedOutEventAttributes",
    initiatedEventId: undefined,
    startedEventId: undefined,
    timeoutType: undefined,
    workflowExecution: undefined,
    workflowType: undefined
  };
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timeoutType !== undefined && output.timeoutType !== null) {
    contents.timeoutType = output.timeoutType;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): CompleteWorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "CompleteWorkflowExecutionFailedEventAttributes",
    cause: undefined,
    decisionTaskCompletedEventId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  return contents;
};

const deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ContinueAsNewWorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "ContinueAsNewWorkflowExecutionFailedEventAttributes",
    cause: undefined,
    decisionTaskCompletedEventId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  return contents;
};

const deserializeAws_json1_0DecisionTask = (
  output: any,
  context: __SerdeContext
): DecisionTask => {
  let contents: any = {
    __type: "DecisionTask",
    events: undefined,
    nextPageToken: undefined,
    previousStartedEventId: undefined,
    startedEventId: undefined,
    taskToken: undefined,
    workflowExecution: undefined,
    workflowType: undefined
  };
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_json1_0HistoryEventList(
      output.events,
      context
    );
  }
  if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (
    output.previousStartedEventId !== undefined &&
    output.previousStartedEventId !== null
  ) {
    contents.previousStartedEventId = output.previousStartedEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.taskToken !== undefined && output.taskToken !== null) {
    contents.taskToken = output.taskToken;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DecisionTaskCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskCompletedEventAttributes => {
  let contents: any = {
    __type: "DecisionTaskCompletedEventAttributes",
    executionContext: undefined,
    scheduledEventId: undefined,
    startedEventId: undefined
  };
  if (
    output.executionContext !== undefined &&
    output.executionContext !== null
  ) {
    contents.executionContext = output.executionContext;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  return contents;
};

const deserializeAws_json1_0DecisionTaskScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskScheduledEventAttributes => {
  let contents: any = {
    __type: "DecisionTaskScheduledEventAttributes",
    startToCloseTimeout: undefined,
    taskList: undefined,
    taskPriority: undefined
  };
  if (
    output.startToCloseTimeout !== undefined &&
    output.startToCloseTimeout !== null
  ) {
    contents.startToCloseTimeout = output.startToCloseTimeout;
  }
  if (output.taskList !== undefined && output.taskList !== null) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined && output.taskPriority !== null) {
    contents.taskPriority = output.taskPriority;
  }
  return contents;
};

const deserializeAws_json1_0DecisionTaskStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskStartedEventAttributes => {
  let contents: any = {
    __type: "DecisionTaskStartedEventAttributes",
    identity: undefined,
    scheduledEventId: undefined
  };
  if (output.identity !== undefined && output.identity !== null) {
    contents.identity = output.identity;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  return contents;
};

const deserializeAws_json1_0DecisionTaskTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): DecisionTaskTimedOutEventAttributes => {
  let contents: any = {
    __type: "DecisionTaskTimedOutEventAttributes",
    scheduledEventId: undefined,
    startedEventId: undefined,
    timeoutType: undefined
  };
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timeoutType !== undefined && output.timeoutType !== null) {
    contents.timeoutType = output.timeoutType;
  }
  return contents;
};

const deserializeAws_json1_0DefaultUndefinedFault = (
  output: any,
  context: __SerdeContext
): DefaultUndefinedFault => {
  let contents: any = {
    __type: "DefaultUndefinedFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0DomainAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): DomainAlreadyExistsFault => {
  let contents: any = {
    __type: "DomainAlreadyExistsFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0DomainConfiguration = (
  output: any,
  context: __SerdeContext
): DomainConfiguration => {
  let contents: any = {
    __type: "DomainConfiguration",
    workflowExecutionRetentionPeriodInDays: undefined
  };
  if (
    output.workflowExecutionRetentionPeriodInDays !== undefined &&
    output.workflowExecutionRetentionPeriodInDays !== null
  ) {
    contents.workflowExecutionRetentionPeriodInDays =
      output.workflowExecutionRetentionPeriodInDays;
  }
  return contents;
};

const deserializeAws_json1_0DomainDeprecatedFault = (
  output: any,
  context: __SerdeContext
): DomainDeprecatedFault => {
  let contents: any = {
    __type: "DomainDeprecatedFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0DomainDetail = (
  output: any,
  context: __SerdeContext
): DomainDetail => {
  let contents: any = {
    __type: "DomainDetail",
    configuration: undefined,
    domainInfo: undefined
  };
  if (output.configuration !== undefined && output.configuration !== null) {
    contents.configuration = deserializeAws_json1_0DomainConfiguration(
      output.configuration,
      context
    );
  }
  if (output.domainInfo !== undefined && output.domainInfo !== null) {
    contents.domainInfo = deserializeAws_json1_0DomainInfo(
      output.domainInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0DomainInfo = (
  output: any,
  context: __SerdeContext
): DomainInfo => {
  let contents: any = {
    __type: "DomainInfo",
    arn: undefined,
    description: undefined,
    name: undefined,
    status: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_0DomainInfoList = (
  output: any,
  context: __SerdeContext
): DomainInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0DomainInfo(entry, context)
  );
};

const deserializeAws_json1_0DomainInfos = (
  output: any,
  context: __SerdeContext
): DomainInfos => {
  let contents: any = {
    __type: "DomainInfos",
    domainInfos: undefined,
    nextPageToken: undefined
  };
  if (output.domainInfos !== undefined && output.domainInfos !== null) {
    contents.domainInfos = deserializeAws_json1_0DomainInfoList(
      output.domainInfos,
      context
    );
  }
  if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): ExternalWorkflowExecutionCancelRequestedEventAttributes => {
  let contents: any = {
    __type: "ExternalWorkflowExecutionCancelRequestedEventAttributes",
    initiatedEventId: undefined,
    workflowExecution: undefined
  };
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes = (
  output: any,
  context: __SerdeContext
): ExternalWorkflowExecutionSignaledEventAttributes => {
  let contents: any = {
    __type: "ExternalWorkflowExecutionSignaledEventAttributes",
    initiatedEventId: undefined,
    workflowExecution: undefined
  };
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (
    output.workflowExecution !== undefined &&
    output.workflowExecution !== null
  ) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): FailWorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "FailWorkflowExecutionFailedEventAttributes",
    cause: undefined,
    decisionTaskCompletedEventId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  return contents;
};

const deserializeAws_json1_0History = (
  output: any,
  context: __SerdeContext
): History => {
  let contents: any = {
    __type: "History",
    events: undefined,
    nextPageToken: undefined
  };
  if (output.events !== undefined && output.events !== null) {
    contents.events = deserializeAws_json1_0HistoryEventList(
      output.events,
      context
    );
  }
  if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_0HistoryEvent = (
  output: any,
  context: __SerdeContext
): HistoryEvent => {
  let contents: any = {
    __type: "HistoryEvent",
    activityTaskCancelRequestedEventAttributes: undefined,
    activityTaskCanceledEventAttributes: undefined,
    activityTaskCompletedEventAttributes: undefined,
    activityTaskFailedEventAttributes: undefined,
    activityTaskScheduledEventAttributes: undefined,
    activityTaskStartedEventAttributes: undefined,
    activityTaskTimedOutEventAttributes: undefined,
    cancelTimerFailedEventAttributes: undefined,
    cancelWorkflowExecutionFailedEventAttributes: undefined,
    childWorkflowExecutionCanceledEventAttributes: undefined,
    childWorkflowExecutionCompletedEventAttributes: undefined,
    childWorkflowExecutionFailedEventAttributes: undefined,
    childWorkflowExecutionStartedEventAttributes: undefined,
    childWorkflowExecutionTerminatedEventAttributes: undefined,
    childWorkflowExecutionTimedOutEventAttributes: undefined,
    completeWorkflowExecutionFailedEventAttributes: undefined,
    continueAsNewWorkflowExecutionFailedEventAttributes: undefined,
    decisionTaskCompletedEventAttributes: undefined,
    decisionTaskScheduledEventAttributes: undefined,
    decisionTaskStartedEventAttributes: undefined,
    decisionTaskTimedOutEventAttributes: undefined,
    eventId: undefined,
    eventTimestamp: undefined,
    eventType: undefined,
    externalWorkflowExecutionCancelRequestedEventAttributes: undefined,
    externalWorkflowExecutionSignaledEventAttributes: undefined,
    failWorkflowExecutionFailedEventAttributes: undefined,
    lambdaFunctionCompletedEventAttributes: undefined,
    lambdaFunctionFailedEventAttributes: undefined,
    lambdaFunctionScheduledEventAttributes: undefined,
    lambdaFunctionStartedEventAttributes: undefined,
    lambdaFunctionTimedOutEventAttributes: undefined,
    markerRecordedEventAttributes: undefined,
    recordMarkerFailedEventAttributes: undefined,
    requestCancelActivityTaskFailedEventAttributes: undefined,
    requestCancelExternalWorkflowExecutionFailedEventAttributes: undefined,
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes: undefined,
    scheduleActivityTaskFailedEventAttributes: undefined,
    scheduleLambdaFunctionFailedEventAttributes: undefined,
    signalExternalWorkflowExecutionFailedEventAttributes: undefined,
    signalExternalWorkflowExecutionInitiatedEventAttributes: undefined,
    startChildWorkflowExecutionFailedEventAttributes: undefined,
    startChildWorkflowExecutionInitiatedEventAttributes: undefined,
    startLambdaFunctionFailedEventAttributes: undefined,
    startTimerFailedEventAttributes: undefined,
    timerCanceledEventAttributes: undefined,
    timerFiredEventAttributes: undefined,
    timerStartedEventAttributes: undefined,
    workflowExecutionCancelRequestedEventAttributes: undefined,
    workflowExecutionCanceledEventAttributes: undefined,
    workflowExecutionCompletedEventAttributes: undefined,
    workflowExecutionContinuedAsNewEventAttributes: undefined,
    workflowExecutionFailedEventAttributes: undefined,
    workflowExecutionSignaledEventAttributes: undefined,
    workflowExecutionStartedEventAttributes: undefined,
    workflowExecutionTerminatedEventAttributes: undefined,
    workflowExecutionTimedOutEventAttributes: undefined
  };
  if (
    output.activityTaskCancelRequestedEventAttributes !== undefined &&
    output.activityTaskCancelRequestedEventAttributes !== null
  ) {
    contents.activityTaskCancelRequestedEventAttributes = deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes(
      output.activityTaskCancelRequestedEventAttributes,
      context
    );
  }
  if (
    output.activityTaskCanceledEventAttributes !== undefined &&
    output.activityTaskCanceledEventAttributes !== null
  ) {
    contents.activityTaskCanceledEventAttributes = deserializeAws_json1_0ActivityTaskCanceledEventAttributes(
      output.activityTaskCanceledEventAttributes,
      context
    );
  }
  if (
    output.activityTaskCompletedEventAttributes !== undefined &&
    output.activityTaskCompletedEventAttributes !== null
  ) {
    contents.activityTaskCompletedEventAttributes = deserializeAws_json1_0ActivityTaskCompletedEventAttributes(
      output.activityTaskCompletedEventAttributes,
      context
    );
  }
  if (
    output.activityTaskFailedEventAttributes !== undefined &&
    output.activityTaskFailedEventAttributes !== null
  ) {
    contents.activityTaskFailedEventAttributes = deserializeAws_json1_0ActivityTaskFailedEventAttributes(
      output.activityTaskFailedEventAttributes,
      context
    );
  }
  if (
    output.activityTaskScheduledEventAttributes !== undefined &&
    output.activityTaskScheduledEventAttributes !== null
  ) {
    contents.activityTaskScheduledEventAttributes = deserializeAws_json1_0ActivityTaskScheduledEventAttributes(
      output.activityTaskScheduledEventAttributes,
      context
    );
  }
  if (
    output.activityTaskStartedEventAttributes !== undefined &&
    output.activityTaskStartedEventAttributes !== null
  ) {
    contents.activityTaskStartedEventAttributes = deserializeAws_json1_0ActivityTaskStartedEventAttributes(
      output.activityTaskStartedEventAttributes,
      context
    );
  }
  if (
    output.activityTaskTimedOutEventAttributes !== undefined &&
    output.activityTaskTimedOutEventAttributes !== null
  ) {
    contents.activityTaskTimedOutEventAttributes = deserializeAws_json1_0ActivityTaskTimedOutEventAttributes(
      output.activityTaskTimedOutEventAttributes,
      context
    );
  }
  if (
    output.cancelTimerFailedEventAttributes !== undefined &&
    output.cancelTimerFailedEventAttributes !== null
  ) {
    contents.cancelTimerFailedEventAttributes = deserializeAws_json1_0CancelTimerFailedEventAttributes(
      output.cancelTimerFailedEventAttributes,
      context
    );
  }
  if (
    output.cancelWorkflowExecutionFailedEventAttributes !== undefined &&
    output.cancelWorkflowExecutionFailedEventAttributes !== null
  ) {
    contents.cancelWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes(
      output.cancelWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.childWorkflowExecutionCanceledEventAttributes !== undefined &&
    output.childWorkflowExecutionCanceledEventAttributes !== null
  ) {
    contents.childWorkflowExecutionCanceledEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes(
      output.childWorkflowExecutionCanceledEventAttributes,
      context
    );
  }
  if (
    output.childWorkflowExecutionCompletedEventAttributes !== undefined &&
    output.childWorkflowExecutionCompletedEventAttributes !== null
  ) {
    contents.childWorkflowExecutionCompletedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes(
      output.childWorkflowExecutionCompletedEventAttributes,
      context
    );
  }
  if (
    output.childWorkflowExecutionFailedEventAttributes !== undefined &&
    output.childWorkflowExecutionFailedEventAttributes !== null
  ) {
    contents.childWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes(
      output.childWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.childWorkflowExecutionStartedEventAttributes !== undefined &&
    output.childWorkflowExecutionStartedEventAttributes !== null
  ) {
    contents.childWorkflowExecutionStartedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes(
      output.childWorkflowExecutionStartedEventAttributes,
      context
    );
  }
  if (
    output.childWorkflowExecutionTerminatedEventAttributes !== undefined &&
    output.childWorkflowExecutionTerminatedEventAttributes !== null
  ) {
    contents.childWorkflowExecutionTerminatedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes(
      output.childWorkflowExecutionTerminatedEventAttributes,
      context
    );
  }
  if (
    output.childWorkflowExecutionTimedOutEventAttributes !== undefined &&
    output.childWorkflowExecutionTimedOutEventAttributes !== null
  ) {
    contents.childWorkflowExecutionTimedOutEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes(
      output.childWorkflowExecutionTimedOutEventAttributes,
      context
    );
  }
  if (
    output.completeWorkflowExecutionFailedEventAttributes !== undefined &&
    output.completeWorkflowExecutionFailedEventAttributes !== null
  ) {
    contents.completeWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes(
      output.completeWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.continueAsNewWorkflowExecutionFailedEventAttributes !== undefined &&
    output.continueAsNewWorkflowExecutionFailedEventAttributes !== null
  ) {
    contents.continueAsNewWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes(
      output.continueAsNewWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.decisionTaskCompletedEventAttributes !== undefined &&
    output.decisionTaskCompletedEventAttributes !== null
  ) {
    contents.decisionTaskCompletedEventAttributes = deserializeAws_json1_0DecisionTaskCompletedEventAttributes(
      output.decisionTaskCompletedEventAttributes,
      context
    );
  }
  if (
    output.decisionTaskScheduledEventAttributes !== undefined &&
    output.decisionTaskScheduledEventAttributes !== null
  ) {
    contents.decisionTaskScheduledEventAttributes = deserializeAws_json1_0DecisionTaskScheduledEventAttributes(
      output.decisionTaskScheduledEventAttributes,
      context
    );
  }
  if (
    output.decisionTaskStartedEventAttributes !== undefined &&
    output.decisionTaskStartedEventAttributes !== null
  ) {
    contents.decisionTaskStartedEventAttributes = deserializeAws_json1_0DecisionTaskStartedEventAttributes(
      output.decisionTaskStartedEventAttributes,
      context
    );
  }
  if (
    output.decisionTaskTimedOutEventAttributes !== undefined &&
    output.decisionTaskTimedOutEventAttributes !== null
  ) {
    contents.decisionTaskTimedOutEventAttributes = deserializeAws_json1_0DecisionTaskTimedOutEventAttributes(
      output.decisionTaskTimedOutEventAttributes,
      context
    );
  }
  if (output.eventId !== undefined && output.eventId !== null) {
    contents.eventId = output.eventId;
  }
  if (output.eventTimestamp !== undefined && output.eventTimestamp !== null) {
    contents.eventTimestamp = new Date(
      Math.round(output.eventTimestamp * 1000)
    );
  }
  if (output.eventType !== undefined && output.eventType !== null) {
    contents.eventType = output.eventType;
  }
  if (
    output.externalWorkflowExecutionCancelRequestedEventAttributes !==
      undefined &&
    output.externalWorkflowExecutionCancelRequestedEventAttributes !== null
  ) {
    contents.externalWorkflowExecutionCancelRequestedEventAttributes = deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes(
      output.externalWorkflowExecutionCancelRequestedEventAttributes,
      context
    );
  }
  if (
    output.externalWorkflowExecutionSignaledEventAttributes !== undefined &&
    output.externalWorkflowExecutionSignaledEventAttributes !== null
  ) {
    contents.externalWorkflowExecutionSignaledEventAttributes = deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes(
      output.externalWorkflowExecutionSignaledEventAttributes,
      context
    );
  }
  if (
    output.failWorkflowExecutionFailedEventAttributes !== undefined &&
    output.failWorkflowExecutionFailedEventAttributes !== null
  ) {
    contents.failWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes(
      output.failWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.lambdaFunctionCompletedEventAttributes !== undefined &&
    output.lambdaFunctionCompletedEventAttributes !== null
  ) {
    contents.lambdaFunctionCompletedEventAttributes = deserializeAws_json1_0LambdaFunctionCompletedEventAttributes(
      output.lambdaFunctionCompletedEventAttributes,
      context
    );
  }
  if (
    output.lambdaFunctionFailedEventAttributes !== undefined &&
    output.lambdaFunctionFailedEventAttributes !== null
  ) {
    contents.lambdaFunctionFailedEventAttributes = deserializeAws_json1_0LambdaFunctionFailedEventAttributes(
      output.lambdaFunctionFailedEventAttributes,
      context
    );
  }
  if (
    output.lambdaFunctionScheduledEventAttributes !== undefined &&
    output.lambdaFunctionScheduledEventAttributes !== null
  ) {
    contents.lambdaFunctionScheduledEventAttributes = deserializeAws_json1_0LambdaFunctionScheduledEventAttributes(
      output.lambdaFunctionScheduledEventAttributes,
      context
    );
  }
  if (
    output.lambdaFunctionStartedEventAttributes !== undefined &&
    output.lambdaFunctionStartedEventAttributes !== null
  ) {
    contents.lambdaFunctionStartedEventAttributes = deserializeAws_json1_0LambdaFunctionStartedEventAttributes(
      output.lambdaFunctionStartedEventAttributes,
      context
    );
  }
  if (
    output.lambdaFunctionTimedOutEventAttributes !== undefined &&
    output.lambdaFunctionTimedOutEventAttributes !== null
  ) {
    contents.lambdaFunctionTimedOutEventAttributes = deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes(
      output.lambdaFunctionTimedOutEventAttributes,
      context
    );
  }
  if (
    output.markerRecordedEventAttributes !== undefined &&
    output.markerRecordedEventAttributes !== null
  ) {
    contents.markerRecordedEventAttributes = deserializeAws_json1_0MarkerRecordedEventAttributes(
      output.markerRecordedEventAttributes,
      context
    );
  }
  if (
    output.recordMarkerFailedEventAttributes !== undefined &&
    output.recordMarkerFailedEventAttributes !== null
  ) {
    contents.recordMarkerFailedEventAttributes = deserializeAws_json1_0RecordMarkerFailedEventAttributes(
      output.recordMarkerFailedEventAttributes,
      context
    );
  }
  if (
    output.requestCancelActivityTaskFailedEventAttributes !== undefined &&
    output.requestCancelActivityTaskFailedEventAttributes !== null
  ) {
    contents.requestCancelActivityTaskFailedEventAttributes = deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes(
      output.requestCancelActivityTaskFailedEventAttributes,
      context
    );
  }
  if (
    output.requestCancelExternalWorkflowExecutionFailedEventAttributes !==
      undefined &&
    output.requestCancelExternalWorkflowExecutionFailedEventAttributes !== null
  ) {
    contents.requestCancelExternalWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes(
      output.requestCancelExternalWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !==
      undefined &&
    output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !==
      null
  ) {
    contents.requestCancelExternalWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(
      output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes,
      context
    );
  }
  if (
    output.scheduleActivityTaskFailedEventAttributes !== undefined &&
    output.scheduleActivityTaskFailedEventAttributes !== null
  ) {
    contents.scheduleActivityTaskFailedEventAttributes = deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes(
      output.scheduleActivityTaskFailedEventAttributes,
      context
    );
  }
  if (
    output.scheduleLambdaFunctionFailedEventAttributes !== undefined &&
    output.scheduleLambdaFunctionFailedEventAttributes !== null
  ) {
    contents.scheduleLambdaFunctionFailedEventAttributes = deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes(
      output.scheduleLambdaFunctionFailedEventAttributes,
      context
    );
  }
  if (
    output.signalExternalWorkflowExecutionFailedEventAttributes !== undefined &&
    output.signalExternalWorkflowExecutionFailedEventAttributes !== null
  ) {
    contents.signalExternalWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes(
      output.signalExternalWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.signalExternalWorkflowExecutionInitiatedEventAttributes !==
      undefined &&
    output.signalExternalWorkflowExecutionInitiatedEventAttributes !== null
  ) {
    contents.signalExternalWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes(
      output.signalExternalWorkflowExecutionInitiatedEventAttributes,
      context
    );
  }
  if (
    output.startChildWorkflowExecutionFailedEventAttributes !== undefined &&
    output.startChildWorkflowExecutionFailedEventAttributes !== null
  ) {
    contents.startChildWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes(
      output.startChildWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.startChildWorkflowExecutionInitiatedEventAttributes !== undefined &&
    output.startChildWorkflowExecutionInitiatedEventAttributes !== null
  ) {
    contents.startChildWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes(
      output.startChildWorkflowExecutionInitiatedEventAttributes,
      context
    );
  }
  if (
    output.startLambdaFunctionFailedEventAttributes !== undefined &&
    output.startLambdaFunctionFailedEventAttributes !== null
  ) {
    contents.startLambdaFunctionFailedEventAttributes = deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes(
      output.startLambdaFunctionFailedEventAttributes,
      context
    );
  }
  if (
    output.startTimerFailedEventAttributes !== undefined &&
    output.startTimerFailedEventAttributes !== null
  ) {
    contents.startTimerFailedEventAttributes = deserializeAws_json1_0StartTimerFailedEventAttributes(
      output.startTimerFailedEventAttributes,
      context
    );
  }
  if (
    output.timerCanceledEventAttributes !== undefined &&
    output.timerCanceledEventAttributes !== null
  ) {
    contents.timerCanceledEventAttributes = deserializeAws_json1_0TimerCanceledEventAttributes(
      output.timerCanceledEventAttributes,
      context
    );
  }
  if (
    output.timerFiredEventAttributes !== undefined &&
    output.timerFiredEventAttributes !== null
  ) {
    contents.timerFiredEventAttributes = deserializeAws_json1_0TimerFiredEventAttributes(
      output.timerFiredEventAttributes,
      context
    );
  }
  if (
    output.timerStartedEventAttributes !== undefined &&
    output.timerStartedEventAttributes !== null
  ) {
    contents.timerStartedEventAttributes = deserializeAws_json1_0TimerStartedEventAttributes(
      output.timerStartedEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionCancelRequestedEventAttributes !== undefined &&
    output.workflowExecutionCancelRequestedEventAttributes !== null
  ) {
    contents.workflowExecutionCancelRequestedEventAttributes = deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes(
      output.workflowExecutionCancelRequestedEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionCanceledEventAttributes !== undefined &&
    output.workflowExecutionCanceledEventAttributes !== null
  ) {
    contents.workflowExecutionCanceledEventAttributes = deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes(
      output.workflowExecutionCanceledEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionCompletedEventAttributes !== undefined &&
    output.workflowExecutionCompletedEventAttributes !== null
  ) {
    contents.workflowExecutionCompletedEventAttributes = deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes(
      output.workflowExecutionCompletedEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionContinuedAsNewEventAttributes !== undefined &&
    output.workflowExecutionContinuedAsNewEventAttributes !== null
  ) {
    contents.workflowExecutionContinuedAsNewEventAttributes = deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes(
      output.workflowExecutionContinuedAsNewEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionFailedEventAttributes !== undefined &&
    output.workflowExecutionFailedEventAttributes !== null
  ) {
    contents.workflowExecutionFailedEventAttributes = deserializeAws_json1_0WorkflowExecutionFailedEventAttributes(
      output.workflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionSignaledEventAttributes !== undefined &&
    output.workflowExecutionSignaledEventAttributes !== null
  ) {
    contents.workflowExecutionSignaledEventAttributes = deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes(
      output.workflowExecutionSignaledEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionStartedEventAttributes !== undefined &&
    output.workflowExecutionStartedEventAttributes !== null
  ) {
    contents.workflowExecutionStartedEventAttributes = deserializeAws_json1_0WorkflowExecutionStartedEventAttributes(
      output.workflowExecutionStartedEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionTerminatedEventAttributes !== undefined &&
    output.workflowExecutionTerminatedEventAttributes !== null
  ) {
    contents.workflowExecutionTerminatedEventAttributes = deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes(
      output.workflowExecutionTerminatedEventAttributes,
      context
    );
  }
  if (
    output.workflowExecutionTimedOutEventAttributes !== undefined &&
    output.workflowExecutionTimedOutEventAttributes !== null
  ) {
    contents.workflowExecutionTimedOutEventAttributes = deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes(
      output.workflowExecutionTimedOutEventAttributes,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0HistoryEventList = (
  output: any,
  context: __SerdeContext
): HistoryEvent[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0HistoryEvent(entry, context)
  );
};

const deserializeAws_json1_0LambdaFunctionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionCompletedEventAttributes => {
  let contents: any = {
    __type: "LambdaFunctionCompletedEventAttributes",
    result: undefined,
    scheduledEventId: undefined,
    startedEventId: undefined
  };
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionFailedEventAttributes => {
  let contents: any = {
    __type: "LambdaFunctionFailedEventAttributes",
    details: undefined,
    reason: undefined,
    scheduledEventId: undefined,
    startedEventId: undefined
  };
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionScheduledEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionScheduledEventAttributes => {
  let contents: any = {
    __type: "LambdaFunctionScheduledEventAttributes",
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    id: undefined,
    input: undefined,
    name: undefined,
    startToCloseTimeout: undefined
  };
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.startToCloseTimeout !== undefined &&
    output.startToCloseTimeout !== null
  ) {
    contents.startToCloseTimeout = output.startToCloseTimeout;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionStartedEventAttributes => {
  let contents: any = {
    __type: "LambdaFunctionStartedEventAttributes",
    scheduledEventId: undefined
  };
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  return contents;
};

const deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): LambdaFunctionTimedOutEventAttributes => {
  let contents: any = {
    __type: "LambdaFunctionTimedOutEventAttributes",
    scheduledEventId: undefined,
    startedEventId: undefined,
    timeoutType: undefined
  };
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timeoutType !== undefined && output.timeoutType !== null) {
    contents.timeoutType = output.timeoutType;
  }
  return contents;
};

const deserializeAws_json1_0LimitExceededFault = (
  output: any,
  context: __SerdeContext
): LimitExceededFault => {
  let contents: any = {
    __type: "LimitExceededFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0MarkerRecordedEventAttributes = (
  output: any,
  context: __SerdeContext
): MarkerRecordedEventAttributes => {
  let contents: any = {
    __type: "MarkerRecordedEventAttributes",
    decisionTaskCompletedEventId: undefined,
    details: undefined,
    markerName: undefined
  };
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (output.markerName !== undefined && output.markerName !== null) {
    contents.markerName = output.markerName;
  }
  return contents;
};

const deserializeAws_json1_0OperationNotPermittedFault = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedFault => {
  let contents: any = {
    __type: "OperationNotPermittedFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0PendingTaskCount = (
  output: any,
  context: __SerdeContext
): PendingTaskCount => {
  let contents: any = {
    __type: "PendingTaskCount",
    count: undefined,
    truncated: undefined
  };
  if (output.count !== undefined && output.count !== null) {
    contents.count = output.count;
  }
  if (output.truncated !== undefined && output.truncated !== null) {
    contents.truncated = output.truncated;
  }
  return contents;
};

const deserializeAws_json1_0RecordMarkerFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RecordMarkerFailedEventAttributes => {
  let contents: any = {
    __type: "RecordMarkerFailedEventAttributes",
    cause: undefined,
    decisionTaskCompletedEventId: undefined,
    markerName: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.markerName !== undefined && output.markerName !== null) {
    contents.markerName = output.markerName;
  }
  return contents;
};

const deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelActivityTaskFailedEventAttributes => {
  let contents: any = {
    __type: "RequestCancelActivityTaskFailedEventAttributes",
    activityId: undefined,
    cause: undefined,
    decisionTaskCompletedEventId: undefined
  };
  if (output.activityId !== undefined && output.activityId !== null) {
    contents.activityId = output.activityId;
  }
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  return contents;
};

const deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelExternalWorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "RequestCancelExternalWorkflowExecutionFailedEventAttributes",
    cause: undefined,
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    initiatedEventId: undefined,
    runId: undefined,
    workflowId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.runId !== undefined && output.runId !== null) {
    contents.runId = output.runId;
  }
  if (output.workflowId !== undefined && output.workflowId !== null) {
    contents.workflowId = output.workflowId;
  }
  return contents;
};

const deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): RequestCancelExternalWorkflowExecutionInitiatedEventAttributes => {
  let contents: any = {
    __type: "RequestCancelExternalWorkflowExecutionInitiatedEventAttributes",
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    runId: undefined,
    workflowId: undefined
  };
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.runId !== undefined && output.runId !== null) {
    contents.runId = output.runId;
  }
  if (output.workflowId !== undefined && output.workflowId !== null) {
    contents.workflowId = output.workflowId;
  }
  return contents;
};

const deserializeAws_json1_0ResourceTag = (
  output: any,
  context: __SerdeContext
): ResourceTag => {
  let contents: any = {
    __type: "ResourceTag",
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

const deserializeAws_json1_0ResourceTagList = (
  output: any,
  context: __SerdeContext
): ResourceTag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0ResourceTag(entry, context)
  );
};

const deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ScheduleActivityTaskFailedEventAttributes => {
  let contents: any = {
    __type: "ScheduleActivityTaskFailedEventAttributes",
    activityId: undefined,
    activityType: undefined,
    cause: undefined,
    decisionTaskCompletedEventId: undefined
  };
  if (output.activityId !== undefined && output.activityId !== null) {
    contents.activityId = output.activityId;
  }
  if (output.activityType !== undefined && output.activityType !== null) {
    contents.activityType = deserializeAws_json1_0ActivityType(
      output.activityType,
      context
    );
  }
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  return contents;
};

const deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): ScheduleLambdaFunctionFailedEventAttributes => {
  let contents: any = {
    __type: "ScheduleLambdaFunctionFailedEventAttributes",
    cause: undefined,
    decisionTaskCompletedEventId: undefined,
    id: undefined,
    name: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): SignalExternalWorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "SignalExternalWorkflowExecutionFailedEventAttributes",
    cause: undefined,
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    initiatedEventId: undefined,
    runId: undefined,
    workflowId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.runId !== undefined && output.runId !== null) {
    contents.runId = output.runId;
  }
  if (output.workflowId !== undefined && output.workflowId !== null) {
    contents.workflowId = output.workflowId;
  }
  return contents;
};

const deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): SignalExternalWorkflowExecutionInitiatedEventAttributes => {
  let contents: any = {
    __type: "SignalExternalWorkflowExecutionInitiatedEventAttributes",
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    input: undefined,
    runId: undefined,
    signalName: undefined,
    workflowId: undefined
  };
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.runId !== undefined && output.runId !== null) {
    contents.runId = output.runId;
  }
  if (output.signalName !== undefined && output.signalName !== null) {
    contents.signalName = output.signalName;
  }
  if (output.workflowId !== undefined && output.workflowId !== null) {
    contents.workflowId = output.workflowId;
  }
  return contents;
};

const deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartChildWorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "StartChildWorkflowExecutionFailedEventAttributes",
    cause: undefined,
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    initiatedEventId: undefined,
    workflowId: undefined,
    workflowType: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (
    output.initiatedEventId !== undefined &&
    output.initiatedEventId !== null
  ) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.workflowId !== undefined && output.workflowId !== null) {
    contents.workflowId = output.workflowId;
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartChildWorkflowExecutionInitiatedEventAttributes => {
  let contents: any = {
    __type: "StartChildWorkflowExecutionInitiatedEventAttributes",
    childPolicy: undefined,
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    executionStartToCloseTimeout: undefined,
    input: undefined,
    lambdaRole: undefined,
    tagList: undefined,
    taskList: undefined,
    taskPriority: undefined,
    taskStartToCloseTimeout: undefined,
    workflowId: undefined,
    workflowType: undefined
  };
  if (output.childPolicy !== undefined && output.childPolicy !== null) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (
    output.executionStartToCloseTimeout !== undefined &&
    output.executionStartToCloseTimeout !== null
  ) {
    contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.lambdaRole !== undefined && output.lambdaRole !== null) {
    contents.lambdaRole = output.lambdaRole;
  }
  if (output.tagList !== undefined && output.tagList !== null) {
    contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
  }
  if (output.taskList !== undefined && output.taskList !== null) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined && output.taskPriority !== null) {
    contents.taskPriority = output.taskPriority;
  }
  if (
    output.taskStartToCloseTimeout !== undefined &&
    output.taskStartToCloseTimeout !== null
  ) {
    contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
  }
  if (output.workflowId !== undefined && output.workflowId !== null) {
    contents.workflowId = output.workflowId;
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartLambdaFunctionFailedEventAttributes => {
  let contents: any = {
    __type: "StartLambdaFunctionFailedEventAttributes",
    cause: undefined,
    message: undefined,
    scheduledEventId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (
    output.scheduledEventId !== undefined &&
    output.scheduledEventId !== null
  ) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  return contents;
};

const deserializeAws_json1_0StartTimerFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): StartTimerFailedEventAttributes => {
  let contents: any = {
    __type: "StartTimerFailedEventAttributes",
    cause: undefined,
    decisionTaskCompletedEventId: undefined,
    timerId: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.timerId !== undefined && output.timerId !== null) {
    contents.timerId = output.timerId;
  }
  return contents;
};

const deserializeAws_json1_0TagList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_0TaskList = (
  output: any,
  context: __SerdeContext
): TaskList => {
  let contents: any = {
    __type: "TaskList",
    name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_0TimerCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): TimerCanceledEventAttributes => {
  let contents: any = {
    __type: "TimerCanceledEventAttributes",
    decisionTaskCompletedEventId: undefined,
    startedEventId: undefined,
    timerId: undefined
  };
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timerId !== undefined && output.timerId !== null) {
    contents.timerId = output.timerId;
  }
  return contents;
};

const deserializeAws_json1_0TimerFiredEventAttributes = (
  output: any,
  context: __SerdeContext
): TimerFiredEventAttributes => {
  let contents: any = {
    __type: "TimerFiredEventAttributes",
    startedEventId: undefined,
    timerId: undefined
  };
  if (output.startedEventId !== undefined && output.startedEventId !== null) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timerId !== undefined && output.timerId !== null) {
    contents.timerId = output.timerId;
  }
  return contents;
};

const deserializeAws_json1_0TimerStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): TimerStartedEventAttributes => {
  let contents: any = {
    __type: "TimerStartedEventAttributes",
    control: undefined,
    decisionTaskCompletedEventId: undefined,
    startToFireTimeout: undefined,
    timerId: undefined
  };
  if (output.control !== undefined && output.control !== null) {
    contents.control = output.control;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (
    output.startToFireTimeout !== undefined &&
    output.startToFireTimeout !== null
  ) {
    contents.startToFireTimeout = output.startToFireTimeout;
  }
  if (output.timerId !== undefined && output.timerId !== null) {
    contents.timerId = output.timerId;
  }
  return contents;
};

const deserializeAws_json1_0TooManyTagsFault = (
  output: any,
  context: __SerdeContext
): TooManyTagsFault => {
  let contents: any = {
    __type: "TooManyTagsFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0TypeAlreadyExistsFault = (
  output: any,
  context: __SerdeContext
): TypeAlreadyExistsFault => {
  let contents: any = {
    __type: "TypeAlreadyExistsFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0TypeDeprecatedFault = (
  output: any,
  context: __SerdeContext
): TypeDeprecatedFault => {
  let contents: any = {
    __type: "TypeDeprecatedFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0UnknownResourceFault = (
  output: any,
  context: __SerdeContext
): UnknownResourceFault => {
  let contents: any = {
    __type: "UnknownResourceFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecution = (
  output: any,
  context: __SerdeContext
): WorkflowExecution => {
  let contents: any = {
    __type: "WorkflowExecution",
    runId: undefined,
    workflowId: undefined
  };
  if (output.runId !== undefined && output.runId !== null) {
    contents.runId = output.runId;
  }
  if (output.workflowId !== undefined && output.workflowId !== null) {
    contents.workflowId = output.workflowId;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionAlreadyStartedFault => {
  let contents: any = {
    __type: "WorkflowExecutionAlreadyStartedFault",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCancelRequestedEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionCancelRequestedEventAttributes",
    cause: undefined,
    externalInitiatedEventId: undefined,
    externalWorkflowExecution: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (
    output.externalInitiatedEventId !== undefined &&
    output.externalInitiatedEventId !== null
  ) {
    contents.externalInitiatedEventId = output.externalInitiatedEventId;
  }
  if (
    output.externalWorkflowExecution !== undefined &&
    output.externalWorkflowExecution !== null
  ) {
    contents.externalWorkflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.externalWorkflowExecution,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCanceledEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionCanceledEventAttributes",
    decisionTaskCompletedEventId: undefined,
    details: undefined
  };
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCompletedEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionCompletedEventAttributes",
    decisionTaskCompletedEventId: undefined,
    result: undefined
  };
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionConfiguration = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionConfiguration => {
  let contents: any = {
    __type: "WorkflowExecutionConfiguration",
    childPolicy: undefined,
    executionStartToCloseTimeout: undefined,
    lambdaRole: undefined,
    taskList: undefined,
    taskPriority: undefined,
    taskStartToCloseTimeout: undefined
  };
  if (output.childPolicy !== undefined && output.childPolicy !== null) {
    contents.childPolicy = output.childPolicy;
  }
  if (
    output.executionStartToCloseTimeout !== undefined &&
    output.executionStartToCloseTimeout !== null
  ) {
    contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
  }
  if (output.lambdaRole !== undefined && output.lambdaRole !== null) {
    contents.lambdaRole = output.lambdaRole;
  }
  if (output.taskList !== undefined && output.taskList !== null) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined && output.taskPriority !== null) {
    contents.taskPriority = output.taskPriority;
  }
  if (
    output.taskStartToCloseTimeout !== undefined &&
    output.taskStartToCloseTimeout !== null
  ) {
    contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionContinuedAsNewEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionContinuedAsNewEventAttributes",
    childPolicy: undefined,
    decisionTaskCompletedEventId: undefined,
    executionStartToCloseTimeout: undefined,
    input: undefined,
    lambdaRole: undefined,
    newExecutionRunId: undefined,
    tagList: undefined,
    taskList: undefined,
    taskPriority: undefined,
    taskStartToCloseTimeout: undefined,
    workflowType: undefined
  };
  if (output.childPolicy !== undefined && output.childPolicy !== null) {
    contents.childPolicy = output.childPolicy;
  }
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (
    output.executionStartToCloseTimeout !== undefined &&
    output.executionStartToCloseTimeout !== null
  ) {
    contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.lambdaRole !== undefined && output.lambdaRole !== null) {
    contents.lambdaRole = output.lambdaRole;
  }
  if (
    output.newExecutionRunId !== undefined &&
    output.newExecutionRunId !== null
  ) {
    contents.newExecutionRunId = output.newExecutionRunId;
  }
  if (output.tagList !== undefined && output.tagList !== null) {
    contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
  }
  if (output.taskList !== undefined && output.taskList !== null) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined && output.taskPriority !== null) {
    contents.taskPriority = output.taskPriority;
  }
  if (
    output.taskStartToCloseTimeout !== undefined &&
    output.taskStartToCloseTimeout !== null
  ) {
    contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionCount = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionCount => {
  let contents: any = {
    __type: "WorkflowExecutionCount",
    count: undefined,
    truncated: undefined
  };
  if (output.count !== undefined && output.count !== null) {
    contents.count = output.count;
  }
  if (output.truncated !== undefined && output.truncated !== null) {
    contents.truncated = output.truncated;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionDetail = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionDetail => {
  let contents: any = {
    __type: "WorkflowExecutionDetail",
    executionConfiguration: undefined,
    executionInfo: undefined,
    latestActivityTaskTimestamp: undefined,
    latestExecutionContext: undefined,
    openCounts: undefined
  };
  if (
    output.executionConfiguration !== undefined &&
    output.executionConfiguration !== null
  ) {
    contents.executionConfiguration = deserializeAws_json1_0WorkflowExecutionConfiguration(
      output.executionConfiguration,
      context
    );
  }
  if (output.executionInfo !== undefined && output.executionInfo !== null) {
    contents.executionInfo = deserializeAws_json1_0WorkflowExecutionInfo(
      output.executionInfo,
      context
    );
  }
  if (
    output.latestActivityTaskTimestamp !== undefined &&
    output.latestActivityTaskTimestamp !== null
  ) {
    contents.latestActivityTaskTimestamp = new Date(
      Math.round(output.latestActivityTaskTimestamp * 1000)
    );
  }
  if (
    output.latestExecutionContext !== undefined &&
    output.latestExecutionContext !== null
  ) {
    contents.latestExecutionContext = output.latestExecutionContext;
  }
  if (output.openCounts !== undefined && output.openCounts !== null) {
    contents.openCounts = deserializeAws_json1_0WorkflowExecutionOpenCounts(
      output.openCounts,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionFailedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionFailedEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionFailedEventAttributes",
    decisionTaskCompletedEventId: undefined,
    details: undefined,
    reason: undefined
  };
  if (
    output.decisionTaskCompletedEventId !== undefined &&
    output.decisionTaskCompletedEventId !== null
  ) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionInfo = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionInfo => {
  let contents: any = {
    __type: "WorkflowExecutionInfo",
    cancelRequested: undefined,
    closeStatus: undefined,
    closeTimestamp: undefined,
    execution: undefined,
    executionStatus: undefined,
    parent: undefined,
    startTimestamp: undefined,
    tagList: undefined,
    workflowType: undefined
  };
  if (output.cancelRequested !== undefined && output.cancelRequested !== null) {
    contents.cancelRequested = output.cancelRequested;
  }
  if (output.closeStatus !== undefined && output.closeStatus !== null) {
    contents.closeStatus = output.closeStatus;
  }
  if (output.closeTimestamp !== undefined && output.closeTimestamp !== null) {
    contents.closeTimestamp = new Date(
      Math.round(output.closeTimestamp * 1000)
    );
  }
  if (output.execution !== undefined && output.execution !== null) {
    contents.execution = deserializeAws_json1_0WorkflowExecution(
      output.execution,
      context
    );
  }
  if (output.executionStatus !== undefined && output.executionStatus !== null) {
    contents.executionStatus = output.executionStatus;
  }
  if (output.parent !== undefined && output.parent !== null) {
    contents.parent = deserializeAws_json1_0WorkflowExecution(
      output.parent,
      context
    );
  }
  if (output.startTimestamp !== undefined && output.startTimestamp !== null) {
    contents.startTimestamp = new Date(
      Math.round(output.startTimestamp * 1000)
    );
  }
  if (output.tagList !== undefined && output.tagList !== null) {
    contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionInfoList = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0WorkflowExecutionInfo(entry, context)
  );
};

const deserializeAws_json1_0WorkflowExecutionInfos = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionInfos => {
  let contents: any = {
    __type: "WorkflowExecutionInfos",
    executionInfos: undefined,
    nextPageToken: undefined
  };
  if (output.executionInfos !== undefined && output.executionInfos !== null) {
    contents.executionInfos = deserializeAws_json1_0WorkflowExecutionInfoList(
      output.executionInfos,
      context
    );
  }
  if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
    contents.nextPageToken = output.nextPageToken;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionOpenCounts = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionOpenCounts => {
  let contents: any = {
    __type: "WorkflowExecutionOpenCounts",
    openActivityTasks: undefined,
    openChildWorkflowExecutions: undefined,
    openDecisionTasks: undefined,
    openLambdaFunctions: undefined,
    openTimers: undefined
  };
  if (
    output.openActivityTasks !== undefined &&
    output.openActivityTasks !== null
  ) {
    contents.openActivityTasks = output.openActivityTasks;
  }
  if (
    output.openChildWorkflowExecutions !== undefined &&
    output.openChildWorkflowExecutions !== null
  ) {
    contents.openChildWorkflowExecutions = output.openChildWorkflowExecutions;
  }
  if (
    output.openDecisionTasks !== undefined &&
    output.openDecisionTasks !== null
  ) {
    contents.openDecisionTasks = output.openDecisionTasks;
  }
  if (
    output.openLambdaFunctions !== undefined &&
    output.openLambdaFunctions !== null
  ) {
    contents.openLambdaFunctions = output.openLambdaFunctions;
  }
  if (output.openTimers !== undefined && output.openTimers !== null) {
    contents.openTimers = output.openTimers;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionSignaledEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionSignaledEventAttributes",
    externalInitiatedEventId: undefined,
    externalWorkflowExecution: undefined,
    input: undefined,
    signalName: undefined
  };
  if (
    output.externalInitiatedEventId !== undefined &&
    output.externalInitiatedEventId !== null
  ) {
    contents.externalInitiatedEventId = output.externalInitiatedEventId;
  }
  if (
    output.externalWorkflowExecution !== undefined &&
    output.externalWorkflowExecution !== null
  ) {
    contents.externalWorkflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.externalWorkflowExecution,
      context
    );
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.signalName !== undefined && output.signalName !== null) {
    contents.signalName = output.signalName;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionStartedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionStartedEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionStartedEventAttributes",
    childPolicy: undefined,
    continuedExecutionRunId: undefined,
    executionStartToCloseTimeout: undefined,
    input: undefined,
    lambdaRole: undefined,
    parentInitiatedEventId: undefined,
    parentWorkflowExecution: undefined,
    tagList: undefined,
    taskList: undefined,
    taskPriority: undefined,
    taskStartToCloseTimeout: undefined,
    workflowType: undefined
  };
  if (output.childPolicy !== undefined && output.childPolicy !== null) {
    contents.childPolicy = output.childPolicy;
  }
  if (
    output.continuedExecutionRunId !== undefined &&
    output.continuedExecutionRunId !== null
  ) {
    contents.continuedExecutionRunId = output.continuedExecutionRunId;
  }
  if (
    output.executionStartToCloseTimeout !== undefined &&
    output.executionStartToCloseTimeout !== null
  ) {
    contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
  }
  if (output.input !== undefined && output.input !== null) {
    contents.input = output.input;
  }
  if (output.lambdaRole !== undefined && output.lambdaRole !== null) {
    contents.lambdaRole = output.lambdaRole;
  }
  if (
    output.parentInitiatedEventId !== undefined &&
    output.parentInitiatedEventId !== null
  ) {
    contents.parentInitiatedEventId = output.parentInitiatedEventId;
  }
  if (
    output.parentWorkflowExecution !== undefined &&
    output.parentWorkflowExecution !== null
  ) {
    contents.parentWorkflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.parentWorkflowExecution,
      context
    );
  }
  if (output.tagList !== undefined && output.tagList !== null) {
    contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
  }
  if (output.taskList !== undefined && output.taskList !== null) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined && output.taskPriority !== null) {
    contents.taskPriority = output.taskPriority;
  }
  if (
    output.taskStartToCloseTimeout !== undefined &&
    output.taskStartToCloseTimeout !== null
  ) {
    contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionTerminatedEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionTerminatedEventAttributes",
    cause: undefined,
    childPolicy: undefined,
    details: undefined,
    reason: undefined
  };
  if (output.cause !== undefined && output.cause !== null) {
    contents.cause = output.cause;
  }
  if (output.childPolicy !== undefined && output.childPolicy !== null) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.details !== undefined && output.details !== null) {
    contents.details = output.details;
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionTimedOutEventAttributes = (
  output: any,
  context: __SerdeContext
): WorkflowExecutionTimedOutEventAttributes => {
  let contents: any = {
    __type: "WorkflowExecutionTimedOutEventAttributes",
    childPolicy: undefined,
    timeoutType: undefined
  };
  if (output.childPolicy !== undefined && output.childPolicy !== null) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.timeoutType !== undefined && output.timeoutType !== null) {
    contents.timeoutType = output.timeoutType;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowType = (
  output: any,
  context: __SerdeContext
): WorkflowType => {
  let contents: any = {
    __type: "WorkflowType",
    name: undefined,
    version: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowTypeConfiguration = (
  output: any,
  context: __SerdeContext
): WorkflowTypeConfiguration => {
  let contents: any = {
    __type: "WorkflowTypeConfiguration",
    defaultChildPolicy: undefined,
    defaultExecutionStartToCloseTimeout: undefined,
    defaultLambdaRole: undefined,
    defaultTaskList: undefined,
    defaultTaskPriority: undefined,
    defaultTaskStartToCloseTimeout: undefined
  };
  if (
    output.defaultChildPolicy !== undefined &&
    output.defaultChildPolicy !== null
  ) {
    contents.defaultChildPolicy = output.defaultChildPolicy;
  }
  if (
    output.defaultExecutionStartToCloseTimeout !== undefined &&
    output.defaultExecutionStartToCloseTimeout !== null
  ) {
    contents.defaultExecutionStartToCloseTimeout =
      output.defaultExecutionStartToCloseTimeout;
  }
  if (
    output.defaultLambdaRole !== undefined &&
    output.defaultLambdaRole !== null
  ) {
    contents.defaultLambdaRole = output.defaultLambdaRole;
  }
  if (output.defaultTaskList !== undefined && output.defaultTaskList !== null) {
    contents.defaultTaskList = deserializeAws_json1_0TaskList(
      output.defaultTaskList,
      context
    );
  }
  if (
    output.defaultTaskPriority !== undefined &&
    output.defaultTaskPriority !== null
  ) {
    contents.defaultTaskPriority = output.defaultTaskPriority;
  }
  if (
    output.defaultTaskStartToCloseTimeout !== undefined &&
    output.defaultTaskStartToCloseTimeout !== null
  ) {
    contents.defaultTaskStartToCloseTimeout =
      output.defaultTaskStartToCloseTimeout;
  }
  return contents;
};

const deserializeAws_json1_0WorkflowTypeDetail = (
  output: any,
  context: __SerdeContext
): WorkflowTypeDetail => {
  let contents: any = {
    __type: "WorkflowTypeDetail",
    configuration: undefined,
    typeInfo: undefined
  };
  if (output.configuration !== undefined && output.configuration !== null) {
    contents.configuration = deserializeAws_json1_0WorkflowTypeConfiguration(
      output.configuration,
      context
    );
  }
  if (output.typeInfo !== undefined && output.typeInfo !== null) {
    contents.typeInfo = deserializeAws_json1_0WorkflowTypeInfo(
      output.typeInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WorkflowTypeInfo = (
  output: any,
  context: __SerdeContext
): WorkflowTypeInfo => {
  let contents: any = {
    __type: "WorkflowTypeInfo",
    creationDate: undefined,
    deprecationDate: undefined,
    description: undefined,
    status: undefined,
    workflowType: undefined
  };
  if (output.creationDate !== undefined && output.creationDate !== null) {
    contents.creationDate = new Date(Math.round(output.creationDate * 1000));
  }
  if (output.deprecationDate !== undefined && output.deprecationDate !== null) {
    contents.deprecationDate = new Date(
      Math.round(output.deprecationDate * 1000)
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.workflowType !== undefined && output.workflowType !== null) {
    contents.workflowType = deserializeAws_json1_0WorkflowType(
      output.workflowType,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0WorkflowTypeInfoList = (
  output: any,
  context: __SerdeContext
): WorkflowTypeInfo[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_0WorkflowTypeInfo(entry, context)
  );
};

const deserializeAws_json1_0WorkflowTypeInfos = (
  output: any,
  context: __SerdeContext
): WorkflowTypeInfos => {
  let contents: any = {
    __type: "WorkflowTypeInfos",
    nextPageToken: undefined,
    typeInfos: undefined
  };
  if (output.nextPageToken !== undefined && output.nextPageToken !== null) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.typeInfos !== undefined && output.typeInfos !== null) {
    contents.typeInfos = deserializeAws_json1_0WorkflowTypeInfoList(
      output.typeInfos,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_0ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    __type: "ListTagsForResourceOutput",
    tags: undefined
  };
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_json1_0ResourceTagList(output.tags, context);
  }
  return contents;
};

const deserializeAws_json1_0Run = (
  output: any,
  context: __SerdeContext
): Run => {
  let contents: any = {
    __type: "Run",
    runId: undefined
  };
  if (output.runId !== undefined && output.runId !== null) {
    contents.runId = output.runId;
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
