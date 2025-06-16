// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BedrockClient, BedrockClientConfig } from "./BedrockClient";
import {
  BatchDeleteEvaluationJobCommand,
  BatchDeleteEvaluationJobCommandInput,
  BatchDeleteEvaluationJobCommandOutput,
} from "./commands/BatchDeleteEvaluationJobCommand";
import {
  CreateCustomModelCommand,
  CreateCustomModelCommandInput,
  CreateCustomModelCommandOutput,
} from "./commands/CreateCustomModelCommand";
import {
  CreateEvaluationJobCommand,
  CreateEvaluationJobCommandInput,
  CreateEvaluationJobCommandOutput,
} from "./commands/CreateEvaluationJobCommand";
import {
  CreateGuardrailCommand,
  CreateGuardrailCommandInput,
  CreateGuardrailCommandOutput,
} from "./commands/CreateGuardrailCommand";
import {
  CreateGuardrailVersionCommand,
  CreateGuardrailVersionCommandInput,
  CreateGuardrailVersionCommandOutput,
} from "./commands/CreateGuardrailVersionCommand";
import {
  CreateInferenceProfileCommand,
  CreateInferenceProfileCommandInput,
  CreateInferenceProfileCommandOutput,
} from "./commands/CreateInferenceProfileCommand";
import {
  CreateMarketplaceModelEndpointCommand,
  CreateMarketplaceModelEndpointCommandInput,
  CreateMarketplaceModelEndpointCommandOutput,
} from "./commands/CreateMarketplaceModelEndpointCommand";
import {
  CreateModelCopyJobCommand,
  CreateModelCopyJobCommandInput,
  CreateModelCopyJobCommandOutput,
} from "./commands/CreateModelCopyJobCommand";
import {
  CreateModelCustomizationJobCommand,
  CreateModelCustomizationJobCommandInput,
  CreateModelCustomizationJobCommandOutput,
} from "./commands/CreateModelCustomizationJobCommand";
import {
  CreateModelImportJobCommand,
  CreateModelImportJobCommandInput,
  CreateModelImportJobCommandOutput,
} from "./commands/CreateModelImportJobCommand";
import {
  CreateModelInvocationJobCommand,
  CreateModelInvocationJobCommandInput,
  CreateModelInvocationJobCommandOutput,
} from "./commands/CreateModelInvocationJobCommand";
import {
  CreatePromptRouterCommand,
  CreatePromptRouterCommandInput,
  CreatePromptRouterCommandOutput,
} from "./commands/CreatePromptRouterCommand";
import {
  CreateProvisionedModelThroughputCommand,
  CreateProvisionedModelThroughputCommandInput,
  CreateProvisionedModelThroughputCommandOutput,
} from "./commands/CreateProvisionedModelThroughputCommand";
import {
  DeleteCustomModelCommand,
  DeleteCustomModelCommandInput,
  DeleteCustomModelCommandOutput,
} from "./commands/DeleteCustomModelCommand";
import {
  DeleteGuardrailCommand,
  DeleteGuardrailCommandInput,
  DeleteGuardrailCommandOutput,
} from "./commands/DeleteGuardrailCommand";
import {
  DeleteImportedModelCommand,
  DeleteImportedModelCommandInput,
  DeleteImportedModelCommandOutput,
} from "./commands/DeleteImportedModelCommand";
import {
  DeleteInferenceProfileCommand,
  DeleteInferenceProfileCommandInput,
  DeleteInferenceProfileCommandOutput,
} from "./commands/DeleteInferenceProfileCommand";
import {
  DeleteMarketplaceModelEndpointCommand,
  DeleteMarketplaceModelEndpointCommandInput,
  DeleteMarketplaceModelEndpointCommandOutput,
} from "./commands/DeleteMarketplaceModelEndpointCommand";
import {
  DeleteModelInvocationLoggingConfigurationCommand,
  DeleteModelInvocationLoggingConfigurationCommandInput,
  DeleteModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/DeleteModelInvocationLoggingConfigurationCommand";
import {
  DeletePromptRouterCommand,
  DeletePromptRouterCommandInput,
  DeletePromptRouterCommandOutput,
} from "./commands/DeletePromptRouterCommand";
import {
  DeleteProvisionedModelThroughputCommand,
  DeleteProvisionedModelThroughputCommandInput,
  DeleteProvisionedModelThroughputCommandOutput,
} from "./commands/DeleteProvisionedModelThroughputCommand";
import {
  DeregisterMarketplaceModelEndpointCommand,
  DeregisterMarketplaceModelEndpointCommandInput,
  DeregisterMarketplaceModelEndpointCommandOutput,
} from "./commands/DeregisterMarketplaceModelEndpointCommand";
import {
  GetCustomModelCommand,
  GetCustomModelCommandInput,
  GetCustomModelCommandOutput,
} from "./commands/GetCustomModelCommand";
import {
  GetEvaluationJobCommand,
  GetEvaluationJobCommandInput,
  GetEvaluationJobCommandOutput,
} from "./commands/GetEvaluationJobCommand";
import {
  GetFoundationModelCommand,
  GetFoundationModelCommandInput,
  GetFoundationModelCommandOutput,
} from "./commands/GetFoundationModelCommand";
import {
  GetGuardrailCommand,
  GetGuardrailCommandInput,
  GetGuardrailCommandOutput,
} from "./commands/GetGuardrailCommand";
import {
  GetImportedModelCommand,
  GetImportedModelCommandInput,
  GetImportedModelCommandOutput,
} from "./commands/GetImportedModelCommand";
import {
  GetInferenceProfileCommand,
  GetInferenceProfileCommandInput,
  GetInferenceProfileCommandOutput,
} from "./commands/GetInferenceProfileCommand";
import {
  GetMarketplaceModelEndpointCommand,
  GetMarketplaceModelEndpointCommandInput,
  GetMarketplaceModelEndpointCommandOutput,
} from "./commands/GetMarketplaceModelEndpointCommand";
import {
  GetModelCopyJobCommand,
  GetModelCopyJobCommandInput,
  GetModelCopyJobCommandOutput,
} from "./commands/GetModelCopyJobCommand";
import {
  GetModelCustomizationJobCommand,
  GetModelCustomizationJobCommandInput,
  GetModelCustomizationJobCommandOutput,
} from "./commands/GetModelCustomizationJobCommand";
import {
  GetModelImportJobCommand,
  GetModelImportJobCommandInput,
  GetModelImportJobCommandOutput,
} from "./commands/GetModelImportJobCommand";
import {
  GetModelInvocationJobCommand,
  GetModelInvocationJobCommandInput,
  GetModelInvocationJobCommandOutput,
} from "./commands/GetModelInvocationJobCommand";
import {
  GetModelInvocationLoggingConfigurationCommand,
  GetModelInvocationLoggingConfigurationCommandInput,
  GetModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/GetModelInvocationLoggingConfigurationCommand";
import {
  GetPromptRouterCommand,
  GetPromptRouterCommandInput,
  GetPromptRouterCommandOutput,
} from "./commands/GetPromptRouterCommand";
import {
  GetProvisionedModelThroughputCommand,
  GetProvisionedModelThroughputCommandInput,
  GetProvisionedModelThroughputCommandOutput,
} from "./commands/GetProvisionedModelThroughputCommand";
import {
  ListCustomModelsCommand,
  ListCustomModelsCommandInput,
  ListCustomModelsCommandOutput,
} from "./commands/ListCustomModelsCommand";
import {
  ListEvaluationJobsCommand,
  ListEvaluationJobsCommandInput,
  ListEvaluationJobsCommandOutput,
} from "./commands/ListEvaluationJobsCommand";
import {
  ListFoundationModelsCommand,
  ListFoundationModelsCommandInput,
  ListFoundationModelsCommandOutput,
} from "./commands/ListFoundationModelsCommand";
import {
  ListGuardrailsCommand,
  ListGuardrailsCommandInput,
  ListGuardrailsCommandOutput,
} from "./commands/ListGuardrailsCommand";
import {
  ListImportedModelsCommand,
  ListImportedModelsCommandInput,
  ListImportedModelsCommandOutput,
} from "./commands/ListImportedModelsCommand";
import {
  ListInferenceProfilesCommand,
  ListInferenceProfilesCommandInput,
  ListInferenceProfilesCommandOutput,
} from "./commands/ListInferenceProfilesCommand";
import {
  ListMarketplaceModelEndpointsCommand,
  ListMarketplaceModelEndpointsCommandInput,
  ListMarketplaceModelEndpointsCommandOutput,
} from "./commands/ListMarketplaceModelEndpointsCommand";
import {
  ListModelCopyJobsCommand,
  ListModelCopyJobsCommandInput,
  ListModelCopyJobsCommandOutput,
} from "./commands/ListModelCopyJobsCommand";
import {
  ListModelCustomizationJobsCommand,
  ListModelCustomizationJobsCommandInput,
  ListModelCustomizationJobsCommandOutput,
} from "./commands/ListModelCustomizationJobsCommand";
import {
  ListModelImportJobsCommand,
  ListModelImportJobsCommandInput,
  ListModelImportJobsCommandOutput,
} from "./commands/ListModelImportJobsCommand";
import {
  ListModelInvocationJobsCommand,
  ListModelInvocationJobsCommandInput,
  ListModelInvocationJobsCommandOutput,
} from "./commands/ListModelInvocationJobsCommand";
import {
  ListPromptRoutersCommand,
  ListPromptRoutersCommandInput,
  ListPromptRoutersCommandOutput,
} from "./commands/ListPromptRoutersCommand";
import {
  ListProvisionedModelThroughputsCommand,
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput,
} from "./commands/ListProvisionedModelThroughputsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutModelInvocationLoggingConfigurationCommand,
  PutModelInvocationLoggingConfigurationCommandInput,
  PutModelInvocationLoggingConfigurationCommandOutput,
} from "./commands/PutModelInvocationLoggingConfigurationCommand";
import {
  RegisterMarketplaceModelEndpointCommand,
  RegisterMarketplaceModelEndpointCommandInput,
  RegisterMarketplaceModelEndpointCommandOutput,
} from "./commands/RegisterMarketplaceModelEndpointCommand";
import {
  StopEvaluationJobCommand,
  StopEvaluationJobCommandInput,
  StopEvaluationJobCommandOutput,
} from "./commands/StopEvaluationJobCommand";
import {
  StopModelCustomizationJobCommand,
  StopModelCustomizationJobCommandInput,
  StopModelCustomizationJobCommandOutput,
} from "./commands/StopModelCustomizationJobCommand";
import {
  StopModelInvocationJobCommand,
  StopModelInvocationJobCommandInput,
  StopModelInvocationJobCommandOutput,
} from "./commands/StopModelInvocationJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateGuardrailCommand,
  UpdateGuardrailCommandInput,
  UpdateGuardrailCommandOutput,
} from "./commands/UpdateGuardrailCommand";
import {
  UpdateMarketplaceModelEndpointCommand,
  UpdateMarketplaceModelEndpointCommandInput,
  UpdateMarketplaceModelEndpointCommandOutput,
} from "./commands/UpdateMarketplaceModelEndpointCommand";
import {
  UpdateProvisionedModelThroughputCommand,
  UpdateProvisionedModelThroughputCommandInput,
  UpdateProvisionedModelThroughputCommandOutput,
} from "./commands/UpdateProvisionedModelThroughputCommand";

const commands = {
  BatchDeleteEvaluationJobCommand,
  CreateCustomModelCommand,
  CreateEvaluationJobCommand,
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
  DeleteCustomModelCommand,
  DeleteGuardrailCommand,
  DeleteImportedModelCommand,
  DeleteInferenceProfileCommand,
  DeleteMarketplaceModelEndpointCommand,
  DeleteModelInvocationLoggingConfigurationCommand,
  DeletePromptRouterCommand,
  DeleteProvisionedModelThroughputCommand,
  DeregisterMarketplaceModelEndpointCommand,
  GetCustomModelCommand,
  GetEvaluationJobCommand,
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
  ListCustomModelsCommand,
  ListEvaluationJobsCommand,
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
  PutModelInvocationLoggingConfigurationCommand,
  RegisterMarketplaceModelEndpointCommand,
  StopEvaluationJobCommand,
  StopModelCustomizationJobCommand,
  StopModelInvocationJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateGuardrailCommand,
  UpdateMarketplaceModelEndpointCommand,
  UpdateProvisionedModelThroughputCommand,
};

export interface Bedrock {
  /**
   * @see {@link BatchDeleteEvaluationJobCommand}
   */
  batchDeleteEvaluationJob(
    args: BatchDeleteEvaluationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteEvaluationJobCommandOutput>;
  batchDeleteEvaluationJob(
    args: BatchDeleteEvaluationJobCommandInput,
    cb: (err: any, data?: BatchDeleteEvaluationJobCommandOutput) => void
  ): void;
  batchDeleteEvaluationJob(
    args: BatchDeleteEvaluationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteEvaluationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCustomModelCommand}
   */
  createCustomModel(
    args: CreateCustomModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomModelCommandOutput>;
  createCustomModel(
    args: CreateCustomModelCommandInput,
    cb: (err: any, data?: CreateCustomModelCommandOutput) => void
  ): void;
  createCustomModel(
    args: CreateCustomModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEvaluationJobCommand}
   */
  createEvaluationJob(
    args: CreateEvaluationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEvaluationJobCommandOutput>;
  createEvaluationJob(
    args: CreateEvaluationJobCommandInput,
    cb: (err: any, data?: CreateEvaluationJobCommandOutput) => void
  ): void;
  createEvaluationJob(
    args: CreateEvaluationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEvaluationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGuardrailCommand}
   */
  createGuardrail(
    args: CreateGuardrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGuardrailCommandOutput>;
  createGuardrail(args: CreateGuardrailCommandInput, cb: (err: any, data?: CreateGuardrailCommandOutput) => void): void;
  createGuardrail(
    args: CreateGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGuardrailVersionCommand}
   */
  createGuardrailVersion(
    args: CreateGuardrailVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGuardrailVersionCommandOutput>;
  createGuardrailVersion(
    args: CreateGuardrailVersionCommandInput,
    cb: (err: any, data?: CreateGuardrailVersionCommandOutput) => void
  ): void;
  createGuardrailVersion(
    args: CreateGuardrailVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGuardrailVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInferenceProfileCommand}
   */
  createInferenceProfile(
    args: CreateInferenceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInferenceProfileCommandOutput>;
  createInferenceProfile(
    args: CreateInferenceProfileCommandInput,
    cb: (err: any, data?: CreateInferenceProfileCommandOutput) => void
  ): void;
  createInferenceProfile(
    args: CreateInferenceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInferenceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMarketplaceModelEndpointCommand}
   */
  createMarketplaceModelEndpoint(
    args: CreateMarketplaceModelEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMarketplaceModelEndpointCommandOutput>;
  createMarketplaceModelEndpoint(
    args: CreateMarketplaceModelEndpointCommandInput,
    cb: (err: any, data?: CreateMarketplaceModelEndpointCommandOutput) => void
  ): void;
  createMarketplaceModelEndpoint(
    args: CreateMarketplaceModelEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMarketplaceModelEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelCopyJobCommand}
   */
  createModelCopyJob(
    args: CreateModelCopyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelCopyJobCommandOutput>;
  createModelCopyJob(
    args: CreateModelCopyJobCommandInput,
    cb: (err: any, data?: CreateModelCopyJobCommandOutput) => void
  ): void;
  createModelCopyJob(
    args: CreateModelCopyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCopyJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelCustomizationJobCommand}
   */
  createModelCustomizationJob(
    args: CreateModelCustomizationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelCustomizationJobCommandOutput>;
  createModelCustomizationJob(
    args: CreateModelCustomizationJobCommandInput,
    cb: (err: any, data?: CreateModelCustomizationJobCommandOutput) => void
  ): void;
  createModelCustomizationJob(
    args: CreateModelCustomizationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCustomizationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelImportJobCommand}
   */
  createModelImportJob(
    args: CreateModelImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelImportJobCommandOutput>;
  createModelImportJob(
    args: CreateModelImportJobCommandInput,
    cb: (err: any, data?: CreateModelImportJobCommandOutput) => void
  ): void;
  createModelImportJob(
    args: CreateModelImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelInvocationJobCommand}
   */
  createModelInvocationJob(
    args: CreateModelInvocationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelInvocationJobCommandOutput>;
  createModelInvocationJob(
    args: CreateModelInvocationJobCommandInput,
    cb: (err: any, data?: CreateModelInvocationJobCommandOutput) => void
  ): void;
  createModelInvocationJob(
    args: CreateModelInvocationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelInvocationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePromptRouterCommand}
   */
  createPromptRouter(
    args: CreatePromptRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePromptRouterCommandOutput>;
  createPromptRouter(
    args: CreatePromptRouterCommandInput,
    cb: (err: any, data?: CreatePromptRouterCommandOutput) => void
  ): void;
  createPromptRouter(
    args: CreatePromptRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePromptRouterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProvisionedModelThroughputCommand}
   */
  createProvisionedModelThroughput(
    args: CreateProvisionedModelThroughputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProvisionedModelThroughputCommandOutput>;
  createProvisionedModelThroughput(
    args: CreateProvisionedModelThroughputCommandInput,
    cb: (err: any, data?: CreateProvisionedModelThroughputCommandOutput) => void
  ): void;
  createProvisionedModelThroughput(
    args: CreateProvisionedModelThroughputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProvisionedModelThroughputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCustomModelCommand}
   */
  deleteCustomModel(
    args: DeleteCustomModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomModelCommandOutput>;
  deleteCustomModel(
    args: DeleteCustomModelCommandInput,
    cb: (err: any, data?: DeleteCustomModelCommandOutput) => void
  ): void;
  deleteCustomModel(
    args: DeleteCustomModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGuardrailCommand}
   */
  deleteGuardrail(
    args: DeleteGuardrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGuardrailCommandOutput>;
  deleteGuardrail(args: DeleteGuardrailCommandInput, cb: (err: any, data?: DeleteGuardrailCommandOutput) => void): void;
  deleteGuardrail(
    args: DeleteGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteImportedModelCommand}
   */
  deleteImportedModel(
    args: DeleteImportedModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImportedModelCommandOutput>;
  deleteImportedModel(
    args: DeleteImportedModelCommandInput,
    cb: (err: any, data?: DeleteImportedModelCommandOutput) => void
  ): void;
  deleteImportedModel(
    args: DeleteImportedModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImportedModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInferenceProfileCommand}
   */
  deleteInferenceProfile(
    args: DeleteInferenceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInferenceProfileCommandOutput>;
  deleteInferenceProfile(
    args: DeleteInferenceProfileCommandInput,
    cb: (err: any, data?: DeleteInferenceProfileCommandOutput) => void
  ): void;
  deleteInferenceProfile(
    args: DeleteInferenceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInferenceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMarketplaceModelEndpointCommand}
   */
  deleteMarketplaceModelEndpoint(
    args: DeleteMarketplaceModelEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMarketplaceModelEndpointCommandOutput>;
  deleteMarketplaceModelEndpoint(
    args: DeleteMarketplaceModelEndpointCommandInput,
    cb: (err: any, data?: DeleteMarketplaceModelEndpointCommandOutput) => void
  ): void;
  deleteMarketplaceModelEndpoint(
    args: DeleteMarketplaceModelEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMarketplaceModelEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelInvocationLoggingConfigurationCommand}
   */
  deleteModelInvocationLoggingConfiguration(): Promise<DeleteModelInvocationLoggingConfigurationCommandOutput>;
  deleteModelInvocationLoggingConfiguration(
    args: DeleteModelInvocationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelInvocationLoggingConfigurationCommandOutput>;
  deleteModelInvocationLoggingConfiguration(
    args: DeleteModelInvocationLoggingConfigurationCommandInput,
    cb: (err: any, data?: DeleteModelInvocationLoggingConfigurationCommandOutput) => void
  ): void;
  deleteModelInvocationLoggingConfiguration(
    args: DeleteModelInvocationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelInvocationLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePromptRouterCommand}
   */
  deletePromptRouter(
    args: DeletePromptRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePromptRouterCommandOutput>;
  deletePromptRouter(
    args: DeletePromptRouterCommandInput,
    cb: (err: any, data?: DeletePromptRouterCommandOutput) => void
  ): void;
  deletePromptRouter(
    args: DeletePromptRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePromptRouterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProvisionedModelThroughputCommand}
   */
  deleteProvisionedModelThroughput(
    args: DeleteProvisionedModelThroughputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProvisionedModelThroughputCommandOutput>;
  deleteProvisionedModelThroughput(
    args: DeleteProvisionedModelThroughputCommandInput,
    cb: (err: any, data?: DeleteProvisionedModelThroughputCommandOutput) => void
  ): void;
  deleteProvisionedModelThroughput(
    args: DeleteProvisionedModelThroughputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProvisionedModelThroughputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterMarketplaceModelEndpointCommand}
   */
  deregisterMarketplaceModelEndpoint(
    args: DeregisterMarketplaceModelEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterMarketplaceModelEndpointCommandOutput>;
  deregisterMarketplaceModelEndpoint(
    args: DeregisterMarketplaceModelEndpointCommandInput,
    cb: (err: any, data?: DeregisterMarketplaceModelEndpointCommandOutput) => void
  ): void;
  deregisterMarketplaceModelEndpoint(
    args: DeregisterMarketplaceModelEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterMarketplaceModelEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCustomModelCommand}
   */
  getCustomModel(
    args: GetCustomModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCustomModelCommandOutput>;
  getCustomModel(args: GetCustomModelCommandInput, cb: (err: any, data?: GetCustomModelCommandOutput) => void): void;
  getCustomModel(
    args: GetCustomModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCustomModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEvaluationJobCommand}
   */
  getEvaluationJob(
    args: GetEvaluationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvaluationJobCommandOutput>;
  getEvaluationJob(
    args: GetEvaluationJobCommandInput,
    cb: (err: any, data?: GetEvaluationJobCommandOutput) => void
  ): void;
  getEvaluationJob(
    args: GetEvaluationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvaluationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFoundationModelCommand}
   */
  getFoundationModel(
    args: GetFoundationModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFoundationModelCommandOutput>;
  getFoundationModel(
    args: GetFoundationModelCommandInput,
    cb: (err: any, data?: GetFoundationModelCommandOutput) => void
  ): void;
  getFoundationModel(
    args: GetFoundationModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFoundationModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGuardrailCommand}
   */
  getGuardrail(args: GetGuardrailCommandInput, options?: __HttpHandlerOptions): Promise<GetGuardrailCommandOutput>;
  getGuardrail(args: GetGuardrailCommandInput, cb: (err: any, data?: GetGuardrailCommandOutput) => void): void;
  getGuardrail(
    args: GetGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link GetImportedModelCommand}
   */
  getImportedModel(
    args: GetImportedModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetImportedModelCommandOutput>;
  getImportedModel(
    args: GetImportedModelCommandInput,
    cb: (err: any, data?: GetImportedModelCommandOutput) => void
  ): void;
  getImportedModel(
    args: GetImportedModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetImportedModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInferenceProfileCommand}
   */
  getInferenceProfile(
    args: GetInferenceProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInferenceProfileCommandOutput>;
  getInferenceProfile(
    args: GetInferenceProfileCommandInput,
    cb: (err: any, data?: GetInferenceProfileCommandOutput) => void
  ): void;
  getInferenceProfile(
    args: GetInferenceProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInferenceProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMarketplaceModelEndpointCommand}
   */
  getMarketplaceModelEndpoint(
    args: GetMarketplaceModelEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMarketplaceModelEndpointCommandOutput>;
  getMarketplaceModelEndpoint(
    args: GetMarketplaceModelEndpointCommandInput,
    cb: (err: any, data?: GetMarketplaceModelEndpointCommandOutput) => void
  ): void;
  getMarketplaceModelEndpoint(
    args: GetMarketplaceModelEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMarketplaceModelEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelCopyJobCommand}
   */
  getModelCopyJob(
    args: GetModelCopyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelCopyJobCommandOutput>;
  getModelCopyJob(args: GetModelCopyJobCommandInput, cb: (err: any, data?: GetModelCopyJobCommandOutput) => void): void;
  getModelCopyJob(
    args: GetModelCopyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelCopyJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelCustomizationJobCommand}
   */
  getModelCustomizationJob(
    args: GetModelCustomizationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelCustomizationJobCommandOutput>;
  getModelCustomizationJob(
    args: GetModelCustomizationJobCommandInput,
    cb: (err: any, data?: GetModelCustomizationJobCommandOutput) => void
  ): void;
  getModelCustomizationJob(
    args: GetModelCustomizationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelCustomizationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelImportJobCommand}
   */
  getModelImportJob(
    args: GetModelImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelImportJobCommandOutput>;
  getModelImportJob(
    args: GetModelImportJobCommandInput,
    cb: (err: any, data?: GetModelImportJobCommandOutput) => void
  ): void;
  getModelImportJob(
    args: GetModelImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelInvocationJobCommand}
   */
  getModelInvocationJob(
    args: GetModelInvocationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelInvocationJobCommandOutput>;
  getModelInvocationJob(
    args: GetModelInvocationJobCommandInput,
    cb: (err: any, data?: GetModelInvocationJobCommandOutput) => void
  ): void;
  getModelInvocationJob(
    args: GetModelInvocationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelInvocationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelInvocationLoggingConfigurationCommand}
   */
  getModelInvocationLoggingConfiguration(): Promise<GetModelInvocationLoggingConfigurationCommandOutput>;
  getModelInvocationLoggingConfiguration(
    args: GetModelInvocationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelInvocationLoggingConfigurationCommandOutput>;
  getModelInvocationLoggingConfiguration(
    args: GetModelInvocationLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetModelInvocationLoggingConfigurationCommandOutput) => void
  ): void;
  getModelInvocationLoggingConfiguration(
    args: GetModelInvocationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelInvocationLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPromptRouterCommand}
   */
  getPromptRouter(
    args: GetPromptRouterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPromptRouterCommandOutput>;
  getPromptRouter(args: GetPromptRouterCommandInput, cb: (err: any, data?: GetPromptRouterCommandOutput) => void): void;
  getPromptRouter(
    args: GetPromptRouterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPromptRouterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProvisionedModelThroughputCommand}
   */
  getProvisionedModelThroughput(
    args: GetProvisionedModelThroughputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProvisionedModelThroughputCommandOutput>;
  getProvisionedModelThroughput(
    args: GetProvisionedModelThroughputCommandInput,
    cb: (err: any, data?: GetProvisionedModelThroughputCommandOutput) => void
  ): void;
  getProvisionedModelThroughput(
    args: GetProvisionedModelThroughputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProvisionedModelThroughputCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCustomModelsCommand}
   */
  listCustomModels(): Promise<ListCustomModelsCommandOutput>;
  listCustomModels(
    args: ListCustomModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomModelsCommandOutput>;
  listCustomModels(
    args: ListCustomModelsCommandInput,
    cb: (err: any, data?: ListCustomModelsCommandOutput) => void
  ): void;
  listCustomModels(
    args: ListCustomModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEvaluationJobsCommand}
   */
  listEvaluationJobs(): Promise<ListEvaluationJobsCommandOutput>;
  listEvaluationJobs(
    args: ListEvaluationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEvaluationJobsCommandOutput>;
  listEvaluationJobs(
    args: ListEvaluationJobsCommandInput,
    cb: (err: any, data?: ListEvaluationJobsCommandOutput) => void
  ): void;
  listEvaluationJobs(
    args: ListEvaluationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEvaluationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFoundationModelsCommand}
   */
  listFoundationModels(): Promise<ListFoundationModelsCommandOutput>;
  listFoundationModels(
    args: ListFoundationModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFoundationModelsCommandOutput>;
  listFoundationModels(
    args: ListFoundationModelsCommandInput,
    cb: (err: any, data?: ListFoundationModelsCommandOutput) => void
  ): void;
  listFoundationModels(
    args: ListFoundationModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFoundationModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGuardrailsCommand}
   */
  listGuardrails(): Promise<ListGuardrailsCommandOutput>;
  listGuardrails(
    args: ListGuardrailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGuardrailsCommandOutput>;
  listGuardrails(args: ListGuardrailsCommandInput, cb: (err: any, data?: ListGuardrailsCommandOutput) => void): void;
  listGuardrails(
    args: ListGuardrailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGuardrailsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImportedModelsCommand}
   */
  listImportedModels(): Promise<ListImportedModelsCommandOutput>;
  listImportedModels(
    args: ListImportedModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImportedModelsCommandOutput>;
  listImportedModels(
    args: ListImportedModelsCommandInput,
    cb: (err: any, data?: ListImportedModelsCommandOutput) => void
  ): void;
  listImportedModels(
    args: ListImportedModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImportedModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInferenceProfilesCommand}
   */
  listInferenceProfiles(): Promise<ListInferenceProfilesCommandOutput>;
  listInferenceProfiles(
    args: ListInferenceProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceProfilesCommandOutput>;
  listInferenceProfiles(
    args: ListInferenceProfilesCommandInput,
    cb: (err: any, data?: ListInferenceProfilesCommandOutput) => void
  ): void;
  listInferenceProfiles(
    args: ListInferenceProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMarketplaceModelEndpointsCommand}
   */
  listMarketplaceModelEndpoints(): Promise<ListMarketplaceModelEndpointsCommandOutput>;
  listMarketplaceModelEndpoints(
    args: ListMarketplaceModelEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMarketplaceModelEndpointsCommandOutput>;
  listMarketplaceModelEndpoints(
    args: ListMarketplaceModelEndpointsCommandInput,
    cb: (err: any, data?: ListMarketplaceModelEndpointsCommandOutput) => void
  ): void;
  listMarketplaceModelEndpoints(
    args: ListMarketplaceModelEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMarketplaceModelEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelCopyJobsCommand}
   */
  listModelCopyJobs(): Promise<ListModelCopyJobsCommandOutput>;
  listModelCopyJobs(
    args: ListModelCopyJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelCopyJobsCommandOutput>;
  listModelCopyJobs(
    args: ListModelCopyJobsCommandInput,
    cb: (err: any, data?: ListModelCopyJobsCommandOutput) => void
  ): void;
  listModelCopyJobs(
    args: ListModelCopyJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelCopyJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelCustomizationJobsCommand}
   */
  listModelCustomizationJobs(): Promise<ListModelCustomizationJobsCommandOutput>;
  listModelCustomizationJobs(
    args: ListModelCustomizationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelCustomizationJobsCommandOutput>;
  listModelCustomizationJobs(
    args: ListModelCustomizationJobsCommandInput,
    cb: (err: any, data?: ListModelCustomizationJobsCommandOutput) => void
  ): void;
  listModelCustomizationJobs(
    args: ListModelCustomizationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelCustomizationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelImportJobsCommand}
   */
  listModelImportJobs(): Promise<ListModelImportJobsCommandOutput>;
  listModelImportJobs(
    args: ListModelImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelImportJobsCommandOutput>;
  listModelImportJobs(
    args: ListModelImportJobsCommandInput,
    cb: (err: any, data?: ListModelImportJobsCommandOutput) => void
  ): void;
  listModelImportJobs(
    args: ListModelImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelInvocationJobsCommand}
   */
  listModelInvocationJobs(): Promise<ListModelInvocationJobsCommandOutput>;
  listModelInvocationJobs(
    args: ListModelInvocationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelInvocationJobsCommandOutput>;
  listModelInvocationJobs(
    args: ListModelInvocationJobsCommandInput,
    cb: (err: any, data?: ListModelInvocationJobsCommandOutput) => void
  ): void;
  listModelInvocationJobs(
    args: ListModelInvocationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelInvocationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPromptRoutersCommand}
   */
  listPromptRouters(): Promise<ListPromptRoutersCommandOutput>;
  listPromptRouters(
    args: ListPromptRoutersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPromptRoutersCommandOutput>;
  listPromptRouters(
    args: ListPromptRoutersCommandInput,
    cb: (err: any, data?: ListPromptRoutersCommandOutput) => void
  ): void;
  listPromptRouters(
    args: ListPromptRoutersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPromptRoutersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProvisionedModelThroughputsCommand}
   */
  listProvisionedModelThroughputs(): Promise<ListProvisionedModelThroughputsCommandOutput>;
  listProvisionedModelThroughputs(
    args: ListProvisionedModelThroughputsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProvisionedModelThroughputsCommandOutput>;
  listProvisionedModelThroughputs(
    args: ListProvisionedModelThroughputsCommandInput,
    cb: (err: any, data?: ListProvisionedModelThroughputsCommandOutput) => void
  ): void;
  listProvisionedModelThroughputs(
    args: ListProvisionedModelThroughputsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProvisionedModelThroughputsCommandOutput) => void
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
   * @see {@link PutModelInvocationLoggingConfigurationCommand}
   */
  putModelInvocationLoggingConfiguration(
    args: PutModelInvocationLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutModelInvocationLoggingConfigurationCommandOutput>;
  putModelInvocationLoggingConfiguration(
    args: PutModelInvocationLoggingConfigurationCommandInput,
    cb: (err: any, data?: PutModelInvocationLoggingConfigurationCommandOutput) => void
  ): void;
  putModelInvocationLoggingConfiguration(
    args: PutModelInvocationLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutModelInvocationLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterMarketplaceModelEndpointCommand}
   */
  registerMarketplaceModelEndpoint(
    args: RegisterMarketplaceModelEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterMarketplaceModelEndpointCommandOutput>;
  registerMarketplaceModelEndpoint(
    args: RegisterMarketplaceModelEndpointCommandInput,
    cb: (err: any, data?: RegisterMarketplaceModelEndpointCommandOutput) => void
  ): void;
  registerMarketplaceModelEndpoint(
    args: RegisterMarketplaceModelEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterMarketplaceModelEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEvaluationJobCommand}
   */
  stopEvaluationJob(
    args: StopEvaluationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEvaluationJobCommandOutput>;
  stopEvaluationJob(
    args: StopEvaluationJobCommandInput,
    cb: (err: any, data?: StopEvaluationJobCommandOutput) => void
  ): void;
  stopEvaluationJob(
    args: StopEvaluationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEvaluationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopModelCustomizationJobCommand}
   */
  stopModelCustomizationJob(
    args: StopModelCustomizationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopModelCustomizationJobCommandOutput>;
  stopModelCustomizationJob(
    args: StopModelCustomizationJobCommandInput,
    cb: (err: any, data?: StopModelCustomizationJobCommandOutput) => void
  ): void;
  stopModelCustomizationJob(
    args: StopModelCustomizationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopModelCustomizationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopModelInvocationJobCommand}
   */
  stopModelInvocationJob(
    args: StopModelInvocationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopModelInvocationJobCommandOutput>;
  stopModelInvocationJob(
    args: StopModelInvocationJobCommandInput,
    cb: (err: any, data?: StopModelInvocationJobCommandOutput) => void
  ): void;
  stopModelInvocationJob(
    args: StopModelInvocationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopModelInvocationJobCommandOutput) => void
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
   * @see {@link UpdateGuardrailCommand}
   */
  updateGuardrail(
    args: UpdateGuardrailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGuardrailCommandOutput>;
  updateGuardrail(args: UpdateGuardrailCommandInput, cb: (err: any, data?: UpdateGuardrailCommandOutput) => void): void;
  updateGuardrail(
    args: UpdateGuardrailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGuardrailCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMarketplaceModelEndpointCommand}
   */
  updateMarketplaceModelEndpoint(
    args: UpdateMarketplaceModelEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMarketplaceModelEndpointCommandOutput>;
  updateMarketplaceModelEndpoint(
    args: UpdateMarketplaceModelEndpointCommandInput,
    cb: (err: any, data?: UpdateMarketplaceModelEndpointCommandOutput) => void
  ): void;
  updateMarketplaceModelEndpoint(
    args: UpdateMarketplaceModelEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMarketplaceModelEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProvisionedModelThroughputCommand}
   */
  updateProvisionedModelThroughput(
    args: UpdateProvisionedModelThroughputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProvisionedModelThroughputCommandOutput>;
  updateProvisionedModelThroughput(
    args: UpdateProvisionedModelThroughputCommandInput,
    cb: (err: any, data?: UpdateProvisionedModelThroughputCommandOutput) => void
  ): void;
  updateProvisionedModelThroughput(
    args: UpdateProvisionedModelThroughputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProvisionedModelThroughputCommandOutput) => void
  ): void;
}

/**
 * <p>Describes the API operations for creating, managing, fine-turning, and evaluating Amazon Bedrock models.</p>
 * @public
 */
export class Bedrock extends BedrockClient implements Bedrock {}
createAggregatedClient(commands, Bedrock);
