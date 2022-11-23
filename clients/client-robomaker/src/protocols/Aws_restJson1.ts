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

export const serializeAws_restJson1BatchDeleteWorldsCommand = async (
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
    ...(input.worlds != null && { worlds: serializeAws_restJson1Arns(input.worlds, context) }),
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

export const serializeAws_restJson1BatchDescribeSimulationJobCommand = async (
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
    ...(input.jobs != null && { jobs: serializeAws_restJson1Arns(input.jobs, context) }),
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

export const serializeAws_restJson1CancelDeploymentJobCommand = async (
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

export const serializeAws_restJson1CancelSimulationJobCommand = async (
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

export const serializeAws_restJson1CancelSimulationJobBatchCommand = async (
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

export const serializeAws_restJson1CancelWorldExportJobCommand = async (
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

export const serializeAws_restJson1CancelWorldGenerationJobCommand = async (
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

export const serializeAws_restJson1CreateDeploymentJobCommand = async (
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
      deploymentApplicationConfigs: serializeAws_restJson1DeploymentApplicationConfigs(
        input.deploymentApplicationConfigs,
        context
      ),
    }),
    ...(input.deploymentConfig != null && {
      deploymentConfig: serializeAws_restJson1DeploymentConfig(input.deploymentConfig, context),
    }),
    ...(input.fleet != null && { fleet: input.fleet }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateFleetCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateRobotCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateRobotApplicationCommand = async (
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
    ...(input.environment != null && { environment: serializeAws_restJson1Environment(input.environment, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.robotSoftwareSuite != null && {
      robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
    }),
    ...(input.sources != null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateRobotApplicationVersionCommand = async (
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
    ...(input.s3Etags != null && { s3Etags: serializeAws_restJson1S3Etags(input.s3Etags, context) }),
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

export const serializeAws_restJson1CreateSimulationApplicationCommand = async (
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
    ...(input.environment != null && { environment: serializeAws_restJson1Environment(input.environment, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.renderingEngine != null && {
      renderingEngine: serializeAws_restJson1RenderingEngine(input.renderingEngine, context),
    }),
    ...(input.robotSoftwareSuite != null && {
      robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
    }),
    ...(input.simulationSoftwareSuite != null && {
      simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
    }),
    ...(input.sources != null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateSimulationApplicationVersionCommand = async (
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
    ...(input.s3Etags != null && { s3Etags: serializeAws_restJson1S3Etags(input.s3Etags, context) }),
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

export const serializeAws_restJson1CreateSimulationJobCommand = async (
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
    ...(input.compute != null && { compute: serializeAws_restJson1Compute(input.compute, context) }),
    ...(input.dataSources != null && {
      dataSources: serializeAws_restJson1DataSourceConfigs(input.dataSources, context),
    }),
    ...(input.failureBehavior != null && { failureBehavior: input.failureBehavior }),
    ...(input.iamRole != null && { iamRole: input.iamRole }),
    ...(input.loggingConfig != null && {
      loggingConfig: serializeAws_restJson1LoggingConfig(input.loggingConfig, context),
    }),
    ...(input.maxJobDurationInSeconds != null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds }),
    ...(input.outputLocation != null && {
      outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
    }),
    ...(input.robotApplications != null && {
      robotApplications: serializeAws_restJson1RobotApplicationConfigs(input.robotApplications, context),
    }),
    ...(input.simulationApplications != null && {
      simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(input.simulationApplications, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.vpcConfig != null && { vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context) }),
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

export const serializeAws_restJson1CreateWorldExportJobCommand = async (
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
    ...(input.outputLocation != null && {
      outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.worlds != null && { worlds: serializeAws_restJson1Arns(input.worlds, context) }),
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

export const serializeAws_restJson1CreateWorldGenerationJobCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.template != null && { template: input.template }),
    ...(input.worldCount != null && { worldCount: serializeAws_restJson1WorldCount(input.worldCount, context) }),
    ...(input.worldTags != null && { worldTags: serializeAws_restJson1TagMap(input.worldTags, context) }),
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

export const serializeAws_restJson1CreateWorldTemplateCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.templateBody != null && { templateBody: input.templateBody }),
    ...(input.templateLocation != null && {
      templateLocation: serializeAws_restJson1TemplateLocation(input.templateLocation, context),
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

export const serializeAws_restJson1DeleteFleetCommand = async (
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

export const serializeAws_restJson1DeleteRobotCommand = async (
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

export const serializeAws_restJson1DeleteRobotApplicationCommand = async (
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

export const serializeAws_restJson1DeleteSimulationApplicationCommand = async (
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

export const serializeAws_restJson1DeleteWorldTemplateCommand = async (
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

export const serializeAws_restJson1DeregisterRobotCommand = async (
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

export const serializeAws_restJson1DescribeDeploymentJobCommand = async (
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

export const serializeAws_restJson1DescribeFleetCommand = async (
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

export const serializeAws_restJson1DescribeRobotCommand = async (
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

export const serializeAws_restJson1DescribeRobotApplicationCommand = async (
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

export const serializeAws_restJson1DescribeSimulationApplicationCommand = async (
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

export const serializeAws_restJson1DescribeSimulationJobCommand = async (
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

export const serializeAws_restJson1DescribeSimulationJobBatchCommand = async (
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

export const serializeAws_restJson1DescribeWorldCommand = async (
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

export const serializeAws_restJson1DescribeWorldExportJobCommand = async (
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

export const serializeAws_restJson1DescribeWorldGenerationJobCommand = async (
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

export const serializeAws_restJson1DescribeWorldTemplateCommand = async (
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

export const serializeAws_restJson1GetWorldTemplateBodyCommand = async (
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

export const serializeAws_restJson1ListDeploymentJobsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListFleetsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListRobotApplicationsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListRobotsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListSimulationApplicationsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListSimulationJobBatchesCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListSimulationJobsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ListWorldExportJobsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListWorldGenerationJobsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListWorldsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
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

export const serializeAws_restJson1ListWorldTemplatesCommand = async (
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

export const serializeAws_restJson1RegisterRobotCommand = async (
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

export const serializeAws_restJson1RestartSimulationJobCommand = async (
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

export const serializeAws_restJson1StartSimulationJobBatchCommand = async (
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
    ...(input.batchPolicy != null && { batchPolicy: serializeAws_restJson1BatchPolicy(input.batchPolicy, context) }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.createSimulationJobRequests != null && {
      createSimulationJobRequests: serializeAws_restJson1CreateSimulationJobRequests(
        input.createSimulationJobRequests,
        context
      ),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1SyncDeploymentJobCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UpdateRobotApplicationCommand = async (
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
    ...(input.environment != null && { environment: serializeAws_restJson1Environment(input.environment, context) }),
    ...(input.robotSoftwareSuite != null && {
      robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
    }),
    ...(input.sources != null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
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

export const serializeAws_restJson1UpdateSimulationApplicationCommand = async (
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
    ...(input.environment != null && { environment: serializeAws_restJson1Environment(input.environment, context) }),
    ...(input.renderingEngine != null && {
      renderingEngine: serializeAws_restJson1RenderingEngine(input.renderingEngine, context),
    }),
    ...(input.robotSoftwareSuite != null && {
      robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
    }),
    ...(input.simulationSoftwareSuite != null && {
      simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
    }),
    ...(input.sources != null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
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

export const serializeAws_restJson1UpdateWorldTemplateCommand = async (
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
    ...(input.templateLocation != null && {
      templateLocation: serializeAws_restJson1TemplateLocation(input.templateLocation, context),
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

export const deserializeAws_restJson1BatchDeleteWorldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteWorldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteWorldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.unprocessedWorlds != null) {
    contents.unprocessedWorlds = deserializeAws_restJson1Arns(data.unprocessedWorlds, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchDeleteWorldsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchDescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDescribeSimulationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.jobs != null) {
    contents.jobs = deserializeAws_restJson1SimulationJobs(data.jobs, context);
  }
  if (data.unprocessedJobs != null) {
    contents.unprocessedJobs = deserializeAws_restJson1Arns(data.unprocessedJobs, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchDescribeSimulationJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelDeploymentJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelDeploymentJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelSimulationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelSimulationJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelSimulationJobBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelSimulationJobBatchCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelWorldExportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelWorldExportJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelWorldGenerationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelWorldGenerationJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentJobCommandError(output, context);
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
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig != null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDeploymentJobCommandError = async (
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
      throw await deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFleetCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateFleetCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRobotCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateRobotCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRobotApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = deserializeAws_restJson1Environment(data.environment, context);
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
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1CreateRobotApplicationCommandError = async (
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
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateRobotApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRobotApplicationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = deserializeAws_restJson1Environment(data.environment, context);
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
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1CreateRobotApplicationVersionCommandError = async (
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
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSimulationApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = deserializeAws_restJson1Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.renderingEngine != null) {
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite != null) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources != null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1CreateSimulationApplicationCommandError = async (
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
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSimulationApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSimulationApplicationVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = deserializeAws_restJson1Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.renderingEngine != null) {
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite != null) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources != null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1CreateSimulationApplicationVersionCommandError = async (
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
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSimulationJobCommandError(output, context);
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
    contents.compute = deserializeAws_restJson1ComputeResponse(data.compute, context);
  }
  if (data.dataSources != null) {
    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
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
    contents.loggingConfig = deserializeAws_restJson1LoggingConfig(data.loggingConfig, context);
  }
  if (data.maxJobDurationInSeconds != null) {
    contents.maxJobDurationInSeconds = __expectLong(data.maxJobDurationInSeconds);
  }
  if (data.outputLocation != null) {
    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
  }
  if (data.robotApplications != null) {
    contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(data.robotApplications, context);
  }
  if (data.simulationApplications != null) {
    contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(
      data.simulationApplications,
      context
    );
  }
  if (data.simulationTimeMillis != null) {
    contents.simulationTimeMillis = __expectLong(data.simulationTimeMillis);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vpcConfig != null) {
    contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(data.vpcConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSimulationJobCommandError = async (
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
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorldExportJobCommandError(output, context);
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
    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateWorldExportJobCommandError = async (
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
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorldGenerationJobCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.template != null) {
    contents.template = __expectString(data.template);
  }
  if (data.worldCount != null) {
    contents.worldCount = deserializeAws_restJson1WorldCount(data.worldCount, context);
  }
  if (data.worldTags != null) {
    contents.worldTags = deserializeAws_restJson1TagMap(data.worldTags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateWorldGenerationJobCommandError = async (
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
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorldTemplateCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateWorldTemplateCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFleetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFleetCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRobotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRobotCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRobotApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRobotApplicationCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSimulationApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSimulationApplicationCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorldTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteWorldTemplateCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeregisterRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterRobotCommandError(output, context);
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

const deserializeAws_restJson1DeregisterRobotCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeploymentJobCommandError(output, context);
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
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig != null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
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
    contents.robotDeploymentSummary = deserializeAws_restJson1RobotDeploymentSummary(
      data.robotDeploymentSummary,
      context
    );
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDeploymentJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFleetCommandError(output, context);
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
    contents.robots = deserializeAws_restJson1Robots(data.robots, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeFleetCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRobotCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeRobotCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRobotApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = deserializeAws_restJson1Environment(data.environment, context);
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
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1DescribeRobotApplicationCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSimulationApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = deserializeAws_restJson1Environment(data.environment, context);
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
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite != null) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources != null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSimulationApplicationCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSimulationJobCommandError(output, context);
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
    contents.compute = deserializeAws_restJson1ComputeResponse(data.compute, context);
  }
  if (data.dataSources != null) {
    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
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
    contents.loggingConfig = deserializeAws_restJson1LoggingConfig(data.loggingConfig, context);
  }
  if (data.maxJobDurationInSeconds != null) {
    contents.maxJobDurationInSeconds = __expectLong(data.maxJobDurationInSeconds);
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.networkInterface != null) {
    contents.networkInterface = deserializeAws_restJson1NetworkInterface(data.networkInterface, context);
  }
  if (data.outputLocation != null) {
    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
  }
  if (data.robotApplications != null) {
    contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(data.robotApplications, context);
  }
  if (data.simulationApplications != null) {
    contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(
      data.simulationApplications,
      context
    );
  }
  if (data.simulationTimeMillis != null) {
    contents.simulationTimeMillis = __expectLong(data.simulationTimeMillis);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vpcConfig != null) {
    contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(data.vpcConfig, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSimulationJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSimulationJobBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.batchPolicy != null) {
    contents.batchPolicy = deserializeAws_restJson1BatchPolicy(data.batchPolicy, context);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.createdRequests != null) {
    contents.createdRequests = deserializeAws_restJson1SimulationJobSummaries(data.createdRequests, context);
  }
  if (data.failedRequests != null) {
    contents.failedRequests = deserializeAws_restJson1FailedCreateSimulationJobRequests(data.failedRequests, context);
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
    contents.pendingRequests = deserializeAws_restJson1CreateSimulationJobRequests(data.pendingRequests, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeSimulationJobBatchCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeWorldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorldCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.template != null) {
    contents.template = __expectString(data.template);
  }
  if (data.worldDescriptionBody != null) {
    contents.worldDescriptionBody = __expectString(data.worldDescriptionBody);
  }
  return contents;
};

const deserializeAws_restJson1DescribeWorldCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorldExportJobCommandError(output, context);
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
    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.worlds != null) {
    contents.worlds = deserializeAws_restJson1Arns(data.worlds, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeWorldExportJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorldGenerationJobCommandError(output, context);
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
    contents.finishedWorldsSummary = deserializeAws_restJson1FinishedWorldsSummary(data.finishedWorldsSummary, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.template != null) {
    contents.template = __expectString(data.template);
  }
  if (data.worldCount != null) {
    contents.worldCount = deserializeAws_restJson1WorldCount(data.worldCount, context);
  }
  if (data.worldTags != null) {
    contents.worldTags = deserializeAws_restJson1TagMap(data.worldTags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeWorldGenerationJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorldTemplateCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1DescribeWorldTemplateCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetWorldTemplateBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorldTemplateBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorldTemplateBodyCommandError(output, context);
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

const deserializeAws_restJson1GetWorldTemplateBodyCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDeploymentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeploymentJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deploymentJobs != null) {
    contents.deploymentJobs = deserializeAws_restJson1DeploymentJobs(data.deploymentJobs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDeploymentJobsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFleetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fleetDetails != null) {
    contents.fleetDetails = deserializeAws_restJson1Fleets(data.fleetDetails, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFleetsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListRobotApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRobotApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.robotApplicationSummaries != null) {
    contents.robotApplicationSummaries = deserializeAws_restJson1RobotApplicationSummaries(
      data.robotApplicationSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListRobotApplicationsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListRobotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRobotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.robots != null) {
    contents.robots = deserializeAws_restJson1Robots(data.robots, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRobotsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSimulationApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSimulationApplicationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.simulationApplicationSummaries != null) {
    contents.simulationApplicationSummaries = deserializeAws_restJson1SimulationApplicationSummaries(
      data.simulationApplicationSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListSimulationApplicationsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSimulationJobBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobBatchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSimulationJobBatchesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.simulationJobBatchSummaries != null) {
    contents.simulationJobBatchSummaries = deserializeAws_restJson1SimulationJobBatchSummaries(
      data.simulationJobBatchSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListSimulationJobBatchesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListSimulationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSimulationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.simulationJobSummaries != null) {
    contents.simulationJobSummaries = deserializeAws_restJson1SimulationJobSummaries(
      data.simulationJobSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListSimulationJobsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWorldExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorldExportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.worldExportJobSummaries != null) {
    contents.worldExportJobSummaries = deserializeAws_restJson1WorldExportJobSummaries(
      data.worldExportJobSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListWorldExportJobsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWorldGenerationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldGenerationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorldGenerationJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.worldGenerationJobSummaries != null) {
    contents.worldGenerationJobSummaries = deserializeAws_restJson1WorldGenerationJobSummaries(
      data.worldGenerationJobSummaries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListWorldGenerationJobsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWorldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.worldSummaries != null) {
    contents.worldSummaries = deserializeAws_restJson1WorldSummaries(data.worldSummaries, context);
  }
  return contents;
};

const deserializeAws_restJson1ListWorldsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListWorldTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorldTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.templateSummaries != null) {
    contents.templateSummaries = deserializeAws_restJson1TemplateSummaries(data.templateSummaries, context);
  }
  return contents;
};

const deserializeAws_restJson1ListWorldTemplatesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RegisterRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterRobotCommandError(output, context);
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

const deserializeAws_restJson1RegisterRobotCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RestartSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestartSimulationJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RestartSimulationJobCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSimulationJobBatchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.batchPolicy != null) {
    contents.batchPolicy = deserializeAws_restJson1BatchPolicy(data.batchPolicy, context);
  }
  if (data.clientRequestToken != null) {
    contents.clientRequestToken = __expectString(data.clientRequestToken);
  }
  if (data.createdAt != null) {
    contents.createdAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.createdAt)));
  }
  if (data.createdRequests != null) {
    contents.createdRequests = deserializeAws_restJson1SimulationJobSummaries(data.createdRequests, context);
  }
  if (data.failedRequests != null) {
    contents.failedRequests = deserializeAws_restJson1FailedCreateSimulationJobRequests(data.failedRequests, context);
  }
  if (data.failureCode != null) {
    contents.failureCode = __expectString(data.failureCode);
  }
  if (data.failureReason != null) {
    contents.failureReason = __expectString(data.failureReason);
  }
  if (data.pendingRequests != null) {
    contents.pendingRequests = deserializeAws_restJson1CreateSimulationJobRequests(data.pendingRequests, context);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1StartSimulationJobBatchCommandError = async (
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
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SyncDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SyncDeploymentJobCommandError(output, context);
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
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig != null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
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

const deserializeAws_restJson1SyncDeploymentJobCommandError = async (
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
      throw await deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRobotApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = deserializeAws_restJson1Environment(data.environment, context);
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
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources != null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRobotApplicationCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSimulationApplicationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.environment != null) {
    contents.environment = deserializeAws_restJson1Environment(data.environment, context);
  }
  if (data.lastUpdatedAt != null) {
    contents.lastUpdatedAt = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedAt)));
  }
  if (data.name != null) {
    contents.name = __expectString(data.name);
  }
  if (data.renderingEngine != null) {
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.robotSoftwareSuite != null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite != null) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources != null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.version != null) {
    contents.version = __expectString(data.version);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSimulationApplicationCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorldTemplateCommandError(output, context);
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

const deserializeAws_restJson1UpdateWorldTemplateCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1ConcurrentDeploymentExceptionResponse = async (
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

const deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse = async (
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const serializeAws_restJson1Arns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1BatchPolicy = (input: BatchPolicy, context: __SerdeContext): any => {
  return {
    ...(input.maxConcurrency != null && { maxConcurrency: input.maxConcurrency }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1CommandList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Compute = (input: Compute, context: __SerdeContext): any => {
  return {
    ...(input.computeType != null && { computeType: input.computeType }),
    ...(input.gpuUnitLimit != null && { gpuUnitLimit: input.gpuUnitLimit }),
    ...(input.simulationUnitLimit != null && { simulationUnitLimit: input.simulationUnitLimit }),
  };
};

const serializeAws_restJson1CreateSimulationJobRequests = (
  input: SimulationJobRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SimulationJobRequest(entry, context);
    });
};

const serializeAws_restJson1DataSourceConfig = (input: DataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: input.destination }),
    ...(input.name != null && { name: input.name }),
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Keys != null && { s3Keys: serializeAws_restJson1S3KeysOrPrefixes(input.s3Keys, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1DataSourceConfigs = (input: DataSourceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DataSourceConfig(entry, context);
    });
};

const serializeAws_restJson1DeploymentApplicationConfig = (
  input: DeploymentApplicationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig != null && {
      launchConfig: serializeAws_restJson1DeploymentLaunchConfig(input.launchConfig, context),
    }),
  };
};

const serializeAws_restJson1DeploymentApplicationConfigs = (
  input: DeploymentApplicationConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DeploymentApplicationConfig(entry, context);
    });
};

const serializeAws_restJson1DeploymentConfig = (input: DeploymentConfig, context: __SerdeContext): any => {
  return {
    ...(input.concurrentDeploymentPercentage != null && {
      concurrentDeploymentPercentage: input.concurrentDeploymentPercentage,
    }),
    ...(input.downloadConditionFile != null && {
      downloadConditionFile: serializeAws_restJson1S3Object(input.downloadConditionFile, context),
    }),
    ...(input.failureThresholdPercentage != null && { failureThresholdPercentage: input.failureThresholdPercentage }),
    ...(input.robotDeploymentTimeoutInSeconds != null && {
      robotDeploymentTimeoutInSeconds: input.robotDeploymentTimeoutInSeconds,
    }),
  };
};

const serializeAws_restJson1DeploymentLaunchConfig = (input: DeploymentLaunchConfig, context: __SerdeContext): any => {
  return {
    ...(input.environmentVariables != null && {
      environmentVariables: serializeAws_restJson1EnvironmentVariableMap(input.environmentVariables, context),
    }),
    ...(input.launchFile != null && { launchFile: input.launchFile }),
    ...(input.packageName != null && { packageName: input.packageName }),
    ...(input.postLaunchFile != null && { postLaunchFile: input.postLaunchFile }),
    ...(input.preLaunchFile != null && { preLaunchFile: input.preLaunchFile }),
  };
};

const serializeAws_restJson1Environment = (input: Environment, context: __SerdeContext): any => {
  return {
    ...(input.uri != null && { uri: input.uri }),
  };
};

const serializeAws_restJson1EnvironmentVariableMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LaunchConfig = (input: LaunchConfig, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: serializeAws_restJson1CommandList(input.command, context) }),
    ...(input.environmentVariables != null && {
      environmentVariables: serializeAws_restJson1EnvironmentVariableMap(input.environmentVariables, context),
    }),
    ...(input.launchFile != null && { launchFile: input.launchFile }),
    ...(input.packageName != null && { packageName: input.packageName }),
    ...(input.portForwardingConfig != null && {
      portForwardingConfig: serializeAws_restJson1PortForwardingConfig(input.portForwardingConfig, context),
    }),
    ...(input.streamUI != null && { streamUI: input.streamUI }),
  };
};

const serializeAws_restJson1LoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  return {
    ...(input.recordAllRosTopics != null && { recordAllRosTopics: input.recordAllRosTopics }),
  };
};

const serializeAws_restJson1OutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Prefix != null && { s3Prefix: input.s3Prefix }),
  };
};

const serializeAws_restJson1PortForwardingConfig = (input: PortForwardingConfig, context: __SerdeContext): any => {
  return {
    ...(input.portMappings != null && {
      portMappings: serializeAws_restJson1PortMappingList(input.portMappings, context),
    }),
  };
};

const serializeAws_restJson1PortMapping = (input: PortMapping, context: __SerdeContext): any => {
  return {
    ...(input.applicationPort != null && { applicationPort: input.applicationPort }),
    ...(input.enableOnPublicIp != null && { enableOnPublicIp: input.enableOnPublicIp }),
    ...(input.jobPort != null && { jobPort: input.jobPort }),
  };
};

const serializeAws_restJson1PortMappingList = (input: PortMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PortMapping(entry, context);
    });
};

const serializeAws_restJson1RenderingEngine = (input: RenderingEngine, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_restJson1RobotApplicationConfig = (input: RobotApplicationConfig, context: __SerdeContext): any => {
  return {
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig != null && {
      launchConfig: serializeAws_restJson1LaunchConfig(input.launchConfig, context),
    }),
    ...(input.tools != null && { tools: serializeAws_restJson1Tools(input.tools, context) }),
    ...(input.uploadConfigurations != null && {
      uploadConfigurations: serializeAws_restJson1UploadConfigurations(input.uploadConfigurations, context),
    }),
    ...(input.useDefaultTools != null && { useDefaultTools: input.useDefaultTools }),
    ...(input.useDefaultUploadConfigurations != null && {
      useDefaultUploadConfigurations: input.useDefaultUploadConfigurations,
    }),
  };
};

const serializeAws_restJson1RobotApplicationConfigs = (
  input: RobotApplicationConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RobotApplicationConfig(entry, context);
    });
};

const serializeAws_restJson1RobotSoftwareSuite = (input: RobotSoftwareSuite, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_restJson1S3Etags = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1S3KeysOrPrefixes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.etag != null && { etag: input.etag }),
    ...(input.key != null && { key: input.key }),
  };
};

const serializeAws_restJson1SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SimulationApplicationConfig = (
  input: SimulationApplicationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.application != null && { application: input.application }),
    ...(input.applicationVersion != null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig != null && {
      launchConfig: serializeAws_restJson1LaunchConfig(input.launchConfig, context),
    }),
    ...(input.tools != null && { tools: serializeAws_restJson1Tools(input.tools, context) }),
    ...(input.uploadConfigurations != null && {
      uploadConfigurations: serializeAws_restJson1UploadConfigurations(input.uploadConfigurations, context),
    }),
    ...(input.useDefaultTools != null && { useDefaultTools: input.useDefaultTools }),
    ...(input.useDefaultUploadConfigurations != null && {
      useDefaultUploadConfigurations: input.useDefaultUploadConfigurations,
    }),
    ...(input.worldConfigs != null && {
      worldConfigs: serializeAws_restJson1WorldConfigs(input.worldConfigs, context),
    }),
  };
};

const serializeAws_restJson1SimulationApplicationConfigs = (
  input: SimulationApplicationConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SimulationApplicationConfig(entry, context);
    });
};

const serializeAws_restJson1SimulationJobRequest = (input: SimulationJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.compute != null && { compute: serializeAws_restJson1Compute(input.compute, context) }),
    ...(input.dataSources != null && {
      dataSources: serializeAws_restJson1DataSourceConfigs(input.dataSources, context),
    }),
    ...(input.failureBehavior != null && { failureBehavior: input.failureBehavior }),
    ...(input.iamRole != null && { iamRole: input.iamRole }),
    ...(input.loggingConfig != null && {
      loggingConfig: serializeAws_restJson1LoggingConfig(input.loggingConfig, context),
    }),
    ...(input.maxJobDurationInSeconds != null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds }),
    ...(input.outputLocation != null && {
      outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
    }),
    ...(input.robotApplications != null && {
      robotApplications: serializeAws_restJson1RobotApplicationConfigs(input.robotApplications, context),
    }),
    ...(input.simulationApplications != null && {
      simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(input.simulationApplications, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.useDefaultApplications != null && { useDefaultApplications: input.useDefaultApplications }),
    ...(input.vpcConfig != null && { vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context) }),
  };
};

const serializeAws_restJson1SimulationSoftwareSuite = (
  input: SimulationSoftwareSuite,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_restJson1SourceConfig = (input: SourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.architecture != null && { architecture: input.architecture }),
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Key != null && { s3Key: input.s3Key }),
  };
};

const serializeAws_restJson1SourceConfigs = (input: SourceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SourceConfig(entry, context);
    });
};

const serializeAws_restJson1Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TemplateLocation = (input: TemplateLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket != null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Key != null && { s3Key: input.s3Key }),
  };
};

const serializeAws_restJson1Tool = (input: Tool, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: input.command }),
    ...(input.exitBehavior != null && { exitBehavior: input.exitBehavior }),
    ...(input.name != null && { name: input.name }),
    ...(input.streamOutputToCloudWatch != null && { streamOutputToCloudWatch: input.streamOutputToCloudWatch }),
    ...(input.streamUI != null && { streamUI: input.streamUI }),
  };
};

const serializeAws_restJson1Tools = (input: Tool[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tool(entry, context);
    });
};

const serializeAws_restJson1UploadConfiguration = (input: UploadConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.path != null && { path: input.path }),
    ...(input.uploadBehavior != null && { uploadBehavior: input.uploadBehavior }),
  };
};

const serializeAws_restJson1UploadConfigurations = (input: UploadConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UploadConfiguration(entry, context);
    });
};

const serializeAws_restJson1VPCConfig = (input: VPCConfig, context: __SerdeContext): any => {
  return {
    ...(input.assignPublicIp != null && { assignPublicIp: input.assignPublicIp }),
    ...(input.securityGroups != null && {
      securityGroups: serializeAws_restJson1SecurityGroups(input.securityGroups, context),
    }),
    ...(input.subnets != null && { subnets: serializeAws_restJson1Subnets(input.subnets, context) }),
  };
};

const serializeAws_restJson1WorldConfig = (input: WorldConfig, context: __SerdeContext): any => {
  return {
    ...(input.world != null && { world: input.world }),
  };
};

const serializeAws_restJson1WorldConfigs = (input: WorldConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WorldConfig(entry, context);
    });
};

const serializeAws_restJson1WorldCount = (input: WorldCount, context: __SerdeContext): any => {
  return {
    ...(input.floorplanCount != null && { floorplanCount: input.floorplanCount }),
    ...(input.interiorCountPerFloorplan != null && { interiorCountPerFloorplan: input.interiorCountPerFloorplan }),
  };
};

const deserializeAws_restJson1Arns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1BatchPolicy = (output: any, context: __SerdeContext): BatchPolicy => {
  return {
    maxConcurrency: __expectInt32(output.maxConcurrency),
    timeoutInSeconds: __expectLong(output.timeoutInSeconds),
  } as any;
};

const deserializeAws_restJson1CommandList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Compute = (output: any, context: __SerdeContext): Compute => {
  return {
    computeType: __expectString(output.computeType),
    gpuUnitLimit: __expectInt32(output.gpuUnitLimit),
    simulationUnitLimit: __expectInt32(output.simulationUnitLimit),
  } as any;
};

const deserializeAws_restJson1ComputeResponse = (output: any, context: __SerdeContext): ComputeResponse => {
  return {
    computeType: __expectString(output.computeType),
    gpuUnitLimit: __expectInt32(output.gpuUnitLimit),
    simulationUnitLimit: __expectInt32(output.simulationUnitLimit),
  } as any;
};

const deserializeAws_restJson1CreateSimulationJobRequests = (
  output: any,
  context: __SerdeContext
): SimulationJobRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationJobRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    destination: __expectString(output.destination),
    name: __expectString(output.name),
    s3Bucket: __expectString(output.s3Bucket),
    s3Keys: output.s3Keys != null ? deserializeAws_restJson1S3KeyOutputs(output.s3Keys, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1DataSourceConfig = (output: any, context: __SerdeContext): DataSourceConfig => {
  return {
    destination: __expectString(output.destination),
    name: __expectString(output.name),
    s3Bucket: __expectString(output.s3Bucket),
    s3Keys: output.s3Keys != null ? deserializeAws_restJson1S3KeysOrPrefixes(output.s3Keys, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1DataSourceConfigs = (output: any, context: __SerdeContext): DataSourceConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSourceConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataSourceNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentApplicationConfig = (
  output: any,
  context: __SerdeContext
): DeploymentApplicationConfig => {
  return {
    application: __expectString(output.application),
    applicationVersion: __expectString(output.applicationVersion),
    launchConfig:
      output.launchConfig != null
        ? deserializeAws_restJson1DeploymentLaunchConfig(output.launchConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentApplicationConfigs = (
  output: any,
  context: __SerdeContext
): DeploymentApplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentApplicationConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentConfig = (output: any, context: __SerdeContext): DeploymentConfig => {
  return {
    concurrentDeploymentPercentage: __expectInt32(output.concurrentDeploymentPercentage),
    downloadConditionFile:
      output.downloadConditionFile != null
        ? deserializeAws_restJson1S3Object(output.downloadConditionFile, context)
        : undefined,
    failureThresholdPercentage: __expectInt32(output.failureThresholdPercentage),
    robotDeploymentTimeoutInSeconds: __expectLong(output.robotDeploymentTimeoutInSeconds),
  } as any;
};

const deserializeAws_restJson1DeploymentJob = (output: any, context: __SerdeContext): DeploymentJob => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentApplicationConfigs:
      output.deploymentApplicationConfigs != null
        ? deserializeAws_restJson1DeploymentApplicationConfigs(output.deploymentApplicationConfigs, context)
        : undefined,
    deploymentConfig:
      output.deploymentConfig != null
        ? deserializeAws_restJson1DeploymentConfig(output.deploymentConfig, context)
        : undefined,
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    fleet: __expectString(output.fleet),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1DeploymentJobs = (output: any, context: __SerdeContext): DeploymentJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentLaunchConfig = (
  output: any,
  context: __SerdeContext
): DeploymentLaunchConfig => {
  return {
    environmentVariables:
      output.environmentVariables != null
        ? deserializeAws_restJson1EnvironmentVariableMap(output.environmentVariables, context)
        : undefined,
    launchFile: __expectString(output.launchFile),
    packageName: __expectString(output.packageName),
    postLaunchFile: __expectString(output.postLaunchFile),
    preLaunchFile: __expectString(output.preLaunchFile),
  } as any;
};

const deserializeAws_restJson1Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    uri: __expectString(output.uri),
  } as any;
};

const deserializeAws_restJson1EnvironmentVariableMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1FailedCreateSimulationJobRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateSimulationJobRequest => {
  return {
    failedAt:
      output.failedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.failedAt))) : undefined,
    failureCode: __expectString(output.failureCode),
    failureReason: __expectString(output.failureReason),
    request: output.request != null ? deserializeAws_restJson1SimulationJobRequest(output.request, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FailedCreateSimulationJobRequests = (
  output: any,
  context: __SerdeContext
): FailedCreateSimulationJobRequest[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedCreateSimulationJobRequest(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FailureSummary = (output: any, context: __SerdeContext): FailureSummary => {
  return {
    failures: output.failures != null ? deserializeAws_restJson1WorldFailures(output.failures, context) : undefined,
    totalFailureCount: __expectInt32(output.totalFailureCount),
  } as any;
};

const deserializeAws_restJson1FinishedWorldsSummary = (output: any, context: __SerdeContext): FinishedWorldsSummary => {
  return {
    failureSummary:
      output.failureSummary != null
        ? deserializeAws_restJson1FailureSummary(output.failureSummary, context)
        : undefined,
    finishedCount: __expectInt32(output.finishedCount),
    succeededWorlds:
      output.succeededWorlds != null ? deserializeAws_restJson1Arns(output.succeededWorlds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Fleet = (output: any, context: __SerdeContext): Fleet => {
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

const deserializeAws_restJson1Fleets = (output: any, context: __SerdeContext): Fleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Fleet(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LaunchConfig = (output: any, context: __SerdeContext): LaunchConfig => {
  return {
    command: output.command != null ? deserializeAws_restJson1CommandList(output.command, context) : undefined,
    environmentVariables:
      output.environmentVariables != null
        ? deserializeAws_restJson1EnvironmentVariableMap(output.environmentVariables, context)
        : undefined,
    launchFile: __expectString(output.launchFile),
    packageName: __expectString(output.packageName),
    portForwardingConfig:
      output.portForwardingConfig != null
        ? deserializeAws_restJson1PortForwardingConfig(output.portForwardingConfig, context)
        : undefined,
    streamUI: __expectBoolean(output.streamUI),
  } as any;
};

const deserializeAws_restJson1LoggingConfig = (output: any, context: __SerdeContext): LoggingConfig => {
  return {
    recordAllRosTopics: __expectBoolean(output.recordAllRosTopics),
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    networkInterfaceId: __expectString(output.networkInterfaceId),
    privateIpAddress: __expectString(output.privateIpAddress),
    publicIpAddress: __expectString(output.publicIpAddress),
  } as any;
};

const deserializeAws_restJson1OutputLocation = (output: any, context: __SerdeContext): OutputLocation => {
  return {
    s3Bucket: __expectString(output.s3Bucket),
    s3Prefix: __expectString(output.s3Prefix),
  } as any;
};

const deserializeAws_restJson1PortForwardingConfig = (output: any, context: __SerdeContext): PortForwardingConfig => {
  return {
    portMappings:
      output.portMappings != null ? deserializeAws_restJson1PortMappingList(output.portMappings, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    applicationPort: __expectInt32(output.applicationPort),
    enableOnPublicIp: __expectBoolean(output.enableOnPublicIp),
    jobPort: __expectInt32(output.jobPort),
  } as any;
};

const deserializeAws_restJson1PortMappingList = (output: any, context: __SerdeContext): PortMapping[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortMapping(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProgressDetail = (output: any, context: __SerdeContext): ProgressDetail => {
  return {
    currentProgress: __expectString(output.currentProgress),
    estimatedTimeRemainingSeconds: __expectInt32(output.estimatedTimeRemainingSeconds),
    percentDone: __limitedParseFloat32(output.percentDone),
    targetResource: __expectString(output.targetResource),
  } as any;
};

const deserializeAws_restJson1RenderingEngine = (output: any, context: __SerdeContext): RenderingEngine => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1Robot = (output: any, context: __SerdeContext): Robot => {
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

const deserializeAws_restJson1RobotApplicationConfig = (
  output: any,
  context: __SerdeContext
): RobotApplicationConfig => {
  return {
    application: __expectString(output.application),
    applicationVersion: __expectString(output.applicationVersion),
    launchConfig:
      output.launchConfig != null ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context) : undefined,
    tools: output.tools != null ? deserializeAws_restJson1Tools(output.tools, context) : undefined,
    uploadConfigurations:
      output.uploadConfigurations != null
        ? deserializeAws_restJson1UploadConfigurations(output.uploadConfigurations, context)
        : undefined,
    useDefaultTools: __expectBoolean(output.useDefaultTools),
    useDefaultUploadConfigurations: __expectBoolean(output.useDefaultUploadConfigurations),
  } as any;
};

const deserializeAws_restJson1RobotApplicationConfigs = (
  output: any,
  context: __SerdeContext
): RobotApplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RobotApplicationConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RobotApplicationNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RobotApplicationSummaries = (
  output: any,
  context: __SerdeContext
): RobotApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RobotApplicationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RobotApplicationSummary = (
  output: any,
  context: __SerdeContext
): RobotApplicationSummary => {
  return {
    arn: __expectString(output.arn),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
    robotSoftwareSuite:
      output.robotSoftwareSuite != null
        ? deserializeAws_restJson1RobotSoftwareSuite(output.robotSoftwareSuite, context)
        : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1RobotDeployment = (output: any, context: __SerdeContext): RobotDeployment => {
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
    progressDetail:
      output.progressDetail != null
        ? deserializeAws_restJson1ProgressDetail(output.progressDetail, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1RobotDeploymentSummary = (output: any, context: __SerdeContext): RobotDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RobotDeployment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Robots = (output: any, context: __SerdeContext): Robot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Robot(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RobotSoftwareSuite = (output: any, context: __SerdeContext): RobotSoftwareSuite => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1S3KeyOutput = (output: any, context: __SerdeContext): S3KeyOutput => {
  return {
    etag: __expectString(output.etag),
    s3Key: __expectString(output.s3Key),
  } as any;
};

const deserializeAws_restJson1S3KeyOutputs = (output: any, context: __SerdeContext): S3KeyOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1S3KeyOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3KeysOrPrefixes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    bucket: __expectString(output.bucket),
    etag: __expectString(output.etag),
    key: __expectString(output.key),
  } as any;
};

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SimulationApplicationConfig = (
  output: any,
  context: __SerdeContext
): SimulationApplicationConfig => {
  return {
    application: __expectString(output.application),
    applicationVersion: __expectString(output.applicationVersion),
    launchConfig:
      output.launchConfig != null ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context) : undefined,
    tools: output.tools != null ? deserializeAws_restJson1Tools(output.tools, context) : undefined,
    uploadConfigurations:
      output.uploadConfigurations != null
        ? deserializeAws_restJson1UploadConfigurations(output.uploadConfigurations, context)
        : undefined,
    useDefaultTools: __expectBoolean(output.useDefaultTools),
    useDefaultUploadConfigurations: __expectBoolean(output.useDefaultUploadConfigurations),
    worldConfigs:
      output.worldConfigs != null ? deserializeAws_restJson1WorldConfigs(output.worldConfigs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationApplicationConfigs = (
  output: any,
  context: __SerdeContext
): SimulationApplicationConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationApplicationConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SimulationApplicationNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1SimulationApplicationSummaries = (
  output: any,
  context: __SerdeContext
): SimulationApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationApplicationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SimulationApplicationSummary = (
  output: any,
  context: __SerdeContext
): SimulationApplicationSummary => {
  return {
    arn: __expectString(output.arn),
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
    robotSoftwareSuite:
      output.robotSoftwareSuite != null
        ? deserializeAws_restJson1RobotSoftwareSuite(output.robotSoftwareSuite, context)
        : undefined,
    simulationSoftwareSuite:
      output.simulationSoftwareSuite != null
        ? deserializeAws_restJson1SimulationSoftwareSuite(output.simulationSoftwareSuite, context)
        : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1SimulationJob = (output: any, context: __SerdeContext): SimulationJob => {
  return {
    arn: __expectString(output.arn),
    clientRequestToken: __expectString(output.clientRequestToken),
    compute: output.compute != null ? deserializeAws_restJson1ComputeResponse(output.compute, context) : undefined,
    dataSources:
      output.dataSources != null ? deserializeAws_restJson1DataSources(output.dataSources, context) : undefined,
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
    loggingConfig:
      output.loggingConfig != null ? deserializeAws_restJson1LoggingConfig(output.loggingConfig, context) : undefined,
    maxJobDurationInSeconds: __expectLong(output.maxJobDurationInSeconds),
    name: __expectString(output.name),
    networkInterface:
      output.networkInterface != null
        ? deserializeAws_restJson1NetworkInterface(output.networkInterface, context)
        : undefined,
    outputLocation:
      output.outputLocation != null
        ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
        : undefined,
    robotApplications:
      output.robotApplications != null
        ? deserializeAws_restJson1RobotApplicationConfigs(output.robotApplications, context)
        : undefined,
    simulationApplications:
      output.simulationApplications != null
        ? deserializeAws_restJson1SimulationApplicationConfigs(output.simulationApplications, context)
        : undefined,
    simulationTimeMillis: __expectLong(output.simulationTimeMillis),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    vpcConfig:
      output.vpcConfig != null ? deserializeAws_restJson1VPCConfigResponse(output.vpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationJobBatchSummaries = (
  output: any,
  context: __SerdeContext
): SimulationJobBatchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationJobBatchSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SimulationJobBatchSummary = (
  output: any,
  context: __SerdeContext
): SimulationJobBatchSummary => {
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

const deserializeAws_restJson1SimulationJobRequest = (output: any, context: __SerdeContext): SimulationJobRequest => {
  return {
    compute: output.compute != null ? deserializeAws_restJson1Compute(output.compute, context) : undefined,
    dataSources:
      output.dataSources != null ? deserializeAws_restJson1DataSourceConfigs(output.dataSources, context) : undefined,
    failureBehavior: __expectString(output.failureBehavior),
    iamRole: __expectString(output.iamRole),
    loggingConfig:
      output.loggingConfig != null ? deserializeAws_restJson1LoggingConfig(output.loggingConfig, context) : undefined,
    maxJobDurationInSeconds: __expectLong(output.maxJobDurationInSeconds),
    outputLocation:
      output.outputLocation != null
        ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
        : undefined,
    robotApplications:
      output.robotApplications != null
        ? deserializeAws_restJson1RobotApplicationConfigs(output.robotApplications, context)
        : undefined,
    simulationApplications:
      output.simulationApplications != null
        ? deserializeAws_restJson1SimulationApplicationConfigs(output.simulationApplications, context)
        : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    useDefaultApplications: __expectBoolean(output.useDefaultApplications),
    vpcConfig: output.vpcConfig != null ? deserializeAws_restJson1VPCConfig(output.vpcConfig, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationJobs = (output: any, context: __SerdeContext): SimulationJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SimulationJobSummaries = (
  output: any,
  context: __SerdeContext
): SimulationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SimulationJobSummary = (output: any, context: __SerdeContext): SimulationJobSummary => {
  return {
    arn: __expectString(output.arn),
    computeType: __expectString(output.computeType),
    dataSourceNames:
      output.dataSourceNames != null
        ? deserializeAws_restJson1DataSourceNames(output.dataSourceNames, context)
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedAt)))
        : undefined,
    name: __expectString(output.name),
    robotApplicationNames:
      output.robotApplicationNames != null
        ? deserializeAws_restJson1RobotApplicationNames(output.robotApplicationNames, context)
        : undefined,
    simulationApplicationNames:
      output.simulationApplicationNames != null
        ? deserializeAws_restJson1SimulationApplicationNames(output.simulationApplicationNames, context)
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1SimulationSoftwareSuite = (
  output: any,
  context: __SerdeContext
): SimulationSoftwareSuite => {
  return {
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1Source = (output: any, context: __SerdeContext): Source => {
  return {
    architecture: __expectString(output.architecture),
    etag: __expectString(output.etag),
    s3Bucket: __expectString(output.s3Bucket),
    s3Key: __expectString(output.s3Key),
  } as any;
};

const deserializeAws_restJson1Sources = (output: any, context: __SerdeContext): Source[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Source(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Subnets = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TemplateSummaries = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
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

const deserializeAws_restJson1Tool = (output: any, context: __SerdeContext): Tool => {
  return {
    command: __expectString(output.command),
    exitBehavior: __expectString(output.exitBehavior),
    name: __expectString(output.name),
    streamOutputToCloudWatch: __expectBoolean(output.streamOutputToCloudWatch),
    streamUI: __expectBoolean(output.streamUI),
  } as any;
};

const deserializeAws_restJson1Tools = (output: any, context: __SerdeContext): Tool[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tool(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1UploadConfiguration = (output: any, context: __SerdeContext): UploadConfiguration => {
  return {
    name: __expectString(output.name),
    path: __expectString(output.path),
    uploadBehavior: __expectString(output.uploadBehavior),
  } as any;
};

const deserializeAws_restJson1UploadConfigurations = (output: any, context: __SerdeContext): UploadConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UploadConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VPCConfig = (output: any, context: __SerdeContext): VPCConfig => {
  return {
    assignPublicIp: __expectBoolean(output.assignPublicIp),
    securityGroups:
      output.securityGroups != null
        ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
        : undefined,
    subnets: output.subnets != null ? deserializeAws_restJson1Subnets(output.subnets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1VPCConfigResponse = (output: any, context: __SerdeContext): VPCConfigResponse => {
  return {
    assignPublicIp: __expectBoolean(output.assignPublicIp),
    securityGroups:
      output.securityGroups != null
        ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
        : undefined,
    subnets: output.subnets != null ? deserializeAws_restJson1Subnets(output.subnets, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_restJson1WorldConfig = (output: any, context: __SerdeContext): WorldConfig => {
  return {
    world: __expectString(output.world),
  } as any;
};

const deserializeAws_restJson1WorldConfigs = (output: any, context: __SerdeContext): WorldConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorldCount = (output: any, context: __SerdeContext): WorldCount => {
  return {
    floorplanCount: __expectInt32(output.floorplanCount),
    interiorCountPerFloorplan: __expectInt32(output.interiorCountPerFloorplan),
  } as any;
};

const deserializeAws_restJson1WorldExportJobSummaries = (
  output: any,
  context: __SerdeContext
): WorldExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldExportJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorldExportJobSummary = (output: any, context: __SerdeContext): WorldExportJobSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    outputLocation:
      output.outputLocation != null
        ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
        : undefined,
    status: __expectString(output.status),
    worlds: output.worlds != null ? deserializeAws_restJson1Arns(output.worlds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1WorldFailure = (output: any, context: __SerdeContext): WorldFailure => {
  return {
    failureCode: __expectString(output.failureCode),
    failureCount: __expectInt32(output.failureCount),
    sampleFailureReason: __expectString(output.sampleFailureReason),
  } as any;
};

const deserializeAws_restJson1WorldFailures = (output: any, context: __SerdeContext): WorldFailure[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldFailure(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorldGenerationJobSummaries = (
  output: any,
  context: __SerdeContext
): WorldGenerationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldGenerationJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorldGenerationJobSummary = (
  output: any,
  context: __SerdeContext
): WorldGenerationJobSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    failedWorldCount: __expectInt32(output.failedWorldCount),
    status: __expectString(output.status),
    succeededWorldCount: __expectInt32(output.succeededWorldCount),
    template: __expectString(output.template),
    worldCount: output.worldCount != null ? deserializeAws_restJson1WorldCount(output.worldCount, context) : undefined,
  } as any;
};

const deserializeAws_restJson1WorldSummaries = (output: any, context: __SerdeContext): WorldSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WorldSummary = (output: any, context: __SerdeContext): WorldSummary => {
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
