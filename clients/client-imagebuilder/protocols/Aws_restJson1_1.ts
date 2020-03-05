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

export async function serializeAws_restJson1_1CancelImageCreationCommand(
  input: CancelImageCreationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateComponentCommand(
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateDistributionConfigurationCommand(
  input: CreateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateImageCommand(
  input: CreateImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateImagePipelineCommand(
  input: CreateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateImageRecipeCommand(
  input: CreateImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateInfrastructureConfigurationCommand(
  input: CreateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteComponentCommand(
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/DeleteComponent";
  const query: any = {};
  if (input.componentBuildVersionArn !== undefined) {
    query["componentBuildVersionArn"] = input.componentBuildVersionArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteDistributionConfigurationCommand(
  input: DeleteDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/DeleteDistributionConfiguration";
  const query: any = {};
  if (input.distributionConfigurationArn !== undefined) {
    query["distributionConfigurationArn"] = input.distributionConfigurationArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteImageCommand(
  input: DeleteImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/DeleteImage";
  const query: any = {};
  if (input.imageBuildVersionArn !== undefined) {
    query["imageBuildVersionArn"] = input.imageBuildVersionArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteImagePipelineCommand(
  input: DeleteImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/DeleteImagePipeline";
  const query: any = {};
  if (input.imagePipelineArn !== undefined) {
    query["imagePipelineArn"] = input.imagePipelineArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteImageRecipeCommand(
  input: DeleteImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/DeleteImageRecipe";
  const query: any = {};
  if (input.imageRecipeArn !== undefined) {
    query["imageRecipeArn"] = input.imageRecipeArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteInfrastructureConfigurationCommand(
  input: DeleteInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/DeleteInfrastructureConfiguration";
  const query: any = {};
  if (input.infrastructureConfigurationArn !== undefined) {
    query["infrastructureConfigurationArn"] =
      input.infrastructureConfigurationArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetComponentCommand(
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetComponent";
  const query: any = {};
  if (input.componentBuildVersionArn !== undefined) {
    query["componentBuildVersionArn"] = input.componentBuildVersionArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetComponentPolicyCommand(
  input: GetComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetComponentPolicy";
  const query: any = {};
  if (input.componentArn !== undefined) {
    query["componentArn"] = input.componentArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetDistributionConfigurationCommand(
  input: GetDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetDistributionConfiguration";
  const query: any = {};
  if (input.distributionConfigurationArn !== undefined) {
    query["distributionConfigurationArn"] = input.distributionConfigurationArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetImageCommand(
  input: GetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetImage";
  const query: any = {};
  if (input.imageBuildVersionArn !== undefined) {
    query["imageBuildVersionArn"] = input.imageBuildVersionArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetImagePipelineCommand(
  input: GetImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetImagePipeline";
  const query: any = {};
  if (input.imagePipelineArn !== undefined) {
    query["imagePipelineArn"] = input.imagePipelineArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetImagePolicyCommand(
  input: GetImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetImagePolicy";
  const query: any = {};
  if (input.imageArn !== undefined) {
    query["imageArn"] = input.imageArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetImageRecipeCommand(
  input: GetImageRecipeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetImageRecipe";
  const query: any = {};
  if (input.imageRecipeArn !== undefined) {
    query["imageRecipeArn"] = input.imageRecipeArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetImageRecipePolicyCommand(
  input: GetImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetImageRecipePolicy";
  const query: any = {};
  if (input.imageRecipeArn !== undefined) {
    query["imageRecipeArn"] = input.imageRecipeArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetInfrastructureConfigurationCommand(
  input: GetInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/GetInfrastructureConfiguration";
  const query: any = {};
  if (input.infrastructureConfigurationArn !== undefined) {
    query["infrastructureConfigurationArn"] =
      input.infrastructureConfigurationArn;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ImportComponentCommand(
  input: ImportComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListComponentBuildVersionsCommand(
  input: ListComponentBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListComponentsCommand(
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListDistributionConfigurationsCommand(
  input: ListDistributionConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListImageBuildVersionsCommand(
  input: ListImageBuildVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListImagePipelineImagesCommand(
  input: ListImagePipelineImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListImagePipelinesCommand(
  input: ListImagePipelinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListImageRecipesCommand(
  input: ListImageRecipesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListImagesCommand(
  input: ListImagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListInfrastructureConfigurationsCommand(
  input: ListInfrastructureConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1PutComponentPolicyCommand(
  input: PutComponentPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutImagePolicyCommand(
  input: PutImagePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutImageRecipePolicyCommand(
  input: PutImageRecipePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1StartImagePipelineExecutionCommand(
  input: StartImagePipelineExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1UpdateDistributionConfigurationCommand(
  input: UpdateDistributionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateImagePipelineCommand(
  input: UpdateImagePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateInfrastructureConfigurationCommand(
  input: UpdateInfrastructureConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CancelImageCreationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> {
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
}

async function deserializeAws_restJson1_1CancelImageCreationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelImageCreationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateComponentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateComponentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidVersionNumberExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateDistributionConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateDistributionConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDistributionConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateImagePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateImagePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImagePipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateImageRecipeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateImageRecipeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateImageRecipeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidVersionNumberExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateInfrastructureConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateInfrastructureConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInfrastructureConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.imagebuilder#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteComponentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteComponentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteDistributionConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteDistributionConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDistributionConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteImagePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteImagePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImagePipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteImageRecipeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteImageRecipeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImageRecipeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteInfrastructureConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> {
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
}

async function deserializeAws_restJson1_1DeleteInfrastructureConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInfrastructureConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceDependencyException":
    case "com.amazonaws.imagebuilder#ResourceDependencyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceDependencyExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetComponentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetComponentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetComponentPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetComponentPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetDistributionConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetDistributionConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDistributionConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetImageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetImageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetImagePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetImagePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetImagePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetImagePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImagePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetImageRecipeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetImageRecipeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetImageRecipePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetImageRecipePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImageRecipePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetInfrastructureConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetInfrastructureConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInfrastructureConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ImportComponentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> {
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
}

async function deserializeAws_restJson1_1ImportComponentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportComponentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidVersionNumberException":
    case "com.amazonaws.imagebuilder#InvalidVersionNumberException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidVersionNumberExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListComponentBuildVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListComponentBuildVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentBuildVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListComponentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListComponentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListDistributionConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListDistributionConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDistributionConfigurationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListImageBuildVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListImageBuildVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageBuildVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListImagePipelineImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListImagePipelineImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelineImagesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListImagePipelinesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListImagePipelinesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagePipelinesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListImageRecipesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListImageRecipesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImageRecipesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListImagesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListImagesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImagesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListInfrastructureConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListInfrastructureConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInfrastructureConfigurationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidPaginationTokenException":
    case "com.amazonaws.imagebuilder#InvalidPaginationTokenException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1PutComponentPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutComponentPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutComponentPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1PutImagePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutImagePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImagePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1PutImageRecipePolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> {
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
}

async function deserializeAws_restJson1_1PutImageRecipePolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutImageRecipePolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.imagebuilder#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1StartImagePipelineExecutionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> {
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
}

async function deserializeAws_restJson1_1StartImagePipelineExecutionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImagePipelineExecutionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.imagebuilder#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.imagebuilder#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateDistributionConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdateDistributionConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDistributionConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.imagebuilder#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateImagePipelineCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdateImagePipelineCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateImagePipelineCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateInfrastructureConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> {
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
}

async function deserializeAws_restJson1_1UpdateInfrastructureConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInfrastructureConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "CallRateLimitExceededException":
    case "com.amazonaws.imagebuilder#CallRateLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ClientException":
    case "com.amazonaws.imagebuilder#ClientException":
      response = {
        ...(await deserializeAws_restJson1_1ClientExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.imagebuilder#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.imagebuilder#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.imagebuilder#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.imagebuilder#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.imagebuilder#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.imagebuilder#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1CallRateLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<CallRateLimitExceededException> => {
  const contents: CallRateLimitExceededException = {
    name: "CallRateLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ClientExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ClientException> => {
  const contents: ClientException = {
    name: "ClientException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidPaginationTokenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidPaginationTokenException> => {
  const contents: InvalidPaginationTokenException = {
    name: "InvalidPaginationTokenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterCombinationExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterValueExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidVersionNumberExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidVersionNumberException> => {
  const contents: InvalidVersionNumberException = {
    name: "InvalidVersionNumberException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceDependencyExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceDependencyException> => {
  const contents: ResourceDependencyException = {
    name: "ResourceDependencyException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const contents: ServiceException = {
    name: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AccountList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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
  input: Array<ComponentConfiguration>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1ComponentConfiguration(entry, context)
    );
  }
  return contents;
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
  input: Array<Distribution>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Distribution(entry, context));
  }
  return contents;
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
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Filter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1FilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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
  input: Array<InstanceBlockDeviceMapping>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1InstanceBlockDeviceMapping(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1InstanceTypeList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
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
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1StringList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AccountList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
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
): Array<Ami> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Ami(entry, context)
  );
};

const deserializeAws_restJson1_1ArnList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
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
): Array<ComponentConfiguration> => {
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
): Array<ComponentSummary> => {
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
): Array<ComponentVersion> => {
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
): Array<DistributionConfigurationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DistributionConfigurationSummary(entry, context)
  );
};

const deserializeAws_restJson1_1DistributionList = (
  output: any,
  context: __SerdeContext
): Array<Distribution> => {
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
): Array<ImagePipeline> => {
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
): Array<ImageRecipeSummary> => {
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
): Array<ImageSummary> => {
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
): Array<ImageVersion> => {
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
): Array<InfrastructureConfigurationSummary> => {
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
): Array<InstanceBlockDeviceMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InstanceBlockDeviceMapping(entry, context)
  );
};

const deserializeAws_restJson1_1InstanceTypeList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
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
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
