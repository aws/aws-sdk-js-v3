// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchAssociateScramSecretCommandInput,
  BatchAssociateScramSecretCommandOutput,
} from "../commands/BatchAssociateScramSecretCommand";
import {
  BatchDisassociateScramSecretCommandInput,
  BatchDisassociateScramSecretCommandOutput,
} from "../commands/BatchDisassociateScramSecretCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import { CreateClusterV2CommandInput, CreateClusterV2CommandOutput } from "../commands/CreateClusterV2Command";
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
import { DescribeClusterV2CommandInput, DescribeClusterV2CommandOutput } from "../commands/DescribeClusterV2Command";
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
import { ListClustersV2CommandInput, ListClustersV2CommandOutput } from "../commands/ListClustersV2Command";
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
import { UpdateConnectivityCommandInput, UpdateConnectivityCommandOutput } from "../commands/UpdateConnectivityCommand";
import { UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput } from "../commands/UpdateMonitoringCommand";
import { UpdateSecurityCommandInput, UpdateSecurityCommandOutput } from "../commands/UpdateSecurityCommand";
import { UpdateStorageCommandInput, UpdateStorageCommandOutput } from "../commands/UpdateStorageCommand";
import { KafkaServiceException as __BaseException } from "../models/KafkaServiceException";
import {
  BadRequestException,
  BrokerEBSVolumeInfo,
  BrokerLogs,
  BrokerNodeGroupInfo,
  BrokerNodeInfo,
  BrokerSoftwareInfo,
  ClientAuthentication,
  CloudWatchLogs,
  Cluster,
  ClusterInfo,
  ClusterOperationInfo,
  ClusterOperationStep,
  ClusterOperationStepInfo,
  CompatibleKafkaVersion,
  Configuration,
  ConfigurationInfo,
  ConfigurationRevision,
  ConflictException,
  ConnectivityInfo,
  EBSStorageInfo,
  EncryptionAtRest,
  EncryptionInfo,
  EncryptionInTransit,
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
  Provisioned,
  ProvisionedRequest,
  ProvisionedThroughput,
  PublicAccess,
  S3,
  Sasl,
  Scram,
  Serverless,
  ServerlessClientAuthentication,
  ServerlessRequest,
  ServerlessSasl,
  ServiceUnavailableException,
  StateInfo,
  StorageInfo,
  Tls,
  TooManyRequestsException,
  Unauthenticated,
  UnauthorizedException,
  UnprocessedScramSecret,
  VpcConfig,
  ZookeeperNodeInfo,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchAssociateScramSecretCommand
 */
export const se_BatchAssociateScramSecretCommand = async (
  input: BatchAssociateScramSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/scram-secrets";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.SecretArnList != null && { secretArnList: se___listOf__string(input.SecretArnList, context) }),
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
 * serializeAws_restJson1BatchDisassociateScramSecretCommand
 */
export const se_BatchDisassociateScramSecretCommand = async (
  input: BatchDisassociateScramSecretCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/scram-secrets";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.SecretArnList != null && { secretArnList: se___listOf__string(input.SecretArnList, context) }),
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

/**
 * serializeAws_restJson1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters";
  let body: any;
  body = JSON.stringify({
    ...(input.BrokerNodeGroupInfo != null && {
      brokerNodeGroupInfo: se_BrokerNodeGroupInfo(input.BrokerNodeGroupInfo, context),
    }),
    ...(input.ClientAuthentication != null && {
      clientAuthentication: se_ClientAuthentication(input.ClientAuthentication, context),
    }),
    ...(input.ClusterName != null && { clusterName: input.ClusterName }),
    ...(input.ConfigurationInfo != null && {
      configurationInfo: se_ConfigurationInfo(input.ConfigurationInfo, context),
    }),
    ...(input.EncryptionInfo != null && { encryptionInfo: se_EncryptionInfo(input.EncryptionInfo, context) }),
    ...(input.EnhancedMonitoring != null && { enhancedMonitoring: input.EnhancedMonitoring }),
    ...(input.KafkaVersion != null && { kafkaVersion: input.KafkaVersion }),
    ...(input.LoggingInfo != null && { loggingInfo: se_LoggingInfo(input.LoggingInfo, context) }),
    ...(input.NumberOfBrokerNodes != null && { numberOfBrokerNodes: input.NumberOfBrokerNodes }),
    ...(input.OpenMonitoring != null && { openMonitoring: se_OpenMonitoringInfo(input.OpenMonitoring, context) }),
    ...(input.StorageMode != null && { storageMode: input.StorageMode }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1CreateClusterV2Command
 */
export const se_CreateClusterV2Command = async (
  input: CreateClusterV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v2/clusters";
  let body: any;
  body = JSON.stringify({
    ...(input.ClusterName != null && { clusterName: input.ClusterName }),
    ...(input.Provisioned != null && { provisioned: se_ProvisionedRequest(input.Provisioned, context) }),
    ...(input.Serverless != null && { serverless: se_ServerlessRequest(input.Serverless, context) }),
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
 * serializeAws_restJson1CreateConfigurationCommand
 */
export const se_CreateConfigurationCommand = async (
  input: CreateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { description: input.Description }),
    ...(input.KafkaVersions != null && { kafkaVersions: se___listOf__string(input.KafkaVersions, context) }),
    ...(input.Name != null && { name: input.Name }),
    ...(input.ServerProperties != null && { serverProperties: context.base64Encoder(input.ServerProperties) }),
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
 * serializeAws_restJson1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  const query: any = map({
    currentVersion: [, input.CurrentVersion!],
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
 * serializeAws_restJson1DeleteConfigurationCommand
 */
export const se_DeleteConfigurationCommand = async (
  input: DeleteConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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

/**
 * serializeAws_restJson1DescribeClusterCommand
 */
export const se_DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
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
 * serializeAws_restJson1DescribeClusterOperationCommand
 */
export const se_DescribeClusterOperationCommand = async (
  input: DescribeClusterOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/operations/{ClusterOperationArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ClusterOperationArn",
    () => input.ClusterOperationArn!,
    "{ClusterOperationArn}",
    false
  );
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
 * serializeAws_restJson1DescribeClusterV2Command
 */
export const se_DescribeClusterV2Command = async (
  input: DescribeClusterV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v2/clusters/{ClusterArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
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
 * serializeAws_restJson1DescribeConfigurationCommand
 */
export const se_DescribeConfigurationCommand = async (
  input: DescribeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
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
 * serializeAws_restJson1DescribeConfigurationRevisionCommand
 */
export const se_DescribeConfigurationRevisionCommand = async (
  input: DescribeConfigurationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/configurations/{Arn}/revisions/{Revision}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "Revision", () => input.Revision!.toString(), "{Revision}", false);
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
 * serializeAws_restJson1GetBootstrapBrokersCommand
 */
export const se_GetBootstrapBrokersCommand = async (
  input: GetBootstrapBrokersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/clusters/{ClusterArn}/bootstrap-brokers";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
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
 * serializeAws_restJson1GetCompatibleKafkaVersionsCommand
 */
export const se_GetCompatibleKafkaVersionsCommand = async (
  input: GetCompatibleKafkaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/compatible-kafka-versions";
  const query: any = map({
    clusterArn: [, input.ClusterArn!],
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
 * serializeAws_restJson1ListClusterOperationsCommand
 */
export const se_ListClusterOperationsCommand = async (
  input: ListClusterOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/operations";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters";
  const query: any = map({
    clusterNameFilter: [, input.ClusterNameFilter!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListClustersV2Command
 */
export const se_ListClustersV2Command = async (
  input: ListClustersV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v2/clusters";
  const query: any = map({
    clusterNameFilter: [, input.ClusterNameFilter!],
    clusterTypeFilter: [, input.ClusterTypeFilter!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListConfigurationRevisionsCommand
 */
export const se_ListConfigurationRevisionsCommand = async (
  input: ListConfigurationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{Arn}/revisions";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListConfigurationsCommand
 */
export const se_ListConfigurationsCommand = async (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListKafkaVersionsCommand
 */
export const se_ListKafkaVersionsCommand = async (
  input: ListKafkaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/kafka-versions";
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListNodesCommand
 */
export const se_ListNodesCommand = async (
  input: ListNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/nodes";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListScramSecretsCommand
 */
export const se_ListScramSecretsCommand = async (
  input: ListScramSecretsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/scram-secrets";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  const query: any = map({
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    nextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
 * serializeAws_restJson1RebootBrokerCommand
 */
export const se_RebootBrokerCommand = async (
  input: RebootBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/reboot-broker";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.BrokerIds != null && { brokerIds: se___listOf__string(input.BrokerIds, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se___mapOf__string(input.Tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateBrokerCountCommand
 */
export const se_UpdateBrokerCountCommand = async (
  input: UpdateBrokerCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/nodes/count";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
    ...(input.TargetNumberOfBrokerNodes != null && { targetNumberOfBrokerNodes: input.TargetNumberOfBrokerNodes }),
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
 * serializeAws_restJson1UpdateBrokerStorageCommand
 */
export const se_UpdateBrokerStorageCommand = async (
  input: UpdateBrokerStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/nodes/storage";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
    ...(input.TargetBrokerEBSVolumeInfo != null && {
      targetBrokerEBSVolumeInfo: se___listOfBrokerEBSVolumeInfo(input.TargetBrokerEBSVolumeInfo, context),
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

/**
 * serializeAws_restJson1UpdateBrokerTypeCommand
 */
export const se_UpdateBrokerTypeCommand = async (
  input: UpdateBrokerTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/nodes/type";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
    ...(input.TargetInstanceType != null && { targetInstanceType: input.TargetInstanceType }),
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
 * serializeAws_restJson1UpdateClusterConfigurationCommand
 */
export const se_UpdateClusterConfigurationCommand = async (
  input: UpdateClusterConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationInfo != null && {
      configurationInfo: se_ConfigurationInfo(input.ConfigurationInfo, context),
    }),
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
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
 * serializeAws_restJson1UpdateClusterKafkaVersionCommand
 */
export const se_UpdateClusterKafkaVersionCommand = async (
  input: UpdateClusterKafkaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/version";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConfigurationInfo != null && {
      configurationInfo: se_ConfigurationInfo(input.ConfigurationInfo, context),
    }),
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
    ...(input.TargetKafkaVersion != null && { targetKafkaVersion: input.TargetKafkaVersion }),
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
 * serializeAws_restJson1UpdateConfigurationCommand
 */
export const se_UpdateConfigurationCommand = async (
  input: UpdateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{Arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "Arn", () => input.Arn!, "{Arn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { description: input.Description }),
    ...(input.ServerProperties != null && { serverProperties: context.base64Encoder(input.ServerProperties) }),
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
 * serializeAws_restJson1UpdateConnectivityCommand
 */
export const se_UpdateConnectivityCommand = async (
  input: UpdateConnectivityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/connectivity";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ConnectivityInfo != null && { connectivityInfo: se_ConnectivityInfo(input.ConnectivityInfo, context) }),
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
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
 * serializeAws_restJson1UpdateMonitoringCommand
 */
export const se_UpdateMonitoringCommand = async (
  input: UpdateMonitoringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/monitoring";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
    ...(input.EnhancedMonitoring != null && { enhancedMonitoring: input.EnhancedMonitoring }),
    ...(input.LoggingInfo != null && { loggingInfo: se_LoggingInfo(input.LoggingInfo, context) }),
    ...(input.OpenMonitoring != null && { openMonitoring: se_OpenMonitoringInfo(input.OpenMonitoring, context) }),
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
 * serializeAws_restJson1UpdateSecurityCommand
 */
export const se_UpdateSecurityCommand = async (
  input: UpdateSecurityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/security";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.ClientAuthentication != null && {
      clientAuthentication: se_ClientAuthentication(input.ClientAuthentication, context),
    }),
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
    ...(input.EncryptionInfo != null && { encryptionInfo: se_EncryptionInfo(input.EncryptionInfo, context) }),
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

/**
 * serializeAws_restJson1UpdateStorageCommand
 */
export const se_UpdateStorageCommand = async (
  input: UpdateStorageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/storage";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.CurrentVersion != null && { currentVersion: input.CurrentVersion }),
    ...(input.ProvisionedThroughput != null && {
      provisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.StorageMode != null && { storageMode: input.StorageMode }),
    ...(input.VolumeSizeGB != null && { volumeSizeGB: input.VolumeSizeGB }),
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
 * deserializeAws_restJson1BatchAssociateScramSecretCommand
 */
export const de_BatchAssociateScramSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateScramSecretCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchAssociateScramSecretCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.unprocessedScramSecrets != null) {
    contents.UnprocessedScramSecrets = de___listOfUnprocessedScramSecret(data.unprocessedScramSecrets, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchAssociateScramSecretCommandError
 */
const de_BatchAssociateScramSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateScramSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchDisassociateScramSecretCommand
 */
export const de_BatchDisassociateScramSecretCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateScramSecretCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDisassociateScramSecretCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.unprocessedScramSecrets != null) {
    contents.UnprocessedScramSecrets = de___listOfUnprocessedScramSecret(data.unprocessedScramSecrets, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateScramSecretCommandError
 */
const de_BatchDisassociateScramSecretCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateScramSecretCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterName != null) {
    contents.ClusterName = __expectString(data.clusterName);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateClusterCommandError
 */
const de_CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateClusterV2Command
 */
export const de_CreateClusterV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateClusterV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterName != null) {
    contents.ClusterName = __expectString(data.clusterName);
  }
  if (data.clusterType != null) {
    contents.ClusterType = __expectString(data.clusterType);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateClusterV2CommandError
 */
const de_CreateClusterV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateConfigurationCommand
 */
export const de_CreateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.latestRevision != null) {
    contents.LatestRevision = de_ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateConfigurationCommandError
 */
const de_CreateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteClusterCommandError
 */
const de_DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteConfigurationCommand
 */
export const de_DeleteConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConfigurationCommandError
 */
const de_DeleteConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeClusterCommand
 */
export const de_DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterInfo != null) {
    contents.ClusterInfo = de_ClusterInfo(data.clusterInfo, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeClusterCommandError
 */
const de_DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeClusterOperationCommand
 */
export const de_DescribeClusterOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeClusterOperationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterOperationInfo != null) {
    contents.ClusterOperationInfo = de_ClusterOperationInfo(data.clusterOperationInfo, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeClusterOperationCommandError
 */
const de_DescribeClusterOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeClusterV2Command
 */
export const de_DescribeClusterV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeClusterV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterInfo != null) {
    contents.ClusterInfo = de_Cluster(data.clusterInfo, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeClusterV2CommandError
 */
const de_DescribeClusterV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeConfigurationCommand
 */
export const de_DescribeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.kafkaVersions != null) {
    contents.KafkaVersions = de___listOf__string(data.kafkaVersions, context);
  }
  if (data.latestRevision != null) {
    contents.LatestRevision = de_ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name != null) {
    contents.Name = __expectString(data.name);
  }
  if (data.state != null) {
    contents.State = __expectString(data.state);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConfigurationCommandError
 */
const de_DescribeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeConfigurationRevisionCommand
 */
export const de_DescribeConfigurationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeConfigurationRevisionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.creationTime != null) {
    contents.CreationTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.creationTime));
  }
  if (data.description != null) {
    contents.Description = __expectString(data.description);
  }
  if (data.revision != null) {
    contents.Revision = __expectLong(data.revision);
  }
  if (data.serverProperties != null) {
    contents.ServerProperties = context.base64Decoder(data.serverProperties);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeConfigurationRevisionCommandError
 */
const de_DescribeConfigurationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetBootstrapBrokersCommand
 */
export const de_GetBootstrapBrokersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBootstrapBrokersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBootstrapBrokersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.bootstrapBrokerString != null) {
    contents.BootstrapBrokerString = __expectString(data.bootstrapBrokerString);
  }
  if (data.bootstrapBrokerStringPublicSaslIam != null) {
    contents.BootstrapBrokerStringPublicSaslIam = __expectString(data.bootstrapBrokerStringPublicSaslIam);
  }
  if (data.bootstrapBrokerStringPublicSaslScram != null) {
    contents.BootstrapBrokerStringPublicSaslScram = __expectString(data.bootstrapBrokerStringPublicSaslScram);
  }
  if (data.bootstrapBrokerStringPublicTls != null) {
    contents.BootstrapBrokerStringPublicTls = __expectString(data.bootstrapBrokerStringPublicTls);
  }
  if (data.bootstrapBrokerStringSaslIam != null) {
    contents.BootstrapBrokerStringSaslIam = __expectString(data.bootstrapBrokerStringSaslIam);
  }
  if (data.bootstrapBrokerStringSaslScram != null) {
    contents.BootstrapBrokerStringSaslScram = __expectString(data.bootstrapBrokerStringSaslScram);
  }
  if (data.bootstrapBrokerStringTls != null) {
    contents.BootstrapBrokerStringTls = __expectString(data.bootstrapBrokerStringTls);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetBootstrapBrokersCommandError
 */
const de_GetBootstrapBrokersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBootstrapBrokersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.kafka#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetCompatibleKafkaVersionsCommand
 */
export const de_GetCompatibleKafkaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleKafkaVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCompatibleKafkaVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.compatibleKafkaVersions != null) {
    contents.CompatibleKafkaVersions = de___listOfCompatibleKafkaVersion(data.compatibleKafkaVersions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCompatibleKafkaVersionsCommandError
 */
const de_GetCompatibleKafkaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCompatibleKafkaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListClusterOperationsCommand
 */
export const de_ListClusterOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClusterOperationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterOperationInfoList != null) {
    contents.ClusterOperationInfoList = de___listOfClusterOperationInfo(data.clusterOperationInfoList, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListClusterOperationsCommandError
 */
const de_ListClusterOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClustersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterInfoList != null) {
    contents.ClusterInfoList = de___listOfClusterInfo(data.clusterInfoList, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListClustersCommandError
 */
const de_ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListClustersV2Command
 */
export const de_ListClustersV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClustersV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterInfoList != null) {
    contents.ClusterInfoList = de___listOfCluster(data.clusterInfoList, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListClustersV2CommandError
 */
const de_ListClustersV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersV2CommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfigurationRevisionsCommand
 */
export const de_ListConfigurationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfigurationRevisionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.revisions != null) {
    contents.Revisions = de___listOfConfigurationRevision(data.revisions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationRevisionsCommandError
 */
const de_ListConfigurationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListConfigurationsCommand
 */
export const de_ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListConfigurationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurations != null) {
    contents.Configurations = de___listOfConfiguration(data.configurations, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListConfigurationsCommandError
 */
const de_ListConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListKafkaVersionsCommand
 */
export const de_ListKafkaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKafkaVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListKafkaVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.kafkaVersions != null) {
    contents.KafkaVersions = de___listOfKafkaVersion(data.kafkaVersions, context);
  }
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListKafkaVersionsCommandError
 */
const de_ListKafkaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListKafkaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListNodesCommand
 */
export const de_ListNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNodesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.nodeInfoList != null) {
    contents.NodeInfoList = de___listOfNodeInfo(data.nodeInfoList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNodesCommandError
 */
const de_ListNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListScramSecretsCommand
 */
export const de_ListScramSecretsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScramSecretsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListScramSecretsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.secretArnList != null) {
    contents.SecretArnList = de___listOf__string(data.secretArnList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListScramSecretsCommandError
 */
const de_ListScramSecretsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListScramSecretsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
    contents.Tags = de___mapOf__string(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RebootBrokerCommand
 */
export const de_RebootBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RebootBrokerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RebootBrokerCommandError
 */
const de_RebootBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBrokerCountCommand
 */
export const de_UpdateBrokerCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBrokerCountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrokerCountCommandError
 */
const de_UpdateBrokerCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBrokerStorageCommand
 */
export const de_UpdateBrokerStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBrokerStorageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrokerStorageCommandError
 */
const de_UpdateBrokerStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateBrokerTypeCommand
 */
export const de_UpdateBrokerTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBrokerTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBrokerTypeCommandError
 */
const de_UpdateBrokerTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateClusterConfigurationCommand
 */
export const de_UpdateClusterConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateClusterConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClusterConfigurationCommandError
 */
const de_UpdateClusterConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateClusterKafkaVersionCommand
 */
export const de_UpdateClusterKafkaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterKafkaVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateClusterKafkaVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClusterKafkaVersionCommandError
 */
const de_UpdateClusterKafkaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterKafkaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConfigurationCommand
 */
export const de_UpdateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.latestRevision != null) {
    contents.LatestRevision = de_ConfigurationRevision(data.latestRevision, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConfigurationCommandError
 */
const de_UpdateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateConnectivityCommand
 */
export const de_UpdateConnectivityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConnectivityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectivityCommandError
 */
const de_UpdateConnectivityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateMonitoringCommand
 */
export const de_UpdateMonitoringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMonitoringCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMonitoringCommandError
 */
const de_UpdateMonitoringCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMonitoringCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateSecurityCommand
 */
export const de_UpdateSecurityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSecurityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSecurityCommandError
 */
const de_UpdateSecurityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateStorageCommand
 */
export const de_UpdateStorageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateStorageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusterArn != null) {
    contents.ClusterArn = __expectString(data.clusterArn);
  }
  if (data.clusterOperationArn != null) {
    contents.ClusterOperationArn = __expectString(data.clusterOperationArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateStorageCommandError
 */
const de_UpdateStorageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.kafka#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "ForbiddenException":
    case "com.amazonaws.kafka#ForbiddenException":
      throw await de_ForbiddenExceptionRes(parsedOutput, context);
    case "InternalServerErrorException":
    case "com.amazonaws.kafka#InternalServerErrorException":
      throw await de_InternalServerErrorExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.kafka#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.kafka#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.invalidParameter != null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.invalidParameter != null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ConflictException({
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
  if (data.invalidParameter != null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ForbiddenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerErrorExceptionRes
 */
const de_InternalServerErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.invalidParameter != null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new InternalServerErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.invalidParameter != null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new NotFoundException({
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
  if (data.invalidParameter != null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.invalidParameter != null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnauthorizedExceptionRes
 */
const de_UnauthorizedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.invalidParameter != null) {
    contents.InvalidParameter = __expectString(data.invalidParameter);
  }
  if (data.message != null) {
    contents.Message = __expectString(data.message);
  }
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1__listOf__string
 */
const se___listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1__listOfBrokerEBSVolumeInfo
 */
const se___listOfBrokerEBSVolumeInfo = (input: BrokerEBSVolumeInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BrokerEBSVolumeInfo(entry, context);
    });
};

/**
 * serializeAws_restJson1__listOfVpcConfig
 */
const se___listOfVpcConfig = (input: VpcConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VpcConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1__mapOf__string
 */
const se___mapOf__string = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1BrokerEBSVolumeInfo
 */
const se_BrokerEBSVolumeInfo = (input: BrokerEBSVolumeInfo, context: __SerdeContext): any => {
  return {
    ...(input.KafkaBrokerNodeId != null && { kafkaBrokerNodeId: input.KafkaBrokerNodeId }),
    ...(input.ProvisionedThroughput != null && {
      provisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.VolumeSizeGB != null && { volumeSizeGB: input.VolumeSizeGB }),
  };
};

/**
 * serializeAws_restJson1BrokerLogs
 */
const se_BrokerLogs = (input: BrokerLogs, context: __SerdeContext): any => {
  return {
    ...(input.CloudWatchLogs != null && { cloudWatchLogs: se_CloudWatchLogs(input.CloudWatchLogs, context) }),
    ...(input.Firehose != null && { firehose: se_Firehose(input.Firehose, context) }),
    ...(input.S3 != null && { s3: se_S3(input.S3, context) }),
  };
};

/**
 * serializeAws_restJson1BrokerNodeGroupInfo
 */
const se_BrokerNodeGroupInfo = (input: BrokerNodeGroupInfo, context: __SerdeContext): any => {
  return {
    ...(input.BrokerAZDistribution != null && { brokerAZDistribution: input.BrokerAZDistribution }),
    ...(input.ClientSubnets != null && { clientSubnets: se___listOf__string(input.ClientSubnets, context) }),
    ...(input.ConnectivityInfo != null && { connectivityInfo: se_ConnectivityInfo(input.ConnectivityInfo, context) }),
    ...(input.InstanceType != null && { instanceType: input.InstanceType }),
    ...(input.SecurityGroups != null && { securityGroups: se___listOf__string(input.SecurityGroups, context) }),
    ...(input.StorageInfo != null && { storageInfo: se_StorageInfo(input.StorageInfo, context) }),
  };
};

/**
 * serializeAws_restJson1ClientAuthentication
 */
const se_ClientAuthentication = (input: ClientAuthentication, context: __SerdeContext): any => {
  return {
    ...(input.Sasl != null && { sasl: se_Sasl(input.Sasl, context) }),
    ...(input.Tls != null && { tls: se_Tls(input.Tls, context) }),
    ...(input.Unauthenticated != null && { unauthenticated: se_Unauthenticated(input.Unauthenticated, context) }),
  };
};

/**
 * serializeAws_restJson1CloudWatchLogs
 */
const se_CloudWatchLogs = (input: CloudWatchLogs, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { enabled: input.Enabled }),
    ...(input.LogGroup != null && { logGroup: input.LogGroup }),
  };
};

/**
 * serializeAws_restJson1ConfigurationInfo
 */
const se_ConfigurationInfo = (input: ConfigurationInfo, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { arn: input.Arn }),
    ...(input.Revision != null && { revision: input.Revision }),
  };
};

/**
 * serializeAws_restJson1ConnectivityInfo
 */
const se_ConnectivityInfo = (input: ConnectivityInfo, context: __SerdeContext): any => {
  return {
    ...(input.PublicAccess != null && { publicAccess: se_PublicAccess(input.PublicAccess, context) }),
  };
};

/**
 * serializeAws_restJson1EBSStorageInfo
 */
const se_EBSStorageInfo = (input: EBSStorageInfo, context: __SerdeContext): any => {
  return {
    ...(input.ProvisionedThroughput != null && {
      provisionedThroughput: se_ProvisionedThroughput(input.ProvisionedThroughput, context),
    }),
    ...(input.VolumeSize != null && { volumeSize: input.VolumeSize }),
  };
};

/**
 * serializeAws_restJson1EncryptionAtRest
 */
const se_EncryptionAtRest = (input: EncryptionAtRest, context: __SerdeContext): any => {
  return {
    ...(input.DataVolumeKMSKeyId != null && { dataVolumeKMSKeyId: input.DataVolumeKMSKeyId }),
  };
};

/**
 * serializeAws_restJson1EncryptionInfo
 */
const se_EncryptionInfo = (input: EncryptionInfo, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionAtRest != null && { encryptionAtRest: se_EncryptionAtRest(input.EncryptionAtRest, context) }),
    ...(input.EncryptionInTransit != null && {
      encryptionInTransit: se_EncryptionInTransit(input.EncryptionInTransit, context),
    }),
  };
};

/**
 * serializeAws_restJson1EncryptionInTransit
 */
const se_EncryptionInTransit = (input: EncryptionInTransit, context: __SerdeContext): any => {
  return {
    ...(input.ClientBroker != null && { clientBroker: input.ClientBroker }),
    ...(input.InCluster != null && { inCluster: input.InCluster }),
  };
};

/**
 * serializeAws_restJson1Firehose
 */
const se_Firehose = (input: Firehose, context: __SerdeContext): any => {
  return {
    ...(input.DeliveryStream != null && { deliveryStream: input.DeliveryStream }),
    ...(input.Enabled != null && { enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1Iam
 */
const se_Iam = (input: Iam, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1JmxExporterInfo
 */
const se_JmxExporterInfo = (input: JmxExporterInfo, context: __SerdeContext): any => {
  return {
    ...(input.EnabledInBroker != null && { enabledInBroker: input.EnabledInBroker }),
  };
};

/**
 * serializeAws_restJson1LoggingInfo
 */
const se_LoggingInfo = (input: LoggingInfo, context: __SerdeContext): any => {
  return {
    ...(input.BrokerLogs != null && { brokerLogs: se_BrokerLogs(input.BrokerLogs, context) }),
  };
};

/**
 * serializeAws_restJson1NodeExporterInfo
 */
const se_NodeExporterInfo = (input: NodeExporterInfo, context: __SerdeContext): any => {
  return {
    ...(input.EnabledInBroker != null && { enabledInBroker: input.EnabledInBroker }),
  };
};

/**
 * serializeAws_restJson1OpenMonitoringInfo
 */
const se_OpenMonitoringInfo = (input: OpenMonitoringInfo, context: __SerdeContext): any => {
  return {
    ...(input.Prometheus != null && { prometheus: se_PrometheusInfo(input.Prometheus, context) }),
  };
};

/**
 * serializeAws_restJson1PrometheusInfo
 */
const se_PrometheusInfo = (input: PrometheusInfo, context: __SerdeContext): any => {
  return {
    ...(input.JmxExporter != null && { jmxExporter: se_JmxExporterInfo(input.JmxExporter, context) }),
    ...(input.NodeExporter != null && { nodeExporter: se_NodeExporterInfo(input.NodeExporter, context) }),
  };
};

/**
 * serializeAws_restJson1ProvisionedRequest
 */
const se_ProvisionedRequest = (input: ProvisionedRequest, context: __SerdeContext): any => {
  return {
    ...(input.BrokerNodeGroupInfo != null && {
      brokerNodeGroupInfo: se_BrokerNodeGroupInfo(input.BrokerNodeGroupInfo, context),
    }),
    ...(input.ClientAuthentication != null && {
      clientAuthentication: se_ClientAuthentication(input.ClientAuthentication, context),
    }),
    ...(input.ConfigurationInfo != null && {
      configurationInfo: se_ConfigurationInfo(input.ConfigurationInfo, context),
    }),
    ...(input.EncryptionInfo != null && { encryptionInfo: se_EncryptionInfo(input.EncryptionInfo, context) }),
    ...(input.EnhancedMonitoring != null && { enhancedMonitoring: input.EnhancedMonitoring }),
    ...(input.KafkaVersion != null && { kafkaVersion: input.KafkaVersion }),
    ...(input.LoggingInfo != null && { loggingInfo: se_LoggingInfo(input.LoggingInfo, context) }),
    ...(input.NumberOfBrokerNodes != null && { numberOfBrokerNodes: input.NumberOfBrokerNodes }),
    ...(input.OpenMonitoring != null && { openMonitoring: se_OpenMonitoringInfo(input.OpenMonitoring, context) }),
    ...(input.StorageMode != null && { storageMode: input.StorageMode }),
  };
};

/**
 * serializeAws_restJson1ProvisionedThroughput
 */
const se_ProvisionedThroughput = (input: ProvisionedThroughput, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { enabled: input.Enabled }),
    ...(input.VolumeThroughput != null && { volumeThroughput: input.VolumeThroughput }),
  };
};

/**
 * serializeAws_restJson1PublicAccess
 */
const se_PublicAccess = (input: PublicAccess, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { type: input.Type }),
  };
};

/**
 * serializeAws_restJson1S3
 */
const se_S3 = (input: S3, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { bucket: input.Bucket }),
    ...(input.Enabled != null && { enabled: input.Enabled }),
    ...(input.Prefix != null && { prefix: input.Prefix }),
  };
};

/**
 * serializeAws_restJson1Sasl
 */
const se_Sasl = (input: Sasl, context: __SerdeContext): any => {
  return {
    ...(input.Iam != null && { iam: se_Iam(input.Iam, context) }),
    ...(input.Scram != null && { scram: se_Scram(input.Scram, context) }),
  };
};

/**
 * serializeAws_restJson1Scram
 */
const se_Scram = (input: Scram, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1ServerlessClientAuthentication
 */
const se_ServerlessClientAuthentication = (input: ServerlessClientAuthentication, context: __SerdeContext): any => {
  return {
    ...(input.Sasl != null && { sasl: se_ServerlessSasl(input.Sasl, context) }),
  };
};

/**
 * serializeAws_restJson1ServerlessRequest
 */
const se_ServerlessRequest = (input: ServerlessRequest, context: __SerdeContext): any => {
  return {
    ...(input.ClientAuthentication != null && {
      clientAuthentication: se_ServerlessClientAuthentication(input.ClientAuthentication, context),
    }),
    ...(input.VpcConfigs != null && { vpcConfigs: se___listOfVpcConfig(input.VpcConfigs, context) }),
  };
};

/**
 * serializeAws_restJson1ServerlessSasl
 */
const se_ServerlessSasl = (input: ServerlessSasl, context: __SerdeContext): any => {
  return {
    ...(input.Iam != null && { iam: se_Iam(input.Iam, context) }),
  };
};

/**
 * serializeAws_restJson1StorageInfo
 */
const se_StorageInfo = (input: StorageInfo, context: __SerdeContext): any => {
  return {
    ...(input.EbsStorageInfo != null && { ebsStorageInfo: se_EBSStorageInfo(input.EbsStorageInfo, context) }),
  };
};

/**
 * serializeAws_restJson1Tls
 */
const se_Tls = (input: Tls, context: __SerdeContext): any => {
  return {
    ...(input.CertificateAuthorityArnList != null && {
      certificateAuthorityArnList: se___listOf__string(input.CertificateAuthorityArnList, context),
    }),
    ...(input.Enabled != null && { enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1Unauthenticated
 */
const se_Unauthenticated = (input: Unauthenticated, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { enabled: input.Enabled }),
  };
};

/**
 * serializeAws_restJson1VpcConfig
 */
const se_VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIds != null && { securityGroupIds: se___listOf__string(input.SecurityGroupIds, context) }),
    ...(input.SubnetIds != null && { subnetIds: se___listOf__string(input.SubnetIds, context) }),
  };
};

/**
 * deserializeAws_restJson1__listOf__string
 */
const de___listOf__string = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1__listOfBrokerEBSVolumeInfo
 */
const de___listOfBrokerEBSVolumeInfo = (output: any, context: __SerdeContext): BrokerEBSVolumeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BrokerEBSVolumeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCluster
 */
const de___listOfCluster = (output: any, context: __SerdeContext): Cluster[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Cluster(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfClusterInfo
 */
const de___listOfClusterInfo = (output: any, context: __SerdeContext): ClusterInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClusterInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfClusterOperationInfo
 */
const de___listOfClusterOperationInfo = (output: any, context: __SerdeContext): ClusterOperationInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClusterOperationInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfClusterOperationStep
 */
const de___listOfClusterOperationStep = (output: any, context: __SerdeContext): ClusterOperationStep[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClusterOperationStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfCompatibleKafkaVersion
 */
const de___listOfCompatibleKafkaVersion = (output: any, context: __SerdeContext): CompatibleKafkaVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CompatibleKafkaVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfConfiguration
 */
const de___listOfConfiguration = (output: any, context: __SerdeContext): Configuration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Configuration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfConfigurationRevision
 */
const de___listOfConfigurationRevision = (output: any, context: __SerdeContext): ConfigurationRevision[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConfigurationRevision(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfKafkaVersion
 */
const de___listOfKafkaVersion = (output: any, context: __SerdeContext): KafkaVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_KafkaVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfNodeInfo
 */
const de___listOfNodeInfo = (output: any, context: __SerdeContext): NodeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NodeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfUnprocessedScramSecret
 */
const de___listOfUnprocessedScramSecret = (output: any, context: __SerdeContext): UnprocessedScramSecret[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UnprocessedScramSecret(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfVpcConfig
 */
const de___listOfVpcConfig = (output: any, context: __SerdeContext): VpcConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__mapOf__string
 */
const de___mapOf__string = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BrokerEBSVolumeInfo
 */
const de_BrokerEBSVolumeInfo = (output: any, context: __SerdeContext): BrokerEBSVolumeInfo => {
  return {
    KafkaBrokerNodeId: __expectString(output.kafkaBrokerNodeId),
    ProvisionedThroughput:
      output.provisionedThroughput != null
        ? de_ProvisionedThroughput(output.provisionedThroughput, context)
        : undefined,
    VolumeSizeGB: __expectInt32(output.volumeSizeGB),
  } as any;
};

/**
 * deserializeAws_restJson1BrokerLogs
 */
const de_BrokerLogs = (output: any, context: __SerdeContext): BrokerLogs => {
  return {
    CloudWatchLogs: output.cloudWatchLogs != null ? de_CloudWatchLogs(output.cloudWatchLogs, context) : undefined,
    Firehose: output.firehose != null ? de_Firehose(output.firehose, context) : undefined,
    S3: output.s3 != null ? de_S3(output.s3, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BrokerNodeGroupInfo
 */
const de_BrokerNodeGroupInfo = (output: any, context: __SerdeContext): BrokerNodeGroupInfo => {
  return {
    BrokerAZDistribution: __expectString(output.brokerAZDistribution),
    ClientSubnets: output.clientSubnets != null ? de___listOf__string(output.clientSubnets, context) : undefined,
    ConnectivityInfo:
      output.connectivityInfo != null ? de_ConnectivityInfo(output.connectivityInfo, context) : undefined,
    InstanceType: __expectString(output.instanceType),
    SecurityGroups: output.securityGroups != null ? de___listOf__string(output.securityGroups, context) : undefined,
    StorageInfo: output.storageInfo != null ? de_StorageInfo(output.storageInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BrokerNodeInfo
 */
const de_BrokerNodeInfo = (output: any, context: __SerdeContext): BrokerNodeInfo => {
  return {
    AttachedENIId: __expectString(output.attachedENIId),
    BrokerId: __limitedParseDouble(output.brokerId),
    ClientSubnet: __expectString(output.clientSubnet),
    ClientVpcIpAddress: __expectString(output.clientVpcIpAddress),
    CurrentBrokerSoftwareInfo:
      output.currentBrokerSoftwareInfo != null
        ? de_BrokerSoftwareInfo(output.currentBrokerSoftwareInfo, context)
        : undefined,
    Endpoints: output.endpoints != null ? de___listOf__string(output.endpoints, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BrokerSoftwareInfo
 */
const de_BrokerSoftwareInfo = (output: any, context: __SerdeContext): BrokerSoftwareInfo => {
  return {
    ConfigurationArn: __expectString(output.configurationArn),
    ConfigurationRevision: __expectLong(output.configurationRevision),
    KafkaVersion: __expectString(output.kafkaVersion),
  } as any;
};

/**
 * deserializeAws_restJson1ClientAuthentication
 */
const de_ClientAuthentication = (output: any, context: __SerdeContext): ClientAuthentication => {
  return {
    Sasl: output.sasl != null ? de_Sasl(output.sasl, context) : undefined,
    Tls: output.tls != null ? de_Tls(output.tls, context) : undefined,
    Unauthenticated: output.unauthenticated != null ? de_Unauthenticated(output.unauthenticated, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CloudWatchLogs
 */
const de_CloudWatchLogs = (output: any, context: __SerdeContext): CloudWatchLogs => {
  return {
    Enabled: __expectBoolean(output.enabled),
    LogGroup: __expectString(output.logGroup),
  } as any;
};

/**
 * deserializeAws_restJson1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    ActiveOperationArn: __expectString(output.activeOperationArn),
    ClusterArn: __expectString(output.clusterArn),
    ClusterName: __expectString(output.clusterName),
    ClusterType: __expectString(output.clusterType),
    CreationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    CurrentVersion: __expectString(output.currentVersion),
    Provisioned: output.provisioned != null ? de_Provisioned(output.provisioned, context) : undefined,
    Serverless: output.serverless != null ? de_Serverless(output.serverless, context) : undefined,
    State: __expectString(output.state),
    StateInfo: output.stateInfo != null ? de_StateInfo(output.stateInfo, context) : undefined,
    Tags: output.tags != null ? de___mapOf__string(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClusterInfo
 */
const de_ClusterInfo = (output: any, context: __SerdeContext): ClusterInfo => {
  return {
    ActiveOperationArn: __expectString(output.activeOperationArn),
    BrokerNodeGroupInfo:
      output.brokerNodeGroupInfo != null ? de_BrokerNodeGroupInfo(output.brokerNodeGroupInfo, context) : undefined,
    ClientAuthentication:
      output.clientAuthentication != null ? de_ClientAuthentication(output.clientAuthentication, context) : undefined,
    ClusterArn: __expectString(output.clusterArn),
    ClusterName: __expectString(output.clusterName),
    CreationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    CurrentBrokerSoftwareInfo:
      output.currentBrokerSoftwareInfo != null
        ? de_BrokerSoftwareInfo(output.currentBrokerSoftwareInfo, context)
        : undefined,
    CurrentVersion: __expectString(output.currentVersion),
    EncryptionInfo: output.encryptionInfo != null ? de_EncryptionInfo(output.encryptionInfo, context) : undefined,
    EnhancedMonitoring: __expectString(output.enhancedMonitoring),
    LoggingInfo: output.loggingInfo != null ? de_LoggingInfo(output.loggingInfo, context) : undefined,
    NumberOfBrokerNodes: __expectInt32(output.numberOfBrokerNodes),
    OpenMonitoring: output.openMonitoring != null ? de_OpenMonitoring(output.openMonitoring, context) : undefined,
    State: __expectString(output.state),
    StateInfo: output.stateInfo != null ? de_StateInfo(output.stateInfo, context) : undefined,
    StorageMode: __expectString(output.storageMode),
    Tags: output.tags != null ? de___mapOf__string(output.tags, context) : undefined,
    ZookeeperConnectString: __expectString(output.zookeeperConnectString),
    ZookeeperConnectStringTls: __expectString(output.zookeeperConnectStringTls),
  } as any;
};

/**
 * deserializeAws_restJson1ClusterOperationInfo
 */
const de_ClusterOperationInfo = (output: any, context: __SerdeContext): ClusterOperationInfo => {
  return {
    ClientRequestId: __expectString(output.clientRequestId),
    ClusterArn: __expectString(output.clusterArn),
    CreationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    EndTime: output.endTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.endTime)) : undefined,
    ErrorInfo: output.errorInfo != null ? de_ErrorInfo(output.errorInfo, context) : undefined,
    OperationArn: __expectString(output.operationArn),
    OperationState: __expectString(output.operationState),
    OperationSteps:
      output.operationSteps != null ? de___listOfClusterOperationStep(output.operationSteps, context) : undefined,
    OperationType: __expectString(output.operationType),
    SourceClusterInfo:
      output.sourceClusterInfo != null ? de_MutableClusterInfo(output.sourceClusterInfo, context) : undefined,
    TargetClusterInfo:
      output.targetClusterInfo != null ? de_MutableClusterInfo(output.targetClusterInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClusterOperationStep
 */
const de_ClusterOperationStep = (output: any, context: __SerdeContext): ClusterOperationStep => {
  return {
    StepInfo: output.stepInfo != null ? de_ClusterOperationStepInfo(output.stepInfo, context) : undefined,
    StepName: __expectString(output.stepName),
  } as any;
};

/**
 * deserializeAws_restJson1ClusterOperationStepInfo
 */
const de_ClusterOperationStepInfo = (output: any, context: __SerdeContext): ClusterOperationStepInfo => {
  return {
    StepStatus: __expectString(output.stepStatus),
  } as any;
};

/**
 * deserializeAws_restJson1CompatibleKafkaVersion
 */
const de_CompatibleKafkaVersion = (output: any, context: __SerdeContext): CompatibleKafkaVersion => {
  return {
    SourceVersion: __expectString(output.sourceVersion),
    TargetVersions: output.targetVersions != null ? de___listOf__string(output.targetVersions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    Arn: __expectString(output.arn),
    CreationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    Description: __expectString(output.description),
    KafkaVersions: output.kafkaVersions != null ? de___listOf__string(output.kafkaVersions, context) : undefined,
    LatestRevision:
      output.latestRevision != null ? de_ConfigurationRevision(output.latestRevision, context) : undefined,
    Name: __expectString(output.name),
    State: __expectString(output.state),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationInfo
 */
const de_ConfigurationInfo = (output: any, context: __SerdeContext): ConfigurationInfo => {
  return {
    Arn: __expectString(output.arn),
    Revision: __expectLong(output.revision),
  } as any;
};

/**
 * deserializeAws_restJson1ConfigurationRevision
 */
const de_ConfigurationRevision = (output: any, context: __SerdeContext): ConfigurationRevision => {
  return {
    CreationTime:
      output.creationTime != null ? __expectNonNull(__parseRfc3339DateTimeWithOffset(output.creationTime)) : undefined,
    Description: __expectString(output.description),
    Revision: __expectLong(output.revision),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectivityInfo
 */
const de_ConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo => {
  return {
    PublicAccess: output.publicAccess != null ? de_PublicAccess(output.publicAccess, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EBSStorageInfo
 */
const de_EBSStorageInfo = (output: any, context: __SerdeContext): EBSStorageInfo => {
  return {
    ProvisionedThroughput:
      output.provisionedThroughput != null
        ? de_ProvisionedThroughput(output.provisionedThroughput, context)
        : undefined,
    VolumeSize: __expectInt32(output.volumeSize),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionAtRest
 */
const de_EncryptionAtRest = (output: any, context: __SerdeContext): EncryptionAtRest => {
  return {
    DataVolumeKMSKeyId: __expectString(output.dataVolumeKMSKeyId),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionInfo
 */
const de_EncryptionInfo = (output: any, context: __SerdeContext): EncryptionInfo => {
  return {
    EncryptionAtRest:
      output.encryptionAtRest != null ? de_EncryptionAtRest(output.encryptionAtRest, context) : undefined,
    EncryptionInTransit:
      output.encryptionInTransit != null ? de_EncryptionInTransit(output.encryptionInTransit, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionInTransit
 */
const de_EncryptionInTransit = (output: any, context: __SerdeContext): EncryptionInTransit => {
  return {
    ClientBroker: __expectString(output.clientBroker),
    InCluster: __expectBoolean(output.inCluster),
  } as any;
};

/**
 * deserializeAws_restJson1ErrorInfo
 */
const de_ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return {
    ErrorCode: __expectString(output.errorCode),
    ErrorString: __expectString(output.errorString),
  } as any;
};

/**
 * deserializeAws_restJson1Firehose
 */
const de_Firehose = (output: any, context: __SerdeContext): Firehose => {
  return {
    DeliveryStream: __expectString(output.deliveryStream),
    Enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1Iam
 */
const de_Iam = (output: any, context: __SerdeContext): Iam => {
  return {
    Enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1JmxExporter
 */
const de_JmxExporter = (output: any, context: __SerdeContext): JmxExporter => {
  return {
    EnabledInBroker: __expectBoolean(output.enabledInBroker),
  } as any;
};

/**
 * deserializeAws_restJson1JmxExporterInfo
 */
const de_JmxExporterInfo = (output: any, context: __SerdeContext): JmxExporterInfo => {
  return {
    EnabledInBroker: __expectBoolean(output.enabledInBroker),
  } as any;
};

/**
 * deserializeAws_restJson1KafkaVersion
 */
const de_KafkaVersion = (output: any, context: __SerdeContext): KafkaVersion => {
  return {
    Status: __expectString(output.status),
    Version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1LoggingInfo
 */
const de_LoggingInfo = (output: any, context: __SerdeContext): LoggingInfo => {
  return {
    BrokerLogs: output.brokerLogs != null ? de_BrokerLogs(output.brokerLogs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MutableClusterInfo
 */
const de_MutableClusterInfo = (output: any, context: __SerdeContext): MutableClusterInfo => {
  return {
    BrokerEBSVolumeInfo:
      output.brokerEBSVolumeInfo != null
        ? de___listOfBrokerEBSVolumeInfo(output.brokerEBSVolumeInfo, context)
        : undefined,
    ClientAuthentication:
      output.clientAuthentication != null ? de_ClientAuthentication(output.clientAuthentication, context) : undefined,
    ConfigurationInfo:
      output.configurationInfo != null ? de_ConfigurationInfo(output.configurationInfo, context) : undefined,
    ConnectivityInfo:
      output.connectivityInfo != null ? de_ConnectivityInfo(output.connectivityInfo, context) : undefined,
    EncryptionInfo: output.encryptionInfo != null ? de_EncryptionInfo(output.encryptionInfo, context) : undefined,
    EnhancedMonitoring: __expectString(output.enhancedMonitoring),
    InstanceType: __expectString(output.instanceType),
    KafkaVersion: __expectString(output.kafkaVersion),
    LoggingInfo: output.loggingInfo != null ? de_LoggingInfo(output.loggingInfo, context) : undefined,
    NumberOfBrokerNodes: __expectInt32(output.numberOfBrokerNodes),
    OpenMonitoring: output.openMonitoring != null ? de_OpenMonitoring(output.openMonitoring, context) : undefined,
    StorageMode: __expectString(output.storageMode),
  } as any;
};

/**
 * deserializeAws_restJson1NodeExporter
 */
const de_NodeExporter = (output: any, context: __SerdeContext): NodeExporter => {
  return {
    EnabledInBroker: __expectBoolean(output.enabledInBroker),
  } as any;
};

/**
 * deserializeAws_restJson1NodeExporterInfo
 */
const de_NodeExporterInfo = (output: any, context: __SerdeContext): NodeExporterInfo => {
  return {
    EnabledInBroker: __expectBoolean(output.enabledInBroker),
  } as any;
};

/**
 * deserializeAws_restJson1NodeInfo
 */
const de_NodeInfo = (output: any, context: __SerdeContext): NodeInfo => {
  return {
    AddedToClusterTime: __expectString(output.addedToClusterTime),
    BrokerNodeInfo: output.brokerNodeInfo != null ? de_BrokerNodeInfo(output.brokerNodeInfo, context) : undefined,
    InstanceType: __expectString(output.instanceType),
    NodeARN: __expectString(output.nodeARN),
    NodeType: __expectString(output.nodeType),
    ZookeeperNodeInfo:
      output.zookeeperNodeInfo != null ? de_ZookeeperNodeInfo(output.zookeeperNodeInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OpenMonitoring
 */
const de_OpenMonitoring = (output: any, context: __SerdeContext): OpenMonitoring => {
  return {
    Prometheus: output.prometheus != null ? de_Prometheus(output.prometheus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OpenMonitoringInfo
 */
const de_OpenMonitoringInfo = (output: any, context: __SerdeContext): OpenMonitoringInfo => {
  return {
    Prometheus: output.prometheus != null ? de_PrometheusInfo(output.prometheus, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Prometheus
 */
const de_Prometheus = (output: any, context: __SerdeContext): Prometheus => {
  return {
    JmxExporter: output.jmxExporter != null ? de_JmxExporter(output.jmxExporter, context) : undefined,
    NodeExporter: output.nodeExporter != null ? de_NodeExporter(output.nodeExporter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PrometheusInfo
 */
const de_PrometheusInfo = (output: any, context: __SerdeContext): PrometheusInfo => {
  return {
    JmxExporter: output.jmxExporter != null ? de_JmxExporterInfo(output.jmxExporter, context) : undefined,
    NodeExporter: output.nodeExporter != null ? de_NodeExporterInfo(output.nodeExporter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Provisioned
 */
const de_Provisioned = (output: any, context: __SerdeContext): Provisioned => {
  return {
    BrokerNodeGroupInfo:
      output.brokerNodeGroupInfo != null ? de_BrokerNodeGroupInfo(output.brokerNodeGroupInfo, context) : undefined,
    ClientAuthentication:
      output.clientAuthentication != null ? de_ClientAuthentication(output.clientAuthentication, context) : undefined,
    CurrentBrokerSoftwareInfo:
      output.currentBrokerSoftwareInfo != null
        ? de_BrokerSoftwareInfo(output.currentBrokerSoftwareInfo, context)
        : undefined,
    EncryptionInfo: output.encryptionInfo != null ? de_EncryptionInfo(output.encryptionInfo, context) : undefined,
    EnhancedMonitoring: __expectString(output.enhancedMonitoring),
    LoggingInfo: output.loggingInfo != null ? de_LoggingInfo(output.loggingInfo, context) : undefined,
    NumberOfBrokerNodes: __expectInt32(output.numberOfBrokerNodes),
    OpenMonitoring: output.openMonitoring != null ? de_OpenMonitoringInfo(output.openMonitoring, context) : undefined,
    StorageMode: __expectString(output.storageMode),
    ZookeeperConnectString: __expectString(output.zookeeperConnectString),
    ZookeeperConnectStringTls: __expectString(output.zookeeperConnectStringTls),
  } as any;
};

/**
 * deserializeAws_restJson1ProvisionedThroughput
 */
const de_ProvisionedThroughput = (output: any, context: __SerdeContext): ProvisionedThroughput => {
  return {
    Enabled: __expectBoolean(output.enabled),
    VolumeThroughput: __expectInt32(output.volumeThroughput),
  } as any;
};

/**
 * deserializeAws_restJson1PublicAccess
 */
const de_PublicAccess = (output: any, context: __SerdeContext): PublicAccess => {
  return {
    Type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1S3
 */
const de_S3 = (output: any, context: __SerdeContext): S3 => {
  return {
    Bucket: __expectString(output.bucket),
    Enabled: __expectBoolean(output.enabled),
    Prefix: __expectString(output.prefix),
  } as any;
};

/**
 * deserializeAws_restJson1Sasl
 */
const de_Sasl = (output: any, context: __SerdeContext): Sasl => {
  return {
    Iam: output.iam != null ? de_Iam(output.iam, context) : undefined,
    Scram: output.scram != null ? de_Scram(output.scram, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Scram
 */
const de_Scram = (output: any, context: __SerdeContext): Scram => {
  return {
    Enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1Serverless
 */
const de_Serverless = (output: any, context: __SerdeContext): Serverless => {
  return {
    ClientAuthentication:
      output.clientAuthentication != null
        ? de_ServerlessClientAuthentication(output.clientAuthentication, context)
        : undefined,
    VpcConfigs: output.vpcConfigs != null ? de___listOfVpcConfig(output.vpcConfigs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ServerlessClientAuthentication
 */
const de_ServerlessClientAuthentication = (output: any, context: __SerdeContext): ServerlessClientAuthentication => {
  return {
    Sasl: output.sasl != null ? de_ServerlessSasl(output.sasl, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ServerlessSasl
 */
const de_ServerlessSasl = (output: any, context: __SerdeContext): ServerlessSasl => {
  return {
    Iam: output.iam != null ? de_Iam(output.iam, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1StateInfo
 */
const de_StateInfo = (output: any, context: __SerdeContext): StateInfo => {
  return {
    Code: __expectString(output.code),
    Message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_restJson1StorageInfo
 */
const de_StorageInfo = (output: any, context: __SerdeContext): StorageInfo => {
  return {
    EbsStorageInfo: output.ebsStorageInfo != null ? de_EBSStorageInfo(output.ebsStorageInfo, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Tls
 */
const de_Tls = (output: any, context: __SerdeContext): Tls => {
  return {
    CertificateAuthorityArnList:
      output.certificateAuthorityArnList != null
        ? de___listOf__string(output.certificateAuthorityArnList, context)
        : undefined,
    Enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1Unauthenticated
 */
const de_Unauthenticated = (output: any, context: __SerdeContext): Unauthenticated => {
  return {
    Enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1UnprocessedScramSecret
 */
const de_UnprocessedScramSecret = (output: any, context: __SerdeContext): UnprocessedScramSecret => {
  return {
    ErrorCode: __expectString(output.errorCode),
    ErrorMessage: __expectString(output.errorMessage),
    SecretArn: __expectString(output.secretArn),
  } as any;
};

/**
 * deserializeAws_restJson1VpcConfig
 */
const de_VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    SecurityGroupIds:
      output.securityGroupIds != null ? de___listOf__string(output.securityGroupIds, context) : undefined,
    SubnetIds: output.subnetIds != null ? de___listOf__string(output.subnetIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ZookeeperNodeInfo
 */
const de_ZookeeperNodeInfo = (output: any, context: __SerdeContext): ZookeeperNodeInfo => {
  return {
    AttachedENIId: __expectString(output.attachedENIId),
    ClientVpcIpAddress: __expectString(output.clientVpcIpAddress),
    Endpoints: output.endpoints != null ? de___listOf__string(output.endpoints, context) : undefined,
    ZookeeperId: __limitedParseDouble(output.zookeeperId),
    ZookeeperVersion: __expectString(output.zookeeperVersion),
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
