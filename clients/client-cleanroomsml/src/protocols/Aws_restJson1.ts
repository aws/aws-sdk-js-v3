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
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CancelTrainedModelCommandInput, CancelTrainedModelCommandOutput } from "../commands/CancelTrainedModelCommand";
import {
  CancelTrainedModelInferenceJobCommandInput,
  CancelTrainedModelInferenceJobCommandOutput,
} from "../commands/CancelTrainedModelInferenceJobCommand";
import {
  CreateAudienceModelCommandInput,
  CreateAudienceModelCommandOutput,
} from "../commands/CreateAudienceModelCommand";
import {
  CreateConfiguredAudienceModelCommandInput,
  CreateConfiguredAudienceModelCommandOutput,
} from "../commands/CreateConfiguredAudienceModelCommand";
import {
  CreateConfiguredModelAlgorithmAssociationCommandInput,
  CreateConfiguredModelAlgorithmAssociationCommandOutput,
} from "../commands/CreateConfiguredModelAlgorithmAssociationCommand";
import {
  CreateConfiguredModelAlgorithmCommandInput,
  CreateConfiguredModelAlgorithmCommandOutput,
} from "../commands/CreateConfiguredModelAlgorithmCommand";
import {
  CreateMLInputChannelCommandInput,
  CreateMLInputChannelCommandOutput,
} from "../commands/CreateMLInputChannelCommand";
import { CreateTrainedModelCommandInput, CreateTrainedModelCommandOutput } from "../commands/CreateTrainedModelCommand";
import {
  CreateTrainingDatasetCommandInput,
  CreateTrainingDatasetCommandOutput,
} from "../commands/CreateTrainingDatasetCommand";
import {
  DeleteAudienceGenerationJobCommandInput,
  DeleteAudienceGenerationJobCommandOutput,
} from "../commands/DeleteAudienceGenerationJobCommand";
import {
  DeleteAudienceModelCommandInput,
  DeleteAudienceModelCommandOutput,
} from "../commands/DeleteAudienceModelCommand";
import {
  DeleteConfiguredAudienceModelCommandInput,
  DeleteConfiguredAudienceModelCommandOutput,
} from "../commands/DeleteConfiguredAudienceModelCommand";
import {
  DeleteConfiguredAudienceModelPolicyCommandInput,
  DeleteConfiguredAudienceModelPolicyCommandOutput,
} from "../commands/DeleteConfiguredAudienceModelPolicyCommand";
import {
  DeleteConfiguredModelAlgorithmAssociationCommandInput,
  DeleteConfiguredModelAlgorithmAssociationCommandOutput,
} from "../commands/DeleteConfiguredModelAlgorithmAssociationCommand";
import {
  DeleteConfiguredModelAlgorithmCommandInput,
  DeleteConfiguredModelAlgorithmCommandOutput,
} from "../commands/DeleteConfiguredModelAlgorithmCommand";
import {
  DeleteMLConfigurationCommandInput,
  DeleteMLConfigurationCommandOutput,
} from "../commands/DeleteMLConfigurationCommand";
import {
  DeleteMLInputChannelDataCommandInput,
  DeleteMLInputChannelDataCommandOutput,
} from "../commands/DeleteMLInputChannelDataCommand";
import {
  DeleteTrainedModelOutputCommandInput,
  DeleteTrainedModelOutputCommandOutput,
} from "../commands/DeleteTrainedModelOutputCommand";
import {
  DeleteTrainingDatasetCommandInput,
  DeleteTrainingDatasetCommandOutput,
} from "../commands/DeleteTrainingDatasetCommand";
import {
  GetAudienceGenerationJobCommandInput,
  GetAudienceGenerationJobCommandOutput,
} from "../commands/GetAudienceGenerationJobCommand";
import { GetAudienceModelCommandInput, GetAudienceModelCommandOutput } from "../commands/GetAudienceModelCommand";
import {
  GetCollaborationConfiguredModelAlgorithmAssociationCommandInput,
  GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput,
} from "../commands/GetCollaborationConfiguredModelAlgorithmAssociationCommand";
import {
  GetCollaborationMLInputChannelCommandInput,
  GetCollaborationMLInputChannelCommandOutput,
} from "../commands/GetCollaborationMLInputChannelCommand";
import {
  GetCollaborationTrainedModelCommandInput,
  GetCollaborationTrainedModelCommandOutput,
} from "../commands/GetCollaborationTrainedModelCommand";
import {
  GetConfiguredAudienceModelCommandInput,
  GetConfiguredAudienceModelCommandOutput,
} from "../commands/GetConfiguredAudienceModelCommand";
import {
  GetConfiguredAudienceModelPolicyCommandInput,
  GetConfiguredAudienceModelPolicyCommandOutput,
} from "../commands/GetConfiguredAudienceModelPolicyCommand";
import {
  GetConfiguredModelAlgorithmAssociationCommandInput,
  GetConfiguredModelAlgorithmAssociationCommandOutput,
} from "../commands/GetConfiguredModelAlgorithmAssociationCommand";
import {
  GetConfiguredModelAlgorithmCommandInput,
  GetConfiguredModelAlgorithmCommandOutput,
} from "../commands/GetConfiguredModelAlgorithmCommand";
import { GetMLConfigurationCommandInput, GetMLConfigurationCommandOutput } from "../commands/GetMLConfigurationCommand";
import { GetMLInputChannelCommandInput, GetMLInputChannelCommandOutput } from "../commands/GetMLInputChannelCommand";
import { GetTrainedModelCommandInput, GetTrainedModelCommandOutput } from "../commands/GetTrainedModelCommand";
import {
  GetTrainedModelInferenceJobCommandInput,
  GetTrainedModelInferenceJobCommandOutput,
} from "../commands/GetTrainedModelInferenceJobCommand";
import { GetTrainingDatasetCommandInput, GetTrainingDatasetCommandOutput } from "../commands/GetTrainingDatasetCommand";
import {
  ListAudienceExportJobsCommandInput,
  ListAudienceExportJobsCommandOutput,
} from "../commands/ListAudienceExportJobsCommand";
import {
  ListAudienceGenerationJobsCommandInput,
  ListAudienceGenerationJobsCommandOutput,
} from "../commands/ListAudienceGenerationJobsCommand";
import { ListAudienceModelsCommandInput, ListAudienceModelsCommandOutput } from "../commands/ListAudienceModelsCommand";
import {
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput,
} from "../commands/ListCollaborationConfiguredModelAlgorithmAssociationsCommand";
import {
  ListCollaborationMLInputChannelsCommandInput,
  ListCollaborationMLInputChannelsCommandOutput,
} from "../commands/ListCollaborationMLInputChannelsCommand";
import {
  ListCollaborationTrainedModelExportJobsCommandInput,
  ListCollaborationTrainedModelExportJobsCommandOutput,
} from "../commands/ListCollaborationTrainedModelExportJobsCommand";
import {
  ListCollaborationTrainedModelInferenceJobsCommandInput,
  ListCollaborationTrainedModelInferenceJobsCommandOutput,
} from "../commands/ListCollaborationTrainedModelInferenceJobsCommand";
import {
  ListCollaborationTrainedModelsCommandInput,
  ListCollaborationTrainedModelsCommandOutput,
} from "../commands/ListCollaborationTrainedModelsCommand";
import {
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput,
} from "../commands/ListConfiguredAudienceModelsCommand";
import {
  ListConfiguredModelAlgorithmAssociationsCommandInput,
  ListConfiguredModelAlgorithmAssociationsCommandOutput,
} from "../commands/ListConfiguredModelAlgorithmAssociationsCommand";
import {
  ListConfiguredModelAlgorithmsCommandInput,
  ListConfiguredModelAlgorithmsCommandOutput,
} from "../commands/ListConfiguredModelAlgorithmsCommand";
import {
  ListMLInputChannelsCommandInput,
  ListMLInputChannelsCommandOutput,
} from "../commands/ListMLInputChannelsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTrainedModelInferenceJobsCommandInput,
  ListTrainedModelInferenceJobsCommandOutput,
} from "../commands/ListTrainedModelInferenceJobsCommand";
import { ListTrainedModelsCommandInput, ListTrainedModelsCommandOutput } from "../commands/ListTrainedModelsCommand";
import {
  ListTrainedModelVersionsCommandInput,
  ListTrainedModelVersionsCommandOutput,
} from "../commands/ListTrainedModelVersionsCommand";
import {
  ListTrainingDatasetsCommandInput,
  ListTrainingDatasetsCommandOutput,
} from "../commands/ListTrainingDatasetsCommand";
import {
  PutConfiguredAudienceModelPolicyCommandInput,
  PutConfiguredAudienceModelPolicyCommandOutput,
} from "../commands/PutConfiguredAudienceModelPolicyCommand";
import { PutMLConfigurationCommandInput, PutMLConfigurationCommandOutput } from "../commands/PutMLConfigurationCommand";
import {
  StartAudienceExportJobCommandInput,
  StartAudienceExportJobCommandOutput,
} from "../commands/StartAudienceExportJobCommand";
import {
  StartAudienceGenerationJobCommandInput,
  StartAudienceGenerationJobCommandOutput,
} from "../commands/StartAudienceGenerationJobCommand";
import {
  StartTrainedModelExportJobCommandInput,
  StartTrainedModelExportJobCommandOutput,
} from "../commands/StartTrainedModelExportJobCommand";
import {
  StartTrainedModelInferenceJobCommandInput,
  StartTrainedModelInferenceJobCommandOutput,
} from "../commands/StartTrainedModelInferenceJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConfiguredAudienceModelCommandInput,
  UpdateConfiguredAudienceModelCommandOutput,
} from "../commands/UpdateConfiguredAudienceModelCommand";
import { CleanRoomsMLServiceException as __BaseException } from "../models/CleanRoomsMLServiceException";
import {
  AccessBudget,
  AccessBudgetDetails,
  AccessDeniedException,
  AudienceDestination,
  AudienceExportJobSummary,
  AudienceGenerationJobDataSource,
  AudienceGenerationJobSummary,
  AudienceModelSummary,
  AudienceQualityMetrics,
  AudienceSize,
  AudienceSizeConfig,
  CollaborationConfiguredModelAlgorithmAssociationSummary,
  CollaborationMLInputChannelSummary,
  CollaborationTrainedModelExportJobSummary,
  CollaborationTrainedModelInferenceJobSummary,
  CollaborationTrainedModelSummary,
  ColumnSchema,
  ColumnType,
  ComputeConfiguration,
  ConfiguredAudienceModelOutputConfig,
  ConfiguredAudienceModelSummary,
  ConfiguredModelAlgorithmAssociationSummary,
  ConfiguredModelAlgorithmSummary,
  ConflictException,
  ContainerConfig,
  CustomEntityConfig,
  Dataset,
  DatasetInputConfig,
  DataSource,
  Destination,
  EntityType,
  GlueDataSource,
  IncrementalTrainingDataChannel,
  InferenceContainerConfig,
  InferenceContainerExecutionParameters,
  InferenceOutputConfiguration,
  InferenceReceiverMember,
  InferenceResourceConfig,
  InputChannel,
  InputChannelDataSource,
  InternalServiceException,
  LogRedactionConfiguration,
  LogsConfigurationPolicy,
  MetricDefinition,
  MetricsConfigurationPolicy,
  MLInputChannelSummary,
  MLOutputConfiguration,
  ModelInferenceDataSource,
  ModelTrainingDataChannel,
  PrivacyBudgets,
  PrivacyConfiguration,
  PrivacyConfigurationPolicies,
  ProtectedQueryInputParameters,
  ProtectedQuerySQLParameters,
  RelevanceMetric,
  ResourceConfig,
  ResourceNotFoundException,
  S3ConfigMap,
  ServiceQuotaExceededException,
  SharedAudienceMetrics,
  StoppingCondition,
  ThrottlingException,
  TrainedModelArtifactMaxSize,
  TrainedModelExportFileType,
  TrainedModelExportOutputConfiguration,
  TrainedModelExportReceiverMember,
  TrainedModelExportsConfigurationPolicy,
  TrainedModelExportsMaxSize,
  TrainedModelInferenceJobsConfigurationPolicy,
  TrainedModelInferenceJobSummary,
  TrainedModelInferenceMaxOutputSize,
  TrainedModelsConfigurationPolicy,
  TrainedModelSummary,
  TrainingDatasetSummary,
  ValidationException,
  WorkerComputeConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelTrainedModelCommand
 */
export const se_CancelTrainedModelCommand = async (
  input: CancelTrainedModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("trainedModelArn", () => input.trainedModelArn!, "{trainedModelArn}", false);
  const query: any = map({
    [_vI]: [, input[_vI]!],
  });
  let body: any;
  b.m("PATCH").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelTrainedModelInferenceJobCommand
 */
export const se_CancelTrainedModelInferenceJobCommand = async (
  input: CancelTrainedModelInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("trainedModelInferenceJobArn", () => input.trainedModelInferenceJobArn!, "{trainedModelInferenceJobArn}", false);
  let body: any;
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateAudienceModelCommand
 */
export const se_CreateAudienceModelCommand = async (
  input: CreateAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audience-model");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      kmsKeyArn: [],
      name: [],
      tags: (_) => _json(_),
      trainingDataEndTime: (_) => __serializeDateTime(_),
      trainingDataStartTime: (_) => __serializeDateTime(_),
      trainingDatasetArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredAudienceModelCommand
 */
export const se_CreateConfiguredAudienceModelCommand = async (
  input: CreateConfiguredAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configured-audience-model");
  let body: any;
  body = JSON.stringify(
    take(input, {
      audienceModelArn: [],
      audienceSizeConfig: (_) => _json(_),
      childResourceTagOnCreatePolicy: [],
      description: [],
      minMatchingSeedSize: [],
      name: [],
      outputConfig: (_) => _json(_),
      sharedAudienceMetrics: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredModelAlgorithmCommand
 */
export const se_CreateConfiguredModelAlgorithmCommand = async (
  input: CreateConfiguredModelAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configured-model-algorithms");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      inferenceContainerConfig: (_) => _json(_),
      kmsKeyArn: [],
      name: [],
      roleArn: [],
      tags: (_) => _json(_),
      trainingContainerConfig: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConfiguredModelAlgorithmAssociationCommand
 */
export const se_CreateConfiguredModelAlgorithmAssociationCommand = async (
  input: CreateConfiguredModelAlgorithmAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/configured-model-algorithm-associations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuredModelAlgorithmArn: [],
      description: [],
      name: [],
      privacyConfiguration: (_) => se_PrivacyConfiguration(_, context),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateMLInputChannelCommand
 */
export const se_CreateMLInputChannelCommand = async (
  input: CreateMLInputChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/ml-input-channels");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuredModelAlgorithmAssociations: (_) => _json(_),
      description: [],
      inputChannel: (_) => _json(_),
      kmsKeyArn: [],
      name: [],
      retentionInDays: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTrainedModelCommand
 */
export const se_CreateTrainedModelCommand = async (
  input: CreateTrainedModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/trained-models");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuredModelAlgorithmAssociationArn: [],
      dataChannels: (_) => _json(_),
      description: [],
      environment: (_) => _json(_),
      hyperparameters: (_) => _json(_),
      incrementalTrainingDataChannels: (_) => _json(_),
      kmsKeyArn: [],
      name: [],
      resourceConfig: (_) => _json(_),
      stoppingCondition: (_) => _json(_),
      tags: (_) => _json(_),
      trainingInputMode: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTrainingDatasetCommand
 */
export const se_CreateTrainingDatasetCommand = async (
  input: CreateTrainingDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/training-dataset");
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      roleArn: [],
      tags: (_) => _json(_),
      trainingData: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAudienceGenerationJobCommand
 */
export const se_DeleteAudienceGenerationJobCommand = async (
  input: DeleteAudienceGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-generation-job/{audienceGenerationJobArn}");
  b.p("audienceGenerationJobArn", () => input.audienceGenerationJobArn!, "{audienceGenerationJobArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAudienceModelCommand
 */
export const se_DeleteAudienceModelCommand = async (
  input: DeleteAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-model/{audienceModelArn}");
  b.p("audienceModelArn", () => input.audienceModelArn!, "{audienceModelArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredAudienceModelCommand
 */
export const se_DeleteConfiguredAudienceModelCommand = async (
  input: DeleteConfiguredAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model/{configuredAudienceModelArn}");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredAudienceModelPolicyCommand
 */
export const se_DeleteConfiguredAudienceModelPolicyCommand = async (
  input: DeleteConfiguredAudienceModelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model/{configuredAudienceModelArn}/policy");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredModelAlgorithmCommand
 */
export const se_DeleteConfiguredModelAlgorithmCommand = async (
  input: DeleteConfiguredModelAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-model-algorithms/{configuredModelAlgorithmArn}");
  b.p("configuredModelAlgorithmArn", () => input.configuredModelAlgorithmArn!, "{configuredModelAlgorithmArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConfiguredModelAlgorithmAssociationCommand
 */
export const se_DeleteConfiguredModelAlgorithmAssociationCommand = async (
  input: DeleteConfiguredModelAlgorithmAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}"
  );
  b.p(
    "configuredModelAlgorithmAssociationArn",
    () => input.configuredModelAlgorithmAssociationArn!,
    "{configuredModelAlgorithmAssociationArn}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMLConfigurationCommand
 */
export const se_DeleteMLConfigurationCommand = async (
  input: DeleteMLConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/ml-configurations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteMLInputChannelDataCommand
 */
export const se_DeleteMLInputChannelDataCommand = async (
  input: DeleteMLInputChannelDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}");
  b.p("mlInputChannelArn", () => input.mlInputChannelArn!, "{mlInputChannelArn}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTrainedModelOutputCommand
 */
export const se_DeleteTrainedModelOutputCommand = async (
  input: DeleteTrainedModelOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}");
  b.p("trainedModelArn", () => input.trainedModelArn!, "{trainedModelArn}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_vI]: [, input[_vI]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteTrainingDatasetCommand
 */
export const se_DeleteTrainingDatasetCommand = async (
  input: DeleteTrainingDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/training-dataset/{trainingDatasetArn}");
  b.p("trainingDatasetArn", () => input.trainingDatasetArn!, "{trainingDatasetArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAudienceGenerationJobCommand
 */
export const se_GetAudienceGenerationJobCommand = async (
  input: GetAudienceGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-generation-job/{audienceGenerationJobArn}");
  b.p("audienceGenerationJobArn", () => input.audienceGenerationJobArn!, "{audienceGenerationJobArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetAudienceModelCommand
 */
export const se_GetAudienceModelCommand = async (
  input: GetAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-model/{audienceModelArn}");
  b.p("audienceModelArn", () => input.audienceModelArn!, "{audienceModelArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCollaborationConfiguredModelAlgorithmAssociationCommand
 */
export const se_GetCollaborationConfiguredModelAlgorithmAssociationCommand = async (
  input: GetCollaborationConfiguredModelAlgorithmAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/collaborations/{collaborationIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}"
  );
  b.p(
    "configuredModelAlgorithmAssociationArn",
    () => input.configuredModelAlgorithmAssociationArn!,
    "{configuredModelAlgorithmAssociationArn}",
    false
  );
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCollaborationMLInputChannelCommand
 */
export const se_GetCollaborationMLInputChannelCommand = async (
  input: GetCollaborationMLInputChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/ml-input-channels/{mlInputChannelArn}");
  b.p("mlInputChannelArn", () => input.mlInputChannelArn!, "{mlInputChannelArn}", false);
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCollaborationTrainedModelCommand
 */
export const se_GetCollaborationTrainedModelCommand = async (
  input: GetCollaborationTrainedModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}");
  b.p("trainedModelArn", () => input.trainedModelArn!, "{trainedModelArn}", false);
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_vI]: [, input[_vI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredAudienceModelCommand
 */
export const se_GetConfiguredAudienceModelCommand = async (
  input: GetConfiguredAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model/{configuredAudienceModelArn}");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredAudienceModelPolicyCommand
 */
export const se_GetConfiguredAudienceModelPolicyCommand = async (
  input: GetConfiguredAudienceModelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model/{configuredAudienceModelArn}/policy");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredModelAlgorithmCommand
 */
export const se_GetConfiguredModelAlgorithmCommand = async (
  input: GetConfiguredModelAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-model-algorithms/{configuredModelAlgorithmArn}");
  b.p("configuredModelAlgorithmArn", () => input.configuredModelAlgorithmArn!, "{configuredModelAlgorithmArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConfiguredModelAlgorithmAssociationCommand
 */
export const se_GetConfiguredModelAlgorithmAssociationCommand = async (
  input: GetConfiguredModelAlgorithmAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/memberships/{membershipIdentifier}/configured-model-algorithm-associations/{configuredModelAlgorithmAssociationArn}"
  );
  b.p(
    "configuredModelAlgorithmAssociationArn",
    () => input.configuredModelAlgorithmAssociationArn!,
    "{configuredModelAlgorithmAssociationArn}",
    false
  );
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMLConfigurationCommand
 */
export const se_GetMLConfigurationCommand = async (
  input: GetMLConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/ml-configurations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetMLInputChannelCommand
 */
export const se_GetMLInputChannelCommand = async (
  input: GetMLInputChannelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}");
  b.p("mlInputChannelArn", () => input.mlInputChannelArn!, "{mlInputChannelArn}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTrainedModelCommand
 */
export const se_GetTrainedModelCommand = async (
  input: GetTrainedModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}");
  b.p("trainedModelArn", () => input.trainedModelArn!, "{trainedModelArn}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_vI]: [, input[_vI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTrainedModelInferenceJobCommand
 */
export const se_GetTrainedModelInferenceJobCommand = async (
  input: GetTrainedModelInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("trainedModelInferenceJobArn", () => input.trainedModelInferenceJobArn!, "{trainedModelInferenceJobArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTrainingDatasetCommand
 */
export const se_GetTrainingDatasetCommand = async (
  input: GetTrainingDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/training-dataset/{trainingDatasetArn}");
  b.p("trainingDatasetArn", () => input.trainingDatasetArn!, "{trainingDatasetArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAudienceExportJobsCommand
 */
export const se_ListAudienceExportJobsCommand = async (
  input: ListAudienceExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-export-job");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_aGJA]: [, input[_aGJA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAudienceGenerationJobsCommand
 */
export const se_ListAudienceGenerationJobsCommand = async (
  input: ListAudienceGenerationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-generation-job");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_cAMA]: [, input[_cAMA]!],
    [_cI]: [, input[_cI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAudienceModelsCommand
 */
export const se_ListAudienceModelsCommand = async (
  input: ListAudienceModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audience-model");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationConfiguredModelAlgorithmAssociationsCommand
 */
export const se_ListCollaborationConfiguredModelAlgorithmAssociationsCommand = async (
  input: ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/configured-model-algorithm-associations");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationMLInputChannelsCommand
 */
export const se_ListCollaborationMLInputChannelsCommand = async (
  input: ListCollaborationMLInputChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/ml-input-channels");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationTrainedModelExportJobsCommand
 */
export const se_ListCollaborationTrainedModelExportJobsCommand = async (
  input: ListCollaborationTrainedModelExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/trained-models/{trainedModelArn}/export-jobs");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  b.p("trainedModelArn", () => input.trainedModelArn!, "{trainedModelArn}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_tMVI]: [, input[_tMVI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationTrainedModelInferenceJobsCommand
 */
export const se_ListCollaborationTrainedModelInferenceJobsCommand = async (
  input: ListCollaborationTrainedModelInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/trained-model-inference-jobs");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_tMA]: [, input[_tMA]!],
    [_tMVI]: [, input[_tMVI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCollaborationTrainedModelsCommand
 */
export const se_ListCollaborationTrainedModelsCommand = async (
  input: ListCollaborationTrainedModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/collaborations/{collaborationIdentifier}/trained-models");
  b.p("collaborationIdentifier", () => input.collaborationIdentifier!, "{collaborationIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfiguredAudienceModelsCommand
 */
export const se_ListConfiguredAudienceModelsCommand = async (
  input: ListConfiguredAudienceModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-audience-model");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfiguredModelAlgorithmAssociationsCommand
 */
export const se_ListConfiguredModelAlgorithmAssociationsCommand = async (
  input: ListConfiguredModelAlgorithmAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/configured-model-algorithm-associations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConfiguredModelAlgorithmsCommand
 */
export const se_ListConfiguredModelAlgorithmsCommand = async (
  input: ListConfiguredModelAlgorithmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/configured-model-algorithms");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListMLInputChannelsCommand
 */
export const se_ListMLInputChannelsCommand = async (
  input: ListMLInputChannelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/ml-input-channels");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
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
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrainedModelInferenceJobsCommand
 */
export const se_ListTrainedModelInferenceJobsCommand = async (
  input: ListTrainedModelInferenceJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/trained-model-inference-jobs");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_tMA]: [, input[_tMA]!],
    [_tMVI]: [, input[_tMVI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrainedModelsCommand
 */
export const se_ListTrainedModelsCommand = async (
  input: ListTrainedModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/trained-models");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrainedModelVersionsCommand
 */
export const se_ListTrainedModelVersionsCommand = async (
  input: ListTrainedModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/versions");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  b.p("trainedModelArn", () => input.trainedModelArn!, "{trainedModelArn}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
    [_s]: [, input[_s]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTrainingDatasetsCommand
 */
export const se_ListTrainingDatasetsCommand = async (
  input: ListTrainingDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/training-dataset");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutConfiguredAudienceModelPolicyCommand
 */
export const se_PutConfiguredAudienceModelPolicyCommand = async (
  input: PutConfiguredAudienceModelPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configured-audience-model/{configuredAudienceModelArn}/policy");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuredAudienceModelPolicy: [],
      policyExistenceCondition: [],
      previousPolicyHash: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutMLConfigurationCommand
 */
export const se_PutMLConfigurationCommand = async (
  input: PutMLConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/ml-configurations");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      defaultOutputLocation: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAudienceExportJobCommand
 */
export const se_StartAudienceExportJobCommand = async (
  input: StartAudienceExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audience-export-job");
  let body: any;
  body = JSON.stringify(
    take(input, {
      audienceGenerationJobArn: [],
      audienceSize: (_) => _json(_),
      description: [],
      name: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartAudienceGenerationJobCommand
 */
export const se_StartAudienceGenerationJobCommand = async (
  input: StartAudienceGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audience-generation-job");
  let body: any;
  body = JSON.stringify(
    take(input, {
      collaborationId: [],
      configuredAudienceModelArn: [],
      description: [],
      includeSeedInOutput: [],
      name: [],
      seedAudience: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTrainedModelExportJobCommand
 */
export const se_StartTrainedModelExportJobCommand = async (
  input: StartTrainedModelExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/export-jobs");
  b.p("trainedModelArn", () => input.trainedModelArn!, "{trainedModelArn}", false);
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      outputConfiguration: (_) => _json(_),
      trainedModelVersionIdentifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartTrainedModelInferenceJobCommand
 */
export const se_StartTrainedModelInferenceJobCommand = async (
  input: StartTrainedModelInferenceJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/memberships/{membershipIdentifier}/trained-model-inference-jobs");
  b.p("membershipIdentifier", () => input.membershipIdentifier!, "{membershipIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      configuredModelAlgorithmAssociationArn: [],
      containerExecutionParameters: (_) => _json(_),
      dataSource: (_) => _json(_),
      description: [],
      environment: (_) => _json(_),
      kmsKeyArn: [],
      name: [],
      outputConfiguration: (_) => _json(_),
      resourceConfig: (_) => _json(_),
      tags: (_) => _json(_),
      trainedModelArn: [],
      trainedModelVersionIdentifier: [],
    })
  );
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
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
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConfiguredAudienceModelCommand
 */
export const se_UpdateConfiguredAudienceModelCommand = async (
  input: UpdateConfiguredAudienceModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/configured-audience-model/{configuredAudienceModelArn}");
  b.p("configuredAudienceModelArn", () => input.configuredAudienceModelArn!, "{configuredAudienceModelArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      audienceModelArn: [],
      audienceSizeConfig: (_) => _json(_),
      description: [],
      minMatchingSeedSize: [],
      outputConfig: (_) => _json(_),
      sharedAudienceMetrics: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelTrainedModelCommand
 */
export const de_CancelTrainedModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTrainedModelCommandOutput> => {
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
 * deserializeAws_restJson1CancelTrainedModelInferenceJobCommand
 */
export const de_CancelTrainedModelInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTrainedModelInferenceJobCommandOutput> => {
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
 * deserializeAws_restJson1CreateAudienceModelCommand
 */
export const de_CreateAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceModelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredAudienceModelCommand
 */
export const de_CreateConfiguredAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredModelAlgorithmCommand
 */
export const de_CreateConfiguredModelAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredModelAlgorithmCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredModelAlgorithmArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfiguredModelAlgorithmAssociationCommand
 */
export const de_CreateConfiguredModelAlgorithmAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfiguredModelAlgorithmAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredModelAlgorithmAssociationArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateMLInputChannelCommand
 */
export const de_CreateMLInputChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMLInputChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    mlInputChannelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrainedModelCommand
 */
export const de_CreateTrainedModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrainedModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trainedModelArn: __expectString,
    versionIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTrainingDatasetCommand
 */
export const de_CreateTrainingDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrainingDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trainingDatasetArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAudienceGenerationJobCommand
 */
export const de_DeleteAudienceGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAudienceGenerationJobCommandOutput> => {
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
 * deserializeAws_restJson1DeleteAudienceModelCommand
 */
export const de_DeleteAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAudienceModelCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConfiguredAudienceModelCommand
 */
export const de_DeleteConfiguredAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredAudienceModelCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConfiguredAudienceModelPolicyCommand
 */
export const de_DeleteConfiguredAudienceModelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredAudienceModelPolicyCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConfiguredModelAlgorithmCommand
 */
export const de_DeleteConfiguredModelAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredModelAlgorithmCommandOutput> => {
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
 * deserializeAws_restJson1DeleteConfiguredModelAlgorithmAssociationCommand
 */
export const de_DeleteConfiguredModelAlgorithmAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfiguredModelAlgorithmAssociationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMLConfigurationCommand
 */
export const de_DeleteMLConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1DeleteMLInputChannelDataCommand
 */
export const de_DeleteMLInputChannelDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMLInputChannelDataCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTrainedModelOutputCommand
 */
export const de_DeleteTrainedModelOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrainedModelOutputCommandOutput> => {
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
 * deserializeAws_restJson1DeleteTrainingDatasetCommand
 */
export const de_DeleteTrainingDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrainingDatasetCommandOutput> => {
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
 * deserializeAws_restJson1GetAudienceGenerationJobCommand
 */
export const de_GetAudienceGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAudienceGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceGenerationJobArn: __expectString,
    collaborationId: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    includeSeedInOutput: __expectBoolean,
    metrics: (_) => de_AudienceQualityMetrics(_, context),
    name: __expectString,
    protectedQueryIdentifier: __expectString,
    seedAudience: _json,
    startedBy: __expectString,
    status: __expectString,
    statusDetails: _json,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAudienceModelCommand
 */
export const de_GetAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceModelArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    kmsKeyArn: __expectString,
    name: __expectString,
    status: __expectString,
    statusDetails: _json,
    tags: _json,
    trainingDataEndTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    trainingDataStartTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    trainingDatasetArn: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationConfiguredModelAlgorithmAssociationCommand
 */
export const de_GetCollaborationConfiguredModelAlgorithmAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmArn: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creatorAccountId: __expectString,
    description: __expectString,
    membershipIdentifier: __expectString,
    name: __expectString,
    privacyConfiguration: (_) => de_PrivacyConfiguration(_, context),
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationMLInputChannelCommand
 */
export const de_GetCollaborationMLInputChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationMLInputChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociations: _json,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creatorAccountId: __expectString,
    description: __expectString,
    membershipIdentifier: __expectString,
    mlInputChannelArn: __expectString,
    name: __expectString,
    numberOfRecords: __expectLong,
    privacyBudgets: (_) => de_PrivacyBudgets(__expectUnion(_), context),
    retentionInDays: __expectInt32,
    status: __expectString,
    statusDetails: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCollaborationTrainedModelCommand
 */
export const de_GetCollaborationTrainedModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCollaborationTrainedModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creatorAccountId: __expectString,
    description: __expectString,
    incrementalTrainingDataChannels: _json,
    logsStatus: __expectString,
    logsStatusDetails: __expectString,
    membershipIdentifier: __expectString,
    metricsStatus: __expectString,
    metricsStatusDetails: __expectString,
    name: __expectString,
    resourceConfig: _json,
    status: __expectString,
    statusDetails: _json,
    stoppingCondition: _json,
    trainedModelArn: __expectString,
    trainingContainerImageDigest: __expectString,
    trainingInputMode: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredAudienceModelCommand
 */
export const de_GetConfiguredAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceModelArn: __expectString,
    audienceSizeConfig: _json,
    childResourceTagOnCreatePolicy: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    minMatchingSeedSize: __expectInt32,
    name: __expectString,
    outputConfig: _json,
    sharedAudienceMetrics: _json,
    status: __expectString,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredAudienceModelPolicyCommand
 */
export const de_GetConfiguredAudienceModelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredAudienceModelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelArn: __expectString,
    configuredAudienceModelPolicy: __expectString,
    policyHash: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredModelAlgorithmCommand
 */
export const de_GetConfiguredModelAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredModelAlgorithmCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredModelAlgorithmArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    inferenceContainerConfig: _json,
    kmsKeyArn: __expectString,
    name: __expectString,
    roleArn: __expectString,
    tags: _json,
    trainingContainerConfig: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConfiguredModelAlgorithmAssociationCommand
 */
export const de_GetConfiguredModelAlgorithmAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConfiguredModelAlgorithmAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmArn: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    membershipIdentifier: __expectString,
    name: __expectString,
    privacyConfiguration: (_) => de_PrivacyConfiguration(_, context),
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMLConfigurationCommand
 */
export const de_GetMLConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    defaultOutputLocation: _json,
    membershipIdentifier: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetMLInputChannelCommand
 */
export const de_GetMLInputChannelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMLInputChannelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociations: _json,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    inputChannel: _json,
    kmsKeyArn: __expectString,
    membershipIdentifier: __expectString,
    mlInputChannelArn: __expectString,
    name: __expectString,
    numberOfFiles: __limitedParseDouble,
    numberOfRecords: __expectLong,
    privacyBudgets: (_) => de_PrivacyBudgets(__expectUnion(_), context),
    protectedQueryIdentifier: __expectString,
    retentionInDays: __expectInt32,
    sizeInGb: __limitedParseDouble,
    status: __expectString,
    statusDetails: _json,
    tags: _json,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTrainedModelCommand
 */
export const de_GetTrainedModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrainedModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataChannels: _json,
    description: __expectString,
    environment: _json,
    hyperparameters: _json,
    incrementalTrainingDataChannels: _json,
    kmsKeyArn: __expectString,
    logsStatus: __expectString,
    logsStatusDetails: __expectString,
    membershipIdentifier: __expectString,
    metricsStatus: __expectString,
    metricsStatusDetails: __expectString,
    name: __expectString,
    resourceConfig: _json,
    status: __expectString,
    statusDetails: _json,
    stoppingCondition: _json,
    tags: _json,
    trainedModelArn: __expectString,
    trainingContainerImageDigest: __expectString,
    trainingInputMode: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionIdentifier: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTrainedModelInferenceJobCommand
 */
export const de_GetTrainedModelInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrainedModelInferenceJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredModelAlgorithmAssociationArn: __expectString,
    containerExecutionParameters: _json,
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    dataSource: _json,
    description: __expectString,
    environment: _json,
    inferenceContainerImageDigest: __expectString,
    kmsKeyArn: __expectString,
    logsStatus: __expectString,
    logsStatusDetails: __expectString,
    membershipIdentifier: __expectString,
    metricsStatus: __expectString,
    metricsStatusDetails: __expectString,
    name: __expectString,
    outputConfiguration: _json,
    resourceConfig: _json,
    status: __expectString,
    statusDetails: _json,
    tags: _json,
    trainedModelArn: __expectString,
    trainedModelInferenceJobArn: __expectString,
    trainedModelVersionIdentifier: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTrainingDatasetCommand
 */
export const de_GetTrainingDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTrainingDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    createTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    roleArn: __expectString,
    status: __expectString,
    tags: _json,
    trainingData: _json,
    trainingDatasetArn: __expectString,
    updateTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAudienceExportJobsCommand
 */
export const de_ListAudienceExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAudienceExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceExportJobs: (_) => de_AudienceExportJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAudienceGenerationJobsCommand
 */
export const de_ListAudienceGenerationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAudienceGenerationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceGenerationJobs: (_) => de_AudienceGenerationJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAudienceModelsCommand
 */
export const de_ListAudienceModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAudienceModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceModels: (_) => de_AudienceModelList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationConfiguredModelAlgorithmAssociationsCommand
 */
export const de_ListCollaborationConfiguredModelAlgorithmAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationConfiguredModelAlgorithmAssociations: (_) =>
      de_CollaborationConfiguredModelAlgorithmAssociationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationMLInputChannelsCommand
 */
export const de_ListCollaborationMLInputChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationMLInputChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationMLInputChannelsList: (_) => de_CollaborationMLInputChannelsList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationTrainedModelExportJobsCommand
 */
export const de_ListCollaborationTrainedModelExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationTrainedModelExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationTrainedModelExportJobs: (_) => de_CollaborationTrainedModelExportJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationTrainedModelInferenceJobsCommand
 */
export const de_ListCollaborationTrainedModelInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationTrainedModelInferenceJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationTrainedModelInferenceJobs: (_) => de_CollaborationTrainedModelInferenceJobList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCollaborationTrainedModelsCommand
 */
export const de_ListCollaborationTrainedModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCollaborationTrainedModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    collaborationTrainedModels: (_) => de_CollaborationTrainedModelList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredAudienceModelsCommand
 */
export const de_ListConfiguredAudienceModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredAudienceModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModels: (_) => de_ConfiguredAudienceModelList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredModelAlgorithmAssociationsCommand
 */
export const de_ListConfiguredModelAlgorithmAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredModelAlgorithmAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredModelAlgorithmAssociations: (_) => de_ConfiguredModelAlgorithmAssociationList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConfiguredModelAlgorithmsCommand
 */
export const de_ListConfiguredModelAlgorithmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfiguredModelAlgorithmsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredModelAlgorithms: (_) => de_ConfiguredModelAlgorithmList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMLInputChannelsCommand
 */
export const de_ListMLInputChannelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMLInputChannelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    mlInputChannelsList: (_) => de_MLInputChannelsList(_, context),
    nextToken: __expectString,
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
 * deserializeAws_restJson1ListTrainedModelInferenceJobsCommand
 */
export const de_ListTrainedModelInferenceJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainedModelInferenceJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    trainedModelInferenceJobs: (_) => de_TrainedModelInferenceJobList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrainedModelsCommand
 */
export const de_ListTrainedModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainedModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    trainedModels: (_) => de_TrainedModelList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrainedModelVersionsCommand
 */
export const de_ListTrainedModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainedModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    trainedModels: (_) => de_TrainedModelList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTrainingDatasetsCommand
 */
export const de_ListTrainingDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainingDatasetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    trainingDatasets: (_) => de_TrainingDatasetList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutConfiguredAudienceModelPolicyCommand
 */
export const de_PutConfiguredAudienceModelPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutConfiguredAudienceModelPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelPolicy: __expectString,
    policyHash: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutMLConfigurationCommand
 */
export const de_PutMLConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMLConfigurationCommandOutput> => {
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
 * deserializeAws_restJson1StartAudienceExportJobCommand
 */
export const de_StartAudienceExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAudienceExportJobCommandOutput> => {
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
 * deserializeAws_restJson1StartAudienceGenerationJobCommand
 */
export const de_StartAudienceGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAudienceGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    audienceGenerationJobArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTrainedModelExportJobCommand
 */
export const de_StartTrainedModelExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTrainedModelExportJobCommandOutput> => {
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
 * deserializeAws_restJson1StartTrainedModelInferenceJobCommand
 */
export const de_StartTrainedModelInferenceJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTrainedModelInferenceJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    trainedModelInferenceJobArn: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1UpdateConfiguredAudienceModelCommand
 */
export const de_UpdateConfiguredAudienceModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfiguredAudienceModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    configuredAudienceModelArn: __expectString,
  });
  Object.assign(contents, doc);
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
    case "com.amazonaws.cleanroomsml#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cleanroomsml#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cleanroomsml#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.cleanroomsml#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.cleanroomsml#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.cleanroomsml#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.cleanroomsml#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServiceException({
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
    quotaName: __expectString,
    quotaValue: __limitedParseDouble,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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

// se_AccountIdList omitted.

// se_AudienceDestination omitted.

// se_AudienceGenerationJobDataSource omitted.

// se_AudienceSize omitted.

// se_AudienceSizeBins omitted.

// se_AudienceSizeConfig omitted.

// se_ColumnSchema omitted.

// se_ColumnTypeList omitted.

// se_ComputeConfiguration omitted.

// se_ConfiguredAudienceModelOutputConfig omitted.

// se_ConfiguredModelAlgorithmAssociationArnList omitted.

// se_ContainerArguments omitted.

// se_ContainerConfig omitted.

// se_ContainerEntrypoint omitted.

// se_CustomDataIdentifierList omitted.

// se_CustomEntityConfig omitted.

// se_Dataset omitted.

// se_DatasetInputConfig omitted.

// se_DatasetList omitted.

// se_DatasetSchemaList omitted.

// se_DataSource omitted.

// se_Destination omitted.

// se_EntityTypeList omitted.

// se_Environment omitted.

// se_GlueDataSource omitted.

// se_HyperParameters omitted.

// se_IncrementalTrainingDataChannel omitted.

// se_IncrementalTrainingDataChannels omitted.

// se_InferenceContainerConfig omitted.

// se_InferenceContainerExecutionParameters omitted.

// se_InferenceEnvironmentMap omitted.

// se_InferenceOutputConfiguration omitted.

// se_InferenceReceiverMember omitted.

// se_InferenceReceiverMembers omitted.

// se_InferenceResourceConfig omitted.

// se_InputChannel omitted.

// se_InputChannelDataSource omitted.

// se_LogRedactionConfiguration omitted.

// se_LogsConfigurationPolicy omitted.

// se_LogsConfigurationPolicyList omitted.

// se_MetricDefinition omitted.

// se_MetricDefinitionList omitted.

// se_MetricsConfigurationPolicy omitted.

// se_MetricsList omitted.

// se_MLOutputConfiguration omitted.

// se_ModelInferenceDataSource omitted.

// se_ModelTrainingDataChannel omitted.

// se_ModelTrainingDataChannels omitted.

// se_ParameterMap omitted.

/**
 * serializeAws_restJson1PrivacyConfiguration
 */
const se_PrivacyConfiguration = (input: PrivacyConfiguration, context: __SerdeContext): any => {
  return take(input, {
    policies: (_) => se_PrivacyConfigurationPolicies(_, context),
  });
};

/**
 * serializeAws_restJson1PrivacyConfigurationPolicies
 */
const se_PrivacyConfigurationPolicies = (input: PrivacyConfigurationPolicies, context: __SerdeContext): any => {
  return take(input, {
    trainedModelExports: (_) => se_TrainedModelExportsConfigurationPolicy(_, context),
    trainedModelInferenceJobs: (_) => se_TrainedModelInferenceJobsConfigurationPolicy(_, context),
    trainedModels: (_) => se_TrainedModelsConfigurationPolicy(_, context),
  });
};

// se_ProtectedQueryInputParameters omitted.

// se_ProtectedQuerySQLParameters omitted.

// se_ResourceConfig omitted.

// se_S3ConfigMap omitted.

// se_StoppingCondition omitted.

// se_TagMap omitted.

/**
 * serializeAws_restJson1TrainedModelArtifactMaxSize
 */
const se_TrainedModelArtifactMaxSize = (input: TrainedModelArtifactMaxSize, context: __SerdeContext): any => {
  return take(input, {
    unit: [],
    value: __serializeFloat,
  });
};

// se_TrainedModelExportFileTypeList omitted.

// se_TrainedModelExportOutputConfiguration omitted.

// se_TrainedModelExportReceiverMember omitted.

// se_TrainedModelExportReceiverMembers omitted.

/**
 * serializeAws_restJson1TrainedModelExportsConfigurationPolicy
 */
const se_TrainedModelExportsConfigurationPolicy = (
  input: TrainedModelExportsConfigurationPolicy,
  context: __SerdeContext
): any => {
  return take(input, {
    filesToExport: _json,
    maxSize: (_) => se_TrainedModelExportsMaxSize(_, context),
  });
};

/**
 * serializeAws_restJson1TrainedModelExportsMaxSize
 */
const se_TrainedModelExportsMaxSize = (input: TrainedModelExportsMaxSize, context: __SerdeContext): any => {
  return take(input, {
    unit: [],
    value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1TrainedModelInferenceJobsConfigurationPolicy
 */
const se_TrainedModelInferenceJobsConfigurationPolicy = (
  input: TrainedModelInferenceJobsConfigurationPolicy,
  context: __SerdeContext
): any => {
  return take(input, {
    containerLogs: _json,
    maxOutputSize: (_) => se_TrainedModelInferenceMaxOutputSize(_, context),
  });
};

/**
 * serializeAws_restJson1TrainedModelInferenceMaxOutputSize
 */
const se_TrainedModelInferenceMaxOutputSize = (
  input: TrainedModelInferenceMaxOutputSize,
  context: __SerdeContext
): any => {
  return take(input, {
    unit: [],
    value: __serializeFloat,
  });
};

/**
 * serializeAws_restJson1TrainedModelsConfigurationPolicy
 */
const se_TrainedModelsConfigurationPolicy = (input: TrainedModelsConfigurationPolicy, context: __SerdeContext): any => {
  return take(input, {
    containerLogs: _json,
    containerMetrics: _json,
    maxArtifactSize: (_) => se_TrainedModelArtifactMaxSize(_, context),
  });
};

// se_WorkerComputeConfiguration omitted.

/**
 * deserializeAws_restJson1AccessBudget
 */
const de_AccessBudget = (output: any, context: __SerdeContext): AccessBudget => {
  return take(output, {
    aggregateRemainingBudget: __expectInt32,
    details: (_: any) => de_AccessBudgetDetailsList(_, context),
    resourceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1AccessBudgetDetails
 */
const de_AccessBudgetDetails = (output: any, context: __SerdeContext): AccessBudgetDetails => {
  return take(output, {
    autoRefresh: __expectString,
    budget: __expectInt32,
    budgetType: __expectString,
    endTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    remainingBudget: __expectInt32,
    startTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AccessBudgetDetailsList
 */
const de_AccessBudgetDetailsList = (output: any, context: __SerdeContext): AccessBudgetDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessBudgetDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AccessBudgets
 */
const de_AccessBudgets = (output: any, context: __SerdeContext): AccessBudget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AccessBudget(entry, context);
    });
  return retVal;
};

// de_AccountIdList omitted.

// de_AudienceDestination omitted.

/**
 * deserializeAws_restJson1AudienceExportJobList
 */
const de_AudienceExportJobList = (output: any, context: __SerdeContext): AudienceExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AudienceExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudienceExportJobSummary
 */
const de_AudienceExportJobSummary = (output: any, context: __SerdeContext): AudienceExportJobSummary => {
  return take(output, {
    audienceGenerationJobArn: __expectString,
    audienceSize: _json,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    outputLocation: __expectString,
    status: __expectString,
    statusDetails: _json,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_AudienceGenerationJobDataSource omitted.

/**
 * deserializeAws_restJson1AudienceGenerationJobList
 */
const de_AudienceGenerationJobList = (output: any, context: __SerdeContext): AudienceGenerationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AudienceGenerationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudienceGenerationJobSummary
 */
const de_AudienceGenerationJobSummary = (output: any, context: __SerdeContext): AudienceGenerationJobSummary => {
  return take(output, {
    audienceGenerationJobArn: __expectString,
    collaborationId: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    startedBy: __expectString,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AudienceModelList
 */
const de_AudienceModelList = (output: any, context: __SerdeContext): AudienceModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AudienceModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudienceModelSummary
 */
const de_AudienceModelSummary = (output: any, context: __SerdeContext): AudienceModelSummary => {
  return take(output, {
    audienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    status: __expectString,
    trainingDatasetArn: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1AudienceQualityMetrics
 */
const de_AudienceQualityMetrics = (output: any, context: __SerdeContext): AudienceQualityMetrics => {
  return take(output, {
    recallMetric: __limitedParseDouble,
    relevanceMetrics: (_: any) => de_RelevanceMetrics(_, context),
  }) as any;
};

// de_AudienceSize omitted.

// de_AudienceSizeBins omitted.

// de_AudienceSizeConfig omitted.

/**
 * deserializeAws_restJson1CollaborationConfiguredModelAlgorithmAssociationList
 */
const de_CollaborationConfiguredModelAlgorithmAssociationList = (
  output: any,
  context: __SerdeContext
): CollaborationConfiguredModelAlgorithmAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationConfiguredModelAlgorithmAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationConfiguredModelAlgorithmAssociationSummary
 */
const de_CollaborationConfiguredModelAlgorithmAssociationSummary = (
  output: any,
  context: __SerdeContext
): CollaborationConfiguredModelAlgorithmAssociationSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmArn: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creatorAccountId: __expectString,
    description: __expectString,
    membershipIdentifier: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationMLInputChannelsList
 */
const de_CollaborationMLInputChannelsList = (
  output: any,
  context: __SerdeContext
): CollaborationMLInputChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationMLInputChannelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationMLInputChannelSummary
 */
const de_CollaborationMLInputChannelSummary = (
  output: any,
  context: __SerdeContext
): CollaborationMLInputChannelSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociations: _json,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creatorAccountId: __expectString,
    description: __expectString,
    membershipIdentifier: __expectString,
    mlInputChannelArn: __expectString,
    name: __expectString,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationTrainedModelExportJobList
 */
const de_CollaborationTrainedModelExportJobList = (
  output: any,
  context: __SerdeContext
): CollaborationTrainedModelExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationTrainedModelExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationTrainedModelExportJobSummary
 */
const de_CollaborationTrainedModelExportJobSummary = (
  output: any,
  context: __SerdeContext
): CollaborationTrainedModelExportJobSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creatorAccountId: __expectString,
    description: __expectString,
    membershipIdentifier: __expectString,
    name: __expectString,
    outputConfiguration: _json,
    status: __expectString,
    statusDetails: _json,
    trainedModelArn: __expectString,
    trainedModelVersionIdentifier: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationTrainedModelInferenceJobList
 */
const de_CollaborationTrainedModelInferenceJobList = (
  output: any,
  context: __SerdeContext
): CollaborationTrainedModelInferenceJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationTrainedModelInferenceJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationTrainedModelInferenceJobSummary
 */
const de_CollaborationTrainedModelInferenceJobSummary = (
  output: any,
  context: __SerdeContext
): CollaborationTrainedModelInferenceJobSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creatorAccountId: __expectString,
    description: __expectString,
    logsStatus: __expectString,
    logsStatusDetails: __expectString,
    membershipIdentifier: __expectString,
    metricsStatus: __expectString,
    metricsStatusDetails: __expectString,
    name: __expectString,
    outputConfiguration: _json,
    status: __expectString,
    trainedModelArn: __expectString,
    trainedModelInferenceJobArn: __expectString,
    trainedModelVersionIdentifier: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1CollaborationTrainedModelList
 */
const de_CollaborationTrainedModelList = (output: any, context: __SerdeContext): CollaborationTrainedModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CollaborationTrainedModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CollaborationTrainedModelSummary
 */
const de_CollaborationTrainedModelSummary = (
  output: any,
  context: __SerdeContext
): CollaborationTrainedModelSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    creatorAccountId: __expectString,
    description: __expectString,
    incrementalTrainingDataChannels: _json,
    membershipIdentifier: __expectString,
    name: __expectString,
    status: __expectString,
    trainedModelArn: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionIdentifier: __expectString,
  }) as any;
};

// de_ColumnSchema omitted.

// de_ColumnTypeList omitted.

// de_ComputeConfiguration omitted.

/**
 * deserializeAws_restJson1ConfiguredAudienceModelList
 */
const de_ConfiguredAudienceModelList = (output: any, context: __SerdeContext): ConfiguredAudienceModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfiguredAudienceModelSummary(entry, context);
    });
  return retVal;
};

// de_ConfiguredAudienceModelOutputConfig omitted.

/**
 * deserializeAws_restJson1ConfiguredAudienceModelSummary
 */
const de_ConfiguredAudienceModelSummary = (output: any, context: __SerdeContext): ConfiguredAudienceModelSummary => {
  return take(output, {
    audienceModelArn: __expectString,
    configuredAudienceModelArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    outputConfig: _json,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_ConfiguredModelAlgorithmAssociationArnList omitted.

/**
 * deserializeAws_restJson1ConfiguredModelAlgorithmAssociationList
 */
const de_ConfiguredModelAlgorithmAssociationList = (
  output: any,
  context: __SerdeContext
): ConfiguredModelAlgorithmAssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfiguredModelAlgorithmAssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfiguredModelAlgorithmAssociationSummary
 */
const de_ConfiguredModelAlgorithmAssociationSummary = (
  output: any,
  context: __SerdeContext
): ConfiguredModelAlgorithmAssociationSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmArn: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    membershipIdentifier: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1ConfiguredModelAlgorithmList
 */
const de_ConfiguredModelAlgorithmList = (output: any, context: __SerdeContext): ConfiguredModelAlgorithmSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConfiguredModelAlgorithmSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConfiguredModelAlgorithmSummary
 */
const de_ConfiguredModelAlgorithmSummary = (output: any, context: __SerdeContext): ConfiguredModelAlgorithmSummary => {
  return take(output, {
    configuredModelAlgorithmArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_ContainerArguments omitted.

// de_ContainerConfig omitted.

// de_ContainerEntrypoint omitted.

// de_CustomDataIdentifierList omitted.

// de_CustomEntityConfig omitted.

// de_Dataset omitted.

// de_DatasetInputConfig omitted.

// de_DatasetList omitted.

// de_DatasetSchemaList omitted.

// de_DataSource omitted.

// de_Destination omitted.

// de_EntityTypeList omitted.

// de_Environment omitted.

// de_GlueDataSource omitted.

// de_HyperParameters omitted.

// de_IncrementalTrainingDataChannelOutput omitted.

// de_IncrementalTrainingDataChannelsOutput omitted.

// de_InferenceContainerConfig omitted.

// de_InferenceContainerExecutionParameters omitted.

// de_InferenceEnvironmentMap omitted.

// de_InferenceOutputConfiguration omitted.

// de_InferenceReceiverMember omitted.

// de_InferenceReceiverMembers omitted.

// de_InferenceResourceConfig omitted.

// de_InputChannel omitted.

// de_InputChannelDataSource omitted.

// de_LogRedactionConfiguration omitted.

// de_LogsConfigurationPolicy omitted.

// de_LogsConfigurationPolicyList omitted.

// de_MetricDefinition omitted.

// de_MetricDefinitionList omitted.

// de_MetricsConfigurationPolicy omitted.

// de_MetricsList omitted.

/**
 * deserializeAws_restJson1MLInputChannelsList
 */
const de_MLInputChannelsList = (output: any, context: __SerdeContext): MLInputChannelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MLInputChannelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MLInputChannelSummary
 */
const de_MLInputChannelSummary = (output: any, context: __SerdeContext): MLInputChannelSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociations: _json,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    membershipIdentifier: __expectString,
    mlInputChannelArn: __expectString,
    name: __expectString,
    protectedQueryIdentifier: __expectString,
    status: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_MLOutputConfiguration omitted.

// de_ModelInferenceDataSource omitted.

// de_ModelTrainingDataChannel omitted.

// de_ModelTrainingDataChannels omitted.

// de_ParameterMap omitted.

/**
 * deserializeAws_restJson1PrivacyBudgets
 */
const de_PrivacyBudgets = (output: any, context: __SerdeContext): PrivacyBudgets => {
  if (output.accessBudgets != null) {
    return {
      accessBudgets: de_AccessBudgets(output.accessBudgets, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_restJson1PrivacyConfiguration
 */
const de_PrivacyConfiguration = (output: any, context: __SerdeContext): PrivacyConfiguration => {
  return take(output, {
    policies: (_: any) => de_PrivacyConfigurationPolicies(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1PrivacyConfigurationPolicies
 */
const de_PrivacyConfigurationPolicies = (output: any, context: __SerdeContext): PrivacyConfigurationPolicies => {
  return take(output, {
    trainedModelExports: (_: any) => de_TrainedModelExportsConfigurationPolicy(_, context),
    trainedModelInferenceJobs: (_: any) => de_TrainedModelInferenceJobsConfigurationPolicy(_, context),
    trainedModels: (_: any) => de_TrainedModelsConfigurationPolicy(_, context),
  }) as any;
};

// de_ProtectedQueryInputParameters omitted.

// de_ProtectedQuerySQLParameters omitted.

/**
 * deserializeAws_restJson1RelevanceMetric
 */
const de_RelevanceMetric = (output: any, context: __SerdeContext): RelevanceMetric => {
  return take(output, {
    audienceSize: _json,
    score: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1RelevanceMetrics
 */
const de_RelevanceMetrics = (output: any, context: __SerdeContext): RelevanceMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RelevanceMetric(entry, context);
    });
  return retVal;
};

// de_ResourceConfig omitted.

// de_S3ConfigMap omitted.

// de_StatusDetails omitted.

// de_StoppingCondition omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TrainedModelArtifactMaxSize
 */
const de_TrainedModelArtifactMaxSize = (output: any, context: __SerdeContext): TrainedModelArtifactMaxSize => {
  return take(output, {
    unit: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

// de_TrainedModelExportFileTypeList omitted.

// de_TrainedModelExportOutputConfiguration omitted.

// de_TrainedModelExportReceiverMember omitted.

// de_TrainedModelExportReceiverMembers omitted.

/**
 * deserializeAws_restJson1TrainedModelExportsConfigurationPolicy
 */
const de_TrainedModelExportsConfigurationPolicy = (
  output: any,
  context: __SerdeContext
): TrainedModelExportsConfigurationPolicy => {
  return take(output, {
    filesToExport: _json,
    maxSize: (_: any) => de_TrainedModelExportsMaxSize(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TrainedModelExportsMaxSize
 */
const de_TrainedModelExportsMaxSize = (output: any, context: __SerdeContext): TrainedModelExportsMaxSize => {
  return take(output, {
    unit: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1TrainedModelInferenceJobList
 */
const de_TrainedModelInferenceJobList = (output: any, context: __SerdeContext): TrainedModelInferenceJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrainedModelInferenceJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrainedModelInferenceJobsConfigurationPolicy
 */
const de_TrainedModelInferenceJobsConfigurationPolicy = (
  output: any,
  context: __SerdeContext
): TrainedModelInferenceJobsConfigurationPolicy => {
  return take(output, {
    containerLogs: _json,
    maxOutputSize: (_: any) => de_TrainedModelInferenceMaxOutputSize(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TrainedModelInferenceJobSummary
 */
const de_TrainedModelInferenceJobSummary = (output: any, context: __SerdeContext): TrainedModelInferenceJobSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    logsStatus: __expectString,
    logsStatusDetails: __expectString,
    membershipIdentifier: __expectString,
    metricsStatus: __expectString,
    metricsStatusDetails: __expectString,
    name: __expectString,
    outputConfiguration: _json,
    status: __expectString,
    trainedModelArn: __expectString,
    trainedModelInferenceJobArn: __expectString,
    trainedModelVersionIdentifier: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1TrainedModelInferenceMaxOutputSize
 */
const de_TrainedModelInferenceMaxOutputSize = (
  output: any,
  context: __SerdeContext
): TrainedModelInferenceMaxOutputSize => {
  return take(output, {
    unit: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1TrainedModelList
 */
const de_TrainedModelList = (output: any, context: __SerdeContext): TrainedModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrainedModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrainedModelsConfigurationPolicy
 */
const de_TrainedModelsConfigurationPolicy = (
  output: any,
  context: __SerdeContext
): TrainedModelsConfigurationPolicy => {
  return take(output, {
    containerLogs: _json,
    containerMetrics: _json,
    maxArtifactSize: (_: any) => de_TrainedModelArtifactMaxSize(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TrainedModelSummary
 */
const de_TrainedModelSummary = (output: any, context: __SerdeContext): TrainedModelSummary => {
  return take(output, {
    collaborationIdentifier: __expectString,
    configuredModelAlgorithmAssociationArn: __expectString,
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    incrementalTrainingDataChannels: _json,
    membershipIdentifier: __expectString,
    name: __expectString,
    status: __expectString,
    trainedModelArn: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    versionIdentifier: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TrainingDatasetList
 */
const de_TrainingDatasetList = (output: any, context: __SerdeContext): TrainingDatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrainingDatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrainingDatasetSummary
 */
const de_TrainingDatasetSummary = (output: any, context: __SerdeContext): TrainingDatasetSummary => {
  return take(output, {
    createTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    name: __expectString,
    status: __expectString,
    trainingDatasetArn: __expectString,
    updateTime: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

// de_WorkerComputeConfiguration omitted.

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

const _aGJA = "audienceGenerationJobArn";
const _cAMA = "configuredAudienceModelArn";
const _cI = "collaborationId";
const _mR = "maxResults";
const _nT = "nextToken";
const _s = "status";
const _tK = "tagKeys";
const _tMA = "trainedModelArn";
const _tMVI = "trainedModelVersionIdentifier";
const _vI = "versionIdentifier";
