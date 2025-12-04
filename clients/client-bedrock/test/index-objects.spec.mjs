import {
  AgreementStatus,
  ApplicationType,
  AttributeType,
  AuthorizationStatus,
  AutomatedReasoningCheckLogicWarningType,
  AutomatedReasoningCheckResult,
  AutomatedReasoningPolicyAnnotationStatus,
  AutomatedReasoningPolicyBuildDocumentContentType,
  AutomatedReasoningPolicyBuildMessageType,
  AutomatedReasoningPolicyBuildResultAssetType,
  AutomatedReasoningPolicyBuildWorkflowStatus,
  AutomatedReasoningPolicyBuildWorkflowType,
  AutomatedReasoningPolicyTestRunResult,
  AutomatedReasoningPolicyTestRunStatus,
  BatchDeleteEvaluationJobCommand,
  Bedrock,
  BedrockClient,
  BedrockServiceException,
  CancelAutomatedReasoningPolicyBuildWorkflowCommand,
  CommitmentDuration,
  ConfigurationOwner,
  CreateAutomatedReasoningPolicyCommand,
  CreateAutomatedReasoningPolicyTestCaseCommand,
  CreateAutomatedReasoningPolicyVersionCommand,
  CreateCustomModelCommand,
  CreateCustomModelDeploymentCommand,
  CreateEvaluationJobCommand,
  CreateFoundationModelAgreementCommand,
  CreateGuardrailCommand,
  CreateGuardrailVersionCommand,
  CreateInferenceProfileCommand,
  CreateMarketplaceModelEndpointCommand,
  CreateModelCopyJobCommand,
  CreateModelCustomizationJobCommand,
  CreateModelImportJobCommand,
  CreateModelInvocationJobCommand,
  CreatePromptRouterCommand,
  CreateProvisionedModelThroughputCommand,
  CustomModelDeploymentStatus,
  CustomModelDeploymentUpdateStatus,
  CustomizationType,
  DeleteAutomatedReasoningPolicyBuildWorkflowCommand,
  DeleteAutomatedReasoningPolicyCommand,
  DeleteAutomatedReasoningPolicyTestCaseCommand,
  DeleteCustomModelCommand,
  DeleteCustomModelDeploymentCommand,
  DeleteEnforcedGuardrailConfigurationCommand,
  DeleteFoundationModelAgreementCommand,
  DeleteGuardrailCommand,
  DeleteImportedModelCommand,
  DeleteInferenceProfileCommand,
  DeleteMarketplaceModelEndpointCommand,
  DeleteModelInvocationLoggingConfigurationCommand,
  DeletePromptRouterCommand,
  DeleteProvisionedModelThroughputCommand,
  DeregisterMarketplaceModelEndpointCommand,
  EntitlementAvailability,
  EvaluationJobStatus,
  EvaluationJobType,
  EvaluationTaskType,
  ExportAutomatedReasoningPolicyVersionCommand,
  ExternalSourceType,
  FineTuningJobStatus,
  FoundationModelLifecycleStatus,
  GetAutomatedReasoningPolicyAnnotationsCommand,
  GetAutomatedReasoningPolicyBuildWorkflowCommand,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand,
  GetAutomatedReasoningPolicyCommand,
  GetAutomatedReasoningPolicyNextScenarioCommand,
  GetAutomatedReasoningPolicyTestCaseCommand,
  GetAutomatedReasoningPolicyTestResultCommand,
  GetCustomModelCommand,
  GetCustomModelDeploymentCommand,
  GetEvaluationJobCommand,
  GetFoundationModelAvailabilityCommand,
  GetFoundationModelCommand,
  GetGuardrailCommand,
  GetImportedModelCommand,
  GetInferenceProfileCommand,
  GetMarketplaceModelEndpointCommand,
  GetModelCopyJobCommand,
  GetModelCustomizationJobCommand,
  GetModelImportJobCommand,
  GetModelInvocationJobCommand,
  GetModelInvocationLoggingConfigurationCommand,
  GetPromptRouterCommand,
  GetProvisionedModelThroughputCommand,
  GetUseCaseForModelAccessCommand,
  GuardrailContentFilterAction,
  GuardrailContentFilterType,
  GuardrailContentFiltersTierName,
  GuardrailContextualGroundingAction,
  GuardrailContextualGroundingFilterType,
  GuardrailFilterStrength,
  GuardrailManagedWordsType,
  GuardrailModality,
  GuardrailPiiEntityType,
  GuardrailSensitiveInformationAction,
  GuardrailStatus,
  GuardrailTopicAction,
  GuardrailTopicType,
  GuardrailTopicsTierName,
  GuardrailWordAction,
  InferenceProfileStatus,
  InferenceProfileType,
  InferenceType,
  InputTags,
  JobStatusDetails,
  ListAutomatedReasoningPoliciesCommand,
  ListAutomatedReasoningPolicyBuildWorkflowsCommand,
  ListAutomatedReasoningPolicyTestCasesCommand,
  ListAutomatedReasoningPolicyTestResultsCommand,
  ListCustomModelDeploymentsCommand,
  ListCustomModelsCommand,
  ListEnforcedGuardrailsConfigurationCommand,
  ListEvaluationJobsCommand,
  ListFoundationModelAgreementOffersCommand,
  ListFoundationModelsCommand,
  ListGuardrailsCommand,
  ListImportedModelsCommand,
  ListInferenceProfilesCommand,
  ListMarketplaceModelEndpointsCommand,
  ListModelCopyJobsCommand,
  ListModelCustomizationJobsCommand,
  ListModelImportJobsCommand,
  ListModelInvocationJobsCommand,
  ListPromptRoutersCommand,
  ListProvisionedModelThroughputsCommand,
  ListTagsForResourceCommand,
  ModelCopyJobStatus,
  ModelCustomization,
  ModelCustomizationJobStatus,
  ModelImportJobStatus,
  ModelInvocationJobStatus,
  ModelModality,
  ModelStatus,
  OfferType,
  PerformanceConfigLatency,
  PromptRouterStatus,
  PromptRouterType,
  ProvisionedModelStatus,
  PutEnforcedGuardrailConfigurationCommand,
  PutModelInvocationLoggingConfigurationCommand,
  PutUseCaseForModelAccessCommand,
  QueryTransformationType,
  ReasoningEffort,
  RegionAvailability,
  RegisterMarketplaceModelEndpointCommand,
  RerankingMetadataSelectionMode,
  RetrieveAndGenerateType,
  S3InputFormat,
  SearchType,
  SortByProvisionedModels,
  SortJobsBy,
  SortModelsBy,
  SortOrder,
  StartAutomatedReasoningPolicyBuildWorkflowCommand,
  StartAutomatedReasoningPolicyTestWorkflowCommand,
  Status,
  StopEvaluationJobCommand,
  StopModelCustomizationJobCommand,
  StopModelInvocationJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAutomatedReasoningPolicyAnnotationsCommand,
  UpdateAutomatedReasoningPolicyCommand,
  UpdateAutomatedReasoningPolicyTestCaseCommand,
  UpdateCustomModelDeploymentCommand,
  UpdateGuardrailCommand,
  UpdateMarketplaceModelEndpointCommand,
  UpdateProvisionedModelThroughputCommand,
  VectorSearchRerankingConfigurationType,
  paginateListAutomatedReasoningPolicies,
  paginateListAutomatedReasoningPolicyBuildWorkflows,
  paginateListAutomatedReasoningPolicyTestCases,
  paginateListAutomatedReasoningPolicyTestResults,
  paginateListCustomModelDeployments,
  paginateListCustomModels,
  paginateListEnforcedGuardrailsConfiguration,
  paginateListEvaluationJobs,
  paginateListGuardrails,
  paginateListImportedModels,
  paginateListInferenceProfiles,
  paginateListMarketplaceModelEndpoints,
  paginateListModelCopyJobs,
  paginateListModelCustomizationJobs,
  paginateListModelImportJobs,
  paginateListModelInvocationJobs,
  paginateListPromptRouters,
  paginateListProvisionedModelThroughputs,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BedrockClient === "function");
assert(typeof Bedrock === "function");
// commands
assert(typeof BatchDeleteEvaluationJobCommand === "function");
assert(typeof CancelAutomatedReasoningPolicyBuildWorkflowCommand === "function");
assert(typeof CreateAutomatedReasoningPolicyCommand === "function");
assert(typeof CreateAutomatedReasoningPolicyTestCaseCommand === "function");
assert(typeof CreateAutomatedReasoningPolicyVersionCommand === "function");
assert(typeof CreateCustomModelCommand === "function");
assert(typeof CreateCustomModelDeploymentCommand === "function");
assert(typeof CreateEvaluationJobCommand === "function");
assert(typeof CreateFoundationModelAgreementCommand === "function");
assert(typeof CreateGuardrailCommand === "function");
assert(typeof CreateGuardrailVersionCommand === "function");
assert(typeof CreateInferenceProfileCommand === "function");
assert(typeof CreateMarketplaceModelEndpointCommand === "function");
assert(typeof CreateModelCopyJobCommand === "function");
assert(typeof CreateModelCustomizationJobCommand === "function");
assert(typeof CreateModelImportJobCommand === "function");
assert(typeof CreateModelInvocationJobCommand === "function");
assert(typeof CreatePromptRouterCommand === "function");
assert(typeof CreateProvisionedModelThroughputCommand === "function");
assert(typeof DeleteAutomatedReasoningPolicyCommand === "function");
assert(typeof DeleteAutomatedReasoningPolicyBuildWorkflowCommand === "function");
assert(typeof DeleteAutomatedReasoningPolicyTestCaseCommand === "function");
assert(typeof DeleteCustomModelCommand === "function");
assert(typeof DeleteCustomModelDeploymentCommand === "function");
assert(typeof DeleteEnforcedGuardrailConfigurationCommand === "function");
assert(typeof DeleteFoundationModelAgreementCommand === "function");
assert(typeof DeleteGuardrailCommand === "function");
assert(typeof DeleteImportedModelCommand === "function");
assert(typeof DeleteInferenceProfileCommand === "function");
assert(typeof DeleteMarketplaceModelEndpointCommand === "function");
assert(typeof DeleteModelInvocationLoggingConfigurationCommand === "function");
assert(typeof DeletePromptRouterCommand === "function");
assert(typeof DeleteProvisionedModelThroughputCommand === "function");
assert(typeof DeregisterMarketplaceModelEndpointCommand === "function");
assert(typeof ExportAutomatedReasoningPolicyVersionCommand === "function");
assert(typeof GetAutomatedReasoningPolicyCommand === "function");
assert(typeof GetAutomatedReasoningPolicyAnnotationsCommand === "function");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowCommand === "function");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand === "function");
assert(typeof GetAutomatedReasoningPolicyNextScenarioCommand === "function");
assert(typeof GetAutomatedReasoningPolicyTestCaseCommand === "function");
assert(typeof GetAutomatedReasoningPolicyTestResultCommand === "function");
assert(typeof GetCustomModelCommand === "function");
assert(typeof GetCustomModelDeploymentCommand === "function");
assert(typeof GetEvaluationJobCommand === "function");
assert(typeof GetFoundationModelCommand === "function");
assert(typeof GetFoundationModelAvailabilityCommand === "function");
assert(typeof GetGuardrailCommand === "function");
assert(typeof GetImportedModelCommand === "function");
assert(typeof GetInferenceProfileCommand === "function");
assert(typeof GetMarketplaceModelEndpointCommand === "function");
assert(typeof GetModelCopyJobCommand === "function");
assert(typeof GetModelCustomizationJobCommand === "function");
assert(typeof GetModelImportJobCommand === "function");
assert(typeof GetModelInvocationJobCommand === "function");
assert(typeof GetModelInvocationLoggingConfigurationCommand === "function");
assert(typeof GetPromptRouterCommand === "function");
assert(typeof GetProvisionedModelThroughputCommand === "function");
assert(typeof GetUseCaseForModelAccessCommand === "function");
assert(typeof ListAutomatedReasoningPoliciesCommand === "function");
assert(typeof ListAutomatedReasoningPolicyBuildWorkflowsCommand === "function");
assert(typeof ListAutomatedReasoningPolicyTestCasesCommand === "function");
assert(typeof ListAutomatedReasoningPolicyTestResultsCommand === "function");
assert(typeof ListCustomModelDeploymentsCommand === "function");
assert(typeof ListCustomModelsCommand === "function");
assert(typeof ListEnforcedGuardrailsConfigurationCommand === "function");
assert(typeof ListEvaluationJobsCommand === "function");
assert(typeof ListFoundationModelAgreementOffersCommand === "function");
assert(typeof ListFoundationModelsCommand === "function");
assert(typeof ListGuardrailsCommand === "function");
assert(typeof ListImportedModelsCommand === "function");
assert(typeof ListInferenceProfilesCommand === "function");
assert(typeof ListMarketplaceModelEndpointsCommand === "function");
assert(typeof ListModelCopyJobsCommand === "function");
assert(typeof ListModelCustomizationJobsCommand === "function");
assert(typeof ListModelImportJobsCommand === "function");
assert(typeof ListModelInvocationJobsCommand === "function");
assert(typeof ListPromptRoutersCommand === "function");
assert(typeof ListProvisionedModelThroughputsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutEnforcedGuardrailConfigurationCommand === "function");
assert(typeof PutModelInvocationLoggingConfigurationCommand === "function");
assert(typeof PutUseCaseForModelAccessCommand === "function");
assert(typeof RegisterMarketplaceModelEndpointCommand === "function");
assert(typeof StartAutomatedReasoningPolicyBuildWorkflowCommand === "function");
assert(typeof StartAutomatedReasoningPolicyTestWorkflowCommand === "function");
assert(typeof StopEvaluationJobCommand === "function");
assert(typeof StopModelCustomizationJobCommand === "function");
assert(typeof StopModelInvocationJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAutomatedReasoningPolicyCommand === "function");
assert(typeof UpdateAutomatedReasoningPolicyAnnotationsCommand === "function");
assert(typeof UpdateAutomatedReasoningPolicyTestCaseCommand === "function");
assert(typeof UpdateCustomModelDeploymentCommand === "function");
assert(typeof UpdateGuardrailCommand === "function");
assert(typeof UpdateMarketplaceModelEndpointCommand === "function");
assert(typeof UpdateProvisionedModelThroughputCommand === "function");
// enums
assert(typeof AgreementStatus === "object");
assert(typeof ApplicationType === "object");
assert(typeof AttributeType === "object");
assert(typeof AuthorizationStatus === "object");
assert(typeof AutomatedReasoningCheckLogicWarningType === "object");
assert(typeof AutomatedReasoningCheckResult === "object");
assert(typeof AutomatedReasoningPolicyAnnotationStatus === "object");
assert(typeof AutomatedReasoningPolicyBuildDocumentContentType === "object");
assert(typeof AutomatedReasoningPolicyBuildMessageType === "object");
assert(typeof AutomatedReasoningPolicyBuildResultAssetType === "object");
assert(typeof AutomatedReasoningPolicyBuildWorkflowStatus === "object");
assert(typeof AutomatedReasoningPolicyBuildWorkflowType === "object");
assert(typeof AutomatedReasoningPolicyTestRunResult === "object");
assert(typeof AutomatedReasoningPolicyTestRunStatus === "object");
assert(typeof CommitmentDuration === "object");
assert(typeof ConfigurationOwner === "object");
assert(typeof CustomizationType === "object");
assert(typeof CustomModelDeploymentStatus === "object");
assert(typeof CustomModelDeploymentUpdateStatus === "object");
assert(typeof EntitlementAvailability === "object");
assert(typeof EvaluationJobStatus === "object");
assert(typeof EvaluationJobType === "object");
assert(typeof EvaluationTaskType === "object");
assert(typeof ExternalSourceType === "object");
assert(typeof FineTuningJobStatus === "object");
assert(typeof FoundationModelLifecycleStatus === "object");
assert(typeof GuardrailContentFilterAction === "object");
assert(typeof GuardrailContentFiltersTierName === "object");
assert(typeof GuardrailContentFilterType === "object");
assert(typeof GuardrailContextualGroundingAction === "object");
assert(typeof GuardrailContextualGroundingFilterType === "object");
assert(typeof GuardrailFilterStrength === "object");
assert(typeof GuardrailManagedWordsType === "object");
assert(typeof GuardrailModality === "object");
assert(typeof GuardrailPiiEntityType === "object");
assert(typeof GuardrailSensitiveInformationAction === "object");
assert(typeof GuardrailStatus === "object");
assert(typeof GuardrailTopicAction === "object");
assert(typeof GuardrailTopicsTierName === "object");
assert(typeof GuardrailTopicType === "object");
assert(typeof GuardrailWordAction === "object");
assert(typeof InferenceProfileStatus === "object");
assert(typeof InferenceProfileType === "object");
assert(typeof InferenceType === "object");
assert(typeof InputTags === "object");
assert(typeof JobStatusDetails === "object");
assert(typeof ModelCopyJobStatus === "object");
assert(typeof ModelCustomization === "object");
assert(typeof ModelCustomizationJobStatus === "object");
assert(typeof ModelImportJobStatus === "object");
assert(typeof ModelInvocationJobStatus === "object");
assert(typeof ModelModality === "object");
assert(typeof ModelStatus === "object");
assert(typeof OfferType === "object");
assert(typeof PerformanceConfigLatency === "object");
assert(typeof PromptRouterStatus === "object");
assert(typeof PromptRouterType === "object");
assert(typeof ProvisionedModelStatus === "object");
assert(typeof QueryTransformationType === "object");
assert(typeof ReasoningEffort === "object");
assert(typeof RegionAvailability === "object");
assert(typeof RerankingMetadataSelectionMode === "object");
assert(typeof RetrieveAndGenerateType === "object");
assert(typeof S3InputFormat === "object");
assert(typeof SearchType === "object");
assert(typeof SortByProvisionedModels === "object");
assert(typeof SortJobsBy === "object");
assert(typeof SortModelsBy === "object");
assert(typeof SortOrder === "object");
assert(typeof Status === "object");
assert(typeof VectorSearchRerankingConfigurationType === "object");
// errors
assert(BedrockServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAutomatedReasoningPolicies === "function");
assert(typeof paginateListAutomatedReasoningPolicyBuildWorkflows === "function");
assert(typeof paginateListAutomatedReasoningPolicyTestCases === "function");
assert(typeof paginateListAutomatedReasoningPolicyTestResults === "function");
assert(typeof paginateListCustomModelDeployments === "function");
assert(typeof paginateListCustomModels === "function");
assert(typeof paginateListEnforcedGuardrailsConfiguration === "function");
assert(typeof paginateListEvaluationJobs === "function");
assert(typeof paginateListGuardrails === "function");
assert(typeof paginateListImportedModels === "function");
assert(typeof paginateListInferenceProfiles === "function");
assert(typeof paginateListMarketplaceModelEndpoints === "function");
assert(typeof paginateListModelCopyJobs === "function");
assert(typeof paginateListModelCustomizationJobs === "function");
assert(typeof paginateListModelImportJobs === "function");
assert(typeof paginateListModelInvocationJobs === "function");
assert(typeof paginateListPromptRouters === "function");
assert(typeof paginateListProvisionedModelThroughputs === "function");
console.log(`Bedrock index test passed.`);
