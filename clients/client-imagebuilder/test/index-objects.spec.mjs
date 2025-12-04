import {
  BuildType,
  CancelImageCreationCommand,
  CancelLifecycleExecutionCommand,
  ComponentFormat,
  ComponentStatus,
  ComponentType,
  ContainerRepositoryService,
  ContainerType,
  CreateComponentCommand,
  CreateContainerRecipeCommand,
  CreateDistributionConfigurationCommand,
  CreateImageCommand,
  CreateImagePipelineCommand,
  CreateImageRecipeCommand,
  CreateInfrastructureConfigurationCommand,
  CreateLifecyclePolicyCommand,
  CreateWorkflowCommand,
  DeleteComponentCommand,
  DeleteContainerRecipeCommand,
  DeleteDistributionConfigurationCommand,
  DeleteImageCommand,
  DeleteImagePipelineCommand,
  DeleteImageRecipeCommand,
  DeleteInfrastructureConfigurationCommand,
  DeleteLifecyclePolicyCommand,
  DeleteWorkflowCommand,
  DiskImageFormat,
  DistributeImageCommand,
  EbsVolumeType,
  GetComponentCommand,
  GetComponentPolicyCommand,
  GetContainerRecipeCommand,
  GetContainerRecipePolicyCommand,
  GetDistributionConfigurationCommand,
  GetImageCommand,
  GetImagePipelineCommand,
  GetImagePolicyCommand,
  GetImageRecipeCommand,
  GetImageRecipePolicyCommand,
  GetInfrastructureConfigurationCommand,
  GetLifecycleExecutionCommand,
  GetLifecyclePolicyCommand,
  GetMarketplaceResourceCommand,
  GetWorkflowCommand,
  GetWorkflowExecutionCommand,
  GetWorkflowStepExecutionCommand,
  ImageScanStatus,
  ImageSource,
  ImageStatus,
  ImageType,
  Imagebuilder,
  ImagebuilderClient,
  ImagebuilderServiceException,
  ImportComponentCommand,
  ImportDiskImageCommand,
  ImportVmImageCommand,
  LifecycleExecutionResourceActionName,
  LifecycleExecutionResourceStatus,
  LifecycleExecutionStatus,
  LifecyclePolicyDetailActionType,
  LifecyclePolicyDetailFilterType,
  LifecyclePolicyResourceType,
  LifecyclePolicyStatus,
  LifecyclePolicyTimeUnit,
  ListComponentBuildVersionsCommand,
  ListComponentsCommand,
  ListContainerRecipesCommand,
  ListDistributionConfigurationsCommand,
  ListImageBuildVersionsCommand,
  ListImagePackagesCommand,
  ListImagePipelineImagesCommand,
  ListImagePipelinesCommand,
  ListImageRecipesCommand,
  ListImageScanFindingAggregationsCommand,
  ListImageScanFindingsCommand,
  ListImagesCommand,
  ListInfrastructureConfigurationsCommand,
  ListLifecycleExecutionResourcesCommand,
  ListLifecycleExecutionsCommand,
  ListLifecyclePoliciesCommand,
  ListTagsForResourceCommand,
  ListWaitingWorkflowStepsCommand,
  ListWorkflowBuildVersionsCommand,
  ListWorkflowExecutionsCommand,
  ListWorkflowStepExecutionsCommand,
  ListWorkflowsCommand,
  MarketplaceResourceType,
  OnWorkflowFailure,
  Ownership,
  PipelineExecutionStartCondition,
  PipelineStatus,
  Platform,
  ProductCodeType,
  PutComponentPolicyCommand,
  PutContainerRecipePolicyCommand,
  PutImagePolicyCommand,
  PutImageRecipePolicyCommand,
  ResourceStatus,
  RetryImageCommand,
  SendWorkflowStepActionCommand,
  SsmParameterDataType,
  StartImagePipelineExecutionCommand,
  StartResourceStateUpdateCommand,
  TagResourceCommand,
  TenancyType,
  UntagResourceCommand,
  UpdateDistributionConfigurationCommand,
  UpdateImagePipelineCommand,
  UpdateInfrastructureConfigurationCommand,
  UpdateLifecyclePolicyCommand,
  WorkflowExecutionStatus,
  WorkflowStatus,
  WorkflowStepActionType,
  WorkflowStepExecutionRollbackStatus,
  WorkflowStepExecutionStatus,
  WorkflowType,
  paginateListComponentBuildVersions,
  paginateListComponents,
  paginateListContainerRecipes,
  paginateListDistributionConfigurations,
  paginateListImageBuildVersions,
  paginateListImagePackages,
  paginateListImagePipelineImages,
  paginateListImagePipelines,
  paginateListImageRecipes,
  paginateListImageScanFindingAggregations,
  paginateListImageScanFindings,
  paginateListImages,
  paginateListInfrastructureConfigurations,
  paginateListLifecycleExecutionResources,
  paginateListLifecycleExecutions,
  paginateListLifecyclePolicies,
  paginateListWaitingWorkflowSteps,
  paginateListWorkflowBuildVersions,
  paginateListWorkflowExecutions,
  paginateListWorkflowStepExecutions,
  paginateListWorkflows,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ImagebuilderClient === "function");
assert(typeof Imagebuilder === "function");
// commands
assert(typeof CancelImageCreationCommand === "function");
assert(typeof CancelLifecycleExecutionCommand === "function");
assert(typeof CreateComponentCommand === "function");
assert(typeof CreateContainerRecipeCommand === "function");
assert(typeof CreateDistributionConfigurationCommand === "function");
assert(typeof CreateImageCommand === "function");
assert(typeof CreateImagePipelineCommand === "function");
assert(typeof CreateImageRecipeCommand === "function");
assert(typeof CreateInfrastructureConfigurationCommand === "function");
assert(typeof CreateLifecyclePolicyCommand === "function");
assert(typeof CreateWorkflowCommand === "function");
assert(typeof DeleteComponentCommand === "function");
assert(typeof DeleteContainerRecipeCommand === "function");
assert(typeof DeleteDistributionConfigurationCommand === "function");
assert(typeof DeleteImageCommand === "function");
assert(typeof DeleteImagePipelineCommand === "function");
assert(typeof DeleteImageRecipeCommand === "function");
assert(typeof DeleteInfrastructureConfigurationCommand === "function");
assert(typeof DeleteLifecyclePolicyCommand === "function");
assert(typeof DeleteWorkflowCommand === "function");
assert(typeof DistributeImageCommand === "function");
assert(typeof GetComponentCommand === "function");
assert(typeof GetComponentPolicyCommand === "function");
assert(typeof GetContainerRecipeCommand === "function");
assert(typeof GetContainerRecipePolicyCommand === "function");
assert(typeof GetDistributionConfigurationCommand === "function");
assert(typeof GetImageCommand === "function");
assert(typeof GetImagePipelineCommand === "function");
assert(typeof GetImagePolicyCommand === "function");
assert(typeof GetImageRecipeCommand === "function");
assert(typeof GetImageRecipePolicyCommand === "function");
assert(typeof GetInfrastructureConfigurationCommand === "function");
assert(typeof GetLifecycleExecutionCommand === "function");
assert(typeof GetLifecyclePolicyCommand === "function");
assert(typeof GetMarketplaceResourceCommand === "function");
assert(typeof GetWorkflowCommand === "function");
assert(typeof GetWorkflowExecutionCommand === "function");
assert(typeof GetWorkflowStepExecutionCommand === "function");
assert(typeof ImportComponentCommand === "function");
assert(typeof ImportDiskImageCommand === "function");
assert(typeof ImportVmImageCommand === "function");
assert(typeof ListComponentBuildVersionsCommand === "function");
assert(typeof ListComponentsCommand === "function");
assert(typeof ListContainerRecipesCommand === "function");
assert(typeof ListDistributionConfigurationsCommand === "function");
assert(typeof ListImageBuildVersionsCommand === "function");
assert(typeof ListImagePackagesCommand === "function");
assert(typeof ListImagePipelineImagesCommand === "function");
assert(typeof ListImagePipelinesCommand === "function");
assert(typeof ListImageRecipesCommand === "function");
assert(typeof ListImagesCommand === "function");
assert(typeof ListImageScanFindingAggregationsCommand === "function");
assert(typeof ListImageScanFindingsCommand === "function");
assert(typeof ListInfrastructureConfigurationsCommand === "function");
assert(typeof ListLifecycleExecutionResourcesCommand === "function");
assert(typeof ListLifecycleExecutionsCommand === "function");
assert(typeof ListLifecyclePoliciesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListWaitingWorkflowStepsCommand === "function");
assert(typeof ListWorkflowBuildVersionsCommand === "function");
assert(typeof ListWorkflowExecutionsCommand === "function");
assert(typeof ListWorkflowsCommand === "function");
assert(typeof ListWorkflowStepExecutionsCommand === "function");
assert(typeof PutComponentPolicyCommand === "function");
assert(typeof PutContainerRecipePolicyCommand === "function");
assert(typeof PutImagePolicyCommand === "function");
assert(typeof PutImageRecipePolicyCommand === "function");
assert(typeof RetryImageCommand === "function");
assert(typeof SendWorkflowStepActionCommand === "function");
assert(typeof StartImagePipelineExecutionCommand === "function");
assert(typeof StartResourceStateUpdateCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateDistributionConfigurationCommand === "function");
assert(typeof UpdateImagePipelineCommand === "function");
assert(typeof UpdateInfrastructureConfigurationCommand === "function");
assert(typeof UpdateLifecyclePolicyCommand === "function");
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
