// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CleanRoomsMLClient, CleanRoomsMLClientConfig } from "./CleanRoomsMLClient";
import {
  CancelTrainedModelCommand,
  CancelTrainedModelCommandInput,
  CancelTrainedModelCommandOutput,
} from "./commands/CancelTrainedModelCommand";
import {
  CancelTrainedModelInferenceJobCommand,
  CancelTrainedModelInferenceJobCommandInput,
  CancelTrainedModelInferenceJobCommandOutput,
} from "./commands/CancelTrainedModelInferenceJobCommand";
import {
  CreateAudienceModelCommand,
  CreateAudienceModelCommandInput,
  CreateAudienceModelCommandOutput,
} from "./commands/CreateAudienceModelCommand";
import {
  CreateConfiguredAudienceModelCommand,
  CreateConfiguredAudienceModelCommandInput,
  CreateConfiguredAudienceModelCommandOutput,
} from "./commands/CreateConfiguredAudienceModelCommand";
import {
  CreateConfiguredModelAlgorithmAssociationCommand,
  CreateConfiguredModelAlgorithmAssociationCommandInput,
  CreateConfiguredModelAlgorithmAssociationCommandOutput,
} from "./commands/CreateConfiguredModelAlgorithmAssociationCommand";
import {
  CreateConfiguredModelAlgorithmCommand,
  CreateConfiguredModelAlgorithmCommandInput,
  CreateConfiguredModelAlgorithmCommandOutput,
} from "./commands/CreateConfiguredModelAlgorithmCommand";
import {
  CreateMLInputChannelCommand,
  CreateMLInputChannelCommandInput,
  CreateMLInputChannelCommandOutput,
} from "./commands/CreateMLInputChannelCommand";
import {
  CreateTrainedModelCommand,
  CreateTrainedModelCommandInput,
  CreateTrainedModelCommandOutput,
} from "./commands/CreateTrainedModelCommand";
import {
  CreateTrainingDatasetCommand,
  CreateTrainingDatasetCommandInput,
  CreateTrainingDatasetCommandOutput,
} from "./commands/CreateTrainingDatasetCommand";
import {
  DeleteAudienceGenerationJobCommand,
  DeleteAudienceGenerationJobCommandInput,
  DeleteAudienceGenerationJobCommandOutput,
} from "./commands/DeleteAudienceGenerationJobCommand";
import {
  DeleteAudienceModelCommand,
  DeleteAudienceModelCommandInput,
  DeleteAudienceModelCommandOutput,
} from "./commands/DeleteAudienceModelCommand";
import {
  DeleteConfiguredAudienceModelCommand,
  DeleteConfiguredAudienceModelCommandInput,
  DeleteConfiguredAudienceModelCommandOutput,
} from "./commands/DeleteConfiguredAudienceModelCommand";
import {
  DeleteConfiguredAudienceModelPolicyCommand,
  DeleteConfiguredAudienceModelPolicyCommandInput,
  DeleteConfiguredAudienceModelPolicyCommandOutput,
} from "./commands/DeleteConfiguredAudienceModelPolicyCommand";
import {
  DeleteConfiguredModelAlgorithmAssociationCommand,
  DeleteConfiguredModelAlgorithmAssociationCommandInput,
  DeleteConfiguredModelAlgorithmAssociationCommandOutput,
} from "./commands/DeleteConfiguredModelAlgorithmAssociationCommand";
import {
  DeleteConfiguredModelAlgorithmCommand,
  DeleteConfiguredModelAlgorithmCommandInput,
  DeleteConfiguredModelAlgorithmCommandOutput,
} from "./commands/DeleteConfiguredModelAlgorithmCommand";
import {
  DeleteMLConfigurationCommand,
  DeleteMLConfigurationCommandInput,
  DeleteMLConfigurationCommandOutput,
} from "./commands/DeleteMLConfigurationCommand";
import {
  DeleteMLInputChannelDataCommand,
  DeleteMLInputChannelDataCommandInput,
  DeleteMLInputChannelDataCommandOutput,
} from "./commands/DeleteMLInputChannelDataCommand";
import {
  DeleteTrainedModelOutputCommand,
  DeleteTrainedModelOutputCommandInput,
  DeleteTrainedModelOutputCommandOutput,
} from "./commands/DeleteTrainedModelOutputCommand";
import {
  DeleteTrainingDatasetCommand,
  DeleteTrainingDatasetCommandInput,
  DeleteTrainingDatasetCommandOutput,
} from "./commands/DeleteTrainingDatasetCommand";
import {
  GetAudienceGenerationJobCommand,
  GetAudienceGenerationJobCommandInput,
  GetAudienceGenerationJobCommandOutput,
} from "./commands/GetAudienceGenerationJobCommand";
import {
  GetAudienceModelCommand,
  GetAudienceModelCommandInput,
  GetAudienceModelCommandOutput,
} from "./commands/GetAudienceModelCommand";
import {
  GetCollaborationConfiguredModelAlgorithmAssociationCommand,
  GetCollaborationConfiguredModelAlgorithmAssociationCommandInput,
  GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput,
} from "./commands/GetCollaborationConfiguredModelAlgorithmAssociationCommand";
import {
  GetCollaborationMLInputChannelCommand,
  GetCollaborationMLInputChannelCommandInput,
  GetCollaborationMLInputChannelCommandOutput,
} from "./commands/GetCollaborationMLInputChannelCommand";
import {
  GetCollaborationTrainedModelCommand,
  GetCollaborationTrainedModelCommandInput,
  GetCollaborationTrainedModelCommandOutput,
} from "./commands/GetCollaborationTrainedModelCommand";
import {
  GetConfiguredAudienceModelCommand,
  GetConfiguredAudienceModelCommandInput,
  GetConfiguredAudienceModelCommandOutput,
} from "./commands/GetConfiguredAudienceModelCommand";
import {
  GetConfiguredAudienceModelPolicyCommand,
  GetConfiguredAudienceModelPolicyCommandInput,
  GetConfiguredAudienceModelPolicyCommandOutput,
} from "./commands/GetConfiguredAudienceModelPolicyCommand";
import {
  GetConfiguredModelAlgorithmAssociationCommand,
  GetConfiguredModelAlgorithmAssociationCommandInput,
  GetConfiguredModelAlgorithmAssociationCommandOutput,
} from "./commands/GetConfiguredModelAlgorithmAssociationCommand";
import {
  GetConfiguredModelAlgorithmCommand,
  GetConfiguredModelAlgorithmCommandInput,
  GetConfiguredModelAlgorithmCommandOutput,
} from "./commands/GetConfiguredModelAlgorithmCommand";
import {
  GetMLConfigurationCommand,
  GetMLConfigurationCommandInput,
  GetMLConfigurationCommandOutput,
} from "./commands/GetMLConfigurationCommand";
import {
  GetMLInputChannelCommand,
  GetMLInputChannelCommandInput,
  GetMLInputChannelCommandOutput,
} from "./commands/GetMLInputChannelCommand";
import {
  GetTrainedModelCommand,
  GetTrainedModelCommandInput,
  GetTrainedModelCommandOutput,
} from "./commands/GetTrainedModelCommand";
import {
  GetTrainedModelInferenceJobCommand,
  GetTrainedModelInferenceJobCommandInput,
  GetTrainedModelInferenceJobCommandOutput,
} from "./commands/GetTrainedModelInferenceJobCommand";
import {
  GetTrainingDatasetCommand,
  GetTrainingDatasetCommandInput,
  GetTrainingDatasetCommandOutput,
} from "./commands/GetTrainingDatasetCommand";
import {
  ListAudienceExportJobsCommand,
  ListAudienceExportJobsCommandInput,
  ListAudienceExportJobsCommandOutput,
} from "./commands/ListAudienceExportJobsCommand";
import {
  ListAudienceGenerationJobsCommand,
  ListAudienceGenerationJobsCommandInput,
  ListAudienceGenerationJobsCommandOutput,
} from "./commands/ListAudienceGenerationJobsCommand";
import {
  ListAudienceModelsCommand,
  ListAudienceModelsCommandInput,
  ListAudienceModelsCommandOutput,
} from "./commands/ListAudienceModelsCommand";
import {
  ListCollaborationConfiguredModelAlgorithmAssociationsCommand,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput,
} from "./commands/ListCollaborationConfiguredModelAlgorithmAssociationsCommand";
import {
  ListCollaborationMLInputChannelsCommand,
  ListCollaborationMLInputChannelsCommandInput,
  ListCollaborationMLInputChannelsCommandOutput,
} from "./commands/ListCollaborationMLInputChannelsCommand";
import {
  ListCollaborationTrainedModelExportJobsCommand,
  ListCollaborationTrainedModelExportJobsCommandInput,
  ListCollaborationTrainedModelExportJobsCommandOutput,
} from "./commands/ListCollaborationTrainedModelExportJobsCommand";
import {
  ListCollaborationTrainedModelInferenceJobsCommand,
  ListCollaborationTrainedModelInferenceJobsCommandInput,
  ListCollaborationTrainedModelInferenceJobsCommandOutput,
} from "./commands/ListCollaborationTrainedModelInferenceJobsCommand";
import {
  ListCollaborationTrainedModelsCommand,
  ListCollaborationTrainedModelsCommandInput,
  ListCollaborationTrainedModelsCommandOutput,
} from "./commands/ListCollaborationTrainedModelsCommand";
import {
  ListConfiguredAudienceModelsCommand,
  ListConfiguredAudienceModelsCommandInput,
  ListConfiguredAudienceModelsCommandOutput,
} from "./commands/ListConfiguredAudienceModelsCommand";
import {
  ListConfiguredModelAlgorithmAssociationsCommand,
  ListConfiguredModelAlgorithmAssociationsCommandInput,
  ListConfiguredModelAlgorithmAssociationsCommandOutput,
} from "./commands/ListConfiguredModelAlgorithmAssociationsCommand";
import {
  ListConfiguredModelAlgorithmsCommand,
  ListConfiguredModelAlgorithmsCommandInput,
  ListConfiguredModelAlgorithmsCommandOutput,
} from "./commands/ListConfiguredModelAlgorithmsCommand";
import {
  ListMLInputChannelsCommand,
  ListMLInputChannelsCommandInput,
  ListMLInputChannelsCommandOutput,
} from "./commands/ListMLInputChannelsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrainedModelInferenceJobsCommand,
  ListTrainedModelInferenceJobsCommandInput,
  ListTrainedModelInferenceJobsCommandOutput,
} from "./commands/ListTrainedModelInferenceJobsCommand";
import {
  ListTrainedModelsCommand,
  ListTrainedModelsCommandInput,
  ListTrainedModelsCommandOutput,
} from "./commands/ListTrainedModelsCommand";
import {
  ListTrainedModelVersionsCommand,
  ListTrainedModelVersionsCommandInput,
  ListTrainedModelVersionsCommandOutput,
} from "./commands/ListTrainedModelVersionsCommand";
import {
  ListTrainingDatasetsCommand,
  ListTrainingDatasetsCommandInput,
  ListTrainingDatasetsCommandOutput,
} from "./commands/ListTrainingDatasetsCommand";
import {
  PutConfiguredAudienceModelPolicyCommand,
  PutConfiguredAudienceModelPolicyCommandInput,
  PutConfiguredAudienceModelPolicyCommandOutput,
} from "./commands/PutConfiguredAudienceModelPolicyCommand";
import {
  PutMLConfigurationCommand,
  PutMLConfigurationCommandInput,
  PutMLConfigurationCommandOutput,
} from "./commands/PutMLConfigurationCommand";
import {
  StartAudienceExportJobCommand,
  StartAudienceExportJobCommandInput,
  StartAudienceExportJobCommandOutput,
} from "./commands/StartAudienceExportJobCommand";
import {
  StartAudienceGenerationJobCommand,
  StartAudienceGenerationJobCommandInput,
  StartAudienceGenerationJobCommandOutput,
} from "./commands/StartAudienceGenerationJobCommand";
import {
  StartTrainedModelExportJobCommand,
  StartTrainedModelExportJobCommandInput,
  StartTrainedModelExportJobCommandOutput,
} from "./commands/StartTrainedModelExportJobCommand";
import {
  StartTrainedModelInferenceJobCommand,
  StartTrainedModelInferenceJobCommandInput,
  StartTrainedModelInferenceJobCommandOutput,
} from "./commands/StartTrainedModelInferenceJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateConfiguredAudienceModelCommand,
  UpdateConfiguredAudienceModelCommandInput,
  UpdateConfiguredAudienceModelCommandOutput,
} from "./commands/UpdateConfiguredAudienceModelCommand";

const commands = {
  CancelTrainedModelCommand,
  CancelTrainedModelInferenceJobCommand,
  CreateAudienceModelCommand,
  CreateConfiguredAudienceModelCommand,
  CreateConfiguredModelAlgorithmCommand,
  CreateConfiguredModelAlgorithmAssociationCommand,
  CreateMLInputChannelCommand,
  CreateTrainedModelCommand,
  CreateTrainingDatasetCommand,
  DeleteAudienceGenerationJobCommand,
  DeleteAudienceModelCommand,
  DeleteConfiguredAudienceModelCommand,
  DeleteConfiguredAudienceModelPolicyCommand,
  DeleteConfiguredModelAlgorithmCommand,
  DeleteConfiguredModelAlgorithmAssociationCommand,
  DeleteMLConfigurationCommand,
  DeleteMLInputChannelDataCommand,
  DeleteTrainedModelOutputCommand,
  DeleteTrainingDatasetCommand,
  GetAudienceGenerationJobCommand,
  GetAudienceModelCommand,
  GetCollaborationConfiguredModelAlgorithmAssociationCommand,
  GetCollaborationMLInputChannelCommand,
  GetCollaborationTrainedModelCommand,
  GetConfiguredAudienceModelCommand,
  GetConfiguredAudienceModelPolicyCommand,
  GetConfiguredModelAlgorithmCommand,
  GetConfiguredModelAlgorithmAssociationCommand,
  GetMLConfigurationCommand,
  GetMLInputChannelCommand,
  GetTrainedModelCommand,
  GetTrainedModelInferenceJobCommand,
  GetTrainingDatasetCommand,
  ListAudienceExportJobsCommand,
  ListAudienceGenerationJobsCommand,
  ListAudienceModelsCommand,
  ListCollaborationConfiguredModelAlgorithmAssociationsCommand,
  ListCollaborationMLInputChannelsCommand,
  ListCollaborationTrainedModelExportJobsCommand,
  ListCollaborationTrainedModelInferenceJobsCommand,
  ListCollaborationTrainedModelsCommand,
  ListConfiguredAudienceModelsCommand,
  ListConfiguredModelAlgorithmAssociationsCommand,
  ListConfiguredModelAlgorithmsCommand,
  ListMLInputChannelsCommand,
  ListTagsForResourceCommand,
  ListTrainedModelInferenceJobsCommand,
  ListTrainedModelsCommand,
  ListTrainedModelVersionsCommand,
  ListTrainingDatasetsCommand,
  PutConfiguredAudienceModelPolicyCommand,
  PutMLConfigurationCommand,
  StartAudienceExportJobCommand,
  StartAudienceGenerationJobCommand,
  StartTrainedModelExportJobCommand,
  StartTrainedModelInferenceJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateConfiguredAudienceModelCommand,
};

export interface CleanRoomsML {
  /**
   * @see {@link CancelTrainedModelCommand}
   */
  cancelTrainedModel(
    args: CancelTrainedModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelTrainedModelCommandOutput>;
  cancelTrainedModel(
    args: CancelTrainedModelCommandInput,
    cb: (err: any, data?: CancelTrainedModelCommandOutput) => void
  ): void;
  cancelTrainedModel(
    args: CancelTrainedModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTrainedModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelTrainedModelInferenceJobCommand}
   */
  cancelTrainedModelInferenceJob(
    args: CancelTrainedModelInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelTrainedModelInferenceJobCommandOutput>;
  cancelTrainedModelInferenceJob(
    args: CancelTrainedModelInferenceJobCommandInput,
    cb: (err: any, data?: CancelTrainedModelInferenceJobCommandOutput) => void
  ): void;
  cancelTrainedModelInferenceJob(
    args: CancelTrainedModelInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTrainedModelInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAudienceModelCommand}
   */
  createAudienceModel(
    args: CreateAudienceModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAudienceModelCommandOutput>;
  createAudienceModel(
    args: CreateAudienceModelCommandInput,
    cb: (err: any, data?: CreateAudienceModelCommandOutput) => void
  ): void;
  createAudienceModel(
    args: CreateAudienceModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAudienceModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredAudienceModelCommand}
   */
  createConfiguredAudienceModel(
    args: CreateConfiguredAudienceModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredAudienceModelCommandOutput>;
  createConfiguredAudienceModel(
    args: CreateConfiguredAudienceModelCommandInput,
    cb: (err: any, data?: CreateConfiguredAudienceModelCommandOutput) => void
  ): void;
  createConfiguredAudienceModel(
    args: CreateConfiguredAudienceModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredAudienceModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredModelAlgorithmCommand}
   */
  createConfiguredModelAlgorithm(
    args: CreateConfiguredModelAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredModelAlgorithmCommandOutput>;
  createConfiguredModelAlgorithm(
    args: CreateConfiguredModelAlgorithmCommandInput,
    cb: (err: any, data?: CreateConfiguredModelAlgorithmCommandOutput) => void
  ): void;
  createConfiguredModelAlgorithm(
    args: CreateConfiguredModelAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredModelAlgorithmCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfiguredModelAlgorithmAssociationCommand}
   */
  createConfiguredModelAlgorithmAssociation(
    args: CreateConfiguredModelAlgorithmAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConfiguredModelAlgorithmAssociationCommandOutput>;
  createConfiguredModelAlgorithmAssociation(
    args: CreateConfiguredModelAlgorithmAssociationCommandInput,
    cb: (err: any, data?: CreateConfiguredModelAlgorithmAssociationCommandOutput) => void
  ): void;
  createConfiguredModelAlgorithmAssociation(
    args: CreateConfiguredModelAlgorithmAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfiguredModelAlgorithmAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMLInputChannelCommand}
   */
  createMLInputChannel(
    args: CreateMLInputChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMLInputChannelCommandOutput>;
  createMLInputChannel(
    args: CreateMLInputChannelCommandInput,
    cb: (err: any, data?: CreateMLInputChannelCommandOutput) => void
  ): void;
  createMLInputChannel(
    args: CreateMLInputChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMLInputChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrainedModelCommand}
   */
  createTrainedModel(
    args: CreateTrainedModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrainedModelCommandOutput>;
  createTrainedModel(
    args: CreateTrainedModelCommandInput,
    cb: (err: any, data?: CreateTrainedModelCommandOutput) => void
  ): void;
  createTrainedModel(
    args: CreateTrainedModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrainedModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrainingDatasetCommand}
   */
  createTrainingDataset(
    args: CreateTrainingDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrainingDatasetCommandOutput>;
  createTrainingDataset(
    args: CreateTrainingDatasetCommandInput,
    cb: (err: any, data?: CreateTrainingDatasetCommandOutput) => void
  ): void;
  createTrainingDataset(
    args: CreateTrainingDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrainingDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAudienceGenerationJobCommand}
   */
  deleteAudienceGenerationJob(
    args: DeleteAudienceGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAudienceGenerationJobCommandOutput>;
  deleteAudienceGenerationJob(
    args: DeleteAudienceGenerationJobCommandInput,
    cb: (err: any, data?: DeleteAudienceGenerationJobCommandOutput) => void
  ): void;
  deleteAudienceGenerationJob(
    args: DeleteAudienceGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAudienceGenerationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAudienceModelCommand}
   */
  deleteAudienceModel(
    args: DeleteAudienceModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAudienceModelCommandOutput>;
  deleteAudienceModel(
    args: DeleteAudienceModelCommandInput,
    cb: (err: any, data?: DeleteAudienceModelCommandOutput) => void
  ): void;
  deleteAudienceModel(
    args: DeleteAudienceModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAudienceModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredAudienceModelCommand}
   */
  deleteConfiguredAudienceModel(
    args: DeleteConfiguredAudienceModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredAudienceModelCommandOutput>;
  deleteConfiguredAudienceModel(
    args: DeleteConfiguredAudienceModelCommandInput,
    cb: (err: any, data?: DeleteConfiguredAudienceModelCommandOutput) => void
  ): void;
  deleteConfiguredAudienceModel(
    args: DeleteConfiguredAudienceModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredAudienceModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredAudienceModelPolicyCommand}
   */
  deleteConfiguredAudienceModelPolicy(
    args: DeleteConfiguredAudienceModelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredAudienceModelPolicyCommandOutput>;
  deleteConfiguredAudienceModelPolicy(
    args: DeleteConfiguredAudienceModelPolicyCommandInput,
    cb: (err: any, data?: DeleteConfiguredAudienceModelPolicyCommandOutput) => void
  ): void;
  deleteConfiguredAudienceModelPolicy(
    args: DeleteConfiguredAudienceModelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredAudienceModelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredModelAlgorithmCommand}
   */
  deleteConfiguredModelAlgorithm(
    args: DeleteConfiguredModelAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredModelAlgorithmCommandOutput>;
  deleteConfiguredModelAlgorithm(
    args: DeleteConfiguredModelAlgorithmCommandInput,
    cb: (err: any, data?: DeleteConfiguredModelAlgorithmCommandOutput) => void
  ): void;
  deleteConfiguredModelAlgorithm(
    args: DeleteConfiguredModelAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredModelAlgorithmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfiguredModelAlgorithmAssociationCommand}
   */
  deleteConfiguredModelAlgorithmAssociation(
    args: DeleteConfiguredModelAlgorithmAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConfiguredModelAlgorithmAssociationCommandOutput>;
  deleteConfiguredModelAlgorithmAssociation(
    args: DeleteConfiguredModelAlgorithmAssociationCommandInput,
    cb: (err: any, data?: DeleteConfiguredModelAlgorithmAssociationCommandOutput) => void
  ): void;
  deleteConfiguredModelAlgorithmAssociation(
    args: DeleteConfiguredModelAlgorithmAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfiguredModelAlgorithmAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMLConfigurationCommand}
   */
  deleteMLConfiguration(
    args: DeleteMLConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMLConfigurationCommandOutput>;
  deleteMLConfiguration(
    args: DeleteMLConfigurationCommandInput,
    cb: (err: any, data?: DeleteMLConfigurationCommandOutput) => void
  ): void;
  deleteMLConfiguration(
    args: DeleteMLConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMLConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMLInputChannelDataCommand}
   */
  deleteMLInputChannelData(
    args: DeleteMLInputChannelDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMLInputChannelDataCommandOutput>;
  deleteMLInputChannelData(
    args: DeleteMLInputChannelDataCommandInput,
    cb: (err: any, data?: DeleteMLInputChannelDataCommandOutput) => void
  ): void;
  deleteMLInputChannelData(
    args: DeleteMLInputChannelDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMLInputChannelDataCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrainedModelOutputCommand}
   */
  deleteTrainedModelOutput(
    args: DeleteTrainedModelOutputCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrainedModelOutputCommandOutput>;
  deleteTrainedModelOutput(
    args: DeleteTrainedModelOutputCommandInput,
    cb: (err: any, data?: DeleteTrainedModelOutputCommandOutput) => void
  ): void;
  deleteTrainedModelOutput(
    args: DeleteTrainedModelOutputCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrainedModelOutputCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrainingDatasetCommand}
   */
  deleteTrainingDataset(
    args: DeleteTrainingDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrainingDatasetCommandOutput>;
  deleteTrainingDataset(
    args: DeleteTrainingDatasetCommandInput,
    cb: (err: any, data?: DeleteTrainingDatasetCommandOutput) => void
  ): void;
  deleteTrainingDataset(
    args: DeleteTrainingDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrainingDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAudienceGenerationJobCommand}
   */
  getAudienceGenerationJob(
    args: GetAudienceGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAudienceGenerationJobCommandOutput>;
  getAudienceGenerationJob(
    args: GetAudienceGenerationJobCommandInput,
    cb: (err: any, data?: GetAudienceGenerationJobCommandOutput) => void
  ): void;
  getAudienceGenerationJob(
    args: GetAudienceGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAudienceGenerationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAudienceModelCommand}
   */
  getAudienceModel(
    args: GetAudienceModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAudienceModelCommandOutput>;
  getAudienceModel(
    args: GetAudienceModelCommandInput,
    cb: (err: any, data?: GetAudienceModelCommandOutput) => void
  ): void;
  getAudienceModel(
    args: GetAudienceModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAudienceModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationConfiguredModelAlgorithmAssociationCommand}
   */
  getCollaborationConfiguredModelAlgorithmAssociation(
    args: GetCollaborationConfiguredModelAlgorithmAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput>;
  getCollaborationConfiguredModelAlgorithmAssociation(
    args: GetCollaborationConfiguredModelAlgorithmAssociationCommandInput,
    cb: (err: any, data?: GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput) => void
  ): void;
  getCollaborationConfiguredModelAlgorithmAssociation(
    args: GetCollaborationConfiguredModelAlgorithmAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationConfiguredModelAlgorithmAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationMLInputChannelCommand}
   */
  getCollaborationMLInputChannel(
    args: GetCollaborationMLInputChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationMLInputChannelCommandOutput>;
  getCollaborationMLInputChannel(
    args: GetCollaborationMLInputChannelCommandInput,
    cb: (err: any, data?: GetCollaborationMLInputChannelCommandOutput) => void
  ): void;
  getCollaborationMLInputChannel(
    args: GetCollaborationMLInputChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationMLInputChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCollaborationTrainedModelCommand}
   */
  getCollaborationTrainedModel(
    args: GetCollaborationTrainedModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCollaborationTrainedModelCommandOutput>;
  getCollaborationTrainedModel(
    args: GetCollaborationTrainedModelCommandInput,
    cb: (err: any, data?: GetCollaborationTrainedModelCommandOutput) => void
  ): void;
  getCollaborationTrainedModel(
    args: GetCollaborationTrainedModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCollaborationTrainedModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredAudienceModelCommand}
   */
  getConfiguredAudienceModel(
    args: GetConfiguredAudienceModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredAudienceModelCommandOutput>;
  getConfiguredAudienceModel(
    args: GetConfiguredAudienceModelCommandInput,
    cb: (err: any, data?: GetConfiguredAudienceModelCommandOutput) => void
  ): void;
  getConfiguredAudienceModel(
    args: GetConfiguredAudienceModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredAudienceModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredAudienceModelPolicyCommand}
   */
  getConfiguredAudienceModelPolicy(
    args: GetConfiguredAudienceModelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredAudienceModelPolicyCommandOutput>;
  getConfiguredAudienceModelPolicy(
    args: GetConfiguredAudienceModelPolicyCommandInput,
    cb: (err: any, data?: GetConfiguredAudienceModelPolicyCommandOutput) => void
  ): void;
  getConfiguredAudienceModelPolicy(
    args: GetConfiguredAudienceModelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredAudienceModelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredModelAlgorithmCommand}
   */
  getConfiguredModelAlgorithm(
    args: GetConfiguredModelAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredModelAlgorithmCommandOutput>;
  getConfiguredModelAlgorithm(
    args: GetConfiguredModelAlgorithmCommandInput,
    cb: (err: any, data?: GetConfiguredModelAlgorithmCommandOutput) => void
  ): void;
  getConfiguredModelAlgorithm(
    args: GetConfiguredModelAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredModelAlgorithmCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfiguredModelAlgorithmAssociationCommand}
   */
  getConfiguredModelAlgorithmAssociation(
    args: GetConfiguredModelAlgorithmAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetConfiguredModelAlgorithmAssociationCommandOutput>;
  getConfiguredModelAlgorithmAssociation(
    args: GetConfiguredModelAlgorithmAssociationCommandInput,
    cb: (err: any, data?: GetConfiguredModelAlgorithmAssociationCommandOutput) => void
  ): void;
  getConfiguredModelAlgorithmAssociation(
    args: GetConfiguredModelAlgorithmAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfiguredModelAlgorithmAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLConfigurationCommand}
   */
  getMLConfiguration(
    args: GetMLConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLConfigurationCommandOutput>;
  getMLConfiguration(
    args: GetMLConfigurationCommandInput,
    cb: (err: any, data?: GetMLConfigurationCommandOutput) => void
  ): void;
  getMLConfiguration(
    args: GetMLConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLInputChannelCommand}
   */
  getMLInputChannel(
    args: GetMLInputChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMLInputChannelCommandOutput>;
  getMLInputChannel(
    args: GetMLInputChannelCommandInput,
    cb: (err: any, data?: GetMLInputChannelCommandOutput) => void
  ): void;
  getMLInputChannel(
    args: GetMLInputChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLInputChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrainedModelCommand}
   */
  getTrainedModel(
    args: GetTrainedModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrainedModelCommandOutput>;
  getTrainedModel(args: GetTrainedModelCommandInput, cb: (err: any, data?: GetTrainedModelCommandOutput) => void): void;
  getTrainedModel(
    args: GetTrainedModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrainedModelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrainedModelInferenceJobCommand}
   */
  getTrainedModelInferenceJob(
    args: GetTrainedModelInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrainedModelInferenceJobCommandOutput>;
  getTrainedModelInferenceJob(
    args: GetTrainedModelInferenceJobCommandInput,
    cb: (err: any, data?: GetTrainedModelInferenceJobCommandOutput) => void
  ): void;
  getTrainedModelInferenceJob(
    args: GetTrainedModelInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrainedModelInferenceJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTrainingDatasetCommand}
   */
  getTrainingDataset(
    args: GetTrainingDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTrainingDatasetCommandOutput>;
  getTrainingDataset(
    args: GetTrainingDatasetCommandInput,
    cb: (err: any, data?: GetTrainingDatasetCommandOutput) => void
  ): void;
  getTrainingDataset(
    args: GetTrainingDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTrainingDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAudienceExportJobsCommand}
   */
  listAudienceExportJobs(): Promise<ListAudienceExportJobsCommandOutput>;
  listAudienceExportJobs(
    args: ListAudienceExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAudienceExportJobsCommandOutput>;
  listAudienceExportJobs(
    args: ListAudienceExportJobsCommandInput,
    cb: (err: any, data?: ListAudienceExportJobsCommandOutput) => void
  ): void;
  listAudienceExportJobs(
    args: ListAudienceExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAudienceExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAudienceGenerationJobsCommand}
   */
  listAudienceGenerationJobs(): Promise<ListAudienceGenerationJobsCommandOutput>;
  listAudienceGenerationJobs(
    args: ListAudienceGenerationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAudienceGenerationJobsCommandOutput>;
  listAudienceGenerationJobs(
    args: ListAudienceGenerationJobsCommandInput,
    cb: (err: any, data?: ListAudienceGenerationJobsCommandOutput) => void
  ): void;
  listAudienceGenerationJobs(
    args: ListAudienceGenerationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAudienceGenerationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAudienceModelsCommand}
   */
  listAudienceModels(): Promise<ListAudienceModelsCommandOutput>;
  listAudienceModels(
    args: ListAudienceModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAudienceModelsCommandOutput>;
  listAudienceModels(
    args: ListAudienceModelsCommandInput,
    cb: (err: any, data?: ListAudienceModelsCommandOutput) => void
  ): void;
  listAudienceModels(
    args: ListAudienceModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAudienceModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationConfiguredModelAlgorithmAssociationsCommand}
   */
  listCollaborationConfiguredModelAlgorithmAssociations(
    args: ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput>;
  listCollaborationConfiguredModelAlgorithmAssociations(
    args: ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
    cb: (err: any, data?: ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput) => void
  ): void;
  listCollaborationConfiguredModelAlgorithmAssociations(
    args: ListCollaborationConfiguredModelAlgorithmAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationConfiguredModelAlgorithmAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationMLInputChannelsCommand}
   */
  listCollaborationMLInputChannels(
    args: ListCollaborationMLInputChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationMLInputChannelsCommandOutput>;
  listCollaborationMLInputChannels(
    args: ListCollaborationMLInputChannelsCommandInput,
    cb: (err: any, data?: ListCollaborationMLInputChannelsCommandOutput) => void
  ): void;
  listCollaborationMLInputChannels(
    args: ListCollaborationMLInputChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationMLInputChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationTrainedModelExportJobsCommand}
   */
  listCollaborationTrainedModelExportJobs(
    args: ListCollaborationTrainedModelExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationTrainedModelExportJobsCommandOutput>;
  listCollaborationTrainedModelExportJobs(
    args: ListCollaborationTrainedModelExportJobsCommandInput,
    cb: (err: any, data?: ListCollaborationTrainedModelExportJobsCommandOutput) => void
  ): void;
  listCollaborationTrainedModelExportJobs(
    args: ListCollaborationTrainedModelExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationTrainedModelExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationTrainedModelInferenceJobsCommand}
   */
  listCollaborationTrainedModelInferenceJobs(
    args: ListCollaborationTrainedModelInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationTrainedModelInferenceJobsCommandOutput>;
  listCollaborationTrainedModelInferenceJobs(
    args: ListCollaborationTrainedModelInferenceJobsCommandInput,
    cb: (err: any, data?: ListCollaborationTrainedModelInferenceJobsCommandOutput) => void
  ): void;
  listCollaborationTrainedModelInferenceJobs(
    args: ListCollaborationTrainedModelInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationTrainedModelInferenceJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCollaborationTrainedModelsCommand}
   */
  listCollaborationTrainedModels(
    args: ListCollaborationTrainedModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCollaborationTrainedModelsCommandOutput>;
  listCollaborationTrainedModels(
    args: ListCollaborationTrainedModelsCommandInput,
    cb: (err: any, data?: ListCollaborationTrainedModelsCommandOutput) => void
  ): void;
  listCollaborationTrainedModels(
    args: ListCollaborationTrainedModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCollaborationTrainedModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfiguredAudienceModelsCommand}
   */
  listConfiguredAudienceModels(): Promise<ListConfiguredAudienceModelsCommandOutput>;
  listConfiguredAudienceModels(
    args: ListConfiguredAudienceModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfiguredAudienceModelsCommandOutput>;
  listConfiguredAudienceModels(
    args: ListConfiguredAudienceModelsCommandInput,
    cb: (err: any, data?: ListConfiguredAudienceModelsCommandOutput) => void
  ): void;
  listConfiguredAudienceModels(
    args: ListConfiguredAudienceModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfiguredAudienceModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfiguredModelAlgorithmAssociationsCommand}
   */
  listConfiguredModelAlgorithmAssociations(
    args: ListConfiguredModelAlgorithmAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfiguredModelAlgorithmAssociationsCommandOutput>;
  listConfiguredModelAlgorithmAssociations(
    args: ListConfiguredModelAlgorithmAssociationsCommandInput,
    cb: (err: any, data?: ListConfiguredModelAlgorithmAssociationsCommandOutput) => void
  ): void;
  listConfiguredModelAlgorithmAssociations(
    args: ListConfiguredModelAlgorithmAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfiguredModelAlgorithmAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfiguredModelAlgorithmsCommand}
   */
  listConfiguredModelAlgorithms(): Promise<ListConfiguredModelAlgorithmsCommandOutput>;
  listConfiguredModelAlgorithms(
    args: ListConfiguredModelAlgorithmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListConfiguredModelAlgorithmsCommandOutput>;
  listConfiguredModelAlgorithms(
    args: ListConfiguredModelAlgorithmsCommandInput,
    cb: (err: any, data?: ListConfiguredModelAlgorithmsCommandOutput) => void
  ): void;
  listConfiguredModelAlgorithms(
    args: ListConfiguredModelAlgorithmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfiguredModelAlgorithmsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMLInputChannelsCommand}
   */
  listMLInputChannels(
    args: ListMLInputChannelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMLInputChannelsCommandOutput>;
  listMLInputChannels(
    args: ListMLInputChannelsCommandInput,
    cb: (err: any, data?: ListMLInputChannelsCommandOutput) => void
  ): void;
  listMLInputChannels(
    args: ListMLInputChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMLInputChannelsCommandOutput) => void
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
   * @see {@link ListTrainedModelInferenceJobsCommand}
   */
  listTrainedModelInferenceJobs(
    args: ListTrainedModelInferenceJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrainedModelInferenceJobsCommandOutput>;
  listTrainedModelInferenceJobs(
    args: ListTrainedModelInferenceJobsCommandInput,
    cb: (err: any, data?: ListTrainedModelInferenceJobsCommandOutput) => void
  ): void;
  listTrainedModelInferenceJobs(
    args: ListTrainedModelInferenceJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrainedModelInferenceJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrainedModelsCommand}
   */
  listTrainedModels(
    args: ListTrainedModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrainedModelsCommandOutput>;
  listTrainedModels(
    args: ListTrainedModelsCommandInput,
    cb: (err: any, data?: ListTrainedModelsCommandOutput) => void
  ): void;
  listTrainedModels(
    args: ListTrainedModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrainedModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrainedModelVersionsCommand}
   */
  listTrainedModelVersions(
    args: ListTrainedModelVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrainedModelVersionsCommandOutput>;
  listTrainedModelVersions(
    args: ListTrainedModelVersionsCommandInput,
    cb: (err: any, data?: ListTrainedModelVersionsCommandOutput) => void
  ): void;
  listTrainedModelVersions(
    args: ListTrainedModelVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrainedModelVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrainingDatasetsCommand}
   */
  listTrainingDatasets(): Promise<ListTrainingDatasetsCommandOutput>;
  listTrainingDatasets(
    args: ListTrainingDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrainingDatasetsCommandOutput>;
  listTrainingDatasets(
    args: ListTrainingDatasetsCommandInput,
    cb: (err: any, data?: ListTrainingDatasetsCommandOutput) => void
  ): void;
  listTrainingDatasets(
    args: ListTrainingDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrainingDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutConfiguredAudienceModelPolicyCommand}
   */
  putConfiguredAudienceModelPolicy(
    args: PutConfiguredAudienceModelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutConfiguredAudienceModelPolicyCommandOutput>;
  putConfiguredAudienceModelPolicy(
    args: PutConfiguredAudienceModelPolicyCommandInput,
    cb: (err: any, data?: PutConfiguredAudienceModelPolicyCommandOutput) => void
  ): void;
  putConfiguredAudienceModelPolicy(
    args: PutConfiguredAudienceModelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutConfiguredAudienceModelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMLConfigurationCommand}
   */
  putMLConfiguration(
    args: PutMLConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMLConfigurationCommandOutput>;
  putMLConfiguration(
    args: PutMLConfigurationCommandInput,
    cb: (err: any, data?: PutMLConfigurationCommandOutput) => void
  ): void;
  putMLConfiguration(
    args: PutMLConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMLConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAudienceExportJobCommand}
   */
  startAudienceExportJob(
    args: StartAudienceExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAudienceExportJobCommandOutput>;
  startAudienceExportJob(
    args: StartAudienceExportJobCommandInput,
    cb: (err: any, data?: StartAudienceExportJobCommandOutput) => void
  ): void;
  startAudienceExportJob(
    args: StartAudienceExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAudienceExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAudienceGenerationJobCommand}
   */
  startAudienceGenerationJob(
    args: StartAudienceGenerationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAudienceGenerationJobCommandOutput>;
  startAudienceGenerationJob(
    args: StartAudienceGenerationJobCommandInput,
    cb: (err: any, data?: StartAudienceGenerationJobCommandOutput) => void
  ): void;
  startAudienceGenerationJob(
    args: StartAudienceGenerationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAudienceGenerationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTrainedModelExportJobCommand}
   */
  startTrainedModelExportJob(
    args: StartTrainedModelExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTrainedModelExportJobCommandOutput>;
  startTrainedModelExportJob(
    args: StartTrainedModelExportJobCommandInput,
    cb: (err: any, data?: StartTrainedModelExportJobCommandOutput) => void
  ): void;
  startTrainedModelExportJob(
    args: StartTrainedModelExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTrainedModelExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTrainedModelInferenceJobCommand}
   */
  startTrainedModelInferenceJob(
    args: StartTrainedModelInferenceJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTrainedModelInferenceJobCommandOutput>;
  startTrainedModelInferenceJob(
    args: StartTrainedModelInferenceJobCommandInput,
    cb: (err: any, data?: StartTrainedModelInferenceJobCommandOutput) => void
  ): void;
  startTrainedModelInferenceJob(
    args: StartTrainedModelInferenceJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTrainedModelInferenceJobCommandOutput) => void
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
   * @see {@link UpdateConfiguredAudienceModelCommand}
   */
  updateConfiguredAudienceModel(
    args: UpdateConfiguredAudienceModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConfiguredAudienceModelCommandOutput>;
  updateConfiguredAudienceModel(
    args: UpdateConfiguredAudienceModelCommandInput,
    cb: (err: any, data?: UpdateConfiguredAudienceModelCommandOutput) => void
  ): void;
  updateConfiguredAudienceModel(
    args: UpdateConfiguredAudienceModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfiguredAudienceModelCommandOutput) => void
  ): void;
}

/**
 * <p>Welcome to the <i>Amazon Web Services Clean Rooms ML API Reference</i>.</p> <p>Amazon Web Services Clean Rooms ML provides a privacy-enhancing method for two parties to identify similar users in their data without the need to share their data with each other. The first party brings the training data to Clean Rooms so that they can create and configure an audience model (lookalike model) and associate it with a collaboration. The second party then brings their seed data to Clean Rooms and generates an audience (lookalike segment) that resembles the training data.</p> <p>To learn more about Amazon Web Services Clean Rooms ML concepts, procedures, and best practices, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/userguide/machine-learning.html">Clean Rooms User Guide</a>.</p> <p>To learn more about SQL commands, functions, and conditions supported in Clean Rooms, see the <a href="https://docs.aws.amazon.com/clean-rooms/latest/sql-reference/sql-reference.html">Clean Rooms SQL Reference</a>.</p> <p/>
 * @public
 */
export class CleanRoomsML extends CleanRoomsMLClient implements CleanRoomsML {}
createAggregatedClient(commands, CleanRoomsML);
