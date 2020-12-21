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
import { ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput } from "../commands/ListWorldTemplatesCommand";
import { ListWorldsCommandInput, ListWorldsCommandOutput } from "../commands/ListWorldsCommand";
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
  VPCConfig,
  VPCConfigResponse,
  WorldConfig,
  WorldCount,
  WorldExportJobSummary,
  WorldFailure,
  WorldGenerationJobSummary,
  WorldSummary,
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
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1BatchDeleteWorldsCommand = async (
  input: BatchDeleteWorldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/batchDeleteWorlds";
  let body: any;
  body = JSON.stringify({
    ...(input.worlds !== undefined &&
      input.worlds !== null && { worlds: serializeAws_restJson1Arns(input.worlds, context) }),
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

export const serializeAws_restJson1BatchDescribeSimulationJobCommand = async (
  input: BatchDescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/batchDescribeSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobs !== undefined && input.jobs !== null && { jobs: serializeAws_restJson1Arns(input.jobs, context) }),
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

export const serializeAws_restJson1CancelDeploymentJobCommand = async (
  input: CancelDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/cancelDeploymentJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1CancelSimulationJobCommand = async (
  input: CancelSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/cancelSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1CancelSimulationJobBatchCommand = async (
  input: CancelSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/cancelSimulationJobBatch";
  let body: any;
  body = JSON.stringify({
    ...(input.batch !== undefined && input.batch !== null && { batch: input.batch }),
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

export const serializeAws_restJson1CancelWorldExportJobCommand = async (
  input: CancelWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/cancelWorldExportJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1CancelWorldGenerationJobCommand = async (
  input: CancelWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/cancelWorldGenerationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1CreateDeploymentJobCommand = async (
  input: CreateDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createDeploymentJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.deploymentApplicationConfigs !== undefined &&
      input.deploymentApplicationConfigs !== null && {
        deploymentApplicationConfigs: serializeAws_restJson1DeploymentApplicationConfigs(
          input.deploymentApplicationConfigs,
          context
        ),
      }),
    ...(input.deploymentConfig !== undefined &&
      input.deploymentConfig !== null && {
        deploymentConfig: serializeAws_restJson1DeploymentConfig(input.deploymentConfig, context),
      }),
    ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
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

export const serializeAws_restJson1CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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

export const serializeAws_restJson1CreateRobotCommand = async (
  input: CreateRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.architecture !== undefined && input.architecture !== null && { architecture: input.architecture }),
    ...(input.greengrassGroupId !== undefined &&
      input.greengrassGroupId !== null && { greengrassGroupId: input.greengrassGroupId }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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

export const serializeAws_restJson1CreateRobotApplicationCommand = async (
  input: CreateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.robotSoftwareSuite !== undefined &&
      input.robotSoftwareSuite !== null && {
        robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
      }),
    ...(input.sources !== undefined &&
      input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
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

export const serializeAws_restJson1CreateRobotApplicationVersionCommand = async (
  input: CreateRobotApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createRobotApplicationVersion";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.currentRevisionId !== undefined &&
      input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId }),
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

export const serializeAws_restJson1CreateSimulationApplicationCommand = async (
  input: CreateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.renderingEngine !== undefined &&
      input.renderingEngine !== null && {
        renderingEngine: serializeAws_restJson1RenderingEngine(input.renderingEngine, context),
      }),
    ...(input.robotSoftwareSuite !== undefined &&
      input.robotSoftwareSuite !== null && {
        robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
      }),
    ...(input.simulationSoftwareSuite !== undefined &&
      input.simulationSoftwareSuite !== null && {
        simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
      }),
    ...(input.sources !== undefined &&
      input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
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

export const serializeAws_restJson1CreateSimulationApplicationVersionCommand = async (
  input: CreateSimulationApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createSimulationApplicationVersion";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.currentRevisionId !== undefined &&
      input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId }),
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

export const serializeAws_restJson1CreateSimulationJobCommand = async (
  input: CreateSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createSimulationJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.compute !== undefined &&
      input.compute !== null && { compute: serializeAws_restJson1Compute(input.compute, context) }),
    ...(input.dataSources !== undefined &&
      input.dataSources !== null && {
        dataSources: serializeAws_restJson1DataSourceConfigs(input.dataSources, context),
      }),
    ...(input.failureBehavior !== undefined &&
      input.failureBehavior !== null && { failureBehavior: input.failureBehavior }),
    ...(input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole }),
    ...(input.loggingConfig !== undefined &&
      input.loggingConfig !== null && {
        loggingConfig: serializeAws_restJson1LoggingConfig(input.loggingConfig, context),
      }),
    ...(input.maxJobDurationInSeconds !== undefined &&
      input.maxJobDurationInSeconds !== null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds }),
    ...(input.outputLocation !== undefined &&
      input.outputLocation !== null && {
        outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
      }),
    ...(input.robotApplications !== undefined &&
      input.robotApplications !== null && {
        robotApplications: serializeAws_restJson1RobotApplicationConfigs(input.robotApplications, context),
      }),
    ...(input.simulationApplications !== undefined &&
      input.simulationApplications !== null && {
        simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(
          input.simulationApplications,
          context
        ),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.vpcConfig !== undefined &&
      input.vpcConfig !== null && { vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context) }),
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

export const serializeAws_restJson1CreateWorldExportJobCommand = async (
  input: CreateWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createWorldExportJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole }),
    ...(input.outputLocation !== undefined &&
      input.outputLocation !== null && {
        outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.worlds !== undefined &&
      input.worlds !== null && { worlds: serializeAws_restJson1Arns(input.worlds, context) }),
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

export const serializeAws_restJson1CreateWorldGenerationJobCommand = async (
  input: CreateWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createWorldGenerationJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.template !== undefined && input.template !== null && { template: input.template }),
    ...(input.worldCount !== undefined &&
      input.worldCount !== null && { worldCount: serializeAws_restJson1WorldCount(input.worldCount, context) }),
    ...(input.worldTags !== undefined &&
      input.worldTags !== null && { worldTags: serializeAws_restJson1TagMap(input.worldTags, context) }),
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

export const serializeAws_restJson1CreateWorldTemplateCommand = async (
  input: CreateWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/createWorldTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.clientRequestToken !== undefined &&
      input.clientRequestToken !== null && { clientRequestToken: input.clientRequestToken }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.templateBody !== undefined && input.templateBody !== null && { templateBody: input.templateBody }),
    ...(input.templateLocation !== undefined &&
      input.templateLocation !== null && {
        templateLocation: serializeAws_restJson1TemplateLocation(input.templateLocation, context),
      }),
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

export const serializeAws_restJson1DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/deleteFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
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

export const serializeAws_restJson1DeleteRobotCommand = async (
  input: DeleteRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/deleteRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.robot !== undefined && input.robot !== null && { robot: input.robot }),
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

export const serializeAws_restJson1DeleteRobotApplicationCommand = async (
  input: DeleteRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/deleteRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.applicationVersion !== undefined &&
      input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
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

export const serializeAws_restJson1DeleteSimulationApplicationCommand = async (
  input: DeleteSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/deleteSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.applicationVersion !== undefined &&
      input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
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

export const serializeAws_restJson1DeleteWorldTemplateCommand = async (
  input: DeleteWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/deleteWorldTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.template !== undefined && input.template !== null && { template: input.template }),
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

export const serializeAws_restJson1DeregisterRobotCommand = async (
  input: DeregisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/deregisterRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
    ...(input.robot !== undefined && input.robot !== null && { robot: input.robot }),
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

export const serializeAws_restJson1DescribeDeploymentJobCommand = async (
  input: DescribeDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeDeploymentJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1DescribeFleetCommand = async (
  input: DescribeFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
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

export const serializeAws_restJson1DescribeRobotCommand = async (
  input: DescribeRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.robot !== undefined && input.robot !== null && { robot: input.robot }),
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

export const serializeAws_restJson1DescribeRobotApplicationCommand = async (
  input: DescribeRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.applicationVersion !== undefined &&
      input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
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

export const serializeAws_restJson1DescribeSimulationApplicationCommand = async (
  input: DescribeSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.applicationVersion !== undefined &&
      input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
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

export const serializeAws_restJson1DescribeSimulationJobCommand = async (
  input: DescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1DescribeSimulationJobBatchCommand = async (
  input: DescribeSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeSimulationJobBatch";
  let body: any;
  body = JSON.stringify({
    ...(input.batch !== undefined && input.batch !== null && { batch: input.batch }),
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

export const serializeAws_restJson1DescribeWorldCommand = async (
  input: DescribeWorldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeWorld";
  let body: any;
  body = JSON.stringify({
    ...(input.world !== undefined && input.world !== null && { world: input.world }),
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

export const serializeAws_restJson1DescribeWorldExportJobCommand = async (
  input: DescribeWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeWorldExportJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1DescribeWorldGenerationJobCommand = async (
  input: DescribeWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeWorldGenerationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1DescribeWorldTemplateCommand = async (
  input: DescribeWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/describeWorldTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.template !== undefined && input.template !== null && { template: input.template }),
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

export const serializeAws_restJson1GetWorldTemplateBodyCommand = async (
  input: GetWorldTemplateBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/getWorldTemplateBody";
  let body: any;
  body = JSON.stringify({
    ...(input.generationJob !== undefined && input.generationJob !== null && { generationJob: input.generationJob }),
    ...(input.template !== undefined && input.template !== null && { template: input.template }),
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

export const serializeAws_restJson1ListDeploymentJobsCommand = async (
  input: ListDeploymentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listDeploymentJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listFleets";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListRobotApplicationsCommand = async (
  input: ListRobotApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listRobotApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.versionQualifier !== undefined &&
      input.versionQualifier !== null && { versionQualifier: input.versionQualifier }),
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

export const serializeAws_restJson1ListRobotsCommand = async (
  input: ListRobotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listRobots";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListSimulationApplicationsCommand = async (
  input: ListSimulationApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listSimulationApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.versionQualifier !== undefined &&
      input.versionQualifier !== null && { versionQualifier: input.versionQualifier }),
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

export const serializeAws_restJson1ListSimulationJobBatchesCommand = async (
  input: ListSimulationJobBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listSimulationJobBatches";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListSimulationJobsCommand = async (
  input: ListSimulationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listSimulationJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListWorldExportJobsCommand = async (
  input: ListWorldExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listWorldExportJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListWorldGenerationJobsCommand = async (
  input: ListWorldGenerationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listWorldGenerationJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListWorldsCommand = async (
  input: ListWorldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listWorlds";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1Filters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListWorldTemplatesCommand = async (
  input: ListWorldTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/listWorldTemplates";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1RegisterRobotCommand = async (
  input: RegisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/registerRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
    ...(input.robot !== undefined && input.robot !== null && { robot: input.robot }),
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

export const serializeAws_restJson1RestartSimulationJobCommand = async (
  input: RestartSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/restartSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && input.job !== null && { job: input.job }),
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

export const serializeAws_restJson1StartSimulationJobBatchCommand = async (
  input: StartSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/startSimulationJobBatch";
  let body: any;
  body = JSON.stringify({
    ...(input.batchPolicy !== undefined &&
      input.batchPolicy !== null && { batchPolicy: serializeAws_restJson1BatchPolicy(input.batchPolicy, context) }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.createSimulationJobRequests !== undefined &&
      input.createSimulationJobRequests !== null && {
        createSimulationJobRequests: serializeAws_restJson1CreateSimulationJobRequests(
          input.createSimulationJobRequests,
          context
        ),
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

export const serializeAws_restJson1SyncDeploymentJobCommand = async (
  input: SyncDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/syncDeploymentJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.fleet !== undefined && input.fleet !== null && { fleet: input.fleet }),
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

export const serializeAws_restJson1UpdateRobotApplicationCommand = async (
  input: UpdateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/updateRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.currentRevisionId !== undefined &&
      input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId }),
    ...(input.robotSoftwareSuite !== undefined &&
      input.robotSoftwareSuite !== null && {
        robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
      }),
    ...(input.sources !== undefined &&
      input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
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

export const serializeAws_restJson1UpdateSimulationApplicationCommand = async (
  input: UpdateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/updateSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.currentRevisionId !== undefined &&
      input.currentRevisionId !== null && { currentRevisionId: input.currentRevisionId }),
    ...(input.renderingEngine !== undefined &&
      input.renderingEngine !== null && {
        renderingEngine: serializeAws_restJson1RenderingEngine(input.renderingEngine, context),
      }),
    ...(input.robotSoftwareSuite !== undefined &&
      input.robotSoftwareSuite !== null && {
        robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(input.robotSoftwareSuite, context),
      }),
    ...(input.simulationSoftwareSuite !== undefined &&
      input.simulationSoftwareSuite !== null && {
        simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(input.simulationSoftwareSuite, context),
      }),
    ...(input.sources !== undefined &&
      input.sources !== null && { sources: serializeAws_restJson1SourceConfigs(input.sources, context) }),
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

export const serializeAws_restJson1UpdateWorldTemplateCommand = async (
  input: UpdateWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/updateWorldTemplate";
  let body: any;
  body = JSON.stringify({
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.template !== undefined && input.template !== null && { template: input.template }),
    ...(input.templateBody !== undefined && input.templateBody !== null && { templateBody: input.templateBody }),
    ...(input.templateLocation !== undefined &&
      input.templateLocation !== null && {
        templateLocation: serializeAws_restJson1TemplateLocation(input.templateLocation, context),
      }),
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

export const deserializeAws_restJson1BatchDeleteWorldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteWorldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteWorldsCommandError(output, context);
  }
  const contents: BatchDeleteWorldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    unprocessedWorlds: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.unprocessedWorlds !== undefined && data.unprocessedWorlds !== null) {
    contents.unprocessedWorlds = deserializeAws_restJson1Arns(data.unprocessedWorlds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDeleteWorldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteWorldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1BatchDescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDescribeSimulationJobCommandError(output, context);
  }
  const contents: BatchDescribeSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobs: undefined,
    unprocessedJobs: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.jobs = deserializeAws_restJson1SimulationJobs(data.jobs, context);
  }
  if (data.unprocessedJobs !== undefined && data.unprocessedJobs !== null) {
    contents.unprocessedJobs = deserializeAws_restJson1Arns(data.unprocessedJobs, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDescribeSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CancelDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelDeploymentJobCommandError(output, context);
  }
  const contents: CancelDeploymentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelDeploymentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CancelSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelSimulationJobCommandError(output, context);
  }
  const contents: CancelSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CancelSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelSimulationJobBatchCommandError(output, context);
  }
  const contents: CancelSimulationJobBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelSimulationJobBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CancelWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelWorldExportJobCommandError(output, context);
  }
  const contents: CancelWorldExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelWorldExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CancelWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelWorldGenerationJobCommandError(output, context);
  }
  const contents: CancelWorldGenerationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelWorldGenerationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldGenerationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentJobCommandError(output, context);
  }
  const contents: CreateDeploymentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    createdAt: undefined,
    deploymentApplicationConfigs: undefined,
    deploymentConfig: undefined,
    failureCode: undefined,
    failureReason: undefined,
    fleet: undefined,
    status: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.fleet !== undefined && data.fleet !== null) {
    contents.fleet = data.fleet;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDeploymentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFleetCommandError(output, context);
  }
  const contents: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    createdAt: undefined,
    name: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRobotCommandError(output, context);
  }
  const contents: CreateRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    architecture: undefined,
    arn: undefined,
    createdAt: undefined,
    greengrassGroupId: undefined,
    name: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.architecture !== undefined && data.architecture !== null) {
    contents.architecture = data.architecture;
  }
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.greengrassGroupId !== undefined && data.greengrassGroupId !== null) {
    contents.greengrassGroupId = data.greengrassGroupId;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRobotApplicationCommandError(output, context);
  }
  const contents: CreateRobotApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    sources: undefined,
    tags: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateRobotApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRobotApplicationVersionCommandError(output, context);
  }
  const contents: CreateRobotApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    sources: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRobotApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSimulationApplicationCommandError(output, context);
  }
  const contents: CreateSimulationApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    renderingEngine: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    sources: undefined,
    tags: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSimulationApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateSimulationApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSimulationApplicationVersionCommandError(output, context);
  }
  const contents: CreateSimulationApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    renderingEngine: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    sources: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSimulationApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSimulationJobCommandError(output, context);
  }
  const contents: CreateSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    clientRequestToken: undefined,
    compute: undefined,
    dataSources: undefined,
    failureBehavior: undefined,
    failureCode: undefined,
    iamRole: undefined,
    lastStartedAt: undefined,
    lastUpdatedAt: undefined,
    loggingConfig: undefined,
    maxJobDurationInSeconds: undefined,
    outputLocation: undefined,
    robotApplications: undefined,
    simulationApplications: undefined,
    simulationTimeMillis: undefined,
    status: undefined,
    tags: undefined,
    vpcConfig: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.compute !== undefined && data.compute !== null) {
    contents.compute = deserializeAws_restJson1ComputeResponse(data.compute, context);
  }
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
  }
  if (data.failureBehavior !== undefined && data.failureBehavior !== null) {
    contents.failureBehavior = data.failureBehavior;
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.iamRole !== undefined && data.iamRole !== null) {
    contents.iamRole = data.iamRole;
  }
  if (data.lastStartedAt !== undefined && data.lastStartedAt !== null) {
    contents.lastStartedAt = new Date(Math.round(data.lastStartedAt * 1000));
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.loggingConfig !== undefined && data.loggingConfig !== null) {
    contents.loggingConfig = deserializeAws_restJson1LoggingConfig(data.loggingConfig, context);
  }
  if (data.maxJobDurationInSeconds !== undefined && data.maxJobDurationInSeconds !== null) {
    contents.maxJobDurationInSeconds = data.maxJobDurationInSeconds;
  }
  if (data.outputLocation !== undefined && data.outputLocation !== null) {
    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
  }
  if (data.robotApplications !== undefined && data.robotApplications !== null) {
    contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(data.robotApplications, context);
  }
  if (data.simulationApplications !== undefined && data.simulationApplications !== null) {
    contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(
      data.simulationApplications,
      context
    );
  }
  if (data.simulationTimeMillis !== undefined && data.simulationTimeMillis !== null) {
    contents.simulationTimeMillis = data.simulationTimeMillis;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
    contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(data.vpcConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorldExportJobCommandError(output, context);
  }
  const contents: CreateWorldExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    failureCode: undefined,
    iamRole: undefined,
    outputLocation: undefined,
    status: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.iamRole !== undefined && data.iamRole !== null) {
    contents.iamRole = data.iamRole;
  }
  if (data.outputLocation !== undefined && data.outputLocation !== null) {
    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWorldExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorldGenerationJobCommandError(output, context);
  }
  const contents: CreateWorldGenerationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    failureCode: undefined,
    status: undefined,
    tags: undefined,
    template: undefined,
    worldCount: undefined,
    worldTags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.template !== undefined && data.template !== null) {
    contents.template = data.template;
  }
  if (data.worldCount !== undefined && data.worldCount !== null) {
    contents.worldCount = deserializeAws_restJson1WorldCount(data.worldCount, context);
  }
  if (data.worldTags !== undefined && data.worldTags !== null) {
    contents.worldTags = deserializeAws_restJson1TagMap(data.worldTags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWorldGenerationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldGenerationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateWorldTemplateCommandError(output, context);
  }
  const contents: CreateWorldTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    name: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateWorldTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFleetCommandError(output, context);
  }
  const contents: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRobotCommandError(output, context);
  }
  const contents: DeleteRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRobotApplicationCommandError(output, context);
  }
  const contents: DeleteRobotApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSimulationApplicationCommandError(output, context);
  }
  const contents: DeleteSimulationApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSimulationApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSimulationApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteWorldTemplateCommandError(output, context);
  }
  const contents: DeleteWorldTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteWorldTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorldTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeregisterRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterRobotCommandError(output, context);
  }
  const contents: DeregisterRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    fleet: undefined,
    robot: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.fleet !== undefined && data.fleet !== null) {
    contents.fleet = data.fleet;
  }
  if (data.robot !== undefined && data.robot !== null) {
    contents.robot = data.robot;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeregisterRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDeploymentJobCommandError(output, context);
  }
  const contents: DescribeDeploymentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    createdAt: undefined,
    deploymentApplicationConfigs: undefined,
    deploymentConfig: undefined,
    failureCode: undefined,
    failureReason: undefined,
    fleet: undefined,
    robotDeploymentSummary: undefined,
    status: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.fleet !== undefined && data.fleet !== null) {
    contents.fleet = data.fleet;
  }
  if (data.robotDeploymentSummary !== undefined && data.robotDeploymentSummary !== null) {
    contents.robotDeploymentSummary = deserializeAws_restJson1RobotDeploymentSummary(
      data.robotDeploymentSummary,
      context
    );
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDeploymentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFleetCommandError(output, context);
  }
  const contents: DescribeFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    createdAt: undefined,
    lastDeploymentJob: undefined,
    lastDeploymentStatus: undefined,
    lastDeploymentTime: undefined,
    name: undefined,
    robots: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.lastDeploymentJob !== undefined && data.lastDeploymentJob !== null) {
    contents.lastDeploymentJob = data.lastDeploymentJob;
  }
  if (data.lastDeploymentStatus !== undefined && data.lastDeploymentStatus !== null) {
    contents.lastDeploymentStatus = data.lastDeploymentStatus;
  }
  if (data.lastDeploymentTime !== undefined && data.lastDeploymentTime !== null) {
    contents.lastDeploymentTime = new Date(Math.round(data.lastDeploymentTime * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.robots !== undefined && data.robots !== null) {
    contents.robots = deserializeAws_restJson1Robots(data.robots, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeFleetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRobotCommandError(output, context);
  }
  const contents: DescribeRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    architecture: undefined,
    arn: undefined,
    createdAt: undefined,
    fleetArn: undefined,
    greengrassGroupId: undefined,
    lastDeploymentJob: undefined,
    lastDeploymentTime: undefined,
    name: undefined,
    status: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.architecture !== undefined && data.architecture !== null) {
    contents.architecture = data.architecture;
  }
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.fleetArn !== undefined && data.fleetArn !== null) {
    contents.fleetArn = data.fleetArn;
  }
  if (data.greengrassGroupId !== undefined && data.greengrassGroupId !== null) {
    contents.greengrassGroupId = data.greengrassGroupId;
  }
  if (data.lastDeploymentJob !== undefined && data.lastDeploymentJob !== null) {
    contents.lastDeploymentJob = data.lastDeploymentJob;
  }
  if (data.lastDeploymentTime !== undefined && data.lastDeploymentTime !== null) {
    contents.lastDeploymentTime = new Date(Math.round(data.lastDeploymentTime * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRobotApplicationCommandError(output, context);
  }
  const contents: DescribeRobotApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    sources: undefined,
    tags: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSimulationApplicationCommandError(output, context);
  }
  const contents: DescribeSimulationApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    renderingEngine: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    sources: undefined,
    tags: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSimulationApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSimulationJobCommandError(output, context);
  }
  const contents: DescribeSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    clientRequestToken: undefined,
    compute: undefined,
    dataSources: undefined,
    failureBehavior: undefined,
    failureCode: undefined,
    failureReason: undefined,
    iamRole: undefined,
    lastStartedAt: undefined,
    lastUpdatedAt: undefined,
    loggingConfig: undefined,
    maxJobDurationInSeconds: undefined,
    name: undefined,
    networkInterface: undefined,
    outputLocation: undefined,
    robotApplications: undefined,
    simulationApplications: undefined,
    simulationTimeMillis: undefined,
    status: undefined,
    tags: undefined,
    vpcConfig: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.compute !== undefined && data.compute !== null) {
    contents.compute = deserializeAws_restJson1ComputeResponse(data.compute, context);
  }
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.dataSources = deserializeAws_restJson1DataSources(data.dataSources, context);
  }
  if (data.failureBehavior !== undefined && data.failureBehavior !== null) {
    contents.failureBehavior = data.failureBehavior;
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.iamRole !== undefined && data.iamRole !== null) {
    contents.iamRole = data.iamRole;
  }
  if (data.lastStartedAt !== undefined && data.lastStartedAt !== null) {
    contents.lastStartedAt = new Date(Math.round(data.lastStartedAt * 1000));
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.loggingConfig !== undefined && data.loggingConfig !== null) {
    contents.loggingConfig = deserializeAws_restJson1LoggingConfig(data.loggingConfig, context);
  }
  if (data.maxJobDurationInSeconds !== undefined && data.maxJobDurationInSeconds !== null) {
    contents.maxJobDurationInSeconds = data.maxJobDurationInSeconds;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.networkInterface !== undefined && data.networkInterface !== null) {
    contents.networkInterface = deserializeAws_restJson1NetworkInterface(data.networkInterface, context);
  }
  if (data.outputLocation !== undefined && data.outputLocation !== null) {
    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
  }
  if (data.robotApplications !== undefined && data.robotApplications !== null) {
    contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(data.robotApplications, context);
  }
  if (data.simulationApplications !== undefined && data.simulationApplications !== null) {
    contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(
      data.simulationApplications,
      context
    );
  }
  if (data.simulationTimeMillis !== undefined && data.simulationTimeMillis !== null) {
    contents.simulationTimeMillis = data.simulationTimeMillis;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
    contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(data.vpcConfig, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSimulationJobBatchCommandError(output, context);
  }
  const contents: DescribeSimulationJobBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    batchPolicy: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    createdRequests: undefined,
    failedRequests: undefined,
    failureCode: undefined,
    failureReason: undefined,
    lastUpdatedAt: undefined,
    pendingRequests: undefined,
    status: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.batchPolicy !== undefined && data.batchPolicy !== null) {
    contents.batchPolicy = deserializeAws_restJson1BatchPolicy(data.batchPolicy, context);
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.createdRequests !== undefined && data.createdRequests !== null) {
    contents.createdRequests = deserializeAws_restJson1SimulationJobSummaries(data.createdRequests, context);
  }
  if (data.failedRequests !== undefined && data.failedRequests !== null) {
    contents.failedRequests = deserializeAws_restJson1FailedCreateSimulationJobRequests(data.failedRequests, context);
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.pendingRequests !== undefined && data.pendingRequests !== null) {
    contents.pendingRequests = deserializeAws_restJson1CreateSimulationJobRequests(data.pendingRequests, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSimulationJobBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeWorldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorldCommandError(output, context);
  }
  const contents: DescribeWorldCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    createdAt: undefined,
    generationJob: undefined,
    tags: undefined,
    template: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.generationJob !== undefined && data.generationJob !== null) {
    contents.generationJob = data.generationJob;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.template !== undefined && data.template !== null) {
    contents.template = data.template;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeWorldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorldExportJobCommandError(output, context);
  }
  const contents: DescribeWorldExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    failureCode: undefined,
    failureReason: undefined,
    iamRole: undefined,
    outputLocation: undefined,
    status: undefined,
    tags: undefined,
    worlds: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.iamRole !== undefined && data.iamRole !== null) {
    contents.iamRole = data.iamRole;
  }
  if (data.outputLocation !== undefined && data.outputLocation !== null) {
    contents.outputLocation = deserializeAws_restJson1OutputLocation(data.outputLocation, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.worlds !== undefined && data.worlds !== null) {
    contents.worlds = deserializeAws_restJson1Arns(data.worlds, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeWorldExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorldGenerationJobCommandError(output, context);
  }
  const contents: DescribeWorldGenerationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    failureCode: undefined,
    failureReason: undefined,
    finishedWorldsSummary: undefined,
    status: undefined,
    tags: undefined,
    template: undefined,
    worldCount: undefined,
    worldTags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.finishedWorldsSummary !== undefined && data.finishedWorldsSummary !== null) {
    contents.finishedWorldsSummary = deserializeAws_restJson1FinishedWorldsSummary(data.finishedWorldsSummary, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.template !== undefined && data.template !== null) {
    contents.template = data.template;
  }
  if (data.worldCount !== undefined && data.worldCount !== null) {
    contents.worldCount = deserializeAws_restJson1WorldCount(data.worldCount, context);
  }
  if (data.worldTags !== undefined && data.worldTags !== null) {
    contents.worldTags = deserializeAws_restJson1TagMap(data.worldTags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeWorldGenerationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldGenerationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeWorldTemplateCommandError(output, context);
  }
  const contents: DescribeWorldTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeWorldTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetWorldTemplateBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorldTemplateBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorldTemplateBodyCommandError(output, context);
  }
  const contents: GetWorldTemplateBodyCommandOutput = {
    $metadata: deserializeMetadata(output),
    templateBody: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.templateBody !== undefined && data.templateBody !== null) {
    contents.templateBody = data.templateBody;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorldTemplateBodyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorldTemplateBodyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListDeploymentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeploymentJobsCommandError(output, context);
  }
  const contents: ListDeploymentJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    deploymentJobs: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.deploymentJobs !== undefined && data.deploymentJobs !== null) {
    contents.deploymentJobs = deserializeAws_restJson1DeploymentJobs(data.deploymentJobs, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDeploymentJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFleetsCommandError(output, context);
  }
  const contents: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    fleetDetails: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.fleetDetails !== undefined && data.fleetDetails !== null) {
    contents.fleetDetails = deserializeAws_restJson1Fleets(data.fleetDetails, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFleetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListRobotApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRobotApplicationsCommandError(output, context);
  }
  const contents: ListRobotApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    robotApplicationSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.robotApplicationSummaries !== undefined && data.robotApplicationSummaries !== null) {
    contents.robotApplicationSummaries = deserializeAws_restJson1RobotApplicationSummaries(
      data.robotApplicationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRobotApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListRobotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRobotsCommandError(output, context);
  }
  const contents: ListRobotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    robots: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.robots !== undefined && data.robots !== null) {
    contents.robots = deserializeAws_restJson1Robots(data.robots, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRobotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListSimulationApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSimulationApplicationsCommandError(output, context);
  }
  const contents: ListSimulationApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    simulationApplicationSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.simulationApplicationSummaries !== undefined && data.simulationApplicationSummaries !== null) {
    contents.simulationApplicationSummaries = deserializeAws_restJson1SimulationApplicationSummaries(
      data.simulationApplicationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSimulationApplicationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationApplicationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListSimulationJobBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobBatchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSimulationJobBatchesCommandError(output, context);
  }
  const contents: ListSimulationJobBatchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    simulationJobBatchSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.simulationJobBatchSummaries !== undefined && data.simulationJobBatchSummaries !== null) {
    contents.simulationJobBatchSummaries = deserializeAws_restJson1SimulationJobBatchSummaries(
      data.simulationJobBatchSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSimulationJobBatchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobBatchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListSimulationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSimulationJobsCommandError(output, context);
  }
  const contents: ListSimulationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    simulationJobSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.simulationJobSummaries !== undefined && data.simulationJobSummaries !== null) {
    contents.simulationJobSummaries = deserializeAws_restJson1SimulationJobSummaries(
      data.simulationJobSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSimulationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListWorldExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorldExportJobsCommandError(output, context);
  }
  const contents: ListWorldExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    worldExportJobSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.worldExportJobSummaries !== undefined && data.worldExportJobSummaries !== null) {
    contents.worldExportJobSummaries = deserializeAws_restJson1WorldExportJobSummaries(
      data.worldExportJobSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorldExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListWorldGenerationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldGenerationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorldGenerationJobsCommandError(output, context);
  }
  const contents: ListWorldGenerationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    worldGenerationJobSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.worldGenerationJobSummaries !== undefined && data.worldGenerationJobSummaries !== null) {
    contents.worldGenerationJobSummaries = deserializeAws_restJson1WorldGenerationJobSummaries(
      data.worldGenerationJobSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorldGenerationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldGenerationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListWorldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorldsCommandError(output, context);
  }
  const contents: ListWorldsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    worldSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.worldSummaries !== undefined && data.worldSummaries !== null) {
    contents.worldSummaries = deserializeAws_restJson1WorldSummaries(data.worldSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListWorldTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListWorldTemplatesCommandError(output, context);
  }
  const contents: ListWorldTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    templateSummaries: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.templateSummaries !== undefined && data.templateSummaries !== null) {
    contents.templateSummaries = deserializeAws_restJson1TemplateSummaries(data.templateSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListWorldTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RegisterRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterRobotCommandError(output, context);
  }
  const contents: RegisterRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    fleet: undefined,
    robot: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.fleet !== undefined && data.fleet !== null) {
    contents.fleet = data.fleet;
  }
  if (data.robot !== undefined && data.robot !== null) {
    contents.robot = data.robot;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterRobotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRobotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1RestartSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RestartSimulationJobCommandError(output, context);
  }
  const contents: RestartSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RestartSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1StartSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartSimulationJobBatchCommandError(output, context);
  }
  const contents: StartSimulationJobBatchCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    batchPolicy: undefined,
    clientRequestToken: undefined,
    createdAt: undefined,
    createdRequests: undefined,
    failedRequests: undefined,
    failureCode: undefined,
    failureReason: undefined,
    pendingRequests: undefined,
    status: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.batchPolicy !== undefined && data.batchPolicy !== null) {
    contents.batchPolicy = deserializeAws_restJson1BatchPolicy(data.batchPolicy, context);
  }
  if (data.clientRequestToken !== undefined && data.clientRequestToken !== null) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.createdRequests !== undefined && data.createdRequests !== null) {
    contents.createdRequests = deserializeAws_restJson1SimulationJobSummaries(data.createdRequests, context);
  }
  if (data.failedRequests !== undefined && data.failedRequests !== null) {
    contents.failedRequests = deserializeAws_restJson1FailedCreateSimulationJobRequests(data.failedRequests, context);
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.pendingRequests !== undefined && data.pendingRequests !== null) {
    contents.pendingRequests = deserializeAws_restJson1CreateSimulationJobRequests(data.pendingRequests, context);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartSimulationJobBatchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSimulationJobBatchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1SyncDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SyncDeploymentJobCommandError(output, context);
  }
  const contents: SyncDeploymentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    createdAt: undefined,
    deploymentApplicationConfigs: undefined,
    deploymentConfig: undefined,
    failureCode: undefined,
    failureReason: undefined,
    fleet: undefined,
    status: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.deploymentApplicationConfigs !== undefined && data.deploymentApplicationConfigs !== null) {
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(data.deploymentConfig, context);
  }
  if (data.failureCode !== undefined && data.failureCode !== null) {
    contents.failureCode = data.failureCode;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.fleet !== undefined && data.fleet !== null) {
    contents.fleet = data.fleet;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SyncDeploymentJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncDeploymentJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRobotApplicationCommandError(output, context);
  }
  const contents: UpdateRobotApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    sources: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSimulationApplicationCommandError(output, context);
  }
  const contents: UpdateSimulationApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    renderingEngine: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    sources: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.renderingEngine !== undefined && data.renderingEngine !== null) {
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(data.renderingEngine, context);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (data.robotSoftwareSuite !== undefined && data.robotSoftwareSuite !== null) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(data.robotSoftwareSuite, context);
  }
  if (data.simulationSoftwareSuite !== undefined && data.simulationSoftwareSuite !== null) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1Sources(data.sources, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSimulationApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSimulationApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1UpdateWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateWorldTemplateCommandError(output, context);
  }
  const contents: UpdateWorldTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    arn: undefined,
    createdAt: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (data.lastUpdatedAt !== undefined && data.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(data.lastUpdatedAt * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateWorldTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorldTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1ConcurrentDeploymentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentDeploymentException> => {
  const contents: ConcurrentDeploymentException = {
    name: "ConcurrentDeploymentException",
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

const deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
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

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
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
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1Arns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1BatchPolicy = (input: BatchPolicy, context: __SerdeContext): any => {
  return {
    ...(input.maxConcurrency !== undefined &&
      input.maxConcurrency !== null && { maxConcurrency: input.maxConcurrency }),
    ...(input.timeoutInSeconds !== undefined &&
      input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1Compute = (input: Compute, context: __SerdeContext): any => {
  return {
    ...(input.simulationUnitLimit !== undefined &&
      input.simulationUnitLimit !== null && { simulationUnitLimit: input.simulationUnitLimit }),
  };
};

const serializeAws_restJson1CreateSimulationJobRequests = (
  input: SimulationJobRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SimulationJobRequest(entry, context);
    });
};

const serializeAws_restJson1DataSourceConfig = (input: DataSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Keys !== undefined &&
      input.s3Keys !== null && { s3Keys: serializeAws_restJson1S3Keys(input.s3Keys, context) }),
  };
};

const serializeAws_restJson1DataSourceConfigs = (input: DataSourceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DataSourceConfig(entry, context);
    });
};

const serializeAws_restJson1DeploymentApplicationConfig = (
  input: DeploymentApplicationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.applicationVersion !== undefined &&
      input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig !== undefined &&
      input.launchConfig !== null && {
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
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DeploymentApplicationConfig(entry, context);
    });
};

const serializeAws_restJson1DeploymentConfig = (input: DeploymentConfig, context: __SerdeContext): any => {
  return {
    ...(input.concurrentDeploymentPercentage !== undefined &&
      input.concurrentDeploymentPercentage !== null && {
        concurrentDeploymentPercentage: input.concurrentDeploymentPercentage,
      }),
    ...(input.downloadConditionFile !== undefined &&
      input.downloadConditionFile !== null && {
        downloadConditionFile: serializeAws_restJson1S3Object(input.downloadConditionFile, context),
      }),
    ...(input.failureThresholdPercentage !== undefined &&
      input.failureThresholdPercentage !== null && { failureThresholdPercentage: input.failureThresholdPercentage }),
    ...(input.robotDeploymentTimeoutInSeconds !== undefined &&
      input.robotDeploymentTimeoutInSeconds !== null && {
        robotDeploymentTimeoutInSeconds: input.robotDeploymentTimeoutInSeconds,
      }),
  };
};

const serializeAws_restJson1DeploymentLaunchConfig = (input: DeploymentLaunchConfig, context: __SerdeContext): any => {
  return {
    ...(input.environmentVariables !== undefined &&
      input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariableMap(input.environmentVariables, context),
      }),
    ...(input.launchFile !== undefined && input.launchFile !== null && { launchFile: input.launchFile }),
    ...(input.packageName !== undefined && input.packageName !== null && { packageName: input.packageName }),
    ...(input.postLaunchFile !== undefined &&
      input.postLaunchFile !== null && { postLaunchFile: input.postLaunchFile }),
    ...(input.preLaunchFile !== undefined && input.preLaunchFile !== null && { preLaunchFile: input.preLaunchFile }),
  };
};

const serializeAws_restJson1EnvironmentVariableMap = (
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

const serializeAws_restJson1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Filter(entry, context);
    });
};

const serializeAws_restJson1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1LaunchConfig = (input: LaunchConfig, context: __SerdeContext): any => {
  return {
    ...(input.environmentVariables !== undefined &&
      input.environmentVariables !== null && {
        environmentVariables: serializeAws_restJson1EnvironmentVariableMap(input.environmentVariables, context),
      }),
    ...(input.launchFile !== undefined && input.launchFile !== null && { launchFile: input.launchFile }),
    ...(input.packageName !== undefined && input.packageName !== null && { packageName: input.packageName }),
    ...(input.portForwardingConfig !== undefined &&
      input.portForwardingConfig !== null && {
        portForwardingConfig: serializeAws_restJson1PortForwardingConfig(input.portForwardingConfig, context),
      }),
    ...(input.streamUI !== undefined && input.streamUI !== null && { streamUI: input.streamUI }),
  };
};

const serializeAws_restJson1LoggingConfig = (input: LoggingConfig, context: __SerdeContext): any => {
  return {
    ...(input.recordAllRosTopics !== undefined &&
      input.recordAllRosTopics !== null && { recordAllRosTopics: input.recordAllRosTopics }),
  };
};

const serializeAws_restJson1OutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Prefix !== undefined && input.s3Prefix !== null && { s3Prefix: input.s3Prefix }),
  };
};

const serializeAws_restJson1PortForwardingConfig = (input: PortForwardingConfig, context: __SerdeContext): any => {
  return {
    ...(input.portMappings !== undefined &&
      input.portMappings !== null && {
        portMappings: serializeAws_restJson1PortMappingList(input.portMappings, context),
      }),
  };
};

const serializeAws_restJson1PortMapping = (input: PortMapping, context: __SerdeContext): any => {
  return {
    ...(input.applicationPort !== undefined &&
      input.applicationPort !== null && { applicationPort: input.applicationPort }),
    ...(input.enableOnPublicIp !== undefined &&
      input.enableOnPublicIp !== null && { enableOnPublicIp: input.enableOnPublicIp }),
    ...(input.jobPort !== undefined && input.jobPort !== null && { jobPort: input.jobPort }),
  };
};

const serializeAws_restJson1PortMappingList = (input: PortMapping[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PortMapping(entry, context);
    });
};

const serializeAws_restJson1RenderingEngine = (input: RenderingEngine, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_restJson1RobotApplicationConfig = (input: RobotApplicationConfig, context: __SerdeContext): any => {
  return {
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.applicationVersion !== undefined &&
      input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig !== undefined &&
      input.launchConfig !== null && { launchConfig: serializeAws_restJson1LaunchConfig(input.launchConfig, context) }),
  };
};

const serializeAws_restJson1RobotApplicationConfigs = (
  input: RobotApplicationConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RobotApplicationConfig(entry, context);
    });
};

const serializeAws_restJson1RobotSoftwareSuite = (input: RobotSoftwareSuite, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_restJson1S3Keys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1S3Object = (input: S3Object, context: __SerdeContext): any => {
  return {
    ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
    ...(input.etag !== undefined && input.etag !== null && { etag: input.etag }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
  };
};

const serializeAws_restJson1SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1SimulationApplicationConfig = (
  input: SimulationApplicationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.application !== undefined && input.application !== null && { application: input.application }),
    ...(input.applicationVersion !== undefined &&
      input.applicationVersion !== null && { applicationVersion: input.applicationVersion }),
    ...(input.launchConfig !== undefined &&
      input.launchConfig !== null && { launchConfig: serializeAws_restJson1LaunchConfig(input.launchConfig, context) }),
    ...(input.worldConfigs !== undefined &&
      input.worldConfigs !== null && { worldConfigs: serializeAws_restJson1WorldConfigs(input.worldConfigs, context) }),
  };
};

const serializeAws_restJson1SimulationApplicationConfigs = (
  input: SimulationApplicationConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SimulationApplicationConfig(entry, context);
    });
};

const serializeAws_restJson1SimulationJobRequest = (input: SimulationJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.compute !== undefined &&
      input.compute !== null && { compute: serializeAws_restJson1Compute(input.compute, context) }),
    ...(input.dataSources !== undefined &&
      input.dataSources !== null && {
        dataSources: serializeAws_restJson1DataSourceConfigs(input.dataSources, context),
      }),
    ...(input.failureBehavior !== undefined &&
      input.failureBehavior !== null && { failureBehavior: input.failureBehavior }),
    ...(input.iamRole !== undefined && input.iamRole !== null && { iamRole: input.iamRole }),
    ...(input.loggingConfig !== undefined &&
      input.loggingConfig !== null && {
        loggingConfig: serializeAws_restJson1LoggingConfig(input.loggingConfig, context),
      }),
    ...(input.maxJobDurationInSeconds !== undefined &&
      input.maxJobDurationInSeconds !== null && { maxJobDurationInSeconds: input.maxJobDurationInSeconds }),
    ...(input.outputLocation !== undefined &&
      input.outputLocation !== null && {
        outputLocation: serializeAws_restJson1OutputLocation(input.outputLocation, context),
      }),
    ...(input.robotApplications !== undefined &&
      input.robotApplications !== null && {
        robotApplications: serializeAws_restJson1RobotApplicationConfigs(input.robotApplications, context),
      }),
    ...(input.simulationApplications !== undefined &&
      input.simulationApplications !== null && {
        simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(
          input.simulationApplications,
          context
        ),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.useDefaultApplications !== undefined &&
      input.useDefaultApplications !== null && { useDefaultApplications: input.useDefaultApplications }),
    ...(input.vpcConfig !== undefined &&
      input.vpcConfig !== null && { vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context) }),
  };
};

const serializeAws_restJson1SimulationSoftwareSuite = (
  input: SimulationSoftwareSuite,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.version !== undefined && input.version !== null && { version: input.version }),
  };
};

const serializeAws_restJson1SourceConfig = (input: SourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.architecture !== undefined && input.architecture !== null && { architecture: input.architecture }),
    ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Key !== undefined && input.s3Key !== null && { s3Key: input.s3Key }),
  };
};

const serializeAws_restJson1SourceConfigs = (input: SourceConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SourceConfig(entry, context);
    });
};

const serializeAws_restJson1Subnets = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
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

const serializeAws_restJson1TemplateLocation = (input: TemplateLocation, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket !== undefined && input.s3Bucket !== null && { s3Bucket: input.s3Bucket }),
    ...(input.s3Key !== undefined && input.s3Key !== null && { s3Key: input.s3Key }),
  };
};

const serializeAws_restJson1VPCConfig = (input: VPCConfig, context: __SerdeContext): any => {
  return {
    ...(input.assignPublicIp !== undefined &&
      input.assignPublicIp !== null && { assignPublicIp: input.assignPublicIp }),
    ...(input.securityGroups !== undefined &&
      input.securityGroups !== null && {
        securityGroups: serializeAws_restJson1SecurityGroups(input.securityGroups, context),
      }),
    ...(input.subnets !== undefined &&
      input.subnets !== null && { subnets: serializeAws_restJson1Subnets(input.subnets, context) }),
  };
};

const serializeAws_restJson1WorldConfig = (input: WorldConfig, context: __SerdeContext): any => {
  return {
    ...(input.world !== undefined && input.world !== null && { world: input.world }),
  };
};

const serializeAws_restJson1WorldConfigs = (input: WorldConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1WorldConfig(entry, context);
    });
};

const serializeAws_restJson1WorldCount = (input: WorldCount, context: __SerdeContext): any => {
  return {
    ...(input.floorplanCount !== undefined &&
      input.floorplanCount !== null && { floorplanCount: input.floorplanCount }),
    ...(input.interiorCountPerFloorplan !== undefined &&
      input.interiorCountPerFloorplan !== null && { interiorCountPerFloorplan: input.interiorCountPerFloorplan }),
  };
};

const deserializeAws_restJson1Arns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1BatchPolicy = (output: any, context: __SerdeContext): BatchPolicy => {
  return {
    maxConcurrency:
      output.maxConcurrency !== undefined && output.maxConcurrency !== null ? output.maxConcurrency : undefined,
    timeoutInSeconds:
      output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
  } as any;
};

const deserializeAws_restJson1Compute = (output: any, context: __SerdeContext): Compute => {
  return {
    simulationUnitLimit:
      output.simulationUnitLimit !== undefined && output.simulationUnitLimit !== null
        ? output.simulationUnitLimit
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComputeResponse = (output: any, context: __SerdeContext): ComputeResponse => {
  return {
    simulationUnitLimit:
      output.simulationUnitLimit !== undefined && output.simulationUnitLimit !== null
        ? output.simulationUnitLimit
        : undefined,
  } as any;
};

const deserializeAws_restJson1CreateSimulationJobRequests = (
  output: any,
  context: __SerdeContext
): SimulationJobRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationJobRequest(entry, context);
    });
};

const deserializeAws_restJson1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
    s3Keys:
      output.s3Keys !== undefined && output.s3Keys !== null
        ? deserializeAws_restJson1S3KeyOutputs(output.s3Keys, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSourceConfig = (output: any, context: __SerdeContext): DataSourceConfig => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
    s3Keys:
      output.s3Keys !== undefined && output.s3Keys !== null
        ? deserializeAws_restJson1S3Keys(output.s3Keys, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataSourceConfigs = (output: any, context: __SerdeContext): DataSourceConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSourceConfig(entry, context);
    });
};

const deserializeAws_restJson1DataSourceNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1DataSources = (output: any, context: __SerdeContext): DataSource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataSource(entry, context);
    });
};

const deserializeAws_restJson1DeploymentApplicationConfig = (
  output: any,
  context: __SerdeContext
): DeploymentApplicationConfig => {
  return {
    application: output.application !== undefined && output.application !== null ? output.application : undefined,
    applicationVersion:
      output.applicationVersion !== undefined && output.applicationVersion !== null
        ? output.applicationVersion
        : undefined,
    launchConfig:
      output.launchConfig !== undefined && output.launchConfig !== null
        ? deserializeAws_restJson1DeploymentLaunchConfig(output.launchConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentApplicationConfigs = (
  output: any,
  context: __SerdeContext
): DeploymentApplicationConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentApplicationConfig(entry, context);
    });
};

const deserializeAws_restJson1DeploymentConfig = (output: any, context: __SerdeContext): DeploymentConfig => {
  return {
    concurrentDeploymentPercentage:
      output.concurrentDeploymentPercentage !== undefined && output.concurrentDeploymentPercentage !== null
        ? output.concurrentDeploymentPercentage
        : undefined,
    downloadConditionFile:
      output.downloadConditionFile !== undefined && output.downloadConditionFile !== null
        ? deserializeAws_restJson1S3Object(output.downloadConditionFile, context)
        : undefined,
    failureThresholdPercentage:
      output.failureThresholdPercentage !== undefined && output.failureThresholdPercentage !== null
        ? output.failureThresholdPercentage
        : undefined,
    robotDeploymentTimeoutInSeconds:
      output.robotDeploymentTimeoutInSeconds !== undefined && output.robotDeploymentTimeoutInSeconds !== null
        ? output.robotDeploymentTimeoutInSeconds
        : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentJob = (output: any, context: __SerdeContext): DeploymentJob => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    deploymentApplicationConfigs:
      output.deploymentApplicationConfigs !== undefined && output.deploymentApplicationConfigs !== null
        ? deserializeAws_restJson1DeploymentApplicationConfigs(output.deploymentApplicationConfigs, context)
        : undefined,
    deploymentConfig:
      output.deploymentConfig !== undefined && output.deploymentConfig !== null
        ? deserializeAws_restJson1DeploymentConfig(output.deploymentConfig, context)
        : undefined,
    failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
    fleet: output.fleet !== undefined && output.fleet !== null ? output.fleet : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentJobs = (output: any, context: __SerdeContext): DeploymentJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeploymentJob(entry, context);
    });
};

const deserializeAws_restJson1DeploymentLaunchConfig = (
  output: any,
  context: __SerdeContext
): DeploymentLaunchConfig => {
  return {
    environmentVariables:
      output.environmentVariables !== undefined && output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariableMap(output.environmentVariables, context)
        : undefined,
    launchFile: output.launchFile !== undefined && output.launchFile !== null ? output.launchFile : undefined,
    packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
    postLaunchFile:
      output.postLaunchFile !== undefined && output.postLaunchFile !== null ? output.postLaunchFile : undefined,
    preLaunchFile:
      output.preLaunchFile !== undefined && output.preLaunchFile !== null ? output.preLaunchFile : undefined,
  } as any;
};

const deserializeAws_restJson1EnvironmentVariableMap = (
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

const deserializeAws_restJson1FailedCreateSimulationJobRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateSimulationJobRequest => {
  return {
    failedAt:
      output.failedAt !== undefined && output.failedAt !== null
        ? new Date(Math.round(output.failedAt * 1000))
        : undefined,
    failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
    request:
      output.request !== undefined && output.request !== null
        ? deserializeAws_restJson1SimulationJobRequest(output.request, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FailedCreateSimulationJobRequests = (
  output: any,
  context: __SerdeContext
): FailedCreateSimulationJobRequest[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedCreateSimulationJobRequest(entry, context);
    });
};

const deserializeAws_restJson1FailureSummary = (output: any, context: __SerdeContext): FailureSummary => {
  return {
    failures:
      output.failures !== undefined && output.failures !== null
        ? deserializeAws_restJson1WorldFailures(output.failures, context)
        : undefined,
    totalFailureCount:
      output.totalFailureCount !== undefined && output.totalFailureCount !== null
        ? output.totalFailureCount
        : undefined,
  } as any;
};

const deserializeAws_restJson1FinishedWorldsSummary = (output: any, context: __SerdeContext): FinishedWorldsSummary => {
  return {
    failureSummary:
      output.failureSummary !== undefined && output.failureSummary !== null
        ? deserializeAws_restJson1FailureSummary(output.failureSummary, context)
        : undefined,
    finishedCount:
      output.finishedCount !== undefined && output.finishedCount !== null ? output.finishedCount : undefined,
    succeededWorlds:
      output.succeededWorlds !== undefined && output.succeededWorlds !== null
        ? deserializeAws_restJson1Arns(output.succeededWorlds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Fleet = (output: any, context: __SerdeContext): Fleet => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastDeploymentJob:
      output.lastDeploymentJob !== undefined && output.lastDeploymentJob !== null
        ? output.lastDeploymentJob
        : undefined,
    lastDeploymentStatus:
      output.lastDeploymentStatus !== undefined && output.lastDeploymentStatus !== null
        ? output.lastDeploymentStatus
        : undefined,
    lastDeploymentTime:
      output.lastDeploymentTime !== undefined && output.lastDeploymentTime !== null
        ? new Date(Math.round(output.lastDeploymentTime * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1Fleets = (output: any, context: __SerdeContext): Fleet[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Fleet(entry, context);
    });
};

const deserializeAws_restJson1LaunchConfig = (output: any, context: __SerdeContext): LaunchConfig => {
  return {
    environmentVariables:
      output.environmentVariables !== undefined && output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariableMap(output.environmentVariables, context)
        : undefined,
    launchFile: output.launchFile !== undefined && output.launchFile !== null ? output.launchFile : undefined,
    packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
    portForwardingConfig:
      output.portForwardingConfig !== undefined && output.portForwardingConfig !== null
        ? deserializeAws_restJson1PortForwardingConfig(output.portForwardingConfig, context)
        : undefined,
    streamUI: output.streamUI !== undefined && output.streamUI !== null ? output.streamUI : undefined,
  } as any;
};

const deserializeAws_restJson1LoggingConfig = (output: any, context: __SerdeContext): LoggingConfig => {
  return {
    recordAllRosTopics:
      output.recordAllRosTopics !== undefined && output.recordAllRosTopics !== null
        ? output.recordAllRosTopics
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (output: any, context: __SerdeContext): NetworkInterface => {
  return {
    networkInterfaceId:
      output.networkInterfaceId !== undefined && output.networkInterfaceId !== null
        ? output.networkInterfaceId
        : undefined,
    privateIpAddress:
      output.privateIpAddress !== undefined && output.privateIpAddress !== null ? output.privateIpAddress : undefined,
    publicIpAddress:
      output.publicIpAddress !== undefined && output.publicIpAddress !== null ? output.publicIpAddress : undefined,
  } as any;
};

const deserializeAws_restJson1OutputLocation = (output: any, context: __SerdeContext): OutputLocation => {
  return {
    s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
    s3Prefix: output.s3Prefix !== undefined && output.s3Prefix !== null ? output.s3Prefix : undefined,
  } as any;
};

const deserializeAws_restJson1PortForwardingConfig = (output: any, context: __SerdeContext): PortForwardingConfig => {
  return {
    portMappings:
      output.portMappings !== undefined && output.portMappings !== null
        ? deserializeAws_restJson1PortMappingList(output.portMappings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortMapping = (output: any, context: __SerdeContext): PortMapping => {
  return {
    applicationPort:
      output.applicationPort !== undefined && output.applicationPort !== null ? output.applicationPort : undefined,
    enableOnPublicIp:
      output.enableOnPublicIp !== undefined && output.enableOnPublicIp !== null ? output.enableOnPublicIp : undefined,
    jobPort: output.jobPort !== undefined && output.jobPort !== null ? output.jobPort : undefined,
  } as any;
};

const deserializeAws_restJson1PortMappingList = (output: any, context: __SerdeContext): PortMapping[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortMapping(entry, context);
    });
};

const deserializeAws_restJson1ProgressDetail = (output: any, context: __SerdeContext): ProgressDetail => {
  return {
    currentProgress:
      output.currentProgress !== undefined && output.currentProgress !== null ? output.currentProgress : undefined,
    estimatedTimeRemainingSeconds:
      output.estimatedTimeRemainingSeconds !== undefined && output.estimatedTimeRemainingSeconds !== null
        ? output.estimatedTimeRemainingSeconds
        : undefined,
    percentDone: output.percentDone !== undefined && output.percentDone !== null ? output.percentDone : undefined,
    targetResource:
      output.targetResource !== undefined && output.targetResource !== null ? output.targetResource : undefined,
  } as any;
};

const deserializeAws_restJson1RenderingEngine = (output: any, context: __SerdeContext): RenderingEngine => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1Robot = (output: any, context: __SerdeContext): Robot => {
  return {
    architecture: output.architecture !== undefined && output.architecture !== null ? output.architecture : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    fleetArn: output.fleetArn !== undefined && output.fleetArn !== null ? output.fleetArn : undefined,
    greenGrassGroupId:
      output.greenGrassGroupId !== undefined && output.greenGrassGroupId !== null
        ? output.greenGrassGroupId
        : undefined,
    lastDeploymentJob:
      output.lastDeploymentJob !== undefined && output.lastDeploymentJob !== null
        ? output.lastDeploymentJob
        : undefined,
    lastDeploymentTime:
      output.lastDeploymentTime !== undefined && output.lastDeploymentTime !== null
        ? new Date(Math.round(output.lastDeploymentTime * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1RobotApplicationConfig = (
  output: any,
  context: __SerdeContext
): RobotApplicationConfig => {
  return {
    application: output.application !== undefined && output.application !== null ? output.application : undefined,
    applicationVersion:
      output.applicationVersion !== undefined && output.applicationVersion !== null
        ? output.applicationVersion
        : undefined,
    launchConfig:
      output.launchConfig !== undefined && output.launchConfig !== null
        ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RobotApplicationConfigs = (
  output: any,
  context: __SerdeContext
): RobotApplicationConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RobotApplicationConfig(entry, context);
    });
};

const deserializeAws_restJson1RobotApplicationNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1RobotApplicationSummaries = (
  output: any,
  context: __SerdeContext
): RobotApplicationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RobotApplicationSummary(entry, context);
    });
};

const deserializeAws_restJson1RobotApplicationSummary = (
  output: any,
  context: __SerdeContext
): RobotApplicationSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    robotSoftwareSuite:
      output.robotSoftwareSuite !== undefined && output.robotSoftwareSuite !== null
        ? deserializeAws_restJson1RobotSoftwareSuite(output.robotSoftwareSuite, context)
        : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1RobotDeployment = (output: any, context: __SerdeContext): RobotDeployment => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    deploymentFinishTime:
      output.deploymentFinishTime !== undefined && output.deploymentFinishTime !== null
        ? new Date(Math.round(output.deploymentFinishTime * 1000))
        : undefined,
    deploymentStartTime:
      output.deploymentStartTime !== undefined && output.deploymentStartTime !== null
        ? new Date(Math.round(output.deploymentStartTime * 1000))
        : undefined,
    failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
    progressDetail:
      output.progressDetail !== undefined && output.progressDetail !== null
        ? deserializeAws_restJson1ProgressDetail(output.progressDetail, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1RobotDeploymentSummary = (output: any, context: __SerdeContext): RobotDeployment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RobotDeployment(entry, context);
    });
};

const deserializeAws_restJson1Robots = (output: any, context: __SerdeContext): Robot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Robot(entry, context);
    });
};

const deserializeAws_restJson1RobotSoftwareSuite = (output: any, context: __SerdeContext): RobotSoftwareSuite => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1S3KeyOutput = (output: any, context: __SerdeContext): S3KeyOutput => {
  return {
    etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
    s3Key: output.s3Key !== undefined && output.s3Key !== null ? output.s3Key : undefined,
  } as any;
};

const deserializeAws_restJson1S3KeyOutputs = (output: any, context: __SerdeContext): S3KeyOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1S3KeyOutput(entry, context);
    });
};

const deserializeAws_restJson1S3Keys = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1S3Object = (output: any, context: __SerdeContext): S3Object => {
  return {
    bucket: output.bucket !== undefined && output.bucket !== null ? output.bucket : undefined,
    etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1SimulationApplicationConfig = (
  output: any,
  context: __SerdeContext
): SimulationApplicationConfig => {
  return {
    application: output.application !== undefined && output.application !== null ? output.application : undefined,
    applicationVersion:
      output.applicationVersion !== undefined && output.applicationVersion !== null
        ? output.applicationVersion
        : undefined,
    launchConfig:
      output.launchConfig !== undefined && output.launchConfig !== null
        ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context)
        : undefined,
    worldConfigs:
      output.worldConfigs !== undefined && output.worldConfigs !== null
        ? deserializeAws_restJson1WorldConfigs(output.worldConfigs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationApplicationConfigs = (
  output: any,
  context: __SerdeContext
): SimulationApplicationConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationApplicationConfig(entry, context);
    });
};

const deserializeAws_restJson1SimulationApplicationNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1SimulationApplicationSummaries = (
  output: any,
  context: __SerdeContext
): SimulationApplicationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationApplicationSummary(entry, context);
    });
};

const deserializeAws_restJson1SimulationApplicationSummary = (
  output: any,
  context: __SerdeContext
): SimulationApplicationSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    robotSoftwareSuite:
      output.robotSoftwareSuite !== undefined && output.robotSoftwareSuite !== null
        ? deserializeAws_restJson1RobotSoftwareSuite(output.robotSoftwareSuite, context)
        : undefined,
    simulationSoftwareSuite:
      output.simulationSoftwareSuite !== undefined && output.simulationSoftwareSuite !== null
        ? deserializeAws_restJson1SimulationSoftwareSuite(output.simulationSoftwareSuite, context)
        : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationJob = (output: any, context: __SerdeContext): SimulationJob => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    clientRequestToken:
      output.clientRequestToken !== undefined && output.clientRequestToken !== null
        ? output.clientRequestToken
        : undefined,
    compute:
      output.compute !== undefined && output.compute !== null
        ? deserializeAws_restJson1ComputeResponse(output.compute, context)
        : undefined,
    dataSources:
      output.dataSources !== undefined && output.dataSources !== null
        ? deserializeAws_restJson1DataSources(output.dataSources, context)
        : undefined,
    failureBehavior:
      output.failureBehavior !== undefined && output.failureBehavior !== null ? output.failureBehavior : undefined,
    failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
    iamRole: output.iamRole !== undefined && output.iamRole !== null ? output.iamRole : undefined,
    lastStartedAt:
      output.lastStartedAt !== undefined && output.lastStartedAt !== null
        ? new Date(Math.round(output.lastStartedAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    loggingConfig:
      output.loggingConfig !== undefined && output.loggingConfig !== null
        ? deserializeAws_restJson1LoggingConfig(output.loggingConfig, context)
        : undefined,
    maxJobDurationInSeconds:
      output.maxJobDurationInSeconds !== undefined && output.maxJobDurationInSeconds !== null
        ? output.maxJobDurationInSeconds
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    networkInterface:
      output.networkInterface !== undefined && output.networkInterface !== null
        ? deserializeAws_restJson1NetworkInterface(output.networkInterface, context)
        : undefined,
    outputLocation:
      output.outputLocation !== undefined && output.outputLocation !== null
        ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
        : undefined,
    robotApplications:
      output.robotApplications !== undefined && output.robotApplications !== null
        ? deserializeAws_restJson1RobotApplicationConfigs(output.robotApplications, context)
        : undefined,
    simulationApplications:
      output.simulationApplications !== undefined && output.simulationApplications !== null
        ? deserializeAws_restJson1SimulationApplicationConfigs(output.simulationApplications, context)
        : undefined,
    simulationTimeMillis:
      output.simulationTimeMillis !== undefined && output.simulationTimeMillis !== null
        ? output.simulationTimeMillis
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    vpcConfig:
      output.vpcConfig !== undefined && output.vpcConfig !== null
        ? deserializeAws_restJson1VPCConfigResponse(output.vpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationJobBatchSummaries = (
  output: any,
  context: __SerdeContext
): SimulationJobBatchSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationJobBatchSummary(entry, context);
    });
};

const deserializeAws_restJson1SimulationJobBatchSummary = (
  output: any,
  context: __SerdeContext
): SimulationJobBatchSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    createdRequestCount:
      output.createdRequestCount !== undefined && output.createdRequestCount !== null
        ? output.createdRequestCount
        : undefined,
    failedRequestCount:
      output.failedRequestCount !== undefined && output.failedRequestCount !== null
        ? output.failedRequestCount
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    pendingRequestCount:
      output.pendingRequestCount !== undefined && output.pendingRequestCount !== null
        ? output.pendingRequestCount
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationJobRequest = (output: any, context: __SerdeContext): SimulationJobRequest => {
  return {
    compute:
      output.compute !== undefined && output.compute !== null
        ? deserializeAws_restJson1Compute(output.compute, context)
        : undefined,
    dataSources:
      output.dataSources !== undefined && output.dataSources !== null
        ? deserializeAws_restJson1DataSourceConfigs(output.dataSources, context)
        : undefined,
    failureBehavior:
      output.failureBehavior !== undefined && output.failureBehavior !== null ? output.failureBehavior : undefined,
    iamRole: output.iamRole !== undefined && output.iamRole !== null ? output.iamRole : undefined,
    loggingConfig:
      output.loggingConfig !== undefined && output.loggingConfig !== null
        ? deserializeAws_restJson1LoggingConfig(output.loggingConfig, context)
        : undefined,
    maxJobDurationInSeconds:
      output.maxJobDurationInSeconds !== undefined && output.maxJobDurationInSeconds !== null
        ? output.maxJobDurationInSeconds
        : undefined,
    outputLocation:
      output.outputLocation !== undefined && output.outputLocation !== null
        ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
        : undefined,
    robotApplications:
      output.robotApplications !== undefined && output.robotApplications !== null
        ? deserializeAws_restJson1RobotApplicationConfigs(output.robotApplications, context)
        : undefined,
    simulationApplications:
      output.simulationApplications !== undefined && output.simulationApplications !== null
        ? deserializeAws_restJson1SimulationApplicationConfigs(output.simulationApplications, context)
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    useDefaultApplications:
      output.useDefaultApplications !== undefined && output.useDefaultApplications !== null
        ? output.useDefaultApplications
        : undefined,
    vpcConfig:
      output.vpcConfig !== undefined && output.vpcConfig !== null
        ? deserializeAws_restJson1VPCConfig(output.vpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationJobs = (output: any, context: __SerdeContext): SimulationJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationJob(entry, context);
    });
};

const deserializeAws_restJson1SimulationJobSummaries = (
  output: any,
  context: __SerdeContext
): SimulationJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SimulationJobSummary(entry, context);
    });
};

const deserializeAws_restJson1SimulationJobSummary = (output: any, context: __SerdeContext): SimulationJobSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    dataSourceNames:
      output.dataSourceNames !== undefined && output.dataSourceNames !== null
        ? deserializeAws_restJson1DataSourceNames(output.dataSourceNames, context)
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    robotApplicationNames:
      output.robotApplicationNames !== undefined && output.robotApplicationNames !== null
        ? deserializeAws_restJson1RobotApplicationNames(output.robotApplicationNames, context)
        : undefined,
    simulationApplicationNames:
      output.simulationApplicationNames !== undefined && output.simulationApplicationNames !== null
        ? deserializeAws_restJson1SimulationApplicationNames(output.simulationApplicationNames, context)
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1SimulationSoftwareSuite = (
  output: any,
  context: __SerdeContext
): SimulationSoftwareSuite => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1Source = (output: any, context: __SerdeContext): Source => {
  return {
    architecture: output.architecture !== undefined && output.architecture !== null ? output.architecture : undefined,
    etag: output.etag !== undefined && output.etag !== null ? output.etag : undefined,
    s3Bucket: output.s3Bucket !== undefined && output.s3Bucket !== null ? output.s3Bucket : undefined,
    s3Key: output.s3Key !== undefined && output.s3Key !== null ? output.s3Key : undefined,
  } as any;
};

const deserializeAws_restJson1Sources = (output: any, context: __SerdeContext): Source[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Source(entry, context);
    });
};

const deserializeAws_restJson1Subnets = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
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

const deserializeAws_restJson1TemplateSummaries = (output: any, context: __SerdeContext): TemplateSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TemplateSummary(entry, context);
    });
};

const deserializeAws_restJson1TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1VPCConfig = (output: any, context: __SerdeContext): VPCConfig => {
  return {
    assignPublicIp:
      output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
    securityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1Subnets(output.subnets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VPCConfigResponse = (output: any, context: __SerdeContext): VPCConfigResponse => {
  return {
    assignPublicIp:
      output.assignPublicIp !== undefined && output.assignPublicIp !== null ? output.assignPublicIp : undefined,
    securityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1Subnets(output.subnets, context)
        : undefined,
    vpcId: output.vpcId !== undefined && output.vpcId !== null ? output.vpcId : undefined,
  } as any;
};

const deserializeAws_restJson1WorldConfig = (output: any, context: __SerdeContext): WorldConfig => {
  return {
    world: output.world !== undefined && output.world !== null ? output.world : undefined,
  } as any;
};

const deserializeAws_restJson1WorldConfigs = (output: any, context: __SerdeContext): WorldConfig[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldConfig(entry, context);
    });
};

const deserializeAws_restJson1WorldCount = (output: any, context: __SerdeContext): WorldCount => {
  return {
    floorplanCount:
      output.floorplanCount !== undefined && output.floorplanCount !== null ? output.floorplanCount : undefined,
    interiorCountPerFloorplan:
      output.interiorCountPerFloorplan !== undefined && output.interiorCountPerFloorplan !== null
        ? output.interiorCountPerFloorplan
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorldExportJobSummaries = (
  output: any,
  context: __SerdeContext
): WorldExportJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldExportJobSummary(entry, context);
    });
};

const deserializeAws_restJson1WorldExportJobSummary = (output: any, context: __SerdeContext): WorldExportJobSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    worlds:
      output.worlds !== undefined && output.worlds !== null
        ? deserializeAws_restJson1Arns(output.worlds, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorldFailure = (output: any, context: __SerdeContext): WorldFailure => {
  return {
    failureCode: output.failureCode !== undefined && output.failureCode !== null ? output.failureCode : undefined,
    failureCount: output.failureCount !== undefined && output.failureCount !== null ? output.failureCount : undefined,
    sampleFailureReason:
      output.sampleFailureReason !== undefined && output.sampleFailureReason !== null
        ? output.sampleFailureReason
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorldFailures = (output: any, context: __SerdeContext): WorldFailure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldFailure(entry, context);
    });
};

const deserializeAws_restJson1WorldGenerationJobSummaries = (
  output: any,
  context: __SerdeContext
): WorldGenerationJobSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldGenerationJobSummary(entry, context);
    });
};

const deserializeAws_restJson1WorldGenerationJobSummary = (
  output: any,
  context: __SerdeContext
): WorldGenerationJobSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    failedWorldCount:
      output.failedWorldCount !== undefined && output.failedWorldCount !== null ? output.failedWorldCount : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    succeededWorldCount:
      output.succeededWorldCount !== undefined && output.succeededWorldCount !== null
        ? output.succeededWorldCount
        : undefined,
    template: output.template !== undefined && output.template !== null ? output.template : undefined,
    worldCount:
      output.worldCount !== undefined && output.worldCount !== null
        ? deserializeAws_restJson1WorldCount(output.worldCount, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1WorldSummaries = (output: any, context: __SerdeContext): WorldSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorldSummary(entry, context);
    });
};

const deserializeAws_restJson1WorldSummary = (output: any, context: __SerdeContext): WorldSummary => {
  return {
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    generationJob:
      output.generationJob !== undefined && output.generationJob !== null ? output.generationJob : undefined,
    template: output.template !== undefined && output.template !== null ? output.template : undefined,
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
