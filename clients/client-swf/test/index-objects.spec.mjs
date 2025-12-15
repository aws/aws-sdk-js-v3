import {
  ActivityTask$,
  ActivityTaskCancelRequestedEventAttributes$,
  ActivityTaskCanceledEventAttributes$,
  ActivityTaskCompletedEventAttributes$,
  ActivityTaskFailedEventAttributes$,
  ActivityTaskScheduledEventAttributes$,
  ActivityTaskStartedEventAttributes$,
  ActivityTaskStatus$,
  ActivityTaskTimedOutEventAttributes$,
  ActivityTaskTimeoutType,
  ActivityType$,
  ActivityTypeConfiguration$,
  ActivityTypeDetail$,
  ActivityTypeInfo$,
  ActivityTypeInfos$,
  CancelTimerDecisionAttributes$,
  CancelTimerFailedCause,
  CancelTimerFailedEventAttributes$,
  CancelWorkflowExecutionDecisionAttributes$,
  CancelWorkflowExecutionFailedCause,
  CancelWorkflowExecutionFailedEventAttributes$,
  ChildPolicy,
  ChildWorkflowExecutionCanceledEventAttributes$,
  ChildWorkflowExecutionCompletedEventAttributes$,
  ChildWorkflowExecutionFailedEventAttributes$,
  ChildWorkflowExecutionStartedEventAttributes$,
  ChildWorkflowExecutionTerminatedEventAttributes$,
  ChildWorkflowExecutionTimedOutEventAttributes$,
  CloseStatus,
  CloseStatusFilter$,
  CompleteWorkflowExecutionDecisionAttributes$,
  CompleteWorkflowExecutionFailedCause,
  CompleteWorkflowExecutionFailedEventAttributes$,
  ContinueAsNewWorkflowExecutionDecisionAttributes$,
  ContinueAsNewWorkflowExecutionFailedCause,
  ContinueAsNewWorkflowExecutionFailedEventAttributes$,
  CountClosedWorkflowExecutions$,
  CountClosedWorkflowExecutionsCommand,
  CountClosedWorkflowExecutionsInput$,
  CountOpenWorkflowExecutions$,
  CountOpenWorkflowExecutionsCommand,
  CountOpenWorkflowExecutionsInput$,
  CountPendingActivityTasks$,
  CountPendingActivityTasksCommand,
  CountPendingActivityTasksInput$,
  CountPendingDecisionTasks$,
  CountPendingDecisionTasksCommand,
  CountPendingDecisionTasksInput$,
  Decision$,
  DecisionTask$,
  DecisionTaskCompletedEventAttributes$,
  DecisionTaskScheduledEventAttributes$,
  DecisionTaskStartedEventAttributes$,
  DecisionTaskTimedOutEventAttributes$,
  DecisionTaskTimeoutType,
  DecisionType,
  DefaultUndefinedFault,
  DefaultUndefinedFault$,
  DeleteActivityType$,
  DeleteActivityTypeCommand,
  DeleteActivityTypeInput$,
  DeleteWorkflowType$,
  DeleteWorkflowTypeCommand,
  DeleteWorkflowTypeInput$,
  DeprecateActivityType$,
  DeprecateActivityTypeCommand,
  DeprecateActivityTypeInput$,
  DeprecateDomain$,
  DeprecateDomainCommand,
  DeprecateDomainInput$,
  DeprecateWorkflowType$,
  DeprecateWorkflowTypeCommand,
  DeprecateWorkflowTypeInput$,
  DescribeActivityType$,
  DescribeActivityTypeCommand,
  DescribeActivityTypeInput$,
  DescribeDomain$,
  DescribeDomainCommand,
  DescribeDomainInput$,
  DescribeWorkflowExecution$,
  DescribeWorkflowExecutionCommand,
  DescribeWorkflowExecutionInput$,
  DescribeWorkflowType$,
  DescribeWorkflowTypeCommand,
  DescribeWorkflowTypeInput$,
  DomainAlreadyExistsFault,
  DomainAlreadyExistsFault$,
  DomainConfiguration$,
  DomainDeprecatedFault,
  DomainDeprecatedFault$,
  DomainDetail$,
  DomainInfo$,
  DomainInfos$,
  EventType,
  ExecutionStatus,
  ExecutionTimeFilter$,
  ExternalWorkflowExecutionCancelRequestedEventAttributes$,
  ExternalWorkflowExecutionSignaledEventAttributes$,
  FailWorkflowExecutionDecisionAttributes$,
  FailWorkflowExecutionFailedCause,
  FailWorkflowExecutionFailedEventAttributes$,
  GetWorkflowExecutionHistory$,
  GetWorkflowExecutionHistoryCommand,
  GetWorkflowExecutionHistoryInput$,
  History$,
  HistoryEvent$,
  LambdaFunctionCompletedEventAttributes$,
  LambdaFunctionFailedEventAttributes$,
  LambdaFunctionScheduledEventAttributes$,
  LambdaFunctionStartedEventAttributes$,
  LambdaFunctionTimedOutEventAttributes$,
  LambdaFunctionTimeoutType,
  LimitExceededFault,
  LimitExceededFault$,
  ListActivityTypes$,
  ListActivityTypesCommand,
  ListActivityTypesInput$,
  ListClosedWorkflowExecutions$,
  ListClosedWorkflowExecutionsCommand,
  ListClosedWorkflowExecutionsInput$,
  ListDomains$,
  ListDomainsCommand,
  ListDomainsInput$,
  ListOpenWorkflowExecutions$,
  ListOpenWorkflowExecutionsCommand,
  ListOpenWorkflowExecutionsInput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListWorkflowTypes$,
  ListWorkflowTypesCommand,
  ListWorkflowTypesInput$,
  MarkerRecordedEventAttributes$,
  OperationNotPermittedFault,
  OperationNotPermittedFault$,
  PendingTaskCount$,
  PollForActivityTask$,
  PollForActivityTaskCommand,
  PollForActivityTaskInput$,
  PollForDecisionTask$,
  PollForDecisionTaskCommand,
  PollForDecisionTaskInput$,
  RecordActivityTaskHeartbeat$,
  RecordActivityTaskHeartbeatCommand,
  RecordActivityTaskHeartbeatInput$,
  RecordMarkerDecisionAttributes$,
  RecordMarkerFailedCause,
  RecordMarkerFailedEventAttributes$,
  RegisterActivityType$,
  RegisterActivityTypeCommand,
  RegisterActivityTypeInput$,
  RegisterDomain$,
  RegisterDomainCommand,
  RegisterDomainInput$,
  RegisterWorkflowType$,
  RegisterWorkflowTypeCommand,
  RegisterWorkflowTypeInput$,
  RegistrationStatus,
  RequestCancelActivityTaskDecisionAttributes$,
  RequestCancelActivityTaskFailedCause,
  RequestCancelActivityTaskFailedEventAttributes$,
  RequestCancelExternalWorkflowExecutionDecisionAttributes$,
  RequestCancelExternalWorkflowExecutionFailedCause,
  RequestCancelExternalWorkflowExecutionFailedEventAttributes$,
  RequestCancelExternalWorkflowExecutionInitiatedEventAttributes$,
  RequestCancelWorkflowExecution$,
  RequestCancelWorkflowExecutionCommand,
  RequestCancelWorkflowExecutionInput$,
  ResourceTag$,
  RespondActivityTaskCanceled$,
  RespondActivityTaskCanceledCommand,
  RespondActivityTaskCanceledInput$,
  RespondActivityTaskCompleted$,
  RespondActivityTaskCompletedCommand,
  RespondActivityTaskCompletedInput$,
  RespondActivityTaskFailed$,
  RespondActivityTaskFailedCommand,
  RespondActivityTaskFailedInput$,
  RespondDecisionTaskCompleted$,
  RespondDecisionTaskCompletedCommand,
  RespondDecisionTaskCompletedInput$,
  Run$,
  SWF,
  SWFClient,
  SWFServiceException,
  ScheduleActivityTaskDecisionAttributes$,
  ScheduleActivityTaskFailedCause,
  ScheduleActivityTaskFailedEventAttributes$,
  ScheduleLambdaFunctionDecisionAttributes$,
  ScheduleLambdaFunctionFailedCause,
  ScheduleLambdaFunctionFailedEventAttributes$,
  SignalExternalWorkflowExecutionDecisionAttributes$,
  SignalExternalWorkflowExecutionFailedCause,
  SignalExternalWorkflowExecutionFailedEventAttributes$,
  SignalExternalWorkflowExecutionInitiatedEventAttributes$,
  SignalWorkflowExecution$,
  SignalWorkflowExecutionCommand,
  SignalWorkflowExecutionInput$,
  StartChildWorkflowExecutionDecisionAttributes$,
  StartChildWorkflowExecutionFailedCause,
  StartChildWorkflowExecutionFailedEventAttributes$,
  StartChildWorkflowExecutionInitiatedEventAttributes$,
  StartLambdaFunctionFailedCause,
  StartLambdaFunctionFailedEventAttributes$,
  StartTimerDecisionAttributes$,
  StartTimerFailedCause,
  StartTimerFailedEventAttributes$,
  StartWorkflowExecution$,
  StartWorkflowExecutionCommand,
  StartWorkflowExecutionInput$,
  TagFilter$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TaskList$,
  TerminateWorkflowExecution$,
  TerminateWorkflowExecutionCommand,
  TerminateWorkflowExecutionInput$,
  TimerCanceledEventAttributes$,
  TimerFiredEventAttributes$,
  TimerStartedEventAttributes$,
  TooManyTagsFault,
  TooManyTagsFault$,
  TypeAlreadyExistsFault,
  TypeAlreadyExistsFault$,
  TypeDeprecatedFault,
  TypeDeprecatedFault$,
  TypeNotDeprecatedFault,
  TypeNotDeprecatedFault$,
  UndeprecateActivityType$,
  UndeprecateActivityTypeCommand,
  UndeprecateActivityTypeInput$,
  UndeprecateDomain$,
  UndeprecateDomainCommand,
  UndeprecateDomainInput$,
  UndeprecateWorkflowType$,
  UndeprecateWorkflowTypeCommand,
  UndeprecateWorkflowTypeInput$,
  UnknownResourceFault,
  UnknownResourceFault$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  WorkflowExecution$,
  WorkflowExecutionAlreadyStartedFault,
  WorkflowExecutionAlreadyStartedFault$,
  WorkflowExecutionCancelRequestedCause,
  WorkflowExecutionCancelRequestedEventAttributes$,
  WorkflowExecutionCanceledEventAttributes$,
  WorkflowExecutionCompletedEventAttributes$,
  WorkflowExecutionConfiguration$,
  WorkflowExecutionContinuedAsNewEventAttributes$,
  WorkflowExecutionCount$,
  WorkflowExecutionDetail$,
  WorkflowExecutionFailedEventAttributes$,
  WorkflowExecutionFilter$,
  WorkflowExecutionInfo$,
  WorkflowExecutionInfos$,
  WorkflowExecutionOpenCounts$,
  WorkflowExecutionSignaledEventAttributes$,
  WorkflowExecutionStartedEventAttributes$,
  WorkflowExecutionTerminatedCause,
  WorkflowExecutionTerminatedEventAttributes$,
  WorkflowExecutionTimedOutEventAttributes$,
  WorkflowExecutionTimeoutType,
  WorkflowType$,
  WorkflowTypeConfiguration$,
  WorkflowTypeDetail$,
  WorkflowTypeFilter$,
  WorkflowTypeInfo$,
  WorkflowTypeInfos$,
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
assert(typeof CountClosedWorkflowExecutions$ === "object");
assert(typeof CountOpenWorkflowExecutionsCommand === "function");
assert(typeof CountOpenWorkflowExecutions$ === "object");
assert(typeof CountPendingActivityTasksCommand === "function");
assert(typeof CountPendingActivityTasks$ === "object");
assert(typeof CountPendingDecisionTasksCommand === "function");
assert(typeof CountPendingDecisionTasks$ === "object");
assert(typeof DeleteActivityTypeCommand === "function");
assert(typeof DeleteActivityType$ === "object");
assert(typeof DeleteWorkflowTypeCommand === "function");
assert(typeof DeleteWorkflowType$ === "object");
assert(typeof DeprecateActivityTypeCommand === "function");
assert(typeof DeprecateActivityType$ === "object");
assert(typeof DeprecateDomainCommand === "function");
assert(typeof DeprecateDomain$ === "object");
assert(typeof DeprecateWorkflowTypeCommand === "function");
assert(typeof DeprecateWorkflowType$ === "object");
assert(typeof DescribeActivityTypeCommand === "function");
assert(typeof DescribeActivityType$ === "object");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribeDomain$ === "object");
assert(typeof DescribeWorkflowExecutionCommand === "function");
assert(typeof DescribeWorkflowExecution$ === "object");
assert(typeof DescribeWorkflowTypeCommand === "function");
assert(typeof DescribeWorkflowType$ === "object");
assert(typeof GetWorkflowExecutionHistoryCommand === "function");
assert(typeof GetWorkflowExecutionHistory$ === "object");
assert(typeof ListActivityTypesCommand === "function");
assert(typeof ListActivityTypes$ === "object");
assert(typeof ListClosedWorkflowExecutionsCommand === "function");
assert(typeof ListClosedWorkflowExecutions$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListOpenWorkflowExecutionsCommand === "function");
assert(typeof ListOpenWorkflowExecutions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWorkflowTypesCommand === "function");
assert(typeof ListWorkflowTypes$ === "object");
assert(typeof PollForActivityTaskCommand === "function");
assert(typeof PollForActivityTask$ === "object");
assert(typeof PollForDecisionTaskCommand === "function");
assert(typeof PollForDecisionTask$ === "object");
assert(typeof RecordActivityTaskHeartbeatCommand === "function");
assert(typeof RecordActivityTaskHeartbeat$ === "object");
assert(typeof RegisterActivityTypeCommand === "function");
assert(typeof RegisterActivityType$ === "object");
assert(typeof RegisterDomainCommand === "function");
assert(typeof RegisterDomain$ === "object");
assert(typeof RegisterWorkflowTypeCommand === "function");
assert(typeof RegisterWorkflowType$ === "object");
assert(typeof RequestCancelWorkflowExecutionCommand === "function");
assert(typeof RequestCancelWorkflowExecution$ === "object");
assert(typeof RespondActivityTaskCanceledCommand === "function");
assert(typeof RespondActivityTaskCanceled$ === "object");
assert(typeof RespondActivityTaskCompletedCommand === "function");
assert(typeof RespondActivityTaskCompleted$ === "object");
assert(typeof RespondActivityTaskFailedCommand === "function");
assert(typeof RespondActivityTaskFailed$ === "object");
assert(typeof RespondDecisionTaskCompletedCommand === "function");
assert(typeof RespondDecisionTaskCompleted$ === "object");
assert(typeof SignalWorkflowExecutionCommand === "function");
assert(typeof SignalWorkflowExecution$ === "object");
assert(typeof StartWorkflowExecutionCommand === "function");
assert(typeof StartWorkflowExecution$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TerminateWorkflowExecutionCommand === "function");
assert(typeof TerminateWorkflowExecution$ === "object");
assert(typeof UndeprecateActivityTypeCommand === "function");
assert(typeof UndeprecateActivityType$ === "object");
assert(typeof UndeprecateDomainCommand === "function");
assert(typeof UndeprecateDomain$ === "object");
assert(typeof UndeprecateWorkflowTypeCommand === "function");
assert(typeof UndeprecateWorkflowType$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof ActivityTask$ === "object");
assert(typeof ActivityTaskCanceledEventAttributes$ === "object");
assert(typeof ActivityTaskCancelRequestedEventAttributes$ === "object");
assert(typeof ActivityTaskCompletedEventAttributes$ === "object");
assert(typeof ActivityTaskFailedEventAttributes$ === "object");
assert(typeof ActivityTaskScheduledEventAttributes$ === "object");
assert(typeof ActivityTaskStartedEventAttributes$ === "object");
assert(typeof ActivityTaskStatus$ === "object");
assert(typeof ActivityTaskTimedOutEventAttributes$ === "object");
assert(typeof ActivityType$ === "object");
assert(typeof ActivityTypeConfiguration$ === "object");
assert(typeof ActivityTypeDetail$ === "object");
assert(typeof ActivityTypeInfo$ === "object");
assert(typeof ActivityTypeInfos$ === "object");
assert(typeof CancelTimerDecisionAttributes$ === "object");
assert(typeof CancelTimerFailedEventAttributes$ === "object");
assert(typeof CancelWorkflowExecutionDecisionAttributes$ === "object");
assert(typeof CancelWorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof ChildWorkflowExecutionCanceledEventAttributes$ === "object");
assert(typeof ChildWorkflowExecutionCompletedEventAttributes$ === "object");
assert(typeof ChildWorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof ChildWorkflowExecutionStartedEventAttributes$ === "object");
assert(typeof ChildWorkflowExecutionTerminatedEventAttributes$ === "object");
assert(typeof ChildWorkflowExecutionTimedOutEventAttributes$ === "object");
assert(typeof CloseStatusFilter$ === "object");
assert(typeof CompleteWorkflowExecutionDecisionAttributes$ === "object");
assert(typeof CompleteWorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof ContinueAsNewWorkflowExecutionDecisionAttributes$ === "object");
assert(typeof ContinueAsNewWorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof CountClosedWorkflowExecutionsInput$ === "object");
assert(typeof CountOpenWorkflowExecutionsInput$ === "object");
assert(typeof CountPendingActivityTasksInput$ === "object");
assert(typeof CountPendingDecisionTasksInput$ === "object");
assert(typeof Decision$ === "object");
assert(typeof DecisionTask$ === "object");
assert(typeof DecisionTaskCompletedEventAttributes$ === "object");
assert(typeof DecisionTaskScheduledEventAttributes$ === "object");
assert(typeof DecisionTaskStartedEventAttributes$ === "object");
assert(typeof DecisionTaskTimedOutEventAttributes$ === "object");
assert(typeof DeleteActivityTypeInput$ === "object");
assert(typeof DeleteWorkflowTypeInput$ === "object");
assert(typeof DeprecateActivityTypeInput$ === "object");
assert(typeof DeprecateDomainInput$ === "object");
assert(typeof DeprecateWorkflowTypeInput$ === "object");
assert(typeof DescribeActivityTypeInput$ === "object");
assert(typeof DescribeDomainInput$ === "object");
assert(typeof DescribeWorkflowExecutionInput$ === "object");
assert(typeof DescribeWorkflowTypeInput$ === "object");
assert(typeof DomainConfiguration$ === "object");
assert(typeof DomainDetail$ === "object");
assert(typeof DomainInfo$ === "object");
assert(typeof DomainInfos$ === "object");
assert(typeof ExecutionTimeFilter$ === "object");
assert(typeof ExternalWorkflowExecutionCancelRequestedEventAttributes$ === "object");
assert(typeof ExternalWorkflowExecutionSignaledEventAttributes$ === "object");
assert(typeof FailWorkflowExecutionDecisionAttributes$ === "object");
assert(typeof FailWorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof GetWorkflowExecutionHistoryInput$ === "object");
assert(typeof History$ === "object");
assert(typeof HistoryEvent$ === "object");
assert(typeof LambdaFunctionCompletedEventAttributes$ === "object");
assert(typeof LambdaFunctionFailedEventAttributes$ === "object");
assert(typeof LambdaFunctionScheduledEventAttributes$ === "object");
assert(typeof LambdaFunctionStartedEventAttributes$ === "object");
assert(typeof LambdaFunctionTimedOutEventAttributes$ === "object");
assert(typeof ListActivityTypesInput$ === "object");
assert(typeof ListClosedWorkflowExecutionsInput$ === "object");
assert(typeof ListDomainsInput$ === "object");
assert(typeof ListOpenWorkflowExecutionsInput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListWorkflowTypesInput$ === "object");
assert(typeof MarkerRecordedEventAttributes$ === "object");
assert(typeof PendingTaskCount$ === "object");
assert(typeof PollForActivityTaskInput$ === "object");
assert(typeof PollForDecisionTaskInput$ === "object");
assert(typeof RecordActivityTaskHeartbeatInput$ === "object");
assert(typeof RecordMarkerDecisionAttributes$ === "object");
assert(typeof RecordMarkerFailedEventAttributes$ === "object");
assert(typeof RegisterActivityTypeInput$ === "object");
assert(typeof RegisterDomainInput$ === "object");
assert(typeof RegisterWorkflowTypeInput$ === "object");
assert(typeof RequestCancelActivityTaskDecisionAttributes$ === "object");
assert(typeof RequestCancelActivityTaskFailedEventAttributes$ === "object");
assert(typeof RequestCancelExternalWorkflowExecutionDecisionAttributes$ === "object");
assert(typeof RequestCancelExternalWorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof RequestCancelExternalWorkflowExecutionInitiatedEventAttributes$ === "object");
assert(typeof RequestCancelWorkflowExecutionInput$ === "object");
assert(typeof ResourceTag$ === "object");
assert(typeof RespondActivityTaskCanceledInput$ === "object");
assert(typeof RespondActivityTaskCompletedInput$ === "object");
assert(typeof RespondActivityTaskFailedInput$ === "object");
assert(typeof RespondDecisionTaskCompletedInput$ === "object");
assert(typeof Run$ === "object");
assert(typeof ScheduleActivityTaskDecisionAttributes$ === "object");
assert(typeof ScheduleActivityTaskFailedEventAttributes$ === "object");
assert(typeof ScheduleLambdaFunctionDecisionAttributes$ === "object");
assert(typeof ScheduleLambdaFunctionFailedEventAttributes$ === "object");
assert(typeof SignalExternalWorkflowExecutionDecisionAttributes$ === "object");
assert(typeof SignalExternalWorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof SignalExternalWorkflowExecutionInitiatedEventAttributes$ === "object");
assert(typeof SignalWorkflowExecutionInput$ === "object");
assert(typeof StartChildWorkflowExecutionDecisionAttributes$ === "object");
assert(typeof StartChildWorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof StartChildWorkflowExecutionInitiatedEventAttributes$ === "object");
assert(typeof StartLambdaFunctionFailedEventAttributes$ === "object");
assert(typeof StartTimerDecisionAttributes$ === "object");
assert(typeof StartTimerFailedEventAttributes$ === "object");
assert(typeof StartWorkflowExecutionInput$ === "object");
assert(typeof TagFilter$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TaskList$ === "object");
assert(typeof TerminateWorkflowExecutionInput$ === "object");
assert(typeof TimerCanceledEventAttributes$ === "object");
assert(typeof TimerFiredEventAttributes$ === "object");
assert(typeof TimerStartedEventAttributes$ === "object");
assert(typeof UndeprecateActivityTypeInput$ === "object");
assert(typeof UndeprecateDomainInput$ === "object");
assert(typeof UndeprecateWorkflowTypeInput$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof WorkflowExecution$ === "object");
assert(typeof WorkflowExecutionCanceledEventAttributes$ === "object");
assert(typeof WorkflowExecutionCancelRequestedEventAttributes$ === "object");
assert(typeof WorkflowExecutionCompletedEventAttributes$ === "object");
assert(typeof WorkflowExecutionConfiguration$ === "object");
assert(typeof WorkflowExecutionContinuedAsNewEventAttributes$ === "object");
assert(typeof WorkflowExecutionCount$ === "object");
assert(typeof WorkflowExecutionDetail$ === "object");
assert(typeof WorkflowExecutionFailedEventAttributes$ === "object");
assert(typeof WorkflowExecutionFilter$ === "object");
assert(typeof WorkflowExecutionInfo$ === "object");
assert(typeof WorkflowExecutionInfos$ === "object");
assert(typeof WorkflowExecutionOpenCounts$ === "object");
assert(typeof WorkflowExecutionSignaledEventAttributes$ === "object");
assert(typeof WorkflowExecutionStartedEventAttributes$ === "object");
assert(typeof WorkflowExecutionTerminatedEventAttributes$ === "object");
assert(typeof WorkflowExecutionTimedOutEventAttributes$ === "object");
assert(typeof WorkflowType$ === "object");
assert(typeof WorkflowTypeConfiguration$ === "object");
assert(typeof WorkflowTypeDetail$ === "object");
assert(typeof WorkflowTypeFilter$ === "object");
assert(typeof WorkflowTypeInfo$ === "object");
assert(typeof WorkflowTypeInfos$ === "object");
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
assert(DefaultUndefinedFault.prototype instanceof SWFServiceException);
assert(typeof DefaultUndefinedFault$ === "object");
assert(DomainAlreadyExistsFault.prototype instanceof SWFServiceException);
assert(typeof DomainAlreadyExistsFault$ === "object");
assert(DomainDeprecatedFault.prototype instanceof SWFServiceException);
assert(typeof DomainDeprecatedFault$ === "object");
assert(LimitExceededFault.prototype instanceof SWFServiceException);
assert(typeof LimitExceededFault$ === "object");
assert(OperationNotPermittedFault.prototype instanceof SWFServiceException);
assert(typeof OperationNotPermittedFault$ === "object");
assert(TooManyTagsFault.prototype instanceof SWFServiceException);
assert(typeof TooManyTagsFault$ === "object");
assert(TypeAlreadyExistsFault.prototype instanceof SWFServiceException);
assert(typeof TypeAlreadyExistsFault$ === "object");
assert(TypeDeprecatedFault.prototype instanceof SWFServiceException);
assert(typeof TypeDeprecatedFault$ === "object");
assert(TypeNotDeprecatedFault.prototype instanceof SWFServiceException);
assert(typeof TypeNotDeprecatedFault$ === "object");
assert(UnknownResourceFault.prototype instanceof SWFServiceException);
assert(typeof UnknownResourceFault$ === "object");
assert(WorkflowExecutionAlreadyStartedFault.prototype instanceof SWFServiceException);
assert(typeof WorkflowExecutionAlreadyStartedFault$ === "object");
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
