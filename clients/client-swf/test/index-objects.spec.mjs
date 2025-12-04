import {
  ActivityTaskTimeoutType,
  CancelTimerFailedCause,
  CancelWorkflowExecutionFailedCause,
  ChildPolicy,
  CloseStatus,
  CompleteWorkflowExecutionFailedCause,
  ContinueAsNewWorkflowExecutionFailedCause,
  CountClosedWorkflowExecutionsCommand,
  CountOpenWorkflowExecutionsCommand,
  CountPendingActivityTasksCommand,
  CountPendingDecisionTasksCommand,
  DecisionTaskTimeoutType,
  DecisionType,
  DeleteActivityTypeCommand,
  DeleteWorkflowTypeCommand,
  DeprecateActivityTypeCommand,
  DeprecateDomainCommand,
  DeprecateWorkflowTypeCommand,
  DescribeActivityTypeCommand,
  DescribeDomainCommand,
  DescribeWorkflowExecutionCommand,
  DescribeWorkflowTypeCommand,
  EventType,
  ExecutionStatus,
  FailWorkflowExecutionFailedCause,
  GetWorkflowExecutionHistoryCommand,
  LambdaFunctionTimeoutType,
  ListActivityTypesCommand,
  ListClosedWorkflowExecutionsCommand,
  ListDomainsCommand,
  ListOpenWorkflowExecutionsCommand,
  ListTagsForResourceCommand,
  ListWorkflowTypesCommand,
  PollForActivityTaskCommand,
  PollForDecisionTaskCommand,
  RecordActivityTaskHeartbeatCommand,
  RecordMarkerFailedCause,
  RegisterActivityTypeCommand,
  RegisterDomainCommand,
  RegisterWorkflowTypeCommand,
  RegistrationStatus,
  RequestCancelActivityTaskFailedCause,
  RequestCancelExternalWorkflowExecutionFailedCause,
  RequestCancelWorkflowExecutionCommand,
  RespondActivityTaskCanceledCommand,
  RespondActivityTaskCompletedCommand,
  RespondActivityTaskFailedCommand,
  RespondDecisionTaskCompletedCommand,
  SWF,
  SWFClient,
  SWFServiceException,
  ScheduleActivityTaskFailedCause,
  ScheduleLambdaFunctionFailedCause,
  SignalExternalWorkflowExecutionFailedCause,
  SignalWorkflowExecutionCommand,
  StartChildWorkflowExecutionFailedCause,
  StartLambdaFunctionFailedCause,
  StartTimerFailedCause,
  StartWorkflowExecutionCommand,
  TagResourceCommand,
  TerminateWorkflowExecutionCommand,
  UndeprecateActivityTypeCommand,
  UndeprecateDomainCommand,
  UndeprecateWorkflowTypeCommand,
  UntagResourceCommand,
  WorkflowExecutionCancelRequestedCause,
  WorkflowExecutionTerminatedCause,
  WorkflowExecutionTimeoutType,
  paginateGetWorkflowExecutionHistory,
  paginateListActivityTypes,
  paginateListClosedWorkflowExecutions,
  paginateListDomains,
  paginateListOpenWorkflowExecutions,
  paginateListWorkflowTypes,
  paginatePollForDecisionTask,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SWFClient === "function");
assert(typeof SWF === "function");
// commands
assert(typeof CountClosedWorkflowExecutionsCommand === "function");
assert(typeof CountOpenWorkflowExecutionsCommand === "function");
assert(typeof CountPendingActivityTasksCommand === "function");
assert(typeof CountPendingDecisionTasksCommand === "function");
assert(typeof DeleteActivityTypeCommand === "function");
assert(typeof DeleteWorkflowTypeCommand === "function");
assert(typeof DeprecateActivityTypeCommand === "function");
assert(typeof DeprecateDomainCommand === "function");
assert(typeof DeprecateWorkflowTypeCommand === "function");
assert(typeof DescribeActivityTypeCommand === "function");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribeWorkflowExecutionCommand === "function");
assert(typeof DescribeWorkflowTypeCommand === "function");
assert(typeof GetWorkflowExecutionHistoryCommand === "function");
assert(typeof ListActivityTypesCommand === "function");
assert(typeof ListClosedWorkflowExecutionsCommand === "function");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListOpenWorkflowExecutionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWorkflowTypesCommand === "function");
assert(typeof PollForActivityTaskCommand === "function");
assert(typeof PollForDecisionTaskCommand === "function");
assert(typeof RecordActivityTaskHeartbeatCommand === "function");
assert(typeof RegisterActivityTypeCommand === "function");
assert(typeof RegisterDomainCommand === "function");
assert(typeof RegisterWorkflowTypeCommand === "function");
assert(typeof RequestCancelWorkflowExecutionCommand === "function");
assert(typeof RespondActivityTaskCanceledCommand === "function");
assert(typeof RespondActivityTaskCompletedCommand === "function");
assert(typeof RespondActivityTaskFailedCommand === "function");
assert(typeof RespondDecisionTaskCompletedCommand === "function");
assert(typeof SignalWorkflowExecutionCommand === "function");
assert(typeof StartWorkflowExecutionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TerminateWorkflowExecutionCommand === "function");
assert(typeof UndeprecateActivityTypeCommand === "function");
assert(typeof UndeprecateDomainCommand === "function");
assert(typeof UndeprecateWorkflowTypeCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof ActivityTaskTimeoutType === "object");
assert(typeof CancelTimerFailedCause === "object");
assert(typeof CancelWorkflowExecutionFailedCause === "object");
assert(typeof ChildPolicy === "object");
assert(typeof CloseStatus === "object");
assert(typeof CompleteWorkflowExecutionFailedCause === "object");
assert(typeof ContinueAsNewWorkflowExecutionFailedCause === "object");
assert(typeof DecisionTaskTimeoutType === "object");
assert(typeof DecisionType === "object");
assert(typeof EventType === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof FailWorkflowExecutionFailedCause === "object");
assert(typeof LambdaFunctionTimeoutType === "object");
assert(typeof RecordMarkerFailedCause === "object");
assert(typeof RegistrationStatus === "object");
assert(typeof RequestCancelActivityTaskFailedCause === "object");
assert(typeof RequestCancelExternalWorkflowExecutionFailedCause === "object");
assert(typeof ScheduleActivityTaskFailedCause === "object");
assert(typeof ScheduleLambdaFunctionFailedCause === "object");
assert(typeof SignalExternalWorkflowExecutionFailedCause === "object");
assert(typeof StartChildWorkflowExecutionFailedCause === "object");
assert(typeof StartLambdaFunctionFailedCause === "object");
assert(typeof StartTimerFailedCause === "object");
assert(typeof WorkflowExecutionCancelRequestedCause === "object");
assert(typeof WorkflowExecutionTerminatedCause === "object");
assert(typeof WorkflowExecutionTimeoutType === "object");
// errors
assert(SWFServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetWorkflowExecutionHistory === "function");
assert(typeof paginateListActivityTypes === "function");
assert(typeof paginateListClosedWorkflowExecutions === "function");
assert(typeof paginateListDomains === "function");
assert(typeof paginateListOpenWorkflowExecutions === "function");
assert(typeof paginateListWorkflowTypes === "function");
assert(typeof paginatePollForDecisionTask === "function");
console.log(`SWF index test passed.`);
