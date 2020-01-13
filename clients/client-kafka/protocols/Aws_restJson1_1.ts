import {
  CreateClusterCommandInput,
  CreateClusterCommandOutput
} from "../commands/CreateClusterCommand";
import {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput
} from "../commands/CreateConfigurationCommand";
import {
  DeleteClusterCommandInput,
  DeleteClusterCommandOutput
} from "../commands/DeleteClusterCommand";
import {
  DescribeClusterCommandInput,
  DescribeClusterCommandOutput
} from "../commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput
} from "../commands/DescribeClusterOperationCommand";
import {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput
} from "../commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput
} from "../commands/DescribeConfigurationRevisionCommand";
import {
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput
} from "../commands/GetBootstrapBrokersCommand";
import {
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput
} from "../commands/ListClusterOperationsCommand";
import {
  ListClustersCommandInput,
  ListClustersCommandOutput
} from "../commands/ListClustersCommand";
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput
} from "../commands/ListConfigurationRevisionsCommand";
import {
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
} from "../commands/ListConfigurationsCommand";
import {
  ListNodesCommandInput,
  ListNodesCommandOutput
} from "../commands/ListNodesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput
} from "../commands/UpdateBrokerCountCommand";
import {
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput
} from "../commands/UpdateBrokerStorageCommand";
import {
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput
} from "../commands/UpdateClusterConfigurationCommand";
import {
  BadRequestException,
  BrokerEBSVolumeInfo,
  BrokerNodeGroupInfo,
  BrokerNodeInfo,
  BrokerSoftwareInfo,
  ClientAuthentication,
  ClusterInfo,
  ClusterOperationInfo,
  Configuration,
  ConfigurationInfo,
  ConfigurationRevision,
  ConflictException,
  EBSStorageInfo,
  EncryptionAtRest,
  EncryptionInTransit,
  EncryptionInfo,
  ErrorInfo,
  ForbiddenException,
  InternalServerErrorException,
  MutableClusterInfo,
  NodeInfo,
  NotFoundException,
  ServiceUnavailableException,
  StorageInfo,
  Tls,
  TooManyRequestsException,
  UnauthorizedException,
  ZookeeperNodeInfo
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateClusterCommand(
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/clusters";
  let body: any = {};
  const bodyParams: any = {};
  if (input.BrokerNodeGroupInfo !== undefined) {
    bodyParams[
      "brokerNodeGroupInfo"
    ] = serializeAws_restJson1_1BrokerNodeGroupInfo(
      input.BrokerNodeGroupInfo,
      context
    );
  }
  if (input.ClientAuthentication !== undefined) {
    bodyParams[
      "clientAuthentication"
    ] = serializeAws_restJson1_1ClientAuthentication(
      input.ClientAuthentication,
      context
    );
  }
  if (input.ClusterName !== undefined) {
    bodyParams["clusterName"] = input.ClusterName;
  }
  if (input.ConfigurationInfo !== undefined) {
    bodyParams["configurationInfo"] = serializeAws_restJson1_1ConfigurationInfo(
      input.ConfigurationInfo,
      context
    );
  }
  if (input.EncryptionInfo !== undefined) {
    bodyParams["encryptionInfo"] = serializeAws_restJson1_1EncryptionInfo(
      input.EncryptionInfo,
      context
    );
  }
  if (input.EnhancedMonitoring !== undefined) {
    bodyParams["enhancedMonitoring"] = input.EnhancedMonitoring;
  }
  if (input.KafkaVersion !== undefined) {
    bodyParams["kafkaVersion"] = input.KafkaVersion;
  }
  if (input.NumberOfBrokerNodes !== undefined) {
    bodyParams["numberOfBrokerNodes"] = input.NumberOfBrokerNodes;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
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

export async function serializeAws_restJson1_1CreateConfigurationCommand(
  input: CreateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/configurations";
  let body: any = {};
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
  }
  if (input.KafkaVersions !== undefined) {
    bodyParams["kafkaVersions"] = serializeAws_restJson1_1__listOf__string(
      input.KafkaVersions,
      context
    );
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.ServerProperties !== undefined) {
    bodyParams["serverProperties"] = context.base64Encoder(
      input.ServerProperties
    );
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

export async function serializeAws_restJson1_1DeleteClusterCommand(
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/clusters/{ClusterArn}";
  if (input.ClusterArn !== undefined) {
    const labelValue: any = input.ClusterArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {};
  if (input.CurrentVersion !== undefined) {
    query["currentVersion"] = input.CurrentVersion.toString();
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

export async function serializeAws_restJson1_1DescribeClusterCommand(
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/clusters/{ClusterArn}";
  if (input.ClusterArn !== undefined) {
    const labelValue: any = input.ClusterArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeClusterOperationCommand(
  input: DescribeClusterOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/operations/{ClusterOperationArn}";
  if (input.ClusterOperationArn !== undefined) {
    const labelValue: any = input.ClusterOperationArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ClusterOperationArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ClusterOperationArn}", labelValue);
  } else {
    throw new Error(
      "No value provided for input HTTP label: ClusterOperationArn."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeConfigurationCommand(
  input: DescribeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/configurations/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: any = input.Arn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeConfigurationRevisionCommand(
  input: DescribeConfigurationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/configurations/{Arn}/revisions/{Revision}";
  if (input.Arn !== undefined) {
    const labelValue: any = input.Arn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  if (input.Revision !== undefined) {
    const labelValue: any = input.Revision.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Revision.");
    }
    resolvedPath = resolvedPath.replace("{Revision}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Revision.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBootstrapBrokersCommand(
  input: GetBootstrapBrokersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/clusters/{ClusterArn}/bootstrap-brokers";
  if (input.ClusterArn !== undefined) {
    const labelValue: any = input.ClusterArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListClusterOperationsCommand(
  input: ListClusterOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/clusters/{ClusterArn}/operations";
  if (input.ClusterArn !== undefined) {
    const labelValue: any = input.ClusterArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListClustersCommand(
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/clusters";
  const query: any = {};
  if (input.ClusterNameFilter !== undefined) {
    query["clusterNameFilter"] = input.ClusterNameFilter.toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListConfigurationRevisionsCommand(
  input: ListConfigurationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/configurations/{Arn}/revisions";
  if (input.Arn !== undefined) {
    const labelValue: any = input.Arn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListConfigurationsCommand(
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/configurations";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListNodesCommand(
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/clusters/{ClusterArn}/nodes";
  if (input.ClusterArn !== undefined) {
    const labelValue: any = input.ClusterArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken.toString();
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

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
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
  let resolvedPath = "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: any = input.ResourceArn.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = input.TagKeys;
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

export async function serializeAws_restJson1_1UpdateBrokerCountCommand(
  input: UpdateBrokerCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/clusters/{ClusterArn}/nodes/count";
  if (input.ClusterArn !== undefined) {
    const labelValue: any = input.ClusterArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.CurrentVersion !== undefined) {
    bodyParams["currentVersion"] = input.CurrentVersion;
  }
  if (input.TargetNumberOfBrokerNodes !== undefined) {
    bodyParams["targetNumberOfBrokerNodes"] = input.TargetNumberOfBrokerNodes;
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

export async function serializeAws_restJson1_1UpdateBrokerStorageCommand(
  input: UpdateBrokerStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/clusters/{ClusterArn}/nodes/storage";
  if (input.ClusterArn !== undefined) {
    const labelValue: any = input.ClusterArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.CurrentVersion !== undefined) {
    bodyParams["currentVersion"] = input.CurrentVersion;
  }
  if (input.TargetBrokerEBSVolumeInfo !== undefined) {
    bodyParams[
      "targetBrokerEBSVolumeInfo"
    ] = serializeAws_restJson1_1__listOfBrokerEBSVolumeInfo(
      input.TargetBrokerEBSVolumeInfo,
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

export async function serializeAws_restJson1_1UpdateClusterConfigurationCommand(
  input: UpdateClusterConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/clusters/{ClusterArn}/configuration";
  if (input.ClusterArn !== undefined) {
    const labelValue: any = input.ClusterArn.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", labelValue);
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any = {};
  const bodyParams: any = {};
  if (input.ConfigurationInfo !== undefined) {
    bodyParams["configurationInfo"] = serializeAws_restJson1_1ConfigurationInfo(
      input.ConfigurationInfo,
      context
    );
  }
  if (input.CurrentVersion !== undefined) {
    bodyParams["currentVersion"] = input.CurrentVersion;
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

export async function deserializeAws_restJson1_1CreateClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateClusterCommandError(output, context);
  }
  const contents: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateClusterResponse",
    ClusterArn: undefined,
    ClusterName: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined) {
    contents.ClusterArn = data.clusterArn;
  }
  if (data.clusterName !== undefined) {
    contents.ClusterName = data.clusterName;
  }
  if (data.state !== undefined) {
    contents.State = data.state;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1CreateConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateConfigurationCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationResponse",
    Arn: undefined,
    CreationTime: undefined,
    LatestRevision: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.creationTime !== undefined) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.latestRevision !== undefined) {
    contents.LatestRevision = deserializeAws_restJson1_1ConfigurationRevision(
      data.latestRevision,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DeleteClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteClusterCommandError(output, context);
  }
  const contents: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteClusterResponse",
    ClusterArn: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined) {
    contents.ClusterArn = data.clusterArn;
  }
  if (data.state !== undefined) {
    contents.State = data.state;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeClusterCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeClusterCommandError(
      output,
      context
    );
  }
  const contents: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClusterResponse",
    ClusterInfo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterInfo !== undefined) {
    contents.ClusterInfo = deserializeAws_restJson1_1ClusterInfo(
      data.clusterInfo,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeClusterCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeClusterOperationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeClusterOperationCommandError(
      output,
      context
    );
  }
  const contents: DescribeClusterOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeClusterOperationResponse",
    ClusterOperationInfo: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterOperationInfo !== undefined) {
    contents.ClusterOperationInfo = deserializeAws_restJson1_1ClusterOperationInfo(
      data.clusterOperationInfo,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeClusterOperationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConfigurationResponse",
    Arn: undefined,
    CreationTime: undefined,
    Description: undefined,
    KafkaVersions: undefined,
    LatestRevision: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.creationTime !== undefined) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.kafkaVersions !== undefined) {
    contents.KafkaVersions = deserializeAws_restJson1_1__listOf__string(
      data.kafkaVersions,
      context
    );
  }
  if (data.latestRevision !== undefined) {
    contents.LatestRevision = deserializeAws_restJson1_1ConfigurationRevision(
      data.latestRevision,
      context
    );
  }
  if (data.name !== undefined) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1DescribeConfigurationRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeConfigurationRevisionCommandError(
      output,
      context
    );
  }
  const contents: DescribeConfigurationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConfigurationRevisionResponse",
    Arn: undefined,
    CreationTime: undefined,
    Description: undefined,
    Revision: undefined,
    ServerProperties: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined) {
    contents.Arn = data.arn;
  }
  if (data.creationTime !== undefined) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.description !== undefined) {
    contents.Description = data.description;
  }
  if (data.revision !== undefined) {
    contents.Revision = data.revision;
  }
  if (data.serverProperties !== undefined) {
    contents.ServerProperties = context.base64Decoder(data.serverProperties);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeConfigurationRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1GetBootstrapBrokersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBootstrapBrokersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBootstrapBrokersCommandError(
      output,
      context
    );
  }
  const contents: GetBootstrapBrokersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBootstrapBrokersResponse",
    BootstrapBrokerString: undefined,
    BootstrapBrokerStringTls: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.bootstrapBrokerString !== undefined) {
    contents.BootstrapBrokerString = data.bootstrapBrokerString;
  }
  if (data.bootstrapBrokerStringTls !== undefined) {
    contents.BootstrapBrokerStringTls = data.bootstrapBrokerStringTls;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBootstrapBrokersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBootstrapBrokersCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = await deserializeAws_restJson1_1ConflictExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListClusterOperationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListClusterOperationsCommandError(
      output,
      context
    );
  }
  const contents: ListClusterOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClusterOperationsResponse",
    ClusterOperationInfoList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterOperationInfoList !== undefined) {
    contents.ClusterOperationInfoList = deserializeAws_restJson1_1__listOfClusterOperationInfo(
      data.clusterOperationInfoList,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListClusterOperationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListClustersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListClustersCommandError(output, context);
  }
  const contents: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListClustersResponse",
    ClusterInfoList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterInfoList !== undefined) {
    contents.ClusterInfoList = deserializeAws_restJson1_1__listOfClusterInfo(
      data.clusterInfoList,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListClustersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListConfigurationRevisionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListConfigurationRevisionsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationRevisionsResponse",
    NextToken: undefined,
    Revisions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  if (data.revisions !== undefined) {
    contents.Revisions = deserializeAws_restJson1_1__listOfConfigurationRevision(
      data.revisions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListConfigurationRevisionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListConfigurationsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationsResponse",
    Configurations: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurations !== undefined) {
    contents.Configurations = deserializeAws_restJson1_1__listOfConfiguration(
      data.configurations,
      context
    );
  }
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1ListNodesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListNodesCommandError(output, context);
  }
  const contents: ListNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNodesResponse",
    NextToken: undefined,
    NodeInfoList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined) {
    contents.NextToken = data.nextToken;
  }
  if (data.nodeInfoList !== undefined) {
    contents.NodeInfoList = deserializeAws_restJson1_1__listOfNodeInfo(
      data.nodeInfoList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListNodesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
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
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateBrokerCountCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCountCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateBrokerCountCommandError(
      output,
      context
    );
  }
  const contents: UpdateBrokerCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBrokerCountResponse",
    ClusterArn: undefined,
    ClusterOperationArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined) {
    contents.ClusterArn = data.clusterArn;
  }
  if (data.clusterOperationArn !== undefined) {
    contents.ClusterOperationArn = data.clusterOperationArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateBrokerCountCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCountCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateBrokerStorageCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerStorageCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateBrokerStorageCommandError(
      output,
      context
    );
  }
  const contents: UpdateBrokerStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBrokerStorageResponse",
    ClusterArn: undefined,
    ClusterOperationArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined) {
    contents.ClusterArn = data.clusterArn;
  }
  if (data.clusterOperationArn !== undefined) {
    contents.ClusterOperationArn = data.clusterOperationArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateBrokerStorageCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerStorageCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

export async function deserializeAws_restJson1_1UpdateClusterConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateClusterConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateClusterConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateClusterConfigurationResponse",
    ClusterArn: undefined,
    ClusterOperationArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined) {
    contents.ClusterArn = data.clusterArn;
  }
  if (data.clusterOperationArn !== undefined) {
    contents.ClusterOperationArn = data.clusterOperationArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateClusterConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer;
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = await deserializeAws_restJson1_1BadRequestExceptionResponse(
        output,
        context
      );
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = await deserializeAws_restJson1_1ForbiddenExceptionResponse(
        output,
        context
      );
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
        output,
        context
      );
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = await deserializeAws_restJson1_1NotFoundExceptionResponse(
        output,
        context
      );
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
        output,
        context
      );
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
        output,
        context
      );
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = errorCode || "UnknownError";
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        __type: `com.amazonaws.kafka#${errorCode}`,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  return Promise.reject(Object.assign(new Error(), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    __type: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.invalidParameter !== undefined) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    __type: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.invalidParameter !== undefined) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    __type: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.invalidParameter !== undefined) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    __type: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.invalidParameter !== undefined) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    __type: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.invalidParameter !== undefined) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    __type: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.invalidParameter !== undefined) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    __type: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.invalidParameter !== undefined) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    __type: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    InvalidParameter: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.invalidParameter !== undefined) {
    contents.InvalidParameter = data.invalidParameter;
  }
  if (data.message !== undefined) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1BrokerEBSVolumeInfo = (
  input: BrokerEBSVolumeInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.KafkaBrokerNodeId !== undefined) {
    bodyParams["kafkaBrokerNodeId"] = input.KafkaBrokerNodeId;
  }
  if (input.VolumeSizeGB !== undefined) {
    bodyParams["volumeSizeGB"] = input.VolumeSizeGB;
  }
  return bodyParams;
};

const serializeAws_restJson1_1BrokerNodeGroupInfo = (
  input: BrokerNodeGroupInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.BrokerAZDistribution !== undefined) {
    bodyParams["brokerAZDistribution"] = input.BrokerAZDistribution;
  }
  if (input.ClientSubnets !== undefined) {
    bodyParams["clientSubnets"] = serializeAws_restJson1_1__listOf__string(
      input.ClientSubnets,
      context
    );
  }
  if (input.InstanceType !== undefined) {
    bodyParams["instanceType"] = input.InstanceType;
  }
  if (input.SecurityGroups !== undefined) {
    bodyParams["securityGroups"] = serializeAws_restJson1_1__listOf__string(
      input.SecurityGroups,
      context
    );
  }
  if (input.StorageInfo !== undefined) {
    bodyParams["storageInfo"] = serializeAws_restJson1_1StorageInfo(
      input.StorageInfo,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1ClientAuthentication = (
  input: ClientAuthentication,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Tls !== undefined) {
    bodyParams["tls"] = serializeAws_restJson1_1Tls(input.Tls, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1ConfigurationInfo = (
  input: ConfigurationInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.Arn !== undefined) {
    bodyParams["arn"] = input.Arn;
  }
  if (input.Revision !== undefined) {
    bodyParams["revision"] = input.Revision;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EBSStorageInfo = (
  input: EBSStorageInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.VolumeSize !== undefined) {
    bodyParams["volumeSize"] = input.VolumeSize;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EncryptionAtRest = (
  input: EncryptionAtRest,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.DataVolumeKMSKeyId !== undefined) {
    bodyParams["dataVolumeKMSKeyId"] = input.DataVolumeKMSKeyId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EncryptionInTransit = (
  input: EncryptionInTransit,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.ClientBroker !== undefined) {
    bodyParams["clientBroker"] = input.ClientBroker;
  }
  if (input.InCluster !== undefined) {
    bodyParams["inCluster"] = input.InCluster;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EncryptionInfo = (
  input: EncryptionInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EncryptionAtRest !== undefined) {
    bodyParams["encryptionAtRest"] = serializeAws_restJson1_1EncryptionAtRest(
      input.EncryptionAtRest,
      context
    );
  }
  if (input.EncryptionInTransit !== undefined) {
    bodyParams[
      "encryptionInTransit"
    ] = serializeAws_restJson1_1EncryptionInTransit(
      input.EncryptionInTransit,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1StorageInfo = (
  input: StorageInfo,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.EbsStorageInfo !== undefined) {
    bodyParams["ebsStorageInfo"] = serializeAws_restJson1_1EBSStorageInfo(
      input.EbsStorageInfo,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Tls = (
  input: Tls,
  context: __SerdeContext
): any => {
  let bodyParams: any = {};
  if (input.CertificateAuthorityArnList !== undefined) {
    bodyParams[
      "certificateAuthorityArnList"
    ] = serializeAws_restJson1_1__listOf__string(
      input.CertificateAuthorityArnList,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1__listOfBrokerEBSVolumeInfo = (
  input: Array<BrokerEBSVolumeInfo>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry =>
    serializeAws_restJson1_1BrokerEBSVolumeInfo(entry, context)
  );
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  return (input || []).map(entry => entry);
};

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  let mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1BrokerEBSVolumeInfo = (
  output: any,
  context: __SerdeContext
): BrokerEBSVolumeInfo => {
  let contents: any = {
    __type: "BrokerEBSVolumeInfo",
    KafkaBrokerNodeId: undefined,
    VolumeSizeGB: undefined
  };
  if (output.kafkaBrokerNodeId !== undefined) {
    contents.KafkaBrokerNodeId = output.kafkaBrokerNodeId;
  }
  if (output.volumeSizeGB !== undefined) {
    contents.VolumeSizeGB = output.volumeSizeGB;
  }
  return contents;
};

const deserializeAws_restJson1_1BrokerNodeGroupInfo = (
  output: any,
  context: __SerdeContext
): BrokerNodeGroupInfo => {
  let contents: any = {
    __type: "BrokerNodeGroupInfo",
    BrokerAZDistribution: undefined,
    ClientSubnets: undefined,
    InstanceType: undefined,
    SecurityGroups: undefined,
    StorageInfo: undefined
  };
  if (output.brokerAZDistribution !== undefined) {
    contents.BrokerAZDistribution = output.brokerAZDistribution;
  }
  if (output.clientSubnets !== undefined) {
    contents.ClientSubnets = deserializeAws_restJson1_1__listOf__string(
      output.clientSubnets,
      context
    );
  }
  if (output.instanceType !== undefined) {
    contents.InstanceType = output.instanceType;
  }
  if (output.securityGroups !== undefined) {
    contents.SecurityGroups = deserializeAws_restJson1_1__listOf__string(
      output.securityGroups,
      context
    );
  }
  if (output.storageInfo !== undefined) {
    contents.StorageInfo = deserializeAws_restJson1_1StorageInfo(
      output.storageInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BrokerNodeInfo = (
  output: any,
  context: __SerdeContext
): BrokerNodeInfo => {
  let contents: any = {
    __type: "BrokerNodeInfo",
    AttachedENIId: undefined,
    BrokerId: undefined,
    ClientSubnet: undefined,
    ClientVpcIpAddress: undefined,
    CurrentBrokerSoftwareInfo: undefined,
    Endpoints: undefined
  };
  if (output.attachedENIId !== undefined) {
    contents.AttachedENIId = output.attachedENIId;
  }
  if (output.brokerId !== undefined) {
    contents.BrokerId = output.brokerId;
  }
  if (output.clientSubnet !== undefined) {
    contents.ClientSubnet = output.clientSubnet;
  }
  if (output.clientVpcIpAddress !== undefined) {
    contents.ClientVpcIpAddress = output.clientVpcIpAddress;
  }
  if (output.currentBrokerSoftwareInfo !== undefined) {
    contents.CurrentBrokerSoftwareInfo = deserializeAws_restJson1_1BrokerSoftwareInfo(
      output.currentBrokerSoftwareInfo,
      context
    );
  }
  if (output.endpoints !== undefined) {
    contents.Endpoints = deserializeAws_restJson1_1__listOf__string(
      output.endpoints,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BrokerSoftwareInfo = (
  output: any,
  context: __SerdeContext
): BrokerSoftwareInfo => {
  let contents: any = {
    __type: "BrokerSoftwareInfo",
    ConfigurationArn: undefined,
    ConfigurationRevision: undefined,
    KafkaVersion: undefined
  };
  if (output.configurationArn !== undefined) {
    contents.ConfigurationArn = output.configurationArn;
  }
  if (output.configurationRevision !== undefined) {
    contents.ConfigurationRevision = output.configurationRevision;
  }
  if (output.kafkaVersion !== undefined) {
    contents.KafkaVersion = output.kafkaVersion;
  }
  return contents;
};

const deserializeAws_restJson1_1ClientAuthentication = (
  output: any,
  context: __SerdeContext
): ClientAuthentication => {
  let contents: any = {
    __type: "ClientAuthentication",
    Tls: undefined
  };
  if (output.tls !== undefined) {
    contents.Tls = deserializeAws_restJson1_1Tls(output.tls, context);
  }
  return contents;
};

const deserializeAws_restJson1_1ClusterInfo = (
  output: any,
  context: __SerdeContext
): ClusterInfo => {
  let contents: any = {
    __type: "ClusterInfo",
    ActiveOperationArn: undefined,
    BrokerNodeGroupInfo: undefined,
    ClientAuthentication: undefined,
    ClusterArn: undefined,
    ClusterName: undefined,
    CreationTime: undefined,
    CurrentBrokerSoftwareInfo: undefined,
    CurrentVersion: undefined,
    EncryptionInfo: undefined,
    EnhancedMonitoring: undefined,
    NumberOfBrokerNodes: undefined,
    State: undefined,
    Tags: undefined,
    ZookeeperConnectString: undefined
  };
  if (output.activeOperationArn !== undefined) {
    contents.ActiveOperationArn = output.activeOperationArn;
  }
  if (output.brokerNodeGroupInfo !== undefined) {
    contents.BrokerNodeGroupInfo = deserializeAws_restJson1_1BrokerNodeGroupInfo(
      output.brokerNodeGroupInfo,
      context
    );
  }
  if (output.clientAuthentication !== undefined) {
    contents.ClientAuthentication = deserializeAws_restJson1_1ClientAuthentication(
      output.clientAuthentication,
      context
    );
  }
  if (output.clusterArn !== undefined) {
    contents.ClusterArn = output.clusterArn;
  }
  if (output.clusterName !== undefined) {
    contents.ClusterName = output.clusterName;
  }
  if (output.creationTime !== undefined) {
    contents.CreationTime = new Date(output.creationTime);
  }
  if (output.currentBrokerSoftwareInfo !== undefined) {
    contents.CurrentBrokerSoftwareInfo = deserializeAws_restJson1_1BrokerSoftwareInfo(
      output.currentBrokerSoftwareInfo,
      context
    );
  }
  if (output.currentVersion !== undefined) {
    contents.CurrentVersion = output.currentVersion;
  }
  if (output.encryptionInfo !== undefined) {
    contents.EncryptionInfo = deserializeAws_restJson1_1EncryptionInfo(
      output.encryptionInfo,
      context
    );
  }
  if (output.enhancedMonitoring !== undefined) {
    contents.EnhancedMonitoring = output.enhancedMonitoring;
  }
  if (output.numberOfBrokerNodes !== undefined) {
    contents.NumberOfBrokerNodes = output.numberOfBrokerNodes;
  }
  if (output.state !== undefined) {
    contents.State = output.state;
  }
  if (output.tags !== undefined) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      output.tags,
      context
    );
  }
  if (output.zookeeperConnectString !== undefined) {
    contents.ZookeeperConnectString = output.zookeeperConnectString;
  }
  return contents;
};

const deserializeAws_restJson1_1ClusterOperationInfo = (
  output: any,
  context: __SerdeContext
): ClusterOperationInfo => {
  let contents: any = {
    __type: "ClusterOperationInfo",
    ClientRequestId: undefined,
    ClusterArn: undefined,
    CreationTime: undefined,
    EndTime: undefined,
    ErrorInfo: undefined,
    OperationArn: undefined,
    OperationState: undefined,
    OperationType: undefined,
    SourceClusterInfo: undefined,
    TargetClusterInfo: undefined
  };
  if (output.clientRequestId !== undefined) {
    contents.ClientRequestId = output.clientRequestId;
  }
  if (output.clusterArn !== undefined) {
    contents.ClusterArn = output.clusterArn;
  }
  if (output.creationTime !== undefined) {
    contents.CreationTime = new Date(output.creationTime);
  }
  if (output.endTime !== undefined) {
    contents.EndTime = new Date(output.endTime);
  }
  if (output.errorInfo !== undefined) {
    contents.ErrorInfo = deserializeAws_restJson1_1ErrorInfo(
      output.errorInfo,
      context
    );
  }
  if (output.operationArn !== undefined) {
    contents.OperationArn = output.operationArn;
  }
  if (output.operationState !== undefined) {
    contents.OperationState = output.operationState;
  }
  if (output.operationType !== undefined) {
    contents.OperationType = output.operationType;
  }
  if (output.sourceClusterInfo !== undefined) {
    contents.SourceClusterInfo = deserializeAws_restJson1_1MutableClusterInfo(
      output.sourceClusterInfo,
      context
    );
  }
  if (output.targetClusterInfo !== undefined) {
    contents.TargetClusterInfo = deserializeAws_restJson1_1MutableClusterInfo(
      output.targetClusterInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Configuration = (
  output: any,
  context: __SerdeContext
): Configuration => {
  let contents: any = {
    __type: "Configuration",
    Arn: undefined,
    CreationTime: undefined,
    Description: undefined,
    KafkaVersions: undefined,
    LatestRevision: undefined,
    Name: undefined
  };
  if (output.arn !== undefined) {
    contents.Arn = output.arn;
  }
  if (output.creationTime !== undefined) {
    contents.CreationTime = new Date(output.creationTime);
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.kafkaVersions !== undefined) {
    contents.KafkaVersions = deserializeAws_restJson1_1__listOf__string(
      output.kafkaVersions,
      context
    );
  }
  if (output.latestRevision !== undefined) {
    contents.LatestRevision = deserializeAws_restJson1_1ConfigurationRevision(
      output.latestRevision,
      context
    );
  }
  if (output.name !== undefined) {
    contents.Name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigurationInfo = (
  output: any,
  context: __SerdeContext
): ConfigurationInfo => {
  let contents: any = {
    __type: "ConfigurationInfo",
    Arn: undefined,
    Revision: undefined
  };
  if (output.arn !== undefined) {
    contents.Arn = output.arn;
  }
  if (output.revision !== undefined) {
    contents.Revision = output.revision;
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigurationRevision = (
  output: any,
  context: __SerdeContext
): ConfigurationRevision => {
  let contents: any = {
    __type: "ConfigurationRevision",
    CreationTime: undefined,
    Description: undefined,
    Revision: undefined
  };
  if (output.creationTime !== undefined) {
    contents.CreationTime = new Date(output.creationTime);
  }
  if (output.description !== undefined) {
    contents.Description = output.description;
  }
  if (output.revision !== undefined) {
    contents.Revision = output.revision;
  }
  return contents;
};

const deserializeAws_restJson1_1EBSStorageInfo = (
  output: any,
  context: __SerdeContext
): EBSStorageInfo => {
  let contents: any = {
    __type: "EBSStorageInfo",
    VolumeSize: undefined
  };
  if (output.volumeSize !== undefined) {
    contents.VolumeSize = output.volumeSize;
  }
  return contents;
};

const deserializeAws_restJson1_1EncryptionAtRest = (
  output: any,
  context: __SerdeContext
): EncryptionAtRest => {
  let contents: any = {
    __type: "EncryptionAtRest",
    DataVolumeKMSKeyId: undefined
  };
  if (output.dataVolumeKMSKeyId !== undefined) {
    contents.DataVolumeKMSKeyId = output.dataVolumeKMSKeyId;
  }
  return contents;
};

const deserializeAws_restJson1_1EncryptionInTransit = (
  output: any,
  context: __SerdeContext
): EncryptionInTransit => {
  let contents: any = {
    __type: "EncryptionInTransit",
    ClientBroker: undefined,
    InCluster: undefined
  };
  if (output.clientBroker !== undefined) {
    contents.ClientBroker = output.clientBroker;
  }
  if (output.inCluster !== undefined) {
    contents.InCluster = output.inCluster;
  }
  return contents;
};

const deserializeAws_restJson1_1EncryptionInfo = (
  output: any,
  context: __SerdeContext
): EncryptionInfo => {
  let contents: any = {
    __type: "EncryptionInfo",
    EncryptionAtRest: undefined,
    EncryptionInTransit: undefined
  };
  if (output.encryptionAtRest !== undefined) {
    contents.EncryptionAtRest = deserializeAws_restJson1_1EncryptionAtRest(
      output.encryptionAtRest,
      context
    );
  }
  if (output.encryptionInTransit !== undefined) {
    contents.EncryptionInTransit = deserializeAws_restJson1_1EncryptionInTransit(
      output.encryptionInTransit,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ErrorInfo = (
  output: any,
  context: __SerdeContext
): ErrorInfo => {
  let contents: any = {
    __type: "ErrorInfo",
    ErrorCode: undefined,
    ErrorString: undefined
  };
  if (output.errorCode !== undefined) {
    contents.ErrorCode = output.errorCode;
  }
  if (output.errorString !== undefined) {
    contents.ErrorString = output.errorString;
  }
  return contents;
};

const deserializeAws_restJson1_1MutableClusterInfo = (
  output: any,
  context: __SerdeContext
): MutableClusterInfo => {
  let contents: any = {
    __type: "MutableClusterInfo",
    BrokerEBSVolumeInfo: undefined,
    ConfigurationInfo: undefined,
    NumberOfBrokerNodes: undefined
  };
  if (output.brokerEBSVolumeInfo !== undefined) {
    contents.BrokerEBSVolumeInfo = deserializeAws_restJson1_1__listOfBrokerEBSVolumeInfo(
      output.brokerEBSVolumeInfo,
      context
    );
  }
  if (output.configurationInfo !== undefined) {
    contents.ConfigurationInfo = deserializeAws_restJson1_1ConfigurationInfo(
      output.configurationInfo,
      context
    );
  }
  if (output.numberOfBrokerNodes !== undefined) {
    contents.NumberOfBrokerNodes = output.numberOfBrokerNodes;
  }
  return contents;
};

const deserializeAws_restJson1_1NodeInfo = (
  output: any,
  context: __SerdeContext
): NodeInfo => {
  let contents: any = {
    __type: "NodeInfo",
    AddedToClusterTime: undefined,
    BrokerNodeInfo: undefined,
    InstanceType: undefined,
    NodeARN: undefined,
    NodeType: undefined,
    ZookeeperNodeInfo: undefined
  };
  if (output.addedToClusterTime !== undefined) {
    contents.AddedToClusterTime = output.addedToClusterTime;
  }
  if (output.brokerNodeInfo !== undefined) {
    contents.BrokerNodeInfo = deserializeAws_restJson1_1BrokerNodeInfo(
      output.brokerNodeInfo,
      context
    );
  }
  if (output.instanceType !== undefined) {
    contents.InstanceType = output.instanceType;
  }
  if (output.nodeARN !== undefined) {
    contents.NodeARN = output.nodeARN;
  }
  if (output.nodeType !== undefined) {
    contents.NodeType = output.nodeType;
  }
  if (output.zookeeperNodeInfo !== undefined) {
    contents.ZookeeperNodeInfo = deserializeAws_restJson1_1ZookeeperNodeInfo(
      output.zookeeperNodeInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1StorageInfo = (
  output: any,
  context: __SerdeContext
): StorageInfo => {
  let contents: any = {
    __type: "StorageInfo",
    EbsStorageInfo: undefined
  };
  if (output.ebsStorageInfo !== undefined) {
    contents.EbsStorageInfo = deserializeAws_restJson1_1EBSStorageInfo(
      output.ebsStorageInfo,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Tls = (
  output: any,
  context: __SerdeContext
): Tls => {
  let contents: any = {
    __type: "Tls",
    CertificateAuthorityArnList: undefined
  };
  if (output.certificateAuthorityArnList !== undefined) {
    contents.CertificateAuthorityArnList = deserializeAws_restJson1_1__listOf__string(
      output.certificateAuthorityArnList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ZookeeperNodeInfo = (
  output: any,
  context: __SerdeContext
): ZookeeperNodeInfo => {
  let contents: any = {
    __type: "ZookeeperNodeInfo",
    AttachedENIId: undefined,
    ClientVpcIpAddress: undefined,
    Endpoints: undefined,
    ZookeeperId: undefined,
    ZookeeperVersion: undefined
  };
  if (output.attachedENIId !== undefined) {
    contents.AttachedENIId = output.attachedENIId;
  }
  if (output.clientVpcIpAddress !== undefined) {
    contents.ClientVpcIpAddress = output.clientVpcIpAddress;
  }
  if (output.endpoints !== undefined) {
    contents.Endpoints = deserializeAws_restJson1_1__listOf__string(
      output.endpoints,
      context
    );
  }
  if (output.zookeeperId !== undefined) {
    contents.ZookeeperId = output.zookeeperId;
  }
  if (output.zookeeperVersion !== undefined) {
    contents.ZookeeperVersion = output.zookeeperVersion;
  }
  return contents;
};

const deserializeAws_restJson1_1__listOfBrokerEBSVolumeInfo = (
  output: any,
  context: __SerdeContext
): Array<BrokerEBSVolumeInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BrokerEBSVolumeInfo(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfClusterInfo = (
  output: any,
  context: __SerdeContext
): Array<ClusterInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ClusterInfo(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfClusterOperationInfo = (
  output: any,
  context: __SerdeContext
): Array<ClusterOperationInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ClusterOperationInfo(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfConfiguration = (
  output: any,
  context: __SerdeContext
): Array<Configuration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Configuration(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfConfigurationRevision = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationRevision> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ConfigurationRevision(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfNodeInfo = (
  output: any,
  context: __SerdeContext
): Array<NodeInfo> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1NodeInfo(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  let mapParams: any = {};
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
  return context.streamCollector(streamBody) || new Uint8Array();
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
