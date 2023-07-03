// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  expectUnion as __expectUnion,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  limitedParseFloat32 as __limitedParseFloat32,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { AddAssociationCommandInput, AddAssociationCommandOutput } from "../commands/AddAssociationCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "../commands/AddTagsCommand";
import {
  AssociateTrialComponentCommandInput,
  AssociateTrialComponentCommandOutput,
} from "../commands/AssociateTrialComponentCommand";
import {
  BatchDescribeModelPackageCommandInput,
  BatchDescribeModelPackageCommandOutput,
} from "../commands/BatchDescribeModelPackageCommand";
import { CreateActionCommandInput, CreateActionCommandOutput } from "../commands/CreateActionCommand";
import { CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput } from "../commands/CreateAlgorithmCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import {
  CreateAppImageConfigCommandInput,
  CreateAppImageConfigCommandOutput,
} from "../commands/CreateAppImageConfigCommand";
import { CreateArtifactCommandInput, CreateArtifactCommandOutput } from "../commands/CreateArtifactCommand";
import { CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput } from "../commands/CreateAutoMLJobCommand";
import { CreateAutoMLJobV2CommandInput, CreateAutoMLJobV2CommandOutput } from "../commands/CreateAutoMLJobV2Command";
import {
  CreateCodeRepositoryCommandInput,
  CreateCodeRepositoryCommandOutput,
} from "../commands/CreateCodeRepositoryCommand";
import {
  CreateCompilationJobCommandInput,
  CreateCompilationJobCommandOutput,
} from "../commands/CreateCompilationJobCommand";
import { CreateContextCommandInput, CreateContextCommandOutput } from "../commands/CreateContextCommand";
import {
  CreateDataQualityJobDefinitionCommandInput,
  CreateDataQualityJobDefinitionCommandOutput,
} from "../commands/CreateDataQualityJobDefinitionCommand";
import { CreateDeviceFleetCommandInput, CreateDeviceFleetCommandOutput } from "../commands/CreateDeviceFleetCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import {
  CreateEdgeDeploymentPlanCommandInput,
  CreateEdgeDeploymentPlanCommandOutput,
} from "../commands/CreateEdgeDeploymentPlanCommand";
import {
  CreateEdgeDeploymentStageCommandInput,
  CreateEdgeDeploymentStageCommandOutput,
} from "../commands/CreateEdgeDeploymentStageCommand";
import {
  CreateEdgePackagingJobCommandInput,
  CreateEdgePackagingJobCommandOutput,
} from "../commands/CreateEdgePackagingJobCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "../commands/CreateEndpointCommand";
import {
  CreateEndpointConfigCommandInput,
  CreateEndpointConfigCommandOutput,
} from "../commands/CreateEndpointConfigCommand";
import { CreateExperimentCommandInput, CreateExperimentCommandOutput } from "../commands/CreateExperimentCommand";
import { CreateFeatureGroupCommandInput, CreateFeatureGroupCommandOutput } from "../commands/CreateFeatureGroupCommand";
import {
  CreateFlowDefinitionCommandInput,
  CreateFlowDefinitionCommandOutput,
} from "../commands/CreateFlowDefinitionCommand";
import { CreateHubCommandInput, CreateHubCommandOutput } from "../commands/CreateHubCommand";
import { CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput } from "../commands/CreateHumanTaskUiCommand";
import {
  CreateHyperParameterTuningJobCommandInput,
  CreateHyperParameterTuningJobCommandOutput,
} from "../commands/CreateHyperParameterTuningJobCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "../commands/CreateImageCommand";
import { CreateImageVersionCommandInput, CreateImageVersionCommandOutput } from "../commands/CreateImageVersionCommand";
import {
  CreateInferenceExperimentCommandInput,
  CreateInferenceExperimentCommandOutput,
} from "../commands/CreateInferenceExperimentCommand";
import {
  CreateInferenceRecommendationsJobCommandInput,
  CreateInferenceRecommendationsJobCommandOutput,
} from "../commands/CreateInferenceRecommendationsJobCommand";
import { CreateLabelingJobCommandInput, CreateLabelingJobCommandOutput } from "../commands/CreateLabelingJobCommand";
import {
  CreateModelBiasJobDefinitionCommandInput,
  CreateModelBiasJobDefinitionCommandOutput,
} from "../commands/CreateModelBiasJobDefinitionCommand";
import { CreateModelCardCommandInput, CreateModelCardCommandOutput } from "../commands/CreateModelCardCommand";
import {
  CreateModelCardExportJobCommandInput,
  CreateModelCardExportJobCommandOutput,
} from "../commands/CreateModelCardExportJobCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import {
  CreateModelExplainabilityJobDefinitionCommandInput,
  CreateModelExplainabilityJobDefinitionCommandOutput,
} from "../commands/CreateModelExplainabilityJobDefinitionCommand";
import { CreateModelPackageCommandInput, CreateModelPackageCommandOutput } from "../commands/CreateModelPackageCommand";
import {
  CreateModelPackageGroupCommandInput,
  CreateModelPackageGroupCommandOutput,
} from "../commands/CreateModelPackageGroupCommand";
import {
  CreateModelQualityJobDefinitionCommandInput,
  CreateModelQualityJobDefinitionCommandOutput,
} from "../commands/CreateModelQualityJobDefinitionCommand";
import {
  CreateMonitoringScheduleCommandInput,
  CreateMonitoringScheduleCommandOutput,
} from "../commands/CreateMonitoringScheduleCommand";
import {
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput,
} from "../commands/CreateNotebookInstanceCommand";
import {
  CreateNotebookInstanceLifecycleConfigCommandInput,
  CreateNotebookInstanceLifecycleConfigCommandOutput,
} from "../commands/CreateNotebookInstanceLifecycleConfigCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "../commands/CreatePipelineCommand";
import {
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
} from "../commands/CreatePresignedDomainUrlCommand";
import {
  CreatePresignedNotebookInstanceUrlCommandInput,
  CreatePresignedNotebookInstanceUrlCommandOutput,
} from "../commands/CreatePresignedNotebookInstanceUrlCommand";
import {
  CreateProcessingJobCommandInput,
  CreateProcessingJobCommandOutput,
} from "../commands/CreateProcessingJobCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { CreateSpaceCommandInput, CreateSpaceCommandOutput } from "../commands/CreateSpaceCommand";
import {
  CreateStudioLifecycleConfigCommandInput,
  CreateStudioLifecycleConfigCommandOutput,
} from "../commands/CreateStudioLifecycleConfigCommand";
import { CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput } from "../commands/CreateTrainingJobCommand";
import { CreateTransformJobCommandInput, CreateTransformJobCommandOutput } from "../commands/CreateTransformJobCommand";
import { CreateTrialCommandInput, CreateTrialCommandOutput } from "../commands/CreateTrialCommand";
import {
  CreateTrialComponentCommandInput,
  CreateTrialComponentCommandOutput,
} from "../commands/CreateTrialComponentCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "../commands/CreateUserProfileCommand";
import { CreateWorkforceCommandInput, CreateWorkforceCommandOutput } from "../commands/CreateWorkforceCommand";
import { CreateWorkteamCommandInput, CreateWorkteamCommandOutput } from "../commands/CreateWorkteamCommand";
import { DeleteActionCommandInput, DeleteActionCommandOutput } from "../commands/DeleteActionCommand";
import { DeleteAlgorithmCommandInput, DeleteAlgorithmCommandOutput } from "../commands/DeleteAlgorithmCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import {
  DeleteAppImageConfigCommandInput,
  DeleteAppImageConfigCommandOutput,
} from "../commands/DeleteAppImageConfigCommand";
import { DeleteArtifactCommandInput, DeleteArtifactCommandOutput } from "../commands/DeleteArtifactCommand";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput } from "../commands/DeleteAssociationCommand";
import {
  DeleteCodeRepositoryCommandInput,
  DeleteCodeRepositoryCommandOutput,
} from "../commands/DeleteCodeRepositoryCommand";
import { DeleteContextCommandInput, DeleteContextCommandOutput } from "../commands/DeleteContextCommand";
import {
  DeleteDataQualityJobDefinitionCommandInput,
  DeleteDataQualityJobDefinitionCommandOutput,
} from "../commands/DeleteDataQualityJobDefinitionCommand";
import { DeleteDeviceFleetCommandInput, DeleteDeviceFleetCommandOutput } from "../commands/DeleteDeviceFleetCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import {
  DeleteEdgeDeploymentPlanCommandInput,
  DeleteEdgeDeploymentPlanCommandOutput,
} from "../commands/DeleteEdgeDeploymentPlanCommand";
import {
  DeleteEdgeDeploymentStageCommandInput,
  DeleteEdgeDeploymentStageCommandOutput,
} from "../commands/DeleteEdgeDeploymentStageCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "../commands/DeleteEndpointCommand";
import {
  DeleteEndpointConfigCommandInput,
  DeleteEndpointConfigCommandOutput,
} from "../commands/DeleteEndpointConfigCommand";
import { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "../commands/DeleteExperimentCommand";
import { DeleteFeatureGroupCommandInput, DeleteFeatureGroupCommandOutput } from "../commands/DeleteFeatureGroupCommand";
import {
  DeleteFlowDefinitionCommandInput,
  DeleteFlowDefinitionCommandOutput,
} from "../commands/DeleteFlowDefinitionCommand";
import { DeleteHubCommandInput, DeleteHubCommandOutput } from "../commands/DeleteHubCommand";
import { DeleteHubContentCommandInput, DeleteHubContentCommandOutput } from "../commands/DeleteHubContentCommand";
import { DeleteHumanTaskUiCommandInput, DeleteHumanTaskUiCommandOutput } from "../commands/DeleteHumanTaskUiCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "../commands/DeleteImageCommand";
import { DeleteImageVersionCommandInput, DeleteImageVersionCommandOutput } from "../commands/DeleteImageVersionCommand";
import {
  DeleteInferenceExperimentCommandInput,
  DeleteInferenceExperimentCommandOutput,
} from "../commands/DeleteInferenceExperimentCommand";
import {
  DeleteModelBiasJobDefinitionCommandInput,
  DeleteModelBiasJobDefinitionCommandOutput,
} from "../commands/DeleteModelBiasJobDefinitionCommand";
import { DeleteModelCardCommandInput, DeleteModelCardCommandOutput } from "../commands/DeleteModelCardCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import {
  DeleteModelExplainabilityJobDefinitionCommandInput,
  DeleteModelExplainabilityJobDefinitionCommandOutput,
} from "../commands/DeleteModelExplainabilityJobDefinitionCommand";
import { DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput } from "../commands/DeleteModelPackageCommand";
import {
  DeleteModelPackageGroupCommandInput,
  DeleteModelPackageGroupCommandOutput,
} from "../commands/DeleteModelPackageGroupCommand";
import {
  DeleteModelPackageGroupPolicyCommandInput,
  DeleteModelPackageGroupPolicyCommandOutput,
} from "../commands/DeleteModelPackageGroupPolicyCommand";
import {
  DeleteModelQualityJobDefinitionCommandInput,
  DeleteModelQualityJobDefinitionCommandOutput,
} from "../commands/DeleteModelQualityJobDefinitionCommand";
import {
  DeleteMonitoringScheduleCommandInput,
  DeleteMonitoringScheduleCommandOutput,
} from "../commands/DeleteMonitoringScheduleCommand";
import {
  DeleteNotebookInstanceCommandInput,
  DeleteNotebookInstanceCommandOutput,
} from "../commands/DeleteNotebookInstanceCommand";
import {
  DeleteNotebookInstanceLifecycleConfigCommandInput,
  DeleteNotebookInstanceLifecycleConfigCommandOutput,
} from "../commands/DeleteNotebookInstanceLifecycleConfigCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "../commands/DeletePipelineCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "../commands/DeleteSpaceCommand";
import {
  DeleteStudioLifecycleConfigCommandInput,
  DeleteStudioLifecycleConfigCommandOutput,
} from "../commands/DeleteStudioLifecycleConfigCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DeleteTrialCommandInput, DeleteTrialCommandOutput } from "../commands/DeleteTrialCommand";
import {
  DeleteTrialComponentCommandInput,
  DeleteTrialComponentCommandOutput,
} from "../commands/DeleteTrialComponentCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "../commands/DeleteUserProfileCommand";
import { DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput } from "../commands/DeleteWorkforceCommand";
import { DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput } from "../commands/DeleteWorkteamCommand";
import { DeregisterDevicesCommandInput, DeregisterDevicesCommandOutput } from "../commands/DeregisterDevicesCommand";
import { DescribeActionCommandInput, DescribeActionCommandOutput } from "../commands/DescribeActionCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "../commands/DescribeAlgorithmCommand";
import { DescribeAppCommandInput, DescribeAppCommandOutput } from "../commands/DescribeAppCommand";
import {
  DescribeAppImageConfigCommandInput,
  DescribeAppImageConfigCommandOutput,
} from "../commands/DescribeAppImageConfigCommand";
import { DescribeArtifactCommandInput, DescribeArtifactCommandOutput } from "../commands/DescribeArtifactCommand";
import { DescribeAutoMLJobCommandInput, DescribeAutoMLJobCommandOutput } from "../commands/DescribeAutoMLJobCommand";
import {
  DescribeAutoMLJobV2CommandInput,
  DescribeAutoMLJobV2CommandOutput,
} from "../commands/DescribeAutoMLJobV2Command";
import {
  DescribeCodeRepositoryCommandInput,
  DescribeCodeRepositoryCommandOutput,
} from "../commands/DescribeCodeRepositoryCommand";
import {
  DescribeCompilationJobCommandInput,
  DescribeCompilationJobCommandOutput,
} from "../commands/DescribeCompilationJobCommand";
import { DescribeContextCommandInput, DescribeContextCommandOutput } from "../commands/DescribeContextCommand";
import {
  DescribeDataQualityJobDefinitionCommandInput,
  DescribeDataQualityJobDefinitionCommandOutput,
} from "../commands/DescribeDataQualityJobDefinitionCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "../commands/DescribeDeviceCommand";
import {
  DescribeDeviceFleetCommandInput,
  DescribeDeviceFleetCommandOutput,
} from "../commands/DescribeDeviceFleetCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "../commands/DescribeDomainCommand";
import {
  DescribeEdgeDeploymentPlanCommandInput,
  DescribeEdgeDeploymentPlanCommandOutput,
} from "../commands/DescribeEdgeDeploymentPlanCommand";
import {
  DescribeEdgePackagingJobCommandInput,
  DescribeEdgePackagingJobCommandOutput,
} from "../commands/DescribeEdgePackagingJobCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "../commands/DescribeEndpointCommand";
import {
  DescribeEndpointConfigCommandInput,
  DescribeEndpointConfigCommandOutput,
} from "../commands/DescribeEndpointConfigCommand";
import { DescribeExperimentCommandInput, DescribeExperimentCommandOutput } from "../commands/DescribeExperimentCommand";
import {
  DescribeFeatureGroupCommandInput,
  DescribeFeatureGroupCommandOutput,
} from "../commands/DescribeFeatureGroupCommand";
import {
  DescribeFeatureMetadataCommandInput,
  DescribeFeatureMetadataCommandOutput,
} from "../commands/DescribeFeatureMetadataCommand";
import {
  DescribeFlowDefinitionCommandInput,
  DescribeFlowDefinitionCommandOutput,
} from "../commands/DescribeFlowDefinitionCommand";
import { DescribeHubCommandInput, DescribeHubCommandOutput } from "../commands/DescribeHubCommand";
import { DescribeHubContentCommandInput, DescribeHubContentCommandOutput } from "../commands/DescribeHubContentCommand";
import {
  DescribeHumanTaskUiCommandInput,
  DescribeHumanTaskUiCommandOutput,
} from "../commands/DescribeHumanTaskUiCommand";
import {
  DescribeHyperParameterTuningJobCommandInput,
  DescribeHyperParameterTuningJobCommandOutput,
} from "../commands/DescribeHyperParameterTuningJobCommand";
import { DescribeImageCommandInput, DescribeImageCommandOutput } from "../commands/DescribeImageCommand";
import {
  DescribeImageVersionCommandInput,
  DescribeImageVersionCommandOutput,
} from "../commands/DescribeImageVersionCommand";
import {
  DescribeInferenceExperimentCommandInput,
  DescribeInferenceExperimentCommandOutput,
} from "../commands/DescribeInferenceExperimentCommand";
import {
  DescribeInferenceRecommendationsJobCommandInput,
  DescribeInferenceRecommendationsJobCommandOutput,
} from "../commands/DescribeInferenceRecommendationsJobCommand";
import {
  DescribeLabelingJobCommandInput,
  DescribeLabelingJobCommandOutput,
} from "../commands/DescribeLabelingJobCommand";
import {
  DescribeLineageGroupCommandInput,
  DescribeLineageGroupCommandOutput,
} from "../commands/DescribeLineageGroupCommand";
import {
  DescribeModelBiasJobDefinitionCommandInput,
  DescribeModelBiasJobDefinitionCommandOutput,
} from "../commands/DescribeModelBiasJobDefinitionCommand";
import { DescribeModelCardCommandInput, DescribeModelCardCommandOutput } from "../commands/DescribeModelCardCommand";
import {
  DescribeModelCardExportJobCommandInput,
  DescribeModelCardExportJobCommandOutput,
} from "../commands/DescribeModelCardExportJobCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "../commands/DescribeModelCommand";
import {
  DescribeModelExplainabilityJobDefinitionCommandInput,
  DescribeModelExplainabilityJobDefinitionCommandOutput,
} from "../commands/DescribeModelExplainabilityJobDefinitionCommand";
import {
  DescribeModelPackageCommandInput,
  DescribeModelPackageCommandOutput,
} from "../commands/DescribeModelPackageCommand";
import {
  DescribeModelPackageGroupCommandInput,
  DescribeModelPackageGroupCommandOutput,
} from "../commands/DescribeModelPackageGroupCommand";
import {
  DescribeModelQualityJobDefinitionCommandInput,
  DescribeModelQualityJobDefinitionCommandOutput,
} from "../commands/DescribeModelQualityJobDefinitionCommand";
import {
  DescribeMonitoringScheduleCommandInput,
  DescribeMonitoringScheduleCommandOutput,
} from "../commands/DescribeMonitoringScheduleCommand";
import {
  DescribeNotebookInstanceCommandInput,
  DescribeNotebookInstanceCommandOutput,
} from "../commands/DescribeNotebookInstanceCommand";
import {
  DescribeNotebookInstanceLifecycleConfigCommandInput,
  DescribeNotebookInstanceLifecycleConfigCommandOutput,
} from "../commands/DescribeNotebookInstanceLifecycleConfigCommand";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "../commands/DescribePipelineCommand";
import {
  DescribePipelineDefinitionForExecutionCommandInput,
  DescribePipelineDefinitionForExecutionCommandOutput,
} from "../commands/DescribePipelineDefinitionForExecutionCommand";
import {
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
} from "../commands/DescribePipelineExecutionCommand";
import {
  DescribeProcessingJobCommandInput,
  DescribeProcessingJobCommandOutput,
} from "../commands/DescribeProcessingJobCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "../commands/DescribeProjectCommand";
import { DescribeSpaceCommandInput, DescribeSpaceCommandOutput } from "../commands/DescribeSpaceCommand";
import {
  DescribeStudioLifecycleConfigCommandInput,
  DescribeStudioLifecycleConfigCommandOutput,
} from "../commands/DescribeStudioLifecycleConfigCommand";
import {
  DescribeSubscribedWorkteamCommandInput,
  DescribeSubscribedWorkteamCommandOutput,
} from "../commands/DescribeSubscribedWorkteamCommand";
import {
  DescribeTrainingJobCommandInput,
  DescribeTrainingJobCommandOutput,
} from "../commands/DescribeTrainingJobCommand";
import {
  DescribeTransformJobCommandInput,
  DescribeTransformJobCommandOutput,
} from "../commands/DescribeTransformJobCommand";
import { DescribeTrialCommandInput, DescribeTrialCommandOutput } from "../commands/DescribeTrialCommand";
import {
  DescribeTrialComponentCommandInput,
  DescribeTrialComponentCommandOutput,
} from "../commands/DescribeTrialComponentCommand";
import {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "../commands/DescribeUserProfileCommand";
import { DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput } from "../commands/DescribeWorkforceCommand";
import { DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput } from "../commands/DescribeWorkteamCommand";
import {
  DisableSagemakerServicecatalogPortfolioCommandInput,
  DisableSagemakerServicecatalogPortfolioCommandOutput,
} from "../commands/DisableSagemakerServicecatalogPortfolioCommand";
import {
  DisassociateTrialComponentCommandInput,
  DisassociateTrialComponentCommandOutput,
} from "../commands/DisassociateTrialComponentCommand";
import {
  EnableSagemakerServicecatalogPortfolioCommandInput,
  EnableSagemakerServicecatalogPortfolioCommandOutput,
} from "../commands/EnableSagemakerServicecatalogPortfolioCommand";
import {
  GetDeviceFleetReportCommandInput,
  GetDeviceFleetReportCommandOutput,
} from "../commands/GetDeviceFleetReportCommand";
import {
  GetLineageGroupPolicyCommandInput,
  GetLineageGroupPolicyCommandOutput,
} from "../commands/GetLineageGroupPolicyCommand";
import {
  GetModelPackageGroupPolicyCommandInput,
  GetModelPackageGroupPolicyCommandOutput,
} from "../commands/GetModelPackageGroupPolicyCommand";
import {
  GetSagemakerServicecatalogPortfolioStatusCommandInput,
  GetSagemakerServicecatalogPortfolioStatusCommandOutput,
} from "../commands/GetSagemakerServicecatalogPortfolioStatusCommand";
import {
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput,
} from "../commands/GetSearchSuggestionsCommand";
import { ImportHubContentCommandInput, ImportHubContentCommandOutput } from "../commands/ImportHubContentCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput } from "../commands/ListAlgorithmsCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "../commands/ListAliasesCommand";
import {
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput,
} from "../commands/ListAppImageConfigsCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "../commands/ListArtifactsCommand";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "../commands/ListAssociationsCommand";
import { ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput } from "../commands/ListAutoMLJobsCommand";
import {
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
} from "../commands/ListCandidatesForAutoMLJobCommand";
import {
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput,
} from "../commands/ListCodeRepositoriesCommand";
import {
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
} from "../commands/ListCompilationJobsCommand";
import { ListContextsCommandInput, ListContextsCommandOutput } from "../commands/ListContextsCommand";
import {
  ListDataQualityJobDefinitionsCommandInput,
  ListDataQualityJobDefinitionsCommandOutput,
} from "../commands/ListDataQualityJobDefinitionsCommand";
import { ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput } from "../commands/ListDeviceFleetsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import {
  ListEdgeDeploymentPlansCommandInput,
  ListEdgeDeploymentPlansCommandOutput,
} from "../commands/ListEdgeDeploymentPlansCommand";
import {
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
} from "../commands/ListEdgePackagingJobsCommand";
import {
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput,
} from "../commands/ListEndpointConfigsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "../commands/ListEndpointsCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import { ListFeatureGroupsCommandInput, ListFeatureGroupsCommandOutput } from "../commands/ListFeatureGroupsCommand";
import {
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput,
} from "../commands/ListFlowDefinitionsCommand";
import { ListHubContentsCommandInput, ListHubContentsCommandOutput } from "../commands/ListHubContentsCommand";
import {
  ListHubContentVersionsCommandInput,
  ListHubContentVersionsCommandOutput,
} from "../commands/ListHubContentVersionsCommand";
import { ListHubsCommandInput, ListHubsCommandOutput } from "../commands/ListHubsCommand";
import { ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput } from "../commands/ListHumanTaskUisCommand";
import {
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput,
} from "../commands/ListHyperParameterTuningJobsCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import { ListImageVersionsCommandInput, ListImageVersionsCommandOutput } from "../commands/ListImageVersionsCommand";
import {
  ListInferenceExperimentsCommandInput,
  ListInferenceExperimentsCommandOutput,
} from "../commands/ListInferenceExperimentsCommand";
import {
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput,
} from "../commands/ListInferenceRecommendationsJobsCommand";
import {
  ListInferenceRecommendationsJobStepsCommandInput,
  ListInferenceRecommendationsJobStepsCommandOutput,
} from "../commands/ListInferenceRecommendationsJobStepsCommand";
import { ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput } from "../commands/ListLabelingJobsCommand";
import {
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
} from "../commands/ListLabelingJobsForWorkteamCommand";
import { ListLineageGroupsCommandInput, ListLineageGroupsCommandOutput } from "../commands/ListLineageGroupsCommand";
import {
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput,
} from "../commands/ListModelBiasJobDefinitionsCommand";
import {
  ListModelCardExportJobsCommandInput,
  ListModelCardExportJobsCommandOutput,
} from "../commands/ListModelCardExportJobsCommand";
import { ListModelCardsCommandInput, ListModelCardsCommandOutput } from "../commands/ListModelCardsCommand";
import {
  ListModelCardVersionsCommandInput,
  ListModelCardVersionsCommandOutput,
} from "../commands/ListModelCardVersionsCommand";
import {
  ListModelExplainabilityJobDefinitionsCommandInput,
  ListModelExplainabilityJobDefinitionsCommandOutput,
} from "../commands/ListModelExplainabilityJobDefinitionsCommand";
import { ListModelMetadataCommandInput, ListModelMetadataCommandOutput } from "../commands/ListModelMetadataCommand";
import {
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
} from "../commands/ListModelPackageGroupsCommand";
import { ListModelPackagesCommandInput, ListModelPackagesCommandOutput } from "../commands/ListModelPackagesCommand";
import {
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
} from "../commands/ListModelQualityJobDefinitionsCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import {
  ListMonitoringAlertHistoryCommandInput,
  ListMonitoringAlertHistoryCommandOutput,
} from "../commands/ListMonitoringAlertHistoryCommand";
import {
  ListMonitoringAlertsCommandInput,
  ListMonitoringAlertsCommandOutput,
} from "../commands/ListMonitoringAlertsCommand";
import {
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
} from "../commands/ListMonitoringExecutionsCommand";
import {
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
} from "../commands/ListMonitoringSchedulesCommand";
import {
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
} from "../commands/ListNotebookInstanceLifecycleConfigsCommand";
import {
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput,
} from "../commands/ListNotebookInstancesCommand";
import {
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "../commands/ListPipelineExecutionsCommand";
import {
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
} from "../commands/ListPipelineExecutionStepsCommand";
import {
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
} from "../commands/ListPipelineParametersForExecutionCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput } from "../commands/ListProcessingJobsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import { ListSpacesCommandInput, ListSpacesCommandOutput } from "../commands/ListSpacesCommand";
import { ListStageDevicesCommandInput, ListStageDevicesCommandOutput } from "../commands/ListStageDevicesCommand";
import {
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
} from "../commands/ListStudioLifecycleConfigsCommand";
import {
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
} from "../commands/ListSubscribedWorkteamsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput } from "../commands/ListTrainingJobsCommand";
import {
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
} from "../commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { ListTransformJobsCommandInput, ListTransformJobsCommandOutput } from "../commands/ListTransformJobsCommand";
import {
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
} from "../commands/ListTrialComponentsCommand";
import { ListTrialsCommandInput, ListTrialsCommandOutput } from "../commands/ListTrialsCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "../commands/ListUserProfilesCommand";
import { ListWorkforcesCommandInput, ListWorkforcesCommandOutput } from "../commands/ListWorkforcesCommand";
import { ListWorkteamsCommandInput, ListWorkteamsCommandOutput } from "../commands/ListWorkteamsCommand";
import {
  PutModelPackageGroupPolicyCommandInput,
  PutModelPackageGroupPolicyCommandOutput,
} from "../commands/PutModelPackageGroupPolicyCommand";
import { QueryLineageCommandInput, QueryLineageCommandOutput } from "../commands/QueryLineageCommand";
import { RegisterDevicesCommandInput, RegisterDevicesCommandOutput } from "../commands/RegisterDevicesCommand";
import { RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput } from "../commands/RenderUiTemplateCommand";
import {
  RetryPipelineExecutionCommandInput,
  RetryPipelineExecutionCommandOutput,
} from "../commands/RetryPipelineExecutionCommand";
import { SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import {
  SendPipelineExecutionStepFailureCommandInput,
  SendPipelineExecutionStepFailureCommandOutput,
} from "../commands/SendPipelineExecutionStepFailureCommand";
import {
  SendPipelineExecutionStepSuccessCommandInput,
  SendPipelineExecutionStepSuccessCommandOutput,
} from "../commands/SendPipelineExecutionStepSuccessCommand";
import {
  StartEdgeDeploymentStageCommandInput,
  StartEdgeDeploymentStageCommandOutput,
} from "../commands/StartEdgeDeploymentStageCommand";
import {
  StartInferenceExperimentCommandInput,
  StartInferenceExperimentCommandOutput,
} from "../commands/StartInferenceExperimentCommand";
import {
  StartMonitoringScheduleCommandInput,
  StartMonitoringScheduleCommandOutput,
} from "../commands/StartMonitoringScheduleCommand";
import {
  StartNotebookInstanceCommandInput,
  StartNotebookInstanceCommandOutput,
} from "../commands/StartNotebookInstanceCommand";
import {
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "../commands/StartPipelineExecutionCommand";
import { StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput } from "../commands/StopAutoMLJobCommand";
import { StopCompilationJobCommandInput, StopCompilationJobCommandOutput } from "../commands/StopCompilationJobCommand";
import {
  StopEdgeDeploymentStageCommandInput,
  StopEdgeDeploymentStageCommandOutput,
} from "../commands/StopEdgeDeploymentStageCommand";
import {
  StopEdgePackagingJobCommandInput,
  StopEdgePackagingJobCommandOutput,
} from "../commands/StopEdgePackagingJobCommand";
import {
  StopHyperParameterTuningJobCommandInput,
  StopHyperParameterTuningJobCommandOutput,
} from "../commands/StopHyperParameterTuningJobCommand";
import {
  StopInferenceExperimentCommandInput,
  StopInferenceExperimentCommandOutput,
} from "../commands/StopInferenceExperimentCommand";
import {
  StopInferenceRecommendationsJobCommandInput,
  StopInferenceRecommendationsJobCommandOutput,
} from "../commands/StopInferenceRecommendationsJobCommand";
import { StopLabelingJobCommandInput, StopLabelingJobCommandOutput } from "../commands/StopLabelingJobCommand";
import {
  StopMonitoringScheduleCommandInput,
  StopMonitoringScheduleCommandOutput,
} from "../commands/StopMonitoringScheduleCommand";
import {
  StopNotebookInstanceCommandInput,
  StopNotebookInstanceCommandOutput,
} from "../commands/StopNotebookInstanceCommand";
import {
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "../commands/StopPipelineExecutionCommand";
import { StopProcessingJobCommandInput, StopProcessingJobCommandOutput } from "../commands/StopProcessingJobCommand";
import { StopTrainingJobCommandInput, StopTrainingJobCommandOutput } from "../commands/StopTrainingJobCommand";
import { StopTransformJobCommandInput, StopTransformJobCommandOutput } from "../commands/StopTransformJobCommand";
import { UpdateActionCommandInput, UpdateActionCommandOutput } from "../commands/UpdateActionCommand";
import {
  UpdateAppImageConfigCommandInput,
  UpdateAppImageConfigCommandOutput,
} from "../commands/UpdateAppImageConfigCommand";
import { UpdateArtifactCommandInput, UpdateArtifactCommandOutput } from "../commands/UpdateArtifactCommand";
import {
  UpdateCodeRepositoryCommandInput,
  UpdateCodeRepositoryCommandOutput,
} from "../commands/UpdateCodeRepositoryCommand";
import { UpdateContextCommandInput, UpdateContextCommandOutput } from "../commands/UpdateContextCommand";
import { UpdateDeviceFleetCommandInput, UpdateDeviceFleetCommandOutput } from "../commands/UpdateDeviceFleetCommand";
import { UpdateDevicesCommandInput, UpdateDevicesCommandOutput } from "../commands/UpdateDevicesCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "../commands/UpdateDomainCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "../commands/UpdateEndpointCommand";
import {
  UpdateEndpointWeightsAndCapacitiesCommandInput,
  UpdateEndpointWeightsAndCapacitiesCommandOutput,
} from "../commands/UpdateEndpointWeightsAndCapacitiesCommand";
import { UpdateExperimentCommandInput, UpdateExperimentCommandOutput } from "../commands/UpdateExperimentCommand";
import { UpdateFeatureGroupCommandInput, UpdateFeatureGroupCommandOutput } from "../commands/UpdateFeatureGroupCommand";
import {
  UpdateFeatureMetadataCommandInput,
  UpdateFeatureMetadataCommandOutput,
} from "../commands/UpdateFeatureMetadataCommand";
import { UpdateHubCommandInput, UpdateHubCommandOutput } from "../commands/UpdateHubCommand";
import { UpdateImageCommandInput, UpdateImageCommandOutput } from "../commands/UpdateImageCommand";
import { UpdateImageVersionCommandInput, UpdateImageVersionCommandOutput } from "../commands/UpdateImageVersionCommand";
import {
  UpdateInferenceExperimentCommandInput,
  UpdateInferenceExperimentCommandOutput,
} from "../commands/UpdateInferenceExperimentCommand";
import { UpdateModelCardCommandInput, UpdateModelCardCommandOutput } from "../commands/UpdateModelCardCommand";
import { UpdateModelPackageCommandInput, UpdateModelPackageCommandOutput } from "../commands/UpdateModelPackageCommand";
import {
  UpdateMonitoringAlertCommandInput,
  UpdateMonitoringAlertCommandOutput,
} from "../commands/UpdateMonitoringAlertCommand";
import {
  UpdateMonitoringScheduleCommandInput,
  UpdateMonitoringScheduleCommandOutput,
} from "../commands/UpdateMonitoringScheduleCommand";
import {
  UpdateNotebookInstanceCommandInput,
  UpdateNotebookInstanceCommandOutput,
} from "../commands/UpdateNotebookInstanceCommand";
import {
  UpdateNotebookInstanceLifecycleConfigCommandInput,
  UpdateNotebookInstanceLifecycleConfigCommandOutput,
} from "../commands/UpdateNotebookInstanceLifecycleConfigCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "../commands/UpdatePipelineCommand";
import {
  UpdatePipelineExecutionCommandInput,
  UpdatePipelineExecutionCommandOutput,
} from "../commands/UpdatePipelineExecutionCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import { UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "../commands/UpdateSpaceCommand";
import { UpdateTrainingJobCommandInput, UpdateTrainingJobCommandOutput } from "../commands/UpdateTrainingJobCommand";
import { UpdateTrialCommandInput, UpdateTrialCommandOutput } from "../commands/UpdateTrialCommand";
import {
  UpdateTrialComponentCommandInput,
  UpdateTrialComponentCommandOutput,
} from "../commands/UpdateTrialComponentCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "../commands/UpdateUserProfileCommand";
import { UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput } from "../commands/UpdateWorkforceCommand";
import { UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput } from "../commands/UpdateWorkteamCommand";
import {
  ActionSource,
  ActionSummary,
  AddAssociationRequest,
  AdditionalInferenceSpecificationDefinition,
  AddTagsInput,
  AggregationTransformationValue,
  Alarm,
  AlgorithmSpecification,
  AlgorithmSummary,
  AlgorithmValidationProfile,
  AlgorithmValidationSpecification,
  AnnotationConsolidationConfig,
  AppDetails,
  AppImageConfigDetails,
  AppSpecification,
  ArtifactSource,
  ArtifactSourceType,
  ArtifactSummary,
  AssociateTrialComponentRequest,
  AssociationSummary,
  AsyncInferenceClientConfig,
  AsyncInferenceConfig,
  AsyncInferenceNotificationConfig,
  AsyncInferenceOutputConfig,
  AsyncNotificationTopicTypes,
  AthenaDatasetDefinition,
  AutoMLAlgorithm,
  AutoMLAlgorithmConfig,
  AutoMLCandidate,
  AutoMLCandidateGenerationConfig,
  AutoMLChannel,
  AutoMLDataSource,
  AutoMLDataSplitConfig,
  AutoMLJobChannel,
  AutoMLJobCompletionCriteria,
  AutoMLJobConfig,
  AutoMLJobObjective,
  AutoMLJobSummary,
  AutoMLOutputDataConfig,
  AutoMLProblemTypeConfig,
  AutoMLS3DataSource,
  AutoMLSecurityConfig,
  AutoParameter,
  AutoRollbackConfig,
  Autotune,
  BatchDataCaptureConfig,
  BatchDescribeModelPackageInput,
  BatchDescribeModelPackageOutput,
  BatchDescribeModelPackageSummary,
  BatchTransformInput,
  BestObjectiveNotImproving,
  Bias,
  BlueGreenUpdatePolicy,
  CandidateGenerationConfig,
  CandidateProperties,
  CanvasAppSettings,
  CapacitySize,
  CaptureContentTypeHeader,
  CaptureOption,
  CategoricalParameter,
  CategoricalParameterRange,
  CategoricalParameterRangeSpecification,
  Channel,
  ChannelSpecification,
  CheckpointConfig,
  ClarifyExplainerConfig,
  ClarifyFeatureType,
  ClarifyInferenceConfig,
  ClarifyShapBaselineConfig,
  ClarifyShapConfig,
  ClarifyTextConfig,
  CodeRepository,
  CodeRepositorySummary,
  CognitoConfig,
  CognitoMemberDefinition,
  CollectionConfiguration,
  CompilationJobSummary,
  CompressionType,
  ConflictException,
  ContainerDefinition,
  ContentClassifier,
  ContextSource,
  ContextSummary,
  ContinuousParameterRange,
  ContinuousParameterRangeSpecification,
  ConvergenceDetected,
  CreateActionRequest,
  CreateAlgorithmInput,
  CreateAppImageConfigRequest,
  CreateAppRequest,
  CreateArtifactRequest,
  CreateAutoMLJobRequest,
  CreateAutoMLJobV2Request,
  CreateCodeRepositoryInput,
  CreateCompilationJobRequest,
  CreateContextRequest,
  CreateDataQualityJobDefinitionRequest,
  CreateDeviceFleetRequest,
  CustomImage,
  DataQualityAppSpecification,
  DataQualityBaselineConfig,
  DataQualityJobInput,
  DataSource,
  DefaultSpaceSettings,
  EdgeOutputConfig,
  EndpointInput,
  FileSystemConfig,
  FileSystemDataSource,
  FinalAutoMLJobObjectiveMetric,
  GitConfig,
  HyperParameterSpecification,
  HyperParameterTuningJobObjective,
  ImageClassificationJobConfig,
  ImageConfig,
  InferenceSpecification,
  InputConfig,
  InstanceGroup,
  IntegerParameterRangeSpecification,
  JupyterServerAppSettings,
  KernelGatewayAppSettings,
  KernelGatewayImageConfig,
  KernelSpec,
  MetadataProperties,
  MetricDatum,
  MetricDefinition,
  MetricsSource,
  ModelDataSource,
  ModelDeployConfig,
  ModelInput,
  ModelPackageContainerDefinition,
  ModelRegisterSettings,
  MonitoringClusterConfig,
  MonitoringConstraintsResource,
  MonitoringCsvDatasetFormat,
  MonitoringDatasetFormat,
  MonitoringJsonDatasetFormat,
  MonitoringNetworkConfig,
  MonitoringOutput,
  MonitoringOutputConfig,
  MonitoringParquetDatasetFormat,
  MonitoringResources,
  MonitoringS3Output,
  MonitoringStatisticsResource,
  MonitoringStoppingCondition,
  MultiModelConfig,
  NeoVpcConfig,
  OutputConfig,
  OutputDataConfig,
  OutputParameter,
  ParameterRange,
  ProductionVariantInstanceType,
  RepositoryAuthConfig,
  ResourceConfig,
  ResourceInUse,
  ResourceLimitExceeded,
  ResourceNotFound,
  ResourceSpec,
  RSessionAppSettings,
  S3DataSource,
  S3ModelDataSource,
  ShuffleConfig,
  StoppingCondition,
  TabularJobConfig,
  Tag,
  TargetPlatform,
  TextClassificationJobConfig,
  TimeSeriesConfig,
  TimeSeriesForecastingJobConfig,
  TimeSeriesForecastingSettings,
  TimeSeriesTransformations,
  TrafficRoutingConfig,
  TrainingImageConfig,
  TrainingInputMode,
  TrainingInstanceType,
  TrainingJobDefinition,
  TrainingRepositoryAuthConfig,
  TrainingSpecification,
  TransformDataSource,
  TransformInput,
  TransformInstanceType,
  TransformJobDefinition,
  TransformOutput,
  TransformResources,
  TransformS3DataSource,
  VpcConfig,
} from "../models/models_0";
import {
  CreateDomainRequest,
  CreateEdgeDeploymentPlanRequest,
  CreateEdgeDeploymentStageRequest,
  CreateEdgePackagingJobRequest,
  CreateEndpointConfigInput,
  CreateEndpointInput,
  CreateExperimentRequest,
  CreateFeatureGroupRequest,
  CreateFlowDefinitionRequest,
  CreateHubRequest,
  CreateHumanTaskUiRequest,
  CreateHyperParameterTuningJobRequest,
  CreateImageRequest,
  CreateImageVersionRequest,
  CreateInferenceExperimentRequest,
  CreateInferenceRecommendationsJobRequest,
  CreateLabelingJobRequest,
  CreateModelBiasJobDefinitionRequest,
  CreateModelCardExportJobRequest,
  CreateModelCardRequest,
  CreateModelExplainabilityJobDefinitionRequest,
  CreateModelInput,
  CreateModelPackageGroupInput,
  CreateModelPackageInput,
  CreateModelQualityJobDefinitionRequest,
  CreateMonitoringScheduleRequest,
  CreateNotebookInstanceInput,
  CreateNotebookInstanceLifecycleConfigInput,
  CreatePipelineRequest,
  CreatePresignedDomainUrlRequest,
  CreatePresignedNotebookInstanceUrlInput,
  CreateProcessingJobRequest,
  CreateProjectInput,
  CreateSpaceRequest,
  CreateStudioLifecycleConfigRequest,
  CreateTrainingJobRequest,
  CreateTransformJobRequest,
  CreateTrialComponentRequest,
  CreateTrialRequest,
  CreateUserProfileRequest,
  CreateWorkforceRequest,
  CreateWorkteamRequest,
  DataCaptureConfig,
  DataCatalogConfig,
  DataProcessing,
  DatasetDefinition,
  DebugHookConfig,
  DebugRuleConfiguration,
  DebugRuleEvaluationStatus,
  DeleteActionRequest,
  DeleteAlgorithmInput,
  DeleteAppImageConfigRequest,
  DeleteAppRequest,
  DeleteArtifactRequest,
  DeleteAssociationRequest,
  DeleteCodeRepositoryInput,
  DeleteContextRequest,
  DeleteDataQualityJobDefinitionRequest,
  DeleteDeviceFleetRequest,
  DeleteDomainRequest,
  DeleteEdgeDeploymentPlanRequest,
  DeleteEdgeDeploymentStageRequest,
  DeleteEndpointConfigInput,
  DeleteEndpointInput,
  DeleteExperimentRequest,
  DeleteFeatureGroupRequest,
  DeleteFlowDefinitionRequest,
  DeleteHubContentRequest,
  DeleteHubRequest,
  DeleteHumanTaskUiRequest,
  DeploymentConfig,
  DeploymentStage,
  DeviceSelectionConfig,
  DomainSettings,
  DriftCheckBaselines,
  DriftCheckBias,
  DriftCheckExplainability,
  DriftCheckModelDataQuality,
  DriftCheckModelQuality,
  EdgeDeploymentConfig,
  EdgeDeploymentModelConfig,
  EndpointInfo,
  EndpointInputConfiguration,
  EnvironmentParameterRanges,
  ExperimentConfig,
  Explainability,
  ExplainerConfig,
  FeatureDefinition,
  FileSource,
  FlowDefinitionOutputConfig,
  HubS3StorageConfig,
  HumanLoopActivationConditionsConfig,
  HumanLoopActivationConfig,
  HumanLoopConfig,
  HumanLoopRequestSource,
  HumanTaskConfig,
  HyperbandStrategyConfig,
  HyperParameterAlgorithmSpecification,
  HyperParameterTrainingJobDefinition,
  HyperParameterTuningInstanceConfig,
  HyperParameterTuningJobConfig,
  HyperParameterTuningJobStrategyConfig,
  HyperParameterTuningJobWarmStartConfig,
  HyperParameterTuningResourceConfig,
  InferenceExecutionConfig,
  InferenceExperimentDataStorageConfig,
  InferenceExperimentSchedule,
  InstanceMetadataServiceConfiguration,
  IntegerParameterRange,
  LabelingJobAlgorithmsConfig,
  LabelingJobDataAttributes,
  LabelingJobDataSource,
  LabelingJobInputConfig,
  LabelingJobOutputConfig,
  LabelingJobResourceConfig,
  LabelingJobS3DataSource,
  LabelingJobSnsDataSource,
  LabelingJobStoppingConditions,
  MemberDefinition,
  ModelBiasAppSpecification,
  ModelBiasBaselineConfig,
  ModelBiasJobInput,
  ModelCardExportOutputConfig,
  ModelCardSecurityConfig,
  ModelClientConfig,
  ModelDataQuality,
  ModelExplainabilityAppSpecification,
  ModelExplainabilityBaselineConfig,
  ModelExplainabilityJobInput,
  ModelInfrastructureConfig,
  ModelLatencyThreshold,
  ModelMetrics,
  ModelPackageValidationProfile,
  ModelPackageValidationSpecification,
  ModelQuality,
  ModelQualityAppSpecification,
  ModelQualityBaselineConfig,
  ModelQualityJobInput,
  ModelVariantConfig,
  MonitoringAppSpecification,
  MonitoringBaselineConfig,
  MonitoringGroundTruthS3Input,
  MonitoringInput,
  MonitoringJobDefinition,
  MonitoringScheduleConfig,
  NetworkConfig,
  NotebookInstanceAcceleratorType,
  NotebookInstanceLifecycleHook,
  NotificationConfiguration,
  OfflineStoreConfig,
  OidcConfig,
  OidcMemberDefinition,
  OnlineStoreConfig,
  OnlineStoreSecurityConfig,
  ParallelismConfiguration,
  ParameterRanges,
  ParentHyperParameterTuningJob,
  Phase,
  PipelineDefinitionS3Location,
  ProcessingClusterConfig,
  ProcessingFeatureStoreOutput,
  ProcessingInput,
  ProcessingOutput,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingS3Input,
  ProcessingS3Output,
  ProcessingStoppingCondition,
  ProductionVariant,
  ProductionVariantCoreDumpConfig,
  ProductionVariantServerlessConfig,
  ProfilerConfig,
  ProfilerRuleConfiguration,
  ProvisioningParameter,
  PublicWorkforceTaskPrice,
  RealTimeInferenceConfig,
  RecommendationJobCompiledOutputConfig,
  RecommendationJobContainerConfig,
  RecommendationJobInputConfig,
  RecommendationJobOutputConfig,
  RecommendationJobPayloadConfig,
  RecommendationJobResourceLimit,
  RecommendationJobStoppingConditions,
  RecommendationJobVpcConfig,
  RedshiftDatasetDefinition,
  ResourceLimits,
  RetentionPolicy,
  RetryStrategy,
  RollingUpdatePolicy,
  RStudioServerProAppSettings,
  RStudioServerProDomainSettings,
  S3StorageConfig,
  ScheduleConfig,
  ServiceCatalogProvisioningDetails,
  ShadowModeConfig,
  ShadowModelVariantConfig,
  SharingSettings,
  SourceAlgorithm,
  SourceAlgorithmSpecification,
  SourceIpConfig,
  SpaceSettings,
  TensorBoardAppSettings,
  TensorBoardOutputConfig,
  TrafficPattern,
  TrialComponentArtifact,
  TrialComponentParameterValue,
  TrialComponentStatus,
  TtlDuration,
  TuningJobCompletionCriteria,
  UiConfig,
  UiTemplate,
  USD,
  UserSettings,
  WorkforceVpcConfigRequest,
} from "../models/models_1";
import {
  DeleteImageRequest,
  DeleteImageVersionRequest,
  DeleteInferenceExperimentRequest,
  DeleteModelBiasJobDefinitionRequest,
  DeleteModelCardRequest,
  DeleteModelExplainabilityJobDefinitionRequest,
  DeleteModelInput,
  DeleteModelPackageGroupInput,
  DeleteModelPackageGroupPolicyInput,
  DeleteModelPackageInput,
  DeleteModelQualityJobDefinitionRequest,
  DeleteMonitoringScheduleRequest,
  DeleteNotebookInstanceInput,
  DeleteNotebookInstanceLifecycleConfigInput,
  DeletePipelineRequest,
  DeleteProjectInput,
  DeleteSpaceRequest,
  DeleteStudioLifecycleConfigRequest,
  DeleteTagsInput,
  DeleteTrialComponentRequest,
  DeleteTrialRequest,
  DeleteUserProfileRequest,
  DeleteWorkforceRequest,
  DeleteWorkteamRequest,
  DeployedImage,
  DeploymentStageStatusSummary,
  DeregisterDevicesRequest,
  DescribeActionRequest,
  DescribeActionResponse,
  DescribeAlgorithmInput,
  DescribeAlgorithmOutput,
  DescribeAppImageConfigRequest,
  DescribeAppImageConfigResponse,
  DescribeAppRequest,
  DescribeAppResponse,
  DescribeArtifactRequest,
  DescribeArtifactResponse,
  DescribeAutoMLJobRequest,
  DescribeAutoMLJobResponse,
  DescribeAutoMLJobV2Request,
  DescribeAutoMLJobV2Response,
  DescribeCodeRepositoryInput,
  DescribeCodeRepositoryOutput,
  DescribeCompilationJobRequest,
  DescribeCompilationJobResponse,
  DescribeContextRequest,
  DescribeContextResponse,
  DescribeDataQualityJobDefinitionRequest,
  DescribeDataQualityJobDefinitionResponse,
  DescribeDeviceFleetRequest,
  DescribeDeviceFleetResponse,
  DescribeDeviceRequest,
  DescribeDeviceResponse,
  DescribeDomainRequest,
  DescribeDomainResponse,
  DescribeEdgeDeploymentPlanRequest,
  DescribeEdgeDeploymentPlanResponse,
  DescribeEdgePackagingJobRequest,
  DescribeEdgePackagingJobResponse,
  DescribeEndpointConfigInput,
  DescribeEndpointConfigOutput,
  DescribeEndpointInput,
  DescribeEndpointOutput,
  DescribeExperimentRequest,
  DescribeExperimentResponse,
  DescribeFeatureGroupRequest,
  DescribeFeatureGroupResponse,
  DescribeFeatureMetadataRequest,
  DescribeFeatureMetadataResponse,
  DescribeFlowDefinitionRequest,
  DescribeFlowDefinitionResponse,
  DescribeHubContentRequest,
  DescribeHubContentResponse,
  DescribeHubRequest,
  DescribeHubResponse,
  DescribeHumanTaskUiRequest,
  DescribeHumanTaskUiResponse,
  DescribeHyperParameterTuningJobRequest,
  DescribeHyperParameterTuningJobResponse,
  DescribeImageRequest,
  DescribeImageResponse,
  DescribeImageVersionRequest,
  DescribeImageVersionResponse,
  DescribeInferenceExperimentRequest,
  DescribeInferenceExperimentResponse,
  DescribeInferenceRecommendationsJobRequest,
  DescribeInferenceRecommendationsJobResponse,
  DescribeLabelingJobRequest,
  DescribeLabelingJobResponse,
  DescribeLineageGroupRequest,
  DescribeLineageGroupResponse,
  DescribeModelBiasJobDefinitionRequest,
  DescribeModelBiasJobDefinitionResponse,
  DescribeModelCardExportJobRequest,
  DescribeModelCardExportJobResponse,
  DescribeModelCardRequest,
  DescribeModelCardResponse,
  DescribeModelExplainabilityJobDefinitionRequest,
  DescribeModelExplainabilityJobDefinitionResponse,
  DescribeModelInput,
  DescribeModelOutput,
  DescribeModelPackageGroupInput,
  DescribeModelPackageGroupOutput,
  DescribeModelPackageInput,
  DescribeModelPackageOutput,
  DescribeModelQualityJobDefinitionRequest,
  DescribeModelQualityJobDefinitionResponse,
  DescribeMonitoringScheduleRequest,
  DescribeMonitoringScheduleResponse,
  DescribeNotebookInstanceInput,
  DescribeNotebookInstanceLifecycleConfigInput,
  DescribeNotebookInstanceLifecycleConfigOutput,
  DescribeNotebookInstanceOutput,
  DescribePipelineDefinitionForExecutionRequest,
  DescribePipelineDefinitionForExecutionResponse,
  DescribePipelineExecutionRequest,
  DescribePipelineExecutionResponse,
  DescribePipelineRequest,
  DescribePipelineResponse,
  DescribeProcessingJobRequest,
  DescribeProcessingJobResponse,
  DescribeProjectInput,
  DescribeProjectOutput,
  DescribeSpaceRequest,
  DescribeSpaceResponse,
  DescribeStudioLifecycleConfigRequest,
  DescribeStudioLifecycleConfigResponse,
  DescribeSubscribedWorkteamRequest,
  DescribeTrainingJobRequest,
  DescribeTrainingJobResponse,
  DescribeTransformJobRequest,
  DescribeTransformJobResponse,
  DescribeTrialComponentRequest,
  DescribeTrialComponentResponse,
  DescribeTrialRequest,
  DescribeTrialResponse,
  DescribeUserProfileRequest,
  DescribeUserProfileResponse,
  DescribeWorkforceRequest,
  DescribeWorkforceResponse,
  DescribeWorkteamRequest,
  DescribeWorkteamResponse,
  DesiredWeightAndCapacity,
  Device,
  DeviceDeploymentSummary,
  DeviceFleetSummary,
  DeviceSummary,
  DisableSagemakerServicecatalogPortfolioInput,
  DisassociateTrialComponentRequest,
  DomainDetails,
  DomainSettingsForUpdate,
  EdgeDeploymentPlanSummary,
  EdgeDeploymentStatus,
  EdgeModel,
  EdgePackagingJobSummary,
  EnableSagemakerServicecatalogPortfolioInput,
  Endpoint,
  EndpointConfigSummary,
  EndpointSummary,
  Experiment,
  ExperimentSummary,
  FeatureGroup,
  FeatureGroupSummary,
  FeatureMetadata,
  FeatureParameter,
  Filter,
  FinalHyperParameterTuningJobObjectiveMetric,
  FlowDefinitionSummary,
  GetDeviceFleetReportRequest,
  GetDeviceFleetReportResponse,
  GetLineageGroupPolicyRequest,
  GetModelPackageGroupPolicyInput,
  GetSagemakerServicecatalogPortfolioStatusInput,
  HyperParameterTrainingJobSummary,
  HyperParameterTuningJobCompletionDetails,
  InferenceRecommendation,
  MetricData,
  MonitoringExecutionSummary,
  MonitoringSchedule,
  PendingDeploymentSummary,
  PendingProductionVariantSummary,
  ProductionVariantServerlessUpdateConfig,
  ProductionVariantStatus,
  ProductionVariantSummary,
  ProfilerRuleEvaluationStatus,
  RecommendationMetrics,
  RStudioServerProDomainSettingsForUpdate,
  SecondaryStatusTransition,
  SelectedStep,
  SelectiveExecutionConfig,
  TrialComponentMetricSummary,
  Workforce,
  Workteam,
} from "../models/models_2";
import {
  GetSearchSuggestionsRequest,
  GitConfigForUpdate,
  HubContentInfo,
  HubInfo,
  HumanTaskUiSummary,
  HyperParameterTuningJobSearchEntity,
  HyperParameterTuningJobSummary,
  Image,
  ImageVersion,
  ImportHubContentRequest,
  InferenceExperimentSummary,
  InferenceRecommendationsJob,
  InferenceRecommendationsJobStep,
  LabelingJobForWorkteamSummary,
  LabelingJobSummary,
  LineageGroupSummary,
  LineageType,
  ListActionsRequest,
  ListActionsResponse,
  ListAlgorithmsInput,
  ListAlgorithmsOutput,
  ListAliasesRequest,
  ListAppImageConfigsRequest,
  ListAppImageConfigsResponse,
  ListAppsRequest,
  ListAppsResponse,
  ListArtifactsRequest,
  ListArtifactsResponse,
  ListAssociationsRequest,
  ListAssociationsResponse,
  ListAutoMLJobsRequest,
  ListAutoMLJobsResponse,
  ListCandidatesForAutoMLJobRequest,
  ListCandidatesForAutoMLJobResponse,
  ListCodeRepositoriesInput,
  ListCodeRepositoriesOutput,
  ListCompilationJobsRequest,
  ListCompilationJobsResponse,
  ListContextsRequest,
  ListContextsResponse,
  ListDataQualityJobDefinitionsRequest,
  ListDataQualityJobDefinitionsResponse,
  ListDeviceFleetsRequest,
  ListDeviceFleetsResponse,
  ListDevicesRequest,
  ListDevicesResponse,
  ListDomainsRequest,
  ListDomainsResponse,
  ListEdgeDeploymentPlansRequest,
  ListEdgeDeploymentPlansResponse,
  ListEdgePackagingJobsRequest,
  ListEdgePackagingJobsResponse,
  ListEndpointConfigsInput,
  ListEndpointConfigsOutput,
  ListEndpointsInput,
  ListEndpointsOutput,
  ListExperimentsRequest,
  ListExperimentsResponse,
  ListFeatureGroupsRequest,
  ListFeatureGroupsResponse,
  ListFlowDefinitionsRequest,
  ListFlowDefinitionsResponse,
  ListHubContentsRequest,
  ListHubContentsResponse,
  ListHubContentVersionsRequest,
  ListHubContentVersionsResponse,
  ListHubsRequest,
  ListHubsResponse,
  ListHumanTaskUisRequest,
  ListHumanTaskUisResponse,
  ListHyperParameterTuningJobsRequest,
  ListHyperParameterTuningJobsResponse,
  ListImagesRequest,
  ListImagesResponse,
  ListImageVersionsRequest,
  ListImageVersionsResponse,
  ListInferenceExperimentsRequest,
  ListInferenceExperimentsResponse,
  ListInferenceRecommendationsJobsRequest,
  ListInferenceRecommendationsJobsResponse,
  ListInferenceRecommendationsJobStepsRequest,
  ListInferenceRecommendationsJobStepsResponse,
  ListLabelingJobsForWorkteamRequest,
  ListLabelingJobsForWorkteamResponse,
  ListLabelingJobsRequest,
  ListLabelingJobsResponse,
  ListLineageGroupsRequest,
  ListLineageGroupsResponse,
  ListModelBiasJobDefinitionsRequest,
  ListModelBiasJobDefinitionsResponse,
  ListModelCardExportJobsRequest,
  ListModelCardExportJobsResponse,
  ListModelCardsRequest,
  ListModelCardsResponse,
  ListModelCardVersionsRequest,
  ListModelCardVersionsResponse,
  ListModelExplainabilityJobDefinitionsRequest,
  ListModelExplainabilityJobDefinitionsResponse,
  ListModelMetadataRequest,
  ListModelPackageGroupsInput,
  ListModelPackageGroupsOutput,
  ListModelPackagesInput,
  ListModelPackagesOutput,
  ListModelQualityJobDefinitionsRequest,
  ListModelQualityJobDefinitionsResponse,
  ListModelsInput,
  ListModelsOutput,
  ListMonitoringAlertHistoryRequest,
  ListMonitoringAlertHistoryResponse,
  ListMonitoringAlertsRequest,
  ListMonitoringAlertsResponse,
  ListMonitoringExecutionsRequest,
  ListMonitoringExecutionsResponse,
  ListMonitoringSchedulesRequest,
  ListMonitoringSchedulesResponse,
  ListNotebookInstanceLifecycleConfigsInput,
  ListNotebookInstanceLifecycleConfigsOutput,
  ListNotebookInstancesInput,
  ListNotebookInstancesOutput,
  ListPipelineExecutionsRequest,
  ListPipelineExecutionsResponse,
  ListPipelineExecutionStepsRequest,
  ListPipelineExecutionStepsResponse,
  ListPipelineParametersForExecutionRequest,
  ListPipelinesRequest,
  ListPipelinesResponse,
  ListProcessingJobsRequest,
  ListProcessingJobsResponse,
  ListProjectsInput,
  ListProjectsOutput,
  ListSpacesRequest,
  ListSpacesResponse,
  ListStageDevicesRequest,
  ListStageDevicesResponse,
  ListStudioLifecycleConfigsRequest,
  ListStudioLifecycleConfigsResponse,
  ListSubscribedWorkteamsRequest,
  ListTagsInput,
  ListTrainingJobsForHyperParameterTuningJobRequest,
  ListTrainingJobsForHyperParameterTuningJobResponse,
  ListTrainingJobsRequest,
  ListTrainingJobsResponse,
  ListTransformJobsRequest,
  ListTransformJobsResponse,
  ListTrialComponentsRequest,
  ListTrialComponentsResponse,
  ListTrialsRequest,
  ListTrialsResponse,
  ListUserProfilesRequest,
  ListUserProfilesResponse,
  ListWorkforcesRequest,
  ListWorkforcesResponse,
  ListWorkteamsRequest,
  ListWorkteamsResponse,
  Model,
  ModelCard,
  ModelCardExportJobSummary,
  ModelCardSummary,
  ModelCardVersionSummary,
  ModelDashboardEndpoint,
  ModelDashboardModel,
  ModelDashboardModelCard,
  ModelDashboardMonitoringSchedule,
  ModelMetadataFilter,
  ModelMetadataSearchExpression,
  ModelPackage,
  ModelPackageGroup,
  ModelPackageGroupSummary,
  ModelPackageSummary,
  ModelSummary,
  ModelVariantAction,
  MonitoringAlertHistorySummary,
  MonitoringAlertSummary,
  MonitoringJobDefinitionSummary,
  MonitoringScheduleSummary,
  NestedFilters,
  NotebookInstanceLifecycleConfigSummary,
  NotebookInstanceSummary,
  OnlineStoreConfigUpdate,
  Parameter,
  Pipeline,
  PipelineExecution,
  PipelineExecutionStep,
  PipelineExecutionSummary,
  PipelineSummary,
  ProcessingJob,
  ProcessingJobSummary,
  ProfilerConfigForUpdate,
  Project,
  ProjectSummary,
  PropertyNameQuery,
  PutModelPackageGroupPolicyInput,
  QueryFilters,
  QueryLineageRequest,
  RecommendationJobInferenceBenchmark,
  RegisterDevicesRequest,
  RenderableTask,
  RenderUiTemplateRequest,
  ResourceConfigForUpdate,
  RetryPipelineExecutionRequest,
  SpaceDetails,
  StudioLifecycleConfigDetails,
  SuggestionQuery,
  TrainingJob,
  TrainingJobSummary,
  TransformJob,
  TransformJobSummary,
  Trial,
  TrialComponentSimpleSummary,
  TrialComponentSourceDetail,
  TrialComponentSummary,
  TrialSummary,
  UserProfileDetails,
} from "../models/models_3";
import {
  SearchExpression,
  SearchRecord,
  SearchRequest,
  SearchResponse,
  SendPipelineExecutionStepFailureRequest,
  SendPipelineExecutionStepSuccessRequest,
  ServiceCatalogProvisioningUpdateDetails,
  StartEdgeDeploymentStageRequest,
  StartInferenceExperimentRequest,
  StartMonitoringScheduleRequest,
  StartNotebookInstanceInput,
  StartPipelineExecutionRequest,
  StopAutoMLJobRequest,
  StopCompilationJobRequest,
  StopEdgeDeploymentStageRequest,
  StopEdgePackagingJobRequest,
  StopHyperParameterTuningJobRequest,
  StopInferenceExperimentRequest,
  StopInferenceRecommendationsJobRequest,
  StopLabelingJobRequest,
  StopMonitoringScheduleRequest,
  StopNotebookInstanceInput,
  StopPipelineExecutionRequest,
  StopProcessingJobRequest,
  StopTrainingJobRequest,
  StopTransformJobRequest,
  TrialComponent,
  UpdateActionRequest,
  UpdateAppImageConfigRequest,
  UpdateArtifactRequest,
  UpdateCodeRepositoryInput,
  UpdateContextRequest,
  UpdateDeviceFleetRequest,
  UpdateDevicesRequest,
  UpdateDomainRequest,
  UpdateEndpointInput,
  UpdateEndpointWeightsAndCapacitiesInput,
  UpdateExperimentRequest,
  UpdateFeatureGroupRequest,
  UpdateFeatureMetadataRequest,
  UpdateHubRequest,
  UpdateImageRequest,
  UpdateImageVersionRequest,
  UpdateInferenceExperimentRequest,
  UpdateModelCardRequest,
  UpdateModelPackageInput,
  UpdateMonitoringAlertRequest,
  UpdateMonitoringScheduleRequest,
  UpdateNotebookInstanceInput,
  UpdateNotebookInstanceLifecycleConfigInput,
  UpdatePipelineExecutionRequest,
  UpdatePipelineRequest,
  UpdateProjectInput,
  UpdateSpaceRequest,
  UpdateTrainingJobRequest,
  UpdateTrialComponentRequest,
  UpdateTrialRequest,
  UpdateUserProfileRequest,
  UpdateWorkforceRequest,
  UpdateWorkforceResponse,
  UpdateWorkteamRequest,
  UpdateWorkteamResponse,
  VariantProperty,
} from "../models/models_4";
import { SageMakerServiceException as __BaseException } from "../models/SageMakerServiceException";

/**
 * serializeAws_json1_1AddAssociationCommand
 */
export const se_AddAssociationCommand = async (
  input: AddAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AddTagsCommand
 */
export const se_AddTagsCommand = async (
  input: AddTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AddTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1AssociateTrialComponentCommand
 */
export const se_AssociateTrialComponentCommand = async (
  input: AssociateTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateTrialComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1BatchDescribeModelPackageCommand
 */
export const se_BatchDescribeModelPackageCommand = async (
  input: BatchDescribeModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("BatchDescribeModelPackage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateActionCommand
 */
export const se_CreateActionCommand = async (
  input: CreateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAlgorithmCommand
 */
export const se_CreateAlgorithmCommand = async (
  input: CreateAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAlgorithm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppCommand
 */
export const se_CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAppImageConfigCommand
 */
export const se_CreateAppImageConfigCommand = async (
  input: CreateAppImageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAppImageConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateArtifactCommand
 */
export const se_CreateArtifactCommand = async (
  input: CreateArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateArtifact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAutoMLJobCommand
 */
export const se_CreateAutoMLJobCommand = async (
  input: CreateAutoMLJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAutoMLJob");
  let body: any;
  body = JSON.stringify(se_CreateAutoMLJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateAutoMLJobV2Command
 */
export const se_CreateAutoMLJobV2Command = async (
  input: CreateAutoMLJobV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAutoMLJobV2");
  let body: any;
  body = JSON.stringify(se_CreateAutoMLJobV2Request(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCodeRepositoryCommand
 */
export const se_CreateCodeRepositoryCommand = async (
  input: CreateCodeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCodeRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateCompilationJobCommand
 */
export const se_CreateCompilationJobCommand = async (
  input: CreateCompilationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateCompilationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateContextCommand
 */
export const se_CreateContextCommand = async (
  input: CreateContextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateContext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataQualityJobDefinitionCommand
 */
export const se_CreateDataQualityJobDefinitionCommand = async (
  input: CreateDataQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataQualityJobDefinition");
  let body: any;
  body = JSON.stringify(se_CreateDataQualityJobDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDeviceFleetCommand
 */
export const se_CreateDeviceFleetCommand = async (
  input: CreateDeviceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDeviceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEdgeDeploymentPlanCommand
 */
export const se_CreateEdgeDeploymentPlanCommand = async (
  input: CreateEdgeDeploymentPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEdgeDeploymentPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEdgeDeploymentStageCommand
 */
export const se_CreateEdgeDeploymentStageCommand = async (
  input: CreateEdgeDeploymentStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEdgeDeploymentStage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEdgePackagingJobCommand
 */
export const se_CreateEdgePackagingJobCommand = async (
  input: CreateEdgePackagingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEdgePackagingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointCommand
 */
export const se_CreateEndpointCommand = async (
  input: CreateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateEndpointConfigCommand
 */
export const se_CreateEndpointConfigCommand = async (
  input: CreateEndpointConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEndpointConfig");
  let body: any;
  body = JSON.stringify(se_CreateEndpointConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateExperimentCommand
 */
export const se_CreateExperimentCommand = async (
  input: CreateExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFeatureGroupCommand
 */
export const se_CreateFeatureGroupCommand = async (
  input: CreateFeatureGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFeatureGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFlowDefinitionCommand
 */
export const se_CreateFlowDefinitionCommand = async (
  input: CreateFlowDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFlowDefinition");
  let body: any;
  body = JSON.stringify(se_CreateFlowDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHubCommand
 */
export const se_CreateHubCommand = async (
  input: CreateHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHub");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHumanTaskUiCommand
 */
export const se_CreateHumanTaskUiCommand = async (
  input: CreateHumanTaskUiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHumanTaskUi");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateHyperParameterTuningJobCommand
 */
export const se_CreateHyperParameterTuningJobCommand = async (
  input: CreateHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(se_CreateHyperParameterTuningJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImageCommand
 */
export const se_CreateImageCommand = async (
  input: CreateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateImageVersionCommand
 */
export const se_CreateImageVersionCommand = async (
  input: CreateImageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateImageVersion");
  let body: any;
  body = JSON.stringify(se_CreateImageVersionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInferenceExperimentCommand
 */
export const se_CreateInferenceExperimentCommand = async (
  input: CreateInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInferenceExperiment");
  let body: any;
  body = JSON.stringify(se_CreateInferenceExperimentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInferenceRecommendationsJobCommand
 */
export const se_CreateInferenceRecommendationsJobCommand = async (
  input: CreateInferenceRecommendationsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInferenceRecommendationsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLabelingJobCommand
 */
export const se_CreateLabelingJobCommand = async (
  input: CreateLabelingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLabelingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelCommand
 */
export const se_CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelBiasJobDefinitionCommand
 */
export const se_CreateModelBiasJobDefinitionCommand = async (
  input: CreateModelBiasJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelBiasJobDefinition");
  let body: any;
  body = JSON.stringify(se_CreateModelBiasJobDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelCardCommand
 */
export const se_CreateModelCardCommand = async (
  input: CreateModelCardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelCard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelCardExportJobCommand
 */
export const se_CreateModelCardExportJobCommand = async (
  input: CreateModelCardExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelCardExportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand
 */
export const se_CreateModelExplainabilityJobDefinitionCommand = async (
  input: CreateModelExplainabilityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelExplainabilityJobDefinition");
  let body: any;
  body = JSON.stringify(se_CreateModelExplainabilityJobDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelPackageCommand
 */
export const se_CreateModelPackageCommand = async (
  input: CreateModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelPackage");
  let body: any;
  body = JSON.stringify(se_CreateModelPackageInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelPackageGroupCommand
 */
export const se_CreateModelPackageGroupCommand = async (
  input: CreateModelPackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelPackageGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateModelQualityJobDefinitionCommand
 */
export const se_CreateModelQualityJobDefinitionCommand = async (
  input: CreateModelQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateModelQualityJobDefinition");
  let body: any;
  body = JSON.stringify(se_CreateModelQualityJobDefinitionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMonitoringScheduleCommand
 */
export const se_CreateMonitoringScheduleCommand = async (
  input: CreateMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMonitoringSchedule");
  let body: any;
  body = JSON.stringify(se_CreateMonitoringScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNotebookInstanceCommand
 */
export const se_CreateNotebookInstanceCommand = async (
  input: CreateNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand
 */
export const se_CreateNotebookInstanceLifecycleConfigCommand = async (
  input: CreateNotebookInstanceLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNotebookInstanceLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePipelineCommand
 */
export const se_CreatePipelineCommand = async (
  input: CreatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePipeline");
  let body: any;
  body = JSON.stringify(se_CreatePipelineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePresignedDomainUrlCommand
 */
export const se_CreatePresignedDomainUrlCommand = async (
  input: CreatePresignedDomainUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePresignedDomainUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand
 */
export const se_CreatePresignedNotebookInstanceUrlCommand = async (
  input: CreatePresignedNotebookInstanceUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePresignedNotebookInstanceUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProcessingJobCommand
 */
export const se_CreateProcessingJobCommand = async (
  input: CreateProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProcessingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSpaceCommand
 */
export const se_CreateSpaceCommand = async (
  input: CreateSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSpace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStudioLifecycleConfigCommand
 */
export const se_CreateStudioLifecycleConfigCommand = async (
  input: CreateStudioLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStudioLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrainingJobCommand
 */
export const se_CreateTrainingJobCommand = async (
  input: CreateTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrainingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTransformJobCommand
 */
export const se_CreateTransformJobCommand = async (
  input: CreateTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTransformJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrialCommand
 */
export const se_CreateTrialCommand = async (
  input: CreateTrialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTrialComponentCommand
 */
export const se_CreateTrialComponentCommand = async (
  input: CreateTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTrialComponent");
  let body: any;
  body = JSON.stringify(se_CreateTrialComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUserProfileCommand
 */
export const se_CreateUserProfileCommand = async (
  input: CreateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkforceCommand
 */
export const se_CreateWorkforceCommand = async (
  input: CreateWorkforceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkforce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWorkteamCommand
 */
export const se_CreateWorkteamCommand = async (
  input: CreateWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteActionCommand
 */
export const se_DeleteActionCommand = async (
  input: DeleteActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAlgorithmCommand
 */
export const se_DeleteAlgorithmCommand = async (
  input: DeleteAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAlgorithm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppImageConfigCommand
 */
export const se_DeleteAppImageConfigCommand = async (
  input: DeleteAppImageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAppImageConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteArtifactCommand
 */
export const se_DeleteArtifactCommand = async (
  input: DeleteArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteArtifact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAssociationCommand
 */
export const se_DeleteAssociationCommand = async (
  input: DeleteAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAssociation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCodeRepositoryCommand
 */
export const se_DeleteCodeRepositoryCommand = async (
  input: DeleteCodeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCodeRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteContextCommand
 */
export const se_DeleteContextCommand = async (
  input: DeleteContextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteContext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataQualityJobDefinitionCommand
 */
export const se_DeleteDataQualityJobDefinitionCommand = async (
  input: DeleteDataQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataQualityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDeviceFleetCommand
 */
export const se_DeleteDeviceFleetCommand = async (
  input: DeleteDeviceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeviceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEdgeDeploymentPlanCommand
 */
export const se_DeleteEdgeDeploymentPlanCommand = async (
  input: DeleteEdgeDeploymentPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEdgeDeploymentPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEdgeDeploymentStageCommand
 */
export const se_DeleteEdgeDeploymentStageCommand = async (
  input: DeleteEdgeDeploymentStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEdgeDeploymentStage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointCommand
 */
export const se_DeleteEndpointCommand = async (
  input: DeleteEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteEndpointConfigCommand
 */
export const se_DeleteEndpointConfigCommand = async (
  input: DeleteEndpointConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEndpointConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteExperimentCommand
 */
export const se_DeleteExperimentCommand = async (
  input: DeleteExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFeatureGroupCommand
 */
export const se_DeleteFeatureGroupCommand = async (
  input: DeleteFeatureGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFeatureGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFlowDefinitionCommand
 */
export const se_DeleteFlowDefinitionCommand = async (
  input: DeleteFlowDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFlowDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHubCommand
 */
export const se_DeleteHubCommand = async (
  input: DeleteHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHub");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHubContentCommand
 */
export const se_DeleteHubContentCommand = async (
  input: DeleteHubContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHubContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteHumanTaskUiCommand
 */
export const se_DeleteHumanTaskUiCommand = async (
  input: DeleteHumanTaskUiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteHumanTaskUi");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImageCommand
 */
export const se_DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteImageVersionCommand
 */
export const se_DeleteImageVersionCommand = async (
  input: DeleteImageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteImageVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInferenceExperimentCommand
 */
export const se_DeleteInferenceExperimentCommand = async (
  input: DeleteInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInferenceExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelCommand
 */
export const se_DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelBiasJobDefinitionCommand
 */
export const se_DeleteModelBiasJobDefinitionCommand = async (
  input: DeleteModelBiasJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelBiasJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelCardCommand
 */
export const se_DeleteModelCardCommand = async (
  input: DeleteModelCardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelCard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommand
 */
export const se_DeleteModelExplainabilityJobDefinitionCommand = async (
  input: DeleteModelExplainabilityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelExplainabilityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelPackageCommand
 */
export const se_DeleteModelPackageCommand = async (
  input: DeleteModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelPackage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelPackageGroupCommand
 */
export const se_DeleteModelPackageGroupCommand = async (
  input: DeleteModelPackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelPackageGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelPackageGroupPolicyCommand
 */
export const se_DeleteModelPackageGroupPolicyCommand = async (
  input: DeleteModelPackageGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelPackageGroupPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteModelQualityJobDefinitionCommand
 */
export const se_DeleteModelQualityJobDefinitionCommand = async (
  input: DeleteModelQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteModelQualityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMonitoringScheduleCommand
 */
export const se_DeleteMonitoringScheduleCommand = async (
  input: DeleteMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMonitoringSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotebookInstanceCommand
 */
export const se_DeleteNotebookInstanceCommand = async (
  input: DeleteNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand
 */
export const se_DeleteNotebookInstanceLifecycleConfigCommand = async (
  input: DeleteNotebookInstanceLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNotebookInstanceLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePipelineCommand
 */
export const se_DeletePipelineCommand = async (
  input: DeletePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePipeline");
  let body: any;
  body = JSON.stringify(se_DeletePipelineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSpaceCommand
 */
export const se_DeleteSpaceCommand = async (
  input: DeleteSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSpace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStudioLifecycleConfigCommand
 */
export const se_DeleteStudioLifecycleConfigCommand = async (
  input: DeleteStudioLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStudioLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTagsCommand
 */
export const se_DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTrialCommand
 */
export const se_DeleteTrialCommand = async (
  input: DeleteTrialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTrialComponentCommand
 */
export const se_DeleteTrialComponentCommand = async (
  input: DeleteTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTrialComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUserProfileCommand
 */
export const se_DeleteUserProfileCommand = async (
  input: DeleteUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkforceCommand
 */
export const se_DeleteWorkforceCommand = async (
  input: DeleteWorkforceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkforce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWorkteamCommand
 */
export const se_DeleteWorkteamCommand = async (
  input: DeleteWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterDevicesCommand
 */
export const se_DeregisterDevicesCommand = async (
  input: DeregisterDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeActionCommand
 */
export const se_DescribeActionCommand = async (
  input: DescribeActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAlgorithmCommand
 */
export const se_DescribeAlgorithmCommand = async (
  input: DescribeAlgorithmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAlgorithm");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppCommand
 */
export const se_DescribeAppCommand = async (
  input: DescribeAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAppImageConfigCommand
 */
export const se_DescribeAppImageConfigCommand = async (
  input: DescribeAppImageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAppImageConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeArtifactCommand
 */
export const se_DescribeArtifactCommand = async (
  input: DescribeArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeArtifact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutoMLJobCommand
 */
export const se_DescribeAutoMLJobCommand = async (
  input: DescribeAutoMLJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAutoMLJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutoMLJobV2Command
 */
export const se_DescribeAutoMLJobV2Command = async (
  input: DescribeAutoMLJobV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAutoMLJobV2");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCodeRepositoryCommand
 */
export const se_DescribeCodeRepositoryCommand = async (
  input: DescribeCodeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCodeRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeCompilationJobCommand
 */
export const se_DescribeCompilationJobCommand = async (
  input: DescribeCompilationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCompilationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeContextCommand
 */
export const se_DescribeContextCommand = async (
  input: DescribeContextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeContext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataQualityJobDefinitionCommand
 */
export const se_DescribeDataQualityJobDefinitionCommand = async (
  input: DescribeDataQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataQualityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeviceCommand
 */
export const se_DescribeDeviceCommand = async (
  input: DescribeDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDevice");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDeviceFleetCommand
 */
export const se_DescribeDeviceFleetCommand = async (
  input: DescribeDeviceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDeviceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEdgeDeploymentPlanCommand
 */
export const se_DescribeEdgeDeploymentPlanCommand = async (
  input: DescribeEdgeDeploymentPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEdgeDeploymentPlan");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEdgePackagingJobCommand
 */
export const se_DescribeEdgePackagingJobCommand = async (
  input: DescribeEdgePackagingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEdgePackagingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointCommand
 */
export const se_DescribeEndpointCommand = async (
  input: DescribeEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeEndpointConfigCommand
 */
export const se_DescribeEndpointConfigCommand = async (
  input: DescribeEndpointConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeEndpointConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExperimentCommand
 */
export const se_DescribeExperimentCommand = async (
  input: DescribeExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFeatureGroupCommand
 */
export const se_DescribeFeatureGroupCommand = async (
  input: DescribeFeatureGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFeatureGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFeatureMetadataCommand
 */
export const se_DescribeFeatureMetadataCommand = async (
  input: DescribeFeatureMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFeatureMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFlowDefinitionCommand
 */
export const se_DescribeFlowDefinitionCommand = async (
  input: DescribeFlowDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFlowDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHubCommand
 */
export const se_DescribeHubCommand = async (
  input: DescribeHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHub");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHubContentCommand
 */
export const se_DescribeHubContentCommand = async (
  input: DescribeHubContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHubContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHumanTaskUiCommand
 */
export const se_DescribeHumanTaskUiCommand = async (
  input: DescribeHumanTaskUiCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHumanTaskUi");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeHyperParameterTuningJobCommand
 */
export const se_DescribeHyperParameterTuningJobCommand = async (
  input: DescribeHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageCommand
 */
export const se_DescribeImageCommand = async (
  input: DescribeImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeImageVersionCommand
 */
export const se_DescribeImageVersionCommand = async (
  input: DescribeImageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeImageVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInferenceExperimentCommand
 */
export const se_DescribeInferenceExperimentCommand = async (
  input: DescribeInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInferenceExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeInferenceRecommendationsJobCommand
 */
export const se_DescribeInferenceRecommendationsJobCommand = async (
  input: DescribeInferenceRecommendationsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeInferenceRecommendationsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLabelingJobCommand
 */
export const se_DescribeLabelingJobCommand = async (
  input: DescribeLabelingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLabelingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLineageGroupCommand
 */
export const se_DescribeLineageGroupCommand = async (
  input: DescribeLineageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLineageGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelCommand
 */
export const se_DescribeModelCommand = async (
  input: DescribeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelBiasJobDefinitionCommand
 */
export const se_DescribeModelBiasJobDefinitionCommand = async (
  input: DescribeModelBiasJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelBiasJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelCardCommand
 */
export const se_DescribeModelCardCommand = async (
  input: DescribeModelCardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelCard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelCardExportJobCommand
 */
export const se_DescribeModelCardExportJobCommand = async (
  input: DescribeModelCardExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelCardExportJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommand
 */
export const se_DescribeModelExplainabilityJobDefinitionCommand = async (
  input: DescribeModelExplainabilityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelExplainabilityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelPackageCommand
 */
export const se_DescribeModelPackageCommand = async (
  input: DescribeModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelPackage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelPackageGroupCommand
 */
export const se_DescribeModelPackageGroupCommand = async (
  input: DescribeModelPackageGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelPackageGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeModelQualityJobDefinitionCommand
 */
export const se_DescribeModelQualityJobDefinitionCommand = async (
  input: DescribeModelQualityJobDefinitionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeModelQualityJobDefinition");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMonitoringScheduleCommand
 */
export const se_DescribeMonitoringScheduleCommand = async (
  input: DescribeMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMonitoringSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNotebookInstanceCommand
 */
export const se_DescribeNotebookInstanceCommand = async (
  input: DescribeNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand
 */
export const se_DescribeNotebookInstanceLifecycleConfigCommand = async (
  input: DescribeNotebookInstanceLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeNotebookInstanceLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePipelineCommand
 */
export const se_DescribePipelineCommand = async (
  input: DescribePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePipeline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePipelineDefinitionForExecutionCommand
 */
export const se_DescribePipelineDefinitionForExecutionCommand = async (
  input: DescribePipelineDefinitionForExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePipelineDefinitionForExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePipelineExecutionCommand
 */
export const se_DescribePipelineExecutionCommand = async (
  input: DescribePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePipelineExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProcessingJobCommand
 */
export const se_DescribeProcessingJobCommand = async (
  input: DescribeProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProcessingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeProjectCommand
 */
export const se_DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSpaceCommand
 */
export const se_DescribeSpaceCommand = async (
  input: DescribeSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSpace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStudioLifecycleConfigCommand
 */
export const se_DescribeStudioLifecycleConfigCommand = async (
  input: DescribeStudioLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStudioLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSubscribedWorkteamCommand
 */
export const se_DescribeSubscribedWorkteamCommand = async (
  input: DescribeSubscribedWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSubscribedWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrainingJobCommand
 */
export const se_DescribeTrainingJobCommand = async (
  input: DescribeTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrainingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTransformJobCommand
 */
export const se_DescribeTransformJobCommand = async (
  input: DescribeTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTransformJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrialCommand
 */
export const se_DescribeTrialCommand = async (
  input: DescribeTrialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeTrialComponentCommand
 */
export const se_DescribeTrialComponentCommand = async (
  input: DescribeTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeTrialComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeUserProfileCommand
 */
export const se_DescribeUserProfileCommand = async (
  input: DescribeUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkforceCommand
 */
export const se_DescribeWorkforceCommand = async (
  input: DescribeWorkforceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkforce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWorkteamCommand
 */
export const se_DescribeWorkteamCommand = async (
  input: DescribeWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand
 */
export const se_DisableSagemakerServicecatalogPortfolioCommand = async (
  input: DisableSagemakerServicecatalogPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisableSagemakerServicecatalogPortfolio");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateTrialComponentCommand
 */
export const se_DisassociateTrialComponentCommand = async (
  input: DisassociateTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateTrialComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand
 */
export const se_EnableSagemakerServicecatalogPortfolioCommand = async (
  input: EnableSagemakerServicecatalogPortfolioCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("EnableSagemakerServicecatalogPortfolio");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeviceFleetReportCommand
 */
export const se_GetDeviceFleetReportCommand = async (
  input: GetDeviceFleetReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeviceFleetReport");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetLineageGroupPolicyCommand
 */
export const se_GetLineageGroupPolicyCommand = async (
  input: GetLineageGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetLineageGroupPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetModelPackageGroupPolicyCommand
 */
export const se_GetModelPackageGroupPolicyCommand = async (
  input: GetModelPackageGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetModelPackageGroupPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand
 */
export const se_GetSagemakerServicecatalogPortfolioStatusCommand = async (
  input: GetSagemakerServicecatalogPortfolioStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSagemakerServicecatalogPortfolioStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSearchSuggestionsCommand
 */
export const se_GetSearchSuggestionsCommand = async (
  input: GetSearchSuggestionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSearchSuggestions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportHubContentCommand
 */
export const se_ImportHubContentCommand = async (
  input: ImportHubContentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportHubContent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListActionsCommand
 */
export const se_ListActionsCommand = async (
  input: ListActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListActions");
  let body: any;
  body = JSON.stringify(se_ListActionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAlgorithmsCommand
 */
export const se_ListAlgorithmsCommand = async (
  input: ListAlgorithmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAlgorithms");
  let body: any;
  body = JSON.stringify(se_ListAlgorithmsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAliasesCommand
 */
export const se_ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAliases");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAppImageConfigsCommand
 */
export const se_ListAppImageConfigsCommand = async (
  input: ListAppImageConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAppImageConfigs");
  let body: any;
  body = JSON.stringify(se_ListAppImageConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAppsCommand
 */
export const se_ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListArtifactsCommand
 */
export const se_ListArtifactsCommand = async (
  input: ListArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListArtifacts");
  let body: any;
  body = JSON.stringify(se_ListArtifactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAssociationsCommand
 */
export const se_ListAssociationsCommand = async (
  input: ListAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAssociations");
  let body: any;
  body = JSON.stringify(se_ListAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAutoMLJobsCommand
 */
export const se_ListAutoMLJobsCommand = async (
  input: ListAutoMLJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAutoMLJobs");
  let body: any;
  body = JSON.stringify(se_ListAutoMLJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCandidatesForAutoMLJobCommand
 */
export const se_ListCandidatesForAutoMLJobCommand = async (
  input: ListCandidatesForAutoMLJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCandidatesForAutoMLJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCodeRepositoriesCommand
 */
export const se_ListCodeRepositoriesCommand = async (
  input: ListCodeRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCodeRepositories");
  let body: any;
  body = JSON.stringify(se_ListCodeRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCompilationJobsCommand
 */
export const se_ListCompilationJobsCommand = async (
  input: ListCompilationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCompilationJobs");
  let body: any;
  body = JSON.stringify(se_ListCompilationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListContextsCommand
 */
export const se_ListContextsCommand = async (
  input: ListContextsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListContexts");
  let body: any;
  body = JSON.stringify(se_ListContextsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDataQualityJobDefinitionsCommand
 */
export const se_ListDataQualityJobDefinitionsCommand = async (
  input: ListDataQualityJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDataQualityJobDefinitions");
  let body: any;
  body = JSON.stringify(se_ListDataQualityJobDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeviceFleetsCommand
 */
export const se_ListDeviceFleetsCommand = async (
  input: ListDeviceFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeviceFleets");
  let body: any;
  body = JSON.stringify(se_ListDeviceFleetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDevicesCommand
 */
export const se_ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDevices");
  let body: any;
  body = JSON.stringify(se_ListDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDomains");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEdgeDeploymentPlansCommand
 */
export const se_ListEdgeDeploymentPlansCommand = async (
  input: ListEdgeDeploymentPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEdgeDeploymentPlans");
  let body: any;
  body = JSON.stringify(se_ListEdgeDeploymentPlansRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEdgePackagingJobsCommand
 */
export const se_ListEdgePackagingJobsCommand = async (
  input: ListEdgePackagingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEdgePackagingJobs");
  let body: any;
  body = JSON.stringify(se_ListEdgePackagingJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointConfigsCommand
 */
export const se_ListEndpointConfigsCommand = async (
  input: ListEndpointConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpointConfigs");
  let body: any;
  body = JSON.stringify(se_ListEndpointConfigsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListEndpointsCommand
 */
export const se_ListEndpointsCommand = async (
  input: ListEndpointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEndpoints");
  let body: any;
  body = JSON.stringify(se_ListEndpointsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExperimentsCommand
 */
export const se_ListExperimentsCommand = async (
  input: ListExperimentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExperiments");
  let body: any;
  body = JSON.stringify(se_ListExperimentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFeatureGroupsCommand
 */
export const se_ListFeatureGroupsCommand = async (
  input: ListFeatureGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFeatureGroups");
  let body: any;
  body = JSON.stringify(se_ListFeatureGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListFlowDefinitionsCommand
 */
export const se_ListFlowDefinitionsCommand = async (
  input: ListFlowDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListFlowDefinitions");
  let body: any;
  body = JSON.stringify(se_ListFlowDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHubContentsCommand
 */
export const se_ListHubContentsCommand = async (
  input: ListHubContentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHubContents");
  let body: any;
  body = JSON.stringify(se_ListHubContentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHubContentVersionsCommand
 */
export const se_ListHubContentVersionsCommand = async (
  input: ListHubContentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHubContentVersions");
  let body: any;
  body = JSON.stringify(se_ListHubContentVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHubsCommand
 */
export const se_ListHubsCommand = async (
  input: ListHubsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHubs");
  let body: any;
  body = JSON.stringify(se_ListHubsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHumanTaskUisCommand
 */
export const se_ListHumanTaskUisCommand = async (
  input: ListHumanTaskUisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHumanTaskUis");
  let body: any;
  body = JSON.stringify(se_ListHumanTaskUisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListHyperParameterTuningJobsCommand
 */
export const se_ListHyperParameterTuningJobsCommand = async (
  input: ListHyperParameterTuningJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListHyperParameterTuningJobs");
  let body: any;
  body = JSON.stringify(se_ListHyperParameterTuningJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImagesCommand
 */
export const se_ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImages");
  let body: any;
  body = JSON.stringify(se_ListImagesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListImageVersionsCommand
 */
export const se_ListImageVersionsCommand = async (
  input: ListImageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListImageVersions");
  let body: any;
  body = JSON.stringify(se_ListImageVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInferenceExperimentsCommand
 */
export const se_ListInferenceExperimentsCommand = async (
  input: ListInferenceExperimentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceExperiments");
  let body: any;
  body = JSON.stringify(se_ListInferenceExperimentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInferenceRecommendationsJobsCommand
 */
export const se_ListInferenceRecommendationsJobsCommand = async (
  input: ListInferenceRecommendationsJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceRecommendationsJobs");
  let body: any;
  body = JSON.stringify(se_ListInferenceRecommendationsJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInferenceRecommendationsJobStepsCommand
 */
export const se_ListInferenceRecommendationsJobStepsCommand = async (
  input: ListInferenceRecommendationsJobStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInferenceRecommendationsJobSteps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLabelingJobsCommand
 */
export const se_ListLabelingJobsCommand = async (
  input: ListLabelingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLabelingJobs");
  let body: any;
  body = JSON.stringify(se_ListLabelingJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLabelingJobsForWorkteamCommand
 */
export const se_ListLabelingJobsForWorkteamCommand = async (
  input: ListLabelingJobsForWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLabelingJobsForWorkteam");
  let body: any;
  body = JSON.stringify(se_ListLabelingJobsForWorkteamRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLineageGroupsCommand
 */
export const se_ListLineageGroupsCommand = async (
  input: ListLineageGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLineageGroups");
  let body: any;
  body = JSON.stringify(se_ListLineageGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelBiasJobDefinitionsCommand
 */
export const se_ListModelBiasJobDefinitionsCommand = async (
  input: ListModelBiasJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelBiasJobDefinitions");
  let body: any;
  body = JSON.stringify(se_ListModelBiasJobDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelCardExportJobsCommand
 */
export const se_ListModelCardExportJobsCommand = async (
  input: ListModelCardExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelCardExportJobs");
  let body: any;
  body = JSON.stringify(se_ListModelCardExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelCardsCommand
 */
export const se_ListModelCardsCommand = async (
  input: ListModelCardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelCards");
  let body: any;
  body = JSON.stringify(se_ListModelCardsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelCardVersionsCommand
 */
export const se_ListModelCardVersionsCommand = async (
  input: ListModelCardVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelCardVersions");
  let body: any;
  body = JSON.stringify(se_ListModelCardVersionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelExplainabilityJobDefinitionsCommand
 */
export const se_ListModelExplainabilityJobDefinitionsCommand = async (
  input: ListModelExplainabilityJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelExplainabilityJobDefinitions");
  let body: any;
  body = JSON.stringify(se_ListModelExplainabilityJobDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelMetadataCommand
 */
export const se_ListModelMetadataCommand = async (
  input: ListModelMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelPackageGroupsCommand
 */
export const se_ListModelPackageGroupsCommand = async (
  input: ListModelPackageGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelPackageGroups");
  let body: any;
  body = JSON.stringify(se_ListModelPackageGroupsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelPackagesCommand
 */
export const se_ListModelPackagesCommand = async (
  input: ListModelPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelPackages");
  let body: any;
  body = JSON.stringify(se_ListModelPackagesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelQualityJobDefinitionsCommand
 */
export const se_ListModelQualityJobDefinitionsCommand = async (
  input: ListModelQualityJobDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModelQualityJobDefinitions");
  let body: any;
  body = JSON.stringify(se_ListModelQualityJobDefinitionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListModelsCommand
 */
export const se_ListModelsCommand = async (
  input: ListModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListModels");
  let body: any;
  body = JSON.stringify(se_ListModelsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitoringAlertHistoryCommand
 */
export const se_ListMonitoringAlertHistoryCommand = async (
  input: ListMonitoringAlertHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitoringAlertHistory");
  let body: any;
  body = JSON.stringify(se_ListMonitoringAlertHistoryRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitoringAlertsCommand
 */
export const se_ListMonitoringAlertsCommand = async (
  input: ListMonitoringAlertsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitoringAlerts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitoringExecutionsCommand
 */
export const se_ListMonitoringExecutionsCommand = async (
  input: ListMonitoringExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitoringExecutions");
  let body: any;
  body = JSON.stringify(se_ListMonitoringExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitoringSchedulesCommand
 */
export const se_ListMonitoringSchedulesCommand = async (
  input: ListMonitoringSchedulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitoringSchedules");
  let body: any;
  body = JSON.stringify(se_ListMonitoringSchedulesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand
 */
export const se_ListNotebookInstanceLifecycleConfigsCommand = async (
  input: ListNotebookInstanceLifecycleConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNotebookInstanceLifecycleConfigs");
  let body: any;
  body = JSON.stringify(se_ListNotebookInstanceLifecycleConfigsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNotebookInstancesCommand
 */
export const se_ListNotebookInstancesCommand = async (
  input: ListNotebookInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNotebookInstances");
  let body: any;
  body = JSON.stringify(se_ListNotebookInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelineExecutionsCommand
 */
export const se_ListPipelineExecutionsCommand = async (
  input: ListPipelineExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelineExecutions");
  let body: any;
  body = JSON.stringify(se_ListPipelineExecutionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelineExecutionStepsCommand
 */
export const se_ListPipelineExecutionStepsCommand = async (
  input: ListPipelineExecutionStepsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelineExecutionSteps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelineParametersForExecutionCommand
 */
export const se_ListPipelineParametersForExecutionCommand = async (
  input: ListPipelineParametersForExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelineParametersForExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPipelinesCommand
 */
export const se_ListPipelinesCommand = async (
  input: ListPipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPipelines");
  let body: any;
  body = JSON.stringify(se_ListPipelinesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProcessingJobsCommand
 */
export const se_ListProcessingJobsCommand = async (
  input: ListProcessingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProcessingJobs");
  let body: any;
  body = JSON.stringify(se_ListProcessingJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProjects");
  let body: any;
  body = JSON.stringify(se_ListProjectsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSpacesCommand
 */
export const se_ListSpacesCommand = async (
  input: ListSpacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSpaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStageDevicesCommand
 */
export const se_ListStageDevicesCommand = async (
  input: ListStageDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStageDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListStudioLifecycleConfigsCommand
 */
export const se_ListStudioLifecycleConfigsCommand = async (
  input: ListStudioLifecycleConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListStudioLifecycleConfigs");
  let body: any;
  body = JSON.stringify(se_ListStudioLifecycleConfigsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSubscribedWorkteamsCommand
 */
export const se_ListSubscribedWorkteamsCommand = async (
  input: ListSubscribedWorkteamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSubscribedWorkteams");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTags");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrainingJobsCommand
 */
export const se_ListTrainingJobsCommand = async (
  input: ListTrainingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrainingJobs");
  let body: any;
  body = JSON.stringify(se_ListTrainingJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand
 */
export const se_ListTrainingJobsForHyperParameterTuningJobCommand = async (
  input: ListTrainingJobsForHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrainingJobsForHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTransformJobsCommand
 */
export const se_ListTransformJobsCommand = async (
  input: ListTransformJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTransformJobs");
  let body: any;
  body = JSON.stringify(se_ListTransformJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrialComponentsCommand
 */
export const se_ListTrialComponentsCommand = async (
  input: ListTrialComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrialComponents");
  let body: any;
  body = JSON.stringify(se_ListTrialComponentsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTrialsCommand
 */
export const se_ListTrialsCommand = async (
  input: ListTrialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTrials");
  let body: any;
  body = JSON.stringify(se_ListTrialsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUserProfilesCommand
 */
export const se_ListUserProfilesCommand = async (
  input: ListUserProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUserProfiles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkforcesCommand
 */
export const se_ListWorkforcesCommand = async (
  input: ListWorkforcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkforces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWorkteamsCommand
 */
export const se_ListWorkteamsCommand = async (
  input: ListWorkteamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWorkteams");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutModelPackageGroupPolicyCommand
 */
export const se_PutModelPackageGroupPolicyCommand = async (
  input: PutModelPackageGroupPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutModelPackageGroupPolicy");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1QueryLineageCommand
 */
export const se_QueryLineageCommand = async (
  input: QueryLineageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("QueryLineage");
  let body: any;
  body = JSON.stringify(se_QueryLineageRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterDevicesCommand
 */
export const se_RegisterDevicesCommand = async (
  input: RegisterDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RenderUiTemplateCommand
 */
export const se_RenderUiTemplateCommand = async (
  input: RenderUiTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RenderUiTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RetryPipelineExecutionCommand
 */
export const se_RetryPipelineExecutionCommand = async (
  input: RetryPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RetryPipelineExecution");
  let body: any;
  body = JSON.stringify(se_RetryPipelineExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SearchCommand
 */
export const se_SearchCommand = async (input: SearchCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("Search");
  let body: any;
  body = JSON.stringify(se_SearchRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendPipelineExecutionStepFailureCommand
 */
export const se_SendPipelineExecutionStepFailureCommand = async (
  input: SendPipelineExecutionStepFailureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendPipelineExecutionStepFailure");
  let body: any;
  body = JSON.stringify(se_SendPipelineExecutionStepFailureRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1SendPipelineExecutionStepSuccessCommand
 */
export const se_SendPipelineExecutionStepSuccessCommand = async (
  input: SendPipelineExecutionStepSuccessCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("SendPipelineExecutionStepSuccess");
  let body: any;
  body = JSON.stringify(se_SendPipelineExecutionStepSuccessRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartEdgeDeploymentStageCommand
 */
export const se_StartEdgeDeploymentStageCommand = async (
  input: StartEdgeDeploymentStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartEdgeDeploymentStage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartInferenceExperimentCommand
 */
export const se_StartInferenceExperimentCommand = async (
  input: StartInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartInferenceExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMonitoringScheduleCommand
 */
export const se_StartMonitoringScheduleCommand = async (
  input: StartMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMonitoringSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartNotebookInstanceCommand
 */
export const se_StartNotebookInstanceCommand = async (
  input: StartNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartPipelineExecutionCommand
 */
export const se_StartPipelineExecutionCommand = async (
  input: StartPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartPipelineExecution");
  let body: any;
  body = JSON.stringify(se_StartPipelineExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAutoMLJobCommand
 */
export const se_StopAutoMLJobCommand = async (
  input: StopAutoMLJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopAutoMLJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopCompilationJobCommand
 */
export const se_StopCompilationJobCommand = async (
  input: StopCompilationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopCompilationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopEdgeDeploymentStageCommand
 */
export const se_StopEdgeDeploymentStageCommand = async (
  input: StopEdgeDeploymentStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEdgeDeploymentStage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopEdgePackagingJobCommand
 */
export const se_StopEdgePackagingJobCommand = async (
  input: StopEdgePackagingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopEdgePackagingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopHyperParameterTuningJobCommand
 */
export const se_StopHyperParameterTuningJobCommand = async (
  input: StopHyperParameterTuningJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopHyperParameterTuningJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopInferenceExperimentCommand
 */
export const se_StopInferenceExperimentCommand = async (
  input: StopInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopInferenceExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopInferenceRecommendationsJobCommand
 */
export const se_StopInferenceRecommendationsJobCommand = async (
  input: StopInferenceRecommendationsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopInferenceRecommendationsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopLabelingJobCommand
 */
export const se_StopLabelingJobCommand = async (
  input: StopLabelingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopLabelingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopMonitoringScheduleCommand
 */
export const se_StopMonitoringScheduleCommand = async (
  input: StopMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopMonitoringSchedule");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopNotebookInstanceCommand
 */
export const se_StopNotebookInstanceCommand = async (
  input: StopNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopPipelineExecutionCommand
 */
export const se_StopPipelineExecutionCommand = async (
  input: StopPipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopPipelineExecution");
  let body: any;
  body = JSON.stringify(se_StopPipelineExecutionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopProcessingJobCommand
 */
export const se_StopProcessingJobCommand = async (
  input: StopProcessingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopProcessingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTrainingJobCommand
 */
export const se_StopTrainingJobCommand = async (
  input: StopTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTrainingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopTransformJobCommand
 */
export const se_StopTransformJobCommand = async (
  input: StopTransformJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopTransformJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateActionCommand
 */
export const se_UpdateActionCommand = async (
  input: UpdateActionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAction");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAppImageConfigCommand
 */
export const se_UpdateAppImageConfigCommand = async (
  input: UpdateAppImageConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAppImageConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateArtifactCommand
 */
export const se_UpdateArtifactCommand = async (
  input: UpdateArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateArtifact");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateCodeRepositoryCommand
 */
export const se_UpdateCodeRepositoryCommand = async (
  input: UpdateCodeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCodeRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateContextCommand
 */
export const se_UpdateContextCommand = async (
  input: UpdateContextCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateContext");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDeviceFleetCommand
 */
export const se_UpdateDeviceFleetCommand = async (
  input: UpdateDeviceFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDeviceFleet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDevicesCommand
 */
export const se_UpdateDevicesCommand = async (
  input: UpdateDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDomainCommand
 */
export const se_UpdateDomainCommand = async (
  input: UpdateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointCommand
 */
export const se_UpdateEndpointCommand = async (
  input: UpdateEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpoint");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand
 */
export const se_UpdateEndpointWeightsAndCapacitiesCommand = async (
  input: UpdateEndpointWeightsAndCapacitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEndpointWeightsAndCapacities");
  let body: any;
  body = JSON.stringify(se_UpdateEndpointWeightsAndCapacitiesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateExperimentCommand
 */
export const se_UpdateExperimentCommand = async (
  input: UpdateExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateExperiment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFeatureGroupCommand
 */
export const se_UpdateFeatureGroupCommand = async (
  input: UpdateFeatureGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFeatureGroup");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFeatureMetadataCommand
 */
export const se_UpdateFeatureMetadataCommand = async (
  input: UpdateFeatureMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFeatureMetadata");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateHubCommand
 */
export const se_UpdateHubCommand = async (
  input: UpdateHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateHub");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateImageCommand
 */
export const se_UpdateImageCommand = async (
  input: UpdateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateImage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateImageVersionCommand
 */
export const se_UpdateImageVersionCommand = async (
  input: UpdateImageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateImageVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInferenceExperimentCommand
 */
export const se_UpdateInferenceExperimentCommand = async (
  input: UpdateInferenceExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInferenceExperiment");
  let body: any;
  body = JSON.stringify(se_UpdateInferenceExperimentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelCardCommand
 */
export const se_UpdateModelCardCommand = async (
  input: UpdateModelCardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelCard");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateModelPackageCommand
 */
export const se_UpdateModelPackageCommand = async (
  input: UpdateModelPackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateModelPackage");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMonitoringAlertCommand
 */
export const se_UpdateMonitoringAlertCommand = async (
  input: UpdateMonitoringAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMonitoringAlert");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMonitoringScheduleCommand
 */
export const se_UpdateMonitoringScheduleCommand = async (
  input: UpdateMonitoringScheduleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMonitoringSchedule");
  let body: any;
  body = JSON.stringify(se_UpdateMonitoringScheduleRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNotebookInstanceCommand
 */
export const se_UpdateNotebookInstanceCommand = async (
  input: UpdateNotebookInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNotebookInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand
 */
export const se_UpdateNotebookInstanceLifecycleConfigCommand = async (
  input: UpdateNotebookInstanceLifecycleConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNotebookInstanceLifecycleConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePipelineCommand
 */
export const se_UpdatePipelineCommand = async (
  input: UpdatePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePipeline");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePipelineExecutionCommand
 */
export const se_UpdatePipelineExecutionCommand = async (
  input: UpdatePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePipelineExecution");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSpaceCommand
 */
export const se_UpdateSpaceCommand = async (
  input: UpdateSpaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSpace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrainingJobCommand
 */
export const se_UpdateTrainingJobCommand = async (
  input: UpdateTrainingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrainingJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrialCommand
 */
export const se_UpdateTrialCommand = async (
  input: UpdateTrialCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrial");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTrialComponentCommand
 */
export const se_UpdateTrialComponentCommand = async (
  input: UpdateTrialComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTrialComponent");
  let body: any;
  body = JSON.stringify(se_UpdateTrialComponentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUserProfileCommand
 */
export const se_UpdateUserProfileCommand = async (
  input: UpdateUserProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUserProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkforceCommand
 */
export const se_UpdateWorkforceCommand = async (
  input: UpdateWorkforceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkforce");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateWorkteamCommand
 */
export const se_UpdateWorkteamCommand = async (
  input: UpdateWorkteamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateWorkteam");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AddAssociationCommand
 */
export const de_AddAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddAssociationCommandError
 */
const de_AddAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1AddTagsCommand
 */
export const de_AddTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AddTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AddTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AddTagsCommandError
 */
const de_AddTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1AssociateTrialComponentCommand
 */
export const de_AssociateTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateTrialComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateTrialComponentCommandError
 */
const de_AssociateTrialComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTrialComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1BatchDescribeModelPackageCommand
 */
export const de_BatchDescribeModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_BatchDescribeModelPackageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_BatchDescribeModelPackageOutput(data, context);
  const response: BatchDescribeModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1BatchDescribeModelPackageCommandError
 */
const de_BatchDescribeModelPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeModelPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1CreateActionCommand
 */
export const de_CreateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateActionCommandError
 */
const de_CreateActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAlgorithmCommand
 */
export const de_CreateAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlgorithmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAlgorithmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAlgorithmCommandError
 */
const de_CreateAlgorithmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlgorithmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAppCommandError
 */
const de_CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAppImageConfigCommand
 */
export const de_CreateAppImageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppImageConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppImageConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAppImageConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAppImageConfigCommandError
 */
const de_CreateAppImageConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppImageConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateArtifactCommand
 */
export const de_CreateArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateArtifactCommandError
 */
const de_CreateArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAutoMLJobCommand
 */
export const de_CreateAutoMLJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoMLJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAutoMLJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAutoMLJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAutoMLJobCommandError
 */
const de_CreateAutoMLJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoMLJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateAutoMLJobV2Command
 */
export const de_CreateAutoMLJobV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoMLJobV2CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAutoMLJobV2CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateAutoMLJobV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateAutoMLJobV2CommandError
 */
const de_CreateAutoMLJobV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoMLJobV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateCodeRepositoryCommand
 */
export const de_CreateCodeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCodeRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCodeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCodeRepositoryCommandError
 */
const de_CreateCodeRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCodeRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1CreateCompilationJobCommand
 */
export const de_CreateCompilationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCompilationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateCompilationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateCompilationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateCompilationJobCommandError
 */
const de_CreateCompilationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCompilationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateContextCommand
 */
export const de_CreateContextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateContextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateContextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateContextCommandError
 */
const de_CreateContextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDataQualityJobDefinitionCommand
 */
export const de_CreateDataQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataQualityJobDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDataQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDataQualityJobDefinitionCommandError
 */
const de_CreateDataQualityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataQualityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDeviceFleetCommand
 */
export const de_CreateDeviceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDeviceFleetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateDeviceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDeviceFleetCommandError
 */
const de_CreateDeviceFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDomainCommandError
 */
const de_CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEdgeDeploymentPlanCommand
 */
export const de_CreateEdgeDeploymentPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgeDeploymentPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEdgeDeploymentPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEdgeDeploymentPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEdgeDeploymentPlanCommandError
 */
const de_CreateEdgeDeploymentPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgeDeploymentPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEdgeDeploymentStageCommand
 */
export const de_CreateEdgeDeploymentStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgeDeploymentStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEdgeDeploymentStageCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateEdgeDeploymentStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEdgeDeploymentStageCommandError
 */
const de_CreateEdgeDeploymentStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgeDeploymentStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEdgePackagingJobCommand
 */
export const de_CreateEdgePackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgePackagingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEdgePackagingJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: CreateEdgePackagingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEdgePackagingJobCommandError
 */
const de_CreateEdgePackagingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEdgePackagingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEndpointCommand
 */
export const de_CreateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEndpointCommandError
 */
const de_CreateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateEndpointConfigCommand
 */
export const de_CreateEndpointConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEndpointConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateEndpointConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateEndpointConfigCommandError
 */
const de_CreateEndpointConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEndpointConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateExperimentCommand
 */
export const de_CreateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateExperimentCommandError
 */
const de_CreateExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFeatureGroupCommand
 */
export const de_CreateFeatureGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeatureGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFeatureGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFeatureGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFeatureGroupCommandError
 */
const de_CreateFeatureGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeatureGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFlowDefinitionCommand
 */
export const de_CreateFlowDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFlowDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateFlowDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFlowDefinitionCommandError
 */
const de_CreateFlowDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFlowDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateHubCommand
 */
export const de_CreateHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHubCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHubCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateHubCommandError
 */
const de_CreateHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateHumanTaskUiCommand
 */
export const de_CreateHumanTaskUiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHumanTaskUiCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHumanTaskUiCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateHumanTaskUiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateHumanTaskUiCommandError
 */
const de_CreateHumanTaskUiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHumanTaskUiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateHyperParameterTuningJobCommand
 */
export const de_CreateHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHyperParameterTuningJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateHyperParameterTuningJobCommandError
 */
const de_CreateHyperParameterTuningJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHyperParameterTuningJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateImageCommand
 */
export const de_CreateImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateImageCommandError
 */
const de_CreateImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateImageVersionCommand
 */
export const de_CreateImageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateImageVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateImageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateImageVersionCommandError
 */
const de_CreateImageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateInferenceExperimentCommand
 */
export const de_CreateInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInferenceExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInferenceExperimentCommandError
 */
const de_CreateInferenceExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateInferenceRecommendationsJobCommand
 */
export const de_CreateInferenceRecommendationsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceRecommendationsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInferenceRecommendationsJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateInferenceRecommendationsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInferenceRecommendationsJobCommandError
 */
const de_CreateInferenceRecommendationsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInferenceRecommendationsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateLabelingJobCommand
 */
export const de_CreateLabelingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateLabelingJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLabelingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLabelingJobCommandError
 */
const de_CreateLabelingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLabelingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateModelCommand
 */
export const de_CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelCommandError
 */
const de_CreateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateModelBiasJobDefinitionCommand
 */
export const de_CreateModelBiasJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelBiasJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelBiasJobDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelBiasJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelBiasJobDefinitionCommandError
 */
const de_CreateModelBiasJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelBiasJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateModelCardCommand
 */
export const de_CreateModelCardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelCardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelCardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelCardCommandError
 */
const de_CreateModelCardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateModelCardExportJobCommand
 */
export const de_CreateModelCardExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCardExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelCardExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelCardExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelCardExportJobCommandError
 */
const de_CreateModelCardExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCardExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateModelExplainabilityJobDefinitionCommand
 */
export const de_CreateModelExplainabilityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelExplainabilityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelExplainabilityJobDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelExplainabilityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelExplainabilityJobDefinitionCommandError
 */
const de_CreateModelExplainabilityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelExplainabilityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateModelPackageCommand
 */
export const de_CreateModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelPackageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelPackageCommandError
 */
const de_CreateModelPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateModelPackageGroupCommand
 */
export const de_CreateModelPackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelPackageGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelPackageGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelPackageGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelPackageGroupCommandError
 */
const de_CreateModelPackageGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelPackageGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateModelQualityJobDefinitionCommand
 */
export const de_CreateModelQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateModelQualityJobDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateModelQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateModelQualityJobDefinitionCommandError
 */
const de_CreateModelQualityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelQualityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateMonitoringScheduleCommand
 */
export const de_CreateMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMonitoringScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateMonitoringScheduleCommandError
 */
const de_CreateMonitoringScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitoringScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateNotebookInstanceCommand
 */
export const de_CreateNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNotebookInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateNotebookInstanceCommandError
 */
const de_CreateNotebookInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommand
 */
export const de_CreateNotebookInstanceLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNotebookInstanceLifecycleConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateNotebookInstanceLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateNotebookInstanceLifecycleConfigCommandError
 */
const de_CreateNotebookInstanceLifecycleConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePipelineCommand
 */
export const de_CreatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePipelineCommandError
 */
const de_CreatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePresignedDomainUrlCommand
 */
export const de_CreatePresignedDomainUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedDomainUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePresignedDomainUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreatePresignedDomainUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePresignedDomainUrlCommandError
 */
const de_CreatePresignedDomainUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedDomainUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommand
 */
export const de_CreatePresignedNotebookInstanceUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedNotebookInstanceUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePresignedNotebookInstanceUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreatePresignedNotebookInstanceUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreatePresignedNotebookInstanceUrlCommandError
 */
const de_CreatePresignedNotebookInstanceUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePresignedNotebookInstanceUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1CreateProcessingJobCommand
 */
export const de_CreateProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProcessingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProcessingJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateProcessingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProcessingJobCommandError
 */
const de_CreateProcessingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProcessingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProjectCommandError
 */
const de_CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSpaceCommand
 */
export const de_CreateSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSpaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSpaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateSpaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSpaceCommandError
 */
const de_CreateSpaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSpaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStudioLifecycleConfigCommand
 */
export const de_CreateStudioLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStudioLifecycleConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateStudioLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateStudioLifecycleConfigCommandError
 */
const de_CreateStudioLifecycleConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStudioLifecycleConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTrainingJobCommand
 */
export const de_CreateTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrainingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTrainingJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTrainingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTrainingJobCommandError
 */
const de_CreateTrainingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrainingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTransformJobCommand
 */
export const de_CreateTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransformJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTransformJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTransformJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTransformJobCommandError
 */
const de_CreateTransformJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransformJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTrialCommand
 */
export const de_CreateTrialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTrialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTrialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTrialCommandError
 */
const de_CreateTrialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateTrialComponentCommand
 */
export const de_CreateTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTrialComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTrialComponentCommandError
 */
const de_CreateTrialComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTrialComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateUserProfileCommand
 */
export const de_CreateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUserProfileCommandError
 */
const de_CreateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWorkforceCommand
 */
export const de_CreateWorkforceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkforceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkforceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateWorkforceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkforceCommandError
 */
const de_CreateWorkforceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkforceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1CreateWorkteamCommand
 */
export const de_CreateWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWorkteamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateWorkteamCommandError
 */
const de_CreateWorkteamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorkteamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteActionCommand
 */
export const de_DeleteActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteActionCommandError
 */
const de_DeleteActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAlgorithmCommand
 */
export const de_DeleteAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlgorithmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAlgorithmCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAlgorithmCommandError
 */
const de_DeleteAlgorithmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlgorithmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAppCommandError
 */
const de_DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAppImageConfigCommand
 */
export const de_DeleteAppImageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppImageConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppImageConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAppImageConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAppImageConfigCommandError
 */
const de_DeleteAppImageConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppImageConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteArtifactCommand
 */
export const de_DeleteArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteArtifactCommandError
 */
const de_DeleteArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteAssociationCommand
 */
export const de_DeleteAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteAssociationCommandError
 */
const de_DeleteAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteCodeRepositoryCommand
 */
export const de_DeleteCodeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteCodeRepositoryCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteCodeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCodeRepositoryCommandError
 */
const de_DeleteCodeRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCodeRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteContextCommand
 */
export const de_DeleteContextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteContextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteContextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteContextCommandError
 */
const de_DeleteContextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDataQualityJobDefinitionCommand
 */
export const de_DeleteDataQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDataQualityJobDefinitionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDataQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDataQualityJobDefinitionCommandError
 */
const de_DeleteDataQualityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataQualityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDeviceFleetCommand
 */
export const de_DeleteDeviceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDeviceFleetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDeviceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDeviceFleetCommandError
 */
const de_DeleteDeviceFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEdgeDeploymentPlanCommand
 */
export const de_DeleteEdgeDeploymentPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEdgeDeploymentPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEdgeDeploymentPlanCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEdgeDeploymentPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEdgeDeploymentPlanCommandError
 */
const de_DeleteEdgeDeploymentPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEdgeDeploymentPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEdgeDeploymentStageCommand
 */
export const de_DeleteEdgeDeploymentStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEdgeDeploymentStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEdgeDeploymentStageCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEdgeDeploymentStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEdgeDeploymentStageCommandError
 */
const de_DeleteEdgeDeploymentStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEdgeDeploymentStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteEndpointCommand
 */
export const de_DeleteEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEndpointCommandError
 */
const de_DeleteEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteEndpointConfigCommand
 */
export const de_DeleteEndpointConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEndpointConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteEndpointConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteEndpointConfigCommandError
 */
const de_DeleteEndpointConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEndpointConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteExperimentCommand
 */
export const de_DeleteExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteExperimentCommandError
 */
const de_DeleteExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFeatureGroupCommand
 */
export const de_DeleteFeatureGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFeatureGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFeatureGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteFeatureGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFeatureGroupCommandError
 */
const de_DeleteFeatureGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFeatureGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFlowDefinitionCommand
 */
export const de_DeleteFlowDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFlowDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFlowDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFlowDefinitionCommandError
 */
const de_DeleteFlowDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFlowDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteHubCommand
 */
export const de_DeleteHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHubCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHubCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHubCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHubCommandError
 */
const de_DeleteHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteHubContentCommand
 */
export const de_DeleteHubContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHubContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHubContentCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteHubContentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHubContentCommandError
 */
const de_DeleteHubContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHubContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteHumanTaskUiCommand
 */
export const de_DeleteHumanTaskUiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanTaskUiCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteHumanTaskUiCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteHumanTaskUiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteHumanTaskUiCommandError
 */
const de_DeleteHumanTaskUiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteHumanTaskUiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteImageCommand
 */
export const de_DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteImageCommandError
 */
const de_DeleteImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteImageVersionCommand
 */
export const de_DeleteImageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteImageVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteImageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteImageVersionCommandError
 */
const de_DeleteImageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteInferenceExperimentCommand
 */
export const de_DeleteInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInferenceExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInferenceExperimentCommandError
 */
const de_DeleteInferenceExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInferenceExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteModelCommand
 */
export const de_DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelCommandError
 */
const de_DeleteModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteModelBiasJobDefinitionCommand
 */
export const de_DeleteModelBiasJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelBiasJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelBiasJobDefinitionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelBiasJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelBiasJobDefinitionCommandError
 */
const de_DeleteModelBiasJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelBiasJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteModelCardCommand
 */
export const de_DeleteModelCardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelCardCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelCardCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelCardCommandError
 */
const de_DeleteModelCardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommand
 */
export const de_DeleteModelExplainabilityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelExplainabilityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelExplainabilityJobDefinitionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelExplainabilityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelExplainabilityJobDefinitionCommandError
 */
const de_DeleteModelExplainabilityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelExplainabilityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteModelPackageCommand
 */
export const de_DeleteModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelPackageCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelPackageCommandError
 */
const de_DeleteModelPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteModelPackageGroupCommand
 */
export const de_DeleteModelPackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelPackageGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelPackageGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelPackageGroupCommandError
 */
const de_DeleteModelPackageGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteModelPackageGroupPolicyCommand
 */
export const de_DeleteModelPackageGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelPackageGroupPolicyCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelPackageGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelPackageGroupPolicyCommandError
 */
const de_DeleteModelPackageGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelPackageGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteModelQualityJobDefinitionCommand
 */
export const de_DeleteModelQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteModelQualityJobDefinitionCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteModelQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteModelQualityJobDefinitionCommandError
 */
const de_DeleteModelQualityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelQualityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMonitoringScheduleCommand
 */
export const de_DeleteMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMonitoringScheduleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMonitoringScheduleCommandError
 */
const de_DeleteMonitoringScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitoringScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteNotebookInstanceCommand
 */
export const de_DeleteNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNotebookInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteNotebookInstanceCommandError
 */
const de_DeleteNotebookInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommand
 */
export const de_DeleteNotebookInstanceLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNotebookInstanceLifecycleConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteNotebookInstanceLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteNotebookInstanceLifecycleConfigCommandError
 */
const de_DeleteNotebookInstanceLifecycleConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeletePipelineCommand
 */
export const de_DeletePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeletePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeletePipelineCommandError
 */
const de_DeletePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProjectCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProjectCommandError
 */
const de_DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSpaceCommand
 */
export const de_DeleteSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSpaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSpaceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteSpaceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSpaceCommandError
 */
const de_DeleteSpaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSpaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteStudioLifecycleConfigCommand
 */
export const de_DeleteStudioLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStudioLifecycleConfigCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteStudioLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteStudioLifecycleConfigCommandError
 */
const de_DeleteStudioLifecycleConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStudioLifecycleConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTagsCommand
 */
export const de_DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTagsCommandError
 */
const de_DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteTrialCommand
 */
export const de_DeleteTrialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTrialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTrialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTrialCommandError
 */
const de_DeleteTrialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteTrialComponentCommand
 */
export const de_DeleteTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTrialComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTrialComponentCommandError
 */
const de_DeleteTrialComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTrialComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteUserProfileCommand
 */
export const de_DeleteUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUserProfileCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUserProfileCommandError
 */
const de_DeleteUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWorkforceCommand
 */
export const de_DeleteWorkforceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkforceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkforceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWorkforceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkforceCommandError
 */
const de_DeleteWorkforceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkforceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DeleteWorkteamCommand
 */
export const de_DeleteWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWorkteamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteWorkteamCommandError
 */
const de_DeleteWorkteamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorkteamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterDevicesCommand
 */
export const de_DeregisterDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterDevicesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeregisterDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeregisterDevicesCommandError
 */
const de_DeregisterDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeActionCommand
 */
export const de_DescribeActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeActionResponse(data, context);
  const response: DescribeActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeActionCommandError
 */
const de_DescribeActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAlgorithmCommand
 */
export const de_DescribeAlgorithmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAlgorithmCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAlgorithmOutput(data, context);
  const response: DescribeAlgorithmCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAlgorithmCommandError
 */
const de_DescribeAlgorithmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlgorithmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeAppCommand
 */
export const de_DescribeAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAppResponse(data, context);
  const response: DescribeAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAppCommandError
 */
const de_DescribeAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAppImageConfigCommand
 */
export const de_DescribeAppImageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppImageConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAppImageConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAppImageConfigResponse(data, context);
  const response: DescribeAppImageConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAppImageConfigCommandError
 */
const de_DescribeAppImageConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAppImageConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeArtifactCommand
 */
export const de_DescribeArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeArtifactResponse(data, context);
  const response: DescribeArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeArtifactCommandError
 */
const de_DescribeArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobCommand
 */
export const de_DescribeAutoMLJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoMLJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutoMLJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutoMLJobResponse(data, context);
  const response: DescribeAutoMLJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobCommandError
 */
const de_DescribeAutoMLJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoMLJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobV2Command
 */
export const de_DescribeAutoMLJobV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoMLJobV2CommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutoMLJobV2CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutoMLJobV2Response(data, context);
  const response: DescribeAutoMLJobV2CommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobV2CommandError
 */
const de_DescribeAutoMLJobV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoMLJobV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeCodeRepositoryCommand
 */
export const de_DescribeCodeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCodeRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCodeRepositoryOutput(data, context);
  const response: DescribeCodeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCodeRepositoryCommandError
 */
const de_DescribeCodeRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeCompilationJobCommand
 */
export const de_DescribeCompilationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCompilationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCompilationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeCompilationJobResponse(data, context);
  const response: DescribeCompilationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeCompilationJobCommandError
 */
const de_DescribeCompilationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCompilationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeContextCommand
 */
export const de_DescribeContextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeContextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeContextResponse(data, context);
  const response: DescribeContextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeContextCommandError
 */
const de_DescribeContextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeContextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDataQualityJobDefinitionCommand
 */
export const de_DescribeDataQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataQualityJobDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataQualityJobDefinitionResponse(data, context);
  const response: DescribeDataQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDataQualityJobDefinitionCommandError
 */
const de_DescribeDataQualityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataQualityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDeviceCommand
 */
export const de_DescribeDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeviceResponse(data, context);
  const response: DescribeDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeviceCommandError
 */
const de_DescribeDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDeviceFleetCommand
 */
export const de_DescribeDeviceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDeviceFleetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDeviceFleetResponse(data, context);
  const response: DescribeDeviceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDeviceFleetCommandError
 */
const de_DescribeDeviceFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeviceFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDomainCommand
 */
export const de_DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDomainResponse(data, context);
  const response: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDomainCommandError
 */
const de_DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEdgeDeploymentPlanCommand
 */
export const de_DescribeEdgeDeploymentPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgeDeploymentPlanCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEdgeDeploymentPlanCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEdgeDeploymentPlanResponse(data, context);
  const response: DescribeEdgeDeploymentPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEdgeDeploymentPlanCommandError
 */
const de_DescribeEdgeDeploymentPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgeDeploymentPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEdgePackagingJobCommand
 */
export const de_DescribeEdgePackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgePackagingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEdgePackagingJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEdgePackagingJobResponse(data, context);
  const response: DescribeEdgePackagingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEdgePackagingJobCommandError
 */
const de_DescribeEdgePackagingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEdgePackagingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeEndpointCommand
 */
export const de_DescribeEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndpointOutput(data, context);
  const response: DescribeEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointCommandError
 */
const de_DescribeEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeEndpointConfigCommand
 */
export const de_DescribeEndpointConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeEndpointConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeEndpointConfigOutput(data, context);
  const response: DescribeEndpointConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeEndpointConfigCommandError
 */
const de_DescribeEndpointConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeEndpointConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeExperimentCommand
 */
export const de_DescribeExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExperimentResponse(data, context);
  const response: DescribeExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeExperimentCommandError
 */
const de_DescribeExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFeatureGroupCommand
 */
export const de_DescribeFeatureGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFeatureGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFeatureGroupResponse(data, context);
  const response: DescribeFeatureGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFeatureGroupCommandError
 */
const de_DescribeFeatureGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFeatureMetadataCommand
 */
export const de_DescribeFeatureMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFeatureMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFeatureMetadataResponse(data, context);
  const response: DescribeFeatureMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFeatureMetadataCommandError
 */
const de_DescribeFeatureMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFeatureMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFlowDefinitionCommand
 */
export const de_DescribeFlowDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFlowDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFlowDefinitionResponse(data, context);
  const response: DescribeFlowDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFlowDefinitionCommandError
 */
const de_DescribeFlowDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFlowDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeHubCommand
 */
export const de_DescribeHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHubCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHubResponse(data, context);
  const response: DescribeHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHubCommandError
 */
const de_DescribeHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeHubContentCommand
 */
export const de_DescribeHubContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHubContentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHubContentResponse(data, context);
  const response: DescribeHubContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHubContentCommandError
 */
const de_DescribeHubContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeHumanTaskUiCommand
 */
export const de_DescribeHumanTaskUiCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanTaskUiCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHumanTaskUiCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHumanTaskUiResponse(data, context);
  const response: DescribeHumanTaskUiCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHumanTaskUiCommandError
 */
const de_DescribeHumanTaskUiCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHumanTaskUiCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeHyperParameterTuningJobCommand
 */
export const de_DescribeHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeHyperParameterTuningJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeHyperParameterTuningJobResponse(data, context);
  const response: DescribeHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeHyperParameterTuningJobCommandError
 */
const de_DescribeHyperParameterTuningJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHyperParameterTuningJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeImageCommand
 */
export const de_DescribeImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageResponse(data, context);
  const response: DescribeImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeImageCommandError
 */
const de_DescribeImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeImageVersionCommand
 */
export const de_DescribeImageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeImageVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeImageVersionResponse(data, context);
  const response: DescribeImageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeImageVersionCommandError
 */
const de_DescribeImageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInferenceExperimentCommand
 */
export const de_DescribeInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInferenceExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInferenceExperimentResponse(data, context);
  const response: DescribeInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInferenceExperimentCommandError
 */
const de_DescribeInferenceExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeInferenceRecommendationsJobCommand
 */
export const de_DescribeInferenceRecommendationsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceRecommendationsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInferenceRecommendationsJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeInferenceRecommendationsJobResponse(data, context);
  const response: DescribeInferenceRecommendationsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeInferenceRecommendationsJobCommandError
 */
const de_DescribeInferenceRecommendationsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInferenceRecommendationsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLabelingJobCommand
 */
export const de_DescribeLabelingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLabelingJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLabelingJobResponse(data, context);
  const response: DescribeLabelingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLabelingJobCommandError
 */
const de_DescribeLabelingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLabelingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeLineageGroupCommand
 */
export const de_DescribeLineageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLineageGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeLineageGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLineageGroupResponse(data, context);
  const response: DescribeLineageGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLineageGroupCommandError
 */
const de_DescribeLineageGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLineageGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeModelCommand
 */
export const de_DescribeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelOutput(data, context);
  const response: DescribeModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelCommandError
 */
const de_DescribeModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeModelBiasJobDefinitionCommand
 */
export const de_DescribeModelBiasJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelBiasJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelBiasJobDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelBiasJobDefinitionResponse(data, context);
  const response: DescribeModelBiasJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelBiasJobDefinitionCommandError
 */
const de_DescribeModelBiasJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelBiasJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeModelCardCommand
 */
export const de_DescribeModelCardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelCardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelCardResponse(data, context);
  const response: DescribeModelCardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelCardCommandError
 */
const de_DescribeModelCardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeModelCardExportJobCommand
 */
export const de_DescribeModelCardExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCardExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelCardExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelCardExportJobResponse(data, context);
  const response: DescribeModelCardExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelCardExportJobCommandError
 */
const de_DescribeModelCardExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCardExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommand
 */
export const de_DescribeModelExplainabilityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelExplainabilityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelExplainabilityJobDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelExplainabilityJobDefinitionResponse(data, context);
  const response: DescribeModelExplainabilityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelExplainabilityJobDefinitionCommandError
 */
const de_DescribeModelExplainabilityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelExplainabilityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeModelPackageCommand
 */
export const de_DescribeModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelPackageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelPackageOutput(data, context);
  const response: DescribeModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelPackageCommandError
 */
const de_DescribeModelPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeModelPackageGroupCommand
 */
export const de_DescribeModelPackageGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackageGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelPackageGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelPackageGroupOutput(data, context);
  const response: DescribeModelPackageGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelPackageGroupCommandError
 */
const de_DescribeModelPackageGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackageGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeModelQualityJobDefinitionCommand
 */
export const de_DescribeModelQualityJobDefinitionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelQualityJobDefinitionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeModelQualityJobDefinitionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeModelQualityJobDefinitionResponse(data, context);
  const response: DescribeModelQualityJobDefinitionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeModelQualityJobDefinitionCommandError
 */
const de_DescribeModelQualityJobDefinitionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelQualityJobDefinitionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMonitoringScheduleCommand
 */
export const de_DescribeMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMonitoringScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMonitoringScheduleResponse(data, context);
  const response: DescribeMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeMonitoringScheduleCommandError
 */
const de_DescribeMonitoringScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMonitoringScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceCommand
 */
export const de_DescribeNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNotebookInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNotebookInstanceOutput(data, context);
  const response: DescribeNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceCommandError
 */
const de_DescribeNotebookInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommand
 */
export const de_DescribeNotebookInstanceLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeNotebookInstanceLifecycleConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeNotebookInstanceLifecycleConfigOutput(data, context);
  const response: DescribeNotebookInstanceLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigCommandError
 */
const de_DescribeNotebookInstanceLifecycleConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribePipelineCommand
 */
export const de_DescribePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePipelineResponse(data, context);
  const response: DescribePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePipelineCommandError
 */
const de_DescribePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommand
 */
export const de_DescribePipelineDefinitionForExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineDefinitionForExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePipelineDefinitionForExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePipelineDefinitionForExecutionResponse(data, context);
  const response: DescribePipelineDefinitionForExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePipelineDefinitionForExecutionCommandError
 */
const de_DescribePipelineDefinitionForExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineDefinitionForExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePipelineExecutionCommand
 */
export const de_DescribePipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePipelineExecutionResponse(data, context);
  const response: DescribePipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribePipelineExecutionCommandError
 */
const de_DescribePipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProcessingJobCommand
 */
export const de_DescribeProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProcessingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProcessingJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProcessingJobResponse(data, context);
  const response: DescribeProcessingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProcessingJobCommandError
 */
const de_DescribeProcessingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProcessingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeProjectCommand
 */
export const de_DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeProjectOutput(data, context);
  const response: DescribeProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeProjectCommandError
 */
const de_DescribeProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeSpaceCommand
 */
export const de_DescribeSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSpaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSpaceResponse(data, context);
  const response: DescribeSpaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSpaceCommandError
 */
const de_DescribeSpaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSpaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStudioLifecycleConfigCommand
 */
export const de_DescribeStudioLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStudioLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStudioLifecycleConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStudioLifecycleConfigResponse(data, context);
  const response: DescribeStudioLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStudioLifecycleConfigCommandError
 */
const de_DescribeStudioLifecycleConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStudioLifecycleConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSubscribedWorkteamCommand
 */
export const de_DescribeSubscribedWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribedWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSubscribedWorkteamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeSubscribedWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSubscribedWorkteamCommandError
 */
const de_DescribeSubscribedWorkteamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSubscribedWorkteamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeTrainingJobCommand
 */
export const de_DescribeTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrainingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrainingJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrainingJobResponse(data, context);
  const response: DescribeTrainingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrainingJobCommandError
 */
const de_DescribeTrainingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrainingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTransformJobCommand
 */
export const de_DescribeTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTransformJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTransformJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTransformJobResponse(data, context);
  const response: DescribeTransformJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTransformJobCommandError
 */
const de_DescribeTransformJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTransformJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTrialCommand
 */
export const de_DescribeTrialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrialResponse(data, context);
  const response: DescribeTrialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrialCommandError
 */
const de_DescribeTrialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeTrialComponentCommand
 */
export const de_DescribeTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeTrialComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeTrialComponentResponse(data, context);
  const response: DescribeTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeTrialComponentCommandError
 */
const de_DescribeTrialComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTrialComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeUserProfileCommand
 */
export const de_DescribeUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeUserProfileResponse(data, context);
  const response: DescribeUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeUserProfileCommandError
 */
const de_DescribeUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWorkforceCommand
 */
export const de_DescribeWorkforceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkforceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkforceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkforceResponse(data, context);
  const response: DescribeWorkforceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkforceCommandError
 */
const de_DescribeWorkforceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkforceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DescribeWorkteamCommand
 */
export const de_DescribeWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWorkteamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWorkteamResponse(data, context);
  const response: DescribeWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeWorkteamCommandError
 */
const de_DescribeWorkteamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorkteamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommand
 */
export const de_DisableSagemakerServicecatalogPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSagemakerServicecatalogPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableSagemakerServicecatalogPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisableSagemakerServicecatalogPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisableSagemakerServicecatalogPortfolioCommandError
 */
const de_DisableSagemakerServicecatalogPortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSagemakerServicecatalogPortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1DisassociateTrialComponentCommand
 */
export const de_DisassociateTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateTrialComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateTrialComponentCommandError
 */
const de_DisassociateTrialComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTrialComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommand
 */
export const de_EnableSagemakerServicecatalogPortfolioCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSagemakerServicecatalogPortfolioCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableSagemakerServicecatalogPortfolioCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: EnableSagemakerServicecatalogPortfolioCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1EnableSagemakerServicecatalogPortfolioCommandError
 */
const de_EnableSagemakerServicecatalogPortfolioCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSagemakerServicecatalogPortfolioCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1GetDeviceFleetReportCommand
 */
export const de_GetDeviceFleetReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceFleetReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeviceFleetReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeviceFleetReportResponse(data, context);
  const response: GetDeviceFleetReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeviceFleetReportCommandError
 */
const de_GetDeviceFleetReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceFleetReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1GetLineageGroupPolicyCommand
 */
export const de_GetLineageGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLineageGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetLineageGroupPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetLineageGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetLineageGroupPolicyCommandError
 */
const de_GetLineageGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLineageGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetModelPackageGroupPolicyCommand
 */
export const de_GetModelPackageGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelPackageGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetModelPackageGroupPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetModelPackageGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetModelPackageGroupPolicyCommandError
 */
const de_GetModelPackageGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetModelPackageGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommand
 */
export const de_GetSagemakerServicecatalogPortfolioStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSagemakerServicecatalogPortfolioStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSagemakerServicecatalogPortfolioStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSagemakerServicecatalogPortfolioStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSagemakerServicecatalogPortfolioStatusCommandError
 */
const de_GetSagemakerServicecatalogPortfolioStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSagemakerServicecatalogPortfolioStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1GetSearchSuggestionsCommand
 */
export const de_GetSearchSuggestionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSearchSuggestionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSearchSuggestionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetSearchSuggestionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSearchSuggestionsCommandError
 */
const de_GetSearchSuggestionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSearchSuggestionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ImportHubContentCommand
 */
export const de_ImportHubContentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHubContentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportHubContentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ImportHubContentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ImportHubContentCommandError
 */
const de_ImportHubContentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportHubContentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListActionsCommand
 */
export const de_ListActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListActionsResponse(data, context);
  const response: ListActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListActionsCommandError
 */
const de_ListActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAlgorithmsCommand
 */
export const de_ListAlgorithmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlgorithmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAlgorithmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAlgorithmsOutput(data, context);
  const response: ListAlgorithmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAlgorithmsCommandError
 */
const de_ListAlgorithmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlgorithmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListAliasesCommand
 */
export const de_ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAliasesCommandError
 */
const de_ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAppImageConfigsCommand
 */
export const de_ListAppImageConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppImageConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAppImageConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAppImageConfigsResponse(data, context);
  const response: ListAppImageConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAppImageConfigsCommandError
 */
const de_ListAppImageConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppImageConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListAppsCommand
 */
export const de_ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAppsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAppsResponse(data, context);
  const response: ListAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAppsCommandError
 */
const de_ListAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListArtifactsCommand
 */
export const de_ListArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListArtifactsResponse(data, context);
  const response: ListArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListArtifactsCommandError
 */
const de_ListArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAssociationsCommand
 */
export const de_ListAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAssociationsResponse(data, context);
  const response: ListAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAssociationsCommandError
 */
const de_ListAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListAutoMLJobsCommand
 */
export const de_ListAutoMLJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoMLJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAutoMLJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAutoMLJobsResponse(data, context);
  const response: ListAutoMLJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListAutoMLJobsCommandError
 */
const de_ListAutoMLJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoMLJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListCandidatesForAutoMLJobCommand
 */
export const de_ListCandidatesForAutoMLJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCandidatesForAutoMLJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCandidatesForAutoMLJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCandidatesForAutoMLJobResponse(data, context);
  const response: ListCandidatesForAutoMLJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCandidatesForAutoMLJobCommandError
 */
const de_ListCandidatesForAutoMLJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCandidatesForAutoMLJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListCodeRepositoriesCommand
 */
export const de_ListCodeRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCodeRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCodeRepositoriesOutput(data, context);
  const response: ListCodeRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCodeRepositoriesCommandError
 */
const de_ListCodeRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCodeRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListCompilationJobsCommand
 */
export const de_ListCompilationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompilationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListCompilationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCompilationJobsResponse(data, context);
  const response: ListCompilationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCompilationJobsCommandError
 */
const de_ListCompilationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCompilationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListContextsCommand
 */
export const de_ListContextsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContextsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListContextsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListContextsResponse(data, context);
  const response: ListContextsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListContextsCommandError
 */
const de_ListContextsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContextsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDataQualityJobDefinitionsCommand
 */
export const de_ListDataQualityJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityJobDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDataQualityJobDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDataQualityJobDefinitionsResponse(data, context);
  const response: ListDataQualityJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDataQualityJobDefinitionsCommandError
 */
const de_ListDataQualityJobDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataQualityJobDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListDeviceFleetsCommand
 */
export const de_ListDeviceFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceFleetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeviceFleetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeviceFleetsResponse(data, context);
  const response: ListDeviceFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDeviceFleetsCommandError
 */
const de_ListDeviceFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListDevicesCommand
 */
export const de_ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDevicesResponse(data, context);
  const response: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDevicesCommandError
 */
const de_ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDomainsResponse(data, context);
  const response: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDomainsCommandError
 */
const de_ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListEdgeDeploymentPlansCommand
 */
export const de_ListEdgeDeploymentPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEdgeDeploymentPlansCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEdgeDeploymentPlansCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEdgeDeploymentPlansResponse(data, context);
  const response: ListEdgeDeploymentPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEdgeDeploymentPlansCommandError
 */
const de_ListEdgeDeploymentPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEdgeDeploymentPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListEdgePackagingJobsCommand
 */
export const de_ListEdgePackagingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEdgePackagingJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEdgePackagingJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEdgePackagingJobsResponse(data, context);
  const response: ListEdgePackagingJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEdgePackagingJobsCommandError
 */
const de_ListEdgePackagingJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEdgePackagingJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListEndpointConfigsCommand
 */
export const de_ListEndpointConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEndpointConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointConfigsOutput(data, context);
  const response: ListEndpointConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEndpointConfigsCommandError
 */
const de_ListEndpointConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListEndpointsCommand
 */
export const de_ListEndpointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEndpointsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEndpointsOutput(data, context);
  const response: ListEndpointsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListEndpointsCommandError
 */
const de_ListEndpointsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEndpointsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListExperimentsCommand
 */
export const de_ListExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExperimentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExperimentsResponse(data, context);
  const response: ListExperimentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListExperimentsCommandError
 */
const de_ListExperimentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListFeatureGroupsCommand
 */
export const de_ListFeatureGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeatureGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFeatureGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFeatureGroupsResponse(data, context);
  const response: ListFeatureGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFeatureGroupsCommandError
 */
const de_ListFeatureGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeatureGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListFlowDefinitionsCommand
 */
export const de_ListFlowDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListFlowDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListFlowDefinitionsResponse(data, context);
  const response: ListFlowDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListFlowDefinitionsCommandError
 */
const de_ListFlowDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFlowDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListHubContentsCommand
 */
export const de_ListHubContentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubContentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHubContentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHubContentsResponse(data, context);
  const response: ListHubContentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHubContentsCommandError
 */
const de_ListHubContentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubContentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListHubContentVersionsCommand
 */
export const de_ListHubContentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubContentVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHubContentVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHubContentVersionsResponse(data, context);
  const response: ListHubContentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHubContentVersionsCommandError
 */
const de_ListHubContentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubContentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListHubsCommand
 */
export const de_ListHubsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHubsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHubsResponse(data, context);
  const response: ListHubsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHubsCommandError
 */
const de_ListHubsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHubsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListHumanTaskUisCommand
 */
export const de_ListHumanTaskUisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanTaskUisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHumanTaskUisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHumanTaskUisResponse(data, context);
  const response: ListHumanTaskUisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHumanTaskUisCommandError
 */
const de_ListHumanTaskUisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHumanTaskUisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListHyperParameterTuningJobsCommand
 */
export const de_ListHyperParameterTuningJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHyperParameterTuningJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListHyperParameterTuningJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListHyperParameterTuningJobsResponse(data, context);
  const response: ListHyperParameterTuningJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListHyperParameterTuningJobsCommandError
 */
const de_ListHyperParameterTuningJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListHyperParameterTuningJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListImagesCommand
 */
export const de_ListImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListImagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImagesResponse(data, context);
  const response: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListImagesCommandError
 */
const de_ListImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListImageVersionsCommand
 */
export const de_ListImageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListImageVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListImageVersionsResponse(data, context);
  const response: ListImageVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListImageVersionsCommandError
 */
const de_ListImageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListInferenceExperimentsCommand
 */
export const de_ListInferenceExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceExperimentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInferenceExperimentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceExperimentsResponse(data, context);
  const response: ListInferenceExperimentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInferenceExperimentsCommandError
 */
const de_ListInferenceExperimentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceExperimentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobsCommand
 */
export const de_ListInferenceRecommendationsJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceRecommendationsJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInferenceRecommendationsJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceRecommendationsJobsResponse(data, context);
  const response: ListInferenceRecommendationsJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobsCommandError
 */
const de_ListInferenceRecommendationsJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceRecommendationsJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobStepsCommand
 */
export const de_ListInferenceRecommendationsJobStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceRecommendationsJobStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInferenceRecommendationsJobStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInferenceRecommendationsJobStepsResponse(data, context);
  const response: ListInferenceRecommendationsJobStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobStepsCommandError
 */
const de_ListInferenceRecommendationsJobStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInferenceRecommendationsJobStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListLabelingJobsCommand
 */
export const de_ListLabelingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelingJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLabelingJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLabelingJobsResponse(data, context);
  const response: ListLabelingJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLabelingJobsCommandError
 */
const de_ListLabelingJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelingJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListLabelingJobsForWorkteamCommand
 */
export const de_ListLabelingJobsForWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelingJobsForWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLabelingJobsForWorkteamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLabelingJobsForWorkteamResponse(data, context);
  const response: ListLabelingJobsForWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLabelingJobsForWorkteamCommandError
 */
const de_ListLabelingJobsForWorkteamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLabelingJobsForWorkteamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListLineageGroupsCommand
 */
export const de_ListLineageGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLineageGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListLineageGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLineageGroupsResponse(data, context);
  const response: ListLineageGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLineageGroupsCommandError
 */
const de_ListLineageGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLineageGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelBiasJobDefinitionsCommand
 */
export const de_ListModelBiasJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelBiasJobDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelBiasJobDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelBiasJobDefinitionsResponse(data, context);
  const response: ListModelBiasJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelBiasJobDefinitionsCommandError
 */
const de_ListModelBiasJobDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelBiasJobDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelCardExportJobsCommand
 */
export const de_ListModelCardExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelCardExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelCardExportJobsResponse(data, context);
  const response: ListModelCardExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelCardExportJobsCommandError
 */
const de_ListModelCardExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelCardsCommand
 */
export const de_ListModelCardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelCardsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelCardsResponse(data, context);
  const response: ListModelCardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelCardsCommandError
 */
const de_ListModelCardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelCardVersionsCommand
 */
export const de_ListModelCardVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelCardVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelCardVersionsResponse(data, context);
  const response: ListModelCardVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelCardVersionsCommandError
 */
const de_ListModelCardVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelCardVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListModelExplainabilityJobDefinitionsCommand
 */
export const de_ListModelExplainabilityJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelExplainabilityJobDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelExplainabilityJobDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelExplainabilityJobDefinitionsResponse(data, context);
  const response: ListModelExplainabilityJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelExplainabilityJobDefinitionsCommandError
 */
const de_ListModelExplainabilityJobDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelExplainabilityJobDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelMetadataCommand
 */
export const de_ListModelMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelMetadataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListModelMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelMetadataCommandError
 */
const de_ListModelMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelPackageGroupsCommand
 */
export const de_ListModelPackageGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackageGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelPackageGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelPackageGroupsOutput(data, context);
  const response: ListModelPackageGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelPackageGroupsCommandError
 */
const de_ListModelPackageGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackageGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelPackagesCommand
 */
export const de_ListModelPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackagesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelPackagesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelPackagesOutput(data, context);
  const response: ListModelPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelPackagesCommandError
 */
const de_ListModelPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelQualityJobDefinitionsCommand
 */
export const de_ListModelQualityJobDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelQualityJobDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelQualityJobDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelQualityJobDefinitionsResponse(data, context);
  const response: ListModelQualityJobDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelQualityJobDefinitionsCommandError
 */
const de_ListModelQualityJobDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelQualityJobDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListModelsCommand
 */
export const de_ListModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListModelsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListModelsOutput(data, context);
  const response: ListModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListModelsCommandError
 */
const de_ListModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListMonitoringAlertHistoryCommand
 */
export const de_ListMonitoringAlertHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringAlertHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMonitoringAlertHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitoringAlertHistoryResponse(data, context);
  const response: ListMonitoringAlertHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMonitoringAlertHistoryCommandError
 */
const de_ListMonitoringAlertHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringAlertHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMonitoringAlertsCommand
 */
export const de_ListMonitoringAlertsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringAlertsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMonitoringAlertsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitoringAlertsResponse(data, context);
  const response: ListMonitoringAlertsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMonitoringAlertsCommandError
 */
const de_ListMonitoringAlertsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringAlertsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMonitoringExecutionsCommand
 */
export const de_ListMonitoringExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMonitoringExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitoringExecutionsResponse(data, context);
  const response: ListMonitoringExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMonitoringExecutionsCommandError
 */
const de_ListMonitoringExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListMonitoringSchedulesCommand
 */
export const de_ListMonitoringSchedulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringSchedulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMonitoringSchedulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitoringSchedulesResponse(data, context);
  const response: ListMonitoringSchedulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMonitoringSchedulesCommandError
 */
const de_ListMonitoringSchedulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitoringSchedulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommand
 */
export const de_ListNotebookInstanceLifecycleConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNotebookInstanceLifecycleConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNotebookInstanceLifecycleConfigsOutput(data, context);
  const response: ListNotebookInstanceLifecycleConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsCommandError
 */
const de_ListNotebookInstanceLifecycleConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListNotebookInstancesCommand
 */
export const de_ListNotebookInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNotebookInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNotebookInstancesOutput(data, context);
  const response: ListNotebookInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListNotebookInstancesCommandError
 */
const de_ListNotebookInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNotebookInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListPipelineExecutionsCommand
 */
export const de_ListPipelineExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPipelineExecutionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelineExecutionsResponse(data, context);
  const response: ListPipelineExecutionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionsCommandError
 */
const de_ListPipelineExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPipelineExecutionStepsCommand
 */
export const de_ListPipelineExecutionStepsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionStepsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPipelineExecutionStepsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelineExecutionStepsResponse(data, context);
  const response: ListPipelineExecutionStepsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionStepsCommandError
 */
const de_ListPipelineExecutionStepsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineExecutionStepsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPipelineParametersForExecutionCommand
 */
export const de_ListPipelineParametersForExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineParametersForExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPipelineParametersForExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListPipelineParametersForExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPipelineParametersForExecutionCommandError
 */
const de_ListPipelineParametersForExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelineParametersForExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPipelinesCommand
 */
export const de_ListPipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPipelinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPipelinesResponse(data, context);
  const response: ListPipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListPipelinesCommandError
 */
const de_ListPipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListProcessingJobsCommand
 */
export const de_ListProcessingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProcessingJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProcessingJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProcessingJobsResponse(data, context);
  const response: ListProcessingJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProcessingJobsCommandError
 */
const de_ListProcessingJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProcessingJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProjectsOutput(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProjectsCommandError
 */
const de_ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListSpacesCommand
 */
export const de_ListSpacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSpacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSpacesResponse(data, context);
  const response: ListSpacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSpacesCommandError
 */
const de_ListSpacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSpacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListStageDevicesCommand
 */
export const de_ListStageDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStageDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStageDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStageDevicesResponse(data, context);
  const response: ListStageDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListStageDevicesCommandError
 */
const de_ListStageDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStageDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListStudioLifecycleConfigsCommand
 */
export const de_ListStudioLifecycleConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioLifecycleConfigsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListStudioLifecycleConfigsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListStudioLifecycleConfigsResponse(data, context);
  const response: ListStudioLifecycleConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListStudioLifecycleConfigsCommandError
 */
const de_ListStudioLifecycleConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStudioLifecycleConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListSubscribedWorkteamsCommand
 */
export const de_ListSubscribedWorkteamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribedWorkteamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSubscribedWorkteamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSubscribedWorkteamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSubscribedWorkteamsCommandError
 */
const de_ListSubscribedWorkteamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSubscribedWorkteamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListTrainingJobsCommand
 */
export const de_ListTrainingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainingJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTrainingJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrainingJobsResponse(data, context);
  const response: ListTrainingJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTrainingJobsCommandError
 */
const de_ListTrainingJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainingJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommand
 */
export const de_ListTrainingJobsForHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTrainingJobsForHyperParameterTuningJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrainingJobsForHyperParameterTuningJobResponse(data, context);
  const response: ListTrainingJobsForHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobCommandError
 */
const de_ListTrainingJobsForHyperParameterTuningJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTransformJobsCommand
 */
export const de_ListTransformJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransformJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTransformJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTransformJobsResponse(data, context);
  const response: ListTransformJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTransformJobsCommandError
 */
const de_ListTransformJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransformJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListTrialComponentsCommand
 */
export const de_ListTrialComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrialComponentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTrialComponentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrialComponentsResponse(data, context);
  const response: ListTrialComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTrialComponentsCommandError
 */
const de_ListTrialComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrialComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTrialsCommand
 */
export const de_ListTrialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrialsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTrialsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTrialsResponse(data, context);
  const response: ListTrialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTrialsCommandError
 */
const de_ListTrialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTrialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListUserProfilesCommand
 */
export const de_ListUserProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUserProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUserProfilesResponse(data, context);
  const response: ListUserProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUserProfilesCommandError
 */
const de_ListUserProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUserProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListWorkforcesCommand
 */
export const de_ListWorkforcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkforcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkforcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkforcesResponse(data, context);
  const response: ListWorkforcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWorkforcesCommandError
 */
const de_ListWorkforcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkforcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1ListWorkteamsCommand
 */
export const de_ListWorkteamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkteamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWorkteamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWorkteamsResponse(data, context);
  const response: ListWorkteamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListWorkteamsCommandError
 */
const de_ListWorkteamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkteamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1PutModelPackageGroupPolicyCommand
 */
export const de_PutModelPackageGroupPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelPackageGroupPolicyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutModelPackageGroupPolicyCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutModelPackageGroupPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PutModelPackageGroupPolicyCommandError
 */
const de_PutModelPackageGroupPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutModelPackageGroupPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1QueryLineageCommand
 */
export const de_QueryLineageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryLineageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_QueryLineageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: QueryLineageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1QueryLineageCommandError
 */
const de_QueryLineageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<QueryLineageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterDevicesCommand
 */
export const de_RegisterDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterDevicesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: RegisterDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1RegisterDevicesCommandError
 */
const de_RegisterDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RenderUiTemplateCommand
 */
export const de_RenderUiTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenderUiTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RenderUiTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RenderUiTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RenderUiTemplateCommandError
 */
const de_RenderUiTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenderUiTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RetryPipelineExecutionCommand
 */
export const de_RetryPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RetryPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: RetryPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RetryPipelineExecutionCommandError
 */
const de_RetryPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RetryPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SearchCommand
 */
export const de_SearchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SearchCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_SearchResponse(data, context);
  const response: SearchCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SearchCommandError
 */
const de_SearchCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<SearchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1SendPipelineExecutionStepFailureCommand
 */
export const de_SendPipelineExecutionStepFailureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendPipelineExecutionStepFailureCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendPipelineExecutionStepFailureCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendPipelineExecutionStepFailureCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendPipelineExecutionStepFailureCommandError
 */
const de_SendPipelineExecutionStepFailureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendPipelineExecutionStepFailureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1SendPipelineExecutionStepSuccessCommand
 */
export const de_SendPipelineExecutionStepSuccessCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendPipelineExecutionStepSuccessCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SendPipelineExecutionStepSuccessCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: SendPipelineExecutionStepSuccessCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1SendPipelineExecutionStepSuccessCommandError
 */
const de_SendPipelineExecutionStepSuccessCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SendPipelineExecutionStepSuccessCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartEdgeDeploymentStageCommand
 */
export const de_StartEdgeDeploymentStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEdgeDeploymentStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartEdgeDeploymentStageCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartEdgeDeploymentStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartEdgeDeploymentStageCommandError
 */
const de_StartEdgeDeploymentStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartEdgeDeploymentStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1StartInferenceExperimentCommand
 */
export const de_StartInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartInferenceExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartInferenceExperimentCommandError
 */
const de_StartInferenceExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartInferenceExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartMonitoringScheduleCommand
 */
export const de_StartMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMonitoringScheduleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMonitoringScheduleCommandError
 */
const de_StartMonitoringScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMonitoringScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartNotebookInstanceCommand
 */
export const de_StartNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartNotebookInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StartNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StartNotebookInstanceCommandError
 */
const de_StartNotebookInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNotebookInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StartPipelineExecutionCommand
 */
export const de_StartPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartPipelineExecutionCommandError
 */
const de_StartPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopAutoMLJobCommand
 */
export const de_StopAutoMLJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAutoMLJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopAutoMLJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopAutoMLJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopAutoMLJobCommandError
 */
const de_StopAutoMLJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAutoMLJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopCompilationJobCommand
 */
export const de_StopCompilationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCompilationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopCompilationJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopCompilationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopCompilationJobCommandError
 */
const de_StopCompilationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopCompilationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopEdgeDeploymentStageCommand
 */
export const de_StopEdgeDeploymentStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEdgeDeploymentStageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopEdgeDeploymentStageCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopEdgeDeploymentStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopEdgeDeploymentStageCommandError
 */
const de_StopEdgeDeploymentStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEdgeDeploymentStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1StopEdgePackagingJobCommand
 */
export const de_StopEdgePackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEdgePackagingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopEdgePackagingJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopEdgePackagingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopEdgePackagingJobCommandError
 */
const de_StopEdgePackagingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopEdgePackagingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1StopHyperParameterTuningJobCommand
 */
export const de_StopHyperParameterTuningJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHyperParameterTuningJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopHyperParameterTuningJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopHyperParameterTuningJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopHyperParameterTuningJobCommandError
 */
const de_StopHyperParameterTuningJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopHyperParameterTuningJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopInferenceExperimentCommand
 */
export const de_StopInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopInferenceExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopInferenceExperimentCommandError
 */
const de_StopInferenceExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopInferenceRecommendationsJobCommand
 */
export const de_StopInferenceRecommendationsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceRecommendationsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopInferenceRecommendationsJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopInferenceRecommendationsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopInferenceRecommendationsJobCommandError
 */
const de_StopInferenceRecommendationsJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopInferenceRecommendationsJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopLabelingJobCommand
 */
export const de_StopLabelingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLabelingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopLabelingJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopLabelingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopLabelingJobCommandError
 */
const de_StopLabelingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLabelingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopMonitoringScheduleCommand
 */
export const de_StopMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopMonitoringScheduleCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopMonitoringScheduleCommandError
 */
const de_StopMonitoringScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMonitoringScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopNotebookInstanceCommand
 */
export const de_StopNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopNotebookInstanceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopNotebookInstanceCommandError
 */
const de_StopNotebookInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopNotebookInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1StopPipelineExecutionCommand
 */
export const de_StopPipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopPipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopPipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopPipelineExecutionCommandError
 */
const de_StopPipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopPipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopProcessingJobCommand
 */
export const de_StopProcessingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProcessingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopProcessingJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopProcessingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopProcessingJobCommandError
 */
const de_StopProcessingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopProcessingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopTrainingJobCommand
 */
export const de_StopTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopTrainingJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopTrainingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTrainingJobCommandError
 */
const de_StopTrainingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTrainingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopTransformJobCommand
 */
export const de_StopTransformJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTransformJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopTransformJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopTransformJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1StopTransformJobCommandError
 */
const de_StopTransformJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopTransformJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateActionCommand
 */
export const de_UpdateActionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateActionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateActionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateActionCommandError
 */
const de_UpdateActionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateAppImageConfigCommand
 */
export const de_UpdateAppImageConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppImageConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAppImageConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAppImageConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateAppImageConfigCommandError
 */
const de_UpdateAppImageConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppImageConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateArtifactCommand
 */
export const de_UpdateArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArtifactCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateArtifactCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateArtifactCommandError
 */
const de_UpdateArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateCodeRepositoryCommand
 */
export const de_UpdateCodeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCodeRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateCodeRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateCodeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateCodeRepositoryCommandError
 */
const de_UpdateCodeRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCodeRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1UpdateContextCommand
 */
export const de_UpdateContextCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContextCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateContextCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateContextCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateContextCommandError
 */
const de_UpdateContextCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateContextCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDeviceFleetCommand
 */
export const de_UpdateDeviceFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceFleetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDeviceFleetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDeviceFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDeviceFleetCommandError
 */
const de_UpdateDeviceFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDevicesCommand
 */
export const de_UpdateDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDevicesCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDevicesCommandError
 */
const de_UpdateDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1UpdateDomainCommand
 */
export const de_UpdateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDomainCommandError
 */
const de_UpdateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateEndpointCommand
 */
export const de_UpdateEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEndpointCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEndpointCommandError
 */
const de_UpdateEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommand
 */
export const de_UpdateEndpointWeightsAndCapacitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEndpointWeightsAndCapacitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateEndpointWeightsAndCapacitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateEndpointWeightsAndCapacitiesCommandError
 */
const de_UpdateEndpointWeightsAndCapacitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateExperimentCommand
 */
export const de_UpdateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateExperimentCommandError
 */
const de_UpdateExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateFeatureGroupCommand
 */
export const de_UpdateFeatureGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFeatureGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateFeatureGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFeatureGroupCommandError
 */
const de_UpdateFeatureGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateFeatureMetadataCommand
 */
export const de_UpdateFeatureMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureMetadataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFeatureMetadataCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateFeatureMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFeatureMetadataCommandError
 */
const de_UpdateFeatureMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateHubCommand
 */
export const de_UpdateHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHubCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateHubCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateHubCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateHubCommandError
 */
const de_UpdateHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateImageCommand
 */
export const de_UpdateImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateImageCommandError
 */
const de_UpdateImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateImageVersionCommand
 */
export const de_UpdateImageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateImageVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateImageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateImageVersionCommandError
 */
const de_UpdateImageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateInferenceExperimentCommand
 */
export const de_UpdateInferenceExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceExperimentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInferenceExperimentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateInferenceExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInferenceExperimentCommandError
 */
const de_UpdateInferenceExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInferenceExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateModelCardCommand
 */
export const de_UpdateModelCardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelCardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateModelCardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateModelCardCommandError
 */
const de_UpdateModelCardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelCardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateModelPackageCommand
 */
export const de_UpdateModelPackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelPackageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateModelPackageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateModelPackageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateModelPackageCommandError
 */
const de_UpdateModelPackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateModelPackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1UpdateMonitoringAlertCommand
 */
export const de_UpdateMonitoringAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringAlertCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMonitoringAlertCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateMonitoringAlertCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMonitoringAlertCommandError
 */
const de_UpdateMonitoringAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateMonitoringScheduleCommand
 */
export const de_UpdateMonitoringScheduleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringScheduleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateMonitoringScheduleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateMonitoringScheduleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMonitoringScheduleCommandError
 */
const de_UpdateMonitoringScheduleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringScheduleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateNotebookInstanceCommand
 */
export const de_UpdateNotebookInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNotebookInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateNotebookInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateNotebookInstanceCommandError
 */
const de_UpdateNotebookInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommand
 */
export const de_UpdateNotebookInstanceLifecycleConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNotebookInstanceLifecycleConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateNotebookInstanceLifecycleConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateNotebookInstanceLifecycleConfigCommandError
 */
const de_UpdateNotebookInstanceLifecycleConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePipelineCommand
 */
export const de_UpdatePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdatePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePipelineCommandError
 */
const de_UpdatePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePipelineExecutionCommand
 */
export const de_UpdatePipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineExecutionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePipelineExecutionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdatePipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdatePipelineExecutionCommandError
 */
const de_UpdatePipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProjectCommandError
 */
const de_UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody,
    errorCode,
  });
};

/**
 * deserializeAws_json1_1UpdateSpaceCommand
 */
export const de_UpdateSpaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSpaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSpaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateSpaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSpaceCommandError
 */
const de_UpdateSpaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSpaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTrainingJobCommand
 */
export const de_UpdateTrainingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrainingJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTrainingJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTrainingJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTrainingJobCommandError
 */
const de_UpdateTrainingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrainingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTrialCommand
 */
export const de_UpdateTrialCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrialCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTrialCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTrialCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTrialCommandError
 */
const de_UpdateTrialCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrialCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateTrialComponentCommand
 */
export const de_UpdateTrialComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrialComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTrialComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTrialComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTrialComponentCommandError
 */
const de_UpdateTrialComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTrialComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateUserProfileCommand
 */
export const de_UpdateUserProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUserProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateUserProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUserProfileCommandError
 */
const de_UpdateUserProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceInUse":
    case "com.amazonaws.sagemaker#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.sagemaker#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateWorkforceCommand
 */
export const de_UpdateWorkforceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkforceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWorkforceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkforceResponse(data, context);
  const response: UpdateWorkforceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkforceCommandError
 */
const de_UpdateWorkforceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkforceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.sagemaker#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateWorkteamCommand
 */
export const de_UpdateWorkteamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkteamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateWorkteamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateWorkteamResponse(data, context);
  const response: UpdateWorkteamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateWorkteamCommandError
 */
const de_UpdateWorkteamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorkteamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceLimitExceeded":
    case "com.amazonaws.sagemaker#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseRes
 */
const de_ResourceInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceLimitExceededRes
 */
const de_ResourceLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundRes
 */
const de_ResourceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_ActionSource omitted.

// se_AddAssociationRequest omitted.

// se_AdditionalCodeRepositoryNamesOrUrls omitted.

// se_AdditionalInferenceSpecificationDefinition omitted.

// se_AdditionalInferenceSpecifications omitted.

// se_AddTagsInput omitted.

// se_AggregationTransformations omitted.

// se_Alarm omitted.

// se_AlarmList omitted.

// se_AlgorithmSpecification omitted.

// se_AlgorithmValidationProfile omitted.

// se_AlgorithmValidationProfiles omitted.

// se_AlgorithmValidationSpecification omitted.

// se_AnnotationConsolidationConfig omitted.

// se_AppSpecification omitted.

// se_ArtifactSource omitted.

// se_ArtifactSourceType omitted.

// se_ArtifactSourceTypes omitted.

// se_AssociateTrialComponentRequest omitted.

// se_AsyncInferenceClientConfig omitted.

// se_AsyncInferenceConfig omitted.

// se_AsyncInferenceNotificationConfig omitted.

// se_AsyncInferenceOutputConfig omitted.

// se_AsyncNotificationTopicTypeList omitted.

// se_AthenaDatasetDefinition omitted.

// se_AttributeNames omitted.

// se_AutoMLAlgorithmConfig omitted.

// se_AutoMLAlgorithms omitted.

// se_AutoMLAlgorithmsConfig omitted.

// se_AutoMLCandidateGenerationConfig omitted.

// se_AutoMLChannel omitted.

// se_AutoMLDataSource omitted.

/**
 * serializeAws_json1_1AutoMLDataSplitConfig
 */
const se_AutoMLDataSplitConfig = (input: AutoMLDataSplitConfig, context: __SerdeContext): any => {
  return take(input, {
    ValidationFraction: __serializeFloat,
  });
};

// se_AutoMLInputDataConfig omitted.

// se_AutoMLJobChannel omitted.

// se_AutoMLJobCompletionCriteria omitted.

/**
 * serializeAws_json1_1AutoMLJobConfig
 */
const se_AutoMLJobConfig = (input: AutoMLJobConfig, context: __SerdeContext): any => {
  return take(input, {
    CandidateGenerationConfig: _json,
    CompletionCriteria: _json,
    DataSplitConfig: (_) => se_AutoMLDataSplitConfig(_, context),
    Mode: [],
    SecurityConfig: _json,
  });
};

// se_AutoMLJobInputDataConfig omitted.

// se_AutoMLJobObjective omitted.

// se_AutoMLOutputDataConfig omitted.

// se_AutoMLProblemTypeConfig omitted.

// se_AutoMLS3DataSource omitted.

// se_AutoMLSecurityConfig omitted.

// se_AutoParameter omitted.

// se_AutoParameters omitted.

// se_AutoRollbackConfig omitted.

// se_Autotune omitted.

// se_BatchDataCaptureConfig omitted.

// se_BatchDescribeModelPackageInput omitted.

/**
 * serializeAws_json1_1BatchTransformInput
 */
const se_BatchTransformInput = (input: BatchTransformInput, context: __SerdeContext): any => {
  return take(input, {
    DataCapturedDestinationS3Uri: [],
    DatasetFormat: _json,
    EndTimeOffset: [],
    FeaturesAttribute: [],
    InferenceAttribute: [],
    LocalPath: [],
    ProbabilityAttribute: [],
    ProbabilityThresholdAttribute: __serializeFloat,
    S3DataDistributionType: [],
    S3InputMode: [],
    StartTimeOffset: [],
  });
};

// se_BestObjectiveNotImproving omitted.

// se_Bias omitted.

// se_BlueGreenUpdatePolicy omitted.

// se_CandidateGenerationConfig omitted.

// se_CanvasAppSettings omitted.

// se_CapacitySize omitted.

// se_CaptureContentTypeHeader omitted.

// se_CaptureOption omitted.

// se_CaptureOptionList omitted.

// se_CategoricalParameter omitted.

// se_CategoricalParameterRange omitted.

// se_CategoricalParameterRanges omitted.

// se_CategoricalParameterRangeSpecification omitted.

// se_CategoricalParameterRangeValues omitted.

// se_CategoricalParameters omitted.

// se_Channel omitted.

// se_ChannelSpecification omitted.

// se_ChannelSpecifications omitted.

// se_CheckpointConfig omitted.

// se_Cidrs omitted.

// se_ClarifyExplainerConfig omitted.

// se_ClarifyFeatureHeaders omitted.

// se_ClarifyFeatureTypes omitted.

// se_ClarifyInferenceConfig omitted.

// se_ClarifyLabelHeaders omitted.

// se_ClarifyShapBaselineConfig omitted.

// se_ClarifyShapConfig omitted.

// se_ClarifyTextConfig omitted.

// se_CodeRepositories omitted.

// se_CodeRepository omitted.

// se_CognitoConfig omitted.

// se_CognitoMemberDefinition omitted.

// se_CollectionConfiguration omitted.

// se_CollectionConfigurations omitted.

// se_CollectionParameters omitted.

// se_CompressionTypes omitted.

// se_ContainerArguments omitted.

// se_ContainerDefinition omitted.

// se_ContainerDefinitionList omitted.

// se_ContainerEntrypoint omitted.

// se_ContentClassifiers omitted.

// se_ContentTypes omitted.

// se_ContextSource omitted.

// se_ContinuousParameterRange omitted.

// se_ContinuousParameterRanges omitted.

// se_ContinuousParameterRangeSpecification omitted.

// se_ConvergenceDetected omitted.

// se_CreateActionRequest omitted.

// se_CreateAlgorithmInput omitted.

// se_CreateAppImageConfigRequest omitted.

// se_CreateAppRequest omitted.

// se_CreateArtifactRequest omitted.

/**
 * serializeAws_json1_1CreateAutoMLJobRequest
 */
const se_CreateAutoMLJobRequest = (input: CreateAutoMLJobRequest, context: __SerdeContext): any => {
  return take(input, {
    AutoMLJobConfig: (_) => se_AutoMLJobConfig(_, context),
    AutoMLJobName: [],
    AutoMLJobObjective: _json,
    GenerateCandidateDefinitionsOnly: [],
    InputDataConfig: _json,
    ModelDeployConfig: _json,
    OutputDataConfig: _json,
    ProblemType: [],
    RoleArn: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateAutoMLJobV2Request
 */
const se_CreateAutoMLJobV2Request = (input: CreateAutoMLJobV2Request, context: __SerdeContext): any => {
  return take(input, {
    AutoMLJobInputDataConfig: _json,
    AutoMLJobName: [],
    AutoMLJobObjective: _json,
    AutoMLProblemTypeConfig: _json,
    DataSplitConfig: (_) => se_AutoMLDataSplitConfig(_, context),
    ModelDeployConfig: _json,
    OutputDataConfig: _json,
    RoleArn: [],
    SecurityConfig: _json,
    Tags: _json,
  });
};

// se_CreateCodeRepositoryInput omitted.

// se_CreateCompilationJobRequest omitted.

// se_CreateContextRequest omitted.

/**
 * serializeAws_json1_1CreateDataQualityJobDefinitionRequest
 */
const se_CreateDataQualityJobDefinitionRequest = (
  input: CreateDataQualityJobDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    DataQualityAppSpecification: _json,
    DataQualityBaselineConfig: _json,
    DataQualityJobInput: (_) => se_DataQualityJobInput(_, context),
    DataQualityJobOutputConfig: _json,
    JobDefinitionName: [],
    JobResources: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
    Tags: _json,
  });
};

// se_CreateDeviceFleetRequest omitted.

// se_CreateDomainRequest omitted.

// se_CreateEdgeDeploymentPlanRequest omitted.

// se_CreateEdgeDeploymentStageRequest omitted.

// se_CreateEdgePackagingJobRequest omitted.

/**
 * serializeAws_json1_1CreateEndpointConfigInput
 */
const se_CreateEndpointConfigInput = (input: CreateEndpointConfigInput, context: __SerdeContext): any => {
  return take(input, {
    AsyncInferenceConfig: _json,
    DataCaptureConfig: _json,
    EndpointConfigName: [],
    ExplainerConfig: _json,
    KmsKeyId: [],
    ProductionVariants: (_) => se_ProductionVariantList(_, context),
    ShadowProductionVariants: (_) => se_ProductionVariantList(_, context),
    Tags: _json,
  });
};

// se_CreateEndpointInput omitted.

// se_CreateExperimentRequest omitted.

// se_CreateFeatureGroupRequest omitted.

/**
 * serializeAws_json1_1CreateFlowDefinitionRequest
 */
const se_CreateFlowDefinitionRequest = (input: CreateFlowDefinitionRequest, context: __SerdeContext): any => {
  return take(input, {
    FlowDefinitionName: [],
    HumanLoopActivationConfig: (_) => se_HumanLoopActivationConfig(_, context),
    HumanLoopConfig: _json,
    HumanLoopRequestSource: _json,
    OutputConfig: _json,
    RoleArn: [],
    Tags: _json,
  });
};

// se_CreateHubRequest omitted.

// se_CreateHumanTaskUiRequest omitted.

/**
 * serializeAws_json1_1CreateHyperParameterTuningJobRequest
 */
const se_CreateHyperParameterTuningJobRequest = (
  input: CreateHyperParameterTuningJobRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Autotune: _json,
    HyperParameterTuningJobConfig: (_) => se_HyperParameterTuningJobConfig(_, context),
    HyperParameterTuningJobName: [],
    Tags: _json,
    TrainingJobDefinition: _json,
    TrainingJobDefinitions: _json,
    WarmStartConfig: _json,
  });
};

// se_CreateImageRequest omitted.

/**
 * serializeAws_json1_1CreateImageVersionRequest
 */
const se_CreateImageVersionRequest = (input: CreateImageVersionRequest, context: __SerdeContext): any => {
  return take(input, {
    Aliases: _json,
    BaseImage: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Horovod: [],
    ImageName: [],
    JobType: [],
    MLFramework: [],
    Processor: [],
    ProgrammingLang: [],
    ReleaseNotes: [],
    VendorGuidance: [],
  });
};

/**
 * serializeAws_json1_1CreateInferenceExperimentRequest
 */
const se_CreateInferenceExperimentRequest = (input: CreateInferenceExperimentRequest, context: __SerdeContext): any => {
  return take(input, {
    DataStorageConfig: _json,
    Description: [],
    EndpointName: [],
    KmsKey: [],
    ModelVariants: _json,
    Name: [],
    RoleArn: [],
    Schedule: (_) => se_InferenceExperimentSchedule(_, context),
    ShadowModeConfig: _json,
    Tags: _json,
    Type: [],
  });
};

// se_CreateInferenceRecommendationsJobRequest omitted.

// se_CreateLabelingJobRequest omitted.

/**
 * serializeAws_json1_1CreateModelBiasJobDefinitionRequest
 */
const se_CreateModelBiasJobDefinitionRequest = (
  input: CreateModelBiasJobDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    JobDefinitionName: [],
    JobResources: _json,
    ModelBiasAppSpecification: _json,
    ModelBiasBaselineConfig: _json,
    ModelBiasJobInput: (_) => se_ModelBiasJobInput(_, context),
    ModelBiasJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
    Tags: _json,
  });
};

// se_CreateModelCardExportJobRequest omitted.

// se_CreateModelCardRequest omitted.

/**
 * serializeAws_json1_1CreateModelExplainabilityJobDefinitionRequest
 */
const se_CreateModelExplainabilityJobDefinitionRequest = (
  input: CreateModelExplainabilityJobDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    JobDefinitionName: [],
    JobResources: _json,
    ModelExplainabilityAppSpecification: _json,
    ModelExplainabilityBaselineConfig: _json,
    ModelExplainabilityJobInput: (_) => se_ModelExplainabilityJobInput(_, context),
    ModelExplainabilityJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
    Tags: _json,
  });
};

// se_CreateModelInput omitted.

// se_CreateModelPackageGroupInput omitted.

/**
 * serializeAws_json1_1CreateModelPackageInput
 */
const se_CreateModelPackageInput = (input: CreateModelPackageInput, context: __SerdeContext): any => {
  return take(input, {
    AdditionalInferenceSpecifications: _json,
    CertifyForMarketplace: [],
    ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CustomerMetadataProperties: _json,
    Domain: [],
    DriftCheckBaselines: _json,
    InferenceSpecification: _json,
    MetadataProperties: _json,
    ModelApprovalStatus: [],
    ModelMetrics: _json,
    ModelPackageDescription: [],
    ModelPackageGroupName: [],
    ModelPackageName: [],
    SamplePayloadUrl: [],
    SourceAlgorithmSpecification: _json,
    Tags: _json,
    Task: [],
    ValidationSpecification: _json,
  });
};

/**
 * serializeAws_json1_1CreateModelQualityJobDefinitionRequest
 */
const se_CreateModelQualityJobDefinitionRequest = (
  input: CreateModelQualityJobDefinitionRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    JobDefinitionName: [],
    JobResources: _json,
    ModelQualityAppSpecification: _json,
    ModelQualityBaselineConfig: _json,
    ModelQualityJobInput: (_) => se_ModelQualityJobInput(_, context),
    ModelQualityJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateMonitoringScheduleRequest
 */
const se_CreateMonitoringScheduleRequest = (input: CreateMonitoringScheduleRequest, context: __SerdeContext): any => {
  return take(input, {
    MonitoringScheduleConfig: (_) => se_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: [],
    Tags: _json,
  });
};

// se_CreateNotebookInstanceInput omitted.

// se_CreateNotebookInstanceLifecycleConfigInput omitted.

/**
 * serializeAws_json1_1CreatePipelineRequest
 */
const se_CreatePipelineRequest = (input: CreatePipelineRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ParallelismConfiguration: _json,
    PipelineDefinition: [],
    PipelineDefinitionS3Location: _json,
    PipelineDescription: [],
    PipelineDisplayName: [],
    PipelineName: [],
    RoleArn: [],
    Tags: _json,
  });
};

// se_CreatePresignedDomainUrlRequest omitted.

// se_CreatePresignedNotebookInstanceUrlInput omitted.

// se_CreateProcessingJobRequest omitted.

// se_CreateProjectInput omitted.

// se_CreateSpaceRequest omitted.

// se_CreateStudioLifecycleConfigRequest omitted.

// se_CreateTrainingJobRequest omitted.

// se_CreateTransformJobRequest omitted.

/**
 * serializeAws_json1_1CreateTrialComponentRequest
 */
const se_CreateTrialComponentRequest = (input: CreateTrialComponentRequest, context: __SerdeContext): any => {
  return take(input, {
    DisplayName: [],
    EndTime: (_) => Math.round(_.getTime() / 1000),
    InputArtifacts: _json,
    MetadataProperties: _json,
    OutputArtifacts: _json,
    Parameters: (_) => se_TrialComponentParameters(_, context),
    StartTime: (_) => Math.round(_.getTime() / 1000),
    Status: _json,
    Tags: _json,
    TrialComponentName: [],
  });
};

// se_CreateTrialRequest omitted.

// se_CreateUserProfileRequest omitted.

// se_CreateWorkforceRequest omitted.

// se_CreateWorkteamRequest omitted.

// se_CsvContentTypes omitted.

// se_CustomerMetadataKeyList omitted.

// se_CustomerMetadataMap omitted.

// se_CustomImage omitted.

// se_CustomImages omitted.

// se_DataCaptureConfig omitted.

// se_DataCatalogConfig omitted.

// se_DataProcessing omitted.

// se_DataQualityAppSpecification omitted.

// se_DataQualityBaselineConfig omitted.

/**
 * serializeAws_json1_1DataQualityJobInput
 */
const se_DataQualityJobInput = (input: DataQualityJobInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
  });
};

// se_DatasetDefinition omitted.

// se_DataSource omitted.

// se_DebugHookConfig omitted.

// se_DebugRuleConfiguration omitted.

// se_DebugRuleConfigurations omitted.

// se_DefaultSpaceSettings omitted.

// se_DeleteActionRequest omitted.

// se_DeleteAlgorithmInput omitted.

// se_DeleteAppImageConfigRequest omitted.

// se_DeleteAppRequest omitted.

// se_DeleteArtifactRequest omitted.

// se_DeleteAssociationRequest omitted.

// se_DeleteCodeRepositoryInput omitted.

// se_DeleteContextRequest omitted.

// se_DeleteDataQualityJobDefinitionRequest omitted.

// se_DeleteDeviceFleetRequest omitted.

// se_DeleteDomainRequest omitted.

// se_DeleteEdgeDeploymentPlanRequest omitted.

// se_DeleteEdgeDeploymentStageRequest omitted.

// se_DeleteEndpointConfigInput omitted.

// se_DeleteEndpointInput omitted.

// se_DeleteExperimentRequest omitted.

// se_DeleteFeatureGroupRequest omitted.

// se_DeleteFlowDefinitionRequest omitted.

// se_DeleteHubContentRequest omitted.

// se_DeleteHubRequest omitted.

// se_DeleteHumanTaskUiRequest omitted.

// se_DeleteImageRequest omitted.

// se_DeleteImageVersionRequest omitted.

// se_DeleteInferenceExperimentRequest omitted.

// se_DeleteModelBiasJobDefinitionRequest omitted.

// se_DeleteModelCardRequest omitted.

// se_DeleteModelExplainabilityJobDefinitionRequest omitted.

// se_DeleteModelInput omitted.

// se_DeleteModelPackageGroupInput omitted.

// se_DeleteModelPackageGroupPolicyInput omitted.

// se_DeleteModelPackageInput omitted.

// se_DeleteModelQualityJobDefinitionRequest omitted.

// se_DeleteMonitoringScheduleRequest omitted.

// se_DeleteNotebookInstanceInput omitted.

// se_DeleteNotebookInstanceLifecycleConfigInput omitted.

/**
 * serializeAws_json1_1DeletePipelineRequest
 */
const se_DeletePipelineRequest = (input: DeletePipelineRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    PipelineName: [],
  });
};

// se_DeleteProjectInput omitted.

// se_DeleteSpaceRequest omitted.

// se_DeleteStudioLifecycleConfigRequest omitted.

// se_DeleteTagsInput omitted.

// se_DeleteTrialComponentRequest omitted.

// se_DeleteTrialRequest omitted.

// se_DeleteUserProfileRequest omitted.

// se_DeleteWorkforceRequest omitted.

// se_DeleteWorkteamRequest omitted.

// se_DeploymentConfig omitted.

// se_DeploymentStage omitted.

// se_DeploymentStages omitted.

// se_DeregisterDevicesRequest omitted.

// se_DescribeActionRequest omitted.

// se_DescribeAlgorithmInput omitted.

// se_DescribeAppImageConfigRequest omitted.

// se_DescribeAppRequest omitted.

// se_DescribeArtifactRequest omitted.

// se_DescribeAutoMLJobRequest omitted.

// se_DescribeAutoMLJobV2Request omitted.

// se_DescribeCodeRepositoryInput omitted.

// se_DescribeCompilationJobRequest omitted.

// se_DescribeContextRequest omitted.

// se_DescribeDataQualityJobDefinitionRequest omitted.

// se_DescribeDeviceFleetRequest omitted.

// se_DescribeDeviceRequest omitted.

// se_DescribeDomainRequest omitted.

// se_DescribeEdgeDeploymentPlanRequest omitted.

// se_DescribeEdgePackagingJobRequest omitted.

// se_DescribeEndpointConfigInput omitted.

// se_DescribeEndpointInput omitted.

// se_DescribeExperimentRequest omitted.

// se_DescribeFeatureGroupRequest omitted.

// se_DescribeFeatureMetadataRequest omitted.

// se_DescribeFlowDefinitionRequest omitted.

// se_DescribeHubContentRequest omitted.

// se_DescribeHubRequest omitted.

// se_DescribeHumanTaskUiRequest omitted.

// se_DescribeHyperParameterTuningJobRequest omitted.

// se_DescribeImageRequest omitted.

// se_DescribeImageVersionRequest omitted.

// se_DescribeInferenceExperimentRequest omitted.

// se_DescribeInferenceRecommendationsJobRequest omitted.

// se_DescribeLabelingJobRequest omitted.

// se_DescribeLineageGroupRequest omitted.

// se_DescribeModelBiasJobDefinitionRequest omitted.

// se_DescribeModelCardExportJobRequest omitted.

// se_DescribeModelCardRequest omitted.

// se_DescribeModelExplainabilityJobDefinitionRequest omitted.

// se_DescribeModelInput omitted.

// se_DescribeModelPackageGroupInput omitted.

// se_DescribeModelPackageInput omitted.

// se_DescribeModelQualityJobDefinitionRequest omitted.

// se_DescribeMonitoringScheduleRequest omitted.

// se_DescribeNotebookInstanceInput omitted.

// se_DescribeNotebookInstanceLifecycleConfigInput omitted.

// se_DescribePipelineDefinitionForExecutionRequest omitted.

// se_DescribePipelineExecutionRequest omitted.

// se_DescribePipelineRequest omitted.

// se_DescribeProcessingJobRequest omitted.

// se_DescribeProjectInput omitted.

// se_DescribeSpaceRequest omitted.

// se_DescribeStudioLifecycleConfigRequest omitted.

// se_DescribeSubscribedWorkteamRequest omitted.

// se_DescribeTrainingJobRequest omitted.

// se_DescribeTransformJobRequest omitted.

// se_DescribeTrialComponentRequest omitted.

// se_DescribeTrialRequest omitted.

// se_DescribeUserProfileRequest omitted.

// se_DescribeWorkforceRequest omitted.

// se_DescribeWorkteamRequest omitted.

/**
 * serializeAws_json1_1DesiredWeightAndCapacity
 */
const se_DesiredWeightAndCapacity = (input: DesiredWeightAndCapacity, context: __SerdeContext): any => {
  return take(input, {
    DesiredInstanceCount: [],
    DesiredWeight: __serializeFloat,
    ServerlessUpdateConfig: _json,
    VariantName: [],
  });
};

/**
 * serializeAws_json1_1DesiredWeightAndCapacityList
 */
const se_DesiredWeightAndCapacityList = (input: DesiredWeightAndCapacity[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DesiredWeightAndCapacity(entry, context);
    });
};

// se_Device omitted.

// se_DeviceNames omitted.

// se_Devices omitted.

// se_DeviceSelectionConfig omitted.

// se_DisableSagemakerServicecatalogPortfolioInput omitted.

// se_DisassociateTrialComponentRequest omitted.

// se_DomainSecurityGroupIds omitted.

// se_DomainSettings omitted.

// se_DomainSettingsForUpdate omitted.

// se_DriftCheckBaselines omitted.

// se_DriftCheckBias omitted.

// se_DriftCheckExplainability omitted.

// se_DriftCheckModelDataQuality omitted.

// se_DriftCheckModelQuality omitted.

// se_EdgeDeploymentConfig omitted.

// se_EdgeDeploymentModelConfig omitted.

// se_EdgeDeploymentModelConfigs omitted.

// se_EdgeOutputConfig omitted.

// se_EnableSagemakerServicecatalogPortfolioInput omitted.

// se_EndpointInfo omitted.

/**
 * serializeAws_json1_1EndpointInput
 */
const se_EndpointInput = (input: EndpointInput, context: __SerdeContext): any => {
  return take(input, {
    EndTimeOffset: [],
    EndpointName: [],
    FeaturesAttribute: [],
    InferenceAttribute: [],
    LocalPath: [],
    ProbabilityAttribute: [],
    ProbabilityThresholdAttribute: __serializeFloat,
    S3DataDistributionType: [],
    S3InputMode: [],
    StartTimeOffset: [],
  });
};

// se_EndpointInputConfiguration omitted.

// se_EndpointInputConfigurations omitted.

// se_Endpoints omitted.

// se_EnvironmentMap omitted.

// se_EnvironmentParameterRanges omitted.

// se_ExperimentConfig omitted.

// se_Explainability omitted.

// se_ExplainerConfig omitted.

// se_FeatureAdditions omitted.

// se_FeatureDefinition omitted.

// se_FeatureDefinitions omitted.

// se_FeatureParameter omitted.

// se_FeatureParameterAdditions omitted.

// se_FeatureParameterRemovals omitted.

// se_FileSource omitted.

// se_FileSystemConfig omitted.

// se_FileSystemDataSource omitted.

// se_FillingTransformationMap omitted.

// se_FillingTransformations omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FlowDefinitionOutputConfig omitted.

// se_FlowDefinitionTaskKeywords omitted.

// se_ForecastQuantiles omitted.

// se_GetDeviceFleetReportRequest omitted.

// se_GetLineageGroupPolicyRequest omitted.

// se_GetModelPackageGroupPolicyInput omitted.

// se_GetSagemakerServicecatalogPortfolioStatusInput omitted.

// se_GetSearchSuggestionsRequest omitted.

// se_GitConfig omitted.

// se_GitConfigForUpdate omitted.

// se_GroupingAttributeNames omitted.

// se_Groups omitted.

// se_HookParameters omitted.

// se_HubContentSearchKeywordList omitted.

// se_HubS3StorageConfig omitted.

// se_HubSearchKeywordList omitted.

/**
 * serializeAws_json1_1HumanLoopActivationConditionsConfig
 */
const se_HumanLoopActivationConditionsConfig = (
  input: HumanLoopActivationConditionsConfig,
  context: __SerdeContext
): any => {
  return take(input, {
    HumanLoopActivationConditions: __LazyJsonString.fromObject,
  });
};

/**
 * serializeAws_json1_1HumanLoopActivationConfig
 */
const se_HumanLoopActivationConfig = (input: HumanLoopActivationConfig, context: __SerdeContext): any => {
  return take(input, {
    HumanLoopActivationConditionsConfig: (_) => se_HumanLoopActivationConditionsConfig(_, context),
  });
};

// se_HumanLoopConfig omitted.

// se_HumanLoopRequestSource omitted.

// se_HumanTaskConfig omitted.

// se_HyperbandStrategyConfig omitted.

// se_HyperParameterAlgorithmSpecification omitted.

// se_HyperParameters omitted.

// se_HyperParameterSpecification omitted.

// se_HyperParameterSpecifications omitted.

// se_HyperParameterTrainingJobDefinition omitted.

// se_HyperParameterTrainingJobDefinitions omitted.

// se_HyperParameterTrainingJobEnvironmentMap omitted.

// se_HyperParameterTuningInstanceConfig omitted.

// se_HyperParameterTuningInstanceConfigs omitted.

/**
 * serializeAws_json1_1HyperParameterTuningJobConfig
 */
const se_HyperParameterTuningJobConfig = (input: HyperParameterTuningJobConfig, context: __SerdeContext): any => {
  return take(input, {
    HyperParameterTuningJobObjective: _json,
    ParameterRanges: _json,
    RandomSeed: [],
    ResourceLimits: _json,
    Strategy: [],
    StrategyConfig: _json,
    TrainingJobEarlyStoppingType: [],
    TuningJobCompletionCriteria: (_) => se_TuningJobCompletionCriteria(_, context),
  });
};

// se_HyperParameterTuningJobObjective omitted.

// se_HyperParameterTuningJobObjectives omitted.

// se_HyperParameterTuningJobStrategyConfig omitted.

// se_HyperParameterTuningJobWarmStartConfig omitted.

// se_HyperParameterTuningResourceConfig omitted.

// se_ImageClassificationJobConfig omitted.

// se_ImageConfig omitted.

// se_ImageDeletePropertyList omitted.

// se_ImportHubContentRequest omitted.

// se_InferenceExecutionConfig omitted.

// se_InferenceExperimentDataStorageConfig omitted.

/**
 * serializeAws_json1_1InferenceExperimentSchedule
 */
const se_InferenceExperimentSchedule = (input: InferenceExperimentSchedule, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => Math.round(_.getTime() / 1000),
    StartTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_InferenceSpecification omitted.

// se_InputConfig omitted.

// se_InputDataConfig omitted.

// se_InputModes omitted.

// se_InstanceGroup omitted.

// se_InstanceGroupNames omitted.

// se_InstanceGroups omitted.

// se_InstanceMetadataServiceConfiguration omitted.

// se_IntegerParameterRange omitted.

// se_IntegerParameterRanges omitted.

// se_IntegerParameterRangeSpecification omitted.

// se_JsonContentTypes omitted.

// se_JupyterServerAppSettings omitted.

// se_KernelGatewayAppSettings omitted.

// se_KernelGatewayImageConfig omitted.

// se_KernelSpec omitted.

// se_KernelSpecs omitted.

// se_LabelingJobAlgorithmsConfig omitted.

// se_LabelingJobDataAttributes omitted.

// se_LabelingJobDataSource omitted.

// se_LabelingJobInputConfig omitted.

// se_LabelingJobOutputConfig omitted.

// se_LabelingJobResourceConfig omitted.

// se_LabelingJobS3DataSource omitted.

// se_LabelingJobSnsDataSource omitted.

// se_LabelingJobStoppingConditions omitted.

// se_LifecycleConfigArns omitted.

// se_LineageEntityParameters omitted.

/**
 * serializeAws_json1_1ListActionsRequest
 */
const se_ListActionsRequest = (input: ListActionsRequest, context: __SerdeContext): any => {
  return take(input, {
    ActionType: [],
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceUri: [],
  });
};

/**
 * serializeAws_json1_1ListAlgorithmsInput
 */
const se_ListAlgorithmsInput = (input: ListAlgorithmsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListAliasesRequest omitted.

/**
 * serializeAws_json1_1ListAppImageConfigsRequest
 */
const se_ListAppImageConfigsRequest = (input: ListAppImageConfigsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    ModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListAppsRequest omitted.

/**
 * serializeAws_json1_1ListArtifactsRequest
 */
const se_ListArtifactsRequest = (input: ListArtifactsRequest, context: __SerdeContext): any => {
  return take(input, {
    ArtifactType: [],
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceUri: [],
  });
};

/**
 * serializeAws_json1_1ListAssociationsRequest
 */
const se_ListAssociationsRequest = (input: ListAssociationsRequest, context: __SerdeContext): any => {
  return take(input, {
    AssociationType: [],
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    DestinationArn: [],
    DestinationType: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceArn: [],
    SourceType: [],
  });
};

/**
 * serializeAws_json1_1ListAutoMLJobsRequest
 */
const se_ListAutoMLJobsRequest = (input: ListAutoMLJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListCandidatesForAutoMLJobRequest omitted.

/**
 * serializeAws_json1_1ListCodeRepositoriesInput
 */
const se_ListCodeRepositoriesInput = (input: ListCodeRepositoriesInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListCompilationJobsRequest
 */
const se_ListCompilationJobsRequest = (input: ListCompilationJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListContextsRequest
 */
const se_ListContextsRequest = (input: ListContextsRequest, context: __SerdeContext): any => {
  return take(input, {
    ContextType: [],
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceUri: [],
  });
};

/**
 * serializeAws_json1_1ListDataQualityJobDefinitionsRequest
 */
const se_ListDataQualityJobDefinitionsRequest = (
  input: ListDataQualityJobDefinitionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    EndpointName: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListDeviceFleetsRequest
 */
const se_ListDeviceFleetsRequest = (input: ListDeviceFleetsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListDevicesRequest
 */
const se_ListDevicesRequest = (input: ListDevicesRequest, context: __SerdeContext): any => {
  return take(input, {
    DeviceFleetName: [],
    LatestHeartbeatAfter: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModelName: [],
    NextToken: [],
  });
};

// se_ListDomainsRequest omitted.

/**
 * serializeAws_json1_1ListEdgeDeploymentPlansRequest
 */
const se_ListEdgeDeploymentPlansRequest = (input: ListEdgeDeploymentPlansRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    DeviceFleetNameContains: [],
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListEdgePackagingJobsRequest
 */
const se_ListEdgePackagingJobsRequest = (input: ListEdgePackagingJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModelNameContains: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListEndpointConfigsInput
 */
const se_ListEndpointConfigsInput = (input: ListEndpointConfigsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListEndpointsInput
 */
const se_ListEndpointsInput = (input: ListEndpointsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListExperimentsRequest
 */
const se_ListExperimentsRequest = (input: ListExperimentsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListFeatureGroupsRequest
 */
const se_ListFeatureGroupsRequest = (input: ListFeatureGroupsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    FeatureGroupStatusEquals: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    OfflineStoreStatusEquals: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListFlowDefinitionsRequest
 */
const se_ListFlowDefinitionsRequest = (input: ListFlowDefinitionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHubContentsRequest
 */
const se_ListHubContentsRequest = (input: ListHubContentsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    HubContentType: [],
    HubName: [],
    MaxResults: [],
    MaxSchemaVersion: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHubContentVersionsRequest
 */
const se_ListHubContentVersionsRequest = (input: ListHubContentVersionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    HubContentName: [],
    HubContentType: [],
    HubName: [],
    MaxResults: [],
    MaxSchemaVersion: [],
    MinVersion: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHubsRequest
 */
const se_ListHubsRequest = (input: ListHubsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHumanTaskUisRequest
 */
const se_ListHumanTaskUisRequest = (input: ListHumanTaskUisRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListHyperParameterTuningJobsRequest
 */
const se_ListHyperParameterTuningJobsRequest = (
  input: ListHyperParameterTuningJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListImagesRequest
 */
const se_ListImagesRequest = (input: ListImagesRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListImageVersionsRequest
 */
const se_ListImageVersionsRequest = (input: ListImageVersionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    ImageName: [],
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListInferenceExperimentsRequest
 */
const se_ListInferenceExperimentsRequest = (input: ListInferenceExperimentsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
    Type: [],
  });
};

/**
 * serializeAws_json1_1ListInferenceRecommendationsJobsRequest
 */
const se_ListInferenceRecommendationsJobsRequest = (
  input: ListInferenceRecommendationsJobsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModelNameEquals: [],
    ModelPackageVersionArnEquals: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListInferenceRecommendationsJobStepsRequest omitted.

/**
 * serializeAws_json1_1ListLabelingJobsForWorkteamRequest
 */
const se_ListLabelingJobsForWorkteamRequest = (
  input: ListLabelingJobsForWorkteamRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    JobReferenceCodeContains: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    WorkteamArn: [],
  });
};

/**
 * serializeAws_json1_1ListLabelingJobsRequest
 */
const se_ListLabelingJobsRequest = (input: ListLabelingJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListLineageEntityParameterKey omitted.

/**
 * serializeAws_json1_1ListLineageGroupsRequest
 */
const se_ListLineageGroupsRequest = (input: ListLineageGroupsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelBiasJobDefinitionsRequest
 */
const se_ListModelBiasJobDefinitionsRequest = (
  input: ListModelBiasJobDefinitionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    EndpointName: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelCardExportJobsRequest
 */
const se_ListModelCardExportJobsRequest = (input: ListModelCardExportJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModelCardExportJobNameContains: [],
    ModelCardName: [],
    ModelCardVersion: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListModelCardsRequest
 */
const se_ListModelCardsRequest = (input: ListModelCardsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModelCardStatus: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelCardVersionsRequest
 */
const se_ListModelCardVersionsRequest = (input: ListModelCardVersionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModelCardName: [],
    ModelCardStatus: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelExplainabilityJobDefinitionsRequest
 */
const se_ListModelExplainabilityJobDefinitionsRequest = (
  input: ListModelExplainabilityJobDefinitionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    EndpointName: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListModelMetadataRequest omitted.

/**
 * serializeAws_json1_1ListModelPackageGroupsInput
 */
const se_ListModelPackageGroupsInput = (input: ListModelPackageGroupsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelPackagesInput
 */
const se_ListModelPackagesInput = (input: ListModelPackagesInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModelApprovalStatus: [],
    ModelPackageGroupName: [],
    ModelPackageType: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelQualityJobDefinitionsRequest
 */
const se_ListModelQualityJobDefinitionsRequest = (
  input: ListModelQualityJobDefinitionsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    EndpointName: [],
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListModelsInput
 */
const se_ListModelsInput = (input: ListModelsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListMonitoringAlertHistoryRequest
 */
const se_ListMonitoringAlertHistoryRequest = (
  input: ListMonitoringAlertHistoryRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    MonitoringAlertName: [],
    MonitoringScheduleName: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListMonitoringAlertsRequest omitted.

/**
 * serializeAws_json1_1ListMonitoringExecutionsRequest
 */
const se_ListMonitoringExecutionsRequest = (input: ListMonitoringExecutionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    EndpointName: [],
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    MonitoringJobDefinitionName: [],
    MonitoringScheduleName: [],
    MonitoringTypeEquals: [],
    NextToken: [],
    ScheduledTimeAfter: (_) => Math.round(_.getTime() / 1000),
    ScheduledTimeBefore: (_) => Math.round(_.getTime() / 1000),
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListMonitoringSchedulesRequest
 */
const se_ListMonitoringSchedulesRequest = (input: ListMonitoringSchedulesRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    EndpointName: [],
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    MonitoringJobDefinitionName: [],
    MonitoringTypeEquals: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListNotebookInstanceLifecycleConfigsInput
 */
const se_ListNotebookInstanceLifecycleConfigsInput = (
  input: ListNotebookInstanceLifecycleConfigsInput,
  context: __SerdeContext
): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListNotebookInstancesInput
 */
const se_ListNotebookInstancesInput = (input: ListNotebookInstancesInput, context: __SerdeContext): any => {
  return take(input, {
    AdditionalCodeRepositoryEquals: [],
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    DefaultCodeRepositoryContains: [],
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    NotebookInstanceLifecycleConfigNameContains: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListPipelineExecutionsRequest
 */
const se_ListPipelineExecutionsRequest = (input: ListPipelineExecutionsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    PipelineName: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListPipelineExecutionStepsRequest omitted.

// se_ListPipelineParametersForExecutionRequest omitted.

/**
 * serializeAws_json1_1ListPipelinesRequest
 */
const se_ListPipelinesRequest = (input: ListPipelinesRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NextToken: [],
    PipelineNamePrefix: [],
    SortBy: [],
    SortOrder: [],
  });
};

/**
 * serializeAws_json1_1ListProcessingJobsRequest
 */
const se_ListProcessingJobsRequest = (input: ListProcessingJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListProjectsInput
 */
const se_ListProjectsInput = (input: ListProjectsInput, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListSpacesRequest omitted.

// se_ListStageDevicesRequest omitted.

/**
 * serializeAws_json1_1ListStudioLifecycleConfigsRequest
 */
const se_ListStudioLifecycleConfigsRequest = (
  input: ListStudioLifecycleConfigsRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AppTypeEquals: [],
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    ModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    ModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
  });
};

// se_ListSubscribedWorkteamsRequest omitted.

// se_ListTagsInput omitted.

// se_ListTrainingJobsForHyperParameterTuningJobRequest omitted.

/**
 * serializeAws_json1_1ListTrainingJobsRequest
 */
const se_ListTrainingJobsRequest = (input: ListTrainingJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
    WarmPoolStatusEquals: [],
  });
};

/**
 * serializeAws_json1_1ListTransformJobsRequest
 */
const se_ListTransformJobsRequest = (input: ListTransformJobsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    CreationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeAfter: (_) => Math.round(_.getTime() / 1000),
    LastModifiedTimeBefore: (_) => Math.round(_.getTime() / 1000),
    MaxResults: [],
    NameContains: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    StatusEquals: [],
  });
};

// se_ListTrialComponentKey256 omitted.

/**
 * serializeAws_json1_1ListTrialComponentsRequest
 */
const se_ListTrialComponentsRequest = (input: ListTrialComponentsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    ExperimentName: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    SourceArn: [],
    TrialName: [],
  });
};

/**
 * serializeAws_json1_1ListTrialsRequest
 */
const se_ListTrialsRequest = (input: ListTrialsRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    ExperimentName: [],
    MaxResults: [],
    NextToken: [],
    SortBy: [],
    SortOrder: [],
    TrialComponentName: [],
  });
};

// se_ListUserProfilesRequest omitted.

// se_ListWorkforcesRequest omitted.

// se_ListWorkteamsRequest omitted.

// se_MemberDefinition omitted.

// se_MemberDefinitions omitted.

// se_MetadataProperties omitted.

// se_MetricDefinition omitted.

// se_MetricDefinitionList omitted.

// se_MetricsSource omitted.

// se_ModelBiasAppSpecification omitted.

// se_ModelBiasBaselineConfig omitted.

/**
 * serializeAws_json1_1ModelBiasJobInput
 */
const se_ModelBiasJobInput = (input: ModelBiasJobInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
    GroundTruthS3Input: _json,
  });
};

// se_ModelCardExportOutputConfig omitted.

// se_ModelCardSecurityConfig omitted.

// se_ModelClientConfig omitted.

// se_ModelDataQuality omitted.

// se_ModelDataSource omitted.

// se_ModelDeployConfig omitted.

// se_ModelExplainabilityAppSpecification omitted.

// se_ModelExplainabilityBaselineConfig omitted.

/**
 * serializeAws_json1_1ModelExplainabilityJobInput
 */
const se_ModelExplainabilityJobInput = (input: ModelExplainabilityJobInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
  });
};

// se_ModelInfrastructureConfig omitted.

// se_ModelInput omitted.

// se_ModelLatencyThreshold omitted.

// se_ModelLatencyThresholds omitted.

// se_ModelMetadataFilter omitted.

// se_ModelMetadataFilters omitted.

// se_ModelMetadataSearchExpression omitted.

// se_ModelMetrics omitted.

// se_ModelPackageArnList omitted.

// se_ModelPackageContainerDefinition omitted.

// se_ModelPackageContainerDefinitionList omitted.

// se_ModelPackageValidationProfile omitted.

// se_ModelPackageValidationProfiles omitted.

// se_ModelPackageValidationSpecification omitted.

// se_ModelQuality omitted.

// se_ModelQualityAppSpecification omitted.

// se_ModelQualityBaselineConfig omitted.

/**
 * serializeAws_json1_1ModelQualityJobInput
 */
const se_ModelQualityJobInput = (input: ModelQualityJobInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
    GroundTruthS3Input: _json,
  });
};

// se_ModelRegisterSettings omitted.

// se_ModelVariantActionMap omitted.

// se_ModelVariantConfig omitted.

// se_ModelVariantConfigList omitted.

// se_MonitoringAppSpecification omitted.

// se_MonitoringBaselineConfig omitted.

// se_MonitoringClusterConfig omitted.

// se_MonitoringConstraintsResource omitted.

// se_MonitoringContainerArguments omitted.

// se_MonitoringCsvDatasetFormat omitted.

// se_MonitoringDatasetFormat omitted.

// se_MonitoringEnvironmentMap omitted.

// se_MonitoringGroundTruthS3Input omitted.

/**
 * serializeAws_json1_1MonitoringInput
 */
const se_MonitoringInput = (input: MonitoringInput, context: __SerdeContext): any => {
  return take(input, {
    BatchTransformInput: (_) => se_BatchTransformInput(_, context),
    EndpointInput: (_) => se_EndpointInput(_, context),
  });
};

/**
 * serializeAws_json1_1MonitoringInputs
 */
const se_MonitoringInputs = (input: MonitoringInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MonitoringInput(entry, context);
    });
};

/**
 * serializeAws_json1_1MonitoringJobDefinition
 */
const se_MonitoringJobDefinition = (input: MonitoringJobDefinition, context: __SerdeContext): any => {
  return take(input, {
    BaselineConfig: _json,
    Environment: _json,
    MonitoringAppSpecification: _json,
    MonitoringInputs: (_) => se_MonitoringInputs(_, context),
    MonitoringOutputConfig: _json,
    MonitoringResources: _json,
    NetworkConfig: _json,
    RoleArn: [],
    StoppingCondition: _json,
  });
};

// se_MonitoringJsonDatasetFormat omitted.

// se_MonitoringNetworkConfig omitted.

// se_MonitoringOutput omitted.

// se_MonitoringOutputConfig omitted.

// se_MonitoringOutputs omitted.

// se_MonitoringParquetDatasetFormat omitted.

// se_MonitoringResources omitted.

// se_MonitoringS3Output omitted.

/**
 * serializeAws_json1_1MonitoringScheduleConfig
 */
const se_MonitoringScheduleConfig = (input: MonitoringScheduleConfig, context: __SerdeContext): any => {
  return take(input, {
    MonitoringJobDefinition: (_) => se_MonitoringJobDefinition(_, context),
    MonitoringJobDefinitionName: [],
    MonitoringType: [],
    ScheduleConfig: _json,
  });
};

// se_MonitoringStatisticsResource omitted.

// se_MonitoringStoppingCondition omitted.

// se_MultiModelConfig omitted.

// se_NeoVpcConfig omitted.

// se_NeoVpcSecurityGroupIds omitted.

// se_NeoVpcSubnets omitted.

// se_NestedFilters omitted.

// se_NestedFiltersList omitted.

// se_NetworkConfig omitted.

// se_NotebookInstanceAcceleratorTypes omitted.

// se_NotebookInstanceLifecycleConfigList omitted.

// se_NotebookInstanceLifecycleHook omitted.

// se_NotificationConfiguration omitted.

// se_OfflineStoreConfig omitted.

// se_OidcConfig omitted.

// se_OidcMemberDefinition omitted.

// se_OnlineStoreConfig omitted.

// se_OnlineStoreConfigUpdate omitted.

// se_OnlineStoreSecurityConfig omitted.

// se_OutputConfig omitted.

// se_OutputDataConfig omitted.

// se_OutputParameter omitted.

// se_OutputParameterList omitted.

// se_ParallelismConfiguration omitted.

// se_Parameter omitted.

// se_ParameterList omitted.

// se_ParameterRange omitted.

// se_ParameterRanges omitted.

// se_ParameterValues omitted.

// se_ParentHyperParameterTuningJob omitted.

// se_ParentHyperParameterTuningJobs omitted.

// se_Phase omitted.

// se_Phases omitted.

// se_PipelineDefinitionS3Location omitted.

// se_ProcessingClusterConfig omitted.

// se_ProcessingEnvironmentMap omitted.

// se_ProcessingFeatureStoreOutput omitted.

// se_ProcessingInput omitted.

// se_ProcessingInputs omitted.

// se_ProcessingOutput omitted.

// se_ProcessingOutputConfig omitted.

// se_ProcessingOutputs omitted.

// se_ProcessingResources omitted.

// se_ProcessingS3Input omitted.

// se_ProcessingS3Output omitted.

// se_ProcessingStoppingCondition omitted.

/**
 * serializeAws_json1_1ProductionVariant
 */
const se_ProductionVariant = (input: ProductionVariant, context: __SerdeContext): any => {
  return take(input, {
    AcceleratorType: [],
    ContainerStartupHealthCheckTimeoutInSeconds: [],
    CoreDumpConfig: _json,
    EnableSSMAccess: [],
    InitialInstanceCount: [],
    InitialVariantWeight: __serializeFloat,
    InstanceType: [],
    ModelDataDownloadTimeoutInSeconds: [],
    ModelName: [],
    ServerlessConfig: _json,
    VariantName: [],
    VolumeSizeInGB: [],
  });
};

// se_ProductionVariantCoreDumpConfig omitted.

/**
 * serializeAws_json1_1ProductionVariantList
 */
const se_ProductionVariantList = (input: ProductionVariant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ProductionVariant(entry, context);
    });
};

// se_ProductionVariantServerlessConfig omitted.

// se_ProductionVariantServerlessUpdateConfig omitted.

// se_ProfilerConfig omitted.

// se_ProfilerConfigForUpdate omitted.

// se_ProfilerRuleConfiguration omitted.

// se_ProfilerRuleConfigurations omitted.

// se_ProfilingParameters omitted.

// se_PropertyNameQuery omitted.

// se_ProvisioningParameter omitted.

// se_ProvisioningParameters omitted.

// se_PublicWorkforceTaskPrice omitted.

// se_PutModelPackageGroupPolicyInput omitted.

/**
 * serializeAws_json1_1QueryFilters
 */
const se_QueryFilters = (input: QueryFilters, context: __SerdeContext): any => {
  return take(input, {
    CreatedAfter: (_) => Math.round(_.getTime() / 1000),
    CreatedBefore: (_) => Math.round(_.getTime() / 1000),
    LineageTypes: _json,
    ModifiedAfter: (_) => Math.round(_.getTime() / 1000),
    ModifiedBefore: (_) => Math.round(_.getTime() / 1000),
    Properties: _json,
    Types: _json,
  });
};

/**
 * serializeAws_json1_1QueryLineageRequest
 */
const se_QueryLineageRequest = (input: QueryLineageRequest, context: __SerdeContext): any => {
  return take(input, {
    Direction: [],
    Filters: (_) => se_QueryFilters(_, context),
    IncludeEdges: [],
    MaxDepth: [],
    MaxResults: [],
    NextToken: [],
    StartArns: _json,
  });
};

// se_QueryLineageStartArns omitted.

// se_QueryLineageTypes omitted.

// se_QueryProperties omitted.

// se_QueryTypes omitted.

// se_RealTimeInferenceConfig omitted.

// se_RealtimeInferenceInstanceTypes omitted.

// se_RecommendationJobCompiledOutputConfig omitted.

// se_RecommendationJobContainerConfig omitted.

// se_RecommendationJobInputConfig omitted.

// se_RecommendationJobOutputConfig omitted.

// se_RecommendationJobPayloadConfig omitted.

// se_RecommendationJobResourceLimit omitted.

// se_RecommendationJobStoppingConditions omitted.

// se_RecommendationJobSupportedContentTypes omitted.

// se_RecommendationJobSupportedInstanceTypes omitted.

// se_RecommendationJobVpcConfig omitted.

// se_RecommendationJobVpcSecurityGroupIds omitted.

// se_RecommendationJobVpcSubnets omitted.

// se_RedshiftDatasetDefinition omitted.

// se_RegisterDevicesRequest omitted.

// se_RenderableTask omitted.

// se_RenderUiTemplateRequest omitted.

// se_RepositoryAuthConfig omitted.

// se_ResourceConfig omitted.

// se_ResourceConfigForUpdate omitted.

// se_ResourceLimits omitted.

// se_ResourceSpec omitted.

// se_ResponseMIMETypes omitted.

// se_RetentionPolicy omitted.

/**
 * serializeAws_json1_1RetryPipelineExecutionRequest
 */
const se_RetryPipelineExecutionRequest = (input: RetryPipelineExecutionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ParallelismConfiguration: _json,
    PipelineExecutionArn: [],
  });
};

// se_RetryStrategy omitted.

// se_RollingUpdatePolicy omitted.

// se_RSessionAppSettings omitted.

// se_RStudioServerProAppSettings omitted.

// se_RStudioServerProDomainSettings omitted.

// se_RStudioServerProDomainSettingsForUpdate omitted.

// se_RuleParameters omitted.

// se_S3DataSource omitted.

// se_S3ModelDataSource omitted.

// se_S3StorageConfig omitted.

// se_SageMakerImageVersionAliases omitted.

// se_ScheduleConfig omitted.

/**
 * serializeAws_json1_1SearchExpression
 */
const se_SearchExpression = (input: SearchExpression, context: __SerdeContext): any => {
  return take(input, {
    Filters: _json,
    NestedFilters: _json,
    Operator: [],
    SubExpressions: (_) => se_SearchExpressionList(_, context),
  });
};

/**
 * serializeAws_json1_1SearchExpressionList
 */
const se_SearchExpressionList = (input: SearchExpression[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SearchExpression(entry, context);
    });
};

/**
 * serializeAws_json1_1SearchRequest
 */
const se_SearchRequest = (input: SearchRequest, context: __SerdeContext): any => {
  return take(input, {
    MaxResults: [],
    NextToken: [],
    Resource: [],
    SearchExpression: (_) => se_SearchExpression(_, context),
    SortBy: [],
    SortOrder: [],
  });
};

// se_SecurityGroupIds omitted.

// se_SelectedStep omitted.

// se_SelectedStepList omitted.

// se_SelectiveExecutionConfig omitted.

/**
 * serializeAws_json1_1SendPipelineExecutionStepFailureRequest
 */
const se_SendPipelineExecutionStepFailureRequest = (
  input: SendPipelineExecutionStepFailureRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CallbackToken: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FailureReason: [],
  });
};

/**
 * serializeAws_json1_1SendPipelineExecutionStepSuccessRequest
 */
const se_SendPipelineExecutionStepSuccessRequest = (
  input: SendPipelineExecutionStepSuccessRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    CallbackToken: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    OutputParameters: _json,
  });
};

// se_ServiceCatalogProvisioningDetails omitted.

// se_ServiceCatalogProvisioningUpdateDetails omitted.

// se_ShadowModeConfig omitted.

// se_ShadowModelVariantConfig omitted.

// se_ShadowModelVariantConfigList omitted.

// se_SharingSettings omitted.

// se_ShuffleConfig omitted.

// se_SourceAlgorithm omitted.

// se_SourceAlgorithmList omitted.

// se_SourceAlgorithmSpecification omitted.

// se_SourceIpConfig omitted.

// se_SpaceSettings omitted.

// se_StartEdgeDeploymentStageRequest omitted.

// se_StartInferenceExperimentRequest omitted.

// se_StartMonitoringScheduleRequest omitted.

// se_StartNotebookInstanceInput omitted.

/**
 * serializeAws_json1_1StartPipelineExecutionRequest
 */
const se_StartPipelineExecutionRequest = (input: StartPipelineExecutionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ParallelismConfiguration: _json,
    PipelineExecutionDescription: [],
    PipelineExecutionDisplayName: [],
    PipelineName: [],
    PipelineParameters: _json,
    SelectiveExecutionConfig: _json,
  });
};

// se_StopAutoMLJobRequest omitted.

// se_StopCompilationJobRequest omitted.

// se_StopEdgeDeploymentStageRequest omitted.

// se_StopEdgePackagingJobRequest omitted.

// se_StopHyperParameterTuningJobRequest omitted.

// se_StopInferenceExperimentRequest omitted.

// se_StopInferenceRecommendationsJobRequest omitted.

// se_StopLabelingJobRequest omitted.

// se_StopMonitoringScheduleRequest omitted.

// se_StopNotebookInstanceInput omitted.

// se_StoppingCondition omitted.

/**
 * serializeAws_json1_1StopPipelineExecutionRequest
 */
const se_StopPipelineExecutionRequest = (input: StopPipelineExecutionRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    PipelineExecutionArn: [],
  });
};

// se_StopProcessingJobRequest omitted.

// se_StopTrainingJobRequest omitted.

// se_StopTransformJobRequest omitted.

// se_Subnets omitted.

// se_SuggestionQuery omitted.

// se_TabularJobConfig omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TargetPlatform omitted.

// se_TaskKeywords omitted.

// se_TensorBoardAppSettings omitted.

// se_TensorBoardOutputConfig omitted.

// se_TextClassificationJobConfig omitted.

// se_TimeSeriesConfig omitted.

// se_TimeSeriesForecastingJobConfig omitted.

// se_TimeSeriesForecastingSettings omitted.

// se_TimeSeriesTransformations omitted.

// se_TrafficPattern omitted.

// se_TrafficRoutingConfig omitted.

// se_TrainingContainerArguments omitted.

// se_TrainingContainerEntrypoint omitted.

// se_TrainingEnvironmentMap omitted.

// se_TrainingImageConfig omitted.

// se_TrainingInstanceTypes omitted.

// se_TrainingJobDefinition omitted.

// se_TrainingRepositoryAuthConfig omitted.

// se_TrainingSpecification omitted.

// se_TransformDataSource omitted.

// se_TransformEnvironmentMap omitted.

// se_TransformInput omitted.

// se_TransformInstanceTypes omitted.

// se_TransformJobDefinition omitted.

// se_TransformOutput omitted.

// se_TransformResources omitted.

// se_TransformS3DataSource omitted.

// se_TrialComponentArtifact omitted.

// se_TrialComponentArtifacts omitted.

/**
 * serializeAws_json1_1TrialComponentParameters
 */
const se_TrialComponentParameters = (
  input: Record<string, TrialComponentParameterValue>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_TrialComponentParameterValue(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1TrialComponentParameterValue
 */
const se_TrialComponentParameterValue = (input: TrialComponentParameterValue, context: __SerdeContext): any => {
  return TrialComponentParameterValue.visit(input, {
    NumberValue: (value) => ({ NumberValue: __serializeFloat(value) }),
    StringValue: (value) => ({ StringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

// se_TrialComponentStatus omitted.

// se_TtlDuration omitted.

/**
 * serializeAws_json1_1TuningJobCompletionCriteria
 */
const se_TuningJobCompletionCriteria = (input: TuningJobCompletionCriteria, context: __SerdeContext): any => {
  return take(input, {
    BestObjectiveNotImproving: _json,
    ConvergenceDetected: _json,
    TargetObjectiveMetricValue: __serializeFloat,
  });
};

// se_UiConfig omitted.

// se_UiTemplate omitted.

// se_UpdateActionRequest omitted.

// se_UpdateAppImageConfigRequest omitted.

// se_UpdateArtifactRequest omitted.

// se_UpdateCodeRepositoryInput omitted.

// se_UpdateContextRequest omitted.

// se_UpdateDeviceFleetRequest omitted.

// se_UpdateDevicesRequest omitted.

// se_UpdateDomainRequest omitted.

// se_UpdateEndpointInput omitted.

/**
 * serializeAws_json1_1UpdateEndpointWeightsAndCapacitiesInput
 */
const se_UpdateEndpointWeightsAndCapacitiesInput = (
  input: UpdateEndpointWeightsAndCapacitiesInput,
  context: __SerdeContext
): any => {
  return take(input, {
    DesiredWeightsAndCapacities: (_) => se_DesiredWeightAndCapacityList(_, context),
    EndpointName: [],
  });
};

// se_UpdateExperimentRequest omitted.

// se_UpdateFeatureGroupRequest omitted.

// se_UpdateFeatureMetadataRequest omitted.

// se_UpdateHubRequest omitted.

// se_UpdateImageRequest omitted.

// se_UpdateImageVersionRequest omitted.

/**
 * serializeAws_json1_1UpdateInferenceExperimentRequest
 */
const se_UpdateInferenceExperimentRequest = (input: UpdateInferenceExperimentRequest, context: __SerdeContext): any => {
  return take(input, {
    DataStorageConfig: _json,
    Description: [],
    ModelVariants: _json,
    Name: [],
    Schedule: (_) => se_InferenceExperimentSchedule(_, context),
    ShadowModeConfig: _json,
  });
};

// se_UpdateModelCardRequest omitted.

// se_UpdateModelPackageInput omitted.

// se_UpdateMonitoringAlertRequest omitted.

/**
 * serializeAws_json1_1UpdateMonitoringScheduleRequest
 */
const se_UpdateMonitoringScheduleRequest = (input: UpdateMonitoringScheduleRequest, context: __SerdeContext): any => {
  return take(input, {
    MonitoringScheduleConfig: (_) => se_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: [],
  });
};

// se_UpdateNotebookInstanceInput omitted.

// se_UpdateNotebookInstanceLifecycleConfigInput omitted.

// se_UpdatePipelineExecutionRequest omitted.

// se_UpdatePipelineRequest omitted.

// se_UpdateProjectInput omitted.

// se_UpdateSpaceRequest omitted.

// se_UpdateTrainingJobRequest omitted.

/**
 * serializeAws_json1_1UpdateTrialComponentRequest
 */
const se_UpdateTrialComponentRequest = (input: UpdateTrialComponentRequest, context: __SerdeContext): any => {
  return take(input, {
    DisplayName: [],
    EndTime: (_) => Math.round(_.getTime() / 1000),
    InputArtifacts: _json,
    InputArtifactsToRemove: _json,
    OutputArtifacts: _json,
    OutputArtifactsToRemove: _json,
    Parameters: (_) => se_TrialComponentParameters(_, context),
    ParametersToRemove: _json,
    StartTime: (_) => Math.round(_.getTime() / 1000),
    Status: _json,
    TrialComponentName: [],
  });
};

// se_UpdateTrialRequest omitted.

// se_UpdateUserProfileRequest omitted.

// se_UpdateWorkforceRequest omitted.

// se_UpdateWorkteamRequest omitted.

// se_USD omitted.

// se_UserSettings omitted.

// se_VariantProperty omitted.

// se_VariantPropertyList omitted.

// se_VpcConfig omitted.

// se_VpcSecurityGroupIds omitted.

// se_WorkforceSecurityGroupIds omitted.

// se_WorkforceSubnets omitted.

// se_WorkforceVpcConfigRequest omitted.

// de_ActionSource omitted.

/**
 * deserializeAws_json1_1ActionSummaries
 */
const de_ActionSummaries = (output: any, context: __SerdeContext): ActionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ActionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ActionSummary
 */
const de_ActionSummary = (output: any, context: __SerdeContext): ActionSummary => {
  return take(output, {
    ActionArn: __expectString,
    ActionName: __expectString,
    ActionType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: _json,
    Status: __expectString,
  }) as any;
};

// de_AddAssociationResponse omitted.

// de_AdditionalCodeRepositoryNamesOrUrls omitted.

// de_AdditionalInferenceSpecificationDefinition omitted.

// de_AdditionalInferenceSpecifications omitted.

// de_AddTagsOutput omitted.

// de_AgentVersion omitted.

// de_AgentVersions omitted.

// de_AggregationTransformations omitted.

// de_Alarm omitted.

// de_AlarmList omitted.

// de_AlgorithmSpecification omitted.

// de_AlgorithmStatusDetails omitted.

// de_AlgorithmStatusItem omitted.

// de_AlgorithmStatusItemList omitted.

/**
 * deserializeAws_json1_1AlgorithmSummary
 */
const de_AlgorithmSummary = (output: any, context: __SerdeContext): AlgorithmSummary => {
  return take(output, {
    AlgorithmArn: __expectString,
    AlgorithmDescription: __expectString,
    AlgorithmName: __expectString,
    AlgorithmStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AlgorithmSummaryList
 */
const de_AlgorithmSummaryList = (output: any, context: __SerdeContext): AlgorithmSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlgorithmSummary(entry, context);
    });
  return retVal;
};

// de_AlgorithmValidationProfile omitted.

// de_AlgorithmValidationProfiles omitted.

// de_AlgorithmValidationSpecification omitted.

// de_AnnotationConsolidationConfig omitted.

/**
 * deserializeAws_json1_1AppDetails
 */
const de_AppDetails = (output: any, context: __SerdeContext): AppDetails => {
  return take(output, {
    AppName: __expectString,
    AppType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    SpaceName: __expectString,
    Status: __expectString,
    UserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1AppImageConfigDetails
 */
const de_AppImageConfigDetails = (output: any, context: __SerdeContext): AppImageConfigDetails => {
  return take(output, {
    AppImageConfigArn: __expectString,
    AppImageConfigName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KernelGatewayImageConfig: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1AppImageConfigList
 */
const de_AppImageConfigList = (output: any, context: __SerdeContext): AppImageConfigDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppImageConfigDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppList
 */
const de_AppList = (output: any, context: __SerdeContext): AppDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppDetails(entry, context);
    });
  return retVal;
};

// de_AppSpecification omitted.

// de_ArtifactSource omitted.

// de_ArtifactSourceType omitted.

// de_ArtifactSourceTypes omitted.

/**
 * deserializeAws_json1_1ArtifactSummaries
 */
const de_ArtifactSummaries = (output: any, context: __SerdeContext): ArtifactSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ArtifactSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ArtifactSummary
 */
const de_ArtifactSummary = (output: any, context: __SerdeContext): ArtifactSummary => {
  return take(output, {
    ArtifactArn: __expectString,
    ArtifactName: __expectString,
    ArtifactType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: _json,
  }) as any;
};

// de_AssociateTrialComponentResponse omitted.

/**
 * deserializeAws_json1_1AssociationSummaries
 */
const de_AssociationSummaries = (output: any, context: __SerdeContext): AssociationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssociationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociationSummary
 */
const de_AssociationSummary = (output: any, context: __SerdeContext): AssociationSummary => {
  return take(output, {
    AssociationType: __expectString,
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationArn: __expectString,
    DestinationName: __expectString,
    DestinationType: __expectString,
    SourceArn: __expectString,
    SourceName: __expectString,
    SourceType: __expectString,
  }) as any;
};

// de_AsyncInferenceClientConfig omitted.

// de_AsyncInferenceConfig omitted.

// de_AsyncInferenceNotificationConfig omitted.

// de_AsyncInferenceOutputConfig omitted.

// de_AsyncNotificationTopicTypeList omitted.

// de_AthenaDatasetDefinition omitted.

// de_AttributeNames omitted.

// de_AutoMLAlgorithmConfig omitted.

// de_AutoMLAlgorithms omitted.

// de_AutoMLAlgorithmsConfig omitted.

/**
 * deserializeAws_json1_1AutoMLCandidate
 */
const de_AutoMLCandidate = (output: any, context: __SerdeContext): AutoMLCandidate => {
  return take(output, {
    CandidateName: __expectString,
    CandidateProperties: (_: any) => de_CandidateProperties(_, context),
    CandidateStatus: __expectString,
    CandidateSteps: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    FinalAutoMLJobObjectiveMetric: (_: any) => de_FinalAutoMLJobObjectiveMetric(_, context),
    InferenceContainerDefinitions: _json,
    InferenceContainers: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectiveStatus: __expectString,
  }) as any;
};

// de_AutoMLCandidateGenerationConfig omitted.

/**
 * deserializeAws_json1_1AutoMLCandidates
 */
const de_AutoMLCandidates = (output: any, context: __SerdeContext): AutoMLCandidate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLCandidate(entry, context);
    });
  return retVal;
};

// de_AutoMLCandidateStep omitted.

// de_AutoMLChannel omitted.

// de_AutoMLContainerDefinition omitted.

// de_AutoMLContainerDefinitions omitted.

// de_AutoMLDataSource omitted.

/**
 * deserializeAws_json1_1AutoMLDataSplitConfig
 */
const de_AutoMLDataSplitConfig = (output: any, context: __SerdeContext): AutoMLDataSplitConfig => {
  return take(output, {
    ValidationFraction: __limitedParseFloat32,
  }) as any;
};

// de_AutoMLInferenceContainerDefinitions omitted.

// de_AutoMLInputDataConfig omitted.

// de_AutoMLJobArtifacts omitted.

// de_AutoMLJobChannel omitted.

// de_AutoMLJobCompletionCriteria omitted.

/**
 * deserializeAws_json1_1AutoMLJobConfig
 */
const de_AutoMLJobConfig = (output: any, context: __SerdeContext): AutoMLJobConfig => {
  return take(output, {
    CandidateGenerationConfig: _json,
    CompletionCriteria: _json,
    DataSplitConfig: (_: any) => de_AutoMLDataSplitConfig(_, context),
    Mode: __expectString,
    SecurityConfig: _json,
  }) as any;
};

// de_AutoMLJobInputDataConfig omitted.

// de_AutoMLJobObjective omitted.

// de_AutoMLJobStepMetadata omitted.

/**
 * deserializeAws_json1_1AutoMLJobSummaries
 */
const de_AutoMLJobSummaries = (output: any, context: __SerdeContext): AutoMLJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoMLJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AutoMLJobSummary
 */
const de_AutoMLJobSummary = (output: any, context: __SerdeContext): AutoMLJobSummary => {
  return take(output, {
    AutoMLJobArn: __expectString,
    AutoMLJobName: __expectString,
    AutoMLJobSecondaryStatus: __expectString,
    AutoMLJobStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PartialFailureReasons: _json,
  }) as any;
};

// de_AutoMLOutputDataConfig omitted.

// de_AutoMLPartialFailureReason omitted.

// de_AutoMLPartialFailureReasons omitted.

// de_AutoMLProblemTypeConfig omitted.

// de_AutoMLProblemTypeResolvedAttributes omitted.

// de_AutoMLResolvedAttributes omitted.

// de_AutoMLS3DataSource omitted.

// de_AutoMLSecurityConfig omitted.

// de_AutoParameter omitted.

// de_AutoParameters omitted.

// de_AutoRollbackConfig omitted.

// de_Autotune omitted.

// de_BatchDataCaptureConfig omitted.

// de_BatchDescribeModelPackageError omitted.

// de_BatchDescribeModelPackageErrorMap omitted.

/**
 * deserializeAws_json1_1BatchDescribeModelPackageOutput
 */
const de_BatchDescribeModelPackageOutput = (output: any, context: __SerdeContext): BatchDescribeModelPackageOutput => {
  return take(output, {
    BatchDescribeModelPackageErrorMap: _json,
    ModelPackageSummaries: (_: any) => de_ModelPackageSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BatchDescribeModelPackageSummary
 */
const de_BatchDescribeModelPackageSummary = (
  output: any,
  context: __SerdeContext
): BatchDescribeModelPackageSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InferenceSpecification: _json,
    ModelApprovalStatus: __expectString,
    ModelPackageArn: __expectString,
    ModelPackageDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageStatus: __expectString,
    ModelPackageVersion: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1BatchTransformInput
 */
const de_BatchTransformInput = (output: any, context: __SerdeContext): BatchTransformInput => {
  return take(output, {
    DataCapturedDestinationS3Uri: __expectString,
    DatasetFormat: _json,
    EndTimeOffset: __expectString,
    FeaturesAttribute: __expectString,
    InferenceAttribute: __expectString,
    LocalPath: __expectString,
    ProbabilityAttribute: __expectString,
    ProbabilityThresholdAttribute: __limitedParseDouble,
    S3DataDistributionType: __expectString,
    S3InputMode: __expectString,
    StartTimeOffset: __expectString,
  }) as any;
};

// de_BestObjectiveNotImproving omitted.

// de_Bias omitted.

// de_BlueGreenUpdatePolicy omitted.

// de_CacheHitResult omitted.

// de_CallbackStepMetadata omitted.

// de_CandidateArtifactLocations omitted.

// de_CandidateGenerationConfig omitted.

/**
 * deserializeAws_json1_1CandidateProperties
 */
const de_CandidateProperties = (output: any, context: __SerdeContext): CandidateProperties => {
  return take(output, {
    CandidateArtifactLocations: _json,
    CandidateMetrics: (_: any) => de_MetricDataList(_, context),
  }) as any;
};

// de_CandidateSteps omitted.

// de_CanvasAppSettings omitted.

// de_CapacitySize omitted.

// de_CaptureContentTypeHeader omitted.

// de_CaptureOption omitted.

// de_CaptureOptionList omitted.

// de_CategoricalParameter omitted.

// de_CategoricalParameterRange omitted.

// de_CategoricalParameterRanges omitted.

// de_CategoricalParameterRangeSpecification omitted.

// de_CategoricalParameterRangeValues omitted.

// de_CategoricalParameters omitted.

// de_Channel omitted.

// de_ChannelSpecification omitted.

// de_ChannelSpecifications omitted.

// de_CheckpointConfig omitted.

// de_Cidrs omitted.

// de_ClarifyCheckStepMetadata omitted.

// de_ClarifyExplainerConfig omitted.

// de_ClarifyFeatureHeaders omitted.

// de_ClarifyFeatureTypes omitted.

// de_ClarifyInferenceConfig omitted.

// de_ClarifyLabelHeaders omitted.

// de_ClarifyShapBaselineConfig omitted.

// de_ClarifyShapConfig omitted.

// de_ClarifyTextConfig omitted.

// de_CodeRepositories omitted.

// de_CodeRepository omitted.

/**
 * deserializeAws_json1_1CodeRepositorySummary
 */
const de_CodeRepositorySummary = (output: any, context: __SerdeContext): CodeRepositorySummary => {
  return take(output, {
    CodeRepositoryArn: __expectString,
    CodeRepositoryName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GitConfig: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1CodeRepositorySummaryList
 */
const de_CodeRepositorySummaryList = (output: any, context: __SerdeContext): CodeRepositorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CodeRepositorySummary(entry, context);
    });
  return retVal;
};

// de_CognitoConfig omitted.

// de_CognitoMemberDefinition omitted.

// de_CollectionConfiguration omitted.

// de_CollectionConfigurations omitted.

// de_CollectionParameters omitted.

/**
 * deserializeAws_json1_1CompilationJobSummaries
 */
const de_CompilationJobSummaries = (output: any, context: __SerdeContext): CompilationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CompilationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CompilationJobSummary
 */
const de_CompilationJobSummary = (output: any, context: __SerdeContext): CompilationJobSummary => {
  return take(output, {
    CompilationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompilationJobArn: __expectString,
    CompilationJobName: __expectString,
    CompilationJobStatus: __expectString,
    CompilationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompilationTargetDevice: __expectString,
    CompilationTargetPlatformAccelerator: __expectString,
    CompilationTargetPlatformArch: __expectString,
    CompilationTargetPlatformOs: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CompressionTypes omitted.

// de_ConditionStepMetadata omitted.

// de_ConflictException omitted.

// de_ContainerArguments omitted.

// de_ContainerDefinition omitted.

// de_ContainerDefinitionList omitted.

// de_ContainerEntrypoint omitted.

// de_ContentClassifiers omitted.

// de_ContentTypes omitted.

// de_ContextSource omitted.

/**
 * deserializeAws_json1_1ContextSummaries
 */
const de_ContextSummaries = (output: any, context: __SerdeContext): ContextSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContextSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ContextSummary
 */
const de_ContextSummary = (output: any, context: __SerdeContext): ContextSummary => {
  return take(output, {
    ContextArn: __expectString,
    ContextName: __expectString,
    ContextType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: _json,
  }) as any;
};

// de_ContinuousParameterRange omitted.

// de_ContinuousParameterRanges omitted.

// de_ContinuousParameterRangeSpecification omitted.

// de_ConvergenceDetected omitted.

// de_CreateActionResponse omitted.

// de_CreateAlgorithmOutput omitted.

// de_CreateAppImageConfigResponse omitted.

// de_CreateAppResponse omitted.

// de_CreateArtifactResponse omitted.

// de_CreateAutoMLJobResponse omitted.

// de_CreateAutoMLJobV2Response omitted.

// de_CreateCodeRepositoryOutput omitted.

// de_CreateCompilationJobResponse omitted.

// de_CreateContextResponse omitted.

// de_CreateDataQualityJobDefinitionResponse omitted.

// de_CreateDomainResponse omitted.

// de_CreateEdgeDeploymentPlanResponse omitted.

// de_CreateEndpointConfigOutput omitted.

// de_CreateEndpointOutput omitted.

// de_CreateExperimentResponse omitted.

// de_CreateFeatureGroupResponse omitted.

// de_CreateFlowDefinitionResponse omitted.

// de_CreateHubResponse omitted.

// de_CreateHumanTaskUiResponse omitted.

// de_CreateHyperParameterTuningJobResponse omitted.

// de_CreateImageResponse omitted.

// de_CreateImageVersionResponse omitted.

// de_CreateInferenceExperimentResponse omitted.

// de_CreateInferenceRecommendationsJobResponse omitted.

// de_CreateLabelingJobResponse omitted.

// de_CreateModelBiasJobDefinitionResponse omitted.

// de_CreateModelCardExportJobResponse omitted.

// de_CreateModelCardResponse omitted.

// de_CreateModelExplainabilityJobDefinitionResponse omitted.

// de_CreateModelOutput omitted.

// de_CreateModelPackageGroupOutput omitted.

// de_CreateModelPackageOutput omitted.

// de_CreateModelQualityJobDefinitionResponse omitted.

// de_CreateMonitoringScheduleResponse omitted.

// de_CreateNotebookInstanceLifecycleConfigOutput omitted.

// de_CreateNotebookInstanceOutput omitted.

// de_CreatePipelineResponse omitted.

// de_CreatePresignedDomainUrlResponse omitted.

// de_CreatePresignedNotebookInstanceUrlOutput omitted.

// de_CreateProcessingJobResponse omitted.

// de_CreateProjectOutput omitted.

// de_CreateSpaceResponse omitted.

// de_CreateStudioLifecycleConfigResponse omitted.

// de_CreateTrainingJobResponse omitted.

// de_CreateTransformJobResponse omitted.

// de_CreateTrialComponentResponse omitted.

// de_CreateTrialResponse omitted.

// de_CreateUserProfileResponse omitted.

// de_CreateWorkforceResponse omitted.

// de_CreateWorkteamResponse omitted.

// de_CsvContentTypes omitted.

// de_CustomerMetadataMap omitted.

// de_CustomImage omitted.

// de_CustomImages omitted.

// de_DataCaptureConfig omitted.

// de_DataCaptureConfigSummary omitted.

// de_DataCatalogConfig omitted.

// de_DataProcessing omitted.

// de_DataQualityAppSpecification omitted.

// de_DataQualityBaselineConfig omitted.

/**
 * deserializeAws_json1_1DataQualityJobInput
 */
const de_DataQualityJobInput = (output: any, context: __SerdeContext): DataQualityJobInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
  }) as any;
};

// de_DatasetDefinition omitted.

// de_DataSource omitted.

// de_DebugHookConfig omitted.

// de_DebugRuleConfiguration omitted.

// de_DebugRuleConfigurations omitted.

/**
 * deserializeAws_json1_1DebugRuleEvaluationStatus
 */
const de_DebugRuleEvaluationStatus = (output: any, context: __SerdeContext): DebugRuleEvaluationStatus => {
  return take(output, {
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleConfigurationName: __expectString,
    RuleEvaluationJobArn: __expectString,
    RuleEvaluationStatus: __expectString,
    StatusDetails: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DebugRuleEvaluationStatuses
 */
const de_DebugRuleEvaluationStatuses = (output: any, context: __SerdeContext): DebugRuleEvaluationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DebugRuleEvaluationStatus(entry, context);
    });
  return retVal;
};

// de_DefaultSpaceSettings omitted.

// de_DeleteActionResponse omitted.

// de_DeleteArtifactResponse omitted.

// de_DeleteAssociationResponse omitted.

// de_DeleteContextResponse omitted.

// de_DeleteExperimentResponse omitted.

// de_DeleteFlowDefinitionResponse omitted.

// de_DeleteHumanTaskUiResponse omitted.

// de_DeleteImageResponse omitted.

// de_DeleteImageVersionResponse omitted.

// de_DeleteInferenceExperimentResponse omitted.

// de_DeletePipelineResponse omitted.

// de_DeleteTagsOutput omitted.

// de_DeleteTrialComponentResponse omitted.

// de_DeleteTrialResponse omitted.

// de_DeleteWorkforceResponse omitted.

// de_DeleteWorkteamResponse omitted.

/**
 * deserializeAws_json1_1DeployedImage
 */
const de_DeployedImage = (output: any, context: __SerdeContext): DeployedImage => {
  return take(output, {
    ResolutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResolvedImage: __expectString,
    SpecifiedImage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeployedImages
 */
const de_DeployedImages = (output: any, context: __SerdeContext): DeployedImage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeployedImage(entry, context);
    });
  return retVal;
};

// de_DeploymentConfig omitted.

// de_DeploymentRecommendation omitted.

/**
 * deserializeAws_json1_1DeploymentStageStatusSummaries
 */
const de_DeploymentStageStatusSummaries = (output: any, context: __SerdeContext): DeploymentStageStatusSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentStageStatusSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeploymentStageStatusSummary
 */
const de_DeploymentStageStatusSummary = (output: any, context: __SerdeContext): DeploymentStageStatusSummary => {
  return take(output, {
    DeploymentConfig: _json,
    DeploymentStatus: (_: any) => de_EdgeDeploymentStatus(_, context),
    DeviceSelectionConfig: _json,
    StageName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeActionResponse
 */
const de_DescribeActionResponse = (output: any, context: __SerdeContext): DescribeActionResponse => {
  return take(output, {
    ActionArn: __expectString,
    ActionName: __expectString,
    ActionType: __expectString,
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    MetadataProperties: _json,
    Properties: _json,
    Source: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAlgorithmOutput
 */
const de_DescribeAlgorithmOutput = (output: any, context: __SerdeContext): DescribeAlgorithmOutput => {
  return take(output, {
    AlgorithmArn: __expectString,
    AlgorithmDescription: __expectString,
    AlgorithmName: __expectString,
    AlgorithmStatus: __expectString,
    AlgorithmStatusDetails: _json,
    CertifyForMarketplace: __expectBoolean,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InferenceSpecification: _json,
    ProductId: __expectString,
    TrainingSpecification: _json,
    ValidationSpecification: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAppImageConfigResponse
 */
const de_DescribeAppImageConfigResponse = (output: any, context: __SerdeContext): DescribeAppImageConfigResponse => {
  return take(output, {
    AppImageConfigArn: __expectString,
    AppImageConfigName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    KernelGatewayImageConfig: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAppResponse
 */
const de_DescribeAppResponse = (output: any, context: __SerdeContext): DescribeAppResponse => {
  return take(output, {
    AppArn: __expectString,
    AppName: __expectString,
    AppType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    FailureReason: __expectString,
    LastHealthCheckTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUserActivityTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceSpec: _json,
    SpaceName: __expectString,
    Status: __expectString,
    UserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeArtifactResponse
 */
const de_DescribeArtifactResponse = (output: any, context: __SerdeContext): DescribeArtifactResponse => {
  return take(output, {
    ArtifactArn: __expectString,
    ArtifactName: __expectString,
    ArtifactType: __expectString,
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    MetadataProperties: _json,
    Properties: _json,
    Source: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobResponse
 */
const de_DescribeAutoMLJobResponse = (output: any, context: __SerdeContext): DescribeAutoMLJobResponse => {
  return take(output, {
    AutoMLJobArn: __expectString,
    AutoMLJobArtifacts: _json,
    AutoMLJobConfig: (_: any) => de_AutoMLJobConfig(_, context),
    AutoMLJobName: __expectString,
    AutoMLJobObjective: _json,
    AutoMLJobSecondaryStatus: __expectString,
    AutoMLJobStatus: __expectString,
    BestCandidate: (_: any) => de_AutoMLCandidate(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    GenerateCandidateDefinitionsOnly: __expectBoolean,
    InputDataConfig: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelDeployConfig: _json,
    ModelDeployResult: _json,
    OutputDataConfig: _json,
    PartialFailureReasons: _json,
    ProblemType: __expectString,
    ResolvedAttributes: _json,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeAutoMLJobV2Response
 */
const de_DescribeAutoMLJobV2Response = (output: any, context: __SerdeContext): DescribeAutoMLJobV2Response => {
  return take(output, {
    AutoMLJobArn: __expectString,
    AutoMLJobArtifacts: _json,
    AutoMLJobInputDataConfig: _json,
    AutoMLJobName: __expectString,
    AutoMLJobObjective: _json,
    AutoMLJobSecondaryStatus: __expectString,
    AutoMLJobStatus: __expectString,
    AutoMLProblemTypeConfig: (_: any) => _json(__expectUnion(_)),
    AutoMLProblemTypeConfigName: __expectString,
    BestCandidate: (_: any) => de_AutoMLCandidate(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSplitConfig: (_: any) => de_AutoMLDataSplitConfig(_, context),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelDeployConfig: _json,
    ModelDeployResult: _json,
    OutputDataConfig: _json,
    PartialFailureReasons: _json,
    ResolvedAttributes: _json,
    RoleArn: __expectString,
    SecurityConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCodeRepositoryOutput
 */
const de_DescribeCodeRepositoryOutput = (output: any, context: __SerdeContext): DescribeCodeRepositoryOutput => {
  return take(output, {
    CodeRepositoryArn: __expectString,
    CodeRepositoryName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    GitConfig: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeCompilationJobResponse
 */
const de_DescribeCompilationJobResponse = (output: any, context: __SerdeContext): DescribeCompilationJobResponse => {
  return take(output, {
    CompilationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompilationJobArn: __expectString,
    CompilationJobName: __expectString,
    CompilationJobStatus: __expectString,
    CompilationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    InferenceImage: __expectString,
    InputConfig: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArtifacts: _json,
    ModelDigests: _json,
    ModelPackageVersionArn: __expectString,
    OutputConfig: _json,
    RoleArn: __expectString,
    StoppingCondition: _json,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeContextResponse
 */
const de_DescribeContextResponse = (output: any, context: __SerdeContext): DescribeContextResponse => {
  return take(output, {
    ContextArn: __expectString,
    ContextName: __expectString,
    ContextType: __expectString,
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    Properties: _json,
    Source: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDataQualityJobDefinitionResponse
 */
const de_DescribeDataQualityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataQualityJobDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataQualityAppSpecification: _json,
    DataQualityBaselineConfig: _json,
    DataQualityJobInput: (_: any) => de_DataQualityJobInput(_, context),
    DataQualityJobOutputConfig: _json,
    JobDefinitionArn: __expectString,
    JobDefinitionName: __expectString,
    JobResources: _json,
    NetworkConfig: _json,
    RoleArn: __expectString,
    StoppingCondition: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDeviceFleetResponse
 */
const de_DescribeDeviceFleetResponse = (output: any, context: __SerdeContext): DescribeDeviceFleetResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceFleetArn: __expectString,
    DeviceFleetName: __expectString,
    IotRoleAlias: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OutputConfig: _json,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDeviceResponse
 */
const de_DescribeDeviceResponse = (output: any, context: __SerdeContext): DescribeDeviceResponse => {
  return take(output, {
    AgentVersion: __expectString,
    Description: __expectString,
    DeviceArn: __expectString,
    DeviceFleetName: __expectString,
    DeviceName: __expectString,
    IotThingName: __expectString,
    LatestHeartbeat: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MaxModels: __expectInt32,
    Models: (_: any) => de_EdgeModels(_, context),
    NextToken: __expectString,
    RegistrationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDomainResponse
 */
const de_DescribeDomainResponse = (output: any, context: __SerdeContext): DescribeDomainResponse => {
  return take(output, {
    AppNetworkAccessType: __expectString,
    AppSecurityGroupManagement: __expectString,
    AuthMode: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultSpaceSettings: _json,
    DefaultUserSettings: _json,
    DomainArn: __expectString,
    DomainId: __expectString,
    DomainName: __expectString,
    DomainSettings: _json,
    FailureReason: __expectString,
    HomeEfsFileSystemId: __expectString,
    HomeEfsFileSystemKmsKeyId: __expectString,
    KmsKeyId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SecurityGroupIdForDomainBoundary: __expectString,
    SingleSignOnManagedApplicationInstanceId: __expectString,
    Status: __expectString,
    SubnetIds: _json,
    Url: __expectString,
    VpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEdgeDeploymentPlanResponse
 */
const de_DescribeEdgeDeploymentPlanResponse = (
  output: any,
  context: __SerdeContext
): DescribeEdgeDeploymentPlanResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceFleetName: __expectString,
    EdgeDeploymentFailed: __expectInt32,
    EdgeDeploymentPending: __expectInt32,
    EdgeDeploymentPlanArn: __expectString,
    EdgeDeploymentPlanName: __expectString,
    EdgeDeploymentSuccess: __expectInt32,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelConfigs: _json,
    NextToken: __expectString,
    Stages: (_: any) => de_DeploymentStageStatusSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEdgePackagingJobResponse
 */
const de_DescribeEdgePackagingJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeEdgePackagingJobResponse => {
  return take(output, {
    CompilationJobName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgePackagingJobArn: __expectString,
    EdgePackagingJobName: __expectString,
    EdgePackagingJobStatus: __expectString,
    EdgePackagingJobStatusMessage: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArtifact: __expectString,
    ModelName: __expectString,
    ModelSignature: __expectString,
    ModelVersion: __expectString,
    OutputConfig: _json,
    PresetDeploymentOutput: _json,
    ResourceKey: __expectString,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointConfigOutput
 */
const de_DescribeEndpointConfigOutput = (output: any, context: __SerdeContext): DescribeEndpointConfigOutput => {
  return take(output, {
    AsyncInferenceConfig: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: _json,
    EndpointConfigArn: __expectString,
    EndpointConfigName: __expectString,
    ExplainerConfig: _json,
    KmsKeyId: __expectString,
    ProductionVariants: (_: any) => de_ProductionVariantList(_, context),
    ShadowProductionVariants: (_: any) => de_ProductionVariantList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeEndpointOutput
 */
const de_DescribeEndpointOutput = (output: any, context: __SerdeContext): DescribeEndpointOutput => {
  return take(output, {
    AsyncInferenceConfig: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: _json,
    EndpointArn: __expectString,
    EndpointConfigName: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    ExplainerConfig: _json,
    FailureReason: __expectString,
    LastDeploymentConfig: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PendingDeploymentSummary: (_: any) => de_PendingDeploymentSummary(_, context),
    ProductionVariants: (_: any) => de_ProductionVariantSummaryList(_, context),
    ShadowProductionVariants: (_: any) => de_ProductionVariantSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeExperimentResponse
 */
const de_DescribeExperimentResponse = (output: any, context: __SerdeContext): DescribeExperimentResponse => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    ExperimentArn: __expectString,
    ExperimentName: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFeatureGroupResponse
 */
const de_DescribeFeatureGroupResponse = (output: any, context: __SerdeContext): DescribeFeatureGroupResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventTimeFeatureName: __expectString,
    FailureReason: __expectString,
    FeatureDefinitions: _json,
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureGroupStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateStatus: _json,
    NextToken: __expectString,
    OfflineStoreConfig: _json,
    OfflineStoreStatus: _json,
    OnlineStoreConfig: _json,
    OnlineStoreTotalSizeBytes: __expectLong,
    RecordIdentifierFeatureName: __expectString,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFeatureMetadataResponse
 */
const de_DescribeFeatureMetadataResponse = (output: any, context: __SerdeContext): DescribeFeatureMetadataResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureName: __expectString,
    FeatureType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Parameters: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFlowDefinitionResponse
 */
const de_DescribeFlowDefinitionResponse = (output: any, context: __SerdeContext): DescribeFlowDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    FlowDefinitionArn: __expectString,
    FlowDefinitionName: __expectString,
    FlowDefinitionStatus: __expectString,
    HumanLoopActivationConfig: (_: any) => de_HumanLoopActivationConfig(_, context),
    HumanLoopConfig: _json,
    HumanLoopRequestSource: _json,
    OutputConfig: _json,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHubContentResponse
 */
const de_DescribeHubContentResponse = (output: any, context: __SerdeContext): DescribeHubContentResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DocumentSchemaVersion: __expectString,
    FailureReason: __expectString,
    HubArn: __expectString,
    HubContentArn: __expectString,
    HubContentDependencies: _json,
    HubContentDescription: __expectString,
    HubContentDisplayName: __expectString,
    HubContentDocument: __expectString,
    HubContentMarkdown: __expectString,
    HubContentName: __expectString,
    HubContentSearchKeywords: _json,
    HubContentStatus: __expectString,
    HubContentType: __expectString,
    HubContentVersion: __expectString,
    HubName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHubResponse
 */
const de_DescribeHubResponse = (output: any, context: __SerdeContext): DescribeHubResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    HubArn: __expectString,
    HubDescription: __expectString,
    HubDisplayName: __expectString,
    HubName: __expectString,
    HubSearchKeywords: _json,
    HubStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    S3StorageConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHumanTaskUiResponse
 */
const de_DescribeHumanTaskUiResponse = (output: any, context: __SerdeContext): DescribeHumanTaskUiResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HumanTaskUiArn: __expectString,
    HumanTaskUiName: __expectString,
    HumanTaskUiStatus: __expectString,
    UiTemplate: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeHyperParameterTuningJobResponse
 */
const de_DescribeHyperParameterTuningJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeHyperParameterTuningJobResponse => {
  return take(output, {
    Autotune: _json,
    BestTrainingJob: (_: any) => de_HyperParameterTrainingJobSummary(_, context),
    ConsumedResources: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    HyperParameterTuningEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HyperParameterTuningJobArn: __expectString,
    HyperParameterTuningJobConfig: (_: any) => de_HyperParameterTuningJobConfig(_, context),
    HyperParameterTuningJobName: __expectString,
    HyperParameterTuningJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectiveStatusCounters: _json,
    OverallBestTrainingJob: (_: any) => de_HyperParameterTrainingJobSummary(_, context),
    TrainingJobDefinition: _json,
    TrainingJobDefinitions: _json,
    TrainingJobStatusCounters: _json,
    TuningJobCompletionDetails: (_: any) => de_HyperParameterTuningJobCompletionDetails(_, context),
    WarmStartConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImageResponse
 */
const de_DescribeImageResponse = (output: any, context: __SerdeContext): DescribeImageResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    FailureReason: __expectString,
    ImageArn: __expectString,
    ImageName: __expectString,
    ImageStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeImageVersionResponse
 */
const de_DescribeImageVersionResponse = (output: any, context: __SerdeContext): DescribeImageVersionResponse => {
  return take(output, {
    BaseImage: __expectString,
    ContainerImage: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    Horovod: __expectBoolean,
    ImageArn: __expectString,
    ImageVersionArn: __expectString,
    ImageVersionStatus: __expectString,
    JobType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MLFramework: __expectString,
    Processor: __expectString,
    ProgrammingLang: __expectString,
    ReleaseNotes: __expectString,
    VendorGuidance: __expectString,
    Version: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInferenceExperimentResponse
 */
const de_DescribeInferenceExperimentResponse = (
  output: any,
  context: __SerdeContext
): DescribeInferenceExperimentResponse => {
  return take(output, {
    Arn: __expectString,
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataStorageConfig: _json,
    Description: __expectString,
    EndpointMetadata: _json,
    KmsKey: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelVariants: _json,
    Name: __expectString,
    RoleArn: __expectString,
    Schedule: (_: any) => de_InferenceExperimentSchedule(_, context),
    ShadowModeConfig: _json,
    Status: __expectString,
    StatusReason: __expectString,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeInferenceRecommendationsJobResponse
 */
const de_DescribeInferenceRecommendationsJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeInferenceRecommendationsJobResponse => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointPerformances: _json,
    FailureReason: __expectString,
    InferenceRecommendations: (_: any) => de_InferenceRecommendations(_, context),
    InputConfig: _json,
    JobArn: __expectString,
    JobDescription: __expectString,
    JobName: __expectString,
    JobType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
    Status: __expectString,
    StoppingConditions: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLabelingJobResponse
 */
const de_DescribeLabelingJobResponse = (output: any, context: __SerdeContext): DescribeLabelingJobResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    HumanTaskConfig: _json,
    InputConfig: _json,
    JobReferenceCode: __expectString,
    LabelAttributeName: __expectString,
    LabelCategoryConfigS3Uri: __expectString,
    LabelCounters: _json,
    LabelingJobAlgorithmsConfig: _json,
    LabelingJobArn: __expectString,
    LabelingJobName: __expectString,
    LabelingJobOutput: _json,
    LabelingJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OutputConfig: _json,
    RoleArn: __expectString,
    StoppingConditions: _json,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeLineageGroupResponse
 */
const de_DescribeLineageGroupResponse = (output: any, context: __SerdeContext): DescribeLineageGroupResponse => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    LineageGroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelBiasJobDefinitionResponse
 */
const de_DescribeModelBiasJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeModelBiasJobDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobDefinitionArn: __expectString,
    JobDefinitionName: __expectString,
    JobResources: _json,
    ModelBiasAppSpecification: _json,
    ModelBiasBaselineConfig: _json,
    ModelBiasJobInput: (_: any) => de_ModelBiasJobInput(_, context),
    ModelBiasJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: __expectString,
    StoppingCondition: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelCardExportJobResponse
 */
const de_DescribeModelCardExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeModelCardExportJobResponse => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExportArtifacts: _json,
    FailureReason: __expectString,
    LastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardExportJobArn: __expectString,
    ModelCardExportJobName: __expectString,
    ModelCardName: __expectString,
    ModelCardVersion: __expectInt32,
    OutputConfig: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelCardResponse
 */
const de_DescribeModelCardResponse = (output: any, context: __SerdeContext): DescribeModelCardResponse => {
  return take(output, {
    Content: __expectString,
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardProcessingStatus: __expectString,
    ModelCardStatus: __expectString,
    ModelCardVersion: __expectInt32,
    SecurityConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelExplainabilityJobDefinitionResponse
 */
const de_DescribeModelExplainabilityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeModelExplainabilityJobDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobDefinitionArn: __expectString,
    JobDefinitionName: __expectString,
    JobResources: _json,
    ModelExplainabilityAppSpecification: _json,
    ModelExplainabilityBaselineConfig: _json,
    ModelExplainabilityJobInput: (_: any) => de_ModelExplainabilityJobInput(_, context),
    ModelExplainabilityJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: __expectString,
    StoppingCondition: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelOutput
 */
const de_DescribeModelOutput = (output: any, context: __SerdeContext): DescribeModelOutput => {
  return take(output, {
    Containers: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeploymentRecommendation: _json,
    EnableNetworkIsolation: __expectBoolean,
    ExecutionRoleArn: __expectString,
    InferenceExecutionConfig: _json,
    ModelArn: __expectString,
    ModelName: __expectString,
    PrimaryContainer: _json,
    VpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelPackageGroupOutput
 */
const de_DescribeModelPackageGroupOutput = (output: any, context: __SerdeContext): DescribeModelPackageGroupOutput => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelPackageGroupArn: __expectString,
    ModelPackageGroupDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageGroupStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelPackageOutput
 */
const de_DescribeModelPackageOutput = (output: any, context: __SerdeContext): DescribeModelPackageOutput => {
  return take(output, {
    AdditionalInferenceSpecifications: _json,
    ApprovalDescription: __expectString,
    CertifyForMarketplace: __expectBoolean,
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomerMetadataProperties: _json,
    Domain: __expectString,
    DriftCheckBaselines: _json,
    InferenceSpecification: _json,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataProperties: _json,
    ModelApprovalStatus: __expectString,
    ModelMetrics: _json,
    ModelPackageArn: __expectString,
    ModelPackageDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageName: __expectString,
    ModelPackageStatus: __expectString,
    ModelPackageStatusDetails: _json,
    ModelPackageVersion: __expectInt32,
    SamplePayloadUrl: __expectString,
    SourceAlgorithmSpecification: _json,
    Task: __expectString,
    ValidationSpecification: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeModelQualityJobDefinitionResponse
 */
const de_DescribeModelQualityJobDefinitionResponse = (
  output: any,
  context: __SerdeContext
): DescribeModelQualityJobDefinitionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobDefinitionArn: __expectString,
    JobDefinitionName: __expectString,
    JobResources: _json,
    ModelQualityAppSpecification: _json,
    ModelQualityBaselineConfig: _json,
    ModelQualityJobInput: (_: any) => de_ModelQualityJobInput(_, context),
    ModelQualityJobOutputConfig: _json,
    NetworkConfig: _json,
    RoleArn: __expectString,
    StoppingCondition: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMonitoringScheduleResponse
 */
const de_DescribeMonitoringScheduleResponse = (
  output: any,
  context: __SerdeContext
): DescribeMonitoringScheduleResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastMonitoringExecutionSummary: (_: any) => de_MonitoringExecutionSummary(_, context),
    MonitoringScheduleArn: __expectString,
    MonitoringScheduleConfig: (_: any) => de_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: __expectString,
    MonitoringScheduleStatus: __expectString,
    MonitoringType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceLifecycleConfigOutput
 */
const de_DescribeNotebookInstanceLifecycleConfigOutput = (
  output: any,
  context: __SerdeContext
): DescribeNotebookInstanceLifecycleConfigOutput => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotebookInstanceLifecycleConfigArn: __expectString,
    NotebookInstanceLifecycleConfigName: __expectString,
    OnCreate: _json,
    OnStart: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeNotebookInstanceOutput
 */
const de_DescribeNotebookInstanceOutput = (output: any, context: __SerdeContext): DescribeNotebookInstanceOutput => {
  return take(output, {
    AcceleratorTypes: _json,
    AdditionalCodeRepositories: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultCodeRepository: __expectString,
    DirectInternetAccess: __expectString,
    FailureReason: __expectString,
    InstanceMetadataServiceConfiguration: _json,
    InstanceType: __expectString,
    KmsKeyId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NetworkInterfaceId: __expectString,
    NotebookInstanceArn: __expectString,
    NotebookInstanceLifecycleConfigName: __expectString,
    NotebookInstanceName: __expectString,
    NotebookInstanceStatus: __expectString,
    PlatformIdentifier: __expectString,
    RoleArn: __expectString,
    RootAccess: __expectString,
    SecurityGroups: _json,
    SubnetId: __expectString,
    Url: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePipelineDefinitionForExecutionResponse
 */
const de_DescribePipelineDefinitionForExecutionResponse = (
  output: any,
  context: __SerdeContext
): DescribePipelineDefinitionForExecutionResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PipelineDefinition: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePipelineExecutionResponse
 */
const de_DescribePipelineExecutionResponse = (
  output: any,
  context: __SerdeContext
): DescribePipelineExecutionResponse => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParallelismConfiguration: _json,
    PipelineArn: __expectString,
    PipelineExecutionArn: __expectString,
    PipelineExecutionDescription: __expectString,
    PipelineExecutionDisplayName: __expectString,
    PipelineExecutionStatus: __expectString,
    PipelineExperimentConfig: _json,
    SelectiveExecutionConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePipelineResponse
 */
const de_DescribePipelineResponse = (output: any, context: __SerdeContext): DescribePipelineResponse => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastRunTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParallelismConfiguration: _json,
    PipelineArn: __expectString,
    PipelineDefinition: __expectString,
    PipelineDescription: __expectString,
    PipelineDisplayName: __expectString,
    PipelineName: __expectString,
    PipelineStatus: __expectString,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProcessingJobResponse
 */
const de_DescribeProcessingJobResponse = (output: any, context: __SerdeContext): DescribeProcessingJobResponse => {
  return take(output, {
    AppSpecification: _json,
    AutoMLJobArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Environment: _json,
    ExitMessage: __expectString,
    ExperimentConfig: _json,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringScheduleArn: __expectString,
    NetworkConfig: _json,
    ProcessingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProcessingInputs: _json,
    ProcessingJobArn: __expectString,
    ProcessingJobName: __expectString,
    ProcessingJobStatus: __expectString,
    ProcessingOutputConfig: _json,
    ProcessingResources: _json,
    ProcessingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
    StoppingCondition: _json,
    TrainingJobArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeProjectOutput
 */
const de_DescribeProjectOutput = (output: any, context: __SerdeContext): DescribeProjectOutput => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectArn: __expectString,
    ProjectDescription: __expectString,
    ProjectId: __expectString,
    ProjectName: __expectString,
    ProjectStatus: __expectString,
    ServiceCatalogProvisionedProductDetails: _json,
    ServiceCatalogProvisioningDetails: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSpaceResponse
 */
const de_DescribeSpaceResponse = (output: any, context: __SerdeContext): DescribeSpaceResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    FailureReason: __expectString,
    HomeEfsFileSystemUid: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SpaceArn: __expectString,
    SpaceName: __expectString,
    SpaceSettings: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStudioLifecycleConfigResponse
 */
const de_DescribeStudioLifecycleConfigResponse = (
  output: any,
  context: __SerdeContext
): DescribeStudioLifecycleConfigResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StudioLifecycleConfigAppType: __expectString,
    StudioLifecycleConfigArn: __expectString,
    StudioLifecycleConfigContent: __expectString,
    StudioLifecycleConfigName: __expectString,
  }) as any;
};

// de_DescribeSubscribedWorkteamResponse omitted.

/**
 * deserializeAws_json1_1DescribeTrainingJobResponse
 */
const de_DescribeTrainingJobResponse = (output: any, context: __SerdeContext): DescribeTrainingJobResponse => {
  return take(output, {
    AlgorithmSpecification: _json,
    AutoMLJobArn: __expectString,
    BillableTimeInSeconds: __expectInt32,
    CheckpointConfig: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DebugHookConfig: _json,
    DebugRuleConfigurations: _json,
    DebugRuleEvaluationStatuses: (_: any) => de_DebugRuleEvaluationStatuses(_, context),
    EnableInterContainerTrafficEncryption: __expectBoolean,
    EnableManagedSpotTraining: __expectBoolean,
    EnableNetworkIsolation: __expectBoolean,
    Environment: _json,
    ExperimentConfig: _json,
    FailureReason: __expectString,
    FinalMetricDataList: (_: any) => de_FinalMetricDataList(_, context),
    HyperParameters: _json,
    InputDataConfig: _json,
    LabelingJobArn: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArtifacts: _json,
    OutputDataConfig: _json,
    ProfilerConfig: _json,
    ProfilerRuleConfigurations: _json,
    ProfilerRuleEvaluationStatuses: (_: any) => de_ProfilerRuleEvaluationStatuses(_, context),
    ProfilingStatus: __expectString,
    ResourceConfig: _json,
    RetryStrategy: _json,
    RoleArn: __expectString,
    SecondaryStatus: __expectString,
    SecondaryStatusTransitions: (_: any) => de_SecondaryStatusTransitions(_, context),
    StoppingCondition: _json,
    TensorBoardOutputConfig: _json,
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingJobArn: __expectString,
    TrainingJobName: __expectString,
    TrainingJobStatus: __expectString,
    TrainingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingTimeInSeconds: __expectInt32,
    TuningJobArn: __expectString,
    VpcConfig: _json,
    WarmPoolStatus: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTransformJobResponse
 */
const de_DescribeTransformJobResponse = (output: any, context: __SerdeContext): DescribeTransformJobResponse => {
  return take(output, {
    AutoMLJobArn: __expectString,
    BatchStrategy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: _json,
    DataProcessing: _json,
    Environment: _json,
    ExperimentConfig: _json,
    FailureReason: __expectString,
    LabelingJobArn: __expectString,
    MaxConcurrentTransforms: __expectInt32,
    MaxPayloadInMB: __expectInt32,
    ModelClientConfig: _json,
    ModelName: __expectString,
    TransformEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransformInput: _json,
    TransformJobArn: __expectString,
    TransformJobName: __expectString,
    TransformJobStatus: __expectString,
    TransformOutput: _json,
    TransformResources: _json,
    TransformStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTrialComponentResponse
 */
const de_DescribeTrialComponentResponse = (output: any, context: __SerdeContext): DescribeTrialComponentResponse => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputArtifacts: _json,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    MetadataProperties: _json,
    Metrics: (_: any) => de_TrialComponentMetricSummaries(_, context),
    OutputArtifacts: _json,
    Parameters: (_: any) => de_TrialComponentParameters(_, context),
    Source: _json,
    Sources: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: _json,
    TrialComponentArn: __expectString,
    TrialComponentName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeTrialResponse
 */
const de_DescribeTrialResponse = (output: any, context: __SerdeContext): DescribeTrialResponse => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    ExperimentName: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataProperties: _json,
    Source: _json,
    TrialArn: __expectString,
    TrialName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeUserProfileResponse
 */
const de_DescribeUserProfileResponse = (output: any, context: __SerdeContext): DescribeUserProfileResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    FailureReason: __expectString,
    HomeEfsFileSystemUid: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SingleSignOnUserIdentifier: __expectString,
    SingleSignOnUserValue: __expectString,
    Status: __expectString,
    UserProfileArn: __expectString,
    UserProfileName: __expectString,
    UserSettings: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkforceResponse
 */
const de_DescribeWorkforceResponse = (output: any, context: __SerdeContext): DescribeWorkforceResponse => {
  return take(output, {
    Workforce: (_: any) => de_Workforce(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWorkteamResponse
 */
const de_DescribeWorkteamResponse = (output: any, context: __SerdeContext): DescribeWorkteamResponse => {
  return take(output, {
    Workteam: (_: any) => de_Workteam(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceDeploymentSummaries
 */
const de_DeviceDeploymentSummaries = (output: any, context: __SerdeContext): DeviceDeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceDeploymentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceDeploymentSummary
 */
const de_DeviceDeploymentSummary = (output: any, context: __SerdeContext): DeviceDeploymentSummary => {
  return take(output, {
    DeployedStageName: __expectString,
    DeploymentStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceArn: __expectString,
    DeviceDeploymentStatus: __expectString,
    DeviceDeploymentStatusMessage: __expectString,
    DeviceFleetName: __expectString,
    DeviceName: __expectString,
    EdgeDeploymentPlanArn: __expectString,
    EdgeDeploymentPlanName: __expectString,
    StageName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DeviceFleetSummaries
 */
const de_DeviceFleetSummaries = (output: any, context: __SerdeContext): DeviceFleetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceFleetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceFleetSummary
 */
const de_DeviceFleetSummary = (output: any, context: __SerdeContext): DeviceFleetSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceFleetArn: __expectString,
    DeviceFleetName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DeviceNames omitted.

// de_DeviceSelectionConfig omitted.

// de_DeviceStats omitted.

/**
 * deserializeAws_json1_1DeviceSummaries
 */
const de_DeviceSummaries = (output: any, context: __SerdeContext): DeviceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceSummary
 */
const de_DeviceSummary = (output: any, context: __SerdeContext): DeviceSummary => {
  return take(output, {
    AgentVersion: __expectString,
    Description: __expectString,
    DeviceArn: __expectString,
    DeviceFleetName: __expectString,
    DeviceName: __expectString,
    IotThingName: __expectString,
    LatestHeartbeat: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Models: _json,
    RegistrationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DisableSagemakerServicecatalogPortfolioOutput omitted.

// de_DisassociateTrialComponentResponse omitted.

/**
 * deserializeAws_json1_1DomainDetails
 */
const de_DomainDetails = (output: any, context: __SerdeContext): DomainDetails => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainArn: __expectString,
    DomainId: __expectString,
    DomainName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DomainList
 */
const de_DomainList = (output: any, context: __SerdeContext): DomainDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainDetails(entry, context);
    });
  return retVal;
};

// de_DomainSecurityGroupIds omitted.

// de_DomainSettings omitted.

// de_DriftCheckBaselines omitted.

// de_DriftCheckBias omitted.

// de_DriftCheckExplainability omitted.

// de_DriftCheckModelDataQuality omitted.

// de_DriftCheckModelQuality omitted.

// de_Edge omitted.

// de_EdgeDeploymentConfig omitted.

// de_EdgeDeploymentModelConfig omitted.

// de_EdgeDeploymentModelConfigs omitted.

/**
 * deserializeAws_json1_1EdgeDeploymentPlanSummaries
 */
const de_EdgeDeploymentPlanSummaries = (output: any, context: __SerdeContext): EdgeDeploymentPlanSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgeDeploymentPlanSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EdgeDeploymentPlanSummary
 */
const de_EdgeDeploymentPlanSummary = (output: any, context: __SerdeContext): EdgeDeploymentPlanSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeviceFleetName: __expectString,
    EdgeDeploymentFailed: __expectInt32,
    EdgeDeploymentPending: __expectInt32,
    EdgeDeploymentPlanArn: __expectString,
    EdgeDeploymentPlanName: __expectString,
    EdgeDeploymentSuccess: __expectInt32,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeDeploymentStatus
 */
const de_EdgeDeploymentStatus = (output: any, context: __SerdeContext): EdgeDeploymentStatus => {
  return take(output, {
    EdgeDeploymentFailedInStage: __expectInt32,
    EdgeDeploymentPendingInStage: __expectInt32,
    EdgeDeploymentStageStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgeDeploymentStatusMessage: __expectString,
    EdgeDeploymentSuccessInStage: __expectInt32,
    StageStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeModel
 */
const de_EdgeModel = (output: any, context: __SerdeContext): EdgeModel => {
  return take(output, {
    LatestInference: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestSampleTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelName: __expectString,
    ModelVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EdgeModels
 */
const de_EdgeModels = (output: any, context: __SerdeContext): EdgeModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgeModel(entry, context);
    });
  return retVal;
};

// de_EdgeModelStat omitted.

// de_EdgeModelStats omitted.

// de_EdgeModelSummaries omitted.

// de_EdgeModelSummary omitted.

// de_EdgeOutputConfig omitted.

/**
 * deserializeAws_json1_1EdgePackagingJobSummaries
 */
const de_EdgePackagingJobSummaries = (output: any, context: __SerdeContext): EdgePackagingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EdgePackagingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EdgePackagingJobSummary
 */
const de_EdgePackagingJobSummary = (output: any, context: __SerdeContext): EdgePackagingJobSummary => {
  return take(output, {
    CompilationJobName: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgePackagingJobArn: __expectString,
    EdgePackagingJobName: __expectString,
    EdgePackagingJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelName: __expectString,
    ModelVersion: __expectString,
  }) as any;
};

// de_EdgePresetDeploymentOutput omitted.

// de_Edges omitted.

// de_EMRStepMetadata omitted.

// de_EnableSagemakerServicecatalogPortfolioOutput omitted.

/**
 * deserializeAws_json1_1Endpoint
 */
const de_Endpoint = (output: any, context: __SerdeContext): Endpoint => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataCaptureConfig: _json,
    EndpointArn: __expectString,
    EndpointConfigName: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringSchedules: (_: any) => de_MonitoringScheduleList(_, context),
    ProductionVariants: (_: any) => de_ProductionVariantSummaryList(_, context),
    ShadowProductionVariants: (_: any) => de_ProductionVariantSummaryList(_, context),
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointConfigSummary
 */
const de_EndpointConfigSummary = (output: any, context: __SerdeContext): EndpointConfigSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointConfigArn: __expectString,
    EndpointConfigName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointConfigSummaryList
 */
const de_EndpointConfigSummaryList = (output: any, context: __SerdeContext): EndpointConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointConfigSummary(entry, context);
    });
  return retVal;
};

// de_EndpointInfo omitted.

/**
 * deserializeAws_json1_1EndpointInput
 */
const de_EndpointInput = (output: any, context: __SerdeContext): EndpointInput => {
  return take(output, {
    EndTimeOffset: __expectString,
    EndpointName: __expectString,
    FeaturesAttribute: __expectString,
    InferenceAttribute: __expectString,
    LocalPath: __expectString,
    ProbabilityAttribute: __expectString,
    ProbabilityThresholdAttribute: __limitedParseDouble,
    S3DataDistributionType: __expectString,
    S3InputMode: __expectString,
    StartTimeOffset: __expectString,
  }) as any;
};

// de_EndpointInputConfiguration omitted.

// de_EndpointInputConfigurations omitted.

// de_EndpointMetadata omitted.

// de_EndpointOutputConfiguration omitted.

// de_EndpointPerformance omitted.

// de_EndpointPerformances omitted.

// de_Endpoints omitted.

/**
 * deserializeAws_json1_1EndpointSummary
 */
const de_EndpointSummary = (output: any, context: __SerdeContext): EndpointSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointArn: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1EndpointSummaryList
 */
const de_EndpointSummaryList = (output: any, context: __SerdeContext): EndpointSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EndpointSummary(entry, context);
    });
  return retVal;
};

// de_EnvironmentMap omitted.

// de_EnvironmentParameter omitted.

// de_EnvironmentParameterRanges omitted.

// de_EnvironmentParameters omitted.

/**
 * deserializeAws_json1_1Experiment
 */
const de_Experiment = (output: any, context: __SerdeContext): Experiment => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    ExperimentArn: __expectString,
    ExperimentName: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Source: _json,
    Tags: _json,
  }) as any;
};

// de_ExperimentConfig omitted.

// de_ExperimentSource omitted.

/**
 * deserializeAws_json1_1ExperimentSummaries
 */
const de_ExperimentSummaries = (output: any, context: __SerdeContext): ExperimentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperimentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExperimentSummary
 */
const de_ExperimentSummary = (output: any, context: __SerdeContext): ExperimentSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    ExperimentArn: __expectString,
    ExperimentName: __expectString,
    ExperimentSource: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_Explainability omitted.

// de_ExplainerConfig omitted.

// de_FailStepMetadata omitted.

// de_FeatureDefinition omitted.

// de_FeatureDefinitions omitted.

/**
 * deserializeAws_json1_1FeatureGroup
 */
const de_FeatureGroup = (output: any, context: __SerdeContext): FeatureGroup => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EventTimeFeatureName: __expectString,
    FailureReason: __expectString,
    FeatureDefinitions: _json,
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureGroupStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateStatus: _json,
    OfflineStoreConfig: _json,
    OfflineStoreStatus: _json,
    OnlineStoreConfig: _json,
    RecordIdentifierFeatureName: __expectString,
    RoleArn: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1FeatureGroupSummaries
 */
const de_FeatureGroupSummaries = (output: any, context: __SerdeContext): FeatureGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FeatureGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FeatureGroupSummary
 */
const de_FeatureGroupSummary = (output: any, context: __SerdeContext): FeatureGroupSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureGroupStatus: __expectString,
    OfflineStoreStatus: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1FeatureMetadata
 */
const de_FeatureMetadata = (output: any, context: __SerdeContext): FeatureMetadata => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    FeatureGroupArn: __expectString,
    FeatureGroupName: __expectString,
    FeatureName: __expectString,
    FeatureType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Parameters: _json,
  }) as any;
};

// de_FeatureParameter omitted.

// de_FeatureParameters omitted.

// de_FileSource omitted.

// de_FileSystemConfig omitted.

// de_FileSystemDataSource omitted.

// de_FillingTransformationMap omitted.

// de_FillingTransformations omitted.

/**
 * deserializeAws_json1_1FinalAutoMLJobObjectiveMetric
 */
const de_FinalAutoMLJobObjectiveMetric = (output: any, context: __SerdeContext): FinalAutoMLJobObjectiveMetric => {
  return take(output, {
    MetricName: __expectString,
    StandardMetricName: __expectString,
    Type: __expectString,
    Value: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1FinalHyperParameterTuningJobObjectiveMetric
 */
const de_FinalHyperParameterTuningJobObjectiveMetric = (
  output: any,
  context: __SerdeContext
): FinalHyperParameterTuningJobObjectiveMetric => {
  return take(output, {
    MetricName: __expectString,
    Type: __expectString,
    Value: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1FinalMetricDataList
 */
const de_FinalMetricDataList = (output: any, context: __SerdeContext): MetricData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricData(entry, context);
    });
  return retVal;
};

// de_FlowDefinitionOutputConfig omitted.

/**
 * deserializeAws_json1_1FlowDefinitionSummaries
 */
const de_FlowDefinitionSummaries = (output: any, context: __SerdeContext): FlowDefinitionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FlowDefinitionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FlowDefinitionSummary
 */
const de_FlowDefinitionSummary = (output: any, context: __SerdeContext): FlowDefinitionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    FlowDefinitionArn: __expectString,
    FlowDefinitionName: __expectString,
    FlowDefinitionStatus: __expectString,
  }) as any;
};

// de_FlowDefinitionTaskKeywords omitted.

// de_ForecastQuantiles omitted.

/**
 * deserializeAws_json1_1GetDeviceFleetReportResponse
 */
const de_GetDeviceFleetReportResponse = (output: any, context: __SerdeContext): GetDeviceFleetReportResponse => {
  return take(output, {
    AgentVersions: _json,
    Description: __expectString,
    DeviceFleetArn: __expectString,
    DeviceFleetName: __expectString,
    DeviceStats: _json,
    ModelStats: _json,
    OutputConfig: _json,
    ReportGenerated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_GetLineageGroupPolicyResponse omitted.

// de_GetModelPackageGroupPolicyOutput omitted.

// de_GetSagemakerServicecatalogPortfolioStatusOutput omitted.

// de_GetSearchSuggestionsResponse omitted.

// de_GitConfig omitted.

// de_GroupingAttributeNames omitted.

// de_Groups omitted.

// de_HookParameters omitted.

// de_HubContentDependency omitted.

// de_HubContentDependencyList omitted.

/**
 * deserializeAws_json1_1HubContentInfo
 */
const de_HubContentInfo = (output: any, context: __SerdeContext): HubContentInfo => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DocumentSchemaVersion: __expectString,
    HubContentArn: __expectString,
    HubContentDescription: __expectString,
    HubContentDisplayName: __expectString,
    HubContentName: __expectString,
    HubContentSearchKeywords: _json,
    HubContentStatus: __expectString,
    HubContentType: __expectString,
    HubContentVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1HubContentInfoList
 */
const de_HubContentInfoList = (output: any, context: __SerdeContext): HubContentInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HubContentInfo(entry, context);
    });
  return retVal;
};

// de_HubContentSearchKeywordList omitted.

/**
 * deserializeAws_json1_1HubInfo
 */
const de_HubInfo = (output: any, context: __SerdeContext): HubInfo => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HubArn: __expectString,
    HubDescription: __expectString,
    HubDisplayName: __expectString,
    HubName: __expectString,
    HubSearchKeywords: _json,
    HubStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1HubInfoList
 */
const de_HubInfoList = (output: any, context: __SerdeContext): HubInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HubInfo(entry, context);
    });
  return retVal;
};

// de_HubS3StorageConfig omitted.

// de_HubSearchKeywordList omitted.

/**
 * deserializeAws_json1_1HumanLoopActivationConditionsConfig
 */
const de_HumanLoopActivationConditionsConfig = (
  output: any,
  context: __SerdeContext
): HumanLoopActivationConditionsConfig => {
  return take(output, {
    HumanLoopActivationConditions: (_: any) => new __LazyJsonString(_),
  }) as any;
};

/**
 * deserializeAws_json1_1HumanLoopActivationConfig
 */
const de_HumanLoopActivationConfig = (output: any, context: __SerdeContext): HumanLoopActivationConfig => {
  return take(output, {
    HumanLoopActivationConditionsConfig: (_: any) => de_HumanLoopActivationConditionsConfig(_, context),
  }) as any;
};

// de_HumanLoopConfig omitted.

// de_HumanLoopRequestSource omitted.

// de_HumanTaskConfig omitted.

/**
 * deserializeAws_json1_1HumanTaskUiSummaries
 */
const de_HumanTaskUiSummaries = (output: any, context: __SerdeContext): HumanTaskUiSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HumanTaskUiSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HumanTaskUiSummary
 */
const de_HumanTaskUiSummary = (output: any, context: __SerdeContext): HumanTaskUiSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HumanTaskUiArn: __expectString,
    HumanTaskUiName: __expectString,
  }) as any;
};

// de_HyperbandStrategyConfig omitted.

// de_HyperParameterAlgorithmSpecification omitted.

// de_HyperParameters omitted.

// de_HyperParameterSpecification omitted.

// de_HyperParameterSpecifications omitted.

// de_HyperParameterTrainingJobDefinition omitted.

// de_HyperParameterTrainingJobDefinitions omitted.

// de_HyperParameterTrainingJobEnvironmentMap omitted.

/**
 * deserializeAws_json1_1HyperParameterTrainingJobSummaries
 */
const de_HyperParameterTrainingJobSummaries = (
  output: any,
  context: __SerdeContext
): HyperParameterTrainingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HyperParameterTrainingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HyperParameterTrainingJobSummary
 */
const de_HyperParameterTrainingJobSummary = (
  output: any,
  context: __SerdeContext
): HyperParameterTrainingJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    FinalHyperParameterTuningJobObjectiveMetric: (_: any) => de_FinalHyperParameterTuningJobObjectiveMetric(_, context),
    ObjectiveStatus: __expectString,
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingJobArn: __expectString,
    TrainingJobDefinitionName: __expectString,
    TrainingJobName: __expectString,
    TrainingJobStatus: __expectString,
    TrainingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TunedHyperParameters: _json,
    TuningJobName: __expectString,
  }) as any;
};

// de_HyperParameterTuningInstanceConfig omitted.

// de_HyperParameterTuningInstanceConfigs omitted.

/**
 * deserializeAws_json1_1HyperParameterTuningJobCompletionDetails
 */
const de_HyperParameterTuningJobCompletionDetails = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobCompletionDetails => {
  return take(output, {
    ConvergenceDetectedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NumberOfTrainingJobsObjectiveNotImproving: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobConfig
 */
const de_HyperParameterTuningJobConfig = (output: any, context: __SerdeContext): HyperParameterTuningJobConfig => {
  return take(output, {
    HyperParameterTuningJobObjective: _json,
    ParameterRanges: _json,
    RandomSeed: __expectInt32,
    ResourceLimits: _json,
    Strategy: __expectString,
    StrategyConfig: _json,
    TrainingJobEarlyStoppingType: __expectString,
    TuningJobCompletionCriteria: (_: any) => de_TuningJobCompletionCriteria(_, context),
  }) as any;
};

// de_HyperParameterTuningJobConsumedResources omitted.

// de_HyperParameterTuningJobObjective omitted.

// de_HyperParameterTuningJobObjectives omitted.

/**
 * deserializeAws_json1_1HyperParameterTuningJobSearchEntity
 */
const de_HyperParameterTuningJobSearchEntity = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobSearchEntity => {
  return take(output, {
    BestTrainingJob: (_: any) => de_HyperParameterTrainingJobSummary(_, context),
    ConsumedResources: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    HyperParameterTuningEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HyperParameterTuningJobArn: __expectString,
    HyperParameterTuningJobConfig: (_: any) => de_HyperParameterTuningJobConfig(_, context),
    HyperParameterTuningJobName: __expectString,
    HyperParameterTuningJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectiveStatusCounters: _json,
    OverallBestTrainingJob: (_: any) => de_HyperParameterTrainingJobSummary(_, context),
    Tags: _json,
    TrainingJobDefinition: _json,
    TrainingJobDefinitions: _json,
    TrainingJobStatusCounters: _json,
    TuningJobCompletionDetails: (_: any) => de_HyperParameterTuningJobCompletionDetails(_, context),
    WarmStartConfig: _json,
  }) as any;
};

// de_HyperParameterTuningJobStrategyConfig omitted.

/**
 * deserializeAws_json1_1HyperParameterTuningJobSummaries
 */
const de_HyperParameterTuningJobSummaries = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_HyperParameterTuningJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobSummary
 */
const de_HyperParameterTuningJobSummary = (output: any, context: __SerdeContext): HyperParameterTuningJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HyperParameterTuningEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HyperParameterTuningJobArn: __expectString,
    HyperParameterTuningJobName: __expectString,
    HyperParameterTuningJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ObjectiveStatusCounters: _json,
    ResourceLimits: _json,
    Strategy: __expectString,
    TrainingJobStatusCounters: _json,
  }) as any;
};

// de_HyperParameterTuningJobWarmStartConfig omitted.

// de_HyperParameterTuningResourceConfig omitted.

// de_IamIdentity omitted.

/**
 * deserializeAws_json1_1Image
 */
const de_Image = (output: any, context: __SerdeContext): Image => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DisplayName: __expectString,
    FailureReason: __expectString,
    ImageArn: __expectString,
    ImageName: __expectString,
    ImageStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ImageClassificationJobConfig omitted.

// de_ImageConfig omitted.

/**
 * deserializeAws_json1_1Images
 */
const de_Images = (output: any, context: __SerdeContext): Image[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Image(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ImageVersion
 */
const de_ImageVersion = (output: any, context: __SerdeContext): ImageVersion => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    ImageArn: __expectString,
    ImageVersionArn: __expectString,
    ImageVersionStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Version: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ImageVersions
 */
const de_ImageVersions = (output: any, context: __SerdeContext): ImageVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageVersion(entry, context);
    });
  return retVal;
};

// de_ImportHubContentResponse omitted.

// de_InferenceExecutionConfig omitted.

// de_InferenceExperimentDataStorageConfig omitted.

/**
 * deserializeAws_json1_1InferenceExperimentList
 */
const de_InferenceExperimentList = (output: any, context: __SerdeContext): InferenceExperimentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceExperimentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceExperimentSchedule
 */
const de_InferenceExperimentSchedule = (output: any, context: __SerdeContext): InferenceExperimentSchedule => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceExperimentSummary
 */
const de_InferenceExperimentSummary = (output: any, context: __SerdeContext): InferenceExperimentSummary => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Name: __expectString,
    RoleArn: __expectString,
    Schedule: (_: any) => de_InferenceExperimentSchedule(_, context),
    Status: __expectString,
    StatusReason: __expectString,
    Type: __expectString,
  }) as any;
};

// de_InferenceMetrics omitted.

/**
 * deserializeAws_json1_1InferenceRecommendation
 */
const de_InferenceRecommendation = (output: any, context: __SerdeContext): InferenceRecommendation => {
  return take(output, {
    EndpointConfiguration: _json,
    InvocationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InvocationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metrics: (_: any) => de_RecommendationMetrics(_, context),
    ModelConfiguration: _json,
    RecommendationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceRecommendations
 */
const de_InferenceRecommendations = (output: any, context: __SerdeContext): InferenceRecommendation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceRecommendation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceRecommendationsJob
 */
const de_InferenceRecommendationsJob = (output: any, context: __SerdeContext): InferenceRecommendationsJob => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    JobArn: __expectString,
    JobDescription: __expectString,
    JobName: __expectString,
    JobType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelName: __expectString,
    ModelPackageVersionArn: __expectString,
    RoleArn: __expectString,
    SamplePayloadUrl: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceRecommendationsJobs
 */
const de_InferenceRecommendationsJobs = (output: any, context: __SerdeContext): InferenceRecommendationsJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceRecommendationsJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InferenceRecommendationsJobStep
 */
const de_InferenceRecommendationsJobStep = (output: any, context: __SerdeContext): InferenceRecommendationsJobStep => {
  return take(output, {
    InferenceBenchmark: (_: any) => de_RecommendationJobInferenceBenchmark(_, context),
    JobName: __expectString,
    Status: __expectString,
    StepType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1InferenceRecommendationsJobSteps
 */
const de_InferenceRecommendationsJobSteps = (
  output: any,
  context: __SerdeContext
): InferenceRecommendationsJobStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InferenceRecommendationsJobStep(entry, context);
    });
  return retVal;
};

// de_InferenceSpecification omitted.

// de_InputConfig omitted.

// de_InputDataConfig omitted.

// de_InputModes omitted.

// de_InstanceGroup omitted.

// de_InstanceGroupNames omitted.

// de_InstanceGroups omitted.

// de_InstanceMetadataServiceConfiguration omitted.

// de_IntegerParameterRange omitted.

// de_IntegerParameterRanges omitted.

// de_IntegerParameterRangeSpecification omitted.

// de_JsonContentTypes omitted.

// de_JupyterServerAppSettings omitted.

// de_KernelGatewayAppSettings omitted.

// de_KernelGatewayImageConfig omitted.

// de_KernelSpec omitted.

// de_KernelSpecs omitted.

// de_LabelCounters omitted.

// de_LabelCountersForWorkteam omitted.

// de_LabelingJobAlgorithmsConfig omitted.

// de_LabelingJobDataAttributes omitted.

// de_LabelingJobDataSource omitted.

/**
 * deserializeAws_json1_1LabelingJobForWorkteamSummary
 */
const de_LabelingJobForWorkteamSummary = (output: any, context: __SerdeContext): LabelingJobForWorkteamSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobReferenceCode: __expectString,
    LabelCounters: _json,
    LabelingJobName: __expectString,
    NumberOfHumanWorkersPerDataObject: __expectInt32,
    WorkRequesterAccountId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobForWorkteamSummaryList
 */
const de_LabelingJobForWorkteamSummaryList = (
  output: any,
  context: __SerdeContext
): LabelingJobForWorkteamSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LabelingJobForWorkteamSummary(entry, context);
    });
  return retVal;
};

// de_LabelingJobInputConfig omitted.

// de_LabelingJobOutput omitted.

// de_LabelingJobOutputConfig omitted.

// de_LabelingJobResourceConfig omitted.

// de_LabelingJobS3DataSource omitted.

// de_LabelingJobSnsDataSource omitted.

// de_LabelingJobStoppingConditions omitted.

/**
 * deserializeAws_json1_1LabelingJobSummary
 */
const de_LabelingJobSummary = (output: any, context: __SerdeContext): LabelingJobSummary => {
  return take(output, {
    AnnotationConsolidationLambdaArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    InputConfig: _json,
    LabelCounters: _json,
    LabelingJobArn: __expectString,
    LabelingJobName: __expectString,
    LabelingJobOutput: _json,
    LabelingJobStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PreHumanTaskLambdaArn: __expectString,
    WorkteamArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LabelingJobSummaryList
 */
const de_LabelingJobSummaryList = (output: any, context: __SerdeContext): LabelingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LabelingJobSummary(entry, context);
    });
  return retVal;
};

// de_LambdaStepMetadata omitted.

// de_LastUpdateStatus omitted.

// de_LifecycleConfigArns omitted.

// de_LineageEntityParameters omitted.

/**
 * deserializeAws_json1_1LineageGroupSummaries
 */
const de_LineageGroupSummaries = (output: any, context: __SerdeContext): LineageGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LineageGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LineageGroupSummary
 */
const de_LineageGroupSummary = (output: any, context: __SerdeContext): LineageGroupSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    LineageGroupName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListActionsResponse
 */
const de_ListActionsResponse = (output: any, context: __SerdeContext): ListActionsResponse => {
  return take(output, {
    ActionSummaries: (_: any) => de_ActionSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAlgorithmsOutput
 */
const de_ListAlgorithmsOutput = (output: any, context: __SerdeContext): ListAlgorithmsOutput => {
  return take(output, {
    AlgorithmSummaryList: (_: any) => de_AlgorithmSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListAliasesResponse omitted.

/**
 * deserializeAws_json1_1ListAppImageConfigsResponse
 */
const de_ListAppImageConfigsResponse = (output: any, context: __SerdeContext): ListAppImageConfigsResponse => {
  return take(output, {
    AppImageConfigs: (_: any) => de_AppImageConfigList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAppsResponse
 */
const de_ListAppsResponse = (output: any, context: __SerdeContext): ListAppsResponse => {
  return take(output, {
    Apps: (_: any) => de_AppList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListArtifactsResponse
 */
const de_ListArtifactsResponse = (output: any, context: __SerdeContext): ListArtifactsResponse => {
  return take(output, {
    ArtifactSummaries: (_: any) => de_ArtifactSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAssociationsResponse
 */
const de_ListAssociationsResponse = (output: any, context: __SerdeContext): ListAssociationsResponse => {
  return take(output, {
    AssociationSummaries: (_: any) => de_AssociationSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAutoMLJobsResponse
 */
const de_ListAutoMLJobsResponse = (output: any, context: __SerdeContext): ListAutoMLJobsResponse => {
  return take(output, {
    AutoMLJobSummaries: (_: any) => de_AutoMLJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCandidatesForAutoMLJobResponse
 */
const de_ListCandidatesForAutoMLJobResponse = (
  output: any,
  context: __SerdeContext
): ListCandidatesForAutoMLJobResponse => {
  return take(output, {
    Candidates: (_: any) => de_AutoMLCandidates(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCodeRepositoriesOutput
 */
const de_ListCodeRepositoriesOutput = (output: any, context: __SerdeContext): ListCodeRepositoriesOutput => {
  return take(output, {
    CodeRepositorySummaryList: (_: any) => de_CodeRepositorySummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCompilationJobsResponse
 */
const de_ListCompilationJobsResponse = (output: any, context: __SerdeContext): ListCompilationJobsResponse => {
  return take(output, {
    CompilationJobSummaries: (_: any) => de_CompilationJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListContextsResponse
 */
const de_ListContextsResponse = (output: any, context: __SerdeContext): ListContextsResponse => {
  return take(output, {
    ContextSummaries: (_: any) => de_ContextSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDataQualityJobDefinitionsResponse
 */
const de_ListDataQualityJobDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListDataQualityJobDefinitionsResponse => {
  return take(output, {
    JobDefinitionSummaries: (_: any) => de_MonitoringJobDefinitionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDeviceFleetsResponse
 */
const de_ListDeviceFleetsResponse = (output: any, context: __SerdeContext): ListDeviceFleetsResponse => {
  return take(output, {
    DeviceFleetSummaries: (_: any) => de_DeviceFleetSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDevicesResponse
 */
const de_ListDevicesResponse = (output: any, context: __SerdeContext): ListDevicesResponse => {
  return take(output, {
    DeviceSummaries: (_: any) => de_DeviceSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDomainsResponse
 */
const de_ListDomainsResponse = (output: any, context: __SerdeContext): ListDomainsResponse => {
  return take(output, {
    Domains: (_: any) => de_DomainList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEdgeDeploymentPlansResponse
 */
const de_ListEdgeDeploymentPlansResponse = (output: any, context: __SerdeContext): ListEdgeDeploymentPlansResponse => {
  return take(output, {
    EdgeDeploymentPlanSummaries: (_: any) => de_EdgeDeploymentPlanSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEdgePackagingJobsResponse
 */
const de_ListEdgePackagingJobsResponse = (output: any, context: __SerdeContext): ListEdgePackagingJobsResponse => {
  return take(output, {
    EdgePackagingJobSummaries: (_: any) => de_EdgePackagingJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEndpointConfigsOutput
 */
const de_ListEndpointConfigsOutput = (output: any, context: __SerdeContext): ListEndpointConfigsOutput => {
  return take(output, {
    EndpointConfigs: (_: any) => de_EndpointConfigSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListEndpointsOutput
 */
const de_ListEndpointsOutput = (output: any, context: __SerdeContext): ListEndpointsOutput => {
  return take(output, {
    Endpoints: (_: any) => de_EndpointSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListExperimentsResponse
 */
const de_ListExperimentsResponse = (output: any, context: __SerdeContext): ListExperimentsResponse => {
  return take(output, {
    ExperimentSummaries: (_: any) => de_ExperimentSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListFeatureGroupsResponse
 */
const de_ListFeatureGroupsResponse = (output: any, context: __SerdeContext): ListFeatureGroupsResponse => {
  return take(output, {
    FeatureGroupSummaries: (_: any) => de_FeatureGroupSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListFlowDefinitionsResponse
 */
const de_ListFlowDefinitionsResponse = (output: any, context: __SerdeContext): ListFlowDefinitionsResponse => {
  return take(output, {
    FlowDefinitionSummaries: (_: any) => de_FlowDefinitionSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHubContentsResponse
 */
const de_ListHubContentsResponse = (output: any, context: __SerdeContext): ListHubContentsResponse => {
  return take(output, {
    HubContentSummaries: (_: any) => de_HubContentInfoList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHubContentVersionsResponse
 */
const de_ListHubContentVersionsResponse = (output: any, context: __SerdeContext): ListHubContentVersionsResponse => {
  return take(output, {
    HubContentSummaries: (_: any) => de_HubContentInfoList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHubsResponse
 */
const de_ListHubsResponse = (output: any, context: __SerdeContext): ListHubsResponse => {
  return take(output, {
    HubSummaries: (_: any) => de_HubInfoList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHumanTaskUisResponse
 */
const de_ListHumanTaskUisResponse = (output: any, context: __SerdeContext): ListHumanTaskUisResponse => {
  return take(output, {
    HumanTaskUiSummaries: (_: any) => de_HumanTaskUiSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListHyperParameterTuningJobsResponse
 */
const de_ListHyperParameterTuningJobsResponse = (
  output: any,
  context: __SerdeContext
): ListHyperParameterTuningJobsResponse => {
  return take(output, {
    HyperParameterTuningJobSummaries: (_: any) => de_HyperParameterTuningJobSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListImagesResponse
 */
const de_ListImagesResponse = (output: any, context: __SerdeContext): ListImagesResponse => {
  return take(output, {
    Images: (_: any) => de_Images(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListImageVersionsResponse
 */
const de_ListImageVersionsResponse = (output: any, context: __SerdeContext): ListImageVersionsResponse => {
  return take(output, {
    ImageVersions: (_: any) => de_ImageVersions(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInferenceExperimentsResponse
 */
const de_ListInferenceExperimentsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceExperimentsResponse => {
  return take(output, {
    InferenceExperiments: (_: any) => de_InferenceExperimentList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobsResponse
 */
const de_ListInferenceRecommendationsJobsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceRecommendationsJobsResponse => {
  return take(output, {
    InferenceRecommendationsJobs: (_: any) => de_InferenceRecommendationsJobs(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListInferenceRecommendationsJobStepsResponse
 */
const de_ListInferenceRecommendationsJobStepsResponse = (
  output: any,
  context: __SerdeContext
): ListInferenceRecommendationsJobStepsResponse => {
  return take(output, {
    NextToken: __expectString,
    Steps: (_: any) => de_InferenceRecommendationsJobSteps(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListLabelingJobsForWorkteamResponse
 */
const de_ListLabelingJobsForWorkteamResponse = (
  output: any,
  context: __SerdeContext
): ListLabelingJobsForWorkteamResponse => {
  return take(output, {
    LabelingJobSummaryList: (_: any) => de_LabelingJobForWorkteamSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLabelingJobsResponse
 */
const de_ListLabelingJobsResponse = (output: any, context: __SerdeContext): ListLabelingJobsResponse => {
  return take(output, {
    LabelingJobSummaryList: (_: any) => de_LabelingJobSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLineageGroupsResponse
 */
const de_ListLineageGroupsResponse = (output: any, context: __SerdeContext): ListLineageGroupsResponse => {
  return take(output, {
    LineageGroupSummaries: (_: any) => de_LineageGroupSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelBiasJobDefinitionsResponse
 */
const de_ListModelBiasJobDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListModelBiasJobDefinitionsResponse => {
  return take(output, {
    JobDefinitionSummaries: (_: any) => de_MonitoringJobDefinitionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelCardExportJobsResponse
 */
const de_ListModelCardExportJobsResponse = (output: any, context: __SerdeContext): ListModelCardExportJobsResponse => {
  return take(output, {
    ModelCardExportJobSummaries: (_: any) => de_ModelCardExportJobSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelCardsResponse
 */
const de_ListModelCardsResponse = (output: any, context: __SerdeContext): ListModelCardsResponse => {
  return take(output, {
    ModelCardSummaries: (_: any) => de_ModelCardSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelCardVersionsResponse
 */
const de_ListModelCardVersionsResponse = (output: any, context: __SerdeContext): ListModelCardVersionsResponse => {
  return take(output, {
    ModelCardVersionSummaryList: (_: any) => de_ModelCardVersionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelExplainabilityJobDefinitionsResponse
 */
const de_ListModelExplainabilityJobDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListModelExplainabilityJobDefinitionsResponse => {
  return take(output, {
    JobDefinitionSummaries: (_: any) => de_MonitoringJobDefinitionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListModelMetadataResponse omitted.

/**
 * deserializeAws_json1_1ListModelPackageGroupsOutput
 */
const de_ListModelPackageGroupsOutput = (output: any, context: __SerdeContext): ListModelPackageGroupsOutput => {
  return take(output, {
    ModelPackageGroupSummaryList: (_: any) => de_ModelPackageGroupSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelPackagesOutput
 */
const de_ListModelPackagesOutput = (output: any, context: __SerdeContext): ListModelPackagesOutput => {
  return take(output, {
    ModelPackageSummaryList: (_: any) => de_ModelPackageSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelQualityJobDefinitionsResponse
 */
const de_ListModelQualityJobDefinitionsResponse = (
  output: any,
  context: __SerdeContext
): ListModelQualityJobDefinitionsResponse => {
  return take(output, {
    JobDefinitionSummaries: (_: any) => de_MonitoringJobDefinitionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListModelsOutput
 */
const de_ListModelsOutput = (output: any, context: __SerdeContext): ListModelsOutput => {
  return take(output, {
    Models: (_: any) => de_ModelSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitoringAlertHistoryResponse
 */
const de_ListMonitoringAlertHistoryResponse = (
  output: any,
  context: __SerdeContext
): ListMonitoringAlertHistoryResponse => {
  return take(output, {
    MonitoringAlertHistory: (_: any) => de_MonitoringAlertHistoryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitoringAlertsResponse
 */
const de_ListMonitoringAlertsResponse = (output: any, context: __SerdeContext): ListMonitoringAlertsResponse => {
  return take(output, {
    MonitoringAlertSummaries: (_: any) => de_MonitoringAlertSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitoringExecutionsResponse
 */
const de_ListMonitoringExecutionsResponse = (
  output: any,
  context: __SerdeContext
): ListMonitoringExecutionsResponse => {
  return take(output, {
    MonitoringExecutionSummaries: (_: any) => de_MonitoringExecutionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitoringSchedulesResponse
 */
const de_ListMonitoringSchedulesResponse = (output: any, context: __SerdeContext): ListMonitoringSchedulesResponse => {
  return take(output, {
    MonitoringScheduleSummaries: (_: any) => de_MonitoringScheduleSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListNotebookInstanceLifecycleConfigsOutput
 */
const de_ListNotebookInstanceLifecycleConfigsOutput = (
  output: any,
  context: __SerdeContext
): ListNotebookInstanceLifecycleConfigsOutput => {
  return take(output, {
    NextToken: __expectString,
    NotebookInstanceLifecycleConfigs: (_: any) => de_NotebookInstanceLifecycleConfigSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListNotebookInstancesOutput
 */
const de_ListNotebookInstancesOutput = (output: any, context: __SerdeContext): ListNotebookInstancesOutput => {
  return take(output, {
    NextToken: __expectString,
    NotebookInstances: (_: any) => de_NotebookInstanceSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionsResponse
 */
const de_ListPipelineExecutionsResponse = (output: any, context: __SerdeContext): ListPipelineExecutionsResponse => {
  return take(output, {
    NextToken: __expectString,
    PipelineExecutionSummaries: (_: any) => de_PipelineExecutionSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPipelineExecutionStepsResponse
 */
const de_ListPipelineExecutionStepsResponse = (
  output: any,
  context: __SerdeContext
): ListPipelineExecutionStepsResponse => {
  return take(output, {
    NextToken: __expectString,
    PipelineExecutionSteps: (_: any) => de_PipelineExecutionStepList(_, context),
  }) as any;
};

// de_ListPipelineParametersForExecutionResponse omitted.

/**
 * deserializeAws_json1_1ListPipelinesResponse
 */
const de_ListPipelinesResponse = (output: any, context: __SerdeContext): ListPipelinesResponse => {
  return take(output, {
    NextToken: __expectString,
    PipelineSummaries: (_: any) => de_PipelineSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListProcessingJobsResponse
 */
const de_ListProcessingJobsResponse = (output: any, context: __SerdeContext): ListProcessingJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    ProcessingJobSummaries: (_: any) => de_ProcessingJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListProjectsOutput
 */
const de_ListProjectsOutput = (output: any, context: __SerdeContext): ListProjectsOutput => {
  return take(output, {
    NextToken: __expectString,
    ProjectSummaryList: (_: any) => de_ProjectSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListSpacesResponse
 */
const de_ListSpacesResponse = (output: any, context: __SerdeContext): ListSpacesResponse => {
  return take(output, {
    NextToken: __expectString,
    Spaces: (_: any) => de_SpaceList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListStageDevicesResponse
 */
const de_ListStageDevicesResponse = (output: any, context: __SerdeContext): ListStageDevicesResponse => {
  return take(output, {
    DeviceDeploymentSummaries: (_: any) => de_DeviceDeploymentSummaries(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListStudioLifecycleConfigsResponse
 */
const de_ListStudioLifecycleConfigsResponse = (
  output: any,
  context: __SerdeContext
): ListStudioLifecycleConfigsResponse => {
  return take(output, {
    NextToken: __expectString,
    StudioLifecycleConfigs: (_: any) => de_StudioLifecycleConfigsList(_, context),
  }) as any;
};

// de_ListSubscribedWorkteamsResponse omitted.

// de_ListTagsOutput omitted.

/**
 * deserializeAws_json1_1ListTrainingJobsForHyperParameterTuningJobResponse
 */
const de_ListTrainingJobsForHyperParameterTuningJobResponse = (
  output: any,
  context: __SerdeContext
): ListTrainingJobsForHyperParameterTuningJobResponse => {
  return take(output, {
    NextToken: __expectString,
    TrainingJobSummaries: (_: any) => de_HyperParameterTrainingJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTrainingJobsResponse
 */
const de_ListTrainingJobsResponse = (output: any, context: __SerdeContext): ListTrainingJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    TrainingJobSummaries: (_: any) => de_TrainingJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTransformJobsResponse
 */
const de_ListTransformJobsResponse = (output: any, context: __SerdeContext): ListTransformJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    TransformJobSummaries: (_: any) => de_TransformJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTrialComponentsResponse
 */
const de_ListTrialComponentsResponse = (output: any, context: __SerdeContext): ListTrialComponentsResponse => {
  return take(output, {
    NextToken: __expectString,
    TrialComponentSummaries: (_: any) => de_TrialComponentSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTrialsResponse
 */
const de_ListTrialsResponse = (output: any, context: __SerdeContext): ListTrialsResponse => {
  return take(output, {
    NextToken: __expectString,
    TrialSummaries: (_: any) => de_TrialSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListUserProfilesResponse
 */
const de_ListUserProfilesResponse = (output: any, context: __SerdeContext): ListUserProfilesResponse => {
  return take(output, {
    NextToken: __expectString,
    UserProfiles: (_: any) => de_UserProfileList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListWorkforcesResponse
 */
const de_ListWorkforcesResponse = (output: any, context: __SerdeContext): ListWorkforcesResponse => {
  return take(output, {
    NextToken: __expectString,
    Workforces: (_: any) => de_Workforces(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListWorkteamsResponse
 */
const de_ListWorkteamsResponse = (output: any, context: __SerdeContext): ListWorkteamsResponse => {
  return take(output, {
    NextToken: __expectString,
    Workteams: (_: any) => de_Workteams(_, context),
  }) as any;
};

// de_MemberDefinition omitted.

// de_MemberDefinitions omitted.

// de_MetadataProperties omitted.

/**
 * deserializeAws_json1_1MetricData
 */
const de_MetricData = (output: any, context: __SerdeContext): MetricData => {
  return take(output, {
    MetricName: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Value: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricDataList
 */
const de_MetricDataList = (output: any, context: __SerdeContext): MetricDatum[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDatum(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricDatum
 */
const de_MetricDatum = (output: any, context: __SerdeContext): MetricDatum => {
  return take(output, {
    MetricName: __expectString,
    Set: __expectString,
    StandardMetricName: __expectString,
    Value: __limitedParseFloat32,
  }) as any;
};

// de_MetricDefinition omitted.

// de_MetricDefinitionList omitted.

// de_MetricsSource omitted.

/**
 * deserializeAws_json1_1Model
 */
const de_Model = (output: any, context: __SerdeContext): Model => {
  return take(output, {
    Containers: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeploymentRecommendation: _json,
    EnableNetworkIsolation: __expectBoolean,
    ExecutionRoleArn: __expectString,
    InferenceExecutionConfig: _json,
    ModelArn: __expectString,
    ModelName: __expectString,
    PrimaryContainer: _json,
    Tags: _json,
    VpcConfig: _json,
  }) as any;
};

// de_ModelArtifacts omitted.

// de_ModelBiasAppSpecification omitted.

// de_ModelBiasBaselineConfig omitted.

/**
 * deserializeAws_json1_1ModelBiasJobInput
 */
const de_ModelBiasJobInput = (output: any, context: __SerdeContext): ModelBiasJobInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
    GroundTruthS3Input: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCard
 */
const de_ModelCard = (output: any, context: __SerdeContext): ModelCard => {
  return take(output, {
    Content: __expectString,
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardStatus: __expectString,
    ModelCardVersion: __expectInt32,
    ModelId: __expectString,
    ModelPackageGroupName: __expectString,
    RiskRating: __expectString,
    SecurityConfig: _json,
    Tags: _json,
  }) as any;
};

// de_ModelCardExportArtifacts omitted.

/**
 * deserializeAws_json1_1ModelCardExportJobSummary
 */
const de_ModelCardExportJobSummary = (output: any, context: __SerdeContext): ModelCardExportJobSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardExportJobArn: __expectString,
    ModelCardExportJobName: __expectString,
    ModelCardName: __expectString,
    ModelCardVersion: __expectInt32,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardExportJobSummaryList
 */
const de_ModelCardExportJobSummaryList = (output: any, context: __SerdeContext): ModelCardExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCardExportJobSummary(entry, context);
    });
  return retVal;
};

// de_ModelCardExportOutputConfig omitted.

// de_ModelCardSecurityConfig omitted.

/**
 * deserializeAws_json1_1ModelCardSummary
 */
const de_ModelCardSummary = (output: any, context: __SerdeContext): ModelCardSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardSummaryList
 */
const de_ModelCardSummaryList = (output: any, context: __SerdeContext): ModelCardSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCardSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ModelCardVersionSummary
 */
const de_ModelCardVersionSummary = (output: any, context: __SerdeContext): ModelCardVersionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardStatus: __expectString,
    ModelCardVersion: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelCardVersionSummaryList
 */
const de_ModelCardVersionSummaryList = (output: any, context: __SerdeContext): ModelCardVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelCardVersionSummary(entry, context);
    });
  return retVal;
};

// de_ModelClientConfig omitted.

// de_ModelConfiguration omitted.

/**
 * deserializeAws_json1_1ModelDashboardEndpoint
 */
const de_ModelDashboardEndpoint = (output: any, context: __SerdeContext): ModelDashboardEndpoint => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointArn: __expectString,
    EndpointName: __expectString,
    EndpointStatus: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardEndpoints
 */
const de_ModelDashboardEndpoints = (output: any, context: __SerdeContext): ModelDashboardEndpoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelDashboardEndpoint(entry, context);
    });
  return retVal;
};

// de_ModelDashboardIndicatorAction omitted.

/**
 * deserializeAws_json1_1ModelDashboardModel
 */
const de_ModelDashboardModel = (output: any, context: __SerdeContext): ModelDashboardModel => {
  return take(output, {
    Endpoints: (_: any) => de_ModelDashboardEndpoints(_, context),
    LastBatchTransformJob: (_: any) => de_TransformJob(_, context),
    Model: (_: any) => de_Model(_, context),
    ModelCard: (_: any) => de_ModelDashboardModelCard(_, context),
    MonitoringSchedules: (_: any) => de_ModelDashboardMonitoringSchedules(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardModelCard
 */
const de_ModelDashboardModelCard = (output: any, context: __SerdeContext): ModelDashboardModelCard => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelCardArn: __expectString,
    ModelCardName: __expectString,
    ModelCardStatus: __expectString,
    ModelCardVersion: __expectInt32,
    ModelId: __expectString,
    RiskRating: __expectString,
    SecurityConfig: _json,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardMonitoringSchedule
 */
const de_ModelDashboardMonitoringSchedule = (
  output: any,
  context: __SerdeContext
): ModelDashboardMonitoringSchedule => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastMonitoringExecutionSummary: (_: any) => de_MonitoringExecutionSummary(_, context),
    MonitoringAlertSummaries: (_: any) => de_MonitoringAlertSummaryList(_, context),
    MonitoringScheduleArn: __expectString,
    MonitoringScheduleConfig: (_: any) => de_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: __expectString,
    MonitoringScheduleStatus: __expectString,
    MonitoringType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelDashboardMonitoringSchedules
 */
const de_ModelDashboardMonitoringSchedules = (
  output: any,
  context: __SerdeContext
): ModelDashboardMonitoringSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelDashboardMonitoringSchedule(entry, context);
    });
  return retVal;
};

// de_ModelDataQuality omitted.

// de_ModelDataSource omitted.

// de_ModelDeployConfig omitted.

// de_ModelDeployResult omitted.

// de_ModelDigests omitted.

// de_ModelExplainabilityAppSpecification omitted.

// de_ModelExplainabilityBaselineConfig omitted.

/**
 * deserializeAws_json1_1ModelExplainabilityJobInput
 */
const de_ModelExplainabilityJobInput = (output: any, context: __SerdeContext): ModelExplainabilityJobInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
  }) as any;
};

// de_ModelInfrastructureConfig omitted.

// de_ModelInput omitted.

// de_ModelLatencyThreshold omitted.

// de_ModelLatencyThresholds omitted.

// de_ModelMetadataSummaries omitted.

// de_ModelMetadataSummary omitted.

// de_ModelMetrics omitted.

/**
 * deserializeAws_json1_1ModelPackage
 */
const de_ModelPackage = (output: any, context: __SerdeContext): ModelPackage => {
  return take(output, {
    AdditionalInferenceSpecifications: _json,
    ApprovalDescription: __expectString,
    CertifyForMarketplace: __expectBoolean,
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CustomerMetadataProperties: _json,
    Domain: __expectString,
    DriftCheckBaselines: _json,
    InferenceSpecification: _json,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataProperties: _json,
    ModelApprovalStatus: __expectString,
    ModelMetrics: _json,
    ModelPackageArn: __expectString,
    ModelPackageDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageName: __expectString,
    ModelPackageStatus: __expectString,
    ModelPackageStatusDetails: _json,
    ModelPackageVersion: __expectInt32,
    SamplePayloadUrl: __expectString,
    SourceAlgorithmSpecification: _json,
    Tags: _json,
    Task: __expectString,
    ValidationSpecification: _json,
  }) as any;
};

// de_ModelPackageContainerDefinition omitted.

// de_ModelPackageContainerDefinitionList omitted.

/**
 * deserializeAws_json1_1ModelPackageGroup
 */
const de_ModelPackageGroup = (output: any, context: __SerdeContext): ModelPackageGroup => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelPackageGroupArn: __expectString,
    ModelPackageGroupDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageGroupStatus: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageGroupSummary
 */
const de_ModelPackageGroupSummary = (output: any, context: __SerdeContext): ModelPackageGroupSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelPackageGroupArn: __expectString,
    ModelPackageGroupDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageGroupStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageGroupSummaryList
 */
const de_ModelPackageGroupSummaryList = (output: any, context: __SerdeContext): ModelPackageGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelPackageGroupSummary(entry, context);
    });
  return retVal;
};

// de_ModelPackageStatusDetails omitted.

// de_ModelPackageStatusItem omitted.

// de_ModelPackageStatusItemList omitted.

/**
 * deserializeAws_json1_1ModelPackageSummaries
 */
const de_ModelPackageSummaries = (
  output: any,
  context: __SerdeContext
): Record<string, BatchDescribeModelPackageSummary> => {
  return Object.entries(output).reduce(
    (acc: Record<string, BatchDescribeModelPackageSummary>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_BatchDescribeModelPackageSummary(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1ModelPackageSummary
 */
const de_ModelPackageSummary = (output: any, context: __SerdeContext): ModelPackageSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelApprovalStatus: __expectString,
    ModelPackageArn: __expectString,
    ModelPackageDescription: __expectString,
    ModelPackageGroupName: __expectString,
    ModelPackageName: __expectString,
    ModelPackageStatus: __expectString,
    ModelPackageVersion: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelPackageSummaryList
 */
const de_ModelPackageSummaryList = (output: any, context: __SerdeContext): ModelPackageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelPackageSummary(entry, context);
    });
  return retVal;
};

// de_ModelPackageValidationProfile omitted.

// de_ModelPackageValidationProfiles omitted.

// de_ModelPackageValidationSpecification omitted.

// de_ModelQuality omitted.

// de_ModelQualityAppSpecification omitted.

// de_ModelQualityBaselineConfig omitted.

/**
 * deserializeAws_json1_1ModelQualityJobInput
 */
const de_ModelQualityJobInput = (output: any, context: __SerdeContext): ModelQualityJobInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
    GroundTruthS3Input: _json,
  }) as any;
};

// de_ModelRegisterSettings omitted.

// de_ModelStepMetadata omitted.

/**
 * deserializeAws_json1_1ModelSummary
 */
const de_ModelSummary = (output: any, context: __SerdeContext): ModelSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArn: __expectString,
    ModelName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ModelSummaryList
 */
const de_ModelSummaryList = (output: any, context: __SerdeContext): ModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelSummary(entry, context);
    });
  return retVal;
};

// de_ModelVariantConfigSummary omitted.

// de_ModelVariantConfigSummaryList omitted.

// de_MonitoringAlertActions omitted.

/**
 * deserializeAws_json1_1MonitoringAlertHistoryList
 */
const de_MonitoringAlertHistoryList = (output: any, context: __SerdeContext): MonitoringAlertHistorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringAlertHistorySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringAlertHistorySummary
 */
const de_MonitoringAlertHistorySummary = (output: any, context: __SerdeContext): MonitoringAlertHistorySummary => {
  return take(output, {
    AlertStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringAlertName: __expectString,
    MonitoringScheduleName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringAlertSummary
 */
const de_MonitoringAlertSummary = (output: any, context: __SerdeContext): MonitoringAlertSummary => {
  return take(output, {
    Actions: _json,
    AlertStatus: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatapointsToAlert: __expectInt32,
    EvaluationPeriod: __expectInt32,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringAlertName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringAlertSummaryList
 */
const de_MonitoringAlertSummaryList = (output: any, context: __SerdeContext): MonitoringAlertSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringAlertSummary(entry, context);
    });
  return retVal;
};

// de_MonitoringAppSpecification omitted.

// de_MonitoringBaselineConfig omitted.

// de_MonitoringClusterConfig omitted.

// de_MonitoringConstraintsResource omitted.

// de_MonitoringContainerArguments omitted.

// de_MonitoringCsvDatasetFormat omitted.

// de_MonitoringDatasetFormat omitted.

// de_MonitoringEnvironmentMap omitted.

/**
 * deserializeAws_json1_1MonitoringExecutionSummary
 */
const de_MonitoringExecutionSummary = (output: any, context: __SerdeContext): MonitoringExecutionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringExecutionStatus: __expectString,
    MonitoringJobDefinitionName: __expectString,
    MonitoringScheduleName: __expectString,
    MonitoringType: __expectString,
    ProcessingJobArn: __expectString,
    ScheduledTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringExecutionSummaryList
 */
const de_MonitoringExecutionSummaryList = (output: any, context: __SerdeContext): MonitoringExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringExecutionSummary(entry, context);
    });
  return retVal;
};

// de_MonitoringGroundTruthS3Input omitted.

/**
 * deserializeAws_json1_1MonitoringInput
 */
const de_MonitoringInput = (output: any, context: __SerdeContext): MonitoringInput => {
  return take(output, {
    BatchTransformInput: (_: any) => de_BatchTransformInput(_, context),
    EndpointInput: (_: any) => de_EndpointInput(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringInputs
 */
const de_MonitoringInputs = (output: any, context: __SerdeContext): MonitoringInput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringInput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringJobDefinition
 */
const de_MonitoringJobDefinition = (output: any, context: __SerdeContext): MonitoringJobDefinition => {
  return take(output, {
    BaselineConfig: _json,
    Environment: _json,
    MonitoringAppSpecification: _json,
    MonitoringInputs: (_: any) => de_MonitoringInputs(_, context),
    MonitoringOutputConfig: _json,
    MonitoringResources: _json,
    NetworkConfig: _json,
    RoleArn: __expectString,
    StoppingCondition: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringJobDefinitionSummary
 */
const de_MonitoringJobDefinitionSummary = (output: any, context: __SerdeContext): MonitoringJobDefinitionSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    MonitoringJobDefinitionArn: __expectString,
    MonitoringJobDefinitionName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringJobDefinitionSummaryList
 */
const de_MonitoringJobDefinitionSummaryList = (
  output: any,
  context: __SerdeContext
): MonitoringJobDefinitionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringJobDefinitionSummary(entry, context);
    });
  return retVal;
};

// de_MonitoringJsonDatasetFormat omitted.

// de_MonitoringNetworkConfig omitted.

// de_MonitoringOutput omitted.

// de_MonitoringOutputConfig omitted.

// de_MonitoringOutputs omitted.

// de_MonitoringParquetDatasetFormat omitted.

// de_MonitoringResources omitted.

// de_MonitoringS3Output omitted.

/**
 * deserializeAws_json1_1MonitoringSchedule
 */
const de_MonitoringSchedule = (output: any, context: __SerdeContext): MonitoringSchedule => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastMonitoringExecutionSummary: (_: any) => de_MonitoringExecutionSummary(_, context),
    MonitoringScheduleArn: __expectString,
    MonitoringScheduleConfig: (_: any) => de_MonitoringScheduleConfig(_, context),
    MonitoringScheduleName: __expectString,
    MonitoringScheduleStatus: __expectString,
    MonitoringType: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringScheduleConfig
 */
const de_MonitoringScheduleConfig = (output: any, context: __SerdeContext): MonitoringScheduleConfig => {
  return take(output, {
    MonitoringJobDefinition: (_: any) => de_MonitoringJobDefinition(_, context),
    MonitoringJobDefinitionName: __expectString,
    MonitoringType: __expectString,
    ScheduleConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringScheduleList
 */
const de_MonitoringScheduleList = (output: any, context: __SerdeContext): MonitoringSchedule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringSchedule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitoringScheduleSummary
 */
const de_MonitoringScheduleSummary = (output: any, context: __SerdeContext): MonitoringScheduleSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndpointName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringJobDefinitionName: __expectString,
    MonitoringScheduleArn: __expectString,
    MonitoringScheduleName: __expectString,
    MonitoringScheduleStatus: __expectString,
    MonitoringType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1MonitoringScheduleSummaryList
 */
const de_MonitoringScheduleSummaryList = (output: any, context: __SerdeContext): MonitoringScheduleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitoringScheduleSummary(entry, context);
    });
  return retVal;
};

// de_MonitoringStatisticsResource omitted.

// de_MonitoringStoppingCondition omitted.

// de_MultiModelConfig omitted.

// de_NeoVpcConfig omitted.

// de_NeoVpcSecurityGroupIds omitted.

// de_NeoVpcSubnets omitted.

// de_NetworkConfig omitted.

// de_NotebookInstanceAcceleratorTypes omitted.

// de_NotebookInstanceLifecycleConfigList omitted.

/**
 * deserializeAws_json1_1NotebookInstanceLifecycleConfigSummary
 */
const de_NotebookInstanceLifecycleConfigSummary = (
  output: any,
  context: __SerdeContext
): NotebookInstanceLifecycleConfigSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotebookInstanceLifecycleConfigArn: __expectString,
    NotebookInstanceLifecycleConfigName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookInstanceLifecycleConfigSummaryList
 */
const de_NotebookInstanceLifecycleConfigSummaryList = (
  output: any,
  context: __SerdeContext
): NotebookInstanceLifecycleConfigSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotebookInstanceLifecycleConfigSummary(entry, context);
    });
  return retVal;
};

// de_NotebookInstanceLifecycleHook omitted.

/**
 * deserializeAws_json1_1NotebookInstanceSummary
 */
const de_NotebookInstanceSummary = (output: any, context: __SerdeContext): NotebookInstanceSummary => {
  return take(output, {
    AdditionalCodeRepositories: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DefaultCodeRepository: __expectString,
    InstanceType: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    NotebookInstanceArn: __expectString,
    NotebookInstanceLifecycleConfigName: __expectString,
    NotebookInstanceName: __expectString,
    NotebookInstanceStatus: __expectString,
    Url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1NotebookInstanceSummaryList
 */
const de_NotebookInstanceSummaryList = (output: any, context: __SerdeContext): NotebookInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NotebookInstanceSummary(entry, context);
    });
  return retVal;
};

// de_NotificationConfiguration omitted.

// de_ObjectiveStatusCounters omitted.

// de_OfflineStoreConfig omitted.

// de_OfflineStoreStatus omitted.

// de_OidcConfigForResponse omitted.

// de_OidcMemberDefinition omitted.

// de_OnlineStoreConfig omitted.

// de_OnlineStoreSecurityConfig omitted.

// de_OutputConfig omitted.

// de_OutputDataConfig omitted.

// de_OutputParameter omitted.

// de_OutputParameterList omitted.

// de_ParallelismConfiguration omitted.

// de_Parameter omitted.

// de_ParameterList omitted.

// de_ParameterRange omitted.

// de_ParameterRanges omitted.

// de_ParameterValues omitted.

// de_Parent omitted.

// de_ParentHyperParameterTuningJob omitted.

// de_ParentHyperParameterTuningJobs omitted.

// de_Parents omitted.

/**
 * deserializeAws_json1_1PendingDeploymentSummary
 */
const de_PendingDeploymentSummary = (output: any, context: __SerdeContext): PendingDeploymentSummary => {
  return take(output, {
    EndpointConfigName: __expectString,
    ProductionVariants: (_: any) => de_PendingProductionVariantSummaryList(_, context),
    ShadowProductionVariants: (_: any) => de_PendingProductionVariantSummaryList(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PendingProductionVariantSummary
 */
const de_PendingProductionVariantSummary = (output: any, context: __SerdeContext): PendingProductionVariantSummary => {
  return take(output, {
    AcceleratorType: __expectString,
    CurrentInstanceCount: __expectInt32,
    CurrentServerlessConfig: _json,
    CurrentWeight: __limitedParseFloat32,
    DeployedImages: (_: any) => de_DeployedImages(_, context),
    DesiredInstanceCount: __expectInt32,
    DesiredServerlessConfig: _json,
    DesiredWeight: __limitedParseFloat32,
    InstanceType: __expectString,
    VariantName: __expectString,
    VariantStatus: (_: any) => de_ProductionVariantStatusList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PendingProductionVariantSummaryList
 */
const de_PendingProductionVariantSummaryList = (
  output: any,
  context: __SerdeContext
): PendingProductionVariantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PendingProductionVariantSummary(entry, context);
    });
  return retVal;
};

// de_Phase omitted.

// de_Phases omitted.

/**
 * deserializeAws_json1_1Pipeline
 */
const de_Pipeline = (output: any, context: __SerdeContext): Pipeline => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastRunTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParallelismConfiguration: _json,
    PipelineArn: __expectString,
    PipelineDescription: __expectString,
    PipelineDisplayName: __expectString,
    PipelineName: __expectString,
    PipelineStatus: __expectString,
    RoleArn: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecution
 */
const de_PipelineExecution = (output: any, context: __SerdeContext): PipelineExecution => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ParallelismConfiguration: _json,
    PipelineArn: __expectString,
    PipelineExecutionArn: __expectString,
    PipelineExecutionDescription: __expectString,
    PipelineExecutionDisplayName: __expectString,
    PipelineExecutionStatus: __expectString,
    PipelineExperimentConfig: _json,
    PipelineParameters: _json,
    SelectiveExecutionConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionStep
 */
const de_PipelineExecutionStep = (output: any, context: __SerdeContext): PipelineExecutionStep => {
  return take(output, {
    AttemptCount: __expectInt32,
    CacheHitResult: _json,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    Metadata: _json,
    SelectiveExecutionResult: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StepDescription: __expectString,
    StepDisplayName: __expectString,
    StepName: __expectString,
    StepStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionStepList
 */
const de_PipelineExecutionStepList = (output: any, context: __SerdeContext): PipelineExecutionStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PipelineExecutionStep(entry, context);
    });
  return retVal;
};

// de_PipelineExecutionStepMetadata omitted.

/**
 * deserializeAws_json1_1PipelineExecutionSummary
 */
const de_PipelineExecutionSummary = (output: any, context: __SerdeContext): PipelineExecutionSummary => {
  return take(output, {
    PipelineExecutionArn: __expectString,
    PipelineExecutionDescription: __expectString,
    PipelineExecutionDisplayName: __expectString,
    PipelineExecutionFailureReason: __expectString,
    PipelineExecutionStatus: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineExecutionSummaryList
 */
const de_PipelineExecutionSummaryList = (output: any, context: __SerdeContext): PipelineExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PipelineExecutionSummary(entry, context);
    });
  return retVal;
};

// de_PipelineExperimentConfig omitted.

/**
 * deserializeAws_json1_1PipelineSummary
 */
const de_PipelineSummary = (output: any, context: __SerdeContext): PipelineSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastExecutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    PipelineArn: __expectString,
    PipelineDescription: __expectString,
    PipelineDisplayName: __expectString,
    PipelineName: __expectString,
    RoleArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PipelineSummaryList
 */
const de_PipelineSummaryList = (output: any, context: __SerdeContext): PipelineSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PipelineSummary(entry, context);
    });
  return retVal;
};

// de_ProcessingClusterConfig omitted.

// de_ProcessingEnvironmentMap omitted.

// de_ProcessingFeatureStoreOutput omitted.

// de_ProcessingInput omitted.

// de_ProcessingInputs omitted.

/**
 * deserializeAws_json1_1ProcessingJob
 */
const de_ProcessingJob = (output: any, context: __SerdeContext): ProcessingJob => {
  return take(output, {
    AppSpecification: _json,
    AutoMLJobArn: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Environment: _json,
    ExitMessage: __expectString,
    ExperimentConfig: _json,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitoringScheduleArn: __expectString,
    NetworkConfig: _json,
    ProcessingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProcessingInputs: _json,
    ProcessingJobArn: __expectString,
    ProcessingJobName: __expectString,
    ProcessingJobStatus: __expectString,
    ProcessingOutputConfig: _json,
    ProcessingResources: _json,
    ProcessingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RoleArn: __expectString,
    StoppingCondition: _json,
    Tags: _json,
    TrainingJobArn: __expectString,
  }) as any;
};

// de_ProcessingJobStepMetadata omitted.

/**
 * deserializeAws_json1_1ProcessingJobSummaries
 */
const de_ProcessingJobSummaries = (output: any, context: __SerdeContext): ProcessingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProcessingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProcessingJobSummary
 */
const de_ProcessingJobSummary = (output: any, context: __SerdeContext): ProcessingJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExitMessage: __expectString,
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProcessingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProcessingJobArn: __expectString,
    ProcessingJobName: __expectString,
    ProcessingJobStatus: __expectString,
  }) as any;
};

// de_ProcessingOutput omitted.

// de_ProcessingOutputConfig omitted.

// de_ProcessingOutputs omitted.

// de_ProcessingResources omitted.

// de_ProcessingS3Input omitted.

// de_ProcessingS3Output omitted.

// de_ProcessingStoppingCondition omitted.

/**
 * deserializeAws_json1_1ProductionVariant
 */
const de_ProductionVariant = (output: any, context: __SerdeContext): ProductionVariant => {
  return take(output, {
    AcceleratorType: __expectString,
    ContainerStartupHealthCheckTimeoutInSeconds: __expectInt32,
    CoreDumpConfig: _json,
    EnableSSMAccess: __expectBoolean,
    InitialInstanceCount: __expectInt32,
    InitialVariantWeight: __limitedParseFloat32,
    InstanceType: __expectString,
    ModelDataDownloadTimeoutInSeconds: __expectInt32,
    ModelName: __expectString,
    ServerlessConfig: _json,
    VariantName: __expectString,
    VolumeSizeInGB: __expectInt32,
  }) as any;
};

// de_ProductionVariantCoreDumpConfig omitted.

/**
 * deserializeAws_json1_1ProductionVariantList
 */
const de_ProductionVariantList = (output: any, context: __SerdeContext): ProductionVariant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProductionVariant(entry, context);
    });
  return retVal;
};

// de_ProductionVariantServerlessConfig omitted.

/**
 * deserializeAws_json1_1ProductionVariantStatus
 */
const de_ProductionVariantStatus = (output: any, context: __SerdeContext): ProductionVariantStatus => {
  return take(output, {
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantStatusList
 */
const de_ProductionVariantStatusList = (output: any, context: __SerdeContext): ProductionVariantStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProductionVariantStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ProductionVariantSummary
 */
const de_ProductionVariantSummary = (output: any, context: __SerdeContext): ProductionVariantSummary => {
  return take(output, {
    CurrentInstanceCount: __expectInt32,
    CurrentServerlessConfig: _json,
    CurrentWeight: __limitedParseFloat32,
    DeployedImages: (_: any) => de_DeployedImages(_, context),
    DesiredInstanceCount: __expectInt32,
    DesiredServerlessConfig: _json,
    DesiredWeight: __limitedParseFloat32,
    VariantName: __expectString,
    VariantStatus: (_: any) => de_ProductionVariantStatusList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ProductionVariantSummaryList
 */
const de_ProductionVariantSummaryList = (output: any, context: __SerdeContext): ProductionVariantSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProductionVariantSummary(entry, context);
    });
  return retVal;
};

// de_ProductListings omitted.

// de_ProfilerConfig omitted.

// de_ProfilerRuleConfiguration omitted.

// de_ProfilerRuleConfigurations omitted.

/**
 * deserializeAws_json1_1ProfilerRuleEvaluationStatus
 */
const de_ProfilerRuleEvaluationStatus = (output: any, context: __SerdeContext): ProfilerRuleEvaluationStatus => {
  return take(output, {
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RuleConfigurationName: __expectString,
    RuleEvaluationJobArn: __expectString,
    RuleEvaluationStatus: __expectString,
    StatusDetails: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProfilerRuleEvaluationStatuses
 */
const de_ProfilerRuleEvaluationStatuses = (output: any, context: __SerdeContext): ProfilerRuleEvaluationStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProfilerRuleEvaluationStatus(entry, context);
    });
  return retVal;
};

// de_ProfilingParameters omitted.

/**
 * deserializeAws_json1_1Project
 */
const de_Project = (output: any, context: __SerdeContext): Project => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectArn: __expectString,
    ProjectDescription: __expectString,
    ProjectId: __expectString,
    ProjectName: __expectString,
    ProjectStatus: __expectString,
    ServiceCatalogProvisionedProductDetails: _json,
    ServiceCatalogProvisioningDetails: _json,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectArn: __expectString,
    ProjectDescription: __expectString,
    ProjectId: __expectString,
    ProjectName: __expectString,
    ProjectStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ProjectSummaryList
 */
const de_ProjectSummaryList = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

// de_PropertyNameSuggestion omitted.

// de_PropertyNameSuggestionList omitted.

// de_ProvisioningParameter omitted.

// de_ProvisioningParameters omitted.

// de_PublicWorkforceTaskPrice omitted.

// de_PutModelPackageGroupPolicyOutput omitted.

// de_QualityCheckStepMetadata omitted.

// de_QueryLineageResponse omitted.

// de_RealTimeInferenceConfig omitted.

// de_RealtimeInferenceInstanceTypes omitted.

// de_RealTimeInferenceRecommendation omitted.

// de_RealTimeInferenceRecommendations omitted.

// de_RecommendationJobContainerConfig omitted.

/**
 * deserializeAws_json1_1RecommendationJobInferenceBenchmark
 */
const de_RecommendationJobInferenceBenchmark = (
  output: any,
  context: __SerdeContext
): RecommendationJobInferenceBenchmark => {
  return take(output, {
    EndpointConfiguration: _json,
    EndpointMetrics: _json,
    FailureReason: __expectString,
    InvocationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InvocationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metrics: (_: any) => de_RecommendationMetrics(_, context),
    ModelConfiguration: _json,
  }) as any;
};

// de_RecommendationJobInputConfig omitted.

// de_RecommendationJobPayloadConfig omitted.

// de_RecommendationJobResourceLimit omitted.

// de_RecommendationJobStoppingConditions omitted.

// de_RecommendationJobSupportedContentTypes omitted.

// de_RecommendationJobSupportedInstanceTypes omitted.

// de_RecommendationJobVpcConfig omitted.

// de_RecommendationJobVpcSecurityGroupIds omitted.

// de_RecommendationJobVpcSubnets omitted.

/**
 * deserializeAws_json1_1RecommendationMetrics
 */
const de_RecommendationMetrics = (output: any, context: __SerdeContext): RecommendationMetrics => {
  return take(output, {
    CostPerHour: __limitedParseFloat32,
    CostPerInference: __limitedParseFloat32,
    CpuUtilization: __limitedParseFloat32,
    MaxInvocations: __expectInt32,
    MemoryUtilization: __limitedParseFloat32,
    ModelLatency: __expectInt32,
    ModelSetupTime: __expectInt32,
  }) as any;
};

// de_RedshiftDatasetDefinition omitted.

// de_RegisterModelStepMetadata omitted.

// de_RenderingError omitted.

// de_RenderingErrorList omitted.

// de_RenderUiTemplateResponse omitted.

// de_RepositoryAuthConfig omitted.

// de_ResolvedAttributes omitted.

// de_ResourceConfig omitted.

// de_ResourceInUse omitted.

// de_ResourceLimitExceeded omitted.

// de_ResourceLimits omitted.

// de_ResourceNotFound omitted.

// de_ResourceSpec omitted.

// de_ResponseMIMETypes omitted.

// de_RetryPipelineExecutionResponse omitted.

// de_RetryStrategy omitted.

// de_RollingUpdatePolicy omitted.

// de_RSessionAppSettings omitted.

// de_RStudioServerProAppSettings omitted.

// de_RStudioServerProDomainSettings omitted.

// de_RuleParameters omitted.

// de_S3DataSource omitted.

// de_S3ModelDataSource omitted.

// de_S3StorageConfig omitted.

// de_SageMakerImageVersionAliases omitted.

// de_ScheduleConfig omitted.

/**
 * deserializeAws_json1_1SearchRecord
 */
const de_SearchRecord = (output: any, context: __SerdeContext): SearchRecord => {
  return take(output, {
    Endpoint: (_: any) => de_Endpoint(_, context),
    Experiment: (_: any) => de_Experiment(_, context),
    FeatureGroup: (_: any) => de_FeatureGroup(_, context),
    FeatureMetadata: (_: any) => de_FeatureMetadata(_, context),
    HyperParameterTuningJob: (_: any) => de_HyperParameterTuningJobSearchEntity(_, context),
    Model: (_: any) => de_ModelDashboardModel(_, context),
    ModelCard: (_: any) => de_ModelCard(_, context),
    ModelPackage: (_: any) => de_ModelPackage(_, context),
    ModelPackageGroup: (_: any) => de_ModelPackageGroup(_, context),
    Pipeline: (_: any) => de_Pipeline(_, context),
    PipelineExecution: (_: any) => de_PipelineExecution(_, context),
    Project: (_: any) => de_Project(_, context),
    TrainingJob: (_: any) => de_TrainingJob(_, context),
    Trial: (_: any) => de_Trial(_, context),
    TrialComponent: (_: any) => de_TrialComponent(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SearchResponse
 */
const de_SearchResponse = (output: any, context: __SerdeContext): SearchResponse => {
  return take(output, {
    NextToken: __expectString,
    Results: (_: any) => de_SearchResultsList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1SearchResultsList
 */
const de_SearchResultsList = (output: any, context: __SerdeContext): SearchRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SearchRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SecondaryStatusTransition
 */
const de_SecondaryStatusTransition = (output: any, context: __SerdeContext): SecondaryStatusTransition => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SecondaryStatusTransitions
 */
const de_SecondaryStatusTransitions = (output: any, context: __SerdeContext): SecondaryStatusTransition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SecondaryStatusTransition(entry, context);
    });
  return retVal;
};

// de_SecurityGroupIds omitted.

// de_SelectedStep omitted.

// de_SelectedStepList omitted.

// de_SelectiveExecutionConfig omitted.

// de_SelectiveExecutionResult omitted.

// de_SendPipelineExecutionStepFailureResponse omitted.

// de_SendPipelineExecutionStepSuccessResponse omitted.

// de_ServiceCatalogProvisionedProductDetails omitted.

// de_ServiceCatalogProvisioningDetails omitted.

// de_ShadowModeConfig omitted.

// de_ShadowModelVariantConfig omitted.

// de_ShadowModelVariantConfigList omitted.

// de_SharingSettings omitted.

// de_ShuffleConfig omitted.

// de_SourceAlgorithm omitted.

// de_SourceAlgorithmList omitted.

// de_SourceAlgorithmSpecification omitted.

// de_SourceIpConfig omitted.

/**
 * deserializeAws_json1_1SpaceDetails
 */
const de_SpaceDetails = (output: any, context: __SerdeContext): SpaceDetails => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SpaceName: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1SpaceList
 */
const de_SpaceList = (output: any, context: __SerdeContext): SpaceDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SpaceDetails(entry, context);
    });
  return retVal;
};

// de_SpaceSettings omitted.

// de_StartInferenceExperimentResponse omitted.

// de_StartPipelineExecutionResponse omitted.

// de_StopInferenceExperimentResponse omitted.

// de_StoppingCondition omitted.

// de_StopPipelineExecutionResponse omitted.

/**
 * deserializeAws_json1_1StudioLifecycleConfigDetails
 */
const de_StudioLifecycleConfigDetails = (output: any, context: __SerdeContext): StudioLifecycleConfigDetails => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StudioLifecycleConfigAppType: __expectString,
    StudioLifecycleConfigArn: __expectString,
    StudioLifecycleConfigName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1StudioLifecycleConfigsList
 */
const de_StudioLifecycleConfigsList = (output: any, context: __SerdeContext): StudioLifecycleConfigDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StudioLifecycleConfigDetails(entry, context);
    });
  return retVal;
};

// de_Subnets omitted.

// de_SubscribedWorkteam omitted.

// de_SubscribedWorkteams omitted.

// de_TabularJobConfig omitted.

// de_TabularResolvedAttributes omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TargetPlatform omitted.

// de_TaskKeywords omitted.

// de_TensorBoardAppSettings omitted.

// de_TensorBoardOutputConfig omitted.

// de_TextClassificationJobConfig omitted.

// de_TimeSeriesConfig omitted.

// de_TimeSeriesForecastingJobConfig omitted.

// de_TimeSeriesForecastingSettings omitted.

// de_TimeSeriesTransformations omitted.

// de_TrafficPattern omitted.

// de_TrafficRoutingConfig omitted.

// de_TrainingContainerArguments omitted.

// de_TrainingContainerEntrypoint omitted.

// de_TrainingEnvironmentMap omitted.

// de_TrainingImageConfig omitted.

// de_TrainingInstanceTypes omitted.

/**
 * deserializeAws_json1_1TrainingJob
 */
const de_TrainingJob = (output: any, context: __SerdeContext): TrainingJob => {
  return take(output, {
    AlgorithmSpecification: _json,
    AutoMLJobArn: __expectString,
    BillableTimeInSeconds: __expectInt32,
    CheckpointConfig: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DebugHookConfig: _json,
    DebugRuleConfigurations: _json,
    DebugRuleEvaluationStatuses: (_: any) => de_DebugRuleEvaluationStatuses(_, context),
    EnableInterContainerTrafficEncryption: __expectBoolean,
    EnableManagedSpotTraining: __expectBoolean,
    EnableNetworkIsolation: __expectBoolean,
    Environment: _json,
    ExperimentConfig: _json,
    FailureReason: __expectString,
    FinalMetricDataList: (_: any) => de_FinalMetricDataList(_, context),
    HyperParameters: _json,
    InputDataConfig: _json,
    LabelingJobArn: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelArtifacts: _json,
    OutputDataConfig: _json,
    ResourceConfig: _json,
    RetryStrategy: _json,
    RoleArn: __expectString,
    SecondaryStatus: __expectString,
    SecondaryStatusTransitions: (_: any) => de_SecondaryStatusTransitions(_, context),
    StoppingCondition: _json,
    Tags: _json,
    TensorBoardOutputConfig: _json,
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingJobArn: __expectString,
    TrainingJobName: __expectString,
    TrainingJobStatus: __expectString,
    TrainingStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingTimeInSeconds: __expectInt32,
    TuningJobArn: __expectString,
    VpcConfig: _json,
  }) as any;
};

// de_TrainingJobDefinition omitted.

// de_TrainingJobStatusCounters omitted.

// de_TrainingJobStepMetadata omitted.

/**
 * deserializeAws_json1_1TrainingJobSummaries
 */
const de_TrainingJobSummaries = (output: any, context: __SerdeContext): TrainingJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrainingJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrainingJobSummary
 */
const de_TrainingJobSummary = (output: any, context: __SerdeContext): TrainingJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrainingJobArn: __expectString,
    TrainingJobName: __expectString,
    TrainingJobStatus: __expectString,
    WarmPoolStatus: _json,
  }) as any;
};

// de_TrainingRepositoryAuthConfig omitted.

// de_TrainingSpecification omitted.

// de_TransformDataSource omitted.

// de_TransformEnvironmentMap omitted.

// de_TransformInput omitted.

// de_TransformInstanceTypes omitted.

/**
 * deserializeAws_json1_1TransformJob
 */
const de_TransformJob = (output: any, context: __SerdeContext): TransformJob => {
  return take(output, {
    AutoMLJobArn: __expectString,
    BatchStrategy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataProcessing: _json,
    Environment: _json,
    ExperimentConfig: _json,
    FailureReason: __expectString,
    LabelingJobArn: __expectString,
    MaxConcurrentTransforms: __expectInt32,
    MaxPayloadInMB: __expectInt32,
    ModelClientConfig: _json,
    ModelName: __expectString,
    Tags: _json,
    TransformEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransformInput: _json,
    TransformJobArn: __expectString,
    TransformJobName: __expectString,
    TransformJobStatus: __expectString,
    TransformOutput: _json,
    TransformResources: _json,
    TransformStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TransformJobDefinition omitted.

// de_TransformJobStepMetadata omitted.

/**
 * deserializeAws_json1_1TransformJobSummaries
 */
const de_TransformJobSummaries = (output: any, context: __SerdeContext): TransformJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TransformJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TransformJobSummary
 */
const de_TransformJobSummary = (output: any, context: __SerdeContext): TransformJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransformEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransformJobArn: __expectString,
    TransformJobName: __expectString,
    TransformJobStatus: __expectString,
  }) as any;
};

// de_TransformOutput omitted.

// de_TransformResources omitted.

// de_TransformS3DataSource omitted.

/**
 * deserializeAws_json1_1Trial
 */
const de_Trial = (output: any, context: __SerdeContext): Trial => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    ExperimentName: __expectString,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MetadataProperties: _json,
    Source: _json,
    Tags: _json,
    TrialArn: __expectString,
    TrialComponentSummaries: (_: any) => de_TrialComponentSimpleSummaries(_, context),
    TrialName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponent
 */
const de_TrialComponent = (output: any, context: __SerdeContext): TrialComponent => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputArtifacts: _json,
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LineageGroupArn: __expectString,
    MetadataProperties: _json,
    Metrics: (_: any) => de_TrialComponentMetricSummaries(_, context),
    OutputArtifacts: _json,
    Parameters: (_: any) => de_TrialComponentParameters(_, context),
    Parents: _json,
    RunName: __expectString,
    Source: _json,
    SourceDetail: (_: any) => de_TrialComponentSourceDetail(_, context),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: _json,
    Tags: _json,
    TrialComponentArn: __expectString,
    TrialComponentName: __expectString,
  }) as any;
};

// de_TrialComponentArtifact omitted.

// de_TrialComponentArtifacts omitted.

/**
 * deserializeAws_json1_1TrialComponentMetricSummaries
 */
const de_TrialComponentMetricSummaries = (output: any, context: __SerdeContext): TrialComponentMetricSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialComponentMetricSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialComponentMetricSummary
 */
const de_TrialComponentMetricSummary = (output: any, context: __SerdeContext): TrialComponentMetricSummary => {
  return take(output, {
    Avg: __limitedParseDouble,
    Count: __expectInt32,
    Last: __limitedParseDouble,
    Max: __limitedParseDouble,
    MetricName: __expectString,
    Min: __limitedParseDouble,
    SourceArn: __expectString,
    StdDev: __limitedParseDouble,
    TimeStamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1TrialComponentParameters
 */
const de_TrialComponentParameters = (
  output: any,
  context: __SerdeContext
): Record<string, TrialComponentParameterValue> => {
  return Object.entries(output).reduce(
    (acc: Record<string, TrialComponentParameterValue>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_TrialComponentParameterValue(__expectUnion(value), context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1TrialComponentParameterValue
 */
const de_TrialComponentParameterValue = (output: any, context: __SerdeContext): TrialComponentParameterValue => {
  if (__limitedParseDouble(output.NumberValue) !== undefined) {
    return { NumberValue: __limitedParseDouble(output.NumberValue) as any };
  }
  if (__expectString(output.StringValue) !== undefined) {
    return { StringValue: __expectString(output.StringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_1TrialComponentSimpleSummaries
 */
const de_TrialComponentSimpleSummaries = (output: any, context: __SerdeContext): TrialComponentSimpleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialComponentSimpleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialComponentSimpleSummary
 */
const de_TrialComponentSimpleSummary = (output: any, context: __SerdeContext): TrialComponentSimpleSummary => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrialComponentArn: __expectString,
    TrialComponentName: __expectString,
    TrialComponentSource: _json,
  }) as any;
};

// de_TrialComponentSource omitted.

/**
 * deserializeAws_json1_1TrialComponentSourceDetail
 */
const de_TrialComponentSourceDetail = (output: any, context: __SerdeContext): TrialComponentSourceDetail => {
  return take(output, {
    ProcessingJob: (_: any) => de_ProcessingJob(_, context),
    SourceArn: __expectString,
    TrainingJob: (_: any) => de_TrainingJob(_, context),
    TransformJob: (_: any) => de_TransformJob(_, context),
  }) as any;
};

// de_TrialComponentSources omitted.

// de_TrialComponentStatus omitted.

/**
 * deserializeAws_json1_1TrialComponentSummaries
 */
const de_TrialComponentSummaries = (output: any, context: __SerdeContext): TrialComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialComponentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialComponentSummary
 */
const de_TrialComponentSummary = (output: any, context: __SerdeContext): TrialComponentSummary => {
  return take(output, {
    CreatedBy: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedBy: _json,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: _json,
    TrialComponentArn: __expectString,
    TrialComponentName: __expectString,
    TrialComponentSource: _json,
  }) as any;
};

// de_TrialSource omitted.

/**
 * deserializeAws_json1_1TrialSummaries
 */
const de_TrialSummaries = (output: any, context: __SerdeContext): TrialSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TrialSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrialSummary
 */
const de_TrialSummary = (output: any, context: __SerdeContext): TrialSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DisplayName: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TrialArn: __expectString,
    TrialName: __expectString,
    TrialSource: _json,
  }) as any;
};

// de_TtlDuration omitted.

/**
 * deserializeAws_json1_1TuningJobCompletionCriteria
 */
const de_TuningJobCompletionCriteria = (output: any, context: __SerdeContext): TuningJobCompletionCriteria => {
  return take(output, {
    BestObjectiveNotImproving: _json,
    ConvergenceDetected: _json,
    TargetObjectiveMetricValue: __limitedParseFloat32,
  }) as any;
};

// de_TuningJobStepMetaData omitted.

// de_UiConfig omitted.

// de_UiTemplateInfo omitted.

// de_UpdateActionResponse omitted.

// de_UpdateAppImageConfigResponse omitted.

// de_UpdateArtifactResponse omitted.

// de_UpdateCodeRepositoryOutput omitted.

// de_UpdateContextResponse omitted.

// de_UpdateDomainResponse omitted.

// de_UpdateEndpointOutput omitted.

// de_UpdateEndpointWeightsAndCapacitiesOutput omitted.

// de_UpdateExperimentResponse omitted.

// de_UpdateFeatureGroupResponse omitted.

// de_UpdateHubResponse omitted.

// de_UpdateImageResponse omitted.

// de_UpdateImageVersionResponse omitted.

// de_UpdateInferenceExperimentResponse omitted.

// de_UpdateModelCardResponse omitted.

// de_UpdateModelPackageOutput omitted.

// de_UpdateMonitoringAlertResponse omitted.

// de_UpdateMonitoringScheduleResponse omitted.

// de_UpdateNotebookInstanceLifecycleConfigOutput omitted.

// de_UpdateNotebookInstanceOutput omitted.

// de_UpdatePipelineExecutionResponse omitted.

// de_UpdatePipelineResponse omitted.

// de_UpdateProjectOutput omitted.

// de_UpdateSpaceResponse omitted.

// de_UpdateTrainingJobResponse omitted.

// de_UpdateTrialComponentResponse omitted.

// de_UpdateTrialResponse omitted.

// de_UpdateUserProfileResponse omitted.

/**
 * deserializeAws_json1_1UpdateWorkforceResponse
 */
const de_UpdateWorkforceResponse = (output: any, context: __SerdeContext): UpdateWorkforceResponse => {
  return take(output, {
    Workforce: (_: any) => de_Workforce(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateWorkteamResponse
 */
const de_UpdateWorkteamResponse = (output: any, context: __SerdeContext): UpdateWorkteamResponse => {
  return take(output, {
    Workteam: (_: any) => de_Workteam(_, context),
  }) as any;
};

// de_USD omitted.

// de_UserContext omitted.

/**
 * deserializeAws_json1_1UserProfileDetails
 */
const de_UserProfileDetails = (output: any, context: __SerdeContext): UserProfileDetails => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainId: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    UserProfileName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UserProfileList
 */
const de_UserProfileList = (output: any, context: __SerdeContext): UserProfileDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserProfileDetails(entry, context);
    });
  return retVal;
};

// de_UserSettings omitted.

// de_Vertex omitted.

// de_Vertices omitted.

// de_VpcConfig omitted.

// de_VpcSecurityGroupIds omitted.

// de_WarmPoolStatus omitted.

/**
 * deserializeAws_json1_1Workforce
 */
const de_Workforce = (output: any, context: __SerdeContext): Workforce => {
  return take(output, {
    CognitoConfig: _json,
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OidcConfig: _json,
    SourceIpConfig: _json,
    Status: __expectString,
    SubDomain: __expectString,
    WorkforceArn: __expectString,
    WorkforceName: __expectString,
    WorkforceVpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1Workforces
 */
const de_Workforces = (output: any, context: __SerdeContext): Workforce[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Workforce(entry, context);
    });
  return retVal;
};

// de_WorkforceSecurityGroupIds omitted.

// de_WorkforceSubnets omitted.

// de_WorkforceVpcConfigResponse omitted.

/**
 * deserializeAws_json1_1Workteam
 */
const de_Workteam = (output: any, context: __SerdeContext): Workteam => {
  return take(output, {
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LastUpdatedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MemberDefinitions: _json,
    NotificationConfiguration: _json,
    ProductListingIds: _json,
    SubDomain: __expectString,
    WorkforceArn: __expectString,
    WorkteamArn: __expectString,
    WorkteamName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Workteams
 */
const de_Workteams = (output: any, context: __SerdeContext): Workteam[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Workteam(entry, context);
    });
  return retVal;
};

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

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `SageMaker.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
