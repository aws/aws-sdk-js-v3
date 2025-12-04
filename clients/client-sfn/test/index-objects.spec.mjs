import {
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
  ExecutionRedriveFilter,
  ExecutionRedriveStatus,
  ExecutionStatus,
  GetActivityTaskCommand,
  GetExecutionHistoryCommand,
  HistoryEventType,
  IncludedData,
  InspectionLevel,
  ListActivitiesCommand,
  ListExecutionsCommand,
  ListMapRunsCommand,
  ListStateMachineAliasesCommand,
  ListStateMachineVersionsCommand,
  ListStateMachinesCommand,
  ListTagsForResourceCommand,
  LogLevel,
  MapRunStatus,
  MockResponseValidationMode,
  PublishStateMachineVersionCommand,
  RedriveExecutionCommand,
  SFN,
  SFNClient,
  SFNServiceException,
  SendTaskFailureCommand,
  SendTaskHeartbeatCommand,
  SendTaskSuccessCommand,
  StartExecutionCommand,
  StartSyncExecutionCommand,
  StateMachineStatus,
  StateMachineType,
  StopExecutionCommand,
  SyncExecutionStatus,
  TagResourceCommand,
  TestExecutionStatus,
  TestStateCommand,
  UntagResourceCommand,
  UpdateMapRunCommand,
  UpdateStateMachineAliasCommand,
  UpdateStateMachineCommand,
  ValidateStateMachineDefinitionCommand,
  ValidateStateMachineDefinitionResultCode,
  ValidateStateMachineDefinitionSeverity,
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
assert(typeof LogLevel === "object");
assert(typeof MapRunStatus === "object");
assert(typeof MockResponseValidationMode === "object");
assert(typeof StateMachineStatus === "object");
assert(typeof StateMachineType === "object");
assert(typeof SyncExecutionStatus === "object");
assert(typeof TestExecutionStatus === "object");
assert(typeof ValidateStateMachineDefinitionResultCode === "object");
assert(typeof ValidateStateMachineDefinitionSeverity === "object");
// errors
assert(SFNServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetExecutionHistory === "function");
assert(typeof paginateListActivities === "function");
assert(typeof paginateListExecutions === "function");
assert(typeof paginateListMapRuns === "function");
assert(typeof paginateListStateMachines === "function");
console.log(`SFN index test passed.`);
