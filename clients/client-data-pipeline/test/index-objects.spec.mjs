import {
  ActivatePipeline$,
  ActivatePipelineCommand,
  ActivatePipelineInput$,
  ActivatePipelineOutput$,
  AddTags$,
  AddTagsCommand,
  AddTagsInput$,
  AddTagsOutput$,
  CreatePipeline$,
  CreatePipelineCommand,
  CreatePipelineInput$,
  CreatePipelineOutput$,
  DataPipeline,
  DataPipelineClient,
  DataPipelineServiceException,
  DeactivatePipeline$,
  DeactivatePipelineCommand,
  DeactivatePipelineInput$,
  DeactivatePipelineOutput$,
  DeletePipeline$,
  DeletePipelineCommand,
  DeletePipelineInput$,
  DescribeObjects$,
  DescribeObjectsCommand,
  DescribeObjectsInput$,
  DescribeObjectsOutput$,
  DescribePipelines$,
  DescribePipelinesCommand,
  DescribePipelinesInput$,
  DescribePipelinesOutput$,
  EvaluateExpression$,
  EvaluateExpressionCommand,
  EvaluateExpressionInput$,
  EvaluateExpressionOutput$,
  Field$,
  GetPipelineDefinition$,
  GetPipelineDefinitionCommand,
  GetPipelineDefinitionInput$,
  GetPipelineDefinitionOutput$,
  InstanceIdentity$,
  InternalServiceError,
  InternalServiceError$,
  InvalidRequestException,
  InvalidRequestException$,
  ListPipelines$,
  ListPipelinesCommand,
  ListPipelinesInput$,
  ListPipelinesOutput$,
  Operator$,
  OperatorType,
  ParameterAttribute$,
  ParameterObject$,
  ParameterValue$,
  PipelineDeletedException,
  PipelineDeletedException$,
  PipelineDescription$,
  PipelineIdName$,
  PipelineNotFoundException,
  PipelineNotFoundException$,
  PipelineObject$,
  PollForTask$,
  PollForTaskCommand,
  PollForTaskInput$,
  PollForTaskOutput$,
  PutPipelineDefinition$,
  PutPipelineDefinitionCommand,
  PutPipelineDefinitionInput$,
  PutPipelineDefinitionOutput$,
  Query$,
  QueryObjects$,
  QueryObjectsCommand,
  QueryObjectsInput$,
  QueryObjectsOutput$,
  RemoveTags$,
  RemoveTagsCommand,
  RemoveTagsInput$,
  RemoveTagsOutput$,
  ReportTaskProgress$,
  ReportTaskProgressCommand,
  ReportTaskProgressInput$,
  ReportTaskProgressOutput$,
  ReportTaskRunnerHeartbeat$,
  ReportTaskRunnerHeartbeatCommand,
  ReportTaskRunnerHeartbeatInput$,
  ReportTaskRunnerHeartbeatOutput$,
  Selector$,
  SetStatus$,
  SetStatusCommand,
  SetStatusInput$,
  SetTaskStatus$,
  SetTaskStatusCommand,
  SetTaskStatusInput$,
  SetTaskStatusOutput$,
  Tag$,
  TaskNotFoundException,
  TaskNotFoundException$,
  TaskObject$,
  TaskStatus,
  ValidatePipelineDefinition$,
  ValidatePipelineDefinitionCommand,
  ValidatePipelineDefinitionInput$,
  ValidatePipelineDefinitionOutput$,
  ValidationError$,
  ValidationWarning$,
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
assert(typeof ActivatePipeline$ === "object");
assert(typeof AddTagsCommand === "function");
assert(typeof AddTags$ === "object");
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePipeline$ === "object");
assert(typeof DeactivatePipelineCommand === "function");
assert(typeof DeactivatePipeline$ === "object");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePipeline$ === "object");
assert(typeof DescribeObjectsCommand === "function");
assert(typeof DescribeObjects$ === "object");
assert(typeof DescribePipelinesCommand === "function");
assert(typeof DescribePipelines$ === "object");
assert(typeof EvaluateExpressionCommand === "function");
assert(typeof EvaluateExpression$ === "object");
assert(typeof GetPipelineDefinitionCommand === "function");
assert(typeof GetPipelineDefinition$ === "object");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListPipelines$ === "object");
assert(typeof PollForTaskCommand === "function");
assert(typeof PollForTask$ === "object");
assert(typeof PutPipelineDefinitionCommand === "function");
assert(typeof PutPipelineDefinition$ === "object");
assert(typeof QueryObjectsCommand === "function");
assert(typeof QueryObjects$ === "object");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RemoveTags$ === "object");
assert(typeof ReportTaskProgressCommand === "function");
assert(typeof ReportTaskProgress$ === "object");
assert(typeof ReportTaskRunnerHeartbeatCommand === "function");
assert(typeof ReportTaskRunnerHeartbeat$ === "object");
assert(typeof SetStatusCommand === "function");
assert(typeof SetStatus$ === "object");
assert(typeof SetTaskStatusCommand === "function");
assert(typeof SetTaskStatus$ === "object");
assert(typeof ValidatePipelineDefinitionCommand === "function");
assert(typeof ValidatePipelineDefinition$ === "object");
// structural schemas
assert(typeof ActivatePipelineInput$ === "object");
assert(typeof ActivatePipelineOutput$ === "object");
assert(typeof AddTagsInput$ === "object");
assert(typeof AddTagsOutput$ === "object");
assert(typeof CreatePipelineInput$ === "object");
assert(typeof CreatePipelineOutput$ === "object");
assert(typeof DeactivatePipelineInput$ === "object");
assert(typeof DeactivatePipelineOutput$ === "object");
assert(typeof DeletePipelineInput$ === "object");
assert(typeof DescribeObjectsInput$ === "object");
assert(typeof DescribeObjectsOutput$ === "object");
assert(typeof DescribePipelinesInput$ === "object");
assert(typeof DescribePipelinesOutput$ === "object");
assert(typeof EvaluateExpressionInput$ === "object");
assert(typeof EvaluateExpressionOutput$ === "object");
assert(typeof Field$ === "object");
assert(typeof GetPipelineDefinitionInput$ === "object");
assert(typeof GetPipelineDefinitionOutput$ === "object");
assert(typeof InstanceIdentity$ === "object");
assert(typeof ListPipelinesInput$ === "object");
assert(typeof ListPipelinesOutput$ === "object");
assert(typeof Operator$ === "object");
assert(typeof ParameterAttribute$ === "object");
assert(typeof ParameterObject$ === "object");
assert(typeof ParameterValue$ === "object");
assert(typeof PipelineDescription$ === "object");
assert(typeof PipelineIdName$ === "object");
assert(typeof PipelineObject$ === "object");
assert(typeof PollForTaskInput$ === "object");
assert(typeof PollForTaskOutput$ === "object");
assert(typeof PutPipelineDefinitionInput$ === "object");
assert(typeof PutPipelineDefinitionOutput$ === "object");
assert(typeof Query$ === "object");
assert(typeof QueryObjectsInput$ === "object");
assert(typeof QueryObjectsOutput$ === "object");
assert(typeof RemoveTagsInput$ === "object");
assert(typeof RemoveTagsOutput$ === "object");
assert(typeof ReportTaskProgressInput$ === "object");
assert(typeof ReportTaskProgressOutput$ === "object");
assert(typeof ReportTaskRunnerHeartbeatInput$ === "object");
assert(typeof ReportTaskRunnerHeartbeatOutput$ === "object");
assert(typeof Selector$ === "object");
assert(typeof SetStatusInput$ === "object");
assert(typeof SetTaskStatusInput$ === "object");
assert(typeof SetTaskStatusOutput$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TaskObject$ === "object");
assert(typeof ValidatePipelineDefinitionInput$ === "object");
assert(typeof ValidatePipelineDefinitionOutput$ === "object");
assert(typeof ValidationError$ === "object");
assert(typeof ValidationWarning$ === "object");
// enums
assert(typeof OperatorType === "object");
assert(typeof TaskStatus === "object");
// errors
assert(InternalServiceError.prototype instanceof DataPipelineServiceException);
assert(typeof InternalServiceError$ === "object");
assert(InvalidRequestException.prototype instanceof DataPipelineServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(PipelineDeletedException.prototype instanceof DataPipelineServiceException);
assert(typeof PipelineDeletedException$ === "object");
assert(PipelineNotFoundException.prototype instanceof DataPipelineServiceException);
assert(typeof PipelineNotFoundException$ === "object");
assert(TaskNotFoundException.prototype instanceof DataPipelineServiceException);
assert(typeof TaskNotFoundException$ === "object");
assert(DataPipelineServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeObjects === "function");
assert(typeof paginateListPipelines === "function");
assert(typeof paginateQueryObjects === "function");
console.log(`DataPipeline index test passed.`);
