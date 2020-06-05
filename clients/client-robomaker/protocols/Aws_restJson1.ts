import {
  BatchDescribeSimulationJobCommandInput,
  BatchDescribeSimulationJobCommandOutput
} from "../commands/BatchDescribeSimulationJobCommand";
import {
  CancelDeploymentJobCommandInput,
  CancelDeploymentJobCommandOutput
} from "../commands/CancelDeploymentJobCommand";
import {
  CancelSimulationJobCommandInput,
  CancelSimulationJobCommandOutput
} from "../commands/CancelSimulationJobCommand";
import {
  CreateDeploymentJobCommandInput,
  CreateDeploymentJobCommandOutput
} from "../commands/CreateDeploymentJobCommand";
import {
  CreateFleetCommandInput,
  CreateFleetCommandOutput
} from "../commands/CreateFleetCommand";
import {
  CreateRobotApplicationCommandInput,
  CreateRobotApplicationCommandOutput
} from "../commands/CreateRobotApplicationCommand";
import {
  CreateRobotApplicationVersionCommandInput,
  CreateRobotApplicationVersionCommandOutput
} from "../commands/CreateRobotApplicationVersionCommand";
import {
  CreateRobotCommandInput,
  CreateRobotCommandOutput
} from "../commands/CreateRobotCommand";
import {
  CreateSimulationApplicationCommandInput,
  CreateSimulationApplicationCommandOutput
} from "../commands/CreateSimulationApplicationCommand";
import {
  CreateSimulationApplicationVersionCommandInput,
  CreateSimulationApplicationVersionCommandOutput
} from "../commands/CreateSimulationApplicationVersionCommand";
import {
  CreateSimulationJobCommandInput,
  CreateSimulationJobCommandOutput
} from "../commands/CreateSimulationJobCommand";
import {
  DeleteFleetCommandInput,
  DeleteFleetCommandOutput
} from "../commands/DeleteFleetCommand";
import {
  DeleteRobotApplicationCommandInput,
  DeleteRobotApplicationCommandOutput
} from "../commands/DeleteRobotApplicationCommand";
import {
  DeleteRobotCommandInput,
  DeleteRobotCommandOutput
} from "../commands/DeleteRobotCommand";
import {
  DeleteSimulationApplicationCommandInput,
  DeleteSimulationApplicationCommandOutput
} from "../commands/DeleteSimulationApplicationCommand";
import {
  DeregisterRobotCommandInput,
  DeregisterRobotCommandOutput
} from "../commands/DeregisterRobotCommand";
import {
  DescribeDeploymentJobCommandInput,
  DescribeDeploymentJobCommandOutput
} from "../commands/DescribeDeploymentJobCommand";
import {
  DescribeFleetCommandInput,
  DescribeFleetCommandOutput
} from "../commands/DescribeFleetCommand";
import {
  DescribeRobotApplicationCommandInput,
  DescribeRobotApplicationCommandOutput
} from "../commands/DescribeRobotApplicationCommand";
import {
  DescribeRobotCommandInput,
  DescribeRobotCommandOutput
} from "../commands/DescribeRobotCommand";
import {
  DescribeSimulationApplicationCommandInput,
  DescribeSimulationApplicationCommandOutput
} from "../commands/DescribeSimulationApplicationCommand";
import {
  DescribeSimulationJobCommandInput,
  DescribeSimulationJobCommandOutput
} from "../commands/DescribeSimulationJobCommand";
import {
  ListDeploymentJobsCommandInput,
  ListDeploymentJobsCommandOutput
} from "../commands/ListDeploymentJobsCommand";
import {
  ListFleetsCommandInput,
  ListFleetsCommandOutput
} from "../commands/ListFleetsCommand";
import {
  ListRobotApplicationsCommandInput,
  ListRobotApplicationsCommandOutput
} from "../commands/ListRobotApplicationsCommand";
import {
  ListRobotsCommandInput,
  ListRobotsCommandOutput
} from "../commands/ListRobotsCommand";
import {
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput
} from "../commands/ListSimulationApplicationsCommand";
import {
  ListSimulationJobsCommandInput,
  ListSimulationJobsCommandOutput
} from "../commands/ListSimulationJobsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterRobotCommandInput,
  RegisterRobotCommandOutput
} from "../commands/RegisterRobotCommand";
import {
  RestartSimulationJobCommandInput,
  RestartSimulationJobCommandOutput
} from "../commands/RestartSimulationJobCommand";
import {
  SyncDeploymentJobCommandInput,
  SyncDeploymentJobCommandOutput
} from "../commands/SyncDeploymentJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateRobotApplicationCommandInput,
  UpdateRobotApplicationCommandOutput
} from "../commands/UpdateRobotApplicationCommand";
import {
  UpdateSimulationApplicationCommandInput,
  UpdateSimulationApplicationCommandOutput
} from "../commands/UpdateSimulationApplicationCommand";
import {
  ConcurrentDeploymentException,
  DataSource,
  DataSourceConfig,
  DeploymentApplicationConfig,
  DeploymentConfig,
  DeploymentJob,
  DeploymentLaunchConfig,
  Filter,
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
  SimulationJobSummary,
  SimulationSoftwareSuite,
  Source,
  SourceConfig,
  ThrottlingException,
  VPCConfig,
  VPCConfigResponse
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

export const serializeAws_restJson1BatchDescribeSimulationJobCommand = async (
  input: BatchDescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/batchDescribeSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.jobs !== undefined && {
      jobs: serializeAws_restJson1Arns(input.jobs, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CancelDeploymentJobCommand = async (
  input: CancelDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/cancelDeploymentJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && { job: input.job })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CancelSimulationJobCommand = async (
  input: CancelSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/cancelSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && { job: input.job })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateDeploymentJobCommand = async (
  input: CreateDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createDeploymentJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.deploymentApplicationConfigs !== undefined && {
      deploymentApplicationConfigs: serializeAws_restJson1DeploymentApplicationConfigs(
        input.deploymentApplicationConfigs,
        context
      )
    }),
    ...(input.deploymentConfig !== undefined && {
      deploymentConfig: serializeAws_restJson1DeploymentConfig(
        input.deploymentConfig,
        context
      )
    }),
    ...(input.fleet !== undefined && { fleet: input.fleet }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.name !== undefined && { name: input.name }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateRobotCommand = async (
  input: CreateRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.architecture !== undefined && {
      architecture: input.architecture
    }),
    ...(input.greengrassGroupId !== undefined && {
      greengrassGroupId: input.greengrassGroupId
    }),
    ...(input.name !== undefined && { name: input.name }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateRobotApplicationCommand = async (
  input: CreateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.name !== undefined && { name: input.name }),
    ...(input.robotSoftwareSuite !== undefined && {
      robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(
        input.robotSoftwareSuite,
        context
      )
    }),
    ...(input.sources !== undefined && {
      sources: serializeAws_restJson1SourceConfigs(input.sources, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateRobotApplicationVersionCommand = async (
  input: CreateRobotApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createRobotApplicationVersion";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && { application: input.application }),
    ...(input.currentRevisionId !== undefined && {
      currentRevisionId: input.currentRevisionId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateSimulationApplicationCommand = async (
  input: CreateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.name !== undefined && { name: input.name }),
    ...(input.renderingEngine !== undefined && {
      renderingEngine: serializeAws_restJson1RenderingEngine(
        input.renderingEngine,
        context
      )
    }),
    ...(input.robotSoftwareSuite !== undefined && {
      robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(
        input.robotSoftwareSuite,
        context
      )
    }),
    ...(input.simulationSoftwareSuite !== undefined && {
      simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(
        input.simulationSoftwareSuite,
        context
      )
    }),
    ...(input.sources !== undefined && {
      sources: serializeAws_restJson1SourceConfigs(input.sources, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateSimulationApplicationVersionCommand = async (
  input: CreateSimulationApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createSimulationApplicationVersion";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && { application: input.application }),
    ...(input.currentRevisionId !== undefined && {
      currentRevisionId: input.currentRevisionId
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateSimulationJobCommand = async (
  input: CreateSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/createSimulationJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.dataSources !== undefined && {
      dataSources: serializeAws_restJson1DataSourceConfigs(
        input.dataSources,
        context
      )
    }),
    ...(input.failureBehavior !== undefined && {
      failureBehavior: input.failureBehavior
    }),
    ...(input.iamRole !== undefined && { iamRole: input.iamRole }),
    ...(input.loggingConfig !== undefined && {
      loggingConfig: serializeAws_restJson1LoggingConfig(
        input.loggingConfig,
        context
      )
    }),
    ...(input.maxJobDurationInSeconds !== undefined && {
      maxJobDurationInSeconds: input.maxJobDurationInSeconds
    }),
    ...(input.outputLocation !== undefined && {
      outputLocation: serializeAws_restJson1OutputLocation(
        input.outputLocation,
        context
      )
    }),
    ...(input.robotApplications !== undefined && {
      robotApplications: serializeAws_restJson1RobotApplicationConfigs(
        input.robotApplications,
        context
      )
    }),
    ...(input.simulationApplications !== undefined && {
      simulationApplications: serializeAws_restJson1SimulationApplicationConfigs(
        input.simulationApplications,
        context
      )
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    }),
    ...(input.vpcConfig !== undefined && {
      vpcConfig: serializeAws_restJson1VPCConfig(input.vpcConfig, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/deleteFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet !== undefined && { fleet: input.fleet })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteRobotCommand = async (
  input: DeleteRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/deleteRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.robot !== undefined && { robot: input.robot })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteRobotApplicationCommand = async (
  input: DeleteRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/deleteRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && { application: input.application }),
    ...(input.applicationVersion !== undefined && {
      applicationVersion: input.applicationVersion
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteSimulationApplicationCommand = async (
  input: DeleteSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/deleteSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && { application: input.application }),
    ...(input.applicationVersion !== undefined && {
      applicationVersion: input.applicationVersion
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeregisterRobotCommand = async (
  input: DeregisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/deregisterRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet !== undefined && { fleet: input.fleet }),
    ...(input.robot !== undefined && { robot: input.robot })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeDeploymentJobCommand = async (
  input: DescribeDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/describeDeploymentJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && { job: input.job })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeFleetCommand = async (
  input: DescribeFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/describeFleet";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet !== undefined && { fleet: input.fleet })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeRobotCommand = async (
  input: DescribeRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/describeRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.robot !== undefined && { robot: input.robot })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeRobotApplicationCommand = async (
  input: DescribeRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/describeRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && { application: input.application }),
    ...(input.applicationVersion !== undefined && {
      applicationVersion: input.applicationVersion
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeSimulationApplicationCommand = async (
  input: DescribeSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/describeSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && { application: input.application }),
    ...(input.applicationVersion !== undefined && {
      applicationVersion: input.applicationVersion
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DescribeSimulationJobCommand = async (
  input: DescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/describeSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && { job: input.job })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListDeploymentJobsCommand = async (
  input: ListDeploymentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listDeploymentJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listFleets";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListRobotApplicationsCommand = async (
  input: ListRobotApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listRobotApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.versionQualifier !== undefined && {
      versionQualifier: input.versionQualifier
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListRobotsCommand = async (
  input: ListRobotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listRobots";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListSimulationApplicationsCommand = async (
  input: ListSimulationApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listSimulationApplications";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.versionQualifier !== undefined && {
      versionQualifier: input.versionQualifier
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListSimulationJobsCommand = async (
  input: ListSimulationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/listSimulationJobs";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined && {
      filters: serializeAws_restJson1Filters(input.filters, context)
    }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1RegisterRobotCommand = async (
  input: RegisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/registerRobot";
  let body: any;
  body = JSON.stringify({
    ...(input.fleet !== undefined && { fleet: input.fleet }),
    ...(input.robot !== undefined && { robot: input.robot })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1RestartSimulationJobCommand = async (
  input: RestartSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/restartSimulationJob";
  let body: any;
  body = JSON.stringify({
    ...(input.job !== undefined && { job: input.job })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1SyncDeploymentJobCommand = async (
  input: SyncDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/syncDeploymentJob";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.fleet !== undefined && { fleet: input.fleet })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1TagMap(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.tagKeys !== undefined && {
      tagKeys: (input.tagKeys || []).map(_entry => _entry)
    })
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
    body
  });
};

export const serializeAws_restJson1UpdateRobotApplicationCommand = async (
  input: UpdateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/updateRobotApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && { application: input.application }),
    ...(input.currentRevisionId !== undefined && {
      currentRevisionId: input.currentRevisionId
    }),
    ...(input.robotSoftwareSuite !== undefined && {
      robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(
        input.robotSoftwareSuite,
        context
      )
    }),
    ...(input.sources !== undefined && {
      sources: serializeAws_restJson1SourceConfigs(input.sources, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateSimulationApplicationCommand = async (
  input: UpdateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/updateSimulationApplication";
  let body: any;
  body = JSON.stringify({
    ...(input.application !== undefined && { application: input.application }),
    ...(input.currentRevisionId !== undefined && {
      currentRevisionId: input.currentRevisionId
    }),
    ...(input.renderingEngine !== undefined && {
      renderingEngine: serializeAws_restJson1RenderingEngine(
        input.renderingEngine,
        context
      )
    }),
    ...(input.robotSoftwareSuite !== undefined && {
      robotSoftwareSuite: serializeAws_restJson1RobotSoftwareSuite(
        input.robotSoftwareSuite,
        context
      )
    }),
    ...(input.simulationSoftwareSuite !== undefined && {
      simulationSoftwareSuite: serializeAws_restJson1SimulationSoftwareSuite(
        input.simulationSoftwareSuite,
        context
      )
    }),
    ...(input.sources !== undefined && {
      sources: serializeAws_restJson1SourceConfigs(input.sources, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1BatchDescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchDescribeSimulationJobCommandError(
      output,
      context
    );
  }
  const contents: BatchDescribeSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchDescribeSimulationJobResponse",
    jobs: undefined,
    unprocessedJobs: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.jobs !== undefined && data.jobs !== null) {
    contents.jobs = deserializeAws_restJson1SimulationJobs(data.jobs, context);
  }
  if (data.unprocessedJobs !== undefined && data.unprocessedJobs !== null) {
    contents.unprocessedJobs = deserializeAws_restJson1Arns(
      data.unprocessedJobs,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchDescribeSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CancelDeploymentJobCommandError(
      output,
      context
    );
  }
  const contents: CancelDeploymentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelDeploymentJobResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CancelSimulationJobCommandError(
      output,
      context
    );
  }
  const contents: CancelSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CancelSimulationJobResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateDeploymentJobCommandError(
      output,
      context
    );
  }
  const contents: CreateDeploymentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDeploymentJobResponse",
    arn: undefined,
    createdAt: undefined,
    deploymentApplicationConfigs: undefined,
    deploymentConfig: undefined,
    failureCode: undefined,
    failureReason: undefined,
    fleet: undefined,
    status: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (
    data.deploymentApplicationConfigs !== undefined &&
    data.deploymentApplicationConfigs !== null
  ) {
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(
      data.deploymentConfig,
      context
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateFleetCommandError(output, context);
  }
  const contents: CreateFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateFleetResponse",
    arn: undefined,
    createdAt: undefined,
    name: undefined,
    tags: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateRobotCommandError(output, context);
  }
  const contents: CreateRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRobotResponse",
    architecture: undefined,
    arn: undefined,
    createdAt: undefined,
    greengrassGroupId: undefined,
    name: undefined,
    tags: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateRobotApplicationCommandError(
      output,
      context
    );
  }
  const contents: CreateRobotApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRobotApplicationResponse",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    sources: undefined,
    tags: undefined,
    version: undefined
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
  if (
    data.robotSoftwareSuite !== undefined &&
    data.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(
      data.robotSoftwareSuite,
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

const deserializeAws_restJson1CreateRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateRobotApplicationVersionCommandError(
      output,
      context
    );
  }
  const contents: CreateRobotApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRobotApplicationVersionResponse",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    sources: undefined,
    version: undefined
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
  if (
    data.robotSoftwareSuite !== undefined &&
    data.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(
      data.robotSoftwareSuite,
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

const deserializeAws_restJson1CreateRobotApplicationVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateSimulationApplicationCommandError(
      output,
      context
    );
  }
  const contents: CreateSimulationApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSimulationApplicationResponse",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    renderingEngine: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    sources: undefined,
    tags: undefined,
    version: undefined
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
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(
      data.renderingEngine,
      context
    );
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (
    data.robotSoftwareSuite !== undefined &&
    data.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (
    data.simulationSoftwareSuite !== undefined &&
    data.simulationSoftwareSuite !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateSimulationApplicationVersionCommandError(
      output,
      context
    );
  }
  const contents: CreateSimulationApplicationVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSimulationApplicationVersionResponse",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    renderingEngine: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    sources: undefined,
    version: undefined
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
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(
      data.renderingEngine,
      context
    );
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (
    data.robotSoftwareSuite !== undefined &&
    data.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (
    data.simulationSoftwareSuite !== undefined &&
    data.simulationSoftwareSuite !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateSimulationJobCommandError(
      output,
      context
    );
  }
  const contents: CreateSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSimulationJobResponse",
    arn: undefined,
    clientRequestToken: undefined,
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
    vpcConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (
    data.clientRequestToken !== undefined &&
    data.clientRequestToken !== null
  ) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.dataSources = deserializeAws_restJson1DataSources(
      data.dataSources,
      context
    );
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
    contents.loggingConfig = deserializeAws_restJson1LoggingConfig(
      data.loggingConfig,
      context
    );
  }
  if (
    data.maxJobDurationInSeconds !== undefined &&
    data.maxJobDurationInSeconds !== null
  ) {
    contents.maxJobDurationInSeconds = data.maxJobDurationInSeconds;
  }
  if (data.outputLocation !== undefined && data.outputLocation !== null) {
    contents.outputLocation = deserializeAws_restJson1OutputLocation(
      data.outputLocation,
      context
    );
  }
  if (data.robotApplications !== undefined && data.robotApplications !== null) {
    contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(
      data.robotApplications,
      context
    );
  }
  if (
    data.simulationApplications !== undefined &&
    data.simulationApplications !== null
  ) {
    contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(
      data.simulationApplications,
      context
    );
  }
  if (
    data.simulationTimeMillis !== undefined &&
    data.simulationTimeMillis !== null
  ) {
    contents.simulationTimeMillis = data.simulationTimeMillis;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
    contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(
      data.vpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFleetCommandError(output, context);
  }
  const contents: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFleetResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteRobotCommandError(output, context);
  }
  const contents: DeleteRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRobotResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteRobotApplicationCommandError(
      output,
      context
    );
  }
  const contents: DeleteRobotApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRobotApplicationResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteSimulationApplicationCommandError(
      output,
      context
    );
  }
  const contents: DeleteSimulationApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSimulationApplicationResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeregisterRobotCommandError(output, context);
  }
  const contents: DeregisterRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeregisterRobotResponse",
    fleet: undefined,
    robot: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeDeploymentJobCommandError(
      output,
      context
    );
  }
  const contents: DescribeDeploymentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDeploymentJobResponse",
    arn: undefined,
    createdAt: undefined,
    deploymentApplicationConfigs: undefined,
    deploymentConfig: undefined,
    failureCode: undefined,
    failureReason: undefined,
    fleet: undefined,
    robotDeploymentSummary: undefined,
    status: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (
    data.deploymentApplicationConfigs !== undefined &&
    data.deploymentApplicationConfigs !== null
  ) {
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(
      data.deploymentConfig,
      context
    );
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
  if (
    data.robotDeploymentSummary !== undefined &&
    data.robotDeploymentSummary !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeFleetCommandError(output, context);
  }
  const contents: DescribeFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeFleetResponse",
    arn: undefined,
    createdAt: undefined,
    lastDeploymentJob: undefined,
    lastDeploymentStatus: undefined,
    lastDeploymentTime: undefined,
    name: undefined,
    robots: undefined,
    tags: undefined
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
  if (
    data.lastDeploymentStatus !== undefined &&
    data.lastDeploymentStatus !== null
  ) {
    contents.lastDeploymentStatus = data.lastDeploymentStatus;
  }
  if (
    data.lastDeploymentTime !== undefined &&
    data.lastDeploymentTime !== null
  ) {
    contents.lastDeploymentTime = new Date(
      Math.round(data.lastDeploymentTime * 1000)
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeRobotCommandError(output, context);
  }
  const contents: DescribeRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRobotResponse",
    architecture: undefined,
    arn: undefined,
    createdAt: undefined,
    fleetArn: undefined,
    greengrassGroupId: undefined,
    lastDeploymentJob: undefined,
    lastDeploymentTime: undefined,
    name: undefined,
    status: undefined,
    tags: undefined
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
  if (
    data.lastDeploymentTime !== undefined &&
    data.lastDeploymentTime !== null
  ) {
    contents.lastDeploymentTime = new Date(
      Math.round(data.lastDeploymentTime * 1000)
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeRobotApplicationCommandError(
      output,
      context
    );
  }
  const contents: DescribeRobotApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRobotApplicationResponse",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    sources: undefined,
    tags: undefined,
    version: undefined
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
  if (
    data.robotSoftwareSuite !== undefined &&
    data.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(
      data.robotSoftwareSuite,
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

const deserializeAws_restJson1DescribeRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeSimulationApplicationCommandError(
      output,
      context
    );
  }
  const contents: DescribeSimulationApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSimulationApplicationResponse",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    renderingEngine: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    sources: undefined,
    tags: undefined,
    version: undefined
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
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(
      data.renderingEngine,
      context
    );
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (
    data.robotSoftwareSuite !== undefined &&
    data.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (
    data.simulationSoftwareSuite !== undefined &&
    data.simulationSoftwareSuite !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeSimulationJobCommandError(
      output,
      context
    );
  }
  const contents: DescribeSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSimulationJobResponse",
    arn: undefined,
    clientRequestToken: undefined,
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
    vpcConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (
    data.clientRequestToken !== undefined &&
    data.clientRequestToken !== null
  ) {
    contents.clientRequestToken = data.clientRequestToken;
  }
  if (data.dataSources !== undefined && data.dataSources !== null) {
    contents.dataSources = deserializeAws_restJson1DataSources(
      data.dataSources,
      context
    );
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
    contents.loggingConfig = deserializeAws_restJson1LoggingConfig(
      data.loggingConfig,
      context
    );
  }
  if (
    data.maxJobDurationInSeconds !== undefined &&
    data.maxJobDurationInSeconds !== null
  ) {
    contents.maxJobDurationInSeconds = data.maxJobDurationInSeconds;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.networkInterface !== undefined && data.networkInterface !== null) {
    contents.networkInterface = deserializeAws_restJson1NetworkInterface(
      data.networkInterface,
      context
    );
  }
  if (data.outputLocation !== undefined && data.outputLocation !== null) {
    contents.outputLocation = deserializeAws_restJson1OutputLocation(
      data.outputLocation,
      context
    );
  }
  if (data.robotApplications !== undefined && data.robotApplications !== null) {
    contents.robotApplications = deserializeAws_restJson1RobotApplicationConfigs(
      data.robotApplications,
      context
    );
  }
  if (
    data.simulationApplications !== undefined &&
    data.simulationApplications !== null
  ) {
    contents.simulationApplications = deserializeAws_restJson1SimulationApplicationConfigs(
      data.simulationApplications,
      context
    );
  }
  if (
    data.simulationTimeMillis !== undefined &&
    data.simulationTimeMillis !== null
  ) {
    contents.simulationTimeMillis = data.simulationTimeMillis;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
    contents.vpcConfig = deserializeAws_restJson1VPCConfigResponse(
      data.vpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSimulationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListDeploymentJobsCommandError(
      output,
      context
    );
  }
  const contents: ListDeploymentJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeploymentJobsResponse",
    deploymentJobs: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.deploymentJobs !== undefined && data.deploymentJobs !== null) {
    contents.deploymentJobs = deserializeAws_restJson1DeploymentJobs(
      data.deploymentJobs,
      context
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListFleetsCommandError(output, context);
  }
  const contents: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFleetsResponse",
    fleetDetails: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fleetDetails !== undefined && data.fleetDetails !== null) {
    contents.fleetDetails = deserializeAws_restJson1Fleets(
      data.fleetDetails,
      context
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListRobotApplicationsCommandError(
      output,
      context
    );
  }
  const contents: ListRobotApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRobotApplicationsResponse",
    nextToken: undefined,
    robotApplicationSummaries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (
    data.robotApplicationSummaries !== undefined &&
    data.robotApplicationSummaries !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListRobotsCommandError(output, context);
  }
  const contents: ListRobotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRobotsResponse",
    nextToken: undefined,
    robots: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListSimulationApplicationsCommandError(
      output,
      context
    );
  }
  const contents: ListSimulationApplicationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSimulationApplicationsResponse",
    nextToken: undefined,
    simulationApplicationSummaries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (
    data.simulationApplicationSummaries !== undefined &&
    data.simulationApplicationSummaries !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListSimulationJobsCommandError(
      output,
      context
    );
  }
  const contents: ListSimulationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSimulationJobsResponse",
    nextToken: undefined,
    simulationJobSummaries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (
    data.simulationJobSummaries !== undefined &&
    data.simulationJobSummaries !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RegisterRobotCommandError(output, context);
  }
  const contents: RegisterRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RegisterRobotResponse",
    fleet: undefined,
    robot: undefined
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1RestartSimulationJobCommandError(
      output,
      context
    );
  }
  const contents: RestartSimulationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RestartSimulationJobResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1SyncDeploymentJobCommandError(
      output,
      context
    );
  }
  const contents: SyncDeploymentJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SyncDeploymentJobResponse",
    arn: undefined,
    createdAt: undefined,
    deploymentApplicationConfigs: undefined,
    deploymentConfig: undefined,
    failureCode: undefined,
    failureReason: undefined,
    fleet: undefined,
    status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.arn = data.arn;
  }
  if (data.createdAt !== undefined && data.createdAt !== null) {
    contents.createdAt = new Date(Math.round(data.createdAt * 1000));
  }
  if (
    data.deploymentApplicationConfigs !== undefined &&
    data.deploymentApplicationConfigs !== null
  ) {
    contents.deploymentApplicationConfigs = deserializeAws_restJson1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1DeploymentConfig(
      data.deploymentConfig,
      context
    );
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      response = {
        ...(await deserializeAws_restJson1ConcurrentDeploymentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1IdempotentParameterMismatchExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateRobotApplicationCommandError(
      output,
      context
    );
  }
  const contents: UpdateRobotApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRobotApplicationResponse",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    sources: undefined,
    version: undefined
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
  if (
    data.robotSoftwareSuite !== undefined &&
    data.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(
      data.robotSoftwareSuite,
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

const deserializeAws_restJson1UpdateRobotApplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateSimulationApplicationCommandError(
      output,
      context
    );
  }
  const contents: UpdateSimulationApplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSimulationApplicationResponse",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    renderingEngine: undefined,
    revisionId: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    sources: undefined,
    version: undefined
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
    contents.renderingEngine = deserializeAws_restJson1RenderingEngine(
      data.renderingEngine,
      context
    );
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = data.revisionId;
  }
  if (
    data.robotSoftwareSuite !== undefined &&
    data.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (
    data.simulationSoftwareSuite !== undefined &&
    data.simulationSoftwareSuite !== null
  ) {
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
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
    message: undefined
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
    message: undefined
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
    message: undefined
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
    message: undefined
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
    message: undefined
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
    message: undefined
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
    message: undefined
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
    message: undefined
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
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1Arns = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1DataSourceConfig = (
  input: DataSourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.s3Bucket !== undefined && { s3Bucket: input.s3Bucket }),
    ...(input.s3Keys !== undefined && {
      s3Keys: serializeAws_restJson1S3Keys(input.s3Keys, context)
    })
  };
};

const serializeAws_restJson1DataSourceConfigs = (
  input: DataSourceConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1DataSourceConfig(entry, context)
  );
};

const serializeAws_restJson1DeploymentApplicationConfig = (
  input: DeploymentApplicationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.application !== undefined && { application: input.application }),
    ...(input.applicationVersion !== undefined && {
      applicationVersion: input.applicationVersion
    }),
    ...(input.launchConfig !== undefined && {
      launchConfig: serializeAws_restJson1DeploymentLaunchConfig(
        input.launchConfig,
        context
      )
    })
  };
};

const serializeAws_restJson1DeploymentApplicationConfigs = (
  input: DeploymentApplicationConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1DeploymentApplicationConfig(entry, context)
  );
};

const serializeAws_restJson1DeploymentConfig = (
  input: DeploymentConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.concurrentDeploymentPercentage !== undefined && {
      concurrentDeploymentPercentage: input.concurrentDeploymentPercentage
    }),
    ...(input.downloadConditionFile !== undefined && {
      downloadConditionFile: serializeAws_restJson1S3Object(
        input.downloadConditionFile,
        context
      )
    }),
    ...(input.failureThresholdPercentage !== undefined && {
      failureThresholdPercentage: input.failureThresholdPercentage
    }),
    ...(input.robotDeploymentTimeoutInSeconds !== undefined && {
      robotDeploymentTimeoutInSeconds: input.robotDeploymentTimeoutInSeconds
    })
  };
};

const serializeAws_restJson1DeploymentLaunchConfig = (
  input: DeploymentLaunchConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentVariables !== undefined && {
      environmentVariables: serializeAws_restJson1EnvironmentVariableMap(
        input.environmentVariables,
        context
      )
    }),
    ...(input.launchFile !== undefined && { launchFile: input.launchFile }),
    ...(input.packageName !== undefined && { packageName: input.packageName }),
    ...(input.postLaunchFile !== undefined && {
      postLaunchFile: input.postLaunchFile
    }),
    ...(input.preLaunchFile !== undefined && {
      preLaunchFile: input.preLaunchFile
    })
  };
};

const serializeAws_restJson1EnvironmentVariableMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.values !== undefined && {
      values: serializeAws_restJson1FilterValues(input.values, context)
    })
  };
};

const serializeAws_restJson1Filters = (
  input: Filter[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1Filter(entry, context));
};

const serializeAws_restJson1FilterValues = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1LaunchConfig = (
  input: LaunchConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentVariables !== undefined && {
      environmentVariables: serializeAws_restJson1EnvironmentVariableMap(
        input.environmentVariables,
        context
      )
    }),
    ...(input.launchFile !== undefined && { launchFile: input.launchFile }),
    ...(input.packageName !== undefined && { packageName: input.packageName }),
    ...(input.portForwardingConfig !== undefined && {
      portForwardingConfig: serializeAws_restJson1PortForwardingConfig(
        input.portForwardingConfig,
        context
      )
    })
  };
};

const serializeAws_restJson1LoggingConfig = (
  input: LoggingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.recordAllRosTopics !== undefined && {
      recordAllRosTopics: input.recordAllRosTopics
    })
  };
};

const serializeAws_restJson1OutputLocation = (
  input: OutputLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.s3Bucket !== undefined && { s3Bucket: input.s3Bucket }),
    ...(input.s3Prefix !== undefined && { s3Prefix: input.s3Prefix })
  };
};

const serializeAws_restJson1PortForwardingConfig = (
  input: PortForwardingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.portMappings !== undefined && {
      portMappings: serializeAws_restJson1PortMappingList(
        input.portMappings,
        context
      )
    })
  };
};

const serializeAws_restJson1PortMapping = (
  input: PortMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationPort !== undefined && {
      applicationPort: input.applicationPort
    }),
    ...(input.enableOnPublicIp !== undefined && {
      enableOnPublicIp: input.enableOnPublicIp
    }),
    ...(input.jobPort !== undefined && { jobPort: input.jobPort })
  };
};

const serializeAws_restJson1PortMappingList = (
  input: PortMapping[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1PortMapping(entry, context));
};

const serializeAws_restJson1RenderingEngine = (
  input: RenderingEngine,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_restJson1RobotApplicationConfig = (
  input: RobotApplicationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.application !== undefined && { application: input.application }),
    ...(input.applicationVersion !== undefined && {
      applicationVersion: input.applicationVersion
    }),
    ...(input.launchConfig !== undefined && {
      launchConfig: serializeAws_restJson1LaunchConfig(
        input.launchConfig,
        context
      )
    })
  };
};

const serializeAws_restJson1RobotApplicationConfigs = (
  input: RobotApplicationConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1RobotApplicationConfig(entry, context)
  );
};

const serializeAws_restJson1RobotSoftwareSuite = (
  input: RobotSoftwareSuite,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_restJson1S3Keys = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1S3Object = (
  input: S3Object,
  context: __SerdeContext
): any => {
  return {
    ...(input.bucket !== undefined && { bucket: input.bucket }),
    ...(input.etag !== undefined && { etag: input.etag }),
    ...(input.key !== undefined && { key: input.key })
  };
};

const serializeAws_restJson1SecurityGroups = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1SimulationApplicationConfig = (
  input: SimulationApplicationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.application !== undefined && { application: input.application }),
    ...(input.applicationVersion !== undefined && {
      applicationVersion: input.applicationVersion
    }),
    ...(input.launchConfig !== undefined && {
      launchConfig: serializeAws_restJson1LaunchConfig(
        input.launchConfig,
        context
      )
    })
  };
};

const serializeAws_restJson1SimulationApplicationConfigs = (
  input: SimulationApplicationConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1SimulationApplicationConfig(entry, context)
  );
};

const serializeAws_restJson1SimulationSoftwareSuite = (
  input: SimulationSoftwareSuite,
  context: __SerdeContext
): any => {
  return {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version })
  };
};

const serializeAws_restJson1SourceConfig = (
  input: SourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.architecture !== undefined && {
      architecture: input.architecture
    }),
    ...(input.s3Bucket !== undefined && { s3Bucket: input.s3Bucket }),
    ...(input.s3Key !== undefined && { s3Key: input.s3Key })
  };
};

const serializeAws_restJson1SourceConfigs = (
  input: SourceConfig[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1SourceConfig(entry, context));
};

const serializeAws_restJson1Subnets = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1VPCConfig = (
  input: VPCConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.assignPublicIp !== undefined && {
      assignPublicIp: input.assignPublicIp
    }),
    ...(input.securityGroups !== undefined && {
      securityGroups: serializeAws_restJson1SecurityGroups(
        input.securityGroups,
        context
      )
    }),
    ...(input.subnets !== undefined && {
      subnets: serializeAws_restJson1Subnets(input.subnets, context)
    })
  };
};

const deserializeAws_restJson1Arns = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1DataSource = (
  output: any,
  context: __SerdeContext
): DataSource => {
  return {
    __type: "DataSource",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    s3Bucket:
      output.s3Bucket !== undefined && output.s3Bucket !== null
        ? output.s3Bucket
        : undefined,
    s3Keys:
      output.s3Keys !== undefined && output.s3Keys !== null
        ? deserializeAws_restJson1S3KeyOutputs(output.s3Keys, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1DataSourceNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1DataSources = (
  output: any,
  context: __SerdeContext
): DataSource[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DataSource(entry, context)
  );
};

const deserializeAws_restJson1DeploymentApplicationConfig = (
  output: any,
  context: __SerdeContext
): DeploymentApplicationConfig => {
  return {
    __type: "DeploymentApplicationConfig",
    application:
      output.application !== undefined && output.application !== null
        ? output.application
        : undefined,
    applicationVersion:
      output.applicationVersion !== undefined &&
      output.applicationVersion !== null
        ? output.applicationVersion
        : undefined,
    launchConfig:
      output.launchConfig !== undefined && output.launchConfig !== null
        ? deserializeAws_restJson1DeploymentLaunchConfig(
            output.launchConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1DeploymentApplicationConfigs = (
  output: any,
  context: __SerdeContext
): DeploymentApplicationConfig[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DeploymentApplicationConfig(entry, context)
  );
};

const deserializeAws_restJson1DeploymentConfig = (
  output: any,
  context: __SerdeContext
): DeploymentConfig => {
  return {
    __type: "DeploymentConfig",
    concurrentDeploymentPercentage:
      output.concurrentDeploymentPercentage !== undefined &&
      output.concurrentDeploymentPercentage !== null
        ? output.concurrentDeploymentPercentage
        : undefined,
    downloadConditionFile:
      output.downloadConditionFile !== undefined &&
      output.downloadConditionFile !== null
        ? deserializeAws_restJson1S3Object(
            output.downloadConditionFile,
            context
          )
        : undefined,
    failureThresholdPercentage:
      output.failureThresholdPercentage !== undefined &&
      output.failureThresholdPercentage !== null
        ? output.failureThresholdPercentage
        : undefined,
    robotDeploymentTimeoutInSeconds:
      output.robotDeploymentTimeoutInSeconds !== undefined &&
      output.robotDeploymentTimeoutInSeconds !== null
        ? output.robotDeploymentTimeoutInSeconds
        : undefined
  } as any;
};

const deserializeAws_restJson1DeploymentJob = (
  output: any,
  context: __SerdeContext
): DeploymentJob => {
  return {
    __type: "DeploymentJob",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    deploymentApplicationConfigs:
      output.deploymentApplicationConfigs !== undefined &&
      output.deploymentApplicationConfigs !== null
        ? deserializeAws_restJson1DeploymentApplicationConfigs(
            output.deploymentApplicationConfigs,
            context
          )
        : undefined,
    deploymentConfig:
      output.deploymentConfig !== undefined && output.deploymentConfig !== null
        ? deserializeAws_restJson1DeploymentConfig(
            output.deploymentConfig,
            context
          )
        : undefined,
    failureCode:
      output.failureCode !== undefined && output.failureCode !== null
        ? output.failureCode
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    fleet:
      output.fleet !== undefined && output.fleet !== null
        ? output.fleet
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1DeploymentJobs = (
  output: any,
  context: __SerdeContext
): DeploymentJob[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1DeploymentJob(entry, context)
  );
};

const deserializeAws_restJson1DeploymentLaunchConfig = (
  output: any,
  context: __SerdeContext
): DeploymentLaunchConfig => {
  return {
    __type: "DeploymentLaunchConfig",
    environmentVariables:
      output.environmentVariables !== undefined &&
      output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariableMap(
            output.environmentVariables,
            context
          )
        : undefined,
    launchFile:
      output.launchFile !== undefined && output.launchFile !== null
        ? output.launchFile
        : undefined,
    packageName:
      output.packageName !== undefined && output.packageName !== null
        ? output.packageName
        : undefined,
    postLaunchFile:
      output.postLaunchFile !== undefined && output.postLaunchFile !== null
        ? output.postLaunchFile
        : undefined,
    preLaunchFile:
      output.preLaunchFile !== undefined && output.preLaunchFile !== null
        ? output.preLaunchFile
        : undefined
  } as any;
};

const deserializeAws_restJson1EnvironmentVariableMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1Fleet = (
  output: any,
  context: __SerdeContext
): Fleet => {
  return {
    __type: "Fleet",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastDeploymentJob:
      output.lastDeploymentJob !== undefined &&
      output.lastDeploymentJob !== null
        ? output.lastDeploymentJob
        : undefined,
    lastDeploymentStatus:
      output.lastDeploymentStatus !== undefined &&
      output.lastDeploymentStatus !== null
        ? output.lastDeploymentStatus
        : undefined,
    lastDeploymentTime:
      output.lastDeploymentTime !== undefined &&
      output.lastDeploymentTime !== null
        ? new Date(Math.round(output.lastDeploymentTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1Fleets = (
  output: any,
  context: __SerdeContext
): Fleet[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Fleet(entry, context)
  );
};

const deserializeAws_restJson1LaunchConfig = (
  output: any,
  context: __SerdeContext
): LaunchConfig => {
  return {
    __type: "LaunchConfig",
    environmentVariables:
      output.environmentVariables !== undefined &&
      output.environmentVariables !== null
        ? deserializeAws_restJson1EnvironmentVariableMap(
            output.environmentVariables,
            context
          )
        : undefined,
    launchFile:
      output.launchFile !== undefined && output.launchFile !== null
        ? output.launchFile
        : undefined,
    packageName:
      output.packageName !== undefined && output.packageName !== null
        ? output.packageName
        : undefined,
    portForwardingConfig:
      output.portForwardingConfig !== undefined &&
      output.portForwardingConfig !== null
        ? deserializeAws_restJson1PortForwardingConfig(
            output.portForwardingConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1LoggingConfig = (
  output: any,
  context: __SerdeContext
): LoggingConfig => {
  return {
    __type: "LoggingConfig",
    recordAllRosTopics:
      output.recordAllRosTopics !== undefined &&
      output.recordAllRosTopics !== null
        ? output.recordAllRosTopics
        : undefined
  } as any;
};

const deserializeAws_restJson1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  return {
    __type: "NetworkInterface",
    networkInterfaceId:
      output.networkInterfaceId !== undefined &&
      output.networkInterfaceId !== null
        ? output.networkInterfaceId
        : undefined,
    privateIpAddress:
      output.privateIpAddress !== undefined && output.privateIpAddress !== null
        ? output.privateIpAddress
        : undefined,
    publicIpAddress:
      output.publicIpAddress !== undefined && output.publicIpAddress !== null
        ? output.publicIpAddress
        : undefined
  } as any;
};

const deserializeAws_restJson1OutputLocation = (
  output: any,
  context: __SerdeContext
): OutputLocation => {
  return {
    __type: "OutputLocation",
    s3Bucket:
      output.s3Bucket !== undefined && output.s3Bucket !== null
        ? output.s3Bucket
        : undefined,
    s3Prefix:
      output.s3Prefix !== undefined && output.s3Prefix !== null
        ? output.s3Prefix
        : undefined
  } as any;
};

const deserializeAws_restJson1PortForwardingConfig = (
  output: any,
  context: __SerdeContext
): PortForwardingConfig => {
  return {
    __type: "PortForwardingConfig",
    portMappings:
      output.portMappings !== undefined && output.portMappings !== null
        ? deserializeAws_restJson1PortMappingList(output.portMappings, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1PortMapping = (
  output: any,
  context: __SerdeContext
): PortMapping => {
  return {
    __type: "PortMapping",
    applicationPort:
      output.applicationPort !== undefined && output.applicationPort !== null
        ? output.applicationPort
        : undefined,
    enableOnPublicIp:
      output.enableOnPublicIp !== undefined && output.enableOnPublicIp !== null
        ? output.enableOnPublicIp
        : undefined,
    jobPort:
      output.jobPort !== undefined && output.jobPort !== null
        ? output.jobPort
        : undefined
  } as any;
};

const deserializeAws_restJson1PortMappingList = (
  output: any,
  context: __SerdeContext
): PortMapping[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1PortMapping(entry, context)
  );
};

const deserializeAws_restJson1ProgressDetail = (
  output: any,
  context: __SerdeContext
): ProgressDetail => {
  return {
    __type: "ProgressDetail",
    currentProgress:
      output.currentProgress !== undefined && output.currentProgress !== null
        ? output.currentProgress
        : undefined,
    estimatedTimeRemainingSeconds:
      output.estimatedTimeRemainingSeconds !== undefined &&
      output.estimatedTimeRemainingSeconds !== null
        ? output.estimatedTimeRemainingSeconds
        : undefined,
    percentDone:
      output.percentDone !== undefined && output.percentDone !== null
        ? output.percentDone
        : undefined,
    targetResource:
      output.targetResource !== undefined && output.targetResource !== null
        ? output.targetResource
        : undefined
  } as any;
};

const deserializeAws_restJson1RenderingEngine = (
  output: any,
  context: __SerdeContext
): RenderingEngine => {
  return {
    __type: "RenderingEngine",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1Robot = (
  output: any,
  context: __SerdeContext
): Robot => {
  return {
    __type: "Robot",
    architecture:
      output.architecture !== undefined && output.architecture !== null
        ? output.architecture
        : undefined,
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    fleetArn:
      output.fleetArn !== undefined && output.fleetArn !== null
        ? output.fleetArn
        : undefined,
    greenGrassGroupId:
      output.greenGrassGroupId !== undefined &&
      output.greenGrassGroupId !== null
        ? output.greenGrassGroupId
        : undefined,
    lastDeploymentJob:
      output.lastDeploymentJob !== undefined &&
      output.lastDeploymentJob !== null
        ? output.lastDeploymentJob
        : undefined,
    lastDeploymentTime:
      output.lastDeploymentTime !== undefined &&
      output.lastDeploymentTime !== null
        ? new Date(Math.round(output.lastDeploymentTime * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1RobotApplicationConfig = (
  output: any,
  context: __SerdeContext
): RobotApplicationConfig => {
  return {
    __type: "RobotApplicationConfig",
    application:
      output.application !== undefined && output.application !== null
        ? output.application
        : undefined,
    applicationVersion:
      output.applicationVersion !== undefined &&
      output.applicationVersion !== null
        ? output.applicationVersion
        : undefined,
    launchConfig:
      output.launchConfig !== undefined && output.launchConfig !== null
        ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1RobotApplicationConfigs = (
  output: any,
  context: __SerdeContext
): RobotApplicationConfig[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1RobotApplicationConfig(entry, context)
  );
};

const deserializeAws_restJson1RobotApplicationNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1RobotApplicationSummaries = (
  output: any,
  context: __SerdeContext
): RobotApplicationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1RobotApplicationSummary(entry, context)
  );
};

const deserializeAws_restJson1RobotApplicationSummary = (
  output: any,
  context: __SerdeContext
): RobotApplicationSummary => {
  return {
    __type: "RobotApplicationSummary",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    robotSoftwareSuite:
      output.robotSoftwareSuite !== undefined &&
      output.robotSoftwareSuite !== null
        ? deserializeAws_restJson1RobotSoftwareSuite(
            output.robotSoftwareSuite,
            context
          )
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1RobotDeployment = (
  output: any,
  context: __SerdeContext
): RobotDeployment => {
  return {
    __type: "RobotDeployment",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    deploymentFinishTime:
      output.deploymentFinishTime !== undefined &&
      output.deploymentFinishTime !== null
        ? new Date(Math.round(output.deploymentFinishTime * 1000))
        : undefined,
    deploymentStartTime:
      output.deploymentStartTime !== undefined &&
      output.deploymentStartTime !== null
        ? new Date(Math.round(output.deploymentStartTime * 1000))
        : undefined,
    failureCode:
      output.failureCode !== undefined && output.failureCode !== null
        ? output.failureCode
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    progressDetail:
      output.progressDetail !== undefined && output.progressDetail !== null
        ? deserializeAws_restJson1ProgressDetail(output.progressDetail, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1RobotDeploymentSummary = (
  output: any,
  context: __SerdeContext
): RobotDeployment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1RobotDeployment(entry, context)
  );
};

const deserializeAws_restJson1Robots = (
  output: any,
  context: __SerdeContext
): Robot[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Robot(entry, context)
  );
};

const deserializeAws_restJson1RobotSoftwareSuite = (
  output: any,
  context: __SerdeContext
): RobotSoftwareSuite => {
  return {
    __type: "RobotSoftwareSuite",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1S3KeyOutput = (
  output: any,
  context: __SerdeContext
): S3KeyOutput => {
  return {
    __type: "S3KeyOutput",
    etag:
      output.etag !== undefined && output.etag !== null
        ? output.etag
        : undefined,
    s3Key:
      output.s3Key !== undefined && output.s3Key !== null
        ? output.s3Key
        : undefined
  } as any;
};

const deserializeAws_restJson1S3KeyOutputs = (
  output: any,
  context: __SerdeContext
): S3KeyOutput[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1S3KeyOutput(entry, context)
  );
};

const deserializeAws_restJson1S3Object = (
  output: any,
  context: __SerdeContext
): S3Object => {
  return {
    __type: "S3Object",
    bucket:
      output.bucket !== undefined && output.bucket !== null
        ? output.bucket
        : undefined,
    etag:
      output.etag !== undefined && output.etag !== null
        ? output.etag
        : undefined,
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined
  } as any;
};

const deserializeAws_restJson1SecurityGroups = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1SimulationApplicationConfig = (
  output: any,
  context: __SerdeContext
): SimulationApplicationConfig => {
  return {
    __type: "SimulationApplicationConfig",
    application:
      output.application !== undefined && output.application !== null
        ? output.application
        : undefined,
    applicationVersion:
      output.applicationVersion !== undefined &&
      output.applicationVersion !== null
        ? output.applicationVersion
        : undefined,
    launchConfig:
      output.launchConfig !== undefined && output.launchConfig !== null
        ? deserializeAws_restJson1LaunchConfig(output.launchConfig, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1SimulationApplicationConfigs = (
  output: any,
  context: __SerdeContext
): SimulationApplicationConfig[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SimulationApplicationConfig(entry, context)
  );
};

const deserializeAws_restJson1SimulationApplicationNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1SimulationApplicationSummaries = (
  output: any,
  context: __SerdeContext
): SimulationApplicationSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SimulationApplicationSummary(entry, context)
  );
};

const deserializeAws_restJson1SimulationApplicationSummary = (
  output: any,
  context: __SerdeContext
): SimulationApplicationSummary => {
  return {
    __type: "SimulationApplicationSummary",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    robotSoftwareSuite:
      output.robotSoftwareSuite !== undefined &&
      output.robotSoftwareSuite !== null
        ? deserializeAws_restJson1RobotSoftwareSuite(
            output.robotSoftwareSuite,
            context
          )
        : undefined,
    simulationSoftwareSuite:
      output.simulationSoftwareSuite !== undefined &&
      output.simulationSoftwareSuite !== null
        ? deserializeAws_restJson1SimulationSoftwareSuite(
            output.simulationSoftwareSuite,
            context
          )
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1SimulationJob = (
  output: any,
  context: __SerdeContext
): SimulationJob => {
  return {
    __type: "SimulationJob",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    clientRequestToken:
      output.clientRequestToken !== undefined &&
      output.clientRequestToken !== null
        ? output.clientRequestToken
        : undefined,
    dataSources:
      output.dataSources !== undefined && output.dataSources !== null
        ? deserializeAws_restJson1DataSources(output.dataSources, context)
        : undefined,
    failureBehavior:
      output.failureBehavior !== undefined && output.failureBehavior !== null
        ? output.failureBehavior
        : undefined,
    failureCode:
      output.failureCode !== undefined && output.failureCode !== null
        ? output.failureCode
        : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null
        ? output.failureReason
        : undefined,
    iamRole:
      output.iamRole !== undefined && output.iamRole !== null
        ? output.iamRole
        : undefined,
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
      output.maxJobDurationInSeconds !== undefined &&
      output.maxJobDurationInSeconds !== null
        ? output.maxJobDurationInSeconds
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    networkInterface:
      output.networkInterface !== undefined && output.networkInterface !== null
        ? deserializeAws_restJson1NetworkInterface(
            output.networkInterface,
            context
          )
        : undefined,
    outputLocation:
      output.outputLocation !== undefined && output.outputLocation !== null
        ? deserializeAws_restJson1OutputLocation(output.outputLocation, context)
        : undefined,
    robotApplications:
      output.robotApplications !== undefined &&
      output.robotApplications !== null
        ? deserializeAws_restJson1RobotApplicationConfigs(
            output.robotApplications,
            context
          )
        : undefined,
    simulationApplications:
      output.simulationApplications !== undefined &&
      output.simulationApplications !== null
        ? deserializeAws_restJson1SimulationApplicationConfigs(
            output.simulationApplications,
            context
          )
        : undefined,
    simulationTimeMillis:
      output.simulationTimeMillis !== undefined &&
      output.simulationTimeMillis !== null
        ? output.simulationTimeMillis
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined,
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    vpcConfig:
      output.vpcConfig !== undefined && output.vpcConfig !== null
        ? deserializeAws_restJson1VPCConfigResponse(output.vpcConfig, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1SimulationJobs = (
  output: any,
  context: __SerdeContext
): SimulationJob[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SimulationJob(entry, context)
  );
};

const deserializeAws_restJson1SimulationJobSummaries = (
  output: any,
  context: __SerdeContext
): SimulationJobSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SimulationJobSummary(entry, context)
  );
};

const deserializeAws_restJson1SimulationJobSummary = (
  output: any,
  context: __SerdeContext
): SimulationJobSummary => {
  return {
    __type: "SimulationJobSummary",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    dataSourceNames:
      output.dataSourceNames !== undefined && output.dataSourceNames !== null
        ? deserializeAws_restJson1DataSourceNames(
            output.dataSourceNames,
            context
          )
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    robotApplicationNames:
      output.robotApplicationNames !== undefined &&
      output.robotApplicationNames !== null
        ? deserializeAws_restJson1RobotApplicationNames(
            output.robotApplicationNames,
            context
          )
        : undefined,
    simulationApplicationNames:
      output.simulationApplicationNames !== undefined &&
      output.simulationApplicationNames !== null
        ? deserializeAws_restJson1SimulationApplicationNames(
            output.simulationApplicationNames,
            context
          )
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1SimulationSoftwareSuite = (
  output: any,
  context: __SerdeContext
): SimulationSoftwareSuite => {
  return {
    __type: "SimulationSoftwareSuite",
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1Source = (
  output: any,
  context: __SerdeContext
): Source => {
  return {
    __type: "Source",
    architecture:
      output.architecture !== undefined && output.architecture !== null
        ? output.architecture
        : undefined,
    etag:
      output.etag !== undefined && output.etag !== null
        ? output.etag
        : undefined,
    s3Bucket:
      output.s3Bucket !== undefined && output.s3Bucket !== null
        ? output.s3Bucket
        : undefined,
    s3Key:
      output.s3Key !== undefined && output.s3Key !== null
        ? output.s3Key
        : undefined
  } as any;
};

const deserializeAws_restJson1Sources = (
  output: any,
  context: __SerdeContext
): Source[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Source(entry, context)
  );
};

const deserializeAws_restJson1Subnets = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1VPCConfigResponse = (
  output: any,
  context: __SerdeContext
): VPCConfigResponse => {
  return {
    __type: "VPCConfigResponse",
    assignPublicIp:
      output.assignPublicIp !== undefined && output.assignPublicIp !== null
        ? output.assignPublicIp
        : undefined,
    securityGroups:
      output.securityGroups !== undefined && output.securityGroups !== null
        ? deserializeAws_restJson1SecurityGroups(output.securityGroups, context)
        : undefined,
    subnets:
      output.subnets !== undefined && output.subnets !== null
        ? deserializeAws_restJson1Subnets(output.subnets, context)
        : undefined,
    vpcId:
      output.vpcId !== undefined && output.vpcId !== null
        ? output.vpcId
        : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
