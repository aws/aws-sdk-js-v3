import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountAggregation$,
  AdditionalInstanceConfiguration$,
  Ami$,
  AmiDistributionConfiguration$,
  AutoDisablePolicy$,
  BuildType,
  CallRateLimitExceededException,
  CallRateLimitExceededException$,
  CancelImageCreation$,
  CancelImageCreationCommand,
  CancelImageCreationRequest$,
  CancelImageCreationResponse$,
  CancelLifecycleExecution$,
  CancelLifecycleExecutionCommand,
  CancelLifecycleExecutionRequest$,
  CancelLifecycleExecutionResponse$,
  ClientException,
  ClientException$,
  Component$,
  ComponentConfiguration$,
  ComponentFormat,
  ComponentParameter$,
  ComponentParameterDetail$,
  ComponentState$,
  ComponentStatus,
  ComponentSummary$,
  ComponentType,
  ComponentVersion$,
  Container$,
  ContainerDistributionConfiguration$,
  ContainerRecipe$,
  ContainerRecipeSummary$,
  ContainerRepositoryService,
  ContainerType,
  CreateComponent$,
  CreateComponentCommand,
  CreateComponentRequest$,
  CreateComponentResponse$,
  CreateContainerRecipe$,
  CreateContainerRecipeCommand,
  CreateContainerRecipeRequest$,
  CreateContainerRecipeResponse$,
  CreateDistributionConfiguration$,
  CreateDistributionConfigurationCommand,
  CreateDistributionConfigurationRequest$,
  CreateDistributionConfigurationResponse$,
  CreateImage$,
  CreateImageCommand,
  CreateImagePipeline$,
  CreateImagePipelineCommand,
  CreateImagePipelineRequest$,
  CreateImagePipelineResponse$,
  CreateImageRecipe$,
  CreateImageRecipeCommand,
  CreateImageRecipeRequest$,
  CreateImageRecipeResponse$,
  CreateImageRequest$,
  CreateImageResponse$,
  CreateInfrastructureConfiguration$,
  CreateInfrastructureConfigurationCommand,
  CreateInfrastructureConfigurationRequest$,
  CreateInfrastructureConfigurationResponse$,
  CreateLifecyclePolicy$,
  CreateLifecyclePolicyCommand,
  CreateLifecyclePolicyRequest$,
  CreateLifecyclePolicyResponse$,
  CreateWorkflow$,
  CreateWorkflowCommand,
  CreateWorkflowRequest$,
  CreateWorkflowResponse$,
  CvssScore$,
  CvssScoreAdjustment$,
  CvssScoreDetails$,
  DeleteComponent$,
  DeleteComponentCommand,
  DeleteComponentRequest$,
  DeleteComponentResponse$,
  DeleteContainerRecipe$,
  DeleteContainerRecipeCommand,
  DeleteContainerRecipeRequest$,
  DeleteContainerRecipeResponse$,
  DeleteDistributionConfiguration$,
  DeleteDistributionConfigurationCommand,
  DeleteDistributionConfigurationRequest$,
  DeleteDistributionConfigurationResponse$,
  DeleteImage$,
  DeleteImageCommand,
  DeleteImagePipeline$,
  DeleteImagePipelineCommand,
  DeleteImagePipelineRequest$,
  DeleteImagePipelineResponse$,
  DeleteImageRecipe$,
  DeleteImageRecipeCommand,
  DeleteImageRecipeRequest$,
  DeleteImageRecipeResponse$,
  DeleteImageRequest$,
  DeleteImageResponse$,
  DeleteInfrastructureConfiguration$,
  DeleteInfrastructureConfigurationCommand,
  DeleteInfrastructureConfigurationRequest$,
  DeleteInfrastructureConfigurationResponse$,
  DeleteLifecyclePolicy$,
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyRequest$,
  DeleteLifecyclePolicyResponse$,
  DeleteWorkflow$,
  DeleteWorkflowCommand,
  DeleteWorkflowRequest$,
  DeleteWorkflowResponse$,
  DiskImageFormat,
  DistributeImage$,
  DistributeImageCommand,
  DistributeImageRequest$,
  DistributeImageResponse$,
  Distribution$,
  DistributionConfiguration$,
  DistributionConfigurationSummary$,
  DryRunOperationException,
  DryRunOperationException$,
  EbsInstanceBlockDeviceSpecification$,
  EbsVolumeType,
  EcrConfiguration$,
  FastLaunchConfiguration$,
  FastLaunchLaunchTemplateSpecification$,
  FastLaunchSnapshotConfiguration$,
  Filter$,
  ForbiddenException,
  ForbiddenException$,
  GetComponent$,
  GetComponentCommand,
  GetComponentPolicy$,
  GetComponentPolicyCommand,
  GetComponentPolicyRequest$,
  GetComponentPolicyResponse$,
  GetComponentRequest$,
  GetComponentResponse$,
  GetContainerRecipe$,
  GetContainerRecipeCommand,
  GetContainerRecipePolicy$,
  GetContainerRecipePolicyCommand,
  GetContainerRecipePolicyRequest$,
  GetContainerRecipePolicyResponse$,
  GetContainerRecipeRequest$,
  GetContainerRecipeResponse$,
  GetDistributionConfiguration$,
  GetDistributionConfigurationCommand,
  GetDistributionConfigurationRequest$,
  GetDistributionConfigurationResponse$,
  GetImage$,
  GetImageCommand,
  GetImagePipeline$,
  GetImagePipelineCommand,
  GetImagePipelineRequest$,
  GetImagePipelineResponse$,
  GetImagePolicy$,
  GetImagePolicyCommand,
  GetImagePolicyRequest$,
  GetImagePolicyResponse$,
  GetImageRecipe$,
  GetImageRecipeCommand,
  GetImageRecipePolicy$,
  GetImageRecipePolicyCommand,
  GetImageRecipePolicyRequest$,
  GetImageRecipePolicyResponse$,
  GetImageRecipeRequest$,
  GetImageRecipeResponse$,
  GetImageRequest$,
  GetImageResponse$,
  GetInfrastructureConfiguration$,
  GetInfrastructureConfigurationCommand,
  GetInfrastructureConfigurationRequest$,
  GetInfrastructureConfigurationResponse$,
  GetLifecycleExecution$,
  GetLifecycleExecutionCommand,
  GetLifecycleExecutionRequest$,
  GetLifecycleExecutionResponse$,
  GetLifecyclePolicy$,
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyRequest$,
  GetLifecyclePolicyResponse$,
  GetMarketplaceResource$,
  GetMarketplaceResourceCommand,
  GetMarketplaceResourceRequest$,
  GetMarketplaceResourceResponse$,
  GetWorkflow$,
  GetWorkflowCommand,
  GetWorkflowExecution$,
  GetWorkflowExecutionCommand,
  GetWorkflowExecutionRequest$,
  GetWorkflowExecutionResponse$,
  GetWorkflowRequest$,
  GetWorkflowResponse$,
  GetWorkflowStepExecution$,
  GetWorkflowStepExecutionCommand,
  GetWorkflowStepExecutionRequest$,
  GetWorkflowStepExecutionResponse$,
  IdempotentParameterMismatchException,
  IdempotentParameterMismatchException$,
  Image$,
  ImageAggregation$,
  Imagebuilder,
  ImagebuilderClient,
  ImagebuilderServiceException,
  ImageLoggingConfiguration$,
  ImagePackage$,
  ImagePipeline$,
  ImagePipelineAggregation$,
  ImageRecipe$,
  ImageRecipeSummary$,
  ImageScanFinding$,
  ImageScanFindingAggregation$,
  ImageScanFindingsFilter$,
  ImageScanningConfiguration$,
  ImageScanState$,
  ImageScanStatus,
  ImageSource,
  ImageState$,
  ImageStatus,
  ImageSummary$,
  ImageTestsConfiguration$,
  ImageType,
  ImageVersion$,
  ImportComponent$,
  ImportComponentCommand,
  ImportComponentRequest$,
  ImportComponentResponse$,
  ImportDiskImage$,
  ImportDiskImageCommand,
  ImportDiskImageRequest$,
  ImportDiskImageResponse$,
  ImportVmImage$,
  ImportVmImageCommand,
  ImportVmImageRequest$,
  ImportVmImageResponse$,
  InfrastructureConfiguration$,
  InfrastructureConfigurationSummary$,
  InspectorScoreDetails$,
  InstanceBlockDeviceMapping$,
  InstanceConfiguration$,
  InstanceMetadataOptions$,
  InvalidPaginationTokenException,
  InvalidPaginationTokenException$,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidVersionNumberException,
  InvalidVersionNumberException$,
  LatestVersionReferences$,
  LaunchPermissionConfiguration$,
  LaunchTemplateConfiguration$,
  LifecycleExecution$,
  LifecycleExecutionResource$,
  LifecycleExecutionResourceAction$,
  LifecycleExecutionResourceActionName,
  LifecycleExecutionResourcesImpactedSummary$,
  LifecycleExecutionResourceState$,
  LifecycleExecutionResourceStatus,
  LifecycleExecutionSnapshotResource$,
  LifecycleExecutionState$,
  LifecycleExecutionStatus,
  LifecyclePolicy$,
  LifecyclePolicyDetail$,
  LifecyclePolicyDetailAction$,
  LifecyclePolicyDetailActionIncludeResources$,
  LifecyclePolicyDetailActionType,
  LifecyclePolicyDetailExclusionRules$,
  LifecyclePolicyDetailExclusionRulesAmis$,
  LifecyclePolicyDetailExclusionRulesAmisLastLaunched$,
  LifecyclePolicyDetailFilter$,
  LifecyclePolicyDetailFilterType,
  LifecyclePolicyResourceSelection$,
  LifecyclePolicyResourceSelectionRecipe$,
  LifecyclePolicyResourceType,
  LifecyclePolicyStatus,
  LifecyclePolicySummary$,
  LifecyclePolicyTimeUnit,
  ListComponentBuildVersions$,
  ListComponentBuildVersionsCommand,
  ListComponentBuildVersionsRequest$,
  ListComponentBuildVersionsResponse$,
  ListComponents$,
  ListComponentsCommand,
  ListComponentsRequest$,
  ListComponentsResponse$,
  ListContainerRecipes$,
  ListContainerRecipesCommand,
  ListContainerRecipesRequest$,
  ListContainerRecipesResponse$,
  ListDistributionConfigurations$,
  ListDistributionConfigurationsCommand,
  ListDistributionConfigurationsRequest$,
  ListDistributionConfigurationsResponse$,
  ListImageBuildVersions$,
  ListImageBuildVersionsCommand,
  ListImageBuildVersionsRequest$,
  ListImageBuildVersionsResponse$,
  ListImagePackages$,
  ListImagePackagesCommand,
  ListImagePackagesRequest$,
  ListImagePackagesResponse$,
  ListImagePipelineImages$,
  ListImagePipelineImagesCommand,
  ListImagePipelineImagesRequest$,
  ListImagePipelineImagesResponse$,
  ListImagePipelines$,
  ListImagePipelinesCommand,
  ListImagePipelinesRequest$,
  ListImagePipelinesResponse$,
  ListImageRecipes$,
  ListImageRecipesCommand,
  ListImageRecipesRequest$,
  ListImageRecipesResponse$,
  ListImages$,
  ListImageScanFindingAggregations$,
  ListImageScanFindingAggregationsCommand,
  ListImageScanFindingAggregationsRequest$,
  ListImageScanFindingAggregationsResponse$,
  ListImageScanFindings$,
  ListImageScanFindingsCommand,
  ListImageScanFindingsRequest$,
  ListImageScanFindingsResponse$,
  ListImagesCommand,
  ListImagesRequest$,
  ListImagesResponse$,
  ListInfrastructureConfigurations$,
  ListInfrastructureConfigurationsCommand,
  ListInfrastructureConfigurationsRequest$,
  ListInfrastructureConfigurationsResponse$,
  ListLifecycleExecutionResources$,
  ListLifecycleExecutionResourcesCommand,
  ListLifecycleExecutionResourcesRequest$,
  ListLifecycleExecutionResourcesResponse$,
  ListLifecycleExecutions$,
  ListLifecycleExecutionsCommand,
  ListLifecycleExecutionsRequest$,
  ListLifecycleExecutionsResponse$,
  ListLifecyclePolicies$,
  ListLifecyclePoliciesCommand,
  ListLifecyclePoliciesRequest$,
  ListLifecyclePoliciesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWaitingWorkflowSteps$,
  ListWaitingWorkflowStepsCommand,
  ListWaitingWorkflowStepsRequest$,
  ListWaitingWorkflowStepsResponse$,
  ListWorkflowBuildVersions$,
  ListWorkflowBuildVersionsCommand,
  ListWorkflowBuildVersionsRequest$,
  ListWorkflowBuildVersionsResponse$,
  ListWorkflowExecutions$,
  ListWorkflowExecutionsCommand,
  ListWorkflowExecutionsRequest$,
  ListWorkflowExecutionsResponse$,
  ListWorkflows$,
  ListWorkflowsCommand,
  ListWorkflowsRequest$,
  ListWorkflowsResponse$,
  ListWorkflowStepExecutions$,
  ListWorkflowStepExecutionsCommand,
  ListWorkflowStepExecutionsRequest$,
  ListWorkflowStepExecutionsResponse$,
  Logging$,
  MarketplaceResourceType,
  OnWorkflowFailure,
  OutputResources$,
  Ownership,
  PackageVulnerabilityDetails$,
  paginateListComponentBuildVersions,
  paginateListComponents,
  paginateListContainerRecipes,
  paginateListDistributionConfigurations,
  paginateListImageBuildVersions,
  paginateListImagePackages,
  paginateListImagePipelineImages,
  paginateListImagePipelines,
  paginateListImageRecipes,
  paginateListImages,
  paginateListImageScanFindingAggregations,
  paginateListImageScanFindings,
  paginateListInfrastructureConfigurations,
  paginateListLifecycleExecutionResources,
  paginateListLifecycleExecutions,
  paginateListLifecyclePolicies,
  paginateListWaitingWorkflowSteps,
  paginateListWorkflowBuildVersions,
  paginateListWorkflowExecutions,
  paginateListWorkflows,
  paginateListWorkflowStepExecutions,
  PipelineExecutionStartCondition,
  PipelineLoggingConfiguration$,
  PipelineStatus,
  Placement$,
  Platform,
  ProductCodeListItem$,
  ProductCodeType,
  PutComponentPolicy$,
  PutComponentPolicyCommand,
  PutComponentPolicyRequest$,
  PutComponentPolicyResponse$,
  PutContainerRecipePolicy$,
  PutContainerRecipePolicyCommand,
  PutContainerRecipePolicyRequest$,
  PutContainerRecipePolicyResponse$,
  PutImagePolicy$,
  PutImagePolicyCommand,
  PutImagePolicyRequest$,
  PutImagePolicyResponse$,
  PutImageRecipePolicy$,
  PutImageRecipePolicyCommand,
  PutImageRecipePolicyRequest$,
  PutImageRecipePolicyResponse$,
  Remediation$,
  RemediationRecommendation$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceDependencyException,
  ResourceDependencyException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceState$,
  ResourceStateUpdateExclusionRules$,
  ResourceStateUpdateIncludeResources$,
  ResourceStatus,
  RetryImage$,
  RetryImageCommand,
  RetryImageRequest$,
  RetryImageResponse$,
  S3ExportConfiguration$,
  S3Logs$,
  Schedule$,
  SendWorkflowStepAction$,
  SendWorkflowStepActionCommand,
  SendWorkflowStepActionRequest$,
  SendWorkflowStepActionResponse$,
  ServiceException,
  ServiceException$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  SeverityCounts$,
  SsmParameterConfiguration$,
  SsmParameterDataType,
  StartImagePipelineExecution$,
  StartImagePipelineExecutionCommand,
  StartImagePipelineExecutionRequest$,
  StartImagePipelineExecutionResponse$,
  StartResourceStateUpdate$,
  StartResourceStateUpdateCommand,
  StartResourceStateUpdateRequest$,
  StartResourceStateUpdateResponse$,
  SystemsManagerAgent$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TargetContainerRepository$,
  TenancyType,
  TooManyRequestsException,
  TooManyRequestsException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDistributionConfiguration$,
  UpdateDistributionConfigurationCommand,
  UpdateDistributionConfigurationRequest$,
  UpdateDistributionConfigurationResponse$,
  UpdateImagePipeline$,
  UpdateImagePipelineCommand,
  UpdateImagePipelineRequest$,
  UpdateImagePipelineResponse$,
  UpdateInfrastructureConfiguration$,
  UpdateInfrastructureConfigurationCommand,
  UpdateInfrastructureConfigurationRequest$,
  UpdateInfrastructureConfigurationResponse$,
  UpdateLifecyclePolicy$,
  UpdateLifecyclePolicyCommand,
  UpdateLifecyclePolicyRequest$,
  UpdateLifecyclePolicyResponse$,
  VulnerabilityIdAggregation$,
  VulnerablePackage$,
  Workflow$,
  WorkflowConfiguration$,
  WorkflowExecutionMetadata$,
  WorkflowExecutionStatus,
  WorkflowParameter$,
  WorkflowParameterDetail$,
  WorkflowState$,
  WorkflowStatus,
  WorkflowStepActionType,
  WorkflowStepExecution$,
  WorkflowStepExecutionRollbackStatus,
  WorkflowStepExecutionStatus,
  WorkflowStepMetadata$,
  WorkflowSummary$,
  WorkflowType,
  WorkflowVersion$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ImagebuilderClient === "function");
assert(typeof Imagebuilder === "function");
// commands
assert(typeof CancelImageCreationCommand === "function");
assert(typeof CancelImageCreation$ === "object");
assert(typeof CancelLifecycleExecutionCommand === "function");
assert(typeof CancelLifecycleExecution$ === "object");
assert(typeof CreateComponentCommand === "function");
assert(typeof CreateComponent$ === "object");
assert(typeof CreateContainerRecipeCommand === "function");
assert(typeof CreateContainerRecipe$ === "object");
assert(typeof CreateDistributionConfigurationCommand === "function");
assert(typeof CreateDistributionConfiguration$ === "object");
assert(typeof CreateImageCommand === "function");
assert(typeof CreateImage$ === "object");
assert(typeof CreateImagePipelineCommand === "function");
assert(typeof CreateImagePipeline$ === "object");
assert(typeof CreateImageRecipeCommand === "function");
assert(typeof CreateImageRecipe$ === "object");
assert(typeof CreateInfrastructureConfigurationCommand === "function");
assert(typeof CreateInfrastructureConfiguration$ === "object");
assert(typeof CreateLifecyclePolicyCommand === "function");
assert(typeof CreateLifecyclePolicy$ === "object");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof CreateWorkflow$ === "object");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteComponent$ === "object");
assert(typeof DeleteContainerRecipeCommand === "function");
assert(typeof DeleteContainerRecipe$ === "object");
assert(typeof DeleteDistributionConfigurationCommand === "function");
assert(typeof DeleteDistributionConfiguration$ === "object");
assert(typeof DeleteImageCommand === "function");
assert(typeof DeleteImage$ === "object");
assert(typeof DeleteImagePipelineCommand === "function");
assert(typeof DeleteImagePipeline$ === "object");
assert(typeof DeleteImageRecipeCommand === "function");
assert(typeof DeleteImageRecipe$ === "object");
assert(typeof DeleteInfrastructureConfigurationCommand === "function");
assert(typeof DeleteInfrastructureConfiguration$ === "object");
assert(typeof DeleteLifecyclePolicyCommand === "function");
assert(typeof DeleteLifecyclePolicy$ === "object");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DeleteWorkflow$ === "object");
assert(typeof DistributeImageCommand === "function");
assert(typeof DistributeImage$ === "object");
assert(typeof GetComponentCommand === "function");
assert(typeof GetComponent$ === "object");
assert(typeof GetComponentPolicyCommand === "function");
assert(typeof GetComponentPolicy$ === "object");
assert(typeof GetContainerRecipeCommand === "function");
assert(typeof GetContainerRecipe$ === "object");
assert(typeof GetContainerRecipePolicyCommand === "function");
assert(typeof GetContainerRecipePolicy$ === "object");
assert(typeof GetDistributionConfigurationCommand === "function");
assert(typeof GetDistributionConfiguration$ === "object");
assert(typeof GetImageCommand === "function");
assert(typeof GetImage$ === "object");
assert(typeof GetImagePipelineCommand === "function");
assert(typeof GetImagePipeline$ === "object");
assert(typeof GetImagePolicyCommand === "function");
assert(typeof GetImagePolicy$ === "object");
assert(typeof GetImageRecipeCommand === "function");
assert(typeof GetImageRecipe$ === "object");
assert(typeof GetImageRecipePolicyCommand === "function");
assert(typeof GetImageRecipePolicy$ === "object");
assert(typeof GetInfrastructureConfigurationCommand === "function");
assert(typeof GetInfrastructureConfiguration$ === "object");
assert(typeof GetLifecycleExecutionCommand === "function");
assert(typeof GetLifecycleExecution$ === "object");
assert(typeof GetLifecyclePolicyCommand === "function");
assert(typeof GetLifecyclePolicy$ === "object");
assert(typeof GetMarketplaceResourceCommand === "function");
assert(typeof GetMarketplaceResource$ === "object");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflow$ === "object");
assert(typeof GetWorkflowExecutionCommand === "function");
assert(typeof GetWorkflowExecution$ === "object");
assert(typeof GetWorkflowStepExecutionCommand === "function");
assert(typeof GetWorkflowStepExecution$ === "object");
assert(typeof ImportComponentCommand === "function");
assert(typeof ImportComponent$ === "object");
assert(typeof ImportDiskImageCommand === "function");
assert(typeof ImportDiskImage$ === "object");
assert(typeof ImportVmImageCommand === "function");
assert(typeof ImportVmImage$ === "object");
assert(typeof ListComponentBuildVersionsCommand === "function");
assert(typeof ListComponentBuildVersions$ === "object");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListComponents$ === "object");
assert(typeof ListContainerRecipesCommand === "function");
assert(typeof ListContainerRecipes$ === "object");
assert(typeof ListDistributionConfigurationsCommand === "function");
assert(typeof ListDistributionConfigurations$ === "object");
assert(typeof ListImageBuildVersionsCommand === "function");
assert(typeof ListImageBuildVersions$ === "object");
assert(typeof ListImagePackagesCommand === "function");
assert(typeof ListImagePackages$ === "object");
assert(typeof ListImagePipelineImagesCommand === "function");
assert(typeof ListImagePipelineImages$ === "object");
assert(typeof ListImagePipelinesCommand === "function");
assert(typeof ListImagePipelines$ === "object");
assert(typeof ListImageRecipesCommand === "function");
assert(typeof ListImageRecipes$ === "object");
assert(typeof ListImagesCommand === "function");
assert(typeof ListImages$ === "object");
assert(typeof ListImageScanFindingAggregationsCommand === "function");
assert(typeof ListImageScanFindingAggregations$ === "object");
assert(typeof ListImageScanFindingsCommand === "function");
assert(typeof ListImageScanFindings$ === "object");
assert(typeof ListInfrastructureConfigurationsCommand === "function");
assert(typeof ListInfrastructureConfigurations$ === "object");
assert(typeof ListLifecycleExecutionResourcesCommand === "function");
assert(typeof ListLifecycleExecutionResources$ === "object");
assert(typeof ListLifecycleExecutionsCommand === "function");
assert(typeof ListLifecycleExecutions$ === "object");
assert(typeof ListLifecyclePoliciesCommand === "function");
assert(typeof ListLifecyclePolicies$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWaitingWorkflowStepsCommand === "function");
assert(typeof ListWaitingWorkflowSteps$ === "object");
assert(typeof ListWorkflowBuildVersionsCommand === "function");
assert(typeof ListWorkflowBuildVersions$ === "object");
assert(typeof ListWorkflowExecutionsCommand === "function");
assert(typeof ListWorkflowExecutions$ === "object");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflows$ === "object");
assert(typeof ListWorkflowStepExecutionsCommand === "function");
assert(typeof ListWorkflowStepExecutions$ === "object");
assert(typeof PutComponentPolicyCommand === "function");
assert(typeof PutComponentPolicy$ === "object");
assert(typeof PutContainerRecipePolicyCommand === "function");
assert(typeof PutContainerRecipePolicy$ === "object");
assert(typeof PutImagePolicyCommand === "function");
assert(typeof PutImagePolicy$ === "object");
assert(typeof PutImageRecipePolicyCommand === "function");
assert(typeof PutImageRecipePolicy$ === "object");
assert(typeof RetryImageCommand === "function");
assert(typeof RetryImage$ === "object");
assert(typeof SendWorkflowStepActionCommand === "function");
assert(typeof SendWorkflowStepAction$ === "object");
assert(typeof StartImagePipelineExecutionCommand === "function");
assert(typeof StartImagePipelineExecution$ === "object");
assert(typeof StartResourceStateUpdateCommand === "function");
assert(typeof StartResourceStateUpdate$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDistributionConfigurationCommand === "function");
assert(typeof UpdateDistributionConfiguration$ === "object");
assert(typeof UpdateImagePipelineCommand === "function");
assert(typeof UpdateImagePipeline$ === "object");
assert(typeof UpdateInfrastructureConfigurationCommand === "function");
assert(typeof UpdateInfrastructureConfiguration$ === "object");
assert(typeof UpdateLifecyclePolicyCommand === "function");
assert(typeof UpdateLifecyclePolicy$ === "object");
// structural schemas
assert(typeof AccountAggregation$ === "object");
assert(typeof AdditionalInstanceConfiguration$ === "object");
assert(typeof Ami$ === "object");
assert(typeof AmiDistributionConfiguration$ === "object");
assert(typeof AutoDisablePolicy$ === "object");
assert(typeof CancelImageCreationRequest$ === "object");
assert(typeof CancelImageCreationResponse$ === "object");
assert(typeof CancelLifecycleExecutionRequest$ === "object");
assert(typeof CancelLifecycleExecutionResponse$ === "object");
assert(typeof Component$ === "object");
assert(typeof ComponentConfiguration$ === "object");
assert(typeof ComponentParameter$ === "object");
assert(typeof ComponentParameterDetail$ === "object");
assert(typeof ComponentState$ === "object");
assert(typeof ComponentSummary$ === "object");
assert(typeof ComponentVersion$ === "object");
assert(typeof Container$ === "object");
assert(typeof ContainerDistributionConfiguration$ === "object");
assert(typeof ContainerRecipe$ === "object");
assert(typeof ContainerRecipeSummary$ === "object");
assert(typeof CreateComponentRequest$ === "object");
assert(typeof CreateComponentResponse$ === "object");
assert(typeof CreateContainerRecipeRequest$ === "object");
assert(typeof CreateContainerRecipeResponse$ === "object");
assert(typeof CreateDistributionConfigurationRequest$ === "object");
assert(typeof CreateDistributionConfigurationResponse$ === "object");
assert(typeof CreateImagePipelineRequest$ === "object");
assert(typeof CreateImagePipelineResponse$ === "object");
assert(typeof CreateImageRecipeRequest$ === "object");
assert(typeof CreateImageRecipeResponse$ === "object");
assert(typeof CreateImageRequest$ === "object");
assert(typeof CreateImageResponse$ === "object");
assert(typeof CreateInfrastructureConfigurationRequest$ === "object");
assert(typeof CreateInfrastructureConfigurationResponse$ === "object");
assert(typeof CreateLifecyclePolicyRequest$ === "object");
assert(typeof CreateLifecyclePolicyResponse$ === "object");
assert(typeof CreateWorkflowRequest$ === "object");
assert(typeof CreateWorkflowResponse$ === "object");
assert(typeof CvssScore$ === "object");
assert(typeof CvssScoreAdjustment$ === "object");
assert(typeof CvssScoreDetails$ === "object");
assert(typeof DeleteComponentRequest$ === "object");
assert(typeof DeleteComponentResponse$ === "object");
assert(typeof DeleteContainerRecipeRequest$ === "object");
assert(typeof DeleteContainerRecipeResponse$ === "object");
assert(typeof DeleteDistributionConfigurationRequest$ === "object");
assert(typeof DeleteDistributionConfigurationResponse$ === "object");
assert(typeof DeleteImagePipelineRequest$ === "object");
assert(typeof DeleteImagePipelineResponse$ === "object");
assert(typeof DeleteImageRecipeRequest$ === "object");
assert(typeof DeleteImageRecipeResponse$ === "object");
assert(typeof DeleteImageRequest$ === "object");
assert(typeof DeleteImageResponse$ === "object");
assert(typeof DeleteInfrastructureConfigurationRequest$ === "object");
assert(typeof DeleteInfrastructureConfigurationResponse$ === "object");
assert(typeof DeleteLifecyclePolicyRequest$ === "object");
assert(typeof DeleteLifecyclePolicyResponse$ === "object");
assert(typeof DeleteWorkflowRequest$ === "object");
assert(typeof DeleteWorkflowResponse$ === "object");
assert(typeof DistributeImageRequest$ === "object");
assert(typeof DistributeImageResponse$ === "object");
assert(typeof Distribution$ === "object");
assert(typeof DistributionConfiguration$ === "object");
assert(typeof DistributionConfigurationSummary$ === "object");
assert(typeof EbsInstanceBlockDeviceSpecification$ === "object");
assert(typeof EcrConfiguration$ === "object");
assert(typeof FastLaunchConfiguration$ === "object");
assert(typeof FastLaunchLaunchTemplateSpecification$ === "object");
assert(typeof FastLaunchSnapshotConfiguration$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetComponentPolicyRequest$ === "object");
assert(typeof GetComponentPolicyResponse$ === "object");
assert(typeof GetComponentRequest$ === "object");
assert(typeof GetComponentResponse$ === "object");
assert(typeof GetContainerRecipePolicyRequest$ === "object");
assert(typeof GetContainerRecipePolicyResponse$ === "object");
assert(typeof GetContainerRecipeRequest$ === "object");
assert(typeof GetContainerRecipeResponse$ === "object");
assert(typeof GetDistributionConfigurationRequest$ === "object");
assert(typeof GetDistributionConfigurationResponse$ === "object");
assert(typeof GetImagePipelineRequest$ === "object");
assert(typeof GetImagePipelineResponse$ === "object");
assert(typeof GetImagePolicyRequest$ === "object");
assert(typeof GetImagePolicyResponse$ === "object");
assert(typeof GetImageRecipePolicyRequest$ === "object");
assert(typeof GetImageRecipePolicyResponse$ === "object");
assert(typeof GetImageRecipeRequest$ === "object");
assert(typeof GetImageRecipeResponse$ === "object");
assert(typeof GetImageRequest$ === "object");
assert(typeof GetImageResponse$ === "object");
assert(typeof GetInfrastructureConfigurationRequest$ === "object");
assert(typeof GetInfrastructureConfigurationResponse$ === "object");
assert(typeof GetLifecycleExecutionRequest$ === "object");
assert(typeof GetLifecycleExecutionResponse$ === "object");
assert(typeof GetLifecyclePolicyRequest$ === "object");
assert(typeof GetLifecyclePolicyResponse$ === "object");
assert(typeof GetMarketplaceResourceRequest$ === "object");
assert(typeof GetMarketplaceResourceResponse$ === "object");
assert(typeof GetWorkflowExecutionRequest$ === "object");
assert(typeof GetWorkflowExecutionResponse$ === "object");
assert(typeof GetWorkflowRequest$ === "object");
assert(typeof GetWorkflowResponse$ === "object");
assert(typeof GetWorkflowStepExecutionRequest$ === "object");
assert(typeof GetWorkflowStepExecutionResponse$ === "object");
assert(typeof Image$ === "object");
assert(typeof ImageAggregation$ === "object");
assert(typeof ImageLoggingConfiguration$ === "object");
assert(typeof ImagePackage$ === "object");
assert(typeof ImagePipeline$ === "object");
assert(typeof ImagePipelineAggregation$ === "object");
assert(typeof ImageRecipe$ === "object");
assert(typeof ImageRecipeSummary$ === "object");
assert(typeof ImageScanFinding$ === "object");
assert(typeof ImageScanFindingAggregation$ === "object");
assert(typeof ImageScanFindingsFilter$ === "object");
assert(typeof ImageScanningConfiguration$ === "object");
assert(typeof ImageScanState$ === "object");
assert(typeof ImageState$ === "object");
assert(typeof ImageSummary$ === "object");
assert(typeof ImageTestsConfiguration$ === "object");
assert(typeof ImageVersion$ === "object");
assert(typeof ImportComponentRequest$ === "object");
assert(typeof ImportComponentResponse$ === "object");
assert(typeof ImportDiskImageRequest$ === "object");
assert(typeof ImportDiskImageResponse$ === "object");
assert(typeof ImportVmImageRequest$ === "object");
assert(typeof ImportVmImageResponse$ === "object");
assert(typeof InfrastructureConfiguration$ === "object");
assert(typeof InfrastructureConfigurationSummary$ === "object");
assert(typeof InspectorScoreDetails$ === "object");
assert(typeof InstanceBlockDeviceMapping$ === "object");
assert(typeof InstanceConfiguration$ === "object");
assert(typeof InstanceMetadataOptions$ === "object");
assert(typeof LatestVersionReferences$ === "object");
assert(typeof LaunchPermissionConfiguration$ === "object");
assert(typeof LaunchTemplateConfiguration$ === "object");
assert(typeof LifecycleExecution$ === "object");
assert(typeof LifecycleExecutionResource$ === "object");
assert(typeof LifecycleExecutionResourceAction$ === "object");
assert(typeof LifecycleExecutionResourcesImpactedSummary$ === "object");
assert(typeof LifecycleExecutionResourceState$ === "object");
assert(typeof LifecycleExecutionSnapshotResource$ === "object");
assert(typeof LifecycleExecutionState$ === "object");
assert(typeof LifecyclePolicy$ === "object");
assert(typeof LifecyclePolicyDetail$ === "object");
assert(typeof LifecyclePolicyDetailAction$ === "object");
assert(typeof LifecyclePolicyDetailActionIncludeResources$ === "object");
assert(typeof LifecyclePolicyDetailExclusionRules$ === "object");
assert(typeof LifecyclePolicyDetailExclusionRulesAmis$ === "object");
assert(typeof LifecyclePolicyDetailExclusionRulesAmisLastLaunched$ === "object");
assert(typeof LifecyclePolicyDetailFilter$ === "object");
assert(typeof LifecyclePolicyResourceSelection$ === "object");
assert(typeof LifecyclePolicyResourceSelectionRecipe$ === "object");
assert(typeof LifecyclePolicySummary$ === "object");
assert(typeof ListComponentBuildVersionsRequest$ === "object");
assert(typeof ListComponentBuildVersionsResponse$ === "object");
assert(typeof ListComponentsRequest$ === "object");
assert(typeof ListComponentsResponse$ === "object");
assert(typeof ListContainerRecipesRequest$ === "object");
assert(typeof ListContainerRecipesResponse$ === "object");
assert(typeof ListDistributionConfigurationsRequest$ === "object");
assert(typeof ListDistributionConfigurationsResponse$ === "object");
assert(typeof ListImageBuildVersionsRequest$ === "object");
assert(typeof ListImageBuildVersionsResponse$ === "object");
assert(typeof ListImagePackagesRequest$ === "object");
assert(typeof ListImagePackagesResponse$ === "object");
assert(typeof ListImagePipelineImagesRequest$ === "object");
assert(typeof ListImagePipelineImagesResponse$ === "object");
assert(typeof ListImagePipelinesRequest$ === "object");
assert(typeof ListImagePipelinesResponse$ === "object");
assert(typeof ListImageRecipesRequest$ === "object");
assert(typeof ListImageRecipesResponse$ === "object");
assert(typeof ListImageScanFindingAggregationsRequest$ === "object");
assert(typeof ListImageScanFindingAggregationsResponse$ === "object");
assert(typeof ListImageScanFindingsRequest$ === "object");
assert(typeof ListImageScanFindingsResponse$ === "object");
assert(typeof ListImagesRequest$ === "object");
assert(typeof ListImagesResponse$ === "object");
assert(typeof ListInfrastructureConfigurationsRequest$ === "object");
assert(typeof ListInfrastructureConfigurationsResponse$ === "object");
assert(typeof ListLifecycleExecutionResourcesRequest$ === "object");
assert(typeof ListLifecycleExecutionResourcesResponse$ === "object");
assert(typeof ListLifecycleExecutionsRequest$ === "object");
assert(typeof ListLifecycleExecutionsResponse$ === "object");
assert(typeof ListLifecyclePoliciesRequest$ === "object");
assert(typeof ListLifecyclePoliciesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWaitingWorkflowStepsRequest$ === "object");
assert(typeof ListWaitingWorkflowStepsResponse$ === "object");
assert(typeof ListWorkflowBuildVersionsRequest$ === "object");
assert(typeof ListWorkflowBuildVersionsResponse$ === "object");
assert(typeof ListWorkflowExecutionsRequest$ === "object");
assert(typeof ListWorkflowExecutionsResponse$ === "object");
assert(typeof ListWorkflowsRequest$ === "object");
assert(typeof ListWorkflowsResponse$ === "object");
assert(typeof ListWorkflowStepExecutionsRequest$ === "object");
assert(typeof ListWorkflowStepExecutionsResponse$ === "object");
assert(typeof Logging$ === "object");
assert(typeof OutputResources$ === "object");
assert(typeof PackageVulnerabilityDetails$ === "object");
assert(typeof PipelineLoggingConfiguration$ === "object");
assert(typeof Placement$ === "object");
assert(typeof ProductCodeListItem$ === "object");
assert(typeof PutComponentPolicyRequest$ === "object");
assert(typeof PutComponentPolicyResponse$ === "object");
assert(typeof PutContainerRecipePolicyRequest$ === "object");
assert(typeof PutContainerRecipePolicyResponse$ === "object");
assert(typeof PutImagePolicyRequest$ === "object");
assert(typeof PutImagePolicyResponse$ === "object");
assert(typeof PutImageRecipePolicyRequest$ === "object");
assert(typeof PutImageRecipePolicyResponse$ === "object");
assert(typeof Remediation$ === "object");
assert(typeof RemediationRecommendation$ === "object");
assert(typeof ResourceState$ === "object");
assert(typeof ResourceStateUpdateExclusionRules$ === "object");
assert(typeof ResourceStateUpdateIncludeResources$ === "object");
assert(typeof RetryImageRequest$ === "object");
assert(typeof RetryImageResponse$ === "object");
assert(typeof S3ExportConfiguration$ === "object");
assert(typeof S3Logs$ === "object");
assert(typeof Schedule$ === "object");
assert(typeof SendWorkflowStepActionRequest$ === "object");
assert(typeof SendWorkflowStepActionResponse$ === "object");
assert(typeof SeverityCounts$ === "object");
assert(typeof SsmParameterConfiguration$ === "object");
assert(typeof StartImagePipelineExecutionRequest$ === "object");
assert(typeof StartImagePipelineExecutionResponse$ === "object");
assert(typeof StartResourceStateUpdateRequest$ === "object");
assert(typeof StartResourceStateUpdateResponse$ === "object");
assert(typeof SystemsManagerAgent$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TargetContainerRepository$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDistributionConfigurationRequest$ === "object");
assert(typeof UpdateDistributionConfigurationResponse$ === "object");
assert(typeof UpdateImagePipelineRequest$ === "object");
assert(typeof UpdateImagePipelineResponse$ === "object");
assert(typeof UpdateInfrastructureConfigurationRequest$ === "object");
assert(typeof UpdateInfrastructureConfigurationResponse$ === "object");
assert(typeof UpdateLifecyclePolicyRequest$ === "object");
assert(typeof UpdateLifecyclePolicyResponse$ === "object");
assert(typeof VulnerabilityIdAggregation$ === "object");
assert(typeof VulnerablePackage$ === "object");
assert(typeof Workflow$ === "object");
assert(typeof WorkflowConfiguration$ === "object");
assert(typeof WorkflowExecutionMetadata$ === "object");
assert(typeof WorkflowParameter$ === "object");
assert(typeof WorkflowParameterDetail$ === "object");
assert(typeof WorkflowState$ === "object");
assert(typeof WorkflowStepExecution$ === "object");
assert(typeof WorkflowStepMetadata$ === "object");
assert(typeof WorkflowSummary$ === "object");
assert(typeof WorkflowVersion$ === "object");
// enums
assert(typeof BuildType === "object");
assert(typeof ComponentFormat === "object");
assert(typeof ComponentStatus === "object");
assert(typeof ComponentType === "object");
assert(typeof ContainerRepositoryService === "object");
assert(typeof ContainerType === "object");
assert(typeof DiskImageFormat === "object");
assert(typeof EbsVolumeType === "object");
assert(typeof ImageScanStatus === "object");
assert(typeof ImageSource === "object");
assert(typeof ImageStatus === "object");
assert(typeof ImageType === "object");
assert(typeof LifecycleExecutionResourceActionName === "object");
assert(typeof LifecycleExecutionResourceStatus === "object");
assert(typeof LifecycleExecutionStatus === "object");
assert(typeof LifecyclePolicyDetailActionType === "object");
assert(typeof LifecyclePolicyDetailFilterType === "object");
assert(typeof LifecyclePolicyResourceType === "object");
assert(typeof LifecyclePolicyStatus === "object");
assert(typeof LifecyclePolicyTimeUnit === "object");
assert(typeof MarketplaceResourceType === "object");
assert(typeof OnWorkflowFailure === "object");
assert(typeof Ownership === "object");
assert(typeof PipelineExecutionStartCondition === "object");
assert(typeof PipelineStatus === "object");
assert(typeof Platform === "object");
assert(typeof ProductCodeType === "object");
assert(typeof ResourceStatus === "object");
assert(typeof SsmParameterDataType === "object");
assert(typeof TenancyType === "object");
assert(typeof WorkflowExecutionStatus === "object");
assert(typeof WorkflowStatus === "object");
assert(typeof WorkflowStepActionType === "object");
assert(typeof WorkflowStepExecutionRollbackStatus === "object");
assert(typeof WorkflowStepExecutionStatus === "object");
assert(typeof WorkflowType === "object");
// errors
assert(AccessDeniedException.prototype instanceof ImagebuilderServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(CallRateLimitExceededException.prototype instanceof ImagebuilderServiceException);
assert(typeof CallRateLimitExceededException$ === "object");
assert(ClientException.prototype instanceof ImagebuilderServiceException);
assert(typeof ClientException$ === "object");
assert(DryRunOperationException.prototype instanceof ImagebuilderServiceException);
assert(typeof DryRunOperationException$ === "object");
assert(ForbiddenException.prototype instanceof ImagebuilderServiceException);
assert(typeof ForbiddenException$ === "object");
assert(IdempotentParameterMismatchException.prototype instanceof ImagebuilderServiceException);
assert(typeof IdempotentParameterMismatchException$ === "object");
assert(InvalidPaginationTokenException.prototype instanceof ImagebuilderServiceException);
assert(typeof InvalidPaginationTokenException$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof ImagebuilderServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidParameterException.prototype instanceof ImagebuilderServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidParameterValueException.prototype instanceof ImagebuilderServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidRequestException.prototype instanceof ImagebuilderServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidVersionNumberException.prototype instanceof ImagebuilderServiceException);
assert(typeof InvalidVersionNumberException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof ImagebuilderServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceDependencyException.prototype instanceof ImagebuilderServiceException);
assert(typeof ResourceDependencyException$ === "object");
assert(ResourceInUseException.prototype instanceof ImagebuilderServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ImagebuilderServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceException.prototype instanceof ImagebuilderServiceException);
assert(typeof ServiceException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ImagebuilderServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ServiceUnavailableException.prototype instanceof ImagebuilderServiceException);
assert(typeof ServiceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof ImagebuilderServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ImagebuilderServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListComponentBuildVersions === "function");
assert(typeof paginateListComponents === "function");
assert(typeof paginateListContainerRecipes === "function");
assert(typeof paginateListDistributionConfigurations === "function");
assert(typeof paginateListImageBuildVersions === "function");
assert(typeof paginateListImagePackages === "function");
assert(typeof paginateListImagePipelineImages === "function");
assert(typeof paginateListImagePipelines === "function");
assert(typeof paginateListImageRecipes === "function");
assert(typeof paginateListImageScanFindingAggregations === "function");
assert(typeof paginateListImageScanFindings === "function");
assert(typeof paginateListImages === "function");
assert(typeof paginateListInfrastructureConfigurations === "function");
assert(typeof paginateListLifecycleExecutionResources === "function");
assert(typeof paginateListLifecycleExecutions === "function");
assert(typeof paginateListLifecyclePolicies === "function");
assert(typeof paginateListWaitingWorkflowSteps === "function");
assert(typeof paginateListWorkflowBuildVersions === "function");
assert(typeof paginateListWorkflowExecutions === "function");
assert(typeof paginateListWorkflowStepExecutions === "function");
assert(typeof paginateListWorkflows === "function");
console.log(`Imagebuilder index test passed.`);
