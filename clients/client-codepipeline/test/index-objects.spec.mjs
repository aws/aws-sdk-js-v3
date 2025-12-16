import {
  AWSSessionCredentials$,
  AcknowledgeJob$,
  AcknowledgeJobCommand,
  AcknowledgeJobInput$,
  AcknowledgeJobOutput$,
  AcknowledgeThirdPartyJob$,
  AcknowledgeThirdPartyJobCommand,
  AcknowledgeThirdPartyJobInput$,
  AcknowledgeThirdPartyJobOutput$,
  ActionCategory,
  ActionConfiguration$,
  ActionConfigurationProperty$,
  ActionConfigurationPropertyType,
  ActionContext$,
  ActionDeclaration$,
  ActionExecution$,
  ActionExecutionDetail$,
  ActionExecutionFilter$,
  ActionExecutionInput$,
  ActionExecutionNotFoundException,
  ActionExecutionNotFoundException$,
  ActionExecutionOutput$,
  ActionExecutionResult$,
  ActionExecutionStatus,
  ActionNotFoundException,
  ActionNotFoundException$,
  ActionOwner,
  ActionRevision$,
  ActionState$,
  ActionType$,
  ActionTypeArtifactDetails$,
  ActionTypeDeclaration$,
  ActionTypeExecutor$,
  ActionTypeId$,
  ActionTypeIdentifier$,
  ActionTypeNotFoundException,
  ActionTypeNotFoundException$,
  ActionTypePermissions$,
  ActionTypeProperty$,
  ActionTypeSettings$,
  ActionTypeUrls$,
  ApprovalAlreadyCompletedException,
  ApprovalAlreadyCompletedException$,
  ApprovalResult$,
  ApprovalStatus,
  Artifact$,
  ArtifactDetail$,
  ArtifactDetails$,
  ArtifactLocation$,
  ArtifactLocationType,
  ArtifactRevision$,
  ArtifactStore$,
  ArtifactStoreType,
  BeforeEntryConditions$,
  BlockerDeclaration$,
  BlockerType,
  CodePipeline,
  CodePipelineClient,
  CodePipelineServiceException,
  ConcurrentModificationException,
  ConcurrentModificationException$,
  ConcurrentPipelineExecutionsLimitExceededException,
  ConcurrentPipelineExecutionsLimitExceededException$,
  Condition$,
  ConditionExecution$,
  ConditionExecutionStatus,
  ConditionNotOverridableException,
  ConditionNotOverridableException$,
  ConditionState$,
  ConditionType,
  ConflictException,
  ConflictException$,
  CreateCustomActionType$,
  CreateCustomActionTypeCommand,
  CreateCustomActionTypeInput$,
  CreateCustomActionTypeOutput$,
  CreatePipeline$,
  CreatePipelineCommand,
  CreatePipelineInput$,
  CreatePipelineOutput$,
  CurrentRevision$,
  DeleteCustomActionType$,
  DeleteCustomActionTypeCommand,
  DeleteCustomActionTypeInput$,
  DeletePipeline$,
  DeletePipelineCommand,
  DeletePipelineInput$,
  DeleteWebhook$,
  DeleteWebhookCommand,
  DeleteWebhookInput$,
  DeleteWebhookOutput$,
  DeployActionExecutionTarget$,
  DeployTargetEvent$,
  DeployTargetEventContext$,
  DeregisterWebhookWithThirdParty$,
  DeregisterWebhookWithThirdPartyCommand,
  DeregisterWebhookWithThirdPartyInput$,
  DeregisterWebhookWithThirdPartyOutput$,
  DisableStageTransition$,
  DisableStageTransitionCommand,
  DisableStageTransitionInput$,
  DuplicatedStopRequestException,
  DuplicatedStopRequestException$,
  EnableStageTransition$,
  EnableStageTransitionCommand,
  EnableStageTransitionInput$,
  EncryptionKey$,
  EncryptionKeyType,
  EnvironmentVariable$,
  EnvironmentVariableType,
  ErrorDetails$,
  ExecutionDetails$,
  ExecutionMode,
  ExecutionTrigger$,
  ExecutionType,
  ExecutorConfiguration$,
  ExecutorType,
  FailureConditions$,
  FailureDetails$,
  FailureType,
  GetActionType$,
  GetActionTypeCommand,
  GetActionTypeInput$,
  GetActionTypeOutput$,
  GetJobDetails$,
  GetJobDetailsCommand,
  GetJobDetailsInput$,
  GetJobDetailsOutput$,
  GetPipeline$,
  GetPipelineCommand,
  GetPipelineExecution$,
  GetPipelineExecutionCommand,
  GetPipelineExecutionInput$,
  GetPipelineExecutionOutput$,
  GetPipelineInput$,
  GetPipelineOutput$,
  GetPipelineState$,
  GetPipelineStateCommand,
  GetPipelineStateInput$,
  GetPipelineStateOutput$,
  GetThirdPartyJobDetails$,
  GetThirdPartyJobDetailsCommand,
  GetThirdPartyJobDetailsInput$,
  GetThirdPartyJobDetailsOutput$,
  GitBranchFilterCriteria$,
  GitConfiguration$,
  GitFilePathFilterCriteria$,
  GitPullRequestEventType,
  GitPullRequestFilter$,
  GitPushFilter$,
  GitTagFilterCriteria$,
  InputArtifact$,
  InvalidActionDeclarationException,
  InvalidActionDeclarationException$,
  InvalidApprovalTokenException,
  InvalidApprovalTokenException$,
  InvalidArnException,
  InvalidArnException$,
  InvalidBlockerDeclarationException,
  InvalidBlockerDeclarationException$,
  InvalidClientTokenException,
  InvalidClientTokenException$,
  InvalidJobException,
  InvalidJobException$,
  InvalidJobStateException,
  InvalidJobStateException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidNonceException,
  InvalidNonceException$,
  InvalidStageDeclarationException,
  InvalidStageDeclarationException$,
  InvalidStructureException,
  InvalidStructureException$,
  InvalidTagsException,
  InvalidTagsException$,
  InvalidWebhookAuthenticationParametersException,
  InvalidWebhookAuthenticationParametersException$,
  InvalidWebhookFilterPatternException,
  InvalidWebhookFilterPatternException$,
  Job$,
  JobData$,
  JobDetails$,
  JobNotFoundException,
  JobNotFoundException$,
  JobStatus,
  JobWorkerExecutorConfiguration$,
  LambdaExecutorConfiguration$,
  LatestInPipelineExecutionFilter$,
  LimitExceededException,
  LimitExceededException$,
  ListActionExecutions$,
  ListActionExecutionsCommand,
  ListActionExecutionsInput$,
  ListActionExecutionsOutput$,
  ListActionTypes$,
  ListActionTypesCommand,
  ListActionTypesInput$,
  ListActionTypesOutput$,
  ListDeployActionExecutionTargets$,
  ListDeployActionExecutionTargetsCommand,
  ListDeployActionExecutionTargetsInput$,
  ListDeployActionExecutionTargetsOutput$,
  ListPipelineExecutions$,
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsInput$,
  ListPipelineExecutionsOutput$,
  ListPipelines$,
  ListPipelinesCommand,
  ListPipelinesInput$,
  ListPipelinesOutput$,
  ListRuleExecutions$,
  ListRuleExecutionsCommand,
  ListRuleExecutionsInput$,
  ListRuleExecutionsOutput$,
  ListRuleTypes$,
  ListRuleTypesCommand,
  ListRuleTypesInput$,
  ListRuleTypesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceInput$,
  ListTagsForResourceOutput$,
  ListWebhookItem$,
  ListWebhooks$,
  ListWebhooksCommand,
  ListWebhooksInput$,
  ListWebhooksOutput$,
  NotLatestPipelineExecutionException,
  NotLatestPipelineExecutionException$,
  OutputArtifact$,
  OutputVariablesSizeExceededException,
  OutputVariablesSizeExceededException$,
  OverrideStageCondition$,
  OverrideStageConditionCommand,
  OverrideStageConditionInput$,
  PipelineContext$,
  PipelineDeclaration$,
  PipelineExecution$,
  PipelineExecutionFilter$,
  PipelineExecutionNotFoundException,
  PipelineExecutionNotFoundException$,
  PipelineExecutionNotStoppableException,
  PipelineExecutionNotStoppableException$,
  PipelineExecutionOutdatedException,
  PipelineExecutionOutdatedException$,
  PipelineExecutionStatus,
  PipelineExecutionSummary$,
  PipelineMetadata$,
  PipelineNameInUseException,
  PipelineNameInUseException$,
  PipelineNotFoundException,
  PipelineNotFoundException$,
  PipelineRollbackMetadata$,
  PipelineSummary$,
  PipelineTriggerDeclaration$,
  PipelineTriggerProviderType,
  PipelineType,
  PipelineVariable$,
  PipelineVariableDeclaration$,
  PipelineVersionNotFoundException,
  PipelineVersionNotFoundException$,
  PollForJobs$,
  PollForJobsCommand,
  PollForJobsInput$,
  PollForJobsOutput$,
  PollForThirdPartyJobs$,
  PollForThirdPartyJobsCommand,
  PollForThirdPartyJobsInput$,
  PollForThirdPartyJobsOutput$,
  PutActionRevision$,
  PutActionRevisionCommand,
  PutActionRevisionInput$,
  PutActionRevisionOutput$,
  PutApprovalResult$,
  PutApprovalResultCommand,
  PutApprovalResultInput$,
  PutApprovalResultOutput$,
  PutJobFailureResult$,
  PutJobFailureResultCommand,
  PutJobFailureResultInput$,
  PutJobSuccessResult$,
  PutJobSuccessResultCommand,
  PutJobSuccessResultInput$,
  PutThirdPartyJobFailureResult$,
  PutThirdPartyJobFailureResultCommand,
  PutThirdPartyJobFailureResultInput$,
  PutThirdPartyJobSuccessResult$,
  PutThirdPartyJobSuccessResultCommand,
  PutThirdPartyJobSuccessResultInput$,
  PutWebhook$,
  PutWebhookCommand,
  PutWebhookInput$,
  PutWebhookOutput$,
  RegisterWebhookWithThirdParty$,
  RegisterWebhookWithThirdPartyCommand,
  RegisterWebhookWithThirdPartyInput$,
  RegisterWebhookWithThirdPartyOutput$,
  RequestFailedException,
  RequestFailedException$,
  ResolvedPipelineVariable$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  Result,
  RetryConfiguration$,
  RetryStageExecution$,
  RetryStageExecutionCommand,
  RetryStageExecutionInput$,
  RetryStageExecutionOutput$,
  RetryStageMetadata$,
  RetryTrigger,
  RollbackStage$,
  RollbackStageCommand,
  RollbackStageInput$,
  RollbackStageOutput$,
  RuleCategory,
  RuleConfigurationProperty$,
  RuleConfigurationPropertyType,
  RuleDeclaration$,
  RuleExecution$,
  RuleExecutionDetail$,
  RuleExecutionFilter$,
  RuleExecutionInput$,
  RuleExecutionOutput$,
  RuleExecutionResult$,
  RuleExecutionStatus,
  RuleOwner,
  RuleRevision$,
  RuleState$,
  RuleType$,
  RuleTypeId$,
  RuleTypeSettings$,
  S3ArtifactLocation$,
  S3Location$,
  SourceRevision$,
  SourceRevisionOverride$,
  SourceRevisionType,
  StageConditionState$,
  StageConditionsExecution$,
  StageContext$,
  StageDeclaration$,
  StageExecution$,
  StageExecutionStatus,
  StageNotFoundException,
  StageNotFoundException$,
  StageNotRetryableException,
  StageNotRetryableException$,
  StageRetryMode,
  StageState$,
  StageTransitionType,
  StartPipelineExecution$,
  StartPipelineExecutionCommand,
  StartPipelineExecutionInput$,
  StartPipelineExecutionOutput$,
  StartTimeRange,
  StopExecutionTrigger$,
  StopPipelineExecution$,
  StopPipelineExecutionCommand,
  StopPipelineExecutionInput$,
  StopPipelineExecutionOutput$,
  SucceededInStageFilter$,
  SuccessConditions$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TagResourceOutput$,
  TargetFilter$,
  TargetFilterName,
  ThirdPartyJob$,
  ThirdPartyJobData$,
  ThirdPartyJobDetails$,
  TooManyTagsException,
  TooManyTagsException$,
  TransitionState$,
  TriggerType,
  UnableToRollbackStageException,
  UnableToRollbackStageException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UntagResourceOutput$,
  UpdateActionType$,
  UpdateActionTypeCommand,
  UpdateActionTypeInput$,
  UpdatePipeline$,
  UpdatePipelineCommand,
  UpdatePipelineInput$,
  UpdatePipelineOutput$,
  ValidationException,
  ValidationException$,
  WebhookAuthConfiguration$,
  WebhookAuthenticationType,
  WebhookDefinition$,
  WebhookFilterRule$,
  WebhookNotFoundException,
  WebhookNotFoundException$,
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
assert(typeof AcknowledgeJob$ === "object");
assert(typeof AcknowledgeThirdPartyJobCommand === "function");
assert(typeof AcknowledgeThirdPartyJob$ === "object");
assert(typeof CreateCustomActionTypeCommand === "function");
assert(typeof CreateCustomActionType$ === "object");
assert(typeof CreatePipelineCommand === "function");
assert(typeof CreatePipeline$ === "object");
assert(typeof DeleteCustomActionTypeCommand === "function");
assert(typeof DeleteCustomActionType$ === "object");
assert(typeof DeletePipelineCommand === "function");
assert(typeof DeletePipeline$ === "object");
assert(typeof DeleteWebhookCommand === "function");
assert(typeof DeleteWebhook$ === "object");
assert(typeof DeregisterWebhookWithThirdPartyCommand === "function");
assert(typeof DeregisterWebhookWithThirdParty$ === "object");
assert(typeof DisableStageTransitionCommand === "function");
assert(typeof DisableStageTransition$ === "object");
assert(typeof EnableStageTransitionCommand === "function");
assert(typeof EnableStageTransition$ === "object");
assert(typeof GetActionTypeCommand === "function");
assert(typeof GetActionType$ === "object");
assert(typeof GetJobDetailsCommand === "function");
assert(typeof GetJobDetails$ === "object");
assert(typeof GetPipelineCommand === "function");
assert(typeof GetPipeline$ === "object");
assert(typeof GetPipelineExecutionCommand === "function");
assert(typeof GetPipelineExecution$ === "object");
assert(typeof GetPipelineStateCommand === "function");
assert(typeof GetPipelineState$ === "object");
assert(typeof GetThirdPartyJobDetailsCommand === "function");
assert(typeof GetThirdPartyJobDetails$ === "object");
assert(typeof ListActionExecutionsCommand === "function");
assert(typeof ListActionExecutions$ === "object");
assert(typeof ListActionTypesCommand === "function");
assert(typeof ListActionTypes$ === "object");
assert(typeof ListDeployActionExecutionTargetsCommand === "function");
assert(typeof ListDeployActionExecutionTargets$ === "object");
assert(typeof ListPipelineExecutionsCommand === "function");
assert(typeof ListPipelineExecutions$ === "object");
assert(typeof ListPipelinesCommand === "function");
assert(typeof ListPipelines$ === "object");
assert(typeof ListRuleExecutionsCommand === "function");
assert(typeof ListRuleExecutions$ === "object");
assert(typeof ListRuleTypesCommand === "function");
assert(typeof ListRuleTypes$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWebhooksCommand === "function");
assert(typeof ListWebhooks$ === "object");
assert(typeof OverrideStageConditionCommand === "function");
assert(typeof OverrideStageCondition$ === "object");
assert(typeof PollForJobsCommand === "function");
assert(typeof PollForJobs$ === "object");
assert(typeof PollForThirdPartyJobsCommand === "function");
assert(typeof PollForThirdPartyJobs$ === "object");
assert(typeof PutActionRevisionCommand === "function");
assert(typeof PutActionRevision$ === "object");
assert(typeof PutApprovalResultCommand === "function");
assert(typeof PutApprovalResult$ === "object");
assert(typeof PutJobFailureResultCommand === "function");
assert(typeof PutJobFailureResult$ === "object");
assert(typeof PutJobSuccessResultCommand === "function");
assert(typeof PutJobSuccessResult$ === "object");
assert(typeof PutThirdPartyJobFailureResultCommand === "function");
assert(typeof PutThirdPartyJobFailureResult$ === "object");
assert(typeof PutThirdPartyJobSuccessResultCommand === "function");
assert(typeof PutThirdPartyJobSuccessResult$ === "object");
assert(typeof PutWebhookCommand === "function");
assert(typeof PutWebhook$ === "object");
assert(typeof RegisterWebhookWithThirdPartyCommand === "function");
assert(typeof RegisterWebhookWithThirdParty$ === "object");
assert(typeof RetryStageExecutionCommand === "function");
assert(typeof RetryStageExecution$ === "object");
assert(typeof RollbackStageCommand === "function");
assert(typeof RollbackStage$ === "object");
assert(typeof StartPipelineExecutionCommand === "function");
assert(typeof StartPipelineExecution$ === "object");
assert(typeof StopPipelineExecutionCommand === "function");
assert(typeof StopPipelineExecution$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateActionTypeCommand === "function");
assert(typeof UpdateActionType$ === "object");
assert(typeof UpdatePipelineCommand === "function");
assert(typeof UpdatePipeline$ === "object");
// structural schemas
assert(typeof AcknowledgeJobInput$ === "object");
assert(typeof AcknowledgeJobOutput$ === "object");
assert(typeof AcknowledgeThirdPartyJobInput$ === "object");
assert(typeof AcknowledgeThirdPartyJobOutput$ === "object");
assert(typeof ActionConfiguration$ === "object");
assert(typeof ActionConfigurationProperty$ === "object");
assert(typeof ActionContext$ === "object");
assert(typeof ActionDeclaration$ === "object");
assert(typeof ActionExecution$ === "object");
assert(typeof ActionExecutionDetail$ === "object");
assert(typeof ActionExecutionFilter$ === "object");
assert(typeof ActionExecutionInput$ === "object");
assert(typeof ActionExecutionOutput$ === "object");
assert(typeof ActionExecutionResult$ === "object");
assert(typeof ActionRevision$ === "object");
assert(typeof ActionState$ === "object");
assert(typeof ActionType$ === "object");
assert(typeof ActionTypeArtifactDetails$ === "object");
assert(typeof ActionTypeDeclaration$ === "object");
assert(typeof ActionTypeExecutor$ === "object");
assert(typeof ActionTypeId$ === "object");
assert(typeof ActionTypeIdentifier$ === "object");
assert(typeof ActionTypePermissions$ === "object");
assert(typeof ActionTypeProperty$ === "object");
assert(typeof ActionTypeSettings$ === "object");
assert(typeof ActionTypeUrls$ === "object");
assert(typeof ApprovalResult$ === "object");
assert(typeof Artifact$ === "object");
assert(typeof ArtifactDetail$ === "object");
assert(typeof ArtifactDetails$ === "object");
assert(typeof ArtifactLocation$ === "object");
assert(typeof ArtifactRevision$ === "object");
assert(typeof ArtifactStore$ === "object");
assert(typeof AWSSessionCredentials$ === "object");
assert(typeof BeforeEntryConditions$ === "object");
assert(typeof BlockerDeclaration$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConditionExecution$ === "object");
assert(typeof ConditionState$ === "object");
assert(typeof CreateCustomActionTypeInput$ === "object");
assert(typeof CreateCustomActionTypeOutput$ === "object");
assert(typeof CreatePipelineInput$ === "object");
assert(typeof CreatePipelineOutput$ === "object");
assert(typeof CurrentRevision$ === "object");
assert(typeof DeleteCustomActionTypeInput$ === "object");
assert(typeof DeletePipelineInput$ === "object");
assert(typeof DeleteWebhookInput$ === "object");
assert(typeof DeleteWebhookOutput$ === "object");
assert(typeof DeployActionExecutionTarget$ === "object");
assert(typeof DeployTargetEvent$ === "object");
assert(typeof DeployTargetEventContext$ === "object");
assert(typeof DeregisterWebhookWithThirdPartyInput$ === "object");
assert(typeof DeregisterWebhookWithThirdPartyOutput$ === "object");
assert(typeof DisableStageTransitionInput$ === "object");
assert(typeof EnableStageTransitionInput$ === "object");
assert(typeof EncryptionKey$ === "object");
assert(typeof EnvironmentVariable$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof ExecutionDetails$ === "object");
assert(typeof ExecutionTrigger$ === "object");
assert(typeof ExecutorConfiguration$ === "object");
assert(typeof FailureConditions$ === "object");
assert(typeof FailureDetails$ === "object");
assert(typeof GetActionTypeInput$ === "object");
assert(typeof GetActionTypeOutput$ === "object");
assert(typeof GetJobDetailsInput$ === "object");
assert(typeof GetJobDetailsOutput$ === "object");
assert(typeof GetPipelineExecutionInput$ === "object");
assert(typeof GetPipelineExecutionOutput$ === "object");
assert(typeof GetPipelineInput$ === "object");
assert(typeof GetPipelineOutput$ === "object");
assert(typeof GetPipelineStateInput$ === "object");
assert(typeof GetPipelineStateOutput$ === "object");
assert(typeof GetThirdPartyJobDetailsInput$ === "object");
assert(typeof GetThirdPartyJobDetailsOutput$ === "object");
assert(typeof GitBranchFilterCriteria$ === "object");
assert(typeof GitConfiguration$ === "object");
assert(typeof GitFilePathFilterCriteria$ === "object");
assert(typeof GitPullRequestFilter$ === "object");
assert(typeof GitPushFilter$ === "object");
assert(typeof GitTagFilterCriteria$ === "object");
assert(typeof InputArtifact$ === "object");
assert(typeof Job$ === "object");
assert(typeof JobData$ === "object");
assert(typeof JobDetails$ === "object");
assert(typeof JobWorkerExecutorConfiguration$ === "object");
assert(typeof LambdaExecutorConfiguration$ === "object");
assert(typeof LatestInPipelineExecutionFilter$ === "object");
assert(typeof ListActionExecutionsInput$ === "object");
assert(typeof ListActionExecutionsOutput$ === "object");
assert(typeof ListActionTypesInput$ === "object");
assert(typeof ListActionTypesOutput$ === "object");
assert(typeof ListDeployActionExecutionTargetsInput$ === "object");
assert(typeof ListDeployActionExecutionTargetsOutput$ === "object");
assert(typeof ListPipelineExecutionsInput$ === "object");
assert(typeof ListPipelineExecutionsOutput$ === "object");
assert(typeof ListPipelinesInput$ === "object");
assert(typeof ListPipelinesOutput$ === "object");
assert(typeof ListRuleExecutionsInput$ === "object");
assert(typeof ListRuleExecutionsOutput$ === "object");
assert(typeof ListRuleTypesInput$ === "object");
assert(typeof ListRuleTypesOutput$ === "object");
assert(typeof ListTagsForResourceInput$ === "object");
assert(typeof ListTagsForResourceOutput$ === "object");
assert(typeof ListWebhookItem$ === "object");
assert(typeof ListWebhooksInput$ === "object");
assert(typeof ListWebhooksOutput$ === "object");
assert(typeof OutputArtifact$ === "object");
assert(typeof OverrideStageConditionInput$ === "object");
assert(typeof PipelineContext$ === "object");
assert(typeof PipelineDeclaration$ === "object");
assert(typeof PipelineExecution$ === "object");
assert(typeof PipelineExecutionFilter$ === "object");
assert(typeof PipelineExecutionSummary$ === "object");
assert(typeof PipelineMetadata$ === "object");
assert(typeof PipelineRollbackMetadata$ === "object");
assert(typeof PipelineSummary$ === "object");
assert(typeof PipelineTriggerDeclaration$ === "object");
assert(typeof PipelineVariable$ === "object");
assert(typeof PipelineVariableDeclaration$ === "object");
assert(typeof PollForJobsInput$ === "object");
assert(typeof PollForJobsOutput$ === "object");
assert(typeof PollForThirdPartyJobsInput$ === "object");
assert(typeof PollForThirdPartyJobsOutput$ === "object");
assert(typeof PutActionRevisionInput$ === "object");
assert(typeof PutActionRevisionOutput$ === "object");
assert(typeof PutApprovalResultInput$ === "object");
assert(typeof PutApprovalResultOutput$ === "object");
assert(typeof PutJobFailureResultInput$ === "object");
assert(typeof PutJobSuccessResultInput$ === "object");
assert(typeof PutThirdPartyJobFailureResultInput$ === "object");
assert(typeof PutThirdPartyJobSuccessResultInput$ === "object");
assert(typeof PutWebhookInput$ === "object");
assert(typeof PutWebhookOutput$ === "object");
assert(typeof RegisterWebhookWithThirdPartyInput$ === "object");
assert(typeof RegisterWebhookWithThirdPartyOutput$ === "object");
assert(typeof ResolvedPipelineVariable$ === "object");
assert(typeof RetryConfiguration$ === "object");
assert(typeof RetryStageExecutionInput$ === "object");
assert(typeof RetryStageExecutionOutput$ === "object");
assert(typeof RetryStageMetadata$ === "object");
assert(typeof RollbackStageInput$ === "object");
assert(typeof RollbackStageOutput$ === "object");
assert(typeof RuleConfigurationProperty$ === "object");
assert(typeof RuleDeclaration$ === "object");
assert(typeof RuleExecution$ === "object");
assert(typeof RuleExecutionDetail$ === "object");
assert(typeof RuleExecutionFilter$ === "object");
assert(typeof RuleExecutionInput$ === "object");
assert(typeof RuleExecutionOutput$ === "object");
assert(typeof RuleExecutionResult$ === "object");
assert(typeof RuleRevision$ === "object");
assert(typeof RuleState$ === "object");
assert(typeof RuleType$ === "object");
assert(typeof RuleTypeId$ === "object");
assert(typeof RuleTypeSettings$ === "object");
assert(typeof S3ArtifactLocation$ === "object");
assert(typeof S3Location$ === "object");
assert(typeof SourceRevision$ === "object");
assert(typeof SourceRevisionOverride$ === "object");
assert(typeof StageConditionsExecution$ === "object");
assert(typeof StageConditionState$ === "object");
assert(typeof StageContext$ === "object");
assert(typeof StageDeclaration$ === "object");
assert(typeof StageExecution$ === "object");
assert(typeof StageState$ === "object");
assert(typeof StartPipelineExecutionInput$ === "object");
assert(typeof StartPipelineExecutionOutput$ === "object");
assert(typeof StopExecutionTrigger$ === "object");
assert(typeof StopPipelineExecutionInput$ === "object");
assert(typeof StopPipelineExecutionOutput$ === "object");
assert(typeof SucceededInStageFilter$ === "object");
assert(typeof SuccessConditions$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TagResourceOutput$ === "object");
assert(typeof TargetFilter$ === "object");
assert(typeof ThirdPartyJob$ === "object");
assert(typeof ThirdPartyJobData$ === "object");
assert(typeof ThirdPartyJobDetails$ === "object");
assert(typeof TransitionState$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UntagResourceOutput$ === "object");
assert(typeof UpdateActionTypeInput$ === "object");
assert(typeof UpdatePipelineInput$ === "object");
assert(typeof UpdatePipelineOutput$ === "object");
assert(typeof WebhookAuthConfiguration$ === "object");
assert(typeof WebhookDefinition$ === "object");
assert(typeof WebhookFilterRule$ === "object");
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
assert(ActionExecutionNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof ActionExecutionNotFoundException$ === "object");
assert(ActionNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof ActionNotFoundException$ === "object");
assert(ActionTypeNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof ActionTypeNotFoundException$ === "object");
assert(ApprovalAlreadyCompletedException.prototype instanceof CodePipelineServiceException);
assert(typeof ApprovalAlreadyCompletedException$ === "object");
assert(ConcurrentModificationException.prototype instanceof CodePipelineServiceException);
assert(typeof ConcurrentModificationException$ === "object");
assert(ConcurrentPipelineExecutionsLimitExceededException.prototype instanceof CodePipelineServiceException);
assert(typeof ConcurrentPipelineExecutionsLimitExceededException$ === "object");
assert(ConditionNotOverridableException.prototype instanceof CodePipelineServiceException);
assert(typeof ConditionNotOverridableException$ === "object");
assert(ConflictException.prototype instanceof CodePipelineServiceException);
assert(typeof ConflictException$ === "object");
assert(DuplicatedStopRequestException.prototype instanceof CodePipelineServiceException);
assert(typeof DuplicatedStopRequestException$ === "object");
assert(InvalidActionDeclarationException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidActionDeclarationException$ === "object");
assert(InvalidApprovalTokenException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidApprovalTokenException$ === "object");
assert(InvalidArnException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidArnException$ === "object");
assert(InvalidBlockerDeclarationException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidBlockerDeclarationException$ === "object");
assert(InvalidClientTokenException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidClientTokenException$ === "object");
assert(InvalidJobException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidJobException$ === "object");
assert(InvalidJobStateException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidJobStateException$ === "object");
assert(InvalidNextTokenException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidNonceException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidNonceException$ === "object");
assert(InvalidStageDeclarationException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidStageDeclarationException$ === "object");
assert(InvalidStructureException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidStructureException$ === "object");
assert(InvalidTagsException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidTagsException$ === "object");
assert(InvalidWebhookAuthenticationParametersException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidWebhookAuthenticationParametersException$ === "object");
assert(InvalidWebhookFilterPatternException.prototype instanceof CodePipelineServiceException);
assert(typeof InvalidWebhookFilterPatternException$ === "object");
assert(JobNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof JobNotFoundException$ === "object");
assert(LimitExceededException.prototype instanceof CodePipelineServiceException);
assert(typeof LimitExceededException$ === "object");
assert(NotLatestPipelineExecutionException.prototype instanceof CodePipelineServiceException);
assert(typeof NotLatestPipelineExecutionException$ === "object");
assert(OutputVariablesSizeExceededException.prototype instanceof CodePipelineServiceException);
assert(typeof OutputVariablesSizeExceededException$ === "object");
assert(PipelineExecutionNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof PipelineExecutionNotFoundException$ === "object");
assert(PipelineExecutionNotStoppableException.prototype instanceof CodePipelineServiceException);
assert(typeof PipelineExecutionNotStoppableException$ === "object");
assert(PipelineExecutionOutdatedException.prototype instanceof CodePipelineServiceException);
assert(typeof PipelineExecutionOutdatedException$ === "object");
assert(PipelineNameInUseException.prototype instanceof CodePipelineServiceException);
assert(typeof PipelineNameInUseException$ === "object");
assert(PipelineNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof PipelineNotFoundException$ === "object");
assert(PipelineVersionNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof PipelineVersionNotFoundException$ === "object");
assert(RequestFailedException.prototype instanceof CodePipelineServiceException);
assert(typeof RequestFailedException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(StageNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof StageNotFoundException$ === "object");
assert(StageNotRetryableException.prototype instanceof CodePipelineServiceException);
assert(typeof StageNotRetryableException$ === "object");
assert(TooManyTagsException.prototype instanceof CodePipelineServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(UnableToRollbackStageException.prototype instanceof CodePipelineServiceException);
assert(typeof UnableToRollbackStageException$ === "object");
assert(ValidationException.prototype instanceof CodePipelineServiceException);
assert(typeof ValidationException$ === "object");
assert(WebhookNotFoundException.prototype instanceof CodePipelineServiceException);
assert(typeof WebhookNotFoundException$ === "object");
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
