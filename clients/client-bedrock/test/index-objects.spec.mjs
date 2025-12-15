import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountEnforcedGuardrailInferenceInputConfiguration$,
  AccountEnforcedGuardrailOutputConfiguration$,
  AgreementAvailability$,
  AgreementStatus,
  ApplicationType,
  AttributeType,
  AuthorizationStatus,
  AutomatedEvaluationConfig$,
  AutomatedEvaluationCustomMetricConfig$,
  AutomatedEvaluationCustomMetricSource$,
  AutomatedReasoningCheckFinding$,
  AutomatedReasoningCheckImpossibleFinding$,
  AutomatedReasoningCheckInputTextReference$,
  AutomatedReasoningCheckInvalidFinding$,
  AutomatedReasoningCheckLogicWarning$,
  AutomatedReasoningCheckLogicWarningType,
  AutomatedReasoningCheckNoTranslationsFinding$,
  AutomatedReasoningCheckResult,
  AutomatedReasoningCheckRule$,
  AutomatedReasoningCheckSatisfiableFinding$,
  AutomatedReasoningCheckScenario$,
  AutomatedReasoningCheckTooComplexFinding$,
  AutomatedReasoningCheckTranslation$,
  AutomatedReasoningCheckTranslationAmbiguousFinding$,
  AutomatedReasoningCheckTranslationOption$,
  AutomatedReasoningCheckValidFinding$,
  AutomatedReasoningLogicStatement$,
  AutomatedReasoningPolicyAddRuleAnnotation$,
  AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation$,
  AutomatedReasoningPolicyAddRuleMutation$,
  AutomatedReasoningPolicyAddTypeAnnotation$,
  AutomatedReasoningPolicyAddTypeMutation$,
  AutomatedReasoningPolicyAddTypeValue$,
  AutomatedReasoningPolicyAddVariableAnnotation$,
  AutomatedReasoningPolicyAddVariableMutation$,
  AutomatedReasoningPolicyAnnotation$,
  AutomatedReasoningPolicyAnnotationStatus,
  AutomatedReasoningPolicyBuildDocumentContentType,
  AutomatedReasoningPolicyBuildLog$,
  AutomatedReasoningPolicyBuildLogEntry$,
  AutomatedReasoningPolicyBuildMessageType,
  AutomatedReasoningPolicyBuildResultAssetType,
  AutomatedReasoningPolicyBuildResultAssets$,
  AutomatedReasoningPolicyBuildStep$,
  AutomatedReasoningPolicyBuildStepContext$,
  AutomatedReasoningPolicyBuildStepMessage$,
  AutomatedReasoningPolicyBuildWorkflowDocument$,
  AutomatedReasoningPolicyBuildWorkflowRepairContent$,
  AutomatedReasoningPolicyBuildWorkflowSource$,
  AutomatedReasoningPolicyBuildWorkflowStatus,
  AutomatedReasoningPolicyBuildWorkflowSummary$,
  AutomatedReasoningPolicyBuildWorkflowType,
  AutomatedReasoningPolicyDefinition$,
  AutomatedReasoningPolicyDefinitionElement$,
  AutomatedReasoningPolicyDefinitionQualityReport$,
  AutomatedReasoningPolicyDefinitionRule$,
  AutomatedReasoningPolicyDefinitionType$,
  AutomatedReasoningPolicyDefinitionTypeValue$,
  AutomatedReasoningPolicyDefinitionTypeValuePair$,
  AutomatedReasoningPolicyDefinitionVariable$,
  AutomatedReasoningPolicyDeleteRuleAnnotation$,
  AutomatedReasoningPolicyDeleteRuleMutation$,
  AutomatedReasoningPolicyDeleteTypeAnnotation$,
  AutomatedReasoningPolicyDeleteTypeMutation$,
  AutomatedReasoningPolicyDeleteTypeValue$,
  AutomatedReasoningPolicyDeleteVariableAnnotation$,
  AutomatedReasoningPolicyDeleteVariableMutation$,
  AutomatedReasoningPolicyDisjointRuleSet$,
  AutomatedReasoningPolicyGeneratedTestCase$,
  AutomatedReasoningPolicyGeneratedTestCases$,
  AutomatedReasoningPolicyIngestContentAnnotation$,
  AutomatedReasoningPolicyMutation$,
  AutomatedReasoningPolicyPlanning$,
  AutomatedReasoningPolicyScenario$,
  AutomatedReasoningPolicyScenarios$,
  AutomatedReasoningPolicySummary$,
  AutomatedReasoningPolicyTestCase$,
  AutomatedReasoningPolicyTestResult$,
  AutomatedReasoningPolicyTestRunResult,
  AutomatedReasoningPolicyTestRunStatus,
  AutomatedReasoningPolicyTypeValueAnnotation$,
  AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation$,
  AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation$,
  AutomatedReasoningPolicyUpdateRuleAnnotation$,
  AutomatedReasoningPolicyUpdateRuleMutation$,
  AutomatedReasoningPolicyUpdateTypeAnnotation$,
  AutomatedReasoningPolicyUpdateTypeMutation$,
  AutomatedReasoningPolicyUpdateTypeValue$,
  AutomatedReasoningPolicyUpdateVariableAnnotation$,
  AutomatedReasoningPolicyUpdateVariableMutation$,
  AutomatedReasoningPolicyWorkflowTypeContent$,
  BatchDeleteEvaluationJob$,
  BatchDeleteEvaluationJobCommand,
  BatchDeleteEvaluationJobError$,
  BatchDeleteEvaluationJobItem$,
  BatchDeleteEvaluationJobRequest$,
  BatchDeleteEvaluationJobResponse$,
  Bedrock,
  BedrockClient,
  BedrockEvaluatorModel$,
  BedrockServiceException,
  ByteContentDoc$,
  CancelAutomatedReasoningPolicyBuildWorkflow$,
  CancelAutomatedReasoningPolicyBuildWorkflowCommand,
  CancelAutomatedReasoningPolicyBuildWorkflowRequest$,
  CancelAutomatedReasoningPolicyBuildWorkflowResponse$,
  CloudWatchConfig$,
  CommitmentDuration,
  ConfigurationOwner,
  ConflictException,
  ConflictException$,
  CreateAutomatedReasoningPolicy$,
  CreateAutomatedReasoningPolicyCommand,
  CreateAutomatedReasoningPolicyRequest$,
  CreateAutomatedReasoningPolicyResponse$,
  CreateAutomatedReasoningPolicyTestCase$,
  CreateAutomatedReasoningPolicyTestCaseCommand,
  CreateAutomatedReasoningPolicyTestCaseRequest$,
  CreateAutomatedReasoningPolicyTestCaseResponse$,
  CreateAutomatedReasoningPolicyVersion$,
  CreateAutomatedReasoningPolicyVersionCommand,
  CreateAutomatedReasoningPolicyVersionRequest$,
  CreateAutomatedReasoningPolicyVersionResponse$,
  CreateCustomModel$,
  CreateCustomModelCommand,
  CreateCustomModelDeployment$,
  CreateCustomModelDeploymentCommand,
  CreateCustomModelDeploymentRequest$,
  CreateCustomModelDeploymentResponse$,
  CreateCustomModelRequest$,
  CreateCustomModelResponse$,
  CreateEvaluationJob$,
  CreateEvaluationJobCommand,
  CreateEvaluationJobRequest$,
  CreateEvaluationJobResponse$,
  CreateFoundationModelAgreement$,
  CreateFoundationModelAgreementCommand,
  CreateFoundationModelAgreementRequest$,
  CreateFoundationModelAgreementResponse$,
  CreateGuardrail$,
  CreateGuardrailCommand,
  CreateGuardrailRequest$,
  CreateGuardrailResponse$,
  CreateGuardrailVersion$,
  CreateGuardrailVersionCommand,
  CreateGuardrailVersionRequest$,
  CreateGuardrailVersionResponse$,
  CreateInferenceProfile$,
  CreateInferenceProfileCommand,
  CreateInferenceProfileRequest$,
  CreateInferenceProfileResponse$,
  CreateMarketplaceModelEndpoint$,
  CreateMarketplaceModelEndpointCommand,
  CreateMarketplaceModelEndpointRequest$,
  CreateMarketplaceModelEndpointResponse$,
  CreateModelCopyJob$,
  CreateModelCopyJobCommand,
  CreateModelCopyJobRequest$,
  CreateModelCopyJobResponse$,
  CreateModelCustomizationJob$,
  CreateModelCustomizationJobCommand,
  CreateModelCustomizationJobRequest$,
  CreateModelCustomizationJobResponse$,
  CreateModelImportJob$,
  CreateModelImportJobCommand,
  CreateModelImportJobRequest$,
  CreateModelImportJobResponse$,
  CreateModelInvocationJob$,
  CreateModelInvocationJobCommand,
  CreateModelInvocationJobRequest$,
  CreateModelInvocationJobResponse$,
  CreatePromptRouter$,
  CreatePromptRouterCommand,
  CreatePromptRouterRequest$,
  CreatePromptRouterResponse$,
  CreateProvisionedModelThroughput$,
  CreateProvisionedModelThroughputCommand,
  CreateProvisionedModelThroughputRequest$,
  CreateProvisionedModelThroughputResponse$,
  CustomMetricBedrockEvaluatorModel$,
  CustomMetricDefinition$,
  CustomMetricEvaluatorModelConfig$,
  CustomModelDeploymentStatus,
  CustomModelDeploymentSummary$,
  CustomModelDeploymentUpdateDetails$,
  CustomModelDeploymentUpdateStatus,
  CustomModelSummary$,
  CustomModelUnits$,
  CustomizationConfig$,
  CustomizationType,
  DataProcessingDetails$,
  DeleteAutomatedReasoningPolicy$,
  DeleteAutomatedReasoningPolicyBuildWorkflow$,
  DeleteAutomatedReasoningPolicyBuildWorkflowCommand,
  DeleteAutomatedReasoningPolicyBuildWorkflowRequest$,
  DeleteAutomatedReasoningPolicyBuildWorkflowResponse$,
  DeleteAutomatedReasoningPolicyCommand,
  DeleteAutomatedReasoningPolicyRequest$,
  DeleteAutomatedReasoningPolicyResponse$,
  DeleteAutomatedReasoningPolicyTestCase$,
  DeleteAutomatedReasoningPolicyTestCaseCommand,
  DeleteAutomatedReasoningPolicyTestCaseRequest$,
  DeleteAutomatedReasoningPolicyTestCaseResponse$,
  DeleteCustomModel$,
  DeleteCustomModelCommand,
  DeleteCustomModelDeployment$,
  DeleteCustomModelDeploymentCommand,
  DeleteCustomModelDeploymentRequest$,
  DeleteCustomModelDeploymentResponse$,
  DeleteCustomModelRequest$,
  DeleteCustomModelResponse$,
  DeleteEnforcedGuardrailConfiguration$,
  DeleteEnforcedGuardrailConfigurationCommand,
  DeleteEnforcedGuardrailConfigurationRequest$,
  DeleteEnforcedGuardrailConfigurationResponse$,
  DeleteFoundationModelAgreement$,
  DeleteFoundationModelAgreementCommand,
  DeleteFoundationModelAgreementRequest$,
  DeleteFoundationModelAgreementResponse$,
  DeleteGuardrail$,
  DeleteGuardrailCommand,
  DeleteGuardrailRequest$,
  DeleteGuardrailResponse$,
  DeleteImportedModel$,
  DeleteImportedModelCommand,
  DeleteImportedModelRequest$,
  DeleteImportedModelResponse$,
  DeleteInferenceProfile$,
  DeleteInferenceProfileCommand,
  DeleteInferenceProfileRequest$,
  DeleteInferenceProfileResponse$,
  DeleteMarketplaceModelEndpoint$,
  DeleteMarketplaceModelEndpointCommand,
  DeleteMarketplaceModelEndpointRequest$,
  DeleteMarketplaceModelEndpointResponse$,
  DeleteModelInvocationLoggingConfiguration$,
  DeleteModelInvocationLoggingConfigurationCommand,
  DeleteModelInvocationLoggingConfigurationRequest$,
  DeleteModelInvocationLoggingConfigurationResponse$,
  DeletePromptRouter$,
  DeletePromptRouterCommand,
  DeletePromptRouterRequest$,
  DeletePromptRouterResponse$,
  DeleteProvisionedModelThroughput$,
  DeleteProvisionedModelThroughputCommand,
  DeleteProvisionedModelThroughputRequest$,
  DeleteProvisionedModelThroughputResponse$,
  DeregisterMarketplaceModelEndpoint$,
  DeregisterMarketplaceModelEndpointCommand,
  DeregisterMarketplaceModelEndpointRequest$,
  DeregisterMarketplaceModelEndpointResponse$,
  DimensionalPriceRate$,
  DistillationConfig$,
  EndpointConfig$,
  EntitlementAvailability,
  EvaluationBedrockModel$,
  EvaluationConfig$,
  EvaluationDataset$,
  EvaluationDatasetLocation$,
  EvaluationDatasetMetricConfig$,
  EvaluationInferenceConfig$,
  EvaluationInferenceConfigSummary$,
  EvaluationJobStatus,
  EvaluationJobType,
  EvaluationModelConfig$,
  EvaluationModelConfigSummary$,
  EvaluationOutputDataConfig$,
  EvaluationPrecomputedInferenceSource$,
  EvaluationPrecomputedRagSourceConfig$,
  EvaluationPrecomputedRetrieveAndGenerateSourceConfig$,
  EvaluationPrecomputedRetrieveSourceConfig$,
  EvaluationRagConfigSummary$,
  EvaluationSummary$,
  EvaluationTaskType,
  EvaluatorModelConfig$,
  ExportAutomatedReasoningPolicyVersion$,
  ExportAutomatedReasoningPolicyVersionCommand,
  ExportAutomatedReasoningPolicyVersionRequest$,
  ExportAutomatedReasoningPolicyVersionResponse$,
  ExternalSource$,
  ExternalSourceType,
  ExternalSourcesGenerationConfiguration$,
  ExternalSourcesRetrieveAndGenerateConfiguration$,
  FieldForReranking$,
  FilterAttribute$,
  FineTuningJobStatus,
  FoundationModelDetails$,
  FoundationModelLifecycle$,
  FoundationModelLifecycleStatus,
  FoundationModelSummary$,
  GenerationConfiguration$,
  GetAutomatedReasoningPolicy$,
  GetAutomatedReasoningPolicyAnnotations$,
  GetAutomatedReasoningPolicyAnnotationsCommand,
  GetAutomatedReasoningPolicyAnnotationsRequest$,
  GetAutomatedReasoningPolicyAnnotationsResponse$,
  GetAutomatedReasoningPolicyBuildWorkflow$,
  GetAutomatedReasoningPolicyBuildWorkflowCommand,
  GetAutomatedReasoningPolicyBuildWorkflowRequest$,
  GetAutomatedReasoningPolicyBuildWorkflowResponse$,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssets$,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest$,
  GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse$,
  GetAutomatedReasoningPolicyCommand,
  GetAutomatedReasoningPolicyNextScenario$,
  GetAutomatedReasoningPolicyNextScenarioCommand,
  GetAutomatedReasoningPolicyNextScenarioRequest$,
  GetAutomatedReasoningPolicyNextScenarioResponse$,
  GetAutomatedReasoningPolicyRequest$,
  GetAutomatedReasoningPolicyResponse$,
  GetAutomatedReasoningPolicyTestCase$,
  GetAutomatedReasoningPolicyTestCaseCommand,
  GetAutomatedReasoningPolicyTestCaseRequest$,
  GetAutomatedReasoningPolicyTestCaseResponse$,
  GetAutomatedReasoningPolicyTestResult$,
  GetAutomatedReasoningPolicyTestResultCommand,
  GetAutomatedReasoningPolicyTestResultRequest$,
  GetAutomatedReasoningPolicyTestResultResponse$,
  GetCustomModel$,
  GetCustomModelCommand,
  GetCustomModelDeployment$,
  GetCustomModelDeploymentCommand,
  GetCustomModelDeploymentRequest$,
  GetCustomModelDeploymentResponse$,
  GetCustomModelRequest$,
  GetCustomModelResponse$,
  GetEvaluationJob$,
  GetEvaluationJobCommand,
  GetEvaluationJobRequest$,
  GetEvaluationJobResponse$,
  GetFoundationModel$,
  GetFoundationModelAvailability$,
  GetFoundationModelAvailabilityCommand,
  GetFoundationModelAvailabilityRequest$,
  GetFoundationModelAvailabilityResponse$,
  GetFoundationModelCommand,
  GetFoundationModelRequest$,
  GetFoundationModelResponse$,
  GetGuardrail$,
  GetGuardrailCommand,
  GetGuardrailRequest$,
  GetGuardrailResponse$,
  GetImportedModel$,
  GetImportedModelCommand,
  GetImportedModelRequest$,
  GetImportedModelResponse$,
  GetInferenceProfile$,
  GetInferenceProfileCommand,
  GetInferenceProfileRequest$,
  GetInferenceProfileResponse$,
  GetMarketplaceModelEndpoint$,
  GetMarketplaceModelEndpointCommand,
  GetMarketplaceModelEndpointRequest$,
  GetMarketplaceModelEndpointResponse$,
  GetModelCopyJob$,
  GetModelCopyJobCommand,
  GetModelCopyJobRequest$,
  GetModelCopyJobResponse$,
  GetModelCustomizationJob$,
  GetModelCustomizationJobCommand,
  GetModelCustomizationJobRequest$,
  GetModelCustomizationJobResponse$,
  GetModelImportJob$,
  GetModelImportJobCommand,
  GetModelImportJobRequest$,
  GetModelImportJobResponse$,
  GetModelInvocationJob$,
  GetModelInvocationJobCommand,
  GetModelInvocationJobRequest$,
  GetModelInvocationJobResponse$,
  GetModelInvocationLoggingConfiguration$,
  GetModelInvocationLoggingConfigurationCommand,
  GetModelInvocationLoggingConfigurationRequest$,
  GetModelInvocationLoggingConfigurationResponse$,
  GetPromptRouter$,
  GetPromptRouterCommand,
  GetPromptRouterRequest$,
  GetPromptRouterResponse$,
  GetProvisionedModelThroughput$,
  GetProvisionedModelThroughputCommand,
  GetProvisionedModelThroughputRequest$,
  GetProvisionedModelThroughputResponse$,
  GetUseCaseForModelAccess$,
  GetUseCaseForModelAccessCommand,
  GetUseCaseForModelAccessRequest$,
  GetUseCaseForModelAccessResponse$,
  GraderConfig$,
  GuardrailAutomatedReasoningPolicy$,
  GuardrailAutomatedReasoningPolicyConfig$,
  GuardrailConfiguration$,
  GuardrailContentFilter$,
  GuardrailContentFilterAction,
  GuardrailContentFilterConfig$,
  GuardrailContentFilterType,
  GuardrailContentFiltersTier$,
  GuardrailContentFiltersTierConfig$,
  GuardrailContentFiltersTierName,
  GuardrailContentPolicy$,
  GuardrailContentPolicyConfig$,
  GuardrailContextualGroundingAction,
  GuardrailContextualGroundingFilter$,
  GuardrailContextualGroundingFilterConfig$,
  GuardrailContextualGroundingFilterType,
  GuardrailContextualGroundingPolicy$,
  GuardrailContextualGroundingPolicyConfig$,
  GuardrailCrossRegionConfig$,
  GuardrailCrossRegionDetails$,
  GuardrailFilterStrength,
  GuardrailManagedWords$,
  GuardrailManagedWordsConfig$,
  GuardrailManagedWordsType,
  GuardrailModality,
  GuardrailPiiEntity$,
  GuardrailPiiEntityConfig$,
  GuardrailPiiEntityType,
  GuardrailRegex$,
  GuardrailRegexConfig$,
  GuardrailSensitiveInformationAction,
  GuardrailSensitiveInformationPolicy$,
  GuardrailSensitiveInformationPolicyConfig$,
  GuardrailStatus,
  GuardrailSummary$,
  GuardrailTopic$,
  GuardrailTopicAction,
  GuardrailTopicConfig$,
  GuardrailTopicPolicy$,
  GuardrailTopicPolicyConfig$,
  GuardrailTopicType,
  GuardrailTopicsTier$,
  GuardrailTopicsTierConfig$,
  GuardrailTopicsTierName,
  GuardrailWord$,
  GuardrailWordAction,
  GuardrailWordConfig$,
  GuardrailWordPolicy$,
  GuardrailWordPolicyConfig$,
  HumanEvaluationConfig$,
  HumanEvaluationCustomMetric$,
  HumanWorkflowConfig$,
  ImplicitFilterConfiguration$,
  ImportedModelSummary$,
  InferenceProfileModel$,
  InferenceProfileModelSource$,
  InferenceProfileStatus,
  InferenceProfileSummary$,
  InferenceProfileType,
  InferenceType,
  InputTags,
  InternalServerException,
  InternalServerException$,
  InvocationLogSource$,
  InvocationLogsConfig$,
  JobStatusDetails,
  KbInferenceConfig$,
  KnowledgeBaseConfig$,
  KnowledgeBaseRetrievalConfiguration$,
  KnowledgeBaseRetrieveAndGenerateConfiguration$,
  KnowledgeBaseVectorSearchConfiguration$,
  LambdaGraderConfig$,
  LegalTerm$,
  ListAutomatedReasoningPolicies$,
  ListAutomatedReasoningPoliciesCommand,
  ListAutomatedReasoningPoliciesRequest$,
  ListAutomatedReasoningPoliciesResponse$,
  ListAutomatedReasoningPolicyBuildWorkflows$,
  ListAutomatedReasoningPolicyBuildWorkflowsCommand,
  ListAutomatedReasoningPolicyBuildWorkflowsRequest$,
  ListAutomatedReasoningPolicyBuildWorkflowsResponse$,
  ListAutomatedReasoningPolicyTestCases$,
  ListAutomatedReasoningPolicyTestCasesCommand,
  ListAutomatedReasoningPolicyTestCasesRequest$,
  ListAutomatedReasoningPolicyTestCasesResponse$,
  ListAutomatedReasoningPolicyTestResults$,
  ListAutomatedReasoningPolicyTestResultsCommand,
  ListAutomatedReasoningPolicyTestResultsRequest$,
  ListAutomatedReasoningPolicyTestResultsResponse$,
  ListCustomModelDeployments$,
  ListCustomModelDeploymentsCommand,
  ListCustomModelDeploymentsRequest$,
  ListCustomModelDeploymentsResponse$,
  ListCustomModels$,
  ListCustomModelsCommand,
  ListCustomModelsRequest$,
  ListCustomModelsResponse$,
  ListEnforcedGuardrailsConfiguration$,
  ListEnforcedGuardrailsConfigurationCommand,
  ListEnforcedGuardrailsConfigurationRequest$,
  ListEnforcedGuardrailsConfigurationResponse$,
  ListEvaluationJobs$,
  ListEvaluationJobsCommand,
  ListEvaluationJobsRequest$,
  ListEvaluationJobsResponse$,
  ListFoundationModelAgreementOffers$,
  ListFoundationModelAgreementOffersCommand,
  ListFoundationModelAgreementOffersRequest$,
  ListFoundationModelAgreementOffersResponse$,
  ListFoundationModels$,
  ListFoundationModelsCommand,
  ListFoundationModelsRequest$,
  ListFoundationModelsResponse$,
  ListGuardrails$,
  ListGuardrailsCommand,
  ListGuardrailsRequest$,
  ListGuardrailsResponse$,
  ListImportedModels$,
  ListImportedModelsCommand,
  ListImportedModelsRequest$,
  ListImportedModelsResponse$,
  ListInferenceProfiles$,
  ListInferenceProfilesCommand,
  ListInferenceProfilesRequest$,
  ListInferenceProfilesResponse$,
  ListMarketplaceModelEndpoints$,
  ListMarketplaceModelEndpointsCommand,
  ListMarketplaceModelEndpointsRequest$,
  ListMarketplaceModelEndpointsResponse$,
  ListModelCopyJobs$,
  ListModelCopyJobsCommand,
  ListModelCopyJobsRequest$,
  ListModelCopyJobsResponse$,
  ListModelCustomizationJobs$,
  ListModelCustomizationJobsCommand,
  ListModelCustomizationJobsRequest$,
  ListModelCustomizationJobsResponse$,
  ListModelImportJobs$,
  ListModelImportJobsCommand,
  ListModelImportJobsRequest$,
  ListModelImportJobsResponse$,
  ListModelInvocationJobs$,
  ListModelInvocationJobsCommand,
  ListModelInvocationJobsRequest$,
  ListModelInvocationJobsResponse$,
  ListPromptRouters$,
  ListPromptRoutersCommand,
  ListPromptRoutersRequest$,
  ListPromptRoutersResponse$,
  ListProvisionedModelThroughputs$,
  ListProvisionedModelThroughputsCommand,
  ListProvisionedModelThroughputsRequest$,
  ListProvisionedModelThroughputsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LoggingConfig$,
  MarketplaceModelEndpoint$,
  MarketplaceModelEndpointSummary$,
  MetadataAttributeSchema$,
  MetadataConfigurationForReranking$,
  ModelCopyJobStatus,
  ModelCopyJobSummary$,
  ModelCustomization,
  ModelCustomizationJobStatus,
  ModelCustomizationJobSummary$,
  ModelDataSource$,
  ModelImportJobStatus,
  ModelImportJobSummary$,
  ModelInvocationJobInputDataConfig$,
  ModelInvocationJobOutputDataConfig$,
  ModelInvocationJobS3InputDataConfig$,
  ModelInvocationJobS3OutputDataConfig$,
  ModelInvocationJobStatus,
  ModelInvocationJobSummary$,
  ModelModality,
  ModelStatus,
  Offer$,
  OfferType,
  OrchestrationConfiguration$,
  OutputDataConfig$,
  PerformanceConfigLatency,
  PerformanceConfiguration$,
  PricingTerm$,
  PromptRouterStatus,
  PromptRouterSummary$,
  PromptRouterTargetModel$,
  PromptRouterType,
  PromptTemplate$,
  ProvisionedModelStatus,
  ProvisionedModelSummary$,
  PutEnforcedGuardrailConfiguration$,
  PutEnforcedGuardrailConfigurationCommand,
  PutEnforcedGuardrailConfigurationRequest$,
  PutEnforcedGuardrailConfigurationResponse$,
  PutModelInvocationLoggingConfiguration$,
  PutModelInvocationLoggingConfigurationCommand,
  PutModelInvocationLoggingConfigurationRequest$,
  PutModelInvocationLoggingConfigurationResponse$,
  PutUseCaseForModelAccess$,
  PutUseCaseForModelAccessCommand,
  PutUseCaseForModelAccessRequest$,
  PutUseCaseForModelAccessResponse$,
  QueryTransformationConfiguration$,
  QueryTransformationType,
  RAGConfig$,
  RFTConfig$,
  RFTHyperParameters$,
  RatingScaleItem$,
  RatingScaleItemValue$,
  ReasoningEffort,
  RegionAvailability,
  RegisterMarketplaceModelEndpoint$,
  RegisterMarketplaceModelEndpointCommand,
  RegisterMarketplaceModelEndpointRequest$,
  RegisterMarketplaceModelEndpointResponse$,
  RequestMetadataBaseFilters$,
  RequestMetadataFilters$,
  RerankingMetadataSelectionMode,
  RerankingMetadataSelectiveModeConfiguration$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RetrievalFilter$,
  RetrieveAndGenerateConfiguration$,
  RetrieveAndGenerateType,
  RetrieveConfig$,
  RoutingCriteria$,
  S3Config$,
  S3DataSource$,
  S3InputFormat,
  S3ObjectDoc$,
  SageMakerEndpoint$,
  SearchType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SortByProvisionedModels,
  SortJobsBy,
  SortModelsBy,
  SortOrder,
  StartAutomatedReasoningPolicyBuildWorkflow$,
  StartAutomatedReasoningPolicyBuildWorkflowCommand,
  StartAutomatedReasoningPolicyBuildWorkflowRequest$,
  StartAutomatedReasoningPolicyBuildWorkflowResponse$,
  StartAutomatedReasoningPolicyTestWorkflow$,
  StartAutomatedReasoningPolicyTestWorkflowCommand,
  StartAutomatedReasoningPolicyTestWorkflowRequest$,
  StartAutomatedReasoningPolicyTestWorkflowResponse$,
  Status,
  StatusDetails$,
  StopEvaluationJob$,
  StopEvaluationJobCommand,
  StopEvaluationJobRequest$,
  StopEvaluationJobResponse$,
  StopModelCustomizationJob$,
  StopModelCustomizationJobCommand,
  StopModelCustomizationJobRequest$,
  StopModelCustomizationJobResponse$,
  StopModelInvocationJob$,
  StopModelInvocationJobCommand,
  StopModelInvocationJobRequest$,
  StopModelInvocationJobResponse$,
  SupportTerm$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TeacherModelConfig$,
  TermDetails$,
  TextInferenceConfig$,
  ThrottlingException,
  ThrottlingException$,
  TooManyTagsException,
  TooManyTagsException$,
  TrainingDataConfig$,
  TrainingDetails$,
  TrainingMetrics$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAutomatedReasoningPolicy$,
  UpdateAutomatedReasoningPolicyAnnotations$,
  UpdateAutomatedReasoningPolicyAnnotationsCommand,
  UpdateAutomatedReasoningPolicyAnnotationsRequest$,
  UpdateAutomatedReasoningPolicyAnnotationsResponse$,
  UpdateAutomatedReasoningPolicyCommand,
  UpdateAutomatedReasoningPolicyRequest$,
  UpdateAutomatedReasoningPolicyResponse$,
  UpdateAutomatedReasoningPolicyTestCase$,
  UpdateAutomatedReasoningPolicyTestCaseCommand,
  UpdateAutomatedReasoningPolicyTestCaseRequest$,
  UpdateAutomatedReasoningPolicyTestCaseResponse$,
  UpdateCustomModelDeployment$,
  UpdateCustomModelDeploymentCommand,
  UpdateCustomModelDeploymentRequest$,
  UpdateCustomModelDeploymentResponse$,
  UpdateGuardrail$,
  UpdateGuardrailCommand,
  UpdateGuardrailRequest$,
  UpdateGuardrailResponse$,
  UpdateMarketplaceModelEndpoint$,
  UpdateMarketplaceModelEndpointCommand,
  UpdateMarketplaceModelEndpointRequest$,
  UpdateMarketplaceModelEndpointResponse$,
  UpdateProvisionedModelThroughput$,
  UpdateProvisionedModelThroughputCommand,
  UpdateProvisionedModelThroughputRequest$,
  UpdateProvisionedModelThroughputResponse$,
  ValidationDataConfig$,
  ValidationDetails$,
  ValidationException,
  ValidationException$,
  Validator$,
  ValidatorMetric$,
  ValidityTerm$,
  VectorSearchBedrockRerankingConfiguration$,
  VectorSearchBedrockRerankingModelConfiguration$,
  VectorSearchRerankingConfiguration$,
  VectorSearchRerankingConfigurationType,
  VpcConfig$,
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
assert(typeof BatchDeleteEvaluationJob$ === "object");
assert(typeof CancelAutomatedReasoningPolicyBuildWorkflowCommand === "function");
assert(typeof CancelAutomatedReasoningPolicyBuildWorkflow$ === "object");
assert(typeof CreateAutomatedReasoningPolicyCommand === "function");
assert(typeof CreateAutomatedReasoningPolicy$ === "object");
assert(typeof CreateAutomatedReasoningPolicyTestCaseCommand === "function");
assert(typeof CreateAutomatedReasoningPolicyTestCase$ === "object");
assert(typeof CreateAutomatedReasoningPolicyVersionCommand === "function");
assert(typeof CreateAutomatedReasoningPolicyVersion$ === "object");
assert(typeof CreateCustomModelCommand === "function");
assert(typeof CreateCustomModel$ === "object");
assert(typeof CreateCustomModelDeploymentCommand === "function");
assert(typeof CreateCustomModelDeployment$ === "object");
assert(typeof CreateEvaluationJobCommand === "function");
assert(typeof CreateEvaluationJob$ === "object");
assert(typeof CreateFoundationModelAgreementCommand === "function");
assert(typeof CreateFoundationModelAgreement$ === "object");
assert(typeof CreateGuardrailCommand === "function");
assert(typeof CreateGuardrail$ === "object");
assert(typeof CreateGuardrailVersionCommand === "function");
assert(typeof CreateGuardrailVersion$ === "object");
assert(typeof CreateInferenceProfileCommand === "function");
assert(typeof CreateInferenceProfile$ === "object");
assert(typeof CreateMarketplaceModelEndpointCommand === "function");
assert(typeof CreateMarketplaceModelEndpoint$ === "object");
assert(typeof CreateModelCopyJobCommand === "function");
assert(typeof CreateModelCopyJob$ === "object");
assert(typeof CreateModelCustomizationJobCommand === "function");
assert(typeof CreateModelCustomizationJob$ === "object");
assert(typeof CreateModelImportJobCommand === "function");
assert(typeof CreateModelImportJob$ === "object");
assert(typeof CreateModelInvocationJobCommand === "function");
assert(typeof CreateModelInvocationJob$ === "object");
assert(typeof CreatePromptRouterCommand === "function");
assert(typeof CreatePromptRouter$ === "object");
assert(typeof CreateProvisionedModelThroughputCommand === "function");
assert(typeof CreateProvisionedModelThroughput$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyCommand === "function");
assert(typeof DeleteAutomatedReasoningPolicy$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyBuildWorkflowCommand === "function");
assert(typeof DeleteAutomatedReasoningPolicyBuildWorkflow$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyTestCaseCommand === "function");
assert(typeof DeleteAutomatedReasoningPolicyTestCase$ === "object");
assert(typeof DeleteCustomModelCommand === "function");
assert(typeof DeleteCustomModel$ === "object");
assert(typeof DeleteCustomModelDeploymentCommand === "function");
assert(typeof DeleteCustomModelDeployment$ === "object");
assert(typeof DeleteEnforcedGuardrailConfigurationCommand === "function");
assert(typeof DeleteEnforcedGuardrailConfiguration$ === "object");
assert(typeof DeleteFoundationModelAgreementCommand === "function");
assert(typeof DeleteFoundationModelAgreement$ === "object");
assert(typeof DeleteGuardrailCommand === "function");
assert(typeof DeleteGuardrail$ === "object");
assert(typeof DeleteImportedModelCommand === "function");
assert(typeof DeleteImportedModel$ === "object");
assert(typeof DeleteInferenceProfileCommand === "function");
assert(typeof DeleteInferenceProfile$ === "object");
assert(typeof DeleteMarketplaceModelEndpointCommand === "function");
assert(typeof DeleteMarketplaceModelEndpoint$ === "object");
assert(typeof DeleteModelInvocationLoggingConfigurationCommand === "function");
assert(typeof DeleteModelInvocationLoggingConfiguration$ === "object");
assert(typeof DeletePromptRouterCommand === "function");
assert(typeof DeletePromptRouter$ === "object");
assert(typeof DeleteProvisionedModelThroughputCommand === "function");
assert(typeof DeleteProvisionedModelThroughput$ === "object");
assert(typeof DeregisterMarketplaceModelEndpointCommand === "function");
assert(typeof DeregisterMarketplaceModelEndpoint$ === "object");
assert(typeof ExportAutomatedReasoningPolicyVersionCommand === "function");
assert(typeof ExportAutomatedReasoningPolicyVersion$ === "object");
assert(typeof GetAutomatedReasoningPolicyCommand === "function");
assert(typeof GetAutomatedReasoningPolicy$ === "object");
assert(typeof GetAutomatedReasoningPolicyAnnotationsCommand === "function");
assert(typeof GetAutomatedReasoningPolicyAnnotations$ === "object");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowCommand === "function");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflow$ === "object");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowResultAssetsCommand === "function");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowResultAssets$ === "object");
assert(typeof GetAutomatedReasoningPolicyNextScenarioCommand === "function");
assert(typeof GetAutomatedReasoningPolicyNextScenario$ === "object");
assert(typeof GetAutomatedReasoningPolicyTestCaseCommand === "function");
assert(typeof GetAutomatedReasoningPolicyTestCase$ === "object");
assert(typeof GetAutomatedReasoningPolicyTestResultCommand === "function");
assert(typeof GetAutomatedReasoningPolicyTestResult$ === "object");
assert(typeof GetCustomModelCommand === "function");
assert(typeof GetCustomModel$ === "object");
assert(typeof GetCustomModelDeploymentCommand === "function");
assert(typeof GetCustomModelDeployment$ === "object");
assert(typeof GetEvaluationJobCommand === "function");
assert(typeof GetEvaluationJob$ === "object");
assert(typeof GetFoundationModelCommand === "function");
assert(typeof GetFoundationModel$ === "object");
assert(typeof GetFoundationModelAvailabilityCommand === "function");
assert(typeof GetFoundationModelAvailability$ === "object");
assert(typeof GetGuardrailCommand === "function");
assert(typeof GetGuardrail$ === "object");
assert(typeof GetImportedModelCommand === "function");
assert(typeof GetImportedModel$ === "object");
assert(typeof GetInferenceProfileCommand === "function");
assert(typeof GetInferenceProfile$ === "object");
assert(typeof GetMarketplaceModelEndpointCommand === "function");
assert(typeof GetMarketplaceModelEndpoint$ === "object");
assert(typeof GetModelCopyJobCommand === "function");
assert(typeof GetModelCopyJob$ === "object");
assert(typeof GetModelCustomizationJobCommand === "function");
assert(typeof GetModelCustomizationJob$ === "object");
assert(typeof GetModelImportJobCommand === "function");
assert(typeof GetModelImportJob$ === "object");
assert(typeof GetModelInvocationJobCommand === "function");
assert(typeof GetModelInvocationJob$ === "object");
assert(typeof GetModelInvocationLoggingConfigurationCommand === "function");
assert(typeof GetModelInvocationLoggingConfiguration$ === "object");
assert(typeof GetPromptRouterCommand === "function");
assert(typeof GetPromptRouter$ === "object");
assert(typeof GetProvisionedModelThroughputCommand === "function");
assert(typeof GetProvisionedModelThroughput$ === "object");
assert(typeof GetUseCaseForModelAccessCommand === "function");
assert(typeof GetUseCaseForModelAccess$ === "object");
assert(typeof ListAutomatedReasoningPoliciesCommand === "function");
assert(typeof ListAutomatedReasoningPolicies$ === "object");
assert(typeof ListAutomatedReasoningPolicyBuildWorkflowsCommand === "function");
assert(typeof ListAutomatedReasoningPolicyBuildWorkflows$ === "object");
assert(typeof ListAutomatedReasoningPolicyTestCasesCommand === "function");
assert(typeof ListAutomatedReasoningPolicyTestCases$ === "object");
assert(typeof ListAutomatedReasoningPolicyTestResultsCommand === "function");
assert(typeof ListAutomatedReasoningPolicyTestResults$ === "object");
assert(typeof ListCustomModelDeploymentsCommand === "function");
assert(typeof ListCustomModelDeployments$ === "object");
assert(typeof ListCustomModelsCommand === "function");
assert(typeof ListCustomModels$ === "object");
assert(typeof ListEnforcedGuardrailsConfigurationCommand === "function");
assert(typeof ListEnforcedGuardrailsConfiguration$ === "object");
assert(typeof ListEvaluationJobsCommand === "function");
assert(typeof ListEvaluationJobs$ === "object");
assert(typeof ListFoundationModelAgreementOffersCommand === "function");
assert(typeof ListFoundationModelAgreementOffers$ === "object");
assert(typeof ListFoundationModelsCommand === "function");
assert(typeof ListFoundationModels$ === "object");
assert(typeof ListGuardrailsCommand === "function");
assert(typeof ListGuardrails$ === "object");
assert(typeof ListImportedModelsCommand === "function");
assert(typeof ListImportedModels$ === "object");
assert(typeof ListInferenceProfilesCommand === "function");
assert(typeof ListInferenceProfiles$ === "object");
assert(typeof ListMarketplaceModelEndpointsCommand === "function");
assert(typeof ListMarketplaceModelEndpoints$ === "object");
assert(typeof ListModelCopyJobsCommand === "function");
assert(typeof ListModelCopyJobs$ === "object");
assert(typeof ListModelCustomizationJobsCommand === "function");
assert(typeof ListModelCustomizationJobs$ === "object");
assert(typeof ListModelImportJobsCommand === "function");
assert(typeof ListModelImportJobs$ === "object");
assert(typeof ListModelInvocationJobsCommand === "function");
assert(typeof ListModelInvocationJobs$ === "object");
assert(typeof ListPromptRoutersCommand === "function");
assert(typeof ListPromptRouters$ === "object");
assert(typeof ListProvisionedModelThroughputsCommand === "function");
assert(typeof ListProvisionedModelThroughputs$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutEnforcedGuardrailConfigurationCommand === "function");
assert(typeof PutEnforcedGuardrailConfiguration$ === "object");
assert(typeof PutModelInvocationLoggingConfigurationCommand === "function");
assert(typeof PutModelInvocationLoggingConfiguration$ === "object");
assert(typeof PutUseCaseForModelAccessCommand === "function");
assert(typeof PutUseCaseForModelAccess$ === "object");
assert(typeof RegisterMarketplaceModelEndpointCommand === "function");
assert(typeof RegisterMarketplaceModelEndpoint$ === "object");
assert(typeof StartAutomatedReasoningPolicyBuildWorkflowCommand === "function");
assert(typeof StartAutomatedReasoningPolicyBuildWorkflow$ === "object");
assert(typeof StartAutomatedReasoningPolicyTestWorkflowCommand === "function");
assert(typeof StartAutomatedReasoningPolicyTestWorkflow$ === "object");
assert(typeof StopEvaluationJobCommand === "function");
assert(typeof StopEvaluationJob$ === "object");
assert(typeof StopModelCustomizationJobCommand === "function");
assert(typeof StopModelCustomizationJob$ === "object");
assert(typeof StopModelInvocationJobCommand === "function");
assert(typeof StopModelInvocationJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyCommand === "function");
assert(typeof UpdateAutomatedReasoningPolicy$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyAnnotationsCommand === "function");
assert(typeof UpdateAutomatedReasoningPolicyAnnotations$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyTestCaseCommand === "function");
assert(typeof UpdateAutomatedReasoningPolicyTestCase$ === "object");
assert(typeof UpdateCustomModelDeploymentCommand === "function");
assert(typeof UpdateCustomModelDeployment$ === "object");
assert(typeof UpdateGuardrailCommand === "function");
assert(typeof UpdateGuardrail$ === "object");
assert(typeof UpdateMarketplaceModelEndpointCommand === "function");
assert(typeof UpdateMarketplaceModelEndpoint$ === "object");
assert(typeof UpdateProvisionedModelThroughputCommand === "function");
assert(typeof UpdateProvisionedModelThroughput$ === "object");
// structural schemas
assert(typeof AccountEnforcedGuardrailInferenceInputConfiguration$ === "object");
assert(typeof AccountEnforcedGuardrailOutputConfiguration$ === "object");
assert(typeof AgreementAvailability$ === "object");
assert(typeof AutomatedEvaluationConfig$ === "object");
assert(typeof AutomatedEvaluationCustomMetricConfig$ === "object");
assert(typeof AutomatedEvaluationCustomMetricSource$ === "object");
assert(typeof AutomatedReasoningCheckFinding$ === "object");
assert(typeof AutomatedReasoningCheckImpossibleFinding$ === "object");
assert(typeof AutomatedReasoningCheckInputTextReference$ === "object");
assert(typeof AutomatedReasoningCheckInvalidFinding$ === "object");
assert(typeof AutomatedReasoningCheckLogicWarning$ === "object");
assert(typeof AutomatedReasoningCheckNoTranslationsFinding$ === "object");
assert(typeof AutomatedReasoningCheckRule$ === "object");
assert(typeof AutomatedReasoningCheckSatisfiableFinding$ === "object");
assert(typeof AutomatedReasoningCheckScenario$ === "object");
assert(typeof AutomatedReasoningCheckTooComplexFinding$ === "object");
assert(typeof AutomatedReasoningCheckTranslation$ === "object");
assert(typeof AutomatedReasoningCheckTranslationAmbiguousFinding$ === "object");
assert(typeof AutomatedReasoningCheckTranslationOption$ === "object");
assert(typeof AutomatedReasoningCheckValidFinding$ === "object");
assert(typeof AutomatedReasoningLogicStatement$ === "object");
assert(typeof AutomatedReasoningPolicyAddRuleAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyAddRuleFromNaturalLanguageAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyAddRuleMutation$ === "object");
assert(typeof AutomatedReasoningPolicyAddTypeAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyAddTypeMutation$ === "object");
assert(typeof AutomatedReasoningPolicyAddTypeValue$ === "object");
assert(typeof AutomatedReasoningPolicyAddVariableAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyAddVariableMutation$ === "object");
assert(typeof AutomatedReasoningPolicyAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyBuildLog$ === "object");
assert(typeof AutomatedReasoningPolicyBuildLogEntry$ === "object");
assert(typeof AutomatedReasoningPolicyBuildResultAssets$ === "object");
assert(typeof AutomatedReasoningPolicyBuildStep$ === "object");
assert(typeof AutomatedReasoningPolicyBuildStepContext$ === "object");
assert(typeof AutomatedReasoningPolicyBuildStepMessage$ === "object");
assert(typeof AutomatedReasoningPolicyBuildWorkflowDocument$ === "object");
assert(typeof AutomatedReasoningPolicyBuildWorkflowRepairContent$ === "object");
assert(typeof AutomatedReasoningPolicyBuildWorkflowSource$ === "object");
assert(typeof AutomatedReasoningPolicyBuildWorkflowSummary$ === "object");
assert(typeof AutomatedReasoningPolicyDefinition$ === "object");
assert(typeof AutomatedReasoningPolicyDefinitionElement$ === "object");
assert(typeof AutomatedReasoningPolicyDefinitionQualityReport$ === "object");
assert(typeof AutomatedReasoningPolicyDefinitionRule$ === "object");
assert(typeof AutomatedReasoningPolicyDefinitionType$ === "object");
assert(typeof AutomatedReasoningPolicyDefinitionTypeValue$ === "object");
assert(typeof AutomatedReasoningPolicyDefinitionTypeValuePair$ === "object");
assert(typeof AutomatedReasoningPolicyDefinitionVariable$ === "object");
assert(typeof AutomatedReasoningPolicyDeleteRuleAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyDeleteRuleMutation$ === "object");
assert(typeof AutomatedReasoningPolicyDeleteTypeAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyDeleteTypeMutation$ === "object");
assert(typeof AutomatedReasoningPolicyDeleteTypeValue$ === "object");
assert(typeof AutomatedReasoningPolicyDeleteVariableAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyDeleteVariableMutation$ === "object");
assert(typeof AutomatedReasoningPolicyDisjointRuleSet$ === "object");
assert(typeof AutomatedReasoningPolicyGeneratedTestCase$ === "object");
assert(typeof AutomatedReasoningPolicyGeneratedTestCases$ === "object");
assert(typeof AutomatedReasoningPolicyIngestContentAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyMutation$ === "object");
assert(typeof AutomatedReasoningPolicyPlanning$ === "object");
assert(typeof AutomatedReasoningPolicyScenario$ === "object");
assert(typeof AutomatedReasoningPolicyScenarios$ === "object");
assert(typeof AutomatedReasoningPolicySummary$ === "object");
assert(typeof AutomatedReasoningPolicyTestCase$ === "object");
assert(typeof AutomatedReasoningPolicyTestResult$ === "object");
assert(typeof AutomatedReasoningPolicyTypeValueAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateFromRuleFeedbackAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateFromScenarioFeedbackAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateRuleAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateRuleMutation$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateTypeAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateTypeMutation$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateTypeValue$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateVariableAnnotation$ === "object");
assert(typeof AutomatedReasoningPolicyUpdateVariableMutation$ === "object");
assert(typeof AutomatedReasoningPolicyWorkflowTypeContent$ === "object");
assert(typeof BatchDeleteEvaluationJobError$ === "object");
assert(typeof BatchDeleteEvaluationJobItem$ === "object");
assert(typeof BatchDeleteEvaluationJobRequest$ === "object");
assert(typeof BatchDeleteEvaluationJobResponse$ === "object");
assert(typeof BedrockEvaluatorModel$ === "object");
assert(typeof ByteContentDoc$ === "object");
assert(typeof CancelAutomatedReasoningPolicyBuildWorkflowRequest$ === "object");
assert(typeof CancelAutomatedReasoningPolicyBuildWorkflowResponse$ === "object");
assert(typeof CloudWatchConfig$ === "object");
assert(typeof CreateAutomatedReasoningPolicyRequest$ === "object");
assert(typeof CreateAutomatedReasoningPolicyResponse$ === "object");
assert(typeof CreateAutomatedReasoningPolicyTestCaseRequest$ === "object");
assert(typeof CreateAutomatedReasoningPolicyTestCaseResponse$ === "object");
assert(typeof CreateAutomatedReasoningPolicyVersionRequest$ === "object");
assert(typeof CreateAutomatedReasoningPolicyVersionResponse$ === "object");
assert(typeof CreateCustomModelDeploymentRequest$ === "object");
assert(typeof CreateCustomModelDeploymentResponse$ === "object");
assert(typeof CreateCustomModelRequest$ === "object");
assert(typeof CreateCustomModelResponse$ === "object");
assert(typeof CreateEvaluationJobRequest$ === "object");
assert(typeof CreateEvaluationJobResponse$ === "object");
assert(typeof CreateFoundationModelAgreementRequest$ === "object");
assert(typeof CreateFoundationModelAgreementResponse$ === "object");
assert(typeof CreateGuardrailRequest$ === "object");
assert(typeof CreateGuardrailResponse$ === "object");
assert(typeof CreateGuardrailVersionRequest$ === "object");
assert(typeof CreateGuardrailVersionResponse$ === "object");
assert(typeof CreateInferenceProfileRequest$ === "object");
assert(typeof CreateInferenceProfileResponse$ === "object");
assert(typeof CreateMarketplaceModelEndpointRequest$ === "object");
assert(typeof CreateMarketplaceModelEndpointResponse$ === "object");
assert(typeof CreateModelCopyJobRequest$ === "object");
assert(typeof CreateModelCopyJobResponse$ === "object");
assert(typeof CreateModelCustomizationJobRequest$ === "object");
assert(typeof CreateModelCustomizationJobResponse$ === "object");
assert(typeof CreateModelImportJobRequest$ === "object");
assert(typeof CreateModelImportJobResponse$ === "object");
assert(typeof CreateModelInvocationJobRequest$ === "object");
assert(typeof CreateModelInvocationJobResponse$ === "object");
assert(typeof CreatePromptRouterRequest$ === "object");
assert(typeof CreatePromptRouterResponse$ === "object");
assert(typeof CreateProvisionedModelThroughputRequest$ === "object");
assert(typeof CreateProvisionedModelThroughputResponse$ === "object");
assert(typeof CustomizationConfig$ === "object");
assert(typeof CustomMetricBedrockEvaluatorModel$ === "object");
assert(typeof CustomMetricDefinition$ === "object");
assert(typeof CustomMetricEvaluatorModelConfig$ === "object");
assert(typeof CustomModelDeploymentSummary$ === "object");
assert(typeof CustomModelDeploymentUpdateDetails$ === "object");
assert(typeof CustomModelSummary$ === "object");
assert(typeof CustomModelUnits$ === "object");
assert(typeof DataProcessingDetails$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyBuildWorkflowRequest$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyBuildWorkflowResponse$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyRequest$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyResponse$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyTestCaseRequest$ === "object");
assert(typeof DeleteAutomatedReasoningPolicyTestCaseResponse$ === "object");
assert(typeof DeleteCustomModelDeploymentRequest$ === "object");
assert(typeof DeleteCustomModelDeploymentResponse$ === "object");
assert(typeof DeleteCustomModelRequest$ === "object");
assert(typeof DeleteCustomModelResponse$ === "object");
assert(typeof DeleteEnforcedGuardrailConfigurationRequest$ === "object");
assert(typeof DeleteEnforcedGuardrailConfigurationResponse$ === "object");
assert(typeof DeleteFoundationModelAgreementRequest$ === "object");
assert(typeof DeleteFoundationModelAgreementResponse$ === "object");
assert(typeof DeleteGuardrailRequest$ === "object");
assert(typeof DeleteGuardrailResponse$ === "object");
assert(typeof DeleteImportedModelRequest$ === "object");
assert(typeof DeleteImportedModelResponse$ === "object");
assert(typeof DeleteInferenceProfileRequest$ === "object");
assert(typeof DeleteInferenceProfileResponse$ === "object");
assert(typeof DeleteMarketplaceModelEndpointRequest$ === "object");
assert(typeof DeleteMarketplaceModelEndpointResponse$ === "object");
assert(typeof DeleteModelInvocationLoggingConfigurationRequest$ === "object");
assert(typeof DeleteModelInvocationLoggingConfigurationResponse$ === "object");
assert(typeof DeletePromptRouterRequest$ === "object");
assert(typeof DeletePromptRouterResponse$ === "object");
assert(typeof DeleteProvisionedModelThroughputRequest$ === "object");
assert(typeof DeleteProvisionedModelThroughputResponse$ === "object");
assert(typeof DeregisterMarketplaceModelEndpointRequest$ === "object");
assert(typeof DeregisterMarketplaceModelEndpointResponse$ === "object");
assert(typeof DimensionalPriceRate$ === "object");
assert(typeof DistillationConfig$ === "object");
assert(typeof EndpointConfig$ === "object");
assert(typeof EvaluationBedrockModel$ === "object");
assert(typeof EvaluationConfig$ === "object");
assert(typeof EvaluationDataset$ === "object");
assert(typeof EvaluationDatasetLocation$ === "object");
assert(typeof EvaluationDatasetMetricConfig$ === "object");
assert(typeof EvaluationInferenceConfig$ === "object");
assert(typeof EvaluationInferenceConfigSummary$ === "object");
assert(typeof EvaluationModelConfig$ === "object");
assert(typeof EvaluationModelConfigSummary$ === "object");
assert(typeof EvaluationOutputDataConfig$ === "object");
assert(typeof EvaluationPrecomputedInferenceSource$ === "object");
assert(typeof EvaluationPrecomputedRagSourceConfig$ === "object");
assert(typeof EvaluationPrecomputedRetrieveAndGenerateSourceConfig$ === "object");
assert(typeof EvaluationPrecomputedRetrieveSourceConfig$ === "object");
assert(typeof EvaluationRagConfigSummary$ === "object");
assert(typeof EvaluationSummary$ === "object");
assert(typeof EvaluatorModelConfig$ === "object");
assert(typeof ExportAutomatedReasoningPolicyVersionRequest$ === "object");
assert(typeof ExportAutomatedReasoningPolicyVersionResponse$ === "object");
assert(typeof ExternalSource$ === "object");
assert(typeof ExternalSourcesGenerationConfiguration$ === "object");
assert(typeof ExternalSourcesRetrieveAndGenerateConfiguration$ === "object");
assert(typeof FieldForReranking$ === "object");
assert(typeof FilterAttribute$ === "object");
assert(typeof FoundationModelDetails$ === "object");
assert(typeof FoundationModelLifecycle$ === "object");
assert(typeof FoundationModelSummary$ === "object");
assert(typeof GenerationConfiguration$ === "object");
assert(typeof GetAutomatedReasoningPolicyAnnotationsRequest$ === "object");
assert(typeof GetAutomatedReasoningPolicyAnnotationsResponse$ === "object");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowRequest$ === "object");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowResponse$ === "object");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowResultAssetsRequest$ === "object");
assert(typeof GetAutomatedReasoningPolicyBuildWorkflowResultAssetsResponse$ === "object");
assert(typeof GetAutomatedReasoningPolicyNextScenarioRequest$ === "object");
assert(typeof GetAutomatedReasoningPolicyNextScenarioResponse$ === "object");
assert(typeof GetAutomatedReasoningPolicyRequest$ === "object");
assert(typeof GetAutomatedReasoningPolicyResponse$ === "object");
assert(typeof GetAutomatedReasoningPolicyTestCaseRequest$ === "object");
assert(typeof GetAutomatedReasoningPolicyTestCaseResponse$ === "object");
assert(typeof GetAutomatedReasoningPolicyTestResultRequest$ === "object");
assert(typeof GetAutomatedReasoningPolicyTestResultResponse$ === "object");
assert(typeof GetCustomModelDeploymentRequest$ === "object");
assert(typeof GetCustomModelDeploymentResponse$ === "object");
assert(typeof GetCustomModelRequest$ === "object");
assert(typeof GetCustomModelResponse$ === "object");
assert(typeof GetEvaluationJobRequest$ === "object");
assert(typeof GetEvaluationJobResponse$ === "object");
assert(typeof GetFoundationModelAvailabilityRequest$ === "object");
assert(typeof GetFoundationModelAvailabilityResponse$ === "object");
assert(typeof GetFoundationModelRequest$ === "object");
assert(typeof GetFoundationModelResponse$ === "object");
assert(typeof GetGuardrailRequest$ === "object");
assert(typeof GetGuardrailResponse$ === "object");
assert(typeof GetImportedModelRequest$ === "object");
assert(typeof GetImportedModelResponse$ === "object");
assert(typeof GetInferenceProfileRequest$ === "object");
assert(typeof GetInferenceProfileResponse$ === "object");
assert(typeof GetMarketplaceModelEndpointRequest$ === "object");
assert(typeof GetMarketplaceModelEndpointResponse$ === "object");
assert(typeof GetModelCopyJobRequest$ === "object");
assert(typeof GetModelCopyJobResponse$ === "object");
assert(typeof GetModelCustomizationJobRequest$ === "object");
assert(typeof GetModelCustomizationJobResponse$ === "object");
assert(typeof GetModelImportJobRequest$ === "object");
assert(typeof GetModelImportJobResponse$ === "object");
assert(typeof GetModelInvocationJobRequest$ === "object");
assert(typeof GetModelInvocationJobResponse$ === "object");
assert(typeof GetModelInvocationLoggingConfigurationRequest$ === "object");
assert(typeof GetModelInvocationLoggingConfigurationResponse$ === "object");
assert(typeof GetPromptRouterRequest$ === "object");
assert(typeof GetPromptRouterResponse$ === "object");
assert(typeof GetProvisionedModelThroughputRequest$ === "object");
assert(typeof GetProvisionedModelThroughputResponse$ === "object");
assert(typeof GetUseCaseForModelAccessRequest$ === "object");
assert(typeof GetUseCaseForModelAccessResponse$ === "object");
assert(typeof GraderConfig$ === "object");
assert(typeof GuardrailAutomatedReasoningPolicy$ === "object");
assert(typeof GuardrailAutomatedReasoningPolicyConfig$ === "object");
assert(typeof GuardrailConfiguration$ === "object");
assert(typeof GuardrailContentFilter$ === "object");
assert(typeof GuardrailContentFilterConfig$ === "object");
assert(typeof GuardrailContentFiltersTier$ === "object");
assert(typeof GuardrailContentFiltersTierConfig$ === "object");
assert(typeof GuardrailContentPolicy$ === "object");
assert(typeof GuardrailContentPolicyConfig$ === "object");
assert(typeof GuardrailContextualGroundingFilter$ === "object");
assert(typeof GuardrailContextualGroundingFilterConfig$ === "object");
assert(typeof GuardrailContextualGroundingPolicy$ === "object");
assert(typeof GuardrailContextualGroundingPolicyConfig$ === "object");
assert(typeof GuardrailCrossRegionConfig$ === "object");
assert(typeof GuardrailCrossRegionDetails$ === "object");
assert(typeof GuardrailManagedWords$ === "object");
assert(typeof GuardrailManagedWordsConfig$ === "object");
assert(typeof GuardrailPiiEntity$ === "object");
assert(typeof GuardrailPiiEntityConfig$ === "object");
assert(typeof GuardrailRegex$ === "object");
assert(typeof GuardrailRegexConfig$ === "object");
assert(typeof GuardrailSensitiveInformationPolicy$ === "object");
assert(typeof GuardrailSensitiveInformationPolicyConfig$ === "object");
assert(typeof GuardrailSummary$ === "object");
assert(typeof GuardrailTopic$ === "object");
assert(typeof GuardrailTopicConfig$ === "object");
assert(typeof GuardrailTopicPolicy$ === "object");
assert(typeof GuardrailTopicPolicyConfig$ === "object");
assert(typeof GuardrailTopicsTier$ === "object");
assert(typeof GuardrailTopicsTierConfig$ === "object");
assert(typeof GuardrailWord$ === "object");
assert(typeof GuardrailWordConfig$ === "object");
assert(typeof GuardrailWordPolicy$ === "object");
assert(typeof GuardrailWordPolicyConfig$ === "object");
assert(typeof HumanEvaluationConfig$ === "object");
assert(typeof HumanEvaluationCustomMetric$ === "object");
assert(typeof HumanWorkflowConfig$ === "object");
assert(typeof ImplicitFilterConfiguration$ === "object");
assert(typeof ImportedModelSummary$ === "object");
assert(typeof InferenceProfileModel$ === "object");
assert(typeof InferenceProfileModelSource$ === "object");
assert(typeof InferenceProfileSummary$ === "object");
assert(typeof InvocationLogsConfig$ === "object");
assert(typeof InvocationLogSource$ === "object");
assert(typeof KbInferenceConfig$ === "object");
assert(typeof KnowledgeBaseConfig$ === "object");
assert(typeof KnowledgeBaseRetrievalConfiguration$ === "object");
assert(typeof KnowledgeBaseRetrieveAndGenerateConfiguration$ === "object");
assert(typeof KnowledgeBaseVectorSearchConfiguration$ === "object");
assert(typeof LambdaGraderConfig$ === "object");
assert(typeof LegalTerm$ === "object");
assert(typeof ListAutomatedReasoningPoliciesRequest$ === "object");
assert(typeof ListAutomatedReasoningPoliciesResponse$ === "object");
assert(typeof ListAutomatedReasoningPolicyBuildWorkflowsRequest$ === "object");
assert(typeof ListAutomatedReasoningPolicyBuildWorkflowsResponse$ === "object");
assert(typeof ListAutomatedReasoningPolicyTestCasesRequest$ === "object");
assert(typeof ListAutomatedReasoningPolicyTestCasesResponse$ === "object");
assert(typeof ListAutomatedReasoningPolicyTestResultsRequest$ === "object");
assert(typeof ListAutomatedReasoningPolicyTestResultsResponse$ === "object");
assert(typeof ListCustomModelDeploymentsRequest$ === "object");
assert(typeof ListCustomModelDeploymentsResponse$ === "object");
assert(typeof ListCustomModelsRequest$ === "object");
assert(typeof ListCustomModelsResponse$ === "object");
assert(typeof ListEnforcedGuardrailsConfigurationRequest$ === "object");
assert(typeof ListEnforcedGuardrailsConfigurationResponse$ === "object");
assert(typeof ListEvaluationJobsRequest$ === "object");
assert(typeof ListEvaluationJobsResponse$ === "object");
assert(typeof ListFoundationModelAgreementOffersRequest$ === "object");
assert(typeof ListFoundationModelAgreementOffersResponse$ === "object");
assert(typeof ListFoundationModelsRequest$ === "object");
assert(typeof ListFoundationModelsResponse$ === "object");
assert(typeof ListGuardrailsRequest$ === "object");
assert(typeof ListGuardrailsResponse$ === "object");
assert(typeof ListImportedModelsRequest$ === "object");
assert(typeof ListImportedModelsResponse$ === "object");
assert(typeof ListInferenceProfilesRequest$ === "object");
assert(typeof ListInferenceProfilesResponse$ === "object");
assert(typeof ListMarketplaceModelEndpointsRequest$ === "object");
assert(typeof ListMarketplaceModelEndpointsResponse$ === "object");
assert(typeof ListModelCopyJobsRequest$ === "object");
assert(typeof ListModelCopyJobsResponse$ === "object");
assert(typeof ListModelCustomizationJobsRequest$ === "object");
assert(typeof ListModelCustomizationJobsResponse$ === "object");
assert(typeof ListModelImportJobsRequest$ === "object");
assert(typeof ListModelImportJobsResponse$ === "object");
assert(typeof ListModelInvocationJobsRequest$ === "object");
assert(typeof ListModelInvocationJobsResponse$ === "object");
assert(typeof ListPromptRoutersRequest$ === "object");
assert(typeof ListPromptRoutersResponse$ === "object");
assert(typeof ListProvisionedModelThroughputsRequest$ === "object");
assert(typeof ListProvisionedModelThroughputsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LoggingConfig$ === "object");
assert(typeof MarketplaceModelEndpoint$ === "object");
assert(typeof MarketplaceModelEndpointSummary$ === "object");
assert(typeof MetadataAttributeSchema$ === "object");
assert(typeof MetadataConfigurationForReranking$ === "object");
assert(typeof ModelCopyJobSummary$ === "object");
assert(typeof ModelCustomizationJobSummary$ === "object");
assert(typeof ModelDataSource$ === "object");
assert(typeof ModelImportJobSummary$ === "object");
assert(typeof ModelInvocationJobInputDataConfig$ === "object");
assert(typeof ModelInvocationJobOutputDataConfig$ === "object");
assert(typeof ModelInvocationJobS3InputDataConfig$ === "object");
assert(typeof ModelInvocationJobS3OutputDataConfig$ === "object");
assert(typeof ModelInvocationJobSummary$ === "object");
assert(typeof Offer$ === "object");
assert(typeof OrchestrationConfiguration$ === "object");
assert(typeof OutputDataConfig$ === "object");
assert(typeof PerformanceConfiguration$ === "object");
assert(typeof PricingTerm$ === "object");
assert(typeof PromptRouterSummary$ === "object");
assert(typeof PromptRouterTargetModel$ === "object");
assert(typeof PromptTemplate$ === "object");
assert(typeof ProvisionedModelSummary$ === "object");
assert(typeof PutEnforcedGuardrailConfigurationRequest$ === "object");
assert(typeof PutEnforcedGuardrailConfigurationResponse$ === "object");
assert(typeof PutModelInvocationLoggingConfigurationRequest$ === "object");
assert(typeof PutModelInvocationLoggingConfigurationResponse$ === "object");
assert(typeof PutUseCaseForModelAccessRequest$ === "object");
assert(typeof PutUseCaseForModelAccessResponse$ === "object");
assert(typeof QueryTransformationConfiguration$ === "object");
assert(typeof RAGConfig$ === "object");
assert(typeof RatingScaleItem$ === "object");
assert(typeof RatingScaleItemValue$ === "object");
assert(typeof RegisterMarketplaceModelEndpointRequest$ === "object");
assert(typeof RegisterMarketplaceModelEndpointResponse$ === "object");
assert(typeof RequestMetadataBaseFilters$ === "object");
assert(typeof RequestMetadataFilters$ === "object");
assert(typeof RerankingMetadataSelectiveModeConfiguration$ === "object");
assert(typeof RetrievalFilter$ === "object");
assert(typeof RetrieveAndGenerateConfiguration$ === "object");
assert(typeof RetrieveConfig$ === "object");
assert(typeof RFTConfig$ === "object");
assert(typeof RFTHyperParameters$ === "object");
assert(typeof RoutingCriteria$ === "object");
assert(typeof S3Config$ === "object");
assert(typeof S3DataSource$ === "object");
assert(typeof S3ObjectDoc$ === "object");
assert(typeof SageMakerEndpoint$ === "object");
assert(typeof StartAutomatedReasoningPolicyBuildWorkflowRequest$ === "object");
assert(typeof StartAutomatedReasoningPolicyBuildWorkflowResponse$ === "object");
assert(typeof StartAutomatedReasoningPolicyTestWorkflowRequest$ === "object");
assert(typeof StartAutomatedReasoningPolicyTestWorkflowResponse$ === "object");
assert(typeof StatusDetails$ === "object");
assert(typeof StopEvaluationJobRequest$ === "object");
assert(typeof StopEvaluationJobResponse$ === "object");
assert(typeof StopModelCustomizationJobRequest$ === "object");
assert(typeof StopModelCustomizationJobResponse$ === "object");
assert(typeof StopModelInvocationJobRequest$ === "object");
assert(typeof StopModelInvocationJobResponse$ === "object");
assert(typeof SupportTerm$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TeacherModelConfig$ === "object");
assert(typeof TermDetails$ === "object");
assert(typeof TextInferenceConfig$ === "object");
assert(typeof TrainingDataConfig$ === "object");
assert(typeof TrainingDetails$ === "object");
assert(typeof TrainingMetrics$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyAnnotationsRequest$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyAnnotationsResponse$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyRequest$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyResponse$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyTestCaseRequest$ === "object");
assert(typeof UpdateAutomatedReasoningPolicyTestCaseResponse$ === "object");
assert(typeof UpdateCustomModelDeploymentRequest$ === "object");
assert(typeof UpdateCustomModelDeploymentResponse$ === "object");
assert(typeof UpdateGuardrailRequest$ === "object");
assert(typeof UpdateGuardrailResponse$ === "object");
assert(typeof UpdateMarketplaceModelEndpointRequest$ === "object");
assert(typeof UpdateMarketplaceModelEndpointResponse$ === "object");
assert(typeof UpdateProvisionedModelThroughputRequest$ === "object");
assert(typeof UpdateProvisionedModelThroughputResponse$ === "object");
assert(typeof ValidationDataConfig$ === "object");
assert(typeof ValidationDetails$ === "object");
assert(typeof Validator$ === "object");
assert(typeof ValidatorMetric$ === "object");
assert(typeof ValidityTerm$ === "object");
assert(typeof VectorSearchBedrockRerankingConfiguration$ === "object");
assert(typeof VectorSearchBedrockRerankingModelConfiguration$ === "object");
assert(typeof VectorSearchRerankingConfiguration$ === "object");
assert(typeof VpcConfig$ === "object");
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
assert(AccessDeniedException.prototype instanceof BedrockServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof BedrockServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof BedrockServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceInUseException.prototype instanceof BedrockServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BedrockServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof BedrockServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof BedrockServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(ThrottlingException.prototype instanceof BedrockServiceException);
assert(typeof ThrottlingException$ === "object");
assert(TooManyTagsException.prototype instanceof BedrockServiceException);
assert(typeof TooManyTagsException$ === "object");
assert(ValidationException.prototype instanceof BedrockServiceException);
assert(typeof ValidationException$ === "object");
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
