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
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_0CountClosedWorkflowExecutionsCommand(
  input: CountClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "SimpleWorkflowService.CountClosedWorkflowExecutions";
  let body: any = {};
  const wrappedBody: any = {
    CountClosedWorkflowExecutionsInput: serializeAws_json1_0CountClosedWorkflowExecutionsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CountClosedWorkflowExecutions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0CountOpenWorkflowExecutionsCommand(
  input: CountOpenWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.CountOpenWorkflowExecutions";
  let body: any = {};
  const wrappedBody: any = {
    CountOpenWorkflowExecutionsInput: serializeAws_json1_0CountOpenWorkflowExecutionsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CountOpenWorkflowExecutions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0CountPendingActivityTasksCommand(
  input: CountPendingActivityTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.CountPendingActivityTasks";
  let body: any = {};
  const wrappedBody: any = {
    CountPendingActivityTasksInput: serializeAws_json1_0CountPendingActivityTasksInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CountPendingActivityTasks",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0CountPendingDecisionTasksCommand(
  input: CountPendingDecisionTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.CountPendingDecisionTasks";
  let body: any = {};
  const wrappedBody: any = {
    CountPendingDecisionTasksInput: serializeAws_json1_0CountPendingDecisionTasksInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/CountPendingDecisionTasks",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DeprecateActivityTypeCommand(
  input: DeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.DeprecateActivityType";
  let body: any = {};
  const wrappedBody: any = {
    DeprecateActivityTypeInput: serializeAws_json1_0DeprecateActivityTypeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeprecateActivityType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DeprecateDomainCommand(
  input: DeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.DeprecateDomain";
  let body: any = {};
  const wrappedBody: any = {
    DeprecateDomainInput: serializeAws_json1_0DeprecateDomainInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeprecateDomain",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DeprecateWorkflowTypeCommand(
  input: DeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.DeprecateWorkflowType";
  let body: any = {};
  const wrappedBody: any = {
    DeprecateWorkflowTypeInput: serializeAws_json1_0DeprecateWorkflowTypeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DeprecateWorkflowType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeActivityTypeCommand(
  input: DescribeActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.DescribeActivityType";
  let body: any = {};
  const wrappedBody: any = {
    DescribeActivityTypeInput: serializeAws_json1_0DescribeActivityTypeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeActivityType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeDomainCommand(
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.DescribeDomain";
  let body: any = {};
  const wrappedBody: any = {
    DescribeDomainInput: serializeAws_json1_0DescribeDomainInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeDomain",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeWorkflowExecutionCommand(
  input: DescribeWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.DescribeWorkflowExecution";
  let body: any = {};
  const wrappedBody: any = {
    DescribeWorkflowExecutionInput: serializeAws_json1_0DescribeWorkflowExecutionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeWorkflowExecution",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0DescribeWorkflowTypeCommand(
  input: DescribeWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.DescribeWorkflowType";
  let body: any = {};
  const wrappedBody: any = {
    DescribeWorkflowTypeInput: serializeAws_json1_0DescribeWorkflowTypeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/DescribeWorkflowType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0GetWorkflowExecutionHistoryCommand(
  input: GetWorkflowExecutionHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.GetWorkflowExecutionHistory";
  let body: any = {};
  const wrappedBody: any = {
    GetWorkflowExecutionHistoryInput: serializeAws_json1_0GetWorkflowExecutionHistoryInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/GetWorkflowExecutionHistory",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListActivityTypesCommand(
  input: ListActivityTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.ListActivityTypes";
  let body: any = {};
  const wrappedBody: any = {
    ListActivityTypesInput: serializeAws_json1_0ListActivityTypesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListActivityTypes",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListClosedWorkflowExecutionsCommand(
  input: ListClosedWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "SimpleWorkflowService.ListClosedWorkflowExecutions";
  let body: any = {};
  const wrappedBody: any = {
    ListClosedWorkflowExecutionsInput: serializeAws_json1_0ListClosedWorkflowExecutionsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListClosedWorkflowExecutions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListDomainsCommand(
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.ListDomains";
  let body: any = {};
  const wrappedBody: any = {
    ListDomainsInput: serializeAws_json1_0ListDomainsInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListDomains",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListOpenWorkflowExecutionsCommand(
  input: ListOpenWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.ListOpenWorkflowExecutions";
  let body: any = {};
  const wrappedBody: any = {
    ListOpenWorkflowExecutionsInput: serializeAws_json1_0ListOpenWorkflowExecutionsInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListOpenWorkflowExecutions",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.ListTagsForResource";
  let body: any = {};
  const wrappedBody: any = {
    ListTagsForResourceInput: serializeAws_json1_0ListTagsForResourceInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListTagsForResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0ListWorkflowTypesCommand(
  input: ListWorkflowTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.ListWorkflowTypes";
  let body: any = {};
  const wrappedBody: any = {
    ListWorkflowTypesInput: serializeAws_json1_0ListWorkflowTypesInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/ListWorkflowTypes",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0PollForActivityTaskCommand(
  input: PollForActivityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.PollForActivityTask";
  let body: any = {};
  const wrappedBody: any = {
    PollForActivityTaskInput: serializeAws_json1_0PollForActivityTaskInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PollForActivityTask",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0PollForDecisionTaskCommand(
  input: PollForDecisionTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.PollForDecisionTask";
  let body: any = {};
  const wrappedBody: any = {
    PollForDecisionTaskInput: serializeAws_json1_0PollForDecisionTaskInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/PollForDecisionTask",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RecordActivityTaskHeartbeatCommand(
  input: RecordActivityTaskHeartbeatCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.RecordActivityTaskHeartbeat";
  let body: any = {};
  const wrappedBody: any = {
    RecordActivityTaskHeartbeatInput: serializeAws_json1_0RecordActivityTaskHeartbeatInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RecordActivityTaskHeartbeat",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RegisterActivityTypeCommand(
  input: RegisterActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.RegisterActivityType";
  let body: any = {};
  const wrappedBody: any = {
    RegisterActivityTypeInput: serializeAws_json1_0RegisterActivityTypeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterActivityType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RegisterDomainCommand(
  input: RegisterDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.RegisterDomain";
  let body: any = {};
  const wrappedBody: any = {
    RegisterDomainInput: serializeAws_json1_0RegisterDomainInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterDomain",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RegisterWorkflowTypeCommand(
  input: RegisterWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.RegisterWorkflowType";
  let body: any = {};
  const wrappedBody: any = {
    RegisterWorkflowTypeInput: serializeAws_json1_0RegisterWorkflowTypeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RegisterWorkflowType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RequestCancelWorkflowExecutionCommand(
  input: RequestCancelWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "SimpleWorkflowService.RequestCancelWorkflowExecution";
  let body: any = {};
  const wrappedBody: any = {
    RequestCancelWorkflowExecutionInput: serializeAws_json1_0RequestCancelWorkflowExecutionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RequestCancelWorkflowExecution",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RespondActivityTaskCanceledCommand(
  input: RespondActivityTaskCanceledCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.RespondActivityTaskCanceled";
  let body: any = {};
  const wrappedBody: any = {
    RespondActivityTaskCanceledInput: serializeAws_json1_0RespondActivityTaskCanceledInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RespondActivityTaskCanceled",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RespondActivityTaskCompletedCommand(
  input: RespondActivityTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "SimpleWorkflowService.RespondActivityTaskCompleted";
  let body: any = {};
  const wrappedBody: any = {
    RespondActivityTaskCompletedInput: serializeAws_json1_0RespondActivityTaskCompletedInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RespondActivityTaskCompleted",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RespondActivityTaskFailedCommand(
  input: RespondActivityTaskFailedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.RespondActivityTaskFailed";
  let body: any = {};
  const wrappedBody: any = {
    RespondActivityTaskFailedInput: serializeAws_json1_0RespondActivityTaskFailedInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RespondActivityTaskFailed",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0RespondDecisionTaskCompletedCommand(
  input: RespondDecisionTaskCompletedCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] =
    "SimpleWorkflowService.RespondDecisionTaskCompleted";
  let body: any = {};
  const wrappedBody: any = {
    RespondDecisionTaskCompletedInput: serializeAws_json1_0RespondDecisionTaskCompletedInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/RespondDecisionTaskCompleted",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0SignalWorkflowExecutionCommand(
  input: SignalWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.SignalWorkflowExecution";
  let body: any = {};
  const wrappedBody: any = {
    SignalWorkflowExecutionInput: serializeAws_json1_0SignalWorkflowExecutionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/SignalWorkflowExecution",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0StartWorkflowExecutionCommand(
  input: StartWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.StartWorkflowExecution";
  let body: any = {};
  const wrappedBody: any = {
    StartWorkflowExecutionInput: serializeAws_json1_0StartWorkflowExecutionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/StartWorkflowExecution",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.TagResource";
  let body: any = {};
  const wrappedBody: any = {
    TagResourceInput: serializeAws_json1_0TagResourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TagResource",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0TerminateWorkflowExecutionCommand(
  input: TerminateWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.TerminateWorkflowExecution";
  let body: any = {};
  const wrappedBody: any = {
    TerminateWorkflowExecutionInput: serializeAws_json1_0TerminateWorkflowExecutionInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/TerminateWorkflowExecution",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UndeprecateActivityTypeCommand(
  input: UndeprecateActivityTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.UndeprecateActivityType";
  let body: any = {};
  const wrappedBody: any = {
    UndeprecateActivityTypeInput: serializeAws_json1_0UndeprecateActivityTypeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UndeprecateActivityType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UndeprecateDomainCommand(
  input: UndeprecateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.UndeprecateDomain";
  let body: any = {};
  const wrappedBody: any = {
    UndeprecateDomainInput: serializeAws_json1_0UndeprecateDomainInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UndeprecateDomain",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UndeprecateWorkflowTypeCommand(
  input: UndeprecateWorkflowTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.UndeprecateWorkflowType";
  let body: any = {};
  const wrappedBody: any = {
    UndeprecateWorkflowTypeInput: serializeAws_json1_0UndeprecateWorkflowTypeInput(
      input,
      context
    )
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UndeprecateWorkflowType",
    headers: headers,
    body: body
  });
}

export async function serializeAws_json1_0UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/x-amz-json-1.0";
  headers["X-Amz-Target"] = "SimpleWorkflowService.UntagResource";
  let body: any = {};
  const wrappedBody: any = {
    UntagResourceInput: serializeAws_json1_0UntagResourceInput(input, context)
  };
  body = JSON.stringify(wrappedBody);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: "/UntagResource",
    headers: headers,
    body: body
  });
}

export async function deserializeAws_json1_0CountClosedWorkflowExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountClosedWorkflowExecutionsCommandOutput> {
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
}

async function deserializeAws_json1_0CountClosedWorkflowExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountClosedWorkflowExecutionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0CountOpenWorkflowExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountOpenWorkflowExecutionsCommandOutput> {
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
}

async function deserializeAws_json1_0CountOpenWorkflowExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountOpenWorkflowExecutionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0CountPendingActivityTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingActivityTasksCommandOutput> {
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
}

async function deserializeAws_json1_0CountPendingActivityTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingActivityTasksCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0CountPendingDecisionTasksCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingDecisionTasksCommandOutput> {
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
}

async function deserializeAws_json1_0CountPendingDecisionTasksCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CountPendingDecisionTasksCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DeprecateActivityTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateActivityTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeprecateActivityTypeCommandError(
      output,
      context
    );
  }
  const response: DeprecateActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DeprecateActivityTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateActivityTypeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
      response = await deserializeAws_json1_0TypeDeprecatedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DeprecateDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateDomainCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeprecateDomainCommandError(output, context);
  }
  const response: DeprecateDomainCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DeprecateDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateDomainCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DomainDeprecatedFault":
    case "com.amazonaws.swf.base.model#DomainDeprecatedFault":
      response = await deserializeAws_json1_0DomainDeprecatedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DeprecateWorkflowTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateWorkflowTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0DeprecateWorkflowTypeCommandError(
      output,
      context
    );
  }
  const response: DeprecateWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0DeprecateWorkflowTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeprecateWorkflowTypeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
      response = await deserializeAws_json1_0TypeDeprecatedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeActivityTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityTypeCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeActivityTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActivityTypeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeWorkflowExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowExecutionCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeWorkflowExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowExecutionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0DescribeWorkflowTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowTypeCommandOutput> {
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
}

async function deserializeAws_json1_0DescribeWorkflowTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkflowTypeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0GetWorkflowExecutionHistoryCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionHistoryCommandOutput> {
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
}

async function deserializeAws_json1_0GetWorkflowExecutionHistoryCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionHistoryCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListActivityTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivityTypesCommandOutput> {
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
}

async function deserializeAws_json1_0ListActivityTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActivityTypesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListClosedWorkflowExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClosedWorkflowExecutionsCommandOutput> {
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
}

async function deserializeAws_json1_0ListClosedWorkflowExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClosedWorkflowExecutionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListDomainsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> {
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
}

async function deserializeAws_json1_0ListDomainsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListOpenWorkflowExecutionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenWorkflowExecutionsCommandOutput> {
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
}

async function deserializeAws_json1_0ListOpenWorkflowExecutionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOpenWorkflowExecutionsCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_json1_0ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0ListWorkflowTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowTypesCommandOutput> {
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
}

async function deserializeAws_json1_0ListWorkflowTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowTypesCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0PollForActivityTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForActivityTaskCommandOutput> {
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
}

async function deserializeAws_json1_0PollForActivityTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForActivityTaskCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0PollForDecisionTaskCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForDecisionTaskCommandOutput> {
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
}

async function deserializeAws_json1_0PollForDecisionTaskCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PollForDecisionTaskCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RecordActivityTaskHeartbeatCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordActivityTaskHeartbeatCommandOutput> {
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
}

async function deserializeAws_json1_0RecordActivityTaskHeartbeatCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RecordActivityTaskHeartbeatCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RegisterActivityTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterActivityTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RegisterActivityTypeCommandError(
      output,
      context
    );
  }
  const response: RegisterActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0RegisterActivityTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterActivityTypeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
      response = await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RegisterDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RegisterDomainCommandError(output, context);
  }
  const response: RegisterDomainCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0RegisterDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDomainCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DomainAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#DomainAlreadyExistsFault":
      response = await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsFault":
    case "com.amazonaws.swf.base.model#TooManyTagsFault":
      response = await deserializeAws_json1_0TooManyTagsFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RegisterWorkflowTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkflowTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RegisterWorkflowTypeCommandError(
      output,
      context
    );
  }
  const response: RegisterWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0RegisterWorkflowTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterWorkflowTypeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
      response = await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RequestCancelWorkflowExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCancelWorkflowExecutionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError(
      output,
      context
    );
  }
  const response: RequestCancelWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0RequestCancelWorkflowExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RequestCancelWorkflowExecutionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RespondActivityTaskCanceledCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCanceledCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RespondActivityTaskCanceledCommandError(
      output,
      context
    );
  }
  const response: RespondActivityTaskCanceledCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0RespondActivityTaskCanceledCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCanceledCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RespondActivityTaskCompletedCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCompletedCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RespondActivityTaskCompletedCommandError(
      output,
      context
    );
  }
  const response: RespondActivityTaskCompletedCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0RespondActivityTaskCompletedCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskCompletedCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RespondActivityTaskFailedCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskFailedCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RespondActivityTaskFailedCommandError(
      output,
      context
    );
  }
  const response: RespondActivityTaskFailedCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0RespondActivityTaskFailedCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondActivityTaskFailedCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0RespondDecisionTaskCompletedCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondDecisionTaskCompletedCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0RespondDecisionTaskCompletedCommandError(
      output,
      context
    );
  }
  const response: RespondDecisionTaskCompletedCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0RespondDecisionTaskCompletedCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RespondDecisionTaskCompletedCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0SignalWorkflowExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalWorkflowExecutionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0SignalWorkflowExecutionCommandError(
      output,
      context
    );
  }
  const response: SignalWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0SignalWorkflowExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SignalWorkflowExecutionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0StartWorkflowExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowExecutionCommandOutput> {
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
}

async function deserializeAws_json1_0StartWorkflowExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartWorkflowExecutionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DefaultUndefinedFault":
    case "com.amazonaws.swf.base.model#DefaultUndefinedFault":
      response = await deserializeAws_json1_0DefaultUndefinedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TypeDeprecatedFault":
    case "com.amazonaws.swf.base.model#TypeDeprecatedFault":
      response = await deserializeAws_json1_0TypeDeprecatedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "WorkflowExecutionAlreadyStartedFault":
    case "com.amazonaws.swf.base.model#WorkflowExecutionAlreadyStartedFault":
      response = await deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TooManyTagsFault":
    case "com.amazonaws.swf.base.model#TooManyTagsFault":
      response = await deserializeAws_json1_0TooManyTagsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0TerminateWorkflowExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkflowExecutionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0TerminateWorkflowExecutionCommandError(
      output,
      context
    );
  }
  const response: TerminateWorkflowExecutionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0TerminateWorkflowExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateWorkflowExecutionCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UndeprecateActivityTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateActivityTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UndeprecateActivityTypeCommandError(
      output,
      context
    );
  }
  const response: UndeprecateActivityTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0UndeprecateActivityTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateActivityTypeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
      response = await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UndeprecateDomainCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateDomainCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UndeprecateDomainCommandError(output, context);
  }
  const response: UndeprecateDomainCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0UndeprecateDomainCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateDomainCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "DomainAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#DomainAlreadyExistsFault":
      response = await deserializeAws_json1_0DomainAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UndeprecateWorkflowTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateWorkflowTypeCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UndeprecateWorkflowTypeCommandError(
      output,
      context
    );
  }
  const response: UndeprecateWorkflowTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0UndeprecateWorkflowTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UndeprecateWorkflowTypeCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "TypeAlreadyExistsFault":
    case "com.amazonaws.swf.base.model#TypeAlreadyExistsFault":
      response = await deserializeAws_json1_0TypeAlreadyExistsFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

export async function deserializeAws_json1_0UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_0UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const data: any = await parseBody(output.body, context);
  const parsedOutput: any = {
    ...output,
    body: data
  };
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = data["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.swf.base.model#LimitExceededFault":
      response = await deserializeAws_json1_0LimitExceededFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "OperationNotPermittedFault":
    case "com.amazonaws.swf.base.model#OperationNotPermittedFault":
      response = await deserializeAws_json1_0OperationNotPermittedFaultResponse(
        parsedOutput,
        context
      );
      break;
    case "UnknownResourceFault":
    case "com.amazonaws.swf.base.model#UnknownResourceFault":
      response = await deserializeAws_json1_0UnknownResourceFaultResponse(
        parsedOutput,
        context
      );
      break;
    default:
      response = {
        __type: `com.amazonaws.swf.service.model#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      };
  }
  return Promise.reject(Object.assign(new Error(response.__type), response));
}

const deserializeAws_json1_0DefaultUndefinedFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DefaultUndefinedFault> => {
  const deserialized: any = deserializeAws_json1_0DefaultUndefinedFault(
    output.body,
    context
  );
  const contents: DefaultUndefinedFault = {
    __type: "DefaultUndefinedFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0DomainAlreadyExistsFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DomainAlreadyExistsFault> => {
  const deserialized: any = deserializeAws_json1_0DomainAlreadyExistsFault(
    output.body,
    context
  );
  const contents: DomainAlreadyExistsFault = {
    __type: "DomainAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0DomainDeprecatedFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DomainDeprecatedFault> => {
  const deserialized: any = deserializeAws_json1_0DomainDeprecatedFault(
    output.body,
    context
  );
  const contents: DomainDeprecatedFault = {
    __type: "DomainDeprecatedFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0LimitExceededFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededFault> => {
  const deserialized: any = deserializeAws_json1_0LimitExceededFault(
    output.body,
    context
  );
  const contents: LimitExceededFault = {
    __type: "LimitExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0OperationNotPermittedFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<OperationNotPermittedFault> => {
  const deserialized: any = deserializeAws_json1_0OperationNotPermittedFault(
    output.body,
    context
  );
  const contents: OperationNotPermittedFault = {
    __type: "OperationNotPermittedFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TooManyTagsFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyTagsFault> => {
  const deserialized: any = deserializeAws_json1_0TooManyTagsFault(
    output.body,
    context
  );
  const contents: TooManyTagsFault = {
    __type: "TooManyTagsFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TypeAlreadyExistsFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TypeAlreadyExistsFault> => {
  const deserialized: any = deserializeAws_json1_0TypeAlreadyExistsFault(
    output.body,
    context
  );
  const contents: TypeAlreadyExistsFault = {
    __type: "TypeAlreadyExistsFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0TypeDeprecatedFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TypeDeprecatedFault> => {
  const deserialized: any = deserializeAws_json1_0TypeDeprecatedFault(
    output.body,
    context
  );
  const contents: TypeDeprecatedFault = {
    __type: "TypeDeprecatedFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0UnknownResourceFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnknownResourceFault> => {
  const deserialized: any = deserializeAws_json1_0UnknownResourceFault(
    output.body,
    context
  );
  const contents: UnknownResourceFault = {
    __type: "UnknownResourceFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_0WorkflowExecutionAlreadyStartedFaultResponse = async (
  output: any,
  context: __SerdeContext
): Promise<WorkflowExecutionAlreadyStartedFault> => {
  const deserialized: any = deserializeAws_json1_0WorkflowExecutionAlreadyStartedFault(
    output.body,
    context
  );
  const contents: WorkflowExecutionAlreadyStartedFault = {
    __type: "WorkflowExecutionAlreadyStartedFault",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_0ActivityType = (
  input: ActivityType,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_0CancelTimerDecisionAttributes = (
  input: CancelTimerDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.timerId !== undefined) {
    bodyParams["timerId"] = input.timerId;
  }
  return bodyParams;
};

const serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes = (
  input: CancelWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.details !== undefined) {
    bodyParams["details"] = input.details;
  }
  return bodyParams;
};

const serializeAws_json1_0CloseStatusFilter = (
  input: CloseStatusFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes = (
  input: CompleteWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.result !== undefined) {
    bodyParams["result"] = input.result;
  }
  return bodyParams;
};

const serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes = (
  input: ContinueAsNewWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.childPolicy !== undefined) {
    bodyParams["childPolicy"] = input.childPolicy;
  }
  if (input.executionStartToCloseTimeout !== undefined) {
    bodyParams["executionStartToCloseTimeout"] =
      input.executionStartToCloseTimeout;
  }
  if (input.input !== undefined) {
    bodyParams["input"] = input.input;
  }
  if (input.lambdaRole !== undefined) {
    bodyParams["lambdaRole"] = input.lambdaRole;
  }
  if (input.tagList !== undefined) {
    bodyParams["tagList"] = serializeAws_json1_0TagList(input.tagList, context);
  }
  if (input.taskList !== undefined) {
    bodyParams["taskList"] = serializeAws_json1_0TaskList(
      input.taskList,
      context
    );
  }
  if (input.taskPriority !== undefined) {
    bodyParams["taskPriority"] = input.taskPriority;
  }
  if (input.taskStartToCloseTimeout !== undefined) {
    bodyParams["taskStartToCloseTimeout"] = input.taskStartToCloseTimeout;
  }
  if (input.workflowTypeVersion !== undefined) {
    bodyParams["workflowTypeVersion"] = input.workflowTypeVersion;
  }
  return bodyParams;
};

const serializeAws_json1_0Decision = (
  input: Decision,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.cancelTimerDecisionAttributes !== undefined) {
    bodyParams[
      "cancelTimerDecisionAttributes"
    ] = serializeAws_json1_0CancelTimerDecisionAttributes(
      input.cancelTimerDecisionAttributes,
      context
    );
  }
  if (input.cancelWorkflowExecutionDecisionAttributes !== undefined) {
    bodyParams[
      "cancelWorkflowExecutionDecisionAttributes"
    ] = serializeAws_json1_0CancelWorkflowExecutionDecisionAttributes(
      input.cancelWorkflowExecutionDecisionAttributes,
      context
    );
  }
  if (input.completeWorkflowExecutionDecisionAttributes !== undefined) {
    bodyParams[
      "completeWorkflowExecutionDecisionAttributes"
    ] = serializeAws_json1_0CompleteWorkflowExecutionDecisionAttributes(
      input.completeWorkflowExecutionDecisionAttributes,
      context
    );
  }
  if (input.continueAsNewWorkflowExecutionDecisionAttributes !== undefined) {
    bodyParams[
      "continueAsNewWorkflowExecutionDecisionAttributes"
    ] = serializeAws_json1_0ContinueAsNewWorkflowExecutionDecisionAttributes(
      input.continueAsNewWorkflowExecutionDecisionAttributes,
      context
    );
  }
  if (input.decisionType !== undefined) {
    bodyParams["decisionType"] = input.decisionType;
  }
  if (input.failWorkflowExecutionDecisionAttributes !== undefined) {
    bodyParams[
      "failWorkflowExecutionDecisionAttributes"
    ] = serializeAws_json1_0FailWorkflowExecutionDecisionAttributes(
      input.failWorkflowExecutionDecisionAttributes,
      context
    );
  }
  if (input.recordMarkerDecisionAttributes !== undefined) {
    bodyParams[
      "recordMarkerDecisionAttributes"
    ] = serializeAws_json1_0RecordMarkerDecisionAttributes(
      input.recordMarkerDecisionAttributes,
      context
    );
  }
  if (input.requestCancelActivityTaskDecisionAttributes !== undefined) {
    bodyParams[
      "requestCancelActivityTaskDecisionAttributes"
    ] = serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes(
      input.requestCancelActivityTaskDecisionAttributes,
      context
    );
  }
  if (
    input.requestCancelExternalWorkflowExecutionDecisionAttributes !== undefined
  ) {
    bodyParams[
      "requestCancelExternalWorkflowExecutionDecisionAttributes"
    ] = serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes(
      input.requestCancelExternalWorkflowExecutionDecisionAttributes,
      context
    );
  }
  if (input.scheduleActivityTaskDecisionAttributes !== undefined) {
    bodyParams[
      "scheduleActivityTaskDecisionAttributes"
    ] = serializeAws_json1_0ScheduleActivityTaskDecisionAttributes(
      input.scheduleActivityTaskDecisionAttributes,
      context
    );
  }
  if (input.scheduleLambdaFunctionDecisionAttributes !== undefined) {
    bodyParams[
      "scheduleLambdaFunctionDecisionAttributes"
    ] = serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes(
      input.scheduleLambdaFunctionDecisionAttributes,
      context
    );
  }
  if (input.signalExternalWorkflowExecutionDecisionAttributes !== undefined) {
    bodyParams[
      "signalExternalWorkflowExecutionDecisionAttributes"
    ] = serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes(
      input.signalExternalWorkflowExecutionDecisionAttributes,
      context
    );
  }
  if (input.startChildWorkflowExecutionDecisionAttributes !== undefined) {
    bodyParams[
      "startChildWorkflowExecutionDecisionAttributes"
    ] = serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes(
      input.startChildWorkflowExecutionDecisionAttributes,
      context
    );
  }
  if (input.startTimerDecisionAttributes !== undefined) {
    bodyParams[
      "startTimerDecisionAttributes"
    ] = serializeAws_json1_0StartTimerDecisionAttributes(
      input.startTimerDecisionAttributes,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0DecisionList = (
  input: Array<Decision>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0Decision(entry, context)
  );
};

const serializeAws_json1_0ExecutionTimeFilter = (
  input: ExecutionTimeFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.latestDate !== undefined) {
    bodyParams["latestDate"] = Math.round(input.latestDate.getTime() / 1000);
  }
  if (input.oldestDate !== undefined) {
    bodyParams["oldestDate"] = Math.round(input.oldestDate.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_json1_0FailWorkflowExecutionDecisionAttributes = (
  input: FailWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.details !== undefined) {
    bodyParams["details"] = input.details;
  }
  if (input.reason !== undefined) {
    bodyParams["reason"] = input.reason;
  }
  return bodyParams;
};

const serializeAws_json1_0RecordMarkerDecisionAttributes = (
  input: RecordMarkerDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.details !== undefined) {
    bodyParams["details"] = input.details;
  }
  if (input.markerName !== undefined) {
    bodyParams["markerName"] = input.markerName;
  }
  return bodyParams;
};

const serializeAws_json1_0RequestCancelActivityTaskDecisionAttributes = (
  input: RequestCancelActivityTaskDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.activityId !== undefined) {
    bodyParams["activityId"] = input.activityId;
  }
  return bodyParams;
};

const serializeAws_json1_0RequestCancelExternalWorkflowExecutionDecisionAttributes = (
  input: RequestCancelExternalWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.control !== undefined) {
    bodyParams["control"] = input.control;
  }
  if (input.runId !== undefined) {
    bodyParams["runId"] = input.runId;
  }
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  return bodyParams;
};

const serializeAws_json1_0ResourceTag = (
  input: ResourceTag,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_0ResourceTagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0ResourceTagList = (
  input: Array<ResourceTag>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_json1_0ResourceTag(entry, context)
  );
};

const serializeAws_json1_0ScheduleActivityTaskDecisionAttributes = (
  input: ScheduleActivityTaskDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.activityId !== undefined) {
    bodyParams["activityId"] = input.activityId;
  }
  if (input.activityType !== undefined) {
    bodyParams["activityType"] = serializeAws_json1_0ActivityType(
      input.activityType,
      context
    );
  }
  if (input.control !== undefined) {
    bodyParams["control"] = input.control;
  }
  if (input.heartbeatTimeout !== undefined) {
    bodyParams["heartbeatTimeout"] = input.heartbeatTimeout;
  }
  if (input.input !== undefined) {
    bodyParams["input"] = input.input;
  }
  if (input.scheduleToCloseTimeout !== undefined) {
    bodyParams["scheduleToCloseTimeout"] = input.scheduleToCloseTimeout;
  }
  if (input.scheduleToStartTimeout !== undefined) {
    bodyParams["scheduleToStartTimeout"] = input.scheduleToStartTimeout;
  }
  if (input.startToCloseTimeout !== undefined) {
    bodyParams["startToCloseTimeout"] = input.startToCloseTimeout;
  }
  if (input.taskList !== undefined) {
    bodyParams["taskList"] = serializeAws_json1_0TaskList(
      input.taskList,
      context
    );
  }
  if (input.taskPriority !== undefined) {
    bodyParams["taskPriority"] = input.taskPriority;
  }
  return bodyParams;
};

const serializeAws_json1_0ScheduleLambdaFunctionDecisionAttributes = (
  input: ScheduleLambdaFunctionDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.control !== undefined) {
    bodyParams["control"] = input.control;
  }
  if (input.id !== undefined) {
    bodyParams["id"] = input.id;
  }
  if (input.input !== undefined) {
    bodyParams["input"] = input.input;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.startToCloseTimeout !== undefined) {
    bodyParams["startToCloseTimeout"] = input.startToCloseTimeout;
  }
  return bodyParams;
};

const serializeAws_json1_0SignalExternalWorkflowExecutionDecisionAttributes = (
  input: SignalExternalWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.control !== undefined) {
    bodyParams["control"] = input.control;
  }
  if (input.input !== undefined) {
    bodyParams["input"] = input.input;
  }
  if (input.runId !== undefined) {
    bodyParams["runId"] = input.runId;
  }
  if (input.signalName !== undefined) {
    bodyParams["signalName"] = input.signalName;
  }
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  return bodyParams;
};

const serializeAws_json1_0StartChildWorkflowExecutionDecisionAttributes = (
  input: StartChildWorkflowExecutionDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.childPolicy !== undefined) {
    bodyParams["childPolicy"] = input.childPolicy;
  }
  if (input.control !== undefined) {
    bodyParams["control"] = input.control;
  }
  if (input.executionStartToCloseTimeout !== undefined) {
    bodyParams["executionStartToCloseTimeout"] =
      input.executionStartToCloseTimeout;
  }
  if (input.input !== undefined) {
    bodyParams["input"] = input.input;
  }
  if (input.lambdaRole !== undefined) {
    bodyParams["lambdaRole"] = input.lambdaRole;
  }
  if (input.tagList !== undefined) {
    bodyParams["tagList"] = serializeAws_json1_0TagList(input.tagList, context);
  }
  if (input.taskList !== undefined) {
    bodyParams["taskList"] = serializeAws_json1_0TaskList(
      input.taskList,
      context
    );
  }
  if (input.taskPriority !== undefined) {
    bodyParams["taskPriority"] = input.taskPriority;
  }
  if (input.taskStartToCloseTimeout !== undefined) {
    bodyParams["taskStartToCloseTimeout"] = input.taskStartToCloseTimeout;
  }
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  if (input.workflowType !== undefined) {
    bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(
      input.workflowType,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0StartTimerDecisionAttributes = (
  input: StartTimerDecisionAttributes,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.control !== undefined) {
    bodyParams["control"] = input.control;
  }
  if (input.startToFireTimeout !== undefined) {
    bodyParams["startToFireTimeout"] = input.startToFireTimeout;
  }
  if (input.timerId !== undefined) {
    bodyParams["timerId"] = input.timerId;
  }
  return bodyParams;
};

const serializeAws_json1_0TagFilter = (
  input: TagFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.tag !== undefined) {
    bodyParams["tag"] = input.tag;
  }
  return bodyParams;
};

const serializeAws_json1_0TagList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_json1_0TaskList = (
  input: TaskList,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_0WorkflowExecution = (
  input: WorkflowExecution,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.runId !== undefined) {
    bodyParams["runId"] = input.runId;
  }
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  return bodyParams;
};

const serializeAws_json1_0WorkflowExecutionFilter = (
  input: WorkflowExecutionFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  return bodyParams;
};

const serializeAws_json1_0WorkflowType = (
  input: WorkflowType,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_0WorkflowTypeFilter = (
  input: WorkflowTypeFilter,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_0CountClosedWorkflowExecutionsInput = (
  input: CountClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.closeStatusFilter !== undefined) {
    bodyParams["closeStatusFilter"] = serializeAws_json1_0CloseStatusFilter(
      input.closeStatusFilter,
      context
    );
  }
  if (input.closeTimeFilter !== undefined) {
    bodyParams["closeTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(
      input.closeTimeFilter,
      context
    );
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.executionFilter !== undefined) {
    bodyParams["executionFilter"] = serializeAws_json1_0WorkflowExecutionFilter(
      input.executionFilter,
      context
    );
  }
  if (input.startTimeFilter !== undefined) {
    bodyParams["startTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(
      input.startTimeFilter,
      context
    );
  }
  if (input.tagFilter !== undefined) {
    bodyParams["tagFilter"] = serializeAws_json1_0TagFilter(
      input.tagFilter,
      context
    );
  }
  if (input.typeFilter !== undefined) {
    bodyParams["typeFilter"] = serializeAws_json1_0WorkflowTypeFilter(
      input.typeFilter,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0CountOpenWorkflowExecutionsInput = (
  input: CountOpenWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.executionFilter !== undefined) {
    bodyParams["executionFilter"] = serializeAws_json1_0WorkflowExecutionFilter(
      input.executionFilter,
      context
    );
  }
  if (input.startTimeFilter !== undefined) {
    bodyParams["startTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(
      input.startTimeFilter,
      context
    );
  }
  if (input.tagFilter !== undefined) {
    bodyParams["tagFilter"] = serializeAws_json1_0TagFilter(
      input.tagFilter,
      context
    );
  }
  if (input.typeFilter !== undefined) {
    bodyParams["typeFilter"] = serializeAws_json1_0WorkflowTypeFilter(
      input.typeFilter,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0CountPendingActivityTasksInput = (
  input: CountPendingActivityTasksInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.taskList !== undefined) {
    bodyParams["taskList"] = serializeAws_json1_0TaskList(
      input.taskList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0CountPendingDecisionTasksInput = (
  input: CountPendingDecisionTasksInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.taskList !== undefined) {
    bodyParams["taskList"] = serializeAws_json1_0TaskList(
      input.taskList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0DeprecateActivityTypeInput = (
  input: DeprecateActivityTypeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.activityType !== undefined) {
    bodyParams["activityType"] = serializeAws_json1_0ActivityType(
      input.activityType,
      context
    );
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  return bodyParams;
};

const serializeAws_json1_0DeprecateDomainInput = (
  input: DeprecateDomainInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_0DeprecateWorkflowTypeInput = (
  input: DeprecateWorkflowTypeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.workflowType !== undefined) {
    bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(
      input.workflowType,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeActivityTypeInput = (
  input: DescribeActivityTypeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.activityType !== undefined) {
    bodyParams["activityType"] = serializeAws_json1_0ActivityType(
      input.activityType,
      context
    );
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeDomainInput = (
  input: DescribeDomainInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeWorkflowExecutionInput = (
  input: DescribeWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.execution !== undefined) {
    bodyParams["execution"] = serializeAws_json1_0WorkflowExecution(
      input.execution,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0DescribeWorkflowTypeInput = (
  input: DescribeWorkflowTypeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.workflowType !== undefined) {
    bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(
      input.workflowType,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0GetWorkflowExecutionHistoryInput = (
  input: GetWorkflowExecutionHistoryInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.execution !== undefined) {
    bodyParams["execution"] = serializeAws_json1_0WorkflowExecution(
      input.execution,
      context
    );
  }
  if (input.maximumPageSize !== undefined) {
    bodyParams["maximumPageSize"] = input.maximumPageSize;
  }
  if (input.nextPageToken !== undefined) {
    bodyParams["nextPageToken"] = input.nextPageToken;
  }
  if (input.reverseOrder !== undefined) {
    bodyParams["reverseOrder"] = input.reverseOrder;
  }
  return bodyParams;
};

const serializeAws_json1_0ListActivityTypesInput = (
  input: ListActivityTypesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.maximumPageSize !== undefined) {
    bodyParams["maximumPageSize"] = input.maximumPageSize;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.nextPageToken !== undefined) {
    bodyParams["nextPageToken"] = input.nextPageToken;
  }
  if (input.registrationStatus !== undefined) {
    bodyParams["registrationStatus"] = input.registrationStatus;
  }
  if (input.reverseOrder !== undefined) {
    bodyParams["reverseOrder"] = input.reverseOrder;
  }
  return bodyParams;
};

const serializeAws_json1_0ListClosedWorkflowExecutionsInput = (
  input: ListClosedWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.closeStatusFilter !== undefined) {
    bodyParams["closeStatusFilter"] = serializeAws_json1_0CloseStatusFilter(
      input.closeStatusFilter,
      context
    );
  }
  if (input.closeTimeFilter !== undefined) {
    bodyParams["closeTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(
      input.closeTimeFilter,
      context
    );
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.executionFilter !== undefined) {
    bodyParams["executionFilter"] = serializeAws_json1_0WorkflowExecutionFilter(
      input.executionFilter,
      context
    );
  }
  if (input.maximumPageSize !== undefined) {
    bodyParams["maximumPageSize"] = input.maximumPageSize;
  }
  if (input.nextPageToken !== undefined) {
    bodyParams["nextPageToken"] = input.nextPageToken;
  }
  if (input.reverseOrder !== undefined) {
    bodyParams["reverseOrder"] = input.reverseOrder;
  }
  if (input.startTimeFilter !== undefined) {
    bodyParams["startTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(
      input.startTimeFilter,
      context
    );
  }
  if (input.tagFilter !== undefined) {
    bodyParams["tagFilter"] = serializeAws_json1_0TagFilter(
      input.tagFilter,
      context
    );
  }
  if (input.typeFilter !== undefined) {
    bodyParams["typeFilter"] = serializeAws_json1_0WorkflowTypeFilter(
      input.typeFilter,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ListDomainsInput = (
  input: ListDomainsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.maximumPageSize !== undefined) {
    bodyParams["maximumPageSize"] = input.maximumPageSize;
  }
  if (input.nextPageToken !== undefined) {
    bodyParams["nextPageToken"] = input.nextPageToken;
  }
  if (input.registrationStatus !== undefined) {
    bodyParams["registrationStatus"] = input.registrationStatus;
  }
  if (input.reverseOrder !== undefined) {
    bodyParams["reverseOrder"] = input.reverseOrder;
  }
  return bodyParams;
};

const serializeAws_json1_0ListOpenWorkflowExecutionsInput = (
  input: ListOpenWorkflowExecutionsInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.executionFilter !== undefined) {
    bodyParams["executionFilter"] = serializeAws_json1_0WorkflowExecutionFilter(
      input.executionFilter,
      context
    );
  }
  if (input.maximumPageSize !== undefined) {
    bodyParams["maximumPageSize"] = input.maximumPageSize;
  }
  if (input.nextPageToken !== undefined) {
    bodyParams["nextPageToken"] = input.nextPageToken;
  }
  if (input.reverseOrder !== undefined) {
    bodyParams["reverseOrder"] = input.reverseOrder;
  }
  if (input.startTimeFilter !== undefined) {
    bodyParams["startTimeFilter"] = serializeAws_json1_0ExecutionTimeFilter(
      input.startTimeFilter,
      context
    );
  }
  if (input.tagFilter !== undefined) {
    bodyParams["tagFilter"] = serializeAws_json1_0TagFilter(
      input.tagFilter,
      context
    );
  }
  if (input.typeFilter !== undefined) {
    bodyParams["typeFilter"] = serializeAws_json1_0WorkflowTypeFilter(
      input.typeFilter,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_json1_0ListWorkflowTypesInput = (
  input: ListWorkflowTypesInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.maximumPageSize !== undefined) {
    bodyParams["maximumPageSize"] = input.maximumPageSize;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.nextPageToken !== undefined) {
    bodyParams["nextPageToken"] = input.nextPageToken;
  }
  if (input.registrationStatus !== undefined) {
    bodyParams["registrationStatus"] = input.registrationStatus;
  }
  if (input.reverseOrder !== undefined) {
    bodyParams["reverseOrder"] = input.reverseOrder;
  }
  return bodyParams;
};

const serializeAws_json1_0PollForActivityTaskInput = (
  input: PollForActivityTaskInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.identity !== undefined) {
    bodyParams["identity"] = input.identity;
  }
  if (input.taskList !== undefined) {
    bodyParams["taskList"] = serializeAws_json1_0TaskList(
      input.taskList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0PollForDecisionTaskInput = (
  input: PollForDecisionTaskInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.identity !== undefined) {
    bodyParams["identity"] = input.identity;
  }
  if (input.maximumPageSize !== undefined) {
    bodyParams["maximumPageSize"] = input.maximumPageSize;
  }
  if (input.nextPageToken !== undefined) {
    bodyParams["nextPageToken"] = input.nextPageToken;
  }
  if (input.reverseOrder !== undefined) {
    bodyParams["reverseOrder"] = input.reverseOrder;
  }
  if (input.taskList !== undefined) {
    bodyParams["taskList"] = serializeAws_json1_0TaskList(
      input.taskList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0RecordActivityTaskHeartbeatInput = (
  input: RecordActivityTaskHeartbeatInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.details !== undefined) {
    bodyParams["details"] = input.details;
  }
  if (input.taskToken !== undefined) {
    bodyParams["taskToken"] = input.taskToken;
  }
  return bodyParams;
};

const serializeAws_json1_0RegisterActivityTypeInput = (
  input: RegisterActivityTypeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.defaultTaskHeartbeatTimeout !== undefined) {
    bodyParams["defaultTaskHeartbeatTimeout"] =
      input.defaultTaskHeartbeatTimeout;
  }
  if (input.defaultTaskList !== undefined) {
    bodyParams["defaultTaskList"] = serializeAws_json1_0TaskList(
      input.defaultTaskList,
      context
    );
  }
  if (input.defaultTaskPriority !== undefined) {
    bodyParams["defaultTaskPriority"] = input.defaultTaskPriority;
  }
  if (input.defaultTaskScheduleToCloseTimeout !== undefined) {
    bodyParams["defaultTaskScheduleToCloseTimeout"] =
      input.defaultTaskScheduleToCloseTimeout;
  }
  if (input.defaultTaskScheduleToStartTimeout !== undefined) {
    bodyParams["defaultTaskScheduleToStartTimeout"] =
      input.defaultTaskScheduleToStartTimeout;
  }
  if (input.defaultTaskStartToCloseTimeout !== undefined) {
    bodyParams["defaultTaskStartToCloseTimeout"] =
      input.defaultTaskStartToCloseTimeout;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_0RegisterDomainInput = (
  input: RegisterDomainInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_0ResourceTagList(
      input.tags,
      context
    );
  }
  if (input.workflowExecutionRetentionPeriodInDays !== undefined) {
    bodyParams["workflowExecutionRetentionPeriodInDays"] =
      input.workflowExecutionRetentionPeriodInDays;
  }
  return bodyParams;
};

const serializeAws_json1_0RegisterWorkflowTypeInput = (
  input: RegisterWorkflowTypeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.defaultChildPolicy !== undefined) {
    bodyParams["defaultChildPolicy"] = input.defaultChildPolicy;
  }
  if (input.defaultExecutionStartToCloseTimeout !== undefined) {
    bodyParams["defaultExecutionStartToCloseTimeout"] =
      input.defaultExecutionStartToCloseTimeout;
  }
  if (input.defaultLambdaRole !== undefined) {
    bodyParams["defaultLambdaRole"] = input.defaultLambdaRole;
  }
  if (input.defaultTaskList !== undefined) {
    bodyParams["defaultTaskList"] = serializeAws_json1_0TaskList(
      input.defaultTaskList,
      context
    );
  }
  if (input.defaultTaskPriority !== undefined) {
    bodyParams["defaultTaskPriority"] = input.defaultTaskPriority;
  }
  if (input.defaultTaskStartToCloseTimeout !== undefined) {
    bodyParams["defaultTaskStartToCloseTimeout"] =
      input.defaultTaskStartToCloseTimeout;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_json1_0RequestCancelWorkflowExecutionInput = (
  input: RequestCancelWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.runId !== undefined) {
    bodyParams["runId"] = input.runId;
  }
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  return bodyParams;
};

const serializeAws_json1_0RespondActivityTaskCanceledInput = (
  input: RespondActivityTaskCanceledInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.details !== undefined) {
    bodyParams["details"] = input.details;
  }
  if (input.taskToken !== undefined) {
    bodyParams["taskToken"] = input.taskToken;
  }
  return bodyParams;
};

const serializeAws_json1_0RespondActivityTaskCompletedInput = (
  input: RespondActivityTaskCompletedInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.result !== undefined) {
    bodyParams["result"] = input.result;
  }
  if (input.taskToken !== undefined) {
    bodyParams["taskToken"] = input.taskToken;
  }
  return bodyParams;
};

const serializeAws_json1_0RespondActivityTaskFailedInput = (
  input: RespondActivityTaskFailedInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.details !== undefined) {
    bodyParams["details"] = input.details;
  }
  if (input.reason !== undefined) {
    bodyParams["reason"] = input.reason;
  }
  if (input.taskToken !== undefined) {
    bodyParams["taskToken"] = input.taskToken;
  }
  return bodyParams;
};

const serializeAws_json1_0RespondDecisionTaskCompletedInput = (
  input: RespondDecisionTaskCompletedInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.decisions !== undefined) {
    bodyParams["decisions"] = serializeAws_json1_0DecisionList(
      input.decisions,
      context
    );
  }
  if (input.executionContext !== undefined) {
    bodyParams["executionContext"] = input.executionContext;
  }
  if (input.taskToken !== undefined) {
    bodyParams["taskToken"] = input.taskToken;
  }
  return bodyParams;
};

const serializeAws_json1_0SignalWorkflowExecutionInput = (
  input: SignalWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.input !== undefined) {
    bodyParams["input"] = input.input;
  }
  if (input.runId !== undefined) {
    bodyParams["runId"] = input.runId;
  }
  if (input.signalName !== undefined) {
    bodyParams["signalName"] = input.signalName;
  }
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  return bodyParams;
};

const serializeAws_json1_0StartWorkflowExecutionInput = (
  input: StartWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.childPolicy !== undefined) {
    bodyParams["childPolicy"] = input.childPolicy;
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.executionStartToCloseTimeout !== undefined) {
    bodyParams["executionStartToCloseTimeout"] =
      input.executionStartToCloseTimeout;
  }
  if (input.input !== undefined) {
    bodyParams["input"] = input.input;
  }
  if (input.lambdaRole !== undefined) {
    bodyParams["lambdaRole"] = input.lambdaRole;
  }
  if (input.tagList !== undefined) {
    bodyParams["tagList"] = serializeAws_json1_0TagList(input.tagList, context);
  }
  if (input.taskList !== undefined) {
    bodyParams["taskList"] = serializeAws_json1_0TaskList(
      input.taskList,
      context
    );
  }
  if (input.taskPriority !== undefined) {
    bodyParams["taskPriority"] = input.taskPriority;
  }
  if (input.taskStartToCloseTimeout !== undefined) {
    bodyParams["taskStartToCloseTimeout"] = input.taskStartToCloseTimeout;
  }
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  if (input.workflowType !== undefined) {
    bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(
      input.workflowType,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0TagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_json1_0ResourceTagList(
      input.tags,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0TerminateWorkflowExecutionInput = (
  input: TerminateWorkflowExecutionInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.childPolicy !== undefined) {
    bodyParams["childPolicy"] = input.childPolicy;
  }
  if (input.details !== undefined) {
    bodyParams["details"] = input.details;
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.reason !== undefined) {
    bodyParams["reason"] = input.reason;
  }
  if (input.runId !== undefined) {
    bodyParams["runId"] = input.runId;
  }
  if (input.workflowId !== undefined) {
    bodyParams["workflowId"] = input.workflowId;
  }
  return bodyParams;
};

const serializeAws_json1_0UndeprecateActivityTypeInput = (
  input: UndeprecateActivityTypeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.activityType !== undefined) {
    bodyParams["activityType"] = serializeAws_json1_0ActivityType(
      input.activityType,
      context
    );
  }
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  return bodyParams;
};

const serializeAws_json1_0UndeprecateDomainInput = (
  input: UndeprecateDomainInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_0UndeprecateWorkflowTypeInput = (
  input: UndeprecateWorkflowTypeInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.domain !== undefined) {
    bodyParams["domain"] = input.domain;
  }
  if (input.workflowType !== undefined) {
    bodyParams["workflowType"] = serializeAws_json1_0WorkflowType(
      input.workflowType,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_0UntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  if (input.tagKeys !== undefined) {
    bodyParams["tagKeys"] = serializeAws_json1_0ResourceTagKeyList(
      input.tagKeys,
      context
    );
  }
  return bodyParams;
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
  if (output.activityId !== undefined) {
    contents.activityId = output.activityId;
  }
  if (output.activityType !== undefined) {
    contents.activityType = deserializeAws_json1_0ActivityType(
      output.activityType,
      context
    );
  }
  if (output.input !== undefined) {
    contents.input = output.input;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.taskToken !== undefined) {
    contents.taskToken = output.taskToken;
  }
  if (output.workflowExecution !== undefined) {
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
  if (output.activityId !== undefined) {
    contents.activityId = output.activityId;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
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
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.latestCancelRequestedEventId !== undefined) {
    contents.latestCancelRequestedEventId = output.latestCancelRequestedEventId;
  }
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
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
  if (output.result !== undefined) {
    contents.result = output.result;
  }
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
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
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.reason !== undefined) {
    contents.reason = output.reason;
  }
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
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
  if (output.activityId !== undefined) {
    contents.activityId = output.activityId;
  }
  if (output.activityType !== undefined) {
    contents.activityType = deserializeAws_json1_0ActivityType(
      output.activityType,
      context
    );
  }
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.heartbeatTimeout !== undefined) {
    contents.heartbeatTimeout = output.heartbeatTimeout;
  }
  if (output.input !== undefined) {
    contents.input = output.input;
  }
  if (output.scheduleToCloseTimeout !== undefined) {
    contents.scheduleToCloseTimeout = output.scheduleToCloseTimeout;
  }
  if (output.scheduleToStartTimeout !== undefined) {
    contents.scheduleToStartTimeout = output.scheduleToStartTimeout;
  }
  if (output.startToCloseTimeout !== undefined) {
    contents.startToCloseTimeout = output.startToCloseTimeout;
  }
  if (output.taskList !== undefined) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined) {
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
  if (output.identity !== undefined) {
    contents.identity = output.identity;
  }
  if (output.scheduledEventId !== undefined) {
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
  if (output.cancelRequested !== undefined) {
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
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timeoutType !== undefined) {
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
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.version !== undefined) {
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
  if (output.defaultTaskHeartbeatTimeout !== undefined) {
    contents.defaultTaskHeartbeatTimeout = output.defaultTaskHeartbeatTimeout;
  }
  if (output.defaultTaskList !== undefined) {
    contents.defaultTaskList = deserializeAws_json1_0TaskList(
      output.defaultTaskList,
      context
    );
  }
  if (output.defaultTaskPriority !== undefined) {
    contents.defaultTaskPriority = output.defaultTaskPriority;
  }
  if (output.defaultTaskScheduleToCloseTimeout !== undefined) {
    contents.defaultTaskScheduleToCloseTimeout =
      output.defaultTaskScheduleToCloseTimeout;
  }
  if (output.defaultTaskScheduleToStartTimeout !== undefined) {
    contents.defaultTaskScheduleToStartTimeout =
      output.defaultTaskScheduleToStartTimeout;
  }
  if (output.defaultTaskStartToCloseTimeout !== undefined) {
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
  if (output.configuration !== undefined) {
    contents.configuration = deserializeAws_json1_0ActivityTypeConfiguration(
      output.configuration,
      context
    );
  }
  if (output.typeInfo !== undefined) {
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
  if (output.activityType !== undefined) {
    contents.activityType = deserializeAws_json1_0ActivityType(
      output.activityType,
      context
    );
  }
  if (output.creationDate !== undefined) {
    contents.creationDate = new Date(
      output.creationDate % 1 != 0
        ? Math.round(output.creationDate * 1000)
        : output.creationDate
    );
  }
  if (output.deprecationDate !== undefined) {
    contents.deprecationDate = new Date(
      output.deprecationDate % 1 != 0
        ? Math.round(output.deprecationDate * 1000)
        : output.deprecationDate
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_0ActivityTypeInfoList = (
  output: any,
  context: __SerdeContext
): Array<ActivityTypeInfo> => {
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
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.typeInfos !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.timerId !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
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
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.workflowExecution !== undefined) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined) {
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
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.result !== undefined) {
    contents.result = output.result;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.workflowExecution !== undefined) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined) {
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
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.reason !== undefined) {
    contents.reason = output.reason;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.workflowExecution !== undefined) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined) {
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
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.workflowExecution !== undefined) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined) {
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
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.workflowExecution !== undefined) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined) {
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
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timeoutType !== undefined) {
    contents.timeoutType = output.timeoutType;
  }
  if (output.workflowExecution !== undefined) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
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
  if (output.events !== undefined) {
    contents.events = deserializeAws_json1_0HistoryEventList(
      output.events,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.previousStartedEventId !== undefined) {
    contents.previousStartedEventId = output.previousStartedEventId;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.taskToken !== undefined) {
    contents.taskToken = output.taskToken;
  }
  if (output.workflowExecution !== undefined) {
    contents.workflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.workflowExecution,
      context
    );
  }
  if (output.workflowType !== undefined) {
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
  if (output.executionContext !== undefined) {
    contents.executionContext = output.executionContext;
  }
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
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
  if (output.startToCloseTimeout !== undefined) {
    contents.startToCloseTimeout = output.startToCloseTimeout;
  }
  if (output.taskList !== undefined) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined) {
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
  if (output.identity !== undefined) {
    contents.identity = output.identity;
  }
  if (output.scheduledEventId !== undefined) {
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
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timeoutType !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.workflowExecutionRetentionPeriodInDays !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.configuration !== undefined) {
    contents.configuration = deserializeAws_json1_0DomainConfiguration(
      output.configuration,
      context
    );
  }
  if (output.domainInfo !== undefined) {
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
  if (output.arn !== undefined) {
    contents.arn = output.arn;
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_0DomainInfoList = (
  output: any,
  context: __SerdeContext
): Array<DomainInfo> => {
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
  if (output.domainInfos !== undefined) {
    contents.domainInfos = deserializeAws_json1_0DomainInfoList(
      output.domainInfos,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
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
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.workflowExecution !== undefined) {
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
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.workflowExecution !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
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
  if (output.events !== undefined) {
    contents.events = deserializeAws_json1_0HistoryEventList(
      output.events,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
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
  if (output.activityTaskCancelRequestedEventAttributes !== undefined) {
    contents.activityTaskCancelRequestedEventAttributes = deserializeAws_json1_0ActivityTaskCancelRequestedEventAttributes(
      output.activityTaskCancelRequestedEventAttributes,
      context
    );
  }
  if (output.activityTaskCanceledEventAttributes !== undefined) {
    contents.activityTaskCanceledEventAttributes = deserializeAws_json1_0ActivityTaskCanceledEventAttributes(
      output.activityTaskCanceledEventAttributes,
      context
    );
  }
  if (output.activityTaskCompletedEventAttributes !== undefined) {
    contents.activityTaskCompletedEventAttributes = deserializeAws_json1_0ActivityTaskCompletedEventAttributes(
      output.activityTaskCompletedEventAttributes,
      context
    );
  }
  if (output.activityTaskFailedEventAttributes !== undefined) {
    contents.activityTaskFailedEventAttributes = deserializeAws_json1_0ActivityTaskFailedEventAttributes(
      output.activityTaskFailedEventAttributes,
      context
    );
  }
  if (output.activityTaskScheduledEventAttributes !== undefined) {
    contents.activityTaskScheduledEventAttributes = deserializeAws_json1_0ActivityTaskScheduledEventAttributes(
      output.activityTaskScheduledEventAttributes,
      context
    );
  }
  if (output.activityTaskStartedEventAttributes !== undefined) {
    contents.activityTaskStartedEventAttributes = deserializeAws_json1_0ActivityTaskStartedEventAttributes(
      output.activityTaskStartedEventAttributes,
      context
    );
  }
  if (output.activityTaskTimedOutEventAttributes !== undefined) {
    contents.activityTaskTimedOutEventAttributes = deserializeAws_json1_0ActivityTaskTimedOutEventAttributes(
      output.activityTaskTimedOutEventAttributes,
      context
    );
  }
  if (output.cancelTimerFailedEventAttributes !== undefined) {
    contents.cancelTimerFailedEventAttributes = deserializeAws_json1_0CancelTimerFailedEventAttributes(
      output.cancelTimerFailedEventAttributes,
      context
    );
  }
  if (output.cancelWorkflowExecutionFailedEventAttributes !== undefined) {
    contents.cancelWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0CancelWorkflowExecutionFailedEventAttributes(
      output.cancelWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (output.childWorkflowExecutionCanceledEventAttributes !== undefined) {
    contents.childWorkflowExecutionCanceledEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionCanceledEventAttributes(
      output.childWorkflowExecutionCanceledEventAttributes,
      context
    );
  }
  if (output.childWorkflowExecutionCompletedEventAttributes !== undefined) {
    contents.childWorkflowExecutionCompletedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionCompletedEventAttributes(
      output.childWorkflowExecutionCompletedEventAttributes,
      context
    );
  }
  if (output.childWorkflowExecutionFailedEventAttributes !== undefined) {
    contents.childWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionFailedEventAttributes(
      output.childWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (output.childWorkflowExecutionStartedEventAttributes !== undefined) {
    contents.childWorkflowExecutionStartedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionStartedEventAttributes(
      output.childWorkflowExecutionStartedEventAttributes,
      context
    );
  }
  if (output.childWorkflowExecutionTerminatedEventAttributes !== undefined) {
    contents.childWorkflowExecutionTerminatedEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionTerminatedEventAttributes(
      output.childWorkflowExecutionTerminatedEventAttributes,
      context
    );
  }
  if (output.childWorkflowExecutionTimedOutEventAttributes !== undefined) {
    contents.childWorkflowExecutionTimedOutEventAttributes = deserializeAws_json1_0ChildWorkflowExecutionTimedOutEventAttributes(
      output.childWorkflowExecutionTimedOutEventAttributes,
      context
    );
  }
  if (output.completeWorkflowExecutionFailedEventAttributes !== undefined) {
    contents.completeWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0CompleteWorkflowExecutionFailedEventAttributes(
      output.completeWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.continueAsNewWorkflowExecutionFailedEventAttributes !== undefined
  ) {
    contents.continueAsNewWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0ContinueAsNewWorkflowExecutionFailedEventAttributes(
      output.continueAsNewWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (output.decisionTaskCompletedEventAttributes !== undefined) {
    contents.decisionTaskCompletedEventAttributes = deserializeAws_json1_0DecisionTaskCompletedEventAttributes(
      output.decisionTaskCompletedEventAttributes,
      context
    );
  }
  if (output.decisionTaskScheduledEventAttributes !== undefined) {
    contents.decisionTaskScheduledEventAttributes = deserializeAws_json1_0DecisionTaskScheduledEventAttributes(
      output.decisionTaskScheduledEventAttributes,
      context
    );
  }
  if (output.decisionTaskStartedEventAttributes !== undefined) {
    contents.decisionTaskStartedEventAttributes = deserializeAws_json1_0DecisionTaskStartedEventAttributes(
      output.decisionTaskStartedEventAttributes,
      context
    );
  }
  if (output.decisionTaskTimedOutEventAttributes !== undefined) {
    contents.decisionTaskTimedOutEventAttributes = deserializeAws_json1_0DecisionTaskTimedOutEventAttributes(
      output.decisionTaskTimedOutEventAttributes,
      context
    );
  }
  if (output.eventId !== undefined) {
    contents.eventId = output.eventId;
  }
  if (output.eventTimestamp !== undefined) {
    contents.eventTimestamp = new Date(
      output.eventTimestamp % 1 != 0
        ? Math.round(output.eventTimestamp * 1000)
        : output.eventTimestamp
    );
  }
  if (output.eventType !== undefined) {
    contents.eventType = output.eventType;
  }
  if (
    output.externalWorkflowExecutionCancelRequestedEventAttributes !== undefined
  ) {
    contents.externalWorkflowExecutionCancelRequestedEventAttributes = deserializeAws_json1_0ExternalWorkflowExecutionCancelRequestedEventAttributes(
      output.externalWorkflowExecutionCancelRequestedEventAttributes,
      context
    );
  }
  if (output.externalWorkflowExecutionSignaledEventAttributes !== undefined) {
    contents.externalWorkflowExecutionSignaledEventAttributes = deserializeAws_json1_0ExternalWorkflowExecutionSignaledEventAttributes(
      output.externalWorkflowExecutionSignaledEventAttributes,
      context
    );
  }
  if (output.failWorkflowExecutionFailedEventAttributes !== undefined) {
    contents.failWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0FailWorkflowExecutionFailedEventAttributes(
      output.failWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (output.lambdaFunctionCompletedEventAttributes !== undefined) {
    contents.lambdaFunctionCompletedEventAttributes = deserializeAws_json1_0LambdaFunctionCompletedEventAttributes(
      output.lambdaFunctionCompletedEventAttributes,
      context
    );
  }
  if (output.lambdaFunctionFailedEventAttributes !== undefined) {
    contents.lambdaFunctionFailedEventAttributes = deserializeAws_json1_0LambdaFunctionFailedEventAttributes(
      output.lambdaFunctionFailedEventAttributes,
      context
    );
  }
  if (output.lambdaFunctionScheduledEventAttributes !== undefined) {
    contents.lambdaFunctionScheduledEventAttributes = deserializeAws_json1_0LambdaFunctionScheduledEventAttributes(
      output.lambdaFunctionScheduledEventAttributes,
      context
    );
  }
  if (output.lambdaFunctionStartedEventAttributes !== undefined) {
    contents.lambdaFunctionStartedEventAttributes = deserializeAws_json1_0LambdaFunctionStartedEventAttributes(
      output.lambdaFunctionStartedEventAttributes,
      context
    );
  }
  if (output.lambdaFunctionTimedOutEventAttributes !== undefined) {
    contents.lambdaFunctionTimedOutEventAttributes = deserializeAws_json1_0LambdaFunctionTimedOutEventAttributes(
      output.lambdaFunctionTimedOutEventAttributes,
      context
    );
  }
  if (output.markerRecordedEventAttributes !== undefined) {
    contents.markerRecordedEventAttributes = deserializeAws_json1_0MarkerRecordedEventAttributes(
      output.markerRecordedEventAttributes,
      context
    );
  }
  if (output.recordMarkerFailedEventAttributes !== undefined) {
    contents.recordMarkerFailedEventAttributes = deserializeAws_json1_0RecordMarkerFailedEventAttributes(
      output.recordMarkerFailedEventAttributes,
      context
    );
  }
  if (output.requestCancelActivityTaskFailedEventAttributes !== undefined) {
    contents.requestCancelActivityTaskFailedEventAttributes = deserializeAws_json1_0RequestCancelActivityTaskFailedEventAttributes(
      output.requestCancelActivityTaskFailedEventAttributes,
      context
    );
  }
  if (
    output.requestCancelExternalWorkflowExecutionFailedEventAttributes !==
    undefined
  ) {
    contents.requestCancelExternalWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0RequestCancelExternalWorkflowExecutionFailedEventAttributes(
      output.requestCancelExternalWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes !==
    undefined
  ) {
    contents.requestCancelExternalWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(
      output.requestCancelExternalWorkflowExecutionInitiatedEventAttributes,
      context
    );
  }
  if (output.scheduleActivityTaskFailedEventAttributes !== undefined) {
    contents.scheduleActivityTaskFailedEventAttributes = deserializeAws_json1_0ScheduleActivityTaskFailedEventAttributes(
      output.scheduleActivityTaskFailedEventAttributes,
      context
    );
  }
  if (output.scheduleLambdaFunctionFailedEventAttributes !== undefined) {
    contents.scheduleLambdaFunctionFailedEventAttributes = deserializeAws_json1_0ScheduleLambdaFunctionFailedEventAttributes(
      output.scheduleLambdaFunctionFailedEventAttributes,
      context
    );
  }
  if (
    output.signalExternalWorkflowExecutionFailedEventAttributes !== undefined
  ) {
    contents.signalExternalWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0SignalExternalWorkflowExecutionFailedEventAttributes(
      output.signalExternalWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.signalExternalWorkflowExecutionInitiatedEventAttributes !== undefined
  ) {
    contents.signalExternalWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0SignalExternalWorkflowExecutionInitiatedEventAttributes(
      output.signalExternalWorkflowExecutionInitiatedEventAttributes,
      context
    );
  }
  if (output.startChildWorkflowExecutionFailedEventAttributes !== undefined) {
    contents.startChildWorkflowExecutionFailedEventAttributes = deserializeAws_json1_0StartChildWorkflowExecutionFailedEventAttributes(
      output.startChildWorkflowExecutionFailedEventAttributes,
      context
    );
  }
  if (
    output.startChildWorkflowExecutionInitiatedEventAttributes !== undefined
  ) {
    contents.startChildWorkflowExecutionInitiatedEventAttributes = deserializeAws_json1_0StartChildWorkflowExecutionInitiatedEventAttributes(
      output.startChildWorkflowExecutionInitiatedEventAttributes,
      context
    );
  }
  if (output.startLambdaFunctionFailedEventAttributes !== undefined) {
    contents.startLambdaFunctionFailedEventAttributes = deserializeAws_json1_0StartLambdaFunctionFailedEventAttributes(
      output.startLambdaFunctionFailedEventAttributes,
      context
    );
  }
  if (output.startTimerFailedEventAttributes !== undefined) {
    contents.startTimerFailedEventAttributes = deserializeAws_json1_0StartTimerFailedEventAttributes(
      output.startTimerFailedEventAttributes,
      context
    );
  }
  if (output.timerCanceledEventAttributes !== undefined) {
    contents.timerCanceledEventAttributes = deserializeAws_json1_0TimerCanceledEventAttributes(
      output.timerCanceledEventAttributes,
      context
    );
  }
  if (output.timerFiredEventAttributes !== undefined) {
    contents.timerFiredEventAttributes = deserializeAws_json1_0TimerFiredEventAttributes(
      output.timerFiredEventAttributes,
      context
    );
  }
  if (output.timerStartedEventAttributes !== undefined) {
    contents.timerStartedEventAttributes = deserializeAws_json1_0TimerStartedEventAttributes(
      output.timerStartedEventAttributes,
      context
    );
  }
  if (output.workflowExecutionCancelRequestedEventAttributes !== undefined) {
    contents.workflowExecutionCancelRequestedEventAttributes = deserializeAws_json1_0WorkflowExecutionCancelRequestedEventAttributes(
      output.workflowExecutionCancelRequestedEventAttributes,
      context
    );
  }
  if (output.workflowExecutionCanceledEventAttributes !== undefined) {
    contents.workflowExecutionCanceledEventAttributes = deserializeAws_json1_0WorkflowExecutionCanceledEventAttributes(
      output.workflowExecutionCanceledEventAttributes,
      context
    );
  }
  if (output.workflowExecutionCompletedEventAttributes !== undefined) {
    contents.workflowExecutionCompletedEventAttributes = deserializeAws_json1_0WorkflowExecutionCompletedEventAttributes(
      output.workflowExecutionCompletedEventAttributes,
      context
    );
  }
  if (output.workflowExecutionContinuedAsNewEventAttributes !== undefined) {
    contents.workflowExecutionContinuedAsNewEventAttributes = deserializeAws_json1_0WorkflowExecutionContinuedAsNewEventAttributes(
      output.workflowExecutionContinuedAsNewEventAttributes,
      context
    );
  }
  if (output.workflowExecutionFailedEventAttributes !== undefined) {
    contents.workflowExecutionFailedEventAttributes = deserializeAws_json1_0WorkflowExecutionFailedEventAttributes(
      output.workflowExecutionFailedEventAttributes,
      context
    );
  }
  if (output.workflowExecutionSignaledEventAttributes !== undefined) {
    contents.workflowExecutionSignaledEventAttributes = deserializeAws_json1_0WorkflowExecutionSignaledEventAttributes(
      output.workflowExecutionSignaledEventAttributes,
      context
    );
  }
  if (output.workflowExecutionStartedEventAttributes !== undefined) {
    contents.workflowExecutionStartedEventAttributes = deserializeAws_json1_0WorkflowExecutionStartedEventAttributes(
      output.workflowExecutionStartedEventAttributes,
      context
    );
  }
  if (output.workflowExecutionTerminatedEventAttributes !== undefined) {
    contents.workflowExecutionTerminatedEventAttributes = deserializeAws_json1_0WorkflowExecutionTerminatedEventAttributes(
      output.workflowExecutionTerminatedEventAttributes,
      context
    );
  }
  if (output.workflowExecutionTimedOutEventAttributes !== undefined) {
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
): Array<HistoryEvent> => {
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
  if (output.result !== undefined) {
    contents.result = output.result;
  }
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
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
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.reason !== undefined) {
    contents.reason = output.reason;
  }
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
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
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.input !== undefined) {
    contents.input = output.input;
  }
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.startToCloseTimeout !== undefined) {
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
  if (output.scheduledEventId !== undefined) {
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
  if (output.scheduledEventId !== undefined) {
    contents.scheduledEventId = output.scheduledEventId;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timeoutType !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.markerName !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.count !== undefined) {
    contents.count = output.count;
  }
  if (output.truncated !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.markerName !== undefined) {
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
  if (output.activityId !== undefined) {
    contents.activityId = output.activityId;
  }
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.runId !== undefined) {
    contents.runId = output.runId;
  }
  if (output.workflowId !== undefined) {
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
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.runId !== undefined) {
    contents.runId = output.runId;
  }
  if (output.workflowId !== undefined) {
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
  if (output.key !== undefined) {
    contents.key = output.key;
  }
  if (output.value !== undefined) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_0ResourceTagList = (
  output: any,
  context: __SerdeContext
): Array<ResourceTag> => {
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
  if (output.activityId !== undefined) {
    contents.activityId = output.activityId;
  }
  if (output.activityType !== undefined) {
    contents.activityType = deserializeAws_json1_0ActivityType(
      output.activityType,
      context
    );
  }
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.id !== undefined) {
    contents.id = output.id;
  }
  if (output.name !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.runId !== undefined) {
    contents.runId = output.runId;
  }
  if (output.workflowId !== undefined) {
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
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.input !== undefined) {
    contents.input = output.input;
  }
  if (output.runId !== undefined) {
    contents.runId = output.runId;
  }
  if (output.signalName !== undefined) {
    contents.signalName = output.signalName;
  }
  if (output.workflowId !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.initiatedEventId !== undefined) {
    contents.initiatedEventId = output.initiatedEventId;
  }
  if (output.workflowId !== undefined) {
    contents.workflowId = output.workflowId;
  }
  if (output.workflowType !== undefined) {
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
  if (output.childPolicy !== undefined) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.executionStartToCloseTimeout !== undefined) {
    contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
  }
  if (output.input !== undefined) {
    contents.input = output.input;
  }
  if (output.lambdaRole !== undefined) {
    contents.lambdaRole = output.lambdaRole;
  }
  if (output.tagList !== undefined) {
    contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
  }
  if (output.taskList !== undefined) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined) {
    contents.taskPriority = output.taskPriority;
  }
  if (output.taskStartToCloseTimeout !== undefined) {
    contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
  }
  if (output.workflowId !== undefined) {
    contents.workflowId = output.workflowId;
  }
  if (output.workflowType !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.message !== undefined) {
    contents.message = output.message;
  }
  if (output.scheduledEventId !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.timerId !== undefined) {
    contents.timerId = output.timerId;
  }
  return contents;
};

const deserializeAws_json1_0TagList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
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
  if (output.name !== undefined) {
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
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timerId !== undefined) {
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
  if (output.startedEventId !== undefined) {
    contents.startedEventId = output.startedEventId;
  }
  if (output.timerId !== undefined) {
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
  if (output.control !== undefined) {
    contents.control = output.control;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.startToFireTimeout !== undefined) {
    contents.startToFireTimeout = output.startToFireTimeout;
  }
  if (output.timerId !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.runId !== undefined) {
    contents.runId = output.runId;
  }
  if (output.workflowId !== undefined) {
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
  if (output.message !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.externalInitiatedEventId !== undefined) {
    contents.externalInitiatedEventId = output.externalInitiatedEventId;
  }
  if (output.externalWorkflowExecution !== undefined) {
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
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.details !== undefined) {
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
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.result !== undefined) {
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
  if (output.childPolicy !== undefined) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.executionStartToCloseTimeout !== undefined) {
    contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
  }
  if (output.lambdaRole !== undefined) {
    contents.lambdaRole = output.lambdaRole;
  }
  if (output.taskList !== undefined) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined) {
    contents.taskPriority = output.taskPriority;
  }
  if (output.taskStartToCloseTimeout !== undefined) {
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
  if (output.childPolicy !== undefined) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.executionStartToCloseTimeout !== undefined) {
    contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
  }
  if (output.input !== undefined) {
    contents.input = output.input;
  }
  if (output.lambdaRole !== undefined) {
    contents.lambdaRole = output.lambdaRole;
  }
  if (output.newExecutionRunId !== undefined) {
    contents.newExecutionRunId = output.newExecutionRunId;
  }
  if (output.tagList !== undefined) {
    contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
  }
  if (output.taskList !== undefined) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined) {
    contents.taskPriority = output.taskPriority;
  }
  if (output.taskStartToCloseTimeout !== undefined) {
    contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
  }
  if (output.workflowType !== undefined) {
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
  if (output.count !== undefined) {
    contents.count = output.count;
  }
  if (output.truncated !== undefined) {
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
  if (output.executionConfiguration !== undefined) {
    contents.executionConfiguration = deserializeAws_json1_0WorkflowExecutionConfiguration(
      output.executionConfiguration,
      context
    );
  }
  if (output.executionInfo !== undefined) {
    contents.executionInfo = deserializeAws_json1_0WorkflowExecutionInfo(
      output.executionInfo,
      context
    );
  }
  if (output.latestActivityTaskTimestamp !== undefined) {
    contents.latestActivityTaskTimestamp = new Date(
      output.latestActivityTaskTimestamp % 1 != 0
        ? Math.round(output.latestActivityTaskTimestamp * 1000)
        : output.latestActivityTaskTimestamp
    );
  }
  if (output.latestExecutionContext !== undefined) {
    contents.latestExecutionContext = output.latestExecutionContext;
  }
  if (output.openCounts !== undefined) {
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
  if (output.decisionTaskCompletedEventId !== undefined) {
    contents.decisionTaskCompletedEventId = output.decisionTaskCompletedEventId;
  }
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.reason !== undefined) {
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
  if (output.cancelRequested !== undefined) {
    contents.cancelRequested = output.cancelRequested;
  }
  if (output.closeStatus !== undefined) {
    contents.closeStatus = output.closeStatus;
  }
  if (output.closeTimestamp !== undefined) {
    contents.closeTimestamp = new Date(
      output.closeTimestamp % 1 != 0
        ? Math.round(output.closeTimestamp * 1000)
        : output.closeTimestamp
    );
  }
  if (output.execution !== undefined) {
    contents.execution = deserializeAws_json1_0WorkflowExecution(
      output.execution,
      context
    );
  }
  if (output.executionStatus !== undefined) {
    contents.executionStatus = output.executionStatus;
  }
  if (output.parent !== undefined) {
    contents.parent = deserializeAws_json1_0WorkflowExecution(
      output.parent,
      context
    );
  }
  if (output.startTimestamp !== undefined) {
    contents.startTimestamp = new Date(
      output.startTimestamp % 1 != 0
        ? Math.round(output.startTimestamp * 1000)
        : output.startTimestamp
    );
  }
  if (output.tagList !== undefined) {
    contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
  }
  if (output.workflowType !== undefined) {
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
): Array<WorkflowExecutionInfo> => {
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
  if (output.executionInfos !== undefined) {
    contents.executionInfos = deserializeAws_json1_0WorkflowExecutionInfoList(
      output.executionInfos,
      context
    );
  }
  if (output.nextPageToken !== undefined) {
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
  if (output.openActivityTasks !== undefined) {
    contents.openActivityTasks = output.openActivityTasks;
  }
  if (output.openChildWorkflowExecutions !== undefined) {
    contents.openChildWorkflowExecutions = output.openChildWorkflowExecutions;
  }
  if (output.openDecisionTasks !== undefined) {
    contents.openDecisionTasks = output.openDecisionTasks;
  }
  if (output.openLambdaFunctions !== undefined) {
    contents.openLambdaFunctions = output.openLambdaFunctions;
  }
  if (output.openTimers !== undefined) {
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
  if (output.externalInitiatedEventId !== undefined) {
    contents.externalInitiatedEventId = output.externalInitiatedEventId;
  }
  if (output.externalWorkflowExecution !== undefined) {
    contents.externalWorkflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.externalWorkflowExecution,
      context
    );
  }
  if (output.input !== undefined) {
    contents.input = output.input;
  }
  if (output.signalName !== undefined) {
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
  if (output.childPolicy !== undefined) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.continuedExecutionRunId !== undefined) {
    contents.continuedExecutionRunId = output.continuedExecutionRunId;
  }
  if (output.executionStartToCloseTimeout !== undefined) {
    contents.executionStartToCloseTimeout = output.executionStartToCloseTimeout;
  }
  if (output.input !== undefined) {
    contents.input = output.input;
  }
  if (output.lambdaRole !== undefined) {
    contents.lambdaRole = output.lambdaRole;
  }
  if (output.parentInitiatedEventId !== undefined) {
    contents.parentInitiatedEventId = output.parentInitiatedEventId;
  }
  if (output.parentWorkflowExecution !== undefined) {
    contents.parentWorkflowExecution = deserializeAws_json1_0WorkflowExecution(
      output.parentWorkflowExecution,
      context
    );
  }
  if (output.tagList !== undefined) {
    contents.tagList = deserializeAws_json1_0TagList(output.tagList, context);
  }
  if (output.taskList !== undefined) {
    contents.taskList = deserializeAws_json1_0TaskList(
      output.taskList,
      context
    );
  }
  if (output.taskPriority !== undefined) {
    contents.taskPriority = output.taskPriority;
  }
  if (output.taskStartToCloseTimeout !== undefined) {
    contents.taskStartToCloseTimeout = output.taskStartToCloseTimeout;
  }
  if (output.workflowType !== undefined) {
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
  if (output.cause !== undefined) {
    contents.cause = output.cause;
  }
  if (output.childPolicy !== undefined) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.details !== undefined) {
    contents.details = output.details;
  }
  if (output.reason !== undefined) {
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
  if (output.childPolicy !== undefined) {
    contents.childPolicy = output.childPolicy;
  }
  if (output.timeoutType !== undefined) {
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
  if (output.name !== undefined) {
    contents.name = output.name;
  }
  if (output.version !== undefined) {
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
  if (output.defaultChildPolicy !== undefined) {
    contents.defaultChildPolicy = output.defaultChildPolicy;
  }
  if (output.defaultExecutionStartToCloseTimeout !== undefined) {
    contents.defaultExecutionStartToCloseTimeout =
      output.defaultExecutionStartToCloseTimeout;
  }
  if (output.defaultLambdaRole !== undefined) {
    contents.defaultLambdaRole = output.defaultLambdaRole;
  }
  if (output.defaultTaskList !== undefined) {
    contents.defaultTaskList = deserializeAws_json1_0TaskList(
      output.defaultTaskList,
      context
    );
  }
  if (output.defaultTaskPriority !== undefined) {
    contents.defaultTaskPriority = output.defaultTaskPriority;
  }
  if (output.defaultTaskStartToCloseTimeout !== undefined) {
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
  if (output.configuration !== undefined) {
    contents.configuration = deserializeAws_json1_0WorkflowTypeConfiguration(
      output.configuration,
      context
    );
  }
  if (output.typeInfo !== undefined) {
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
  if (output.creationDate !== undefined) {
    contents.creationDate = new Date(
      output.creationDate % 1 != 0
        ? Math.round(output.creationDate * 1000)
        : output.creationDate
    );
  }
  if (output.deprecationDate !== undefined) {
    contents.deprecationDate = new Date(
      output.deprecationDate % 1 != 0
        ? Math.round(output.deprecationDate * 1000)
        : output.deprecationDate
    );
  }
  if (output.description !== undefined) {
    contents.description = output.description;
  }
  if (output.status !== undefined) {
    contents.status = output.status;
  }
  if (output.workflowType !== undefined) {
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
): Array<WorkflowTypeInfo> => {
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
  if (output.nextPageToken !== undefined) {
    contents.nextPageToken = output.nextPageToken;
  }
  if (output.typeInfos !== undefined) {
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
  if (output.tags !== undefined) {
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
  if (output.runId !== undefined) {
    contents.runId = output.runId;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return context.streamCollector(streamBody).then((body: any) => {
    const encoded = context.utf8Encoder(body);
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
