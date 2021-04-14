import { CancelDeploymentCommandInput, CancelDeploymentCommandOutput } from "../commands/CancelDeploymentCommand";
import {
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
} from "../commands/CreateComponentVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import { DeleteCoreDeviceCommandInput, DeleteCoreDeviceCommandOutput } from "../commands/DeleteCoreDeviceCommand";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "../commands/DescribeComponentCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import {
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
} from "../commands/GetComponentVersionArtifactCommand";
import { GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput } from "../commands/GetCoreDeviceCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import {
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "../commands/ListComponentVersionsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import { ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput } from "../commands/ListCoreDevicesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
} from "../commands/ListEffectiveDeploymentsCommand";
import {
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
} from "../commands/ListInstalledComponentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
} from "../commands/ResolveComponentCandidatesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AccessDeniedException,
  CloudComponentStatus,
  Component,
  ComponentCandidate,
  ComponentConfigurationUpdate,
  ComponentDependencyRequirement,
  ComponentDeploymentSpecification,
  ComponentLatestVersion,
  ComponentPlatform,
  ComponentRunWith,
  ComponentVersionListItem,
  ConflictException,
  CoreDevice,
  Deployment,
  DeploymentComponentUpdatePolicy,
  DeploymentConfigurationValidationPolicy,
  DeploymentIoTJobConfiguration,
  DeploymentPolicies,
  EffectiveDeployment,
  InstalledComponent,
  InternalServerException,
  IoTJobAbortConfig,
  IoTJobAbortCriteria,
  IoTJobExecutionsRolloutConfig,
  IoTJobExponentialRolloutRate,
  IoTJobRateIncreaseCriteria,
  IoTJobTimeoutConfig,
  LambdaContainerParams,
  LambdaDeviceMount,
  LambdaEventSource,
  LambdaExecutionParameters,
  LambdaFunctionRecipeSource,
  LambdaLinuxProcessParams,
  LambdaVolumeMount,
  ResolvedComponentVersion,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1CancelDeploymentCommand = async (
  input: CancelDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/deployments/{deploymentId}/cancel";
  if (input.deploymentId !== undefined) {
    const labelValue: string = input.deploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: deploymentId.");
    }
    resolvedPath = resolvedPath.replace("{deploymentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: deploymentId.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1CreateComponentVersionCommand = async (
  input: CreateComponentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/greengrass/v2/createComponentVersion";
  let body: any;
  body = JSON.stringify({
    ...(input.inlineRecipe !== undefined &&
      input.inlineRecipe !== null && { inlineRecipe: context.base64Encoder(input.inlineRecipe) }),
    ...(input.lambdaFunction !== undefined &&
      input.lambdaFunction !== null && {
        lambdaFunction: serializeAws_restJson1LambdaFunctionRecipeSource(input.lambdaFunction, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/greengrass/v2/deployments";
  let body: any;
  body = JSON.stringify({
    ...(input.components !== undefined &&
      input.components !== null && {
        components: serializeAws_restJson1ComponentDeploymentSpecifications(input.components, context),
      }),
    ...(input.deploymentName !== undefined &&
      input.deploymentName !== null && { deploymentName: input.deploymentName }),
    ...(input.deploymentPolicies !== undefined &&
      input.deploymentPolicies !== null && {
        deploymentPolicies: serializeAws_restJson1DeploymentPolicies(input.deploymentPolicies, context),
      }),
    ...(input.iotJobConfiguration !== undefined &&
      input.iotJobConfiguration !== null && {
        iotJobConfiguration: serializeAws_restJson1DeploymentIoTJobConfiguration(input.iotJobConfiguration, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.targetArn !== undefined && input.targetArn !== null && { targetArn: input.targetArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/components/{arn}";
  if (input.arn !== undefined) {
    const labelValue: string = input.arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: arn.");
    }
    resolvedPath = resolvedPath.replace("{arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: arn.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteCoreDeviceCommand = async (
  input: DeleteCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/coreDevices/{coreDeviceThingName}";
  if (input.coreDeviceThingName !== undefined) {
    const labelValue: string = input.coreDeviceThingName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: coreDeviceThingName.");
    }
    resolvedPath = resolvedPath.replace("{coreDeviceThingName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: coreDeviceThingName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeComponentCommand = async (
  input: DescribeComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/components/{arn}/metadata";
  if (input.arn !== undefined) {
    const labelValue: string = input.arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: arn.");
    }
    resolvedPath = resolvedPath.replace("{arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: arn.");
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
    body,
  });
};

export const serializeAws_restJson1GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/components/{arn}";
  if (input.arn !== undefined) {
    const labelValue: string = input.arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: arn.");
    }
    resolvedPath = resolvedPath.replace("{arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: arn.");
  }
  const query: any = {
    ...(input.recipeOutputFormat !== undefined && { recipeOutputFormat: input.recipeOutputFormat }),
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
    body,
  });
};

export const serializeAws_restJson1GetComponentVersionArtifactCommand = async (
  input: GetComponentVersionArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/components/{arn}/artifacts/{artifactName+}";
  if (input.arn !== undefined) {
    const labelValue: string = input.arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: arn.");
    }
    resolvedPath = resolvedPath.replace("{arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: arn.");
  }
  if (input.artifactName !== undefined) {
    const labelValue: string = input.artifactName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: artifactName.");
    }
    resolvedPath = resolvedPath.replace(
      "{artifactName+}",
      labelValue
        .split("/")
        .map((segment) => __extendedEncodeURIComponent(segment))
        .join("/")
    );
  } else {
    throw new Error("No value provided for input HTTP label: artifactName.");
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
    body,
  });
};

export const serializeAws_restJson1GetCoreDeviceCommand = async (
  input: GetCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/coreDevices/{coreDeviceThingName}";
  if (input.coreDeviceThingName !== undefined) {
    const labelValue: string = input.coreDeviceThingName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: coreDeviceThingName.");
    }
    resolvedPath = resolvedPath.replace("{coreDeviceThingName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: coreDeviceThingName.");
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
    body,
  });
};

export const serializeAws_restJson1GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/deployments/{deploymentId}";
  if (input.deploymentId !== undefined) {
    const labelValue: string = input.deploymentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: deploymentId.");
    }
    resolvedPath = resolvedPath.replace("{deploymentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: deploymentId.");
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
    body,
  });
};

export const serializeAws_restJson1ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/components";
  const query: any = {
    ...(input.scope !== undefined && { scope: input.scope }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
    body,
  });
};

export const serializeAws_restJson1ListComponentVersionsCommand = async (
  input: ListComponentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/components/{arn}/versions";
  if (input.arn !== undefined) {
    const labelValue: string = input.arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: arn.");
    }
    resolvedPath = resolvedPath.replace("{arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: arn.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
    body,
  });
};

export const serializeAws_restJson1ListCoreDevicesCommand = async (
  input: ListCoreDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/coreDevices";
  const query: any = {
    ...(input.thingGroupArn !== undefined && { thingGroupArn: input.thingGroupArn }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
    body,
  });
};

export const serializeAws_restJson1ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/deployments";
  const query: any = {
    ...(input.targetArn !== undefined && { targetArn: input.targetArn }),
    ...(input.historyFilter !== undefined && { historyFilter: input.historyFilter }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
    body,
  });
};

export const serializeAws_restJson1ListEffectiveDeploymentsCommand = async (
  input: ListEffectiveDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments";
  if (input.coreDeviceThingName !== undefined) {
    const labelValue: string = input.coreDeviceThingName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: coreDeviceThingName.");
    }
    resolvedPath = resolvedPath.replace("{coreDeviceThingName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: coreDeviceThingName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
    body,
  });
};

export const serializeAws_restJson1ListInstalledComponentsCommand = async (
  input: ListInstalledComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents";
  if (input.coreDeviceThingName !== undefined) {
    const labelValue: string = input.coreDeviceThingName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: coreDeviceThingName.");
    }
    resolvedPath = resolvedPath.replace("{coreDeviceThingName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: coreDeviceThingName.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
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
    body,
  });
};

export const serializeAws_restJson1ResolveComponentCandidatesCommand = async (
  input: ResolveComponentCandidatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/greengrass/v2/resolveComponentCandidates";
  let body: any;
  body = JSON.stringify({
    ...(input.componentCandidates !== undefined &&
      input.componentCandidates !== null && {
        componentCandidates: serializeAws_restJson1ComponentCandidateList(input.componentCandidates, context),
      }),
    ...(input.platform !== undefined &&
      input.platform !== null && { platform: serializeAws_restJson1ComponentPlatform(input.platform, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
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
    body,
  });
};

export const deserializeAws_restJson1CancelDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelDeploymentCommandError(output, context);
  }
  const contents: CancelDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    message: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateComponentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateComponentVersionCommandError(output, context);
  }
  const contents: CreateComponentVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    componentName: undefined,
    componentVersion: undefined,
    creationTimestamp: undefined,
    status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.componentName !== undefined && data.componentName !== null) {
    contents.componentName = data.componentName;
  }
  if (data.componentVersion !== undefined && data.componentVersion !== null) {
    contents.componentVersion = data.componentVersion;
  }
  if (data.creationTimestamp !== undefined && data.creationTimestamp !== null) {
    contents.creationTimestamp = new Date(Math.round(data.creationTimestamp * 1000));
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1CloudComponentStatus(data.status, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateComponentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.greengrassv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
  }
  const contents: CreateDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    deploymentId: undefined,
    iotJobArn: undefined,
    iotJobId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.deploymentId = data.deploymentId;
  }
  if (data.iotJobArn !== undefined && data.iotJobArn !== null) {
    contents.iotJobArn = data.iotJobArn;
  }
  if (data.iotJobId !== undefined && data.iotJobId !== null) {
    contents.iotJobId = data.iotJobId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteComponentCommandError(output, context);
  }
  const contents: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCoreDeviceCommandError(output, context);
  }
  const contents: DeleteCoreDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCoreDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeComponentCommandError(output, context);
  }
  const contents: DescribeComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    componentName: undefined,
    componentVersion: undefined,
    creationTimestamp: undefined,
    description: undefined,
    platforms: undefined,
    publisher: undefined,
    status: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.componentName !== undefined && data.componentName !== null) {
    contents.componentName = data.componentName;
  }
  if (data.componentVersion !== undefined && data.componentVersion !== null) {
    contents.componentVersion = data.componentVersion;
  }
  if (data.creationTimestamp !== undefined && data.creationTimestamp !== null) {
    contents.creationTimestamp = new Date(Math.round(data.creationTimestamp * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.platforms !== undefined && data.platforms !== null) {
    contents.platforms = deserializeAws_restJson1ComponentPlatformList(data.platforms, context);
  }
  if (data.publisher !== undefined && data.publisher !== null) {
    contents.publisher = data.publisher;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = deserializeAws_restJson1CloudComponentStatus(data.status, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetComponentCommandError(output, context);
  }
  const contents: GetComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    recipe: undefined,
    recipeOutputFormat: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.recipe !== undefined && data.recipe !== null) {
    contents.recipe = context.base64Decoder(data.recipe);
  }
  if (data.recipeOutputFormat !== undefined && data.recipeOutputFormat !== null) {
    contents.recipeOutputFormat = data.recipeOutputFormat;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetComponentVersionArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentVersionArtifactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetComponentVersionArtifactCommandError(output, context);
  }
  const contents: GetComponentVersionArtifactCommandOutput = {
    $metadata: deserializeMetadata(output),
    preSignedUrl: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.preSignedUrl !== undefined && data.preSignedUrl !== null) {
    contents.preSignedUrl = data.preSignedUrl;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetComponentVersionArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentVersionArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreDeviceCommandError(output, context);
  }
  const contents: GetCoreDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    architecture: undefined,
    coreDeviceThingName: undefined,
    coreVersion: undefined,
    lastStatusUpdateTimestamp: undefined,
    platform: undefined,
    status: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.architecture !== undefined && data.architecture !== null) {
    contents.architecture = data.architecture;
  }
  if (data.coreDeviceThingName !== undefined && data.coreDeviceThingName !== null) {
    contents.coreDeviceThingName = data.coreDeviceThingName;
  }
  if (data.coreVersion !== undefined && data.coreVersion !== null) {
    contents.coreVersion = data.coreVersion;
  }
  if (data.lastStatusUpdateTimestamp !== undefined && data.lastStatusUpdateTimestamp !== null) {
    contents.lastStatusUpdateTimestamp = new Date(Math.round(data.lastStatusUpdateTimestamp * 1000));
  }
  if (data.platform !== undefined && data.platform !== null) {
    contents.platform = data.platform;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCoreDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentCommandError(output, context);
  }
  const contents: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    components: undefined,
    creationTimestamp: undefined,
    deploymentId: undefined,
    deploymentName: undefined,
    deploymentPolicies: undefined,
    deploymentStatus: undefined,
    iotJobArn: undefined,
    iotJobConfiguration: undefined,
    iotJobId: undefined,
    isLatestForTarget: undefined,
    revisionId: undefined,
    tags: undefined,
    targetArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.components !== undefined && data.components !== null) {
    contents.components = deserializeAws_restJson1ComponentDeploymentSpecifications(data.components, context);
  }
  if (data.creationTimestamp !== undefined && data.creationTimestamp !== null) {
    contents.creationTimestamp = new Date(Math.round(data.creationTimestamp * 1000));
  }
  if (data.deploymentId !== undefined && data.deploymentId !== null) {
    contents.deploymentId = data.deploymentId;
  }
  if (data.deploymentName !== undefined && data.deploymentName !== null) {
    contents.deploymentName = data.deploymentName;
  }
  if (data.deploymentPolicies !== undefined && data.deploymentPolicies !== null) {
    contents.deploymentPolicies = deserializeAws_restJson1DeploymentPolicies(data.deploymentPolicies, context);
  }
  if (data.deploymentStatus !== undefined && data.deploymentStatus !== null) {
    contents.deploymentStatus = data.deploymentStatus;
  }
  if (data.iotJobArn !== undefined && data.iotJobArn !== null) {
    contents.iotJobArn = data.iotJobArn;
  }
  if (data.iotJobConfiguration !== undefined && data.iotJobConfiguration !== null) {
    contents.iotJobConfiguration = deserializeAws_restJson1DeploymentIoTJobConfiguration(
      data.iotJobConfiguration,
      context
    );
  }
  if (data.iotJobId !== undefined && data.iotJobId !== null) {
    contents.iotJobId = data.iotJobId;
  }
  if (data.isLatestForTarget !== undefined && data.isLatestForTarget !== null) {
    contents.isLatestForTarget = data.isLatestForTarget;
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.targetArn !== undefined && data.targetArn !== null) {
    contents.targetArn = data.targetArn;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListComponentsCommandError(output, context);
  }
  const contents: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    components: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.components !== undefined && data.components !== null) {
    contents.components = deserializeAws_restJson1ComponentList(data.components, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListComponentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListComponentVersionsCommandError(output, context);
  }
  const contents: ListComponentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    componentVersions: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.componentVersions !== undefined && data.componentVersions !== null) {
    contents.componentVersions = deserializeAws_restJson1ComponentVersionList(data.componentVersions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListComponentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListCoreDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoreDevicesCommandError(output, context);
  }
  const contents: ListCoreDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    coreDevices: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.coreDevices !== undefined && data.coreDevices !== null) {
    contents.coreDevices = deserializeAws_restJson1CoreDevicesList(data.coreDevices, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCoreDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeploymentsCommandError(output, context);
  }
  const contents: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    deployments: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.deployments !== undefined && data.deployments !== null) {
    contents.deployments = deserializeAws_restJson1DeploymentList(data.deployments, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListEffectiveDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEffectiveDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEffectiveDeploymentsCommandError(output, context);
  }
  const contents: ListEffectiveDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    effectiveDeployments: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.effectiveDeployments !== undefined && data.effectiveDeployments !== null) {
    contents.effectiveDeployments = deserializeAws_restJson1EffectiveDeploymentsList(
      data.effectiveDeployments,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEffectiveDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEffectiveDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListInstalledComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstalledComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInstalledComponentsCommandError(output, context);
  }
  const contents: ListInstalledComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    installedComponents: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.installedComponents !== undefined && data.installedComponents !== null) {
    contents.installedComponents = deserializeAws_restJson1InstalledComponentList(data.installedComponents, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInstalledComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstalledComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ResolveComponentCandidatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveComponentCandidatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResolveComponentCandidatesCommandError(output, context);
  }
  const contents: ResolveComponentCandidatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    resolvedComponentVersions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.resolvedComponentVersions !== undefined && data.resolvedComponentVersions !== null) {
    contents.resolvedComponentVersions = deserializeAws_restJson1ResolvedComponentVersionsList(
      data.resolvedComponentVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ResolveComponentCandidatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveComponentCandidatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    quotaCode: undefined,
    resourceId: undefined,
    resourceType: undefined,
    serviceCode: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.quotaCode !== undefined && data.quotaCode !== null) {
    contents.quotaCode = data.quotaCode;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  if (data.serviceCode !== undefined && data.serviceCode !== null) {
    contents.serviceCode = data.serviceCode;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    quotaCode: undefined,
    retryAfterSeconds: undefined,
    serviceCode: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.quotaCode !== undefined && data.quotaCode !== null) {
    contents.quotaCode = data.quotaCode;
  }
  if (data.serviceCode !== undefined && data.serviceCode !== null) {
    contents.serviceCode = data.serviceCode;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    fields: undefined,
    message: undefined,
    reason: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.fields !== undefined && data.fields !== null) {
    contents.fields = deserializeAws_restJson1ValidationExceptionFieldList(data.fields, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = data.reason;
  }
  return contents;
};

const serializeAws_restJson1ComponentCandidate = (input: ComponentCandidate, context: __SerdeContext): any => {
  return {
    ...(input.componentName !== undefined && input.componentName !== null && { componentName: input.componentName }),
    ...(input.componentVersion !== undefined &&
      input.componentVersion !== null && { componentVersion: input.componentVersion }),
    ...(input.versionRequirements !== undefined &&
      input.versionRequirements !== null && {
        versionRequirements: serializeAws_restJson1ComponentVersionRequirementMap(input.versionRequirements, context),
      }),
  };
};

const serializeAws_restJson1ComponentCandidateList = (input: ComponentCandidate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ComponentCandidate(entry, context);
    });
};

const serializeAws_restJson1ComponentConfigurationPathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ComponentConfigurationUpdate = (
  input: ComponentConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.merge !== undefined && input.merge !== null && { merge: input.merge }),
    ...(input.reset !== undefined &&
      input.reset !== null && { reset: serializeAws_restJson1ComponentConfigurationPathList(input.reset, context) }),
  };
};

const serializeAws_restJson1ComponentDependencyMap = (
  input: { [key: string]: ComponentDependencyRequirement },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: ComponentDependencyRequirement }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_restJson1ComponentDependencyRequirement(value, context),
      };
    },
    {}
  );
};

const serializeAws_restJson1ComponentDependencyRequirement = (
  input: ComponentDependencyRequirement,
  context: __SerdeContext
): any => {
  return {
    ...(input.dependencyType !== undefined &&
      input.dependencyType !== null && { dependencyType: input.dependencyType }),
    ...(input.versionRequirement !== undefined &&
      input.versionRequirement !== null && { versionRequirement: input.versionRequirement }),
  };
};

const serializeAws_restJson1ComponentDeploymentSpecification = (
  input: ComponentDeploymentSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentVersion !== undefined &&
      input.componentVersion !== null && { componentVersion: input.componentVersion }),
    ...(input.configurationUpdate !== undefined &&
      input.configurationUpdate !== null && {
        configurationUpdate: serializeAws_restJson1ComponentConfigurationUpdate(input.configurationUpdate, context),
      }),
    ...(input.runWith !== undefined &&
      input.runWith !== null && { runWith: serializeAws_restJson1ComponentRunWith(input.runWith, context) }),
  };
};

const serializeAws_restJson1ComponentDeploymentSpecifications = (
  input: { [key: string]: ComponentDeploymentSpecification },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: ComponentDeploymentSpecification }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_restJson1ComponentDeploymentSpecification(value, context),
      };
    },
    {}
  );
};

const serializeAws_restJson1ComponentPlatform = (input: ComponentPlatform, context: __SerdeContext): any => {
  return {
    ...(input.attributes !== undefined &&
      input.attributes !== null && {
        attributes: serializeAws_restJson1PlatformAttributesMap(input.attributes, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1ComponentPlatformList = (input: ComponentPlatform[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ComponentPlatform(entry, context);
    });
};

const serializeAws_restJson1ComponentRunWith = (input: ComponentRunWith, context: __SerdeContext): any => {
  return {
    ...(input.posixUser !== undefined && input.posixUser !== null && { posixUser: input.posixUser }),
  };
};

const serializeAws_restJson1ComponentVersionRequirementMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1DeploymentComponentUpdatePolicy = (
  input: DeploymentComponentUpdatePolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
    ...(input.timeoutInSeconds !== undefined &&
      input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1DeploymentConfigurationValidationPolicy = (
  input: DeploymentConfigurationValidationPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeoutInSeconds !== undefined &&
      input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1DeploymentIoTJobConfiguration = (
  input: DeploymentIoTJobConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.abortConfig !== undefined &&
      input.abortConfig !== null && {
        abortConfig: serializeAws_restJson1IoTJobAbortConfig(input.abortConfig, context),
      }),
    ...(input.jobExecutionsRolloutConfig !== undefined &&
      input.jobExecutionsRolloutConfig !== null && {
        jobExecutionsRolloutConfig: serializeAws_restJson1IoTJobExecutionsRolloutConfig(
          input.jobExecutionsRolloutConfig,
          context
        ),
      }),
    ...(input.timeoutConfig !== undefined &&
      input.timeoutConfig !== null && {
        timeoutConfig: serializeAws_restJson1IoTJobTimeoutConfig(input.timeoutConfig, context),
      }),
  };
};

const serializeAws_restJson1DeploymentPolicies = (input: DeploymentPolicies, context: __SerdeContext): any => {
  return {
    ...(input.componentUpdatePolicy !== undefined &&
      input.componentUpdatePolicy !== null && {
        componentUpdatePolicy: serializeAws_restJson1DeploymentComponentUpdatePolicy(
          input.componentUpdatePolicy,
          context
        ),
      }),
    ...(input.configurationValidationPolicy !== undefined &&
      input.configurationValidationPolicy !== null && {
        configurationValidationPolicy: serializeAws_restJson1DeploymentConfigurationValidationPolicy(
          input.configurationValidationPolicy,
          context
        ),
      }),
    ...(input.failureHandlingPolicy !== undefined &&
      input.failureHandlingPolicy !== null && { failureHandlingPolicy: input.failureHandlingPolicy }),
  };
};

const serializeAws_restJson1IoTJobAbortConfig = (input: IoTJobAbortConfig, context: __SerdeContext): any => {
  return {
    ...(input.criteriaList !== undefined &&
      input.criteriaList !== null && {
        criteriaList: serializeAws_restJson1IoTJobAbortCriteriaList(input.criteriaList, context),
      }),
  };
};

const serializeAws_restJson1IoTJobAbortCriteria = (input: IoTJobAbortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.action !== undefined && input.action !== null && { action: input.action }),
    ...(input.failureType !== undefined && input.failureType !== null && { failureType: input.failureType }),
    ...(input.minNumberOfExecutedThings !== undefined &&
      input.minNumberOfExecutedThings !== null && { minNumberOfExecutedThings: input.minNumberOfExecutedThings }),
    ...(input.thresholdPercentage !== undefined &&
      input.thresholdPercentage !== null && { thresholdPercentage: input.thresholdPercentage }),
  };
};

const serializeAws_restJson1IoTJobAbortCriteriaList = (input: IoTJobAbortCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1IoTJobAbortCriteria(entry, context);
    });
};

const serializeAws_restJson1IoTJobExecutionsRolloutConfig = (
  input: IoTJobExecutionsRolloutConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.exponentialRate !== undefined &&
      input.exponentialRate !== null && {
        exponentialRate: serializeAws_restJson1IoTJobExponentialRolloutRate(input.exponentialRate, context),
      }),
    ...(input.maximumPerMinute !== undefined &&
      input.maximumPerMinute !== null && { maximumPerMinute: input.maximumPerMinute }),
  };
};

const serializeAws_restJson1IoTJobExponentialRolloutRate = (
  input: IoTJobExponentialRolloutRate,
  context: __SerdeContext
): any => {
  return {
    ...(input.baseRatePerMinute !== undefined &&
      input.baseRatePerMinute !== null && { baseRatePerMinute: input.baseRatePerMinute }),
    ...(input.incrementFactor !== undefined &&
      input.incrementFactor !== null && { incrementFactor: input.incrementFactor }),
    ...(input.rateIncreaseCriteria !== undefined &&
      input.rateIncreaseCriteria !== null && {
        rateIncreaseCriteria: serializeAws_restJson1IoTJobRateIncreaseCriteria(input.rateIncreaseCriteria, context),
      }),
  };
};

const serializeAws_restJson1IoTJobRateIncreaseCriteria = (
  input: IoTJobRateIncreaseCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.numberOfNotifiedThings !== undefined &&
      input.numberOfNotifiedThings !== null && { numberOfNotifiedThings: input.numberOfNotifiedThings }),
    ...(input.numberOfSucceededThings !== undefined &&
      input.numberOfSucceededThings !== null && { numberOfSucceededThings: input.numberOfSucceededThings }),
  };
};

const serializeAws_restJson1IoTJobTimeoutConfig = (input: IoTJobTimeoutConfig, context: __SerdeContext): any => {
  return {
    ...(input.inProgressTimeoutInMinutes !== undefined &&
      input.inProgressTimeoutInMinutes !== null && { inProgressTimeoutInMinutes: input.inProgressTimeoutInMinutes }),
  };
};

const serializeAws_restJson1LambdaContainerParams = (input: LambdaContainerParams, context: __SerdeContext): any => {
  return {
    ...(input.devices !== undefined &&
      input.devices !== null && { devices: serializeAws_restJson1LambdaDeviceList(input.devices, context) }),
    ...(input.memorySizeInKB !== undefined &&
      input.memorySizeInKB !== null && { memorySizeInKB: input.memorySizeInKB }),
    ...(input.mountROSysfs !== undefined && input.mountROSysfs !== null && { mountROSysfs: input.mountROSysfs }),
    ...(input.volumes !== undefined &&
      input.volumes !== null && { volumes: serializeAws_restJson1LambdaVolumeList(input.volumes, context) }),
  };
};

const serializeAws_restJson1LambdaDeviceList = (input: LambdaDeviceMount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LambdaDeviceMount(entry, context);
    });
};

const serializeAws_restJson1LambdaDeviceMount = (input: LambdaDeviceMount, context: __SerdeContext): any => {
  return {
    ...(input.addGroupOwner !== undefined && input.addGroupOwner !== null && { addGroupOwner: input.addGroupOwner }),
    ...(input.path !== undefined && input.path !== null && { path: input.path }),
    ...(input.permission !== undefined && input.permission !== null && { permission: input.permission }),
  };
};

const serializeAws_restJson1LambdaEnvironmentVariables = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1LambdaEventSource = (input: LambdaEventSource, context: __SerdeContext): any => {
  return {
    ...(input.topic !== undefined && input.topic !== null && { topic: input.topic }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1LambdaEventSourceList = (input: LambdaEventSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LambdaEventSource(entry, context);
    });
};

const serializeAws_restJson1LambdaExecArgsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LambdaExecutionParameters = (
  input: LambdaExecutionParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentVariables !== undefined &&
      input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1LambdaEnvironmentVariables(input.environmentVariables, context),
      }),
    ...(input.eventSources !== undefined &&
      input.eventSources !== null && {
        eventSources: serializeAws_restJson1LambdaEventSourceList(input.eventSources, context),
      }),
    ...(input.execArgs !== undefined &&
      input.execArgs !== null && { execArgs: serializeAws_restJson1LambdaExecArgsList(input.execArgs, context) }),
    ...(input.inputPayloadEncodingType !== undefined &&
      input.inputPayloadEncodingType !== null && { inputPayloadEncodingType: input.inputPayloadEncodingType }),
    ...(input.linuxProcessParams !== undefined &&
      input.linuxProcessParams !== null && {
        linuxProcessParams: serializeAws_restJson1LambdaLinuxProcessParams(input.linuxProcessParams, context),
      }),
    ...(input.maxIdleTimeInSeconds !== undefined &&
      input.maxIdleTimeInSeconds !== null && { maxIdleTimeInSeconds: input.maxIdleTimeInSeconds }),
    ...(input.maxInstancesCount !== undefined &&
      input.maxInstancesCount !== null && { maxInstancesCount: input.maxInstancesCount }),
    ...(input.maxQueueSize !== undefined && input.maxQueueSize !== null && { maxQueueSize: input.maxQueueSize }),
    ...(input.pinned !== undefined && input.pinned !== null && { pinned: input.pinned }),
    ...(input.statusTimeoutInSeconds !== undefined &&
      input.statusTimeoutInSeconds !== null && { statusTimeoutInSeconds: input.statusTimeoutInSeconds }),
    ...(input.timeoutInSeconds !== undefined &&
      input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1LambdaFunctionRecipeSource = (
  input: LambdaFunctionRecipeSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentDependencies !== undefined &&
      input.componentDependencies !== null && {
        componentDependencies: serializeAws_restJson1ComponentDependencyMap(input.componentDependencies, context),
      }),
    ...(input.componentLambdaParameters !== undefined &&
      input.componentLambdaParameters !== null && {
        componentLambdaParameters: serializeAws_restJson1LambdaExecutionParameters(
          input.componentLambdaParameters,
          context
        ),
      }),
    ...(input.componentName !== undefined && input.componentName !== null && { componentName: input.componentName }),
    ...(input.componentPlatforms !== undefined &&
      input.componentPlatforms !== null && {
        componentPlatforms: serializeAws_restJson1ComponentPlatformList(input.componentPlatforms, context),
      }),
    ...(input.componentVersion !== undefined &&
      input.componentVersion !== null && { componentVersion: input.componentVersion }),
    ...(input.lambdaArn !== undefined && input.lambdaArn !== null && { lambdaArn: input.lambdaArn }),
  };
};

const serializeAws_restJson1LambdaLinuxProcessParams = (
  input: LambdaLinuxProcessParams,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerParams !== undefined &&
      input.containerParams !== null && {
        containerParams: serializeAws_restJson1LambdaContainerParams(input.containerParams, context),
      }),
    ...(input.isolationMode !== undefined && input.isolationMode !== null && { isolationMode: input.isolationMode }),
  };
};

const serializeAws_restJson1LambdaVolumeList = (input: LambdaVolumeMount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LambdaVolumeMount(entry, context);
    });
};

const serializeAws_restJson1LambdaVolumeMount = (input: LambdaVolumeMount, context: __SerdeContext): any => {
  return {
    ...(input.addGroupOwner !== undefined && input.addGroupOwner !== null && { addGroupOwner: input.addGroupOwner }),
    ...(input.destinationPath !== undefined &&
      input.destinationPath !== null && { destinationPath: input.destinationPath }),
    ...(input.permission !== undefined && input.permission !== null && { permission: input.permission }),
    ...(input.sourcePath !== undefined && input.sourcePath !== null && { sourcePath: input.sourcePath }),
  };
};

const serializeAws_restJson1PlatformAttributesMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1CloudComponentStatus = (output: any, context: __SerdeContext): CloudComponentStatus => {
  return {
    componentState:
      output.componentState !== undefined && output.componentState !== null ? output.componentState : undefined,
    errors:
      output.errors !== undefined && output.errors !== null
        ? deserializeAws_restJson1StringMap(output.errors, context)
        : undefined,
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
  } as any;
};

const deserializeAws_restJson1Component = (output: any, context: __SerdeContext): Component => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    componentName:
      output.componentName !== undefined && output.componentName !== null ? output.componentName : undefined,
    latestVersion:
      output.latestVersion !== undefined && output.latestVersion !== null
        ? deserializeAws_restJson1ComponentLatestVersion(output.latestVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentConfigurationPathList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1ComponentConfigurationUpdate = (
  output: any,
  context: __SerdeContext
): ComponentConfigurationUpdate => {
  return {
    merge: output.merge !== undefined && output.merge !== null ? output.merge : undefined,
    reset:
      output.reset !== undefined && output.reset !== null
        ? deserializeAws_restJson1ComponentConfigurationPathList(output.reset, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentDeploymentSpecification = (
  output: any,
  context: __SerdeContext
): ComponentDeploymentSpecification => {
  return {
    componentVersion:
      output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
    configurationUpdate:
      output.configurationUpdate !== undefined && output.configurationUpdate !== null
        ? deserializeAws_restJson1ComponentConfigurationUpdate(output.configurationUpdate, context)
        : undefined,
    runWith:
      output.runWith !== undefined && output.runWith !== null
        ? deserializeAws_restJson1ComponentRunWith(output.runWith, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentDeploymentSpecifications = (
  output: any,
  context: __SerdeContext
): { [key: string]: ComponentDeploymentSpecification } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: ComponentDeploymentSpecification }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1ComponentDeploymentSpecification(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1ComponentLatestVersion = (
  output: any,
  context: __SerdeContext
): ComponentLatestVersion => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    componentVersion:
      output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
    creationTimestamp:
      output.creationTimestamp !== undefined && output.creationTimestamp !== null
        ? new Date(Math.round(output.creationTimestamp * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    platforms:
      output.platforms !== undefined && output.platforms !== null
        ? deserializeAws_restJson1ComponentPlatformList(output.platforms, context)
        : undefined,
    publisher: output.publisher !== undefined && output.publisher !== null ? output.publisher : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentList = (output: any, context: __SerdeContext): Component[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Component(entry, context);
    });
};

const deserializeAws_restJson1ComponentPlatform = (output: any, context: __SerdeContext): ComponentPlatform => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1PlatformAttributesMap(output.attributes, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentPlatformList = (output: any, context: __SerdeContext): ComponentPlatform[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentPlatform(entry, context);
    });
};

const deserializeAws_restJson1ComponentRunWith = (output: any, context: __SerdeContext): ComponentRunWith => {
  return {
    posixUser: output.posixUser !== undefined && output.posixUser !== null ? output.posixUser : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentVersionList = (
  output: any,
  context: __SerdeContext
): ComponentVersionListItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentVersionListItem(entry, context);
    });
};

const deserializeAws_restJson1ComponentVersionListItem = (
  output: any,
  context: __SerdeContext
): ComponentVersionListItem => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    componentName:
      output.componentName !== undefined && output.componentName !== null ? output.componentName : undefined,
    componentVersion:
      output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
  } as any;
};

const deserializeAws_restJson1CoreDevice = (output: any, context: __SerdeContext): CoreDevice => {
  return {
    coreDeviceThingName:
      output.coreDeviceThingName !== undefined && output.coreDeviceThingName !== null
        ? output.coreDeviceThingName
        : undefined,
    lastStatusUpdateTimestamp:
      output.lastStatusUpdateTimestamp !== undefined && output.lastStatusUpdateTimestamp !== null
        ? new Date(Math.round(output.lastStatusUpdateTimestamp * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1CoreDevicesList = (output: any, context: __SerdeContext): CoreDevice[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreDevice(entry, context);
    });
};

const deserializeAws_restJson1Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    creationTimestamp:
      output.creationTimestamp !== undefined && output.creationTimestamp !== null
        ? new Date(Math.round(output.creationTimestamp * 1000))
        : undefined,
    deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    deploymentName:
      output.deploymentName !== undefined && output.deploymentName !== null ? output.deploymentName : undefined,
    deploymentStatus:
      output.deploymentStatus !== undefined && output.deploymentStatus !== null ? output.deploymentStatus : undefined,
    isLatestForTarget:
      output.isLatestForTarget !== undefined && output.isLatestForTarget !== null
        ? output.isLatestForTarget
        : undefined,
    revisionId: output.revisionId !== undefined && output.revisionId !== null ? output.revisionId : undefined,
    targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentComponentUpdatePolicy = (
  output: any,
  context: __SerdeContext
): DeploymentComponentUpdatePolicy => {
  return {
    action: output.action !== undefined && output.action !== null ? output.action : undefined,
    timeoutInSeconds:
      output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentConfigurationValidationPolicy = (
  output: any,
  context: __SerdeContext
): DeploymentConfigurationValidationPolicy => {
  return {
    timeoutInSeconds:
      output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentIoTJobConfiguration = (
  output: any,
  context: __SerdeContext
): DeploymentIoTJobConfiguration => {
  return {
    abortConfig:
      output.abortConfig !== undefined && output.abortConfig !== null
        ? deserializeAws_restJson1IoTJobAbortConfig(output.abortConfig, context)
        : undefined,
    jobExecutionsRolloutConfig:
      output.jobExecutionsRolloutConfig !== undefined && output.jobExecutionsRolloutConfig !== null
        ? deserializeAws_restJson1IoTJobExecutionsRolloutConfig(output.jobExecutionsRolloutConfig, context)
        : undefined,
    timeoutConfig:
      output.timeoutConfig !== undefined && output.timeoutConfig !== null
        ? deserializeAws_restJson1IoTJobTimeoutConfig(output.timeoutConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentList = (output: any, context: __SerdeContext): Deployment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Deployment(entry, context);
    });
};

const deserializeAws_restJson1DeploymentPolicies = (output: any, context: __SerdeContext): DeploymentPolicies => {
  return {
    componentUpdatePolicy:
      output.componentUpdatePolicy !== undefined && output.componentUpdatePolicy !== null
        ? deserializeAws_restJson1DeploymentComponentUpdatePolicy(output.componentUpdatePolicy, context)
        : undefined,
    configurationValidationPolicy:
      output.configurationValidationPolicy !== undefined && output.configurationValidationPolicy !== null
        ? deserializeAws_restJson1DeploymentConfigurationValidationPolicy(output.configurationValidationPolicy, context)
        : undefined,
    failureHandlingPolicy:
      output.failureHandlingPolicy !== undefined && output.failureHandlingPolicy !== null
        ? output.failureHandlingPolicy
        : undefined,
  } as any;
};

const deserializeAws_restJson1EffectiveDeployment = (output: any, context: __SerdeContext): EffectiveDeployment => {
  return {
    coreDeviceExecutionStatus:
      output.coreDeviceExecutionStatus !== undefined && output.coreDeviceExecutionStatus !== null
        ? output.coreDeviceExecutionStatus
        : undefined,
    creationTimestamp:
      output.creationTimestamp !== undefined && output.creationTimestamp !== null
        ? new Date(Math.round(output.creationTimestamp * 1000))
        : undefined,
    deploymentId: output.deploymentId !== undefined && output.deploymentId !== null ? output.deploymentId : undefined,
    deploymentName:
      output.deploymentName !== undefined && output.deploymentName !== null ? output.deploymentName : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    iotJobArn: output.iotJobArn !== undefined && output.iotJobArn !== null ? output.iotJobArn : undefined,
    iotJobId: output.iotJobId !== undefined && output.iotJobId !== null ? output.iotJobId : undefined,
    modifiedTimestamp:
      output.modifiedTimestamp !== undefined && output.modifiedTimestamp !== null
        ? new Date(Math.round(output.modifiedTimestamp * 1000))
        : undefined,
    reason: output.reason !== undefined && output.reason !== null ? output.reason : undefined,
    targetArn: output.targetArn !== undefined && output.targetArn !== null ? output.targetArn : undefined,
  } as any;
};

const deserializeAws_restJson1EffectiveDeploymentsList = (
  output: any,
  context: __SerdeContext
): EffectiveDeployment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EffectiveDeployment(entry, context);
    });
};

const deserializeAws_restJson1InstalledComponent = (output: any, context: __SerdeContext): InstalledComponent => {
  return {
    componentName:
      output.componentName !== undefined && output.componentName !== null ? output.componentName : undefined,
    componentVersion:
      output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
    isRoot: output.isRoot !== undefined && output.isRoot !== null ? output.isRoot : undefined,
    lifecycleState:
      output.lifecycleState !== undefined && output.lifecycleState !== null ? output.lifecycleState : undefined,
    lifecycleStateDetails:
      output.lifecycleStateDetails !== undefined && output.lifecycleStateDetails !== null
        ? output.lifecycleStateDetails
        : undefined,
  } as any;
};

const deserializeAws_restJson1InstalledComponentList = (output: any, context: __SerdeContext): InstalledComponent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstalledComponent(entry, context);
    });
};

const deserializeAws_restJson1IoTJobAbortConfig = (output: any, context: __SerdeContext): IoTJobAbortConfig => {
  return {
    criteriaList:
      output.criteriaList !== undefined && output.criteriaList !== null
        ? deserializeAws_restJson1IoTJobAbortCriteriaList(output.criteriaList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IoTJobAbortCriteria = (output: any, context: __SerdeContext): IoTJobAbortCriteria => {
  return {
    action: output.action !== undefined && output.action !== null ? output.action : undefined,
    failureType: output.failureType !== undefined && output.failureType !== null ? output.failureType : undefined,
    minNumberOfExecutedThings:
      output.minNumberOfExecutedThings !== undefined && output.minNumberOfExecutedThings !== null
        ? output.minNumberOfExecutedThings
        : undefined,
    thresholdPercentage:
      output.thresholdPercentage !== undefined && output.thresholdPercentage !== null
        ? output.thresholdPercentage
        : undefined,
  } as any;
};

const deserializeAws_restJson1IoTJobAbortCriteriaList = (
  output: any,
  context: __SerdeContext
): IoTJobAbortCriteria[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IoTJobAbortCriteria(entry, context);
    });
};

const deserializeAws_restJson1IoTJobExecutionsRolloutConfig = (
  output: any,
  context: __SerdeContext
): IoTJobExecutionsRolloutConfig => {
  return {
    exponentialRate:
      output.exponentialRate !== undefined && output.exponentialRate !== null
        ? deserializeAws_restJson1IoTJobExponentialRolloutRate(output.exponentialRate, context)
        : undefined,
    maximumPerMinute:
      output.maximumPerMinute !== undefined && output.maximumPerMinute !== null ? output.maximumPerMinute : undefined,
  } as any;
};

const deserializeAws_restJson1IoTJobExponentialRolloutRate = (
  output: any,
  context: __SerdeContext
): IoTJobExponentialRolloutRate => {
  return {
    baseRatePerMinute:
      output.baseRatePerMinute !== undefined && output.baseRatePerMinute !== null
        ? output.baseRatePerMinute
        : undefined,
    incrementFactor:
      output.incrementFactor !== undefined && output.incrementFactor !== null ? output.incrementFactor : undefined,
    rateIncreaseCriteria:
      output.rateIncreaseCriteria !== undefined && output.rateIncreaseCriteria !== null
        ? deserializeAws_restJson1IoTJobRateIncreaseCriteria(output.rateIncreaseCriteria, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IoTJobRateIncreaseCriteria = (
  output: any,
  context: __SerdeContext
): IoTJobRateIncreaseCriteria => {
  return {
    numberOfNotifiedThings:
      output.numberOfNotifiedThings !== undefined && output.numberOfNotifiedThings !== null
        ? output.numberOfNotifiedThings
        : undefined,
    numberOfSucceededThings:
      output.numberOfSucceededThings !== undefined && output.numberOfSucceededThings !== null
        ? output.numberOfSucceededThings
        : undefined,
  } as any;
};

const deserializeAws_restJson1IoTJobTimeoutConfig = (output: any, context: __SerdeContext): IoTJobTimeoutConfig => {
  return {
    inProgressTimeoutInMinutes:
      output.inProgressTimeoutInMinutes !== undefined && output.inProgressTimeoutInMinutes !== null
        ? output.inProgressTimeoutInMinutes
        : undefined,
  } as any;
};

const deserializeAws_restJson1PlatformAttributesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ResolvedComponentVersion = (
  output: any,
  context: __SerdeContext
): ResolvedComponentVersion => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    componentName:
      output.componentName !== undefined && output.componentName !== null ? output.componentName : undefined,
    componentVersion:
      output.componentVersion !== undefined && output.componentVersion !== null ? output.componentVersion : undefined,
    recipe: output.recipe !== undefined && output.recipe !== null ? context.base64Decoder(output.recipe) : undefined,
  } as any;
};

const deserializeAws_restJson1ResolvedComponentVersionsList = (
  output: any,
  context: __SerdeContext
): ResolvedComponentVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResolvedComponentVersion(entry, context);
    });
};

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: output.message !== undefined && output.message !== null ? output.message : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
