import {
  BatchAssociateScramSecretCommandInput,
  BatchAssociateScramSecretCommandOutput,
} from "../commands/BatchAssociateScramSecretCommand";
import {
  BatchDisassociateScramSecretCommandInput,
  BatchDisassociateScramSecretCommandOutput,
} from "../commands/BatchDisassociateScramSecretCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "../commands/CreateConfigurationCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteConfigurationCommandInput,
  DeleteConfigurationCommandOutput,
} from "../commands/DeleteConfigurationCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "../commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
} from "../commands/DescribeClusterOperationCommand";
import {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
} from "../commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
} from "../commands/DescribeConfigurationRevisionCommand";
import {
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
} from "../commands/GetBootstrapBrokersCommand";
import {
  GetCompatibleKafkaVersionsCommandInput,
  GetCompatibleKafkaVersionsCommandOutput,
} from "../commands/GetCompatibleKafkaVersionsCommand";
import {
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "../commands/ListClusterOperationsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "../commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "../commands/ListConfigurationsCommand";
import { ListKafkaVersionsCommandInput, ListKafkaVersionsCommandOutput } from "../commands/ListKafkaVersionsCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "../commands/ListNodesCommand";
import { ListScramSecretsCommandInput, ListScramSecretsCommandOutput } from "../commands/ListScramSecretsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "../commands/RebootBrokerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput } from "../commands/UpdateBrokerCountCommand";
import {
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput,
} from "../commands/UpdateBrokerStorageCommand";
import { UpdateBrokerTypeCommandInput, UpdateBrokerTypeCommandOutput } from "../commands/UpdateBrokerTypeCommand";
import {
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput,
} from "../commands/UpdateClusterConfigurationCommand";
import {
  UpdateClusterKafkaVersionCommandInput,
  UpdateClusterKafkaVersionCommandOutput,
} from "../commands/UpdateClusterKafkaVersionCommand";
import {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "../commands/UpdateConfigurationCommand";
import { UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput } from "../commands/UpdateMonitoringCommand";
import {
  BadRequestException,
  BrokerEBSVolumeInfo,
  BrokerLogs,
  BrokerNodeGroupInfo,
  BrokerNodeInfo,
  BrokerSoftwareInfo,
  ClientAuthentication,
  CloudWatchLogs,
  ClusterInfo,
  ClusterOperationInfo,
  ClusterOperationStep,
  ClusterOperationStepInfo,
  CompatibleKafkaVersion,
  Configuration,
  ConfigurationInfo,
  ConfigurationRevision,
  ConflictException,
  EBSStorageInfo,
  EncryptionAtRest,
  EncryptionInTransit,
  EncryptionInfo,
  ErrorInfo,
  Firehose,
  ForbiddenException,
  Iam,
  InternalServerErrorException,
  JmxExporter,
  JmxExporterInfo,
  KafkaVersion,
  LoggingInfo,
  MutableClusterInfo,
  NodeExporter,
  NodeExporterInfo,
  NodeInfo,
  NotFoundException,
  OpenMonitoring,
  OpenMonitoringInfo,
  Prometheus,
  PrometheusInfo,
  S3,
  Sasl,
  Scram,
  ServiceUnavailableException,
  StateInfo,
  StorageInfo,
  Tls,
  TooManyRequestsException,
  UnauthorizedException,
  UnprocessedScramSecret,
  ZookeeperNodeInfo,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat as __limitedParseFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1BatchAssociateScramSecretCommand = async (
  input: BatchAssociateScramSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/scram-secrets";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SecretArnList !== undefined &&
      input.SecretArnList !== null && {
        secretArnList: serializeAws_restJson1__listOf__string(input.SecretArnList, context),
      }),
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

export const serializeAws_restJson1BatchDisassociateScramSecretCommand = async (
  input: BatchDisassociateScramSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/scram-secrets";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.SecretArnList !== undefined &&
      input.SecretArnList !== null && {
        secretArnList: serializeAws_restJson1__listOf__string(input.SecretArnList, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters";
  let body: any;
  body = JSON.stringify({
    ...(input.BrokerNodeGroupInfo !== undefined &&
      input.BrokerNodeGroupInfo !== null && {
        brokerNodeGroupInfo: serializeAws_restJson1BrokerNodeGroupInfo(input.BrokerNodeGroupInfo, context),
      }),
    ...(input.ClientAuthentication !== undefined &&
      input.ClientAuthentication !== null && {
        clientAuthentication: serializeAws_restJson1ClientAuthentication(input.ClientAuthentication, context),
      }),
    ...(input.ClusterName !== undefined && input.ClusterName !== null && { clusterName: input.ClusterName }),
    ...(input.ConfigurationInfo !== undefined &&
      input.ConfigurationInfo !== null && {
        configurationInfo: serializeAws_restJson1ConfigurationInfo(input.ConfigurationInfo, context),
      }),
    ...(input.EncryptionInfo !== undefined &&
      input.EncryptionInfo !== null && {
        encryptionInfo: serializeAws_restJson1EncryptionInfo(input.EncryptionInfo, context),
      }),
    ...(input.EnhancedMonitoring !== undefined &&
      input.EnhancedMonitoring !== null && { enhancedMonitoring: input.EnhancedMonitoring }),
    ...(input.KafkaVersion !== undefined && input.KafkaVersion !== null && { kafkaVersion: input.KafkaVersion }),
    ...(input.LoggingInfo !== undefined &&
      input.LoggingInfo !== null && { loggingInfo: serializeAws_restJson1LoggingInfo(input.LoggingInfo, context) }),
    ...(input.NumberOfBrokerNodes !== undefined &&
      input.NumberOfBrokerNodes !== null && { numberOfBrokerNodes: input.NumberOfBrokerNodes }),
    ...(input.OpenMonitoring !== undefined &&
      input.OpenMonitoring !== null && {
        openMonitoring: serializeAws_restJson1OpenMonitoringInfo(input.OpenMonitoring, context),
      }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1CreateConfigurationCommand = async (
  input: CreateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.KafkaVersions !== undefined &&
      input.KafkaVersions !== null && {
        kafkaVersions: serializeAws_restJson1__listOf__string(input.KafkaVersions, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.ServerProperties !== undefined &&
      input.ServerProperties !== null && { serverProperties: context.base64Encoder(input.ServerProperties) }),
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

export const serializeAws_restJson1DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {
    ...(input.CurrentVersion !== undefined && { currentVersion: input.CurrentVersion }),
  };
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

export const serializeAws_restJson1DeleteConfigurationCommand = async (
  input: DeleteConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  let body: any;
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

export const serializeAws_restJson1DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
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

export const serializeAws_restJson1DescribeClusterOperationCommand = async (
  input: DescribeClusterOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/operations/{ClusterOperationArn}";
  if (input.ClusterOperationArn !== undefined) {
    const labelValue: string = input.ClusterOperationArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterOperationArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterOperationArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterOperationArn.");
  }
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

export const serializeAws_restJson1DescribeConfigurationCommand = async (
  input: DescribeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
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

export const serializeAws_restJson1DescribeConfigurationRevisionCommand = async (
  input: DescribeConfigurationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/configurations/{Arn}/revisions/{Revision}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  if (input.Revision !== undefined) {
    const labelValue: string = input.Revision.toString();
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Revision.");
    }
    resolvedPath = resolvedPath.replace("{Revision}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Revision.");
  }
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

export const serializeAws_restJson1GetBootstrapBrokersCommand = async (
  input: GetBootstrapBrokersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/clusters/{ClusterArn}/bootstrap-brokers";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
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

export const serializeAws_restJson1GetCompatibleKafkaVersionsCommand = async (
  input: GetCompatibleKafkaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/compatible-kafka-versions";
  const query: any = {
    ...(input.ClusterArn !== undefined && { clusterArn: input.ClusterArn }),
  };
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

export const serializeAws_restJson1ListClusterOperationsCommand = async (
  input: ListClusterOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/operations";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters";
  const query: any = {
    ...(input.ClusterNameFilter !== undefined && { clusterNameFilter: input.ClusterNameFilter }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListConfigurationRevisionsCommand = async (
  input: ListConfigurationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{Arn}/revisions";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListConfigurationsCommand = async (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListKafkaVersionsCommand = async (
  input: ListKafkaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/kafka-versions";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/nodes";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListScramSecretsCommand = async (
  input: ListScramSecretsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/scram-secrets";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
  };
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
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

export const serializeAws_restJson1RebootBrokerCommand = async (
  input: RebootBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/reboot-broker";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BrokerIds !== undefined &&
      input.BrokerIds !== null && { brokerIds: serializeAws_restJson1__listOf__string(input.BrokerIds, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
  };
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

export const serializeAws_restJson1UpdateBrokerCountCommand = async (
  input: UpdateBrokerCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/nodes/count";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined &&
      input.CurrentVersion !== null && { currentVersion: input.CurrentVersion }),
    ...(input.TargetNumberOfBrokerNodes !== undefined &&
      input.TargetNumberOfBrokerNodes !== null && { targetNumberOfBrokerNodes: input.TargetNumberOfBrokerNodes }),
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

export const serializeAws_restJson1UpdateBrokerStorageCommand = async (
  input: UpdateBrokerStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/nodes/storage";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined &&
      input.CurrentVersion !== null && { currentVersion: input.CurrentVersion }),
    ...(input.TargetBrokerEBSVolumeInfo !== undefined &&
      input.TargetBrokerEBSVolumeInfo !== null && {
        targetBrokerEBSVolumeInfo: serializeAws_restJson1__listOfBrokerEBSVolumeInfo(
          input.TargetBrokerEBSVolumeInfo,
          context
        ),
      }),
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

export const serializeAws_restJson1UpdateBrokerTypeCommand = async (
  input: UpdateBrokerTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/nodes/type";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined &&
      input.CurrentVersion !== null && { currentVersion: input.CurrentVersion }),
    ...(input.TargetInstanceType !== undefined &&
      input.TargetInstanceType !== null && { targetInstanceType: input.TargetInstanceType }),
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

export const serializeAws_restJson1UpdateClusterConfigurationCommand = async (
  input: UpdateClusterConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/configuration";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationInfo !== undefined &&
      input.ConfigurationInfo !== null && {
        configurationInfo: serializeAws_restJson1ConfigurationInfo(input.ConfigurationInfo, context),
      }),
    ...(input.CurrentVersion !== undefined &&
      input.CurrentVersion !== null && { currentVersion: input.CurrentVersion }),
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

export const serializeAws_restJson1UpdateClusterKafkaVersionCommand = async (
  input: UpdateClusterKafkaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/version";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationInfo !== undefined &&
      input.ConfigurationInfo !== null && {
        configurationInfo: serializeAws_restJson1ConfigurationInfo(input.ConfigurationInfo, context),
      }),
    ...(input.CurrentVersion !== undefined &&
      input.CurrentVersion !== null && { currentVersion: input.CurrentVersion }),
    ...(input.TargetKafkaVersion !== undefined &&
      input.TargetKafkaVersion !== null && { targetKafkaVersion: input.TargetKafkaVersion }),
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

export const serializeAws_restJson1UpdateConfigurationCommand = async (
  input: UpdateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{Arn}";
  if (input.Arn !== undefined) {
    const labelValue: string = input.Arn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Arn.");
    }
    resolvedPath = resolvedPath.replace("{Arn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Arn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
    ...(input.ServerProperties !== undefined &&
      input.ServerProperties !== null && { serverProperties: context.base64Encoder(input.ServerProperties) }),
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

export const serializeAws_restJson1UpdateMonitoringCommand = async (
  input: UpdateMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/monitoring";
  if (input.ClusterArn !== undefined) {
    const labelValue: string = input.ClusterArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ClusterArn.");
    }
    resolvedPath = resolvedPath.replace("{ClusterArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ClusterArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion !== undefined &&
      input.CurrentVersion !== null && { currentVersion: input.CurrentVersion }),
    ...(input.EnhancedMonitoring !== undefined &&
      input.EnhancedMonitoring !== null && { enhancedMonitoring: input.EnhancedMonitoring }),
    ...(input.LoggingInfo !== undefined &&
      input.LoggingInfo !== null && { loggingInfo: serializeAws_restJson1LoggingInfo(input.LoggingInfo, context) }),
    ...(input.OpenMonitoring !== undefined &&
      input.OpenMonitoring !== null && {
        openMonitoring: serializeAws_restJson1OpenMonitoringInfo(input.OpenMonitoring, context),
      }),
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

export const deserializeAws_restJson1BatchAssociateScramSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateScramSecretCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchAssociateScramSecretCommandError(output, context);
  }
  const contents: BatchAssociateScramSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    UnprocessedScramSecrets: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.unprocessedScramSecrets !== undefined && data.unprocessedScramSecrets !== null) {
    contents.UnprocessedScramSecrets = deserializeAws_restJson1__listOfUnprocessedScramSecret(
      data.unprocessedScramSecrets,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchAssociateScramSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateScramSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchDisassociateScramSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateScramSecretCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisassociateScramSecretCommandError(output, context);
  }
  const contents: BatchDisassociateScramSecretCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    UnprocessedScramSecrets: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.unprocessedScramSecrets !== undefined && data.unprocessedScramSecrets !== null) {
    contents.UnprocessedScramSecrets = deserializeAws_restJson1__listOfUnprocessedScramSecret(
      data.unprocessedScramSecrets,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDisassociateScramSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateScramSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateClusterCommandError(output, context);
  }
  const contents: CreateClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    ClusterName: undefined,
    State: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterName !== undefined && data.clusterName !== null) {
    contents.ClusterName = __expectString(data.clusterName);
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationCommandError(output, context);
  }
  const contents: CreateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationTime: undefined,
    LatestRevision: undefined,
    Name: undefined,
    State: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteClusterCommandError(output, context);
  }
  const contents: DeleteClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    State: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteConfigurationCommandError(output, context);
  }
  const contents: DeleteConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    State: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeClusterCommandError(output, context);
  }
  const contents: DescribeClusterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterInfo: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterInfo !== undefined && data.clusterInfo !== null) {
    contents.ClusterInfo = deserializeAws_restJson1ClusterInfo(data.clusterInfo, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeClusterOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeClusterOperationCommandError(output, context);
  }
  const contents: DescribeClusterOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterOperationInfo: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterOperationInfo !== undefined && data.clusterOperationInfo !== null) {
    contents.ClusterOperationInfo = deserializeAws_restJson1ClusterOperationInfo(data.clusterOperationInfo, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeClusterOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConfigurationCommandError(output, context);
  }
  const contents: DescribeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationTime: undefined,
    Description: undefined,
    KafkaVersions: undefined,
    LatestRevision: undefined,
    Name: undefined,
    State: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.kafkaVersions !== undefined && data.kafkaVersions !== null) {
    contents.KafkaVersions = deserializeAws_restJson1__listOf__string(data.kafkaVersions, context);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.state !== undefined && data.state !== null) {
    contents.State = __expectString(data.state);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeConfigurationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConfigurationRevisionCommandError(output, context);
  }
  const contents: DescribeConfigurationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    CreationTime: undefined,
    Description: undefined,
    Revision: undefined,
    ServerProperties: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.CreationTime = new Date(data.creationTime);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.revision !== undefined && data.revision !== null) {
    contents.Revision = __expectInt(data.revision);
  }
  if (data.serverProperties !== undefined && data.serverProperties !== null) {
    contents.ServerProperties = context.base64Decoder(data.serverProperties);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConfigurationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBootstrapBrokersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBootstrapBrokersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBootstrapBrokersCommandError(output, context);
  }
  const contents: GetBootstrapBrokersCommandOutput = {
    $metadata: deserializeMetadata(output),
    BootstrapBrokerString: undefined,
    BootstrapBrokerStringSaslIam: undefined,
    BootstrapBrokerStringSaslScram: undefined,
    BootstrapBrokerStringTls: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.bootstrapBrokerString !== undefined && data.bootstrapBrokerString !== null) {
    contents.BootstrapBrokerString = __expectString(data.bootstrapBrokerString);
  }
  if (data.bootstrapBrokerStringSaslIam !== undefined && data.bootstrapBrokerStringSaslIam !== null) {
    contents.BootstrapBrokerStringSaslIam = __expectString(data.bootstrapBrokerStringSaslIam);
  }
  if (data.bootstrapBrokerStringSaslScram !== undefined && data.bootstrapBrokerStringSaslScram !== null) {
    contents.BootstrapBrokerStringSaslScram = __expectString(data.bootstrapBrokerStringSaslScram);
  }
  if (data.bootstrapBrokerStringTls !== undefined && data.bootstrapBrokerStringTls !== null) {
    contents.BootstrapBrokerStringTls = __expectString(data.bootstrapBrokerStringTls);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBootstrapBrokersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBootstrapBrokersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetCompatibleKafkaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleKafkaVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCompatibleKafkaVersionsCommandError(output, context);
  }
  const contents: GetCompatibleKafkaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CompatibleKafkaVersions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.compatibleKafkaVersions !== undefined && data.compatibleKafkaVersions !== null) {
    contents.CompatibleKafkaVersions = deserializeAws_restJson1__listOfCompatibleKafkaVersion(
      data.compatibleKafkaVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCompatibleKafkaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleKafkaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListClusterOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListClusterOperationsCommandError(output, context);
  }
  const contents: ListClusterOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterOperationInfoList: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterOperationInfoList !== undefined && data.clusterOperationInfoList !== null) {
    contents.ClusterOperationInfoList = deserializeAws_restJson1__listOfClusterOperationInfo(
      data.clusterOperationInfoList,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListClusterOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListClustersCommandError(output, context);
  }
  const contents: ListClustersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterInfoList: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterInfoList !== undefined && data.clusterInfoList !== null) {
    contents.ClusterInfoList = deserializeAws_restJson1__listOfClusterInfo(data.clusterInfoList, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListConfigurationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigurationRevisionsCommandError(output, context);
  }
  const contents: ListConfigurationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Revisions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.revisions !== undefined && data.revisions !== null) {
    contents.Revisions = deserializeAws_restJson1__listOfConfigurationRevision(data.revisions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigurationsCommandError(output, context);
  }
  const contents: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Configurations: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurations !== undefined && data.configurations !== null) {
    contents.Configurations = deserializeAws_restJson1__listOfConfiguration(data.configurations, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListKafkaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKafkaVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListKafkaVersionsCommandError(output, context);
  }
  const contents: ListKafkaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    KafkaVersions: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.kafkaVersions !== undefined && data.kafkaVersions !== null) {
    contents.KafkaVersions = deserializeAws_restJson1__listOfKafkaVersion(data.kafkaVersions, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListKafkaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKafkaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodesCommandError(output, context);
  }
  const contents: ListNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    NodeInfoList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.nodeInfoList !== undefined && data.nodeInfoList !== null) {
    contents.NodeInfoList = deserializeAws_restJson1__listOfNodeInfo(data.nodeInfoList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListScramSecretsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScramSecretsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListScramSecretsCommandError(output, context);
  }
  const contents: ListScramSecretsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    SecretArnList: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.secretArnList !== undefined && data.secretArnList !== null) {
    contents.SecretArnList = deserializeAws_restJson1__listOf__string(data.secretArnList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListScramSecretsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScramSecretsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RebootBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RebootBrokerCommandError(output, context);
  }
  const contents: RebootBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    ClusterOperationArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RebootBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateBrokerCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBrokerCountCommandError(output, context);
  }
  const contents: UpdateBrokerCountCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    ClusterOperationArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBrokerCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateBrokerStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBrokerStorageCommandError(output, context);
  }
  const contents: UpdateBrokerStorageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    ClusterOperationArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBrokerStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateBrokerTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBrokerTypeCommandError(output, context);
  }
  const contents: UpdateBrokerTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    ClusterOperationArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBrokerTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateClusterConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClusterConfigurationCommandError(output, context);
  }
  const contents: UpdateClusterConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    ClusterOperationArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateClusterConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateClusterKafkaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterKafkaVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClusterKafkaVersionCommandError(output, context);
  }
  const contents: UpdateClusterKafkaVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    ClusterOperationArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateClusterKafkaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterKafkaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfigurationCommandError(output, context);
  }
  const contents: UpdateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    LatestRevision: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateMonitoringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateMonitoringCommandError(output, context);
  }
  const contents: UpdateMonitoringCommandOutput = {
    $metadata: deserializeMetadata(output),
    ClusterArn: undefined,
    ClusterOperationArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.clusterArn !== undefined && data.clusterArn !== null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn !== undefined && data.clusterOperationArn !== null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateMonitoringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    InvalidParameter: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    InvalidParameter: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.invalidParameter !== undefined && data.invalidParameter !== null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfBrokerEBSVolumeInfo = (
  input: BrokerEBSVolumeInfo[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1BrokerEBSVolumeInfo(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1BrokerEBSVolumeInfo = (input: BrokerEBSVolumeInfo, context: __SerdeContext): any => {
  return {
    ...(input.KafkaBrokerNodeId !== undefined &&
      input.KafkaBrokerNodeId !== null && { kafkaBrokerNodeId: input.KafkaBrokerNodeId }),
    ...(input.VolumeSizeGB !== undefined && input.VolumeSizeGB !== null && { volumeSizeGB: input.VolumeSizeGB }),
  };
};

const serializeAws_restJson1BrokerLogs = (input: BrokerLogs, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogs !== undefined &&
      input.CloudWatchLogs !== null && {
        cloudWatchLogs: serializeAws_restJson1CloudWatchLogs(input.CloudWatchLogs, context),
      }),
    ...(input.Firehose !== undefined &&
      input.Firehose !== null && { firehose: serializeAws_restJson1Firehose(input.Firehose, context) }),
    ...(input.S3 !== undefined && input.S3 !== null && { s3: serializeAws_restJson1S3(input.S3, context) }),
  };
};

const serializeAws_restJson1BrokerNodeGroupInfo = (input: BrokerNodeGroupInfo, context: __SerdeContext): any => {
  return {
    ...(input.BrokerAZDistribution !== undefined &&
      input.BrokerAZDistribution !== null && { brokerAZDistribution: input.BrokerAZDistribution }),
    ...(input.ClientSubnets !== undefined &&
      input.ClientSubnets !== null && {
        clientSubnets: serializeAws_restJson1__listOf__string(input.ClientSubnets, context),
      }),
    ...(input.InstanceType !== undefined && input.InstanceType !== null && { instanceType: input.InstanceType }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        securityGroups: serializeAws_restJson1__listOf__string(input.SecurityGroups, context),
      }),
    ...(input.StorageInfo !== undefined &&
      input.StorageInfo !== null && { storageInfo: serializeAws_restJson1StorageInfo(input.StorageInfo, context) }),
  };
};

const serializeAws_restJson1ClientAuthentication = (input: ClientAuthentication, context: __SerdeContext): any => {
  return {
    ...(input.Sasl !== undefined && input.Sasl !== null && { sasl: serializeAws_restJson1Sasl(input.Sasl, context) }),
    ...(input.Tls !== undefined && input.Tls !== null && { tls: serializeAws_restJson1Tls(input.Tls, context) }),
  };
};

const serializeAws_restJson1CloudWatchLogs = (input: CloudWatchLogs, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }),
    ...(input.LogGroup !== undefined && input.LogGroup !== null && { logGroup: input.LogGroup }),
  };
};

const serializeAws_restJson1ConfigurationInfo = (input: ConfigurationInfo, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { arn: input.Arn }),
    ...(input.Revision !== undefined && input.Revision !== null && { revision: input.Revision }),
  };
};

const serializeAws_restJson1EBSStorageInfo = (input: EBSStorageInfo, context: __SerdeContext): any => {
  return {
    ...(input.VolumeSize !== undefined && input.VolumeSize !== null && { volumeSize: input.VolumeSize }),
  };
};

const serializeAws_restJson1EncryptionAtRest = (input: EncryptionAtRest, context: __SerdeContext): any => {
  return {
    ...(input.DataVolumeKMSKeyId !== undefined &&
      input.DataVolumeKMSKeyId !== null && { dataVolumeKMSKeyId: input.DataVolumeKMSKeyId }),
  };
};

const serializeAws_restJson1EncryptionInfo = (input: EncryptionInfo, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionAtRest !== undefined &&
      input.EncryptionAtRest !== null && {
        encryptionAtRest: serializeAws_restJson1EncryptionAtRest(input.EncryptionAtRest, context),
      }),
    ...(input.EncryptionInTransit !== undefined &&
      input.EncryptionInTransit !== null && {
        encryptionInTransit: serializeAws_restJson1EncryptionInTransit(input.EncryptionInTransit, context),
      }),
  };
};

const serializeAws_restJson1EncryptionInTransit = (input: EncryptionInTransit, context: __SerdeContext): any => {
  return {
    ...(input.ClientBroker !== undefined && input.ClientBroker !== null && { clientBroker: input.ClientBroker }),
    ...(input.InCluster !== undefined && input.InCluster !== null && { inCluster: input.InCluster }),
  };
};

const serializeAws_restJson1Firehose = (input: Firehose, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStream !== undefined &&
      input.DeliveryStream !== null && { deliveryStream: input.DeliveryStream }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }),
  };
};

const serializeAws_restJson1Iam = (input: Iam, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }),
  };
};

const serializeAws_restJson1JmxExporterInfo = (input: JmxExporterInfo, context: __SerdeContext): any => {
  return {
    ...(input.EnabledInBroker !== undefined &&
      input.EnabledInBroker !== null && { enabledInBroker: input.EnabledInBroker }),
  };
};

const serializeAws_restJson1LoggingInfo = (input: LoggingInfo, context: __SerdeContext): any => {
  return {
    ...(input.BrokerLogs !== undefined &&
      input.BrokerLogs !== null && { brokerLogs: serializeAws_restJson1BrokerLogs(input.BrokerLogs, context) }),
  };
};

const serializeAws_restJson1NodeExporterInfo = (input: NodeExporterInfo, context: __SerdeContext): any => {
  return {
    ...(input.EnabledInBroker !== undefined &&
      input.EnabledInBroker !== null && { enabledInBroker: input.EnabledInBroker }),
  };
};

const serializeAws_restJson1OpenMonitoringInfo = (input: OpenMonitoringInfo, context: __SerdeContext): any => {
  return {
    ...(input.Prometheus !== undefined &&
      input.Prometheus !== null && { prometheus: serializeAws_restJson1PrometheusInfo(input.Prometheus, context) }),
  };
};

const serializeAws_restJson1PrometheusInfo = (input: PrometheusInfo, context: __SerdeContext): any => {
  return {
    ...(input.JmxExporter !== undefined &&
      input.JmxExporter !== null && { jmxExporter: serializeAws_restJson1JmxExporterInfo(input.JmxExporter, context) }),
    ...(input.NodeExporter !== undefined &&
      input.NodeExporter !== null && {
        nodeExporter: serializeAws_restJson1NodeExporterInfo(input.NodeExporter, context),
      }),
  };
};

const serializeAws_restJson1S3 = (input: S3, context: __SerdeContext): any => {
  return {
    ...(input.Bucket !== undefined && input.Bucket !== null && { bucket: input.Bucket }),
    ...(input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { prefix: input.Prefix }),
  };
};

const serializeAws_restJson1Sasl = (input: Sasl, context: __SerdeContext): any => {
  return {
    ...(input.Iam !== undefined && input.Iam !== null && { iam: serializeAws_restJson1Iam(input.Iam, context) }),
    ...(input.Scram !== undefined &&
      input.Scram !== null && { scram: serializeAws_restJson1Scram(input.Scram, context) }),
  };
};

const serializeAws_restJson1Scram = (input: Scram, context: __SerdeContext): any => {
  return {
    ...(input.Enabled !== undefined && input.Enabled !== null && { enabled: input.Enabled }),
  };
};

const serializeAws_restJson1StorageInfo = (input: StorageInfo, context: __SerdeContext): any => {
  return {
    ...(input.EbsStorageInfo !== undefined &&
      input.EbsStorageInfo !== null && {
        ebsStorageInfo: serializeAws_restJson1EBSStorageInfo(input.EbsStorageInfo, context),
      }),
  };
};

const serializeAws_restJson1Tls = (input: Tls, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArnList !== undefined &&
      input.CertificateAuthorityArnList !== null && {
        certificateAuthorityArnList: serializeAws_restJson1__listOf__string(input.CertificateAuthorityArnList, context),
      }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfBrokerEBSVolumeInfo = (
  output: any,
  context: __SerdeContext
): BrokerEBSVolumeInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BrokerEBSVolumeInfo(entry, context);
    });
};

const deserializeAws_restJson1__listOfClusterInfo = (output: any, context: __SerdeContext): ClusterInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ClusterInfo(entry, context);
    });
};

const deserializeAws_restJson1__listOfClusterOperationInfo = (
  output: any,
  context: __SerdeContext
): ClusterOperationInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ClusterOperationInfo(entry, context);
    });
};

const deserializeAws_restJson1__listOfClusterOperationStep = (
  output: any,
  context: __SerdeContext
): ClusterOperationStep[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ClusterOperationStep(entry, context);
    });
};

const deserializeAws_restJson1__listOfCompatibleKafkaVersion = (
  output: any,
  context: __SerdeContext
): CompatibleKafkaVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CompatibleKafkaVersion(entry, context);
    });
};

const deserializeAws_restJson1__listOfConfiguration = (output: any, context: __SerdeContext): Configuration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Configuration(entry, context);
    });
};

const deserializeAws_restJson1__listOfConfigurationRevision = (
  output: any,
  context: __SerdeContext
): ConfigurationRevision[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfigurationRevision(entry, context);
    });
};

const deserializeAws_restJson1__listOfKafkaVersion = (output: any, context: __SerdeContext): KafkaVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KafkaVersion(entry, context);
    });
};

const deserializeAws_restJson1__listOfNodeInfo = (output: any, context: __SerdeContext): NodeInfo[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NodeInfo(entry, context);
    });
};

const deserializeAws_restJson1__listOfUnprocessedScramSecret = (
  output: any,
  context: __SerdeContext
): UnprocessedScramSecret[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UnprocessedScramSecret(entry, context);
    });
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1BrokerEBSVolumeInfo = (output: any, context: __SerdeContext): BrokerEBSVolumeInfo => {
  return {
    KafkaBrokerNodeId: __expectString(output.kafkaBrokerNodeId),
    VolumeSizeGB: __expectInt(output.volumeSizeGB),
  } as any;
};

const deserializeAws_restJson1BrokerLogs = (output: any, context: __SerdeContext): BrokerLogs => {
  return {
    CloudWatchLogs:
      output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
        ? deserializeAws_restJson1CloudWatchLogs(output.cloudWatchLogs, context)
        : undefined,
    Firehose:
      output.firehose !== undefined && output.firehose !== null
        ? deserializeAws_restJson1Firehose(output.firehose, context)
        : undefined,
    S3: output.s3 !== undefined && output.s3 !== null ? deserializeAws_restJson1S3(output.s3, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BrokerNodeGroupInfo = (output: any, context: __SerdeContext): BrokerNodeGroupInfo => {
  return {
    BrokerAZDistribution: __expectString(output.brokerAZDistribution),
    ClientSubnets:
      output.clientSubnets !== undefined && output.clientSubnets !== null
        ? deserializeAws_restJson1__listOf__string(output.clientSubnets, context)
        : undefined,
    InstanceType: __expectString(output.instanceType),
    SecurityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_restJson1__listOf__string(output.securityGroups, context)
        : undefined,
    StorageInfo:
      output.storageInfo !== undefined && output.storageInfo !== null
        ? deserializeAws_restJson1StorageInfo(output.storageInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BrokerNodeInfo = (output: any, context: __SerdeContext): BrokerNodeInfo => {
  return {
    AttachedENIId: __expectString(output.attachedENIId),
    BrokerId: __limitedParseFloat(output.brokerId),
    ClientSubnet: __expectString(output.clientSubnet),
    ClientVpcIpAddress: __expectString(output.clientVpcIpAddress),
    CurrentBrokerSoftwareInfo:
      output.currentBrokerSoftwareInfo !== undefined && output.currentBrokerSoftwareInfo !== null
        ? deserializeAws_restJson1BrokerSoftwareInfo(output.currentBrokerSoftwareInfo, context)
        : undefined,
    Endpoints:
      output.endpoints !== undefined && output.endpoints !== null
        ? deserializeAws_restJson1__listOf__string(output.endpoints, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BrokerSoftwareInfo = (output: any, context: __SerdeContext): BrokerSoftwareInfo => {
  return {
    ConfigurationArn: __expectString(output.configurationArn),
    ConfigurationRevision: __expectInt(output.configurationRevision),
    KafkaVersion: __expectString(output.kafkaVersion),
  } as any;
};

const deserializeAws_restJson1ClientAuthentication = (output: any, context: __SerdeContext): ClientAuthentication => {
  return {
    Sasl:
      output.sasl !== undefined && output.sasl !== null
        ? deserializeAws_restJson1Sasl(output.sasl, context)
        : undefined,
    Tls: output.tls !== undefined && output.tls !== null ? deserializeAws_restJson1Tls(output.tls, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CloudWatchLogs = (output: any, context: __SerdeContext): CloudWatchLogs => {
  return {
    Enabled: __expectBoolean(output.enabled),
    LogGroup: __expectString(output.logGroup),
  } as any;
};

const deserializeAws_restJson1ClusterInfo = (output: any, context: __SerdeContext): ClusterInfo => {
  return {
    ActiveOperationArn: __expectString(output.activeOperationArn),
    BrokerNodeGroupInfo:
      output.brokerNodeGroupInfo !== undefined && output.brokerNodeGroupInfo !== null
        ? deserializeAws_restJson1BrokerNodeGroupInfo(output.brokerNodeGroupInfo, context)
        : undefined,
    ClientAuthentication:
      output.clientAuthentication !== undefined && output.clientAuthentication !== null
        ? deserializeAws_restJson1ClientAuthentication(output.clientAuthentication, context)
        : undefined,
    ClusterArn: __expectString(output.clusterArn),
    ClusterName: __expectString(output.clusterName),
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
    CurrentBrokerSoftwareInfo:
      output.currentBrokerSoftwareInfo !== undefined && output.currentBrokerSoftwareInfo !== null
        ? deserializeAws_restJson1BrokerSoftwareInfo(output.currentBrokerSoftwareInfo, context)
        : undefined,
    CurrentVersion: __expectString(output.currentVersion),
    EncryptionInfo:
      output.encryptionInfo !== undefined && output.encryptionInfo !== null
        ? deserializeAws_restJson1EncryptionInfo(output.encryptionInfo, context)
        : undefined,
    EnhancedMonitoring: __expectString(output.enhancedMonitoring),
    LoggingInfo:
      output.loggingInfo !== undefined && output.loggingInfo !== null
        ? deserializeAws_restJson1LoggingInfo(output.loggingInfo, context)
        : undefined,
    NumberOfBrokerNodes: __expectInt(output.numberOfBrokerNodes),
    OpenMonitoring:
      output.openMonitoring !== undefined && output.openMonitoring !== null
        ? deserializeAws_restJson1OpenMonitoring(output.openMonitoring, context)
        : undefined,
    State: __expectString(output.state),
    StateInfo:
      output.stateInfo !== undefined && output.stateInfo !== null
        ? deserializeAws_restJson1StateInfo(output.stateInfo, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
    ZookeeperConnectString: __expectString(output.zookeeperConnectString),
    ZookeeperConnectStringTls: __expectString(output.zookeeperConnectStringTls),
  } as any;
};

const deserializeAws_restJson1ClusterOperationInfo = (output: any, context: __SerdeContext): ClusterOperationInfo => {
  return {
    ClientRequestId: __expectString(output.clientRequestId),
    ClusterArn: __expectString(output.clusterArn),
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
    EndTime: output.endTime !== undefined && output.endTime !== null ? new Date(output.endTime) : undefined,
    ErrorInfo:
      output.errorInfo !== undefined && output.errorInfo !== null
        ? deserializeAws_restJson1ErrorInfo(output.errorInfo, context)
        : undefined,
    OperationArn: __expectString(output.operationArn),
    OperationState: __expectString(output.operationState),
    OperationSteps:
      output.operationSteps !== undefined && output.operationSteps !== null
        ? deserializeAws_restJson1__listOfClusterOperationStep(output.operationSteps, context)
        : undefined,
    OperationType: __expectString(output.operationType),
    SourceClusterInfo:
      output.sourceClusterInfo !== undefined && output.sourceClusterInfo !== null
        ? deserializeAws_restJson1MutableClusterInfo(output.sourceClusterInfo, context)
        : undefined,
    TargetClusterInfo:
      output.targetClusterInfo !== undefined && output.targetClusterInfo !== null
        ? deserializeAws_restJson1MutableClusterInfo(output.targetClusterInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ClusterOperationStep = (output: any, context: __SerdeContext): ClusterOperationStep => {
  return {
    StepInfo:
      output.stepInfo !== undefined && output.stepInfo !== null
        ? deserializeAws_restJson1ClusterOperationStepInfo(output.stepInfo, context)
        : undefined,
    StepName: __expectString(output.stepName),
  } as any;
};

const deserializeAws_restJson1ClusterOperationStepInfo = (
  output: any,
  context: __SerdeContext
): ClusterOperationStepInfo => {
  return {
    StepStatus: __expectString(output.stepStatus),
  } as any;
};

const deserializeAws_restJson1CompatibleKafkaVersion = (
  output: any,
  context: __SerdeContext
): CompatibleKafkaVersion => {
  return {
    SourceVersion: __expectString(output.sourceVersion),
    TargetVersions:
      output.targetVersions !== undefined && output.targetVersions !== null
        ? deserializeAws_restJson1__listOf__string(output.targetVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    Arn: __expectString(output.arn),
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
    Description: __expectString(output.description),
    KafkaVersions:
      output.kafkaVersions !== undefined && output.kafkaVersions !== null
        ? deserializeAws_restJson1__listOf__string(output.kafkaVersions, context)
        : undefined,
    LatestRevision:
      output.latestRevision !== undefined && output.latestRevision !== null
        ? deserializeAws_restJson1ConfigurationRevision(output.latestRevision, context)
        : undefined,
    Name: __expectString(output.name),
    State: __expectString(output.state),
  } as any;
};

const deserializeAws_restJson1ConfigurationInfo = (output: any, context: __SerdeContext): ConfigurationInfo => {
  return {
    Arn: __expectString(output.arn),
    Revision: __expectInt(output.revision),
  } as any;
};

const deserializeAws_restJson1ConfigurationRevision = (output: any, context: __SerdeContext): ConfigurationRevision => {
  return {
    CreationTime:
      output.creationTime !== undefined && output.creationTime !== null ? new Date(output.creationTime) : undefined,
    Description: __expectString(output.description),
    Revision: __expectInt(output.revision),
  } as any;
};

const deserializeAws_restJson1EBSStorageInfo = (output: any, context: __SerdeContext): EBSStorageInfo => {
  return {
    VolumeSize: __expectInt(output.volumeSize),
  } as any;
};

const deserializeAws_restJson1EncryptionAtRest = (output: any, context: __SerdeContext): EncryptionAtRest => {
  return {
    DataVolumeKMSKeyId: __expectString(output.dataVolumeKMSKeyId),
  } as any;
};

const deserializeAws_restJson1EncryptionInfo = (output: any, context: __SerdeContext): EncryptionInfo => {
  return {
    EncryptionAtRest:
      output.encryptionAtRest !== undefined && output.encryptionAtRest !== null
        ? deserializeAws_restJson1EncryptionAtRest(output.encryptionAtRest, context)
        : undefined,
    EncryptionInTransit:
      output.encryptionInTransit !== undefined && output.encryptionInTransit !== null
        ? deserializeAws_restJson1EncryptionInTransit(output.encryptionInTransit, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EncryptionInTransit = (output: any, context: __SerdeContext): EncryptionInTransit => {
  return {
    ClientBroker: __expectString(output.clientBroker),
    InCluster: __expectBoolean(output.inCluster),
  } as any;
};

const deserializeAws_restJson1ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return {
    ErrorCode: __expectString(output.errorCode),
    ErrorString: __expectString(output.errorString),
  } as any;
};

const deserializeAws_restJson1Firehose = (output: any, context: __SerdeContext): Firehose => {
  return {
    DeliveryStream: __expectString(output.deliveryStream),
    Enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1Iam = (output: any, context: __SerdeContext): Iam => {
  return {
    Enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1JmxExporter = (output: any, context: __SerdeContext): JmxExporter => {
  return {
    EnabledInBroker: __expectBoolean(output.enabledInBroker),
  } as any;
};

const deserializeAws_restJson1KafkaVersion = (output: any, context: __SerdeContext): KafkaVersion => {
  return {
    Status: __expectString(output.status),
    Version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1LoggingInfo = (output: any, context: __SerdeContext): LoggingInfo => {
  return {
    BrokerLogs:
      output.brokerLogs !== undefined && output.brokerLogs !== null
        ? deserializeAws_restJson1BrokerLogs(output.brokerLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MutableClusterInfo = (output: any, context: __SerdeContext): MutableClusterInfo => {
  return {
    BrokerEBSVolumeInfo:
      output.brokerEBSVolumeInfo !== undefined && output.brokerEBSVolumeInfo !== null
        ? deserializeAws_restJson1__listOfBrokerEBSVolumeInfo(output.brokerEBSVolumeInfo, context)
        : undefined,
    ConfigurationInfo:
      output.configurationInfo !== undefined && output.configurationInfo !== null
        ? deserializeAws_restJson1ConfigurationInfo(output.configurationInfo, context)
        : undefined,
    EnhancedMonitoring: __expectString(output.enhancedMonitoring),
    InstanceType: __expectString(output.instanceType),
    KafkaVersion: __expectString(output.kafkaVersion),
    LoggingInfo:
      output.loggingInfo !== undefined && output.loggingInfo !== null
        ? deserializeAws_restJson1LoggingInfo(output.loggingInfo, context)
        : undefined,
    NumberOfBrokerNodes: __expectInt(output.numberOfBrokerNodes),
    OpenMonitoring:
      output.openMonitoring !== undefined && output.openMonitoring !== null
        ? deserializeAws_restJson1OpenMonitoring(output.openMonitoring, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NodeExporter = (output: any, context: __SerdeContext): NodeExporter => {
  return {
    EnabledInBroker: __expectBoolean(output.enabledInBroker),
  } as any;
};

const deserializeAws_restJson1NodeInfo = (output: any, context: __SerdeContext): NodeInfo => {
  return {
    AddedToClusterTime: __expectString(output.addedToClusterTime),
    BrokerNodeInfo:
      output.brokerNodeInfo !== undefined && output.brokerNodeInfo !== null
        ? deserializeAws_restJson1BrokerNodeInfo(output.brokerNodeInfo, context)
        : undefined,
    InstanceType: __expectString(output.instanceType),
    NodeARN: __expectString(output.nodeARN),
    NodeType: __expectString(output.nodeType),
    ZookeeperNodeInfo:
      output.zookeeperNodeInfo !== undefined && output.zookeeperNodeInfo !== null
        ? deserializeAws_restJson1ZookeeperNodeInfo(output.zookeeperNodeInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OpenMonitoring = (output: any, context: __SerdeContext): OpenMonitoring => {
  return {
    Prometheus:
      output.prometheus !== undefined && output.prometheus !== null
        ? deserializeAws_restJson1Prometheus(output.prometheus, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Prometheus = (output: any, context: __SerdeContext): Prometheus => {
  return {
    JmxExporter:
      output.jmxExporter !== undefined && output.jmxExporter !== null
        ? deserializeAws_restJson1JmxExporter(output.jmxExporter, context)
        : undefined,
    NodeExporter:
      output.nodeExporter !== undefined && output.nodeExporter !== null
        ? deserializeAws_restJson1NodeExporter(output.nodeExporter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3 = (output: any, context: __SerdeContext): S3 => {
  return {
    Bucket: __expectString(output.bucket),
    Enabled: __expectBoolean(output.enabled),
    Prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_restJson1Sasl = (output: any, context: __SerdeContext): Sasl => {
  return {
    Iam: output.iam !== undefined && output.iam !== null ? deserializeAws_restJson1Iam(output.iam, context) : undefined,
    Scram:
      output.scram !== undefined && output.scram !== null
        ? deserializeAws_restJson1Scram(output.scram, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Scram = (output: any, context: __SerdeContext): Scram => {
  return {
    Enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1StateInfo = (output: any, context: __SerdeContext): StateInfo => {
  return {
    Code: __expectString(output.code),
    Message: __expectString(output.message),
  } as any;
};

const deserializeAws_restJson1StorageInfo = (output: any, context: __SerdeContext): StorageInfo => {
  return {
    EbsStorageInfo:
      output.ebsStorageInfo !== undefined && output.ebsStorageInfo !== null
        ? deserializeAws_restJson1EBSStorageInfo(output.ebsStorageInfo, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Tls = (output: any, context: __SerdeContext): Tls => {
  return {
    CertificateAuthorityArnList:
      output.certificateAuthorityArnList !== undefined && output.certificateAuthorityArnList !== null
        ? deserializeAws_restJson1__listOf__string(output.certificateAuthorityArnList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UnprocessedScramSecret = (
  output: any,
  context: __SerdeContext
): UnprocessedScramSecret => {
  return {
    ErrorCode: __expectString(output.errorCode),
    ErrorMessage: __expectString(output.errorMessage),
    SecretArn: __expectString(output.secretArn),
  } as any;
};

const deserializeAws_restJson1ZookeeperNodeInfo = (output: any, context: __SerdeContext): ZookeeperNodeInfo => {
  return {
    AttachedENIId: __expectString(output.attachedENIId),
    ClientVpcIpAddress: __expectString(output.clientVpcIpAddress),
    Endpoints:
      output.endpoints !== undefined && output.endpoints !== null
        ? deserializeAws_restJson1__listOf__string(output.endpoints, context)
        : undefined,
    ZookeeperId: __limitedParseFloat(output.zookeeperId),
    ZookeeperVersion: __expectString(output.zookeeperVersion),
  } as any;
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
