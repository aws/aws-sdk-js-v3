// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { AddAssociationCommandInput, AddAssociationCommandOutput } from "./commands/AddAssociationCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  AssociateTrialComponentCommandInput,
  AssociateTrialComponentCommandOutput,
} from "./commands/AssociateTrialComponentCommand";
import {
  BatchDescribeModelPackageCommandInput,
  BatchDescribeModelPackageCommandOutput,
} from "./commands/BatchDescribeModelPackageCommand";
import { CreateActionCommandInput, CreateActionCommandOutput } from "./commands/CreateActionCommand";
import { CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput } from "./commands/CreateAlgorithmCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import {
  CreateAppImageConfigCommandInput,
  CreateAppImageConfigCommandOutput,
} from "./commands/CreateAppImageConfigCommand";
import { CreateArtifactCommandInput, CreateArtifactCommandOutput } from "./commands/CreateArtifactCommand";
import { CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput } from "./commands/CreateAutoMLJobCommand";
import {
  CreateCodeRepositoryCommandInput,
  CreateCodeRepositoryCommandOutput,
} from "./commands/CreateCodeRepositoryCommand";
import {
  CreateCompilationJobCommandInput,
  CreateCompilationJobCommandOutput,
} from "./commands/CreateCompilationJobCommand";
import { CreateContextCommandInput, CreateContextCommandOutput } from "./commands/CreateContextCommand";
import {
  CreateDataQualityJobDefinitionCommandInput,
  CreateDataQualityJobDefinitionCommandOutput,
} from "./commands/CreateDataQualityJobDefinitionCommand";
import { CreateDeviceFleetCommandInput, CreateDeviceFleetCommandOutput } from "./commands/CreateDeviceFleetCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import {
  CreateEdgeDeploymentPlanCommandInput,
  CreateEdgeDeploymentPlanCommandOutput,
} from "./commands/CreateEdgeDeploymentPlanCommand";
import {
  CreateEdgeDeploymentStageCommandInput,
  CreateEdgeDeploymentStageCommandOutput,
} from "./commands/CreateEdgeDeploymentStageCommand";
import {
  CreateEdgePackagingJobCommandInput,
  CreateEdgePackagingJobCommandOutput,
} from "./commands/CreateEdgePackagingJobCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import {
  CreateEndpointConfigCommandInput,
  CreateEndpointConfigCommandOutput,
} from "./commands/CreateEndpointConfigCommand";
import { CreateExperimentCommandInput, CreateExperimentCommandOutput } from "./commands/CreateExperimentCommand";
import { CreateFeatureGroupCommandInput, CreateFeatureGroupCommandOutput } from "./commands/CreateFeatureGroupCommand";
import {
  CreateFlowDefinitionCommandInput,
  CreateFlowDefinitionCommandOutput,
} from "./commands/CreateFlowDefinitionCommand";
import { CreateHubCommandInput, CreateHubCommandOutput } from "./commands/CreateHubCommand";
import { CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput } from "./commands/CreateHumanTaskUiCommand";
import {
  CreateHyperParameterTuningJobCommandInput,
  CreateHyperParameterTuningJobCommandOutput,
} from "./commands/CreateHyperParameterTuningJobCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import { CreateImageVersionCommandInput, CreateImageVersionCommandOutput } from "./commands/CreateImageVersionCommand";
import {
  CreateInferenceExperimentCommandInput,
  CreateInferenceExperimentCommandOutput,
} from "./commands/CreateInferenceExperimentCommand";
import {
  CreateInferenceRecommendationsJobCommandInput,
  CreateInferenceRecommendationsJobCommandOutput,
} from "./commands/CreateInferenceRecommendationsJobCommand";
import { CreateLabelingJobCommandInput, CreateLabelingJobCommandOutput } from "./commands/CreateLabelingJobCommand";
import {
  CreateModelBiasJobDefinitionCommandInput,
  CreateModelBiasJobDefinitionCommandOutput,
} from "./commands/CreateModelBiasJobDefinitionCommand";
import { CreateModelCardCommandInput, CreateModelCardCommandOutput } from "./commands/CreateModelCardCommand";
import {
  CreateModelCardExportJobCommandInput,
  CreateModelCardExportJobCommandOutput,
} from "./commands/CreateModelCardExportJobCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateModelExplainabilityJobDefinitionCommandInput,
  CreateModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/CreateModelExplainabilityJobDefinitionCommand";
import { CreateModelPackageCommandInput, CreateModelPackageCommandOutput } from "./commands/CreateModelPackageCommand";
import {
  CreateModelPackageGroupCommandInput,
  CreateModelPackageGroupCommandOutput,
} from "./commands/CreateModelPackageGroupCommand";
import {
  CreateModelQualityJobDefinitionCommandInput,
  CreateModelQualityJobDefinitionCommandOutput,
} from "./commands/CreateModelQualityJobDefinitionCommand";
import {
  CreateMonitoringScheduleCommandInput,
  CreateMonitoringScheduleCommandOutput,
} from "./commands/CreateMonitoringScheduleCommand";
import {
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput,
} from "./commands/CreateNotebookInstanceCommand";
import {
  CreateNotebookInstanceLifecycleConfigCommandInput,
  CreateNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/CreateNotebookInstanceLifecycleConfigCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import {
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
} from "./commands/CreatePresignedDomainUrlCommand";
import {
  CreatePresignedNotebookInstanceUrlCommandInput,
  CreatePresignedNotebookInstanceUrlCommandOutput,
} from "./commands/CreatePresignedNotebookInstanceUrlCommand";
import {
  CreateProcessingJobCommandInput,
  CreateProcessingJobCommandOutput,
} from "./commands/CreateProcessingJobCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateSpaceCommandInput, CreateSpaceCommandOutput } from "./commands/CreateSpaceCommand";
import {
  CreateStudioLifecycleConfigCommandInput,
  CreateStudioLifecycleConfigCommandOutput,
} from "./commands/CreateStudioLifecycleConfigCommand";
import { CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput } from "./commands/CreateTrainingJobCommand";
import { CreateTransformJobCommandInput, CreateTransformJobCommandOutput } from "./commands/CreateTransformJobCommand";
import { CreateTrialCommandInput, CreateTrialCommandOutput } from "./commands/CreateTrialCommand";
import {
  CreateTrialComponentCommandInput,
  CreateTrialComponentCommandOutput,
} from "./commands/CreateTrialComponentCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { CreateWorkforceCommandInput, CreateWorkforceCommandOutput } from "./commands/CreateWorkforceCommand";
import { CreateWorkteamCommandInput, CreateWorkteamCommandOutput } from "./commands/CreateWorkteamCommand";
import { DeleteActionCommandInput, DeleteActionCommandOutput } from "./commands/DeleteActionCommand";
import { DeleteAlgorithmCommandInput, DeleteAlgorithmCommandOutput } from "./commands/DeleteAlgorithmCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import {
  DeleteAppImageConfigCommandInput,
  DeleteAppImageConfigCommandOutput,
} from "./commands/DeleteAppImageConfigCommand";
import { DeleteArtifactCommandInput, DeleteArtifactCommandOutput } from "./commands/DeleteArtifactCommand";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput } from "./commands/DeleteAssociationCommand";
import {
  DeleteCodeRepositoryCommandInput,
  DeleteCodeRepositoryCommandOutput,
} from "./commands/DeleteCodeRepositoryCommand";
import { DeleteContextCommandInput, DeleteContextCommandOutput } from "./commands/DeleteContextCommand";
import {
  DeleteDataQualityJobDefinitionCommandInput,
  DeleteDataQualityJobDefinitionCommandOutput,
} from "./commands/DeleteDataQualityJobDefinitionCommand";
import { DeleteDeviceFleetCommandInput, DeleteDeviceFleetCommandOutput } from "./commands/DeleteDeviceFleetCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import {
  DeleteEdgeDeploymentPlanCommandInput,
  DeleteEdgeDeploymentPlanCommandOutput,
} from "./commands/DeleteEdgeDeploymentPlanCommand";
import {
  DeleteEdgeDeploymentStageCommandInput,
  DeleteEdgeDeploymentStageCommandOutput,
} from "./commands/DeleteEdgeDeploymentStageCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import {
  DeleteEndpointConfigCommandInput,
  DeleteEndpointConfigCommandOutput,
} from "./commands/DeleteEndpointConfigCommand";
import { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "./commands/DeleteExperimentCommand";
import { DeleteFeatureGroupCommandInput, DeleteFeatureGroupCommandOutput } from "./commands/DeleteFeatureGroupCommand";
import {
  DeleteFlowDefinitionCommandInput,
  DeleteFlowDefinitionCommandOutput,
} from "./commands/DeleteFlowDefinitionCommand";
import { DeleteHubCommandInput, DeleteHubCommandOutput } from "./commands/DeleteHubCommand";
import { DeleteHubContentCommandInput, DeleteHubContentCommandOutput } from "./commands/DeleteHubContentCommand";
import { DeleteHumanTaskUiCommandInput, DeleteHumanTaskUiCommandOutput } from "./commands/DeleteHumanTaskUiCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import { DeleteImageVersionCommandInput, DeleteImageVersionCommandOutput } from "./commands/DeleteImageVersionCommand";
import {
  DeleteInferenceExperimentCommandInput,
  DeleteInferenceExperimentCommandOutput,
} from "./commands/DeleteInferenceExperimentCommand";
import {
  DeleteModelBiasJobDefinitionCommandInput,
  DeleteModelBiasJobDefinitionCommandOutput,
} from "./commands/DeleteModelBiasJobDefinitionCommand";
import { DeleteModelCardCommandInput, DeleteModelCardCommandOutput } from "./commands/DeleteModelCardCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteModelExplainabilityJobDefinitionCommandInput,
  DeleteModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/DeleteModelExplainabilityJobDefinitionCommand";
import { DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput } from "./commands/DeleteModelPackageCommand";
import {
  DeleteModelPackageGroupCommandInput,
  DeleteModelPackageGroupCommandOutput,
} from "./commands/DeleteModelPackageGroupCommand";
import {
  DeleteModelPackageGroupPolicyCommandInput,
  DeleteModelPackageGroupPolicyCommandOutput,
} from "./commands/DeleteModelPackageGroupPolicyCommand";
import {
  DeleteModelQualityJobDefinitionCommandInput,
  DeleteModelQualityJobDefinitionCommandOutput,
} from "./commands/DeleteModelQualityJobDefinitionCommand";
import {
  DeleteMonitoringScheduleCommandInput,
  DeleteMonitoringScheduleCommandOutput,
} from "./commands/DeleteMonitoringScheduleCommand";
import {
  DeleteNotebookInstanceCommandInput,
  DeleteNotebookInstanceCommandOutput,
} from "./commands/DeleteNotebookInstanceCommand";
import {
  DeleteNotebookInstanceLifecycleConfigCommandInput,
  DeleteNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/DeleteNotebookInstanceLifecycleConfigCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "./commands/DeleteSpaceCommand";
import {
  DeleteStudioLifecycleConfigCommandInput,
  DeleteStudioLifecycleConfigCommandOutput,
} from "./commands/DeleteStudioLifecycleConfigCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteTrialCommandInput, DeleteTrialCommandOutput } from "./commands/DeleteTrialCommand";
import {
  DeleteTrialComponentCommandInput,
  DeleteTrialComponentCommandOutput,
} from "./commands/DeleteTrialComponentCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand";
import { DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput } from "./commands/DeleteWorkforceCommand";
import { DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput } from "./commands/DeleteWorkteamCommand";
import { DeregisterDevicesCommandInput, DeregisterDevicesCommandOutput } from "./commands/DeregisterDevicesCommand";
import { DescribeActionCommandInput, DescribeActionCommandOutput } from "./commands/DescribeActionCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "./commands/DescribeAlgorithmCommand";
import { DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import {
  DescribeAppImageConfigCommandInput,
  DescribeAppImageConfigCommandOutput,
} from "./commands/DescribeAppImageConfigCommand";
import { DescribeArtifactCommandInput, DescribeArtifactCommandOutput } from "./commands/DescribeArtifactCommand";
import { DescribeAutoMLJobCommandInput, DescribeAutoMLJobCommandOutput } from "./commands/DescribeAutoMLJobCommand";
import {
  DescribeCodeRepositoryCommandInput,
  DescribeCodeRepositoryCommandOutput,
} from "./commands/DescribeCodeRepositoryCommand";
import {
  DescribeCompilationJobCommandInput,
  DescribeCompilationJobCommandOutput,
} from "./commands/DescribeCompilationJobCommand";
import { DescribeContextCommandInput, DescribeContextCommandOutput } from "./commands/DescribeContextCommand";
import {
  DescribeDataQualityJobDefinitionCommandInput,
  DescribeDataQualityJobDefinitionCommandOutput,
} from "./commands/DescribeDataQualityJobDefinitionCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "./commands/DescribeDeviceCommand";
import {
  DescribeDeviceFleetCommandInput,
  DescribeDeviceFleetCommandOutput,
} from "./commands/DescribeDeviceFleetCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import {
  DescribeEdgeDeploymentPlanCommandInput,
  DescribeEdgeDeploymentPlanCommandOutput,
} from "./commands/DescribeEdgeDeploymentPlanCommand";
import {
  DescribeEdgePackagingJobCommandInput,
  DescribeEdgePackagingJobCommandOutput,
} from "./commands/DescribeEdgePackagingJobCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import {
  DescribeEndpointConfigCommandInput,
  DescribeEndpointConfigCommandOutput,
} from "./commands/DescribeEndpointConfigCommand";
import { DescribeExperimentCommandInput, DescribeExperimentCommandOutput } from "./commands/DescribeExperimentCommand";
import {
  DescribeFeatureGroupCommandInput,
  DescribeFeatureGroupCommandOutput,
} from "./commands/DescribeFeatureGroupCommand";
import {
  DescribeFeatureMetadataCommandInput,
  DescribeFeatureMetadataCommandOutput,
} from "./commands/DescribeFeatureMetadataCommand";
import {
  DescribeFlowDefinitionCommandInput,
  DescribeFlowDefinitionCommandOutput,
} from "./commands/DescribeFlowDefinitionCommand";
import { DescribeHubCommandInput, DescribeHubCommandOutput } from "./commands/DescribeHubCommand";
import { DescribeHubContentCommandInput, DescribeHubContentCommandOutput } from "./commands/DescribeHubContentCommand";
import {
  DescribeHumanTaskUiCommandInput,
  DescribeHumanTaskUiCommandOutput,
} from "./commands/DescribeHumanTaskUiCommand";
import {
  DescribeHyperParameterTuningJobCommandInput,
  DescribeHyperParameterTuningJobCommandOutput,
} from "./commands/DescribeHyperParameterTuningJobCommand";
import { DescribeImageCommandInput, DescribeImageCommandOutput } from "./commands/DescribeImageCommand";
import {
  DescribeImageVersionCommandInput,
  DescribeImageVersionCommandOutput,
} from "./commands/DescribeImageVersionCommand";
import {
  DescribeInferenceExperimentCommandInput,
  DescribeInferenceExperimentCommandOutput,
} from "./commands/DescribeInferenceExperimentCommand";
import {
  DescribeInferenceRecommendationsJobCommandInput,
  DescribeInferenceRecommendationsJobCommandOutput,
} from "./commands/DescribeInferenceRecommendationsJobCommand";
import {
  DescribeLabelingJobCommandInput,
  DescribeLabelingJobCommandOutput,
} from "./commands/DescribeLabelingJobCommand";
import {
  DescribeLineageGroupCommandInput,
  DescribeLineageGroupCommandOutput,
} from "./commands/DescribeLineageGroupCommand";
import {
  DescribeModelBiasJobDefinitionCommandInput,
  DescribeModelBiasJobDefinitionCommandOutput,
} from "./commands/DescribeModelBiasJobDefinitionCommand";
import { DescribeModelCardCommandInput, DescribeModelCardCommandOutput } from "./commands/DescribeModelCardCommand";
import {
  DescribeModelCardExportJobCommandInput,
  DescribeModelCardExportJobCommandOutput,
} from "./commands/DescribeModelCardExportJobCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "./commands/DescribeModelCommand";
import {
  DescribeModelExplainabilityJobDefinitionCommandInput,
  DescribeModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/DescribeModelExplainabilityJobDefinitionCommand";
import {
  DescribeModelPackageCommandInput,
  DescribeModelPackageCommandOutput,
} from "./commands/DescribeModelPackageCommand";
import {
  DescribeModelPackageGroupCommandInput,
  DescribeModelPackageGroupCommandOutput,
} from "./commands/DescribeModelPackageGroupCommand";
import {
  DescribeModelQualityJobDefinitionCommandInput,
  DescribeModelQualityJobDefinitionCommandOutput,
} from "./commands/DescribeModelQualityJobDefinitionCommand";
import {
  DescribeMonitoringScheduleCommandInput,
  DescribeMonitoringScheduleCommandOutput,
} from "./commands/DescribeMonitoringScheduleCommand";
import {
  DescribeNotebookInstanceCommandInput,
  DescribeNotebookInstanceCommandOutput,
} from "./commands/DescribeNotebookInstanceCommand";
import {
  DescribeNotebookInstanceLifecycleConfigCommandInput,
  DescribeNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/DescribeNotebookInstanceLifecycleConfigCommand";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "./commands/DescribePipelineCommand";
import {
  DescribePipelineDefinitionForExecutionCommandInput,
  DescribePipelineDefinitionForExecutionCommandOutput,
} from "./commands/DescribePipelineDefinitionForExecutionCommand";
import {
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
} from "./commands/DescribePipelineExecutionCommand";
import {
  DescribeProcessingJobCommandInput,
  DescribeProcessingJobCommandOutput,
} from "./commands/DescribeProcessingJobCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { DescribeSpaceCommandInput, DescribeSpaceCommandOutput } from "./commands/DescribeSpaceCommand";
import {
  DescribeStudioLifecycleConfigCommandInput,
  DescribeStudioLifecycleConfigCommandOutput,
} from "./commands/DescribeStudioLifecycleConfigCommand";
import {
  DescribeSubscribedWorkteamCommandInput,
  DescribeSubscribedWorkteamCommandOutput,
} from "./commands/DescribeSubscribedWorkteamCommand";
import {
  DescribeTrainingJobCommandInput,
  DescribeTrainingJobCommandOutput,
} from "./commands/DescribeTrainingJobCommand";
import {
  DescribeTransformJobCommandInput,
  DescribeTransformJobCommandOutput,
} from "./commands/DescribeTransformJobCommand";
import { DescribeTrialCommandInput, DescribeTrialCommandOutput } from "./commands/DescribeTrialCommand";
import {
  DescribeTrialComponentCommandInput,
  DescribeTrialComponentCommandOutput,
} from "./commands/DescribeTrialComponentCommand";
import {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "./commands/DescribeUserProfileCommand";
import { DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput } from "./commands/DescribeWorkforceCommand";
import { DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput } from "./commands/DescribeWorkteamCommand";
import {
  DisableSagemakerServicecatalogPortfolioCommandInput,
  DisableSagemakerServicecatalogPortfolioCommandOutput,
} from "./commands/DisableSagemakerServicecatalogPortfolioCommand";
import {
  DisassociateTrialComponentCommandInput,
  DisassociateTrialComponentCommandOutput,
} from "./commands/DisassociateTrialComponentCommand";
import {
  EnableSagemakerServicecatalogPortfolioCommandInput,
  EnableSagemakerServicecatalogPortfolioCommandOutput,
} from "./commands/EnableSagemakerServicecatalogPortfolioCommand";
import {
  GetDeviceFleetReportCommandInput,
  GetDeviceFleetReportCommandOutput,
} from "./commands/GetDeviceFleetReportCommand";
import {
  GetLineageGroupPolicyCommandInput,
  GetLineageGroupPolicyCommandOutput,
} from "./commands/GetLineageGroupPolicyCommand";
import {
  GetModelPackageGroupPolicyCommandInput,
  GetModelPackageGroupPolicyCommandOutput,
} from "./commands/GetModelPackageGroupPolicyCommand";
import {
  GetSagemakerServicecatalogPortfolioStatusCommandInput,
  GetSagemakerServicecatalogPortfolioStatusCommandOutput,
} from "./commands/GetSagemakerServicecatalogPortfolioStatusCommand";
import {
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput,
} from "./commands/GetSearchSuggestionsCommand";
import { ImportHubContentCommandInput, ImportHubContentCommandOutput } from "./commands/ImportHubContentCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import { ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput } from "./commands/ListAlgorithmsCommand";
import { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import {
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput,
} from "./commands/ListAppImageConfigsCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "./commands/ListArtifactsCommand";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "./commands/ListAssociationsCommand";
import { ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput } from "./commands/ListAutoMLJobsCommand";
import {
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
} from "./commands/ListCandidatesForAutoMLJobCommand";
import {
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput,
} from "./commands/ListCodeRepositoriesCommand";
import {
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
} from "./commands/ListCompilationJobsCommand";
import { ListContextsCommandInput, ListContextsCommandOutput } from "./commands/ListContextsCommand";
import {
  ListDataQualityJobDefinitionsCommandInput,
  ListDataQualityJobDefinitionsCommandOutput,
} from "./commands/ListDataQualityJobDefinitionsCommand";
import { ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput } from "./commands/ListDeviceFleetsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListEdgeDeploymentPlansCommandInput,
  ListEdgeDeploymentPlansCommandOutput,
} from "./commands/ListEdgeDeploymentPlansCommand";
import {
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
} from "./commands/ListEdgePackagingJobsCommand";
import {
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput,
} from "./commands/ListEndpointConfigsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "./commands/ListEndpointsCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "./commands/ListExperimentsCommand";
import { ListFeatureGroupsCommandInput, ListFeatureGroupsCommandOutput } from "./commands/ListFeatureGroupsCommand";
import {
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput,
} from "./commands/ListFlowDefinitionsCommand";
import { ListHubContentsCommandInput, ListHubContentsCommandOutput } from "./commands/ListHubContentsCommand";
import {
  ListHubContentVersionsCommandInput,
  ListHubContentVersionsCommandOutput,
} from "./commands/ListHubContentVersionsCommand";
import { ListHubsCommandInput, ListHubsCommandOutput } from "./commands/ListHubsCommand";
import { ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput } from "./commands/ListHumanTaskUisCommand";
import {
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput,
} from "./commands/ListHyperParameterTuningJobsCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import { ListImageVersionsCommandInput, ListImageVersionsCommandOutput } from "./commands/ListImageVersionsCommand";
import {
  ListInferenceExperimentsCommandInput,
  ListInferenceExperimentsCommandOutput,
} from "./commands/ListInferenceExperimentsCommand";
import {
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput,
} from "./commands/ListInferenceRecommendationsJobsCommand";
import {
  ListInferenceRecommendationsJobStepsCommandInput,
  ListInferenceRecommendationsJobStepsCommandOutput,
} from "./commands/ListInferenceRecommendationsJobStepsCommand";
import { ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput } from "./commands/ListLabelingJobsCommand";
import {
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
} from "./commands/ListLabelingJobsForWorkteamCommand";
import { ListLineageGroupsCommandInput, ListLineageGroupsCommandOutput } from "./commands/ListLineageGroupsCommand";
import {
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput,
} from "./commands/ListModelBiasJobDefinitionsCommand";
import {
  ListModelCardExportJobsCommandInput,
  ListModelCardExportJobsCommandOutput,
} from "./commands/ListModelCardExportJobsCommand";
import { ListModelCardsCommandInput, ListModelCardsCommandOutput } from "./commands/ListModelCardsCommand";
import {
  ListModelCardVersionsCommandInput,
  ListModelCardVersionsCommandOutput,
} from "./commands/ListModelCardVersionsCommand";
import {
  ListModelExplainabilityJobDefinitionsCommandInput,
  ListModelExplainabilityJobDefinitionsCommandOutput,
} from "./commands/ListModelExplainabilityJobDefinitionsCommand";
import { ListModelMetadataCommandInput, ListModelMetadataCommandOutput } from "./commands/ListModelMetadataCommand";
import {
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
} from "./commands/ListModelPackageGroupsCommand";
import { ListModelPackagesCommandInput, ListModelPackagesCommandOutput } from "./commands/ListModelPackagesCommand";
import {
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
} from "./commands/ListModelQualityJobDefinitionsCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import {
  ListMonitoringAlertHistoryCommandInput,
  ListMonitoringAlertHistoryCommandOutput,
} from "./commands/ListMonitoringAlertHistoryCommand";
import {
  ListMonitoringAlertsCommandInput,
  ListMonitoringAlertsCommandOutput,
} from "./commands/ListMonitoringAlertsCommand";
import {
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
} from "./commands/ListMonitoringExecutionsCommand";
import {
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
} from "./commands/ListMonitoringSchedulesCommand";
import {
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
} from "./commands/ListNotebookInstanceLifecycleConfigsCommand";
import {
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput,
} from "./commands/ListNotebookInstancesCommand";
import {
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "./commands/ListPipelineExecutionsCommand";
import {
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
} from "./commands/ListPipelineExecutionStepsCommand";
import {
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
} from "./commands/ListPipelineParametersForExecutionCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import { ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput } from "./commands/ListProcessingJobsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListSpacesCommandInput, ListSpacesCommandOutput } from "./commands/ListSpacesCommand";
import { ListStageDevicesCommandInput, ListStageDevicesCommandOutput } from "./commands/ListStageDevicesCommand";
import {
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
} from "./commands/ListStudioLifecycleConfigsCommand";
import {
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
} from "./commands/ListSubscribedWorkteamsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput } from "./commands/ListTrainingJobsCommand";
import {
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
} from "./commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { ListTransformJobsCommandInput, ListTransformJobsCommandOutput } from "./commands/ListTransformJobsCommand";
import {
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
} from "./commands/ListTrialComponentsCommand";
import { ListTrialsCommandInput, ListTrialsCommandOutput } from "./commands/ListTrialsCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "./commands/ListUserProfilesCommand";
import { ListWorkforcesCommandInput, ListWorkforcesCommandOutput } from "./commands/ListWorkforcesCommand";
import { ListWorkteamsCommandInput, ListWorkteamsCommandOutput } from "./commands/ListWorkteamsCommand";
import {
  PutModelPackageGroupPolicyCommandInput,
  PutModelPackageGroupPolicyCommandOutput,
} from "./commands/PutModelPackageGroupPolicyCommand";
import { QueryLineageCommandInput, QueryLineageCommandOutput } from "./commands/QueryLineageCommand";
import { RegisterDevicesCommandInput, RegisterDevicesCommandOutput } from "./commands/RegisterDevicesCommand";
import { RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput } from "./commands/RenderUiTemplateCommand";
import {
  RetryPipelineExecutionCommandInput,
  RetryPipelineExecutionCommandOutput,
} from "./commands/RetryPipelineExecutionCommand";
import { SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import {
  SendPipelineExecutionStepFailureCommandInput,
  SendPipelineExecutionStepFailureCommandOutput,
} from "./commands/SendPipelineExecutionStepFailureCommand";
import {
  SendPipelineExecutionStepSuccessCommandInput,
  SendPipelineExecutionStepSuccessCommandOutput,
} from "./commands/SendPipelineExecutionStepSuccessCommand";
import {
  StartEdgeDeploymentStageCommandInput,
  StartEdgeDeploymentStageCommandOutput,
} from "./commands/StartEdgeDeploymentStageCommand";
import {
  StartInferenceExperimentCommandInput,
  StartInferenceExperimentCommandOutput,
} from "./commands/StartInferenceExperimentCommand";
import {
  StartMonitoringScheduleCommandInput,
  StartMonitoringScheduleCommandOutput,
} from "./commands/StartMonitoringScheduleCommand";
import {
  StartNotebookInstanceCommandInput,
  StartNotebookInstanceCommandOutput,
} from "./commands/StartNotebookInstanceCommand";
import {
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "./commands/StartPipelineExecutionCommand";
import { StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput } from "./commands/StopAutoMLJobCommand";
import { StopCompilationJobCommandInput, StopCompilationJobCommandOutput } from "./commands/StopCompilationJobCommand";
import {
  StopEdgeDeploymentStageCommandInput,
  StopEdgeDeploymentStageCommandOutput,
} from "./commands/StopEdgeDeploymentStageCommand";
import {
  StopEdgePackagingJobCommandInput,
  StopEdgePackagingJobCommandOutput,
} from "./commands/StopEdgePackagingJobCommand";
import {
  StopHyperParameterTuningJobCommandInput,
  StopHyperParameterTuningJobCommandOutput,
} from "./commands/StopHyperParameterTuningJobCommand";
import {
  StopInferenceExperimentCommandInput,
  StopInferenceExperimentCommandOutput,
} from "./commands/StopInferenceExperimentCommand";
import {
  StopInferenceRecommendationsJobCommandInput,
  StopInferenceRecommendationsJobCommandOutput,
} from "./commands/StopInferenceRecommendationsJobCommand";
import { StopLabelingJobCommandInput, StopLabelingJobCommandOutput } from "./commands/StopLabelingJobCommand";
import {
  StopMonitoringScheduleCommandInput,
  StopMonitoringScheduleCommandOutput,
} from "./commands/StopMonitoringScheduleCommand";
import {
  StopNotebookInstanceCommandInput,
  StopNotebookInstanceCommandOutput,
} from "./commands/StopNotebookInstanceCommand";
import {
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "./commands/StopPipelineExecutionCommand";
import { StopProcessingJobCommandInput, StopProcessingJobCommandOutput } from "./commands/StopProcessingJobCommand";
import { StopTrainingJobCommandInput, StopTrainingJobCommandOutput } from "./commands/StopTrainingJobCommand";
import { StopTransformJobCommandInput, StopTransformJobCommandOutput } from "./commands/StopTransformJobCommand";
import { UpdateActionCommandInput, UpdateActionCommandOutput } from "./commands/UpdateActionCommand";
import {
  UpdateAppImageConfigCommandInput,
  UpdateAppImageConfigCommandOutput,
} from "./commands/UpdateAppImageConfigCommand";
import { UpdateArtifactCommandInput, UpdateArtifactCommandOutput } from "./commands/UpdateArtifactCommand";
import {
  UpdateCodeRepositoryCommandInput,
  UpdateCodeRepositoryCommandOutput,
} from "./commands/UpdateCodeRepositoryCommand";
import { UpdateContextCommandInput, UpdateContextCommandOutput } from "./commands/UpdateContextCommand";
import { UpdateDeviceFleetCommandInput, UpdateDeviceFleetCommandOutput } from "./commands/UpdateDeviceFleetCommand";
import { UpdateDevicesCommandInput, UpdateDevicesCommandOutput } from "./commands/UpdateDevicesCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import {
  UpdateEndpointWeightsAndCapacitiesCommandInput,
  UpdateEndpointWeightsAndCapacitiesCommandOutput,
} from "./commands/UpdateEndpointWeightsAndCapacitiesCommand";
import { UpdateExperimentCommandInput, UpdateExperimentCommandOutput } from "./commands/UpdateExperimentCommand";
import { UpdateFeatureGroupCommandInput, UpdateFeatureGroupCommandOutput } from "./commands/UpdateFeatureGroupCommand";
import {
  UpdateFeatureMetadataCommandInput,
  UpdateFeatureMetadataCommandOutput,
} from "./commands/UpdateFeatureMetadataCommand";
import { UpdateHubCommandInput, UpdateHubCommandOutput } from "./commands/UpdateHubCommand";
import { UpdateImageCommandInput, UpdateImageCommandOutput } from "./commands/UpdateImageCommand";
import { UpdateImageVersionCommandInput, UpdateImageVersionCommandOutput } from "./commands/UpdateImageVersionCommand";
import {
  UpdateInferenceExperimentCommandInput,
  UpdateInferenceExperimentCommandOutput,
} from "./commands/UpdateInferenceExperimentCommand";
import { UpdateModelCardCommandInput, UpdateModelCardCommandOutput } from "./commands/UpdateModelCardCommand";
import { UpdateModelPackageCommandInput, UpdateModelPackageCommandOutput } from "./commands/UpdateModelPackageCommand";
import {
  UpdateMonitoringAlertCommandInput,
  UpdateMonitoringAlertCommandOutput,
} from "./commands/UpdateMonitoringAlertCommand";
import {
  UpdateMonitoringScheduleCommandInput,
  UpdateMonitoringScheduleCommandOutput,
} from "./commands/UpdateMonitoringScheduleCommand";
import {
  UpdateNotebookInstanceCommandInput,
  UpdateNotebookInstanceCommandOutput,
} from "./commands/UpdateNotebookInstanceCommand";
import {
  UpdateNotebookInstanceLifecycleConfigCommandInput,
  UpdateNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/UpdateNotebookInstanceLifecycleConfigCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
import {
  UpdatePipelineExecutionCommandInput,
  UpdatePipelineExecutionCommandOutput,
} from "./commands/UpdatePipelineExecutionCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "./commands/UpdateSpaceCommand";
import { UpdateTrainingJobCommandInput, UpdateTrainingJobCommandOutput } from "./commands/UpdateTrainingJobCommand";
import { UpdateTrialCommandInput, UpdateTrialCommandOutput } from "./commands/UpdateTrialCommand";
import {
  UpdateTrialComponentCommandInput,
  UpdateTrialComponentCommandOutput,
} from "./commands/UpdateTrialComponentCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import { UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput } from "./commands/UpdateWorkforceCommand";
import { UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput } from "./commands/UpdateWorkteamCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AddAssociationCommandInput
  | AddTagsCommandInput
  | AssociateTrialComponentCommandInput
  | BatchDescribeModelPackageCommandInput
  | CreateActionCommandInput
  | CreateAlgorithmCommandInput
  | CreateAppCommandInput
  | CreateAppImageConfigCommandInput
  | CreateArtifactCommandInput
  | CreateAutoMLJobCommandInput
  | CreateCodeRepositoryCommandInput
  | CreateCompilationJobCommandInput
  | CreateContextCommandInput
  | CreateDataQualityJobDefinitionCommandInput
  | CreateDeviceFleetCommandInput
  | CreateDomainCommandInput
  | CreateEdgeDeploymentPlanCommandInput
  | CreateEdgeDeploymentStageCommandInput
  | CreateEdgePackagingJobCommandInput
  | CreateEndpointCommandInput
  | CreateEndpointConfigCommandInput
  | CreateExperimentCommandInput
  | CreateFeatureGroupCommandInput
  | CreateFlowDefinitionCommandInput
  | CreateHubCommandInput
  | CreateHumanTaskUiCommandInput
  | CreateHyperParameterTuningJobCommandInput
  | CreateImageCommandInput
  | CreateImageVersionCommandInput
  | CreateInferenceExperimentCommandInput
  | CreateInferenceRecommendationsJobCommandInput
  | CreateLabelingJobCommandInput
  | CreateModelBiasJobDefinitionCommandInput
  | CreateModelCardCommandInput
  | CreateModelCardExportJobCommandInput
  | CreateModelCommandInput
  | CreateModelExplainabilityJobDefinitionCommandInput
  | CreateModelPackageCommandInput
  | CreateModelPackageGroupCommandInput
  | CreateModelQualityJobDefinitionCommandInput
  | CreateMonitoringScheduleCommandInput
  | CreateNotebookInstanceCommandInput
  | CreateNotebookInstanceLifecycleConfigCommandInput
  | CreatePipelineCommandInput
  | CreatePresignedDomainUrlCommandInput
  | CreatePresignedNotebookInstanceUrlCommandInput
  | CreateProcessingJobCommandInput
  | CreateProjectCommandInput
  | CreateSpaceCommandInput
  | CreateStudioLifecycleConfigCommandInput
  | CreateTrainingJobCommandInput
  | CreateTransformJobCommandInput
  | CreateTrialCommandInput
  | CreateTrialComponentCommandInput
  | CreateUserProfileCommandInput
  | CreateWorkforceCommandInput
  | CreateWorkteamCommandInput
  | DeleteActionCommandInput
  | DeleteAlgorithmCommandInput
  | DeleteAppCommandInput
  | DeleteAppImageConfigCommandInput
  | DeleteArtifactCommandInput
  | DeleteAssociationCommandInput
  | DeleteCodeRepositoryCommandInput
  | DeleteContextCommandInput
  | DeleteDataQualityJobDefinitionCommandInput
  | DeleteDeviceFleetCommandInput
  | DeleteDomainCommandInput
  | DeleteEdgeDeploymentPlanCommandInput
  | DeleteEdgeDeploymentStageCommandInput
  | DeleteEndpointCommandInput
  | DeleteEndpointConfigCommandInput
  | DeleteExperimentCommandInput
  | DeleteFeatureGroupCommandInput
  | DeleteFlowDefinitionCommandInput
  | DeleteHubCommandInput
  | DeleteHubContentCommandInput
  | DeleteHumanTaskUiCommandInput
  | DeleteImageCommandInput
  | DeleteImageVersionCommandInput
  | DeleteInferenceExperimentCommandInput
  | DeleteModelBiasJobDefinitionCommandInput
  | DeleteModelCardCommandInput
  | DeleteModelCommandInput
  | DeleteModelExplainabilityJobDefinitionCommandInput
  | DeleteModelPackageCommandInput
  | DeleteModelPackageGroupCommandInput
  | DeleteModelPackageGroupPolicyCommandInput
  | DeleteModelQualityJobDefinitionCommandInput
  | DeleteMonitoringScheduleCommandInput
  | DeleteNotebookInstanceCommandInput
  | DeleteNotebookInstanceLifecycleConfigCommandInput
  | DeletePipelineCommandInput
  | DeleteProjectCommandInput
  | DeleteSpaceCommandInput
  | DeleteStudioLifecycleConfigCommandInput
  | DeleteTagsCommandInput
  | DeleteTrialCommandInput
  | DeleteTrialComponentCommandInput
  | DeleteUserProfileCommandInput
  | DeleteWorkforceCommandInput
  | DeleteWorkteamCommandInput
  | DeregisterDevicesCommandInput
  | DescribeActionCommandInput
  | DescribeAlgorithmCommandInput
  | DescribeAppCommandInput
  | DescribeAppImageConfigCommandInput
  | DescribeArtifactCommandInput
  | DescribeAutoMLJobCommandInput
  | DescribeCodeRepositoryCommandInput
  | DescribeCompilationJobCommandInput
  | DescribeContextCommandInput
  | DescribeDataQualityJobDefinitionCommandInput
  | DescribeDeviceCommandInput
  | DescribeDeviceFleetCommandInput
  | DescribeDomainCommandInput
  | DescribeEdgeDeploymentPlanCommandInput
  | DescribeEdgePackagingJobCommandInput
  | DescribeEndpointCommandInput
  | DescribeEndpointConfigCommandInput
  | DescribeExperimentCommandInput
  | DescribeFeatureGroupCommandInput
  | DescribeFeatureMetadataCommandInput
  | DescribeFlowDefinitionCommandInput
  | DescribeHubCommandInput
  | DescribeHubContentCommandInput
  | DescribeHumanTaskUiCommandInput
  | DescribeHyperParameterTuningJobCommandInput
  | DescribeImageCommandInput
  | DescribeImageVersionCommandInput
  | DescribeInferenceExperimentCommandInput
  | DescribeInferenceRecommendationsJobCommandInput
  | DescribeLabelingJobCommandInput
  | DescribeLineageGroupCommandInput
  | DescribeModelBiasJobDefinitionCommandInput
  | DescribeModelCardCommandInput
  | DescribeModelCardExportJobCommandInput
  | DescribeModelCommandInput
  | DescribeModelExplainabilityJobDefinitionCommandInput
  | DescribeModelPackageCommandInput
  | DescribeModelPackageGroupCommandInput
  | DescribeModelQualityJobDefinitionCommandInput
  | DescribeMonitoringScheduleCommandInput
  | DescribeNotebookInstanceCommandInput
  | DescribeNotebookInstanceLifecycleConfigCommandInput
  | DescribePipelineCommandInput
  | DescribePipelineDefinitionForExecutionCommandInput
  | DescribePipelineExecutionCommandInput
  | DescribeProcessingJobCommandInput
  | DescribeProjectCommandInput
  | DescribeSpaceCommandInput
  | DescribeStudioLifecycleConfigCommandInput
  | DescribeSubscribedWorkteamCommandInput
  | DescribeTrainingJobCommandInput
  | DescribeTransformJobCommandInput
  | DescribeTrialCommandInput
  | DescribeTrialComponentCommandInput
  | DescribeUserProfileCommandInput
  | DescribeWorkforceCommandInput
  | DescribeWorkteamCommandInput
  | DisableSagemakerServicecatalogPortfolioCommandInput
  | DisassociateTrialComponentCommandInput
  | EnableSagemakerServicecatalogPortfolioCommandInput
  | GetDeviceFleetReportCommandInput
  | GetLineageGroupPolicyCommandInput
  | GetModelPackageGroupPolicyCommandInput
  | GetSagemakerServicecatalogPortfolioStatusCommandInput
  | GetSearchSuggestionsCommandInput
  | ImportHubContentCommandInput
  | ListActionsCommandInput
  | ListAlgorithmsCommandInput
  | ListAliasesCommandInput
  | ListAppImageConfigsCommandInput
  | ListAppsCommandInput
  | ListArtifactsCommandInput
  | ListAssociationsCommandInput
  | ListAutoMLJobsCommandInput
  | ListCandidatesForAutoMLJobCommandInput
  | ListCodeRepositoriesCommandInput
  | ListCompilationJobsCommandInput
  | ListContextsCommandInput
  | ListDataQualityJobDefinitionsCommandInput
  | ListDeviceFleetsCommandInput
  | ListDevicesCommandInput
  | ListDomainsCommandInput
  | ListEdgeDeploymentPlansCommandInput
  | ListEdgePackagingJobsCommandInput
  | ListEndpointConfigsCommandInput
  | ListEndpointsCommandInput
  | ListExperimentsCommandInput
  | ListFeatureGroupsCommandInput
  | ListFlowDefinitionsCommandInput
  | ListHubContentVersionsCommandInput
  | ListHubContentsCommandInput
  | ListHubsCommandInput
  | ListHumanTaskUisCommandInput
  | ListHyperParameterTuningJobsCommandInput
  | ListImageVersionsCommandInput
  | ListImagesCommandInput
  | ListInferenceExperimentsCommandInput
  | ListInferenceRecommendationsJobStepsCommandInput
  | ListInferenceRecommendationsJobsCommandInput
  | ListLabelingJobsCommandInput
  | ListLabelingJobsForWorkteamCommandInput
  | ListLineageGroupsCommandInput
  | ListModelBiasJobDefinitionsCommandInput
  | ListModelCardExportJobsCommandInput
  | ListModelCardVersionsCommandInput
  | ListModelCardsCommandInput
  | ListModelExplainabilityJobDefinitionsCommandInput
  | ListModelMetadataCommandInput
  | ListModelPackageGroupsCommandInput
  | ListModelPackagesCommandInput
  | ListModelQualityJobDefinitionsCommandInput
  | ListModelsCommandInput
  | ListMonitoringAlertHistoryCommandInput
  | ListMonitoringAlertsCommandInput
  | ListMonitoringExecutionsCommandInput
  | ListMonitoringSchedulesCommandInput
  | ListNotebookInstanceLifecycleConfigsCommandInput
  | ListNotebookInstancesCommandInput
  | ListPipelineExecutionStepsCommandInput
  | ListPipelineExecutionsCommandInput
  | ListPipelineParametersForExecutionCommandInput
  | ListPipelinesCommandInput
  | ListProcessingJobsCommandInput
  | ListProjectsCommandInput
  | ListSpacesCommandInput
  | ListStageDevicesCommandInput
  | ListStudioLifecycleConfigsCommandInput
  | ListSubscribedWorkteamsCommandInput
  | ListTagsCommandInput
  | ListTrainingJobsCommandInput
  | ListTrainingJobsForHyperParameterTuningJobCommandInput
  | ListTransformJobsCommandInput
  | ListTrialComponentsCommandInput
  | ListTrialsCommandInput
  | ListUserProfilesCommandInput
  | ListWorkforcesCommandInput
  | ListWorkteamsCommandInput
  | PutModelPackageGroupPolicyCommandInput
  | QueryLineageCommandInput
  | RegisterDevicesCommandInput
  | RenderUiTemplateCommandInput
  | RetryPipelineExecutionCommandInput
  | SearchCommandInput
  | SendPipelineExecutionStepFailureCommandInput
  | SendPipelineExecutionStepSuccessCommandInput
  | StartEdgeDeploymentStageCommandInput
  | StartInferenceExperimentCommandInput
  | StartMonitoringScheduleCommandInput
  | StartNotebookInstanceCommandInput
  | StartPipelineExecutionCommandInput
  | StopAutoMLJobCommandInput
  | StopCompilationJobCommandInput
  | StopEdgeDeploymentStageCommandInput
  | StopEdgePackagingJobCommandInput
  | StopHyperParameterTuningJobCommandInput
  | StopInferenceExperimentCommandInput
  | StopInferenceRecommendationsJobCommandInput
  | StopLabelingJobCommandInput
  | StopMonitoringScheduleCommandInput
  | StopNotebookInstanceCommandInput
  | StopPipelineExecutionCommandInput
  | StopProcessingJobCommandInput
  | StopTrainingJobCommandInput
  | StopTransformJobCommandInput
  | UpdateActionCommandInput
  | UpdateAppImageConfigCommandInput
  | UpdateArtifactCommandInput
  | UpdateCodeRepositoryCommandInput
  | UpdateContextCommandInput
  | UpdateDeviceFleetCommandInput
  | UpdateDevicesCommandInput
  | UpdateDomainCommandInput
  | UpdateEndpointCommandInput
  | UpdateEndpointWeightsAndCapacitiesCommandInput
  | UpdateExperimentCommandInput
  | UpdateFeatureGroupCommandInput
  | UpdateFeatureMetadataCommandInput
  | UpdateHubCommandInput
  | UpdateImageCommandInput
  | UpdateImageVersionCommandInput
  | UpdateInferenceExperimentCommandInput
  | UpdateModelCardCommandInput
  | UpdateModelPackageCommandInput
  | UpdateMonitoringAlertCommandInput
  | UpdateMonitoringScheduleCommandInput
  | UpdateNotebookInstanceCommandInput
  | UpdateNotebookInstanceLifecycleConfigCommandInput
  | UpdatePipelineCommandInput
  | UpdatePipelineExecutionCommandInput
  | UpdateProjectCommandInput
  | UpdateSpaceCommandInput
  | UpdateTrainingJobCommandInput
  | UpdateTrialCommandInput
  | UpdateTrialComponentCommandInput
  | UpdateUserProfileCommandInput
  | UpdateWorkforceCommandInput
  | UpdateWorkteamCommandInput;

export type ServiceOutputTypes =
  | AddAssociationCommandOutput
  | AddTagsCommandOutput
  | AssociateTrialComponentCommandOutput
  | BatchDescribeModelPackageCommandOutput
  | CreateActionCommandOutput
  | CreateAlgorithmCommandOutput
  | CreateAppCommandOutput
  | CreateAppImageConfigCommandOutput
  | CreateArtifactCommandOutput
  | CreateAutoMLJobCommandOutput
  | CreateCodeRepositoryCommandOutput
  | CreateCompilationJobCommandOutput
  | CreateContextCommandOutput
  | CreateDataQualityJobDefinitionCommandOutput
  | CreateDeviceFleetCommandOutput
  | CreateDomainCommandOutput
  | CreateEdgeDeploymentPlanCommandOutput
  | CreateEdgeDeploymentStageCommandOutput
  | CreateEdgePackagingJobCommandOutput
  | CreateEndpointCommandOutput
  | CreateEndpointConfigCommandOutput
  | CreateExperimentCommandOutput
  | CreateFeatureGroupCommandOutput
  | CreateFlowDefinitionCommandOutput
  | CreateHubCommandOutput
  | CreateHumanTaskUiCommandOutput
  | CreateHyperParameterTuningJobCommandOutput
  | CreateImageCommandOutput
  | CreateImageVersionCommandOutput
  | CreateInferenceExperimentCommandOutput
  | CreateInferenceRecommendationsJobCommandOutput
  | CreateLabelingJobCommandOutput
  | CreateModelBiasJobDefinitionCommandOutput
  | CreateModelCardCommandOutput
  | CreateModelCardExportJobCommandOutput
  | CreateModelCommandOutput
  | CreateModelExplainabilityJobDefinitionCommandOutput
  | CreateModelPackageCommandOutput
  | CreateModelPackageGroupCommandOutput
  | CreateModelQualityJobDefinitionCommandOutput
  | CreateMonitoringScheduleCommandOutput
  | CreateNotebookInstanceCommandOutput
  | CreateNotebookInstanceLifecycleConfigCommandOutput
  | CreatePipelineCommandOutput
  | CreatePresignedDomainUrlCommandOutput
  | CreatePresignedNotebookInstanceUrlCommandOutput
  | CreateProcessingJobCommandOutput
  | CreateProjectCommandOutput
  | CreateSpaceCommandOutput
  | CreateStudioLifecycleConfigCommandOutput
  | CreateTrainingJobCommandOutput
  | CreateTransformJobCommandOutput
  | CreateTrialCommandOutput
  | CreateTrialComponentCommandOutput
  | CreateUserProfileCommandOutput
  | CreateWorkforceCommandOutput
  | CreateWorkteamCommandOutput
  | DeleteActionCommandOutput
  | DeleteAlgorithmCommandOutput
  | DeleteAppCommandOutput
  | DeleteAppImageConfigCommandOutput
  | DeleteArtifactCommandOutput
  | DeleteAssociationCommandOutput
  | DeleteCodeRepositoryCommandOutput
  | DeleteContextCommandOutput
  | DeleteDataQualityJobDefinitionCommandOutput
  | DeleteDeviceFleetCommandOutput
  | DeleteDomainCommandOutput
  | DeleteEdgeDeploymentPlanCommandOutput
  | DeleteEdgeDeploymentStageCommandOutput
  | DeleteEndpointCommandOutput
  | DeleteEndpointConfigCommandOutput
  | DeleteExperimentCommandOutput
  | DeleteFeatureGroupCommandOutput
  | DeleteFlowDefinitionCommandOutput
  | DeleteHubCommandOutput
  | DeleteHubContentCommandOutput
  | DeleteHumanTaskUiCommandOutput
  | DeleteImageCommandOutput
  | DeleteImageVersionCommandOutput
  | DeleteInferenceExperimentCommandOutput
  | DeleteModelBiasJobDefinitionCommandOutput
  | DeleteModelCardCommandOutput
  | DeleteModelCommandOutput
  | DeleteModelExplainabilityJobDefinitionCommandOutput
  | DeleteModelPackageCommandOutput
  | DeleteModelPackageGroupCommandOutput
  | DeleteModelPackageGroupPolicyCommandOutput
  | DeleteModelQualityJobDefinitionCommandOutput
  | DeleteMonitoringScheduleCommandOutput
  | DeleteNotebookInstanceCommandOutput
  | DeleteNotebookInstanceLifecycleConfigCommandOutput
  | DeletePipelineCommandOutput
  | DeleteProjectCommandOutput
  | DeleteSpaceCommandOutput
  | DeleteStudioLifecycleConfigCommandOutput
  | DeleteTagsCommandOutput
  | DeleteTrialCommandOutput
  | DeleteTrialComponentCommandOutput
  | DeleteUserProfileCommandOutput
  | DeleteWorkforceCommandOutput
  | DeleteWorkteamCommandOutput
  | DeregisterDevicesCommandOutput
  | DescribeActionCommandOutput
  | DescribeAlgorithmCommandOutput
  | DescribeAppCommandOutput
  | DescribeAppImageConfigCommandOutput
  | DescribeArtifactCommandOutput
  | DescribeAutoMLJobCommandOutput
  | DescribeCodeRepositoryCommandOutput
  | DescribeCompilationJobCommandOutput
  | DescribeContextCommandOutput
  | DescribeDataQualityJobDefinitionCommandOutput
  | DescribeDeviceCommandOutput
  | DescribeDeviceFleetCommandOutput
  | DescribeDomainCommandOutput
  | DescribeEdgeDeploymentPlanCommandOutput
  | DescribeEdgePackagingJobCommandOutput
  | DescribeEndpointCommandOutput
  | DescribeEndpointConfigCommandOutput
  | DescribeExperimentCommandOutput
  | DescribeFeatureGroupCommandOutput
  | DescribeFeatureMetadataCommandOutput
  | DescribeFlowDefinitionCommandOutput
  | DescribeHubCommandOutput
  | DescribeHubContentCommandOutput
  | DescribeHumanTaskUiCommandOutput
  | DescribeHyperParameterTuningJobCommandOutput
  | DescribeImageCommandOutput
  | DescribeImageVersionCommandOutput
  | DescribeInferenceExperimentCommandOutput
  | DescribeInferenceRecommendationsJobCommandOutput
  | DescribeLabelingJobCommandOutput
  | DescribeLineageGroupCommandOutput
  | DescribeModelBiasJobDefinitionCommandOutput
  | DescribeModelCardCommandOutput
  | DescribeModelCardExportJobCommandOutput
  | DescribeModelCommandOutput
  | DescribeModelExplainabilityJobDefinitionCommandOutput
  | DescribeModelPackageCommandOutput
  | DescribeModelPackageGroupCommandOutput
  | DescribeModelQualityJobDefinitionCommandOutput
  | DescribeMonitoringScheduleCommandOutput
  | DescribeNotebookInstanceCommandOutput
  | DescribeNotebookInstanceLifecycleConfigCommandOutput
  | DescribePipelineCommandOutput
  | DescribePipelineDefinitionForExecutionCommandOutput
  | DescribePipelineExecutionCommandOutput
  | DescribeProcessingJobCommandOutput
  | DescribeProjectCommandOutput
  | DescribeSpaceCommandOutput
  | DescribeStudioLifecycleConfigCommandOutput
  | DescribeSubscribedWorkteamCommandOutput
  | DescribeTrainingJobCommandOutput
  | DescribeTransformJobCommandOutput
  | DescribeTrialCommandOutput
  | DescribeTrialComponentCommandOutput
  | DescribeUserProfileCommandOutput
  | DescribeWorkforceCommandOutput
  | DescribeWorkteamCommandOutput
  | DisableSagemakerServicecatalogPortfolioCommandOutput
  | DisassociateTrialComponentCommandOutput
  | EnableSagemakerServicecatalogPortfolioCommandOutput
  | GetDeviceFleetReportCommandOutput
  | GetLineageGroupPolicyCommandOutput
  | GetModelPackageGroupPolicyCommandOutput
  | GetSagemakerServicecatalogPortfolioStatusCommandOutput
  | GetSearchSuggestionsCommandOutput
  | ImportHubContentCommandOutput
  | ListActionsCommandOutput
  | ListAlgorithmsCommandOutput
  | ListAliasesCommandOutput
  | ListAppImageConfigsCommandOutput
  | ListAppsCommandOutput
  | ListArtifactsCommandOutput
  | ListAssociationsCommandOutput
  | ListAutoMLJobsCommandOutput
  | ListCandidatesForAutoMLJobCommandOutput
  | ListCodeRepositoriesCommandOutput
  | ListCompilationJobsCommandOutput
  | ListContextsCommandOutput
  | ListDataQualityJobDefinitionsCommandOutput
  | ListDeviceFleetsCommandOutput
  | ListDevicesCommandOutput
  | ListDomainsCommandOutput
  | ListEdgeDeploymentPlansCommandOutput
  | ListEdgePackagingJobsCommandOutput
  | ListEndpointConfigsCommandOutput
  | ListEndpointsCommandOutput
  | ListExperimentsCommandOutput
  | ListFeatureGroupsCommandOutput
  | ListFlowDefinitionsCommandOutput
  | ListHubContentVersionsCommandOutput
  | ListHubContentsCommandOutput
  | ListHubsCommandOutput
  | ListHumanTaskUisCommandOutput
  | ListHyperParameterTuningJobsCommandOutput
  | ListImageVersionsCommandOutput
  | ListImagesCommandOutput
  | ListInferenceExperimentsCommandOutput
  | ListInferenceRecommendationsJobStepsCommandOutput
  | ListInferenceRecommendationsJobsCommandOutput
  | ListLabelingJobsCommandOutput
  | ListLabelingJobsForWorkteamCommandOutput
  | ListLineageGroupsCommandOutput
  | ListModelBiasJobDefinitionsCommandOutput
  | ListModelCardExportJobsCommandOutput
  | ListModelCardVersionsCommandOutput
  | ListModelCardsCommandOutput
  | ListModelExplainabilityJobDefinitionsCommandOutput
  | ListModelMetadataCommandOutput
  | ListModelPackageGroupsCommandOutput
  | ListModelPackagesCommandOutput
  | ListModelQualityJobDefinitionsCommandOutput
  | ListModelsCommandOutput
  | ListMonitoringAlertHistoryCommandOutput
  | ListMonitoringAlertsCommandOutput
  | ListMonitoringExecutionsCommandOutput
  | ListMonitoringSchedulesCommandOutput
  | ListNotebookInstanceLifecycleConfigsCommandOutput
  | ListNotebookInstancesCommandOutput
  | ListPipelineExecutionStepsCommandOutput
  | ListPipelineExecutionsCommandOutput
  | ListPipelineParametersForExecutionCommandOutput
  | ListPipelinesCommandOutput
  | ListProcessingJobsCommandOutput
  | ListProjectsCommandOutput
  | ListSpacesCommandOutput
  | ListStageDevicesCommandOutput
  | ListStudioLifecycleConfigsCommandOutput
  | ListSubscribedWorkteamsCommandOutput
  | ListTagsCommandOutput
  | ListTrainingJobsCommandOutput
  | ListTrainingJobsForHyperParameterTuningJobCommandOutput
  | ListTransformJobsCommandOutput
  | ListTrialComponentsCommandOutput
  | ListTrialsCommandOutput
  | ListUserProfilesCommandOutput
  | ListWorkforcesCommandOutput
  | ListWorkteamsCommandOutput
  | PutModelPackageGroupPolicyCommandOutput
  | QueryLineageCommandOutput
  | RegisterDevicesCommandOutput
  | RenderUiTemplateCommandOutput
  | RetryPipelineExecutionCommandOutput
  | SearchCommandOutput
  | SendPipelineExecutionStepFailureCommandOutput
  | SendPipelineExecutionStepSuccessCommandOutput
  | StartEdgeDeploymentStageCommandOutput
  | StartInferenceExperimentCommandOutput
  | StartMonitoringScheduleCommandOutput
  | StartNotebookInstanceCommandOutput
  | StartPipelineExecutionCommandOutput
  | StopAutoMLJobCommandOutput
  | StopCompilationJobCommandOutput
  | StopEdgeDeploymentStageCommandOutput
  | StopEdgePackagingJobCommandOutput
  | StopHyperParameterTuningJobCommandOutput
  | StopInferenceExperimentCommandOutput
  | StopInferenceRecommendationsJobCommandOutput
  | StopLabelingJobCommandOutput
  | StopMonitoringScheduleCommandOutput
  | StopNotebookInstanceCommandOutput
  | StopPipelineExecutionCommandOutput
  | StopProcessingJobCommandOutput
  | StopTrainingJobCommandOutput
  | StopTransformJobCommandOutput
  | UpdateActionCommandOutput
  | UpdateAppImageConfigCommandOutput
  | UpdateArtifactCommandOutput
  | UpdateCodeRepositoryCommandOutput
  | UpdateContextCommandOutput
  | UpdateDeviceFleetCommandOutput
  | UpdateDevicesCommandOutput
  | UpdateDomainCommandOutput
  | UpdateEndpointCommandOutput
  | UpdateEndpointWeightsAndCapacitiesCommandOutput
  | UpdateExperimentCommandOutput
  | UpdateFeatureGroupCommandOutput
  | UpdateFeatureMetadataCommandOutput
  | UpdateHubCommandOutput
  | UpdateImageCommandOutput
  | UpdateImageVersionCommandOutput
  | UpdateInferenceExperimentCommandOutput
  | UpdateModelCardCommandOutput
  | UpdateModelPackageCommandOutput
  | UpdateMonitoringAlertCommandOutput
  | UpdateMonitoringScheduleCommandOutput
  | UpdateNotebookInstanceCommandOutput
  | UpdateNotebookInstanceLifecycleConfigCommandOutput
  | UpdatePipelineCommandOutput
  | UpdatePipelineExecutionCommandOutput
  | UpdateProjectCommandOutput
  | UpdateSpaceCommandOutput
  | UpdateTrainingJobCommandOutput
  | UpdateTrialCommandOutput
  | UpdateTrialComponentCommandOutput
  | UpdateUserProfileCommandOutput
  | UpdateWorkforceCommandOutput
  | UpdateWorkteamCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type SageMakerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of SageMakerClient class constructor that set the region, credentials and other options.
 */
export interface SageMakerClientConfig extends SageMakerClientConfigType {}

type SageMakerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of SageMakerClient class. This is resolved and normalized from the {@link SageMakerClientConfig | constructor configuration interface}.
 */
export interface SageMakerClientResolvedConfig extends SageMakerClientResolvedConfigType {}

/**
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
export class SageMakerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  SageMakerClientResolvedConfig
> {
  /**
   * The resolved configuration of SageMakerClient class. This is resolved and normalized from the {@link SageMakerClientConfig | constructor configuration interface}.
   */
  readonly config: SageMakerClientResolvedConfig;

  constructor(configuration: SageMakerClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
