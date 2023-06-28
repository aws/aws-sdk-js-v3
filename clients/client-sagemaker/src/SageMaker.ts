// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddAssociationCommand,
  AddAssociationCommandInput,
  AddAssociationCommandOutput,
} from "./commands/AddAssociationCommand";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  AssociateTrialComponentCommand,
  AssociateTrialComponentCommandInput,
  AssociateTrialComponentCommandOutput,
} from "./commands/AssociateTrialComponentCommand";
import {
  BatchDescribeModelPackageCommand,
  BatchDescribeModelPackageCommandInput,
  BatchDescribeModelPackageCommandOutput,
} from "./commands/BatchDescribeModelPackageCommand";
import {
  CreateActionCommand,
  CreateActionCommandInput,
  CreateActionCommandOutput,
} from "./commands/CreateActionCommand";
import {
  CreateAlgorithmCommand,
  CreateAlgorithmCommandInput,
  CreateAlgorithmCommandOutput,
} from "./commands/CreateAlgorithmCommand";
import { CreateAppCommand, CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateAppImageConfigCommand,
  CreateAppImageConfigCommandInput,
  CreateAppImageConfigCommandOutput,
} from "./commands/CreateAppImageConfigCommand";
import {
  CreateArtifactCommand,
  CreateArtifactCommandInput,
  CreateArtifactCommandOutput,
} from "./commands/CreateArtifactCommand";
import {
  CreateAutoMLJobCommand,
  CreateAutoMLJobCommandInput,
  CreateAutoMLJobCommandOutput,
} from "./commands/CreateAutoMLJobCommand";
import {
  CreateAutoMLJobV2Command,
  CreateAutoMLJobV2CommandInput,
  CreateAutoMLJobV2CommandOutput,
} from "./commands/CreateAutoMLJobV2Command";
import {
  CreateCodeRepositoryCommand,
  CreateCodeRepositoryCommandInput,
  CreateCodeRepositoryCommandOutput,
} from "./commands/CreateCodeRepositoryCommand";
import {
  CreateCompilationJobCommand,
  CreateCompilationJobCommandInput,
  CreateCompilationJobCommandOutput,
} from "./commands/CreateCompilationJobCommand";
import {
  CreateContextCommand,
  CreateContextCommandInput,
  CreateContextCommandOutput,
} from "./commands/CreateContextCommand";
import {
  CreateDataQualityJobDefinitionCommand,
  CreateDataQualityJobDefinitionCommandInput,
  CreateDataQualityJobDefinitionCommandOutput,
} from "./commands/CreateDataQualityJobDefinitionCommand";
import {
  CreateDeviceFleetCommand,
  CreateDeviceFleetCommandInput,
  CreateDeviceFleetCommandOutput,
} from "./commands/CreateDeviceFleetCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateEdgeDeploymentPlanCommand,
  CreateEdgeDeploymentPlanCommandInput,
  CreateEdgeDeploymentPlanCommandOutput,
} from "./commands/CreateEdgeDeploymentPlanCommand";
import {
  CreateEdgeDeploymentStageCommand,
  CreateEdgeDeploymentStageCommandInput,
  CreateEdgeDeploymentStageCommandOutput,
} from "./commands/CreateEdgeDeploymentStageCommand";
import {
  CreateEdgePackagingJobCommand,
  CreateEdgePackagingJobCommandInput,
  CreateEdgePackagingJobCommandOutput,
} from "./commands/CreateEdgePackagingJobCommand";
import {
  CreateEndpointCommand,
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
} from "./commands/CreateEndpointCommand";
import {
  CreateEndpointConfigCommand,
  CreateEndpointConfigCommandInput,
  CreateEndpointConfigCommandOutput,
} from "./commands/CreateEndpointConfigCommand";
import {
  CreateExperimentCommand,
  CreateExperimentCommandInput,
  CreateExperimentCommandOutput,
} from "./commands/CreateExperimentCommand";
import {
  CreateFeatureGroupCommand,
  CreateFeatureGroupCommandInput,
  CreateFeatureGroupCommandOutput,
} from "./commands/CreateFeatureGroupCommand";
import {
  CreateFlowDefinitionCommand,
  CreateFlowDefinitionCommandInput,
  CreateFlowDefinitionCommandOutput,
} from "./commands/CreateFlowDefinitionCommand";
import { CreateHubCommand, CreateHubCommandInput, CreateHubCommandOutput } from "./commands/CreateHubCommand";
import {
  CreateHumanTaskUiCommand,
  CreateHumanTaskUiCommandInput,
  CreateHumanTaskUiCommandOutput,
} from "./commands/CreateHumanTaskUiCommand";
import {
  CreateHyperParameterTuningJobCommand,
  CreateHyperParameterTuningJobCommandInput,
  CreateHyperParameterTuningJobCommandOutput,
} from "./commands/CreateHyperParameterTuningJobCommand";
import { CreateImageCommand, CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import {
  CreateImageVersionCommand,
  CreateImageVersionCommandInput,
  CreateImageVersionCommandOutput,
} from "./commands/CreateImageVersionCommand";
import {
  CreateInferenceExperimentCommand,
  CreateInferenceExperimentCommandInput,
  CreateInferenceExperimentCommandOutput,
} from "./commands/CreateInferenceExperimentCommand";
import {
  CreateInferenceRecommendationsJobCommand,
  CreateInferenceRecommendationsJobCommandInput,
  CreateInferenceRecommendationsJobCommandOutput,
} from "./commands/CreateInferenceRecommendationsJobCommand";
import {
  CreateLabelingJobCommand,
  CreateLabelingJobCommandInput,
  CreateLabelingJobCommandOutput,
} from "./commands/CreateLabelingJobCommand";
import {
  CreateModelBiasJobDefinitionCommand,
  CreateModelBiasJobDefinitionCommandInput,
  CreateModelBiasJobDefinitionCommandOutput,
} from "./commands/CreateModelBiasJobDefinitionCommand";
import {
  CreateModelCardCommand,
  CreateModelCardCommandInput,
  CreateModelCardCommandOutput,
} from "./commands/CreateModelCardCommand";
import {
  CreateModelCardExportJobCommand,
  CreateModelCardExportJobCommandInput,
  CreateModelCardExportJobCommandOutput,
} from "./commands/CreateModelCardExportJobCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateModelExplainabilityJobDefinitionCommand,
  CreateModelExplainabilityJobDefinitionCommandInput,
  CreateModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/CreateModelExplainabilityJobDefinitionCommand";
import {
  CreateModelPackageCommand,
  CreateModelPackageCommandInput,
  CreateModelPackageCommandOutput,
} from "./commands/CreateModelPackageCommand";
import {
  CreateModelPackageGroupCommand,
  CreateModelPackageGroupCommandInput,
  CreateModelPackageGroupCommandOutput,
} from "./commands/CreateModelPackageGroupCommand";
import {
  CreateModelQualityJobDefinitionCommand,
  CreateModelQualityJobDefinitionCommandInput,
  CreateModelQualityJobDefinitionCommandOutput,
} from "./commands/CreateModelQualityJobDefinitionCommand";
import {
  CreateMonitoringScheduleCommand,
  CreateMonitoringScheduleCommandInput,
  CreateMonitoringScheduleCommandOutput,
} from "./commands/CreateMonitoringScheduleCommand";
import {
  CreateNotebookInstanceCommand,
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput,
} from "./commands/CreateNotebookInstanceCommand";
import {
  CreateNotebookInstanceLifecycleConfigCommand,
  CreateNotebookInstanceLifecycleConfigCommandInput,
  CreateNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/CreateNotebookInstanceLifecycleConfigCommand";
import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  CreatePresignedDomainUrlCommand,
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
} from "./commands/CreatePresignedDomainUrlCommand";
import {
  CreatePresignedNotebookInstanceUrlCommand,
  CreatePresignedNotebookInstanceUrlCommandInput,
  CreatePresignedNotebookInstanceUrlCommandOutput,
} from "./commands/CreatePresignedNotebookInstanceUrlCommand";
import {
  CreateProcessingJobCommand,
  CreateProcessingJobCommandInput,
  CreateProcessingJobCommandOutput,
} from "./commands/CreateProcessingJobCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import { CreateSpaceCommand, CreateSpaceCommandInput, CreateSpaceCommandOutput } from "./commands/CreateSpaceCommand";
import {
  CreateStudioLifecycleConfigCommand,
  CreateStudioLifecycleConfigCommandInput,
  CreateStudioLifecycleConfigCommandOutput,
} from "./commands/CreateStudioLifecycleConfigCommand";
import {
  CreateTrainingJobCommand,
  CreateTrainingJobCommandInput,
  CreateTrainingJobCommandOutput,
} from "./commands/CreateTrainingJobCommand";
import {
  CreateTransformJobCommand,
  CreateTransformJobCommandInput,
  CreateTransformJobCommandOutput,
} from "./commands/CreateTransformJobCommand";
import { CreateTrialCommand, CreateTrialCommandInput, CreateTrialCommandOutput } from "./commands/CreateTrialCommand";
import {
  CreateTrialComponentCommand,
  CreateTrialComponentCommandInput,
  CreateTrialComponentCommandOutput,
} from "./commands/CreateTrialComponentCommand";
import {
  CreateUserProfileCommand,
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
} from "./commands/CreateUserProfileCommand";
import {
  CreateWorkforceCommand,
  CreateWorkforceCommandInput,
  CreateWorkforceCommandOutput,
} from "./commands/CreateWorkforceCommand";
import {
  CreateWorkteamCommand,
  CreateWorkteamCommandInput,
  CreateWorkteamCommandOutput,
} from "./commands/CreateWorkteamCommand";
import {
  DeleteActionCommand,
  DeleteActionCommandInput,
  DeleteActionCommandOutput,
} from "./commands/DeleteActionCommand";
import {
  DeleteAlgorithmCommand,
  DeleteAlgorithmCommandInput,
  DeleteAlgorithmCommandOutput,
} from "./commands/DeleteAlgorithmCommand";
import { DeleteAppCommand, DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteAppImageConfigCommand,
  DeleteAppImageConfigCommandInput,
  DeleteAppImageConfigCommandOutput,
} from "./commands/DeleteAppImageConfigCommand";
import {
  DeleteArtifactCommand,
  DeleteArtifactCommandInput,
  DeleteArtifactCommandOutput,
} from "./commands/DeleteArtifactCommand";
import {
  DeleteAssociationCommand,
  DeleteAssociationCommandInput,
  DeleteAssociationCommandOutput,
} from "./commands/DeleteAssociationCommand";
import {
  DeleteCodeRepositoryCommand,
  DeleteCodeRepositoryCommandInput,
  DeleteCodeRepositoryCommandOutput,
} from "./commands/DeleteCodeRepositoryCommand";
import {
  DeleteContextCommand,
  DeleteContextCommandInput,
  DeleteContextCommandOutput,
} from "./commands/DeleteContextCommand";
import {
  DeleteDataQualityJobDefinitionCommand,
  DeleteDataQualityJobDefinitionCommandInput,
  DeleteDataQualityJobDefinitionCommandOutput,
} from "./commands/DeleteDataQualityJobDefinitionCommand";
import {
  DeleteDeviceFleetCommand,
  DeleteDeviceFleetCommandInput,
  DeleteDeviceFleetCommandOutput,
} from "./commands/DeleteDeviceFleetCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteEdgeDeploymentPlanCommand,
  DeleteEdgeDeploymentPlanCommandInput,
  DeleteEdgeDeploymentPlanCommandOutput,
} from "./commands/DeleteEdgeDeploymentPlanCommand";
import {
  DeleteEdgeDeploymentStageCommand,
  DeleteEdgeDeploymentStageCommandInput,
  DeleteEdgeDeploymentStageCommandOutput,
} from "./commands/DeleteEdgeDeploymentStageCommand";
import {
  DeleteEndpointCommand,
  DeleteEndpointCommandInput,
  DeleteEndpointCommandOutput,
} from "./commands/DeleteEndpointCommand";
import {
  DeleteEndpointConfigCommand,
  DeleteEndpointConfigCommandInput,
  DeleteEndpointConfigCommandOutput,
} from "./commands/DeleteEndpointConfigCommand";
import {
  DeleteExperimentCommand,
  DeleteExperimentCommandInput,
  DeleteExperimentCommandOutput,
} from "./commands/DeleteExperimentCommand";
import {
  DeleteFeatureGroupCommand,
  DeleteFeatureGroupCommandInput,
  DeleteFeatureGroupCommandOutput,
} from "./commands/DeleteFeatureGroupCommand";
import {
  DeleteFlowDefinitionCommand,
  DeleteFlowDefinitionCommandInput,
  DeleteFlowDefinitionCommandOutput,
} from "./commands/DeleteFlowDefinitionCommand";
import { DeleteHubCommand, DeleteHubCommandInput, DeleteHubCommandOutput } from "./commands/DeleteHubCommand";
import {
  DeleteHubContentCommand,
  DeleteHubContentCommandInput,
  DeleteHubContentCommandOutput,
} from "./commands/DeleteHubContentCommand";
import {
  DeleteHumanTaskUiCommand,
  DeleteHumanTaskUiCommandInput,
  DeleteHumanTaskUiCommandOutput,
} from "./commands/DeleteHumanTaskUiCommand";
import { DeleteImageCommand, DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import {
  DeleteImageVersionCommand,
  DeleteImageVersionCommandInput,
  DeleteImageVersionCommandOutput,
} from "./commands/DeleteImageVersionCommand";
import {
  DeleteInferenceExperimentCommand,
  DeleteInferenceExperimentCommandInput,
  DeleteInferenceExperimentCommandOutput,
} from "./commands/DeleteInferenceExperimentCommand";
import {
  DeleteModelBiasJobDefinitionCommand,
  DeleteModelBiasJobDefinitionCommandInput,
  DeleteModelBiasJobDefinitionCommandOutput,
} from "./commands/DeleteModelBiasJobDefinitionCommand";
import {
  DeleteModelCardCommand,
  DeleteModelCardCommandInput,
  DeleteModelCardCommandOutput,
} from "./commands/DeleteModelCardCommand";
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteModelExplainabilityJobDefinitionCommand,
  DeleteModelExplainabilityJobDefinitionCommandInput,
  DeleteModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/DeleteModelExplainabilityJobDefinitionCommand";
import {
  DeleteModelPackageCommand,
  DeleteModelPackageCommandInput,
  DeleteModelPackageCommandOutput,
} from "./commands/DeleteModelPackageCommand";
import {
  DeleteModelPackageGroupCommand,
  DeleteModelPackageGroupCommandInput,
  DeleteModelPackageGroupCommandOutput,
} from "./commands/DeleteModelPackageGroupCommand";
import {
  DeleteModelPackageGroupPolicyCommand,
  DeleteModelPackageGroupPolicyCommandInput,
  DeleteModelPackageGroupPolicyCommandOutput,
} from "./commands/DeleteModelPackageGroupPolicyCommand";
import {
  DeleteModelQualityJobDefinitionCommand,
  DeleteModelQualityJobDefinitionCommandInput,
  DeleteModelQualityJobDefinitionCommandOutput,
} from "./commands/DeleteModelQualityJobDefinitionCommand";
import {
  DeleteMonitoringScheduleCommand,
  DeleteMonitoringScheduleCommandInput,
  DeleteMonitoringScheduleCommandOutput,
} from "./commands/DeleteMonitoringScheduleCommand";
import {
  DeleteNotebookInstanceCommand,
  DeleteNotebookInstanceCommandInput,
  DeleteNotebookInstanceCommandOutput,
} from "./commands/DeleteNotebookInstanceCommand";
import {
  DeleteNotebookInstanceLifecycleConfigCommand,
  DeleteNotebookInstanceLifecycleConfigCommandInput,
  DeleteNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/DeleteNotebookInstanceLifecycleConfigCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import { DeleteSpaceCommand, DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "./commands/DeleteSpaceCommand";
import {
  DeleteStudioLifecycleConfigCommand,
  DeleteStudioLifecycleConfigCommandInput,
  DeleteStudioLifecycleConfigCommandOutput,
} from "./commands/DeleteStudioLifecycleConfigCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteTrialCommand, DeleteTrialCommandInput, DeleteTrialCommandOutput } from "./commands/DeleteTrialCommand";
import {
  DeleteTrialComponentCommand,
  DeleteTrialComponentCommandInput,
  DeleteTrialComponentCommandOutput,
} from "./commands/DeleteTrialComponentCommand";
import {
  DeleteUserProfileCommand,
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput,
} from "./commands/DeleteUserProfileCommand";
import {
  DeleteWorkforceCommand,
  DeleteWorkforceCommandInput,
  DeleteWorkforceCommandOutput,
} from "./commands/DeleteWorkforceCommand";
import {
  DeleteWorkteamCommand,
  DeleteWorkteamCommandInput,
  DeleteWorkteamCommandOutput,
} from "./commands/DeleteWorkteamCommand";
import {
  DeregisterDevicesCommand,
  DeregisterDevicesCommandInput,
  DeregisterDevicesCommandOutput,
} from "./commands/DeregisterDevicesCommand";
import {
  DescribeActionCommand,
  DescribeActionCommandInput,
  DescribeActionCommandOutput,
} from "./commands/DescribeActionCommand";
import {
  DescribeAlgorithmCommand,
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput,
} from "./commands/DescribeAlgorithmCommand";
import { DescribeAppCommand, DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import {
  DescribeAppImageConfigCommand,
  DescribeAppImageConfigCommandInput,
  DescribeAppImageConfigCommandOutput,
} from "./commands/DescribeAppImageConfigCommand";
import {
  DescribeArtifactCommand,
  DescribeArtifactCommandInput,
  DescribeArtifactCommandOutput,
} from "./commands/DescribeArtifactCommand";
import {
  DescribeAutoMLJobCommand,
  DescribeAutoMLJobCommandInput,
  DescribeAutoMLJobCommandOutput,
} from "./commands/DescribeAutoMLJobCommand";
import {
  DescribeAutoMLJobV2Command,
  DescribeAutoMLJobV2CommandInput,
  DescribeAutoMLJobV2CommandOutput,
} from "./commands/DescribeAutoMLJobV2Command";
import {
  DescribeCodeRepositoryCommand,
  DescribeCodeRepositoryCommandInput,
  DescribeCodeRepositoryCommandOutput,
} from "./commands/DescribeCodeRepositoryCommand";
import {
  DescribeCompilationJobCommand,
  DescribeCompilationJobCommandInput,
  DescribeCompilationJobCommandOutput,
} from "./commands/DescribeCompilationJobCommand";
import {
  DescribeContextCommand,
  DescribeContextCommandInput,
  DescribeContextCommandOutput,
} from "./commands/DescribeContextCommand";
import {
  DescribeDataQualityJobDefinitionCommand,
  DescribeDataQualityJobDefinitionCommandInput,
  DescribeDataQualityJobDefinitionCommandOutput,
} from "./commands/DescribeDataQualityJobDefinitionCommand";
import {
  DescribeDeviceCommand,
  DescribeDeviceCommandInput,
  DescribeDeviceCommandOutput,
} from "./commands/DescribeDeviceCommand";
import {
  DescribeDeviceFleetCommand,
  DescribeDeviceFleetCommandInput,
  DescribeDeviceFleetCommandOutput,
} from "./commands/DescribeDeviceFleetCommand";
import {
  DescribeDomainCommand,
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
} from "./commands/DescribeDomainCommand";
import {
  DescribeEdgeDeploymentPlanCommand,
  DescribeEdgeDeploymentPlanCommandInput,
  DescribeEdgeDeploymentPlanCommandOutput,
} from "./commands/DescribeEdgeDeploymentPlanCommand";
import {
  DescribeEdgePackagingJobCommand,
  DescribeEdgePackagingJobCommandInput,
  DescribeEdgePackagingJobCommandOutput,
} from "./commands/DescribeEdgePackagingJobCommand";
import {
  DescribeEndpointCommand,
  DescribeEndpointCommandInput,
  DescribeEndpointCommandOutput,
} from "./commands/DescribeEndpointCommand";
import {
  DescribeEndpointConfigCommand,
  DescribeEndpointConfigCommandInput,
  DescribeEndpointConfigCommandOutput,
} from "./commands/DescribeEndpointConfigCommand";
import {
  DescribeExperimentCommand,
  DescribeExperimentCommandInput,
  DescribeExperimentCommandOutput,
} from "./commands/DescribeExperimentCommand";
import {
  DescribeFeatureGroupCommand,
  DescribeFeatureGroupCommandInput,
  DescribeFeatureGroupCommandOutput,
} from "./commands/DescribeFeatureGroupCommand";
import {
  DescribeFeatureMetadataCommand,
  DescribeFeatureMetadataCommandInput,
  DescribeFeatureMetadataCommandOutput,
} from "./commands/DescribeFeatureMetadataCommand";
import {
  DescribeFlowDefinitionCommand,
  DescribeFlowDefinitionCommandInput,
  DescribeFlowDefinitionCommandOutput,
} from "./commands/DescribeFlowDefinitionCommand";
import { DescribeHubCommand, DescribeHubCommandInput, DescribeHubCommandOutput } from "./commands/DescribeHubCommand";
import {
  DescribeHubContentCommand,
  DescribeHubContentCommandInput,
  DescribeHubContentCommandOutput,
} from "./commands/DescribeHubContentCommand";
import {
  DescribeHumanTaskUiCommand,
  DescribeHumanTaskUiCommandInput,
  DescribeHumanTaskUiCommandOutput,
} from "./commands/DescribeHumanTaskUiCommand";
import {
  DescribeHyperParameterTuningJobCommand,
  DescribeHyperParameterTuningJobCommandInput,
  DescribeHyperParameterTuningJobCommandOutput,
} from "./commands/DescribeHyperParameterTuningJobCommand";
import {
  DescribeImageCommand,
  DescribeImageCommandInput,
  DescribeImageCommandOutput,
} from "./commands/DescribeImageCommand";
import {
  DescribeImageVersionCommand,
  DescribeImageVersionCommandInput,
  DescribeImageVersionCommandOutput,
} from "./commands/DescribeImageVersionCommand";
import {
  DescribeInferenceExperimentCommand,
  DescribeInferenceExperimentCommandInput,
  DescribeInferenceExperimentCommandOutput,
} from "./commands/DescribeInferenceExperimentCommand";
import {
  DescribeInferenceRecommendationsJobCommand,
  DescribeInferenceRecommendationsJobCommandInput,
  DescribeInferenceRecommendationsJobCommandOutput,
} from "./commands/DescribeInferenceRecommendationsJobCommand";
import {
  DescribeLabelingJobCommand,
  DescribeLabelingJobCommandInput,
  DescribeLabelingJobCommandOutput,
} from "./commands/DescribeLabelingJobCommand";
import {
  DescribeLineageGroupCommand,
  DescribeLineageGroupCommandInput,
  DescribeLineageGroupCommandOutput,
} from "./commands/DescribeLineageGroupCommand";
import {
  DescribeModelBiasJobDefinitionCommand,
  DescribeModelBiasJobDefinitionCommandInput,
  DescribeModelBiasJobDefinitionCommandOutput,
} from "./commands/DescribeModelBiasJobDefinitionCommand";
import {
  DescribeModelCardCommand,
  DescribeModelCardCommandInput,
  DescribeModelCardCommandOutput,
} from "./commands/DescribeModelCardCommand";
import {
  DescribeModelCardExportJobCommand,
  DescribeModelCardExportJobCommandInput,
  DescribeModelCardExportJobCommandOutput,
} from "./commands/DescribeModelCardExportJobCommand";
import {
  DescribeModelCommand,
  DescribeModelCommandInput,
  DescribeModelCommandOutput,
} from "./commands/DescribeModelCommand";
import {
  DescribeModelExplainabilityJobDefinitionCommand,
  DescribeModelExplainabilityJobDefinitionCommandInput,
  DescribeModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/DescribeModelExplainabilityJobDefinitionCommand";
import {
  DescribeModelPackageCommand,
  DescribeModelPackageCommandInput,
  DescribeModelPackageCommandOutput,
} from "./commands/DescribeModelPackageCommand";
import {
  DescribeModelPackageGroupCommand,
  DescribeModelPackageGroupCommandInput,
  DescribeModelPackageGroupCommandOutput,
} from "./commands/DescribeModelPackageGroupCommand";
import {
  DescribeModelQualityJobDefinitionCommand,
  DescribeModelQualityJobDefinitionCommandInput,
  DescribeModelQualityJobDefinitionCommandOutput,
} from "./commands/DescribeModelQualityJobDefinitionCommand";
import {
  DescribeMonitoringScheduleCommand,
  DescribeMonitoringScheduleCommandInput,
  DescribeMonitoringScheduleCommandOutput,
} from "./commands/DescribeMonitoringScheduleCommand";
import {
  DescribeNotebookInstanceCommand,
  DescribeNotebookInstanceCommandInput,
  DescribeNotebookInstanceCommandOutput,
} from "./commands/DescribeNotebookInstanceCommand";
import {
  DescribeNotebookInstanceLifecycleConfigCommand,
  DescribeNotebookInstanceLifecycleConfigCommandInput,
  DescribeNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/DescribeNotebookInstanceLifecycleConfigCommand";
import {
  DescribePipelineCommand,
  DescribePipelineCommandInput,
  DescribePipelineCommandOutput,
} from "./commands/DescribePipelineCommand";
import {
  DescribePipelineDefinitionForExecutionCommand,
  DescribePipelineDefinitionForExecutionCommandInput,
  DescribePipelineDefinitionForExecutionCommandOutput,
} from "./commands/DescribePipelineDefinitionForExecutionCommand";
import {
  DescribePipelineExecutionCommand,
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
} from "./commands/DescribePipelineExecutionCommand";
import {
  DescribeProcessingJobCommand,
  DescribeProcessingJobCommandInput,
  DescribeProcessingJobCommandOutput,
} from "./commands/DescribeProcessingJobCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  DescribeSpaceCommand,
  DescribeSpaceCommandInput,
  DescribeSpaceCommandOutput,
} from "./commands/DescribeSpaceCommand";
import {
  DescribeStudioLifecycleConfigCommand,
  DescribeStudioLifecycleConfigCommandInput,
  DescribeStudioLifecycleConfigCommandOutput,
} from "./commands/DescribeStudioLifecycleConfigCommand";
import {
  DescribeSubscribedWorkteamCommand,
  DescribeSubscribedWorkteamCommandInput,
  DescribeSubscribedWorkteamCommandOutput,
} from "./commands/DescribeSubscribedWorkteamCommand";
import {
  DescribeTrainingJobCommand,
  DescribeTrainingJobCommandInput,
  DescribeTrainingJobCommandOutput,
} from "./commands/DescribeTrainingJobCommand";
import {
  DescribeTransformJobCommand,
  DescribeTransformJobCommandInput,
  DescribeTransformJobCommandOutput,
} from "./commands/DescribeTransformJobCommand";
import {
  DescribeTrialCommand,
  DescribeTrialCommandInput,
  DescribeTrialCommandOutput,
} from "./commands/DescribeTrialCommand";
import {
  DescribeTrialComponentCommand,
  DescribeTrialComponentCommandInput,
  DescribeTrialComponentCommandOutput,
} from "./commands/DescribeTrialComponentCommand";
import {
  DescribeUserProfileCommand,
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "./commands/DescribeUserProfileCommand";
import {
  DescribeWorkforceCommand,
  DescribeWorkforceCommandInput,
  DescribeWorkforceCommandOutput,
} from "./commands/DescribeWorkforceCommand";
import {
  DescribeWorkteamCommand,
  DescribeWorkteamCommandInput,
  DescribeWorkteamCommandOutput,
} from "./commands/DescribeWorkteamCommand";
import {
  DisableSagemakerServicecatalogPortfolioCommand,
  DisableSagemakerServicecatalogPortfolioCommandInput,
  DisableSagemakerServicecatalogPortfolioCommandOutput,
} from "./commands/DisableSagemakerServicecatalogPortfolioCommand";
import {
  DisassociateTrialComponentCommand,
  DisassociateTrialComponentCommandInput,
  DisassociateTrialComponentCommandOutput,
} from "./commands/DisassociateTrialComponentCommand";
import {
  EnableSagemakerServicecatalogPortfolioCommand,
  EnableSagemakerServicecatalogPortfolioCommandInput,
  EnableSagemakerServicecatalogPortfolioCommandOutput,
} from "./commands/EnableSagemakerServicecatalogPortfolioCommand";
import {
  GetDeviceFleetReportCommand,
  GetDeviceFleetReportCommandInput,
  GetDeviceFleetReportCommandOutput,
} from "./commands/GetDeviceFleetReportCommand";
import {
  GetLineageGroupPolicyCommand,
  GetLineageGroupPolicyCommandInput,
  GetLineageGroupPolicyCommandOutput,
} from "./commands/GetLineageGroupPolicyCommand";
import {
  GetModelPackageGroupPolicyCommand,
  GetModelPackageGroupPolicyCommandInput,
  GetModelPackageGroupPolicyCommandOutput,
} from "./commands/GetModelPackageGroupPolicyCommand";
import {
  GetSagemakerServicecatalogPortfolioStatusCommand,
  GetSagemakerServicecatalogPortfolioStatusCommandInput,
  GetSagemakerServicecatalogPortfolioStatusCommandOutput,
} from "./commands/GetSagemakerServicecatalogPortfolioStatusCommand";
import {
  GetSearchSuggestionsCommand,
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput,
} from "./commands/GetSearchSuggestionsCommand";
import {
  ImportHubContentCommand,
  ImportHubContentCommandInput,
  ImportHubContentCommandOutput,
} from "./commands/ImportHubContentCommand";
import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import {
  ListAlgorithmsCommand,
  ListAlgorithmsCommandInput,
  ListAlgorithmsCommandOutput,
} from "./commands/ListAlgorithmsCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import {
  ListAppImageConfigsCommand,
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput,
} from "./commands/ListAppImageConfigsCommand";
import { ListAppsCommand, ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "./commands/ListArtifactsCommand";
import {
  ListAssociationsCommand,
  ListAssociationsCommandInput,
  ListAssociationsCommandOutput,
} from "./commands/ListAssociationsCommand";
import {
  ListAutoMLJobsCommand,
  ListAutoMLJobsCommandInput,
  ListAutoMLJobsCommandOutput,
} from "./commands/ListAutoMLJobsCommand";
import {
  ListCandidatesForAutoMLJobCommand,
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
} from "./commands/ListCandidatesForAutoMLJobCommand";
import {
  ListCodeRepositoriesCommand,
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput,
} from "./commands/ListCodeRepositoriesCommand";
import {
  ListCompilationJobsCommand,
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
} from "./commands/ListCompilationJobsCommand";
import {
  ListContextsCommand,
  ListContextsCommandInput,
  ListContextsCommandOutput,
} from "./commands/ListContextsCommand";
import {
  ListDataQualityJobDefinitionsCommand,
  ListDataQualityJobDefinitionsCommandInput,
  ListDataQualityJobDefinitionsCommandOutput,
} from "./commands/ListDataQualityJobDefinitionsCommand";
import {
  ListDeviceFleetsCommand,
  ListDeviceFleetsCommandInput,
  ListDeviceFleetsCommandOutput,
} from "./commands/ListDeviceFleetsCommand";
import { ListDevicesCommand, ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListEdgeDeploymentPlansCommand,
  ListEdgeDeploymentPlansCommandInput,
  ListEdgeDeploymentPlansCommandOutput,
} from "./commands/ListEdgeDeploymentPlansCommand";
import {
  ListEdgePackagingJobsCommand,
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
} from "./commands/ListEdgePackagingJobsCommand";
import {
  ListEndpointConfigsCommand,
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput,
} from "./commands/ListEndpointConfigsCommand";
import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "./commands/ListEndpointsCommand";
import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "./commands/ListExperimentsCommand";
import {
  ListFeatureGroupsCommand,
  ListFeatureGroupsCommandInput,
  ListFeatureGroupsCommandOutput,
} from "./commands/ListFeatureGroupsCommand";
import {
  ListFlowDefinitionsCommand,
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput,
} from "./commands/ListFlowDefinitionsCommand";
import {
  ListHubContentsCommand,
  ListHubContentsCommandInput,
  ListHubContentsCommandOutput,
} from "./commands/ListHubContentsCommand";
import {
  ListHubContentVersionsCommand,
  ListHubContentVersionsCommandInput,
  ListHubContentVersionsCommandOutput,
} from "./commands/ListHubContentVersionsCommand";
import { ListHubsCommand, ListHubsCommandInput, ListHubsCommandOutput } from "./commands/ListHubsCommand";
import {
  ListHumanTaskUisCommand,
  ListHumanTaskUisCommandInput,
  ListHumanTaskUisCommandOutput,
} from "./commands/ListHumanTaskUisCommand";
import {
  ListHyperParameterTuningJobsCommand,
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput,
} from "./commands/ListHyperParameterTuningJobsCommand";
import { ListImagesCommand, ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import {
  ListImageVersionsCommand,
  ListImageVersionsCommandInput,
  ListImageVersionsCommandOutput,
} from "./commands/ListImageVersionsCommand";
import {
  ListInferenceExperimentsCommand,
  ListInferenceExperimentsCommandInput,
  ListInferenceExperimentsCommandOutput,
} from "./commands/ListInferenceExperimentsCommand";
import {
  ListInferenceRecommendationsJobsCommand,
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput,
} from "./commands/ListInferenceRecommendationsJobsCommand";
import {
  ListInferenceRecommendationsJobStepsCommand,
  ListInferenceRecommendationsJobStepsCommandInput,
  ListInferenceRecommendationsJobStepsCommandOutput,
} from "./commands/ListInferenceRecommendationsJobStepsCommand";
import {
  ListLabelingJobsCommand,
  ListLabelingJobsCommandInput,
  ListLabelingJobsCommandOutput,
} from "./commands/ListLabelingJobsCommand";
import {
  ListLabelingJobsForWorkteamCommand,
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
} from "./commands/ListLabelingJobsForWorkteamCommand";
import {
  ListLineageGroupsCommand,
  ListLineageGroupsCommandInput,
  ListLineageGroupsCommandOutput,
} from "./commands/ListLineageGroupsCommand";
import {
  ListModelBiasJobDefinitionsCommand,
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput,
} from "./commands/ListModelBiasJobDefinitionsCommand";
import {
  ListModelCardExportJobsCommand,
  ListModelCardExportJobsCommandInput,
  ListModelCardExportJobsCommandOutput,
} from "./commands/ListModelCardExportJobsCommand";
import {
  ListModelCardsCommand,
  ListModelCardsCommandInput,
  ListModelCardsCommandOutput,
} from "./commands/ListModelCardsCommand";
import {
  ListModelCardVersionsCommand,
  ListModelCardVersionsCommandInput,
  ListModelCardVersionsCommandOutput,
} from "./commands/ListModelCardVersionsCommand";
import {
  ListModelExplainabilityJobDefinitionsCommand,
  ListModelExplainabilityJobDefinitionsCommandInput,
  ListModelExplainabilityJobDefinitionsCommandOutput,
} from "./commands/ListModelExplainabilityJobDefinitionsCommand";
import {
  ListModelMetadataCommand,
  ListModelMetadataCommandInput,
  ListModelMetadataCommandOutput,
} from "./commands/ListModelMetadataCommand";
import {
  ListModelPackageGroupsCommand,
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
} from "./commands/ListModelPackageGroupsCommand";
import {
  ListModelPackagesCommand,
  ListModelPackagesCommandInput,
  ListModelPackagesCommandOutput,
} from "./commands/ListModelPackagesCommand";
import {
  ListModelQualityJobDefinitionsCommand,
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
} from "./commands/ListModelQualityJobDefinitionsCommand";
import { ListModelsCommand, ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import {
  ListMonitoringAlertHistoryCommand,
  ListMonitoringAlertHistoryCommandInput,
  ListMonitoringAlertHistoryCommandOutput,
} from "./commands/ListMonitoringAlertHistoryCommand";
import {
  ListMonitoringAlertsCommand,
  ListMonitoringAlertsCommandInput,
  ListMonitoringAlertsCommandOutput,
} from "./commands/ListMonitoringAlertsCommand";
import {
  ListMonitoringExecutionsCommand,
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
} from "./commands/ListMonitoringExecutionsCommand";
import {
  ListMonitoringSchedulesCommand,
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
} from "./commands/ListMonitoringSchedulesCommand";
import {
  ListNotebookInstanceLifecycleConfigsCommand,
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
} from "./commands/ListNotebookInstanceLifecycleConfigsCommand";
import {
  ListNotebookInstancesCommand,
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput,
} from "./commands/ListNotebookInstancesCommand";
import {
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "./commands/ListPipelineExecutionsCommand";
import {
  ListPipelineExecutionStepsCommand,
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
} from "./commands/ListPipelineExecutionStepsCommand";
import {
  ListPipelineParametersForExecutionCommand,
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
} from "./commands/ListPipelineParametersForExecutionCommand";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "./commands/ListPipelinesCommand";
import {
  ListProcessingJobsCommand,
  ListProcessingJobsCommandInput,
  ListProcessingJobsCommandOutput,
} from "./commands/ListProcessingJobsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import { ListSpacesCommand, ListSpacesCommandInput, ListSpacesCommandOutput } from "./commands/ListSpacesCommand";
import {
  ListStageDevicesCommand,
  ListStageDevicesCommandInput,
  ListStageDevicesCommandOutput,
} from "./commands/ListStageDevicesCommand";
import {
  ListStudioLifecycleConfigsCommand,
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
} from "./commands/ListStudioLifecycleConfigsCommand";
import {
  ListSubscribedWorkteamsCommand,
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
} from "./commands/ListSubscribedWorkteamsCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ListTrainingJobsCommand,
  ListTrainingJobsCommandInput,
  ListTrainingJobsCommandOutput,
} from "./commands/ListTrainingJobsCommand";
import {
  ListTrainingJobsForHyperParameterTuningJobCommand,
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
} from "./commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import {
  ListTransformJobsCommand,
  ListTransformJobsCommandInput,
  ListTransformJobsCommandOutput,
} from "./commands/ListTransformJobsCommand";
import {
  ListTrialComponentsCommand,
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
} from "./commands/ListTrialComponentsCommand";
import { ListTrialsCommand, ListTrialsCommandInput, ListTrialsCommandOutput } from "./commands/ListTrialsCommand";
import {
  ListUserProfilesCommand,
  ListUserProfilesCommandInput,
  ListUserProfilesCommandOutput,
} from "./commands/ListUserProfilesCommand";
import {
  ListWorkforcesCommand,
  ListWorkforcesCommandInput,
  ListWorkforcesCommandOutput,
} from "./commands/ListWorkforcesCommand";
import {
  ListWorkteamsCommand,
  ListWorkteamsCommandInput,
  ListWorkteamsCommandOutput,
} from "./commands/ListWorkteamsCommand";
import {
  PutModelPackageGroupPolicyCommand,
  PutModelPackageGroupPolicyCommandInput,
  PutModelPackageGroupPolicyCommandOutput,
} from "./commands/PutModelPackageGroupPolicyCommand";
import {
  QueryLineageCommand,
  QueryLineageCommandInput,
  QueryLineageCommandOutput,
} from "./commands/QueryLineageCommand";
import {
  RegisterDevicesCommand,
  RegisterDevicesCommandInput,
  RegisterDevicesCommandOutput,
} from "./commands/RegisterDevicesCommand";
import {
  RenderUiTemplateCommand,
  RenderUiTemplateCommandInput,
  RenderUiTemplateCommandOutput,
} from "./commands/RenderUiTemplateCommand";
import {
  RetryPipelineExecutionCommand,
  RetryPipelineExecutionCommandInput,
  RetryPipelineExecutionCommandOutput,
} from "./commands/RetryPipelineExecutionCommand";
import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import {
  SendPipelineExecutionStepFailureCommand,
  SendPipelineExecutionStepFailureCommandInput,
  SendPipelineExecutionStepFailureCommandOutput,
} from "./commands/SendPipelineExecutionStepFailureCommand";
import {
  SendPipelineExecutionStepSuccessCommand,
  SendPipelineExecutionStepSuccessCommandInput,
  SendPipelineExecutionStepSuccessCommandOutput,
} from "./commands/SendPipelineExecutionStepSuccessCommand";
import {
  StartEdgeDeploymentStageCommand,
  StartEdgeDeploymentStageCommandInput,
  StartEdgeDeploymentStageCommandOutput,
} from "./commands/StartEdgeDeploymentStageCommand";
import {
  StartInferenceExperimentCommand,
  StartInferenceExperimentCommandInput,
  StartInferenceExperimentCommandOutput,
} from "./commands/StartInferenceExperimentCommand";
import {
  StartMonitoringScheduleCommand,
  StartMonitoringScheduleCommandInput,
  StartMonitoringScheduleCommandOutput,
} from "./commands/StartMonitoringScheduleCommand";
import {
  StartNotebookInstanceCommand,
  StartNotebookInstanceCommandInput,
  StartNotebookInstanceCommandOutput,
} from "./commands/StartNotebookInstanceCommand";
import {
  StartPipelineExecutionCommand,
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "./commands/StartPipelineExecutionCommand";
import {
  StopAutoMLJobCommand,
  StopAutoMLJobCommandInput,
  StopAutoMLJobCommandOutput,
} from "./commands/StopAutoMLJobCommand";
import {
  StopCompilationJobCommand,
  StopCompilationJobCommandInput,
  StopCompilationJobCommandOutput,
} from "./commands/StopCompilationJobCommand";
import {
  StopEdgeDeploymentStageCommand,
  StopEdgeDeploymentStageCommandInput,
  StopEdgeDeploymentStageCommandOutput,
} from "./commands/StopEdgeDeploymentStageCommand";
import {
  StopEdgePackagingJobCommand,
  StopEdgePackagingJobCommandInput,
  StopEdgePackagingJobCommandOutput,
} from "./commands/StopEdgePackagingJobCommand";
import {
  StopHyperParameterTuningJobCommand,
  StopHyperParameterTuningJobCommandInput,
  StopHyperParameterTuningJobCommandOutput,
} from "./commands/StopHyperParameterTuningJobCommand";
import {
  StopInferenceExperimentCommand,
  StopInferenceExperimentCommandInput,
  StopInferenceExperimentCommandOutput,
} from "./commands/StopInferenceExperimentCommand";
import {
  StopInferenceRecommendationsJobCommand,
  StopInferenceRecommendationsJobCommandInput,
  StopInferenceRecommendationsJobCommandOutput,
} from "./commands/StopInferenceRecommendationsJobCommand";
import {
  StopLabelingJobCommand,
  StopLabelingJobCommandInput,
  StopLabelingJobCommandOutput,
} from "./commands/StopLabelingJobCommand";
import {
  StopMonitoringScheduleCommand,
  StopMonitoringScheduleCommandInput,
  StopMonitoringScheduleCommandOutput,
} from "./commands/StopMonitoringScheduleCommand";
import {
  StopNotebookInstanceCommand,
  StopNotebookInstanceCommandInput,
  StopNotebookInstanceCommandOutput,
} from "./commands/StopNotebookInstanceCommand";
import {
  StopPipelineExecutionCommand,
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "./commands/StopPipelineExecutionCommand";
import {
  StopProcessingJobCommand,
  StopProcessingJobCommandInput,
  StopProcessingJobCommandOutput,
} from "./commands/StopProcessingJobCommand";
import {
  StopTrainingJobCommand,
  StopTrainingJobCommandInput,
  StopTrainingJobCommandOutput,
} from "./commands/StopTrainingJobCommand";
import {
  StopTransformJobCommand,
  StopTransformJobCommandInput,
  StopTransformJobCommandOutput,
} from "./commands/StopTransformJobCommand";
import {
  UpdateActionCommand,
  UpdateActionCommandInput,
  UpdateActionCommandOutput,
} from "./commands/UpdateActionCommand";
import {
  UpdateAppImageConfigCommand,
  UpdateAppImageConfigCommandInput,
  UpdateAppImageConfigCommandOutput,
} from "./commands/UpdateAppImageConfigCommand";
import {
  UpdateArtifactCommand,
  UpdateArtifactCommandInput,
  UpdateArtifactCommandOutput,
} from "./commands/UpdateArtifactCommand";
import {
  UpdateCodeRepositoryCommand,
  UpdateCodeRepositoryCommandInput,
  UpdateCodeRepositoryCommandOutput,
} from "./commands/UpdateCodeRepositoryCommand";
import {
  UpdateContextCommand,
  UpdateContextCommandInput,
  UpdateContextCommandOutput,
} from "./commands/UpdateContextCommand";
import {
  UpdateDeviceFleetCommand,
  UpdateDeviceFleetCommandInput,
  UpdateDeviceFleetCommandOutput,
} from "./commands/UpdateDeviceFleetCommand";
import {
  UpdateDevicesCommand,
  UpdateDevicesCommandInput,
  UpdateDevicesCommandOutput,
} from "./commands/UpdateDevicesCommand";
import {
  UpdateDomainCommand,
  UpdateDomainCommandInput,
  UpdateDomainCommandOutput,
} from "./commands/UpdateDomainCommand";
import {
  UpdateEndpointCommand,
  UpdateEndpointCommandInput,
  UpdateEndpointCommandOutput,
} from "./commands/UpdateEndpointCommand";
import {
  UpdateEndpointWeightsAndCapacitiesCommand,
  UpdateEndpointWeightsAndCapacitiesCommandInput,
  UpdateEndpointWeightsAndCapacitiesCommandOutput,
} from "./commands/UpdateEndpointWeightsAndCapacitiesCommand";
import {
  UpdateExperimentCommand,
  UpdateExperimentCommandInput,
  UpdateExperimentCommandOutput,
} from "./commands/UpdateExperimentCommand";
import {
  UpdateFeatureGroupCommand,
  UpdateFeatureGroupCommandInput,
  UpdateFeatureGroupCommandOutput,
} from "./commands/UpdateFeatureGroupCommand";
import {
  UpdateFeatureMetadataCommand,
  UpdateFeatureMetadataCommandInput,
  UpdateFeatureMetadataCommandOutput,
} from "./commands/UpdateFeatureMetadataCommand";
import { UpdateHubCommand, UpdateHubCommandInput, UpdateHubCommandOutput } from "./commands/UpdateHubCommand";
import { UpdateImageCommand, UpdateImageCommandInput, UpdateImageCommandOutput } from "./commands/UpdateImageCommand";
import {
  UpdateImageVersionCommand,
  UpdateImageVersionCommandInput,
  UpdateImageVersionCommandOutput,
} from "./commands/UpdateImageVersionCommand";
import {
  UpdateInferenceExperimentCommand,
  UpdateInferenceExperimentCommandInput,
  UpdateInferenceExperimentCommandOutput,
} from "./commands/UpdateInferenceExperimentCommand";
import {
  UpdateModelCardCommand,
  UpdateModelCardCommandInput,
  UpdateModelCardCommandOutput,
} from "./commands/UpdateModelCardCommand";
import {
  UpdateModelPackageCommand,
  UpdateModelPackageCommandInput,
  UpdateModelPackageCommandOutput,
} from "./commands/UpdateModelPackageCommand";
import {
  UpdateMonitoringAlertCommand,
  UpdateMonitoringAlertCommandInput,
  UpdateMonitoringAlertCommandOutput,
} from "./commands/UpdateMonitoringAlertCommand";
import {
  UpdateMonitoringScheduleCommand,
  UpdateMonitoringScheduleCommandInput,
  UpdateMonitoringScheduleCommandOutput,
} from "./commands/UpdateMonitoringScheduleCommand";
import {
  UpdateNotebookInstanceCommand,
  UpdateNotebookInstanceCommandInput,
  UpdateNotebookInstanceCommandOutput,
} from "./commands/UpdateNotebookInstanceCommand";
import {
  UpdateNotebookInstanceLifecycleConfigCommand,
  UpdateNotebookInstanceLifecycleConfigCommandInput,
  UpdateNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/UpdateNotebookInstanceLifecycleConfigCommand";
import {
  UpdatePipelineCommand,
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
} from "./commands/UpdatePipelineCommand";
import {
  UpdatePipelineExecutionCommand,
  UpdatePipelineExecutionCommandInput,
  UpdatePipelineExecutionCommandOutput,
} from "./commands/UpdatePipelineExecutionCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import { UpdateSpaceCommand, UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "./commands/UpdateSpaceCommand";
import {
  UpdateTrainingJobCommand,
  UpdateTrainingJobCommandInput,
  UpdateTrainingJobCommandOutput,
} from "./commands/UpdateTrainingJobCommand";
import { UpdateTrialCommand, UpdateTrialCommandInput, UpdateTrialCommandOutput } from "./commands/UpdateTrialCommand";
import {
  UpdateTrialComponentCommand,
  UpdateTrialComponentCommandInput,
  UpdateTrialComponentCommandOutput,
} from "./commands/UpdateTrialComponentCommand";
import {
  UpdateUserProfileCommand,
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
} from "./commands/UpdateUserProfileCommand";
import {
  UpdateWorkforceCommand,
  UpdateWorkforceCommandInput,
  UpdateWorkforceCommandOutput,
} from "./commands/UpdateWorkforceCommand";
import {
  UpdateWorkteamCommand,
  UpdateWorkteamCommandInput,
  UpdateWorkteamCommandOutput,
} from "./commands/UpdateWorkteamCommand";
import { SageMakerClient, SageMakerClientConfig } from "./SageMakerClient";

const commands = {
  AddAssociationCommand,
  AddTagsCommand,
  AssociateTrialComponentCommand,
  BatchDescribeModelPackageCommand,
  CreateActionCommand,
  CreateAlgorithmCommand,
  CreateAppCommand,
  CreateAppImageConfigCommand,
  CreateArtifactCommand,
  CreateAutoMLJobCommand,
  CreateAutoMLJobV2Command,
  CreateCodeRepositoryCommand,
  CreateCompilationJobCommand,
  CreateContextCommand,
  CreateDataQualityJobDefinitionCommand,
  CreateDeviceFleetCommand,
  CreateDomainCommand,
  CreateEdgeDeploymentPlanCommand,
  CreateEdgeDeploymentStageCommand,
  CreateEdgePackagingJobCommand,
  CreateEndpointCommand,
  CreateEndpointConfigCommand,
  CreateExperimentCommand,
  CreateFeatureGroupCommand,
  CreateFlowDefinitionCommand,
  CreateHubCommand,
  CreateHumanTaskUiCommand,
  CreateHyperParameterTuningJobCommand,
  CreateImageCommand,
  CreateImageVersionCommand,
  CreateInferenceExperimentCommand,
  CreateInferenceRecommendationsJobCommand,
  CreateLabelingJobCommand,
  CreateModelCommand,
  CreateModelBiasJobDefinitionCommand,
  CreateModelCardCommand,
  CreateModelCardExportJobCommand,
  CreateModelExplainabilityJobDefinitionCommand,
  CreateModelPackageCommand,
  CreateModelPackageGroupCommand,
  CreateModelQualityJobDefinitionCommand,
  CreateMonitoringScheduleCommand,
  CreateNotebookInstanceCommand,
  CreateNotebookInstanceLifecycleConfigCommand,
  CreatePipelineCommand,
  CreatePresignedDomainUrlCommand,
  CreatePresignedNotebookInstanceUrlCommand,
  CreateProcessingJobCommand,
  CreateProjectCommand,
  CreateSpaceCommand,
  CreateStudioLifecycleConfigCommand,
  CreateTrainingJobCommand,
  CreateTransformJobCommand,
  CreateTrialCommand,
  CreateTrialComponentCommand,
  CreateUserProfileCommand,
  CreateWorkforceCommand,
  CreateWorkteamCommand,
  DeleteActionCommand,
  DeleteAlgorithmCommand,
  DeleteAppCommand,
  DeleteAppImageConfigCommand,
  DeleteArtifactCommand,
  DeleteAssociationCommand,
  DeleteCodeRepositoryCommand,
  DeleteContextCommand,
  DeleteDataQualityJobDefinitionCommand,
  DeleteDeviceFleetCommand,
  DeleteDomainCommand,
  DeleteEdgeDeploymentPlanCommand,
  DeleteEdgeDeploymentStageCommand,
  DeleteEndpointCommand,
  DeleteEndpointConfigCommand,
  DeleteExperimentCommand,
  DeleteFeatureGroupCommand,
  DeleteFlowDefinitionCommand,
  DeleteHubCommand,
  DeleteHubContentCommand,
  DeleteHumanTaskUiCommand,
  DeleteImageCommand,
  DeleteImageVersionCommand,
  DeleteInferenceExperimentCommand,
  DeleteModelCommand,
  DeleteModelBiasJobDefinitionCommand,
  DeleteModelCardCommand,
  DeleteModelExplainabilityJobDefinitionCommand,
  DeleteModelPackageCommand,
  DeleteModelPackageGroupCommand,
  DeleteModelPackageGroupPolicyCommand,
  DeleteModelQualityJobDefinitionCommand,
  DeleteMonitoringScheduleCommand,
  DeleteNotebookInstanceCommand,
  DeleteNotebookInstanceLifecycleConfigCommand,
  DeletePipelineCommand,
  DeleteProjectCommand,
  DeleteSpaceCommand,
  DeleteStudioLifecycleConfigCommand,
  DeleteTagsCommand,
  DeleteTrialCommand,
  DeleteTrialComponentCommand,
  DeleteUserProfileCommand,
  DeleteWorkforceCommand,
  DeleteWorkteamCommand,
  DeregisterDevicesCommand,
  DescribeActionCommand,
  DescribeAlgorithmCommand,
  DescribeAppCommand,
  DescribeAppImageConfigCommand,
  DescribeArtifactCommand,
  DescribeAutoMLJobCommand,
  DescribeAutoMLJobV2Command,
  DescribeCodeRepositoryCommand,
  DescribeCompilationJobCommand,
  DescribeContextCommand,
  DescribeDataQualityJobDefinitionCommand,
  DescribeDeviceCommand,
  DescribeDeviceFleetCommand,
  DescribeDomainCommand,
  DescribeEdgeDeploymentPlanCommand,
  DescribeEdgePackagingJobCommand,
  DescribeEndpointCommand,
  DescribeEndpointConfigCommand,
  DescribeExperimentCommand,
  DescribeFeatureGroupCommand,
  DescribeFeatureMetadataCommand,
  DescribeFlowDefinitionCommand,
  DescribeHubCommand,
  DescribeHubContentCommand,
  DescribeHumanTaskUiCommand,
  DescribeHyperParameterTuningJobCommand,
  DescribeImageCommand,
  DescribeImageVersionCommand,
  DescribeInferenceExperimentCommand,
  DescribeInferenceRecommendationsJobCommand,
  DescribeLabelingJobCommand,
  DescribeLineageGroupCommand,
  DescribeModelCommand,
  DescribeModelBiasJobDefinitionCommand,
  DescribeModelCardCommand,
  DescribeModelCardExportJobCommand,
  DescribeModelExplainabilityJobDefinitionCommand,
  DescribeModelPackageCommand,
  DescribeModelPackageGroupCommand,
  DescribeModelQualityJobDefinitionCommand,
  DescribeMonitoringScheduleCommand,
  DescribeNotebookInstanceCommand,
  DescribeNotebookInstanceLifecycleConfigCommand,
  DescribePipelineCommand,
  DescribePipelineDefinitionForExecutionCommand,
  DescribePipelineExecutionCommand,
  DescribeProcessingJobCommand,
  DescribeProjectCommand,
  DescribeSpaceCommand,
  DescribeStudioLifecycleConfigCommand,
  DescribeSubscribedWorkteamCommand,
  DescribeTrainingJobCommand,
  DescribeTransformJobCommand,
  DescribeTrialCommand,
  DescribeTrialComponentCommand,
  DescribeUserProfileCommand,
  DescribeWorkforceCommand,
  DescribeWorkteamCommand,
  DisableSagemakerServicecatalogPortfolioCommand,
  DisassociateTrialComponentCommand,
  EnableSagemakerServicecatalogPortfolioCommand,
  GetDeviceFleetReportCommand,
  GetLineageGroupPolicyCommand,
  GetModelPackageGroupPolicyCommand,
  GetSagemakerServicecatalogPortfolioStatusCommand,
  GetSearchSuggestionsCommand,
  ImportHubContentCommand,
  ListActionsCommand,
  ListAlgorithmsCommand,
  ListAliasesCommand,
  ListAppImageConfigsCommand,
  ListAppsCommand,
  ListArtifactsCommand,
  ListAssociationsCommand,
  ListAutoMLJobsCommand,
  ListCandidatesForAutoMLJobCommand,
  ListCodeRepositoriesCommand,
  ListCompilationJobsCommand,
  ListContextsCommand,
  ListDataQualityJobDefinitionsCommand,
  ListDeviceFleetsCommand,
  ListDevicesCommand,
  ListDomainsCommand,
  ListEdgeDeploymentPlansCommand,
  ListEdgePackagingJobsCommand,
  ListEndpointConfigsCommand,
  ListEndpointsCommand,
  ListExperimentsCommand,
  ListFeatureGroupsCommand,
  ListFlowDefinitionsCommand,
  ListHubContentsCommand,
  ListHubContentVersionsCommand,
  ListHubsCommand,
  ListHumanTaskUisCommand,
  ListHyperParameterTuningJobsCommand,
  ListImagesCommand,
  ListImageVersionsCommand,
  ListInferenceExperimentsCommand,
  ListInferenceRecommendationsJobsCommand,
  ListInferenceRecommendationsJobStepsCommand,
  ListLabelingJobsCommand,
  ListLabelingJobsForWorkteamCommand,
  ListLineageGroupsCommand,
  ListModelBiasJobDefinitionsCommand,
  ListModelCardExportJobsCommand,
  ListModelCardsCommand,
  ListModelCardVersionsCommand,
  ListModelExplainabilityJobDefinitionsCommand,
  ListModelMetadataCommand,
  ListModelPackageGroupsCommand,
  ListModelPackagesCommand,
  ListModelQualityJobDefinitionsCommand,
  ListModelsCommand,
  ListMonitoringAlertHistoryCommand,
  ListMonitoringAlertsCommand,
  ListMonitoringExecutionsCommand,
  ListMonitoringSchedulesCommand,
  ListNotebookInstanceLifecycleConfigsCommand,
  ListNotebookInstancesCommand,
  ListPipelineExecutionsCommand,
  ListPipelineExecutionStepsCommand,
  ListPipelineParametersForExecutionCommand,
  ListPipelinesCommand,
  ListProcessingJobsCommand,
  ListProjectsCommand,
  ListSpacesCommand,
  ListStageDevicesCommand,
  ListStudioLifecycleConfigsCommand,
  ListSubscribedWorkteamsCommand,
  ListTagsCommand,
  ListTrainingJobsCommand,
  ListTrainingJobsForHyperParameterTuningJobCommand,
  ListTransformJobsCommand,
  ListTrialComponentsCommand,
  ListTrialsCommand,
  ListUserProfilesCommand,
  ListWorkforcesCommand,
  ListWorkteamsCommand,
  PutModelPackageGroupPolicyCommand,
  QueryLineageCommand,
  RegisterDevicesCommand,
  RenderUiTemplateCommand,
  RetryPipelineExecutionCommand,
  SearchCommand,
  SendPipelineExecutionStepFailureCommand,
  SendPipelineExecutionStepSuccessCommand,
  StartEdgeDeploymentStageCommand,
  StartInferenceExperimentCommand,
  StartMonitoringScheduleCommand,
  StartNotebookInstanceCommand,
  StartPipelineExecutionCommand,
  StopAutoMLJobCommand,
  StopCompilationJobCommand,
  StopEdgeDeploymentStageCommand,
  StopEdgePackagingJobCommand,
  StopHyperParameterTuningJobCommand,
  StopInferenceExperimentCommand,
  StopInferenceRecommendationsJobCommand,
  StopLabelingJobCommand,
  StopMonitoringScheduleCommand,
  StopNotebookInstanceCommand,
  StopPipelineExecutionCommand,
  StopProcessingJobCommand,
  StopTrainingJobCommand,
  StopTransformJobCommand,
  UpdateActionCommand,
  UpdateAppImageConfigCommand,
  UpdateArtifactCommand,
  UpdateCodeRepositoryCommand,
  UpdateContextCommand,
  UpdateDeviceFleetCommand,
  UpdateDevicesCommand,
  UpdateDomainCommand,
  UpdateEndpointCommand,
  UpdateEndpointWeightsAndCapacitiesCommand,
  UpdateExperimentCommand,
  UpdateFeatureGroupCommand,
  UpdateFeatureMetadataCommand,
  UpdateHubCommand,
  UpdateImageCommand,
  UpdateImageVersionCommand,
  UpdateInferenceExperimentCommand,
  UpdateModelCardCommand,
  UpdateModelPackageCommand,
  UpdateMonitoringAlertCommand,
  UpdateMonitoringScheduleCommand,
  UpdateNotebookInstanceCommand,
  UpdateNotebookInstanceLifecycleConfigCommand,
  UpdatePipelineCommand,
  UpdatePipelineExecutionCommand,
  UpdateProjectCommand,
  UpdateSpaceCommand,
  UpdateTrainingJobCommand,
  UpdateTrialCommand,
  UpdateTrialComponentCommand,
  UpdateUserProfileCommand,
  UpdateWorkforceCommand,
  UpdateWorkteamCommand,
};

export interface SageMaker {
  /**
   * @see {@link AddAssociationCommand}
   */
  addAssociation(
    args: AddAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddAssociationCommandOutput>;
  addAssociation(args: AddAssociationCommandInput, cb: (err: any, data?: AddAssociationCommandOutput) => void): void;
  addAssociation(
    args: AddAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link AddTagsCommand}
   */
  addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTrialComponentCommand}
   */
  associateTrialComponent(
    args: AssociateTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTrialComponentCommandOutput>;
  associateTrialComponent(
    args: AssociateTrialComponentCommandInput,
    cb: (err: any, data?: AssociateTrialComponentCommandOutput) => void
  ): void;
  associateTrialComponent(
    args: AssociateTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTrialComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDescribeModelPackageCommand}
   */
  batchDescribeModelPackage(
    args: BatchDescribeModelPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDescribeModelPackageCommandOutput>;
  batchDescribeModelPackage(
    args: BatchDescribeModelPackageCommandInput,
    cb: (err: any, data?: BatchDescribeModelPackageCommandOutput) => void
  ): void;
  batchDescribeModelPackage(
    args: BatchDescribeModelPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDescribeModelPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateActionCommand}
   */
  createAction(args: CreateActionCommandInput, options?: __HttpHandlerOptions): Promise<CreateActionCommandOutput>;
  createAction(args: CreateActionCommandInput, cb: (err: any, data?: CreateActionCommandOutput) => void): void;
  createAction(
    args: CreateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateActionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAlgorithmCommand}
   */
  createAlgorithm(
    args: CreateAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAlgorithmCommandOutput>;
  createAlgorithm(args: CreateAlgorithmCommandInput, cb: (err: any, data?: CreateAlgorithmCommandOutput) => void): void;
  createAlgorithm(
    args: CreateAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAlgorithmCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppCommand}
   */
  createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
  createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
  createApp(
    args: CreateAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAppImageConfigCommand}
   */
  createAppImageConfig(
    args: CreateAppImageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAppImageConfigCommandOutput>;
  createAppImageConfig(
    args: CreateAppImageConfigCommandInput,
    cb: (err: any, data?: CreateAppImageConfigCommandOutput) => void
  ): void;
  createAppImageConfig(
    args: CreateAppImageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAppImageConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateArtifactCommand}
   */
  createArtifact(
    args: CreateArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateArtifactCommandOutput>;
  createArtifact(args: CreateArtifactCommandInput, cb: (err: any, data?: CreateArtifactCommandOutput) => void): void;
  createArtifact(
    args: CreateArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutoMLJobCommand}
   */
  createAutoMLJob(
    args: CreateAutoMLJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoMLJobCommandOutput>;
  createAutoMLJob(args: CreateAutoMLJobCommandInput, cb: (err: any, data?: CreateAutoMLJobCommandOutput) => void): void;
  createAutoMLJob(
    args: CreateAutoMLJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoMLJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAutoMLJobV2Command}
   */
  createAutoMLJobV2(
    args: CreateAutoMLJobV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoMLJobV2CommandOutput>;
  createAutoMLJobV2(
    args: CreateAutoMLJobV2CommandInput,
    cb: (err: any, data?: CreateAutoMLJobV2CommandOutput) => void
  ): void;
  createAutoMLJobV2(
    args: CreateAutoMLJobV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoMLJobV2CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCodeRepositoryCommand}
   */
  createCodeRepository(
    args: CreateCodeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCodeRepositoryCommandOutput>;
  createCodeRepository(
    args: CreateCodeRepositoryCommandInput,
    cb: (err: any, data?: CreateCodeRepositoryCommandOutput) => void
  ): void;
  createCodeRepository(
    args: CreateCodeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCodeRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCompilationJobCommand}
   */
  createCompilationJob(
    args: CreateCompilationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCompilationJobCommandOutput>;
  createCompilationJob(
    args: CreateCompilationJobCommandInput,
    cb: (err: any, data?: CreateCompilationJobCommandOutput) => void
  ): void;
  createCompilationJob(
    args: CreateCompilationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCompilationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateContextCommand}
   */
  createContext(args: CreateContextCommandInput, options?: __HttpHandlerOptions): Promise<CreateContextCommandOutput>;
  createContext(args: CreateContextCommandInput, cb: (err: any, data?: CreateContextCommandOutput) => void): void;
  createContext(
    args: CreateContextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContextCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataQualityJobDefinitionCommand}
   */
  createDataQualityJobDefinition(
    args: CreateDataQualityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataQualityJobDefinitionCommandOutput>;
  createDataQualityJobDefinition(
    args: CreateDataQualityJobDefinitionCommandInput,
    cb: (err: any, data?: CreateDataQualityJobDefinitionCommandOutput) => void
  ): void;
  createDataQualityJobDefinition(
    args: CreateDataQualityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataQualityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDeviceFleetCommand}
   */
  createDeviceFleet(
    args: CreateDeviceFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeviceFleetCommandOutput>;
  createDeviceFleet(
    args: CreateDeviceFleetCommandInput,
    cb: (err: any, data?: CreateDeviceFleetCommandOutput) => void
  ): void;
  createDeviceFleet(
    args: CreateDeviceFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeviceFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
  createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEdgeDeploymentPlanCommand}
   */
  createEdgeDeploymentPlan(
    args: CreateEdgeDeploymentPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEdgeDeploymentPlanCommandOutput>;
  createEdgeDeploymentPlan(
    args: CreateEdgeDeploymentPlanCommandInput,
    cb: (err: any, data?: CreateEdgeDeploymentPlanCommandOutput) => void
  ): void;
  createEdgeDeploymentPlan(
    args: CreateEdgeDeploymentPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEdgeDeploymentPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEdgeDeploymentStageCommand}
   */
  createEdgeDeploymentStage(
    args: CreateEdgeDeploymentStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEdgeDeploymentStageCommandOutput>;
  createEdgeDeploymentStage(
    args: CreateEdgeDeploymentStageCommandInput,
    cb: (err: any, data?: CreateEdgeDeploymentStageCommandOutput) => void
  ): void;
  createEdgeDeploymentStage(
    args: CreateEdgeDeploymentStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEdgeDeploymentStageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEdgePackagingJobCommand}
   */
  createEdgePackagingJob(
    args: CreateEdgePackagingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEdgePackagingJobCommandOutput>;
  createEdgePackagingJob(
    args: CreateEdgePackagingJobCommandInput,
    cb: (err: any, data?: CreateEdgePackagingJobCommandOutput) => void
  ): void;
  createEdgePackagingJob(
    args: CreateEdgePackagingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEdgePackagingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEndpointCommand}
   */
  createEndpoint(
    args: CreateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointCommandOutput>;
  createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
  createEndpoint(
    args: CreateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEndpointConfigCommand}
   */
  createEndpointConfig(
    args: CreateEndpointConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointConfigCommandOutput>;
  createEndpointConfig(
    args: CreateEndpointConfigCommandInput,
    cb: (err: any, data?: CreateEndpointConfigCommandOutput) => void
  ): void;
  createEndpointConfig(
    args: CreateEndpointConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExperimentCommand}
   */
  createExperiment(
    args: CreateExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExperimentCommandOutput>;
  createExperiment(
    args: CreateExperimentCommandInput,
    cb: (err: any, data?: CreateExperimentCommandOutput) => void
  ): void;
  createExperiment(
    args: CreateExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFeatureGroupCommand}
   */
  createFeatureGroup(
    args: CreateFeatureGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFeatureGroupCommandOutput>;
  createFeatureGroup(
    args: CreateFeatureGroupCommandInput,
    cb: (err: any, data?: CreateFeatureGroupCommandOutput) => void
  ): void;
  createFeatureGroup(
    args: CreateFeatureGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFeatureGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFlowDefinitionCommand}
   */
  createFlowDefinition(
    args: CreateFlowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFlowDefinitionCommandOutput>;
  createFlowDefinition(
    args: CreateFlowDefinitionCommandInput,
    cb: (err: any, data?: CreateFlowDefinitionCommandOutput) => void
  ): void;
  createFlowDefinition(
    args: CreateFlowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFlowDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHubCommand}
   */
  createHub(args: CreateHubCommandInput, options?: __HttpHandlerOptions): Promise<CreateHubCommandOutput>;
  createHub(args: CreateHubCommandInput, cb: (err: any, data?: CreateHubCommandOutput) => void): void;
  createHub(
    args: CreateHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHubCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHumanTaskUiCommand}
   */
  createHumanTaskUi(
    args: CreateHumanTaskUiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHumanTaskUiCommandOutput>;
  createHumanTaskUi(
    args: CreateHumanTaskUiCommandInput,
    cb: (err: any, data?: CreateHumanTaskUiCommandOutput) => void
  ): void;
  createHumanTaskUi(
    args: CreateHumanTaskUiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHumanTaskUiCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHyperParameterTuningJobCommand}
   */
  createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHyperParameterTuningJobCommandOutput>;
  createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobCommandInput,
    cb: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void
  ): void;
  createHyperParameterTuningJob(
    args: CreateHyperParameterTuningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void
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
   * @see {@link CreateImageVersionCommand}
   */
  createImageVersion(
    args: CreateImageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateImageVersionCommandOutput>;
  createImageVersion(
    args: CreateImageVersionCommandInput,
    cb: (err: any, data?: CreateImageVersionCommandOutput) => void
  ): void;
  createImageVersion(
    args: CreateImageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateImageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInferenceExperimentCommand}
   */
  createInferenceExperiment(
    args: CreateInferenceExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInferenceExperimentCommandOutput>;
  createInferenceExperiment(
    args: CreateInferenceExperimentCommandInput,
    cb: (err: any, data?: CreateInferenceExperimentCommandOutput) => void
  ): void;
  createInferenceExperiment(
    args: CreateInferenceExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInferenceExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateInferenceRecommendationsJobCommand}
   */
  createInferenceRecommendationsJob(
    args: CreateInferenceRecommendationsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateInferenceRecommendationsJobCommandOutput>;
  createInferenceRecommendationsJob(
    args: CreateInferenceRecommendationsJobCommandInput,
    cb: (err: any, data?: CreateInferenceRecommendationsJobCommandOutput) => void
  ): void;
  createInferenceRecommendationsJob(
    args: CreateInferenceRecommendationsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateInferenceRecommendationsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLabelingJobCommand}
   */
  createLabelingJob(
    args: CreateLabelingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLabelingJobCommandOutput>;
  createLabelingJob(
    args: CreateLabelingJobCommandInput,
    cb: (err: any, data?: CreateLabelingJobCommandOutput) => void
  ): void;
  createLabelingJob(
    args: CreateLabelingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLabelingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelCommand}
   */
  createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelBiasJobDefinitionCommand}
   */
  createModelBiasJobDefinition(
    args: CreateModelBiasJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelBiasJobDefinitionCommandOutput>;
  createModelBiasJobDefinition(
    args: CreateModelBiasJobDefinitionCommandInput,
    cb: (err: any, data?: CreateModelBiasJobDefinitionCommandOutput) => void
  ): void;
  createModelBiasJobDefinition(
    args: CreateModelBiasJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelBiasJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelCardCommand}
   */
  createModelCard(
    args: CreateModelCardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelCardCommandOutput>;
  createModelCard(args: CreateModelCardCommandInput, cb: (err: any, data?: CreateModelCardCommandOutput) => void): void;
  createModelCard(
    args: CreateModelCardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCardCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelCardExportJobCommand}
   */
  createModelCardExportJob(
    args: CreateModelCardExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelCardExportJobCommandOutput>;
  createModelCardExportJob(
    args: CreateModelCardExportJobCommandInput,
    cb: (err: any, data?: CreateModelCardExportJobCommandOutput) => void
  ): void;
  createModelCardExportJob(
    args: CreateModelCardExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCardExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelExplainabilityJobDefinitionCommand}
   */
  createModelExplainabilityJobDefinition(
    args: CreateModelExplainabilityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelExplainabilityJobDefinitionCommandOutput>;
  createModelExplainabilityJobDefinition(
    args: CreateModelExplainabilityJobDefinitionCommandInput,
    cb: (err: any, data?: CreateModelExplainabilityJobDefinitionCommandOutput) => void
  ): void;
  createModelExplainabilityJobDefinition(
    args: CreateModelExplainabilityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelExplainabilityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelPackageCommand}
   */
  createModelPackage(
    args: CreateModelPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelPackageCommandOutput>;
  createModelPackage(
    args: CreateModelPackageCommandInput,
    cb: (err: any, data?: CreateModelPackageCommandOutput) => void
  ): void;
  createModelPackage(
    args: CreateModelPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelPackageGroupCommand}
   */
  createModelPackageGroup(
    args: CreateModelPackageGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelPackageGroupCommandOutput>;
  createModelPackageGroup(
    args: CreateModelPackageGroupCommandInput,
    cb: (err: any, data?: CreateModelPackageGroupCommandOutput) => void
  ): void;
  createModelPackageGroup(
    args: CreateModelPackageGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelPackageGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateModelQualityJobDefinitionCommand}
   */
  createModelQualityJobDefinition(
    args: CreateModelQualityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateModelQualityJobDefinitionCommandOutput>;
  createModelQualityJobDefinition(
    args: CreateModelQualityJobDefinitionCommandInput,
    cb: (err: any, data?: CreateModelQualityJobDefinitionCommandOutput) => void
  ): void;
  createModelQualityJobDefinition(
    args: CreateModelQualityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelQualityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMonitoringScheduleCommand}
   */
  createMonitoringSchedule(
    args: CreateMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitoringScheduleCommandOutput>;
  createMonitoringSchedule(
    args: CreateMonitoringScheduleCommandInput,
    cb: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void
  ): void;
  createMonitoringSchedule(
    args: CreateMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNotebookInstanceCommand}
   */
  createNotebookInstance(
    args: CreateNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotebookInstanceCommandOutput>;
  createNotebookInstance(
    args: CreateNotebookInstanceCommandInput,
    cb: (err: any, data?: CreateNotebookInstanceCommandOutput) => void
  ): void;
  createNotebookInstance(
    args: CreateNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotebookInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateNotebookInstanceLifecycleConfigCommand}
   */
  createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput>;
  createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigCommandInput,
    cb: (err: any, data?: CreateNotebookInstanceLifecycleConfigCommandOutput) => void
  ): void;
  createNotebookInstanceLifecycleConfig(
    args: CreateNotebookInstanceLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNotebookInstanceLifecycleConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePipelineCommand}
   */
  createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
  createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePresignedDomainUrlCommand}
   */
  createPresignedDomainUrl(
    args: CreatePresignedDomainUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePresignedDomainUrlCommandOutput>;
  createPresignedDomainUrl(
    args: CreatePresignedDomainUrlCommandInput,
    cb: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void
  ): void;
  createPresignedDomainUrl(
    args: CreatePresignedDomainUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePresignedNotebookInstanceUrlCommand}
   */
  createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePresignedNotebookInstanceUrlCommandOutput>;
  createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlCommandInput,
    cb: (err: any, data?: CreatePresignedNotebookInstanceUrlCommandOutput) => void
  ): void;
  createPresignedNotebookInstanceUrl(
    args: CreatePresignedNotebookInstanceUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePresignedNotebookInstanceUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProcessingJobCommand}
   */
  createProcessingJob(
    args: CreateProcessingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProcessingJobCommandOutput>;
  createProcessingJob(
    args: CreateProcessingJobCommandInput,
    cb: (err: any, data?: CreateProcessingJobCommandOutput) => void
  ): void;
  createProcessingJob(
    args: CreateProcessingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProcessingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSpaceCommand}
   */
  createSpace(args: CreateSpaceCommandInput, options?: __HttpHandlerOptions): Promise<CreateSpaceCommandOutput>;
  createSpace(args: CreateSpaceCommandInput, cb: (err: any, data?: CreateSpaceCommandOutput) => void): void;
  createSpace(
    args: CreateSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStudioLifecycleConfigCommand}
   */
  createStudioLifecycleConfig(
    args: CreateStudioLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStudioLifecycleConfigCommandOutput>;
  createStudioLifecycleConfig(
    args: CreateStudioLifecycleConfigCommandInput,
    cb: (err: any, data?: CreateStudioLifecycleConfigCommandOutput) => void
  ): void;
  createStudioLifecycleConfig(
    args: CreateStudioLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStudioLifecycleConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrainingJobCommand}
   */
  createTrainingJob(
    args: CreateTrainingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrainingJobCommandOutput>;
  createTrainingJob(
    args: CreateTrainingJobCommandInput,
    cb: (err: any, data?: CreateTrainingJobCommandOutput) => void
  ): void;
  createTrainingJob(
    args: CreateTrainingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrainingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTransformJobCommand}
   */
  createTransformJob(
    args: CreateTransformJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTransformJobCommandOutput>;
  createTransformJob(
    args: CreateTransformJobCommandInput,
    cb: (err: any, data?: CreateTransformJobCommandOutput) => void
  ): void;
  createTransformJob(
    args: CreateTransformJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTransformJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrialCommand}
   */
  createTrial(args: CreateTrialCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrialCommandOutput>;
  createTrial(args: CreateTrialCommandInput, cb: (err: any, data?: CreateTrialCommandOutput) => void): void;
  createTrial(
    args: CreateTrialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrialCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTrialComponentCommand}
   */
  createTrialComponent(
    args: CreateTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTrialComponentCommandOutput>;
  createTrialComponent(
    args: CreateTrialComponentCommandInput,
    cb: (err: any, data?: CreateTrialComponentCommandOutput) => void
  ): void;
  createTrialComponent(
    args: CreateTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTrialComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUserProfileCommand}
   */
  createUserProfile(
    args: CreateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUserProfileCommandOutput>;
  createUserProfile(
    args: CreateUserProfileCommandInput,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;
  createUserProfile(
    args: CreateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkforceCommand}
   */
  createWorkforce(
    args: CreateWorkforceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkforceCommandOutput>;
  createWorkforce(args: CreateWorkforceCommandInput, cb: (err: any, data?: CreateWorkforceCommandOutput) => void): void;
  createWorkforce(
    args: CreateWorkforceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkforceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkteamCommand}
   */
  createWorkteam(
    args: CreateWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkteamCommandOutput>;
  createWorkteam(args: CreateWorkteamCommandInput, cb: (err: any, data?: CreateWorkteamCommandOutput) => void): void;
  createWorkteam(
    args: CreateWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkteamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteActionCommand}
   */
  deleteAction(args: DeleteActionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteActionCommandOutput>;
  deleteAction(args: DeleteActionCommandInput, cb: (err: any, data?: DeleteActionCommandOutput) => void): void;
  deleteAction(
    args: DeleteActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAlgorithmCommand}
   */
  deleteAlgorithm(
    args: DeleteAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAlgorithmCommandOutput>;
  deleteAlgorithm(args: DeleteAlgorithmCommandInput, cb: (err: any, data?: DeleteAlgorithmCommandOutput) => void): void;
  deleteAlgorithm(
    args: DeleteAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAlgorithmCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppCommand}
   */
  deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
  deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
  deleteApp(
    args: DeleteAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAppImageConfigCommand}
   */
  deleteAppImageConfig(
    args: DeleteAppImageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppImageConfigCommandOutput>;
  deleteAppImageConfig(
    args: DeleteAppImageConfigCommandInput,
    cb: (err: any, data?: DeleteAppImageConfigCommandOutput) => void
  ): void;
  deleteAppImageConfig(
    args: DeleteAppImageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppImageConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArtifactCommand}
   */
  deleteArtifact(
    args: DeleteArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArtifactCommandOutput>;
  deleteArtifact(args: DeleteArtifactCommandInput, cb: (err: any, data?: DeleteArtifactCommandOutput) => void): void;
  deleteArtifact(
    args: DeleteArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssociationCommand}
   */
  deleteAssociation(
    args: DeleteAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssociationCommandOutput>;
  deleteAssociation(
    args: DeleteAssociationCommandInput,
    cb: (err: any, data?: DeleteAssociationCommandOutput) => void
  ): void;
  deleteAssociation(
    args: DeleteAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCodeRepositoryCommand}
   */
  deleteCodeRepository(
    args: DeleteCodeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCodeRepositoryCommandOutput>;
  deleteCodeRepository(
    args: DeleteCodeRepositoryCommandInput,
    cb: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void
  ): void;
  deleteCodeRepository(
    args: DeleteCodeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContextCommand}
   */
  deleteContext(args: DeleteContextCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContextCommandOutput>;
  deleteContext(args: DeleteContextCommandInput, cb: (err: any, data?: DeleteContextCommandOutput) => void): void;
  deleteContext(
    args: DeleteContextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContextCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataQualityJobDefinitionCommand}
   */
  deleteDataQualityJobDefinition(
    args: DeleteDataQualityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataQualityJobDefinitionCommandOutput>;
  deleteDataQualityJobDefinition(
    args: DeleteDataQualityJobDefinitionCommandInput,
    cb: (err: any, data?: DeleteDataQualityJobDefinitionCommandOutput) => void
  ): void;
  deleteDataQualityJobDefinition(
    args: DeleteDataQualityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataQualityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceFleetCommand}
   */
  deleteDeviceFleet(
    args: DeleteDeviceFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeviceFleetCommandOutput>;
  deleteDeviceFleet(
    args: DeleteDeviceFleetCommandInput,
    cb: (err: any, data?: DeleteDeviceFleetCommandOutput) => void
  ): void;
  deleteDeviceFleet(
    args: DeleteDeviceFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeviceFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
  deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEdgeDeploymentPlanCommand}
   */
  deleteEdgeDeploymentPlan(
    args: DeleteEdgeDeploymentPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEdgeDeploymentPlanCommandOutput>;
  deleteEdgeDeploymentPlan(
    args: DeleteEdgeDeploymentPlanCommandInput,
    cb: (err: any, data?: DeleteEdgeDeploymentPlanCommandOutput) => void
  ): void;
  deleteEdgeDeploymentPlan(
    args: DeleteEdgeDeploymentPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEdgeDeploymentPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEdgeDeploymentStageCommand}
   */
  deleteEdgeDeploymentStage(
    args: DeleteEdgeDeploymentStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEdgeDeploymentStageCommandOutput>;
  deleteEdgeDeploymentStage(
    args: DeleteEdgeDeploymentStageCommandInput,
    cb: (err: any, data?: DeleteEdgeDeploymentStageCommandOutput) => void
  ): void;
  deleteEdgeDeploymentStage(
    args: DeleteEdgeDeploymentStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEdgeDeploymentStageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointCommand}
   */
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointCommandOutput>;
  deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
  deleteEndpoint(
    args: DeleteEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEndpointConfigCommand}
   */
  deleteEndpointConfig(
    args: DeleteEndpointConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointConfigCommandOutput>;
  deleteEndpointConfig(
    args: DeleteEndpointConfigCommandInput,
    cb: (err: any, data?: DeleteEndpointConfigCommandOutput) => void
  ): void;
  deleteEndpointConfig(
    args: DeleteEndpointConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExperimentCommand}
   */
  deleteExperiment(
    args: DeleteExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExperimentCommandOutput>;
  deleteExperiment(
    args: DeleteExperimentCommandInput,
    cb: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): void;
  deleteExperiment(
    args: DeleteExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFeatureGroupCommand}
   */
  deleteFeatureGroup(
    args: DeleteFeatureGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFeatureGroupCommandOutput>;
  deleteFeatureGroup(
    args: DeleteFeatureGroupCommandInput,
    cb: (err: any, data?: DeleteFeatureGroupCommandOutput) => void
  ): void;
  deleteFeatureGroup(
    args: DeleteFeatureGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFeatureGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFlowDefinitionCommand}
   */
  deleteFlowDefinition(
    args: DeleteFlowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFlowDefinitionCommandOutput>;
  deleteFlowDefinition(
    args: DeleteFlowDefinitionCommandInput,
    cb: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void
  ): void;
  deleteFlowDefinition(
    args: DeleteFlowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHubCommand}
   */
  deleteHub(args: DeleteHubCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHubCommandOutput>;
  deleteHub(args: DeleteHubCommandInput, cb: (err: any, data?: DeleteHubCommandOutput) => void): void;
  deleteHub(
    args: DeleteHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHubCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHubContentCommand}
   */
  deleteHubContent(
    args: DeleteHubContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHubContentCommandOutput>;
  deleteHubContent(
    args: DeleteHubContentCommandInput,
    cb: (err: any, data?: DeleteHubContentCommandOutput) => void
  ): void;
  deleteHubContent(
    args: DeleteHubContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHubContentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHumanTaskUiCommand}
   */
  deleteHumanTaskUi(
    args: DeleteHumanTaskUiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHumanTaskUiCommandOutput>;
  deleteHumanTaskUi(
    args: DeleteHumanTaskUiCommandInput,
    cb: (err: any, data?: DeleteHumanTaskUiCommandOutput) => void
  ): void;
  deleteHumanTaskUi(
    args: DeleteHumanTaskUiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHumanTaskUiCommandOutput) => void
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
   * @see {@link DeleteImageVersionCommand}
   */
  deleteImageVersion(
    args: DeleteImageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteImageVersionCommandOutput>;
  deleteImageVersion(
    args: DeleteImageVersionCommandInput,
    cb: (err: any, data?: DeleteImageVersionCommandOutput) => void
  ): void;
  deleteImageVersion(
    args: DeleteImageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteImageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteInferenceExperimentCommand}
   */
  deleteInferenceExperiment(
    args: DeleteInferenceExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInferenceExperimentCommandOutput>;
  deleteInferenceExperiment(
    args: DeleteInferenceExperimentCommandInput,
    cb: (err: any, data?: DeleteInferenceExperimentCommandOutput) => void
  ): void;
  deleteInferenceExperiment(
    args: DeleteInferenceExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInferenceExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelCommand}
   */
  deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelBiasJobDefinitionCommand}
   */
  deleteModelBiasJobDefinition(
    args: DeleteModelBiasJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelBiasJobDefinitionCommandOutput>;
  deleteModelBiasJobDefinition(
    args: DeleteModelBiasJobDefinitionCommandInput,
    cb: (err: any, data?: DeleteModelBiasJobDefinitionCommandOutput) => void
  ): void;
  deleteModelBiasJobDefinition(
    args: DeleteModelBiasJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelBiasJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelCardCommand}
   */
  deleteModelCard(
    args: DeleteModelCardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelCardCommandOutput>;
  deleteModelCard(args: DeleteModelCardCommandInput, cb: (err: any, data?: DeleteModelCardCommandOutput) => void): void;
  deleteModelCard(
    args: DeleteModelCardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelExplainabilityJobDefinitionCommand}
   */
  deleteModelExplainabilityJobDefinition(
    args: DeleteModelExplainabilityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelExplainabilityJobDefinitionCommandOutput>;
  deleteModelExplainabilityJobDefinition(
    args: DeleteModelExplainabilityJobDefinitionCommandInput,
    cb: (err: any, data?: DeleteModelExplainabilityJobDefinitionCommandOutput) => void
  ): void;
  deleteModelExplainabilityJobDefinition(
    args: DeleteModelExplainabilityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelExplainabilityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelPackageCommand}
   */
  deleteModelPackage(
    args: DeleteModelPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelPackageCommandOutput>;
  deleteModelPackage(
    args: DeleteModelPackageCommandInput,
    cb: (err: any, data?: DeleteModelPackageCommandOutput) => void
  ): void;
  deleteModelPackage(
    args: DeleteModelPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelPackageGroupCommand}
   */
  deleteModelPackageGroup(
    args: DeleteModelPackageGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelPackageGroupCommandOutput>;
  deleteModelPackageGroup(
    args: DeleteModelPackageGroupCommandInput,
    cb: (err: any, data?: DeleteModelPackageGroupCommandOutput) => void
  ): void;
  deleteModelPackageGroup(
    args: DeleteModelPackageGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelPackageGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelPackageGroupPolicyCommand}
   */
  deleteModelPackageGroupPolicy(
    args: DeleteModelPackageGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelPackageGroupPolicyCommandOutput>;
  deleteModelPackageGroupPolicy(
    args: DeleteModelPackageGroupPolicyCommandInput,
    cb: (err: any, data?: DeleteModelPackageGroupPolicyCommandOutput) => void
  ): void;
  deleteModelPackageGroupPolicy(
    args: DeleteModelPackageGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelPackageGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteModelQualityJobDefinitionCommand}
   */
  deleteModelQualityJobDefinition(
    args: DeleteModelQualityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteModelQualityJobDefinitionCommandOutput>;
  deleteModelQualityJobDefinition(
    args: DeleteModelQualityJobDefinitionCommandInput,
    cb: (err: any, data?: DeleteModelQualityJobDefinitionCommandOutput) => void
  ): void;
  deleteModelQualityJobDefinition(
    args: DeleteModelQualityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelQualityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitoringScheduleCommand}
   */
  deleteMonitoringSchedule(
    args: DeleteMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitoringScheduleCommandOutput>;
  deleteMonitoringSchedule(
    args: DeleteMonitoringScheduleCommandInput,
    cb: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void
  ): void;
  deleteMonitoringSchedule(
    args: DeleteMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotebookInstanceCommand}
   */
  deleteNotebookInstance(
    args: DeleteNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotebookInstanceCommandOutput>;
  deleteNotebookInstance(
    args: DeleteNotebookInstanceCommandInput,
    cb: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void
  ): void;
  deleteNotebookInstance(
    args: DeleteNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteNotebookInstanceLifecycleConfigCommand}
   */
  deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput>;
  deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigCommandInput,
    cb: (err: any, data?: DeleteNotebookInstanceLifecycleConfigCommandOutput) => void
  ): void;
  deleteNotebookInstanceLifecycleConfig(
    args: DeleteNotebookInstanceLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotebookInstanceLifecycleConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePipelineCommand}
   */
  deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
  deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSpaceCommand}
   */
  deleteSpace(args: DeleteSpaceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSpaceCommandOutput>;
  deleteSpace(args: DeleteSpaceCommandInput, cb: (err: any, data?: DeleteSpaceCommandOutput) => void): void;
  deleteSpace(
    args: DeleteSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStudioLifecycleConfigCommand}
   */
  deleteStudioLifecycleConfig(
    args: DeleteStudioLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStudioLifecycleConfigCommandOutput>;
  deleteStudioLifecycleConfig(
    args: DeleteStudioLifecycleConfigCommandInput,
    cb: (err: any, data?: DeleteStudioLifecycleConfigCommandOutput) => void
  ): void;
  deleteStudioLifecycleConfig(
    args: DeleteStudioLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStudioLifecycleConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrialCommand}
   */
  deleteTrial(args: DeleteTrialCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrialCommandOutput>;
  deleteTrial(args: DeleteTrialCommandInput, cb: (err: any, data?: DeleteTrialCommandOutput) => void): void;
  deleteTrial(
    args: DeleteTrialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrialCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTrialComponentCommand}
   */
  deleteTrialComponent(
    args: DeleteTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTrialComponentCommandOutput>;
  deleteTrialComponent(
    args: DeleteTrialComponentCommandInput,
    cb: (err: any, data?: DeleteTrialComponentCommandOutput) => void
  ): void;
  deleteTrialComponent(
    args: DeleteTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTrialComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteUserProfileCommand}
   */
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUserProfileCommandOutput>;
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;
  deleteUserProfile(
    args: DeleteUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkforceCommand}
   */
  deleteWorkforce(
    args: DeleteWorkforceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkforceCommandOutput>;
  deleteWorkforce(args: DeleteWorkforceCommandInput, cb: (err: any, data?: DeleteWorkforceCommandOutput) => void): void;
  deleteWorkforce(
    args: DeleteWorkforceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkforceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkteamCommand}
   */
  deleteWorkteam(
    args: DeleteWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkteamCommandOutput>;
  deleteWorkteam(args: DeleteWorkteamCommandInput, cb: (err: any, data?: DeleteWorkteamCommandOutput) => void): void;
  deleteWorkteam(
    args: DeleteWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkteamCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterDevicesCommand}
   */
  deregisterDevices(
    args: DeregisterDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterDevicesCommandOutput>;
  deregisterDevices(
    args: DeregisterDevicesCommandInput,
    cb: (err: any, data?: DeregisterDevicesCommandOutput) => void
  ): void;
  deregisterDevices(
    args: DeregisterDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActionCommand}
   */
  describeAction(
    args: DescribeActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActionCommandOutput>;
  describeAction(args: DescribeActionCommandInput, cb: (err: any, data?: DescribeActionCommandOutput) => void): void;
  describeAction(
    args: DescribeActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAlgorithmCommand}
   */
  describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAlgorithmCommandOutput>;
  describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void
  ): void;
  describeAlgorithm(
    args: DescribeAlgorithmCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppCommand}
   */
  describeApp(args: DescribeAppCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppCommandOutput>;
  describeApp(args: DescribeAppCommandInput, cb: (err: any, data?: DescribeAppCommandOutput) => void): void;
  describeApp(
    args: DescribeAppCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAppImageConfigCommand}
   */
  describeAppImageConfig(
    args: DescribeAppImageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAppImageConfigCommandOutput>;
  describeAppImageConfig(
    args: DescribeAppImageConfigCommandInput,
    cb: (err: any, data?: DescribeAppImageConfigCommandOutput) => void
  ): void;
  describeAppImageConfig(
    args: DescribeAppImageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAppImageConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeArtifactCommand}
   */
  describeArtifact(
    args: DescribeArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeArtifactCommandOutput>;
  describeArtifact(
    args: DescribeArtifactCommandInput,
    cb: (err: any, data?: DescribeArtifactCommandOutput) => void
  ): void;
  describeArtifact(
    args: DescribeArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoMLJobCommand}
   */
  describeAutoMLJob(
    args: DescribeAutoMLJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoMLJobCommandOutput>;
  describeAutoMLJob(
    args: DescribeAutoMLJobCommandInput,
    cb: (err: any, data?: DescribeAutoMLJobCommandOutput) => void
  ): void;
  describeAutoMLJob(
    args: DescribeAutoMLJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoMLJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoMLJobV2Command}
   */
  describeAutoMLJobV2(
    args: DescribeAutoMLJobV2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoMLJobV2CommandOutput>;
  describeAutoMLJobV2(
    args: DescribeAutoMLJobV2CommandInput,
    cb: (err: any, data?: DescribeAutoMLJobV2CommandOutput) => void
  ): void;
  describeAutoMLJobV2(
    args: DescribeAutoMLJobV2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoMLJobV2CommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCodeRepositoryCommand}
   */
  describeCodeRepository(
    args: DescribeCodeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCodeRepositoryCommandOutput>;
  describeCodeRepository(
    args: DescribeCodeRepositoryCommandInput,
    cb: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void
  ): void;
  describeCodeRepository(
    args: DescribeCodeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCompilationJobCommand}
   */
  describeCompilationJob(
    args: DescribeCompilationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCompilationJobCommandOutput>;
  describeCompilationJob(
    args: DescribeCompilationJobCommandInput,
    cb: (err: any, data?: DescribeCompilationJobCommandOutput) => void
  ): void;
  describeCompilationJob(
    args: DescribeCompilationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCompilationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContextCommand}
   */
  describeContext(
    args: DescribeContextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContextCommandOutput>;
  describeContext(args: DescribeContextCommandInput, cb: (err: any, data?: DescribeContextCommandOutput) => void): void;
  describeContext(
    args: DescribeContextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContextCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataQualityJobDefinitionCommand}
   */
  describeDataQualityJobDefinition(
    args: DescribeDataQualityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataQualityJobDefinitionCommandOutput>;
  describeDataQualityJobDefinition(
    args: DescribeDataQualityJobDefinitionCommandInput,
    cb: (err: any, data?: DescribeDataQualityJobDefinitionCommandOutput) => void
  ): void;
  describeDataQualityJobDefinition(
    args: DescribeDataQualityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataQualityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeviceCommand}
   */
  describeDevice(
    args: DescribeDeviceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceCommandOutput>;
  describeDevice(args: DescribeDeviceCommandInput, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
  describeDevice(
    args: DescribeDeviceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDeviceFleetCommand}
   */
  describeDeviceFleet(
    args: DescribeDeviceFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDeviceFleetCommandOutput>;
  describeDeviceFleet(
    args: DescribeDeviceFleetCommandInput,
    cb: (err: any, data?: DescribeDeviceFleetCommandOutput) => void
  ): void;
  describeDeviceFleet(
    args: DescribeDeviceFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDeviceFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
  describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEdgeDeploymentPlanCommand}
   */
  describeEdgeDeploymentPlan(
    args: DescribeEdgeDeploymentPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEdgeDeploymentPlanCommandOutput>;
  describeEdgeDeploymentPlan(
    args: DescribeEdgeDeploymentPlanCommandInput,
    cb: (err: any, data?: DescribeEdgeDeploymentPlanCommandOutput) => void
  ): void;
  describeEdgeDeploymentPlan(
    args: DescribeEdgeDeploymentPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEdgeDeploymentPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEdgePackagingJobCommand}
   */
  describeEdgePackagingJob(
    args: DescribeEdgePackagingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEdgePackagingJobCommandOutput>;
  describeEdgePackagingJob(
    args: DescribeEdgePackagingJobCommandInput,
    cb: (err: any, data?: DescribeEdgePackagingJobCommandOutput) => void
  ): void;
  describeEdgePackagingJob(
    args: DescribeEdgePackagingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEdgePackagingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointCommand}
   */
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointCommandOutput>;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;
  describeEndpoint(
    args: DescribeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEndpointConfigCommand}
   */
  describeEndpointConfig(
    args: DescribeEndpointConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointConfigCommandOutput>;
  describeEndpointConfig(
    args: DescribeEndpointConfigCommandInput,
    cb: (err: any, data?: DescribeEndpointConfigCommandOutput) => void
  ): void;
  describeEndpointConfig(
    args: DescribeEndpointConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExperimentCommand}
   */
  describeExperiment(
    args: DescribeExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExperimentCommandOutput>;
  describeExperiment(
    args: DescribeExperimentCommandInput,
    cb: (err: any, data?: DescribeExperimentCommandOutput) => void
  ): void;
  describeExperiment(
    args: DescribeExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFeatureGroupCommand}
   */
  describeFeatureGroup(
    args: DescribeFeatureGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFeatureGroupCommandOutput>;
  describeFeatureGroup(
    args: DescribeFeatureGroupCommandInput,
    cb: (err: any, data?: DescribeFeatureGroupCommandOutput) => void
  ): void;
  describeFeatureGroup(
    args: DescribeFeatureGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFeatureGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFeatureMetadataCommand}
   */
  describeFeatureMetadata(
    args: DescribeFeatureMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFeatureMetadataCommandOutput>;
  describeFeatureMetadata(
    args: DescribeFeatureMetadataCommandInput,
    cb: (err: any, data?: DescribeFeatureMetadataCommandOutput) => void
  ): void;
  describeFeatureMetadata(
    args: DescribeFeatureMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFeatureMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFlowDefinitionCommand}
   */
  describeFlowDefinition(
    args: DescribeFlowDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFlowDefinitionCommandOutput>;
  describeFlowDefinition(
    args: DescribeFlowDefinitionCommandInput,
    cb: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void
  ): void;
  describeFlowDefinition(
    args: DescribeFlowDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHubCommand}
   */
  describeHub(args: DescribeHubCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHubCommandOutput>;
  describeHub(args: DescribeHubCommandInput, cb: (err: any, data?: DescribeHubCommandOutput) => void): void;
  describeHub(
    args: DescribeHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHubCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHubContentCommand}
   */
  describeHubContent(
    args: DescribeHubContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHubContentCommandOutput>;
  describeHubContent(
    args: DescribeHubContentCommandInput,
    cb: (err: any, data?: DescribeHubContentCommandOutput) => void
  ): void;
  describeHubContent(
    args: DescribeHubContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHubContentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHumanTaskUiCommand}
   */
  describeHumanTaskUi(
    args: DescribeHumanTaskUiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHumanTaskUiCommandOutput>;
  describeHumanTaskUi(
    args: DescribeHumanTaskUiCommandInput,
    cb: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void
  ): void;
  describeHumanTaskUi(
    args: DescribeHumanTaskUiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHyperParameterTuningJobCommand}
   */
  describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHyperParameterTuningJobCommandOutput>;
  describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobCommandInput,
    cb: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void
  ): void;
  describeHyperParameterTuningJob(
    args: DescribeHyperParameterTuningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageCommand}
   */
  describeImage(args: DescribeImageCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImageCommandOutput>;
  describeImage(args: DescribeImageCommandInput, cb: (err: any, data?: DescribeImageCommandOutput) => void): void;
  describeImage(
    args: DescribeImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageVersionCommand}
   */
  describeImageVersion(
    args: DescribeImageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageVersionCommandOutput>;
  describeImageVersion(
    args: DescribeImageVersionCommandInput,
    cb: (err: any, data?: DescribeImageVersionCommandOutput) => void
  ): void;
  describeImageVersion(
    args: DescribeImageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInferenceExperimentCommand}
   */
  describeInferenceExperiment(
    args: DescribeInferenceExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInferenceExperimentCommandOutput>;
  describeInferenceExperiment(
    args: DescribeInferenceExperimentCommandInput,
    cb: (err: any, data?: DescribeInferenceExperimentCommandOutput) => void
  ): void;
  describeInferenceExperiment(
    args: DescribeInferenceExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInferenceExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeInferenceRecommendationsJobCommand}
   */
  describeInferenceRecommendationsJob(
    args: DescribeInferenceRecommendationsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeInferenceRecommendationsJobCommandOutput>;
  describeInferenceRecommendationsJob(
    args: DescribeInferenceRecommendationsJobCommandInput,
    cb: (err: any, data?: DescribeInferenceRecommendationsJobCommandOutput) => void
  ): void;
  describeInferenceRecommendationsJob(
    args: DescribeInferenceRecommendationsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeInferenceRecommendationsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLabelingJobCommand}
   */
  describeLabelingJob(
    args: DescribeLabelingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLabelingJobCommandOutput>;
  describeLabelingJob(
    args: DescribeLabelingJobCommandInput,
    cb: (err: any, data?: DescribeLabelingJobCommandOutput) => void
  ): void;
  describeLabelingJob(
    args: DescribeLabelingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLabelingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLineageGroupCommand}
   */
  describeLineageGroup(
    args: DescribeLineageGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLineageGroupCommandOutput>;
  describeLineageGroup(
    args: DescribeLineageGroupCommandInput,
    cb: (err: any, data?: DescribeLineageGroupCommandOutput) => void
  ): void;
  describeLineageGroup(
    args: DescribeLineageGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLineageGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelCommand}
   */
  describeModel(args: DescribeModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelCommandOutput>;
  describeModel(args: DescribeModelCommandInput, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
  describeModel(
    args: DescribeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelBiasJobDefinitionCommand}
   */
  describeModelBiasJobDefinition(
    args: DescribeModelBiasJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelBiasJobDefinitionCommandOutput>;
  describeModelBiasJobDefinition(
    args: DescribeModelBiasJobDefinitionCommandInput,
    cb: (err: any, data?: DescribeModelBiasJobDefinitionCommandOutput) => void
  ): void;
  describeModelBiasJobDefinition(
    args: DescribeModelBiasJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelBiasJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelCardCommand}
   */
  describeModelCard(
    args: DescribeModelCardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelCardCommandOutput>;
  describeModelCard(
    args: DescribeModelCardCommandInput,
    cb: (err: any, data?: DescribeModelCardCommandOutput) => void
  ): void;
  describeModelCard(
    args: DescribeModelCardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelCardCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelCardExportJobCommand}
   */
  describeModelCardExportJob(
    args: DescribeModelCardExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelCardExportJobCommandOutput>;
  describeModelCardExportJob(
    args: DescribeModelCardExportJobCommandInput,
    cb: (err: any, data?: DescribeModelCardExportJobCommandOutput) => void
  ): void;
  describeModelCardExportJob(
    args: DescribeModelCardExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelCardExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelExplainabilityJobDefinitionCommand}
   */
  describeModelExplainabilityJobDefinition(
    args: DescribeModelExplainabilityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelExplainabilityJobDefinitionCommandOutput>;
  describeModelExplainabilityJobDefinition(
    args: DescribeModelExplainabilityJobDefinitionCommandInput,
    cb: (err: any, data?: DescribeModelExplainabilityJobDefinitionCommandOutput) => void
  ): void;
  describeModelExplainabilityJobDefinition(
    args: DescribeModelExplainabilityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelExplainabilityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelPackageCommand}
   */
  describeModelPackage(
    args: DescribeModelPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelPackageCommandOutput>;
  describeModelPackage(
    args: DescribeModelPackageCommandInput,
    cb: (err: any, data?: DescribeModelPackageCommandOutput) => void
  ): void;
  describeModelPackage(
    args: DescribeModelPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelPackageGroupCommand}
   */
  describeModelPackageGroup(
    args: DescribeModelPackageGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelPackageGroupCommandOutput>;
  describeModelPackageGroup(
    args: DescribeModelPackageGroupCommandInput,
    cb: (err: any, data?: DescribeModelPackageGroupCommandOutput) => void
  ): void;
  describeModelPackageGroup(
    args: DescribeModelPackageGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelPackageGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeModelQualityJobDefinitionCommand}
   */
  describeModelQualityJobDefinition(
    args: DescribeModelQualityJobDefinitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeModelQualityJobDefinitionCommandOutput>;
  describeModelQualityJobDefinition(
    args: DescribeModelQualityJobDefinitionCommandInput,
    cb: (err: any, data?: DescribeModelQualityJobDefinitionCommandOutput) => void
  ): void;
  describeModelQualityJobDefinition(
    args: DescribeModelQualityJobDefinitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeModelQualityJobDefinitionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMonitoringScheduleCommand}
   */
  describeMonitoringSchedule(
    args: DescribeMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMonitoringScheduleCommandOutput>;
  describeMonitoringSchedule(
    args: DescribeMonitoringScheduleCommandInput,
    cb: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void
  ): void;
  describeMonitoringSchedule(
    args: DescribeMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotebookInstanceCommand}
   */
  describeNotebookInstance(
    args: DescribeNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotebookInstanceCommandOutput>;
  describeNotebookInstance(
    args: DescribeNotebookInstanceCommandInput,
    cb: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void
  ): void;
  describeNotebookInstance(
    args: DescribeNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeNotebookInstanceLifecycleConfigCommand}
   */
  describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput>;
  describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigCommandInput,
    cb: (err: any, data?: DescribeNotebookInstanceLifecycleConfigCommandOutput) => void
  ): void;
  describeNotebookInstanceLifecycleConfig(
    args: DescribeNotebookInstanceLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeNotebookInstanceLifecycleConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePipelineCommand}
   */
  describePipeline(
    args: DescribePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipelineCommandOutput>;
  describePipeline(
    args: DescribePipelineCommandInput,
    cb: (err: any, data?: DescribePipelineCommandOutput) => void
  ): void;
  describePipeline(
    args: DescribePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePipelineDefinitionForExecutionCommand}
   */
  describePipelineDefinitionForExecution(
    args: DescribePipelineDefinitionForExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipelineDefinitionForExecutionCommandOutput>;
  describePipelineDefinitionForExecution(
    args: DescribePipelineDefinitionForExecutionCommandInput,
    cb: (err: any, data?: DescribePipelineDefinitionForExecutionCommandOutput) => void
  ): void;
  describePipelineDefinitionForExecution(
    args: DescribePipelineDefinitionForExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipelineDefinitionForExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePipelineExecutionCommand}
   */
  describePipelineExecution(
    args: DescribePipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipelineExecutionCommandOutput>;
  describePipelineExecution(
    args: DescribePipelineExecutionCommandInput,
    cb: (err: any, data?: DescribePipelineExecutionCommandOutput) => void
  ): void;
  describePipelineExecution(
    args: DescribePipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipelineExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProcessingJobCommand}
   */
  describeProcessingJob(
    args: DescribeProcessingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProcessingJobCommandOutput>;
  describeProcessingJob(
    args: DescribeProcessingJobCommandInput,
    cb: (err: any, data?: DescribeProcessingJobCommandOutput) => void
  ): void;
  describeProcessingJob(
    args: DescribeProcessingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProcessingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectCommand}
   */
  describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
  describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSpaceCommand}
   */
  describeSpace(args: DescribeSpaceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSpaceCommandOutput>;
  describeSpace(args: DescribeSpaceCommandInput, cb: (err: any, data?: DescribeSpaceCommandOutput) => void): void;
  describeSpace(
    args: DescribeSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStudioLifecycleConfigCommand}
   */
  describeStudioLifecycleConfig(
    args: DescribeStudioLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStudioLifecycleConfigCommandOutput>;
  describeStudioLifecycleConfig(
    args: DescribeStudioLifecycleConfigCommandInput,
    cb: (err: any, data?: DescribeStudioLifecycleConfigCommandOutput) => void
  ): void;
  describeStudioLifecycleConfig(
    args: DescribeStudioLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStudioLifecycleConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSubscribedWorkteamCommand}
   */
  describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSubscribedWorkteamCommandOutput>;
  describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamCommandInput,
    cb: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void
  ): void;
  describeSubscribedWorkteam(
    args: DescribeSubscribedWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrainingJobCommand}
   */
  describeTrainingJob(
    args: DescribeTrainingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrainingJobCommandOutput>;
  describeTrainingJob(
    args: DescribeTrainingJobCommandInput,
    cb: (err: any, data?: DescribeTrainingJobCommandOutput) => void
  ): void;
  describeTrainingJob(
    args: DescribeTrainingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrainingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransformJobCommand}
   */
  describeTransformJob(
    args: DescribeTransformJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransformJobCommandOutput>;
  describeTransformJob(
    args: DescribeTransformJobCommandInput,
    cb: (err: any, data?: DescribeTransformJobCommandOutput) => void
  ): void;
  describeTransformJob(
    args: DescribeTransformJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransformJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrialCommand}
   */
  describeTrial(args: DescribeTrialCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrialCommandOutput>;
  describeTrial(args: DescribeTrialCommandInput, cb: (err: any, data?: DescribeTrialCommandOutput) => void): void;
  describeTrial(
    args: DescribeTrialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrialCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTrialComponentCommand}
   */
  describeTrialComponent(
    args: DescribeTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTrialComponentCommandOutput>;
  describeTrialComponent(
    args: DescribeTrialComponentCommandInput,
    cb: (err: any, data?: DescribeTrialComponentCommandOutput) => void
  ): void;
  describeTrialComponent(
    args: DescribeTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTrialComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeUserProfileCommand}
   */
  describeUserProfile(
    args: DescribeUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserProfileCommandOutput>;
  describeUserProfile(
    args: DescribeUserProfileCommandInput,
    cb: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): void;
  describeUserProfile(
    args: DescribeUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkforceCommand}
   */
  describeWorkforce(
    args: DescribeWorkforceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkforceCommandOutput>;
  describeWorkforce(
    args: DescribeWorkforceCommandInput,
    cb: (err: any, data?: DescribeWorkforceCommandOutput) => void
  ): void;
  describeWorkforce(
    args: DescribeWorkforceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkforceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkteamCommand}
   */
  describeWorkteam(
    args: DescribeWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkteamCommandOutput>;
  describeWorkteam(
    args: DescribeWorkteamCommandInput,
    cb: (err: any, data?: DescribeWorkteamCommandOutput) => void
  ): void;
  describeWorkteam(
    args: DescribeWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkteamCommandOutput) => void
  ): void;

  /**
   * @see {@link DisableSagemakerServicecatalogPortfolioCommand}
   */
  disableSagemakerServicecatalogPortfolio(
    args: DisableSagemakerServicecatalogPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableSagemakerServicecatalogPortfolioCommandOutput>;
  disableSagemakerServicecatalogPortfolio(
    args: DisableSagemakerServicecatalogPortfolioCommandInput,
    cb: (err: any, data?: DisableSagemakerServicecatalogPortfolioCommandOutput) => void
  ): void;
  disableSagemakerServicecatalogPortfolio(
    args: DisableSagemakerServicecatalogPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableSagemakerServicecatalogPortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTrialComponentCommand}
   */
  disassociateTrialComponent(
    args: DisassociateTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTrialComponentCommandOutput>;
  disassociateTrialComponent(
    args: DisassociateTrialComponentCommandInput,
    cb: (err: any, data?: DisassociateTrialComponentCommandOutput) => void
  ): void;
  disassociateTrialComponent(
    args: DisassociateTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTrialComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link EnableSagemakerServicecatalogPortfolioCommand}
   */
  enableSagemakerServicecatalogPortfolio(
    args: EnableSagemakerServicecatalogPortfolioCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSagemakerServicecatalogPortfolioCommandOutput>;
  enableSagemakerServicecatalogPortfolio(
    args: EnableSagemakerServicecatalogPortfolioCommandInput,
    cb: (err: any, data?: EnableSagemakerServicecatalogPortfolioCommandOutput) => void
  ): void;
  enableSagemakerServicecatalogPortfolio(
    args: EnableSagemakerServicecatalogPortfolioCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSagemakerServicecatalogPortfolioCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceFleetReportCommand}
   */
  getDeviceFleetReport(
    args: GetDeviceFleetReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceFleetReportCommandOutput>;
  getDeviceFleetReport(
    args: GetDeviceFleetReportCommandInput,
    cb: (err: any, data?: GetDeviceFleetReportCommandOutput) => void
  ): void;
  getDeviceFleetReport(
    args: GetDeviceFleetReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceFleetReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLineageGroupPolicyCommand}
   */
  getLineageGroupPolicy(
    args: GetLineageGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLineageGroupPolicyCommandOutput>;
  getLineageGroupPolicy(
    args: GetLineageGroupPolicyCommandInput,
    cb: (err: any, data?: GetLineageGroupPolicyCommandOutput) => void
  ): void;
  getLineageGroupPolicy(
    args: GetLineageGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLineageGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetModelPackageGroupPolicyCommand}
   */
  getModelPackageGroupPolicy(
    args: GetModelPackageGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelPackageGroupPolicyCommandOutput>;
  getModelPackageGroupPolicy(
    args: GetModelPackageGroupPolicyCommandInput,
    cb: (err: any, data?: GetModelPackageGroupPolicyCommandOutput) => void
  ): void;
  getModelPackageGroupPolicy(
    args: GetModelPackageGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelPackageGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSagemakerServicecatalogPortfolioStatusCommand}
   */
  getSagemakerServicecatalogPortfolioStatus(
    args: GetSagemakerServicecatalogPortfolioStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSagemakerServicecatalogPortfolioStatusCommandOutput>;
  getSagemakerServicecatalogPortfolioStatus(
    args: GetSagemakerServicecatalogPortfolioStatusCommandInput,
    cb: (err: any, data?: GetSagemakerServicecatalogPortfolioStatusCommandOutput) => void
  ): void;
  getSagemakerServicecatalogPortfolioStatus(
    args: GetSagemakerServicecatalogPortfolioStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSagemakerServicecatalogPortfolioStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSearchSuggestionsCommand}
   */
  getSearchSuggestions(
    args: GetSearchSuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSearchSuggestionsCommandOutput>;
  getSearchSuggestions(
    args: GetSearchSuggestionsCommandInput,
    cb: (err: any, data?: GetSearchSuggestionsCommandOutput) => void
  ): void;
  getSearchSuggestions(
    args: GetSearchSuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSearchSuggestionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportHubContentCommand}
   */
  importHubContent(
    args: ImportHubContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportHubContentCommandOutput>;
  importHubContent(
    args: ImportHubContentCommandInput,
    cb: (err: any, data?: ImportHubContentCommandOutput) => void
  ): void;
  importHubContent(
    args: ImportHubContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportHubContentCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActionsCommand}
   */
  listActions(args: ListActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListActionsCommandOutput>;
  listActions(args: ListActionsCommandInput, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
  listActions(
    args: ListActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlgorithmsCommand}
   */
  listAlgorithms(
    args: ListAlgorithmsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAlgorithmsCommandOutput>;
  listAlgorithms(args: ListAlgorithmsCommandInput, cb: (err: any, data?: ListAlgorithmsCommandOutput) => void): void;
  listAlgorithms(
    args: ListAlgorithmsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlgorithmsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAliasesCommand}
   */
  listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppImageConfigsCommand}
   */
  listAppImageConfigs(
    args: ListAppImageConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppImageConfigsCommandOutput>;
  listAppImageConfigs(
    args: ListAppImageConfigsCommandInput,
    cb: (err: any, data?: ListAppImageConfigsCommandOutput) => void
  ): void;
  listAppImageConfigs(
    args: ListAppImageConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppImageConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAppsCommand}
   */
  listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
  listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
  listApps(
    args: ListAppsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArtifactsCommand}
   */
  listArtifacts(args: ListArtifactsCommandInput, options?: __HttpHandlerOptions): Promise<ListArtifactsCommandOutput>;
  listArtifacts(args: ListArtifactsCommandInput, cb: (err: any, data?: ListArtifactsCommandOutput) => void): void;
  listArtifacts(
    args: ListArtifactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArtifactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociationsCommand}
   */
  listAssociations(
    args: ListAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociationsCommandOutput>;
  listAssociations(
    args: ListAssociationsCommandInput,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;
  listAssociations(
    args: ListAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAutoMLJobsCommand}
   */
  listAutoMLJobs(
    args: ListAutoMLJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAutoMLJobsCommandOutput>;
  listAutoMLJobs(args: ListAutoMLJobsCommandInput, cb: (err: any, data?: ListAutoMLJobsCommandOutput) => void): void;
  listAutoMLJobs(
    args: ListAutoMLJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAutoMLJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCandidatesForAutoMLJobCommand}
   */
  listCandidatesForAutoMLJob(
    args: ListCandidatesForAutoMLJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCandidatesForAutoMLJobCommandOutput>;
  listCandidatesForAutoMLJob(
    args: ListCandidatesForAutoMLJobCommandInput,
    cb: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void
  ): void;
  listCandidatesForAutoMLJob(
    args: ListCandidatesForAutoMLJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCodeRepositoriesCommand}
   */
  listCodeRepositories(
    args: ListCodeRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCodeRepositoriesCommandOutput>;
  listCodeRepositories(
    args: ListCodeRepositoriesCommandInput,
    cb: (err: any, data?: ListCodeRepositoriesCommandOutput) => void
  ): void;
  listCodeRepositories(
    args: ListCodeRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCodeRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCompilationJobsCommand}
   */
  listCompilationJobs(
    args: ListCompilationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCompilationJobsCommandOutput>;
  listCompilationJobs(
    args: ListCompilationJobsCommandInput,
    cb: (err: any, data?: ListCompilationJobsCommandOutput) => void
  ): void;
  listCompilationJobs(
    args: ListCompilationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCompilationJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContextsCommand}
   */
  listContexts(args: ListContextsCommandInput, options?: __HttpHandlerOptions): Promise<ListContextsCommandOutput>;
  listContexts(args: ListContextsCommandInput, cb: (err: any, data?: ListContextsCommandOutput) => void): void;
  listContexts(
    args: ListContextsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContextsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataQualityJobDefinitionsCommand}
   */
  listDataQualityJobDefinitions(
    args: ListDataQualityJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataQualityJobDefinitionsCommandOutput>;
  listDataQualityJobDefinitions(
    args: ListDataQualityJobDefinitionsCommandInput,
    cb: (err: any, data?: ListDataQualityJobDefinitionsCommandOutput) => void
  ): void;
  listDataQualityJobDefinitions(
    args: ListDataQualityJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataQualityJobDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDeviceFleetsCommand}
   */
  listDeviceFleets(
    args: ListDeviceFleetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDeviceFleetsCommandOutput>;
  listDeviceFleets(
    args: ListDeviceFleetsCommandInput,
    cb: (err: any, data?: ListDeviceFleetsCommandOutput) => void
  ): void;
  listDeviceFleets(
    args: ListDeviceFleetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDeviceFleetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
  listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEdgeDeploymentPlansCommand}
   */
  listEdgeDeploymentPlans(
    args: ListEdgeDeploymentPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEdgeDeploymentPlansCommandOutput>;
  listEdgeDeploymentPlans(
    args: ListEdgeDeploymentPlansCommandInput,
    cb: (err: any, data?: ListEdgeDeploymentPlansCommandOutput) => void
  ): void;
  listEdgeDeploymentPlans(
    args: ListEdgeDeploymentPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEdgeDeploymentPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEdgePackagingJobsCommand}
   */
  listEdgePackagingJobs(
    args: ListEdgePackagingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEdgePackagingJobsCommandOutput>;
  listEdgePackagingJobs(
    args: ListEdgePackagingJobsCommandInput,
    cb: (err: any, data?: ListEdgePackagingJobsCommandOutput) => void
  ): void;
  listEdgePackagingJobs(
    args: ListEdgePackagingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEdgePackagingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointConfigsCommand}
   */
  listEndpointConfigs(
    args: ListEndpointConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointConfigsCommandOutput>;
  listEndpointConfigs(
    args: ListEndpointConfigsCommandInput,
    cb: (err: any, data?: ListEndpointConfigsCommandOutput) => void
  ): void;
  listEndpointConfigs(
    args: ListEndpointConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEndpointsCommand}
   */
  listEndpoints(args: ListEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointsCommandOutput>;
  listEndpoints(args: ListEndpointsCommandInput, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
  listEndpoints(
    args: ListEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExperimentsCommand}
   */
  listExperiments(
    args: ListExperimentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentsCommandOutput>;
  listExperiments(args: ListExperimentsCommandInput, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
  listExperiments(
    args: ListExperimentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFeatureGroupsCommand}
   */
  listFeatureGroups(
    args: ListFeatureGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFeatureGroupsCommandOutput>;
  listFeatureGroups(
    args: ListFeatureGroupsCommandInput,
    cb: (err: any, data?: ListFeatureGroupsCommandOutput) => void
  ): void;
  listFeatureGroups(
    args: ListFeatureGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFeatureGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFlowDefinitionsCommand}
   */
  listFlowDefinitions(
    args: ListFlowDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFlowDefinitionsCommandOutput>;
  listFlowDefinitions(
    args: ListFlowDefinitionsCommandInput,
    cb: (err: any, data?: ListFlowDefinitionsCommandOutput) => void
  ): void;
  listFlowDefinitions(
    args: ListFlowDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFlowDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHubContentsCommand}
   */
  listHubContents(
    args: ListHubContentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHubContentsCommandOutput>;
  listHubContents(args: ListHubContentsCommandInput, cb: (err: any, data?: ListHubContentsCommandOutput) => void): void;
  listHubContents(
    args: ListHubContentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHubContentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHubContentVersionsCommand}
   */
  listHubContentVersions(
    args: ListHubContentVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHubContentVersionsCommandOutput>;
  listHubContentVersions(
    args: ListHubContentVersionsCommandInput,
    cb: (err: any, data?: ListHubContentVersionsCommandOutput) => void
  ): void;
  listHubContentVersions(
    args: ListHubContentVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHubContentVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHubsCommand}
   */
  listHubs(args: ListHubsCommandInput, options?: __HttpHandlerOptions): Promise<ListHubsCommandOutput>;
  listHubs(args: ListHubsCommandInput, cb: (err: any, data?: ListHubsCommandOutput) => void): void;
  listHubs(
    args: ListHubsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHubsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHumanTaskUisCommand}
   */
  listHumanTaskUis(
    args: ListHumanTaskUisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHumanTaskUisCommandOutput>;
  listHumanTaskUis(
    args: ListHumanTaskUisCommandInput,
    cb: (err: any, data?: ListHumanTaskUisCommandOutput) => void
  ): void;
  listHumanTaskUis(
    args: ListHumanTaskUisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHumanTaskUisCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHyperParameterTuningJobsCommand}
   */
  listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHyperParameterTuningJobsCommandOutput>;
  listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsCommandInput,
    cb: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void
  ): void;
  listHyperParameterTuningJobs(
    args: ListHyperParameterTuningJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImagesCommand}
   */
  listImages(args: ListImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagesCommandOutput>;
  listImages(args: ListImagesCommandInput, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
  listImages(
    args: ListImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListImageVersionsCommand}
   */
  listImageVersions(
    args: ListImageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListImageVersionsCommandOutput>;
  listImageVersions(
    args: ListImageVersionsCommandInput,
    cb: (err: any, data?: ListImageVersionsCommandOutput) => void
  ): void;
  listImageVersions(
    args: ListImageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListImageVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInferenceExperimentsCommand}
   */
  listInferenceExperiments(
    args: ListInferenceExperimentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceExperimentsCommandOutput>;
  listInferenceExperiments(
    args: ListInferenceExperimentsCommandInput,
    cb: (err: any, data?: ListInferenceExperimentsCommandOutput) => void
  ): void;
  listInferenceExperiments(
    args: ListInferenceExperimentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceExperimentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInferenceRecommendationsJobsCommand}
   */
  listInferenceRecommendationsJobs(
    args: ListInferenceRecommendationsJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceRecommendationsJobsCommandOutput>;
  listInferenceRecommendationsJobs(
    args: ListInferenceRecommendationsJobsCommandInput,
    cb: (err: any, data?: ListInferenceRecommendationsJobsCommandOutput) => void
  ): void;
  listInferenceRecommendationsJobs(
    args: ListInferenceRecommendationsJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceRecommendationsJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInferenceRecommendationsJobStepsCommand}
   */
  listInferenceRecommendationsJobSteps(
    args: ListInferenceRecommendationsJobStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInferenceRecommendationsJobStepsCommandOutput>;
  listInferenceRecommendationsJobSteps(
    args: ListInferenceRecommendationsJobStepsCommandInput,
    cb: (err: any, data?: ListInferenceRecommendationsJobStepsCommandOutput) => void
  ): void;
  listInferenceRecommendationsJobSteps(
    args: ListInferenceRecommendationsJobStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInferenceRecommendationsJobStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLabelingJobsCommand}
   */
  listLabelingJobs(
    args: ListLabelingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLabelingJobsCommandOutput>;
  listLabelingJobs(
    args: ListLabelingJobsCommandInput,
    cb: (err: any, data?: ListLabelingJobsCommandOutput) => void
  ): void;
  listLabelingJobs(
    args: ListLabelingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLabelingJobsForWorkteamCommand}
   */
  listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLabelingJobsForWorkteamCommandOutput>;
  listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamCommandInput,
    cb: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void
  ): void;
  listLabelingJobsForWorkteam(
    args: ListLabelingJobsForWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLineageGroupsCommand}
   */
  listLineageGroups(
    args: ListLineageGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLineageGroupsCommandOutput>;
  listLineageGroups(
    args: ListLineageGroupsCommandInput,
    cb: (err: any, data?: ListLineageGroupsCommandOutput) => void
  ): void;
  listLineageGroups(
    args: ListLineageGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLineageGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelBiasJobDefinitionsCommand}
   */
  listModelBiasJobDefinitions(
    args: ListModelBiasJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelBiasJobDefinitionsCommandOutput>;
  listModelBiasJobDefinitions(
    args: ListModelBiasJobDefinitionsCommandInput,
    cb: (err: any, data?: ListModelBiasJobDefinitionsCommandOutput) => void
  ): void;
  listModelBiasJobDefinitions(
    args: ListModelBiasJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelBiasJobDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelCardExportJobsCommand}
   */
  listModelCardExportJobs(
    args: ListModelCardExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelCardExportJobsCommandOutput>;
  listModelCardExportJobs(
    args: ListModelCardExportJobsCommandInput,
    cb: (err: any, data?: ListModelCardExportJobsCommandOutput) => void
  ): void;
  listModelCardExportJobs(
    args: ListModelCardExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelCardExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelCardsCommand}
   */
  listModelCards(
    args: ListModelCardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelCardsCommandOutput>;
  listModelCards(args: ListModelCardsCommandInput, cb: (err: any, data?: ListModelCardsCommandOutput) => void): void;
  listModelCards(
    args: ListModelCardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelCardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelCardVersionsCommand}
   */
  listModelCardVersions(
    args: ListModelCardVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelCardVersionsCommandOutput>;
  listModelCardVersions(
    args: ListModelCardVersionsCommandInput,
    cb: (err: any, data?: ListModelCardVersionsCommandOutput) => void
  ): void;
  listModelCardVersions(
    args: ListModelCardVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelCardVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelExplainabilityJobDefinitionsCommand}
   */
  listModelExplainabilityJobDefinitions(
    args: ListModelExplainabilityJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelExplainabilityJobDefinitionsCommandOutput>;
  listModelExplainabilityJobDefinitions(
    args: ListModelExplainabilityJobDefinitionsCommandInput,
    cb: (err: any, data?: ListModelExplainabilityJobDefinitionsCommandOutput) => void
  ): void;
  listModelExplainabilityJobDefinitions(
    args: ListModelExplainabilityJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelExplainabilityJobDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelMetadataCommand}
   */
  listModelMetadata(
    args: ListModelMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelMetadataCommandOutput>;
  listModelMetadata(
    args: ListModelMetadataCommandInput,
    cb: (err: any, data?: ListModelMetadataCommandOutput) => void
  ): void;
  listModelMetadata(
    args: ListModelMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelPackageGroupsCommand}
   */
  listModelPackageGroups(
    args: ListModelPackageGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelPackageGroupsCommandOutput>;
  listModelPackageGroups(
    args: ListModelPackageGroupsCommandInput,
    cb: (err: any, data?: ListModelPackageGroupsCommandOutput) => void
  ): void;
  listModelPackageGroups(
    args: ListModelPackageGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelPackageGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelPackagesCommand}
   */
  listModelPackages(
    args: ListModelPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelPackagesCommandOutput>;
  listModelPackages(
    args: ListModelPackagesCommandInput,
    cb: (err: any, data?: ListModelPackagesCommandOutput) => void
  ): void;
  listModelPackages(
    args: ListModelPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelPackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelQualityJobDefinitionsCommand}
   */
  listModelQualityJobDefinitions(
    args: ListModelQualityJobDefinitionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListModelQualityJobDefinitionsCommandOutput>;
  listModelQualityJobDefinitions(
    args: ListModelQualityJobDefinitionsCommandInput,
    cb: (err: any, data?: ListModelQualityJobDefinitionsCommandOutput) => void
  ): void;
  listModelQualityJobDefinitions(
    args: ListModelQualityJobDefinitionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelQualityJobDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListModelsCommand}
   */
  listModels(args: ListModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelsCommandOutput>;
  listModels(args: ListModelsCommandInput, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
  listModels(
    args: ListModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitoringAlertHistoryCommand}
   */
  listMonitoringAlertHistory(
    args: ListMonitoringAlertHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitoringAlertHistoryCommandOutput>;
  listMonitoringAlertHistory(
    args: ListMonitoringAlertHistoryCommandInput,
    cb: (err: any, data?: ListMonitoringAlertHistoryCommandOutput) => void
  ): void;
  listMonitoringAlertHistory(
    args: ListMonitoringAlertHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitoringAlertHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitoringAlertsCommand}
   */
  listMonitoringAlerts(
    args: ListMonitoringAlertsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitoringAlertsCommandOutput>;
  listMonitoringAlerts(
    args: ListMonitoringAlertsCommandInput,
    cb: (err: any, data?: ListMonitoringAlertsCommandOutput) => void
  ): void;
  listMonitoringAlerts(
    args: ListMonitoringAlertsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitoringAlertsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitoringExecutionsCommand}
   */
  listMonitoringExecutions(
    args: ListMonitoringExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitoringExecutionsCommandOutput>;
  listMonitoringExecutions(
    args: ListMonitoringExecutionsCommandInput,
    cb: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void
  ): void;
  listMonitoringExecutions(
    args: ListMonitoringExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitoringSchedulesCommand}
   */
  listMonitoringSchedules(
    args: ListMonitoringSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitoringSchedulesCommandOutput>;
  listMonitoringSchedules(
    args: ListMonitoringSchedulesCommandInput,
    cb: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void
  ): void;
  listMonitoringSchedules(
    args: ListMonitoringSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotebookInstanceLifecycleConfigsCommand}
   */
  listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput>;
  listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsCommandInput,
    cb: (err: any, data?: ListNotebookInstanceLifecycleConfigsCommandOutput) => void
  ): void;
  listNotebookInstanceLifecycleConfigs(
    args: ListNotebookInstanceLifecycleConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotebookInstanceLifecycleConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListNotebookInstancesCommand}
   */
  listNotebookInstances(
    args: ListNotebookInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNotebookInstancesCommandOutput>;
  listNotebookInstances(
    args: ListNotebookInstancesCommandInput,
    cb: (err: any, data?: ListNotebookInstancesCommandOutput) => void
  ): void;
  listNotebookInstances(
    args: ListNotebookInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNotebookInstancesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelineExecutionsCommand}
   */
  listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelineExecutionsCommandOutput>;
  listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void
  ): void;
  listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelineExecutionStepsCommand}
   */
  listPipelineExecutionSteps(
    args: ListPipelineExecutionStepsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelineExecutionStepsCommandOutput>;
  listPipelineExecutionSteps(
    args: ListPipelineExecutionStepsCommandInput,
    cb: (err: any, data?: ListPipelineExecutionStepsCommandOutput) => void
  ): void;
  listPipelineExecutionSteps(
    args: ListPipelineExecutionStepsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelineExecutionStepsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelineParametersForExecutionCommand}
   */
  listPipelineParametersForExecution(
    args: ListPipelineParametersForExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelineParametersForExecutionCommandOutput>;
  listPipelineParametersForExecution(
    args: ListPipelineParametersForExecutionCommandInput,
    cb: (err: any, data?: ListPipelineParametersForExecutionCommandOutput) => void
  ): void;
  listPipelineParametersForExecution(
    args: ListPipelineParametersForExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelineParametersForExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPipelinesCommand}
   */
  listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
  listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
  listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProcessingJobsCommand}
   */
  listProcessingJobs(
    args: ListProcessingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProcessingJobsCommandOutput>;
  listProcessingJobs(
    args: ListProcessingJobsCommandInput,
    cb: (err: any, data?: ListProcessingJobsCommandOutput) => void
  ): void;
  listProcessingJobs(
    args: ListProcessingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProcessingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSpacesCommand}
   */
  listSpaces(args: ListSpacesCommandInput, options?: __HttpHandlerOptions): Promise<ListSpacesCommandOutput>;
  listSpaces(args: ListSpacesCommandInput, cb: (err: any, data?: ListSpacesCommandOutput) => void): void;
  listSpaces(
    args: ListSpacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSpacesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStageDevicesCommand}
   */
  listStageDevices(
    args: ListStageDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStageDevicesCommandOutput>;
  listStageDevices(
    args: ListStageDevicesCommandInput,
    cb: (err: any, data?: ListStageDevicesCommandOutput) => void
  ): void;
  listStageDevices(
    args: ListStageDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStageDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStudioLifecycleConfigsCommand}
   */
  listStudioLifecycleConfigs(
    args: ListStudioLifecycleConfigsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStudioLifecycleConfigsCommandOutput>;
  listStudioLifecycleConfigs(
    args: ListStudioLifecycleConfigsCommandInput,
    cb: (err: any, data?: ListStudioLifecycleConfigsCommandOutput) => void
  ): void;
  listStudioLifecycleConfigs(
    args: ListStudioLifecycleConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStudioLifecycleConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSubscribedWorkteamsCommand}
   */
  listSubscribedWorkteams(
    args: ListSubscribedWorkteamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSubscribedWorkteamsCommandOutput>;
  listSubscribedWorkteams(
    args: ListSubscribedWorkteamsCommandInput,
    cb: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void
  ): void;
  listSubscribedWorkteams(
    args: ListSubscribedWorkteamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrainingJobsCommand}
   */
  listTrainingJobs(
    args: ListTrainingJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrainingJobsCommandOutput>;
  listTrainingJobs(
    args: ListTrainingJobsCommandInput,
    cb: (err: any, data?: ListTrainingJobsCommandOutput) => void
  ): void;
  listTrainingJobs(
    args: ListTrainingJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrainingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrainingJobsForHyperParameterTuningJobCommand}
   */
  listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput>;
  listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    cb: (err: any, data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput) => void
  ): void;
  listTrainingJobsForHyperParameterTuningJob(
    args: ListTrainingJobsForHyperParameterTuningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTransformJobsCommand}
   */
  listTransformJobs(
    args: ListTransformJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTransformJobsCommandOutput>;
  listTransformJobs(
    args: ListTransformJobsCommandInput,
    cb: (err: any, data?: ListTransformJobsCommandOutput) => void
  ): void;
  listTransformJobs(
    args: ListTransformJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTransformJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrialComponentsCommand}
   */
  listTrialComponents(
    args: ListTrialComponentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTrialComponentsCommandOutput>;
  listTrialComponents(
    args: ListTrialComponentsCommandInput,
    cb: (err: any, data?: ListTrialComponentsCommandOutput) => void
  ): void;
  listTrialComponents(
    args: ListTrialComponentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrialComponentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTrialsCommand}
   */
  listTrials(args: ListTrialsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrialsCommandOutput>;
  listTrials(args: ListTrialsCommandInput, cb: (err: any, data?: ListTrialsCommandOutput) => void): void;
  listTrials(
    args: ListTrialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTrialsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListUserProfilesCommand}
   */
  listUserProfiles(
    args: ListUserProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListUserProfilesCommandOutput>;
  listUserProfiles(
    args: ListUserProfilesCommandInput,
    cb: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): void;
  listUserProfiles(
    args: ListUserProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUserProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkforcesCommand}
   */
  listWorkforces(
    args: ListWorkforcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkforcesCommandOutput>;
  listWorkforces(args: ListWorkforcesCommandInput, cb: (err: any, data?: ListWorkforcesCommandOutput) => void): void;
  listWorkforces(
    args: ListWorkforcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkforcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWorkteamsCommand}
   */
  listWorkteams(args: ListWorkteamsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkteamsCommandOutput>;
  listWorkteams(args: ListWorkteamsCommandInput, cb: (err: any, data?: ListWorkteamsCommandOutput) => void): void;
  listWorkteams(
    args: ListWorkteamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkteamsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutModelPackageGroupPolicyCommand}
   */
  putModelPackageGroupPolicy(
    args: PutModelPackageGroupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutModelPackageGroupPolicyCommandOutput>;
  putModelPackageGroupPolicy(
    args: PutModelPackageGroupPolicyCommandInput,
    cb: (err: any, data?: PutModelPackageGroupPolicyCommandOutput) => void
  ): void;
  putModelPackageGroupPolicy(
    args: PutModelPackageGroupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutModelPackageGroupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link QueryLineageCommand}
   */
  queryLineage(args: QueryLineageCommandInput, options?: __HttpHandlerOptions): Promise<QueryLineageCommandOutput>;
  queryLineage(args: QueryLineageCommandInput, cb: (err: any, data?: QueryLineageCommandOutput) => void): void;
  queryLineage(
    args: QueryLineageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryLineageCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterDevicesCommand}
   */
  registerDevices(
    args: RegisterDevicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterDevicesCommandOutput>;
  registerDevices(args: RegisterDevicesCommandInput, cb: (err: any, data?: RegisterDevicesCommandOutput) => void): void;
  registerDevices(
    args: RegisterDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link RenderUiTemplateCommand}
   */
  renderUiTemplate(
    args: RenderUiTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RenderUiTemplateCommandOutput>;
  renderUiTemplate(
    args: RenderUiTemplateCommandInput,
    cb: (err: any, data?: RenderUiTemplateCommandOutput) => void
  ): void;
  renderUiTemplate(
    args: RenderUiTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RenderUiTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link RetryPipelineExecutionCommand}
   */
  retryPipelineExecution(
    args: RetryPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryPipelineExecutionCommandOutput>;
  retryPipelineExecution(
    args: RetryPipelineExecutionCommandInput,
    cb: (err: any, data?: RetryPipelineExecutionCommandOutput) => void
  ): void;
  retryPipelineExecution(
    args: RetryPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryPipelineExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchCommand}
   */
  search(args: SearchCommandInput, options?: __HttpHandlerOptions): Promise<SearchCommandOutput>;
  search(args: SearchCommandInput, cb: (err: any, data?: SearchCommandOutput) => void): void;
  search(
    args: SearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCommandOutput) => void
  ): void;

  /**
   * @see {@link SendPipelineExecutionStepFailureCommand}
   */
  sendPipelineExecutionStepFailure(
    args: SendPipelineExecutionStepFailureCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendPipelineExecutionStepFailureCommandOutput>;
  sendPipelineExecutionStepFailure(
    args: SendPipelineExecutionStepFailureCommandInput,
    cb: (err: any, data?: SendPipelineExecutionStepFailureCommandOutput) => void
  ): void;
  sendPipelineExecutionStepFailure(
    args: SendPipelineExecutionStepFailureCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendPipelineExecutionStepFailureCommandOutput) => void
  ): void;

  /**
   * @see {@link SendPipelineExecutionStepSuccessCommand}
   */
  sendPipelineExecutionStepSuccess(
    args: SendPipelineExecutionStepSuccessCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendPipelineExecutionStepSuccessCommandOutput>;
  sendPipelineExecutionStepSuccess(
    args: SendPipelineExecutionStepSuccessCommandInput,
    cb: (err: any, data?: SendPipelineExecutionStepSuccessCommandOutput) => void
  ): void;
  sendPipelineExecutionStepSuccess(
    args: SendPipelineExecutionStepSuccessCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendPipelineExecutionStepSuccessCommandOutput) => void
  ): void;

  /**
   * @see {@link StartEdgeDeploymentStageCommand}
   */
  startEdgeDeploymentStage(
    args: StartEdgeDeploymentStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartEdgeDeploymentStageCommandOutput>;
  startEdgeDeploymentStage(
    args: StartEdgeDeploymentStageCommandInput,
    cb: (err: any, data?: StartEdgeDeploymentStageCommandOutput) => void
  ): void;
  startEdgeDeploymentStage(
    args: StartEdgeDeploymentStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartEdgeDeploymentStageCommandOutput) => void
  ): void;

  /**
   * @see {@link StartInferenceExperimentCommand}
   */
  startInferenceExperiment(
    args: StartInferenceExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartInferenceExperimentCommandOutput>;
  startInferenceExperiment(
    args: StartInferenceExperimentCommandInput,
    cb: (err: any, data?: StartInferenceExperimentCommandOutput) => void
  ): void;
  startInferenceExperiment(
    args: StartInferenceExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartInferenceExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMonitoringScheduleCommand}
   */
  startMonitoringSchedule(
    args: StartMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMonitoringScheduleCommandOutput>;
  startMonitoringSchedule(
    args: StartMonitoringScheduleCommandInput,
    cb: (err: any, data?: StartMonitoringScheduleCommandOutput) => void
  ): void;
  startMonitoringSchedule(
    args: StartMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMonitoringScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StartNotebookInstanceCommand}
   */
  startNotebookInstance(
    args: StartNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartNotebookInstanceCommandOutput>;
  startNotebookInstance(
    args: StartNotebookInstanceCommandInput,
    cb: (err: any, data?: StartNotebookInstanceCommandOutput) => void
  ): void;
  startNotebookInstance(
    args: StartNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartNotebookInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartPipelineExecutionCommand}
   */
  startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPipelineExecutionCommandOutput>;
  startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void
  ): void;
  startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAutoMLJobCommand}
   */
  stopAutoMLJob(args: StopAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<StopAutoMLJobCommandOutput>;
  stopAutoMLJob(args: StopAutoMLJobCommandInput, cb: (err: any, data?: StopAutoMLJobCommandOutput) => void): void;
  stopAutoMLJob(
    args: StopAutoMLJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAutoMLJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCompilationJobCommand}
   */
  stopCompilationJob(
    args: StopCompilationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCompilationJobCommandOutput>;
  stopCompilationJob(
    args: StopCompilationJobCommandInput,
    cb: (err: any, data?: StopCompilationJobCommandOutput) => void
  ): void;
  stopCompilationJob(
    args: StopCompilationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCompilationJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEdgeDeploymentStageCommand}
   */
  stopEdgeDeploymentStage(
    args: StopEdgeDeploymentStageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEdgeDeploymentStageCommandOutput>;
  stopEdgeDeploymentStage(
    args: StopEdgeDeploymentStageCommandInput,
    cb: (err: any, data?: StopEdgeDeploymentStageCommandOutput) => void
  ): void;
  stopEdgeDeploymentStage(
    args: StopEdgeDeploymentStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEdgeDeploymentStageCommandOutput) => void
  ): void;

  /**
   * @see {@link StopEdgePackagingJobCommand}
   */
  stopEdgePackagingJob(
    args: StopEdgePackagingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopEdgePackagingJobCommandOutput>;
  stopEdgePackagingJob(
    args: StopEdgePackagingJobCommandInput,
    cb: (err: any, data?: StopEdgePackagingJobCommandOutput) => void
  ): void;
  stopEdgePackagingJob(
    args: StopEdgePackagingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopEdgePackagingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopHyperParameterTuningJobCommand}
   */
  stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopHyperParameterTuningJobCommandOutput>;
  stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobCommandInput,
    cb: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void
  ): void;
  stopHyperParameterTuningJob(
    args: StopHyperParameterTuningJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopInferenceExperimentCommand}
   */
  stopInferenceExperiment(
    args: StopInferenceExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopInferenceExperimentCommandOutput>;
  stopInferenceExperiment(
    args: StopInferenceExperimentCommandInput,
    cb: (err: any, data?: StopInferenceExperimentCommandOutput) => void
  ): void;
  stopInferenceExperiment(
    args: StopInferenceExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInferenceExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link StopInferenceRecommendationsJobCommand}
   */
  stopInferenceRecommendationsJob(
    args: StopInferenceRecommendationsJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopInferenceRecommendationsJobCommandOutput>;
  stopInferenceRecommendationsJob(
    args: StopInferenceRecommendationsJobCommandInput,
    cb: (err: any, data?: StopInferenceRecommendationsJobCommandOutput) => void
  ): void;
  stopInferenceRecommendationsJob(
    args: StopInferenceRecommendationsJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopInferenceRecommendationsJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopLabelingJobCommand}
   */
  stopLabelingJob(
    args: StopLabelingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopLabelingJobCommandOutput>;
  stopLabelingJob(args: StopLabelingJobCommandInput, cb: (err: any, data?: StopLabelingJobCommandOutput) => void): void;
  stopLabelingJob(
    args: StopLabelingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopLabelingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopMonitoringScheduleCommand}
   */
  stopMonitoringSchedule(
    args: StopMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopMonitoringScheduleCommandOutput>;
  stopMonitoringSchedule(
    args: StopMonitoringScheduleCommandInput,
    cb: (err: any, data?: StopMonitoringScheduleCommandOutput) => void
  ): void;
  stopMonitoringSchedule(
    args: StopMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopMonitoringScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link StopNotebookInstanceCommand}
   */
  stopNotebookInstance(
    args: StopNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopNotebookInstanceCommandOutput>;
  stopNotebookInstance(
    args: StopNotebookInstanceCommandInput,
    cb: (err: any, data?: StopNotebookInstanceCommandOutput) => void
  ): void;
  stopNotebookInstance(
    args: StopNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopNotebookInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopPipelineExecutionCommand}
   */
  stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopPipelineExecutionCommandOutput>;
  stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void
  ): void;
  stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopProcessingJobCommand}
   */
  stopProcessingJob(
    args: StopProcessingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopProcessingJobCommandOutput>;
  stopProcessingJob(
    args: StopProcessingJobCommandInput,
    cb: (err: any, data?: StopProcessingJobCommandOutput) => void
  ): void;
  stopProcessingJob(
    args: StopProcessingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopProcessingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTrainingJobCommand}
   */
  stopTrainingJob(
    args: StopTrainingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTrainingJobCommandOutput>;
  stopTrainingJob(args: StopTrainingJobCommandInput, cb: (err: any, data?: StopTrainingJobCommandOutput) => void): void;
  stopTrainingJob(
    args: StopTrainingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTrainingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopTransformJobCommand}
   */
  stopTransformJob(
    args: StopTransformJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopTransformJobCommandOutput>;
  stopTransformJob(
    args: StopTransformJobCommandInput,
    cb: (err: any, data?: StopTransformJobCommandOutput) => void
  ): void;
  stopTransformJob(
    args: StopTransformJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopTransformJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateActionCommand}
   */
  updateAction(args: UpdateActionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateActionCommandOutput>;
  updateAction(args: UpdateActionCommandInput, cb: (err: any, data?: UpdateActionCommandOutput) => void): void;
  updateAction(
    args: UpdateActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAppImageConfigCommand}
   */
  updateAppImageConfig(
    args: UpdateAppImageConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAppImageConfigCommandOutput>;
  updateAppImageConfig(
    args: UpdateAppImageConfigCommandInput,
    cb: (err: any, data?: UpdateAppImageConfigCommandOutput) => void
  ): void;
  updateAppImageConfig(
    args: UpdateAppImageConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAppImageConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateArtifactCommand}
   */
  updateArtifact(
    args: UpdateArtifactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateArtifactCommandOutput>;
  updateArtifact(args: UpdateArtifactCommandInput, cb: (err: any, data?: UpdateArtifactCommandOutput) => void): void;
  updateArtifact(
    args: UpdateArtifactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateArtifactCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateCodeRepositoryCommand}
   */
  updateCodeRepository(
    args: UpdateCodeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCodeRepositoryCommandOutput>;
  updateCodeRepository(
    args: UpdateCodeRepositoryCommandInput,
    cb: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void
  ): void;
  updateCodeRepository(
    args: UpdateCodeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateContextCommand}
   */
  updateContext(args: UpdateContextCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContextCommandOutput>;
  updateContext(args: UpdateContextCommandInput, cb: (err: any, data?: UpdateContextCommandOutput) => void): void;
  updateContext(
    args: UpdateContextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateContextCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeviceFleetCommand}
   */
  updateDeviceFleet(
    args: UpdateDeviceFleetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeviceFleetCommandOutput>;
  updateDeviceFleet(
    args: UpdateDeviceFleetCommandInput,
    cb: (err: any, data?: UpdateDeviceFleetCommandOutput) => void
  ): void;
  updateDeviceFleet(
    args: UpdateDeviceFleetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeviceFleetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDevicesCommand}
   */
  updateDevices(args: UpdateDevicesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDevicesCommandOutput>;
  updateDevices(args: UpdateDevicesCommandInput, cb: (err: any, data?: UpdateDevicesCommandOutput) => void): void;
  updateDevices(
    args: UpdateDevicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainCommand}
   */
  updateDomain(args: UpdateDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainCommandOutput>;
  updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
  updateDomain(
    args: UpdateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEndpointCommand}
   */
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointCommandOutput>;
  updateEndpoint(args: UpdateEndpointCommandInput, cb: (err: any, data?: UpdateEndpointCommandOutput) => void): void;
  updateEndpoint(
    args: UpdateEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEndpointWeightsAndCapacitiesCommand}
   */
  updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput>;
  updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesCommandInput,
    cb: (err: any, data?: UpdateEndpointWeightsAndCapacitiesCommandOutput) => void
  ): void;
  updateEndpointWeightsAndCapacities(
    args: UpdateEndpointWeightsAndCapacitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointWeightsAndCapacitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateExperimentCommand}
   */
  updateExperiment(
    args: UpdateExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperimentCommandOutput>;
  updateExperiment(
    args: UpdateExperimentCommandInput,
    cb: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): void;
  updateExperiment(
    args: UpdateExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFeatureGroupCommand}
   */
  updateFeatureGroup(
    args: UpdateFeatureGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFeatureGroupCommandOutput>;
  updateFeatureGroup(
    args: UpdateFeatureGroupCommandInput,
    cb: (err: any, data?: UpdateFeatureGroupCommandOutput) => void
  ): void;
  updateFeatureGroup(
    args: UpdateFeatureGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFeatureGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFeatureMetadataCommand}
   */
  updateFeatureMetadata(
    args: UpdateFeatureMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFeatureMetadataCommandOutput>;
  updateFeatureMetadata(
    args: UpdateFeatureMetadataCommandInput,
    cb: (err: any, data?: UpdateFeatureMetadataCommandOutput) => void
  ): void;
  updateFeatureMetadata(
    args: UpdateFeatureMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFeatureMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHubCommand}
   */
  updateHub(args: UpdateHubCommandInput, options?: __HttpHandlerOptions): Promise<UpdateHubCommandOutput>;
  updateHub(args: UpdateHubCommandInput, cb: (err: any, data?: UpdateHubCommandOutput) => void): void;
  updateHub(
    args: UpdateHubCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateHubCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateImageCommand}
   */
  updateImage(args: UpdateImageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateImageCommandOutput>;
  updateImage(args: UpdateImageCommandInput, cb: (err: any, data?: UpdateImageCommandOutput) => void): void;
  updateImage(
    args: UpdateImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateImageVersionCommand}
   */
  updateImageVersion(
    args: UpdateImageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateImageVersionCommandOutput>;
  updateImageVersion(
    args: UpdateImageVersionCommandInput,
    cb: (err: any, data?: UpdateImageVersionCommandOutput) => void
  ): void;
  updateImageVersion(
    args: UpdateImageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateImageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateInferenceExperimentCommand}
   */
  updateInferenceExperiment(
    args: UpdateInferenceExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateInferenceExperimentCommandOutput>;
  updateInferenceExperiment(
    args: UpdateInferenceExperimentCommandInput,
    cb: (err: any, data?: UpdateInferenceExperimentCommandOutput) => void
  ): void;
  updateInferenceExperiment(
    args: UpdateInferenceExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateInferenceExperimentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelCardCommand}
   */
  updateModelCard(
    args: UpdateModelCardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelCardCommandOutput>;
  updateModelCard(args: UpdateModelCardCommandInput, cb: (err: any, data?: UpdateModelCardCommandOutput) => void): void;
  updateModelCard(
    args: UpdateModelCardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCardCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateModelPackageCommand}
   */
  updateModelPackage(
    args: UpdateModelPackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateModelPackageCommandOutput>;
  updateModelPackage(
    args: UpdateModelPackageCommandInput,
    cb: (err: any, data?: UpdateModelPackageCommandOutput) => void
  ): void;
  updateModelPackage(
    args: UpdateModelPackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelPackageCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMonitoringAlertCommand}
   */
  updateMonitoringAlert(
    args: UpdateMonitoringAlertCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMonitoringAlertCommandOutput>;
  updateMonitoringAlert(
    args: UpdateMonitoringAlertCommandInput,
    cb: (err: any, data?: UpdateMonitoringAlertCommandOutput) => void
  ): void;
  updateMonitoringAlert(
    args: UpdateMonitoringAlertCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitoringAlertCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMonitoringScheduleCommand}
   */
  updateMonitoringSchedule(
    args: UpdateMonitoringScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMonitoringScheduleCommandOutput>;
  updateMonitoringSchedule(
    args: UpdateMonitoringScheduleCommandInput,
    cb: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void
  ): void;
  updateMonitoringSchedule(
    args: UpdateMonitoringScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotebookInstanceCommand}
   */
  updateNotebookInstance(
    args: UpdateNotebookInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotebookInstanceCommandOutput>;
  updateNotebookInstance(
    args: UpdateNotebookInstanceCommandInput,
    cb: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void
  ): void;
  updateNotebookInstance(
    args: UpdateNotebookInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateNotebookInstanceLifecycleConfigCommand}
   */
  updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput>;
  updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigCommandInput,
    cb: (err: any, data?: UpdateNotebookInstanceLifecycleConfigCommandOutput) => void
  ): void;
  updateNotebookInstanceLifecycleConfig(
    args: UpdateNotebookInstanceLifecycleConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateNotebookInstanceLifecycleConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePipelineCommand}
   */
  updatePipeline(
    args: UpdatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineCommandOutput>;
  updatePipeline(args: UpdatePipelineCommandInput, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
  updatePipeline(
    args: UpdatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePipelineExecutionCommand}
   */
  updatePipelineExecution(
    args: UpdatePipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineExecutionCommandOutput>;
  updatePipelineExecution(
    args: UpdatePipelineExecutionCommandInput,
    cb: (err: any, data?: UpdatePipelineExecutionCommandOutput) => void
  ): void;
  updatePipelineExecution(
    args: UpdatePipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSpaceCommand}
   */
  updateSpace(args: UpdateSpaceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSpaceCommandOutput>;
  updateSpace(args: UpdateSpaceCommandInput, cb: (err: any, data?: UpdateSpaceCommandOutput) => void): void;
  updateSpace(
    args: UpdateSpaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSpaceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrainingJobCommand}
   */
  updateTrainingJob(
    args: UpdateTrainingJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrainingJobCommandOutput>;
  updateTrainingJob(
    args: UpdateTrainingJobCommandInput,
    cb: (err: any, data?: UpdateTrainingJobCommandOutput) => void
  ): void;
  updateTrainingJob(
    args: UpdateTrainingJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrainingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrialCommand}
   */
  updateTrial(args: UpdateTrialCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrialCommandOutput>;
  updateTrial(args: UpdateTrialCommandInput, cb: (err: any, data?: UpdateTrialCommandOutput) => void): void;
  updateTrial(
    args: UpdateTrialCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrialCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTrialComponentCommand}
   */
  updateTrialComponent(
    args: UpdateTrialComponentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTrialComponentCommandOutput>;
  updateTrialComponent(
    args: UpdateTrialComponentCommandInput,
    cb: (err: any, data?: UpdateTrialComponentCommandOutput) => void
  ): void;
  updateTrialComponent(
    args: UpdateTrialComponentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTrialComponentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateUserProfileCommand}
   */
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUserProfileCommandOutput>;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;
  updateUserProfile(
    args: UpdateUserProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUserProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkforceCommand}
   */
  updateWorkforce(
    args: UpdateWorkforceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkforceCommandOutput>;
  updateWorkforce(args: UpdateWorkforceCommandInput, cb: (err: any, data?: UpdateWorkforceCommandOutput) => void): void;
  updateWorkforce(
    args: UpdateWorkforceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkforceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkteamCommand}
   */
  updateWorkteam(
    args: UpdateWorkteamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkteamCommandOutput>;
  updateWorkteam(args: UpdateWorkteamCommandInput, cb: (err: any, data?: UpdateWorkteamCommandOutput) => void): void;
  updateWorkteam(
    args: UpdateWorkteamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkteamCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Provides APIs for creating and managing SageMaker resources. </p>
 *          <p>Other Resources:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html#first-time-user">SageMaker Developer
 *                         Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/augmented-ai/2019-11-07/APIReference/Welcome.html">Amazon Augmented AI
 *                         Runtime API Reference</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class SageMaker extends SageMakerClient implements SageMaker {}
createAggregatedClient(commands, SageMaker);
