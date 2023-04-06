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
  limitedParseFloat32 as __limitedParseFloat32,
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

import { BatchDeleteWorldsCommandInput, BatchDeleteWorldsCommandOutput } from "../commands/BatchDeleteWorldsCommand";
import {
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput,
} from "../commands/BatchDescribeSimulationJobCommand";
import {
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput,
} from "../commands/CancelDeploymentJobCommand";
import {
  CancelSimulationJobBatchCommandInput,
  CancelSimulationJobBatchCommandOutput,
} from "../commands/CancelSimulationJobBatchCommand";
import {
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput,
} from "../commands/CancelSimulationJobCommand";
import {
  CancelWorldExportJobCommandInput,
  CancelWorldExportJobCommandOutput,
} from "../commands/CancelWorldExportJobCommand";
import {
  CancelWorldGenerationJobCommandInput,
  CancelWorldGenerationJobCommandOutput,
} from "../commands/CancelWorldGenerationJobCommand";
import {
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput,
} from "../commands/CreateDeploymentJobCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "../commands/CreateFleetCommand";
import {
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput,
} from "../commands/CreateRobotApplicationCommand";
import {
  CreateRobotApplicationVersionCommandInput,
  CreateRobotApplicationVersionCommandOutput,
} from "../commands/CreateRobotApplicationVersionCommand";
import { CreateRobotCommandInput, CreateRobotCommandOutput } from "../commands/CreateRobotCommand";
import {
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput,
} from "../commands/CreateSimulationApplicationCommand";
import {
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput,
} from "../commands/CreateSimulationApplicationVersionCommand";
import {
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput,
} from "../commands/CreateSimulationJobCommand";
import {
  CreateWorldExportJobCommandInput,
  CreateWorldExportJobCommandOutput,
} from "../commands/CreateWorldExportJobCommand";
import {
  CreateWorldGenerationJobCommandInput,
  CreateWorldGenerationJobCommandOutput,
} from "../commands/CreateWorldGenerationJobCommand";
import {
  CreateWorldTemplateCommandInput,
  CreateWorldTemplateCommandOutput,
} from "../commands/CreateWorldTemplateCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "../commands/DeleteFleetCommand";
import {
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput,
} from "../commands/DeleteRobotApplicationCommand";
import { DeleteRobotCommandInput, DeleteRobotCommandOutput } from "../commands/DeleteRobotCommand";
import {
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput,
} from "../commands/DeleteSimulationApplicationCommand";
import {
  DeleteWorldTemplateCommandInput,
  DeleteWorldTemplateCommandOutput,
} from "../commands/DeleteWorldTemplateCommand";
import { DeregisterRobotCommandInput, DeregisterRobotCommandOutput } from "../commands/DeregisterRobotCommand";
import {
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput,
} from "../commands/DescribeDeploymentJobCommand";
import { DescribeFleetCommandInput, DescribeFleetCommandOutput } from "../commands/DescribeFleetCommand";
import {
  DescribeRobotApplicationCommandInput,
  DescribeRobotApplicationCommandOutput,
} from "../commands/DescribeRobotApplicationCommand";
import { DescribeRobotCommandInput, DescribeRobotCommandOutput } from "../commands/DescribeRobotCommand";
import {
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput,
} from "../commands/DescribeSimulationApplicationCommand";
import {
  DescribeSimulationJobBatchCommandInput,
  DescribeSimulationJobBatchCommandOutput,
} from "../commands/DescribeSimulationJobBatchCommand";
import {
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput,
} from "../commands/DescribeSimulationJobCommand";
import { DescribeWorldCommandInput, DescribeWorldCommandOutput } from "../commands/DescribeWorldCommand";
import {
  DescribeWorldExportJobCommandInput,
  DescribeWorldExportJobCommandOutput,
} from "../commands/DescribeWorldExportJobCommand";
import {
  DescribeWorldGenerationJobCommandInput,
  DescribeWorldGenerationJobCommandOutput,
} from "../commands/DescribeWorldGenerationJobCommand";
import {
  DescribeWorldTemplateCommandInput,
  DescribeWorldTemplateCommandOutput,
} from "../commands/DescribeWorldTemplateCommand";
import {
  GetWorldTemplateBodyCommandInput,
  GetWorldTemplateBodyCommandOutput,
} from "../commands/GetWorldTemplateBodyCommand";
import { ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput } from "../commands/ListDeploymentJobsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "../commands/ListFleetsCommand";
import {
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput,
} from "../commands/ListRobotApplicationsCommand";
import { ListRobotsCommandInput, ListRobotsCommandOutput } from "../commands/ListRobotsCommand";
import {
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "../commands/ListSimulationApplicationsCommand";
import {
  ListSimulationJobBatchesCommandInput,
  ListSimulationJobBatchesCommandOutput,
} from "../commands/ListSimulationJobBatchesCommand";
import { ListSimulationJobsCommandInput, ListSimulationJobsCommandOutput } from "../commands/ListSimulationJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListWorldExportJobsCommandInput,
  ListWorldExportJobsCommandOutput,
} from "../commands/ListWorldExportJobsCommand";
import {
  ListWorldGenerationJobsCommandInput,
  ListWorldGenerationJobsCommandOutput,
} from "../commands/ListWorldGenerationJobsCommand";
import { ListWorldsCommandInput, ListWorldsCommandOutput } from "../commands/ListWorldsCommand";
import { ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput } from "../commands/ListWorldTemplatesCommand";
import { RegisterRobotCommandInput, RegisterRobotCommandOutput } from "../commands/RegisterRobotCommand";
import {
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput,
} from "../commands/RestartSimulationJobCommand";
import {
  StartSimulationJobBatchCommandInput,
  StartSimulationJobBatchCommandOutput,
} from "../commands/StartSimulationJobBatchCommand";
import { SyncDeploymentJobCommandInput, SyncDeploymentJobCommandOutput } from "../commands/SyncDeploymentJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateRobotApplicationCommandInput,
  UpdateRobotApplicationCommandOutput,
} from "../commands/UpdateRobotApplicationCommand";
import {
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput,
} from "../commands/UpdateSimulationApplicationCommand";
import {
  UpdateWorldTemplateCommandInput,
  UpdateWorldTemplateCommandOutput,
} from "../commands/UpdateWorldTemplateCommand";
import {
  BatchPolicy,
  Compute,
  ComputeResponse,
  ConcurrentDeploymentException,
  DataSource,
  DataSourceConfig,
  DeploymentApplicationConfig,
  DeploymentConfig,
  DeploymentJob,
  DeploymentLaunchConfig,
  Environment,
  FailedCreateSimulationJobRequest,
  FailureSummary,
  Filter,
  FinishedWorldsSummary,
  Fleet,
  IdempotentParameterMismatchException,
  InternalServerException,
  InvalidParameterException,
  LaunchConfig,
  LimitExceededException,
  LoggingConfig,
  NetworkInterface,
  OutputLocation,
  PortForwardingConfig,
  PortMapping,
  ProgressDetail,
  RenderingEngine,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  Robot,
  RobotApplicationConfig,
  RobotApplicationSummary,
  RobotDeployment,
  RobotSoftwareSuite,
  S3KeyOutput,
  S3Object,
  ServiceUnavailableException,
  SimulationApplicationConfig,
  SimulationApplicationSummary,
  SimulationJob,
  SimulationJobBatchSummary,
  SimulationJobRequest,
  SimulationJobSummary,
  SimulationSoftwareSuite,
  Source,
  SourceConfig,
  TemplateLocation,
  TemplateSummary,
  ThrottlingException,
  Tool,
  UploadConfiguration,
  VPCConfig,
  VPCConfigResponse,
  WorldConfig,
  WorldCount,
  WorldExportJobSummary,
  WorldFailure,
  WorldGenerationJobSummary,
  WorldSummary,
} from "../models/models_0";
import { RoboMakerServiceException as __BaseException } from "../models/RoboMakerServiceException";

/**
 * serializeAws_restJson1BatchDeleteWorldsCommand
 */
export const se_BatchDeleteWorldsCommand = async (
  input: BatchDeleteWorldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/batchDeleteWorlds";
  let body: any;
  body = JSON.stringify({
    ...(input.worlds != null && { worlds: se_Arns(input.worlds, context) }),
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
 * serializeAws_restJson1BatchDescribeSimulationJobCommand
 */
export const se_BatchDescribeSimulationJobCommand = async (
  input: BatchDescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/batchDescribeSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobs != null && { jobs: se_Arns(input.jobs, context) }),
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
 * serializeAws_restJson1CancelDeploymentJobCommand
 */
export const se_CancelDeploymentJobCommand = async (
  input: CancelDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cancelDeploymentJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1CancelSimulationJobCommand
 */
export const se_CancelSimulationJobCommand = async (
  input: CancelSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cancelSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1CancelSimulationJobBatchCommand
 */
export const se_CancelSimulationJobBatchCommand = async (
  input: CancelSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cancelSimulationJobBatch";
  let body: any;
  body = JSON.stringify({
    ...(input.batch != null && { batch: input.batch }),
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
 * serializeAws_restJson1CancelWorldExportJobCommand
 */
export const se_CancelWorldExportJobCommand = async (
  input: CancelWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cancelWorldExportJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1CancelWorldGenerationJobCommand
 */
export const se_CancelWorldGenerationJobCommand = async (
  input: CancelWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cancelWorldGenerationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1CreateDeploymentJobCommand
 */
export const se_CreateDeploymentJobCommand = async (
  input: CreateDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createDeploymentJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.deploymentApplicationConfigs != null && {
      deploymentApplicationConfigs: se_DeploymentApplicationConfigs(input.deploymentApplicationConfigs, context),
    }),
    ...(input.deploymentConfig != null && { deploymentConfig: se_DeploymentConfig(input.deploymentConfig, context) }),
    ...(input.fleet != null && { fleet: input.fleet }),
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
 * serializeAws_restJson1CreateFleetCommand
 */
export const se_CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1CreateRobotCommand
 */
export const se_CreateRobotCommand = async (
  input: CreateRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.architecture != null && { architecture: input.architecture }),
    ...(input.greengrassGroupId != null && { greengrassGroupId: input.greengrassGroupId }),
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1CreateRobotApplicationCommand
 */
export const se_CreateRobotApplicationCommand = async (
  input: CreateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.environment != null && { environment: se_Environment(input.environment, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.robotSoftwareSuite != null && {
      robotSoftwareSuite: se_RobotSoftwareSuite(input.robotSoftwareSuite, context),
    }),
    ...(input.sources != null && { sources: se_SourceConfigs(input.sources, context) }),
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
 * serializeAws_restJson1CreateRobotApplicationVersionCommand
 */
export const se_CreateRobotApplicationVersionCommand = async (
  input: CreateRobotApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createRobotApplicationVersion";
  let body: any;
  body = JSON.stringify({
    ...(input.application != null && { application: input.application }),
    ...(input.currentRevisionId != null && { currentRevisionId: input.currentRevisionId }),
    ...(input.imageDigest != null && { imageDigest: input.imageDigest }),
    ...(input.s3Etags != null && { s3Etags: se_S3Etags(input.s3Etags, context) }),
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
 * serializeAws_restJson1CreateSimulationApplicationCommand
 */
export const se_CreateSimulationApplicationCommand = async (
  input: CreateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.environment != null && { environment: se_Environment(input.environment, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.renderingEngine != null && { renderingEngine: se_RenderingEngine(input.renderingEngine, context) }),
    ...(input.robotSoftwareSuite != null && {
      robotSoftwareSuite: se_RobotSoftwareSuite(input.robotSoftwareSuite, context),
    }),
    ...(input.simulationSoftwareSuite != null && {
      simulationSoftwareSuite: se_SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
    }),
    ...(input.sources != null && { sources: se_SourceConfigs(input.sources, context) }),
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
 * serializeAws_restJson1CreateSimulationApplicationVersionCommand
 */
export const se_CreateSimulationApplicationVersionCommand = async (
  input: CreateSimulationApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createSimulationApplicationVersion";
  let body: any;
  body = JSON.stringify({
    ...(input.application != null && { application: input.application }),
    ...(input.currentRevisionId != null && { currentRevisionId: input.currentRevisionId }),
    ...(input.imageDigest != null && { imageDigest: input.imageDigest }),
    ...(input.s3Etags != null && { s3Etags: se_S3Etags(input.s3Etags, context) }),
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
 * serializeAws_restJson1CreateSimulationJobCommand
 */
export const se_CreateSimulationJobCommand = async (
  input: CreateSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createSimulationJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.compute != null && { compute: se_Compute(input.compute, context) }),
    ...(input.dataSources != null && { dataSources: se_DataSourceConfigs(input.dataSources, context) }),
    ...(input.failureBehavior != null && { failureBehavior: input.failureBehavior }),
    ...(input.iamRole != null && { iamRole: input.iamRole }),
    ...(input.loggingConfig != null && { loggingConfig: se_LoggingConfig(input.loggingConfig, context) }),
    ...(input.maxJobDurationInSeconds != null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds }),
    ...(input.outputLocation != null && { outputLocation: se_OutputLocation(input.outputLocation, context) }),
    ...(input.robotApplications != null && {
      robotApplications: se_RobotApplicationConfigs(input.robotApplications, context),
    }),
    ...(input.simulationApplications != null && {
      simulationApplications: se_SimulationApplicationConfigs(input.simulationApplications, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.vpcConfig != null && { vpcConfig: se_VPCConfig(input.vpcConfig, context) }),
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
 * serializeAws_restJson1CreateWorldExportJobCommand
 */
export const se_CreateWorldExportJobCommand = async (
  input: CreateWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createWorldExportJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.iamRole != null && { iamRole: input.iamRole }),
    ...(input.outputLocation != null && { outputLocation: se_OutputLocation(input.outputLocation, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.worlds != null && { worlds: se_Arns(input.worlds, context) }),
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
 * serializeAws_restJson1CreateWorldGenerationJobCommand
 */
export const se_CreateWorldGenerationJobCommand = async (
  input: CreateWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createWorldGenerationJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.template != null && { template: input.template }),
    ...(input.worldCount != null && { worldCount: se_WorldCount(input.worldCount, context) }),
    ...(input.worldTags != null && { worldTags: se_TagMap(input.worldTags, context) }),
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
 * serializeAws_restJson1CreateWorldTemplateCommand
 */
export const se_CreateWorldTemplateCommand = async (
  input: CreateWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createWorldTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken != null && { clientRequestToken: input.clientRequestToken }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.templateBody != null && { templateBody: input.templateBody }),
    ...(input.templateLocation != null && { templateLocation: se_TemplateLocation(input.templateLocation, context) }),
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
 * serializeAws_restJson1DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet != null && { fleet: input.fleet }),
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
 * serializeAws_restJson1DeleteRobotCommand
 */
export const se_DeleteRobotCommand = async (
  input: DeleteRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.robot != null && { robot: input.robot }),
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
 * serializeAws_restJson1DeleteRobotApplicationCommand
 */
export const se_DeleteRobotApplicationCommand = async (
  input: DeleteRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
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
 * serializeAws_restJson1DeleteSimulationApplicationCommand
 */
export const se_DeleteSimulationApplicationCommand = async (
  input: DeleteSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
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
 * serializeAws_restJson1DeleteWorldTemplateCommand
 */
export const se_DeleteWorldTemplateCommand = async (
  input: DeleteWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deleteWorldTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.template != null && { template: input.template }),
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
 * serializeAws_restJson1DeregisterRobotCommand
 */
export const se_DeregisterRobotCommand = async (
  input: DeregisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/deregisterRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet != null && { fleet: input.fleet }),
    ...(input.robot != null && { robot: input.robot }),
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
 * serializeAws_restJson1DescribeDeploymentJobCommand
 */
export const se_DescribeDeploymentJobCommand = async (
  input: DescribeDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeDeploymentJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1DescribeFleetCommand
 */
export const se_DescribeFleetCommand = async (
  input: DescribeFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet != null && { fleet: input.fleet }),
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
 * serializeAws_restJson1DescribeRobotCommand
 */
export const se_DescribeRobotCommand = async (
  input: DescribeRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.robot != null && { robot: input.robot }),
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
 * serializeAws_restJson1DescribeRobotApplicationCommand
 */
export const se_DescribeRobotApplicationCommand = async (
  input: DescribeRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
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
 * serializeAws_restJson1DescribeSimulationApplicationCommand
 */
export const se_DescribeSimulationApplicationCommand = async (
  input: DescribeSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
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
 * serializeAws_restJson1DescribeSimulationJobCommand
 */
export const se_DescribeSimulationJobCommand = async (
  input: DescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1DescribeSimulationJobBatchCommand
 */
export const se_DescribeSimulationJobBatchCommand = async (
  input: DescribeSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeSimulationJobBatch";
  let body: any;
  body = JSON.stringify({
    ...(input.batch != null && { batch: input.batch }),
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
 * serializeAws_restJson1DescribeWorldCommand
 */
export const se_DescribeWorldCommand = async (
  input: DescribeWorldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeWorld";
  let body: any;
  body = JSON.stringify({
    ...(input.world != null && { world: input.world }),
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
 * serializeAws_restJson1DescribeWorldExportJobCommand
 */
export const se_DescribeWorldExportJobCommand = async (
  input: DescribeWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeWorldExportJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1DescribeWorldGenerationJobCommand
 */
export const se_DescribeWorldGenerationJobCommand = async (
  input: DescribeWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeWorldGenerationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1DescribeWorldTemplateCommand
 */
export const se_DescribeWorldTemplateCommand = async (
  input: DescribeWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/describeWorldTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.template != null && { template: input.template }),
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
 * serializeAws_restJson1GetWorldTemplateBodyCommand
 */
export const se_GetWorldTemplateBodyCommand = async (
  input: GetWorldTemplateBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/getWorldTemplateBody";
  let body: any;
  body = JSON.stringify({
    ...(input.generationJob != null && { generationJob: input.generationJob }),
    ...(input.template != null && { template: input.template }),
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
 * serializeAws_restJson1ListDeploymentJobsCommand
 */
export const se_ListDeploymentJobsCommand = async (
  input: ListDeploymentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listDeploymentJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
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
 * serializeAws_restJson1ListFleetsCommand
 */
export const se_ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listFleets";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
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
 * serializeAws_restJson1ListRobotApplicationsCommand
 */
export const se_ListRobotApplicationsCommand = async (
  input: ListRobotApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listRobotApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.versionQualifier != null && { versionQualifier: input.versionQualifier }),
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
 * serializeAws_restJson1ListRobotsCommand
 */
export const se_ListRobotsCommand = async (
  input: ListRobotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listRobots";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
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
 * serializeAws_restJson1ListSimulationApplicationsCommand
 */
export const se_ListSimulationApplicationsCommand = async (
  input: ListSimulationApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listSimulationApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.versionQualifier != null && { versionQualifier: input.versionQualifier }),
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
 * serializeAws_restJson1ListSimulationJobBatchesCommand
 */
export const se_ListSimulationJobBatchesCommand = async (
  input: ListSimulationJobBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listSimulationJobBatches";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
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
 * serializeAws_restJson1ListSimulationJobsCommand
 */
export const se_ListSimulationJobsCommand = async (
  input: ListSimulationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listSimulationJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
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
 * serializeAws_restJson1ListWorldExportJobsCommand
 */
export const se_ListWorldExportJobsCommand = async (
  input: ListWorldExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listWorldExportJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
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
 * serializeAws_restJson1ListWorldGenerationJobsCommand
 */
export const se_ListWorldGenerationJobsCommand = async (
  input: ListWorldGenerationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listWorldGenerationJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
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
 * serializeAws_restJson1ListWorldsCommand
 */
export const se_ListWorldsCommand = async (
  input: ListWorldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listWorlds";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_Filters(input.filters, context) }),
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
 * serializeAws_restJson1ListWorldTemplatesCommand
 */
export const se_ListWorldTemplatesCommand = async (
  input: ListWorldTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/listWorldTemplates";
  let body: any;
  body = JSON.stringify({
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
 * serializeAws_restJson1RegisterRobotCommand
 */
export const se_RegisterRobotCommand = async (
  input: RegisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/registerRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet != null && { fleet: input.fleet }),
    ...(input.robot != null && { robot: input.robot }),
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
 * serializeAws_restJson1RestartSimulationJobCommand
 */
export const se_RestartSimulationJobCommand = async (
  input: RestartSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restartSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job != null && { job: input.job }),
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
 * serializeAws_restJson1StartSimulationJobBatchCommand
 */
export const se_StartSimulationJobBatchCommand = async (
  input: StartSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/startSimulationJobBatch";
  let body: any;
  body = JSON.stringify({
    ...(input.batchPolicy != null && { batchPolicy: se_BatchPolicy(input.batchPolicy, context) }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.createSimulationJobRequests != null && {
      createSimulationJobRequests: se_CreateSimulationJobRequests(input.createSimulationJobRequests, context),
    }),
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
 * serializeAws_restJson1SyncDeploymentJobCommand
 */
export const se_SyncDeploymentJobCommand = async (
  input: SyncDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/syncDeploymentJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.fleet != null && { fleet: input.fleet }),
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
 * serializeAws_restJson1UpdateRobotApplicationCommand
 */
export const se_UpdateRobotApplicationCommand = async (
  input: UpdateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application != null && { application: input.application }),
    ...(input.currentRevisionId != null && { currentRevisionId: input.currentRevisionId }),
    ...(input.environment != null && { environment: se_Environment(input.environment, context) }),
    ...(input.robotSoftwareSuite != null && {
      robotSoftwareSuite: se_RobotSoftwareSuite(input.robotSoftwareSuite, context),
    }),
    ...(input.sources != null && { sources: se_SourceConfigs(input.sources, context) }),
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
 * serializeAws_restJson1UpdateSimulationApplicationCommand
 */
export const se_UpdateSimulationApplicationCommand = async (
  input: UpdateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application != null && { application: input.application }),
    ...(input.currentRevisionId != null && { currentRevisionId: input.currentRevisionId }),
    ...(input.environment != null && { environment: se_Environment(input.environment, context) }),
    ...(input.renderingEngine != null && { renderingEngine: se_RenderingEngine(input.renderingEngine, context) }),
    ...(input.robotSoftwareSuite != null && {
      robotSoftwareSuite: se_RobotSoftwareSuite(input.robotSoftwareSuite, context),
    }),
    ...(input.simulationSoftwareSuite != null && {
      simulationSoftwareSuite: se_SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
    }),
    ...(input.sources != null && { sources: se_SourceConfigs(input.sources, context) }),
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
 * serializeAws_restJson1UpdateWorldTemplateCommand
 */
export const se_UpdateWorldTemplateCommand = async (
  input: UpdateWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/updateWorldTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.name != null && { name: input.name }),
    ...(input.template != null && { template: input.template }),
    ...(input.templateBody != null && { templateBody: input.templateBody }),
    ...(input.templateLocation != null && { templateLocation: se_TemplateLocation(input.templateLocation, context) }),
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
 * deserializeAws_restJson1BatchDeleteWorldsCommand
 */
export const de_BatchDeleteWorldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteWorldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteWorldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedWorlds != null) {
    contents.unprocessedWorlds = de_Arns(data.unprocessedWorlds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteWorldsCommandError
 */
const de_BatchDeleteWorldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteWorldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchDescribeSimulationJobCommand
 */
export const de_BatchDescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDescribeSimulationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.jobs = de_SimulationJobs(data.jobs, context);
  }
  if (data.unprocessedJobs != null) {
    contents.unprocessedJobs = de_Arns(data.unprocessedJobs, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDescribeSimulationJobCommandError
 */
const de_BatchDescribeSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelDeploymentJobCommand
 */
export const de_CancelDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelDeploymentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelDeploymentJobCommandError
 */
const de_CancelDeploymentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelSimulationJobCommand
 */
export const de_CancelSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelSimulationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSimulationJobCommandError
 */
const de_CancelSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelSimulationJobBatchCommand
 */
export const de_CancelSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelSimulationJobBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSimulationJobBatchCommandError
 */
const de_CancelSimulationJobBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelWorldExportJobCommand
 */
export const de_CancelWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelWorldExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelWorldExportJobCommandError
 */
const de_CancelWorldExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CancelWorldGenerationJobCommand
 */
export const de_CancelWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelWorldGenerationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelWorldGenerationJobCommandError
 */
const de_CancelWorldGenerationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldGenerationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateDeploymentJobCommand
 */
export const de_CreateDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDeploymentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.deploymentApplicationConfigs != null) {
    contents.deploymentApplicationConfigs = de_DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
  }
  if (data.deploymentConfig != null) {
    contents.deploymentConfig = de_DeploymentConfig(data.deploymentConfig, context);
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.fleet != null) {
    contents.fleet = __expectString(data.fleet);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentJobCommandError
 */
const de_CreateDeploymentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      throw await de_ConcurrentDeploymentExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateFleetCommand
 */
export const de_CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFleetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFleetCommandError
 */
const de_CreateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateRobotCommand
 */
export const de_CreateRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRobotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.architecture != null) {
    contents.architecture = __expectString(data.architecture);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.greengrassGroupId != null) {
    contents.greengrassGroupId = __expectString(data.greengrassGroupId);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateRobotCommandError
 */
const de_CreateRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateRobotApplicationCommand
 */
export const de_CreateRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRobotApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = de_Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = de_RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = de_Sources(data.sources, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateRobotApplicationCommandError
 */
const de_CreateRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateRobotApplicationVersionCommand
 */
export const de_CreateRobotApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRobotApplicationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = de_Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = de_RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = de_Sources(data.sources, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateRobotApplicationVersionCommandError
 */
const de_CreateRobotApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSimulationApplicationCommand
 */
export const de_CreateSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSimulationApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = de_Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.renderingEngine != null) {
    contents.renderingEngine = de_RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = de_RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite != null) {
    contents.simulationSoftwareSuite = de_SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = de_Sources(data.sources, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSimulationApplicationCommandError
 */
const de_CreateSimulationApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSimulationApplicationVersionCommand
 */
export const de_CreateSimulationApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSimulationApplicationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = de_Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.renderingEngine != null) {
    contents.renderingEngine = de_RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = de_RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite != null) {
    contents.simulationSoftwareSuite = de_SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = de_Sources(data.sources, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSimulationApplicationVersionCommandError
 */
const de_CreateSimulationApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateSimulationJobCommand
 */
export const de_CreateSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSimulationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.compute != null) {
    contents.compute = de_ComputeResponse(data.compute, context);
  }
  if (data.dataSources != null) {
    contents.dataSources = de_DataSources(data.dataSources, context);
  }
  if (data.failureBehavior != null) {
    contents.failureBehavior = __expectString(data.failureBehavior);
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.iamRole != null) {
    contents.iamRole = __expectString(data.iamRole);
  }
  if (data.lastStartedAt != null) {
    contents.lastStartedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastStartedAt)));
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.loggingConfig != null) {
    contents.loggingConfig = de_LoggingConfig(data.loggingConfig, context);
  }
  if (data.maxJobDurationInSeconds != null) {
    contents.maxJobDurationInSeconds = __expectLong(data.maxJobDurationInSeconds);
  }
  if (data.outputLocation != null) {
    contents.outputLocation = de_OutputLocation(data.outputLocation, context);
  }
  if (data.robotApplications != null) {
    contents.robotApplications = de_RobotApplicationConfigs(data.robotApplications, context);
  }
  if (data.simulationApplications != null) {
    contents.simulationApplications = de_SimulationApplicationConfigs(data.simulationApplications, context);
  }
  if (data.simulationTimeMillis != null) {
    contents.simulationTimeMillis = __expectLong(data.simulationTimeMillis);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.vpcConfig != null) {
    contents.vpcConfig = de_VPCConfigResponse(data.vpcConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSimulationJobCommandError
 */
const de_CreateSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateWorldExportJobCommand
 */
export const de_CreateWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorldExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.iamRole != null) {
    contents.iamRole = __expectString(data.iamRole);
  }
  if (data.outputLocation != null) {
    contents.outputLocation = de_OutputLocation(data.outputLocation, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorldExportJobCommandError
 */
const de_CreateWorldExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateWorldGenerationJobCommand
 */
export const de_CreateWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorldGenerationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.template != null) {
    contents.template = __expectString(data.template);
  }
  if (data.worldCount != null) {
    contents.worldCount = de_WorldCount(data.worldCount, context);
  }
  if (data.worldTags != null) {
    contents.worldTags = de_TagMap(data.worldTags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorldGenerationJobCommandError
 */
const de_CreateWorldGenerationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldGenerationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateWorldTemplateCommand
 */
export const de_CreateWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateWorldTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateWorldTemplateCommandError
 */
const de_CreateWorldTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteFleetCommand
 */
export const de_DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFleetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFleetCommandError
 */
const de_DeleteFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteRobotCommand
 */
export const de_DeleteRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRobotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRobotCommandError
 */
const de_DeleteRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteRobotApplicationCommand
 */
export const de_DeleteRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRobotApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRobotApplicationCommandError
 */
const de_DeleteRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteSimulationApplicationCommand
 */
export const de_DeleteSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSimulationApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSimulationApplicationCommandError
 */
const de_DeleteSimulationApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSimulationApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteWorldTemplateCommand
 */
export const de_DeleteWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteWorldTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorldTemplateCommandError
 */
const de_DeleteWorldTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorldTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeregisterRobotCommand
 */
export const de_DeregisterRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterRobotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fleet != null) {
    contents.fleet = __expectString(data.fleet);
  }
  if (data.robot != null) {
    contents.robot = __expectString(data.robot);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterRobotCommandError
 */
const de_DeregisterRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDeploymentJobCommand
 */
export const de_DescribeDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDeploymentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.deploymentApplicationConfigs != null) {
    contents.deploymentApplicationConfigs = de_DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
  }
  if (data.deploymentConfig != null) {
    contents.deploymentConfig = de_DeploymentConfig(data.deploymentConfig, context);
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.fleet != null) {
    contents.fleet = __expectString(data.fleet);
  }
  if (data.robotDeploymentSummary != null) {
    contents.robotDeploymentSummary = de_RobotDeploymentSummary(data.robotDeploymentSummary, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDeploymentJobCommandError
 */
const de_DescribeDeploymentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeFleetCommand
 */
export const de_DescribeFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFleetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.lastDeploymentJob != null) {
    contents.lastDeploymentJob = __expectString(data.lastDeploymentJob);
  }
  if (data.lastDeploymentStatus != null) {
    contents.lastDeploymentStatus = __expectString(data.lastDeploymentStatus);
  }
  if (data.lastDeploymentTime != null) {
    contents.lastDeploymentTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastDeploymentTime)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.robots != null) {
    contents.robots = de_Robots(data.robots, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFleetCommandError
 */
const de_DescribeFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeRobotCommand
 */
export const de_DescribeRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRobotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.architecture != null) {
    contents.architecture = __expectString(data.architecture);
  }
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.fleetArn != null) {
    contents.fleetArn = __expectString(data.fleetArn);
  }
  if (data.greengrassGroupId != null) {
    contents.greengrassGroupId = __expectString(data.greengrassGroupId);
  }
  if (data.lastDeploymentJob != null) {
    contents.lastDeploymentJob = __expectString(data.lastDeploymentJob);
  }
  if (data.lastDeploymentTime != null) {
    contents.lastDeploymentTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastDeploymentTime)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRobotCommandError
 */
const de_DescribeRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeRobotApplicationCommand
 */
export const de_DescribeRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRobotApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = de_Environment(data.environment, context);
  }
  if (data.imageDigest != null) {
    contents.imageDigest = __expectString(data.imageDigest);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = de_RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = de_Sources(data.sources, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRobotApplicationCommandError
 */
const de_DescribeRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeSimulationApplicationCommand
 */
export const de_DescribeSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSimulationApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = de_Environment(data.environment, context);
  }
  if (data.imageDigest != null) {
    contents.imageDigest = __expectString(data.imageDigest);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.renderingEngine != null) {
    contents.renderingEngine = de_RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = de_RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite != null) {
    contents.simulationSoftwareSuite = de_SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = de_Sources(data.sources, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSimulationApplicationCommandError
 */
const de_DescribeSimulationApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeSimulationJobCommand
 */
export const de_DescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSimulationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.compute != null) {
    contents.compute = de_ComputeResponse(data.compute, context);
  }
  if (data.dataSources != null) {
    contents.dataSources = de_DataSources(data.dataSources, context);
  }
  if (data.failureBehavior != null) {
    contents.failureBehavior = __expectString(data.failureBehavior);
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.iamRole != null) {
    contents.iamRole = __expectString(data.iamRole);
  }
  if (data.lastStartedAt != null) {
    contents.lastStartedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastStartedAt)));
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.loggingConfig != null) {
    contents.loggingConfig = de_LoggingConfig(data.loggingConfig, context);
  }
  if (data.maxJobDurationInSeconds != null) {
    contents.maxJobDurationInSeconds = __expectLong(data.maxJobDurationInSeconds);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.networkInterface != null) {
    contents.networkInterface = de_NetworkInterface(data.networkInterface, context);
  }
  if (data.outputLocation != null) {
    contents.outputLocation = de_OutputLocation(data.outputLocation, context);
  }
  if (data.robotApplications != null) {
    contents.robotApplications = de_RobotApplicationConfigs(data.robotApplications, context);
  }
  if (data.simulationApplications != null) {
    contents.simulationApplications = de_SimulationApplicationConfigs(data.simulationApplications, context);
  }
  if (data.simulationTimeMillis != null) {
    contents.simulationTimeMillis = __expectLong(data.simulationTimeMillis);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.vpcConfig != null) {
    contents.vpcConfig = de_VPCConfigResponse(data.vpcConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSimulationJobCommandError
 */
const de_DescribeSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeSimulationJobBatchCommand
 */
export const de_DescribeSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSimulationJobBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.batchPolicy != null) {
    contents.batchPolicy = de_BatchPolicy(data.batchPolicy, context);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.createdRequests != null) {
    contents.createdRequests = de_SimulationJobSummaries(data.createdRequests, context);
  }
  if (data.failedRequests != null) {
    contents.failedRequests = de_FailedCreateSimulationJobRequests(data.failedRequests, context);
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.pendingRequests != null) {
    contents.pendingRequests = de_CreateSimulationJobRequests(data.pendingRequests, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSimulationJobBatchCommandError
 */
const de_DescribeSimulationJobBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeWorldCommand
 */
export const de_DescribeWorldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeWorldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.generationJob != null) {
    contents.generationJob = __expectString(data.generationJob);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.template != null) {
    contents.template = __expectString(data.template);
  }
  if (data.worldDescriptionBody != null) {
    contents.worldDescriptionBody = __expectString(data.worldDescriptionBody);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorldCommandError
 */
const de_DescribeWorldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeWorldExportJobCommand
 */
export const de_DescribeWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeWorldExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.iamRole != null) {
    contents.iamRole = __expectString(data.iamRole);
  }
  if (data.outputLocation != null) {
    contents.outputLocation = de_OutputLocation(data.outputLocation, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.worlds != null) {
    contents.worlds = de_Arns(data.worlds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorldExportJobCommandError
 */
const de_DescribeWorldExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeWorldGenerationJobCommand
 */
export const de_DescribeWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeWorldGenerationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.finishedWorldsSummary != null) {
    contents.finishedWorldsSummary = de_FinishedWorldsSummary(data.finishedWorldsSummary, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.template != null) {
    contents.template = __expectString(data.template);
  }
  if (data.worldCount != null) {
    contents.worldCount = de_WorldCount(data.worldCount, context);
  }
  if (data.worldTags != null) {
    contents.worldTags = de_TagMap(data.worldTags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorldGenerationJobCommandError
 */
const de_DescribeWorldGenerationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldGenerationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeWorldTemplateCommand
 */
export const de_DescribeWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeWorldTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeWorldTemplateCommandError
 */
const de_DescribeWorldTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetWorldTemplateBodyCommand
 */
export const de_GetWorldTemplateBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorldTemplateBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorldTemplateBodyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.templateBody != null) {
    contents.templateBody = __expectString(data.templateBody);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorldTemplateBodyCommandError
 */
const de_GetWorldTemplateBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorldTemplateBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDeploymentJobsCommand
 */
export const de_ListDeploymentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeploymentJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deploymentJobs != null) {
    contents.deploymentJobs = de_DeploymentJobs(data.deploymentJobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentJobsCommandError
 */
const de_ListDeploymentJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListFleetsCommand
 */
export const de_ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFleetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fleetDetails != null) {
    contents.fleetDetails = de_Fleets(data.fleetDetails, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFleetsCommandError
 */
const de_ListFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListRobotApplicationsCommand
 */
export const de_ListRobotApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRobotApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.robotApplicationSummaries != null) {
    contents.robotApplicationSummaries = de_RobotApplicationSummaries(data.robotApplicationSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRobotApplicationsCommandError
 */
const de_ListRobotApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListRobotsCommand
 */
export const de_ListRobotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRobotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.robots != null) {
    contents.robots = de_Robots(data.robots, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRobotsCommandError
 */
const de_ListRobotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSimulationApplicationsCommand
 */
export const de_ListSimulationApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSimulationApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.simulationApplicationSummaries != null) {
    contents.simulationApplicationSummaries = de_SimulationApplicationSummaries(
      data.simulationApplicationSummaries,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSimulationApplicationsCommandError
 */
const de_ListSimulationApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSimulationJobBatchesCommand
 */
export const de_ListSimulationJobBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobBatchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSimulationJobBatchesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.simulationJobBatchSummaries != null) {
    contents.simulationJobBatchSummaries = de_SimulationJobBatchSummaries(data.simulationJobBatchSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSimulationJobBatchesCommandError
 */
const de_ListSimulationJobBatchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobBatchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListSimulationJobsCommand
 */
export const de_ListSimulationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSimulationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.simulationJobSummaries != null) {
    contents.simulationJobSummaries = de_SimulationJobSummaries(data.simulationJobSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSimulationJobsCommandError
 */
const de_ListSimulationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorldExportJobsCommand
 */
export const de_ListWorldExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorldExportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.worldExportJobSummaries != null) {
    contents.worldExportJobSummaries = de_WorldExportJobSummaries(data.worldExportJobSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorldExportJobsCommandError
 */
const de_ListWorldExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorldGenerationJobsCommand
 */
export const de_ListWorldGenerationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldGenerationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorldGenerationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.worldGenerationJobSummaries != null) {
    contents.worldGenerationJobSummaries = de_WorldGenerationJobSummaries(data.worldGenerationJobSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorldGenerationJobsCommandError
 */
const de_ListWorldGenerationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldGenerationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorldsCommand
 */
export const de_ListWorldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.worldSummaries != null) {
    contents.worldSummaries = de_WorldSummaries(data.worldSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorldsCommandError
 */
const de_ListWorldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListWorldTemplatesCommand
 */
export const de_ListWorldTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListWorldTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templateSummaries != null) {
    contents.templateSummaries = de_TemplateSummaries(data.templateSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListWorldTemplatesCommandError
 */
const de_ListWorldTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RegisterRobotCommand
 */
export const de_RegisterRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterRobotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fleet != null) {
    contents.fleet = __expectString(data.fleet);
  }
  if (data.robot != null) {
    contents.robot = __expectString(data.robot);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterRobotCommandError
 */
const de_RegisterRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RestartSimulationJobCommand
 */
export const de_RestartSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RestartSimulationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RestartSimulationJobCommandError
 */
const de_RestartSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartSimulationJobBatchCommand
 */
export const de_StartSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartSimulationJobBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.batchPolicy != null) {
    contents.batchPolicy = de_BatchPolicy(data.batchPolicy, context);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.createdRequests != null) {
    contents.createdRequests = de_SimulationJobSummaries(data.createdRequests, context);
  }
  if (data.failedRequests != null) {
    contents.failedRequests = de_FailedCreateSimulationJobRequests(data.failedRequests, context);
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.pendingRequests != null) {
    contents.pendingRequests = de_CreateSimulationJobRequests(data.pendingRequests, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartSimulationJobBatchCommandError
 */
const de_StartSimulationJobBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSimulationJobBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SyncDeploymentJobCommand
 */
export const de_SyncDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SyncDeploymentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.deploymentApplicationConfigs != null) {
    contents.deploymentApplicationConfigs = de_DeploymentApplicationConfigs(data.deploymentApplicationConfigs, context);
  }
  if (data.deploymentConfig != null) {
    contents.deploymentConfig = de_DeploymentConfig(data.deploymentConfig, context);
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.fleet != null) {
    contents.fleet = __expectString(data.fleet);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SyncDeploymentJobCommandError
 */
const de_SyncDeploymentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncDeploymentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      throw await de_ConcurrentDeploymentExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateRobotApplicationCommand
 */
export const de_UpdateRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRobotApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = de_Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = de_RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = de_Sources(data.sources, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRobotApplicationCommandError
 */
const de_UpdateRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateSimulationApplicationCommand
 */
export const de_UpdateSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSimulationApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = de_Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.renderingEngine != null) {
    contents.renderingEngine = de_RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = de_RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite != null) {
    contents.simulationSoftwareSuite = de_SimulationSoftwareSuite(data.simulationSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = de_Sources(data.sources, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSimulationApplicationCommandError
 */
const de_UpdateSimulationApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSimulationApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateWorldTemplateCommand
 */
export const de_UpdateWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateWorldTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateWorldTemplateCommandError
 */
const de_UpdateWorldTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorldTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ConcurrentDeploymentExceptionRes
 */
const de_ConcurrentDeploymentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentDeploymentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConcurrentDeploymentException({
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
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
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
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
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1Arns
 */
const se_Arns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1BatchPolicy
 */
const se_BatchPolicy = (input: BatchPolicy, context: __SerdeContext): any => {
  return {
    ...(input.maxConcurrency != null && { maxConcurrency: input.maxConcurrency }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

/**
 * serializeAws_restJson1CommandList
 */
const se_CommandList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Compute
 */
const se_Compute = (input: Compute, context: __SerdeContext): any => {
  return {
    ...(input.computeType != null && { computeType: input.computeType }),
    ...(input.gpuUnitLimit != null && { gpuUnitLimit: input.gpuUnitLimit }),
    ...(input.simulationUnitLimit != null && { simulationUnitLimit: input.simulationUnitLimit }),
  };
};

/**
 * serializeAws_restJson1CreateSimulationJobRequests
 */
const se_CreateSimulationJobRequests = (input: SimulationJobRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SimulationJobRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1DataSourceConfig
 */
const se_DataSourceConfig = (input: DataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: input.destination }),
    ...(input.name != null && { name: input.name }),
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Keys != null && { s3Keys: se_S3KeysOrPrefixes(input.s3Keys, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1DataSourceConfigs
 */
const se_DataSourceConfigs = (input: DataSourceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataSourceConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1DeploymentApplicationConfig
 */
const se_DeploymentApplicationConfig = (input: DeploymentApplicationConfig, context: __SerdeContext): any => {
  return {
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig != null && { launchConfig: se_DeploymentLaunchConfig(input.launchConfig, context) }),
  };
};

/**
 * serializeAws_restJson1DeploymentApplicationConfigs
 */
const se_DeploymentApplicationConfigs = (input: DeploymentApplicationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DeploymentApplicationConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1DeploymentConfig
 */
const se_DeploymentConfig = (input: DeploymentConfig, context: __SerdeContext): any => {
  return {
    ...(input.concurrentDeploymentPercentage != null && {
      concurrentDeploymentPercentage: input.concurrentDeploymentPercentage,
    }),
    ...(input.downloadConditionFile != null && {
      downloadConditionFile: se_S3Object(input.downloadConditionFile, context),
    }),
    ...(input.failureThresholdPercentage != null && { failureThresholdPercentage: input.failureThresholdPercentage }),
    ...(input.robotDeploymentTimeoutInSeconds != null && {
      robotDeploymentTimeoutInSeconds: input.robotDeploymentTimeoutInSeconds,
    }),
  };
};

/**
 * serializeAws_restJson1DeploymentLaunchConfig
 */
const se_DeploymentLaunchConfig = (input: DeploymentLaunchConfig, context: __SerdeContext): any => {
  return {
    ...(input.environmentVariables != null && {
      environmentVariables: se_EnvironmentVariableMap(input.environmentVariables, context),
    }),
    ...(input.launchFile != null && { launchFile: input.launchFile }),
    ...(input.packageName != null && { packageName: input.packageName }),
    ...(input.postLaunchFile != null && { postLaunchFile: input.postLaunchFile }),
    ...(input.preLaunchFile != null && { preLaunchFile: input.preLaunchFile }),
  };
};

/**
 * serializeAws_restJson1Environment
 */
const se_Environment = (input: Environment, context: __SerdeContext): any => {
  return {
    ...(input.uri != null && { uri: input.uri }),
  };
};

/**
 * serializeAws_restJson1EnvironmentVariableMap
 */
const se_EnvironmentVariableMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
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
 * serializeAws_restJson1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
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
 * serializeAws_restJson1LaunchConfig
 */
const se_LaunchConfig = (input: LaunchConfig, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: se_CommandList(input.command, context) }),
    ...(input.environmentVariables != null && {
      environmentVariables: se_EnvironmentVariableMap(input.environmentVariables, context),
    }),
    ...(input.launchFile != null && { launchFile: input.launchFile }),
    ...(input.packageName != null && { packageName: input.packageName }),
    ...(input.portForwardingConfig != null && {
      portForwardingConfig: se_PortForwardingConfig(input.portForwardingConfig, context),
    }),
    ...(input.streamUI != null && { streamUI: input.streamUI }),
  };
};

/**
 * serializeAws_restJson1LoggingConfig
 */
const se_LoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  return {
    ...(input.recordAllRosTopics != null && { recordAllRosTopics: input.recordAllRosTopics }),
  };
};

/**
 * serializeAws_restJson1OutputLocation
 */
const se_OutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Prefix != null && { s3Prefix: input.s3Prefix }),
  };
};

/**
 * serializeAws_restJson1PortForwardingConfig
 */
const se_PortForwardingConfig = (input: PortForwardingConfig, context: __SerdeContext): any => {
  return {
    ...(input.portMappings != null && { portMappings: se_PortMappingList(input.portMappings, context) }),
  };
};

/**
 * serializeAws_restJson1PortMapping
 */
const se_PortMapping = (input: PortMapping, context: __SerdeContext): any => {
  return {
    ...(input.applicationPort != null && { applicationPort: input.applicationPort }),
    ...(input.enableOnPublicIp != null && { enableOnPublicIp: input.enableOnPublicIp }),
    ...(input.jobPort != null && { jobPort: input.jobPort }),
  };
};

/**
 * serializeAws_restJson1PortMappingList
 */
const se_PortMappingList = (input: PortMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PortMapping(entry, context);
    });
};

/**
 * serializeAws_restJson1RenderingEngine
 */
const se_RenderingEngine = (input: RenderingEngine, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_restJson1RobotApplicationConfig
 */
const se_RobotApplicationConfig = (input: RobotApplicationConfig, context: __SerdeContext): any => {
  return {
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig != null && { launchConfig: se_LaunchConfig(input.launchConfig, context) }),
    ...(input.tools != null && { tools: se_Tools(input.tools, context) }),
    ...(input.uploadConfigurations != null && {
      uploadConfigurations: se_UploadConfigurations(input.uploadConfigurations, context),
    }),
    ...(input.useDefaultTools != null && { useDefaultTools: input.useDefaultTools }),
    ...(input.useDefaultUploadConfigurations != null && {
      useDefaultUploadConfigurations: input.useDefaultUploadConfigurations,
    }),
  };
};

/**
 * serializeAws_restJson1RobotApplicationConfigs
 */
const se_RobotApplicationConfigs = (input: RobotApplicationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RobotApplicationConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1RobotSoftwareSuite
 */
const se_RobotSoftwareSuite = (input: RobotSoftwareSuite, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_restJson1S3Etags
 */
const se_S3Etags = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1S3KeysOrPrefixes
 */
const se_S3KeysOrPrefixes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1S3Object
 */
const se_S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.etag != null && { etag: input.etag }),
    ...(input.key != null && { key: input.key }),
  };
};

/**
 * serializeAws_restJson1SecurityGroups
 */
const se_SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SimulationApplicationConfig
 */
const se_SimulationApplicationConfig = (input: SimulationApplicationConfig, context: __SerdeContext): any => {
  return {
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig != null && { launchConfig: se_LaunchConfig(input.launchConfig, context) }),
    ...(input.tools != null && { tools: se_Tools(input.tools, context) }),
    ...(input.uploadConfigurations != null && {
      uploadConfigurations: se_UploadConfigurations(input.uploadConfigurations, context),
    }),
    ...(input.useDefaultTools != null && { useDefaultTools: input.useDefaultTools }),
    ...(input.useDefaultUploadConfigurations != null && {
      useDefaultUploadConfigurations: input.useDefaultUploadConfigurations,
    }),
    ...(input.worldConfigs != null && { worldConfigs: se_WorldConfigs(input.worldConfigs, context) }),
  };
};

/**
 * serializeAws_restJson1SimulationApplicationConfigs
 */
const se_SimulationApplicationConfigs = (input: SimulationApplicationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SimulationApplicationConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1SimulationJobRequest
 */
const se_SimulationJobRequest = (input: SimulationJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.compute != null && { compute: se_Compute(input.compute, context) }),
    ...(input.dataSources != null && { dataSources: se_DataSourceConfigs(input.dataSources, context) }),
    ...(input.failureBehavior != null && { failureBehavior: input.failureBehavior }),
    ...(input.iamRole != null && { iamRole: input.iamRole }),
    ...(input.loggingConfig != null && { loggingConfig: se_LoggingConfig(input.loggingConfig, context) }),
    ...(input.maxJobDurationInSeconds != null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds }),
    ...(input.outputLocation != null && { outputLocation: se_OutputLocation(input.outputLocation, context) }),
    ...(input.robotApplications != null && {
      robotApplications: se_RobotApplicationConfigs(input.robotApplications, context),
    }),
    ...(input.simulationApplications != null && {
      simulationApplications: se_SimulationApplicationConfigs(input.simulationApplications, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.useDefaultApplications != null && { useDefaultApplications: input.useDefaultApplications }),
    ...(input.vpcConfig != null && { vpcConfig: se_VPCConfig(input.vpcConfig, context) }),
  };
};

/**
 * serializeAws_restJson1SimulationSoftwareSuite
 */
const se_SimulationSoftwareSuite = (input: SimulationSoftwareSuite, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_restJson1SourceConfig
 */
const se_SourceConfig = (input: SourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.architecture != null && { architecture: input.architecture }),
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Key != null && { s3Key: input.s3Key }),
  };
};

/**
 * serializeAws_restJson1SourceConfigs
 */
const se_SourceConfigs = (input: SourceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SourceConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1Subnets
 */
const se_Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
 * serializeAws_restJson1TemplateLocation
 */
const se_TemplateLocation = (input: TemplateLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Key != null && { s3Key: input.s3Key }),
  };
};

/**
 * serializeAws_restJson1Tool
 */
const se_Tool = (input: Tool, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: input.command }),
    ...(input.exitBehavior != null && { exitBehavior: input.exitBehavior }),
    ...(input.name != null && { name: input.name }),
    ...(input.streamOutputToCloudWatch != null && { streamOutputToCloudWatch: input.streamOutputToCloudWatch }),
    ...(input.streamUI != null && { streamUI: input.streamUI }),
  };
};

/**
 * serializeAws_restJson1Tools
 */
const se_Tools = (input: Tool[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tool(entry, context);
    });
};

/**
 * serializeAws_restJson1UploadConfiguration
 */
const se_UploadConfiguration = (input: UploadConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.path != null && { path: input.path }),
    ...(input.uploadBehavior != null && { uploadBehavior: input.uploadBehavior }),
  };
};

/**
 * serializeAws_restJson1UploadConfigurations
 */
const se_UploadConfigurations = (input: UploadConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UploadConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1VPCConfig
 */
const se_VPCConfig = (input: VPCConfig, context: __SerdeContext): any => {
  return {
    ...(input.assignPublicIp != null && { assignPublicIp: input.assignPublicIp }),
    ...(input.securityGroups != null && { securityGroups: se_SecurityGroups(input.securityGroups, context) }),
    ...(input.subnets != null && { subnets: se_Subnets(input.subnets, context) }),
  };
};

/**
 * serializeAws_restJson1WorldConfig
 */
const se_WorldConfig = (input: WorldConfig, context: __SerdeContext): any => {
  return {
    ...(input.world != null && { world: input.world }),
  };
};

/**
 * serializeAws_restJson1WorldConfigs
 */
const se_WorldConfigs = (input: WorldConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WorldConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1WorldCount
 */
const se_WorldCount = (input: WorldCount, context: __SerdeContext): any => {
  return {
    ...(input.floorplanCount != null && { floorplanCount: input.floorplanCount }),
    ...(input.interiorCountPerFloorplan != null && { interiorCountPerFloorplan: input.interiorCountPerFloorplan }),
  };
};

/**
 * deserializeAws_restJson1Arns
 */
const de_Arns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1BatchPolicy
 */
const de_BatchPolicy = (output: any, context: __SerdeContext): BatchPolicy => {
  return {
    maxConcurrency: __expectInt32(output.maxConcurrency),
    timeoutInSeconds: __expectLong(output.timeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1CommandList
 */
const de_CommandList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Compute
 */
const de_Compute = (output: any, context: __SerdeContext): Compute => {
  return {
    computeType: __expectString(output.computeType),
    gpuUnitLimit: __expectInt32(output.gpuUnitLimit),
    simulationUnitLimit: __expectInt32(output.simulationUnitLimit),
  } as any;
};

/**
 * deserializeAws_restJson1ComputeResponse
 */
const de_ComputeResponse = (output: any, context: __SerdeContext): ComputeResponse => {
  return {
    computeType: __expectString(output.computeType),
    gpuUnitLimit: __expectInt32(output.gpuUnitLimit),
    simulationUnitLimit: __expectInt32(output.simulationUnitLimit),
  } as any;
};

/**
 * deserializeAws_restJson1CreateSimulationJobRequests
 */
const de_CreateSimulationJobRequests = (output: any, context: __SerdeContext): SimulationJobRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SimulationJobRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    destination: __expectString(output.destination),
    name: __expectString(output.name),
    s3Bucket: __expectString(output.s3Bucket),
    s3Keys: output.s3Keys != null ? de_S3KeyOutputs(output.s3Keys, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1DataSourceConfig
 */
const de_DataSourceConfig = (output: any, context: __SerdeContext): DataSourceConfig => {
  return {
    destination: __expectString(output.destination),
    name: __expectString(output.name),
    s3Bucket: __expectString(output.s3Bucket),
    s3Keys: output.s3Keys != null ? de_S3KeysOrPrefixes(output.s3Keys, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1DataSourceConfigs
 */
const de_DataSourceConfigs = (output: any, context: __SerdeContext): DataSourceConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataSourceConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataSourceNames
 */
const de_DataSourceNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1DataSources
 */
const de_DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataSource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentApplicationConfig
 */
const de_DeploymentApplicationConfig = (output: any, context: __SerdeContext): DeploymentApplicationConfig => {
  return {
    application: __expectString(output.application),
    applicationVersion: __expectString(output.applicationVersion),
    launchConfig: output.launchConfig != null ? de_DeploymentLaunchConfig(output.launchConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentApplicationConfigs
 */
const de_DeploymentApplicationConfigs = (output: any, context: __SerdeContext): DeploymentApplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeploymentApplicationConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentConfig
 */
const de_DeploymentConfig = (output: any, context: __SerdeContext): DeploymentConfig => {
  return {
    concurrentDeploymentPercentage: __expectInt32(output.concurrentDeploymentPercentage),
    downloadConditionFile:
      output.downloadConditionFile != null ? de_S3Object(output.downloadConditionFile, context) : undefined,
    failureThresholdPercentage: __expectInt32(output.failureThresholdPercentage),
    robotDeploymentTimeoutInSeconds: __expectLong(output.robotDeploymentTimeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentJob
 */
const de_DeploymentJob = (output: any, context: __SerdeContext): DeploymentJob => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentApplicationConfigs:
      output.deploymentApplicationConfigs != null
        ? de_DeploymentApplicationConfigs(output.deploymentApplicationConfigs, context)
        : undefined,
    deploymentConfig:
      output.deploymentConfig != null ? de_DeploymentConfig(output.deploymentConfig, context) : undefined,
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    fleet: __expectString(output.fleet),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentJobs
 */
const de_DeploymentJobs = (output: any, context: __SerdeContext): DeploymentJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeploymentJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentLaunchConfig
 */
const de_DeploymentLaunchConfig = (output: any, context: __SerdeContext): DeploymentLaunchConfig => {
  return {
    environmentVariables:
      output.environmentVariables != null ? de_EnvironmentVariableMap(output.environmentVariables, context) : undefined,
    launchFile: __expectString(output.launchFile),
    packageName: __expectString(output.packageName),
    postLaunchFile: __expectString(output.postLaunchFile),
    preLaunchFile: __expectString(output.preLaunchFile),
  } as any;
};

/**
 * deserializeAws_restJson1Environment
 */
const de_Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    uri: __expectString(output.uri),
  } as any;
};

/**
 * deserializeAws_restJson1EnvironmentVariableMap
 */
const de_EnvironmentVariableMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FailedCreateSimulationJobRequest
 */
const de_FailedCreateSimulationJobRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateSimulationJobRequest => {
  return {
    failedAt:
      output.failedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.failedAt))) : undefined,
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    request: output.request != null ? de_SimulationJobRequest(output.request, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FailedCreateSimulationJobRequests
 */
const de_FailedCreateSimulationJobRequests = (
  output: any,
  context: __SerdeContext
): FailedCreateSimulationJobRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedCreateSimulationJobRequest(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FailureSummary
 */
const de_FailureSummary = (output: any, context: __SerdeContext): FailureSummary => {
  return {
    failures: output.failures != null ? de_WorldFailures(output.failures, context) : undefined,
    totalFailureCount: __expectInt32(output.totalFailureCount),
  } as any;
};

/**
 * deserializeAws_restJson1FinishedWorldsSummary
 */
const de_FinishedWorldsSummary = (output: any, context: __SerdeContext): FinishedWorldsSummary => {
  return {
    failureSummary: output.failureSummary != null ? de_FailureSummary(output.failureSummary, context) : undefined,
    finishedCount: __expectInt32(output.finishedCount),
    succeededWorlds: output.succeededWorlds != null ? de_Arns(output.succeededWorlds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Fleet
 */
const de_Fleet = (output: any, context: __SerdeContext): Fleet => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastDeploymentJob: __expectString(output.lastDeploymentJob),
    lastDeploymentStatus: __expectString(output.lastDeploymentStatus),
    lastDeploymentTime:
      output.lastDeploymentTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentTime)))
        : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1Fleets
 */
const de_Fleets = (output: any, context: __SerdeContext): Fleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Fleet(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LaunchConfig
 */
const de_LaunchConfig = (output: any, context: __SerdeContext): LaunchConfig => {
  return {
    command: output.command != null ? de_CommandList(output.command, context) : undefined,
    environmentVariables:
      output.environmentVariables != null ? de_EnvironmentVariableMap(output.environmentVariables, context) : undefined,
    launchFile: __expectString(output.launchFile),
    packageName: __expectString(output.packageName),
    portForwardingConfig:
      output.portForwardingConfig != null ? de_PortForwardingConfig(output.portForwardingConfig, context) : undefined,
    streamUI: __expectBoolean(output.streamUI),
  } as any;
};

/**
 * deserializeAws_restJson1LoggingConfig
 */
const de_LoggingConfig = (output: any, context: __SerdeContext): LoggingConfig => {
  return {
    recordAllRosTopics: __expectBoolean(output.recordAllRosTopics),
  } as any;
};

/**
 * deserializeAws_restJson1NetworkInterface
 */
const de_NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    networkInterfaceId: __expectString(output.networkInterfaceId),
    privateIpAddress: __expectString(output.privateIpAddress),
    publicIpAddress: __expectString(output.publicIpAddress),
  } as any;
};

/**
 * deserializeAws_restJson1OutputLocation
 */
const de_OutputLocation = (output: any, context: __SerdeContext): OutputLocation => {
  return {
    s3Bucket: __expectString(output.s3Bucket),
    s3Prefix: __expectString(output.s3Prefix),
  } as any;
};

/**
 * deserializeAws_restJson1PortForwardingConfig
 */
const de_PortForwardingConfig = (output: any, context: __SerdeContext): PortForwardingConfig => {
  return {
    portMappings: output.portMappings != null ? de_PortMappingList(output.portMappings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PortMapping
 */
const de_PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    applicationPort: __expectInt32(output.applicationPort),
    enableOnPublicIp: __expectBoolean(output.enableOnPublicIp),
    jobPort: __expectInt32(output.jobPort),
  } as any;
};

/**
 * deserializeAws_restJson1PortMappingList
 */
const de_PortMappingList = (output: any, context: __SerdeContext): PortMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PortMapping(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProgressDetail
 */
const de_ProgressDetail = (output: any, context: __SerdeContext): ProgressDetail => {
  return {
    currentProgress: __expectString(output.currentProgress),
    estimatedTimeRemainingSeconds: __expectInt32(output.estimatedTimeRemainingSeconds),
    percentDone: __limitedParseFloat32(output.percentDone),
    targetResource: __expectString(output.targetResource),
  } as any;
};

/**
 * deserializeAws_restJson1RenderingEngine
 */
const de_RenderingEngine = (output: any, context: __SerdeContext): RenderingEngine => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1Robot
 */
const de_Robot = (output: any, context: __SerdeContext): Robot => {
  return {
    architecture: __expectString(output.architecture),
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fleetArn: __expectString(output.fleetArn),
    greenGrassGroupId: __expectString(output.greenGrassGroupId),
    lastDeploymentJob: __expectString(output.lastDeploymentJob),
    lastDeploymentTime:
      output.lastDeploymentTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentTime)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1RobotApplicationConfig
 */
const de_RobotApplicationConfig = (output: any, context: __SerdeContext): RobotApplicationConfig => {
  return {
    application: __expectString(output.application),
    applicationVersion: __expectString(output.applicationVersion),
    launchConfig: output.launchConfig != null ? de_LaunchConfig(output.launchConfig, context) : undefined,
    tools: output.tools != null ? de_Tools(output.tools, context) : undefined,
    uploadConfigurations:
      output.uploadConfigurations != null ? de_UploadConfigurations(output.uploadConfigurations, context) : undefined,
    useDefaultTools: __expectBoolean(output.useDefaultTools),
    useDefaultUploadConfigurations: __expectBoolean(output.useDefaultUploadConfigurations),
  } as any;
};

/**
 * deserializeAws_restJson1RobotApplicationConfigs
 */
const de_RobotApplicationConfigs = (output: any, context: __SerdeContext): RobotApplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RobotApplicationConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RobotApplicationNames
 */
const de_RobotApplicationNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1RobotApplicationSummaries
 */
const de_RobotApplicationSummaries = (output: any, context: __SerdeContext): RobotApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RobotApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RobotApplicationSummary
 */
const de_RobotApplicationSummary = (output: any, context: __SerdeContext): RobotApplicationSummary => {
  return {
    arn: __expectString(output.arn),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
    robotSoftwareSuite:
      output.robotSoftwareSuite != null ? de_RobotSoftwareSuite(output.robotSoftwareSuite, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1RobotDeployment
 */
const de_RobotDeployment = (output: any, context: __SerdeContext): RobotDeployment => {
  return {
    arn: __expectString(output.arn),
    deploymentFinishTime:
      output.deploymentFinishTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.deploymentFinishTime)))
        : undefined,
    deploymentStartTime:
      output.deploymentStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.deploymentStartTime)))
        : undefined,
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    progressDetail: output.progressDetail != null ? de_ProgressDetail(output.progressDetail, context) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1RobotDeploymentSummary
 */
const de_RobotDeploymentSummary = (output: any, context: __SerdeContext): RobotDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RobotDeployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Robots
 */
const de_Robots = (output: any, context: __SerdeContext): Robot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Robot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RobotSoftwareSuite
 */
const de_RobotSoftwareSuite = (output: any, context: __SerdeContext): RobotSoftwareSuite => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1S3KeyOutput
 */
const de_S3KeyOutput = (output: any, context: __SerdeContext): S3KeyOutput => {
  return {
    etag: __expectString(output.etag),
    s3Key: __expectString(output.s3Key),
  } as any;
};

/**
 * deserializeAws_restJson1S3KeyOutputs
 */
const de_S3KeyOutputs = (output: any, context: __SerdeContext): S3KeyOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_S3KeyOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3KeysOrPrefixes
 */
const de_S3KeysOrPrefixes = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1S3Object
 */
const de_S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    bucket: __expectString(output.bucket),
    etag: __expectString(output.etag),
    key: __expectString(output.key),
  } as any;
};

/**
 * deserializeAws_restJson1SecurityGroups
 */
const de_SecurityGroups = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SimulationApplicationConfig
 */
const de_SimulationApplicationConfig = (output: any, context: __SerdeContext): SimulationApplicationConfig => {
  return {
    application: __expectString(output.application),
    applicationVersion: __expectString(output.applicationVersion),
    launchConfig: output.launchConfig != null ? de_LaunchConfig(output.launchConfig, context) : undefined,
    tools: output.tools != null ? de_Tools(output.tools, context) : undefined,
    uploadConfigurations:
      output.uploadConfigurations != null ? de_UploadConfigurations(output.uploadConfigurations, context) : undefined,
    useDefaultTools: __expectBoolean(output.useDefaultTools),
    useDefaultUploadConfigurations: __expectBoolean(output.useDefaultUploadConfigurations),
    worldConfigs: output.worldConfigs != null ? de_WorldConfigs(output.worldConfigs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SimulationApplicationConfigs
 */
const de_SimulationApplicationConfigs = (output: any, context: __SerdeContext): SimulationApplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SimulationApplicationConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimulationApplicationNames
 */
const de_SimulationApplicationNames = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SimulationApplicationSummaries
 */
const de_SimulationApplicationSummaries = (output: any, context: __SerdeContext): SimulationApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SimulationApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimulationApplicationSummary
 */
const de_SimulationApplicationSummary = (output: any, context: __SerdeContext): SimulationApplicationSummary => {
  return {
    arn: __expectString(output.arn),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
    robotSoftwareSuite:
      output.robotSoftwareSuite != null ? de_RobotSoftwareSuite(output.robotSoftwareSuite, context) : undefined,
    simulationSoftwareSuite:
      output.simulationSoftwareSuite != null
        ? de_SimulationSoftwareSuite(output.simulationSoftwareSuite, context)
        : undefined,
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1SimulationJob
 */
const de_SimulationJob = (output: any, context: __SerdeContext): SimulationJob => {
  return {
    arn: __expectString(output.arn),
    clientRequestToken: __expectString(output.clientRequestToken),
    compute: output.compute != null ? de_ComputeResponse(output.compute, context) : undefined,
    dataSources: output.dataSources != null ? de_DataSources(output.dataSources, context) : undefined,
    failureBehavior: __expectString(output.failureBehavior),
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    iamRole: __expectString(output.iamRole),
    lastStartedAt:
      output.lastStartedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStartedAt)))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    loggingConfig: output.loggingConfig != null ? de_LoggingConfig(output.loggingConfig, context) : undefined,
    maxJobDurationInSeconds: __expectLong(output.maxJobDurationInSeconds),
    name: __expectString(output.name),
    networkInterface:
      output.networkInterface != null ? de_NetworkInterface(output.networkInterface, context) : undefined,
    outputLocation: output.outputLocation != null ? de_OutputLocation(output.outputLocation, context) : undefined,
    robotApplications:
      output.robotApplications != null ? de_RobotApplicationConfigs(output.robotApplications, context) : undefined,
    simulationApplications:
      output.simulationApplications != null
        ? de_SimulationApplicationConfigs(output.simulationApplications, context)
        : undefined,
    simulationTimeMillis: __expectLong(output.simulationTimeMillis),
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    vpcConfig: output.vpcConfig != null ? de_VPCConfigResponse(output.vpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SimulationJobBatchSummaries
 */
const de_SimulationJobBatchSummaries = (output: any, context: __SerdeContext): SimulationJobBatchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SimulationJobBatchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimulationJobBatchSummary
 */
const de_SimulationJobBatchSummary = (output: any, context: __SerdeContext): SimulationJobBatchSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdRequestCount: __expectInt32(output.createdRequestCount),
    failedRequestCount: __expectInt32(output.failedRequestCount),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    pendingRequestCount: __expectInt32(output.pendingRequestCount),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1SimulationJobRequest
 */
const de_SimulationJobRequest = (output: any, context: __SerdeContext): SimulationJobRequest => {
  return {
    compute: output.compute != null ? de_Compute(output.compute, context) : undefined,
    dataSources: output.dataSources != null ? de_DataSourceConfigs(output.dataSources, context) : undefined,
    failureBehavior: __expectString(output.failureBehavior),
    iamRole: __expectString(output.iamRole),
    loggingConfig: output.loggingConfig != null ? de_LoggingConfig(output.loggingConfig, context) : undefined,
    maxJobDurationInSeconds: __expectLong(output.maxJobDurationInSeconds),
    outputLocation: output.outputLocation != null ? de_OutputLocation(output.outputLocation, context) : undefined,
    robotApplications:
      output.robotApplications != null ? de_RobotApplicationConfigs(output.robotApplications, context) : undefined,
    simulationApplications:
      output.simulationApplications != null
        ? de_SimulationApplicationConfigs(output.simulationApplications, context)
        : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    useDefaultApplications: __expectBoolean(output.useDefaultApplications),
    vpcConfig: output.vpcConfig != null ? de_VPCConfig(output.vpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SimulationJobs
 */
const de_SimulationJobs = (output: any, context: __SerdeContext): SimulationJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SimulationJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimulationJobSummaries
 */
const de_SimulationJobSummaries = (output: any, context: __SerdeContext): SimulationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SimulationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimulationJobSummary
 */
const de_SimulationJobSummary = (output: any, context: __SerdeContext): SimulationJobSummary => {
  return {
    arn: __expectString(output.arn),
    computeType: __expectString(output.computeType),
    dataSourceNames: output.dataSourceNames != null ? de_DataSourceNames(output.dataSourceNames, context) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
    robotApplicationNames:
      output.robotApplicationNames != null
        ? de_RobotApplicationNames(output.robotApplicationNames, context)
        : undefined,
    simulationApplicationNames:
      output.simulationApplicationNames != null
        ? de_SimulationApplicationNames(output.simulationApplicationNames, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1SimulationSoftwareSuite
 */
const de_SimulationSoftwareSuite = (output: any, context: __SerdeContext): SimulationSoftwareSuite => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return {
    architecture: __expectString(output.architecture),
    etag: __expectString(output.etag),
    s3Bucket: __expectString(output.s3Bucket),
    s3Key: __expectString(output.s3Key),
  } as any;
};

/**
 * deserializeAws_restJson1Sources
 */
const de_Sources = (output: any, context: __SerdeContext): Source[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Source(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Subnets
 */
const de_Subnets = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TemplateSummaries
 */
const de_TemplateSummaries = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TemplateSummary
 */
const de_TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1Tool
 */
const de_Tool = (output: any, context: __SerdeContext): Tool => {
  return {
    command: __expectString(output.command),
    exitBehavior: __expectString(output.exitBehavior),
    name: __expectString(output.name),
    streamOutputToCloudWatch: __expectBoolean(output.streamOutputToCloudWatch),
    streamUI: __expectBoolean(output.streamUI),
  } as any;
};

/**
 * deserializeAws_restJson1Tools
 */
const de_Tools = (output: any, context: __SerdeContext): Tool[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tool(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UploadConfiguration
 */
const de_UploadConfiguration = (output: any, context: __SerdeContext): UploadConfiguration => {
  return {
    name: __expectString(output.name),
    path: __expectString(output.path),
    uploadBehavior: __expectString(output.uploadBehavior),
  } as any;
};

/**
 * deserializeAws_restJson1UploadConfigurations
 */
const de_UploadConfigurations = (output: any, context: __SerdeContext): UploadConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UploadConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VPCConfig
 */
const de_VPCConfig = (output: any, context: __SerdeContext): VPCConfig => {
  return {
    assignPublicIp: __expectBoolean(output.assignPublicIp),
    securityGroups: output.securityGroups != null ? de_SecurityGroups(output.securityGroups, context) : undefined,
    subnets: output.subnets != null ? de_Subnets(output.subnets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VPCConfigResponse
 */
const de_VPCConfigResponse = (output: any, context: __SerdeContext): VPCConfigResponse => {
  return {
    assignPublicIp: __expectBoolean(output.assignPublicIp),
    securityGroups: output.securityGroups != null ? de_SecurityGroups(output.securityGroups, context) : undefined,
    subnets: output.subnets != null ? de_Subnets(output.subnets, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_restJson1WorldConfig
 */
const de_WorldConfig = (output: any, context: __SerdeContext): WorldConfig => {
  return {
    world: __expectString(output.world),
  } as any;
};

/**
 * deserializeAws_restJson1WorldConfigs
 */
const de_WorldConfigs = (output: any, context: __SerdeContext): WorldConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorldConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorldCount
 */
const de_WorldCount = (output: any, context: __SerdeContext): WorldCount => {
  return {
    floorplanCount: __expectInt32(output.floorplanCount),
    interiorCountPerFloorplan: __expectInt32(output.interiorCountPerFloorplan),
  } as any;
};

/**
 * deserializeAws_restJson1WorldExportJobSummaries
 */
const de_WorldExportJobSummaries = (output: any, context: __SerdeContext): WorldExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorldExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorldExportJobSummary
 */
const de_WorldExportJobSummary = (output: any, context: __SerdeContext): WorldExportJobSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    outputLocation: output.outputLocation != null ? de_OutputLocation(output.outputLocation, context) : undefined,
    status: __expectString(output.status),
    worlds: output.worlds != null ? de_Arns(output.worlds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorldFailure
 */
const de_WorldFailure = (output: any, context: __SerdeContext): WorldFailure => {
  return {
    failureCode: __expectString(output.failureCode),
    failureCount: __expectInt32(output.failureCount),
    sampleFailureReason: __expectString(output.sampleFailureReason),
  } as any;
};

/**
 * deserializeAws_restJson1WorldFailures
 */
const de_WorldFailures = (output: any, context: __SerdeContext): WorldFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorldFailure(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorldGenerationJobSummaries
 */
const de_WorldGenerationJobSummaries = (output: any, context: __SerdeContext): WorldGenerationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorldGenerationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorldGenerationJobSummary
 */
const de_WorldGenerationJobSummary = (output: any, context: __SerdeContext): WorldGenerationJobSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    failedWorldCount: __expectInt32(output.failedWorldCount),
    status: __expectString(output.status),
    succeededWorldCount: __expectInt32(output.succeededWorldCount),
    template: __expectString(output.template),
    worldCount: output.worldCount != null ? de_WorldCount(output.worldCount, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1WorldSummaries
 */
const de_WorldSummaries = (output: any, context: __SerdeContext): WorldSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorldSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorldSummary
 */
const de_WorldSummary = (output: any, context: __SerdeContext): WorldSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    generationJob: __expectString(output.generationJob),
    template: __expectString(output.template),
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
