// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput,
} from "../commands/CancelImageCreationCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "../commands/CreateComponentCommand";
import {
  CreateContainerRecipeCommandInput,
  CreateContainerRecipeCommandOutput,
} from "../commands/CreateContainerRecipeCommand";
import {
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput,
} from "../commands/CreateDistributionConfigurationCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "../commands/CreateImageCommand";
import {
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput,
} from "../commands/CreateImagePipelineCommand";
import { CreateImageRecipeCommandInput, CreateImageRecipeCommandOutput } from "../commands/CreateImageRecipeCommand";
import {
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput,
} from "../commands/CreateInfrastructureConfigurationCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import {
  DeleteContainerRecipeCommandInput,
  DeleteContainerRecipeCommandOutput,
} from "../commands/DeleteContainerRecipeCommand";
import {
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput,
} from "../commands/DeleteDistributionConfigurationCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "../commands/DeleteImageCommand";
import {
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput,
} from "../commands/DeleteImagePipelineCommand";
import { DeleteImageRecipeCommandInput, DeleteImageRecipeCommandOutput } from "../commands/DeleteImageRecipeCommand";
import {
  DeleteInfrastructureConfigurationCommandInput,
  DeleteInfrastructureConfigurationCommandOutput,
} from "../commands/DeleteInfrastructureConfigurationCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import { GetComponentPolicyCommandInput, GetComponentPolicyCommandOutput } from "../commands/GetComponentPolicyCommand";
import { GetContainerRecipeCommandInput, GetContainerRecipeCommandOutput } from "../commands/GetContainerRecipeCommand";
import {
  GetContainerRecipePolicyCommandInput,
  GetContainerRecipePolicyCommandOutput,
} from "../commands/GetContainerRecipePolicyCommand";
import {
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput,
} from "../commands/GetDistributionConfigurationCommand";
import { GetImageCommandInput, GetImageCommandOutput } from "../commands/GetImageCommand";
import { GetImagePipelineCommandInput, GetImagePipelineCommandOutput } from "../commands/GetImagePipelineCommand";
import { GetImagePolicyCommandInput, GetImagePolicyCommandOutput } from "../commands/GetImagePolicyCommand";
import { GetImageRecipeCommandInput, GetImageRecipeCommandOutput } from "../commands/GetImageRecipeCommand";
import {
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput,
} from "../commands/GetImageRecipePolicyCommand";
import {
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput,
} from "../commands/GetInfrastructureConfigurationCommand";
import {
  GetWorkflowExecutionCommandInput,
  GetWorkflowExecutionCommandOutput,
} from "../commands/GetWorkflowExecutionCommand";
import {
  GetWorkflowStepExecutionCommandInput,
  GetWorkflowStepExecutionCommandOutput,
} from "../commands/GetWorkflowStepExecutionCommand";
import { ImportComponentCommandInput, ImportComponentCommandOutput } from "../commands/ImportComponentCommand";
import { ImportVmImageCommandInput, ImportVmImageCommandOutput } from "../commands/ImportVmImageCommand";
import {
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
} from "../commands/ListComponentBuildVersionsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import {
  ListContainerRecipesCommandInput,
  ListContainerRecipesCommandOutput,
} from "../commands/ListContainerRecipesCommand";
import {
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput,
} from "../commands/ListDistributionConfigurationsCommand";
import {
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput,
} from "../commands/ListImageBuildVersionsCommand";
import { ListImagePackagesCommandInput, ListImagePackagesCommandOutput } from "../commands/ListImagePackagesCommand";
import {
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput,
} from "../commands/ListImagePipelineImagesCommand";
import { ListImagePipelinesCommandInput, ListImagePipelinesCommandOutput } from "../commands/ListImagePipelinesCommand";
import { ListImageRecipesCommandInput, ListImageRecipesCommandOutput } from "../commands/ListImageRecipesCommand";
import {
  ListImageScanFindingAggregationsCommandInput,
  ListImageScanFindingAggregationsCommandOutput,
} from "../commands/ListImageScanFindingAggregationsCommand";
import {
  ListImageScanFindingsCommandInput,
  ListImageScanFindingsCommandOutput,
} from "../commands/ListImageScanFindingsCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "../commands/ListImagesCommand";
import {
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput,
} from "../commands/ListInfrastructureConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWorkflowExecutionsCommandInput,
  ListWorkflowExecutionsCommandOutput,
} from "../commands/ListWorkflowExecutionsCommand";
import {
  ListWorkflowStepExecutionsCommandInput,
  ListWorkflowStepExecutionsCommandOutput,
} from "../commands/ListWorkflowStepExecutionsCommand";
import { PutComponentPolicyCommandInput, PutComponentPolicyCommandOutput } from "../commands/PutComponentPolicyCommand";
import {
  PutContainerRecipePolicyCommandInput,
  PutContainerRecipePolicyCommandOutput,
} from "../commands/PutContainerRecipePolicyCommand";
import { PutImagePolicyCommandInput, PutImagePolicyCommandOutput } from "../commands/PutImagePolicyCommand";
import {
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput,
} from "../commands/PutImageRecipePolicyCommand";
import {
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput,
} from "../commands/StartImagePipelineExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput,
} from "../commands/UpdateDistributionConfigurationCommand";
import {
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput,
} from "../commands/UpdateImagePipelineCommand";
import {
  UpdateInfrastructureConfigurationCommandInput,
  UpdateInfrastructureConfigurationCommandOutput,
} from "../commands/UpdateInfrastructureConfigurationCommand";
import { ImagebuilderServiceException as __BaseException } from "../models/ImagebuilderServiceException";
import {
  AccountAggregation,
  AdditionalInstanceConfiguration,
  Ami,
  AmiDistributionConfiguration,
  CallRateLimitExceededException,
  ClientException,
  Component,
  ComponentConfiguration,
  ComponentParameter,
  ComponentParameterDetail,
  ComponentState,
  ComponentSummary,
  ComponentVersion,
  Container,
  ContainerDistributionConfiguration,
  ContainerRecipe,
  ContainerRecipeSummary,
  CvssScore,
  CvssScoreAdjustment,
  CvssScoreDetails,
  Distribution,
  DistributionConfiguration,
  DistributionConfigurationSummary,
  EbsInstanceBlockDeviceSpecification,
  EcrConfiguration,
  FastLaunchConfiguration,
  FastLaunchLaunchTemplateSpecification,
  FastLaunchSnapshotConfiguration,
  Filter,
  ForbiddenException,
  IdempotentParameterMismatchException,
  Image,
  ImageAggregation,
  ImagePackage,
  ImagePipeline,
  ImagePipelineAggregation,
  ImageRecipe,
  ImageRecipeSummary,
  ImageScanFinding,
  ImageScanFindingAggregation,
  ImageScanFindingsFilter,
  ImageScanningConfiguration,
  ImageScanState,
  ImageState,
  ImageSummary,
  ImageTestsConfiguration,
  ImageVersion,
  InfrastructureConfiguration,
  InfrastructureConfigurationSummary,
  InspectorScoreDetails,
  InstanceBlockDeviceMapping,
  InstanceConfiguration,
  InstanceMetadataOptions,
  InvalidPaginationTokenException,
  InvalidParameterCombinationException,
  InvalidParameterException,
  InvalidParameterValueException,
  InvalidRequestException,
  InvalidVersionNumberException,
  LaunchPermissionConfiguration,
  LaunchTemplateConfiguration,
  Logging,
  OutputResources,
  PackageVulnerabilityDetails,
  Remediation,
  RemediationRecommendation,
  ResourceAlreadyExistsException,
  ResourceDependencyException,
  ResourceInUseException,
  ResourceNotFoundException,
  S3ExportConfiguration,
  S3Logs,
  Schedule,
  ServiceException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  SeverityCounts,
  SystemsManagerAgent,
  TargetContainerRepository,
  VulnerabilityIdAggregation,
  VulnerablePackage,
  WorkflowExecutionMetadata,
  WorkflowStepMetadata,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelImageCreationCommand
 */
export const se_CancelImageCreationCommand = async (
  input: CancelImageCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CancelImageCreation";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.imageBuildVersionArn != null && { imageBuildVersionArn: input.imageBuildVersionArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateComponentCommand
 */
export const se_CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateComponent";
  let body: any;
  body = JSON.stringify({
    ...(input.changeDescription != null && { changeDescription: input.changeDescription }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.data != null && { data: input.data }),
    ...(input.description != null && { description: input.description }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.name != null && { name: input.name }),
    ...(input.platform != null && { platform: input.platform }),
    ...(input.semanticVersion != null && { semanticVersion: input.semanticVersion }),
    ...(input.supportedOsVersions != null && {
      supportedOsVersions: se_OsVersionList(input.supportedOsVersions, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.uri != null && { uri: input.uri }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateContainerRecipeCommand
 */
export const se_CreateContainerRecipeCommand = async (
  input: CreateContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateContainerRecipe";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.components != null && { components: se_ComponentConfigurationList(input.components, context) }),
    ...(input.containerType != null && { containerType: input.containerType }),
    ...(input.description != null && { description: input.description }),
    ...(input.dockerfileTemplateData != null && { dockerfileTemplateData: input.dockerfileTemplateData }),
    ...(input.dockerfileTemplateUri != null && { dockerfileTemplateUri: input.dockerfileTemplateUri }),
    ...(input.imageOsVersionOverride != null && { imageOsVersionOverride: input.imageOsVersionOverride }),
    ...(input.instanceConfiguration != null && {
      instanceConfiguration: se_InstanceConfiguration(input.instanceConfiguration, context),
    }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.name != null && { name: input.name }),
    ...(input.parentImage != null && { parentImage: input.parentImage }),
    ...(input.platformOverride != null && { platformOverride: input.platformOverride }),
    ...(input.semanticVersion != null && { semanticVersion: input.semanticVersion }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.targetRepository != null && {
      targetRepository: se_TargetContainerRepository(input.targetRepository, context),
    }),
    ...(input.workingDirectory != null && { workingDirectory: input.workingDirectory }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDistributionConfigurationCommand
 */
export const se_CreateDistributionConfigurationCommand = async (
  input: CreateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateDistributionConfiguration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.distributions != null && { distributions: se_DistributionList(input.distributions, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateImageCommand
 */
export const se_CreateImageCommand = async (
  input: CreateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateImage";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.containerRecipeArn != null && { containerRecipeArn: input.containerRecipeArn }),
    ...(input.distributionConfigurationArn != null && {
      distributionConfigurationArn: input.distributionConfigurationArn,
    }),
    ...(input.enhancedImageMetadataEnabled != null && {
      enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
    }),
    ...(input.imageRecipeArn != null && { imageRecipeArn: input.imageRecipeArn }),
    ...(input.imageScanningConfiguration != null && {
      imageScanningConfiguration: se_ImageScanningConfiguration(input.imageScanningConfiguration, context),
    }),
    ...(input.imageTestsConfiguration != null && {
      imageTestsConfiguration: se_ImageTestsConfiguration(input.imageTestsConfiguration, context),
    }),
    ...(input.infrastructureConfigurationArn != null && {
      infrastructureConfigurationArn: input.infrastructureConfigurationArn,
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateImagePipelineCommand
 */
export const se_CreateImagePipelineCommand = async (
  input: CreateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateImagePipeline";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.containerRecipeArn != null && { containerRecipeArn: input.containerRecipeArn }),
    ...(input.description != null && { description: input.description }),
    ...(input.distributionConfigurationArn != null && {
      distributionConfigurationArn: input.distributionConfigurationArn,
    }),
    ...(input.enhancedImageMetadataEnabled != null && {
      enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
    }),
    ...(input.imageRecipeArn != null && { imageRecipeArn: input.imageRecipeArn }),
    ...(input.imageScanningConfiguration != null && {
      imageScanningConfiguration: se_ImageScanningConfiguration(input.imageScanningConfiguration, context),
    }),
    ...(input.imageTestsConfiguration != null && {
      imageTestsConfiguration: se_ImageTestsConfiguration(input.imageTestsConfiguration, context),
    }),
    ...(input.infrastructureConfigurationArn != null && {
      infrastructureConfigurationArn: input.infrastructureConfigurationArn,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.schedule != null && { schedule: se_Schedule(input.schedule, context) }),
    ...(input.status != null && { status: input.status }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateImageRecipeCommand
 */
export const se_CreateImageRecipeCommand = async (
  input: CreateImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateImageRecipe";
  let body: any;
  body = JSON.stringify({
    ...(input.additionalInstanceConfiguration != null && {
      additionalInstanceConfiguration: se_AdditionalInstanceConfiguration(
        input.additionalInstanceConfiguration,
        context
      ),
    }),
    ...(input.blockDeviceMappings != null && {
      blockDeviceMappings: se_InstanceBlockDeviceMappings(input.blockDeviceMappings, context),
    }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.components != null && { components: se_ComponentConfigurationList(input.components, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.parentImage != null && { parentImage: input.parentImage }),
    ...(input.semanticVersion != null && { semanticVersion: input.semanticVersion }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.workingDirectory != null && { workingDirectory: input.workingDirectory }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateInfrastructureConfigurationCommand
 */
export const se_CreateInfrastructureConfigurationCommand = async (
  input: CreateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateInfrastructureConfiguration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.instanceMetadataOptions != null && {
      instanceMetadataOptions: se_InstanceMetadataOptions(input.instanceMetadataOptions, context),
    }),
    ...(input.instanceProfileName != null && { instanceProfileName: input.instanceProfileName }),
    ...(input.instanceTypes != null && { instanceTypes: se_InstanceTypeList(input.instanceTypes, context) }),
    ...(input.keyPair != null && { keyPair: input.keyPair }),
    ...(input.logging != null && { logging: se_Logging(input.logging, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.resourceTags != null && { resourceTags: se_ResourceTagMap(input.resourceTags, context) }),
    ...(input.securityGroupIds != null && { securityGroupIds: se_SecurityGroupIds(input.securityGroupIds, context) }),
    ...(input.snsTopicArn != null && { snsTopicArn: input.snsTopicArn }),
    ...(input.subnetId != null && { subnetId: input.subnetId }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.terminateInstanceOnFailure != null && { terminateInstanceOnFailure: input.terminateInstanceOnFailure }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteComponentCommand
 */
export const se_DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteComponent";
  const query: any = map({
    componentBuildVersionArn: [, __expectNonNull(input.componentBuildVersionArn!, `componentBuildVersionArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteContainerRecipeCommand
 */
export const se_DeleteContainerRecipeCommand = async (
  input: DeleteContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteContainerRecipe";
  const query: any = map({
    containerRecipeArn: [, __expectNonNull(input.containerRecipeArn!, `containerRecipeArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDistributionConfigurationCommand
 */
export const se_DeleteDistributionConfigurationCommand = async (
  input: DeleteDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteDistributionConfiguration";
  const query: any = map({
    distributionConfigurationArn: [
      ,
      __expectNonNull(input.distributionConfigurationArn!, `distributionConfigurationArn`),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteImageCommand
 */
export const se_DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteImage";
  const query: any = map({
    imageBuildVersionArn: [, __expectNonNull(input.imageBuildVersionArn!, `imageBuildVersionArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteImagePipelineCommand
 */
export const se_DeleteImagePipelineCommand = async (
  input: DeleteImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteImagePipeline";
  const query: any = map({
    imagePipelineArn: [, __expectNonNull(input.imagePipelineArn!, `imagePipelineArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteImageRecipeCommand
 */
export const se_DeleteImageRecipeCommand = async (
  input: DeleteImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteImageRecipe";
  const query: any = map({
    imageRecipeArn: [, __expectNonNull(input.imageRecipeArn!, `imageRecipeArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteInfrastructureConfigurationCommand
 */
export const se_DeleteInfrastructureConfigurationCommand = async (
  input: DeleteInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteInfrastructureConfiguration";
  const query: any = map({
    infrastructureConfigurationArn: [
      ,
      __expectNonNull(input.infrastructureConfigurationArn!, `infrastructureConfigurationArn`),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetComponentCommand
 */
export const se_GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetComponent";
  const query: any = map({
    componentBuildVersionArn: [, __expectNonNull(input.componentBuildVersionArn!, `componentBuildVersionArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetComponentPolicyCommand
 */
export const se_GetComponentPolicyCommand = async (
  input: GetComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetComponentPolicy";
  const query: any = map({
    componentArn: [, __expectNonNull(input.componentArn!, `componentArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetContainerRecipeCommand
 */
export const se_GetContainerRecipeCommand = async (
  input: GetContainerRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetContainerRecipe";
  const query: any = map({
    containerRecipeArn: [, __expectNonNull(input.containerRecipeArn!, `containerRecipeArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetContainerRecipePolicyCommand
 */
export const se_GetContainerRecipePolicyCommand = async (
  input: GetContainerRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetContainerRecipePolicy";
  const query: any = map({
    containerRecipeArn: [, __expectNonNull(input.containerRecipeArn!, `containerRecipeArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetDistributionConfigurationCommand
 */
export const se_GetDistributionConfigurationCommand = async (
  input: GetDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetDistributionConfiguration";
  const query: any = map({
    distributionConfigurationArn: [
      ,
      __expectNonNull(input.distributionConfigurationArn!, `distributionConfigurationArn`),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetImageCommand
 */
export const se_GetImageCommand = async (
  input: GetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImage";
  const query: any = map({
    imageBuildVersionArn: [, __expectNonNull(input.imageBuildVersionArn!, `imageBuildVersionArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetImagePipelineCommand
 */
export const se_GetImagePipelineCommand = async (
  input: GetImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImagePipeline";
  const query: any = map({
    imagePipelineArn: [, __expectNonNull(input.imagePipelineArn!, `imagePipelineArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetImagePolicyCommand
 */
export const se_GetImagePolicyCommand = async (
  input: GetImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImagePolicy";
  const query: any = map({
    imageArn: [, __expectNonNull(input.imageArn!, `imageArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetImageRecipeCommand
 */
export const se_GetImageRecipeCommand = async (
  input: GetImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImageRecipe";
  const query: any = map({
    imageRecipeArn: [, __expectNonNull(input.imageRecipeArn!, `imageRecipeArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetImageRecipePolicyCommand
 */
export const se_GetImageRecipePolicyCommand = async (
  input: GetImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetImageRecipePolicy";
  const query: any = map({
    imageRecipeArn: [, __expectNonNull(input.imageRecipeArn!, `imageRecipeArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetInfrastructureConfigurationCommand
 */
export const se_GetInfrastructureConfigurationCommand = async (
  input: GetInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetInfrastructureConfiguration";
  const query: any = map({
    infrastructureConfigurationArn: [
      ,
      __expectNonNull(input.infrastructureConfigurationArn!, `infrastructureConfigurationArn`),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetWorkflowExecutionCommand
 */
export const se_GetWorkflowExecutionCommand = async (
  input: GetWorkflowExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetWorkflowExecution";
  const query: any = map({
    workflowExecutionId: [, __expectNonNull(input.workflowExecutionId!, `workflowExecutionId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetWorkflowStepExecutionCommand
 */
export const se_GetWorkflowStepExecutionCommand = async (
  input: GetWorkflowStepExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetWorkflowStepExecution";
  const query: any = map({
    stepExecutionId: [, __expectNonNull(input.stepExecutionId!, `stepExecutionId`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ImportComponentCommand
 */
export const se_ImportComponentCommand = async (
  input: ImportComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ImportComponent";
  let body: any;
  body = JSON.stringify({
    ...(input.changeDescription != null && { changeDescription: input.changeDescription }),
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.data != null && { data: input.data }),
    ...(input.description != null && { description: input.description }),
    ...(input.format != null && { format: input.format }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.name != null && { name: input.name }),
    ...(input.platform != null && { platform: input.platform }),
    ...(input.semanticVersion != null && { semanticVersion: input.semanticVersion }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.type != null && { type: input.type }),
    ...(input.uri != null && { uri: input.uri }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ImportVmImageCommand
 */
export const se_ImportVmImageCommand = async (
  input: ImportVmImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ImportVmImage";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.osVersion != null && { osVersion: input.osVersion }),
    ...(input.platform != null && { platform: input.platform }),
    ...(input.semanticVersion != null && { semanticVersion: input.semanticVersion }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.vmImportTaskId != null && { vmImportTaskId: input.vmImportTaskId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListComponentBuildVersionsCommand
 */
export const se_ListComponentBuildVersionsCommand = async (
  input: ListComponentBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListComponentBuildVersions";
  let body: any;
  body = JSON.stringify({
    ...(input.componentVersionArn != null && { componentVersionArn: input.componentVersionArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListComponents";
  let body: any;
  body = JSON.stringify({
    ...(input.byName != null && { byName: input.byName }),
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.owner != null && { owner: input.owner }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListContainerRecipesCommand
 */
export const se_ListContainerRecipesCommand = async (
  input: ListContainerRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListContainerRecipes";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.owner != null && { owner: input.owner }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListDistributionConfigurationsCommand
 */
export const se_ListDistributionConfigurationsCommand = async (
  input: ListDistributionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListDistributionConfigurations";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImageBuildVersionsCommand
 */
export const se_ListImageBuildVersionsCommand = async (
  input: ListImageBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImageBuildVersions";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.imageVersionArn != null && { imageVersionArn: input.imageVersionArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImagePackagesCommand
 */
export const se_ListImagePackagesCommand = async (
  input: ListImagePackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImagePackages";
  let body: any;
  body = JSON.stringify({
    ...(input.imageBuildVersionArn != null && { imageBuildVersionArn: input.imageBuildVersionArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImagePipelineImagesCommand
 */
export const se_ListImagePipelineImagesCommand = async (
  input: ListImagePipelineImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImagePipelineImages";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.imagePipelineArn != null && { imagePipelineArn: input.imagePipelineArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImagePipelinesCommand
 */
export const se_ListImagePipelinesCommand = async (
  input: ListImagePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImagePipelines";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImageRecipesCommand
 */
export const se_ListImageRecipesCommand = async (
  input: ListImageRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImageRecipes";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.owner != null && { owner: input.owner }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImagesCommand
 */
export const se_ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImages";
  let body: any;
  body = JSON.stringify({
    ...(input.byName != null && { byName: input.byName }),
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.includeDeprecated != null && { includeDeprecated: input.includeDeprecated }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.owner != null && { owner: input.owner }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImageScanFindingAggregationsCommand
 */
export const se_ListImageScanFindingAggregationsCommand = async (
  input: ListImageScanFindingAggregationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImageScanFindingAggregations";
  let body: any;
  body = JSON.stringify({
    ...(input.filter != null && { filter: se_Filter(input.filter, context) }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImageScanFindingsCommand
 */
export const se_ListImageScanFindingsCommand = async (
  input: ListImageScanFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListImageScanFindings";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_ImageScanFindingsFilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListInfrastructureConfigurationsCommand
 */
export const se_ListInfrastructureConfigurationsCommand = async (
  input: ListInfrastructureConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListInfrastructureConfigurations";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_FilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListWorkflowExecutionsCommand
 */
export const se_ListWorkflowExecutionsCommand = async (
  input: ListWorkflowExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListWorkflowExecutions";
  let body: any;
  body = JSON.stringify({
    ...(input.imageBuildVersionArn != null && { imageBuildVersionArn: input.imageBuildVersionArn }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListWorkflowStepExecutionsCommand
 */
export const se_ListWorkflowStepExecutionsCommand = async (
  input: ListWorkflowStepExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListWorkflowStepExecutions";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.workflowExecutionId != null && { workflowExecutionId: input.workflowExecutionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutComponentPolicyCommand
 */
export const se_PutComponentPolicyCommand = async (
  input: PutComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutComponentPolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.componentArn != null && { componentArn: input.componentArn }),
    ...(input.policy != null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutContainerRecipePolicyCommand
 */
export const se_PutContainerRecipePolicyCommand = async (
  input: PutContainerRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutContainerRecipePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.containerRecipeArn != null && { containerRecipeArn: input.containerRecipeArn }),
    ...(input.policy != null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutImagePolicyCommand
 */
export const se_PutImagePolicyCommand = async (
  input: PutImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutImagePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.imageArn != null && { imageArn: input.imageArn }),
    ...(input.policy != null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutImageRecipePolicyCommand
 */
export const se_PutImageRecipePolicyCommand = async (
  input: PutImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutImageRecipePolicy";
  let body: any;
  body = JSON.stringify({
    ...(input.imageRecipeArn != null && { imageRecipeArn: input.imageRecipeArn }),
    ...(input.policy != null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartImagePipelineExecutionCommand
 */
export const se_StartImagePipelineExecutionCommand = async (
  input: StartImagePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartImagePipelineExecution";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.imagePipelineArn != null && { imagePipelineArn: input.imagePipelineArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDistributionConfigurationCommand
 */
export const se_UpdateDistributionConfigurationCommand = async (
  input: UpdateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateDistributionConfiguration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.distributionConfigurationArn != null && {
      distributionConfigurationArn: input.distributionConfigurationArn,
    }),
    ...(input.distributions != null && { distributions: se_DistributionList(input.distributions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateImagePipelineCommand
 */
export const se_UpdateImagePipelineCommand = async (
  input: UpdateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateImagePipeline";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.containerRecipeArn != null && { containerRecipeArn: input.containerRecipeArn }),
    ...(input.description != null && { description: input.description }),
    ...(input.distributionConfigurationArn != null && {
      distributionConfigurationArn: input.distributionConfigurationArn,
    }),
    ...(input.enhancedImageMetadataEnabled != null && {
      enhancedImageMetadataEnabled: input.enhancedImageMetadataEnabled,
    }),
    ...(input.imagePipelineArn != null && { imagePipelineArn: input.imagePipelineArn }),
    ...(input.imageRecipeArn != null && { imageRecipeArn: input.imageRecipeArn }),
    ...(input.imageScanningConfiguration != null && {
      imageScanningConfiguration: se_ImageScanningConfiguration(input.imageScanningConfiguration, context),
    }),
    ...(input.imageTestsConfiguration != null && {
      imageTestsConfiguration: se_ImageTestsConfiguration(input.imageTestsConfiguration, context),
    }),
    ...(input.infrastructureConfigurationArn != null && {
      infrastructureConfigurationArn: input.infrastructureConfigurationArn,
    }),
    ...(input.schedule != null && { schedule: se_Schedule(input.schedule, context) }),
    ...(input.status != null && { status: input.status }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateInfrastructureConfigurationCommand
 */
export const se_UpdateInfrastructureConfigurationCommand = async (
  input: UpdateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateInfrastructureConfiguration";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.infrastructureConfigurationArn != null && {
      infrastructureConfigurationArn: input.infrastructureConfigurationArn,
    }),
    ...(input.instanceMetadataOptions != null && {
      instanceMetadataOptions: se_InstanceMetadataOptions(input.instanceMetadataOptions, context),
    }),
    ...(input.instanceProfileName != null && { instanceProfileName: input.instanceProfileName }),
    ...(input.instanceTypes != null && { instanceTypes: se_InstanceTypeList(input.instanceTypes, context) }),
    ...(input.keyPair != null && { keyPair: input.keyPair }),
    ...(input.logging != null && { logging: se_Logging(input.logging, context) }),
    ...(input.resourceTags != null && { resourceTags: se_ResourceTagMap(input.resourceTags, context) }),
    ...(input.securityGroupIds != null && { securityGroupIds: se_SecurityGroupIds(input.securityGroupIds, context) }),
    ...(input.snsTopicArn != null && { snsTopicArn: input.snsTopicArn }),
    ...(input.subnetId != null && { subnetId: input.subnetId }),
    ...(input.terminateInstanceOnFailure != null && { terminateInstanceOnFailure: input.terminateInstanceOnFailure }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CancelImageCreationCommand
 */
export const de_CancelImageCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelImageCreationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageBuildVersionArn != null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CancelImageCreationCommandError
 */
const de_CancelImageCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateComponentCommand
 */
export const de_CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.componentBuildVersionArn != null) {
    contents.componentBuildVersionArn = __expectString(data.componentBuildVersionArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateComponentCommandError
 */
const de_CreateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await de_InvalidVersionNumberExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateContainerRecipeCommand
 */
export const de_CreateContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateContainerRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.containerRecipeArn != null) {
    contents.containerRecipeArn = __expectString(data.containerRecipeArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateContainerRecipeCommandError
 */
const de_CreateContainerRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateContainerRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await de_InvalidVersionNumberExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDistributionConfigurationCommand
 */
export const de_CreateDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDistributionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.distributionConfigurationArn != null) {
    contents.distributionConfigurationArn = __expectString(data.distributionConfigurationArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDistributionConfigurationCommandError
 */
const de_CreateDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateImageCommand
 */
export const de_CreateImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageBuildVersionArn != null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateImageCommandError
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
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateImagePipelineCommand
 */
export const de_CreateImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateImagePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imagePipelineArn != null) {
    contents.imagePipelineArn = __expectString(data.imagePipelineArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateImagePipelineCommandError
 */
const de_CreateImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateImageRecipeCommand
 */
export const de_CreateImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateImageRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageRecipeArn != null) {
    contents.imageRecipeArn = __expectString(data.imageRecipeArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateImageRecipeCommandError
 */
const de_CreateImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await de_InvalidVersionNumberExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateInfrastructureConfigurationCommand
 */
export const de_CreateInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateInfrastructureConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.infrastructureConfigurationArn != null) {
    contents.infrastructureConfigurationArn = __expectString(data.infrastructureConfigurationArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateInfrastructureConfigurationCommandError
 */
const de_CreateInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.imagebuilder#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteComponentCommand
 */
export const de_DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentBuildVersionArn != null) {
    contents.componentBuildVersionArn = __expectString(data.componentBuildVersionArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComponentCommandError
 */
const de_DeleteComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await de_ResourceDependencyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteContainerRecipeCommand
 */
export const de_DeleteContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteContainerRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.containerRecipeArn != null) {
    contents.containerRecipeArn = __expectString(data.containerRecipeArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteContainerRecipeCommandError
 */
const de_DeleteContainerRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteContainerRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await de_ResourceDependencyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDistributionConfigurationCommand
 */
export const de_DeleteDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDistributionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.distributionConfigurationArn != null) {
    contents.distributionConfigurationArn = __expectString(data.distributionConfigurationArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDistributionConfigurationCommandError
 */
const de_DeleteDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await de_ResourceDependencyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteImageCommand
 */
export const de_DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageBuildVersionArn != null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImageCommandError
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
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await de_ResourceDependencyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteImagePipelineCommand
 */
export const de_DeleteImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteImagePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imagePipelineArn != null) {
    contents.imagePipelineArn = __expectString(data.imagePipelineArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImagePipelineCommandError
 */
const de_DeleteImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await de_ResourceDependencyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteImageRecipeCommand
 */
export const de_DeleteImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteImageRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageRecipeArn != null) {
    contents.imageRecipeArn = __expectString(data.imageRecipeArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImageRecipeCommandError
 */
const de_DeleteImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await de_ResourceDependencyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteInfrastructureConfigurationCommand
 */
export const de_DeleteInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInfrastructureConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.infrastructureConfigurationArn != null) {
    contents.infrastructureConfigurationArn = __expectString(data.infrastructureConfigurationArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInfrastructureConfigurationCommandError
 */
const de_DeleteInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      throw await de_ResourceDependencyExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetComponentCommand
 */
export const de_GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.component != null) {
    contents.component = de_Component(data.component, context);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentCommandError
 */
const de_GetComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetComponentPolicyCommand
 */
export const de_GetComponentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetComponentPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentPolicyCommandError
 */
const de_GetComponentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetContainerRecipeCommand
 */
export const de_GetContainerRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContainerRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.containerRecipe != null) {
    contents.containerRecipe = de_ContainerRecipe(data.containerRecipe, context);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetContainerRecipeCommandError
 */
const de_GetContainerRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetContainerRecipePolicyCommand
 */
export const de_GetContainerRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetContainerRecipePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetContainerRecipePolicyCommandError
 */
const de_GetContainerRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetContainerRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDistributionConfigurationCommand
 */
export const de_GetDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDistributionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.distributionConfiguration != null) {
    contents.distributionConfiguration = de_DistributionConfiguration(data.distributionConfiguration, context);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDistributionConfigurationCommandError
 */
const de_GetDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetImageCommand
 */
export const de_GetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.image != null) {
    contents.image = de_Image(data.image, context);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetImageCommandError
 */
const de_GetImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetImagePipelineCommand
 */
export const de_GetImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImagePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imagePipeline != null) {
    contents.imagePipeline = de_ImagePipeline(data.imagePipeline, context);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetImagePipelineCommandError
 */
const de_GetImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetImagePolicyCommand
 */
export const de_GetImagePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImagePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetImagePolicyCommandError
 */
const de_GetImagePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetImageRecipeCommand
 */
export const de_GetImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImageRecipeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageRecipe != null) {
    contents.imageRecipe = de_ImageRecipe(data.imageRecipe, context);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetImageRecipeCommandError
 */
const de_GetImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetImageRecipePolicyCommand
 */
export const de_GetImageRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetImageRecipePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetImageRecipePolicyCommandError
 */
const de_GetImageRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetInfrastructureConfigurationCommand
 */
export const de_GetInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetInfrastructureConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.infrastructureConfiguration != null) {
    contents.infrastructureConfiguration = de_InfrastructureConfiguration(data.infrastructureConfiguration, context);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetInfrastructureConfigurationCommandError
 */
const de_GetInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkflowExecutionCommand
 */
export const de_GetWorkflowExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkflowExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endTime != null) {
    contents.endTime = __expectString(data.endTime);
  }
  if (data.imageBuildVersionArn != null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  if (data.startTime != null) {
    contents.startTime = __expectString(data.startTime);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.totalStepCount != null) {
    contents.totalStepCount = __expectInt32(data.totalStepCount);
  }
  if (data.totalStepsFailed != null) {
    contents.totalStepsFailed = __expectInt32(data.totalStepsFailed);
  }
  if (data.totalStepsSkipped != null) {
    contents.totalStepsSkipped = __expectInt32(data.totalStepsSkipped);
  }
  if (data.totalStepsSucceeded != null) {
    contents.totalStepsSucceeded = __expectInt32(data.totalStepsSucceeded);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  if (data.workflowBuildVersionArn != null) {
    contents.workflowBuildVersionArn = __expectString(data.workflowBuildVersionArn);
  }
  if (data.workflowExecutionId != null) {
    contents.workflowExecutionId = __expectString(data.workflowExecutionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowExecutionCommandError
 */
const de_GetWorkflowExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkflowStepExecutionCommand
 */
export const de_GetWorkflowStepExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkflowStepExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.action != null) {
    contents.action = __expectString(data.action);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.endTime != null) {
    contents.endTime = __expectString(data.endTime);
  }
  if (data.imageBuildVersionArn != null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.inputs != null) {
    contents.inputs = __expectString(data.inputs);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.onFailure != null) {
    contents.onFailure = __expectString(data.onFailure);
  }
  if (data.outputs != null) {
    contents.outputs = __expectString(data.outputs);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  if (data.rollbackStatus != null) {
    contents.rollbackStatus = __expectString(data.rollbackStatus);
  }
  if (data.startTime != null) {
    contents.startTime = __expectString(data.startTime);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.stepExecutionId != null) {
    contents.stepExecutionId = __expectString(data.stepExecutionId);
  }
  if (data.timeoutSeconds != null) {
    contents.timeoutSeconds = __expectInt32(data.timeoutSeconds);
  }
  if (data.workflowBuildVersionArn != null) {
    contents.workflowBuildVersionArn = __expectString(data.workflowBuildVersionArn);
  }
  if (data.workflowExecutionId != null) {
    contents.workflowExecutionId = __expectString(data.workflowExecutionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkflowStepExecutionCommandError
 */
const de_GetWorkflowStepExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkflowStepExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ImportComponentCommand
 */
export const de_ImportComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ImportComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.componentBuildVersionArn != null) {
    contents.componentBuildVersionArn = __expectString(data.componentBuildVersionArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ImportComponentCommandError
 */
const de_ImportComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      throw await de_InvalidVersionNumberExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ImportVmImageCommand
 */
export const de_ImportVmImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportVmImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ImportVmImageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageArn != null) {
    contents.imageArn = __expectString(data.imageArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ImportVmImageCommandError
 */
const de_ImportVmImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportVmImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListComponentBuildVersionsCommand
 */
export const de_ListComponentBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListComponentBuildVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentSummaryList != null) {
    contents.componentSummaryList = de_ComponentSummaryList(data.componentSummaryList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentBuildVersionsCommandError
 */
const de_ListComponentBuildVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListComponentsCommand
 */
export const de_ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentVersionList != null) {
    contents.componentVersionList = de_ComponentVersionList(data.componentVersionList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentsCommandError
 */
const de_ListComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListContainerRecipesCommand
 */
export const de_ListContainerRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListContainerRecipesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.containerRecipeSummaryList != null) {
    contents.containerRecipeSummaryList = de_ContainerRecipeSummaryList(data.containerRecipeSummaryList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListContainerRecipesCommandError
 */
const de_ListContainerRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListContainerRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDistributionConfigurationsCommand
 */
export const de_ListDistributionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDistributionConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.distributionConfigurationSummaryList != null) {
    contents.distributionConfigurationSummaryList = de_DistributionConfigurationSummaryList(
      data.distributionConfigurationSummaryList,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDistributionConfigurationsCommandError
 */
const de_ListDistributionConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImageBuildVersionsCommand
 */
export const de_ListImageBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImageBuildVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageSummaryList != null) {
    contents.imageSummaryList = de_ImageSummaryList(data.imageSummaryList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImageBuildVersionsCommandError
 */
const de_ListImageBuildVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImagePackagesCommand
 */
export const de_ListImagePackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImagePackagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imagePackageList != null) {
    contents.imagePackageList = de_ImagePackageList(data.imagePackageList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImagePackagesCommandError
 */
const de_ListImagePackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImagePipelineImagesCommand
 */
export const de_ListImagePipelineImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImagePipelineImagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageSummaryList != null) {
    contents.imageSummaryList = de_ImageSummaryList(data.imageSummaryList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImagePipelineImagesCommandError
 */
const de_ListImagePipelineImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImagePipelinesCommand
 */
export const de_ListImagePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImagePipelinesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imagePipelineList != null) {
    contents.imagePipelineList = de_ImagePipelineList(data.imagePipelineList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImagePipelinesCommandError
 */
const de_ListImagePipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImageRecipesCommand
 */
export const de_ListImageRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImageRecipesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageRecipeSummaryList != null) {
    contents.imageRecipeSummaryList = de_ImageRecipeSummaryList(data.imageRecipeSummaryList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImageRecipesCommandError
 */
const de_ListImageRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImagesCommand
 */
export const de_ListImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageVersionList != null) {
    contents.imageVersionList = de_ImageVersionList(data.imageVersionList, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImagesCommandError
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
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImageScanFindingAggregationsCommand
 */
export const de_ListImageScanFindingAggregationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageScanFindingAggregationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImageScanFindingAggregationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.aggregationType != null) {
    contents.aggregationType = __expectString(data.aggregationType);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  if (data.responses != null) {
    contents.responses = de_ImageScanFindingAggregationsList(data.responses, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImageScanFindingAggregationsCommandError
 */
const de_ListImageScanFindingAggregationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageScanFindingAggregationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListImageScanFindingsCommand
 */
export const de_ListImageScanFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageScanFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImageScanFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.findings != null) {
    contents.findings = de_ImageScanFindingsList(data.findings, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImageScanFindingsCommandError
 */
const de_ListImageScanFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageScanFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListInfrastructureConfigurationsCommand
 */
export const de_ListInfrastructureConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInfrastructureConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.infrastructureConfigurationSummaryList != null) {
    contents.infrastructureConfigurationSummaryList = de_InfrastructureConfigurationSummaryList(
      data.infrastructureConfigurationSummaryList,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInfrastructureConfigurationsCommandError
 */
const de_ListInfrastructureConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWorkflowExecutionsCommand
 */
export const de_ListWorkflowExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkflowExecutionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageBuildVersionArn != null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  if (data.workflowExecutions != null) {
    contents.workflowExecutions = de_WorkflowExecutionsList(data.workflowExecutions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowExecutionsCommandError
 */
const de_ListWorkflowExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListWorkflowStepExecutionsCommand
 */
export const de_ListWorkflowStepExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorkflowStepExecutionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageBuildVersionArn != null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  if (data.steps != null) {
    contents.steps = de_WorkflowStepExecutionsList(data.steps, context);
  }
  if (data.workflowBuildVersionArn != null) {
    contents.workflowBuildVersionArn = __expectString(data.workflowBuildVersionArn);
  }
  if (data.workflowExecutionId != null) {
    contents.workflowExecutionId = __expectString(data.workflowExecutionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorkflowStepExecutionsCommandError
 */
const de_ListWorkflowStepExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorkflowStepExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      throw await de_InvalidPaginationTokenExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutComponentPolicyCommand
 */
export const de_PutComponentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutComponentPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentArn != null) {
    contents.componentArn = __expectString(data.componentArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutComponentPolicyCommandError
 */
const de_PutComponentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutContainerRecipePolicyCommand
 */
export const de_PutContainerRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutContainerRecipePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.containerRecipeArn != null) {
    contents.containerRecipeArn = __expectString(data.containerRecipeArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutContainerRecipePolicyCommandError
 */
const de_PutContainerRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutContainerRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutImagePolicyCommand
 */
export const de_PutImagePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutImagePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageArn != null) {
    contents.imageArn = __expectString(data.imageArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutImagePolicyCommandError
 */
const de_PutImagePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutImageRecipePolicyCommand
 */
export const de_PutImageRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutImageRecipePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.imageRecipeArn != null) {
    contents.imageRecipeArn = __expectString(data.imageRecipeArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1PutImageRecipePolicyCommandError
 */
const de_PutImageRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartImagePipelineExecutionCommand
 */
export const de_StartImagePipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartImagePipelineExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imageBuildVersionArn != null) {
    contents.imageBuildVersionArn = __expectString(data.imageBuildVersionArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartImagePipelineExecutionCommandError
 */
const de_StartImagePipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDistributionConfigurationCommand
 */
export const de_UpdateDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDistributionConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.distributionConfigurationArn != null) {
    contents.distributionConfigurationArn = __expectString(data.distributionConfigurationArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDistributionConfigurationCommandError
 */
const de_UpdateDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateImagePipelineCommand
 */
export const de_UpdateImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateImagePipelineCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.imagePipelineArn != null) {
    contents.imagePipelineArn = __expectString(data.imagePipelineArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateImagePipelineCommandError
 */
const de_UpdateImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateInfrastructureConfigurationCommand
 */
export const de_UpdateInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateInfrastructureConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clientToken != null) {
    contents.clientToken = __expectString(data.clientToken);
  }
  if (data.infrastructureConfigurationArn != null) {
    contents.infrastructureConfigurationArn = __expectString(data.infrastructureConfigurationArn);
  }
  if (data.requestId != null) {
    contents.requestId = __expectString(data.requestId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInfrastructureConfigurationCommandError
 */
const de_UpdateInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      throw await de_CallRateLimitExceededExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      throw await de_ServiceExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1CallRateLimitExceededExceptionRes
 */
const de_CallRateLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CallRateLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new CallRateLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ClientExceptionRes
 */
const de_ClientExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ForbiddenExceptionRes
 */
const de_ForbiddenExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ForbiddenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1IdempotentParameterMismatchExceptionRes
 */
const de_IdempotentParameterMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new IdempotentParameterMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidPaginationTokenExceptionRes
 */
const de_InvalidPaginationTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidPaginationTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidVersionNumberExceptionRes
 */
const de_InvalidVersionNumberExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVersionNumberException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidVersionNumberException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceDependencyExceptionRes
 */
const de_ResourceDependencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDependencyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceDependencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceInUseException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AccountList
 */
const se_AccountList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1AdditionalInstanceConfiguration
 */
const se_AdditionalInstanceConfiguration = (input: AdditionalInstanceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.systemsManagerAgent != null && {
      systemsManagerAgent: se_SystemsManagerAgent(input.systemsManagerAgent, context),
    }),
    ...(input.userDataOverride != null && { userDataOverride: input.userDataOverride }),
  };
};

/**
 * serializeAws_restJson1AmiDistributionConfiguration
 */
const se_AmiDistributionConfiguration = (input: AmiDistributionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.amiTags != null && { amiTags: se_TagMap(input.amiTags, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.launchPermission != null && {
      launchPermission: se_LaunchPermissionConfiguration(input.launchPermission, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.targetAccountIds != null && { targetAccountIds: se_AccountList(input.targetAccountIds, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentConfiguration
 */
const se_ComponentConfiguration = (input: ComponentConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.componentArn != null && { componentArn: input.componentArn }),
    ...(input.parameters != null && { parameters: se_ComponentParameterList(input.parameters, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentConfigurationList
 */
const se_ComponentConfigurationList = (input: ComponentConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1ComponentParameter
 */
const se_ComponentParameter = (input: ComponentParameter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: se_ComponentParameterValueList(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentParameterList
 */
const se_ComponentParameterList = (input: ComponentParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentParameter(entry, context);
    });
};

/**
 * serializeAws_restJson1ComponentParameterValueList
 */
const se_ComponentParameterValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ContainerDistributionConfiguration
 */
const se_ContainerDistributionConfiguration = (
  input: ContainerDistributionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerTags != null && { containerTags: se_StringList(input.containerTags, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.targetRepository != null && {
      targetRepository: se_TargetContainerRepository(input.targetRepository, context),
    }),
  };
};

/**
 * serializeAws_restJson1Distribution
 */
const se_Distribution = (input: Distribution, context: __SerdeContext): any => {
  return {
    ...(input.amiDistributionConfiguration != null && {
      amiDistributionConfiguration: se_AmiDistributionConfiguration(input.amiDistributionConfiguration, context),
    }),
    ...(input.containerDistributionConfiguration != null && {
      containerDistributionConfiguration: se_ContainerDistributionConfiguration(
        input.containerDistributionConfiguration,
        context
      ),
    }),
    ...(input.fastLaunchConfigurations != null && {
      fastLaunchConfigurations: se_FastLaunchConfigurationList(input.fastLaunchConfigurations, context),
    }),
    ...(input.launchTemplateConfigurations != null && {
      launchTemplateConfigurations: se_LaunchTemplateConfigurationList(input.launchTemplateConfigurations, context),
    }),
    ...(input.licenseConfigurationArns != null && {
      licenseConfigurationArns: se_LicenseConfigurationArnList(input.licenseConfigurationArns, context),
    }),
    ...(input.region != null && { region: input.region }),
    ...(input.s3ExportConfiguration != null && {
      s3ExportConfiguration: se_S3ExportConfiguration(input.s3ExportConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1DistributionList
 */
const se_DistributionList = (input: Distribution[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Distribution(entry, context);
    });
};

/**
 * serializeAws_restJson1EbsInstanceBlockDeviceSpecification
 */
const se_EbsInstanceBlockDeviceSpecification = (
  input: EbsInstanceBlockDeviceSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.deleteOnTermination != null && { deleteOnTermination: input.deleteOnTermination }),
    ...(input.encrypted != null && { encrypted: input.encrypted }),
    ...(input.iops != null && { iops: input.iops }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.snapshotId != null && { snapshotId: input.snapshotId }),
    ...(input.throughput != null && { throughput: input.throughput }),
    ...(input.volumeSize != null && { volumeSize: input.volumeSize }),
    ...(input.volumeType != null && { volumeType: input.volumeType }),
  };
};

/**
 * serializeAws_restJson1EcrConfiguration
 */
const se_EcrConfiguration = (input: EcrConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.containerTags != null && { containerTags: se_StringList(input.containerTags, context) }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
  };
};

/**
 * serializeAws_restJson1FastLaunchConfiguration
 */
const se_FastLaunchConfiguration = (input: FastLaunchConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.launchTemplate != null && {
      launchTemplate: se_FastLaunchLaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.maxParallelLaunches != null && { maxParallelLaunches: input.maxParallelLaunches }),
    ...(input.snapshotConfiguration != null && {
      snapshotConfiguration: se_FastLaunchSnapshotConfiguration(input.snapshotConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1FastLaunchConfigurationList
 */
const se_FastLaunchConfigurationList = (input: FastLaunchConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FastLaunchConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1FastLaunchLaunchTemplateSpecification
 */
const se_FastLaunchLaunchTemplateSpecification = (
  input: FastLaunchLaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.launchTemplateId != null && { launchTemplateId: input.launchTemplateId }),
    ...(input.launchTemplateName != null && { launchTemplateName: input.launchTemplateName }),
    ...(input.launchTemplateVersion != null && { launchTemplateVersion: input.launchTemplateVersion }),
  };
};

/**
 * serializeAws_restJson1FastLaunchSnapshotConfiguration
 */
const se_FastLaunchSnapshotConfiguration = (input: FastLaunchSnapshotConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.targetResourceCount != null && { targetResourceCount: input.targetResourceCount }),
  };
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ImageScanFindingsFilter
 */
const se_ImageScanFindingsFilter = (input: ImageScanFindingsFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_ImageScanFindingsFilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1ImageScanFindingsFilterList
 */
const se_ImageScanFindingsFilterList = (input: ImageScanFindingsFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ImageScanFindingsFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1ImageScanFindingsFilterValues
 */
const se_ImageScanFindingsFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ImageScanningConfiguration
 */
const se_ImageScanningConfiguration = (input: ImageScanningConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.ecrConfiguration != null && { ecrConfiguration: se_EcrConfiguration(input.ecrConfiguration, context) }),
    ...(input.imageScanningEnabled != null && { imageScanningEnabled: input.imageScanningEnabled }),
  };
};

/**
 * serializeAws_restJson1ImageTestsConfiguration
 */
const se_ImageTestsConfiguration = (input: ImageTestsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.imageTestsEnabled != null && { imageTestsEnabled: input.imageTestsEnabled }),
    ...(input.timeoutMinutes != null && { timeoutMinutes: input.timeoutMinutes }),
  };
};

/**
 * serializeAws_restJson1InstanceBlockDeviceMapping
 */
const se_InstanceBlockDeviceMapping = (input: InstanceBlockDeviceMapping, context: __SerdeContext): any => {
  return {
    ...(input.deviceName != null && { deviceName: input.deviceName }),
    ...(input.ebs != null && { ebs: se_EbsInstanceBlockDeviceSpecification(input.ebs, context) }),
    ...(input.noDevice != null && { noDevice: input.noDevice }),
    ...(input.virtualName != null && { virtualName: input.virtualName }),
  };
};

/**
 * serializeAws_restJson1InstanceBlockDeviceMappings
 */
const se_InstanceBlockDeviceMappings = (input: InstanceBlockDeviceMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InstanceBlockDeviceMapping(entry, context);
    });
};

/**
 * serializeAws_restJson1InstanceConfiguration
 */
const se_InstanceConfiguration = (input: InstanceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.blockDeviceMappings != null && {
      blockDeviceMappings: se_InstanceBlockDeviceMappings(input.blockDeviceMappings, context),
    }),
    ...(input.image != null && { image: input.image }),
  };
};

/**
 * serializeAws_restJson1InstanceMetadataOptions
 */
const se_InstanceMetadataOptions = (input: InstanceMetadataOptions, context: __SerdeContext): any => {
  return {
    ...(input.httpPutResponseHopLimit != null && { httpPutResponseHopLimit: input.httpPutResponseHopLimit }),
    ...(input.httpTokens != null && { httpTokens: input.httpTokens }),
  };
};

/**
 * serializeAws_restJson1InstanceTypeList
 */
const se_InstanceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1LaunchPermissionConfiguration
 */
const se_LaunchPermissionConfiguration = (input: LaunchPermissionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.organizationArns != null && {
      organizationArns: se_OrganizationArnList(input.organizationArns, context),
    }),
    ...(input.organizationalUnitArns != null && {
      organizationalUnitArns: se_OrganizationalUnitArnList(input.organizationalUnitArns, context),
    }),
    ...(input.userGroups != null && { userGroups: se_StringList(input.userGroups, context) }),
    ...(input.userIds != null && { userIds: se_AccountList(input.userIds, context) }),
  };
};

/**
 * serializeAws_restJson1LaunchTemplateConfiguration
 */
const se_LaunchTemplateConfiguration = (input: LaunchTemplateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.accountId != null && { accountId: input.accountId }),
    ...(input.launchTemplateId != null && { launchTemplateId: input.launchTemplateId }),
    ...(input.setDefaultVersion != null && { setDefaultVersion: input.setDefaultVersion }),
  };
};

/**
 * serializeAws_restJson1LaunchTemplateConfigurationList
 */
const se_LaunchTemplateConfigurationList = (input: LaunchTemplateConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LaunchTemplateConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1LicenseConfigurationArnList
 */
const se_LicenseConfigurationArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Logging
 */
const se_Logging = (input: Logging, context: __SerdeContext): any => {
  return {
    ...(input.s3Logs != null && { s3Logs: se_S3Logs(input.s3Logs, context) }),
  };
};

/**
 * serializeAws_restJson1OrganizationalUnitArnList
 */
const se_OrganizationalUnitArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OrganizationArnList
 */
const se_OrganizationArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OsVersionList
 */
const se_OsVersionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceTagMap
 */
const se_ResourceTagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1S3ExportConfiguration
 */
const se_S3ExportConfiguration = (input: S3ExportConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.diskImageFormat != null && { diskImageFormat: input.diskImageFormat }),
    ...(input.roleName != null && { roleName: input.roleName }),
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Prefix != null && { s3Prefix: input.s3Prefix }),
  };
};

/**
 * serializeAws_restJson1S3Logs
 */
const se_S3Logs = (input: S3Logs, context: __SerdeContext): any => {
  return {
    ...(input.s3BucketName != null && { s3BucketName: input.s3BucketName }),
    ...(input.s3KeyPrefix != null && { s3KeyPrefix: input.s3KeyPrefix }),
  };
};

/**
 * serializeAws_restJson1Schedule
 */
const se_Schedule = (input: Schedule, context: __SerdeContext): any => {
  return {
    ...(input.pipelineExecutionStartCondition != null && {
      pipelineExecutionStartCondition: input.pipelineExecutionStartCondition,
    }),
    ...(input.scheduleExpression != null && { scheduleExpression: input.scheduleExpression }),
    ...(input.timezone != null && { timezone: input.timezone }),
  };
};

/**
 * serializeAws_restJson1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SystemsManagerAgent
 */
const se_SystemsManagerAgent = (input: SystemsManagerAgent, context: __SerdeContext): any => {
  return {
    ...(input.uninstallAfterBuild != null && { uninstallAfterBuild: input.uninstallAfterBuild }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TargetContainerRepository
 */
const se_TargetContainerRepository = (input: TargetContainerRepository, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.service != null && { service: input.service }),
  };
};

/**
 * deserializeAws_restJson1AccountAggregation
 */
const de_AccountAggregation = (output: any, context: __SerdeContext): AccountAggregation => {
  return {
    accountId: __expectString(output.accountId),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AccountList
 */
const de_AccountList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AdditionalInstanceConfiguration
 */
const de_AdditionalInstanceConfiguration = (output: any, context: __SerdeContext): AdditionalInstanceConfiguration => {
  return {
    systemsManagerAgent:
      output.systemsManagerAgent != null ? de_SystemsManagerAgent(output.systemsManagerAgent, context) : undefined,
    userDataOverride: __expectString(output.userDataOverride),
  } as any;
};

/**
 * deserializeAws_restJson1Ami
 */
const de_Ami = (output: any, context: __SerdeContext): Ami => {
  return {
    accountId: __expectString(output.accountId),
    description: __expectString(output.description),
    image: __expectString(output.image),
    name: __expectString(output.name),
    region: __expectString(output.region),
    state: output.state != null ? de_ImageState(output.state, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AmiDistributionConfiguration
 */
const de_AmiDistributionConfiguration = (output: any, context: __SerdeContext): AmiDistributionConfiguration => {
  return {
    amiTags: output.amiTags != null ? de_TagMap(output.amiTags, context) : undefined,
    description: __expectString(output.description),
    kmsKeyId: __expectString(output.kmsKeyId),
    launchPermission:
      output.launchPermission != null ? de_LaunchPermissionConfiguration(output.launchPermission, context) : undefined,
    name: __expectString(output.name),
    targetAccountIds: output.targetAccountIds != null ? de_AccountList(output.targetAccountIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AmiList
 */
const de_AmiList = (output: any, context: __SerdeContext): Ami[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Ami(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Component
 */
const de_Component = (output: any, context: __SerdeContext): Component => {
  return {
    arn: __expectString(output.arn),
    changeDescription: __expectString(output.changeDescription),
    data: __expectString(output.data),
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    encrypted: __expectBoolean(output.encrypted),
    kmsKeyId: __expectString(output.kmsKeyId),
    name: __expectString(output.name),
    obfuscate: __expectBoolean(output.obfuscate),
    owner: __expectString(output.owner),
    parameters: output.parameters != null ? de_ComponentParameterDetailList(output.parameters, context) : undefined,
    platform: __expectString(output.platform),
    publisher: __expectString(output.publisher),
    state: output.state != null ? de_ComponentState(output.state, context) : undefined,
    supportedOsVersions:
      output.supportedOsVersions != null ? de_OsVersionList(output.supportedOsVersions, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentConfiguration
 */
const de_ComponentConfiguration = (output: any, context: __SerdeContext): ComponentConfiguration => {
  return {
    componentArn: __expectString(output.componentArn),
    parameters: output.parameters != null ? de_ComponentParameterList(output.parameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentConfigurationList
 */
const de_ComponentConfigurationList = (output: any, context: __SerdeContext): ComponentConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentParameter
 */
const de_ComponentParameter = (output: any, context: __SerdeContext): ComponentParameter => {
  return {
    name: __expectString(output.name),
    value: output.value != null ? de_ComponentParameterValueList(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentParameterDetail
 */
const de_ComponentParameterDetail = (output: any, context: __SerdeContext): ComponentParameterDetail => {
  return {
    defaultValue:
      output.defaultValue != null ? de_ComponentParameterValueList(output.defaultValue, context) : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentParameterDetailList
 */
const de_ComponentParameterDetailList = (output: any, context: __SerdeContext): ComponentParameterDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentParameterDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentParameterList
 */
const de_ComponentParameterList = (output: any, context: __SerdeContext): ComponentParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentParameterValueList
 */
const de_ComponentParameterValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentState
 */
const de_ComponentState = (output: any, context: __SerdeContext): ComponentState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentSummary
 */
const de_ComponentSummary = (output: any, context: __SerdeContext): ComponentSummary => {
  return {
    arn: __expectString(output.arn),
    changeDescription: __expectString(output.changeDescription),
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    name: __expectString(output.name),
    obfuscate: __expectBoolean(output.obfuscate),
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    publisher: __expectString(output.publisher),
    state: output.state != null ? de_ComponentState(output.state, context) : undefined,
    supportedOsVersions:
      output.supportedOsVersions != null ? de_OsVersionList(output.supportedOsVersions, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentSummaryList
 */
const de_ComponentSummaryList = (output: any, context: __SerdeContext): ComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentVersion
 */
const de_ComponentVersion = (output: any, context: __SerdeContext): ComponentVersion => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    supportedOsVersions:
      output.supportedOsVersions != null ? de_OsVersionList(output.supportedOsVersions, context) : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentVersionList
 */
const de_ComponentVersionList = (output: any, context: __SerdeContext): ComponentVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Container
 */
const de_Container = (output: any, context: __SerdeContext): Container => {
  return {
    imageUris: output.imageUris != null ? de_StringList(output.imageUris, context) : undefined,
    region: __expectString(output.region),
  } as any;
};

/**
 * deserializeAws_restJson1ContainerDistributionConfiguration
 */
const de_ContainerDistributionConfiguration = (
  output: any,
  context: __SerdeContext
): ContainerDistributionConfiguration => {
  return {
    containerTags: output.containerTags != null ? de_StringList(output.containerTags, context) : undefined,
    description: __expectString(output.description),
    targetRepository:
      output.targetRepository != null ? de_TargetContainerRepository(output.targetRepository, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContainerList
 */
const de_ContainerList = (output: any, context: __SerdeContext): Container[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Container(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ContainerRecipe
 */
const de_ContainerRecipe = (output: any, context: __SerdeContext): ContainerRecipe => {
  return {
    arn: __expectString(output.arn),
    components: output.components != null ? de_ComponentConfigurationList(output.components, context) : undefined,
    containerType: __expectString(output.containerType),
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    dockerfileTemplateData: __expectString(output.dockerfileTemplateData),
    encrypted: __expectBoolean(output.encrypted),
    instanceConfiguration:
      output.instanceConfiguration != null
        ? de_InstanceConfiguration(output.instanceConfiguration, context)
        : undefined,
    kmsKeyId: __expectString(output.kmsKeyId),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parentImage: __expectString(output.parentImage),
    platform: __expectString(output.platform),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    targetRepository:
      output.targetRepository != null ? de_TargetContainerRepository(output.targetRepository, context) : undefined,
    version: __expectString(output.version),
    workingDirectory: __expectString(output.workingDirectory),
  } as any;
};

/**
 * deserializeAws_restJson1ContainerRecipeSummary
 */
const de_ContainerRecipeSummary = (output: any, context: __SerdeContext): ContainerRecipeSummary => {
  return {
    arn: __expectString(output.arn),
    containerType: __expectString(output.containerType),
    dateCreated: __expectString(output.dateCreated),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parentImage: __expectString(output.parentImage),
    platform: __expectString(output.platform),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ContainerRecipeSummaryList
 */
const de_ContainerRecipeSummaryList = (output: any, context: __SerdeContext): ContainerRecipeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContainerRecipeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CvssScore
 */
const de_CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return {
    baseScore: __limitedParseDouble(output.baseScore),
    scoringVector: __expectString(output.scoringVector),
    source: __expectString(output.source),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1CvssScoreAdjustment
 */
const de_CvssScoreAdjustment = (output: any, context: __SerdeContext): CvssScoreAdjustment => {
  return {
    metric: __expectString(output.metric),
    reason: __expectString(output.reason),
  } as any;
};

/**
 * deserializeAws_restJson1CvssScoreAdjustmentList
 */
const de_CvssScoreAdjustmentList = (output: any, context: __SerdeContext): CvssScoreAdjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CvssScoreAdjustment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CvssScoreDetails
 */
const de_CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return {
    adjustments: output.adjustments != null ? de_CvssScoreAdjustmentList(output.adjustments, context) : undefined,
    cvssSource: __expectString(output.cvssSource),
    score: __limitedParseDouble(output.score),
    scoreSource: __expectString(output.scoreSource),
    scoringVector: __expectString(output.scoringVector),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1CvssScoreList
 */
const de_CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CvssScore(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Distribution
 */
const de_Distribution = (output: any, context: __SerdeContext): Distribution => {
  return {
    amiDistributionConfiguration:
      output.amiDistributionConfiguration != null
        ? de_AmiDistributionConfiguration(output.amiDistributionConfiguration, context)
        : undefined,
    containerDistributionConfiguration:
      output.containerDistributionConfiguration != null
        ? de_ContainerDistributionConfiguration(output.containerDistributionConfiguration, context)
        : undefined,
    fastLaunchConfigurations:
      output.fastLaunchConfigurations != null
        ? de_FastLaunchConfigurationList(output.fastLaunchConfigurations, context)
        : undefined,
    launchTemplateConfigurations:
      output.launchTemplateConfigurations != null
        ? de_LaunchTemplateConfigurationList(output.launchTemplateConfigurations, context)
        : undefined,
    licenseConfigurationArns:
      output.licenseConfigurationArns != null
        ? de_LicenseConfigurationArnList(output.licenseConfigurationArns, context)
        : undefined,
    region: __expectString(output.region),
    s3ExportConfiguration:
      output.s3ExportConfiguration != null
        ? de_S3ExportConfiguration(output.s3ExportConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DistributionConfiguration
 */
const de_DistributionConfiguration = (output: any, context: __SerdeContext): DistributionConfiguration => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    distributions: output.distributions != null ? de_DistributionList(output.distributions, context) : undefined,
    name: __expectString(output.name),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    timeoutMinutes: __expectInt32(output.timeoutMinutes),
  } as any;
};

/**
 * deserializeAws_restJson1DistributionConfigurationSummary
 */
const de_DistributionConfigurationSummary = (
  output: any,
  context: __SerdeContext
): DistributionConfigurationSummary => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    name: __expectString(output.name),
    regions: output.regions != null ? de_RegionList(output.regions, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DistributionConfigurationSummaryList
 */
const de_DistributionConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): DistributionConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DistributionConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DistributionList
 */
const de_DistributionList = (output: any, context: __SerdeContext): Distribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Distribution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EbsInstanceBlockDeviceSpecification
 */
const de_EbsInstanceBlockDeviceSpecification = (
  output: any,
  context: __SerdeContext
): EbsInstanceBlockDeviceSpecification => {
  return {
    deleteOnTermination: __expectBoolean(output.deleteOnTermination),
    encrypted: __expectBoolean(output.encrypted),
    iops: __expectInt32(output.iops),
    kmsKeyId: __expectString(output.kmsKeyId),
    snapshotId: __expectString(output.snapshotId),
    throughput: __expectInt32(output.throughput),
    volumeSize: __expectInt32(output.volumeSize),
    volumeType: __expectString(output.volumeType),
  } as any;
};

/**
 * deserializeAws_restJson1EcrConfiguration
 */
const de_EcrConfiguration = (output: any, context: __SerdeContext): EcrConfiguration => {
  return {
    containerTags: output.containerTags != null ? de_StringList(output.containerTags, context) : undefined,
    repositoryName: __expectString(output.repositoryName),
  } as any;
};

/**
 * deserializeAws_restJson1FastLaunchConfiguration
 */
const de_FastLaunchConfiguration = (output: any, context: __SerdeContext): FastLaunchConfiguration => {
  return {
    accountId: __expectString(output.accountId),
    enabled: __expectBoolean(output.enabled),
    launchTemplate:
      output.launchTemplate != null
        ? de_FastLaunchLaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    maxParallelLaunches: __expectInt32(output.maxParallelLaunches),
    snapshotConfiguration:
      output.snapshotConfiguration != null
        ? de_FastLaunchSnapshotConfiguration(output.snapshotConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FastLaunchConfigurationList
 */
const de_FastLaunchConfigurationList = (output: any, context: __SerdeContext): FastLaunchConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FastLaunchConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FastLaunchLaunchTemplateSpecification
 */
const de_FastLaunchLaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): FastLaunchLaunchTemplateSpecification => {
  return {
    launchTemplateId: __expectString(output.launchTemplateId),
    launchTemplateName: __expectString(output.launchTemplateName),
    launchTemplateVersion: __expectString(output.launchTemplateVersion),
  } as any;
};

/**
 * deserializeAws_restJson1FastLaunchSnapshotConfiguration
 */
const de_FastLaunchSnapshotConfiguration = (output: any, context: __SerdeContext): FastLaunchSnapshotConfiguration => {
  return {
    targetResourceCount: __expectInt32(output.targetResourceCount),
  } as any;
};

/**
 * deserializeAws_restJson1Image
 */
const de_Image = (output: any, context: __SerdeContext): Image => {
  return {
    arn: __expectString(output.arn),
    buildType: __expectString(output.buildType),
    containerRecipe: output.containerRecipe != null ? de_ContainerRecipe(output.containerRecipe, context) : undefined,
    dateCreated: __expectString(output.dateCreated),
    distributionConfiguration:
      output.distributionConfiguration != null
        ? de_DistributionConfiguration(output.distributionConfiguration, context)
        : undefined,
    enhancedImageMetadataEnabled: __expectBoolean(output.enhancedImageMetadataEnabled),
    imageRecipe: output.imageRecipe != null ? de_ImageRecipe(output.imageRecipe, context) : undefined,
    imageScanningConfiguration:
      output.imageScanningConfiguration != null
        ? de_ImageScanningConfiguration(output.imageScanningConfiguration, context)
        : undefined,
    imageSource: __expectString(output.imageSource),
    imageTestsConfiguration:
      output.imageTestsConfiguration != null
        ? de_ImageTestsConfiguration(output.imageTestsConfiguration, context)
        : undefined,
    infrastructureConfiguration:
      output.infrastructureConfiguration != null
        ? de_InfrastructureConfiguration(output.infrastructureConfiguration, context)
        : undefined,
    name: __expectString(output.name),
    osVersion: __expectString(output.osVersion),
    outputResources: output.outputResources != null ? de_OutputResources(output.outputResources, context) : undefined,
    platform: __expectString(output.platform),
    scanState: output.scanState != null ? de_ImageScanState(output.scanState, context) : undefined,
    sourcePipelineArn: __expectString(output.sourcePipelineArn),
    sourcePipelineName: __expectString(output.sourcePipelineName),
    state: output.state != null ? de_ImageState(output.state, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1ImageAggregation
 */
const de_ImageAggregation = (output: any, context: __SerdeContext): ImageAggregation => {
  return {
    imageBuildVersionArn: __expectString(output.imageBuildVersionArn),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImagePackage
 */
const de_ImagePackage = (output: any, context: __SerdeContext): ImagePackage => {
  return {
    packageName: __expectString(output.packageName),
    packageVersion: __expectString(output.packageVersion),
  } as any;
};

/**
 * deserializeAws_restJson1ImagePackageList
 */
const de_ImagePackageList = (output: any, context: __SerdeContext): ImagePackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImagePackage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImagePipeline
 */
const de_ImagePipeline = (output: any, context: __SerdeContext): ImagePipeline => {
  return {
    arn: __expectString(output.arn),
    containerRecipeArn: __expectString(output.containerRecipeArn),
    dateCreated: __expectString(output.dateCreated),
    dateLastRun: __expectString(output.dateLastRun),
    dateNextRun: __expectString(output.dateNextRun),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    distributionConfigurationArn: __expectString(output.distributionConfigurationArn),
    enhancedImageMetadataEnabled: __expectBoolean(output.enhancedImageMetadataEnabled),
    imageRecipeArn: __expectString(output.imageRecipeArn),
    imageScanningConfiguration:
      output.imageScanningConfiguration != null
        ? de_ImageScanningConfiguration(output.imageScanningConfiguration, context)
        : undefined,
    imageTestsConfiguration:
      output.imageTestsConfiguration != null
        ? de_ImageTestsConfiguration(output.imageTestsConfiguration, context)
        : undefined,
    infrastructureConfigurationArn: __expectString(output.infrastructureConfigurationArn),
    name: __expectString(output.name),
    platform: __expectString(output.platform),
    schedule: output.schedule != null ? de_Schedule(output.schedule, context) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImagePipelineAggregation
 */
const de_ImagePipelineAggregation = (output: any, context: __SerdeContext): ImagePipelineAggregation => {
  return {
    imagePipelineArn: __expectString(output.imagePipelineArn),
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImagePipelineList
 */
const de_ImagePipelineList = (output: any, context: __SerdeContext): ImagePipeline[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImagePipeline(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageRecipe
 */
const de_ImageRecipe = (output: any, context: __SerdeContext): ImageRecipe => {
  return {
    additionalInstanceConfiguration:
      output.additionalInstanceConfiguration != null
        ? de_AdditionalInstanceConfiguration(output.additionalInstanceConfiguration, context)
        : undefined,
    arn: __expectString(output.arn),
    blockDeviceMappings:
      output.blockDeviceMappings != null
        ? de_InstanceBlockDeviceMappings(output.blockDeviceMappings, context)
        : undefined,
    components: output.components != null ? de_ComponentConfigurationList(output.components, context) : undefined,
    dateCreated: __expectString(output.dateCreated),
    description: __expectString(output.description),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parentImage: __expectString(output.parentImage),
    platform: __expectString(output.platform),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
    workingDirectory: __expectString(output.workingDirectory),
  } as any;
};

/**
 * deserializeAws_restJson1ImageRecipeSummary
 */
const de_ImageRecipeSummary = (output: any, context: __SerdeContext): ImageRecipeSummary => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    name: __expectString(output.name),
    owner: __expectString(output.owner),
    parentImage: __expectString(output.parentImage),
    platform: __expectString(output.platform),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImageRecipeSummaryList
 */
const de_ImageRecipeSummaryList = (output: any, context: __SerdeContext): ImageRecipeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageRecipeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageScanFinding
 */
const de_ImageScanFinding = (output: any, context: __SerdeContext): ImageScanFinding => {
  return {
    awsAccountId: __expectString(output.awsAccountId),
    description: __expectString(output.description),
    firstObservedAt:
      output.firstObservedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.firstObservedAt)))
        : undefined,
    fixAvailable: __expectString(output.fixAvailable),
    imageBuildVersionArn: __expectString(output.imageBuildVersionArn),
    imagePipelineArn: __expectString(output.imagePipelineArn),
    inspectorScore: __limitedParseDouble(output.inspectorScore),
    inspectorScoreDetails:
      output.inspectorScoreDetails != null
        ? de_InspectorScoreDetails(output.inspectorScoreDetails, context)
        : undefined,
    packageVulnerabilityDetails:
      output.packageVulnerabilityDetails != null
        ? de_PackageVulnerabilityDetails(output.packageVulnerabilityDetails, context)
        : undefined,
    remediation: output.remediation != null ? de_Remediation(output.remediation, context) : undefined,
    severity: __expectString(output.severity),
    title: __expectString(output.title),
    type: __expectString(output.type),
    updatedAt:
      output.updatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.updatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImageScanFindingAggregation
 */
const de_ImageScanFindingAggregation = (output: any, context: __SerdeContext): ImageScanFindingAggregation => {
  return {
    accountAggregation:
      output.accountAggregation != null ? de_AccountAggregation(output.accountAggregation, context) : undefined,
    imageAggregation:
      output.imageAggregation != null ? de_ImageAggregation(output.imageAggregation, context) : undefined,
    imagePipelineAggregation:
      output.imagePipelineAggregation != null
        ? de_ImagePipelineAggregation(output.imagePipelineAggregation, context)
        : undefined,
    vulnerabilityIdAggregation:
      output.vulnerabilityIdAggregation != null
        ? de_VulnerabilityIdAggregation(output.vulnerabilityIdAggregation, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImageScanFindingAggregationsList
 */
const de_ImageScanFindingAggregationsList = (output: any, context: __SerdeContext): ImageScanFindingAggregation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageScanFindingAggregation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageScanFindingsList
 */
const de_ImageScanFindingsList = (output: any, context: __SerdeContext): ImageScanFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageScanFinding(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageScanningConfiguration
 */
const de_ImageScanningConfiguration = (output: any, context: __SerdeContext): ImageScanningConfiguration => {
  return {
    ecrConfiguration:
      output.ecrConfiguration != null ? de_EcrConfiguration(output.ecrConfiguration, context) : undefined,
    imageScanningEnabled: __expectBoolean(output.imageScanningEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1ImageScanState
 */
const de_ImageScanState = (output: any, context: __SerdeContext): ImageScanState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ImageState
 */
const de_ImageState = (output: any, context: __SerdeContext): ImageState => {
  return {
    reason: __expectString(output.reason),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1ImageSummary
 */
const de_ImageSummary = (output: any, context: __SerdeContext): ImageSummary => {
  return {
    arn: __expectString(output.arn),
    buildType: __expectString(output.buildType),
    dateCreated: __expectString(output.dateCreated),
    imageSource: __expectString(output.imageSource),
    name: __expectString(output.name),
    osVersion: __expectString(output.osVersion),
    outputResources: output.outputResources != null ? de_OutputResources(output.outputResources, context) : undefined,
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    state: output.state != null ? de_ImageState(output.state, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1ImageSummaryList
 */
const de_ImageSummaryList = (output: any, context: __SerdeContext): ImageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ImageTestsConfiguration
 */
const de_ImageTestsConfiguration = (output: any, context: __SerdeContext): ImageTestsConfiguration => {
  return {
    imageTestsEnabled: __expectBoolean(output.imageTestsEnabled),
    timeoutMinutes: __expectInt32(output.timeoutMinutes),
  } as any;
};

/**
 * deserializeAws_restJson1ImageVersion
 */
const de_ImageVersion = (output: any, context: __SerdeContext): ImageVersion => {
  return {
    arn: __expectString(output.arn),
    buildType: __expectString(output.buildType),
    dateCreated: __expectString(output.dateCreated),
    imageSource: __expectString(output.imageSource),
    name: __expectString(output.name),
    osVersion: __expectString(output.osVersion),
    owner: __expectString(output.owner),
    platform: __expectString(output.platform),
    type: __expectString(output.type),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1ImageVersionList
 */
const de_ImageVersionList = (output: any, context: __SerdeContext): ImageVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImageVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InfrastructureConfiguration
 */
const de_InfrastructureConfiguration = (output: any, context: __SerdeContext): InfrastructureConfiguration => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    instanceMetadataOptions:
      output.instanceMetadataOptions != null
        ? de_InstanceMetadataOptions(output.instanceMetadataOptions, context)
        : undefined,
    instanceProfileName: __expectString(output.instanceProfileName),
    instanceTypes: output.instanceTypes != null ? de_InstanceTypeList(output.instanceTypes, context) : undefined,
    keyPair: __expectString(output.keyPair),
    logging: output.logging != null ? de_Logging(output.logging, context) : undefined,
    name: __expectString(output.name),
    resourceTags: output.resourceTags != null ? de_ResourceTagMap(output.resourceTags, context) : undefined,
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIds(output.securityGroupIds, context) : undefined,
    snsTopicArn: __expectString(output.snsTopicArn),
    subnetId: __expectString(output.subnetId),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    terminateInstanceOnFailure: __expectBoolean(output.terminateInstanceOnFailure),
  } as any;
};

/**
 * deserializeAws_restJson1InfrastructureConfigurationSummary
 */
const de_InfrastructureConfigurationSummary = (
  output: any,
  context: __SerdeContext
): InfrastructureConfigurationSummary => {
  return {
    arn: __expectString(output.arn),
    dateCreated: __expectString(output.dateCreated),
    dateUpdated: __expectString(output.dateUpdated),
    description: __expectString(output.description),
    instanceProfileName: __expectString(output.instanceProfileName),
    instanceTypes: output.instanceTypes != null ? de_InstanceTypeList(output.instanceTypes, context) : undefined,
    name: __expectString(output.name),
    resourceTags: output.resourceTags != null ? de_ResourceTagMap(output.resourceTags, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InfrastructureConfigurationSummaryList
 */
const de_InfrastructureConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): InfrastructureConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InfrastructureConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InspectorScoreDetails
 */
const de_InspectorScoreDetails = (output: any, context: __SerdeContext): InspectorScoreDetails => {
  return {
    adjustedCvss: output.adjustedCvss != null ? de_CvssScoreDetails(output.adjustedCvss, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InstanceBlockDeviceMapping
 */
const de_InstanceBlockDeviceMapping = (output: any, context: __SerdeContext): InstanceBlockDeviceMapping => {
  return {
    deviceName: __expectString(output.deviceName),
    ebs: output.ebs != null ? de_EbsInstanceBlockDeviceSpecification(output.ebs, context) : undefined,
    noDevice: __expectString(output.noDevice),
    virtualName: __expectString(output.virtualName),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceBlockDeviceMappings
 */
const de_InstanceBlockDeviceMappings = (output: any, context: __SerdeContext): InstanceBlockDeviceMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceBlockDeviceMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InstanceConfiguration
 */
const de_InstanceConfiguration = (output: any, context: __SerdeContext): InstanceConfiguration => {
  return {
    blockDeviceMappings:
      output.blockDeviceMappings != null
        ? de_InstanceBlockDeviceMappings(output.blockDeviceMappings, context)
        : undefined,
    image: __expectString(output.image),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceMetadataOptions
 */
const de_InstanceMetadataOptions = (output: any, context: __SerdeContext): InstanceMetadataOptions => {
  return {
    httpPutResponseHopLimit: __expectInt32(output.httpPutResponseHopLimit),
    httpTokens: __expectString(output.httpTokens),
  } as any;
};

/**
 * deserializeAws_restJson1InstanceTypeList
 */
const de_InstanceTypeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LaunchPermissionConfiguration
 */
const de_LaunchPermissionConfiguration = (output: any, context: __SerdeContext): LaunchPermissionConfiguration => {
  return {
    organizationArns:
      output.organizationArns != null ? de_OrganizationArnList(output.organizationArns, context) : undefined,
    organizationalUnitArns:
      output.organizationalUnitArns != null
        ? de_OrganizationalUnitArnList(output.organizationalUnitArns, context)
        : undefined,
    userGroups: output.userGroups != null ? de_StringList(output.userGroups, context) : undefined,
    userIds: output.userIds != null ? de_AccountList(output.userIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LaunchTemplateConfiguration
 */
const de_LaunchTemplateConfiguration = (output: any, context: __SerdeContext): LaunchTemplateConfiguration => {
  return {
    accountId: __expectString(output.accountId),
    launchTemplateId: __expectString(output.launchTemplateId),
    setDefaultVersion: __expectBoolean(output.setDefaultVersion),
  } as any;
};

/**
 * deserializeAws_restJson1LaunchTemplateConfigurationList
 */
const de_LaunchTemplateConfigurationList = (output: any, context: __SerdeContext): LaunchTemplateConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LaunchTemplateConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LicenseConfigurationArnList
 */
const de_LicenseConfigurationArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Logging
 */
const de_Logging = (output: any, context: __SerdeContext): Logging => {
  return {
    s3Logs: output.s3Logs != null ? de_S3Logs(output.s3Logs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NonEmptyStringList
 */
const de_NonEmptyStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OrganizationalUnitArnList
 */
const de_OrganizationalUnitArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OrganizationArnList
 */
const de_OrganizationArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OsVersionList
 */
const de_OsVersionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1OutputResources
 */
const de_OutputResources = (output: any, context: __SerdeContext): OutputResources => {
  return {
    amis: output.amis != null ? de_AmiList(output.amis, context) : undefined,
    containers: output.containers != null ? de_ContainerList(output.containers, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PackageVulnerabilityDetails
 */
const de_PackageVulnerabilityDetails = (output: any, context: __SerdeContext): PackageVulnerabilityDetails => {
  return {
    cvss: output.cvss != null ? de_CvssScoreList(output.cvss, context) : undefined,
    referenceUrls: output.referenceUrls != null ? de_NonEmptyStringList(output.referenceUrls, context) : undefined,
    relatedVulnerabilities:
      output.relatedVulnerabilities != null
        ? de_VulnerabilityIdList(output.relatedVulnerabilities, context)
        : undefined,
    source: __expectString(output.source),
    sourceUrl: __expectString(output.sourceUrl),
    vendorCreatedAt:
      output.vendorCreatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.vendorCreatedAt)))
        : undefined,
    vendorSeverity: __expectString(output.vendorSeverity),
    vendorUpdatedAt:
      output.vendorUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.vendorUpdatedAt)))
        : undefined,
    vulnerabilityId: __expectString(output.vulnerabilityId),
    vulnerablePackages:
      output.vulnerablePackages != null ? de_VulnerablePackageList(output.vulnerablePackages, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RegionList
 */
const de_RegionList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Remediation
 */
const de_Remediation = (output: any, context: __SerdeContext): Remediation => {
  return {
    recommendation:
      output.recommendation != null ? de_RemediationRecommendation(output.recommendation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RemediationRecommendation
 */
const de_RemediationRecommendation = (output: any, context: __SerdeContext): RemediationRecommendation => {
  return {
    text: __expectString(output.text),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceTagMap
 */
const de_ResourceTagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1S3ExportConfiguration
 */
const de_S3ExportConfiguration = (output: any, context: __SerdeContext): S3ExportConfiguration => {
  return {
    diskImageFormat: __expectString(output.diskImageFormat),
    roleName: __expectString(output.roleName),
    s3Bucket: __expectString(output.s3Bucket),
    s3Prefix: __expectString(output.s3Prefix),
  } as any;
};

/**
 * deserializeAws_restJson1S3Logs
 */
const de_S3Logs = (output: any, context: __SerdeContext): S3Logs => {
  return {
    s3BucketName: __expectString(output.s3BucketName),
    s3KeyPrefix: __expectString(output.s3KeyPrefix),
  } as any;
};

/**
 * deserializeAws_restJson1Schedule
 */
const de_Schedule = (output: any, context: __SerdeContext): Schedule => {
  return {
    pipelineExecutionStartCondition: __expectString(output.pipelineExecutionStartCondition),
    scheduleExpression: __expectString(output.scheduleExpression),
    timezone: __expectString(output.timezone),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SeverityCounts
 */
const de_SeverityCounts = (output: any, context: __SerdeContext): SeverityCounts => {
  return {
    all: __expectLong(output.all),
    critical: __expectLong(output.critical),
    high: __expectLong(output.high),
    medium: __expectLong(output.medium),
  } as any;
};

/**
 * deserializeAws_restJson1StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SystemsManagerAgent
 */
const de_SystemsManagerAgent = (output: any, context: __SerdeContext): SystemsManagerAgent => {
  return {
    uninstallAfterBuild: __expectBoolean(output.uninstallAfterBuild),
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TargetContainerRepository
 */
const de_TargetContainerRepository = (output: any, context: __SerdeContext): TargetContainerRepository => {
  return {
    repositoryName: __expectString(output.repositoryName),
    service: __expectString(output.service),
  } as any;
};

/**
 * deserializeAws_restJson1VulnerabilityIdAggregation
 */
const de_VulnerabilityIdAggregation = (output: any, context: __SerdeContext): VulnerabilityIdAggregation => {
  return {
    severityCounts: output.severityCounts != null ? de_SeverityCounts(output.severityCounts, context) : undefined,
    vulnerabilityId: __expectString(output.vulnerabilityId),
  } as any;
};

/**
 * deserializeAws_restJson1VulnerabilityIdList
 */
const de_VulnerabilityIdList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VulnerablePackage
 */
const de_VulnerablePackage = (output: any, context: __SerdeContext): VulnerablePackage => {
  return {
    arch: __expectString(output.arch),
    epoch: __expectInt32(output.epoch),
    filePath: __expectString(output.filePath),
    fixedInVersion: __expectString(output.fixedInVersion),
    name: __expectString(output.name),
    packageManager: __expectString(output.packageManager),
    release: __expectString(output.release),
    remediation: __expectString(output.remediation),
    sourceLayerHash: __expectString(output.sourceLayerHash),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1VulnerablePackageList
 */
const de_VulnerablePackageList = (output: any, context: __SerdeContext): VulnerablePackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VulnerablePackage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowExecutionMetadata
 */
const de_WorkflowExecutionMetadata = (output: any, context: __SerdeContext): WorkflowExecutionMetadata => {
  return {
    endTime: __expectString(output.endTime),
    message: __expectString(output.message),
    startTime: __expectString(output.startTime),
    status: __expectString(output.status),
    totalStepCount: __expectInt32(output.totalStepCount),
    totalStepsFailed: __expectInt32(output.totalStepsFailed),
    totalStepsSkipped: __expectInt32(output.totalStepsSkipped),
    totalStepsSucceeded: __expectInt32(output.totalStepsSucceeded),
    type: __expectString(output.type),
    workflowBuildVersionArn: __expectString(output.workflowBuildVersionArn),
    workflowExecutionId: __expectString(output.workflowExecutionId),
  } as any;
};

/**
 * deserializeAws_restJson1WorkflowExecutionsList
 */
const de_WorkflowExecutionsList = (output: any, context: __SerdeContext): WorkflowExecutionMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowExecutionMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowStepExecutionsList
 */
const de_WorkflowStepExecutionsList = (output: any, context: __SerdeContext): WorkflowStepMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkflowStepMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkflowStepMetadata
 */
const de_WorkflowStepMetadata = (output: any, context: __SerdeContext): WorkflowStepMetadata => {
  return {
    action: __expectString(output.action),
    description: __expectString(output.description),
    endTime: __expectString(output.endTime),
    inputs: __expectString(output.inputs),
    message: __expectString(output.message),
    name: __expectString(output.name),
    outputs: __expectString(output.outputs),
    rollbackStatus: __expectString(output.rollbackStatus),
    startTime: __expectString(output.startTime),
    status: __expectString(output.status),
    stepExecutionId: __expectString(output.stepExecutionId),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
