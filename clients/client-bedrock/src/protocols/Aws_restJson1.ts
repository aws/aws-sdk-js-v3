// smithy-typescript generated code
import {
  awsExpectUnion as __expectUnion,
  loadRestJsonErrorCode,
  parseJsonBody as parseBody,
  parseJsonErrorBody as parseErrorBody,
} from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  BatchDeleteEvaluationJobCommandInput,
  BatchDeleteEvaluationJobCommandOutput,
} from "../commands/BatchDeleteEvaluationJobCommand";
import {
  CreateEvaluationJobCommandInput,
  CreateEvaluationJobCommandOutput,
} from "../commands/CreateEvaluationJobCommand";
import { CreateGuardrailCommandInput, CreateGuardrailCommandOutput } from "../commands/CreateGuardrailCommand";
import {
  CreateGuardrailVersionCommandInput,
  CreateGuardrailVersionCommandOutput,
} from "../commands/CreateGuardrailVersionCommand";
import {
  CreateInferenceProfileCommandInput,
  CreateInferenceProfileCommandOutput,
} from "../commands/CreateInferenceProfileCommand";
import {
  CreateMarketplaceModelEndpointCommandInput,
  CreateMarketplaceModelEndpointCommandOutput,
} from "../commands/CreateMarketplaceModelEndpointCommand";
import { CreateModelCopyJobCommandInput, CreateModelCopyJobCommandOutput } from "../commands/CreateModelCopyJobCommand";
import {
  CreateModelCustomizationJobCommandInput,
  CreateModelCustomizationJobCommandOutput,
} from "../commands/CreateModelCustomizationJobCommand";
import {
  CreateModelImportJobCommandInput,
  CreateModelImportJobCommandOutput,
} from "../commands/CreateModelImportJobCommand";
import {
  CreateModelInvocationJobCommandInput,
  CreateModelInvocationJobCommandOutput,
} from "../commands/CreateModelInvocationJobCommand";
import { CreatePromptRouterCommandInput, CreatePromptRouterCommandOutput } from "../commands/CreatePromptRouterCommand";
import {
  CreateProvisionedModelThroughputCommandInput,
  CreateProvisionedModelThroughputCommandOutput,
} from "../commands/CreateProvisionedModelThroughputCommand";
import { DeleteCustomModelCommandInput, DeleteCustomModelCommandOutput } from "../commands/DeleteCustomModelCommand";
import { DeleteGuardrailCommandInput, DeleteGuardrailCommandOutput } from "../commands/DeleteGuardrailCommand";
import {
  DeleteImportedModelCommandInput,
  DeleteImportedModelCommandOutput,
} from "../commands/DeleteImportedModelCommand";
import {
  DeleteInferenceProfileCommandInput,
  DeleteInferenceProfileCommandOutput,
} from "../commands/DeleteInferenceProfileCommand";
import {
  DeleteMarketplaceModelEndpointCommandInput,
  DeleteMarketplaceModelEndpointCommandOutput,
} from "../commands/DeleteMarketplaceModelEndpointCommand";
import {
  DeleteModelInvocationLoggingConfigurationCommandInput,
  DeleteModelInvocationLoggingConfigurationCommandOutput,
} from "../commands/DeleteModelInvocationLoggingConfigurationCommand";
import { DeletePromptRouterCommandInput, DeletePromptRouterCommandOutput } from "../commands/DeletePromptRouterCommand";
import {
  DeleteProvisionedModelThroughputCommandInput,
  DeleteProvisionedModelThroughputCommandOutput,
} from "../commands/DeleteProvisionedModelThroughputCommand";
import {
  DeregisterMarketplaceModelEndpointCommandInput,
  DeregisterMarketplaceModelEndpointCommandOutput,
} from "../commands/DeregisterMarketplaceModelEndpointCommand";
import { GetCustomModelCommandInput, GetCustomModelCommandOutput } from "../commands/GetCustomModelCommand";
import { GetEvaluationJobCommandInput, GetEvaluationJobCommandOutput } from "../commands/GetEvaluationJobCommand";
import { GetFoundationModelCommandInput, GetFoundationModelCommandOutput } from "../commands/GetFoundationModelCommand";
import { GetGuardrailCommandInput, GetGuardrailCommandOutput } from "../commands/GetGuardrailCommand";
import { GetImportedModelCommandInput, GetImportedModelCommandOutput } from "../commands/GetImportedModelCommand";
import {
  GetInferenceProfileCommandInput,
  GetInferenceProfileCommandOutput,
} from "../commands/GetInferenceProfileCommand";
import {
  GetMarketplaceModelEndpointCommandInput,
  GetMarketplaceModelEndpointCommandOutput,
} from "../commands/GetMarketplaceModelEndpointCommand";
import { GetModelCopyJobCommandInput, GetModelCopyJobCommandOutput } from "../commands/GetModelCopyJobCommand";
import {
  GetModelCustomizationJobCommandInput,
  GetModelCustomizationJobCommandOutput,
} from "../commands/GetModelCustomizationJobCommand";
import { GetModelImportJobCommandInput, GetModelImportJobCommandOutput } from "../commands/GetModelImportJobCommand";
import {
  GetModelInvocationJobCommandInput,
  GetModelInvocationJobCommandOutput,
} from "../commands/GetModelInvocationJobCommand";
import {
  GetModelInvocationLoggingConfigurationCommandInput,
  GetModelInvocationLoggingConfigurationCommandOutput,
} from "../commands/GetModelInvocationLoggingConfigurationCommand";
import { GetPromptRouterCommandInput, GetPromptRouterCommandOutput } from "../commands/GetPromptRouterCommand";
import {
  GetProvisionedModelThroughputCommandInput,
  GetProvisionedModelThroughputCommandOutput,
} from "../commands/GetProvisionedModelThroughputCommand";
import { ListCustomModelsCommandInput, ListCustomModelsCommandOutput } from "../commands/ListCustomModelsCommand";
import { ListEvaluationJobsCommandInput, ListEvaluationJobsCommandOutput } from "../commands/ListEvaluationJobsCommand";
import {
  ListFoundationModelsCommandInput,
  ListFoundationModelsCommandOutput,
} from "../commands/ListFoundationModelsCommand";
import { ListGuardrailsCommandInput, ListGuardrailsCommandOutput } from "../commands/ListGuardrailsCommand";
import { ListImportedModelsCommandInput, ListImportedModelsCommandOutput } from "../commands/ListImportedModelsCommand";
import {
  ListInferenceProfilesCommandInput,
  ListInferenceProfilesCommandOutput,
} from "../commands/ListInferenceProfilesCommand";
import {
  ListMarketplaceModelEndpointsCommandInput,
  ListMarketplaceModelEndpointsCommandOutput,
} from "../commands/ListMarketplaceModelEndpointsCommand";
import { ListModelCopyJobsCommandInput, ListModelCopyJobsCommandOutput } from "../commands/ListModelCopyJobsCommand";
import {
  ListModelCustomizationJobsCommandInput,
  ListModelCustomizationJobsCommandOutput,
} from "../commands/ListModelCustomizationJobsCommand";
import {
  ListModelImportJobsCommandInput,
  ListModelImportJobsCommandOutput,
} from "../commands/ListModelImportJobsCommand";
import {
  ListModelInvocationJobsCommandInput,
  ListModelInvocationJobsCommandOutput,
} from "../commands/ListModelInvocationJobsCommand";
import { ListPromptRoutersCommandInput, ListPromptRoutersCommandOutput } from "../commands/ListPromptRoutersCommand";
import {
  ListProvisionedModelThroughputsCommandInput,
  ListProvisionedModelThroughputsCommandOutput,
} from "../commands/ListProvisionedModelThroughputsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PutModelInvocationLoggingConfigurationCommandInput,
  PutModelInvocationLoggingConfigurationCommandOutput,
} from "../commands/PutModelInvocationLoggingConfigurationCommand";
import {
  RegisterMarketplaceModelEndpointCommandInput,
  RegisterMarketplaceModelEndpointCommandOutput,
} from "../commands/RegisterMarketplaceModelEndpointCommand";
import { StopEvaluationJobCommandInput, StopEvaluationJobCommandOutput } from "../commands/StopEvaluationJobCommand";
import {
  StopModelCustomizationJobCommandInput,
  StopModelCustomizationJobCommandOutput,
} from "../commands/StopModelCustomizationJobCommand";
import {
  StopModelInvocationJobCommandInput,
  StopModelInvocationJobCommandOutput,
} from "../commands/StopModelInvocationJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateGuardrailCommandInput, UpdateGuardrailCommandOutput } from "../commands/UpdateGuardrailCommand";
import {
  UpdateMarketplaceModelEndpointCommandInput,
  UpdateMarketplaceModelEndpointCommandOutput,
} from "../commands/UpdateMarketplaceModelEndpointCommand";
import {
  UpdateProvisionedModelThroughputCommandInput,
  UpdateProvisionedModelThroughputCommandOutput,
} from "../commands/UpdateProvisionedModelThroughputCommand";
import { BedrockServiceException as __BaseException } from "../models/BedrockServiceException";
import {
  AccessDeniedException,
  AutomatedEvaluationConfig,
  BedrockEvaluatorModel,
  ByteContentDoc,
  CloudWatchConfig,
  ConflictException,
  CustomizationConfig,
  CustomModelSummary,
  DistillationConfig,
  EndpointConfig,
  EvaluationBedrockModel,
  EvaluationConfig,
  EvaluationDataset,
  EvaluationDatasetLocation,
  EvaluationDatasetMetricConfig,
  EvaluationInferenceConfig,
  EvaluationModelConfig,
  EvaluationOutputDataConfig,
  EvaluationSummary,
  EvaluatorModelConfig,
  ExternalSource,
  ExternalSourcesGenerationConfiguration,
  ExternalSourcesRetrieveAndGenerateConfiguration,
  FilterAttribute,
  GenerationConfiguration,
  GuardrailConfiguration,
  GuardrailContentFilterConfig,
  GuardrailContentPolicyConfig,
  GuardrailContextualGroundingFilter,
  GuardrailContextualGroundingFilterConfig,
  GuardrailContextualGroundingPolicy,
  GuardrailContextualGroundingPolicyConfig,
  GuardrailManagedWordsConfig,
  GuardrailModality,
  GuardrailPiiEntityConfig,
  GuardrailRegexConfig,
  GuardrailSensitiveInformationPolicyConfig,
  GuardrailSummary,
  GuardrailTopicConfig,
  GuardrailTopicPolicyConfig,
  GuardrailWordConfig,
  GuardrailWordPolicyConfig,
  HumanEvaluationConfig,
  HumanEvaluationCustomMetric,
  HumanWorkflowConfig,
  ImportedModelSummary,
  InferenceProfileModelSource,
  InferenceProfileSummary,
  InternalServerException,
  InvocationLogsConfig,
  InvocationLogSource,
  KbInferenceConfig,
  KnowledgeBaseConfig,
  KnowledgeBaseRetrievalConfiguration,
  KnowledgeBaseRetrieveAndGenerateConfiguration,
  KnowledgeBaseVectorSearchConfiguration,
  LoggingConfig,
  MarketplaceModelEndpoint,
  MarketplaceModelEndpointSummary,
  ModelCopyJobSummary,
  ModelCustomizationJobSummary,
  ModelDataSource,
  ModelImportJobSummary,
  ModelInvocationJobInputDataConfig,
  ModelInvocationJobOutputDataConfig,
  ModelInvocationJobS3InputDataConfig,
  ModelInvocationJobS3OutputDataConfig,
  ModelInvocationJobSummary,
  OrchestrationConfiguration,
  OutputDataConfig,
  PerformanceConfiguration,
  PromptRouterSummary,
  PromptRouterTargetModel,
  PromptTemplate,
  ProvisionedModelSummary,
  QueryTransformationConfiguration,
  RAGConfig,
  RequestMetadataBaseFilters,
  RequestMetadataFilters,
  ResourceNotFoundException,
  RetrievalFilter,
  RetrieveAndGenerateConfiguration,
  RetrieveConfig,
  RoutingCriteria,
  S3Config,
  S3DataSource,
  S3ObjectDoc,
  SageMakerEndpoint,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  Tag,
  TeacherModelConfig,
  TextInferenceConfig,
  ThrottlingException,
  TooManyTagsException,
  TrainingDataConfig,
  TrainingMetrics,
  ValidationDataConfig,
  ValidationException,
  Validator,
  ValidatorMetric,
  VpcConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchDeleteEvaluationJobCommand
 */
export const se_BatchDeleteEvaluationJobCommand = async (
  input: BatchDeleteEvaluationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/evaluation-jobs/batch-delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobIdentifiers: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateEvaluationJobCommand
 */
export const se_CreateEvaluationJobCommand = async (
  input: CreateEvaluationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/evaluation-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      applicationType: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customerEncryptionKeyId: [],
      evaluationConfig: (_) => _json(_),
      inferenceConfig: (_) => se_EvaluationInferenceConfig(_, context),
      jobDescription: [],
      jobName: [],
      jobTags: (_) => _json(_),
      outputDataConfig: (_) => _json(_),
      roleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGuardrailCommand
 */
export const se_CreateGuardrailCommand = async (
  input: CreateGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/guardrails");
  let body: any;
  body = JSON.stringify(
    take(input, {
      blockedInputMessaging: [],
      blockedOutputsMessaging: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      contentPolicyConfig: (_) => _json(_),
      contextualGroundingPolicyConfig: (_) => se_GuardrailContextualGroundingPolicyConfig(_, context),
      description: [],
      kmsKeyId: [],
      name: [],
      sensitiveInformationPolicyConfig: (_) => _json(_),
      tags: (_) => _json(_),
      topicPolicyConfig: (_) => _json(_),
      wordPolicyConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGuardrailVersionCommand
 */
export const se_CreateGuardrailVersionCommand = async (
  input: CreateGuardrailVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/guardrails/{guardrailIdentifier}");
  b.p("guardrailIdentifier", () => input.guardrailIdentifier!, "{guardrailIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateInferenceProfileCommand
 */
export const se_CreateInferenceProfileCommand = async (
  input: CreateInferenceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/inference-profiles");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      inferenceProfileName: [],
      modelSource: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMarketplaceModelEndpointCommand
 */
export const se_CreateMarketplaceModelEndpointCommand = async (
  input: CreateMarketplaceModelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/marketplace-model/endpoints");
  let body: any;
  body = JSON.stringify(
    take(input, {
      acceptEula: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      endpointConfig: (_) => _json(_),
      endpointName: [],
      modelSourceIdentifier: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateModelCopyJobCommand
 */
export const se_CreateModelCopyJobCommand = async (
  input: CreateModelCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model-copy-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      modelKmsKeyId: [],
      sourceModelArn: [],
      targetModelName: [],
      targetModelTags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateModelCustomizationJobCommand
 */
export const se_CreateModelCustomizationJobCommand = async (
  input: CreateModelCustomizationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model-customization-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      baseModelIdentifier: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      customModelKmsKeyId: [],
      customModelName: [],
      customModelTags: (_) => _json(_),
      customizationConfig: (_) => _json(_),
      customizationType: [],
      hyperParameters: (_) => _json(_),
      jobName: [],
      jobTags: (_) => _json(_),
      outputDataConfig: (_) => _json(_),
      roleArn: [],
      trainingDataConfig: (_) => _json(_),
      validationDataConfig: (_) => _json(_),
      vpcConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateModelImportJobCommand
 */
export const se_CreateModelImportJobCommand = async (
  input: CreateModelImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model-import-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [],
      importedModelKmsKeyId: [],
      importedModelName: [],
      importedModelTags: (_) => _json(_),
      jobName: [],
      jobTags: (_) => _json(_),
      modelDataSource: (_) => _json(_),
      roleArn: [],
      vpcConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateModelInvocationJobCommand
 */
export const se_CreateModelInvocationJobCommand = async (
  input: CreateModelInvocationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/model-invocation-job");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      inputDataConfig: (_) => _json(_),
      jobName: [],
      modelId: [],
      outputDataConfig: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
      timeoutDurationInHours: [],
      vpcConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreatePromptRouterCommand
 */
export const se_CreatePromptRouterCommand = async (
  input: CreatePromptRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/prompt-routers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      fallbackModel: (_) => _json(_),
      models: (_) => _json(_),
      promptRouterName: [],
      routingCriteria: (_) => se_RoutingCriteria(_, context),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateProvisionedModelThroughputCommand
 */
export const se_CreateProvisionedModelThroughputCommand = async (
  input: CreateProvisionedModelThroughputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/provisioned-model-throughput");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      commitmentDuration: [],
      modelId: [],
      modelUnits: [],
      provisionedModelName: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCustomModelCommand
 */
export const se_DeleteCustomModelCommand = async (
  input: DeleteCustomModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-models/{modelIdentifier}");
  b.p("modelIdentifier", () => input.modelIdentifier!, "{modelIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGuardrailCommand
 */
export const se_DeleteGuardrailCommand = async (
  input: DeleteGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/guardrails/{guardrailIdentifier}");
  b.p("guardrailIdentifier", () => input.guardrailIdentifier!, "{guardrailIdentifier}", false);
  const query: any = map({
    [_gV]: [, input[_gV]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteImportedModelCommand
 */
export const se_DeleteImportedModelCommand = async (
  input: DeleteImportedModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/imported-models/{modelIdentifier}");
  b.p("modelIdentifier", () => input.modelIdentifier!, "{modelIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInferenceProfileCommand
 */
export const se_DeleteInferenceProfileCommand = async (
  input: DeleteInferenceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/inference-profiles/{inferenceProfileIdentifier}");
  b.p("inferenceProfileIdentifier", () => input.inferenceProfileIdentifier!, "{inferenceProfileIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMarketplaceModelEndpointCommand
 */
export const se_DeleteMarketplaceModelEndpointCommand = async (
  input: DeleteMarketplaceModelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/marketplace-model/endpoints/{endpointArn}");
  b.p("endpointArn", () => input.endpointArn!, "{endpointArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteModelInvocationLoggingConfigurationCommand
 */
export const se_DeleteModelInvocationLoggingConfigurationCommand = async (
  input: DeleteModelInvocationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/logging/modelinvocations");
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePromptRouterCommand
 */
export const se_DeletePromptRouterCommand = async (
  input: DeletePromptRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompt-routers/{promptRouterArn}");
  b.p("promptRouterArn", () => input.promptRouterArn!, "{promptRouterArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteProvisionedModelThroughputCommand
 */
export const se_DeleteProvisionedModelThroughputCommand = async (
  input: DeleteProvisionedModelThroughputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioned-model-throughput/{provisionedModelId}");
  b.p("provisionedModelId", () => input.provisionedModelId!, "{provisionedModelId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterMarketplaceModelEndpointCommand
 */
export const se_DeregisterMarketplaceModelEndpointCommand = async (
  input: DeregisterMarketplaceModelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/marketplace-model/endpoints/{endpointArn}/registration");
  b.p("endpointArn", () => input.endpointArn!, "{endpointArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCustomModelCommand
 */
export const se_GetCustomModelCommand = async (
  input: GetCustomModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-models/{modelIdentifier}");
  b.p("modelIdentifier", () => input.modelIdentifier!, "{modelIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetEvaluationJobCommand
 */
export const se_GetEvaluationJobCommand = async (
  input: GetEvaluationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/evaluation-jobs/{jobIdentifier}");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetFoundationModelCommand
 */
export const se_GetFoundationModelCommand = async (
  input: GetFoundationModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/foundation-models/{modelIdentifier}");
  b.p("modelIdentifier", () => input.modelIdentifier!, "{modelIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetGuardrailCommand
 */
export const se_GetGuardrailCommand = async (
  input: GetGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/guardrails/{guardrailIdentifier}");
  b.p("guardrailIdentifier", () => input.guardrailIdentifier!, "{guardrailIdentifier}", false);
  const query: any = map({
    [_gV]: [, input[_gV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetImportedModelCommand
 */
export const se_GetImportedModelCommand = async (
  input: GetImportedModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/imported-models/{modelIdentifier}");
  b.p("modelIdentifier", () => input.modelIdentifier!, "{modelIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetInferenceProfileCommand
 */
export const se_GetInferenceProfileCommand = async (
  input: GetInferenceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/inference-profiles/{inferenceProfileIdentifier}");
  b.p("inferenceProfileIdentifier", () => input.inferenceProfileIdentifier!, "{inferenceProfileIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMarketplaceModelEndpointCommand
 */
export const se_GetMarketplaceModelEndpointCommand = async (
  input: GetMarketplaceModelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/marketplace-model/endpoints/{endpointArn}");
  b.p("endpointArn", () => input.endpointArn!, "{endpointArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelCopyJobCommand
 */
export const se_GetModelCopyJobCommand = async (
  input: GetModelCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-copy-jobs/{jobArn}");
  b.p("jobArn", () => input.jobArn!, "{jobArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelCustomizationJobCommand
 */
export const se_GetModelCustomizationJobCommand = async (
  input: GetModelCustomizationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-customization-jobs/{jobIdentifier}");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelImportJobCommand
 */
export const se_GetModelImportJobCommand = async (
  input: GetModelImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-import-jobs/{jobIdentifier}");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelInvocationJobCommand
 */
export const se_GetModelInvocationJobCommand = async (
  input: GetModelInvocationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-invocation-job/{jobIdentifier}");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetModelInvocationLoggingConfigurationCommand
 */
export const se_GetModelInvocationLoggingConfigurationCommand = async (
  input: GetModelInvocationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/logging/modelinvocations");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetPromptRouterCommand
 */
export const se_GetPromptRouterCommand = async (
  input: GetPromptRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompt-routers/{promptRouterArn}");
  b.p("promptRouterArn", () => input.promptRouterArn!, "{promptRouterArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetProvisionedModelThroughputCommand
 */
export const se_GetProvisionedModelThroughputCommand = async (
  input: GetProvisionedModelThroughputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioned-model-throughput/{provisionedModelId}");
  b.p("provisionedModelId", () => input.provisionedModelId!, "{provisionedModelId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCustomModelsCommand
 */
export const se_ListCustomModelsCommand = async (
  input: ListCustomModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/custom-models");
  const query: any = map({
    [_cTB]: [() => input.creationTimeBefore !== void 0, () => __serializeDateTime(input[_cTB]!).toString()],
    [_cTA]: [() => input.creationTimeAfter !== void 0, () => __serializeDateTime(input[_cTA]!).toString()],
    [_nC]: [, input[_nC]!],
    [_bMAE]: [, input[_bMAE]!],
    [_fMAE]: [, input[_fMAE]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
    [_iO]: [() => input.isOwned !== void 0, () => input[_iO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListEvaluationJobsCommand
 */
export const se_ListEvaluationJobsCommand = async (
  input: ListEvaluationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/evaluation-jobs");
  const query: any = map({
    [_cTA]: [() => input.creationTimeAfter !== void 0, () => __serializeDateTime(input[_cTA]!).toString()],
    [_cTB]: [() => input.creationTimeBefore !== void 0, () => __serializeDateTime(input[_cTB]!).toString()],
    [_sE]: [, input[_sE]!],
    [_aTE]: [, input[_aTE]!],
    [_nC]: [, input[_nC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFoundationModelsCommand
 */
export const se_ListFoundationModelsCommand = async (
  input: ListFoundationModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/foundation-models");
  const query: any = map({
    [_bP]: [, input[_bP]!],
    [_bCT]: [, input[_bCT]!],
    [_bOM]: [, input[_bOM]!],
    [_bIT]: [, input[_bIT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListGuardrailsCommand
 */
export const se_ListGuardrailsCommand = async (
  input: ListGuardrailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/guardrails");
  const query: any = map({
    [_gI]: [, input[_gI]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListImportedModelsCommand
 */
export const se_ListImportedModelsCommand = async (
  input: ListImportedModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/imported-models");
  const query: any = map({
    [_cTB]: [() => input.creationTimeBefore !== void 0, () => __serializeDateTime(input[_cTB]!).toString()],
    [_cTA]: [() => input.creationTimeAfter !== void 0, () => __serializeDateTime(input[_cTA]!).toString()],
    [_nC]: [, input[_nC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInferenceProfilesCommand
 */
export const se_ListInferenceProfilesCommand = async (
  input: ListInferenceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/inference-profiles");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_t]: [, input[_tE]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMarketplaceModelEndpointsCommand
 */
export const se_ListMarketplaceModelEndpointsCommand = async (
  input: ListMarketplaceModelEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/marketplace-model/endpoints");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_mSI]: [, input[_mSE]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListModelCopyJobsCommand
 */
export const se_ListModelCopyJobsCommand = async (
  input: ListModelCopyJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-copy-jobs");
  const query: any = map({
    [_cTA]: [() => input.creationTimeAfter !== void 0, () => __serializeDateTime(input[_cTA]!).toString()],
    [_cTB]: [() => input.creationTimeBefore !== void 0, () => __serializeDateTime(input[_cTB]!).toString()],
    [_sE]: [, input[_sE]!],
    [_sAE]: [, input[_sAE]!],
    [_sMAE]: [, input[_sMAE]!],
    [_oMNC]: [, input[_tMNC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListModelCustomizationJobsCommand
 */
export const se_ListModelCustomizationJobsCommand = async (
  input: ListModelCustomizationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-customization-jobs");
  const query: any = map({
    [_cTA]: [() => input.creationTimeAfter !== void 0, () => __serializeDateTime(input[_cTA]!).toString()],
    [_cTB]: [() => input.creationTimeBefore !== void 0, () => __serializeDateTime(input[_cTB]!).toString()],
    [_sE]: [, input[_sE]!],
    [_nC]: [, input[_nC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListModelImportJobsCommand
 */
export const se_ListModelImportJobsCommand = async (
  input: ListModelImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-import-jobs");
  const query: any = map({
    [_cTA]: [() => input.creationTimeAfter !== void 0, () => __serializeDateTime(input[_cTA]!).toString()],
    [_cTB]: [() => input.creationTimeBefore !== void 0, () => __serializeDateTime(input[_cTB]!).toString()],
    [_sE]: [, input[_sE]!],
    [_nC]: [, input[_nC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListModelInvocationJobsCommand
 */
export const se_ListModelInvocationJobsCommand = async (
  input: ListModelInvocationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-invocation-jobs");
  const query: any = map({
    [_sTA]: [() => input.submitTimeAfter !== void 0, () => __serializeDateTime(input[_sTA]!).toString()],
    [_sTB]: [() => input.submitTimeBefore !== void 0, () => __serializeDateTime(input[_sTB]!).toString()],
    [_sE]: [, input[_sE]!],
    [_nC]: [, input[_nC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPromptRoutersCommand
 */
export const se_ListPromptRoutersCommand = async (
  input: ListPromptRoutersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/prompt-routers");
  const query: any = map({
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_t]: [, input[_t]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProvisionedModelThroughputsCommand
 */
export const se_ListProvisionedModelThroughputsCommand = async (
  input: ListProvisionedModelThroughputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/provisioned-model-throughputs");
  const query: any = map({
    [_cTA]: [() => input.creationTimeAfter !== void 0, () => __serializeDateTime(input[_cTA]!).toString()],
    [_cTB]: [() => input.creationTimeBefore !== void 0, () => __serializeDateTime(input[_cTB]!).toString()],
    [_sE]: [, input[_sE]!],
    [_mAE]: [, input[_mAE]!],
    [_nC]: [, input[_nC]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_nT]: [, input[_nT]!],
    [_sB]: [, input[_sB]!],
    [_sO]: [, input[_sO]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listTagsForResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutModelInvocationLoggingConfigurationCommand
 */
export const se_PutModelInvocationLoggingConfigurationCommand = async (
  input: PutModelInvocationLoggingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/logging/modelinvocations");
  let body: any;
  body = JSON.stringify(
    take(input, {
      loggingConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterMarketplaceModelEndpointCommand
 */
export const se_RegisterMarketplaceModelEndpointCommand = async (
  input: RegisterMarketplaceModelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/marketplace-model/endpoints/{endpointIdentifier}/registration");
  b.p("endpointIdentifier", () => input.endpointIdentifier!, "{endpointIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      modelSourceIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopEvaluationJobCommand
 */
export const se_StopEvaluationJobCommand = async (
  input: StopEvaluationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/evaluation-job/{jobIdentifier}/stop");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopModelCustomizationJobCommand
 */
export const se_StopModelCustomizationJobCommand = async (
  input: StopModelCustomizationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-customization-jobs/{jobIdentifier}/stop");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopModelInvocationJobCommand
 */
export const se_StopModelInvocationJobCommand = async (
  input: StopModelInvocationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/model-invocation-job/{jobIdentifier}/stop");
  b.p("jobIdentifier", () => input.jobIdentifier!, "{jobIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/untagResource");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resourceARN: [],
      tagKeys: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGuardrailCommand
 */
export const se_UpdateGuardrailCommand = async (
  input: UpdateGuardrailCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/guardrails/{guardrailIdentifier}");
  b.p("guardrailIdentifier", () => input.guardrailIdentifier!, "{guardrailIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      blockedInputMessaging: [],
      blockedOutputsMessaging: [],
      contentPolicyConfig: (_) => _json(_),
      contextualGroundingPolicyConfig: (_) => se_GuardrailContextualGroundingPolicyConfig(_, context),
      description: [],
      kmsKeyId: [],
      name: [],
      sensitiveInformationPolicyConfig: (_) => _json(_),
      topicPolicyConfig: (_) => _json(_),
      wordPolicyConfig: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateMarketplaceModelEndpointCommand
 */
export const se_UpdateMarketplaceModelEndpointCommand = async (
  input: UpdateMarketplaceModelEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/marketplace-model/endpoints/{endpointArn}");
  b.p("endpointArn", () => input.endpointArn!, "{endpointArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      endpointConfig: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateProvisionedModelThroughputCommand
 */
export const se_UpdateProvisionedModelThroughputCommand = async (
  input: UpdateProvisionedModelThroughputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/provisioned-model-throughput/{provisionedModelId}");
  b.p("provisionedModelId", () => input.provisionedModelId!, "{provisionedModelId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      desiredModelId: [],
      desiredProvisionedModelName: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchDeleteEvaluationJobCommand
 */
export const de_BatchDeleteEvaluationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteEvaluationJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errors: _json,
    evaluationJobs: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateEvaluationJobCommand
 */
export const de_CreateEvaluationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEvaluationJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGuardrailCommand
 */
export const de_CreateGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGuardrailCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    guardrailArn: __expectString,
    guardrailId: __expectString,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGuardrailVersionCommand
 */
export const de_CreateGuardrailVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGuardrailVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    guardrailId: __expectString,
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateInferenceProfileCommand
 */
export const de_CreateInferenceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceProfileCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    inferenceProfileArn: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMarketplaceModelEndpointCommand
 */
export const de_CreateMarketplaceModelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMarketplaceModelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    marketplaceModelEndpoint: (_) => de_MarketplaceModelEndpoint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateModelCopyJobCommand
 */
export const de_CreateModelCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCopyJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateModelCustomizationJobCommand
 */
export const de_CreateModelCustomizationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCustomizationJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateModelImportJobCommand
 */
export const de_CreateModelImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelImportJobCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateModelInvocationJobCommand
 */
export const de_CreateModelInvocationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelInvocationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreatePromptRouterCommand
 */
export const de_CreatePromptRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePromptRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    promptRouterArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProvisionedModelThroughputCommand
 */
export const de_CreateProvisionedModelThroughputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProvisionedModelThroughputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    provisionedModelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomModelCommand
 */
export const de_DeleteCustomModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGuardrailCommand
 */
export const de_DeleteGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGuardrailCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImportedModelCommand
 */
export const de_DeleteImportedModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportedModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInferenceProfileCommand
 */
export const de_DeleteInferenceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteMarketplaceModelEndpointCommand
 */
export const de_DeleteMarketplaceModelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMarketplaceModelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteModelInvocationLoggingConfigurationCommand
 */
export const de_DeleteModelInvocationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelInvocationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePromptRouterCommand
 */
export const de_DeletePromptRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePromptRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProvisionedModelThroughputCommand
 */
export const de_DeleteProvisionedModelThroughputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedModelThroughputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterMarketplaceModelEndpointCommand
 */
export const de_DeregisterMarketplaceModelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterMarketplaceModelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetCustomModelCommand
 */
export const de_GetCustomModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    baseModelArn: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customizationConfig: (_) => _json(__expectUnion(_)),
    customizationType: __expectString,
    hyperParameters: _json,
    jobArn: __expectString,
    jobName: __expectString,
    modelArn: __expectString,
    modelKmsKeyArn: __expectString,
    modelName: __expectString,
    outputDataConfig: _json,
    trainingDataConfig: _json,
    trainingMetrics: (_) => de_TrainingMetrics(_, context),
    validationDataConfig: _json,
    validationMetrics: (_) => de_ValidationMetrics(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetEvaluationJobCommand
 */
export const de_GetEvaluationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEvaluationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    applicationType: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customerEncryptionKeyId: __expectString,
    evaluationConfig: (_) => _json(__expectUnion(_)),
    failureMessages: _json,
    inferenceConfig: (_) => de_EvaluationInferenceConfig(__expectUnion(_), context),
    jobArn: __expectString,
    jobDescription: __expectString,
    jobName: __expectString,
    jobType: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    outputDataConfig: _json,
    roleArn: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFoundationModelCommand
 */
export const de_GetFoundationModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFoundationModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelDetails: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetGuardrailCommand
 */
export const de_GetGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGuardrailCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    blockedInputMessaging: __expectString,
    blockedOutputsMessaging: __expectString,
    contentPolicy: _json,
    contextualGroundingPolicy: (_) => de_GuardrailContextualGroundingPolicy(_, context),
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    failureRecommendations: _json,
    guardrailArn: __expectString,
    guardrailId: __expectString,
    kmsKeyArn: __expectString,
    name: __expectString,
    sensitiveInformationPolicy: _json,
    status: __expectString,
    statusReasons: _json,
    topicPolicy: _json,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
    wordPolicy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetImportedModelCommand
 */
export const de_GetImportedModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportedModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    instructSupported: __expectBoolean,
    jobArn: __expectString,
    jobName: __expectString,
    modelArchitecture: __expectString,
    modelArn: __expectString,
    modelDataSource: (_) => _json(__expectUnion(_)),
    modelKmsKeyArn: __expectString,
    modelName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetInferenceProfileCommand
 */
export const de_GetInferenceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInferenceProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    inferenceProfileArn: __expectString,
    inferenceProfileId: __expectString,
    inferenceProfileName: __expectString,
    models: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMarketplaceModelEndpointCommand
 */
export const de_GetMarketplaceModelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMarketplaceModelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    marketplaceModelEndpoint: (_) => de_MarketplaceModelEndpoint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelCopyJobCommand
 */
export const de_GetModelCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureMessage: __expectString,
    jobArn: __expectString,
    sourceAccountId: __expectString,
    sourceModelArn: __expectString,
    sourceModelName: __expectString,
    status: __expectString,
    targetModelArn: __expectString,
    targetModelKmsKeyArn: __expectString,
    targetModelName: __expectString,
    targetModelTags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelCustomizationJobCommand
 */
export const de_GetModelCustomizationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelCustomizationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    baseModelArn: __expectString,
    clientRequestToken: __expectString,
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customizationConfig: (_) => _json(__expectUnion(_)),
    customizationType: __expectString,
    endTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureMessage: __expectString,
    hyperParameters: _json,
    jobArn: __expectString,
    jobName: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    outputDataConfig: _json,
    outputModelArn: __expectString,
    outputModelKmsKeyArn: __expectString,
    outputModelName: __expectString,
    roleArn: __expectString,
    status: __expectString,
    trainingDataConfig: _json,
    trainingMetrics: (_) => de_TrainingMetrics(_, context),
    validationDataConfig: _json,
    validationMetrics: (_) => de_ValidationMetrics(_, context),
    vpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelImportJobCommand
 */
export const de_GetModelImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelImportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureMessage: __expectString,
    importedModelArn: __expectString,
    importedModelKmsKeyArn: __expectString,
    importedModelName: __expectString,
    jobArn: __expectString,
    jobName: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modelDataSource: (_) => _json(__expectUnion(_)),
    roleArn: __expectString,
    status: __expectString,
    vpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelInvocationJobCommand
 */
export const de_GetModelInvocationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelInvocationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    clientRequestToken: __expectString,
    endTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    inputDataConfig: (_) => _json(__expectUnion(_)),
    jobArn: __expectString,
    jobExpirationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobName: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    message: __expectString,
    modelId: __expectString,
    outputDataConfig: (_) => _json(__expectUnion(_)),
    roleArn: __expectString,
    status: __expectString,
    submitTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    timeoutDurationInHours: __expectInt32,
    vpcConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetModelInvocationLoggingConfigurationCommand
 */
export const de_GetModelInvocationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelInvocationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    loggingConfig: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPromptRouterCommand
 */
export const de_GetPromptRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPromptRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createdAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    fallbackModel: _json,
    models: _json,
    promptRouterArn: __expectString,
    promptRouterName: __expectString,
    routingCriteria: (_) => de_RoutingCriteria(_, context),
    status: __expectString,
    type: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProvisionedModelThroughputCommand
 */
export const de_GetProvisionedModelThroughputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedModelThroughputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    commitmentDuration: __expectString,
    commitmentExpirationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    desiredModelArn: __expectString,
    desiredModelUnits: __expectInt32,
    failureMessage: __expectString,
    foundationModelArn: __expectString,
    lastModifiedTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modelArn: __expectString,
    modelUnits: __expectInt32,
    provisionedModelArn: __expectString,
    provisionedModelName: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomModelsCommand
 */
export const de_ListCustomModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelSummaries: (_) => de_CustomModelSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListEvaluationJobsCommand
 */
export const de_ListEvaluationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEvaluationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    jobSummaries: (_) => de_EvaluationSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFoundationModelsCommand
 */
export const de_ListFoundationModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFoundationModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListGuardrailsCommand
 */
export const de_ListGuardrailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGuardrailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    guardrails: (_) => de_GuardrailSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListImportedModelsCommand
 */
export const de_ListImportedModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportedModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelSummaries: (_) => de_ImportedModelSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInferenceProfilesCommand
 */
export const de_ListInferenceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    inferenceProfileSummaries: (_) => de_InferenceProfileSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMarketplaceModelEndpointsCommand
 */
export const de_ListMarketplaceModelEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMarketplaceModelEndpointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    marketplaceModelEndpoints: (_) => de_MarketplaceModelEndpointSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListModelCopyJobsCommand
 */
export const de_ListModelCopyJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCopyJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelCopyJobSummaries: (_) => de_ModelCopyJobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListModelCustomizationJobsCommand
 */
export const de_ListModelCustomizationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCustomizationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelCustomizationJobSummaries: (_) => de_ModelCustomizationJobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListModelImportJobsCommand
 */
export const de_ListModelImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelImportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    modelImportJobSummaries: (_) => de_ModelImportJobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListModelInvocationJobsCommand
 */
export const de_ListModelInvocationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelInvocationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    invocationJobSummaries: (_) => de_ModelInvocationJobSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPromptRoutersCommand
 */
export const de_ListPromptRoutersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPromptRoutersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    promptRouterSummaries: (_) => de_PromptRouterSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProvisionedModelThroughputsCommand
 */
export const de_ListProvisionedModelThroughputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedModelThroughputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    provisionedModelSummaries: (_) => de_ProvisionedModelSummaries(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutModelInvocationLoggingConfigurationCommand
 */
export const de_PutModelInvocationLoggingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelInvocationLoggingConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterMarketplaceModelEndpointCommand
 */
export const de_RegisterMarketplaceModelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterMarketplaceModelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    marketplaceModelEndpoint: (_) => de_MarketplaceModelEndpoint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopEvaluationJobCommand
 */
export const de_StopEvaluationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEvaluationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopModelCustomizationJobCommand
 */
export const de_StopModelCustomizationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopModelCustomizationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopModelInvocationJobCommand
 */
export const de_StopModelInvocationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopModelInvocationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGuardrailCommand
 */
export const de_UpdateGuardrailCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGuardrailCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    guardrailArn: __expectString,
    guardrailId: __expectString,
    updatedAt: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMarketplaceModelEndpointCommand
 */
export const de_UpdateMarketplaceModelEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMarketplaceModelEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    marketplaceModelEndpoint: (_) => de_MarketplaceModelEndpoint(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProvisionedModelThroughputCommand
 */
export const de_UpdateProvisionedModelThroughputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProvisionedModelThroughputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.bedrock#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrock#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrock#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrock#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrock#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrock#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrock#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.bedrock#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.bedrock#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceName: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AdditionalModelRequestFields
 */
const se_AdditionalModelRequestFields = (input: Record<string, __DocumentType>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_AdditionalModelRequestFieldsValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1AdditionalModelRequestFieldsValue
 */
const se_AdditionalModelRequestFieldsValue = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

// se_AutomatedEvaluationConfig omitted.

// se_BedrockEvaluatorModel omitted.

// se_BedrockEvaluatorModels omitted.

/**
 * serializeAws_restJson1ByteContentDoc
 */
const se_ByteContentDoc = (input: ByteContentDoc, context: __SerdeContext): any => {
  return take(input, {
    contentType: [],
    data: context.base64Encoder,
    identifier: [],
  });
};

// se_CloudWatchConfig omitted.

// se_CustomizationConfig omitted.

// se_DistillationConfig omitted.

// se_EndpointConfig omitted.

// se_EvaluationBedrockModel omitted.

// se_EvaluationConfig omitted.

// se_EvaluationDataset omitted.

// se_EvaluationDatasetLocation omitted.

// se_EvaluationDatasetMetricConfig omitted.

// se_EvaluationDatasetMetricConfigs omitted.

/**
 * serializeAws_restJson1EvaluationInferenceConfig
 */
const se_EvaluationInferenceConfig = (input: EvaluationInferenceConfig, context: __SerdeContext): any => {
  return EvaluationInferenceConfig.visit(input, {
    models: (value) => ({ models: _json(value) }),
    ragConfigs: (value) => ({ ragConfigs: se_RagConfigs(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

// se_EvaluationJobIdentifiers omitted.

// se_EvaluationMetricNames omitted.

// se_EvaluationModelConfig omitted.

// se_EvaluationModelConfigs omitted.

// se_EvaluationOutputDataConfig omitted.

// se_EvaluatorModelConfig omitted.

/**
 * serializeAws_restJson1ExternalSource
 */
const se_ExternalSource = (input: ExternalSource, context: __SerdeContext): any => {
  return take(input, {
    byteContent: (_) => se_ByteContentDoc(_, context),
    s3Location: _json,
    sourceType: [],
  });
};

/**
 * serializeAws_restJson1ExternalSources
 */
const se_ExternalSources = (input: ExternalSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExternalSource(entry, context);
    });
};

/**
 * serializeAws_restJson1ExternalSourcesGenerationConfiguration
 */
const se_ExternalSourcesGenerationConfiguration = (
  input: ExternalSourcesGenerationConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    guardrailConfiguration: _json,
    kbInferenceConfig: (_) => se_KbInferenceConfig(_, context),
    promptTemplate: _json,
  });
};

/**
 * serializeAws_restJson1ExternalSourcesRetrieveAndGenerateConfiguration
 */
const se_ExternalSourcesRetrieveAndGenerateConfiguration = (
  input: ExternalSourcesRetrieveAndGenerateConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    generationConfiguration: (_) => se_ExternalSourcesGenerationConfiguration(_, context),
    modelArn: [],
    sources: (_) => se_ExternalSources(_, context),
  });
};

/**
 * serializeAws_restJson1FilterAttribute
 */
const se_FilterAttribute = (input: FilterAttribute, context: __SerdeContext): any => {
  return take(input, {
    key: [],
    value: (_) => se_FilterValue(_, context),
  });
};

/**
 * serializeAws_restJson1FilterValue
 */
const se_FilterValue = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

/**
 * serializeAws_restJson1GenerationConfiguration
 */
const se_GenerationConfiguration = (input: GenerationConfiguration, context: __SerdeContext): any => {
  return take(input, {
    additionalModelRequestFields: (_) => se_AdditionalModelRequestFields(_, context),
    guardrailConfiguration: _json,
    kbInferenceConfig: (_) => se_KbInferenceConfig(_, context),
    promptTemplate: _json,
  });
};

// se_GuardrailConfiguration omitted.

// se_GuardrailContentFilterConfig omitted.

// se_GuardrailContentFiltersConfig omitted.

// se_GuardrailContentPolicyConfig omitted.

/**
 * serializeAws_restJson1GuardrailContextualGroundingFilterConfig
 */
const se_GuardrailContextualGroundingFilterConfig = (
  input: GuardrailContextualGroundingFilterConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    threshold: __serializeFloat,
    type: [],
  });
};

/**
 * serializeAws_restJson1GuardrailContextualGroundingFiltersConfig
 */
const se_GuardrailContextualGroundingFiltersConfig = (
  input: GuardrailContextualGroundingFilterConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_GuardrailContextualGroundingFilterConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1GuardrailContextualGroundingPolicyConfig
 */
const se_GuardrailContextualGroundingPolicyConfig = (
  input: GuardrailContextualGroundingPolicyConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    filtersConfig: (_) => se_GuardrailContextualGroundingFiltersConfig(_, context),
  });
};

// se_GuardrailManagedWordListsConfig omitted.

// se_GuardrailManagedWordsConfig omitted.

// se_GuardrailModalities omitted.

// se_GuardrailPiiEntitiesConfig omitted.

// se_GuardrailPiiEntityConfig omitted.

// se_GuardrailRegexConfig omitted.

// se_GuardrailRegexesConfig omitted.

// se_GuardrailSensitiveInformationPolicyConfig omitted.

// se_GuardrailTopicConfig omitted.

// se_GuardrailTopicExamples omitted.

// se_GuardrailTopicPolicyConfig omitted.

// se_GuardrailTopicsConfig omitted.

// se_GuardrailWordConfig omitted.

// se_GuardrailWordPolicyConfig omitted.

// se_GuardrailWordsConfig omitted.

// se_HumanEvaluationConfig omitted.

// se_HumanEvaluationCustomMetric omitted.

// se_HumanEvaluationCustomMetrics omitted.

// se_HumanWorkflowConfig omitted.

// se_InferenceProfileModelSource omitted.

// se_InvocationLogsConfig omitted.

// se_InvocationLogSource omitted.

/**
 * serializeAws_restJson1KbInferenceConfig
 */
const se_KbInferenceConfig = (input: KbInferenceConfig, context: __SerdeContext): any => {
  return take(input, {
    textInferenceConfig: (_) => se_TextInferenceConfig(_, context),
  });
};

/**
 * serializeAws_restJson1KnowledgeBaseConfig
 */
const se_KnowledgeBaseConfig = (input: KnowledgeBaseConfig, context: __SerdeContext): any => {
  return KnowledgeBaseConfig.visit(input, {
    retrieveAndGenerateConfig: (value) => ({
      retrieveAndGenerateConfig: se_RetrieveAndGenerateConfiguration(value, context),
    }),
    retrieveConfig: (value) => ({ retrieveConfig: se_RetrieveConfig(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1KnowledgeBaseRetrievalConfiguration
 */
const se_KnowledgeBaseRetrievalConfiguration = (
  input: KnowledgeBaseRetrievalConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    vectorSearchConfiguration: (_) => se_KnowledgeBaseVectorSearchConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1KnowledgeBaseRetrieveAndGenerateConfiguration
 */
const se_KnowledgeBaseRetrieveAndGenerateConfiguration = (
  input: KnowledgeBaseRetrieveAndGenerateConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    generationConfiguration: (_) => se_GenerationConfiguration(_, context),
    knowledgeBaseId: [],
    modelArn: [],
    orchestrationConfiguration: _json,
    retrievalConfiguration: (_) => se_KnowledgeBaseRetrievalConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1KnowledgeBaseVectorSearchConfiguration
 */
const se_KnowledgeBaseVectorSearchConfiguration = (
  input: KnowledgeBaseVectorSearchConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    filter: (_) => se_RetrievalFilter(_, context),
    numberOfResults: [],
    overrideSearchType: [],
  });
};

// se_LoggingConfig omitted.

// se_ModelCustomizationHyperParameters omitted.

// se_ModelDataSource omitted.

// se_ModelInvocationJobInputDataConfig omitted.

// se_ModelInvocationJobOutputDataConfig omitted.

// se_ModelInvocationJobS3InputDataConfig omitted.

// se_ModelInvocationJobS3OutputDataConfig omitted.

// se_OrchestrationConfiguration omitted.

// se_OutputDataConfig omitted.

// se_PerformanceConfiguration omitted.

// se_PromptRouterTargetModel omitted.

// se_PromptRouterTargetModels omitted.

// se_PromptTemplate omitted.

// se_QueryTransformationConfiguration omitted.

/**
 * serializeAws_restJson1RAGConfig
 */
const se_RAGConfig = (input: RAGConfig, context: __SerdeContext): any => {
  return RAGConfig.visit(input, {
    knowledgeBaseConfig: (value) => ({ knowledgeBaseConfig: se_KnowledgeBaseConfig(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1RagConfigs
 */
const se_RagConfigs = (input: RAGConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RAGConfig(entry, context);
    });
};

// se_RAGStopSequences omitted.

// se_RequestMetadataBaseFilters omitted.

// se_RequestMetadataFilters omitted.

// se_RequestMetadataFiltersList omitted.

// se_RequestMetadataMap omitted.

/**
 * serializeAws_restJson1RetrievalFilter
 */
const se_RetrievalFilter = (input: RetrievalFilter, context: __SerdeContext): any => {
  return RetrievalFilter.visit(input, {
    andAll: (value) => ({ andAll: se_RetrievalFilterList(value, context) }),
    equals: (value) => ({ equals: se_FilterAttribute(value, context) }),
    greaterThan: (value) => ({ greaterThan: se_FilterAttribute(value, context) }),
    greaterThanOrEquals: (value) => ({ greaterThanOrEquals: se_FilterAttribute(value, context) }),
    in: (value) => ({ in: se_FilterAttribute(value, context) }),
    lessThan: (value) => ({ lessThan: se_FilterAttribute(value, context) }),
    lessThanOrEquals: (value) => ({ lessThanOrEquals: se_FilterAttribute(value, context) }),
    listContains: (value) => ({ listContains: se_FilterAttribute(value, context) }),
    notEquals: (value) => ({ notEquals: se_FilterAttribute(value, context) }),
    notIn: (value) => ({ notIn: se_FilterAttribute(value, context) }),
    orAll: (value) => ({ orAll: se_RetrievalFilterList(value, context) }),
    startsWith: (value) => ({ startsWith: se_FilterAttribute(value, context) }),
    stringContains: (value) => ({ stringContains: se_FilterAttribute(value, context) }),
    _: (name, value) => ({ [name]: value } as any),
  });
};

/**
 * serializeAws_restJson1RetrievalFilterList
 */
const se_RetrievalFilterList = (input: RetrievalFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RetrievalFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1RetrieveAndGenerateConfiguration
 */
const se_RetrieveAndGenerateConfiguration = (input: RetrieveAndGenerateConfiguration, context: __SerdeContext): any => {
  return take(input, {
    externalSourcesConfiguration: (_) => se_ExternalSourcesRetrieveAndGenerateConfiguration(_, context),
    knowledgeBaseConfiguration: (_) => se_KnowledgeBaseRetrieveAndGenerateConfiguration(_, context),
    type: [],
  });
};

/**
 * serializeAws_restJson1RetrieveConfig
 */
const se_RetrieveConfig = (input: RetrieveConfig, context: __SerdeContext): any => {
  return take(input, {
    knowledgeBaseId: [],
    knowledgeBaseRetrievalConfiguration: (_) => se_KnowledgeBaseRetrievalConfiguration(_, context),
  });
};

/**
 * serializeAws_restJson1RoutingCriteria
 */
const se_RoutingCriteria = (input: RoutingCriteria, context: __SerdeContext): any => {
  return take(input, {
    responseQualityDifference: __serializeFloat,
  });
};

// se_S3Config omitted.

// se_S3DataSource omitted.

// se_S3ObjectDoc omitted.

// se_SageMakerEndpoint omitted.

// se_SecurityGroupIds omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TeacherModelConfig omitted.

/**
 * serializeAws_restJson1TextInferenceConfig
 */
const se_TextInferenceConfig = (input: TextInferenceConfig, context: __SerdeContext): any => {
  return take(input, {
    maxTokens: [],
    stopSequences: _json,
    temperature: __serializeFloat,
    topP: __serializeFloat,
  });
};

// se_TrainingDataConfig omitted.

// se_ValidationDataConfig omitted.

// se_Validator omitted.

// se_Validators omitted.

// se_VpcConfig omitted.

/**
 * deserializeAws_restJson1AdditionalModelRequestFields
 */
const de_AdditionalModelRequestFields = (output: any, context: __SerdeContext): Record<string, __DocumentType> => {
  return Object.entries(output).reduce((acc: Record<string, __DocumentType>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_AdditionalModelRequestFieldsValue(value, context);
    return acc;
  }, {} as Record<string, __DocumentType>);
};

/**
 * deserializeAws_restJson1AdditionalModelRequestFieldsValue
 */
const de_AdditionalModelRequestFieldsValue = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_AutomatedEvaluationConfig omitted.

// de_BatchDeleteEvaluationJobError omitted.

// de_BatchDeleteEvaluationJobErrors omitted.

// de_BatchDeleteEvaluationJobItem omitted.

// de_BatchDeleteEvaluationJobItems omitted.

// de_BedrockEvaluatorModel omitted.

// de_BedrockEvaluatorModels omitted.

/**
 * deserializeAws_restJson1ByteContentDoc
 */
const de_ByteContentDoc = (output: any, context: __SerdeContext): ByteContentDoc => {
  return take(output, {
    contentType: __expectString,
    data: context.base64Decoder,
    identifier: __expectString,
  }) as any;
};

// de_CloudWatchConfig omitted.

// de_CustomizationConfig omitted.

/**
 * deserializeAws_restJson1CustomModelSummary
 */
const de_CustomModelSummary = (output: any, context: __SerdeContext): CustomModelSummary => {
  return take(output, {
    baseModelArn: __expectString,
    baseModelName: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customizationType: __expectString,
    modelArn: __expectString,
    modelName: __expectString,
    ownerAccountId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CustomModelSummaryList
 */
const de_CustomModelSummaryList = (output: any, context: __SerdeContext): CustomModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CustomModelSummary(entry, context);
    });
  return retVal;
};

// de_DistillationConfig omitted.

// de_EndpointConfig omitted.

// de_ErrorMessages omitted.

// de_EvaluationBedrockModel omitted.

// de_EvaluationConfig omitted.

// de_EvaluationDataset omitted.

// de_EvaluationDatasetLocation omitted.

// de_EvaluationDatasetMetricConfig omitted.

// de_EvaluationDatasetMetricConfigs omitted.

/**
 * deserializeAws_restJson1EvaluationInferenceConfig
 */
const de_EvaluationInferenceConfig = (output: any, context: __SerdeContext): EvaluationInferenceConfig => {
  if (output.models != null) {
    return {
      models: _json(output.models),
    };
  }
  if (output.ragConfigs != null) {
    return {
      ragConfigs: de_RagConfigs(output.ragConfigs, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

// de_EvaluationMetricNames omitted.

// de_EvaluationModelConfig omitted.

// de_EvaluationModelConfigs omitted.

// de_EvaluationModelIdentifiers omitted.

// de_EvaluationOutputDataConfig omitted.

/**
 * deserializeAws_restJson1EvaluationSummaries
 */
const de_EvaluationSummaries = (output: any, context: __SerdeContext): EvaluationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EvaluationSummary
 */
const de_EvaluationSummary = (output: any, context: __SerdeContext): EvaluationSummary => {
  return take(output, {
    applicationType: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    evaluationTaskTypes: _json,
    evaluatorModelIdentifiers: _json,
    jobArn: __expectString,
    jobName: __expectString,
    jobType: __expectString,
    modelIdentifiers: _json,
    ragIdentifiers: _json,
    status: __expectString,
  }) as any;
};

// de_EvaluationTaskTypes omitted.

// de_EvaluatorModelConfig omitted.

// de_EvaluatorModelIdentifiers omitted.

/**
 * deserializeAws_restJson1ExternalSource
 */
const de_ExternalSource = (output: any, context: __SerdeContext): ExternalSource => {
  return take(output, {
    byteContent: (_: any) => de_ByteContentDoc(_, context),
    s3Location: _json,
    sourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ExternalSources
 */
const de_ExternalSources = (output: any, context: __SerdeContext): ExternalSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExternalSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExternalSourcesGenerationConfiguration
 */
const de_ExternalSourcesGenerationConfiguration = (
  output: any,
  context: __SerdeContext
): ExternalSourcesGenerationConfiguration => {
  return take(output, {
    additionalModelRequestFields: (_: any) => de_AdditionalModelRequestFields(_, context),
    guardrailConfiguration: _json,
    kbInferenceConfig: (_: any) => de_KbInferenceConfig(_, context),
    promptTemplate: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExternalSourcesRetrieveAndGenerateConfiguration
 */
const de_ExternalSourcesRetrieveAndGenerateConfiguration = (
  output: any,
  context: __SerdeContext
): ExternalSourcesRetrieveAndGenerateConfiguration => {
  return take(output, {
    generationConfiguration: (_: any) => de_ExternalSourcesGenerationConfiguration(_, context),
    modelArn: __expectString,
    sources: (_: any) => de_ExternalSources(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilterAttribute
 */
const de_FilterAttribute = (output: any, context: __SerdeContext): FilterAttribute => {
  return take(output, {
    key: __expectString,
    value: (_: any) => de_FilterValue(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FilterValue
 */
const de_FilterValue = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

// de_FoundationModelDetails omitted.

// de_FoundationModelLifecycle omitted.

// de_FoundationModelSummary omitted.

// de_FoundationModelSummaryList omitted.

/**
 * deserializeAws_restJson1GenerationConfiguration
 */
const de_GenerationConfiguration = (output: any, context: __SerdeContext): GenerationConfiguration => {
  return take(output, {
    additionalModelRequestFields: (_: any) => de_AdditionalModelRequestFields(_, context),
    guardrailConfiguration: _json,
    kbInferenceConfig: (_: any) => de_KbInferenceConfig(_, context),
    promptTemplate: _json,
  }) as any;
};

// de_GuardrailConfiguration omitted.

// de_GuardrailContentFilter omitted.

// de_GuardrailContentFilters omitted.

// de_GuardrailContentPolicy omitted.

/**
 * deserializeAws_restJson1GuardrailContextualGroundingFilter
 */
const de_GuardrailContextualGroundingFilter = (
  output: any,
  context: __SerdeContext
): GuardrailContextualGroundingFilter => {
  return take(output, {
    threshold: __limitedParseDouble,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1GuardrailContextualGroundingFilters
 */
const de_GuardrailContextualGroundingFilters = (
  output: any,
  context: __SerdeContext
): GuardrailContextualGroundingFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GuardrailContextualGroundingFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GuardrailContextualGroundingPolicy
 */
const de_GuardrailContextualGroundingPolicy = (
  output: any,
  context: __SerdeContext
): GuardrailContextualGroundingPolicy => {
  return take(output, {
    filters: (_: any) => de_GuardrailContextualGroundingFilters(_, context),
  }) as any;
};

// de_GuardrailFailureRecommendations omitted.

// de_GuardrailManagedWordLists omitted.

// de_GuardrailManagedWords omitted.

// de_GuardrailModalities omitted.

// de_GuardrailPiiEntities omitted.

// de_GuardrailPiiEntity omitted.

// de_GuardrailRegex omitted.

// de_GuardrailRegexes omitted.

// de_GuardrailSensitiveInformationPolicy omitted.

// de_GuardrailStatusReasons omitted.

/**
 * deserializeAws_restJson1GuardrailSummaries
 */
const de_GuardrailSummaries = (output: any, context: __SerdeContext): GuardrailSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GuardrailSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GuardrailSummary
 */
const de_GuardrailSummary = (output: any, context: __SerdeContext): GuardrailSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    id: __expectString,
    name: __expectString,
    status: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    version: __expectString,
  }) as any;
};

// de_GuardrailTopic omitted.

// de_GuardrailTopicExamples omitted.

// de_GuardrailTopicPolicy omitted.

// de_GuardrailTopics omitted.

// de_GuardrailWord omitted.

// de_GuardrailWordPolicy omitted.

// de_GuardrailWords omitted.

// de_HumanEvaluationConfig omitted.

// de_HumanEvaluationCustomMetric omitted.

// de_HumanEvaluationCustomMetrics omitted.

// de_HumanWorkflowConfig omitted.

/**
 * deserializeAws_restJson1ImportedModelSummary
 */
const de_ImportedModelSummary = (output: any, context: __SerdeContext): ImportedModelSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    instructSupported: __expectBoolean,
    modelArchitecture: __expectString,
    modelArn: __expectString,
    modelName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImportedModelSummaryList
 */
const de_ImportedModelSummaryList = (output: any, context: __SerdeContext): ImportedModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportedModelSummary(entry, context);
    });
  return retVal;
};

// de_InferenceProfileModel omitted.

// de_InferenceProfileModels omitted.

/**
 * deserializeAws_restJson1InferenceProfileSummaries
 */
const de_InferenceProfileSummaries = (output: any, context: __SerdeContext): InferenceProfileSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceProfileSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InferenceProfileSummary
 */
const de_InferenceProfileSummary = (output: any, context: __SerdeContext): InferenceProfileSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    inferenceProfileArn: __expectString,
    inferenceProfileId: __expectString,
    inferenceProfileName: __expectString,
    models: _json,
    status: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_InferenceTypeList omitted.

// de_InvocationLogsConfig omitted.

// de_InvocationLogSource omitted.

/**
 * deserializeAws_restJson1KbInferenceConfig
 */
const de_KbInferenceConfig = (output: any, context: __SerdeContext): KbInferenceConfig => {
  return take(output, {
    textInferenceConfig: (_: any) => de_TextInferenceConfig(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KnowledgeBaseConfig
 */
const de_KnowledgeBaseConfig = (output: any, context: __SerdeContext): KnowledgeBaseConfig => {
  if (output.retrieveAndGenerateConfig != null) {
    return {
      retrieveAndGenerateConfig: de_RetrieveAndGenerateConfiguration(output.retrieveAndGenerateConfig, context),
    };
  }
  if (output.retrieveConfig != null) {
    return {
      retrieveConfig: de_RetrieveConfig(output.retrieveConfig, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1KnowledgeBaseRetrievalConfiguration
 */
const de_KnowledgeBaseRetrievalConfiguration = (
  output: any,
  context: __SerdeContext
): KnowledgeBaseRetrievalConfiguration => {
  return take(output, {
    vectorSearchConfiguration: (_: any) => de_KnowledgeBaseVectorSearchConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KnowledgeBaseRetrieveAndGenerateConfiguration
 */
const de_KnowledgeBaseRetrieveAndGenerateConfiguration = (
  output: any,
  context: __SerdeContext
): KnowledgeBaseRetrieveAndGenerateConfiguration => {
  return take(output, {
    generationConfiguration: (_: any) => de_GenerationConfiguration(_, context),
    knowledgeBaseId: __expectString,
    modelArn: __expectString,
    orchestrationConfiguration: _json,
    retrievalConfiguration: (_: any) => de_KnowledgeBaseRetrievalConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1KnowledgeBaseVectorSearchConfiguration
 */
const de_KnowledgeBaseVectorSearchConfiguration = (
  output: any,
  context: __SerdeContext
): KnowledgeBaseVectorSearchConfiguration => {
  return take(output, {
    filter: (_: any) => de_RetrievalFilter(__expectUnion(_), context),
    numberOfResults: __expectInt32,
    overrideSearchType: __expectString,
  }) as any;
};

// de_LoggingConfig omitted.

/**
 * deserializeAws_restJson1MarketplaceModelEndpoint
 */
const de_MarketplaceModelEndpoint = (output: any, context: __SerdeContext): MarketplaceModelEndpoint => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endpointArn: __expectString,
    endpointConfig: (_: any) => _json(__expectUnion(_)),
    endpointStatus: __expectString,
    endpointStatusMessage: __expectString,
    modelSourceIdentifier: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1MarketplaceModelEndpointSummaries
 */
const de_MarketplaceModelEndpointSummaries = (
  output: any,
  context: __SerdeContext
): MarketplaceModelEndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MarketplaceModelEndpointSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MarketplaceModelEndpointSummary
 */
const de_MarketplaceModelEndpointSummary = (output: any, context: __SerdeContext): MarketplaceModelEndpointSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endpointArn: __expectString,
    modelSourceIdentifier: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ModelCopyJobSummaries
 */
const de_ModelCopyJobSummaries = (output: any, context: __SerdeContext): ModelCopyJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCopyJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ModelCopyJobSummary
 */
const de_ModelCopyJobSummary = (output: any, context: __SerdeContext): ModelCopyJobSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    failureMessage: __expectString,
    jobArn: __expectString,
    sourceAccountId: __expectString,
    sourceModelArn: __expectString,
    sourceModelName: __expectString,
    status: __expectString,
    targetModelArn: __expectString,
    targetModelKmsKeyArn: __expectString,
    targetModelName: __expectString,
    targetModelTags: _json,
  }) as any;
};

// de_ModelCustomizationHyperParameters omitted.

/**
 * deserializeAws_restJson1ModelCustomizationJobSummaries
 */
const de_ModelCustomizationJobSummaries = (output: any, context: __SerdeContext): ModelCustomizationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCustomizationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ModelCustomizationJobSummary
 */
const de_ModelCustomizationJobSummary = (output: any, context: __SerdeContext): ModelCustomizationJobSummary => {
  return take(output, {
    baseModelArn: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    customModelArn: __expectString,
    customModelName: __expectString,
    customizationType: __expectString,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobArn: __expectString,
    jobName: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  }) as any;
};

// de_ModelCustomizationList omitted.

// de_ModelDataSource omitted.

/**
 * deserializeAws_restJson1ModelImportJobSummaries
 */
const de_ModelImportJobSummaries = (output: any, context: __SerdeContext): ModelImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelImportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ModelImportJobSummary
 */
const de_ModelImportJobSummary = (output: any, context: __SerdeContext): ModelImportJobSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    importedModelArn: __expectString,
    importedModelName: __expectString,
    jobArn: __expectString,
    jobName: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    status: __expectString,
  }) as any;
};

// de_ModelInvocationJobInputDataConfig omitted.

// de_ModelInvocationJobOutputDataConfig omitted.

// de_ModelInvocationJobS3InputDataConfig omitted.

// de_ModelInvocationJobS3OutputDataConfig omitted.

/**
 * deserializeAws_restJson1ModelInvocationJobSummaries
 */
const de_ModelInvocationJobSummaries = (output: any, context: __SerdeContext): ModelInvocationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelInvocationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ModelInvocationJobSummary
 */
const de_ModelInvocationJobSummary = (output: any, context: __SerdeContext): ModelInvocationJobSummary => {
  return take(output, {
    clientRequestToken: __expectString,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    inputDataConfig: (_: any) => _json(__expectUnion(_)),
    jobArn: __expectString,
    jobExpirationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    jobName: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    message: __expectString,
    modelId: __expectString,
    outputDataConfig: (_: any) => _json(__expectUnion(_)),
    roleArn: __expectString,
    status: __expectString,
    submitTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    timeoutDurationInHours: __expectInt32,
    vpcConfig: _json,
  }) as any;
};

// de_ModelModalityList omitted.

// de_OrchestrationConfiguration omitted.

// de_OutputDataConfig omitted.

// de_PerformanceConfiguration omitted.

/**
 * deserializeAws_restJson1PromptRouterSummaries
 */
const de_PromptRouterSummaries = (output: any, context: __SerdeContext): PromptRouterSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PromptRouterSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PromptRouterSummary
 */
const de_PromptRouterSummary = (output: any, context: __SerdeContext): PromptRouterSummary => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    fallbackModel: _json,
    models: _json,
    promptRouterArn: __expectString,
    promptRouterName: __expectString,
    routingCriteria: (_: any) => de_RoutingCriteria(_, context),
    status: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_PromptRouterTargetModel omitted.

// de_PromptRouterTargetModels omitted.

// de_PromptTemplate omitted.

/**
 * deserializeAws_restJson1ProvisionedModelSummaries
 */
const de_ProvisionedModelSummaries = (output: any, context: __SerdeContext): ProvisionedModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProvisionedModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProvisionedModelSummary
 */
const de_ProvisionedModelSummary = (output: any, context: __SerdeContext): ProvisionedModelSummary => {
  return take(output, {
    commitmentDuration: __expectString,
    commitmentExpirationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creationTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    desiredModelArn: __expectString,
    desiredModelUnits: __expectInt32,
    foundationModelArn: __expectString,
    lastModifiedTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    modelArn: __expectString,
    modelUnits: __expectInt32,
    provisionedModelArn: __expectString,
    provisionedModelName: __expectString,
    status: __expectString,
  }) as any;
};

// de_QueryTransformationConfiguration omitted.

/**
 * deserializeAws_restJson1RAGConfig
 */
const de_RAGConfig = (output: any, context: __SerdeContext): RAGConfig => {
  if (output.knowledgeBaseConfig != null) {
    return {
      knowledgeBaseConfig: de_KnowledgeBaseConfig(__expectUnion(output.knowledgeBaseConfig), context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RagConfigs
 */
const de_RagConfigs = (output: any, context: __SerdeContext): RAGConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RAGConfig(__expectUnion(entry), context);
    });
  return retVal;
};

// de_RAGIdentifiers omitted.

// de_RAGStopSequences omitted.

// de_RequestMetadataBaseFilters omitted.

// de_RequestMetadataFilters omitted.

// de_RequestMetadataFiltersList omitted.

// de_RequestMetadataMap omitted.

/**
 * deserializeAws_restJson1RetrievalFilter
 */
const de_RetrievalFilter = (output: any, context: __SerdeContext): RetrievalFilter => {
  if (output.andAll != null) {
    return {
      andAll: de_RetrievalFilterList(output.andAll, context),
    };
  }
  if (output.equals != null) {
    return {
      equals: de_FilterAttribute(output.equals, context),
    };
  }
  if (output.greaterThan != null) {
    return {
      greaterThan: de_FilterAttribute(output.greaterThan, context),
    };
  }
  if (output.greaterThanOrEquals != null) {
    return {
      greaterThanOrEquals: de_FilterAttribute(output.greaterThanOrEquals, context),
    };
  }
  if (output.in != null) {
    return {
      in: de_FilterAttribute(output.in, context),
    };
  }
  if (output.lessThan != null) {
    return {
      lessThan: de_FilterAttribute(output.lessThan, context),
    };
  }
  if (output.lessThanOrEquals != null) {
    return {
      lessThanOrEquals: de_FilterAttribute(output.lessThanOrEquals, context),
    };
  }
  if (output.listContains != null) {
    return {
      listContains: de_FilterAttribute(output.listContains, context),
    };
  }
  if (output.notEquals != null) {
    return {
      notEquals: de_FilterAttribute(output.notEquals, context),
    };
  }
  if (output.notIn != null) {
    return {
      notIn: de_FilterAttribute(output.notIn, context),
    };
  }
  if (output.orAll != null) {
    return {
      orAll: de_RetrievalFilterList(output.orAll, context),
    };
  }
  if (output.startsWith != null) {
    return {
      startsWith: de_FilterAttribute(output.startsWith, context),
    };
  }
  if (output.stringContains != null) {
    return {
      stringContains: de_FilterAttribute(output.stringContains, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1RetrievalFilterList
 */
const de_RetrievalFilterList = (output: any, context: __SerdeContext): RetrievalFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RetrievalFilter(__expectUnion(entry), context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RetrieveAndGenerateConfiguration
 */
const de_RetrieveAndGenerateConfiguration = (
  output: any,
  context: __SerdeContext
): RetrieveAndGenerateConfiguration => {
  return take(output, {
    externalSourcesConfiguration: (_: any) => de_ExternalSourcesRetrieveAndGenerateConfiguration(_, context),
    knowledgeBaseConfiguration: (_: any) => de_KnowledgeBaseRetrieveAndGenerateConfiguration(_, context),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RetrieveConfig
 */
const de_RetrieveConfig = (output: any, context: __SerdeContext): RetrieveConfig => {
  return take(output, {
    knowledgeBaseId: __expectString,
    knowledgeBaseRetrievalConfiguration: (_: any) => de_KnowledgeBaseRetrievalConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RoutingCriteria
 */
const de_RoutingCriteria = (output: any, context: __SerdeContext): RoutingCriteria => {
  return take(output, {
    responseQualityDifference: __limitedParseDouble,
  }) as any;
};

// de_S3Config omitted.

// de_S3DataSource omitted.

// de_S3ObjectDoc omitted.

// de_SageMakerEndpoint omitted.

// de_SecurityGroupIds omitted.

// de_SubnetIds omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TeacherModelConfig omitted.

/**
 * deserializeAws_restJson1TextInferenceConfig
 */
const de_TextInferenceConfig = (output: any, context: __SerdeContext): TextInferenceConfig => {
  return take(output, {
    maxTokens: __expectInt32,
    stopSequences: _json,
    temperature: __limitedParseFloat32,
    topP: __limitedParseFloat32,
  }) as any;
};

// de_TrainingDataConfig omitted.

/**
 * deserializeAws_restJson1TrainingMetrics
 */
const de_TrainingMetrics = (output: any, context: __SerdeContext): TrainingMetrics => {
  return take(output, {
    trainingLoss: __limitedParseFloat32,
  }) as any;
};

// de_ValidationDataConfig omitted.

/**
 * deserializeAws_restJson1ValidationMetrics
 */
const de_ValidationMetrics = (output: any, context: __SerdeContext): ValidatorMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValidatorMetric(entry, context);
    });
  return retVal;
};

// de_Validator omitted.

/**
 * deserializeAws_restJson1ValidatorMetric
 */
const de_ValidatorMetric = (output: any, context: __SerdeContext): ValidatorMetric => {
  return take(output, {
    validationLoss: __limitedParseFloat32,
  }) as any;
};

// de_Validators omitted.

// de_VpcConfig omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const _aTE = "applicationTypeEquals";
const _bCT = "byCustomizationType";
const _bIT = "byInferenceType";
const _bMAE = "baseModelArnEquals";
const _bOM = "byOutputModality";
const _bP = "byProvider";
const _cTA = "creationTimeAfter";
const _cTB = "creationTimeBefore";
const _fMAE = "foundationModelArnEquals";
const _gI = "guardrailIdentifier";
const _gV = "guardrailVersion";
const _iO = "isOwned";
const _mAE = "modelArnEquals";
const _mR = "maxResults";
const _mSE = "modelSourceEquals";
const _mSI = "modelSourceIdentifier";
const _nC = "nameContains";
const _nT = "nextToken";
const _oMNC = "outputModelNameContains";
const _sAE = "sourceAccountEquals";
const _sB = "sortBy";
const _sE = "statusEquals";
const _sMAE = "sourceModelArnEquals";
const _sO = "sortOrder";
const _sTA = "submitTimeAfter";
const _sTB = "submitTimeBefore";
const _t = "type";
const _tE = "typeEquals";
const _tMNC = "targetModelNameContains";
