import {
  AcknowledgeJobCommand,
  AcknowledgeThirdPartyJobCommand,
  ActionCategory,
  ActionConfigurationPropertyType,
  ActionExecutionStatus,
  ActionOwner,
  ApprovalStatus,
  ArtifactLocationType,
  ArtifactStoreType,
  BlockerType,
  CodePipeline,
  CodePipelineClient,
  CodePipelineServiceException,
  ConditionExecutionStatus,
  ConditionType,
  CreateCustomActionTypeCommand,
  CreatePipelineCommand,
  DeleteCustomActionTypeCommand,
  DeletePipelineCommand,
  DeleteWebhookCommand,
  DeregisterWebhookWithThirdPartyCommand,
  DisableStageTransitionCommand,
  EnableStageTransitionCommand,
  EncryptionKeyType,
  EnvironmentVariableType,
  ExecutionMode,
  ExecutionType,
  ExecutorType,
  FailureType,
  GetActionTypeCommand,
  GetJobDetailsCommand,
  GetPipelineCommand,
  GetPipelineExecutionCommand,
  GetPipelineStateCommand,
  GetThirdPartyJobDetailsCommand,
  GitPullRequestEventType,
  JobStatus,
  ListActionExecutionsCommand,
  ListActionTypesCommand,
  ListDeployActionExecutionTargetsCommand,
  ListPipelineExecutionsCommand,
  ListPipelinesCommand,
  ListRuleExecutionsCommand,
  ListRuleTypesCommand,
  ListTagsForResourceCommand,
  ListWebhooksCommand,
  OverrideStageConditionCommand,
  PipelineExecutionStatus,
  PipelineTriggerProviderType,
  PipelineType,
  PollForJobsCommand,
  PollForThirdPartyJobsCommand,
  PutActionRevisionCommand,
  PutApprovalResultCommand,
  PutJobFailureResultCommand,
  PutJobSuccessResultCommand,
  PutThirdPartyJobFailureResultCommand,
  PutThirdPartyJobSuccessResultCommand,
  PutWebhookCommand,
  RegisterWebhookWithThirdPartyCommand,
  Result,
  RetryStageExecutionCommand,
  RetryTrigger,
  RollbackStageCommand,
  RuleCategory,
  RuleConfigurationPropertyType,
  RuleExecutionStatus,
  RuleOwner,
  SourceRevisionType,
  StageExecutionStatus,
  StageRetryMode,
  StageTransitionType,
  StartPipelineExecutionCommand,
  StartTimeRange,
  StopPipelineExecutionCommand,
  TagResourceCommand,
  TargetFilterName,
  TriggerType,
  UntagResourceCommand,
  UpdateActionTypeCommand,
  UpdatePipelineCommand,
  WebhookAuthenticationType,
  paginateListActionExecutions,
  paginateListActionTypes,
  paginateListDeployActionExecutionTargets,
  paginateListPipelineExecutions,
  paginateListPipelines,
  paginateListRuleExecutions,
  paginateListTagsForResource,
  paginateListWebhooks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CodePipelineClient === "function");
assert(typeof CodePipeline === "function");
// commands
assert(typeof AcknowledgeJobCommand === "function");
assert(typeof AcknowledgeThirdPartyJobCommand === "function");
assert(typeof CreateCustomActionTypeCommand === "function");
assert(typeof CreatePipelineCommand === "function");
assert(typeof DeleteCustomActionTypeCommand === "function");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeleteWebhookCommand === "function");
assert(typeof DeregisterWebhookWithThirdPartyCommand === "function");
assert(typeof DisableStageTransitionCommand === "function");
assert(typeof EnableStageTransitionCommand === "function");
assert(typeof GetActionTypeCommand === "function");
assert(typeof GetJobDetailsCommand === "function");
assert(typeof GetPipelineCommand === "function");
assert(typeof GetPipelineExecutionCommand === "function");
assert(typeof GetPipelineStateCommand === "function");
assert(typeof GetThirdPartyJobDetailsCommand === "function");
assert(typeof ListActionExecutionsCommand === "function");
assert(typeof ListActionTypesCommand === "function");
assert(typeof ListDeployActionExecutionTargetsCommand === "function");
assert(typeof ListPipelineExecutionsCommand === "function");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListRuleExecutionsCommand === "function");
assert(typeof ListRuleTypesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWebhooksCommand === "function");
assert(typeof OverrideStageConditionCommand === "function");
assert(typeof PollForJobsCommand === "function");
assert(typeof PollForThirdPartyJobsCommand === "function");
assert(typeof PutActionRevisionCommand === "function");
assert(typeof PutApprovalResultCommand === "function");
assert(typeof PutJobFailureResultCommand === "function");
assert(typeof PutJobSuccessResultCommand === "function");
assert(typeof PutThirdPartyJobFailureResultCommand === "function");
assert(typeof PutThirdPartyJobSuccessResultCommand === "function");
assert(typeof PutWebhookCommand === "function");
assert(typeof RegisterWebhookWithThirdPartyCommand === "function");
assert(typeof RetryStageExecutionCommand === "function");
assert(typeof RollbackStageCommand === "function");
assert(typeof StartPipelineExecutionCommand === "function");
assert(typeof StopPipelineExecutionCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateActionTypeCommand === "function");
assert(typeof UpdatePipelineCommand === "function");
// enums
assert(typeof ActionCategory === "object");
assert(typeof ActionConfigurationPropertyType === "object");
assert(typeof ActionExecutionStatus === "object");
assert(typeof ActionOwner === "object");
assert(typeof ApprovalStatus === "object");
assert(typeof ArtifactLocationType === "object");
assert(typeof ArtifactStoreType === "object");
assert(typeof BlockerType === "object");
assert(typeof ConditionExecutionStatus === "object");
assert(typeof ConditionType === "object");
assert(typeof EncryptionKeyType === "object");
assert(typeof EnvironmentVariableType === "object");
assert(typeof ExecutionMode === "object");
assert(typeof ExecutionType === "object");
assert(typeof ExecutorType === "object");
assert(typeof FailureType === "object");
assert(typeof GitPullRequestEventType === "object");
assert(typeof JobStatus === "object");
assert(typeof PipelineExecutionStatus === "object");
assert(typeof PipelineTriggerProviderType === "object");
assert(typeof PipelineType === "object");
assert(typeof Result === "object");
assert(typeof RetryTrigger === "object");
assert(typeof RuleCategory === "object");
assert(typeof RuleConfigurationPropertyType === "object");
assert(typeof RuleExecutionStatus === "object");
assert(typeof RuleOwner === "object");
assert(typeof SourceRevisionType === "object");
assert(typeof StageExecutionStatus === "object");
assert(typeof StageRetryMode === "object");
assert(typeof StageTransitionType === "object");
assert(typeof StartTimeRange === "object");
assert(typeof TargetFilterName === "object");
assert(typeof TriggerType === "object");
assert(typeof WebhookAuthenticationType === "object");
// errors
assert(CodePipelineServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListActionExecutions === "function");
assert(typeof paginateListActionTypes === "function");
assert(typeof paginateListDeployActionExecutionTargets === "function");
assert(typeof paginateListPipelineExecutions === "function");
assert(typeof paginateListPipelines === "function");
assert(typeof paginateListRuleExecutions === "function");
assert(typeof paginateListTagsForResource === "function");
assert(typeof paginateListWebhooks === "function");
console.log(`CodePipeline index test passed.`);
