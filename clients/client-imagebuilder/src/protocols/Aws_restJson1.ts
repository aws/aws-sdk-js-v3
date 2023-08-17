// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  AdditionalInstanceConfiguration,
  AmiDistributionConfiguration,
  CallRateLimitExceededException,
  ClientException,
  ComponentConfiguration,
  ComponentParameter,
  ContainerDistributionConfiguration,
  CvssScore,
  CvssScoreDetails,
  Distribution,
  EbsInstanceBlockDeviceSpecification,
  EcrConfiguration,
  FastLaunchConfiguration,
  FastLaunchLaunchTemplateSpecification,
  FastLaunchSnapshotConfiguration,
  Filter,
  ForbiddenException,
  IdempotentParameterMismatchException,
  ImageScanFinding,
  ImageScanFindingsFilter,
  ImageScanningConfiguration,
  ImageTestsConfiguration,
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
  PackageVulnerabilityDetails,
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
  SystemsManagerAgent,
  TargetContainerRepository,
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      imageBuildVersionArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      changeDescription: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      data: [],
      description: [],
      kmsKeyId: [],
      name: [],
      platform: [],
      semanticVersion: [],
      supportedOsVersions: (_) => _json(_),
      tags: (_) => _json(_),
      uri: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      components: (_) => _json(_),
      containerType: [],
      description: [],
      dockerfileTemplateData: [],
      dockerfileTemplateUri: [],
      imageOsVersionOverride: [],
      instanceConfiguration: (_) => _json(_),
      kmsKeyId: [],
      name: [],
      parentImage: [],
      platformOverride: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      targetRepository: (_) => _json(_),
      workingDirectory: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      distributions: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      containerRecipeArn: [],
      distributionConfigurationArn: [],
      enhancedImageMetadataEnabled: [],
      imageRecipeArn: [],
      imageScanningConfiguration: (_) => _json(_),
      imageTestsConfiguration: (_) => _json(_),
      infrastructureConfigurationArn: [],
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      containerRecipeArn: [],
      description: [],
      distributionConfigurationArn: [],
      enhancedImageMetadataEnabled: [],
      imageRecipeArn: [],
      imageScanningConfiguration: (_) => _json(_),
      imageTestsConfiguration: (_) => _json(_),
      infrastructureConfigurationArn: [],
      name: [],
      schedule: (_) => _json(_),
      status: [],
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      additionalInstanceConfiguration: (_) => _json(_),
      blockDeviceMappings: (_) => _json(_),
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      components: (_) => _json(_),
      description: [],
      name: [],
      parentImage: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      workingDirectory: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      instanceMetadataOptions: (_) => _json(_),
      instanceProfileName: [],
      instanceTypes: (_) => _json(_),
      keyPair: [],
      logging: (_) => _json(_),
      name: [],
      resourceTags: (_) => _json(_),
      securityGroupIds: (_) => _json(_),
      snsTopicArn: [],
      subnetId: [],
      tags: (_) => _json(_),
      terminateInstanceOnFailure: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      changeDescription: [],
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      data: [],
      description: [],
      format: [],
      kmsKeyId: [],
      name: [],
      platform: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      type: [],
      uri: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      name: [],
      osVersion: [],
      platform: [],
      semanticVersion: [],
      tags: (_) => _json(_),
      vmImportTaskId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      componentVersionArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      byName: [],
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      imageVersionArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      imageBuildVersionArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      imagePipelineArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      byName: [],
      filters: (_) => _json(_),
      includeDeprecated: [],
      maxResults: [],
      nextToken: [],
      owner: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filter: (_) => _json(_),
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      imageBuildVersionArn: [],
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      workflowExecutionId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      componentArn: [],
      policy: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      containerRecipeArn: [],
      policy: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      imageArn: [],
      policy: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      imageRecipeArn: [],
      policy: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      imagePipelineArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      distributionConfigurationArn: [],
      distributions: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      containerRecipeArn: [],
      description: [],
      distributionConfigurationArn: [],
      enhancedImageMetadataEnabled: [],
      imagePipelineArn: [],
      imageRecipeArn: [],
      imageScanningConfiguration: (_) => _json(_),
      imageTestsConfiguration: (_) => _json(_),
      infrastructureConfigurationArn: [],
      schedule: (_) => _json(_),
      status: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      description: [],
      infrastructureConfigurationArn: [],
      instanceMetadataOptions: (_) => _json(_),
      instanceProfileName: [],
      instanceTypes: (_) => _json(_),
      keyPair: [],
      logging: (_) => _json(_),
      resourceTags: (_) => _json(_),
      securityGroupIds: (_) => _json(_),
      snsTopicArn: [],
      subnetId: [],
      terminateInstanceOnFailure: [],
    })
  );
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
  const doc = take(data, {
    clientToken: __expectString,
    imageBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    componentBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    containerRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    distributionConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    imageBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    imagePipelineArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    imageRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    infrastructureConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    componentBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    containerRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    distributionConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imagePipelineArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    infrastructureConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    component: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    policy: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    containerRecipe: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    policy: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    distributionConfiguration: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    image: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imagePipeline: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    policy: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageRecipe: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    policy: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    infrastructureConfiguration: _json,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    endTime: __expectString,
    imageBuildVersionArn: __expectString,
    message: __expectString,
    requestId: __expectString,
    startTime: __expectString,
    status: __expectString,
    totalStepCount: __expectInt32,
    totalStepsFailed: __expectInt32,
    totalStepsSkipped: __expectInt32,
    totalStepsSucceeded: __expectInt32,
    type: __expectString,
    workflowBuildVersionArn: __expectString,
    workflowExecutionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    action: __expectString,
    description: __expectString,
    endTime: __expectString,
    imageBuildVersionArn: __expectString,
    inputs: __expectString,
    message: __expectString,
    name: __expectString,
    onFailure: __expectString,
    outputs: __expectString,
    requestId: __expectString,
    rollbackStatus: __expectString,
    startTime: __expectString,
    status: __expectString,
    stepExecutionId: __expectString,
    timeoutSeconds: __expectInt32,
    workflowBuildVersionArn: __expectString,
    workflowExecutionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    componentBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    imageArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    componentSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    componentVersionList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    containerRecipeSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    distributionConfigurationSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imagePackageList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imagePipelineList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageRecipeSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageVersionList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    aggregationType: __expectString,
    nextToken: __expectString,
    requestId: __expectString,
    responses: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    findings: (_) => de_ImageScanFindingsList(_, context),
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    infrastructureConfigurationSummaryList: _json,
    nextToken: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageBuildVersionArn: __expectString,
    message: __expectString,
    nextToken: __expectString,
    requestId: __expectString,
    workflowExecutions: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageBuildVersionArn: __expectString,
    message: __expectString,
    nextToken: __expectString,
    requestId: __expectString,
    steps: _json,
    workflowBuildVersionArn: __expectString,
    workflowExecutionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    componentArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    containerRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    imageRecipeArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    imageBuildVersionArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    distributionConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    imagePipelineArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clientToken: __expectString,
    infrastructureConfigurationArn: __expectString,
    requestId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1CallRateLimitExceededExceptionRes
 */
const de_CallRateLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CallRateLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
 * deserializeAws_restJson1ServiceExceptionRes
 */
const de_ServiceExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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

// se_AccountList omitted.

// se_AdditionalInstanceConfiguration omitted.

// se_AmiDistributionConfiguration omitted.

// se_ComponentConfiguration omitted.

// se_ComponentConfigurationList omitted.

// se_ComponentParameter omitted.

// se_ComponentParameterList omitted.

// se_ComponentParameterValueList omitted.

// se_ContainerDistributionConfiguration omitted.

// se_Distribution omitted.

// se_DistributionList omitted.

// se_EbsInstanceBlockDeviceSpecification omitted.

// se_EcrConfiguration omitted.

// se_FastLaunchConfiguration omitted.

// se_FastLaunchConfigurationList omitted.

// se_FastLaunchLaunchTemplateSpecification omitted.

// se_FastLaunchSnapshotConfiguration omitted.

// se_Filter omitted.

// se_FilterList omitted.

// se_FilterValues omitted.

// se_ImageScanFindingsFilter omitted.

// se_ImageScanFindingsFilterList omitted.

// se_ImageScanFindingsFilterValues omitted.

// se_ImageScanningConfiguration omitted.

// se_ImageTestsConfiguration omitted.

// se_InstanceBlockDeviceMapping omitted.

// se_InstanceBlockDeviceMappings omitted.

// se_InstanceConfiguration omitted.

// se_InstanceMetadataOptions omitted.

// se_InstanceTypeList omitted.

// se_LaunchPermissionConfiguration omitted.

// se_LaunchTemplateConfiguration omitted.

// se_LaunchTemplateConfigurationList omitted.

// se_LicenseConfigurationArnList omitted.

// se_Logging omitted.

// se_OrganizationalUnitArnList omitted.

// se_OrganizationArnList omitted.

// se_OsVersionList omitted.

// se_ResourceTagMap omitted.

// se_S3ExportConfiguration omitted.

// se_S3Logs omitted.

// se_Schedule omitted.

// se_SecurityGroupIds omitted.

// se_StringList omitted.

// se_SystemsManagerAgent omitted.

// se_TagMap omitted.

// se_TargetContainerRepository omitted.

// de_AccountAggregation omitted.

// de_AccountList omitted.

// de_AdditionalInstanceConfiguration omitted.

// de_Ami omitted.

// de_AmiDistributionConfiguration omitted.

// de_AmiList omitted.

// de_Component omitted.

// de_ComponentConfiguration omitted.

// de_ComponentConfigurationList omitted.

// de_ComponentParameter omitted.

// de_ComponentParameterDetail omitted.

// de_ComponentParameterDetailList omitted.

// de_ComponentParameterList omitted.

// de_ComponentParameterValueList omitted.

// de_ComponentState omitted.

// de_ComponentSummary omitted.

// de_ComponentSummaryList omitted.

// de_ComponentVersion omitted.

// de_ComponentVersionList omitted.

// de_Container omitted.

// de_ContainerDistributionConfiguration omitted.

// de_ContainerList omitted.

// de_ContainerRecipe omitted.

// de_ContainerRecipeSummary omitted.

// de_ContainerRecipeSummaryList omitted.

/**
 * deserializeAws_restJson1CvssScore
 */
const de_CvssScore = (output: any, context: __SerdeContext): CvssScore => {
  return take(output, {
    baseScore: __limitedParseDouble,
    scoringVector: __expectString,
    source: __expectString,
    version: __expectString,
  }) as any;
};

// de_CvssScoreAdjustment omitted.

// de_CvssScoreAdjustmentList omitted.

/**
 * deserializeAws_restJson1CvssScoreDetails
 */
const de_CvssScoreDetails = (output: any, context: __SerdeContext): CvssScoreDetails => {
  return take(output, {
    adjustments: _json,
    cvssSource: __expectString,
    score: __limitedParseDouble,
    scoreSource: __expectString,
    scoringVector: __expectString,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CvssScoreList
 */
const de_CvssScoreList = (output: any, context: __SerdeContext): CvssScore[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CvssScore(entry, context);
    });
  return retVal;
};

// de_Distribution omitted.

// de_DistributionConfiguration omitted.

// de_DistributionConfigurationSummary omitted.

// de_DistributionConfigurationSummaryList omitted.

// de_DistributionList omitted.

// de_EbsInstanceBlockDeviceSpecification omitted.

// de_EcrConfiguration omitted.

// de_FastLaunchConfiguration omitted.

// de_FastLaunchConfigurationList omitted.

// de_FastLaunchLaunchTemplateSpecification omitted.

// de_FastLaunchSnapshotConfiguration omitted.

// de_Image omitted.

// de_ImageAggregation omitted.

// de_ImagePackage omitted.

// de_ImagePackageList omitted.

// de_ImagePipeline omitted.

// de_ImagePipelineAggregation omitted.

// de_ImagePipelineList omitted.

// de_ImageRecipe omitted.

// de_ImageRecipeSummary omitted.

// de_ImageRecipeSummaryList omitted.

/**
 * deserializeAws_restJson1ImageScanFinding
 */
const de_ImageScanFinding = (output: any, context: __SerdeContext): ImageScanFinding => {
  return take(output, {
    awsAccountId: __expectString,
    description: __expectString,
    firstObservedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fixAvailable: __expectString,
    imageBuildVersionArn: __expectString,
    imagePipelineArn: __expectString,
    inspectorScore: __limitedParseDouble,
    inspectorScoreDetails: (_: any) => de_InspectorScoreDetails(_, context),
    packageVulnerabilityDetails: (_: any) => de_PackageVulnerabilityDetails(_, context),
    remediation: _json,
    severity: __expectString,
    title: __expectString,
    type: __expectString,
    updatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ImageScanFindingAggregation omitted.

// de_ImageScanFindingAggregationsList omitted.

/**
 * deserializeAws_restJson1ImageScanFindingsList
 */
const de_ImageScanFindingsList = (output: any, context: __SerdeContext): ImageScanFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImageScanFinding(entry, context);
    });
  return retVal;
};

// de_ImageScanningConfiguration omitted.

// de_ImageScanState omitted.

// de_ImageState omitted.

// de_ImageSummary omitted.

// de_ImageSummaryList omitted.

// de_ImageTestsConfiguration omitted.

// de_ImageVersion omitted.

// de_ImageVersionList omitted.

// de_InfrastructureConfiguration omitted.

// de_InfrastructureConfigurationSummary omitted.

// de_InfrastructureConfigurationSummaryList omitted.

/**
 * deserializeAws_restJson1InspectorScoreDetails
 */
const de_InspectorScoreDetails = (output: any, context: __SerdeContext): InspectorScoreDetails => {
  return take(output, {
    adjustedCvss: (_: any) => de_CvssScoreDetails(_, context),
  }) as any;
};

// de_InstanceBlockDeviceMapping omitted.

// de_InstanceBlockDeviceMappings omitted.

// de_InstanceConfiguration omitted.

// de_InstanceMetadataOptions omitted.

// de_InstanceTypeList omitted.

// de_LaunchPermissionConfiguration omitted.

// de_LaunchTemplateConfiguration omitted.

// de_LaunchTemplateConfigurationList omitted.

// de_LicenseConfigurationArnList omitted.

// de_Logging omitted.

// de_NonEmptyStringList omitted.

// de_OrganizationalUnitArnList omitted.

// de_OrganizationArnList omitted.

// de_OsVersionList omitted.

// de_OutputResources omitted.

/**
 * deserializeAws_restJson1PackageVulnerabilityDetails
 */
const de_PackageVulnerabilityDetails = (output: any, context: __SerdeContext): PackageVulnerabilityDetails => {
  return take(output, {
    cvss: (_: any) => de_CvssScoreList(_, context),
    referenceUrls: _json,
    relatedVulnerabilities: _json,
    source: __expectString,
    sourceUrl: __expectString,
    vendorCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vendorSeverity: __expectString,
    vendorUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vulnerabilityId: __expectString,
    vulnerablePackages: _json,
  }) as any;
};

// de_RegionList omitted.

// de_Remediation omitted.

// de_RemediationRecommendation omitted.

// de_ResourceTagMap omitted.

// de_S3ExportConfiguration omitted.

// de_S3Logs omitted.

// de_Schedule omitted.

// de_SecurityGroupIds omitted.

// de_SeverityCounts omitted.

// de_StringList omitted.

// de_SystemsManagerAgent omitted.

// de_TagMap omitted.

// de_TargetContainerRepository omitted.

// de_VulnerabilityIdAggregation omitted.

// de_VulnerabilityIdList omitted.

// de_VulnerablePackage omitted.

// de_VulnerablePackageList omitted.

// de_WorkflowExecutionMetadata omitted.

// de_WorkflowExecutionsList omitted.

// de_WorkflowStepExecutionsList omitted.

// de_WorkflowStepMetadata omitted.

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
