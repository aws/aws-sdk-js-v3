import {
  ActivityAlreadyExists,
  ActivityDoesNotExist,
  ActivityLimitExceeded,
  ActivityWorkerLimitExceeded,
  ConflictException,
  CreateActivityCommand,
  CreateStateMachineAliasCommand,
  CreateStateMachineCommand,
  DeleteActivityCommand,
  DeleteStateMachineAliasCommand,
  DeleteStateMachineCommand,
  DeleteStateMachineVersionCommand,
  DescribeActivityCommand,
  DescribeExecutionCommand,
  DescribeMapRunCommand,
  DescribeStateMachineAliasCommand,
  DescribeStateMachineCommand,
  DescribeStateMachineForExecutionCommand,
  EncryptionType,
  ExecutionAlreadyExists,
  ExecutionDoesNotExist,
  ExecutionLimitExceeded,
  ExecutionNotRedrivable,
  ExecutionRedriveFilter,
  ExecutionRedriveStatus,
  ExecutionStatus,
  GetActivityTaskCommand,
  GetExecutionHistoryCommand,
  HistoryEventType,
  IncludedData,
  InspectionLevel,
  InvalidArn,
  InvalidDefinition,
  InvalidEncryptionConfiguration,
  InvalidExecutionInput,
  InvalidLoggingConfiguration,
  InvalidName,
  InvalidOutput,
  InvalidToken,
  InvalidTracingConfiguration,
  KmsAccessDeniedException,
  KmsInvalidStateException,
  KmsKeyState,
  KmsThrottlingException,
  ListActivitiesCommand,
  ListExecutionsCommand,
  ListMapRunsCommand,
  ListStateMachineAliasesCommand,
  ListStateMachineVersionsCommand,
  ListStateMachinesCommand,
  ListTagsForResourceCommand,
  LogLevel,
  MapRunStatus,
  MissingRequiredParameter,
  MockResponseValidationMode,
  PublishStateMachineVersionCommand,
  RedriveExecutionCommand,
  ResourceNotFound,
  SFN,
  SFNClient,
  SFNServiceException,
  SendTaskFailureCommand,
  SendTaskHeartbeatCommand,
  SendTaskSuccessCommand,
  ServiceQuotaExceededException,
  StartExecutionCommand,
  StartSyncExecutionCommand,
  StateMachineAlreadyExists,
  StateMachineDeleting,
  StateMachineDoesNotExist,
  StateMachineLimitExceeded,
  StateMachineStatus,
  StateMachineType,
  StateMachineTypeNotSupported,
  StopExecutionCommand,
  SyncExecutionStatus,
  TagResourceCommand,
  TaskDoesNotExist,
  TaskTimedOut,
  TestExecutionStatus,
  TestStateCommand,
  TooManyTags,
  UntagResourceCommand,
  UpdateMapRunCommand,
  UpdateStateMachineAliasCommand,
  UpdateStateMachineCommand,
  ValidateStateMachineDefinitionCommand,
  ValidateStateMachineDefinitionResultCode,
  ValidateStateMachineDefinitionSeverity,
  ValidationException,
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
assert(typeof CreateStateMachineCommand === "function");
assert(typeof CreateStateMachineAliasCommand === "function");
assert(typeof DeleteActivityCommand === "function");
assert(typeof DeleteStateMachineCommand === "function");
assert(typeof DeleteStateMachineAliasCommand === "function");
assert(typeof DeleteStateMachineVersionCommand === "function");
assert(typeof DescribeActivityCommand === "function");
assert(typeof DescribeExecutionCommand === "function");
assert(typeof DescribeMapRunCommand === "function");
assert(typeof DescribeStateMachineCommand === "function");
assert(typeof DescribeStateMachineAliasCommand === "function");
assert(typeof DescribeStateMachineForExecutionCommand === "function");
assert(typeof GetActivityTaskCommand === "function");
assert(typeof GetExecutionHistoryCommand === "function");
assert(typeof ListActivitiesCommand === "function");
assert(typeof ListExecutionsCommand === "function");
assert(typeof ListMapRunsCommand === "function");
assert(typeof ListStateMachineAliasesCommand === "function");
assert(typeof ListStateMachinesCommand === "function");
assert(typeof ListStateMachineVersionsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PublishStateMachineVersionCommand === "function");
assert(typeof RedriveExecutionCommand === "function");
assert(typeof SendTaskFailureCommand === "function");
assert(typeof SendTaskHeartbeatCommand === "function");
assert(typeof SendTaskSuccessCommand === "function");
assert(typeof StartExecutionCommand === "function");
assert(typeof StartSyncExecutionCommand === "function");
assert(typeof StopExecutionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestStateCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateMapRunCommand === "function");
assert(typeof UpdateStateMachineCommand === "function");
assert(typeof UpdateStateMachineAliasCommand === "function");
assert(typeof ValidateStateMachineDefinitionCommand === "function");
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
assert(ActivityDoesNotExist.prototype instanceof SFNServiceException);
assert(ActivityLimitExceeded.prototype instanceof SFNServiceException);
assert(ActivityWorkerLimitExceeded.prototype instanceof SFNServiceException);
assert(ConflictException.prototype instanceof SFNServiceException);
assert(ExecutionAlreadyExists.prototype instanceof SFNServiceException);
assert(ExecutionDoesNotExist.prototype instanceof SFNServiceException);
assert(ExecutionLimitExceeded.prototype instanceof SFNServiceException);
assert(ExecutionNotRedrivable.prototype instanceof SFNServiceException);
assert(InvalidArn.prototype instanceof SFNServiceException);
assert(InvalidDefinition.prototype instanceof SFNServiceException);
assert(InvalidEncryptionConfiguration.prototype instanceof SFNServiceException);
assert(InvalidExecutionInput.prototype instanceof SFNServiceException);
assert(InvalidLoggingConfiguration.prototype instanceof SFNServiceException);
assert(InvalidName.prototype instanceof SFNServiceException);
assert(InvalidOutput.prototype instanceof SFNServiceException);
assert(InvalidToken.prototype instanceof SFNServiceException);
assert(InvalidTracingConfiguration.prototype instanceof SFNServiceException);
assert(KmsAccessDeniedException.prototype instanceof SFNServiceException);
assert(KmsInvalidStateException.prototype instanceof SFNServiceException);
assert(KmsThrottlingException.prototype instanceof SFNServiceException);
assert(MissingRequiredParameter.prototype instanceof SFNServiceException);
assert(ResourceNotFound.prototype instanceof SFNServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SFNServiceException);
assert(StateMachineAlreadyExists.prototype instanceof SFNServiceException);
assert(StateMachineDeleting.prototype instanceof SFNServiceException);
assert(StateMachineDoesNotExist.prototype instanceof SFNServiceException);
assert(StateMachineLimitExceeded.prototype instanceof SFNServiceException);
assert(StateMachineTypeNotSupported.prototype instanceof SFNServiceException);
assert(TaskDoesNotExist.prototype instanceof SFNServiceException);
assert(TaskTimedOut.prototype instanceof SFNServiceException);
assert(TooManyTags.prototype instanceof SFNServiceException);
assert(ValidationException.prototype instanceof SFNServiceException);
assert(SFNServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetExecutionHistory === "function");
assert(typeof paginateListActivities === "function");
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListMapRuns === "function");
assert(typeof paginateListStateMachines === "function");
console.log(`SFN index test passed.`);
