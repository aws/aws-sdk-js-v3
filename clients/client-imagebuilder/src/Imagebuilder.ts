// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelImageCreationCommand,
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
} from "./commands/CancelImageCreationCommand";
import {
  CancelLifecycleExecutionCommand,
  CancelLifecycleExecutionCommandInput,
  CancelLifecycleExecutionCommandOutput,
} from "./commands/CancelLifecycleExecutionCommand";
import {
  CreateComponentCommand,
  CreateComponentCommandInput,
  CreateComponentCommandOutput,
} from "./commands/CreateComponentCommand";
import {
  CreateContainerRecipeCommand,
  CreateContainerRecipeCommandInput,
  CreateContainerRecipeCommandOutput,
} from "./commands/CreateContainerRecipeCommand";
import {
  CreateDistributionConfigurationCommand,
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput,
} from "./commands/CreateDistributionConfigurationCommand";
import { CreateImageCommand, CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import {
  CreateImagePipelineCommand,
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput,
} from "./commands/CreateImagePipelineCommand";
import {
  CreateImageRecipeCommand,
  CreateImageRecipeCommandInput,
  CreateImageRecipeCommandOutput,
} from "./commands/CreateImageRecipeCommand";
import {
  CreateInfrastructureConfigurationCommand,
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
} from "./commands/CreateInfrastructureConfigurationCommand";
import {
  CreateLifecyclePolicyCommand,
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
} from "./commands/CreateLifecyclePolicyCommand";
import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  DeleteComponentCommand,
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput,
} from "./commands/DeleteComponentCommand";
import {
  DeleteContainerRecipeCommand,
  DeleteContainerRecipeCommandInput,
  DeleteContainerRecipeCommandOutput,
} from "./commands/DeleteContainerRecipeCommand";
import {
  DeleteDistributionConfigurationCommand,
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput,
} from "./commands/DeleteDistributionConfigurationCommand";
import { DeleteImageCommand, DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import {
  DeleteImagePipelineCommand,
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput,
} from "./commands/DeleteImagePipelineCommand";
import {
  DeleteImageRecipeCommand,
  DeleteImageRecipeCommandInput,
  DeleteImageRecipeCommandOutput,
} from "./commands/DeleteImageRecipeCommand";
import {
  DeleteInfrastructureConfigurationCommand,
  DeleteInfrastructureConfigurationCommandInput,
  DeleteInfrastructureConfigurationCommandOutput,
} from "./commands/DeleteInfrastructureConfigurationCommand";
import {
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  GetComponentCommand,
  GetComponentCommandInput,
  GetComponentCommandOutput,
} from "./commands/GetComponentCommand";
import {
  GetComponentPolicyCommand,
  GetComponentPolicyCommandInput,
  GetComponentPolicyCommandOutput,
} from "./commands/GetComponentPolicyCommand";
import {
  GetContainerRecipeCommand,
  GetContainerRecipeCommandInput,
  GetContainerRecipeCommandOutput,
} from "./commands/GetContainerRecipeCommand";
import {
  GetContainerRecipePolicyCommand,
  GetContainerRecipePolicyCommandInput,
  GetContainerRecipePolicyCommandOutput,
} from "./commands/GetContainerRecipePolicyCommand";
import {
  GetDistributionConfigurationCommand,
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput,
} from "./commands/GetDistributionConfigurationCommand";
import { GetImageCommand, GetImageCommandInput, GetImageCommandOutput } from "./commands/GetImageCommand";
import {
  GetImagePipelineCommand,
  GetImagePipelineCommandInput,
  GetImagePipelineCommandOutput,
} from "./commands/GetImagePipelineCommand";
import {
  GetImagePolicyCommand,
  GetImagePolicyCommandInput,
  GetImagePolicyCommandOutput,
} from "./commands/GetImagePolicyCommand";
import {
  GetImageRecipeCommand,
  GetImageRecipeCommandInput,
  GetImageRecipeCommandOutput,
} from "./commands/GetImageRecipeCommand";
import {
  GetImageRecipePolicyCommand,
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
} from "./commands/GetImageRecipePolicyCommand";
import {
  GetInfrastructureConfigurationCommand,
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput,
} from "./commands/GetInfrastructureConfigurationCommand";
import {
  GetLifecycleExecutionCommand,
  GetLifecycleExecutionCommandInput,
  GetLifecycleExecutionCommandOutput,
} from "./commands/GetLifecycleExecutionCommand";
import {
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput,
} from "./commands/GetLifecyclePolicyCommand";
import {
  GetMarketplaceResourceCommand,
  GetMarketplaceResourceCommandInput,
  GetMarketplaceResourceCommandOutput,
} from "./commands/GetMarketplaceResourceCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  GetWorkflowExecutionCommand,
  GetWorkflowExecutionCommandInput,
  GetWorkflowExecutionCommandOutput,
} from "./commands/GetWorkflowExecutionCommand";
import {
  GetWorkflowStepExecutionCommand,
  GetWorkflowStepExecutionCommandInput,
  GetWorkflowStepExecutionCommandOutput,
} from "./commands/GetWorkflowStepExecutionCommand";
import {
  ImportComponentCommand,
  ImportComponentCommandInput,
  ImportComponentCommandOutput,
} from "./commands/ImportComponentCommand";
import {
  ImportVmImageCommand,
  ImportVmImageCommandInput,
  ImportVmImageCommandOutput,
} from "./commands/ImportVmImageCommand";
import {
  ListComponentBuildVersionsCommand,
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
} from "./commands/ListComponentBuildVersionsCommand";
import {
  ListComponentsCommand,
  ListComponentsCommandInput,
  ListComponentsCommandOutput,
} from "./commands/ListComponentsCommand";
import {
  ListContainerRecipesCommand,
  ListContainerRecipesCommandInput,
  ListContainerRecipesCommandOutput,
} from "./commands/ListContainerRecipesCommand";
import {
  ListDistributionConfigurationsCommand,
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "./commands/ListDistributionConfigurationsCommand";
import {
  ListImageBuildVersionsCommand,
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "./commands/ListImageBuildVersionsCommand";
import {
  ListImagePackagesCommand,
  ListImagePackagesCommandInput,
  ListImagePackagesCommandOutput,
} from "./commands/ListImagePackagesCommand";
import {
  ListImagePipelineImagesCommand,
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "./commands/ListImagePipelineImagesCommand";
import {
  ListImagePipelinesCommand,
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput,
} from "./commands/ListImagePipelinesCommand";
import {
  ListImageRecipesCommand,
  ListImageRecipesCommandInput,
  ListImageRecipesCommandOutput,
} from "./commands/ListImageRecipesCommand";
import {
  ListImageScanFindingAggregationsCommand,
  ListImageScanFindingAggregationsCommandInput,
  ListImageScanFindingAggregationsCommandOutput,
} from "./commands/ListImageScanFindingAggregationsCommand";
import {
  ListImageScanFindingsCommand,
  ListImageScanFindingsCommandInput,
  ListImageScanFindingsCommandOutput,
} from "./commands/ListImageScanFindingsCommand";
import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import {
  ListInfrastructureConfigurationsCommand,
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "./commands/ListInfrastructureConfigurationsCommand";
import {
  ListLifecycleExecutionResourcesCommand,
  ListLifecycleExecutionResourcesCommandInput,
  ListLifecycleExecutionResourcesCommandOutput,
} from "./commands/ListLifecycleExecutionResourcesCommand";
import {
  ListLifecycleExecutionsCommand,
  ListLifecycleExecutionsCommandInput,
  ListLifecycleExecutionsCommandOutput,
} from "./commands/ListLifecycleExecutionsCommand";
import {
  ListLifecyclePoliciesCommand,
  ListLifecyclePoliciesCommandInput,
  ListLifecyclePoliciesCommandOutput,
} from "./commands/ListLifecyclePoliciesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWaitingWorkflowStepsCommand,
  ListWaitingWorkflowStepsCommandInput,
  ListWaitingWorkflowStepsCommandOutput,
} from "./commands/ListWaitingWorkflowStepsCommand";
import {
  ListWorkflowBuildVersionsCommand,
  ListWorkflowBuildVersionsCommandInput,
  ListWorkflowBuildVersionsCommandOutput,
} from "./commands/ListWorkflowBuildVersionsCommand";
import {
  ListWorkflowExecutionsCommand,
  ListWorkflowExecutionsCommandInput,
  ListWorkflowExecutionsCommandOutput,
} from "./commands/ListWorkflowExecutionsCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  ListWorkflowStepExecutionsCommand,
  ListWorkflowStepExecutionsCommandInput,
  ListWorkflowStepExecutionsCommandOutput,
} from "./commands/ListWorkflowStepExecutionsCommand";
import {
  PutComponentPolicyCommand,
  PutComponentPolicyCommandInput,
  PutComponentPolicyCommandOutput,
} from "./commands/PutComponentPolicyCommand";
import {
  PutContainerRecipePolicyCommand,
  PutContainerRecipePolicyCommandInput,
  PutContainerRecipePolicyCommandOutput,
} from "./commands/PutContainerRecipePolicyCommand";
import {
  PutImagePolicyCommand,
  PutImagePolicyCommandInput,
  PutImagePolicyCommandOutput,
} from "./commands/PutImagePolicyCommand";
import {
  PutImageRecipePolicyCommand,
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput,
} from "./commands/PutImageRecipePolicyCommand";
import {
  SendWorkflowStepActionCommand,
  SendWorkflowStepActionCommandInput,
  SendWorkflowStepActionCommandOutput,
} from "./commands/SendWorkflowStepActionCommand";
import {
  StartImagePipelineExecutionCommand,
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput,
} from "./commands/StartImagePipelineExecutionCommand";
import {
  StartResourceStateUpdateCommand,
  StartResourceStateUpdateCommandInput,
  StartResourceStateUpdateCommandOutput,
} from "./commands/StartResourceStateUpdateCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDistributionConfigurationCommand,
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput,
} from "./commands/UpdateDistributionConfigurationCommand";
import {
  UpdateImagePipelineCommand,
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput,
} from "./commands/UpdateImagePipelineCommand";
import {
  UpdateInfrastructureConfigurationCommand,
  UpdateInfrastructureConfigurationCommandInput,
  UpdateInfrastructureConfigurationCommandOutput,
} from "./commands/UpdateInfrastructureConfigurationCommand";
import {
  UpdateLifecyclePolicyCommand,
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
} from "./commands/UpdateLifecyclePolicyCommand";
import { ImagebuilderClient, ImagebuilderClientConfig } from "./ImagebuilderClient";

const commands = {
  CancelImageCreationCommand,
  CancelLifecycleExecutionCommand,
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
  ImportComponentCommand,
  ImportVmImageCommand,
  ListComponentBuildVersionsCommand,
  ListComponentsCommand,
  ListContainerRecipesCommand,
  ListDistributionConfigurationsCommand,
  ListImageBuildVersionsCommand,
  ListImagePackagesCommand,
  ListImagePipelineImagesCommand,
  ListImagePipelinesCommand,
  ListImageRecipesCommand,
  ListImagesCommand,
  ListImageScanFindingAggregationsCommand,
  ListImageScanFindingsCommand,
  ListInfrastructureConfigurationsCommand,
  ListLifecycleExecutionResourcesCommand,
  ListLifecycleExecutionsCommand,
  ListLifecyclePoliciesCommand,
  ListTagsForResourceCommand,
  ListWaitingWorkflowStepsCommand,
  ListWorkflowBuildVersionsCommand,
  ListWorkflowExecutionsCommand,
  ListWorkflowsCommand,
  ListWorkflowStepExecutionsCommand,
  PutComponentPolicyCommand,
  PutContainerRecipePolicyCommand,
  PutImagePolicyCommand,
  PutImageRecipePolicyCommand,
  SendWorkflowStepActionCommand,
  StartImagePipelineExecutionCommand,
  StartResourceStateUpdateCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDistributionConfigurationCommand,
  UpdateImagePipelineCommand,
  UpdateInfrastructureConfigurationCommand,
  UpdateLifecyclePolicyCommand,
};

export interface Imagebuilder {
  /**
   * @see {@link CancelImageCreationCommand}
   */
  cancelImageCreation(
    args: CancelImageCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelImageCreationCommandOutput>;
  cancelImageCreation(
    args: CancelImageCreationCommandInput,
    cb: (err: any, data?: CancelImageCreationCommandOutput) => void
  ): void;
  cancelImageCreation(
    args: CancelImageCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelImageCreationCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelLifecycleExecutionCommand}
   */
  cancelLifecycleExecution(
    args: CancelLifecycleExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelLifecycleExecutionCommandOutput>;
  cancelLifecycleExecution(
    args: CancelLifecycleExecutionCommandInput,
    cb: (err: any, data?: CancelLifecycleExecutionCommandOutput) => void
  ): void;
  cancelLifecycleExecution(
    args: CancelLifecycleExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelLifecycleExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComponentCommand}
   */
  createComponent(
    args: CreateComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComponentCommandOutput>;
  createComponent(args: CreateComponentCommandInput, cb: (err: any, data?: CreateComponentCommandOutput) => void): void;
  createComponent(
    args: CreateComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContainerRecipeCommand}
   */
  createContainerRecipe(
    args: CreateContainerRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContainerRecipeCommandOutput>;
  createContainerRecipe(
    args: CreateContainerRecipeCommandInput,
    cb: (err: any, data?: CreateContainerRecipeCommandOutput) => void
  ): void;
  createContainerRecipe(
    args: CreateContainerRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContainerRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDistributionConfigurationCommand}
   */
  createDistributionConfiguration(
    args: CreateDistributionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDistributionConfigurationCommandOutput>;
  createDistributionConfiguration(
    args: CreateDistributionConfigurationCommandInput,
    cb: (err: any, data?: CreateDistributionConfigurationCommandOutput) => void
  ): void;
  createDistributionConfiguration(
    args: CreateDistributionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDistributionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImageCommand}
   */
  createImage(args: CreateImageCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageCommandOutput>;
  createImage(args: CreateImageCommandInput, cb: (err: any, data?: CreateImageCommandOutput) => void): void;
  createImage(
    args: CreateImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImagePipelineCommand}
   */
  createImagePipeline(
    args: CreateImagePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImagePipelineCommandOutput>;
  createImagePipeline(
    args: CreateImagePipelineCommandInput,
    cb: (err: any, data?: CreateImagePipelineCommandOutput) => void
  ): void;
  createImagePipeline(
    args: CreateImagePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImagePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateImageRecipeCommand}
   */
  createImageRecipe(
    args: CreateImageRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImageRecipeCommandOutput>;
  createImageRecipe(
    args: CreateImageRecipeCommandInput,
    cb: (err: any, data?: CreateImageRecipeCommandOutput) => void
  ): void;
  createImageRecipe(
    args: CreateImageRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInfrastructureConfigurationCommand}
   */
  createInfrastructureConfiguration(
    args: CreateInfrastructureConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInfrastructureConfigurationCommandOutput>;
  createInfrastructureConfiguration(
    args: CreateInfrastructureConfigurationCommandInput,
    cb: (err: any, data?: CreateInfrastructureConfigurationCommandOutput) => void
  ): void;
  createInfrastructureConfiguration(
    args: CreateInfrastructureConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInfrastructureConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLifecyclePolicyCommand}
   */
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLifecyclePolicyCommandOutput>;
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkflowCommand}
   */
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  createWorkflow(args: CreateWorkflowCommandInput, cb: (err: any, data?: CreateWorkflowCommandOutput) => void): void;
  createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComponentCommand}
   */
  deleteComponent(
    args: DeleteComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComponentCommandOutput>;
  deleteComponent(args: DeleteComponentCommandInput, cb: (err: any, data?: DeleteComponentCommandOutput) => void): void;
  deleteComponent(
    args: DeleteComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContainerRecipeCommand}
   */
  deleteContainerRecipe(
    args: DeleteContainerRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContainerRecipeCommandOutput>;
  deleteContainerRecipe(
    args: DeleteContainerRecipeCommandInput,
    cb: (err: any, data?: DeleteContainerRecipeCommandOutput) => void
  ): void;
  deleteContainerRecipe(
    args: DeleteContainerRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContainerRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDistributionConfigurationCommand}
   */
  deleteDistributionConfiguration(
    args: DeleteDistributionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDistributionConfigurationCommandOutput>;
  deleteDistributionConfiguration(
    args: DeleteDistributionConfigurationCommandInput,
    cb: (err: any, data?: DeleteDistributionConfigurationCommandOutput) => void
  ): void;
  deleteDistributionConfiguration(
    args: DeleteDistributionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDistributionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImageCommand}
   */
  deleteImage(args: DeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageCommandOutput>;
  deleteImage(args: DeleteImageCommandInput, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
  deleteImage(
    args: DeleteImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImagePipelineCommand}
   */
  deleteImagePipeline(
    args: DeleteImagePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImagePipelineCommandOutput>;
  deleteImagePipeline(
    args: DeleteImagePipelineCommandInput,
    cb: (err: any, data?: DeleteImagePipelineCommandOutput) => void
  ): void;
  deleteImagePipeline(
    args: DeleteImagePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImagePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImageRecipeCommand}
   */
  deleteImageRecipe(
    args: DeleteImageRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImageRecipeCommandOutput>;
  deleteImageRecipe(
    args: DeleteImageRecipeCommandInput,
    cb: (err: any, data?: DeleteImageRecipeCommandOutput) => void
  ): void;
  deleteImageRecipe(
    args: DeleteImageRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInfrastructureConfigurationCommand}
   */
  deleteInfrastructureConfiguration(
    args: DeleteInfrastructureConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInfrastructureConfigurationCommandOutput>;
  deleteInfrastructureConfiguration(
    args: DeleteInfrastructureConfigurationCommandInput,
    cb: (err: any, data?: DeleteInfrastructureConfigurationCommandOutput) => void
  ): void;
  deleteInfrastructureConfiguration(
    args: DeleteInfrastructureConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInfrastructureConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkflowCommand}
   */
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  deleteWorkflow(args: DeleteWorkflowCommandInput, cb: (err: any, data?: DeleteWorkflowCommandOutput) => void): void;
  deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentCommand}
   */
  getComponent(args: GetComponentCommandInput, options?: __HttpHandlerOptions): Promise<GetComponentCommandOutput>;
  getComponent(args: GetComponentCommandInput, cb: (err: any, data?: GetComponentCommandOutput) => void): void;
  getComponent(
    args: GetComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetComponentPolicyCommand}
   */
  getComponentPolicy(
    args: GetComponentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComponentPolicyCommandOutput>;
  getComponentPolicy(
    args: GetComponentPolicyCommandInput,
    cb: (err: any, data?: GetComponentPolicyCommandOutput) => void
  ): void;
  getComponentPolicy(
    args: GetComponentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComponentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerRecipeCommand}
   */
  getContainerRecipe(
    args: GetContainerRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerRecipeCommandOutput>;
  getContainerRecipe(
    args: GetContainerRecipeCommandInput,
    cb: (err: any, data?: GetContainerRecipeCommandOutput) => void
  ): void;
  getContainerRecipe(
    args: GetContainerRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerRecipePolicyCommand}
   */
  getContainerRecipePolicy(
    args: GetContainerRecipePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerRecipePolicyCommandOutput>;
  getContainerRecipePolicy(
    args: GetContainerRecipePolicyCommandInput,
    cb: (err: any, data?: GetContainerRecipePolicyCommandOutput) => void
  ): void;
  getContainerRecipePolicy(
    args: GetContainerRecipePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerRecipePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDistributionConfigurationCommand}
   */
  getDistributionConfiguration(
    args: GetDistributionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDistributionConfigurationCommandOutput>;
  getDistributionConfiguration(
    args: GetDistributionConfigurationCommandInput,
    cb: (err: any, data?: GetDistributionConfigurationCommandOutput) => void
  ): void;
  getDistributionConfiguration(
    args: GetDistributionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDistributionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImageCommand}
   */
  getImage(args: GetImageCommandInput, options?: __HttpHandlerOptions): Promise<GetImageCommandOutput>;
  getImage(args: GetImageCommandInput, cb: (err: any, data?: GetImageCommandOutput) => void): void;
  getImage(
    args: GetImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImagePipelineCommand}
   */
  getImagePipeline(
    args: GetImagePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImagePipelineCommandOutput>;
  getImagePipeline(
    args: GetImagePipelineCommandInput,
    cb: (err: any, data?: GetImagePipelineCommandOutput) => void
  ): void;
  getImagePipeline(
    args: GetImagePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImagePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImagePolicyCommand}
   */
  getImagePolicy(
    args: GetImagePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImagePolicyCommandOutput>;
  getImagePolicy(args: GetImagePolicyCommandInput, cb: (err: any, data?: GetImagePolicyCommandOutput) => void): void;
  getImagePolicy(
    args: GetImagePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImagePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImageRecipeCommand}
   */
  getImageRecipe(
    args: GetImageRecipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImageRecipeCommandOutput>;
  getImageRecipe(args: GetImageRecipeCommandInput, cb: (err: any, data?: GetImageRecipeCommandOutput) => void): void;
  getImageRecipe(
    args: GetImageRecipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageRecipeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImageRecipePolicyCommand}
   */
  getImageRecipePolicy(
    args: GetImageRecipePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImageRecipePolicyCommandOutput>;
  getImageRecipePolicy(
    args: GetImageRecipePolicyCommandInput,
    cb: (err: any, data?: GetImageRecipePolicyCommandOutput) => void
  ): void;
  getImageRecipePolicy(
    args: GetImageRecipePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImageRecipePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInfrastructureConfigurationCommand}
   */
  getInfrastructureConfiguration(
    args: GetInfrastructureConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInfrastructureConfigurationCommandOutput>;
  getInfrastructureConfiguration(
    args: GetInfrastructureConfigurationCommandInput,
    cb: (err: any, data?: GetInfrastructureConfigurationCommandOutput) => void
  ): void;
  getInfrastructureConfiguration(
    args: GetInfrastructureConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInfrastructureConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLifecycleExecutionCommand}
   */
  getLifecycleExecution(
    args: GetLifecycleExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecycleExecutionCommandOutput>;
  getLifecycleExecution(
    args: GetLifecycleExecutionCommandInput,
    cb: (err: any, data?: GetLifecycleExecutionCommandOutput) => void
  ): void;
  getLifecycleExecution(
    args: GetLifecycleExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecycleExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLifecyclePolicyCommand}
   */
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePolicyCommandOutput>;
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMarketplaceResourceCommand}
   */
  getMarketplaceResource(
    args: GetMarketplaceResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMarketplaceResourceCommandOutput>;
  getMarketplaceResource(
    args: GetMarketplaceResourceCommandInput,
    cb: (err: any, data?: GetMarketplaceResourceCommandOutput) => void
  ): void;
  getMarketplaceResource(
    args: GetMarketplaceResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMarketplaceResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowCommand}
   */
  getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowExecutionCommand}
   */
  getWorkflowExecution(
    args: GetWorkflowExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowExecutionCommandOutput>;
  getWorkflowExecution(
    args: GetWorkflowExecutionCommandInput,
    cb: (err: any, data?: GetWorkflowExecutionCommandOutput) => void
  ): void;
  getWorkflowExecution(
    args: GetWorkflowExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkflowStepExecutionCommand}
   */
  getWorkflowStepExecution(
    args: GetWorkflowStepExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkflowStepExecutionCommandOutput>;
  getWorkflowStepExecution(
    args: GetWorkflowStepExecutionCommandInput,
    cb: (err: any, data?: GetWorkflowStepExecutionCommandOutput) => void
  ): void;
  getWorkflowStepExecution(
    args: GetWorkflowStepExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowStepExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportComponentCommand}
   */
  importComponent(
    args: ImportComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportComponentCommandOutput>;
  importComponent(args: ImportComponentCommandInput, cb: (err: any, data?: ImportComponentCommandOutput) => void): void;
  importComponent(
    args: ImportComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportVmImageCommand}
   */
  importVmImage(args: ImportVmImageCommandInput, options?: __HttpHandlerOptions): Promise<ImportVmImageCommandOutput>;
  importVmImage(args: ImportVmImageCommandInput, cb: (err: any, data?: ImportVmImageCommandOutput) => void): void;
  importVmImage(
    args: ImportVmImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportVmImageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentBuildVersionsCommand}
   */
  listComponentBuildVersions(
    args: ListComponentBuildVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentBuildVersionsCommandOutput>;
  listComponentBuildVersions(
    args: ListComponentBuildVersionsCommandInput,
    cb: (err: any, data?: ListComponentBuildVersionsCommandOutput) => void
  ): void;
  listComponentBuildVersions(
    args: ListComponentBuildVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentBuildVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComponentsCommand}
   */
  listComponents(): Promise<ListComponentsCommandOutput>;
  listComponents(
    args: ListComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComponentsCommandOutput>;
  listComponents(args: ListComponentsCommandInput, cb: (err: any, data?: ListComponentsCommandOutput) => void): void;
  listComponents(
    args: ListComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContainerRecipesCommand}
   */
  listContainerRecipes(): Promise<ListContainerRecipesCommandOutput>;
  listContainerRecipes(
    args: ListContainerRecipesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContainerRecipesCommandOutput>;
  listContainerRecipes(
    args: ListContainerRecipesCommandInput,
    cb: (err: any, data?: ListContainerRecipesCommandOutput) => void
  ): void;
  listContainerRecipes(
    args: ListContainerRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContainerRecipesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDistributionConfigurationsCommand}
   */
  listDistributionConfigurations(): Promise<ListDistributionConfigurationsCommandOutput>;
  listDistributionConfigurations(
    args: ListDistributionConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDistributionConfigurationsCommandOutput>;
  listDistributionConfigurations(
    args: ListDistributionConfigurationsCommandInput,
    cb: (err: any, data?: ListDistributionConfigurationsCommandOutput) => void
  ): void;
  listDistributionConfigurations(
    args: ListDistributionConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDistributionConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImageBuildVersionsCommand}
   */
  listImageBuildVersions(
    args: ListImageBuildVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageBuildVersionsCommandOutput>;
  listImageBuildVersions(
    args: ListImageBuildVersionsCommandInput,
    cb: (err: any, data?: ListImageBuildVersionsCommandOutput) => void
  ): void;
  listImageBuildVersions(
    args: ListImageBuildVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageBuildVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImagePackagesCommand}
   */
  listImagePackages(
    args: ListImagePackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImagePackagesCommandOutput>;
  listImagePackages(
    args: ListImagePackagesCommandInput,
    cb: (err: any, data?: ListImagePackagesCommandOutput) => void
  ): void;
  listImagePackages(
    args: ListImagePackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagePackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImagePipelineImagesCommand}
   */
  listImagePipelineImages(
    args: ListImagePipelineImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImagePipelineImagesCommandOutput>;
  listImagePipelineImages(
    args: ListImagePipelineImagesCommandInput,
    cb: (err: any, data?: ListImagePipelineImagesCommandOutput) => void
  ): void;
  listImagePipelineImages(
    args: ListImagePipelineImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagePipelineImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImagePipelinesCommand}
   */
  listImagePipelines(): Promise<ListImagePipelinesCommandOutput>;
  listImagePipelines(
    args: ListImagePipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImagePipelinesCommandOutput>;
  listImagePipelines(
    args: ListImagePipelinesCommandInput,
    cb: (err: any, data?: ListImagePipelinesCommandOutput) => void
  ): void;
  listImagePipelines(
    args: ListImagePipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagePipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImageRecipesCommand}
   */
  listImageRecipes(): Promise<ListImageRecipesCommandOutput>;
  listImageRecipes(
    args: ListImageRecipesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageRecipesCommandOutput>;
  listImageRecipes(
    args: ListImageRecipesCommandInput,
    cb: (err: any, data?: ListImageRecipesCommandOutput) => void
  ): void;
  listImageRecipes(
    args: ListImageRecipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageRecipesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImagesCommand}
   */
  listImages(): Promise<ListImagesCommandOutput>;
  listImages(args: ListImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagesCommandOutput>;
  listImages(args: ListImagesCommandInput, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
  listImages(
    args: ListImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImageScanFindingAggregationsCommand}
   */
  listImageScanFindingAggregations(): Promise<ListImageScanFindingAggregationsCommandOutput>;
  listImageScanFindingAggregations(
    args: ListImageScanFindingAggregationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageScanFindingAggregationsCommandOutput>;
  listImageScanFindingAggregations(
    args: ListImageScanFindingAggregationsCommandInput,
    cb: (err: any, data?: ListImageScanFindingAggregationsCommandOutput) => void
  ): void;
  listImageScanFindingAggregations(
    args: ListImageScanFindingAggregationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageScanFindingAggregationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImageScanFindingsCommand}
   */
  listImageScanFindings(): Promise<ListImageScanFindingsCommandOutput>;
  listImageScanFindings(
    args: ListImageScanFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageScanFindingsCommandOutput>;
  listImageScanFindings(
    args: ListImageScanFindingsCommandInput,
    cb: (err: any, data?: ListImageScanFindingsCommandOutput) => void
  ): void;
  listImageScanFindings(
    args: ListImageScanFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageScanFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInfrastructureConfigurationsCommand}
   */
  listInfrastructureConfigurations(): Promise<ListInfrastructureConfigurationsCommandOutput>;
  listInfrastructureConfigurations(
    args: ListInfrastructureConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInfrastructureConfigurationsCommandOutput>;
  listInfrastructureConfigurations(
    args: ListInfrastructureConfigurationsCommandInput,
    cb: (err: any, data?: ListInfrastructureConfigurationsCommandOutput) => void
  ): void;
  listInfrastructureConfigurations(
    args: ListInfrastructureConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInfrastructureConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLifecycleExecutionResourcesCommand}
   */
  listLifecycleExecutionResources(
    args: ListLifecycleExecutionResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLifecycleExecutionResourcesCommandOutput>;
  listLifecycleExecutionResources(
    args: ListLifecycleExecutionResourcesCommandInput,
    cb: (err: any, data?: ListLifecycleExecutionResourcesCommandOutput) => void
  ): void;
  listLifecycleExecutionResources(
    args: ListLifecycleExecutionResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLifecycleExecutionResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLifecycleExecutionsCommand}
   */
  listLifecycleExecutions(
    args: ListLifecycleExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLifecycleExecutionsCommandOutput>;
  listLifecycleExecutions(
    args: ListLifecycleExecutionsCommandInput,
    cb: (err: any, data?: ListLifecycleExecutionsCommandOutput) => void
  ): void;
  listLifecycleExecutions(
    args: ListLifecycleExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLifecycleExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLifecyclePoliciesCommand}
   */
  listLifecyclePolicies(): Promise<ListLifecyclePoliciesCommandOutput>;
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLifecyclePoliciesCommandOutput>;
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    cb: (err: any, data?: ListLifecyclePoliciesCommandOutput) => void
  ): void;
  listLifecyclePolicies(
    args: ListLifecyclePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLifecyclePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWaitingWorkflowStepsCommand}
   */
  listWaitingWorkflowSteps(): Promise<ListWaitingWorkflowStepsCommandOutput>;
  listWaitingWorkflowSteps(
    args: ListWaitingWorkflowStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWaitingWorkflowStepsCommandOutput>;
  listWaitingWorkflowSteps(
    args: ListWaitingWorkflowStepsCommandInput,
    cb: (err: any, data?: ListWaitingWorkflowStepsCommandOutput) => void
  ): void;
  listWaitingWorkflowSteps(
    args: ListWaitingWorkflowStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWaitingWorkflowStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowBuildVersionsCommand}
   */
  listWorkflowBuildVersions(
    args: ListWorkflowBuildVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowBuildVersionsCommandOutput>;
  listWorkflowBuildVersions(
    args: ListWorkflowBuildVersionsCommandInput,
    cb: (err: any, data?: ListWorkflowBuildVersionsCommandOutput) => void
  ): void;
  listWorkflowBuildVersions(
    args: ListWorkflowBuildVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowBuildVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowExecutionsCommand}
   */
  listWorkflowExecutions(
    args: ListWorkflowExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowExecutionsCommandOutput>;
  listWorkflowExecutions(
    args: ListWorkflowExecutionsCommandInput,
    cb: (err: any, data?: ListWorkflowExecutionsCommandOutput) => void
  ): void;
  listWorkflowExecutions(
    args: ListWorkflowExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowsCommand}
   */
  listWorkflows(): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkflowsCommandOutput>;
  listWorkflows(args: ListWorkflowsCommandInput, cb: (err: any, data?: ListWorkflowsCommandOutput) => void): void;
  listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkflowStepExecutionsCommand}
   */
  listWorkflowStepExecutions(
    args: ListWorkflowStepExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowStepExecutionsCommandOutput>;
  listWorkflowStepExecutions(
    args: ListWorkflowStepExecutionsCommandInput,
    cb: (err: any, data?: ListWorkflowStepExecutionsCommandOutput) => void
  ): void;
  listWorkflowStepExecutions(
    args: ListWorkflowStepExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowStepExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutComponentPolicyCommand}
   */
  putComponentPolicy(
    args: PutComponentPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutComponentPolicyCommandOutput>;
  putComponentPolicy(
    args: PutComponentPolicyCommandInput,
    cb: (err: any, data?: PutComponentPolicyCommandOutput) => void
  ): void;
  putComponentPolicy(
    args: PutComponentPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutComponentPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutContainerRecipePolicyCommand}
   */
  putContainerRecipePolicy(
    args: PutContainerRecipePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutContainerRecipePolicyCommandOutput>;
  putContainerRecipePolicy(
    args: PutContainerRecipePolicyCommandInput,
    cb: (err: any, data?: PutContainerRecipePolicyCommandOutput) => void
  ): void;
  putContainerRecipePolicy(
    args: PutContainerRecipePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutContainerRecipePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutImagePolicyCommand}
   */
  putImagePolicy(
    args: PutImagePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImagePolicyCommandOutput>;
  putImagePolicy(args: PutImagePolicyCommandInput, cb: (err: any, data?: PutImagePolicyCommandOutput) => void): void;
  putImagePolicy(
    args: PutImagePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImagePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutImageRecipePolicyCommand}
   */
  putImageRecipePolicy(
    args: PutImageRecipePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutImageRecipePolicyCommandOutput>;
  putImageRecipePolicy(
    args: PutImageRecipePolicyCommandInput,
    cb: (err: any, data?: PutImageRecipePolicyCommandOutput) => void
  ): void;
  putImageRecipePolicy(
    args: PutImageRecipePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutImageRecipePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link SendWorkflowStepActionCommand}
   */
  sendWorkflowStepAction(
    args: SendWorkflowStepActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendWorkflowStepActionCommandOutput>;
  sendWorkflowStepAction(
    args: SendWorkflowStepActionCommandInput,
    cb: (err: any, data?: SendWorkflowStepActionCommandOutput) => void
  ): void;
  sendWorkflowStepAction(
    args: SendWorkflowStepActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendWorkflowStepActionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartImagePipelineExecutionCommand}
   */
  startImagePipelineExecution(
    args: StartImagePipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartImagePipelineExecutionCommandOutput>;
  startImagePipelineExecution(
    args: StartImagePipelineExecutionCommandInput,
    cb: (err: any, data?: StartImagePipelineExecutionCommandOutput) => void
  ): void;
  startImagePipelineExecution(
    args: StartImagePipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartImagePipelineExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StartResourceStateUpdateCommand}
   */
  startResourceStateUpdate(
    args: StartResourceStateUpdateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartResourceStateUpdateCommandOutput>;
  startResourceStateUpdate(
    args: StartResourceStateUpdateCommandInput,
    cb: (err: any, data?: StartResourceStateUpdateCommandOutput) => void
  ): void;
  startResourceStateUpdate(
    args: StartResourceStateUpdateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartResourceStateUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDistributionConfigurationCommand}
   */
  updateDistributionConfiguration(
    args: UpdateDistributionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDistributionConfigurationCommandOutput>;
  updateDistributionConfiguration(
    args: UpdateDistributionConfigurationCommandInput,
    cb: (err: any, data?: UpdateDistributionConfigurationCommandOutput) => void
  ): void;
  updateDistributionConfiguration(
    args: UpdateDistributionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDistributionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateImagePipelineCommand}
   */
  updateImagePipeline(
    args: UpdateImagePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImagePipelineCommandOutput>;
  updateImagePipeline(
    args: UpdateImagePipelineCommandInput,
    cb: (err: any, data?: UpdateImagePipelineCommandOutput) => void
  ): void;
  updateImagePipeline(
    args: UpdateImagePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImagePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInfrastructureConfigurationCommand}
   */
  updateInfrastructureConfiguration(
    args: UpdateInfrastructureConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInfrastructureConfigurationCommandOutput>;
  updateInfrastructureConfiguration(
    args: UpdateInfrastructureConfigurationCommandInput,
    cb: (err: any, data?: UpdateInfrastructureConfigurationCommandOutput) => void
  ): void;
  updateInfrastructureConfiguration(
    args: UpdateInfrastructureConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInfrastructureConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLifecyclePolicyCommand}
   */
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLifecyclePolicyCommandOutput>;
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;
}

/**
 * <p>EC2 Image Builder is a fully managed Amazon Web Services service that makes it easier to automate the
 * 			creation, management, and deployment of customized, secure, and up-to-date
 * 			"golden" server images that are pre-installed and pre-configured with software
 * 			and settings to meet specific IT standards.</p>
 * @public
 */
export class Imagebuilder extends ImagebuilderClient implements Imagebuilder {}
createAggregatedClient(commands, Imagebuilder);
