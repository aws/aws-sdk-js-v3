// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultSageMakerHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AddAssociationCommandInput, AddAssociationCommandOutput } from "./commands/AddAssociationCommand";
import type { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import type {
  AssociateTrialComponentCommandInput,
  AssociateTrialComponentCommandOutput,
} from "./commands/AssociateTrialComponentCommand";
import type {
  AttachClusterNodeVolumeCommandInput,
  AttachClusterNodeVolumeCommandOutput,
} from "./commands/AttachClusterNodeVolumeCommand";
import type {
  BatchAddClusterNodesCommandInput,
  BatchAddClusterNodesCommandOutput,
} from "./commands/BatchAddClusterNodesCommand";
import type {
  BatchDeleteClusterNodesCommandInput,
  BatchDeleteClusterNodesCommandOutput,
} from "./commands/BatchDeleteClusterNodesCommand";
import type {
  BatchDescribeModelPackageCommandInput,
  BatchDescribeModelPackageCommandOutput,
} from "./commands/BatchDescribeModelPackageCommand";
import type {
  BatchRebootClusterNodesCommandInput,
  BatchRebootClusterNodesCommandOutput,
} from "./commands/BatchRebootClusterNodesCommand";
import type {
  BatchReplaceClusterNodesCommandInput,
  BatchReplaceClusterNodesCommandOutput,
} from "./commands/BatchReplaceClusterNodesCommand";
import type { CreateActionCommandInput, CreateActionCommandOutput } from "./commands/CreateActionCommand";
import type { CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput } from "./commands/CreateAlgorithmCommand";
import type { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import type {
  CreateAppImageConfigCommandInput,
  CreateAppImageConfigCommandOutput,
} from "./commands/CreateAppImageConfigCommand";
import type { CreateArtifactCommandInput, CreateArtifactCommandOutput } from "./commands/CreateArtifactCommand";
import type { CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput } from "./commands/CreateAutoMLJobCommand";
import type {
  CreateAutoMLJobV2CommandInput,
  CreateAutoMLJobV2CommandOutput,
} from "./commands/CreateAutoMLJobV2Command";
import type { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import type {
  CreateClusterSchedulerConfigCommandInput,
  CreateClusterSchedulerConfigCommandOutput,
} from "./commands/CreateClusterSchedulerConfigCommand";
import type {
  CreateCodeRepositoryCommandInput,
  CreateCodeRepositoryCommandOutput,
} from "./commands/CreateCodeRepositoryCommand";
import type {
  CreateCompilationJobCommandInput,
  CreateCompilationJobCommandOutput,
} from "./commands/CreateCompilationJobCommand";
import type {
  CreateComputeQuotaCommandInput,
  CreateComputeQuotaCommandOutput,
} from "./commands/CreateComputeQuotaCommand";
import type { CreateContextCommandInput, CreateContextCommandOutput } from "./commands/CreateContextCommand";
import type {
  CreateDataQualityJobDefinitionCommandInput,
  CreateDataQualityJobDefinitionCommandOutput,
} from "./commands/CreateDataQualityJobDefinitionCommand";
import type {
  CreateDeviceFleetCommandInput,
  CreateDeviceFleetCommandOutput,
} from "./commands/CreateDeviceFleetCommand";
import type { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import type {
  CreateEdgeDeploymentPlanCommandInput,
  CreateEdgeDeploymentPlanCommandOutput,
} from "./commands/CreateEdgeDeploymentPlanCommand";
import type {
  CreateEdgeDeploymentStageCommandInput,
  CreateEdgeDeploymentStageCommandOutput,
} from "./commands/CreateEdgeDeploymentStageCommand";
import type {
  CreateEdgePackagingJobCommandInput,
  CreateEdgePackagingJobCommandOutput,
} from "./commands/CreateEdgePackagingJobCommand";
import type { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import type {
  CreateEndpointConfigCommandInput,
  CreateEndpointConfigCommandOutput,
} from "./commands/CreateEndpointConfigCommand";
import type { CreateExperimentCommandInput, CreateExperimentCommandOutput } from "./commands/CreateExperimentCommand";
import type {
  CreateFeatureGroupCommandInput,
  CreateFeatureGroupCommandOutput,
} from "./commands/CreateFeatureGroupCommand";
import type {
  CreateFlowDefinitionCommandInput,
  CreateFlowDefinitionCommandOutput,
} from "./commands/CreateFlowDefinitionCommand";
import type { CreateHubCommandInput, CreateHubCommandOutput } from "./commands/CreateHubCommand";
import type {
  CreateHubContentPresignedUrlsCommandInput,
  CreateHubContentPresignedUrlsCommandOutput,
} from "./commands/CreateHubContentPresignedUrlsCommand";
import type {
  CreateHubContentReferenceCommandInput,
  CreateHubContentReferenceCommandOutput,
} from "./commands/CreateHubContentReferenceCommand";
import type {
  CreateHumanTaskUiCommandInput,
  CreateHumanTaskUiCommandOutput,
} from "./commands/CreateHumanTaskUiCommand";
import type {
  CreateHyperParameterTuningJobCommandInput,
  CreateHyperParameterTuningJobCommandOutput,
} from "./commands/CreateHyperParameterTuningJobCommand";
import type { CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import type {
  CreateImageVersionCommandInput,
  CreateImageVersionCommandOutput,
} from "./commands/CreateImageVersionCommand";
import type {
  CreateInferenceComponentCommandInput,
  CreateInferenceComponentCommandOutput,
} from "./commands/CreateInferenceComponentCommand";
import type {
  CreateInferenceExperimentCommandInput,
  CreateInferenceExperimentCommandOutput,
} from "./commands/CreateInferenceExperimentCommand";
import type {
  CreateInferenceRecommendationsJobCommandInput,
  CreateInferenceRecommendationsJobCommandOutput,
} from "./commands/CreateInferenceRecommendationsJobCommand";
import type {
  CreateLabelingJobCommandInput,
  CreateLabelingJobCommandOutput,
} from "./commands/CreateLabelingJobCommand";
import type { CreateMlflowAppCommandInput, CreateMlflowAppCommandOutput } from "./commands/CreateMlflowAppCommand";
import type {
  CreateMlflowTrackingServerCommandInput,
  CreateMlflowTrackingServerCommandOutput,
} from "./commands/CreateMlflowTrackingServerCommand";
import type {
  CreateModelBiasJobDefinitionCommandInput,
  CreateModelBiasJobDefinitionCommandOutput,
} from "./commands/CreateModelBiasJobDefinitionCommand";
import type { CreateModelCardCommandInput, CreateModelCardCommandOutput } from "./commands/CreateModelCardCommand";
import type {
  CreateModelCardExportJobCommandInput,
  CreateModelCardExportJobCommandOutput,
} from "./commands/CreateModelCardExportJobCommand";
import type { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import type {
  CreateModelExplainabilityJobDefinitionCommandInput,
  CreateModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/CreateModelExplainabilityJobDefinitionCommand";
import type {
  CreateModelPackageCommandInput,
  CreateModelPackageCommandOutput,
} from "./commands/CreateModelPackageCommand";
import type {
  CreateModelPackageGroupCommandInput,
  CreateModelPackageGroupCommandOutput,
} from "./commands/CreateModelPackageGroupCommand";
import type {
  CreateModelQualityJobDefinitionCommandInput,
  CreateModelQualityJobDefinitionCommandOutput,
} from "./commands/CreateModelQualityJobDefinitionCommand";
import type {
  CreateMonitoringScheduleCommandInput,
  CreateMonitoringScheduleCommandOutput,
} from "./commands/CreateMonitoringScheduleCommand";
import type {
  CreateNotebookInstanceCommandInput,
  CreateNotebookInstanceCommandOutput,
} from "./commands/CreateNotebookInstanceCommand";
import type {
  CreateNotebookInstanceLifecycleConfigCommandInput,
  CreateNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/CreateNotebookInstanceLifecycleConfigCommand";
import type {
  CreateOptimizationJobCommandInput,
  CreateOptimizationJobCommandOutput,
} from "./commands/CreateOptimizationJobCommand";
import type { CreatePartnerAppCommandInput, CreatePartnerAppCommandOutput } from "./commands/CreatePartnerAppCommand";
import type {
  CreatePartnerAppPresignedUrlCommandInput,
  CreatePartnerAppPresignedUrlCommandOutput,
} from "./commands/CreatePartnerAppPresignedUrlCommand";
import type { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import type {
  CreatePresignedDomainUrlCommandInput,
  CreatePresignedDomainUrlCommandOutput,
} from "./commands/CreatePresignedDomainUrlCommand";
import type {
  CreatePresignedMlflowAppUrlCommandInput,
  CreatePresignedMlflowAppUrlCommandOutput,
} from "./commands/CreatePresignedMlflowAppUrlCommand";
import type {
  CreatePresignedMlflowTrackingServerUrlCommandInput,
  CreatePresignedMlflowTrackingServerUrlCommandOutput,
} from "./commands/CreatePresignedMlflowTrackingServerUrlCommand";
import type {
  CreatePresignedNotebookInstanceUrlCommandInput,
  CreatePresignedNotebookInstanceUrlCommandOutput,
} from "./commands/CreatePresignedNotebookInstanceUrlCommand";
import type {
  CreateProcessingJobCommandInput,
  CreateProcessingJobCommandOutput,
} from "./commands/CreateProcessingJobCommand";
import type { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import type { CreateSpaceCommandInput, CreateSpaceCommandOutput } from "./commands/CreateSpaceCommand";
import type {
  CreateStudioLifecycleConfigCommandInput,
  CreateStudioLifecycleConfigCommandOutput,
} from "./commands/CreateStudioLifecycleConfigCommand";
import type {
  CreateTrainingJobCommandInput,
  CreateTrainingJobCommandOutput,
} from "./commands/CreateTrainingJobCommand";
import type {
  CreateTrainingPlanCommandInput,
  CreateTrainingPlanCommandOutput,
} from "./commands/CreateTrainingPlanCommand";
import type {
  CreateTransformJobCommandInput,
  CreateTransformJobCommandOutput,
} from "./commands/CreateTransformJobCommand";
import type { CreateTrialCommandInput, CreateTrialCommandOutput } from "./commands/CreateTrialCommand";
import type {
  CreateTrialComponentCommandInput,
  CreateTrialComponentCommandOutput,
} from "./commands/CreateTrialComponentCommand";
import type {
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
} from "./commands/CreateUserProfileCommand";
import type { CreateWorkforceCommandInput, CreateWorkforceCommandOutput } from "./commands/CreateWorkforceCommand";
import type { CreateWorkteamCommandInput, CreateWorkteamCommandOutput } from "./commands/CreateWorkteamCommand";
import type { DeleteActionCommandInput, DeleteActionCommandOutput } from "./commands/DeleteActionCommand";
import type { DeleteAlgorithmCommandInput, DeleteAlgorithmCommandOutput } from "./commands/DeleteAlgorithmCommand";
import type { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import type {
  DeleteAppImageConfigCommandInput,
  DeleteAppImageConfigCommandOutput,
} from "./commands/DeleteAppImageConfigCommand";
import type { DeleteArtifactCommandInput, DeleteArtifactCommandOutput } from "./commands/DeleteArtifactCommand";
import type {
  DeleteAssociationCommandInput,
  DeleteAssociationCommandOutput,
} from "./commands/DeleteAssociationCommand";
import type { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import type {
  DeleteClusterSchedulerConfigCommandInput,
  DeleteClusterSchedulerConfigCommandOutput,
} from "./commands/DeleteClusterSchedulerConfigCommand";
import type {
  DeleteCodeRepositoryCommandInput,
  DeleteCodeRepositoryCommandOutput,
} from "./commands/DeleteCodeRepositoryCommand";
import type {
  DeleteCompilationJobCommandInput,
  DeleteCompilationJobCommandOutput,
} from "./commands/DeleteCompilationJobCommand";
import type {
  DeleteComputeQuotaCommandInput,
  DeleteComputeQuotaCommandOutput,
} from "./commands/DeleteComputeQuotaCommand";
import type { DeleteContextCommandInput, DeleteContextCommandOutput } from "./commands/DeleteContextCommand";
import type {
  DeleteDataQualityJobDefinitionCommandInput,
  DeleteDataQualityJobDefinitionCommandOutput,
} from "./commands/DeleteDataQualityJobDefinitionCommand";
import type {
  DeleteDeviceFleetCommandInput,
  DeleteDeviceFleetCommandOutput,
} from "./commands/DeleteDeviceFleetCommand";
import type { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import type {
  DeleteEdgeDeploymentPlanCommandInput,
  DeleteEdgeDeploymentPlanCommandOutput,
} from "./commands/DeleteEdgeDeploymentPlanCommand";
import type {
  DeleteEdgeDeploymentStageCommandInput,
  DeleteEdgeDeploymentStageCommandOutput,
} from "./commands/DeleteEdgeDeploymentStageCommand";
import type { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import type {
  DeleteEndpointConfigCommandInput,
  DeleteEndpointConfigCommandOutput,
} from "./commands/DeleteEndpointConfigCommand";
import type { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "./commands/DeleteExperimentCommand";
import type {
  DeleteFeatureGroupCommandInput,
  DeleteFeatureGroupCommandOutput,
} from "./commands/DeleteFeatureGroupCommand";
import type {
  DeleteFlowDefinitionCommandInput,
  DeleteFlowDefinitionCommandOutput,
} from "./commands/DeleteFlowDefinitionCommand";
import type { DeleteHubCommandInput, DeleteHubCommandOutput } from "./commands/DeleteHubCommand";
import type { DeleteHubContentCommandInput, DeleteHubContentCommandOutput } from "./commands/DeleteHubContentCommand";
import type {
  DeleteHubContentReferenceCommandInput,
  DeleteHubContentReferenceCommandOutput,
} from "./commands/DeleteHubContentReferenceCommand";
import type {
  DeleteHumanTaskUiCommandInput,
  DeleteHumanTaskUiCommandOutput,
} from "./commands/DeleteHumanTaskUiCommand";
import type {
  DeleteHyperParameterTuningJobCommandInput,
  DeleteHyperParameterTuningJobCommandOutput,
} from "./commands/DeleteHyperParameterTuningJobCommand";
import type { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import type {
  DeleteImageVersionCommandInput,
  DeleteImageVersionCommandOutput,
} from "./commands/DeleteImageVersionCommand";
import type {
  DeleteInferenceComponentCommandInput,
  DeleteInferenceComponentCommandOutput,
} from "./commands/DeleteInferenceComponentCommand";
import type {
  DeleteInferenceExperimentCommandInput,
  DeleteInferenceExperimentCommandOutput,
} from "./commands/DeleteInferenceExperimentCommand";
import type { DeleteMlflowAppCommandInput, DeleteMlflowAppCommandOutput } from "./commands/DeleteMlflowAppCommand";
import type {
  DeleteMlflowTrackingServerCommandInput,
  DeleteMlflowTrackingServerCommandOutput,
} from "./commands/DeleteMlflowTrackingServerCommand";
import type {
  DeleteModelBiasJobDefinitionCommandInput,
  DeleteModelBiasJobDefinitionCommandOutput,
} from "./commands/DeleteModelBiasJobDefinitionCommand";
import type { DeleteModelCardCommandInput, DeleteModelCardCommandOutput } from "./commands/DeleteModelCardCommand";
import type { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import type {
  DeleteModelExplainabilityJobDefinitionCommandInput,
  DeleteModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/DeleteModelExplainabilityJobDefinitionCommand";
import type {
  DeleteModelPackageCommandInput,
  DeleteModelPackageCommandOutput,
} from "./commands/DeleteModelPackageCommand";
import type {
  DeleteModelPackageGroupCommandInput,
  DeleteModelPackageGroupCommandOutput,
} from "./commands/DeleteModelPackageGroupCommand";
import type {
  DeleteModelPackageGroupPolicyCommandInput,
  DeleteModelPackageGroupPolicyCommandOutput,
} from "./commands/DeleteModelPackageGroupPolicyCommand";
import type {
  DeleteModelQualityJobDefinitionCommandInput,
  DeleteModelQualityJobDefinitionCommandOutput,
} from "./commands/DeleteModelQualityJobDefinitionCommand";
import type {
  DeleteMonitoringScheduleCommandInput,
  DeleteMonitoringScheduleCommandOutput,
} from "./commands/DeleteMonitoringScheduleCommand";
import type {
  DeleteNotebookInstanceCommandInput,
  DeleteNotebookInstanceCommandOutput,
} from "./commands/DeleteNotebookInstanceCommand";
import type {
  DeleteNotebookInstanceLifecycleConfigCommandInput,
  DeleteNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/DeleteNotebookInstanceLifecycleConfigCommand";
import type {
  DeleteOptimizationJobCommandInput,
  DeleteOptimizationJobCommandOutput,
} from "./commands/DeleteOptimizationJobCommand";
import type { DeletePartnerAppCommandInput, DeletePartnerAppCommandOutput } from "./commands/DeletePartnerAppCommand";
import type { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import type {
  DeleteProcessingJobCommandInput,
  DeleteProcessingJobCommandOutput,
} from "./commands/DeleteProcessingJobCommand";
import type { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import type { DeleteSpaceCommandInput, DeleteSpaceCommandOutput } from "./commands/DeleteSpaceCommand";
import type {
  DeleteStudioLifecycleConfigCommandInput,
  DeleteStudioLifecycleConfigCommandOutput,
} from "./commands/DeleteStudioLifecycleConfigCommand";
import type { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import type {
  DeleteTrainingJobCommandInput,
  DeleteTrainingJobCommandOutput,
} from "./commands/DeleteTrainingJobCommand";
import type { DeleteTrialCommandInput, DeleteTrialCommandOutput } from "./commands/DeleteTrialCommand";
import type {
  DeleteTrialComponentCommandInput,
  DeleteTrialComponentCommandOutput,
} from "./commands/DeleteTrialComponentCommand";
import type {
  DeleteUserProfileCommandInput,
  DeleteUserProfileCommandOutput,
} from "./commands/DeleteUserProfileCommand";
import type { DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput } from "./commands/DeleteWorkforceCommand";
import type { DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput } from "./commands/DeleteWorkteamCommand";
import type {
  DeregisterDevicesCommandInput,
  DeregisterDevicesCommandOutput,
} from "./commands/DeregisterDevicesCommand";
import type { DescribeActionCommandInput, DescribeActionCommandOutput } from "./commands/DescribeActionCommand";
import type {
  DescribeAlgorithmCommandInput,
  DescribeAlgorithmCommandOutput,
} from "./commands/DescribeAlgorithmCommand";
import type { DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import type {
  DescribeAppImageConfigCommandInput,
  DescribeAppImageConfigCommandOutput,
} from "./commands/DescribeAppImageConfigCommand";
import type { DescribeArtifactCommandInput, DescribeArtifactCommandOutput } from "./commands/DescribeArtifactCommand";
import type {
  DescribeAutoMLJobCommandInput,
  DescribeAutoMLJobCommandOutput,
} from "./commands/DescribeAutoMLJobCommand";
import type {
  DescribeAutoMLJobV2CommandInput,
  DescribeAutoMLJobV2CommandOutput,
} from "./commands/DescribeAutoMLJobV2Command";
import type { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import type {
  DescribeClusterEventCommandInput,
  DescribeClusterEventCommandOutput,
} from "./commands/DescribeClusterEventCommand";
import type {
  DescribeClusterNodeCommandInput,
  DescribeClusterNodeCommandOutput,
} from "./commands/DescribeClusterNodeCommand";
import type {
  DescribeClusterSchedulerConfigCommandInput,
  DescribeClusterSchedulerConfigCommandOutput,
} from "./commands/DescribeClusterSchedulerConfigCommand";
import type {
  DescribeCodeRepositoryCommandInput,
  DescribeCodeRepositoryCommandOutput,
} from "./commands/DescribeCodeRepositoryCommand";
import type {
  DescribeCompilationJobCommandInput,
  DescribeCompilationJobCommandOutput,
} from "./commands/DescribeCompilationJobCommand";
import type {
  DescribeComputeQuotaCommandInput,
  DescribeComputeQuotaCommandOutput,
} from "./commands/DescribeComputeQuotaCommand";
import type { DescribeContextCommandInput, DescribeContextCommandOutput } from "./commands/DescribeContextCommand";
import type {
  DescribeDataQualityJobDefinitionCommandInput,
  DescribeDataQualityJobDefinitionCommandOutput,
} from "./commands/DescribeDataQualityJobDefinitionCommand";
import type { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "./commands/DescribeDeviceCommand";
import type {
  DescribeDeviceFleetCommandInput,
  DescribeDeviceFleetCommandOutput,
} from "./commands/DescribeDeviceFleetCommand";
import type { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import type {
  DescribeEdgeDeploymentPlanCommandInput,
  DescribeEdgeDeploymentPlanCommandOutput,
} from "./commands/DescribeEdgeDeploymentPlanCommand";
import type {
  DescribeEdgePackagingJobCommandInput,
  DescribeEdgePackagingJobCommandOutput,
} from "./commands/DescribeEdgePackagingJobCommand";
import type { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import type {
  DescribeEndpointConfigCommandInput,
  DescribeEndpointConfigCommandOutput,
} from "./commands/DescribeEndpointConfigCommand";
import type {
  DescribeExperimentCommandInput,
  DescribeExperimentCommandOutput,
} from "./commands/DescribeExperimentCommand";
import type {
  DescribeFeatureGroupCommandInput,
  DescribeFeatureGroupCommandOutput,
} from "./commands/DescribeFeatureGroupCommand";
import type {
  DescribeFeatureMetadataCommandInput,
  DescribeFeatureMetadataCommandOutput,
} from "./commands/DescribeFeatureMetadataCommand";
import type {
  DescribeFlowDefinitionCommandInput,
  DescribeFlowDefinitionCommandOutput,
} from "./commands/DescribeFlowDefinitionCommand";
import type { DescribeHubCommandInput, DescribeHubCommandOutput } from "./commands/DescribeHubCommand";
import type {
  DescribeHubContentCommandInput,
  DescribeHubContentCommandOutput,
} from "./commands/DescribeHubContentCommand";
import type {
  DescribeHumanTaskUiCommandInput,
  DescribeHumanTaskUiCommandOutput,
} from "./commands/DescribeHumanTaskUiCommand";
import type {
  DescribeHyperParameterTuningJobCommandInput,
  DescribeHyperParameterTuningJobCommandOutput,
} from "./commands/DescribeHyperParameterTuningJobCommand";
import type { DescribeImageCommandInput, DescribeImageCommandOutput } from "./commands/DescribeImageCommand";
import type {
  DescribeImageVersionCommandInput,
  DescribeImageVersionCommandOutput,
} from "./commands/DescribeImageVersionCommand";
import type {
  DescribeInferenceComponentCommandInput,
  DescribeInferenceComponentCommandOutput,
} from "./commands/DescribeInferenceComponentCommand";
import type {
  DescribeInferenceExperimentCommandInput,
  DescribeInferenceExperimentCommandOutput,
} from "./commands/DescribeInferenceExperimentCommand";
import type {
  DescribeInferenceRecommendationsJobCommandInput,
  DescribeInferenceRecommendationsJobCommandOutput,
} from "./commands/DescribeInferenceRecommendationsJobCommand";
import type {
  DescribeLabelingJobCommandInput,
  DescribeLabelingJobCommandOutput,
} from "./commands/DescribeLabelingJobCommand";
import type {
  DescribeLineageGroupCommandInput,
  DescribeLineageGroupCommandOutput,
} from "./commands/DescribeLineageGroupCommand";
import type {
  DescribeMlflowAppCommandInput,
  DescribeMlflowAppCommandOutput,
} from "./commands/DescribeMlflowAppCommand";
import type {
  DescribeMlflowTrackingServerCommandInput,
  DescribeMlflowTrackingServerCommandOutput,
} from "./commands/DescribeMlflowTrackingServerCommand";
import type {
  DescribeModelBiasJobDefinitionCommandInput,
  DescribeModelBiasJobDefinitionCommandOutput,
} from "./commands/DescribeModelBiasJobDefinitionCommand";
import type {
  DescribeModelCardCommandInput,
  DescribeModelCardCommandOutput,
} from "./commands/DescribeModelCardCommand";
import type {
  DescribeModelCardExportJobCommandInput,
  DescribeModelCardExportJobCommandOutput,
} from "./commands/DescribeModelCardExportJobCommand";
import type { DescribeModelCommandInput, DescribeModelCommandOutput } from "./commands/DescribeModelCommand";
import type {
  DescribeModelExplainabilityJobDefinitionCommandInput,
  DescribeModelExplainabilityJobDefinitionCommandOutput,
} from "./commands/DescribeModelExplainabilityJobDefinitionCommand";
import type {
  DescribeModelPackageCommandInput,
  DescribeModelPackageCommandOutput,
} from "./commands/DescribeModelPackageCommand";
import type {
  DescribeModelPackageGroupCommandInput,
  DescribeModelPackageGroupCommandOutput,
} from "./commands/DescribeModelPackageGroupCommand";
import type {
  DescribeModelQualityJobDefinitionCommandInput,
  DescribeModelQualityJobDefinitionCommandOutput,
} from "./commands/DescribeModelQualityJobDefinitionCommand";
import type {
  DescribeMonitoringScheduleCommandInput,
  DescribeMonitoringScheduleCommandOutput,
} from "./commands/DescribeMonitoringScheduleCommand";
import type {
  DescribeNotebookInstanceCommandInput,
  DescribeNotebookInstanceCommandOutput,
} from "./commands/DescribeNotebookInstanceCommand";
import type {
  DescribeNotebookInstanceLifecycleConfigCommandInput,
  DescribeNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/DescribeNotebookInstanceLifecycleConfigCommand";
import type {
  DescribeOptimizationJobCommandInput,
  DescribeOptimizationJobCommandOutput,
} from "./commands/DescribeOptimizationJobCommand";
import type {
  DescribePartnerAppCommandInput,
  DescribePartnerAppCommandOutput,
} from "./commands/DescribePartnerAppCommand";
import type { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "./commands/DescribePipelineCommand";
import type {
  DescribePipelineDefinitionForExecutionCommandInput,
  DescribePipelineDefinitionForExecutionCommandOutput,
} from "./commands/DescribePipelineDefinitionForExecutionCommand";
import type {
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
} from "./commands/DescribePipelineExecutionCommand";
import type {
  DescribeProcessingJobCommandInput,
  DescribeProcessingJobCommandOutput,
} from "./commands/DescribeProcessingJobCommand";
import type { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import type {
  DescribeReservedCapacityCommandInput,
  DescribeReservedCapacityCommandOutput,
} from "./commands/DescribeReservedCapacityCommand";
import type { DescribeSpaceCommandInput, DescribeSpaceCommandOutput } from "./commands/DescribeSpaceCommand";
import type {
  DescribeStudioLifecycleConfigCommandInput,
  DescribeStudioLifecycleConfigCommandOutput,
} from "./commands/DescribeStudioLifecycleConfigCommand";
import type {
  DescribeSubscribedWorkteamCommandInput,
  DescribeSubscribedWorkteamCommandOutput,
} from "./commands/DescribeSubscribedWorkteamCommand";
import type {
  DescribeTrainingJobCommandInput,
  DescribeTrainingJobCommandOutput,
} from "./commands/DescribeTrainingJobCommand";
import type {
  DescribeTrainingPlanCommandInput,
  DescribeTrainingPlanCommandOutput,
} from "./commands/DescribeTrainingPlanCommand";
import type {
  DescribeTrainingPlanExtensionHistoryCommandInput,
  DescribeTrainingPlanExtensionHistoryCommandOutput,
} from "./commands/DescribeTrainingPlanExtensionHistoryCommand";
import type {
  DescribeTransformJobCommandInput,
  DescribeTransformJobCommandOutput,
} from "./commands/DescribeTransformJobCommand";
import type { DescribeTrialCommandInput, DescribeTrialCommandOutput } from "./commands/DescribeTrialCommand";
import type {
  DescribeTrialComponentCommandInput,
  DescribeTrialComponentCommandOutput,
} from "./commands/DescribeTrialComponentCommand";
import type {
  DescribeUserProfileCommandInput,
  DescribeUserProfileCommandOutput,
} from "./commands/DescribeUserProfileCommand";
import type {
  DescribeWorkforceCommandInput,
  DescribeWorkforceCommandOutput,
} from "./commands/DescribeWorkforceCommand";
import type { DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput } from "./commands/DescribeWorkteamCommand";
import type {
  DetachClusterNodeVolumeCommandInput,
  DetachClusterNodeVolumeCommandOutput,
} from "./commands/DetachClusterNodeVolumeCommand";
import type {
  DisableSagemakerServicecatalogPortfolioCommandInput,
  DisableSagemakerServicecatalogPortfolioCommandOutput,
} from "./commands/DisableSagemakerServicecatalogPortfolioCommand";
import type {
  DisassociateTrialComponentCommandInput,
  DisassociateTrialComponentCommandOutput,
} from "./commands/DisassociateTrialComponentCommand";
import type {
  EnableSagemakerServicecatalogPortfolioCommandInput,
  EnableSagemakerServicecatalogPortfolioCommandOutput,
} from "./commands/EnableSagemakerServicecatalogPortfolioCommand";
import type {
  ExtendTrainingPlanCommandInput,
  ExtendTrainingPlanCommandOutput,
} from "./commands/ExtendTrainingPlanCommand";
import type {
  GetDeviceFleetReportCommandInput,
  GetDeviceFleetReportCommandOutput,
} from "./commands/GetDeviceFleetReportCommand";
import type {
  GetLineageGroupPolicyCommandInput,
  GetLineageGroupPolicyCommandOutput,
} from "./commands/GetLineageGroupPolicyCommand";
import type {
  GetModelPackageGroupPolicyCommandInput,
  GetModelPackageGroupPolicyCommandOutput,
} from "./commands/GetModelPackageGroupPolicyCommand";
import type {
  GetSagemakerServicecatalogPortfolioStatusCommandInput,
  GetSagemakerServicecatalogPortfolioStatusCommandOutput,
} from "./commands/GetSagemakerServicecatalogPortfolioStatusCommand";
import type {
  GetScalingConfigurationRecommendationCommandInput,
  GetScalingConfigurationRecommendationCommandOutput,
} from "./commands/GetScalingConfigurationRecommendationCommand";
import type {
  GetSearchSuggestionsCommandInput,
  GetSearchSuggestionsCommandOutput,
} from "./commands/GetSearchSuggestionsCommand";
import type { ImportHubContentCommandInput, ImportHubContentCommandOutput } from "./commands/ImportHubContentCommand";
import type { ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import type { ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput } from "./commands/ListAlgorithmsCommand";
import type { ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import type {
  ListAppImageConfigsCommandInput,
  ListAppImageConfigsCommandOutput,
} from "./commands/ListAppImageConfigsCommand";
import type { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import type { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "./commands/ListArtifactsCommand";
import type { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "./commands/ListAssociationsCommand";
import type { ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput } from "./commands/ListAutoMLJobsCommand";
import type {
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
} from "./commands/ListCandidatesForAutoMLJobCommand";
import type {
  ListClusterEventsCommandInput,
  ListClusterEventsCommandOutput,
} from "./commands/ListClusterEventsCommand";
import type { ListClusterNodesCommandInput, ListClusterNodesCommandOutput } from "./commands/ListClusterNodesCommand";
import type {
  ListClusterSchedulerConfigsCommandInput,
  ListClusterSchedulerConfigsCommandOutput,
} from "./commands/ListClusterSchedulerConfigsCommand";
import type { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import type {
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput,
} from "./commands/ListCodeRepositoriesCommand";
import type {
  ListCompilationJobsCommandInput,
  ListCompilationJobsCommandOutput,
} from "./commands/ListCompilationJobsCommand";
import type {
  ListComputeQuotasCommandInput,
  ListComputeQuotasCommandOutput,
} from "./commands/ListComputeQuotasCommand";
import type { ListContextsCommandInput, ListContextsCommandOutput } from "./commands/ListContextsCommand";
import type {
  ListDataQualityJobDefinitionsCommandInput,
  ListDataQualityJobDefinitionsCommandOutput,
} from "./commands/ListDataQualityJobDefinitionsCommand";
import type { ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput } from "./commands/ListDeviceFleetsCommand";
import type { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import type { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import type {
  ListEdgeDeploymentPlansCommandInput,
  ListEdgeDeploymentPlansCommandOutput,
} from "./commands/ListEdgeDeploymentPlansCommand";
import type {
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
} from "./commands/ListEdgePackagingJobsCommand";
import type {
  ListEndpointConfigsCommandInput,
  ListEndpointConfigsCommandOutput,
} from "./commands/ListEndpointConfigsCommand";
import type { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "./commands/ListEndpointsCommand";
import type { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "./commands/ListExperimentsCommand";
import type {
  ListFeatureGroupsCommandInput,
  ListFeatureGroupsCommandOutput,
} from "./commands/ListFeatureGroupsCommand";
import type {
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput,
} from "./commands/ListFlowDefinitionsCommand";
import type { ListHubContentsCommandInput, ListHubContentsCommandOutput } from "./commands/ListHubContentsCommand";
import type {
  ListHubContentVersionsCommandInput,
  ListHubContentVersionsCommandOutput,
} from "./commands/ListHubContentVersionsCommand";
import type { ListHubsCommandInput, ListHubsCommandOutput } from "./commands/ListHubsCommand";
import type { ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput } from "./commands/ListHumanTaskUisCommand";
import type {
  ListHyperParameterTuningJobsCommandInput,
  ListHyperParameterTuningJobsCommandOutput,
} from "./commands/ListHyperParameterTuningJobsCommand";
import type { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import type {
  ListImageVersionsCommandInput,
  ListImageVersionsCommandOutput,
} from "./commands/ListImageVersionsCommand";
import type {
  ListInferenceComponentsCommandInput,
  ListInferenceComponentsCommandOutput,
} from "./commands/ListInferenceComponentsCommand";
import type {
  ListInferenceExperimentsCommandInput,
  ListInferenceExperimentsCommandOutput,
} from "./commands/ListInferenceExperimentsCommand";
import type {
  ListInferenceRecommendationsJobsCommandInput,
  ListInferenceRecommendationsJobsCommandOutput,
} from "./commands/ListInferenceRecommendationsJobsCommand";
import type {
  ListInferenceRecommendationsJobStepsCommandInput,
  ListInferenceRecommendationsJobStepsCommandOutput,
} from "./commands/ListInferenceRecommendationsJobStepsCommand";
import type { ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput } from "./commands/ListLabelingJobsCommand";
import type {
  ListLabelingJobsForWorkteamCommandInput,
  ListLabelingJobsForWorkteamCommandOutput,
} from "./commands/ListLabelingJobsForWorkteamCommand";
import type {
  ListLineageGroupsCommandInput,
  ListLineageGroupsCommandOutput,
} from "./commands/ListLineageGroupsCommand";
import type { ListMlflowAppsCommandInput, ListMlflowAppsCommandOutput } from "./commands/ListMlflowAppsCommand";
import type {
  ListMlflowTrackingServersCommandInput,
  ListMlflowTrackingServersCommandOutput,
} from "./commands/ListMlflowTrackingServersCommand";
import type {
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput,
} from "./commands/ListModelBiasJobDefinitionsCommand";
import type {
  ListModelCardExportJobsCommandInput,
  ListModelCardExportJobsCommandOutput,
} from "./commands/ListModelCardExportJobsCommand";
import type { ListModelCardsCommandInput, ListModelCardsCommandOutput } from "./commands/ListModelCardsCommand";
import type {
  ListModelCardVersionsCommandInput,
  ListModelCardVersionsCommandOutput,
} from "./commands/ListModelCardVersionsCommand";
import type {
  ListModelExplainabilityJobDefinitionsCommandInput,
  ListModelExplainabilityJobDefinitionsCommandOutput,
} from "./commands/ListModelExplainabilityJobDefinitionsCommand";
import type {
  ListModelMetadataCommandInput,
  ListModelMetadataCommandOutput,
} from "./commands/ListModelMetadataCommand";
import type {
  ListModelPackageGroupsCommandInput,
  ListModelPackageGroupsCommandOutput,
} from "./commands/ListModelPackageGroupsCommand";
import type {
  ListModelPackagesCommandInput,
  ListModelPackagesCommandOutput,
} from "./commands/ListModelPackagesCommand";
import type {
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
} from "./commands/ListModelQualityJobDefinitionsCommand";
import type { ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import type {
  ListMonitoringAlertHistoryCommandInput,
  ListMonitoringAlertHistoryCommandOutput,
} from "./commands/ListMonitoringAlertHistoryCommand";
import type {
  ListMonitoringAlertsCommandInput,
  ListMonitoringAlertsCommandOutput,
} from "./commands/ListMonitoringAlertsCommand";
import type {
  ListMonitoringExecutionsCommandInput,
  ListMonitoringExecutionsCommandOutput,
} from "./commands/ListMonitoringExecutionsCommand";
import type {
  ListMonitoringSchedulesCommandInput,
  ListMonitoringSchedulesCommandOutput,
} from "./commands/ListMonitoringSchedulesCommand";
import type {
  ListNotebookInstanceLifecycleConfigsCommandInput,
  ListNotebookInstanceLifecycleConfigsCommandOutput,
} from "./commands/ListNotebookInstanceLifecycleConfigsCommand";
import type {
  ListNotebookInstancesCommandInput,
  ListNotebookInstancesCommandOutput,
} from "./commands/ListNotebookInstancesCommand";
import type {
  ListOptimizationJobsCommandInput,
  ListOptimizationJobsCommandOutput,
} from "./commands/ListOptimizationJobsCommand";
import type { ListPartnerAppsCommandInput, ListPartnerAppsCommandOutput } from "./commands/ListPartnerAppsCommand";
import type {
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "./commands/ListPipelineExecutionsCommand";
import type {
  ListPipelineExecutionStepsCommandInput,
  ListPipelineExecutionStepsCommandOutput,
} from "./commands/ListPipelineExecutionStepsCommand";
import type {
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
} from "./commands/ListPipelineParametersForExecutionCommand";
import type { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import type {
  ListPipelineVersionsCommandInput,
  ListPipelineVersionsCommandOutput,
} from "./commands/ListPipelineVersionsCommand";
import type {
  ListProcessingJobsCommandInput,
  ListProcessingJobsCommandOutput,
} from "./commands/ListProcessingJobsCommand";
import type { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import type {
  ListResourceCatalogsCommandInput,
  ListResourceCatalogsCommandOutput,
} from "./commands/ListResourceCatalogsCommand";
import type { ListSpacesCommandInput, ListSpacesCommandOutput } from "./commands/ListSpacesCommand";
import type { ListStageDevicesCommandInput, ListStageDevicesCommandOutput } from "./commands/ListStageDevicesCommand";
import type {
  ListStudioLifecycleConfigsCommandInput,
  ListStudioLifecycleConfigsCommandOutput,
} from "./commands/ListStudioLifecycleConfigsCommand";
import type {
  ListSubscribedWorkteamsCommandInput,
  ListSubscribedWorkteamsCommandOutput,
} from "./commands/ListSubscribedWorkteamsCommand";
import type { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import type { ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput } from "./commands/ListTrainingJobsCommand";
import type {
  ListTrainingJobsForHyperParameterTuningJobCommandInput,
  ListTrainingJobsForHyperParameterTuningJobCommandOutput,
} from "./commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import type {
  ListTrainingPlansCommandInput,
  ListTrainingPlansCommandOutput,
} from "./commands/ListTrainingPlansCommand";
import type {
  ListTransformJobsCommandInput,
  ListTransformJobsCommandOutput,
} from "./commands/ListTransformJobsCommand";
import type {
  ListTrialComponentsCommandInput,
  ListTrialComponentsCommandOutput,
} from "./commands/ListTrialComponentsCommand";
import type { ListTrialsCommandInput, ListTrialsCommandOutput } from "./commands/ListTrialsCommand";
import type {
  ListUltraServersByReservedCapacityCommandInput,
  ListUltraServersByReservedCapacityCommandOutput,
} from "./commands/ListUltraServersByReservedCapacityCommand";
import type { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "./commands/ListUserProfilesCommand";
import type { ListWorkforcesCommandInput, ListWorkforcesCommandOutput } from "./commands/ListWorkforcesCommand";
import type { ListWorkteamsCommandInput, ListWorkteamsCommandOutput } from "./commands/ListWorkteamsCommand";
import type {
  PutModelPackageGroupPolicyCommandInput,
  PutModelPackageGroupPolicyCommandOutput,
} from "./commands/PutModelPackageGroupPolicyCommand";
import type { QueryLineageCommandInput, QueryLineageCommandOutput } from "./commands/QueryLineageCommand";
import type { RegisterDevicesCommandInput, RegisterDevicesCommandOutput } from "./commands/RegisterDevicesCommand";
import type { RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput } from "./commands/RenderUiTemplateCommand";
import type {
  RetryPipelineExecutionCommandInput,
  RetryPipelineExecutionCommandOutput,
} from "./commands/RetryPipelineExecutionCommand";
import type { SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import type {
  SearchTrainingPlanOfferingsCommandInput,
  SearchTrainingPlanOfferingsCommandOutput,
} from "./commands/SearchTrainingPlanOfferingsCommand";
import type {
  SendPipelineExecutionStepFailureCommandInput,
  SendPipelineExecutionStepFailureCommandOutput,
} from "./commands/SendPipelineExecutionStepFailureCommand";
import type {
  SendPipelineExecutionStepSuccessCommandInput,
  SendPipelineExecutionStepSuccessCommandOutput,
} from "./commands/SendPipelineExecutionStepSuccessCommand";
import type {
  StartEdgeDeploymentStageCommandInput,
  StartEdgeDeploymentStageCommandOutput,
} from "./commands/StartEdgeDeploymentStageCommand";
import type {
  StartInferenceExperimentCommandInput,
  StartInferenceExperimentCommandOutput,
} from "./commands/StartInferenceExperimentCommand";
import type {
  StartMlflowTrackingServerCommandInput,
  StartMlflowTrackingServerCommandOutput,
} from "./commands/StartMlflowTrackingServerCommand";
import type {
  StartMonitoringScheduleCommandInput,
  StartMonitoringScheduleCommandOutput,
} from "./commands/StartMonitoringScheduleCommand";
import type {
  StartNotebookInstanceCommandInput,
  StartNotebookInstanceCommandOutput,
} from "./commands/StartNotebookInstanceCommand";
import type {
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "./commands/StartPipelineExecutionCommand";
import type { StartSessionCommandInput, StartSessionCommandOutput } from "./commands/StartSessionCommand";
import type { StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput } from "./commands/StopAutoMLJobCommand";
import type {
  StopCompilationJobCommandInput,
  StopCompilationJobCommandOutput,
} from "./commands/StopCompilationJobCommand";
import type {
  StopEdgeDeploymentStageCommandInput,
  StopEdgeDeploymentStageCommandOutput,
} from "./commands/StopEdgeDeploymentStageCommand";
import type {
  StopEdgePackagingJobCommandInput,
  StopEdgePackagingJobCommandOutput,
} from "./commands/StopEdgePackagingJobCommand";
import type {
  StopHyperParameterTuningJobCommandInput,
  StopHyperParameterTuningJobCommandOutput,
} from "./commands/StopHyperParameterTuningJobCommand";
import type {
  StopInferenceExperimentCommandInput,
  StopInferenceExperimentCommandOutput,
} from "./commands/StopInferenceExperimentCommand";
import type {
  StopInferenceRecommendationsJobCommandInput,
  StopInferenceRecommendationsJobCommandOutput,
} from "./commands/StopInferenceRecommendationsJobCommand";
import type { StopLabelingJobCommandInput, StopLabelingJobCommandOutput } from "./commands/StopLabelingJobCommand";
import type {
  StopMlflowTrackingServerCommandInput,
  StopMlflowTrackingServerCommandOutput,
} from "./commands/StopMlflowTrackingServerCommand";
import type {
  StopMonitoringScheduleCommandInput,
  StopMonitoringScheduleCommandOutput,
} from "./commands/StopMonitoringScheduleCommand";
import type {
  StopNotebookInstanceCommandInput,
  StopNotebookInstanceCommandOutput,
} from "./commands/StopNotebookInstanceCommand";
import type {
  StopOptimizationJobCommandInput,
  StopOptimizationJobCommandOutput,
} from "./commands/StopOptimizationJobCommand";
import type {
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "./commands/StopPipelineExecutionCommand";
import type {
  StopProcessingJobCommandInput,
  StopProcessingJobCommandOutput,
} from "./commands/StopProcessingJobCommand";
import type { StopTrainingJobCommandInput, StopTrainingJobCommandOutput } from "./commands/StopTrainingJobCommand";
import type { StopTransformJobCommandInput, StopTransformJobCommandOutput } from "./commands/StopTransformJobCommand";
import type { UpdateActionCommandInput, UpdateActionCommandOutput } from "./commands/UpdateActionCommand";
import type {
  UpdateAppImageConfigCommandInput,
  UpdateAppImageConfigCommandOutput,
} from "./commands/UpdateAppImageConfigCommand";
import type { UpdateArtifactCommandInput, UpdateArtifactCommandOutput } from "./commands/UpdateArtifactCommand";
import type { UpdateClusterCommandInput, UpdateClusterCommandOutput } from "./commands/UpdateClusterCommand";
import type {
  UpdateClusterSchedulerConfigCommandInput,
  UpdateClusterSchedulerConfigCommandOutput,
} from "./commands/UpdateClusterSchedulerConfigCommand";
import type {
  UpdateClusterSoftwareCommandInput,
  UpdateClusterSoftwareCommandOutput,
} from "./commands/UpdateClusterSoftwareCommand";
import type {
  UpdateCodeRepositoryCommandInput,
  UpdateCodeRepositoryCommandOutput,
} from "./commands/UpdateCodeRepositoryCommand";
import type {
  UpdateComputeQuotaCommandInput,
  UpdateComputeQuotaCommandOutput,
} from "./commands/UpdateComputeQuotaCommand";
import type { UpdateContextCommandInput, UpdateContextCommandOutput } from "./commands/UpdateContextCommand";
import type {
  UpdateDeviceFleetCommandInput,
  UpdateDeviceFleetCommandOutput,
} from "./commands/UpdateDeviceFleetCommand";
import type { UpdateDevicesCommandInput, UpdateDevicesCommandOutput } from "./commands/UpdateDevicesCommand";
import type { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import type { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import type {
  UpdateEndpointWeightsAndCapacitiesCommandInput,
  UpdateEndpointWeightsAndCapacitiesCommandOutput,
} from "./commands/UpdateEndpointWeightsAndCapacitiesCommand";
import type { UpdateExperimentCommandInput, UpdateExperimentCommandOutput } from "./commands/UpdateExperimentCommand";
import type {
  UpdateFeatureGroupCommandInput,
  UpdateFeatureGroupCommandOutput,
} from "./commands/UpdateFeatureGroupCommand";
import type {
  UpdateFeatureMetadataCommandInput,
  UpdateFeatureMetadataCommandOutput,
} from "./commands/UpdateFeatureMetadataCommand";
import type { UpdateHubCommandInput, UpdateHubCommandOutput } from "./commands/UpdateHubCommand";
import type { UpdateHubContentCommandInput, UpdateHubContentCommandOutput } from "./commands/UpdateHubContentCommand";
import type {
  UpdateHubContentReferenceCommandInput,
  UpdateHubContentReferenceCommandOutput,
} from "./commands/UpdateHubContentReferenceCommand";
import type { UpdateImageCommandInput, UpdateImageCommandOutput } from "./commands/UpdateImageCommand";
import type {
  UpdateImageVersionCommandInput,
  UpdateImageVersionCommandOutput,
} from "./commands/UpdateImageVersionCommand";
import type {
  UpdateInferenceComponentCommandInput,
  UpdateInferenceComponentCommandOutput,
} from "./commands/UpdateInferenceComponentCommand";
import type {
  UpdateInferenceComponentRuntimeConfigCommandInput,
  UpdateInferenceComponentRuntimeConfigCommandOutput,
} from "./commands/UpdateInferenceComponentRuntimeConfigCommand";
import type {
  UpdateInferenceExperimentCommandInput,
  UpdateInferenceExperimentCommandOutput,
} from "./commands/UpdateInferenceExperimentCommand";
import type { UpdateMlflowAppCommandInput, UpdateMlflowAppCommandOutput } from "./commands/UpdateMlflowAppCommand";
import type {
  UpdateMlflowTrackingServerCommandInput,
  UpdateMlflowTrackingServerCommandOutput,
} from "./commands/UpdateMlflowTrackingServerCommand";
import type { UpdateModelCardCommandInput, UpdateModelCardCommandOutput } from "./commands/UpdateModelCardCommand";
import type {
  UpdateModelPackageCommandInput,
  UpdateModelPackageCommandOutput,
} from "./commands/UpdateModelPackageCommand";
import type {
  UpdateMonitoringAlertCommandInput,
  UpdateMonitoringAlertCommandOutput,
} from "./commands/UpdateMonitoringAlertCommand";
import type {
  UpdateMonitoringScheduleCommandInput,
  UpdateMonitoringScheduleCommandOutput,
} from "./commands/UpdateMonitoringScheduleCommand";
import type {
  UpdateNotebookInstanceCommandInput,
  UpdateNotebookInstanceCommandOutput,
} from "./commands/UpdateNotebookInstanceCommand";
import type {
  UpdateNotebookInstanceLifecycleConfigCommandInput,
  UpdateNotebookInstanceLifecycleConfigCommandOutput,
} from "./commands/UpdateNotebookInstanceLifecycleConfigCommand";
import type { UpdatePartnerAppCommandInput, UpdatePartnerAppCommandOutput } from "./commands/UpdatePartnerAppCommand";
import type { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
import type {
  UpdatePipelineExecutionCommandInput,
  UpdatePipelineExecutionCommandOutput,
} from "./commands/UpdatePipelineExecutionCommand";
import type {
  UpdatePipelineVersionCommandInput,
  UpdatePipelineVersionCommandOutput,
} from "./commands/UpdatePipelineVersionCommand";
import type { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import type { UpdateSpaceCommandInput, UpdateSpaceCommandOutput } from "./commands/UpdateSpaceCommand";
import type {
  UpdateTrainingJobCommandInput,
  UpdateTrainingJobCommandOutput,
} from "./commands/UpdateTrainingJobCommand";
import type { UpdateTrialCommandInput, UpdateTrialCommandOutput } from "./commands/UpdateTrialCommand";
import type {
  UpdateTrialComponentCommandInput,
  UpdateTrialComponentCommandOutput,
} from "./commands/UpdateTrialComponentCommand";
import type {
  UpdateUserProfileCommandInput,
  UpdateUserProfileCommandOutput,
} from "./commands/UpdateUserProfileCommand";
import type { UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput } from "./commands/UpdateWorkforceCommand";
import type { UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput } from "./commands/UpdateWorkteamCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AddAssociationCommandInput
  | AddTagsCommandInput
  | AssociateTrialComponentCommandInput
  | AttachClusterNodeVolumeCommandInput
  | BatchAddClusterNodesCommandInput
  | BatchDeleteClusterNodesCommandInput
  | BatchDescribeModelPackageCommandInput
  | BatchRebootClusterNodesCommandInput
  | BatchReplaceClusterNodesCommandInput
  | CreateActionCommandInput
  | CreateAlgorithmCommandInput
  | CreateAppCommandInput
  | CreateAppImageConfigCommandInput
  | CreateArtifactCommandInput
  | CreateAutoMLJobCommandInput
  | CreateAutoMLJobV2CommandInput
  | CreateClusterCommandInput
  | CreateClusterSchedulerConfigCommandInput
  | CreateCodeRepositoryCommandInput
  | CreateCompilationJobCommandInput
  | CreateComputeQuotaCommandInput
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
  | CreateHubContentPresignedUrlsCommandInput
  | CreateHubContentReferenceCommandInput
  | CreateHumanTaskUiCommandInput
  | CreateHyperParameterTuningJobCommandInput
  | CreateImageCommandInput
  | CreateImageVersionCommandInput
  | CreateInferenceComponentCommandInput
  | CreateInferenceExperimentCommandInput
  | CreateInferenceRecommendationsJobCommandInput
  | CreateLabelingJobCommandInput
  | CreateMlflowAppCommandInput
  | CreateMlflowTrackingServerCommandInput
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
  | CreateOptimizationJobCommandInput
  | CreatePartnerAppCommandInput
  | CreatePartnerAppPresignedUrlCommandInput
  | CreatePipelineCommandInput
  | CreatePresignedDomainUrlCommandInput
  | CreatePresignedMlflowAppUrlCommandInput
  | CreatePresignedMlflowTrackingServerUrlCommandInput
  | CreatePresignedNotebookInstanceUrlCommandInput
  | CreateProcessingJobCommandInput
  | CreateProjectCommandInput
  | CreateSpaceCommandInput
  | CreateStudioLifecycleConfigCommandInput
  | CreateTrainingJobCommandInput
  | CreateTrainingPlanCommandInput
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
  | DeleteClusterCommandInput
  | DeleteClusterSchedulerConfigCommandInput
  | DeleteCodeRepositoryCommandInput
  | DeleteCompilationJobCommandInput
  | DeleteComputeQuotaCommandInput
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
  | DeleteHubContentReferenceCommandInput
  | DeleteHumanTaskUiCommandInput
  | DeleteHyperParameterTuningJobCommandInput
  | DeleteImageCommandInput
  | DeleteImageVersionCommandInput
  | DeleteInferenceComponentCommandInput
  | DeleteInferenceExperimentCommandInput
  | DeleteMlflowAppCommandInput
  | DeleteMlflowTrackingServerCommandInput
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
  | DeleteOptimizationJobCommandInput
  | DeletePartnerAppCommandInput
  | DeletePipelineCommandInput
  | DeleteProcessingJobCommandInput
  | DeleteProjectCommandInput
  | DeleteSpaceCommandInput
  | DeleteStudioLifecycleConfigCommandInput
  | DeleteTagsCommandInput
  | DeleteTrainingJobCommandInput
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
  | DescribeAutoMLJobV2CommandInput
  | DescribeClusterCommandInput
  | DescribeClusterEventCommandInput
  | DescribeClusterNodeCommandInput
  | DescribeClusterSchedulerConfigCommandInput
  | DescribeCodeRepositoryCommandInput
  | DescribeCompilationJobCommandInput
  | DescribeComputeQuotaCommandInput
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
  | DescribeInferenceComponentCommandInput
  | DescribeInferenceExperimentCommandInput
  | DescribeInferenceRecommendationsJobCommandInput
  | DescribeLabelingJobCommandInput
  | DescribeLineageGroupCommandInput
  | DescribeMlflowAppCommandInput
  | DescribeMlflowTrackingServerCommandInput
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
  | DescribeOptimizationJobCommandInput
  | DescribePartnerAppCommandInput
  | DescribePipelineCommandInput
  | DescribePipelineDefinitionForExecutionCommandInput
  | DescribePipelineExecutionCommandInput
  | DescribeProcessingJobCommandInput
  | DescribeProjectCommandInput
  | DescribeReservedCapacityCommandInput
  | DescribeSpaceCommandInput
  | DescribeStudioLifecycleConfigCommandInput
  | DescribeSubscribedWorkteamCommandInput
  | DescribeTrainingJobCommandInput
  | DescribeTrainingPlanCommandInput
  | DescribeTrainingPlanExtensionHistoryCommandInput
  | DescribeTransformJobCommandInput
  | DescribeTrialCommandInput
  | DescribeTrialComponentCommandInput
  | DescribeUserProfileCommandInput
  | DescribeWorkforceCommandInput
  | DescribeWorkteamCommandInput
  | DetachClusterNodeVolumeCommandInput
  | DisableSagemakerServicecatalogPortfolioCommandInput
  | DisassociateTrialComponentCommandInput
  | EnableSagemakerServicecatalogPortfolioCommandInput
  | ExtendTrainingPlanCommandInput
  | GetDeviceFleetReportCommandInput
  | GetLineageGroupPolicyCommandInput
  | GetModelPackageGroupPolicyCommandInput
  | GetSagemakerServicecatalogPortfolioStatusCommandInput
  | GetScalingConfigurationRecommendationCommandInput
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
  | ListClusterEventsCommandInput
  | ListClusterNodesCommandInput
  | ListClusterSchedulerConfigsCommandInput
  | ListClustersCommandInput
  | ListCodeRepositoriesCommandInput
  | ListCompilationJobsCommandInput
  | ListComputeQuotasCommandInput
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
  | ListInferenceComponentsCommandInput
  | ListInferenceExperimentsCommandInput
  | ListInferenceRecommendationsJobStepsCommandInput
  | ListInferenceRecommendationsJobsCommandInput
  | ListLabelingJobsCommandInput
  | ListLabelingJobsForWorkteamCommandInput
  | ListLineageGroupsCommandInput
  | ListMlflowAppsCommandInput
  | ListMlflowTrackingServersCommandInput
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
  | ListOptimizationJobsCommandInput
  | ListPartnerAppsCommandInput
  | ListPipelineExecutionStepsCommandInput
  | ListPipelineExecutionsCommandInput
  | ListPipelineParametersForExecutionCommandInput
  | ListPipelineVersionsCommandInput
  | ListPipelinesCommandInput
  | ListProcessingJobsCommandInput
  | ListProjectsCommandInput
  | ListResourceCatalogsCommandInput
  | ListSpacesCommandInput
  | ListStageDevicesCommandInput
  | ListStudioLifecycleConfigsCommandInput
  | ListSubscribedWorkteamsCommandInput
  | ListTagsCommandInput
  | ListTrainingJobsCommandInput
  | ListTrainingJobsForHyperParameterTuningJobCommandInput
  | ListTrainingPlansCommandInput
  | ListTransformJobsCommandInput
  | ListTrialComponentsCommandInput
  | ListTrialsCommandInput
  | ListUltraServersByReservedCapacityCommandInput
  | ListUserProfilesCommandInput
  | ListWorkforcesCommandInput
  | ListWorkteamsCommandInput
  | PutModelPackageGroupPolicyCommandInput
  | QueryLineageCommandInput
  | RegisterDevicesCommandInput
  | RenderUiTemplateCommandInput
  | RetryPipelineExecutionCommandInput
  | SearchCommandInput
  | SearchTrainingPlanOfferingsCommandInput
  | SendPipelineExecutionStepFailureCommandInput
  | SendPipelineExecutionStepSuccessCommandInput
  | StartEdgeDeploymentStageCommandInput
  | StartInferenceExperimentCommandInput
  | StartMlflowTrackingServerCommandInput
  | StartMonitoringScheduleCommandInput
  | StartNotebookInstanceCommandInput
  | StartPipelineExecutionCommandInput
  | StartSessionCommandInput
  | StopAutoMLJobCommandInput
  | StopCompilationJobCommandInput
  | StopEdgeDeploymentStageCommandInput
  | StopEdgePackagingJobCommandInput
  | StopHyperParameterTuningJobCommandInput
  | StopInferenceExperimentCommandInput
  | StopInferenceRecommendationsJobCommandInput
  | StopLabelingJobCommandInput
  | StopMlflowTrackingServerCommandInput
  | StopMonitoringScheduleCommandInput
  | StopNotebookInstanceCommandInput
  | StopOptimizationJobCommandInput
  | StopPipelineExecutionCommandInput
  | StopProcessingJobCommandInput
  | StopTrainingJobCommandInput
  | StopTransformJobCommandInput
  | UpdateActionCommandInput
  | UpdateAppImageConfigCommandInput
  | UpdateArtifactCommandInput
  | UpdateClusterCommandInput
  | UpdateClusterSchedulerConfigCommandInput
  | UpdateClusterSoftwareCommandInput
  | UpdateCodeRepositoryCommandInput
  | UpdateComputeQuotaCommandInput
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
  | UpdateHubContentCommandInput
  | UpdateHubContentReferenceCommandInput
  | UpdateImageCommandInput
  | UpdateImageVersionCommandInput
  | UpdateInferenceComponentCommandInput
  | UpdateInferenceComponentRuntimeConfigCommandInput
  | UpdateInferenceExperimentCommandInput
  | UpdateMlflowAppCommandInput
  | UpdateMlflowTrackingServerCommandInput
  | UpdateModelCardCommandInput
  | UpdateModelPackageCommandInput
  | UpdateMonitoringAlertCommandInput
  | UpdateMonitoringScheduleCommandInput
  | UpdateNotebookInstanceCommandInput
  | UpdateNotebookInstanceLifecycleConfigCommandInput
  | UpdatePartnerAppCommandInput
  | UpdatePipelineCommandInput
  | UpdatePipelineExecutionCommandInput
  | UpdatePipelineVersionCommandInput
  | UpdateProjectCommandInput
  | UpdateSpaceCommandInput
  | UpdateTrainingJobCommandInput
  | UpdateTrialCommandInput
  | UpdateTrialComponentCommandInput
  | UpdateUserProfileCommandInput
  | UpdateWorkforceCommandInput
  | UpdateWorkteamCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddAssociationCommandOutput
  | AddTagsCommandOutput
  | AssociateTrialComponentCommandOutput
  | AttachClusterNodeVolumeCommandOutput
  | BatchAddClusterNodesCommandOutput
  | BatchDeleteClusterNodesCommandOutput
  | BatchDescribeModelPackageCommandOutput
  | BatchRebootClusterNodesCommandOutput
  | BatchReplaceClusterNodesCommandOutput
  | CreateActionCommandOutput
  | CreateAlgorithmCommandOutput
  | CreateAppCommandOutput
  | CreateAppImageConfigCommandOutput
  | CreateArtifactCommandOutput
  | CreateAutoMLJobCommandOutput
  | CreateAutoMLJobV2CommandOutput
  | CreateClusterCommandOutput
  | CreateClusterSchedulerConfigCommandOutput
  | CreateCodeRepositoryCommandOutput
  | CreateCompilationJobCommandOutput
  | CreateComputeQuotaCommandOutput
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
  | CreateHubContentPresignedUrlsCommandOutput
  | CreateHubContentReferenceCommandOutput
  | CreateHumanTaskUiCommandOutput
  | CreateHyperParameterTuningJobCommandOutput
  | CreateImageCommandOutput
  | CreateImageVersionCommandOutput
  | CreateInferenceComponentCommandOutput
  | CreateInferenceExperimentCommandOutput
  | CreateInferenceRecommendationsJobCommandOutput
  | CreateLabelingJobCommandOutput
  | CreateMlflowAppCommandOutput
  | CreateMlflowTrackingServerCommandOutput
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
  | CreateOptimizationJobCommandOutput
  | CreatePartnerAppCommandOutput
  | CreatePartnerAppPresignedUrlCommandOutput
  | CreatePipelineCommandOutput
  | CreatePresignedDomainUrlCommandOutput
  | CreatePresignedMlflowAppUrlCommandOutput
  | CreatePresignedMlflowTrackingServerUrlCommandOutput
  | CreatePresignedNotebookInstanceUrlCommandOutput
  | CreateProcessingJobCommandOutput
  | CreateProjectCommandOutput
  | CreateSpaceCommandOutput
  | CreateStudioLifecycleConfigCommandOutput
  | CreateTrainingJobCommandOutput
  | CreateTrainingPlanCommandOutput
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
  | DeleteClusterCommandOutput
  | DeleteClusterSchedulerConfigCommandOutput
  | DeleteCodeRepositoryCommandOutput
  | DeleteCompilationJobCommandOutput
  | DeleteComputeQuotaCommandOutput
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
  | DeleteHubContentReferenceCommandOutput
  | DeleteHumanTaskUiCommandOutput
  | DeleteHyperParameterTuningJobCommandOutput
  | DeleteImageCommandOutput
  | DeleteImageVersionCommandOutput
  | DeleteInferenceComponentCommandOutput
  | DeleteInferenceExperimentCommandOutput
  | DeleteMlflowAppCommandOutput
  | DeleteMlflowTrackingServerCommandOutput
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
  | DeleteOptimizationJobCommandOutput
  | DeletePartnerAppCommandOutput
  | DeletePipelineCommandOutput
  | DeleteProcessingJobCommandOutput
  | DeleteProjectCommandOutput
  | DeleteSpaceCommandOutput
  | DeleteStudioLifecycleConfigCommandOutput
  | DeleteTagsCommandOutput
  | DeleteTrainingJobCommandOutput
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
  | DescribeAutoMLJobV2CommandOutput
  | DescribeClusterCommandOutput
  | DescribeClusterEventCommandOutput
  | DescribeClusterNodeCommandOutput
  | DescribeClusterSchedulerConfigCommandOutput
  | DescribeCodeRepositoryCommandOutput
  | DescribeCompilationJobCommandOutput
  | DescribeComputeQuotaCommandOutput
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
  | DescribeInferenceComponentCommandOutput
  | DescribeInferenceExperimentCommandOutput
  | DescribeInferenceRecommendationsJobCommandOutput
  | DescribeLabelingJobCommandOutput
  | DescribeLineageGroupCommandOutput
  | DescribeMlflowAppCommandOutput
  | DescribeMlflowTrackingServerCommandOutput
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
  | DescribeOptimizationJobCommandOutput
  | DescribePartnerAppCommandOutput
  | DescribePipelineCommandOutput
  | DescribePipelineDefinitionForExecutionCommandOutput
  | DescribePipelineExecutionCommandOutput
  | DescribeProcessingJobCommandOutput
  | DescribeProjectCommandOutput
  | DescribeReservedCapacityCommandOutput
  | DescribeSpaceCommandOutput
  | DescribeStudioLifecycleConfigCommandOutput
  | DescribeSubscribedWorkteamCommandOutput
  | DescribeTrainingJobCommandOutput
  | DescribeTrainingPlanCommandOutput
  | DescribeTrainingPlanExtensionHistoryCommandOutput
  | DescribeTransformJobCommandOutput
  | DescribeTrialCommandOutput
  | DescribeTrialComponentCommandOutput
  | DescribeUserProfileCommandOutput
  | DescribeWorkforceCommandOutput
  | DescribeWorkteamCommandOutput
  | DetachClusterNodeVolumeCommandOutput
  | DisableSagemakerServicecatalogPortfolioCommandOutput
  | DisassociateTrialComponentCommandOutput
  | EnableSagemakerServicecatalogPortfolioCommandOutput
  | ExtendTrainingPlanCommandOutput
  | GetDeviceFleetReportCommandOutput
  | GetLineageGroupPolicyCommandOutput
  | GetModelPackageGroupPolicyCommandOutput
  | GetSagemakerServicecatalogPortfolioStatusCommandOutput
  | GetScalingConfigurationRecommendationCommandOutput
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
  | ListClusterEventsCommandOutput
  | ListClusterNodesCommandOutput
  | ListClusterSchedulerConfigsCommandOutput
  | ListClustersCommandOutput
  | ListCodeRepositoriesCommandOutput
  | ListCompilationJobsCommandOutput
  | ListComputeQuotasCommandOutput
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
  | ListInferenceComponentsCommandOutput
  | ListInferenceExperimentsCommandOutput
  | ListInferenceRecommendationsJobStepsCommandOutput
  | ListInferenceRecommendationsJobsCommandOutput
  | ListLabelingJobsCommandOutput
  | ListLabelingJobsForWorkteamCommandOutput
  | ListLineageGroupsCommandOutput
  | ListMlflowAppsCommandOutput
  | ListMlflowTrackingServersCommandOutput
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
  | ListOptimizationJobsCommandOutput
  | ListPartnerAppsCommandOutput
  | ListPipelineExecutionStepsCommandOutput
  | ListPipelineExecutionsCommandOutput
  | ListPipelineParametersForExecutionCommandOutput
  | ListPipelineVersionsCommandOutput
  | ListPipelinesCommandOutput
  | ListProcessingJobsCommandOutput
  | ListProjectsCommandOutput
  | ListResourceCatalogsCommandOutput
  | ListSpacesCommandOutput
  | ListStageDevicesCommandOutput
  | ListStudioLifecycleConfigsCommandOutput
  | ListSubscribedWorkteamsCommandOutput
  | ListTagsCommandOutput
  | ListTrainingJobsCommandOutput
  | ListTrainingJobsForHyperParameterTuningJobCommandOutput
  | ListTrainingPlansCommandOutput
  | ListTransformJobsCommandOutput
  | ListTrialComponentsCommandOutput
  | ListTrialsCommandOutput
  | ListUltraServersByReservedCapacityCommandOutput
  | ListUserProfilesCommandOutput
  | ListWorkforcesCommandOutput
  | ListWorkteamsCommandOutput
  | PutModelPackageGroupPolicyCommandOutput
  | QueryLineageCommandOutput
  | RegisterDevicesCommandOutput
  | RenderUiTemplateCommandOutput
  | RetryPipelineExecutionCommandOutput
  | SearchCommandOutput
  | SearchTrainingPlanOfferingsCommandOutput
  | SendPipelineExecutionStepFailureCommandOutput
  | SendPipelineExecutionStepSuccessCommandOutput
  | StartEdgeDeploymentStageCommandOutput
  | StartInferenceExperimentCommandOutput
  | StartMlflowTrackingServerCommandOutput
  | StartMonitoringScheduleCommandOutput
  | StartNotebookInstanceCommandOutput
  | StartPipelineExecutionCommandOutput
  | StartSessionCommandOutput
  | StopAutoMLJobCommandOutput
  | StopCompilationJobCommandOutput
  | StopEdgeDeploymentStageCommandOutput
  | StopEdgePackagingJobCommandOutput
  | StopHyperParameterTuningJobCommandOutput
  | StopInferenceExperimentCommandOutput
  | StopInferenceRecommendationsJobCommandOutput
  | StopLabelingJobCommandOutput
  | StopMlflowTrackingServerCommandOutput
  | StopMonitoringScheduleCommandOutput
  | StopNotebookInstanceCommandOutput
  | StopOptimizationJobCommandOutput
  | StopPipelineExecutionCommandOutput
  | StopProcessingJobCommandOutput
  | StopTrainingJobCommandOutput
  | StopTransformJobCommandOutput
  | UpdateActionCommandOutput
  | UpdateAppImageConfigCommandOutput
  | UpdateArtifactCommandOutput
  | UpdateClusterCommandOutput
  | UpdateClusterSchedulerConfigCommandOutput
  | UpdateClusterSoftwareCommandOutput
  | UpdateCodeRepositoryCommandOutput
  | UpdateComputeQuotaCommandOutput
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
  | UpdateHubContentCommandOutput
  | UpdateHubContentReferenceCommandOutput
  | UpdateImageCommandOutput
  | UpdateImageVersionCommandOutput
  | UpdateInferenceComponentCommandOutput
  | UpdateInferenceComponentRuntimeConfigCommandOutput
  | UpdateInferenceExperimentCommandOutput
  | UpdateMlflowAppCommandOutput
  | UpdateMlflowTrackingServerCommandOutput
  | UpdateModelCardCommandOutput
  | UpdateModelPackageCommandOutput
  | UpdateMonitoringAlertCommandOutput
  | UpdateMonitoringScheduleCommandOutput
  | UpdateNotebookInstanceCommandOutput
  | UpdateNotebookInstanceLifecycleConfigCommandOutput
  | UpdatePartnerAppCommandOutput
  | UpdatePipelineCommandOutput
  | UpdatePipelineExecutionCommandOutput
  | UpdatePipelineVersionCommandOutput
  | UpdateProjectCommandOutput
  | UpdateSpaceCommandOutput
  | UpdateTrainingJobCommandOutput
  | UpdateTrialCommandOutput
  | UpdateTrialComponentCommandOutput
  | UpdateUserProfileCommandOutput
  | UpdateWorkforceCommandOutput
  | UpdateWorkteamCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type SageMakerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of SageMakerClient class constructor that set the region, credentials and other options.
 */
export interface SageMakerClientConfig extends SageMakerClientConfigType {}

/**
 * @public
 */
export type SageMakerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of SageMakerClient class. This is resolved and normalized from the {@link SageMakerClientConfig | constructor configuration interface}.
 */
export interface SageMakerClientResolvedConfig extends SageMakerClientResolvedConfigType {}

/**
 * <p>Provides APIs for creating and managing SageMaker resources. </p> <p>Other Resources:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html#first-time-user">SageMaker Developer Guide</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/augmented-ai/2019-11-07/APIReference/Welcome.html">Amazon Augmented AI Runtime API Reference</a> </p> </li> </ul>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<SageMakerClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultSageMakerHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: SageMakerClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
