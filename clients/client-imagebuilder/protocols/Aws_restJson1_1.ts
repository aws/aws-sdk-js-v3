import {
  CancelImageCreationCommandInput,
  CancelImageCreationCommandOutput
} from "../commands/CancelImageCreationCommand";
import {
  CreateComponentCommandInput,
  CreateComponentCommandOutput
} from "../commands/CreateComponentCommand";
import {
  CreateDistributionConfigurationCommandInput,
  CreateDistributionConfigurationCommandOutput
} from "../commands/CreateDistributionConfigurationCommand";
import {
  CreateImageCommandInput,
  CreateImageCommandOutput
} from "../commands/CreateImageCommand";
import {
  CreateImagePipelineCommandInput,
  CreateImagePipelineCommandOutput
} from "../commands/CreateImagePipelineCommand";
import {
  CreateImageRecipeCommandInput,
  CreateImageRecipeCommandOutput
} from "../commands/CreateImageRecipeCommand";
import {
  CreateInfrastructureConfigurationCommandInput,
  CreateInfrastructureConfigurationCommandOutput
} from "../commands/CreateInfrastructureConfigurationCommand";
import {
  DeleteComponentCommandInput,
  DeleteComponentCommandOutput
} from "../commands/DeleteComponentCommand";
import {
  DeleteDistributionConfigurationCommandInput,
  DeleteDistributionConfigurationCommandOutput
} from "../commands/DeleteDistributionConfigurationCommand";
import {
  DeleteImageCommandInput,
  DeleteImageCommandOutput
} from "../commands/DeleteImageCommand";
import {
  DeleteImagePipelineCommandInput,
  DeleteImagePipelineCommandOutput
} from "../commands/DeleteImagePipelineCommand";
import {
  DeleteImageRecipeCommandInput,
  DeleteImageRecipeCommandOutput
} from "../commands/DeleteImageRecipeCommand";
import {
  DeleteInfrastructureConfigurationCommandInput,
  DeleteInfrastructureConfigurationCommandOutput
} from "../commands/DeleteInfrastructureConfigurationCommand";
import {
  GetComponentCommandInput,
  GetComponentCommandOutput
} from "../commands/GetComponentCommand";
import {
  GetComponentPolicyCommandInput,
  GetComponentPolicyCommandOutput
} from "../commands/GetComponentPolicyCommand";
import {
  GetDistributionConfigurationCommandInput,
  GetDistributionConfigurationCommandOutput
} from "../commands/GetDistributionConfigurationCommand";
import {
  GetImageCommandInput,
  GetImageCommandOutput
} from "../commands/GetImageCommand";
import {
  GetImagePipelineCommandInput,
  GetImagePipelineCommandOutput
} from "../commands/GetImagePipelineCommand";
import {
  GetImagePolicyCommandInput,
  GetImagePolicyCommandOutput
} from "../commands/GetImagePolicyCommand";
import {
  GetImageRecipeCommandInput,
  GetImageRecipeCommandOutput
} from "../commands/GetImageRecipeCommand";
import {
  GetImageRecipePolicyCommandInput,
  GetImageRecipePolicyCommandOutput
} from "../commands/GetImageRecipePolicyCommand";
import {
  GetInfrastructureConfigurationCommandInput,
  GetInfrastructureConfigurationCommandOutput
} from "../commands/GetInfrastructureConfigurationCommand";
import {
  ImportComponentCommandInput,
  ImportComponentCommandOutput
} from "../commands/ImportComponentCommand";
import {
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput
} from "../commands/ListComponentBuildVersionsCommand";
import {
  ListComponentsCommandInput,
  ListComponentsCommandOutput
} from "../commands/ListComponentsCommand";
import {
  ListDistributionConfigurationsCommandInput,
  ListDistributionConfigurationsCommandOutput
} from "../commands/ListDistributionConfigurationsCommand";
import {
  ListImageBuildVersionsCommandInput,
  ListImageBuildVersionsCommandOutput
} from "../commands/ListImageBuildVersionsCommand";
import {
  ListImagePipelineImagesCommandInput,
  ListImagePipelineImagesCommandOutput
} from "../commands/ListImagePipelineImagesCommand";
import {
  ListImagePipelinesCommandInput,
  ListImagePipelinesCommandOutput
} from "../commands/ListImagePipelinesCommand";
import {
  ListImageRecipesCommandInput,
  ListImageRecipesCommandOutput
} from "../commands/ListImageRecipesCommand";
import {
  ListImagesCommandInput,
  ListImagesCommandOutput
} from "../commands/ListImagesCommand";
import {
  ListInfrastructureConfigurationsCommandInput,
  ListInfrastructureConfigurationsCommandOutput
} from "../commands/ListInfrastructureConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutComponentPolicyCommandInput,
  PutComponentPolicyCommandOutput
} from "../commands/PutComponentPolicyCommand";
import {
  PutImagePolicyCommandInput,
  PutImagePolicyCommandOutput
} from "../commands/PutImagePolicyCommand";
import {
  PutImageRecipePolicyCommandInput,
  PutImageRecipePolicyCommandOutput
} from "../commands/PutImageRecipePolicyCommand";
import {
  StartImagePipelineExecutionCommandInput,
  StartImagePipelineExecutionCommandOutput
} from "../commands/StartImagePipelineExecutionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDistributionConfigurationCommandInput,
  UpdateDistributionConfigurationCommandOutput
} from "../commands/UpdateDistributionConfigurationCommand";
import {
  UpdateImagePipelineCommandInput,
  UpdateImagePipelineCommandOutput
} from "../commands/UpdateImagePipelineCommand";
import {
  UpdateInfrastructureConfigurationCommandInput,
  UpdateInfrastructureConfigurationCommandOutput
} from "../commands/UpdateInfrastructureConfigurationCommand";
import {
  Ami,
  AmiDistributionConfiguration,
  CallRateLimitExceededException,
  ClientException,
  Component,
  ComponentConfiguration,
  ComponentSummary,
  ComponentVersion,
  Distribution,
  DistributionConfiguration,
  DistributionConfigurationSummary,
  EbsInstanceBlockDeviceSpecification,
  Filter,
  ForbiddenException,
  IdempotentParameterMismatchException,
  Image,
  ImagePipeline,
  ImageRecipe,
  ImageRecipeSummary,
  ImageState,
  ImageSummary,
  ImageTestsConfiguration,
  ImageVersion,
  InfrastructureConfiguration,
  InfrastructureConfigurationSummary,
  InstanceBlockDeviceMapping,
  InvalidPaginationTokenException,
  InvalidParameterCombinationException,
  InvalidParameterException,
  InvalidParameterValueException,
  InvalidRequestException,
  InvalidVersionNumberException,
  LaunchPermissionConfiguration,
  Logging,
  OutputResources,
  ResourceAlreadyExistsException,
  ResourceDependencyException,
  ResourceInUseException,
  ResourceNotFoundException,
  S3Logs,
  Schedule,
  ServiceException,
  ServiceUnavailableException
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1_1CancelImageCreationCommand = async (
  input: CancelImageCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CancelImageCreation";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.imageBuildVersionArn !== undefined) {
    bodyParams["imageBuildVersionArn"] = input.imageBuildVersionArn;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateComponent";
  let body: any;
  const bodyParams: any = {};
  if (input.changeDescription !== undefined) {
    bodyParams["changeDescription"] = input.changeDescription;
  }
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.data !== undefined) {
    bodyParams["data"] = input.data;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.kmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.kmsKeyId;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.platform !== undefined) {
    bodyParams["platform"] = input.platform;
  }
  if (input.semanticVersion !== undefined) {
    bodyParams["semanticVersion"] = input.semanticVersion;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.uri !== undefined) {
    bodyParams["uri"] = input.uri;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateDistributionConfigurationCommand = async (
  input: CreateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateDistributionConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.distributions !== undefined) {
    bodyParams["distributions"] = serializeAws_restJson1_1DistributionList(
      input.distributions,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateImageCommand = async (
  input: CreateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateImage";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.distributionConfigurationArn !== undefined) {
    bodyParams["distributionConfigurationArn"] =
      input.distributionConfigurationArn;
  }
  if (input.imageRecipeArn !== undefined) {
    bodyParams["imageRecipeArn"] = input.imageRecipeArn;
  }
  if (input.imageTestsConfiguration !== undefined) {
    bodyParams[
      "imageTestsConfiguration"
    ] = serializeAws_restJson1_1ImageTestsConfiguration(
      input.imageTestsConfiguration,
      context
    );
  }
  if (input.infrastructureConfigurationArn !== undefined) {
    bodyParams["infrastructureConfigurationArn"] =
      input.infrastructureConfigurationArn;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateImagePipelineCommand = async (
  input: CreateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateImagePipeline";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.distributionConfigurationArn !== undefined) {
    bodyParams["distributionConfigurationArn"] =
      input.distributionConfigurationArn;
  }
  if (input.imageRecipeArn !== undefined) {
    bodyParams["imageRecipeArn"] = input.imageRecipeArn;
  }
  if (input.imageTestsConfiguration !== undefined) {
    bodyParams[
      "imageTestsConfiguration"
    ] = serializeAws_restJson1_1ImageTestsConfiguration(
      input.imageTestsConfiguration,
      context
    );
  }
  if (input.infrastructureConfigurationArn !== undefined) {
    bodyParams["infrastructureConfigurationArn"] =
      input.infrastructureConfigurationArn;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.schedule !== undefined) {
    bodyParams["schedule"] = serializeAws_restJson1_1Schedule(
      input.schedule,
      context
    );
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateImageRecipeCommand = async (
  input: CreateImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateImageRecipe";
  let body: any;
  const bodyParams: any = {};
  if (input.blockDeviceMappings !== undefined) {
    bodyParams[
      "blockDeviceMappings"
    ] = serializeAws_restJson1_1InstanceBlockDeviceMappings(
      input.blockDeviceMappings,
      context
    );
  }
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.components !== undefined) {
    bodyParams[
      "components"
    ] = serializeAws_restJson1_1ComponentConfigurationList(
      input.components,
      context
    );
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.parentImage !== undefined) {
    bodyParams["parentImage"] = input.parentImage;
  }
  if (input.semanticVersion !== undefined) {
    bodyParams["semanticVersion"] = input.semanticVersion;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateInfrastructureConfigurationCommand = async (
  input: CreateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateInfrastructureConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.instanceProfileName !== undefined) {
    bodyParams["instanceProfileName"] = input.instanceProfileName;
  }
  if (input.instanceTypes !== undefined) {
    bodyParams["instanceTypes"] = serializeAws_restJson1_1InstanceTypeList(
      input.instanceTypes,
      context
    );
  }
  if (input.keyPair !== undefined) {
    bodyParams["keyPair"] = input.keyPair;
  }
  if (input.logging !== undefined) {
    bodyParams["logging"] = serializeAws_restJson1_1Logging(
      input.logging,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.securityGroupIds !== undefined) {
    bodyParams["securityGroupIds"] = serializeAws_restJson1_1SecurityGroupIds(
      input.securityGroupIds,
      context
    );
  }
  if (input.snsTopicArn !== undefined) {
    bodyParams["snsTopicArn"] = input.snsTopicArn;
  }
  if (input.subnetId !== undefined) {
    bodyParams["subnetId"] = input.subnetId;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.terminateInstanceOnFailure !== undefined) {
    bodyParams["terminateInstanceOnFailure"] = input.terminateInstanceOnFailure;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/DeleteComponent";
  const query: any = {
    ...(input.componentBuildVersionArn !== undefined && {
      componentBuildVersionArn: input.componentBuildVersionArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DeleteDistributionConfigurationCommand = async (
  input: DeleteDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/DeleteDistributionConfiguration";
  const query: any = {
    ...(input.distributionConfigurationArn !== undefined && {
      distributionConfigurationArn: input.distributionConfigurationArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DeleteImageCommand = async (
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/DeleteImage";
  const query: any = {
    ...(input.imageBuildVersionArn !== undefined && {
      imageBuildVersionArn: input.imageBuildVersionArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DeleteImagePipelineCommand = async (
  input: DeleteImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/DeleteImagePipeline";
  const query: any = {
    ...(input.imagePipelineArn !== undefined && {
      imagePipelineArn: input.imagePipelineArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DeleteImageRecipeCommand = async (
  input: DeleteImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/DeleteImageRecipe";
  const query: any = {
    ...(input.imageRecipeArn !== undefined && {
      imageRecipeArn: input.imageRecipeArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1DeleteInfrastructureConfigurationCommand = async (
  input: DeleteInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/DeleteInfrastructureConfiguration";
  const query: any = {
    ...(input.infrastructureConfigurationArn !== undefined && {
      infrastructureConfigurationArn: input.infrastructureConfigurationArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetComponent";
  const query: any = {
    ...(input.componentBuildVersionArn !== undefined && {
      componentBuildVersionArn: input.componentBuildVersionArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetComponentPolicyCommand = async (
  input: GetComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetComponentPolicy";
  const query: any = {
    ...(input.componentArn !== undefined && {
      componentArn: input.componentArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetDistributionConfigurationCommand = async (
  input: GetDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetDistributionConfiguration";
  const query: any = {
    ...(input.distributionConfigurationArn !== undefined && {
      distributionConfigurationArn: input.distributionConfigurationArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetImageCommand = async (
  input: GetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetImage";
  const query: any = {
    ...(input.imageBuildVersionArn !== undefined && {
      imageBuildVersionArn: input.imageBuildVersionArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetImagePipelineCommand = async (
  input: GetImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetImagePipeline";
  const query: any = {
    ...(input.imagePipelineArn !== undefined && {
      imagePipelineArn: input.imagePipelineArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetImagePolicyCommand = async (
  input: GetImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetImagePolicy";
  const query: any = {
    ...(input.imageArn !== undefined && { imageArn: input.imageArn })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetImageRecipeCommand = async (
  input: GetImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetImageRecipe";
  const query: any = {
    ...(input.imageRecipeArn !== undefined && {
      imageRecipeArn: input.imageRecipeArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetImageRecipePolicyCommand = async (
  input: GetImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetImageRecipePolicy";
  const query: any = {
    ...(input.imageRecipeArn !== undefined && {
      imageRecipeArn: input.imageRecipeArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1GetInfrastructureConfigurationCommand = async (
  input: GetInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/GetInfrastructureConfiguration";
  const query: any = {
    ...(input.infrastructureConfigurationArn !== undefined && {
      infrastructureConfigurationArn: input.infrastructureConfigurationArn
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ImportComponentCommand = async (
  input: ImportComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ImportComponent";
  let body: any;
  const bodyParams: any = {};
  if (input.changeDescription !== undefined) {
    bodyParams["changeDescription"] = input.changeDescription;
  }
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.data !== undefined) {
    bodyParams["data"] = input.data;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.format !== undefined) {
    bodyParams["format"] = input.format;
  }
  if (input.kmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.kmsKeyId;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.platform !== undefined) {
    bodyParams["platform"] = input.platform;
  }
  if (input.semanticVersion !== undefined) {
    bodyParams["semanticVersion"] = input.semanticVersion;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  if (input.uri !== undefined) {
    bodyParams["uri"] = input.uri;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListComponentBuildVersionsCommand = async (
  input: ListComponentBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListComponentBuildVersions";
  let body: any;
  const bodyParams: any = {};
  if (input.componentVersionArn !== undefined) {
    bodyParams["componentVersionArn"] = input.componentVersionArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListComponents";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1FilterList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.owner !== undefined) {
    bodyParams["owner"] = input.owner;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListDistributionConfigurationsCommand = async (
  input: ListDistributionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListDistributionConfigurations";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1FilterList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListImageBuildVersionsCommand = async (
  input: ListImageBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListImageBuildVersions";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1FilterList(
      input.filters,
      context
    );
  }
  if (input.imageVersionArn !== undefined) {
    bodyParams["imageVersionArn"] = input.imageVersionArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListImagePipelineImagesCommand = async (
  input: ListImagePipelineImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListImagePipelineImages";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1FilterList(
      input.filters,
      context
    );
  }
  if (input.imagePipelineArn !== undefined) {
    bodyParams["imagePipelineArn"] = input.imagePipelineArn;
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListImagePipelinesCommand = async (
  input: ListImagePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListImagePipelines";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1FilterList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListImageRecipesCommand = async (
  input: ListImageRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListImageRecipes";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1FilterList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.owner !== undefined) {
    bodyParams["owner"] = input.owner;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListImagesCommand = async (
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListImages";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1FilterList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.owner !== undefined) {
    bodyParams["owner"] = input.owner;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListInfrastructureConfigurationsCommand = async (
  input: ListInfrastructureConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ListInfrastructureConfigurations";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1FilterList(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutComponentPolicyCommand = async (
  input: PutComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/PutComponentPolicy";
  let body: any;
  const bodyParams: any = {};
  if (input.componentArn !== undefined) {
    bodyParams["componentArn"] = input.componentArn;
  }
  if (input.policy !== undefined) {
    bodyParams["policy"] = input.policy;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutImagePolicyCommand = async (
  input: PutImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/PutImagePolicy";
  let body: any;
  const bodyParams: any = {};
  if (input.imageArn !== undefined) {
    bodyParams["imageArn"] = input.imageArn;
  }
  if (input.policy !== undefined) {
    bodyParams["policy"] = input.policy;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutImageRecipePolicyCommand = async (
  input: PutImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/PutImageRecipePolicy";
  let body: any;
  const bodyParams: any = {};
  if (input.imageRecipeArn !== undefined) {
    bodyParams["imageRecipeArn"] = input.imageRecipeArn;
  }
  if (input.policy !== undefined) {
    bodyParams["policy"] = input.policy;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1StartImagePipelineExecutionCommand = async (
  input: StartImagePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/StartImagePipelineExecution";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.imagePipelineArn !== undefined) {
    bodyParams["imagePipelineArn"] = input.imagePipelineArn;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: resourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{resourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && {
      tagKeys: (input.tagKeys || []).map(_entry => _entry)
    })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateDistributionConfigurationCommand = async (
  input: UpdateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/UpdateDistributionConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.distributionConfigurationArn !== undefined) {
    bodyParams["distributionConfigurationArn"] =
      input.distributionConfigurationArn;
  }
  if (input.distributions !== undefined) {
    bodyParams["distributions"] = serializeAws_restJson1_1DistributionList(
      input.distributions,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateImagePipelineCommand = async (
  input: UpdateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/UpdateImagePipeline";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.distributionConfigurationArn !== undefined) {
    bodyParams["distributionConfigurationArn"] =
      input.distributionConfigurationArn;
  }
  if (input.imagePipelineArn !== undefined) {
    bodyParams["imagePipelineArn"] = input.imagePipelineArn;
  }
  if (input.imageRecipeArn !== undefined) {
    bodyParams["imageRecipeArn"] = input.imageRecipeArn;
  }
  if (input.imageTestsConfiguration !== undefined) {
    bodyParams[
      "imageTestsConfiguration"
    ] = serializeAws_restJson1_1ImageTestsConfiguration(
      input.imageTestsConfiguration,
      context
    );
  }
  if (input.infrastructureConfigurationArn !== undefined) {
    bodyParams["infrastructureConfigurationArn"] =
      input.infrastructureConfigurationArn;
  }
  if (input.schedule !== undefined) {
    bodyParams["schedule"] = serializeAws_restJson1_1Schedule(
      input.schedule,
      context
    );
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateInfrastructureConfigurationCommand = async (
  input: UpdateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/UpdateInfrastructureConfiguration";
  let body: any;
  const bodyParams: any = {};
  if (input.clientToken === undefined) {
    input.clientToken = generateIdempotencyToken();
  }
  if (input.clientToken !== undefined) {
    bodyParams["clientToken"] = input.clientToken;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.infrastructureConfigurationArn !== undefined) {
    bodyParams["infrastructureConfigurationArn"] =
      input.infrastructureConfigurationArn;
  }
  if (input.instanceProfileName !== undefined) {
    bodyParams["instanceProfileName"] = input.instanceProfileName;
  }
  if (input.instanceTypes !== undefined) {
    bodyParams["instanceTypes"] = serializeAws_restJson1_1InstanceTypeList(
      input.instanceTypes,
      context
    );
  }
  if (input.keyPair !== undefined) {
    bodyParams["keyPair"] = input.keyPair;
  }
  if (input.logging !== undefined) {
    bodyParams["logging"] = serializeAws_restJson1_1Logging(
      input.logging,
      context
    );
  }
  if (input.securityGroupIds !== undefined) {
    bodyParams["securityGroupIds"] = serializeAws_restJson1_1SecurityGroupIds(
      input.securityGroupIds,
      context
    );
  }
  if (input.snsTopicArn !== undefined) {
    bodyParams["snsTopicArn"] = input.snsTopicArn;
  }
  if (input.subnetId !== undefined) {
    bodyParams["subnetId"] = input.subnetId;
  }
  if (input.terminateInstanceOnFailure !== undefined) {
    bodyParams["terminateInstanceOnFailure"] = input.terminateInstanceOnFailure;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1CancelImageCreationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelImageCreationCommandError(
      output,
      context
    );
  }
  const contents: CancelImageCreationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelImageCreationResponse",
    clientToken: undefined,
    imageBuildVersionArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.imageBuildVersionArn !== undefined &&
    data.imageBuildVersionArn !== null
  ) {
    contents.imageBuildVersionArn = data.imageBuildVersionArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CancelImageCreationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateComponentCommandError(
      output,
      context
    );
  }
  const contents: CreateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateComponentResponse",
    clientToken: undefined,
    componentBuildVersionArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.componentBuildVersionArn !== undefined &&
    data.componentBuildVersionArn !== null
  ) {
    contents.componentBuildVersionArn = data.componentBuildVersionArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidVersionNumberExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDistributionConfigurationCommandError(
      output,
      context
    );
  }
  const contents: CreateDistributionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDistributionConfigurationResponse",
    clientToken: undefined,
    distributionConfigurationArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.distributionConfigurationArn !== undefined &&
    data.distributionConfigurationArn !== null
  ) {
    contents.distributionConfigurationArn = data.distributionConfigurationArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateImageCommandError(output, context);
  }
  const contents: CreateImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateImageResponse",
    clientToken: undefined,
    imageBuildVersionArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.imageBuildVersionArn !== undefined &&
    data.imageBuildVersionArn !== null
  ) {
    contents.imageBuildVersionArn = data.imageBuildVersionArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateImagePipelineCommandError(
      output,
      context
    );
  }
  const contents: CreateImagePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateImagePipelineResponse",
    clientToken: undefined,
    imagePipelineArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
    contents.imagePipelineArn = data.imagePipelineArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateImageRecipeCommandError(
      output,
      context
    );
  }
  const contents: CreateImageRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateImageRecipeResponse",
    clientToken: undefined,
    imageRecipeArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
    contents.imageRecipeArn = data.imageRecipeArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidVersionNumberExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateInfrastructureConfigurationCommandError(
      output,
      context
    );
  }
  const contents: CreateInfrastructureConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInfrastructureConfigurationResponse",
    clientToken: undefined,
    infrastructureConfigurationArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.infrastructureConfigurationArn !== undefined &&
    data.infrastructureConfigurationArn !== null
  ) {
    contents.infrastructureConfigurationArn =
      data.infrastructureConfigurationArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteComponentCommandError(
      output,
      context
    );
  }
  const contents: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteComponentResponse",
    componentBuildVersionArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.componentBuildVersionArn !== undefined &&
    data.componentBuildVersionArn !== null
  ) {
    contents.componentBuildVersionArn = data.componentBuildVersionArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDistributionConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DeleteDistributionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDistributionConfigurationResponse",
    distributionConfigurationArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.distributionConfigurationArn !== undefined &&
    data.distributionConfigurationArn !== null
  ) {
    contents.distributionConfigurationArn = data.distributionConfigurationArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteImageCommandError(output, context);
  }
  const contents: DeleteImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteImageResponse",
    imageBuildVersionArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.imageBuildVersionArn !== undefined &&
    data.imageBuildVersionArn !== null
  ) {
    contents.imageBuildVersionArn = data.imageBuildVersionArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteImagePipelineCommandError(
      output,
      context
    );
  }
  const contents: DeleteImagePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteImagePipelineResponse",
    imagePipelineArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
    contents.imagePipelineArn = data.imagePipelineArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteImageRecipeCommandError(
      output,
      context
    );
  }
  const contents: DeleteImageRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteImageRecipeResponse",
    imageRecipeArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
    contents.imageRecipeArn = data.imageRecipeArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteInfrastructureConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DeleteInfrastructureConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInfrastructureConfigurationResponse",
    infrastructureConfigurationArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.infrastructureConfigurationArn !== undefined &&
    data.infrastructureConfigurationArn !== null
  ) {
    contents.infrastructureConfigurationArn =
      data.infrastructureConfigurationArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetComponentCommandError(output, context);
  }
  const contents: GetComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetComponentResponse",
    component: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.component !== undefined && data.component !== null) {
    contents.component = deserializeAws_restJson1_1Component(
      data.component,
      context
    );
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetComponentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetComponentPolicyCommandError(
      output,
      context
    );
  }
  const contents: GetComponentPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetComponentPolicyResponse",
    policy: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetComponentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDistributionConfigurationCommandError(
      output,
      context
    );
  }
  const contents: GetDistributionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDistributionConfigurationResponse",
    distributionConfiguration: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.distributionConfiguration !== undefined &&
    data.distributionConfiguration !== null
  ) {
    contents.distributionConfiguration = deserializeAws_restJson1_1DistributionConfiguration(
      data.distributionConfiguration,
      context
    );
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetImageCommandError(output, context);
  }
  const contents: GetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetImageResponse",
    image: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.image !== undefined && data.image !== null) {
    contents.image = deserializeAws_restJson1_1Image(data.image, context);
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetImagePipelineCommandError(
      output,
      context
    );
  }
  const contents: GetImagePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetImagePipelineResponse",
    imagePipeline: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imagePipeline !== undefined && data.imagePipeline !== null) {
    contents.imagePipeline = deserializeAws_restJson1_1ImagePipeline(
      data.imagePipeline,
      context
    );
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetImagePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetImagePolicyCommandError(
      output,
      context
    );
  }
  const contents: GetImagePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetImagePolicyResponse",
    policy: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetImagePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetImageRecipeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetImageRecipeCommandError(
      output,
      context
    );
  }
  const contents: GetImageRecipeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetImageRecipeResponse",
    imageRecipe: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imageRecipe !== undefined && data.imageRecipe !== null) {
    contents.imageRecipe = deserializeAws_restJson1_1ImageRecipe(
      data.imageRecipe,
      context
    );
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetImageRecipeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetImageRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetImageRecipePolicyCommandError(
      output,
      context
    );
  }
  const contents: GetImageRecipePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetImageRecipePolicyResponse",
    policy: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = data.policy;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetImageRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetInfrastructureConfigurationCommandError(
      output,
      context
    );
  }
  const contents: GetInfrastructureConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInfrastructureConfigurationResponse",
    infrastructureConfiguration: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.infrastructureConfiguration !== undefined &&
    data.infrastructureConfiguration !== null
  ) {
    contents.infrastructureConfiguration = deserializeAws_restJson1_1InfrastructureConfiguration(
      data.infrastructureConfiguration,
      context
    );
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ImportComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ImportComponentCommandError(
      output,
      context
    );
  }
  const contents: ImportComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ImportComponentResponse",
    clientToken: undefined,
    componentBuildVersionArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.componentBuildVersionArn !== undefined &&
    data.componentBuildVersionArn !== null
  ) {
    contents.componentBuildVersionArn = data.componentBuildVersionArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ImportComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidVersionNumberExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListComponentBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListComponentBuildVersionsCommandError(
      output,
      context
    );
  }
  const contents: ListComponentBuildVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListComponentBuildVersionsResponse",
    componentSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.componentSummaryList !== undefined &&
    data.componentSummaryList !== null
  ) {
    contents.componentSummaryList = deserializeAws_restJson1_1ComponentSummaryList(
      data.componentSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListComponentBuildVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListComponentsCommandError(
      output,
      context
    );
  }
  const contents: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListComponentsResponse",
    componentVersionList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.componentVersionList !== undefined &&
    data.componentVersionList !== null
  ) {
    contents.componentVersionList = deserializeAws_restJson1_1ComponentVersionList(
      data.componentVersionList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListDistributionConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDistributionConfigurationsCommandError(
      output,
      context
    );
  }
  const contents: ListDistributionConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDistributionConfigurationsResponse",
    distributionConfigurationSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.distributionConfigurationSummaryList !== undefined &&
    data.distributionConfigurationSummaryList !== null
  ) {
    contents.distributionConfigurationSummaryList = deserializeAws_restJson1_1DistributionConfigurationSummaryList(
      data.distributionConfigurationSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDistributionConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListImageBuildVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListImageBuildVersionsCommandError(
      output,
      context
    );
  }
  const contents: ListImageBuildVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListImageBuildVersionsResponse",
    imageSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imageSummaryList !== undefined && data.imageSummaryList !== null) {
    contents.imageSummaryList = deserializeAws_restJson1_1ImageSummaryList(
      data.imageSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListImageBuildVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListImagePipelineImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListImagePipelineImagesCommandError(
      output,
      context
    );
  }
  const contents: ListImagePipelineImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListImagePipelineImagesResponse",
    imageSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imageSummaryList !== undefined && data.imageSummaryList !== null) {
    contents.imageSummaryList = deserializeAws_restJson1_1ImageSummaryList(
      data.imageSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListImagePipelineImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListImagePipelinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListImagePipelinesCommandError(
      output,
      context
    );
  }
  const contents: ListImagePipelinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListImagePipelinesResponse",
    imagePipelineList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imagePipelineList !== undefined && data.imagePipelineList !== null) {
    contents.imagePipelineList = deserializeAws_restJson1_1ImagePipelineList(
      data.imagePipelineList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListImagePipelinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListImageRecipesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListImageRecipesCommandError(
      output,
      context
    );
  }
  const contents: ListImageRecipesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListImageRecipesResponse",
    imageRecipeSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.imageRecipeSummaryList !== undefined &&
    data.imageRecipeSummaryList !== null
  ) {
    contents.imageRecipeSummaryList = deserializeAws_restJson1_1ImageRecipeSummaryList(
      data.imageRecipeSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListImageRecipesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListImagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListImagesCommandError(output, context);
  }
  const contents: ListImagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListImagesResponse",
    imageVersionList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imageVersionList !== undefined && data.imageVersionList !== null) {
    contents.imageVersionList = deserializeAws_restJson1_1ImageVersionList(
      data.imageVersionList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListImagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListInfrastructureConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListInfrastructureConfigurationsCommandError(
      output,
      context
    );
  }
  const contents: ListInfrastructureConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInfrastructureConfigurationsResponse",
    infrastructureConfigurationSummaryList: undefined,
    nextToken: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.infrastructureConfigurationSummaryList !== undefined &&
    data.infrastructureConfigurationSummaryList !== null
  ) {
    contents.infrastructureConfigurationSummaryList = deserializeAws_restJson1_1InfrastructureConfigurationSummaryList(
      data.infrastructureConfigurationSummaryList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListInfrastructureConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1PutComponentPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutComponentPolicyCommandError(
      output,
      context
    );
  }
  const contents: PutComponentPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutComponentPolicyResponse",
    componentArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.componentArn !== undefined && data.componentArn !== null) {
    contents.componentArn = data.componentArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutComponentPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1PutImagePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutImagePolicyCommandError(
      output,
      context
    );
  }
  const contents: PutImagePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutImagePolicyResponse",
    imageArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imageArn !== undefined && data.imageArn !== null) {
    contents.imageArn = data.imageArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutImagePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1PutImageRecipePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutImageRecipePolicyCommandError(
      output,
      context
    );
  }
  const contents: PutImageRecipePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutImageRecipePolicyResponse",
    imageRecipeArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.imageRecipeArn !== undefined && data.imageRecipeArn !== null) {
    contents.imageRecipeArn = data.imageRecipeArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutImageRecipePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1StartImagePipelineExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartImagePipelineExecutionCommandError(
      output,
      context
    );
  }
  const contents: StartImagePipelineExecutionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartImagePipelineExecutionResponse",
    clientToken: undefined,
    imageBuildVersionArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.imageBuildVersionArn !== undefined &&
    data.imageBuildVersionArn !== null
  ) {
    contents.imageBuildVersionArn = data.imageBuildVersionArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartImagePipelineExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateDistributionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDistributionConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateDistributionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDistributionConfigurationResponse",
    clientToken: undefined,
    distributionConfigurationArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.distributionConfigurationArn !== undefined &&
    data.distributionConfigurationArn !== null
  ) {
    contents.distributionConfigurationArn = data.distributionConfigurationArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateDistributionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateImagePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateImagePipelineCommandError(
      output,
      context
    );
  }
  const contents: UpdateImagePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateImagePipelineResponse",
    clientToken: undefined,
    imagePipelineArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (data.imagePipelineArn !== undefined && data.imagePipelineArn !== null) {
    contents.imagePipelineArn = data.imagePipelineArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateImagePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateInfrastructureConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateInfrastructureConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateInfrastructureConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInfrastructureConfigurationResponse",
    clientToken: undefined,
    infrastructureConfigurationArn: undefined,
    requestId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clientToken !== undefined && data.clientToken !== null) {
    contents.clientToken = data.clientToken;
  }
  if (
    data.infrastructureConfigurationArn !== undefined &&
    data.infrastructureConfigurationArn !== null
  ) {
    contents.infrastructureConfigurationArn =
      data.infrastructureConfigurationArn;
  }
  if (data.requestId !== undefined && data.requestId !== null) {
    contents.requestId = data.requestId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateInfrastructureConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CallRateLimitExceededException> => {
  const contents: CallRateLimitExceededException = {
    name: "CallRateLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: ClientException = {
    name: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const contents: InvalidPaginationTokenException = {
    name: "InvalidPaginationTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidVersionNumberExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidVersionNumberException> => {
  const contents: InvalidVersionNumberException = {
    name: "InvalidVersionNumberException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceDependencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDependencyException> => {
  const contents: ResourceDependencyException = {
    name: "ResourceDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const contents: ServiceException = {
    name: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AccountList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1AmiDistributionConfiguration = (
  input: AmiDistributionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.amiTags !== undefined) {
    bodyParams["amiTags"] = serializeAws_restJson1_1TagMap(
      input.amiTags,
      context
    );
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.launchPermission !== undefined) {
    bodyParams[
      "launchPermission"
    ] = serializeAws_restJson1_1LaunchPermissionConfiguration(
      input.launchPermission,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ArnList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1ComponentConfiguration = (
  input: ComponentConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.componentArn !== undefined) {
    bodyParams["componentArn"] = input.componentArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ComponentConfigurationList = (
  input: ComponentConfiguration[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1ComponentConfiguration(entry, context)
  );
};

const serializeAws_restJson1_1Distribution = (
  input: Distribution,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.amiDistributionConfiguration !== undefined) {
    bodyParams[
      "amiDistributionConfiguration"
    ] = serializeAws_restJson1_1AmiDistributionConfiguration(
      input.amiDistributionConfiguration,
      context
    );
  }
  if (input.licenseConfigurationArns !== undefined) {
    bodyParams["licenseConfigurationArns"] = serializeAws_restJson1_1ArnList(
      input.licenseConfigurationArns,
      context
    );
  }
  if (input.region !== undefined) {
    bodyParams["region"] = input.region;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DistributionList = (
  input: Distribution[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1Distribution(entry, context)
  );
};

const serializeAws_restJson1_1EbsInstanceBlockDeviceSpecification = (
  input: EbsInstanceBlockDeviceSpecification,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deleteOnTermination !== undefined) {
    bodyParams["deleteOnTermination"] = input.deleteOnTermination;
  }
  if (input.encrypted !== undefined) {
    bodyParams["encrypted"] = input.encrypted;
  }
  if (input.iops !== undefined) {
    bodyParams["iops"] = input.iops;
  }
  if (input.kmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.kmsKeyId;
  }
  if (input.snapshotId !== undefined) {
    bodyParams["snapshotId"] = input.snapshotId;
  }
  if (input.volumeSize !== undefined) {
    bodyParams["volumeSize"] = input.volumeSize;
  }
  if (input.volumeType !== undefined) {
    bodyParams["volumeType"] = input.volumeType;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_restJson1_1FilterValues(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FilterList = (
  input: Filter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Filter(entry, context));
};

const serializeAws_restJson1_1FilterValues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1ImageTestsConfiguration = (
  input: ImageTestsConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.imageTestsEnabled !== undefined) {
    bodyParams["imageTestsEnabled"] = input.imageTestsEnabled;
  }
  if (input.timeoutMinutes !== undefined) {
    bodyParams["timeoutMinutes"] = input.timeoutMinutes;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InstanceBlockDeviceMapping = (
  input: InstanceBlockDeviceMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.deviceName !== undefined) {
    bodyParams["deviceName"] = input.deviceName;
  }
  if (input.ebs !== undefined) {
    bodyParams[
      "ebs"
    ] = serializeAws_restJson1_1EbsInstanceBlockDeviceSpecification(
      input.ebs,
      context
    );
  }
  if (input.noDevice !== undefined) {
    bodyParams["noDevice"] = input.noDevice;
  }
  if (input.virtualName !== undefined) {
    bodyParams["virtualName"] = input.virtualName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InstanceBlockDeviceMappings = (
  input: InstanceBlockDeviceMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1InstanceBlockDeviceMapping(entry, context)
  );
};

const serializeAws_restJson1_1InstanceTypeList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1LaunchPermissionConfiguration = (
  input: LaunchPermissionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.userGroups !== undefined) {
    bodyParams["userGroups"] = serializeAws_restJson1_1StringList(
      input.userGroups,
      context
    );
  }
  if (input.userIds !== undefined) {
    bodyParams["userIds"] = serializeAws_restJson1_1AccountList(
      input.userIds,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Logging = (
  input: Logging,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3Logs !== undefined) {
    bodyParams["s3Logs"] = serializeAws_restJson1_1S3Logs(
      input.s3Logs,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3Logs = (
  input: S3Logs,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3BucketName !== undefined) {
    bodyParams["s3BucketName"] = input.s3BucketName;
  }
  if (input.s3KeyPrefix !== undefined) {
    bodyParams["s3KeyPrefix"] = input.s3KeyPrefix;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Schedule = (
  input: Schedule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.pipelineExecutionStartCondition !== undefined) {
    bodyParams["pipelineExecutionStartCondition"] =
      input.pipelineExecutionStartCondition;
  }
  if (input.scheduleExpression !== undefined) {
    bodyParams["scheduleExpression"] = input.scheduleExpression;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SecurityGroupIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1StringList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.keys(input).reduce((acc: any, key: string) => {
    acc[key] = input[key];
    return acc;
  }, {});
};

const deserializeAws_restJson1_1AccountList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Ami = (
  output: any,
  context: __SerdeContext
): Ami => {
  let contents: any = {
    __type: "Ami",
    description: undefined,
    image: undefined,
    name: undefined,
    region: undefined,
    state: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.image !== undefined && output.image !== null) {
    contents.image = output.image;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.state = deserializeAws_restJson1_1ImageState(
      output.state,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AmiDistributionConfiguration = (
  output: any,
  context: __SerdeContext
): AmiDistributionConfiguration => {
  let contents: any = {
    __type: "AmiDistributionConfiguration",
    amiTags: undefined,
    description: undefined,
    launchPermission: undefined,
    name: undefined
  };
  if (output.amiTags !== undefined && output.amiTags !== null) {
    contents.amiTags = deserializeAws_restJson1_1TagMap(
      output.amiTags,
      context
    );
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.launchPermission !== undefined &&
    output.launchPermission !== null
  ) {
    contents.launchPermission = deserializeAws_restJson1_1LaunchPermissionConfiguration(
      output.launchPermission,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1AmiList = (
  output: any,
  context: __SerdeContext
): Ami[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Ami(entry, context)
  );
};

const deserializeAws_restJson1_1ArnList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Component = (
  output: any,
  context: __SerdeContext
): Component => {
  let contents: any = {
    __type: "Component",
    arn: undefined,
    changeDescription: undefined,
    data: undefined,
    dateCreated: undefined,
    description: undefined,
    encrypted: undefined,
    kmsKeyId: undefined,
    name: undefined,
    owner: undefined,
    platform: undefined,
    tags: undefined,
    type: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.changeDescription !== undefined &&
    output.changeDescription !== null
  ) {
    contents.changeDescription = output.changeDescription;
  }
  if (output.data !== undefined && output.data !== null) {
    contents.data = output.data;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.encrypted !== undefined && output.encrypted !== null) {
    contents.encrypted = output.encrypted;
  }
  if (output.kmsKeyId !== undefined && output.kmsKeyId !== null) {
    contents.kmsKeyId = output.kmsKeyId;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.owner !== undefined && output.owner !== null) {
    contents.owner = output.owner;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ComponentConfiguration = (
  output: any,
  context: __SerdeContext
): ComponentConfiguration => {
  let contents: any = {
    __type: "ComponentConfiguration",
    componentArn: undefined
  };
  if (output.componentArn !== undefined && output.componentArn !== null) {
    contents.componentArn = output.componentArn;
  }
  return contents;
};

const deserializeAws_restJson1_1ComponentConfigurationList = (
  output: any,
  context: __SerdeContext
): ComponentConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ComponentConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1ComponentSummary = (
  output: any,
  context: __SerdeContext
): ComponentSummary => {
  let contents: any = {
    __type: "ComponentSummary",
    arn: undefined,
    changeDescription: undefined,
    dateCreated: undefined,
    description: undefined,
    name: undefined,
    owner: undefined,
    platform: undefined,
    tags: undefined,
    type: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.changeDescription !== undefined &&
    output.changeDescription !== null
  ) {
    contents.changeDescription = output.changeDescription;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.owner !== undefined && output.owner !== null) {
    contents.owner = output.owner;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ComponentSummaryList = (
  output: any,
  context: __SerdeContext
): ComponentSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ComponentSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ComponentVersion = (
  output: any,
  context: __SerdeContext
): ComponentVersion => {
  let contents: any = {
    __type: "ComponentVersion",
    arn: undefined,
    dateCreated: undefined,
    description: undefined,
    name: undefined,
    owner: undefined,
    platform: undefined,
    type: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.owner !== undefined && output.owner !== null) {
    contents.owner = output.owner;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ComponentVersionList = (
  output: any,
  context: __SerdeContext
): ComponentVersion[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ComponentVersion(entry, context)
  );
};

const deserializeAws_restJson1_1Distribution = (
  output: any,
  context: __SerdeContext
): Distribution => {
  let contents: any = {
    __type: "Distribution",
    amiDistributionConfiguration: undefined,
    licenseConfigurationArns: undefined,
    region: undefined
  };
  if (
    output.amiDistributionConfiguration !== undefined &&
    output.amiDistributionConfiguration !== null
  ) {
    contents.amiDistributionConfiguration = deserializeAws_restJson1_1AmiDistributionConfiguration(
      output.amiDistributionConfiguration,
      context
    );
  }
  if (
    output.licenseConfigurationArns !== undefined &&
    output.licenseConfigurationArns !== null
  ) {
    contents.licenseConfigurationArns = deserializeAws_restJson1_1ArnList(
      output.licenseConfigurationArns,
      context
    );
  }
  if (output.region !== undefined && output.region !== null) {
    contents.region = output.region;
  }
  return contents;
};

const deserializeAws_restJson1_1DistributionConfiguration = (
  output: any,
  context: __SerdeContext
): DistributionConfiguration => {
  let contents: any = {
    __type: "DistributionConfiguration",
    arn: undefined,
    dateCreated: undefined,
    dateUpdated: undefined,
    description: undefined,
    distributions: undefined,
    name: undefined,
    tags: undefined,
    timeoutMinutes: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.dateUpdated !== undefined && output.dateUpdated !== null) {
    contents.dateUpdated = output.dateUpdated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.distributions !== undefined && output.distributions !== null) {
    contents.distributions = deserializeAws_restJson1_1DistributionList(
      output.distributions,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.timeoutMinutes !== undefined && output.timeoutMinutes !== null) {
    contents.timeoutMinutes = output.timeoutMinutes;
  }
  return contents;
};

const deserializeAws_restJson1_1DistributionConfigurationSummary = (
  output: any,
  context: __SerdeContext
): DistributionConfigurationSummary => {
  let contents: any = {
    __type: "DistributionConfigurationSummary",
    arn: undefined,
    dateCreated: undefined,
    dateUpdated: undefined,
    description: undefined,
    name: undefined,
    tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.dateUpdated !== undefined && output.dateUpdated !== null) {
    contents.dateUpdated = output.dateUpdated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1DistributionConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): DistributionConfigurationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DistributionConfigurationSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DistributionList = (
  output: any,
  context: __SerdeContext
): Distribution[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Distribution(entry, context)
  );
};

const deserializeAws_restJson1_1EbsInstanceBlockDeviceSpecification = (
  output: any,
  context: __SerdeContext
): EbsInstanceBlockDeviceSpecification => {
  let contents: any = {
    __type: "EbsInstanceBlockDeviceSpecification",
    deleteOnTermination: undefined,
    encrypted: undefined,
    iops: undefined,
    kmsKeyId: undefined,
    snapshotId: undefined,
    volumeSize: undefined,
    volumeType: undefined
  };
  if (
    output.deleteOnTermination !== undefined &&
    output.deleteOnTermination !== null
  ) {
    contents.deleteOnTermination = output.deleteOnTermination;
  }
  if (output.encrypted !== undefined && output.encrypted !== null) {
    contents.encrypted = output.encrypted;
  }
  if (output.iops !== undefined && output.iops !== null) {
    contents.iops = output.iops;
  }
  if (output.kmsKeyId !== undefined && output.kmsKeyId !== null) {
    contents.kmsKeyId = output.kmsKeyId;
  }
  if (output.snapshotId !== undefined && output.snapshotId !== null) {
    contents.snapshotId = output.snapshotId;
  }
  if (output.volumeSize !== undefined && output.volumeSize !== null) {
    contents.volumeSize = output.volumeSize;
  }
  if (output.volumeType !== undefined && output.volumeType !== null) {
    contents.volumeType = output.volumeType;
  }
  return contents;
};

const deserializeAws_restJson1_1Image = (
  output: any,
  context: __SerdeContext
): Image => {
  let contents: any = {
    __type: "Image",
    arn: undefined,
    dateCreated: undefined,
    distributionConfiguration: undefined,
    imageRecipe: undefined,
    imageTestsConfiguration: undefined,
    infrastructureConfiguration: undefined,
    name: undefined,
    outputResources: undefined,
    platform: undefined,
    sourcePipelineArn: undefined,
    sourcePipelineName: undefined,
    state: undefined,
    tags: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (
    output.distributionConfiguration !== undefined &&
    output.distributionConfiguration !== null
  ) {
    contents.distributionConfiguration = deserializeAws_restJson1_1DistributionConfiguration(
      output.distributionConfiguration,
      context
    );
  }
  if (output.imageRecipe !== undefined && output.imageRecipe !== null) {
    contents.imageRecipe = deserializeAws_restJson1_1ImageRecipe(
      output.imageRecipe,
      context
    );
  }
  if (
    output.imageTestsConfiguration !== undefined &&
    output.imageTestsConfiguration !== null
  ) {
    contents.imageTestsConfiguration = deserializeAws_restJson1_1ImageTestsConfiguration(
      output.imageTestsConfiguration,
      context
    );
  }
  if (
    output.infrastructureConfiguration !== undefined &&
    output.infrastructureConfiguration !== null
  ) {
    contents.infrastructureConfiguration = deserializeAws_restJson1_1InfrastructureConfiguration(
      output.infrastructureConfiguration,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.outputResources !== undefined && output.outputResources !== null) {
    contents.outputResources = deserializeAws_restJson1_1OutputResources(
      output.outputResources,
      context
    );
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (
    output.sourcePipelineArn !== undefined &&
    output.sourcePipelineArn !== null
  ) {
    contents.sourcePipelineArn = output.sourcePipelineArn;
  }
  if (
    output.sourcePipelineName !== undefined &&
    output.sourcePipelineName !== null
  ) {
    contents.sourcePipelineName = output.sourcePipelineName;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.state = deserializeAws_restJson1_1ImageState(
      output.state,
      context
    );
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ImagePipeline = (
  output: any,
  context: __SerdeContext
): ImagePipeline => {
  let contents: any = {
    __type: "ImagePipeline",
    arn: undefined,
    dateCreated: undefined,
    dateLastRun: undefined,
    dateNextRun: undefined,
    dateUpdated: undefined,
    description: undefined,
    distributionConfigurationArn: undefined,
    imageRecipeArn: undefined,
    imageTestsConfiguration: undefined,
    infrastructureConfigurationArn: undefined,
    name: undefined,
    platform: undefined,
    schedule: undefined,
    status: undefined,
    tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.dateLastRun !== undefined && output.dateLastRun !== null) {
    contents.dateLastRun = output.dateLastRun;
  }
  if (output.dateNextRun !== undefined && output.dateNextRun !== null) {
    contents.dateNextRun = output.dateNextRun;
  }
  if (output.dateUpdated !== undefined && output.dateUpdated !== null) {
    contents.dateUpdated = output.dateUpdated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.distributionConfigurationArn !== undefined &&
    output.distributionConfigurationArn !== null
  ) {
    contents.distributionConfigurationArn = output.distributionConfigurationArn;
  }
  if (output.imageRecipeArn !== undefined && output.imageRecipeArn !== null) {
    contents.imageRecipeArn = output.imageRecipeArn;
  }
  if (
    output.imageTestsConfiguration !== undefined &&
    output.imageTestsConfiguration !== null
  ) {
    contents.imageTestsConfiguration = deserializeAws_restJson1_1ImageTestsConfiguration(
      output.imageTestsConfiguration,
      context
    );
  }
  if (
    output.infrastructureConfigurationArn !== undefined &&
    output.infrastructureConfigurationArn !== null
  ) {
    contents.infrastructureConfigurationArn =
      output.infrastructureConfigurationArn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.schedule !== undefined && output.schedule !== null) {
    contents.schedule = deserializeAws_restJson1_1Schedule(
      output.schedule,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1ImagePipelineList = (
  output: any,
  context: __SerdeContext
): ImagePipeline[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ImagePipeline(entry, context)
  );
};

const deserializeAws_restJson1_1ImageRecipe = (
  output: any,
  context: __SerdeContext
): ImageRecipe => {
  let contents: any = {
    __type: "ImageRecipe",
    arn: undefined,
    blockDeviceMappings: undefined,
    components: undefined,
    dateCreated: undefined,
    description: undefined,
    name: undefined,
    owner: undefined,
    parentImage: undefined,
    platform: undefined,
    tags: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.blockDeviceMappings !== undefined &&
    output.blockDeviceMappings !== null
  ) {
    contents.blockDeviceMappings = deserializeAws_restJson1_1InstanceBlockDeviceMappings(
      output.blockDeviceMappings,
      context
    );
  }
  if (output.components !== undefined && output.components !== null) {
    contents.components = deserializeAws_restJson1_1ComponentConfigurationList(
      output.components,
      context
    );
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.owner !== undefined && output.owner !== null) {
    contents.owner = output.owner;
  }
  if (output.parentImage !== undefined && output.parentImage !== null) {
    contents.parentImage = output.parentImage;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ImageRecipeSummary = (
  output: any,
  context: __SerdeContext
): ImageRecipeSummary => {
  let contents: any = {
    __type: "ImageRecipeSummary",
    arn: undefined,
    dateCreated: undefined,
    name: undefined,
    owner: undefined,
    parentImage: undefined,
    platform: undefined,
    tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.owner !== undefined && output.owner !== null) {
    contents.owner = output.owner;
  }
  if (output.parentImage !== undefined && output.parentImage !== null) {
    contents.parentImage = output.parentImage;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1ImageRecipeSummaryList = (
  output: any,
  context: __SerdeContext
): ImageRecipeSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ImageRecipeSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ImageState = (
  output: any,
  context: __SerdeContext
): ImageState => {
  let contents: any = {
    __type: "ImageState",
    reason: undefined,
    status: undefined
  };
  if (output.reason !== undefined && output.reason !== null) {
    contents.reason = output.reason;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1ImageSummary = (
  output: any,
  context: __SerdeContext
): ImageSummary => {
  let contents: any = {
    __type: "ImageSummary",
    arn: undefined,
    dateCreated: undefined,
    name: undefined,
    outputResources: undefined,
    owner: undefined,
    platform: undefined,
    state: undefined,
    tags: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.outputResources !== undefined && output.outputResources !== null) {
    contents.outputResources = deserializeAws_restJson1_1OutputResources(
      output.outputResources,
      context
    );
  }
  if (output.owner !== undefined && output.owner !== null) {
    contents.owner = output.owner;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.state !== undefined && output.state !== null) {
    contents.state = deserializeAws_restJson1_1ImageState(
      output.state,
      context
    );
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ImageSummaryList = (
  output: any,
  context: __SerdeContext
): ImageSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ImageSummary(entry, context)
  );
};

const deserializeAws_restJson1_1ImageTestsConfiguration = (
  output: any,
  context: __SerdeContext
): ImageTestsConfiguration => {
  let contents: any = {
    __type: "ImageTestsConfiguration",
    imageTestsEnabled: undefined,
    timeoutMinutes: undefined
  };
  if (
    output.imageTestsEnabled !== undefined &&
    output.imageTestsEnabled !== null
  ) {
    contents.imageTestsEnabled = output.imageTestsEnabled;
  }
  if (output.timeoutMinutes !== undefined && output.timeoutMinutes !== null) {
    contents.timeoutMinutes = output.timeoutMinutes;
  }
  return contents;
};

const deserializeAws_restJson1_1ImageVersion = (
  output: any,
  context: __SerdeContext
): ImageVersion => {
  let contents: any = {
    __type: "ImageVersion",
    arn: undefined,
    dateCreated: undefined,
    name: undefined,
    owner: undefined,
    platform: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.owner !== undefined && output.owner !== null) {
    contents.owner = output.owner;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1ImageVersionList = (
  output: any,
  context: __SerdeContext
): ImageVersion[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ImageVersion(entry, context)
  );
};

const deserializeAws_restJson1_1InfrastructureConfiguration = (
  output: any,
  context: __SerdeContext
): InfrastructureConfiguration => {
  let contents: any = {
    __type: "InfrastructureConfiguration",
    arn: undefined,
    dateCreated: undefined,
    dateUpdated: undefined,
    description: undefined,
    instanceProfileName: undefined,
    instanceTypes: undefined,
    keyPair: undefined,
    logging: undefined,
    name: undefined,
    securityGroupIds: undefined,
    snsTopicArn: undefined,
    subnetId: undefined,
    tags: undefined,
    terminateInstanceOnFailure: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.dateUpdated !== undefined && output.dateUpdated !== null) {
    contents.dateUpdated = output.dateUpdated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.instanceProfileName !== undefined &&
    output.instanceProfileName !== null
  ) {
    contents.instanceProfileName = output.instanceProfileName;
  }
  if (output.instanceTypes !== undefined && output.instanceTypes !== null) {
    contents.instanceTypes = deserializeAws_restJson1_1InstanceTypeList(
      output.instanceTypes,
      context
    );
  }
  if (output.keyPair !== undefined && output.keyPair !== null) {
    contents.keyPair = output.keyPair;
  }
  if (output.logging !== undefined && output.logging !== null) {
    contents.logging = deserializeAws_restJson1_1Logging(
      output.logging,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.securityGroupIds !== undefined &&
    output.securityGroupIds !== null
  ) {
    contents.securityGroupIds = deserializeAws_restJson1_1SecurityGroupIds(
      output.securityGroupIds,
      context
    );
  }
  if (output.snsTopicArn !== undefined && output.snsTopicArn !== null) {
    contents.snsTopicArn = output.snsTopicArn;
  }
  if (output.subnetId !== undefined && output.subnetId !== null) {
    contents.subnetId = output.subnetId;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (
    output.terminateInstanceOnFailure !== undefined &&
    output.terminateInstanceOnFailure !== null
  ) {
    contents.terminateInstanceOnFailure = output.terminateInstanceOnFailure;
  }
  return contents;
};

const deserializeAws_restJson1_1InfrastructureConfigurationSummary = (
  output: any,
  context: __SerdeContext
): InfrastructureConfigurationSummary => {
  let contents: any = {
    __type: "InfrastructureConfigurationSummary",
    arn: undefined,
    dateCreated: undefined,
    dateUpdated: undefined,
    description: undefined,
    name: undefined,
    tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dateCreated !== undefined && output.dateCreated !== null) {
    contents.dateCreated = output.dateCreated;
  }
  if (output.dateUpdated !== undefined && output.dateUpdated !== null) {
    contents.dateUpdated = output.dateUpdated;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1InfrastructureConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): InfrastructureConfigurationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InfrastructureConfigurationSummary(entry, context)
  );
};

const deserializeAws_restJson1_1InstanceBlockDeviceMapping = (
  output: any,
  context: __SerdeContext
): InstanceBlockDeviceMapping => {
  let contents: any = {
    __type: "InstanceBlockDeviceMapping",
    deviceName: undefined,
    ebs: undefined,
    noDevice: undefined,
    virtualName: undefined
  };
  if (output.deviceName !== undefined && output.deviceName !== null) {
    contents.deviceName = output.deviceName;
  }
  if (output.ebs !== undefined && output.ebs !== null) {
    contents.ebs = deserializeAws_restJson1_1EbsInstanceBlockDeviceSpecification(
      output.ebs,
      context
    );
  }
  if (output.noDevice !== undefined && output.noDevice !== null) {
    contents.noDevice = output.noDevice;
  }
  if (output.virtualName !== undefined && output.virtualName !== null) {
    contents.virtualName = output.virtualName;
  }
  return contents;
};

const deserializeAws_restJson1_1InstanceBlockDeviceMappings = (
  output: any,
  context: __SerdeContext
): InstanceBlockDeviceMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InstanceBlockDeviceMapping(entry, context)
  );
};

const deserializeAws_restJson1_1InstanceTypeList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1LaunchPermissionConfiguration = (
  output: any,
  context: __SerdeContext
): LaunchPermissionConfiguration => {
  let contents: any = {
    __type: "LaunchPermissionConfiguration",
    userGroups: undefined,
    userIds: undefined
  };
  if (output.userGroups !== undefined && output.userGroups !== null) {
    contents.userGroups = deserializeAws_restJson1_1StringList(
      output.userGroups,
      context
    );
  }
  if (output.userIds !== undefined && output.userIds !== null) {
    contents.userIds = deserializeAws_restJson1_1AccountList(
      output.userIds,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Logging = (
  output: any,
  context: __SerdeContext
): Logging => {
  let contents: any = {
    __type: "Logging",
    s3Logs: undefined
  };
  if (output.s3Logs !== undefined && output.s3Logs !== null) {
    contents.s3Logs = deserializeAws_restJson1_1S3Logs(output.s3Logs, context);
  }
  return contents;
};

const deserializeAws_restJson1_1OutputResources = (
  output: any,
  context: __SerdeContext
): OutputResources => {
  let contents: any = {
    __type: "OutputResources",
    amis: undefined
  };
  if (output.amis !== undefined && output.amis !== null) {
    contents.amis = deserializeAws_restJson1_1AmiList(output.amis, context);
  }
  return contents;
};

const deserializeAws_restJson1_1S3Logs = (
  output: any,
  context: __SerdeContext
): S3Logs => {
  let contents: any = {
    __type: "S3Logs",
    s3BucketName: undefined,
    s3KeyPrefix: undefined
  };
  if (output.s3BucketName !== undefined && output.s3BucketName !== null) {
    contents.s3BucketName = output.s3BucketName;
  }
  if (output.s3KeyPrefix !== undefined && output.s3KeyPrefix !== null) {
    contents.s3KeyPrefix = output.s3KeyPrefix;
  }
  return contents;
};

const deserializeAws_restJson1_1Schedule = (
  output: any,
  context: __SerdeContext
): Schedule => {
  let contents: any = {
    __type: "Schedule",
    pipelineExecutionStartCondition: undefined,
    scheduleExpression: undefined
  };
  if (
    output.pipelineExecutionStartCondition !== undefined &&
    output.pipelineExecutionStartCondition !== null
  ) {
    contents.pipelineExecutionStartCondition =
      output.pipelineExecutionStartCondition;
  }
  if (
    output.scheduleExpression !== undefined &&
    output.scheduleExpression !== null
  ) {
    contents.scheduleExpression = output.scheduleExpression;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroupIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.keys(output).reduce((acc: any, key: string) => {
    acc[key] = output[key];
    return acc;
  }, {});
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
