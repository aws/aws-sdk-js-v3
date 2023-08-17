// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  CreateVpcConnectionCommandInput,
  CreateVpcConnectionCommandOutput,
} from "../commands/CreateVpcConnectionCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteClusterPolicyCommandInput,
  DeleteClusterPolicyCommandOutput,
} from "../commands/DeleteClusterPolicyCommand";
import {
  DeleteConfigurationCommandInput,
  DeleteConfigurationCommandOutput,
} from "../commands/DeleteConfigurationCommand";
import {
  DeleteVpcConnectionCommandInput,
  DeleteVpcConnectionCommandOutput,
} from "../commands/DeleteVpcConnectionCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "../commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
} from "../commands/DescribeClusterOperationCommand";
import {
  DescribeClusterOperationV2CommandInput,
  DescribeClusterOperationV2CommandOutput,
} from "../commands/DescribeClusterOperationV2Command";
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
  DescribeVpcConnectionCommandInput,
  DescribeVpcConnectionCommandOutput,
} from "../commands/DescribeVpcConnectionCommand";
import {
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
} from "../commands/GetBootstrapBrokersCommand";
import { GetClusterPolicyCommandInput, GetClusterPolicyCommandOutput } from "../commands/GetClusterPolicyCommand";
import {
  GetCompatibleKafkaVersionsCommandInput,
  GetCompatibleKafkaVersionsCommandOutput,
} from "../commands/GetCompatibleKafkaVersionsCommand";
import {
  ListClientVpcConnectionsCommandInput,
  ListClientVpcConnectionsCommandOutput,
} from "../commands/ListClientVpcConnectionsCommand";
import {
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "../commands/ListClusterOperationsCommand";
import {
  ListClusterOperationsV2CommandInput,
  ListClusterOperationsV2CommandOutput,
} from "../commands/ListClusterOperationsV2Command";
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
import { ListVpcConnectionsCommandInput, ListVpcConnectionsCommandOutput } from "../commands/ListVpcConnectionsCommand";
import { PutClusterPolicyCommandInput, PutClusterPolicyCommandOutput } from "../commands/PutClusterPolicyCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "../commands/RebootBrokerCommand";
import {
  RejectClientVpcConnectionCommandInput,
  RejectClientVpcConnectionCommandOutput,
} from "../commands/RejectClientVpcConnectionCommand";
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
  ClientVpcConnection,
  CloudWatchLogs,
  Cluster,
  ClusterInfo,
  ClusterOperationInfo,
  ClusterOperationStep,
  ClusterOperationStepInfo,
  ClusterOperationV2,
  ClusterOperationV2Provisioned,
  ClusterOperationV2Serverless,
  ClusterOperationV2Summary,
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
  UserIdentity,
  VpcConfig,
  VpcConnection,
  VpcConnectionInfo,
  VpcConnectionInfoServerless,
  VpcConnectivity,
  VpcConnectivityClientAuthentication,
  VpcConnectivityIam,
  VpcConnectivitySasl,
  VpcConnectivityScram,
  VpcConnectivityTls,
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
  body = JSON.stringify(
    take(input, {
      secretArnList: [, (_) => _json(_), `SecretArnList`],
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
  body = JSON.stringify(
    take(input, {
      secretArnList: [, (_) => _json(_), `SecretArnList`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      brokerNodeGroupInfo: [, (_) => se_BrokerNodeGroupInfo(_, context), `BrokerNodeGroupInfo`],
      clientAuthentication: [, (_) => se_ClientAuthentication(_, context), `ClientAuthentication`],
      clusterName: [, , `ClusterName`],
      configurationInfo: [, (_) => se_ConfigurationInfo(_, context), `ConfigurationInfo`],
      encryptionInfo: [, (_) => se_EncryptionInfo(_, context), `EncryptionInfo`],
      enhancedMonitoring: [, , `EnhancedMonitoring`],
      kafkaVersion: [, , `KafkaVersion`],
      loggingInfo: [, (_) => se_LoggingInfo(_, context), `LoggingInfo`],
      numberOfBrokerNodes: [, , `NumberOfBrokerNodes`],
      openMonitoring: [, (_) => se_OpenMonitoringInfo(_, context), `OpenMonitoring`],
      storageMode: [, , `StorageMode`],
      tags: [, (_) => _json(_), `Tags`],
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
  body = JSON.stringify(
    take(input, {
      clusterName: [, , `ClusterName`],
      provisioned: [, (_) => se_ProvisionedRequest(_, context), `Provisioned`],
      serverless: [, (_) => se_ServerlessRequest(_, context), `Serverless`],
      tags: [, (_) => _json(_), `Tags`],
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
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
      kafkaVersions: [, (_) => _json(_), `KafkaVersions`],
      name: [, , `Name`],
      serverProperties: [, (_) => context.base64Encoder(_), `ServerProperties`],
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
 * serializeAws_restJson1CreateVpcConnectionCommand
 */
export const se_CreateVpcConnectionCommand = async (
  input: CreateVpcConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/vpc-connection";
  let body: any;
  body = JSON.stringify(
    take(input, {
      authentication: [, , `Authentication`],
      clientSubnets: [, (_) => _json(_), `ClientSubnets`],
      securityGroups: [, (_) => _json(_), `SecurityGroups`],
      tags: [, (_) => _json(_), `Tags`],
      targetClusterArn: [, , `TargetClusterArn`],
      vpcId: [, , `VpcId`],
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
 * serializeAws_restJson1DeleteClusterPolicyCommand
 */
export const se_DeleteClusterPolicyCommand = async (
  input: DeleteClusterPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
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
 * serializeAws_restJson1DeleteVpcConnectionCommand
 */
export const se_DeleteVpcConnectionCommand = async (
  input: DeleteVpcConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/vpc-connection/{Arn}";
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
 * serializeAws_restJson1DescribeClusterOperationV2Command
 */
export const se_DescribeClusterOperationV2Command = async (
  input: DescribeClusterOperationV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v2/operations/{ClusterOperationArn}";
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
 * serializeAws_restJson1DescribeVpcConnectionCommand
 */
export const se_DescribeVpcConnectionCommand = async (
  input: DescribeVpcConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/vpc-connection/{Arn}";
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
 * serializeAws_restJson1GetClusterPolicyCommand
 */
export const se_GetClusterPolicyCommand = async (
  input: GetClusterPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/policy";
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
 * serializeAws_restJson1ListClientVpcConnectionsCommand
 */
export const se_ListClientVpcConnectionsCommand = async (
  input: ListClientVpcConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/clusters/{ClusterArn}/client-vpc-connections";
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
 * serializeAws_restJson1ListClusterOperationsV2Command
 */
export const se_ListClusterOperationsV2Command = async (
  input: ListClusterOperationsV2CommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/api/v2/clusters/{ClusterArn}/operations";
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
 * serializeAws_restJson1ListVpcConnectionsCommand
 */
export const se_ListVpcConnectionsCommand = async (
  input: ListVpcConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/vpc-connections";
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
 * serializeAws_restJson1PutClusterPolicyCommand
 */
export const se_PutClusterPolicyCommand = async (
  input: PutClusterPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/clusters/{ClusterArn}/policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      currentVersion: [, , `CurrentVersion`],
      policy: [, , `Policy`],
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
  body = JSON.stringify(
    take(input, {
      brokerIds: [, (_) => _json(_), `BrokerIds`],
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
 * serializeAws_restJson1RejectClientVpcConnectionCommand
 */
export const se_RejectClientVpcConnectionCommand = async (
  input: RejectClientVpcConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/clusters/{ClusterArn}/client-vpc-connection";
  resolvedPath = __resolvedPath(resolvedPath, input, "ClusterArn", () => input.ClusterArn!, "{ClusterArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      vpcConnectionArn: [, , `VpcConnectionArn`],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: [, (_) => _json(_), `Tags`],
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
  body = JSON.stringify(
    take(input, {
      currentVersion: [, , `CurrentVersion`],
      targetNumberOfBrokerNodes: [, , `TargetNumberOfBrokerNodes`],
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
  body = JSON.stringify(
    take(input, {
      currentVersion: [, , `CurrentVersion`],
      targetBrokerEBSVolumeInfo: [, (_) => se___listOfBrokerEBSVolumeInfo(_, context), `TargetBrokerEBSVolumeInfo`],
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
  body = JSON.stringify(
    take(input, {
      currentVersion: [, , `CurrentVersion`],
      targetInstanceType: [, , `TargetInstanceType`],
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
  body = JSON.stringify(
    take(input, {
      configurationInfo: [, (_) => se_ConfigurationInfo(_, context), `ConfigurationInfo`],
      currentVersion: [, , `CurrentVersion`],
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
  body = JSON.stringify(
    take(input, {
      configurationInfo: [, (_) => se_ConfigurationInfo(_, context), `ConfigurationInfo`],
      currentVersion: [, , `CurrentVersion`],
      targetKafkaVersion: [, , `TargetKafkaVersion`],
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
  body = JSON.stringify(
    take(input, {
      description: [, , `Description`],
      serverProperties: [, (_) => context.base64Encoder(_), `ServerProperties`],
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
  body = JSON.stringify(
    take(input, {
      connectivityInfo: [, (_) => se_ConnectivityInfo(_, context), `ConnectivityInfo`],
      currentVersion: [, , `CurrentVersion`],
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
  body = JSON.stringify(
    take(input, {
      currentVersion: [, , `CurrentVersion`],
      enhancedMonitoring: [, , `EnhancedMonitoring`],
      loggingInfo: [, (_) => se_LoggingInfo(_, context), `LoggingInfo`],
      openMonitoring: [, (_) => se_OpenMonitoringInfo(_, context), `OpenMonitoring`],
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
  body = JSON.stringify(
    take(input, {
      clientAuthentication: [, (_) => se_ClientAuthentication(_, context), `ClientAuthentication`],
      currentVersion: [, , `CurrentVersion`],
      encryptionInfo: [, (_) => se_EncryptionInfo(_, context), `EncryptionInfo`],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      currentVersion: [, , `CurrentVersion`],
      provisionedThroughput: [, (_) => se_ProvisionedThroughput(_, context), `ProvisionedThroughput`],
      storageMode: [, , `StorageMode`],
      volumeSizeGB: [, , `VolumeSizeGB`],
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    UnprocessedScramSecrets: [, (_) => de___listOfUnprocessedScramSecret(_, context), `unprocessedScramSecrets`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    UnprocessedScramSecrets: [, (_) => de___listOfUnprocessedScramSecret(_, context), `unprocessedScramSecrets`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterName: [, __expectString, `clusterName`],
    State: [, __expectString, `state`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterName: [, __expectString, `clusterName`],
    ClusterType: [, __expectString, `clusterType`],
    State: [, __expectString, `state`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreationTime: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    LatestRevision: [, (_) => de_ConfigurationRevision(_, context), `latestRevision`],
    Name: [, __expectString, `name`],
    State: [, __expectString, `state`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateVpcConnectionCommand
 */
export const de_CreateVpcConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateVpcConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Authentication: [, __expectString, `authentication`],
    ClientSubnets: [, _json, `clientSubnets`],
    CreationTime: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    SecurityGroups: [, _json, `securityGroups`],
    State: [, __expectString, `state`],
    Tags: [, _json, `tags`],
    VpcConnectionArn: [, __expectString, `vpcConnectionArn`],
    VpcId: [, __expectString, `vpcId`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVpcConnectionCommandError
 */
const de_CreateVpcConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcConnectionCommandOutput> => {
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
    case "TooManyRequestsException":
    case "com.amazonaws.kafka#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "UnauthorizedException":
    case "com.amazonaws.kafka#UnauthorizedException":
      throw await de_UnauthorizedExceptionRes(parsedOutput, context);
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    State: [, __expectString, `state`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteClusterPolicyCommand
 */
export const de_DeleteClusterPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteClusterPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteClusterPolicyCommandError
 */
const de_DeleteClusterPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterPolicyCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    State: [, __expectString, `state`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteVpcConnectionCommand
 */
export const de_DeleteVpcConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteVpcConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    State: [, __expectString, `state`],
    VpcConnectionArn: [, __expectString, `vpcConnectionArn`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVpcConnectionCommandError
 */
const de_DeleteVpcConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcConnectionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterInfo: [, (_) => de_ClusterInfo(_, context), `clusterInfo`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterOperationInfo: [, (_) => de_ClusterOperationInfo(_, context), `clusterOperationInfo`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeClusterOperationV2Command
 */
export const de_DescribeClusterOperationV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeClusterOperationV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ClusterOperationInfo: [, (_) => de_ClusterOperationV2(_, context), `clusterOperationInfo`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeClusterOperationV2CommandError
 */
const de_DescribeClusterOperationV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterOperationV2CommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterInfo: [, (_) => de_Cluster(_, context), `clusterInfo`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreationTime: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    Description: [, __expectString, `description`],
    KafkaVersions: [, _json, `kafkaVersions`],
    LatestRevision: [, (_) => de_ConfigurationRevision(_, context), `latestRevision`],
    Name: [, __expectString, `name`],
    State: [, __expectString, `state`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    CreationTime: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    Description: [, __expectString, `description`],
    Revision: [, __expectLong, `revision`],
    ServerProperties: [, context.base64Decoder, `serverProperties`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeVpcConnectionCommand
 */
export const de_DescribeVpcConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVpcConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Authentication: [, __expectString, `authentication`],
    CreationTime: [, (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    SecurityGroups: [, _json, `securityGroups`],
    State: [, __expectString, `state`],
    Subnets: [, _json, `subnets`],
    Tags: [, _json, `tags`],
    TargetClusterArn: [, __expectString, `targetClusterArn`],
    VpcConnectionArn: [, __expectString, `vpcConnectionArn`],
    VpcId: [, __expectString, `vpcId`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVpcConnectionCommandError
 */
const de_DescribeVpcConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcConnectionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    BootstrapBrokerString: [, __expectString, `bootstrapBrokerString`],
    BootstrapBrokerStringPublicSaslIam: [, __expectString, `bootstrapBrokerStringPublicSaslIam`],
    BootstrapBrokerStringPublicSaslScram: [, __expectString, `bootstrapBrokerStringPublicSaslScram`],
    BootstrapBrokerStringPublicTls: [, __expectString, `bootstrapBrokerStringPublicTls`],
    BootstrapBrokerStringSaslIam: [, __expectString, `bootstrapBrokerStringSaslIam`],
    BootstrapBrokerStringSaslScram: [, __expectString, `bootstrapBrokerStringSaslScram`],
    BootstrapBrokerStringTls: [, __expectString, `bootstrapBrokerStringTls`],
    BootstrapBrokerStringVpcConnectivitySaslIam: [, __expectString, `bootstrapBrokerStringVpcConnectivitySaslIam`],
    BootstrapBrokerStringVpcConnectivitySaslScram: [, __expectString, `bootstrapBrokerStringVpcConnectivitySaslScram`],
    BootstrapBrokerStringVpcConnectivityTls: [, __expectString, `bootstrapBrokerStringVpcConnectivityTls`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetClusterPolicyCommand
 */
export const de_GetClusterPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetClusterPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CurrentVersion: [, __expectString, `currentVersion`],
    Policy: [, __expectString, `policy`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetClusterPolicyCommandError
 */
const de_GetClusterPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetClusterPolicyCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    CompatibleKafkaVersions: [, (_) => de___listOfCompatibleKafkaVersion(_, context), `compatibleKafkaVersions`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListClientVpcConnectionsCommand
 */
export const de_ListClientVpcConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClientVpcConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClientVpcConnectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ClientVpcConnections: [, (_) => de___listOfClientVpcConnection(_, context), `clientVpcConnections`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListClientVpcConnectionsCommandError
 */
const de_ListClientVpcConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClientVpcConnectionsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterOperationInfoList: [, (_) => de___listOfClusterOperationInfo(_, context), `clusterOperationInfoList`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListClusterOperationsV2Command
 */
export const de_ListClusterOperationsV2Command = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsV2CommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClusterOperationsV2CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ClusterOperationInfoList: [, (_) => de___listOfClusterOperationV2Summary(_, context), `clusterOperationInfoList`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListClusterOperationsV2CommandError
 */
const de_ListClusterOperationsV2CommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClusterOperationsV2CommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterInfoList: [, (_) => de___listOfClusterInfo(_, context), `clusterInfoList`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterInfoList: [, (_) => de___listOfCluster(_, context), `clusterInfoList`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    Revisions: [, (_) => de___listOfConfigurationRevision(_, context), `revisions`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Configurations: [, (_) => de___listOfConfiguration(_, context), `configurations`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    KafkaVersions: [, (_) => de___listOfKafkaVersion(_, context), `kafkaVersions`],
    NextToken: [, __expectString, `nextToken`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    NodeInfoList: [, (_) => de___listOfNodeInfo(_, context), `nodeInfoList`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    SecretArnList: [, _json, `secretArnList`],
  });
  Object.assign(contents, doc);
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
    Tags: [, _json, `tags`],
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListVpcConnectionsCommand
 */
export const de_ListVpcConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVpcConnectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: [, __expectString, `nextToken`],
    VpcConnections: [, (_) => de___listOfVpcConnection(_, context), `vpcConnections`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVpcConnectionsCommandError
 */
const de_ListVpcConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcConnectionsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutClusterPolicyCommand
 */
export const de_PutClusterPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutClusterPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CurrentVersion: [, __expectString, `currentVersion`],
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutClusterPolicyCommandError
 */
const de_PutClusterPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutClusterPolicyCommandOutput> => {
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RejectClientVpcConnectionCommand
 */
export const de_RejectClientVpcConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectClientVpcConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RejectClientVpcConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RejectClientVpcConnectionCommandError
 */
const de_RejectClientVpcConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectClientVpcConnectionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Arn: [, __expectString, `arn`],
    LatestRevision: [, (_) => de_ConfigurationRevision(_, context), `latestRevision`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterOperationArn: [, __expectString, `clusterOperationArn`],
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    InvalidParameter: [, __expectString, `invalidParameter`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    InvalidParameter: [, __expectString, `invalidParameter`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    InvalidParameter: [, __expectString, `invalidParameter`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    InvalidParameter: [, __expectString, `invalidParameter`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    InvalidParameter: [, __expectString, `invalidParameter`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    InvalidParameter: [, __expectString, `invalidParameter`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    InvalidParameter: [, __expectString, `invalidParameter`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    InvalidParameter: [, __expectString, `invalidParameter`],
    Message: [, __expectString, `message`],
  });
  Object.assign(contents, doc);
  const exception = new UnauthorizedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se___listOf__string omitted.

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

// se___mapOf__string omitted.

/**
 * serializeAws_restJson1BrokerEBSVolumeInfo
 */
const se_BrokerEBSVolumeInfo = (input: BrokerEBSVolumeInfo, context: __SerdeContext): any => {
  return take(input, {
    kafkaBrokerNodeId: [, , `KafkaBrokerNodeId`],
    provisionedThroughput: [, (_) => se_ProvisionedThroughput(_, context), `ProvisionedThroughput`],
    volumeSizeGB: [, , `VolumeSizeGB`],
  });
};

/**
 * serializeAws_restJson1BrokerLogs
 */
const se_BrokerLogs = (input: BrokerLogs, context: __SerdeContext): any => {
  return take(input, {
    cloudWatchLogs: [, (_) => se_CloudWatchLogs(_, context), `CloudWatchLogs`],
    firehose: [, (_) => se_Firehose(_, context), `Firehose`],
    s3: [, (_) => se_S3(_, context), `S3`],
  });
};

/**
 * serializeAws_restJson1BrokerNodeGroupInfo
 */
const se_BrokerNodeGroupInfo = (input: BrokerNodeGroupInfo, context: __SerdeContext): any => {
  return take(input, {
    brokerAZDistribution: [, , `BrokerAZDistribution`],
    clientSubnets: [, _json, `ClientSubnets`],
    connectivityInfo: [, (_) => se_ConnectivityInfo(_, context), `ConnectivityInfo`],
    instanceType: [, , `InstanceType`],
    securityGroups: [, _json, `SecurityGroups`],
    storageInfo: [, (_) => se_StorageInfo(_, context), `StorageInfo`],
    zoneIds: [, _json, `ZoneIds`],
  });
};

/**
 * serializeAws_restJson1ClientAuthentication
 */
const se_ClientAuthentication = (input: ClientAuthentication, context: __SerdeContext): any => {
  return take(input, {
    sasl: [, (_) => se_Sasl(_, context), `Sasl`],
    tls: [, (_) => se_Tls(_, context), `Tls`],
    unauthenticated: [, (_) => se_Unauthenticated(_, context), `Unauthenticated`],
  });
};

/**
 * serializeAws_restJson1CloudWatchLogs
 */
const se_CloudWatchLogs = (input: CloudWatchLogs, context: __SerdeContext): any => {
  return take(input, {
    enabled: [, , `Enabled`],
    logGroup: [, , `LogGroup`],
  });
};

/**
 * serializeAws_restJson1ConfigurationInfo
 */
const se_ConfigurationInfo = (input: ConfigurationInfo, context: __SerdeContext): any => {
  return take(input, {
    arn: [, , `Arn`],
    revision: [, , `Revision`],
  });
};

/**
 * serializeAws_restJson1ConnectivityInfo
 */
const se_ConnectivityInfo = (input: ConnectivityInfo, context: __SerdeContext): any => {
  return take(input, {
    publicAccess: [, (_) => se_PublicAccess(_, context), `PublicAccess`],
    vpcConnectivity: [, (_) => se_VpcConnectivity(_, context), `VpcConnectivity`],
  });
};

/**
 * serializeAws_restJson1EBSStorageInfo
 */
const se_EBSStorageInfo = (input: EBSStorageInfo, context: __SerdeContext): any => {
  return take(input, {
    provisionedThroughput: [, (_) => se_ProvisionedThroughput(_, context), `ProvisionedThroughput`],
    volumeSize: [, , `VolumeSize`],
  });
};

/**
 * serializeAws_restJson1EncryptionAtRest
 */
const se_EncryptionAtRest = (input: EncryptionAtRest, context: __SerdeContext): any => {
  return take(input, {
    dataVolumeKMSKeyId: [, , `DataVolumeKMSKeyId`],
  });
};

/**
 * serializeAws_restJson1EncryptionInfo
 */
const se_EncryptionInfo = (input: EncryptionInfo, context: __SerdeContext): any => {
  return take(input, {
    encryptionAtRest: [, (_) => se_EncryptionAtRest(_, context), `EncryptionAtRest`],
    encryptionInTransit: [, (_) => se_EncryptionInTransit(_, context), `EncryptionInTransit`],
  });
};

/**
 * serializeAws_restJson1EncryptionInTransit
 */
const se_EncryptionInTransit = (input: EncryptionInTransit, context: __SerdeContext): any => {
  return take(input, {
    clientBroker: [, , `ClientBroker`],
    inCluster: [, , `InCluster`],
  });
};

/**
 * serializeAws_restJson1Firehose
 */
const se_Firehose = (input: Firehose, context: __SerdeContext): any => {
  return take(input, {
    deliveryStream: [, , `DeliveryStream`],
    enabled: [, , `Enabled`],
  });
};

/**
 * serializeAws_restJson1Iam
 */
const se_Iam = (input: Iam, context: __SerdeContext): any => {
  return take(input, {
    enabled: [, , `Enabled`],
  });
};

/**
 * serializeAws_restJson1JmxExporterInfo
 */
const se_JmxExporterInfo = (input: JmxExporterInfo, context: __SerdeContext): any => {
  return take(input, {
    enabledInBroker: [, , `EnabledInBroker`],
  });
};

/**
 * serializeAws_restJson1LoggingInfo
 */
const se_LoggingInfo = (input: LoggingInfo, context: __SerdeContext): any => {
  return take(input, {
    brokerLogs: [, (_) => se_BrokerLogs(_, context), `BrokerLogs`],
  });
};

/**
 * serializeAws_restJson1NodeExporterInfo
 */
const se_NodeExporterInfo = (input: NodeExporterInfo, context: __SerdeContext): any => {
  return take(input, {
    enabledInBroker: [, , `EnabledInBroker`],
  });
};

/**
 * serializeAws_restJson1OpenMonitoringInfo
 */
const se_OpenMonitoringInfo = (input: OpenMonitoringInfo, context: __SerdeContext): any => {
  return take(input, {
    prometheus: [, (_) => se_PrometheusInfo(_, context), `Prometheus`],
  });
};

/**
 * serializeAws_restJson1PrometheusInfo
 */
const se_PrometheusInfo = (input: PrometheusInfo, context: __SerdeContext): any => {
  return take(input, {
    jmxExporter: [, (_) => se_JmxExporterInfo(_, context), `JmxExporter`],
    nodeExporter: [, (_) => se_NodeExporterInfo(_, context), `NodeExporter`],
  });
};

/**
 * serializeAws_restJson1ProvisionedRequest
 */
const se_ProvisionedRequest = (input: ProvisionedRequest, context: __SerdeContext): any => {
  return take(input, {
    brokerNodeGroupInfo: [, (_) => se_BrokerNodeGroupInfo(_, context), `BrokerNodeGroupInfo`],
    clientAuthentication: [, (_) => se_ClientAuthentication(_, context), `ClientAuthentication`],
    configurationInfo: [, (_) => se_ConfigurationInfo(_, context), `ConfigurationInfo`],
    encryptionInfo: [, (_) => se_EncryptionInfo(_, context), `EncryptionInfo`],
    enhancedMonitoring: [, , `EnhancedMonitoring`],
    kafkaVersion: [, , `KafkaVersion`],
    loggingInfo: [, (_) => se_LoggingInfo(_, context), `LoggingInfo`],
    numberOfBrokerNodes: [, , `NumberOfBrokerNodes`],
    openMonitoring: [, (_) => se_OpenMonitoringInfo(_, context), `OpenMonitoring`],
    storageMode: [, , `StorageMode`],
  });
};

/**
 * serializeAws_restJson1ProvisionedThroughput
 */
const se_ProvisionedThroughput = (input: ProvisionedThroughput, context: __SerdeContext): any => {
  return take(input, {
    enabled: [, , `Enabled`],
    volumeThroughput: [, , `VolumeThroughput`],
  });
};

/**
 * serializeAws_restJson1PublicAccess
 */
const se_PublicAccess = (input: PublicAccess, context: __SerdeContext): any => {
  return take(input, {
    type: [, , `Type`],
  });
};

/**
 * serializeAws_restJson1S3
 */
const se_S3 = (input: S3, context: __SerdeContext): any => {
  return take(input, {
    bucket: [, , `Bucket`],
    enabled: [, , `Enabled`],
    prefix: [, , `Prefix`],
  });
};

/**
 * serializeAws_restJson1Sasl
 */
const se_Sasl = (input: Sasl, context: __SerdeContext): any => {
  return take(input, {
    iam: [, (_) => se_Iam(_, context), `Iam`],
    scram: [, (_) => se_Scram(_, context), `Scram`],
  });
};

/**
 * serializeAws_restJson1Scram
 */
const se_Scram = (input: Scram, context: __SerdeContext): any => {
  return take(input, {
    enabled: [, , `Enabled`],
  });
};

/**
 * serializeAws_restJson1ServerlessClientAuthentication
 */
const se_ServerlessClientAuthentication = (input: ServerlessClientAuthentication, context: __SerdeContext): any => {
  return take(input, {
    sasl: [, (_) => se_ServerlessSasl(_, context), `Sasl`],
  });
};

/**
 * serializeAws_restJson1ServerlessRequest
 */
const se_ServerlessRequest = (input: ServerlessRequest, context: __SerdeContext): any => {
  return take(input, {
    clientAuthentication: [, (_) => se_ServerlessClientAuthentication(_, context), `ClientAuthentication`],
    vpcConfigs: [, (_) => se___listOfVpcConfig(_, context), `VpcConfigs`],
  });
};

/**
 * serializeAws_restJson1ServerlessSasl
 */
const se_ServerlessSasl = (input: ServerlessSasl, context: __SerdeContext): any => {
  return take(input, {
    iam: [, (_) => se_Iam(_, context), `Iam`],
  });
};

/**
 * serializeAws_restJson1StorageInfo
 */
const se_StorageInfo = (input: StorageInfo, context: __SerdeContext): any => {
  return take(input, {
    ebsStorageInfo: [, (_) => se_EBSStorageInfo(_, context), `EbsStorageInfo`],
  });
};

/**
 * serializeAws_restJson1Tls
 */
const se_Tls = (input: Tls, context: __SerdeContext): any => {
  return take(input, {
    certificateAuthorityArnList: [, _json, `CertificateAuthorityArnList`],
    enabled: [, , `Enabled`],
  });
};

/**
 * serializeAws_restJson1Unauthenticated
 */
const se_Unauthenticated = (input: Unauthenticated, context: __SerdeContext): any => {
  return take(input, {
    enabled: [, , `Enabled`],
  });
};

/**
 * serializeAws_restJson1VpcConfig
 */
const se_VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return take(input, {
    securityGroupIds: [, _json, `SecurityGroupIds`],
    subnetIds: [, _json, `SubnetIds`],
  });
};

/**
 * serializeAws_restJson1VpcConnectivity
 */
const se_VpcConnectivity = (input: VpcConnectivity, context: __SerdeContext): any => {
  return take(input, {
    clientAuthentication: [, (_) => se_VpcConnectivityClientAuthentication(_, context), `ClientAuthentication`],
  });
};

/**
 * serializeAws_restJson1VpcConnectivityClientAuthentication
 */
const se_VpcConnectivityClientAuthentication = (
  input: VpcConnectivityClientAuthentication,
  context: __SerdeContext
): any => {
  return take(input, {
    sasl: [, (_) => se_VpcConnectivitySasl(_, context), `Sasl`],
    tls: [, (_) => se_VpcConnectivityTls(_, context), `Tls`],
  });
};

/**
 * serializeAws_restJson1VpcConnectivityIam
 */
const se_VpcConnectivityIam = (input: VpcConnectivityIam, context: __SerdeContext): any => {
  return take(input, {
    enabled: [, , `Enabled`],
  });
};

/**
 * serializeAws_restJson1VpcConnectivitySasl
 */
const se_VpcConnectivitySasl = (input: VpcConnectivitySasl, context: __SerdeContext): any => {
  return take(input, {
    iam: [, (_) => se_VpcConnectivityIam(_, context), `Iam`],
    scram: [, (_) => se_VpcConnectivityScram(_, context), `Scram`],
  });
};

/**
 * serializeAws_restJson1VpcConnectivityScram
 */
const se_VpcConnectivityScram = (input: VpcConnectivityScram, context: __SerdeContext): any => {
  return take(input, {
    enabled: [, , `Enabled`],
  });
};

/**
 * serializeAws_restJson1VpcConnectivityTls
 */
const se_VpcConnectivityTls = (input: VpcConnectivityTls, context: __SerdeContext): any => {
  return take(input, {
    enabled: [, , `Enabled`],
  });
};

// de___listOf__string omitted.

/**
 * deserializeAws_restJson1__listOfBrokerEBSVolumeInfo
 */
const de___listOfBrokerEBSVolumeInfo = (output: any, context: __SerdeContext): BrokerEBSVolumeInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BrokerEBSVolumeInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfClientVpcConnection
 */
const de___listOfClientVpcConnection = (output: any, context: __SerdeContext): ClientVpcConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClientVpcConnection(entry, context);
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
      return de_ClusterOperationStep(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfClusterOperationV2Summary
 */
const de___listOfClusterOperationV2Summary = (output: any, context: __SerdeContext): ClusterOperationV2Summary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ClusterOperationV2Summary(entry, context);
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
      return de_VpcConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1__listOfVpcConnection
 */
const de___listOfVpcConnection = (output: any, context: __SerdeContext): VpcConnection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VpcConnection(entry, context);
    });
  return retVal;
};

// de___mapOf__string omitted.

/**
 * deserializeAws_restJson1BrokerEBSVolumeInfo
 */
const de_BrokerEBSVolumeInfo = (output: any, context: __SerdeContext): BrokerEBSVolumeInfo => {
  return take(output, {
    KafkaBrokerNodeId: [, __expectString, `kafkaBrokerNodeId`],
    ProvisionedThroughput: [, (_: any) => de_ProvisionedThroughput(_, context), `provisionedThroughput`],
    VolumeSizeGB: [, __expectInt32, `volumeSizeGB`],
  }) as any;
};

/**
 * deserializeAws_restJson1BrokerLogs
 */
const de_BrokerLogs = (output: any, context: __SerdeContext): BrokerLogs => {
  return take(output, {
    CloudWatchLogs: [, (_: any) => de_CloudWatchLogs(_, context), `cloudWatchLogs`],
    Firehose: [, (_: any) => de_Firehose(_, context), `firehose`],
    S3: [, (_: any) => de_S3(_, context), `s3`],
  }) as any;
};

/**
 * deserializeAws_restJson1BrokerNodeGroupInfo
 */
const de_BrokerNodeGroupInfo = (output: any, context: __SerdeContext): BrokerNodeGroupInfo => {
  return take(output, {
    BrokerAZDistribution: [, __expectString, `brokerAZDistribution`],
    ClientSubnets: [, _json, `clientSubnets`],
    ConnectivityInfo: [, (_: any) => de_ConnectivityInfo(_, context), `connectivityInfo`],
    InstanceType: [, __expectString, `instanceType`],
    SecurityGroups: [, _json, `securityGroups`],
    StorageInfo: [, (_: any) => de_StorageInfo(_, context), `storageInfo`],
    ZoneIds: [, _json, `zoneIds`],
  }) as any;
};

/**
 * deserializeAws_restJson1BrokerNodeInfo
 */
const de_BrokerNodeInfo = (output: any, context: __SerdeContext): BrokerNodeInfo => {
  return take(output, {
    AttachedENIId: [, __expectString, `attachedENIId`],
    BrokerId: [, __limitedParseDouble, `brokerId`],
    ClientSubnet: [, __expectString, `clientSubnet`],
    ClientVpcIpAddress: [, __expectString, `clientVpcIpAddress`],
    CurrentBrokerSoftwareInfo: [, (_: any) => de_BrokerSoftwareInfo(_, context), `currentBrokerSoftwareInfo`],
    Endpoints: [, _json, `endpoints`],
  }) as any;
};

/**
 * deserializeAws_restJson1BrokerSoftwareInfo
 */
const de_BrokerSoftwareInfo = (output: any, context: __SerdeContext): BrokerSoftwareInfo => {
  return take(output, {
    ConfigurationArn: [, __expectString, `configurationArn`],
    ConfigurationRevision: [, __expectLong, `configurationRevision`],
    KafkaVersion: [, __expectString, `kafkaVersion`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClientAuthentication
 */
const de_ClientAuthentication = (output: any, context: __SerdeContext): ClientAuthentication => {
  return take(output, {
    Sasl: [, (_: any) => de_Sasl(_, context), `sasl`],
    Tls: [, (_: any) => de_Tls(_, context), `tls`],
    Unauthenticated: [, (_: any) => de_Unauthenticated(_, context), `unauthenticated`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClientVpcConnection
 */
const de_ClientVpcConnection = (output: any, context: __SerdeContext): ClientVpcConnection => {
  return take(output, {
    Authentication: [, __expectString, `authentication`],
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    Owner: [, __expectString, `owner`],
    State: [, __expectString, `state`],
    VpcConnectionArn: [, __expectString, `vpcConnectionArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1CloudWatchLogs
 */
const de_CloudWatchLogs = (output: any, context: __SerdeContext): CloudWatchLogs => {
  return take(output, {
    Enabled: [, __expectBoolean, `enabled`],
    LogGroup: [, __expectString, `logGroup`],
  }) as any;
};

/**
 * deserializeAws_restJson1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return take(output, {
    ActiveOperationArn: [, __expectString, `activeOperationArn`],
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterName: [, __expectString, `clusterName`],
    ClusterType: [, __expectString, `clusterType`],
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    CurrentVersion: [, __expectString, `currentVersion`],
    Provisioned: [, (_: any) => de_Provisioned(_, context), `provisioned`],
    Serverless: [, (_: any) => de_Serverless(_, context), `serverless`],
    State: [, __expectString, `state`],
    StateInfo: [, (_: any) => de_StateInfo(_, context), `stateInfo`],
    Tags: [, _json, `tags`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterInfo
 */
const de_ClusterInfo = (output: any, context: __SerdeContext): ClusterInfo => {
  return take(output, {
    ActiveOperationArn: [, __expectString, `activeOperationArn`],
    BrokerNodeGroupInfo: [, (_: any) => de_BrokerNodeGroupInfo(_, context), `brokerNodeGroupInfo`],
    ClientAuthentication: [, (_: any) => de_ClientAuthentication(_, context), `clientAuthentication`],
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterName: [, __expectString, `clusterName`],
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    CurrentBrokerSoftwareInfo: [, (_: any) => de_BrokerSoftwareInfo(_, context), `currentBrokerSoftwareInfo`],
    CurrentVersion: [, __expectString, `currentVersion`],
    EncryptionInfo: [, (_: any) => de_EncryptionInfo(_, context), `encryptionInfo`],
    EnhancedMonitoring: [, __expectString, `enhancedMonitoring`],
    LoggingInfo: [, (_: any) => de_LoggingInfo(_, context), `loggingInfo`],
    NumberOfBrokerNodes: [, __expectInt32, `numberOfBrokerNodes`],
    OpenMonitoring: [, (_: any) => de_OpenMonitoring(_, context), `openMonitoring`],
    State: [, __expectString, `state`],
    StateInfo: [, (_: any) => de_StateInfo(_, context), `stateInfo`],
    StorageMode: [, __expectString, `storageMode`],
    Tags: [, _json, `tags`],
    ZookeeperConnectString: [, __expectString, `zookeeperConnectString`],
    ZookeeperConnectStringTls: [, __expectString, `zookeeperConnectStringTls`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterOperationInfo
 */
const de_ClusterOperationInfo = (output: any, context: __SerdeContext): ClusterOperationInfo => {
  return take(output, {
    ClientRequestId: [, __expectString, `clientRequestId`],
    ClusterArn: [, __expectString, `clusterArn`],
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    EndTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `endTime`],
    ErrorInfo: [, (_: any) => de_ErrorInfo(_, context), `errorInfo`],
    OperationArn: [, __expectString, `operationArn`],
    OperationState: [, __expectString, `operationState`],
    OperationSteps: [, (_: any) => de___listOfClusterOperationStep(_, context), `operationSteps`],
    OperationType: [, __expectString, `operationType`],
    SourceClusterInfo: [, (_: any) => de_MutableClusterInfo(_, context), `sourceClusterInfo`],
    TargetClusterInfo: [, (_: any) => de_MutableClusterInfo(_, context), `targetClusterInfo`],
    VpcConnectionInfo: [, (_: any) => de_VpcConnectionInfo(_, context), `vpcConnectionInfo`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterOperationStep
 */
const de_ClusterOperationStep = (output: any, context: __SerdeContext): ClusterOperationStep => {
  return take(output, {
    StepInfo: [, (_: any) => de_ClusterOperationStepInfo(_, context), `stepInfo`],
    StepName: [, __expectString, `stepName`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterOperationStepInfo
 */
const de_ClusterOperationStepInfo = (output: any, context: __SerdeContext): ClusterOperationStepInfo => {
  return take(output, {
    StepStatus: [, __expectString, `stepStatus`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterOperationV2
 */
const de_ClusterOperationV2 = (output: any, context: __SerdeContext): ClusterOperationV2 => {
  return take(output, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterType: [, __expectString, `clusterType`],
    EndTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `endTime`],
    ErrorInfo: [, (_: any) => de_ErrorInfo(_, context), `errorInfo`],
    OperationArn: [, __expectString, `operationArn`],
    OperationState: [, __expectString, `operationState`],
    OperationType: [, __expectString, `operationType`],
    Provisioned: [, (_: any) => de_ClusterOperationV2Provisioned(_, context), `provisioned`],
    Serverless: [, (_: any) => de_ClusterOperationV2Serverless(_, context), `serverless`],
    StartTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `startTime`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterOperationV2Provisioned
 */
const de_ClusterOperationV2Provisioned = (output: any, context: __SerdeContext): ClusterOperationV2Provisioned => {
  return take(output, {
    OperationSteps: [, (_: any) => de___listOfClusterOperationStep(_, context), `operationSteps`],
    SourceClusterInfo: [, (_: any) => de_MutableClusterInfo(_, context), `sourceClusterInfo`],
    TargetClusterInfo: [, (_: any) => de_MutableClusterInfo(_, context), `targetClusterInfo`],
    VpcConnectionInfo: [, (_: any) => de_VpcConnectionInfo(_, context), `vpcConnectionInfo`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterOperationV2Serverless
 */
const de_ClusterOperationV2Serverless = (output: any, context: __SerdeContext): ClusterOperationV2Serverless => {
  return take(output, {
    VpcConnectionInfo: [, (_: any) => de_VpcConnectionInfoServerless(_, context), `vpcConnectionInfo`],
  }) as any;
};

/**
 * deserializeAws_restJson1ClusterOperationV2Summary
 */
const de_ClusterOperationV2Summary = (output: any, context: __SerdeContext): ClusterOperationV2Summary => {
  return take(output, {
    ClusterArn: [, __expectString, `clusterArn`],
    ClusterType: [, __expectString, `clusterType`],
    EndTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `endTime`],
    OperationArn: [, __expectString, `operationArn`],
    OperationState: [, __expectString, `operationState`],
    OperationType: [, __expectString, `operationType`],
    StartTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `startTime`],
  }) as any;
};

/**
 * deserializeAws_restJson1CompatibleKafkaVersion
 */
const de_CompatibleKafkaVersion = (output: any, context: __SerdeContext): CompatibleKafkaVersion => {
  return take(output, {
    SourceVersion: [, __expectString, `sourceVersion`],
    TargetVersions: [, _json, `targetVersions`],
  }) as any;
};

/**
 * deserializeAws_restJson1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Configuration => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    Description: [, __expectString, `description`],
    KafkaVersions: [, _json, `kafkaVersions`],
    LatestRevision: [, (_: any) => de_ConfigurationRevision(_, context), `latestRevision`],
    Name: [, __expectString, `name`],
    State: [, __expectString, `state`],
  }) as any;
};

/**
 * deserializeAws_restJson1ConfigurationInfo
 */
const de_ConfigurationInfo = (output: any, context: __SerdeContext): ConfigurationInfo => {
  return take(output, {
    Arn: [, __expectString, `arn`],
    Revision: [, __expectLong, `revision`],
  }) as any;
};

/**
 * deserializeAws_restJson1ConfigurationRevision
 */
const de_ConfigurationRevision = (output: any, context: __SerdeContext): ConfigurationRevision => {
  return take(output, {
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    Description: [, __expectString, `description`],
    Revision: [, __expectLong, `revision`],
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectivityInfo
 */
const de_ConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo => {
  return take(output, {
    PublicAccess: [, (_: any) => de_PublicAccess(_, context), `publicAccess`],
    VpcConnectivity: [, (_: any) => de_VpcConnectivity(_, context), `vpcConnectivity`],
  }) as any;
};

/**
 * deserializeAws_restJson1EBSStorageInfo
 */
const de_EBSStorageInfo = (output: any, context: __SerdeContext): EBSStorageInfo => {
  return take(output, {
    ProvisionedThroughput: [, (_: any) => de_ProvisionedThroughput(_, context), `provisionedThroughput`],
    VolumeSize: [, __expectInt32, `volumeSize`],
  }) as any;
};

/**
 * deserializeAws_restJson1EncryptionAtRest
 */
const de_EncryptionAtRest = (output: any, context: __SerdeContext): EncryptionAtRest => {
  return take(output, {
    DataVolumeKMSKeyId: [, __expectString, `dataVolumeKMSKeyId`],
  }) as any;
};

/**
 * deserializeAws_restJson1EncryptionInfo
 */
const de_EncryptionInfo = (output: any, context: __SerdeContext): EncryptionInfo => {
  return take(output, {
    EncryptionAtRest: [, (_: any) => de_EncryptionAtRest(_, context), `encryptionAtRest`],
    EncryptionInTransit: [, (_: any) => de_EncryptionInTransit(_, context), `encryptionInTransit`],
  }) as any;
};

/**
 * deserializeAws_restJson1EncryptionInTransit
 */
const de_EncryptionInTransit = (output: any, context: __SerdeContext): EncryptionInTransit => {
  return take(output, {
    ClientBroker: [, __expectString, `clientBroker`],
    InCluster: [, __expectBoolean, `inCluster`],
  }) as any;
};

/**
 * deserializeAws_restJson1ErrorInfo
 */
const de_ErrorInfo = (output: any, context: __SerdeContext): ErrorInfo => {
  return take(output, {
    ErrorCode: [, __expectString, `errorCode`],
    ErrorString: [, __expectString, `errorString`],
  }) as any;
};

/**
 * deserializeAws_restJson1Firehose
 */
const de_Firehose = (output: any, context: __SerdeContext): Firehose => {
  return take(output, {
    DeliveryStream: [, __expectString, `deliveryStream`],
    Enabled: [, __expectBoolean, `enabled`],
  }) as any;
};

/**
 * deserializeAws_restJson1Iam
 */
const de_Iam = (output: any, context: __SerdeContext): Iam => {
  return take(output, {
    Enabled: [, __expectBoolean, `enabled`],
  }) as any;
};

/**
 * deserializeAws_restJson1JmxExporter
 */
const de_JmxExporter = (output: any, context: __SerdeContext): JmxExporter => {
  return take(output, {
    EnabledInBroker: [, __expectBoolean, `enabledInBroker`],
  }) as any;
};

/**
 * deserializeAws_restJson1JmxExporterInfo
 */
const de_JmxExporterInfo = (output: any, context: __SerdeContext): JmxExporterInfo => {
  return take(output, {
    EnabledInBroker: [, __expectBoolean, `enabledInBroker`],
  }) as any;
};

/**
 * deserializeAws_restJson1KafkaVersion
 */
const de_KafkaVersion = (output: any, context: __SerdeContext): KafkaVersion => {
  return take(output, {
    Status: [, __expectString, `status`],
    Version: [, __expectString, `version`],
  }) as any;
};

/**
 * deserializeAws_restJson1LoggingInfo
 */
const de_LoggingInfo = (output: any, context: __SerdeContext): LoggingInfo => {
  return take(output, {
    BrokerLogs: [, (_: any) => de_BrokerLogs(_, context), `brokerLogs`],
  }) as any;
};

/**
 * deserializeAws_restJson1MutableClusterInfo
 */
const de_MutableClusterInfo = (output: any, context: __SerdeContext): MutableClusterInfo => {
  return take(output, {
    BrokerEBSVolumeInfo: [, (_: any) => de___listOfBrokerEBSVolumeInfo(_, context), `brokerEBSVolumeInfo`],
    ClientAuthentication: [, (_: any) => de_ClientAuthentication(_, context), `clientAuthentication`],
    ConfigurationInfo: [, (_: any) => de_ConfigurationInfo(_, context), `configurationInfo`],
    ConnectivityInfo: [, (_: any) => de_ConnectivityInfo(_, context), `connectivityInfo`],
    EncryptionInfo: [, (_: any) => de_EncryptionInfo(_, context), `encryptionInfo`],
    EnhancedMonitoring: [, __expectString, `enhancedMonitoring`],
    InstanceType: [, __expectString, `instanceType`],
    KafkaVersion: [, __expectString, `kafkaVersion`],
    LoggingInfo: [, (_: any) => de_LoggingInfo(_, context), `loggingInfo`],
    NumberOfBrokerNodes: [, __expectInt32, `numberOfBrokerNodes`],
    OpenMonitoring: [, (_: any) => de_OpenMonitoring(_, context), `openMonitoring`],
    StorageMode: [, __expectString, `storageMode`],
  }) as any;
};

/**
 * deserializeAws_restJson1NodeExporter
 */
const de_NodeExporter = (output: any, context: __SerdeContext): NodeExporter => {
  return take(output, {
    EnabledInBroker: [, __expectBoolean, `enabledInBroker`],
  }) as any;
};

/**
 * deserializeAws_restJson1NodeExporterInfo
 */
const de_NodeExporterInfo = (output: any, context: __SerdeContext): NodeExporterInfo => {
  return take(output, {
    EnabledInBroker: [, __expectBoolean, `enabledInBroker`],
  }) as any;
};

/**
 * deserializeAws_restJson1NodeInfo
 */
const de_NodeInfo = (output: any, context: __SerdeContext): NodeInfo => {
  return take(output, {
    AddedToClusterTime: [, __expectString, `addedToClusterTime`],
    BrokerNodeInfo: [, (_: any) => de_BrokerNodeInfo(_, context), `brokerNodeInfo`],
    InstanceType: [, __expectString, `instanceType`],
    NodeARN: [, __expectString, `nodeARN`],
    NodeType: [, __expectString, `nodeType`],
    ZookeeperNodeInfo: [, (_: any) => de_ZookeeperNodeInfo(_, context), `zookeeperNodeInfo`],
  }) as any;
};

/**
 * deserializeAws_restJson1OpenMonitoring
 */
const de_OpenMonitoring = (output: any, context: __SerdeContext): OpenMonitoring => {
  return take(output, {
    Prometheus: [, (_: any) => de_Prometheus(_, context), `prometheus`],
  }) as any;
};

/**
 * deserializeAws_restJson1OpenMonitoringInfo
 */
const de_OpenMonitoringInfo = (output: any, context: __SerdeContext): OpenMonitoringInfo => {
  return take(output, {
    Prometheus: [, (_: any) => de_PrometheusInfo(_, context), `prometheus`],
  }) as any;
};

/**
 * deserializeAws_restJson1Prometheus
 */
const de_Prometheus = (output: any, context: __SerdeContext): Prometheus => {
  return take(output, {
    JmxExporter: [, (_: any) => de_JmxExporter(_, context), `jmxExporter`],
    NodeExporter: [, (_: any) => de_NodeExporter(_, context), `nodeExporter`],
  }) as any;
};

/**
 * deserializeAws_restJson1PrometheusInfo
 */
const de_PrometheusInfo = (output: any, context: __SerdeContext): PrometheusInfo => {
  return take(output, {
    JmxExporter: [, (_: any) => de_JmxExporterInfo(_, context), `jmxExporter`],
    NodeExporter: [, (_: any) => de_NodeExporterInfo(_, context), `nodeExporter`],
  }) as any;
};

/**
 * deserializeAws_restJson1Provisioned
 */
const de_Provisioned = (output: any, context: __SerdeContext): Provisioned => {
  return take(output, {
    BrokerNodeGroupInfo: [, (_: any) => de_BrokerNodeGroupInfo(_, context), `brokerNodeGroupInfo`],
    ClientAuthentication: [, (_: any) => de_ClientAuthentication(_, context), `clientAuthentication`],
    CurrentBrokerSoftwareInfo: [, (_: any) => de_BrokerSoftwareInfo(_, context), `currentBrokerSoftwareInfo`],
    EncryptionInfo: [, (_: any) => de_EncryptionInfo(_, context), `encryptionInfo`],
    EnhancedMonitoring: [, __expectString, `enhancedMonitoring`],
    LoggingInfo: [, (_: any) => de_LoggingInfo(_, context), `loggingInfo`],
    NumberOfBrokerNodes: [, __expectInt32, `numberOfBrokerNodes`],
    OpenMonitoring: [, (_: any) => de_OpenMonitoringInfo(_, context), `openMonitoring`],
    StorageMode: [, __expectString, `storageMode`],
    ZookeeperConnectString: [, __expectString, `zookeeperConnectString`],
    ZookeeperConnectStringTls: [, __expectString, `zookeeperConnectStringTls`],
  }) as any;
};

/**
 * deserializeAws_restJson1ProvisionedThroughput
 */
const de_ProvisionedThroughput = (output: any, context: __SerdeContext): ProvisionedThroughput => {
  return take(output, {
    Enabled: [, __expectBoolean, `enabled`],
    VolumeThroughput: [, __expectInt32, `volumeThroughput`],
  }) as any;
};

/**
 * deserializeAws_restJson1PublicAccess
 */
const de_PublicAccess = (output: any, context: __SerdeContext): PublicAccess => {
  return take(output, {
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1S3
 */
const de_S3 = (output: any, context: __SerdeContext): S3 => {
  return take(output, {
    Bucket: [, __expectString, `bucket`],
    Enabled: [, __expectBoolean, `enabled`],
    Prefix: [, __expectString, `prefix`],
  }) as any;
};

/**
 * deserializeAws_restJson1Sasl
 */
const de_Sasl = (output: any, context: __SerdeContext): Sasl => {
  return take(output, {
    Iam: [, (_: any) => de_Iam(_, context), `iam`],
    Scram: [, (_: any) => de_Scram(_, context), `scram`],
  }) as any;
};

/**
 * deserializeAws_restJson1Scram
 */
const de_Scram = (output: any, context: __SerdeContext): Scram => {
  return take(output, {
    Enabled: [, __expectBoolean, `enabled`],
  }) as any;
};

/**
 * deserializeAws_restJson1Serverless
 */
const de_Serverless = (output: any, context: __SerdeContext): Serverless => {
  return take(output, {
    ClientAuthentication: [, (_: any) => de_ServerlessClientAuthentication(_, context), `clientAuthentication`],
    VpcConfigs: [, (_: any) => de___listOfVpcConfig(_, context), `vpcConfigs`],
  }) as any;
};

/**
 * deserializeAws_restJson1ServerlessClientAuthentication
 */
const de_ServerlessClientAuthentication = (output: any, context: __SerdeContext): ServerlessClientAuthentication => {
  return take(output, {
    Sasl: [, (_: any) => de_ServerlessSasl(_, context), `sasl`],
  }) as any;
};

/**
 * deserializeAws_restJson1ServerlessSasl
 */
const de_ServerlessSasl = (output: any, context: __SerdeContext): ServerlessSasl => {
  return take(output, {
    Iam: [, (_: any) => de_Iam(_, context), `iam`],
  }) as any;
};

/**
 * deserializeAws_restJson1StateInfo
 */
const de_StateInfo = (output: any, context: __SerdeContext): StateInfo => {
  return take(output, {
    Code: [, __expectString, `code`],
    Message: [, __expectString, `message`],
  }) as any;
};

/**
 * deserializeAws_restJson1StorageInfo
 */
const de_StorageInfo = (output: any, context: __SerdeContext): StorageInfo => {
  return take(output, {
    EbsStorageInfo: [, (_: any) => de_EBSStorageInfo(_, context), `ebsStorageInfo`],
  }) as any;
};

/**
 * deserializeAws_restJson1Tls
 */
const de_Tls = (output: any, context: __SerdeContext): Tls => {
  return take(output, {
    CertificateAuthorityArnList: [, _json, `certificateAuthorityArnList`],
    Enabled: [, __expectBoolean, `enabled`],
  }) as any;
};

/**
 * deserializeAws_restJson1Unauthenticated
 */
const de_Unauthenticated = (output: any, context: __SerdeContext): Unauthenticated => {
  return take(output, {
    Enabled: [, __expectBoolean, `enabled`],
  }) as any;
};

/**
 * deserializeAws_restJson1UnprocessedScramSecret
 */
const de_UnprocessedScramSecret = (output: any, context: __SerdeContext): UnprocessedScramSecret => {
  return take(output, {
    ErrorCode: [, __expectString, `errorCode`],
    ErrorMessage: [, __expectString, `errorMessage`],
    SecretArn: [, __expectString, `secretArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1UserIdentity
 */
const de_UserIdentity = (output: any, context: __SerdeContext): UserIdentity => {
  return take(output, {
    PrincipalId: [, __expectString, `principalId`],
    Type: [, __expectString, `type`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConfig
 */
const de_VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return take(output, {
    SecurityGroupIds: [, _json, `securityGroupIds`],
    SubnetIds: [, _json, `subnetIds`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnection
 */
const de_VpcConnection = (output: any, context: __SerdeContext): VpcConnection => {
  return take(output, {
    Authentication: [, __expectString, `authentication`],
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    State: [, __expectString, `state`],
    TargetClusterArn: [, __expectString, `targetClusterArn`],
    VpcConnectionArn: [, __expectString, `vpcConnectionArn`],
    VpcId: [, __expectString, `vpcId`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnectionInfo
 */
const de_VpcConnectionInfo = (output: any, context: __SerdeContext): VpcConnectionInfo => {
  return take(output, {
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    Owner: [, __expectString, `owner`],
    UserIdentity: [, (_: any) => de_UserIdentity(_, context), `userIdentity`],
    VpcConnectionArn: [, __expectString, `vpcConnectionArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnectionInfoServerless
 */
const de_VpcConnectionInfoServerless = (output: any, context: __SerdeContext): VpcConnectionInfoServerless => {
  return take(output, {
    CreationTime: [, (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)), `creationTime`],
    Owner: [, __expectString, `owner`],
    UserIdentity: [, (_: any) => de_UserIdentity(_, context), `userIdentity`],
    VpcConnectionArn: [, __expectString, `vpcConnectionArn`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnectivity
 */
const de_VpcConnectivity = (output: any, context: __SerdeContext): VpcConnectivity => {
  return take(output, {
    ClientAuthentication: [, (_: any) => de_VpcConnectivityClientAuthentication(_, context), `clientAuthentication`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnectivityClientAuthentication
 */
const de_VpcConnectivityClientAuthentication = (
  output: any,
  context: __SerdeContext
): VpcConnectivityClientAuthentication => {
  return take(output, {
    Sasl: [, (_: any) => de_VpcConnectivitySasl(_, context), `sasl`],
    Tls: [, (_: any) => de_VpcConnectivityTls(_, context), `tls`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnectivityIam
 */
const de_VpcConnectivityIam = (output: any, context: __SerdeContext): VpcConnectivityIam => {
  return take(output, {
    Enabled: [, __expectBoolean, `enabled`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnectivitySasl
 */
const de_VpcConnectivitySasl = (output: any, context: __SerdeContext): VpcConnectivitySasl => {
  return take(output, {
    Iam: [, (_: any) => de_VpcConnectivityIam(_, context), `iam`],
    Scram: [, (_: any) => de_VpcConnectivityScram(_, context), `scram`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnectivityScram
 */
const de_VpcConnectivityScram = (output: any, context: __SerdeContext): VpcConnectivityScram => {
  return take(output, {
    Enabled: [, __expectBoolean, `enabled`],
  }) as any;
};

/**
 * deserializeAws_restJson1VpcConnectivityTls
 */
const de_VpcConnectivityTls = (output: any, context: __SerdeContext): VpcConnectivityTls => {
  return take(output, {
    Enabled: [, __expectBoolean, `enabled`],
  }) as any;
};

/**
 * deserializeAws_restJson1ZookeeperNodeInfo
 */
const de_ZookeeperNodeInfo = (output: any, context: __SerdeContext): ZookeeperNodeInfo => {
  return take(output, {
    AttachedENIId: [, __expectString, `attachedENIId`],
    ClientVpcIpAddress: [, __expectString, `clientVpcIpAddress`],
    Endpoints: [, _json, `endpoints`],
    ZookeeperId: [, __limitedParseDouble, `zookeeperId`],
    ZookeeperVersion: [, __expectString, `zookeeperVersion`],
  }) as any;
};

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
