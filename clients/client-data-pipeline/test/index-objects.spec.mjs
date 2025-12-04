import {
  ActivatePipelineCommand,
  AddTagsCommand,
  CreatePipelineCommand,
  DataPipeline,
  DataPipelineClient,
  DataPipelineServiceException,
  DeactivatePipelineCommand,
  DeletePipelineCommand,
  DescribeObjectsCommand,
  DescribePipelinesCommand,
  EvaluateExpressionCommand,
  GetPipelineDefinitionCommand,
  ListPipelinesCommand,
  OperatorType,
  PollForTaskCommand,
  PutPipelineDefinitionCommand,
  QueryObjectsCommand,
  RemoveTagsCommand,
  ReportTaskProgressCommand,
  ReportTaskRunnerHeartbeatCommand,
  SetStatusCommand,
  SetTaskStatusCommand,
  TaskStatus,
  ValidatePipelineDefinitionCommand,
  paginateDescribeObjects,
  paginateListPipelines,
  paginateQueryObjects,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DataPipelineClient === "function");
assert(typeof DataPipeline === "function");
// commands
assert(typeof ActivatePipelineCommand === "function");
assert(typeof AddTagsCommand === "function");
assert(typeof CreatePipelineCommand === "function");
assert(typeof DeactivatePipelineCommand === "function");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DescribeObjectsCommand === "function");
assert(typeof DescribePipelinesCommand === "function");
assert(typeof EvaluateExpressionCommand === "function");
assert(typeof GetPipelineDefinitionCommand === "function");
assert(typeof ListPipelinesCommand === "function");
assert(typeof PollForTaskCommand === "function");
assert(typeof PutPipelineDefinitionCommand === "function");
assert(typeof QueryObjectsCommand === "function");
assert(typeof RemoveTagsCommand === "function");
assert(typeof ReportTaskProgressCommand === "function");
assert(typeof ReportTaskRunnerHeartbeatCommand === "function");
assert(typeof SetStatusCommand === "function");
assert(typeof SetTaskStatusCommand === "function");
assert(typeof ValidatePipelineDefinitionCommand === "function");
// enums
assert(typeof OperatorType === "object");
assert(typeof TaskStatus === "object");
// errors
assert(DataPipelineServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeObjects === "function");
assert(typeof paginateListPipelines === "function");
assert(typeof paginateQueryObjects === "function");
console.log(`DataPipeline index test passed.`);
