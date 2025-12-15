import {
  ActivityAlreadyExists,
  ActivityAlreadyExists$,
  ActivityDoesNotExist,
  ActivityDoesNotExist$,
  ActivityFailedEventDetails$,
  ActivityLimitExceeded,
  ActivityLimitExceeded$,
  ActivityListItem$,
  ActivityScheduleFailedEventDetails$,
  ActivityScheduledEventDetails$,
  ActivityStartedEventDetails$,
  ActivitySucceededEventDetails$,
  ActivityTimedOutEventDetails$,
  ActivityWorkerLimitExceeded,
  ActivityWorkerLimitExceeded$,
  AssignedVariablesDetails$,
  BillingDetails$,
  CloudWatchEventsExecutionDataDetails$,
  CloudWatchLogsLogGroup$,
  ConflictException,
  ConflictException$,
  CreateActivity$,
  CreateActivityCommand,
  CreateActivityInput$,
  CreateActivityOutput$,
  CreateStateMachine$,
  CreateStateMachineAlias$,
  CreateStateMachineAliasCommand,
  CreateStateMachineAliasInput$,
  CreateStateMachineAliasOutput$,
  CreateStateMachineCommand,
  CreateStateMachineInput$,
  CreateStateMachineOutput$,
  DeleteActivity$,
  DeleteActivityCommand,
  DeleteActivityInput$,
  DeleteActivityOutput$,
  DeleteStateMachine$,
  DeleteStateMachineAlias$,
  DeleteStateMachineAliasCommand,
  DeleteStateMachineAliasInput$,
  DeleteStateMachineAliasOutput$,
  DeleteStateMachineCommand,
  DeleteStateMachineInput$,
  DeleteStateMachineOutput$,
  DeleteStateMachineVersion$,
  DeleteStateMachineVersionCommand,
  DeleteStateMachineVersionInput$,
  DeleteStateMachineVersionOutput$,
  DescribeActivity$,
  DescribeActivityCommand,
  DescribeActivityInput$,
  DescribeActivityOutput$,
  DescribeExecution$,
  DescribeExecutionCommand,
  DescribeExecutionInput$,
  DescribeExecutionOutput$,
  DescribeMapRun$,
  DescribeMapRunCommand,
  DescribeMapRunInput$,
  DescribeMapRunOutput$,
  DescribeStateMachine$,
  DescribeStateMachineAlias$,
  DescribeStateMachineAliasCommand,
  DescribeStateMachineAliasInput$,
  DescribeStateMachineAliasOutput$,
  DescribeStateMachineCommand,
  DescribeStateMachineForExecution$,
  DescribeStateMachineForExecutionCommand,
  DescribeStateMachineForExecutionInput$,
  DescribeStateMachineForExecutionOutput$,
  DescribeStateMachineInput$,
  DescribeStateMachineOutput$,
  EncryptionConfiguration$,
  EncryptionType,
  EvaluationFailedEventDetails$,
  ExecutionAbortedEventDetails$,
  ExecutionAlreadyExists,
  ExecutionAlreadyExists$,
  ExecutionDoesNotExist,
  ExecutionDoesNotExist$,
  ExecutionFailedEventDetails$,
  ExecutionLimitExceeded,
  ExecutionLimitExceeded$,
  ExecutionListItem$,
  ExecutionNotRedrivable,
  ExecutionNotRedrivable$,
  ExecutionRedriveFilter,
  ExecutionRedriveStatus,
  ExecutionRedrivenEventDetails$,
  ExecutionStartedEventDetails$,
  ExecutionStatus,
  ExecutionSucceededEventDetails$,
  ExecutionTimedOutEventDetails$,
  GetActivityTask$,
  GetActivityTaskCommand,
  GetActivityTaskInput$,
  GetActivityTaskOutput$,
  GetExecutionHistory$,
  GetExecutionHistoryCommand,
  GetExecutionHistoryInput$,
  GetExecutionHistoryOutput$,
  HistoryEvent$,
  HistoryEventExecutionDataDetails$,
  HistoryEventType,
  IncludedData,
  InspectionData$,
  InspectionDataRequest$,
  InspectionDataResponse$,
  InspectionErrorDetails$,
  InspectionLevel,
  InvalidArn,
  InvalidArn$,
  InvalidDefinition,
  InvalidDefinition$,
  InvalidEncryptionConfiguration,
  InvalidEncryptionConfiguration$,
  InvalidExecutionInput,
  InvalidExecutionInput$,
  InvalidLoggingConfiguration,
  InvalidLoggingConfiguration$,
  InvalidName,
  InvalidName$,
  InvalidOutput,
  InvalidOutput$,
  InvalidToken,
  InvalidToken$,
  InvalidTracingConfiguration,
  InvalidTracingConfiguration$,
  KmsAccessDeniedException,
  KmsAccessDeniedException$,
  KmsInvalidStateException,
  KmsInvalidStateException$,
  KmsKeyState,
  KmsThrottlingException,
  KmsThrottlingException$,
  LambdaFunctionFailedEventDetails$,
  LambdaFunctionScheduleFailedEventDetails$,
  LambdaFunctionScheduledEventDetails$,
  LambdaFunctionStartFailedEventDetails$,
  LambdaFunctionSucceededEventDetails$,
  LambdaFunctionTimedOutEventDetails$,
  ListActivities$,
  ListActivitiesCommand,
  ListActivitiesInput$,
  ListActivitiesOutput$,
  ListExecutions$,
  ListExecutionsCommand,
  ListExecutionsInput$,
  ListExecutionsOutput$,
  ListMapRuns$,
  ListMapRunsCommand,
  ListMapRunsInput$,
  ListMapRunsOutput$,
  ListStateMachineAliases$,
  ListStateMachineAliasesCommand,
  ListStateMachineAliasesInput$,
  ListStateMachineAliasesOutput$,
  ListStateMachineVersions$,
  ListStateMachineVersionsCommand,
  ListStateMachineVersionsInput$,
  ListStateMachineVersionsOutput$,
  ListStateMachines$,
  ListStateMachinesCommand,
  ListStateMachinesInput$,
  ListStateMachinesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  LogDestination$,
  LogLevel,
  LoggingConfiguration$,
  MapIterationEventDetails$,
  MapRunExecutionCounts$,
  MapRunFailedEventDetails$,
  MapRunItemCounts$,
  MapRunListItem$,
  MapRunRedrivenEventDetails$,
  MapRunStartedEventDetails$,
  MapRunStatus,
  MapStateStartedEventDetails$,
  MissingRequiredParameter,
  MissingRequiredParameter$,
  MockErrorOutput$,
  MockInput$,
  MockResponseValidationMode,
  PublishStateMachineVersion$,
  PublishStateMachineVersionCommand,
  PublishStateMachineVersionInput$,
  PublishStateMachineVersionOutput$,
  RedriveExecution$,
  RedriveExecutionCommand,
  RedriveExecutionInput$,
  RedriveExecutionOutput$,
  ResourceNotFound,
  ResourceNotFound$,
  RoutingConfigurationListItem$,
  SFN,
  SFNClient,
  SFNServiceException,
  SendTaskFailure$,
  SendTaskFailureCommand,
  SendTaskFailureInput$,
  SendTaskFailureOutput$,
  SendTaskHeartbeat$,
  SendTaskHeartbeatCommand,
  SendTaskHeartbeatInput$,
  SendTaskHeartbeatOutput$,
  SendTaskSuccess$,
  SendTaskSuccessCommand,
  SendTaskSuccessInput$,
  SendTaskSuccessOutput$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  StartExecution$,
  StartExecutionCommand,
  StartExecutionInput$,
  StartExecutionOutput$,
  StartSyncExecution$,
  StartSyncExecutionCommand,
  StartSyncExecutionInput$,
  StartSyncExecutionOutput$,
  StateEnteredEventDetails$,
  StateExitedEventDetails$,
  StateMachineAliasListItem$,
  StateMachineAlreadyExists,
  StateMachineAlreadyExists$,
  StateMachineDeleting,
  StateMachineDeleting$,
  StateMachineDoesNotExist,
  StateMachineDoesNotExist$,
  StateMachineLimitExceeded,
  StateMachineLimitExceeded$,
  StateMachineListItem$,
  StateMachineStatus,
  StateMachineType,
  StateMachineTypeNotSupported,
  StateMachineTypeNotSupported$,
  StateMachineVersionListItem$,
  StopExecution$,
  StopExecutionCommand,
  StopExecutionInput$,
  StopExecutionOutput$,
  SyncExecutionStatus,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TaskCredentials$,
  TaskDoesNotExist,
  TaskDoesNotExist$,
  TaskFailedEventDetails$,
  TaskScheduledEventDetails$,
  TaskStartFailedEventDetails$,
  TaskStartedEventDetails$,
  TaskSubmitFailedEventDetails$,
  TaskSubmittedEventDetails$,
  TaskSucceededEventDetails$,
  TaskTimedOut,
  TaskTimedOut$,
  TaskTimedOutEventDetails$,
  TestExecutionStatus,
  TestState$,
  TestStateCommand,
  TestStateConfiguration$,
  TestStateInput$,
  TestStateOutput$,
  TooManyTags,
  TooManyTags$,
  TracingConfiguration$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateMapRun$,
  UpdateMapRunCommand,
  UpdateMapRunInput$,
  UpdateMapRunOutput$,
  UpdateStateMachine$,
  UpdateStateMachineAlias$,
  UpdateStateMachineAliasCommand,
  UpdateStateMachineAliasInput$,
  UpdateStateMachineAliasOutput$,
  UpdateStateMachineCommand,
  UpdateStateMachineInput$,
  UpdateStateMachineOutput$,
  ValidateStateMachineDefinition$,
  ValidateStateMachineDefinitionCommand,
  ValidateStateMachineDefinitionDiagnostic$,
  ValidateStateMachineDefinitionInput$,
  ValidateStateMachineDefinitionOutput$,
  ValidateStateMachineDefinitionResultCode,
  ValidateStateMachineDefinitionSeverity,
  ValidationException,
  ValidationException$,
  ValidationExceptionReason,
  paginateGetExecutionHistory,
  paginateListActivities,
  paginateListExecutions,
  paginateListMapRuns,
  paginateListStateMachines,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SFNClient === "function");
assert(typeof SFN === "function");
// commands
assert(typeof CreateActivityCommand === "function");
assert(typeof CreateActivity$ === "object");
assert(typeof CreateStateMachineCommand === "function");
assert(typeof CreateStateMachine$ === "object");
assert(typeof CreateStateMachineAliasCommand === "function");
assert(typeof CreateStateMachineAlias$ === "object");
assert(typeof DeleteActivityCommand === "function");
assert(typeof DeleteActivity$ === "object");
assert(typeof DeleteStateMachineCommand === "function");
assert(typeof DeleteStateMachine$ === "object");
assert(typeof DeleteStateMachineAliasCommand === "function");
assert(typeof DeleteStateMachineAlias$ === "object");
assert(typeof DeleteStateMachineVersionCommand === "function");
assert(typeof DeleteStateMachineVersion$ === "object");
assert(typeof DescribeActivityCommand === "function");
assert(typeof DescribeActivity$ === "object");
assert(typeof DescribeExecutionCommand === "function");
assert(typeof DescribeExecution$ === "object");
assert(typeof DescribeMapRunCommand === "function");
assert(typeof DescribeMapRun$ === "object");
assert(typeof DescribeStateMachineCommand === "function");
assert(typeof DescribeStateMachine$ === "object");
assert(typeof DescribeStateMachineAliasCommand === "function");
assert(typeof DescribeStateMachineAlias$ === "object");
assert(typeof DescribeStateMachineForExecutionCommand === "function");
assert(typeof DescribeStateMachineForExecution$ === "object");
assert(typeof GetActivityTaskCommand === "function");
assert(typeof GetActivityTask$ === "object");
assert(typeof GetExecutionHistoryCommand === "function");
assert(typeof GetExecutionHistory$ === "object");
assert(typeof ListActivitiesCommand === "function");
assert(typeof ListActivities$ === "object");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListExecutions$ === "object");
assert(typeof ListMapRunsCommand === "function");
assert(typeof ListMapRuns$ === "object");
assert(typeof ListStateMachineAliasesCommand === "function");
assert(typeof ListStateMachineAliases$ === "object");
assert(typeof ListStateMachinesCommand === "function");
assert(typeof ListStateMachines$ === "object");
assert(typeof ListStateMachineVersionsCommand === "function");
assert(typeof ListStateMachineVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PublishStateMachineVersionCommand === "function");
assert(typeof PublishStateMachineVersion$ === "object");
assert(typeof RedriveExecutionCommand === "function");
assert(typeof RedriveExecution$ === "object");
assert(typeof SendTaskFailureCommand === "function");
assert(typeof SendTaskFailure$ === "object");
assert(typeof SendTaskHeartbeatCommand === "function");
assert(typeof SendTaskHeartbeat$ === "object");
assert(typeof SendTaskSuccessCommand === "function");
assert(typeof SendTaskSuccess$ === "object");
assert(typeof StartExecutionCommand === "function");
assert(typeof StartExecution$ === "object");
assert(typeof StartSyncExecutionCommand === "function");
assert(typeof StartSyncExecution$ === "object");
assert(typeof StopExecutionCommand === "function");
assert(typeof StopExecution$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestStateCommand === "function");
assert(typeof TestState$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateMapRunCommand === "function");
assert(typeof UpdateMapRun$ === "object");
assert(typeof UpdateStateMachineCommand === "function");
assert(typeof UpdateStateMachine$ === "object");
assert(typeof UpdateStateMachineAliasCommand === "function");
assert(typeof UpdateStateMachineAlias$ === "object");
assert(typeof ValidateStateMachineDefinitionCommand === "function");
assert(typeof ValidateStateMachineDefinition$ === "object");
// structural schemas
assert(typeof ActivityFailedEventDetails$ === "object");
assert(typeof ActivityListItem$ === "object");
assert(typeof ActivityScheduledEventDetails$ === "object");
assert(typeof ActivityScheduleFailedEventDetails$ === "object");
assert(typeof ActivityStartedEventDetails$ === "object");
assert(typeof ActivitySucceededEventDetails$ === "object");
assert(typeof ActivityTimedOutEventDetails$ === "object");
assert(typeof AssignedVariablesDetails$ === "object");
assert(typeof BillingDetails$ === "object");
assert(typeof CloudWatchEventsExecutionDataDetails$ === "object");
assert(typeof CloudWatchLogsLogGroup$ === "object");
assert(typeof CreateActivityInput$ === "object");
assert(typeof CreateActivityOutput$ === "object");
assert(typeof CreateStateMachineAliasInput$ === "object");
assert(typeof CreateStateMachineAliasOutput$ === "object");
assert(typeof CreateStateMachineInput$ === "object");
assert(typeof CreateStateMachineOutput$ === "object");
assert(typeof DeleteActivityInput$ === "object");
assert(typeof DeleteActivityOutput$ === "object");
assert(typeof DeleteStateMachineAliasInput$ === "object");
assert(typeof DeleteStateMachineAliasOutput$ === "object");
assert(typeof DeleteStateMachineInput$ === "object");
assert(typeof DeleteStateMachineOutput$ === "object");
assert(typeof DeleteStateMachineVersionInput$ === "object");
assert(typeof DeleteStateMachineVersionOutput$ === "object");
assert(typeof DescribeActivityInput$ === "object");
assert(typeof DescribeActivityOutput$ === "object");
assert(typeof DescribeExecutionInput$ === "object");
assert(typeof DescribeExecutionOutput$ === "object");
assert(typeof DescribeMapRunInput$ === "object");
assert(typeof DescribeMapRunOutput$ === "object");
assert(typeof DescribeStateMachineAliasInput$ === "object");
assert(typeof DescribeStateMachineAliasOutput$ === "object");
assert(typeof DescribeStateMachineForExecutionInput$ === "object");
assert(typeof DescribeStateMachineForExecutionOutput$ === "object");
assert(typeof DescribeStateMachineInput$ === "object");
assert(typeof DescribeStateMachineOutput$ === "object");
assert(typeof EncryptionConfiguration$ === "object");
assert(typeof EvaluationFailedEventDetails$ === "object");
assert(typeof ExecutionAbortedEventDetails$ === "object");
assert(typeof ExecutionFailedEventDetails$ === "object");
assert(typeof ExecutionListItem$ === "object");
assert(typeof ExecutionRedrivenEventDetails$ === "object");
assert(typeof ExecutionStartedEventDetails$ === "object");
assert(typeof ExecutionSucceededEventDetails$ === "object");
assert(typeof ExecutionTimedOutEventDetails$ === "object");
assert(typeof GetActivityTaskInput$ === "object");
assert(typeof GetActivityTaskOutput$ === "object");
assert(typeof GetExecutionHistoryInput$ === "object");
assert(typeof GetExecutionHistoryOutput$ === "object");
assert(typeof HistoryEvent$ === "object");
assert(typeof HistoryEventExecutionDataDetails$ === "object");
assert(typeof InspectionData$ === "object");
assert(typeof InspectionDataRequest$ === "object");
assert(typeof InspectionDataResponse$ === "object");
assert(typeof InspectionErrorDetails$ === "object");
assert(typeof LambdaFunctionFailedEventDetails$ === "object");
assert(typeof LambdaFunctionScheduledEventDetails$ === "object");
assert(typeof LambdaFunctionScheduleFailedEventDetails$ === "object");
assert(typeof LambdaFunctionStartFailedEventDetails$ === "object");
assert(typeof LambdaFunctionSucceededEventDetails$ === "object");
assert(typeof LambdaFunctionTimedOutEventDetails$ === "object");
assert(typeof ListActivitiesInput$ === "object");
assert(typeof ListActivitiesOutput$ === "object");
assert(typeof ListExecutionsInput$ === "object");
assert(typeof ListExecutionsOutput$ === "object");
assert(typeof ListMapRunsInput$ === "object");
assert(typeof ListMapRunsOutput$ === "object");
assert(typeof ListStateMachineAliasesInput$ === "object");
assert(typeof ListStateMachineAliasesOutput$ === "object");
assert(typeof ListStateMachinesInput$ === "object");
assert(typeof ListStateMachinesOutput$ === "object");
assert(typeof ListStateMachineVersionsInput$ === "object");
assert(typeof ListStateMachineVersionsOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof LogDestination$ === "object");
assert(typeof LoggingConfiguration$ === "object");
assert(typeof MapIterationEventDetails$ === "object");
assert(typeof MapRunExecutionCounts$ === "object");
assert(typeof MapRunFailedEventDetails$ === "object");
assert(typeof MapRunItemCounts$ === "object");
assert(typeof MapRunListItem$ === "object");
assert(typeof MapRunRedrivenEventDetails$ === "object");
assert(typeof MapRunStartedEventDetails$ === "object");
assert(typeof MapStateStartedEventDetails$ === "object");
assert(typeof MockErrorOutput$ === "object");
assert(typeof MockInput$ === "object");
assert(typeof PublishStateMachineVersionInput$ === "object");
assert(typeof PublishStateMachineVersionOutput$ === "object");
assert(typeof RedriveExecutionInput$ === "object");
assert(typeof RedriveExecutionOutput$ === "object");
assert(typeof RoutingConfigurationListItem$ === "object");
assert(typeof SendTaskFailureInput$ === "object");
assert(typeof SendTaskFailureOutput$ === "object");
assert(typeof SendTaskHeartbeatInput$ === "object");
assert(typeof SendTaskHeartbeatOutput$ === "object");
assert(typeof SendTaskSuccessInput$ === "object");
assert(typeof SendTaskSuccessOutput$ === "object");
assert(typeof StartExecutionInput$ === "object");
assert(typeof StartExecutionOutput$ === "object");
assert(typeof StartSyncExecutionInput$ === "object");
assert(typeof StartSyncExecutionOutput$ === "object");
assert(typeof StateEnteredEventDetails$ === "object");
assert(typeof StateExitedEventDetails$ === "object");
assert(typeof StateMachineAliasListItem$ === "object");
assert(typeof StateMachineListItem$ === "object");
assert(typeof StateMachineVersionListItem$ === "object");
assert(typeof StopExecutionInput$ === "object");
assert(typeof StopExecutionOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TaskCredentials$ === "object");
assert(typeof TaskFailedEventDetails$ === "object");
assert(typeof TaskScheduledEventDetails$ === "object");
assert(typeof TaskStartedEventDetails$ === "object");
assert(typeof TaskStartFailedEventDetails$ === "object");
assert(typeof TaskSubmitFailedEventDetails$ === "object");
assert(typeof TaskSubmittedEventDetails$ === "object");
assert(typeof TaskSucceededEventDetails$ === "object");
assert(typeof TaskTimedOutEventDetails$ === "object");
assert(typeof TestStateConfiguration$ === "object");
assert(typeof TestStateInput$ === "object");
assert(typeof TestStateOutput$ === "object");
assert(typeof TracingConfiguration$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateMapRunInput$ === "object");
assert(typeof UpdateMapRunOutput$ === "object");
assert(typeof UpdateStateMachineAliasInput$ === "object");
assert(typeof UpdateStateMachineAliasOutput$ === "object");
assert(typeof UpdateStateMachineInput$ === "object");
assert(typeof UpdateStateMachineOutput$ === "object");
assert(typeof ValidateStateMachineDefinitionDiagnostic$ === "object");
assert(typeof ValidateStateMachineDefinitionInput$ === "object");
assert(typeof ValidateStateMachineDefinitionOutput$ === "object");
// enums
assert(typeof EncryptionType === "object");
assert(typeof ExecutionRedriveFilter === "object");
assert(typeof ExecutionRedriveStatus === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof HistoryEventType === "object");
assert(typeof IncludedData === "object");
assert(typeof InspectionLevel === "object");
assert(typeof KmsKeyState === "object");
assert(typeof LogLevel === "object");
assert(typeof MapRunStatus === "object");
assert(typeof MockResponseValidationMode === "object");
assert(typeof StateMachineStatus === "object");
assert(typeof StateMachineType === "object");
assert(typeof SyncExecutionStatus === "object");
assert(typeof TestExecutionStatus === "object");
assert(typeof ValidateStateMachineDefinitionResultCode === "object");
assert(typeof ValidateStateMachineDefinitionSeverity === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(ActivityAlreadyExists.prototype instanceof SFNServiceException);
assert(typeof ActivityAlreadyExists$ === "object");
assert(ActivityDoesNotExist.prototype instanceof SFNServiceException);
assert(typeof ActivityDoesNotExist$ === "object");
assert(ActivityLimitExceeded.prototype instanceof SFNServiceException);
assert(typeof ActivityLimitExceeded$ === "object");
assert(ActivityWorkerLimitExceeded.prototype instanceof SFNServiceException);
assert(typeof ActivityWorkerLimitExceeded$ === "object");
assert(ConflictException.prototype instanceof SFNServiceException);
assert(typeof ConflictException$ === "object");
assert(ExecutionAlreadyExists.prototype instanceof SFNServiceException);
assert(typeof ExecutionAlreadyExists$ === "object");
assert(ExecutionDoesNotExist.prototype instanceof SFNServiceException);
assert(typeof ExecutionDoesNotExist$ === "object");
assert(ExecutionLimitExceeded.prototype instanceof SFNServiceException);
assert(typeof ExecutionLimitExceeded$ === "object");
assert(ExecutionNotRedrivable.prototype instanceof SFNServiceException);
assert(typeof ExecutionNotRedrivable$ === "object");
assert(InvalidArn.prototype instanceof SFNServiceException);
assert(typeof InvalidArn$ === "object");
assert(InvalidDefinition.prototype instanceof SFNServiceException);
assert(typeof InvalidDefinition$ === "object");
assert(InvalidEncryptionConfiguration.prototype instanceof SFNServiceException);
assert(typeof InvalidEncryptionConfiguration$ === "object");
assert(InvalidExecutionInput.prototype instanceof SFNServiceException);
assert(typeof InvalidExecutionInput$ === "object");
assert(InvalidLoggingConfiguration.prototype instanceof SFNServiceException);
assert(typeof InvalidLoggingConfiguration$ === "object");
assert(InvalidName.prototype instanceof SFNServiceException);
assert(typeof InvalidName$ === "object");
assert(InvalidOutput.prototype instanceof SFNServiceException);
assert(typeof InvalidOutput$ === "object");
assert(InvalidToken.prototype instanceof SFNServiceException);
assert(typeof InvalidToken$ === "object");
assert(InvalidTracingConfiguration.prototype instanceof SFNServiceException);
assert(typeof InvalidTracingConfiguration$ === "object");
assert(KmsAccessDeniedException.prototype instanceof SFNServiceException);
assert(typeof KmsAccessDeniedException$ === "object");
assert(KmsInvalidStateException.prototype instanceof SFNServiceException);
assert(typeof KmsInvalidStateException$ === "object");
assert(KmsThrottlingException.prototype instanceof SFNServiceException);
assert(typeof KmsThrottlingException$ === "object");
assert(MissingRequiredParameter.prototype instanceof SFNServiceException);
assert(typeof MissingRequiredParameter$ === "object");
assert(ResourceNotFound.prototype instanceof SFNServiceException);
assert(typeof ResourceNotFound$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SFNServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(StateMachineAlreadyExists.prototype instanceof SFNServiceException);
assert(typeof StateMachineAlreadyExists$ === "object");
assert(StateMachineDeleting.prototype instanceof SFNServiceException);
assert(typeof StateMachineDeleting$ === "object");
assert(StateMachineDoesNotExist.prototype instanceof SFNServiceException);
assert(typeof StateMachineDoesNotExist$ === "object");
assert(StateMachineLimitExceeded.prototype instanceof SFNServiceException);
assert(typeof StateMachineLimitExceeded$ === "object");
assert(StateMachineTypeNotSupported.prototype instanceof SFNServiceException);
assert(typeof StateMachineTypeNotSupported$ === "object");
assert(TaskDoesNotExist.prototype instanceof SFNServiceException);
assert(typeof TaskDoesNotExist$ === "object");
assert(TaskTimedOut.prototype instanceof SFNServiceException);
assert(typeof TaskTimedOut$ === "object");
assert(TooManyTags.prototype instanceof SFNServiceException);
assert(typeof TooManyTags$ === "object");
assert(ValidationException.prototype instanceof SFNServiceException);
assert(typeof ValidationException$ === "object");
assert(SFNServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetExecutionHistory === "function");
assert(typeof paginateListActivities === "function");
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListMapRuns === "function");
assert(typeof paginateListStateMachines === "function");
console.log(`SFN index test passed.`);
