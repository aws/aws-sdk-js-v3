// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  ConcurrentDeploymentException,
  DataSourceConfig,
  DeploymentApplicationConfig,
  DeploymentConfig,
  DeploymentJob,
  DeploymentLaunchConfig,
  Environment,
  FailedCreateSimulationJobRequest,
  Filter,
  Fleet,
  IdempotentParameterMismatchException,
  InternalServerException,
  InvalidParameterException,
  LaunchConfig,
  LimitExceededException,
  LoggingConfig,
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
  S3Object,
  ServiceUnavailableException,
  SimulationApplicationConfig,
  SimulationApplicationSummary,
  SimulationJob,
  SimulationJobBatchSummary,
  SimulationJobRequest,
  SimulationJobSummary,
  SimulationSoftwareSuite,
  SourceConfig,
  TemplateLocation,
  TemplateSummary,
  ThrottlingException,
  Tool,
  UploadConfiguration,
  VPCConfig,
  WorldConfig,
  WorldCount,
  WorldExportJobSummary,
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
  body = JSON.stringify(
    take(input, {
      worlds: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      jobs: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      batch: [],
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      deploymentApplicationConfigs: (_) => _json(_),
      deploymentConfig: (_) => _json(_),
      fleet: [],
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      name: [],
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      architecture: [],
      greengrassGroupId: [],
      name: [],
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      environment: (_) => _json(_),
      name: [],
      robotSoftwareSuite: (_) => _json(_),
      sources: (_) => _json(_),
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      application: [],
      currentRevisionId: [],
      imageDigest: [],
      s3Etags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      environment: (_) => _json(_),
      name: [],
      renderingEngine: (_) => _json(_),
      robotSoftwareSuite: (_) => _json(_),
      simulationSoftwareSuite: (_) => _json(_),
      sources: (_) => _json(_),
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      application: [],
      currentRevisionId: [],
      imageDigest: [],
      s3Etags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      compute: (_) => _json(_),
      dataSources: (_) => _json(_),
      failureBehavior: [],
      iamRole: [],
      loggingConfig: (_) => _json(_),
      maxJobDurationInSeconds: [],
      outputLocation: (_) => _json(_),
      robotApplications: (_) => _json(_),
      simulationApplications: (_) => _json(_),
      tags: (_) => _json(_),
      vpcConfig: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      iamRole: [],
      outputLocation: (_) => _json(_),
      tags: (_) => _json(_),
      worlds: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      tags: (_) => _json(_),
      template: [],
      worldCount: (_) => _json(_),
      worldTags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [],
      name: [],
      tags: (_) => _json(_),
      templateBody: [],
      templateLocation: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      fleet: [],
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
  body = JSON.stringify(
    take(input, {
      robot: [],
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
  body = JSON.stringify(
    take(input, {
      application: [],
      applicationVersion: [],
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
  body = JSON.stringify(
    take(input, {
      application: [],
      applicationVersion: [],
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
  body = JSON.stringify(
    take(input, {
      template: [],
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
  body = JSON.stringify(
    take(input, {
      fleet: [],
      robot: [],
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      fleet: [],
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
  body = JSON.stringify(
    take(input, {
      robot: [],
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
  body = JSON.stringify(
    take(input, {
      application: [],
      applicationVersion: [],
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
  body = JSON.stringify(
    take(input, {
      application: [],
      applicationVersion: [],
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      batch: [],
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
  body = JSON.stringify(
    take(input, {
      world: [],
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      template: [],
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
  body = JSON.stringify(
    take(input, {
      generationJob: [],
      template: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      versionQualifier: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      versionQualifier: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
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
  body = JSON.stringify(
    take(input, {
      fleet: [],
      robot: [],
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
  body = JSON.stringify(
    take(input, {
      job: [],
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
  body = JSON.stringify(
    take(input, {
      batchPolicy: (_) => _json(_),
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      createSimulationJobRequests: (_) => _json(_),
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      fleet: [],
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      application: [],
      currentRevisionId: [],
      environment: (_) => _json(_),
      robotSoftwareSuite: (_) => _json(_),
      sources: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      application: [],
      currentRevisionId: [],
      environment: (_) => _json(_),
      renderingEngine: (_) => _json(_),
      robotSoftwareSuite: (_) => _json(_),
      simulationSoftwareSuite: (_) => _json(_),
      sources: (_) => _json(_),
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
  body = JSON.stringify(
    take(input, {
      name: [],
      template: [],
      templateBody: [],
      templateLocation: (_) => _json(_),
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
  const doc = take(data, {
    unprocessedWorlds: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    jobs: (_) => de_SimulationJobs(_, context),
    unprocessedJobs: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentApplicationConfigs: _json,
    deploymentConfig: _json,
    failureCode: __expectString,
    failureReason: __expectString,
    fleet: __expectString,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    architecture: __expectString,
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    greengrassGroupId: __expectString,
    name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    environment: _json,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    revisionId: __expectString,
    robotSoftwareSuite: _json,
    sources: _json,
    tags: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    environment: _json,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    revisionId: __expectString,
    robotSoftwareSuite: _json,
    sources: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    environment: _json,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    renderingEngine: _json,
    revisionId: __expectString,
    robotSoftwareSuite: _json,
    simulationSoftwareSuite: _json,
    sources: _json,
    tags: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    environment: _json,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    renderingEngine: _json,
    revisionId: __expectString,
    robotSoftwareSuite: _json,
    simulationSoftwareSuite: _json,
    sources: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    clientRequestToken: __expectString,
    compute: _json,
    dataSources: _json,
    failureBehavior: __expectString,
    failureCode: __expectString,
    iamRole: __expectString,
    lastStartedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    loggingConfig: _json,
    maxJobDurationInSeconds: __expectLong,
    outputLocation: _json,
    robotApplications: _json,
    simulationApplications: _json,
    simulationTimeMillis: __expectLong,
    status: __expectString,
    tags: _json,
    vpcConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    clientRequestToken: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureCode: __expectString,
    iamRole: __expectString,
    outputLocation: _json,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    clientRequestToken: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureCode: __expectString,
    status: __expectString,
    tags: _json,
    template: __expectString,
    worldCount: _json,
    worldTags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    clientRequestToken: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    fleet: __expectString,
    robot: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentApplicationConfigs: _json,
    deploymentConfig: _json,
    failureCode: __expectString,
    failureReason: __expectString,
    fleet: __expectString,
    robotDeploymentSummary: (_) => de_RobotDeploymentSummary(_, context),
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentJob: __expectString,
    lastDeploymentStatus: __expectString,
    lastDeploymentTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    robots: (_) => de_Robots(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    architecture: __expectString,
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fleetArn: __expectString,
    greengrassGroupId: __expectString,
    lastDeploymentJob: __expectString,
    lastDeploymentTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    environment: _json,
    imageDigest: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    revisionId: __expectString,
    robotSoftwareSuite: _json,
    sources: _json,
    tags: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    environment: _json,
    imageDigest: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    renderingEngine: _json,
    revisionId: __expectString,
    robotSoftwareSuite: _json,
    simulationSoftwareSuite: _json,
    sources: _json,
    tags: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    clientRequestToken: __expectString,
    compute: _json,
    dataSources: _json,
    failureBehavior: __expectString,
    failureCode: __expectString,
    failureReason: __expectString,
    iamRole: __expectString,
    lastStartedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    loggingConfig: _json,
    maxJobDurationInSeconds: __expectLong,
    name: __expectString,
    networkInterface: _json,
    outputLocation: _json,
    robotApplications: _json,
    simulationApplications: _json,
    simulationTimeMillis: __expectLong,
    status: __expectString,
    tags: _json,
    vpcConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    batchPolicy: _json,
    clientRequestToken: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdRequests: (_) => de_SimulationJobSummaries(_, context),
    failedRequests: (_) => de_FailedCreateSimulationJobRequests(_, context),
    failureCode: __expectString,
    failureReason: __expectString,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pendingRequests: _json,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    generationJob: __expectString,
    tags: _json,
    template: __expectString,
    worldDescriptionBody: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    clientRequestToken: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureCode: __expectString,
    failureReason: __expectString,
    iamRole: __expectString,
    outputLocation: _json,
    status: __expectString,
    tags: _json,
    worlds: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    clientRequestToken: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureCode: __expectString,
    failureReason: __expectString,
    finishedWorldsSummary: _json,
    status: __expectString,
    tags: _json,
    template: __expectString,
    worldCount: _json,
    worldTags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    clientRequestToken: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    tags: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    templateBody: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    deploymentJobs: (_) => de_DeploymentJobs(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    fleetDetails: (_) => de_Fleets(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    robotApplicationSummaries: (_) => de_RobotApplicationSummaries(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    robots: (_) => de_Robots(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    simulationApplicationSummaries: (_) => de_SimulationApplicationSummaries(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    simulationJobBatchSummaries: (_) => de_SimulationJobBatchSummaries(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    simulationJobSummaries: (_) => de_SimulationJobSummaries(_, context),
  });
  Object.assign(contents, doc);
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
    tags: _json,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    worldExportJobSummaries: (_) => de_WorldExportJobSummaries(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    worldGenerationJobSummaries: (_) => de_WorldGenerationJobSummaries(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    worldSummaries: (_) => de_WorldSummaries(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    templateSummaries: (_) => de_TemplateSummaries(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    fleet: __expectString,
    robot: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    batchPolicy: _json,
    clientRequestToken: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdRequests: (_) => de_SimulationJobSummaries(_, context),
    failedRequests: (_) => de_FailedCreateSimulationJobRequests(_, context),
    failureCode: __expectString,
    failureReason: __expectString,
    pendingRequests: _json,
    status: __expectString,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentApplicationConfigs: _json,
    deploymentConfig: _json,
    failureCode: __expectString,
    failureReason: __expectString,
    fleet: __expectString,
    status: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    environment: _json,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    revisionId: __expectString,
    robotSoftwareSuite: _json,
    sources: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    environment: _json,
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    renderingEngine: _json,
    revisionId: __expectString,
    robotSoftwareSuite: _json,
    simulationSoftwareSuite: _json,
    sources: _json,
    version: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    arn: __expectString,
    createdAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ConcurrentDeploymentExceptionRes
 */
const de_ConcurrentDeploymentExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentDeploymentException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Arns omitted.

// se_BatchPolicy omitted.

// se_CommandList omitted.

// se_Compute omitted.

// se_CreateSimulationJobRequests omitted.

// se_DataSourceConfig omitted.

// se_DataSourceConfigs omitted.

// se_DeploymentApplicationConfig omitted.

// se_DeploymentApplicationConfigs omitted.

// se_DeploymentConfig omitted.

// se_DeploymentLaunchConfig omitted.

// se_Environment omitted.

// se_EnvironmentVariableMap omitted.

// se_Filter omitted.

// se_Filters omitted.

// se_FilterValues omitted.

// se_LaunchConfig omitted.

// se_LoggingConfig omitted.

// se_OutputLocation omitted.

// se_PortForwardingConfig omitted.

// se_PortMapping omitted.

// se_PortMappingList omitted.

// se_RenderingEngine omitted.

// se_RobotApplicationConfig omitted.

// se_RobotApplicationConfigs omitted.

// se_RobotSoftwareSuite omitted.

// se_S3Etags omitted.

// se_S3KeysOrPrefixes omitted.

// se_S3Object omitted.

// se_SecurityGroups omitted.

// se_SimulationApplicationConfig omitted.

// se_SimulationApplicationConfigs omitted.

// se_SimulationJobRequest omitted.

// se_SimulationSoftwareSuite omitted.

// se_SourceConfig omitted.

// se_SourceConfigs omitted.

// se_Subnets omitted.

// se_TagMap omitted.

// se_TemplateLocation omitted.

// se_Tool omitted.

// se_Tools omitted.

// se_UploadConfiguration omitted.

// se_UploadConfigurations omitted.

// se_VPCConfig omitted.

// se_WorldConfig omitted.

// se_WorldConfigs omitted.

// se_WorldCount omitted.

// de_Arns omitted.

// de_BatchPolicy omitted.

// de_CommandList omitted.

// de_Compute omitted.

// de_ComputeResponse omitted.

// de_CreateSimulationJobRequests omitted.

// de_DataSource omitted.

// de_DataSourceConfig omitted.

// de_DataSourceConfigs omitted.

// de_DataSourceNames omitted.

// de_DataSources omitted.

// de_DeploymentApplicationConfig omitted.

// de_DeploymentApplicationConfigs omitted.

// de_DeploymentConfig omitted.

/**
 * deserializeAws_restJson1DeploymentJob
 */
const de_DeploymentJob = (output: any, context: __SerdeContext): DeploymentJob => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentApplicationConfigs: _json,
    deploymentConfig: _json,
    failureCode: __expectString,
    failureReason: __expectString,
    fleet: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeploymentJobs
 */
const de_DeploymentJobs = (output: any, context: __SerdeContext): DeploymentJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentJob(entry, context);
    });
  return retVal;
};

// de_DeploymentLaunchConfig omitted.

// de_Environment omitted.

// de_EnvironmentVariableMap omitted.

/**
 * deserializeAws_restJson1FailedCreateSimulationJobRequest
 */
const de_FailedCreateSimulationJobRequest = (
  output: any,
  context: __SerdeContext
): FailedCreateSimulationJobRequest => {
  return take(output, {
    failedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureCode: __expectString,
    failureReason: __expectString,
    request: _json,
  }) as any;
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
      return de_FailedCreateSimulationJobRequest(entry, context);
    });
  return retVal;
};

// de_FailureSummary omitted.

// de_FinishedWorldsSummary omitted.

/**
 * deserializeAws_restJson1Fleet
 */
const de_Fleet = (output: any, context: __SerdeContext): Fleet => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentJob: __expectString,
    lastDeploymentStatus: __expectString,
    lastDeploymentTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1Fleets
 */
const de_Fleets = (output: any, context: __SerdeContext): Fleet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Fleet(entry, context);
    });
  return retVal;
};

// de_LaunchConfig omitted.

// de_LoggingConfig omitted.

// de_NetworkInterface omitted.

// de_OutputLocation omitted.

// de_PortForwardingConfig omitted.

// de_PortMapping omitted.

// de_PortMappingList omitted.

/**
 * deserializeAws_restJson1ProgressDetail
 */
const de_ProgressDetail = (output: any, context: __SerdeContext): ProgressDetail => {
  return take(output, {
    currentProgress: __expectString,
    estimatedTimeRemainingSeconds: __expectInt32,
    percentDone: __limitedParseFloat32,
    targetResource: __expectString,
  }) as any;
};

// de_RenderingEngine omitted.

/**
 * deserializeAws_restJson1Robot
 */
const de_Robot = (output: any, context: __SerdeContext): Robot => {
  return take(output, {
    architecture: __expectString,
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fleetArn: __expectString,
    greenGrassGroupId: __expectString,
    lastDeploymentJob: __expectString,
    lastDeploymentTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
  }) as any;
};

// de_RobotApplicationConfig omitted.

// de_RobotApplicationConfigs omitted.

// de_RobotApplicationNames omitted.

/**
 * deserializeAws_restJson1RobotApplicationSummaries
 */
const de_RobotApplicationSummaries = (output: any, context: __SerdeContext): RobotApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RobotApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RobotApplicationSummary
 */
const de_RobotApplicationSummary = (output: any, context: __SerdeContext): RobotApplicationSummary => {
  return take(output, {
    arn: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    robotSoftwareSuite: _json,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RobotDeployment
 */
const de_RobotDeployment = (output: any, context: __SerdeContext): RobotDeployment => {
  return take(output, {
    arn: __expectString,
    deploymentFinishTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureCode: __expectString,
    failureReason: __expectString,
    progressDetail: (_: any) => de_ProgressDetail(_, context),
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RobotDeploymentSummary
 */
const de_RobotDeploymentSummary = (output: any, context: __SerdeContext): RobotDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_Robot(entry, context);
    });
  return retVal;
};

// de_RobotSoftwareSuite omitted.

// de_S3KeyOutput omitted.

// de_S3KeyOutputs omitted.

// de_S3KeysOrPrefixes omitted.

// de_S3Object omitted.

// de_SecurityGroups omitted.

// de_SimulationApplicationConfig omitted.

// de_SimulationApplicationConfigs omitted.

// de_SimulationApplicationNames omitted.

/**
 * deserializeAws_restJson1SimulationApplicationSummaries
 */
const de_SimulationApplicationSummaries = (output: any, context: __SerdeContext): SimulationApplicationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SimulationApplicationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimulationApplicationSummary
 */
const de_SimulationApplicationSummary = (output: any, context: __SerdeContext): SimulationApplicationSummary => {
  return take(output, {
    arn: __expectString,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    robotSoftwareSuite: _json,
    simulationSoftwareSuite: _json,
    version: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SimulationJob
 */
const de_SimulationJob = (output: any, context: __SerdeContext): SimulationJob => {
  return take(output, {
    arn: __expectString,
    clientRequestToken: __expectString,
    compute: _json,
    dataSources: _json,
    failureBehavior: __expectString,
    failureCode: __expectString,
    failureReason: __expectString,
    iamRole: __expectString,
    lastStartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    loggingConfig: _json,
    maxJobDurationInSeconds: __expectLong,
    name: __expectString,
    networkInterface: _json,
    outputLocation: _json,
    robotApplications: _json,
    simulationApplications: _json,
    simulationTimeMillis: __expectLong,
    status: __expectString,
    tags: _json,
    vpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SimulationJobBatchSummaries
 */
const de_SimulationJobBatchSummaries = (output: any, context: __SerdeContext): SimulationJobBatchSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SimulationJobBatchSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimulationJobBatchSummary
 */
const de_SimulationJobBatchSummary = (output: any, context: __SerdeContext): SimulationJobBatchSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdRequestCount: __expectInt32,
    failedRequestCount: __expectInt32,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    pendingRequestCount: __expectInt32,
    status: __expectString,
  }) as any;
};

// de_SimulationJobRequest omitted.

/**
 * deserializeAws_restJson1SimulationJobs
 */
const de_SimulationJobs = (output: any, context: __SerdeContext): SimulationJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_SimulationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SimulationJobSummary
 */
const de_SimulationJobSummary = (output: any, context: __SerdeContext): SimulationJobSummary => {
  return take(output, {
    arn: __expectString,
    computeType: __expectString,
    dataSourceNames: _json,
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    robotApplicationNames: _json,
    simulationApplicationNames: _json,
    status: __expectString,
  }) as any;
};

// de_SimulationSoftwareSuite omitted.

// de_Source omitted.

// de_Sources omitted.

// de_Subnets omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TemplateSummaries
 */
const de_TemplateSummaries = (output: any, context: __SerdeContext): TemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TemplateSummary
 */
const de_TemplateSummary = (output: any, context: __SerdeContext): TemplateSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    version: __expectString,
  }) as any;
};

// de_Tool omitted.

// de_Tools omitted.

// de_UploadConfiguration omitted.

// de_UploadConfigurations omitted.

// de_VPCConfig omitted.

// de_VPCConfigResponse omitted.

// de_WorldConfig omitted.

// de_WorldConfigs omitted.

// de_WorldCount omitted.

/**
 * deserializeAws_restJson1WorldExportJobSummaries
 */
const de_WorldExportJobSummaries = (output: any, context: __SerdeContext): WorldExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorldExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorldExportJobSummary
 */
const de_WorldExportJobSummary = (output: any, context: __SerdeContext): WorldExportJobSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    outputLocation: _json,
    status: __expectString,
    worlds: _json,
  }) as any;
};

// de_WorldFailure omitted.

// de_WorldFailures omitted.

/**
 * deserializeAws_restJson1WorldGenerationJobSummaries
 */
const de_WorldGenerationJobSummaries = (output: any, context: __SerdeContext): WorldGenerationJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorldGenerationJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorldGenerationJobSummary
 */
const de_WorldGenerationJobSummary = (output: any, context: __SerdeContext): WorldGenerationJobSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failedWorldCount: __expectInt32,
    status: __expectString,
    succeededWorldCount: __expectInt32,
    template: __expectString,
    worldCount: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1WorldSummaries
 */
const de_WorldSummaries = (output: any, context: __SerdeContext): WorldSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WorldSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorldSummary
 */
const de_WorldSummary = (output: any, context: __SerdeContext): WorldSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    generationJob: __expectString,
    template: __expectString,
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
