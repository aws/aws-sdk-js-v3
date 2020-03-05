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

export async function serializeAws_restJson1_1BatchDescribeSimulationJobCommand(
  input: BatchDescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/batchDescribeSimulationJob";
  let body: any;
  const bodyParams: any = {};
  if (input.jobs !== undefined) {
    bodyParams["jobs"] = serializeAws_restJson1_1Arns(input.jobs, context);
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

export async function serializeAws_restJson1_1CancelDeploymentJobCommand(
  input: CancelDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/cancelDeploymentJob";
  let body: any;
  const bodyParams: any = {};
  if (input.job !== undefined) {
    bodyParams["job"] = input.job;
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

export async function serializeAws_restJson1_1CancelSimulationJobCommand(
  input: CancelSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/cancelSimulationJob";
  let body: any;
  const bodyParams: any = {};
  if (input.job !== undefined) {
    bodyParams["job"] = input.job;
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

export async function serializeAws_restJson1_1CreateDeploymentJobCommand(
  input: CreateDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createDeploymentJob";
  let body: any;
  const bodyParams: any = {};
  if (input.clientRequestToken === undefined) {
    input.clientRequestToken = generateIdempotencyToken();
  }
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.deploymentApplicationConfigs !== undefined) {
    bodyParams[
      "deploymentApplicationConfigs"
    ] = serializeAws_restJson1_1DeploymentApplicationConfigs(
      input.deploymentApplicationConfigs,
      context
    );
  }
  if (input.deploymentConfig !== undefined) {
    bodyParams["deploymentConfig"] = serializeAws_restJson1_1DeploymentConfig(
      input.deploymentConfig,
      context
    );
  }
  if (input.fleet !== undefined) {
    bodyParams["fleet"] = input.fleet;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
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

export async function serializeAws_restJson1_1CreateFleetCommand(
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createFleet";
  let body: any;
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
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

export async function serializeAws_restJson1_1CreateRobotCommand(
  input: CreateRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createRobot";
  let body: any;
  const bodyParams: any = {};
  if (input.architecture !== undefined) {
    bodyParams["architecture"] = input.architecture;
  }
  if (input.greengrassGroupId !== undefined) {
    bodyParams["greengrassGroupId"] = input.greengrassGroupId;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
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

export async function serializeAws_restJson1_1CreateRobotApplicationCommand(
  input: CreateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createRobotApplication";
  let body: any;
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.robotSoftwareSuite !== undefined) {
    bodyParams[
      "robotSoftwareSuite"
    ] = serializeAws_restJson1_1RobotSoftwareSuite(
      input.robotSoftwareSuite,
      context
    );
  }
  if (input.sources !== undefined) {
    bodyParams["sources"] = serializeAws_restJson1_1SourceConfigs(
      input.sources,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
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

export async function serializeAws_restJson1_1CreateRobotApplicationVersionCommand(
  input: CreateRobotApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createRobotApplicationVersion";
  let body: any;
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.currentRevisionId !== undefined) {
    bodyParams["currentRevisionId"] = input.currentRevisionId;
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

export async function serializeAws_restJson1_1CreateSimulationApplicationCommand(
  input: CreateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createSimulationApplication";
  let body: any;
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.renderingEngine !== undefined) {
    bodyParams["renderingEngine"] = serializeAws_restJson1_1RenderingEngine(
      input.renderingEngine,
      context
    );
  }
  if (input.robotSoftwareSuite !== undefined) {
    bodyParams[
      "robotSoftwareSuite"
    ] = serializeAws_restJson1_1RobotSoftwareSuite(
      input.robotSoftwareSuite,
      context
    );
  }
  if (input.simulationSoftwareSuite !== undefined) {
    bodyParams[
      "simulationSoftwareSuite"
    ] = serializeAws_restJson1_1SimulationSoftwareSuite(
      input.simulationSoftwareSuite,
      context
    );
  }
  if (input.sources !== undefined) {
    bodyParams["sources"] = serializeAws_restJson1_1SourceConfigs(
      input.sources,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
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

export async function serializeAws_restJson1_1CreateSimulationApplicationVersionCommand(
  input: CreateSimulationApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createSimulationApplicationVersion";
  let body: any;
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.currentRevisionId !== undefined) {
    bodyParams["currentRevisionId"] = input.currentRevisionId;
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

export async function serializeAws_restJson1_1CreateSimulationJobCommand(
  input: CreateSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/createSimulationJob";
  let body: any;
  const bodyParams: any = {};
  if (input.clientRequestToken === undefined) {
    input.clientRequestToken = generateIdempotencyToken();
  }
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.dataSources !== undefined) {
    bodyParams["dataSources"] = serializeAws_restJson1_1DataSourceConfigs(
      input.dataSources,
      context
    );
  }
  if (input.failureBehavior !== undefined) {
    bodyParams["failureBehavior"] = input.failureBehavior;
  }
  if (input.iamRole !== undefined) {
    bodyParams["iamRole"] = input.iamRole;
  }
  if (input.loggingConfig !== undefined) {
    bodyParams["loggingConfig"] = serializeAws_restJson1_1LoggingConfig(
      input.loggingConfig,
      context
    );
  }
  if (input.maxJobDurationInSeconds !== undefined) {
    bodyParams["maxJobDurationInSeconds"] = input.maxJobDurationInSeconds;
  }
  if (input.outputLocation !== undefined) {
    bodyParams["outputLocation"] = serializeAws_restJson1_1OutputLocation(
      input.outputLocation,
      context
    );
  }
  if (input.robotApplications !== undefined) {
    bodyParams[
      "robotApplications"
    ] = serializeAws_restJson1_1RobotApplicationConfigs(
      input.robotApplications,
      context
    );
  }
  if (input.simulationApplications !== undefined) {
    bodyParams[
      "simulationApplications"
    ] = serializeAws_restJson1_1SimulationApplicationConfigs(
      input.simulationApplications,
      context
    );
  }
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
  }
  if (input.vpcConfig !== undefined) {
    bodyParams["vpcConfig"] = serializeAws_restJson1_1VPCConfig(
      input.vpcConfig,
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

export async function serializeAws_restJson1_1DeleteFleetCommand(
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deleteFleet";
  let body: any;
  const bodyParams: any = {};
  if (input.fleet !== undefined) {
    bodyParams["fleet"] = input.fleet;
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

export async function serializeAws_restJson1_1DeleteRobotCommand(
  input: DeleteRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deleteRobot";
  let body: any;
  const bodyParams: any = {};
  if (input.robot !== undefined) {
    bodyParams["robot"] = input.robot;
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

export async function serializeAws_restJson1_1DeleteRobotApplicationCommand(
  input: DeleteRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deleteRobotApplication";
  let body: any;
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.applicationVersion !== undefined) {
    bodyParams["applicationVersion"] = input.applicationVersion;
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

export async function serializeAws_restJson1_1DeleteSimulationApplicationCommand(
  input: DeleteSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deleteSimulationApplication";
  let body: any;
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.applicationVersion !== undefined) {
    bodyParams["applicationVersion"] = input.applicationVersion;
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

export async function serializeAws_restJson1_1DeregisterRobotCommand(
  input: DeregisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/deregisterRobot";
  let body: any;
  const bodyParams: any = {};
  if (input.fleet !== undefined) {
    bodyParams["fleet"] = input.fleet;
  }
  if (input.robot !== undefined) {
    bodyParams["robot"] = input.robot;
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

export async function serializeAws_restJson1_1DescribeDeploymentJobCommand(
  input: DescribeDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeDeploymentJob";
  let body: any;
  const bodyParams: any = {};
  if (input.job !== undefined) {
    bodyParams["job"] = input.job;
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

export async function serializeAws_restJson1_1DescribeFleetCommand(
  input: DescribeFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeFleet";
  let body: any;
  const bodyParams: any = {};
  if (input.fleet !== undefined) {
    bodyParams["fleet"] = input.fleet;
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

export async function serializeAws_restJson1_1DescribeRobotCommand(
  input: DescribeRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeRobot";
  let body: any;
  const bodyParams: any = {};
  if (input.robot !== undefined) {
    bodyParams["robot"] = input.robot;
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

export async function serializeAws_restJson1_1DescribeRobotApplicationCommand(
  input: DescribeRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeRobotApplication";
  let body: any;
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.applicationVersion !== undefined) {
    bodyParams["applicationVersion"] = input.applicationVersion;
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

export async function serializeAws_restJson1_1DescribeSimulationApplicationCommand(
  input: DescribeSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeSimulationApplication";
  let body: any;
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.applicationVersion !== undefined) {
    bodyParams["applicationVersion"] = input.applicationVersion;
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

export async function serializeAws_restJson1_1DescribeSimulationJobCommand(
  input: DescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/describeSimulationJob";
  let body: any;
  const bodyParams: any = {};
  if (input.job !== undefined) {
    bodyParams["job"] = input.job;
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

export async function serializeAws_restJson1_1ListDeploymentJobsCommand(
  input: ListDeploymentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listDeploymentJobs";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1Filters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
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

export async function serializeAws_restJson1_1ListFleetsCommand(
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listFleets";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1Filters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
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

export async function serializeAws_restJson1_1ListRobotApplicationsCommand(
  input: ListRobotApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listRobotApplications";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1Filters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.versionQualifier !== undefined) {
    bodyParams["versionQualifier"] = input.versionQualifier;
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

export async function serializeAws_restJson1_1ListRobotsCommand(
  input: ListRobotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listRobots";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1Filters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
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

export async function serializeAws_restJson1_1ListSimulationApplicationsCommand(
  input: ListSimulationApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listSimulationApplications";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1Filters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.versionQualifier !== undefined) {
    bodyParams["versionQualifier"] = input.versionQualifier;
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

export async function serializeAws_restJson1_1ListSimulationJobsCommand(
  input: ListSimulationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/listSimulationJobs";
  let body: any;
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_restJson1_1Filters(
      input.filters,
      context
    );
  }
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
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

export async function serializeAws_restJson1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1RegisterRobotCommand(
  input: RegisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/registerRobot";
  let body: any;
  const bodyParams: any = {};
  if (input.fleet !== undefined) {
    bodyParams["fleet"] = input.fleet;
  }
  if (input.robot !== undefined) {
    bodyParams["robot"] = input.robot;
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

export async function serializeAws_restJson1_1RestartSimulationJobCommand(
  input: RestartSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/restartSimulationJob";
  let body: any;
  const bodyParams: any = {};
  if (input.job !== undefined) {
    bodyParams["job"] = input.job;
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

export async function serializeAws_restJson1_1SyncDeploymentJobCommand(
  input: SyncDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/syncDeploymentJob";
  let body: any;
  const bodyParams: any = {};
  if (input.clientRequestToken === undefined) {
    input.clientRequestToken = generateIdempotencyToken();
  }
  if (input.clientRequestToken !== undefined) {
    bodyParams["clientRequestToken"] = input.clientRequestToken;
  }
  if (input.fleet !== undefined) {
    bodyParams["fleet"] = input.fleet;
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

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
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
  const bodyParams: any = {};
  if (input.tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1TagMap(input.tags, context);
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
  const query: any = {};
  if (input.tagKeys !== undefined) {
    query["tagKeys"] = input.tagKeys;
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

export async function serializeAws_restJson1_1UpdateRobotApplicationCommand(
  input: UpdateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateRobotApplication";
  let body: any;
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.currentRevisionId !== undefined) {
    bodyParams["currentRevisionId"] = input.currentRevisionId;
  }
  if (input.robotSoftwareSuite !== undefined) {
    bodyParams[
      "robotSoftwareSuite"
    ] = serializeAws_restJson1_1RobotSoftwareSuite(
      input.robotSoftwareSuite,
      context
    );
  }
  if (input.sources !== undefined) {
    bodyParams["sources"] = serializeAws_restJson1_1SourceConfigs(
      input.sources,
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

export async function serializeAws_restJson1_1UpdateSimulationApplicationCommand(
  input: UpdateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/updateSimulationApplication";
  let body: any;
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.currentRevisionId !== undefined) {
    bodyParams["currentRevisionId"] = input.currentRevisionId;
  }
  if (input.renderingEngine !== undefined) {
    bodyParams["renderingEngine"] = serializeAws_restJson1_1RenderingEngine(
      input.renderingEngine,
      context
    );
  }
  if (input.robotSoftwareSuite !== undefined) {
    bodyParams[
      "robotSoftwareSuite"
    ] = serializeAws_restJson1_1RobotSoftwareSuite(
      input.robotSoftwareSuite,
      context
    );
  }
  if (input.simulationSoftwareSuite !== undefined) {
    bodyParams[
      "simulationSoftwareSuite"
    ] = serializeAws_restJson1_1SimulationSoftwareSuite(
      input.simulationSoftwareSuite,
      context
    );
  }
  if (input.sources !== undefined) {
    bodyParams["sources"] = serializeAws_restJson1_1SourceConfigs(
      input.sources,
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

export async function deserializeAws_restJson1_1BatchDescribeSimulationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchDescribeSimulationJobCommandError(
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
    contents.jobs = deserializeAws_restJson1_1SimulationJobs(
      data.jobs,
      context
    );
  }
  if (data.unprocessedJobs !== undefined && data.unprocessedJobs !== null) {
    contents.unprocessedJobs = deserializeAws_restJson1_1Arns(
      data.unprocessedJobs,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchDescribeSimulationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CancelDeploymentJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelDeploymentJobCommandError(
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
}

async function deserializeAws_restJson1_1CancelDeploymentJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CancelSimulationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CancelSimulationJobCommandError(
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
}

async function deserializeAws_restJson1_1CancelSimulationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateDeploymentJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDeploymentJobCommandError(
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
    contents.deploymentApplicationConfigs = deserializeAws_restJson1_1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1_1DeploymentConfig(
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
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateDeploymentJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentDeploymentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateFleetCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateRobotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateRobotCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateRobotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateRobotApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateRobotApplicationCommandError(
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
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1_1Sources(data.sources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateRobotApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateRobotApplicationVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateRobotApplicationVersionCommandError(
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
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1_1Sources(data.sources, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateRobotApplicationVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateSimulationApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSimulationApplicationCommandError(
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
    contents.renderingEngine = deserializeAws_restJson1_1RenderingEngine(
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
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (
    data.simulationSoftwareSuite !== undefined &&
    data.simulationSoftwareSuite !== null
  ) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1_1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1_1Sources(data.sources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateSimulationApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateSimulationApplicationVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationVersionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSimulationApplicationVersionCommandError(
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
    contents.renderingEngine = deserializeAws_restJson1_1RenderingEngine(
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
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (
    data.simulationSoftwareSuite !== undefined &&
    data.simulationSoftwareSuite !== null
  ) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1_1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1_1Sources(data.sources, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateSimulationApplicationVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateSimulationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSimulationJobCommandError(
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
    contents.dataSources = deserializeAws_restJson1_1DataSources(
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
    contents.loggingConfig = deserializeAws_restJson1_1LoggingConfig(
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
    contents.outputLocation = deserializeAws_restJson1_1OutputLocation(
      data.outputLocation,
      context
    );
  }
  if (data.robotApplications !== undefined && data.robotApplications !== null) {
    contents.robotApplications = deserializeAws_restJson1_1RobotApplicationConfigs(
      data.robotApplications,
      context
    );
  }
  if (
    data.simulationApplications !== undefined &&
    data.simulationApplications !== null
  ) {
    contents.simulationApplications = deserializeAws_restJson1_1SimulationApplicationConfigs(
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
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
    contents.vpcConfig = deserializeAws_restJson1_1VPCConfigResponse(
      data.vpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateSimulationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFleetCommandError(output, context);
  }
  const contents: DeleteFleetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteFleetResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteRobotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRobotCommandError(output, context);
  }
  const contents: DeleteRobotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRobotResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteRobotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteRobotApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRobotApplicationCommandError(
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
}

async function deserializeAws_restJson1_1DeleteRobotApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteSimulationApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSimulationApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSimulationApplicationCommandError(
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
}

async function deserializeAws_restJson1_1DeleteSimulationApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSimulationApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeregisterRobotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRobotCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeregisterRobotCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1DeregisterRobotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRobotCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeDeploymentJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDeploymentJobCommandError(
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
    contents.deploymentApplicationConfigs = deserializeAws_restJson1_1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1_1DeploymentConfig(
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
    contents.robotDeploymentSummary = deserializeAws_restJson1_1RobotDeploymentSummary(
      data.robotDeploymentSummary,
      context
    );
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeDeploymentJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeFleetCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeFleetCommandError(output, context);
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
    contents.robots = deserializeAws_restJson1_1Robots(data.robots, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeFleetCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeRobotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRobotCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeRobotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeRobotApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRobotApplicationCommandError(
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
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1_1Sources(data.sources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeRobotApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeSimulationApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSimulationApplicationCommandError(
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
    contents.renderingEngine = deserializeAws_restJson1_1RenderingEngine(
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
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (
    data.simulationSoftwareSuite !== undefined &&
    data.simulationSoftwareSuite !== null
  ) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1_1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1_1Sources(data.sources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeSimulationApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeSimulationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSimulationJobCommandError(
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
    contents.dataSources = deserializeAws_restJson1_1DataSources(
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
    contents.loggingConfig = deserializeAws_restJson1_1LoggingConfig(
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
    contents.networkInterface = deserializeAws_restJson1_1NetworkInterface(
      data.networkInterface,
      context
    );
  }
  if (data.outputLocation !== undefined && data.outputLocation !== null) {
    contents.outputLocation = deserializeAws_restJson1_1OutputLocation(
      data.outputLocation,
      context
    );
  }
  if (data.robotApplications !== undefined && data.robotApplications !== null) {
    contents.robotApplications = deserializeAws_restJson1_1RobotApplicationConfigs(
      data.robotApplications,
      context
    );
  }
  if (
    data.simulationApplications !== undefined &&
    data.simulationApplications !== null
  ) {
    contents.simulationApplications = deserializeAws_restJson1_1SimulationApplicationConfigs(
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
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  if (data.vpcConfig !== undefined && data.vpcConfig !== null) {
    contents.vpcConfig = deserializeAws_restJson1_1VPCConfigResponse(
      data.vpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeSimulationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListDeploymentJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDeploymentJobsCommandError(
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
    contents.deploymentJobs = deserializeAws_restJson1_1DeploymentJobs(
      data.deploymentJobs,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListDeploymentJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListFleetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFleetsCommandError(output, context);
  }
  const contents: ListFleetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFleetsResponse",
    fleetDetails: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.fleetDetails !== undefined && data.fleetDetails !== null) {
    contents.fleetDetails = deserializeAws_restJson1_1Fleets(
      data.fleetDetails,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListFleetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListRobotApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotApplicationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRobotApplicationsCommandError(
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
    contents.robotApplicationSummaries = deserializeAws_restJson1_1RobotApplicationSummaries(
      data.robotApplicationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRobotApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotApplicationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListRobotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRobotsCommandError(output, context);
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
    contents.robots = deserializeAws_restJson1_1Robots(data.robots, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRobotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListSimulationApplicationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationApplicationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSimulationApplicationsCommandError(
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
    contents.simulationApplicationSummaries = deserializeAws_restJson1_1SimulationApplicationSummaries(
      data.simulationApplicationSummaries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSimulationApplicationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationApplicationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListSimulationJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSimulationJobsCommandError(
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
    contents.simulationJobSummaries = deserializeAws_restJson1_1SimulationJobSummaries(
      data.simulationJobSummaries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListSimulationJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1RegisterRobotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRobotCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RegisterRobotCommandError(output, context);
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
}

async function deserializeAws_restJson1_1RegisterRobotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRobotCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1RestartSimulationJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartSimulationJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RestartSimulationJobCommandError(
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
}

async function deserializeAws_restJson1_1RestartSimulationJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartSimulationJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1SyncDeploymentJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncDeploymentJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SyncDeploymentJobCommandError(
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
    contents.deploymentApplicationConfigs = deserializeAws_restJson1_1DeploymentApplicationConfigs(
      data.deploymentApplicationConfigs,
      context
    );
  }
  if (data.deploymentConfig !== undefined && data.deploymentConfig !== null) {
    contents.deploymentConfig = deserializeAws_restJson1_1DeploymentConfig(
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
}

async function deserializeAws_restJson1_1SyncDeploymentJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncDeploymentJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      response = {
        ...(await deserializeAws_restJson1_1ConcurrentDeploymentExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      response = {
        ...(await deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateRobotApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateRobotApplicationCommandError(
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
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1_1Sources(data.sources, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateRobotApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UpdateSimulationApplicationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSimulationApplicationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateSimulationApplicationCommandError(
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
    contents.renderingEngine = deserializeAws_restJson1_1RenderingEngine(
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
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      data.robotSoftwareSuite,
      context
    );
  }
  if (
    data.simulationSoftwareSuite !== undefined &&
    data.simulationSoftwareSuite !== null
  ) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1_1SimulationSoftwareSuite(
      data.simulationSoftwareSuite,
      context
    );
  }
  if (data.sources !== undefined && data.sources !== null) {
    contents.sources = deserializeAws_restJson1_1Sources(data.sources, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateSimulationApplicationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSimulationApplicationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.robomaker#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterException":
    case "com.amazonaws.robomaker#InvalidParameterException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.robomaker#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottlingExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1ConcurrentDeploymentExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConcurrentDeploymentException> => {
  const contents: ConcurrentDeploymentException = {
    name: "ConcurrentDeploymentException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1IdempotentParameterMismatchExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<IdempotentParameterMismatchException> => {
  const contents: IdempotentParameterMismatchException = {
    name: "IdempotentParameterMismatchException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: InvalidParameterException = {
    name: "InvalidParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceAlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottlingExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1Arns = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1DataSourceConfig = (
  input: DataSourceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.s3Bucket !== undefined) {
    bodyParams["s3Bucket"] = input.s3Bucket;
  }
  if (input.s3Keys !== undefined) {
    bodyParams["s3Keys"] = serializeAws_restJson1_1S3Keys(
      input.s3Keys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DataSourceConfigs = (
  input: Array<DataSourceConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1DataSourceConfig(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1DeploymentApplicationConfig = (
  input: DeploymentApplicationConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.applicationVersion !== undefined) {
    bodyParams["applicationVersion"] = input.applicationVersion;
  }
  if (input.launchConfig !== undefined) {
    bodyParams["launchConfig"] = serializeAws_restJson1_1DeploymentLaunchConfig(
      input.launchConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeploymentApplicationConfigs = (
  input: Array<DeploymentApplicationConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1DeploymentApplicationConfig(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1DeploymentConfig = (
  input: DeploymentConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.concurrentDeploymentPercentage !== undefined) {
    bodyParams["concurrentDeploymentPercentage"] =
      input.concurrentDeploymentPercentage;
  }
  if (input.downloadConditionFile !== undefined) {
    bodyParams["downloadConditionFile"] = serializeAws_restJson1_1S3Object(
      input.downloadConditionFile,
      context
    );
  }
  if (input.failureThresholdPercentage !== undefined) {
    bodyParams["failureThresholdPercentage"] = input.failureThresholdPercentage;
  }
  if (input.robotDeploymentTimeoutInSeconds !== undefined) {
    bodyParams["robotDeploymentTimeoutInSeconds"] =
      input.robotDeploymentTimeoutInSeconds;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DeploymentLaunchConfig = (
  input: DeploymentLaunchConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.environmentVariables !== undefined) {
    bodyParams[
      "environmentVariables"
    ] = serializeAws_restJson1_1EnvironmentVariableMap(
      input.environmentVariables,
      context
    );
  }
  if (input.launchFile !== undefined) {
    bodyParams["launchFile"] = input.launchFile;
  }
  if (input.packageName !== undefined) {
    bodyParams["packageName"] = input.packageName;
  }
  if (input.postLaunchFile !== undefined) {
    bodyParams["postLaunchFile"] = input.postLaunchFile;
  }
  if (input.preLaunchFile !== undefined) {
    bodyParams["preLaunchFile"] = input.preLaunchFile;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EnvironmentVariableMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1Filter = (
  input: Filter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_restJson1_1FilterValues(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Filters = (
  input: Array<Filter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Filter(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1LaunchConfig = (
  input: LaunchConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.environmentVariables !== undefined) {
    bodyParams[
      "environmentVariables"
    ] = serializeAws_restJson1_1EnvironmentVariableMap(
      input.environmentVariables,
      context
    );
  }
  if (input.launchFile !== undefined) {
    bodyParams["launchFile"] = input.launchFile;
  }
  if (input.packageName !== undefined) {
    bodyParams["packageName"] = input.packageName;
  }
  if (input.portForwardingConfig !== undefined) {
    bodyParams[
      "portForwardingConfig"
    ] = serializeAws_restJson1_1PortForwardingConfig(
      input.portForwardingConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1LoggingConfig = (
  input: LoggingConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.recordAllRosTopics !== undefined) {
    bodyParams["recordAllRosTopics"] = input.recordAllRosTopics;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputLocation = (
  input: OutputLocation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.s3Bucket !== undefined) {
    bodyParams["s3Bucket"] = input.s3Bucket;
  }
  if (input.s3Prefix !== undefined) {
    bodyParams["s3Prefix"] = input.s3Prefix;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PortForwardingConfig = (
  input: PortForwardingConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.portMappings !== undefined) {
    bodyParams["portMappings"] = serializeAws_restJson1_1PortMappingList(
      input.portMappings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1PortMapping = (
  input: PortMapping,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.applicationPort !== undefined) {
    bodyParams["applicationPort"] = input.applicationPort;
  }
  if (input.enableOnPublicIp !== undefined) {
    bodyParams["enableOnPublicIp"] = input.enableOnPublicIp;
  }
  if (input.jobPort !== undefined) {
    bodyParams["jobPort"] = input.jobPort;
  }
  return bodyParams;
};

const serializeAws_restJson1_1PortMappingList = (
  input: Array<PortMapping>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1PortMapping(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1RenderingEngine = (
  input: RenderingEngine,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_restJson1_1RobotApplicationConfig = (
  input: RobotApplicationConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.applicationVersion !== undefined) {
    bodyParams["applicationVersion"] = input.applicationVersion;
  }
  if (input.launchConfig !== undefined) {
    bodyParams["launchConfig"] = serializeAws_restJson1_1LaunchConfig(
      input.launchConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1RobotApplicationConfigs = (
  input: Array<RobotApplicationConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1RobotApplicationConfig(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1RobotSoftwareSuite = (
  input: RobotSoftwareSuite,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3Keys = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1S3Object = (
  input: S3Object,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bucket !== undefined) {
    bodyParams["bucket"] = input.bucket;
  }
  if (input.etag !== undefined) {
    bodyParams["etag"] = input.etag;
  }
  if (input.key !== undefined) {
    bodyParams["key"] = input.key;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SecurityGroups = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SimulationApplicationConfig = (
  input: SimulationApplicationConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.application !== undefined) {
    bodyParams["application"] = input.application;
  }
  if (input.applicationVersion !== undefined) {
    bodyParams["applicationVersion"] = input.applicationVersion;
  }
  if (input.launchConfig !== undefined) {
    bodyParams["launchConfig"] = serializeAws_restJson1_1LaunchConfig(
      input.launchConfig,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SimulationApplicationConfigs = (
  input: Array<SimulationApplicationConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1SimulationApplicationConfig(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1SimulationSoftwareSuite = (
  input: SimulationSoftwareSuite,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.version !== undefined) {
    bodyParams["version"] = input.version;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SourceConfig = (
  input: SourceConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.architecture !== undefined) {
    bodyParams["architecture"] = input.architecture;
  }
  if (input.s3Bucket !== undefined) {
    bodyParams["s3Bucket"] = input.s3Bucket;
  }
  if (input.s3Key !== undefined) {
    bodyParams["s3Key"] = input.s3Key;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SourceConfigs = (
  input: Array<SourceConfig>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1SourceConfig(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Subnets = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1VPCConfig = (
  input: VPCConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.assignPublicIp !== undefined) {
    bodyParams["assignPublicIp"] = input.assignPublicIp;
  }
  if (input.securityGroups !== undefined) {
    bodyParams["securityGroups"] = serializeAws_restJson1_1SecurityGroups(
      input.securityGroups,
      context
    );
  }
  if (input.subnets !== undefined) {
    bodyParams["subnets"] = serializeAws_restJson1_1Subnets(
      input.subnets,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1Arns = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DataSource = (
  output: any,
  context: __SerdeContext
): DataSource => {
  let contents: any = {
    __type: "DataSource",
    name: undefined,
    s3Bucket: undefined,
    s3Keys: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.s3Bucket !== undefined && output.s3Bucket !== null) {
    contents.s3Bucket = output.s3Bucket;
  }
  if (output.s3Keys !== undefined && output.s3Keys !== null) {
    contents.s3Keys = deserializeAws_restJson1_1S3KeyOutputs(
      output.s3Keys,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DataSourceNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1DataSources = (
  output: any,
  context: __SerdeContext
): Array<DataSource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataSource(entry, context)
  );
};

const deserializeAws_restJson1_1DeploymentApplicationConfig = (
  output: any,
  context: __SerdeContext
): DeploymentApplicationConfig => {
  let contents: any = {
    __type: "DeploymentApplicationConfig",
    application: undefined,
    applicationVersion: undefined,
    launchConfig: undefined
  };
  if (output.application !== undefined && output.application !== null) {
    contents.application = output.application;
  }
  if (
    output.applicationVersion !== undefined &&
    output.applicationVersion !== null
  ) {
    contents.applicationVersion = output.applicationVersion;
  }
  if (output.launchConfig !== undefined && output.launchConfig !== null) {
    contents.launchConfig = deserializeAws_restJson1_1DeploymentLaunchConfig(
      output.launchConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DeploymentApplicationConfigs = (
  output: any,
  context: __SerdeContext
): Array<DeploymentApplicationConfig> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeploymentApplicationConfig(entry, context)
  );
};

const deserializeAws_restJson1_1DeploymentConfig = (
  output: any,
  context: __SerdeContext
): DeploymentConfig => {
  let contents: any = {
    __type: "DeploymentConfig",
    concurrentDeploymentPercentage: undefined,
    downloadConditionFile: undefined,
    failureThresholdPercentage: undefined,
    robotDeploymentTimeoutInSeconds: undefined
  };
  if (
    output.concurrentDeploymentPercentage !== undefined &&
    output.concurrentDeploymentPercentage !== null
  ) {
    contents.concurrentDeploymentPercentage =
      output.concurrentDeploymentPercentage;
  }
  if (
    output.downloadConditionFile !== undefined &&
    output.downloadConditionFile !== null
  ) {
    contents.downloadConditionFile = deserializeAws_restJson1_1S3Object(
      output.downloadConditionFile,
      context
    );
  }
  if (
    output.failureThresholdPercentage !== undefined &&
    output.failureThresholdPercentage !== null
  ) {
    contents.failureThresholdPercentage = output.failureThresholdPercentage;
  }
  if (
    output.robotDeploymentTimeoutInSeconds !== undefined &&
    output.robotDeploymentTimeoutInSeconds !== null
  ) {
    contents.robotDeploymentTimeoutInSeconds =
      output.robotDeploymentTimeoutInSeconds;
  }
  return contents;
};

const deserializeAws_restJson1_1DeploymentJob = (
  output: any,
  context: __SerdeContext
): DeploymentJob => {
  let contents: any = {
    __type: "DeploymentJob",
    arn: undefined,
    createdAt: undefined,
    deploymentApplicationConfigs: undefined,
    deploymentConfig: undefined,
    failureCode: undefined,
    failureReason: undefined,
    fleet: undefined,
    status: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (
    output.deploymentApplicationConfigs !== undefined &&
    output.deploymentApplicationConfigs !== null
  ) {
    contents.deploymentApplicationConfigs = deserializeAws_restJson1_1DeploymentApplicationConfigs(
      output.deploymentApplicationConfigs,
      context
    );
  }
  if (
    output.deploymentConfig !== undefined &&
    output.deploymentConfig !== null
  ) {
    contents.deploymentConfig = deserializeAws_restJson1_1DeploymentConfig(
      output.deploymentConfig,
      context
    );
  }
  if (output.failureCode !== undefined && output.failureCode !== null) {
    contents.failureCode = output.failureCode;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.fleet !== undefined && output.fleet !== null) {
    contents.fleet = output.fleet;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1DeploymentJobs = (
  output: any,
  context: __SerdeContext
): Array<DeploymentJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DeploymentJob(entry, context)
  );
};

const deserializeAws_restJson1_1DeploymentLaunchConfig = (
  output: any,
  context: __SerdeContext
): DeploymentLaunchConfig => {
  let contents: any = {
    __type: "DeploymentLaunchConfig",
    environmentVariables: undefined,
    launchFile: undefined,
    packageName: undefined,
    postLaunchFile: undefined,
    preLaunchFile: undefined
  };
  if (
    output.environmentVariables !== undefined &&
    output.environmentVariables !== null
  ) {
    contents.environmentVariables = deserializeAws_restJson1_1EnvironmentVariableMap(
      output.environmentVariables,
      context
    );
  }
  if (output.launchFile !== undefined && output.launchFile !== null) {
    contents.launchFile = output.launchFile;
  }
  if (output.packageName !== undefined && output.packageName !== null) {
    contents.packageName = output.packageName;
  }
  if (output.postLaunchFile !== undefined && output.postLaunchFile !== null) {
    contents.postLaunchFile = output.postLaunchFile;
  }
  if (output.preLaunchFile !== undefined && output.preLaunchFile !== null) {
    contents.preLaunchFile = output.preLaunchFile;
  }
  return contents;
};

const deserializeAws_restJson1_1EnvironmentVariableMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1Fleet = (
  output: any,
  context: __SerdeContext
): Fleet => {
  let contents: any = {
    __type: "Fleet",
    arn: undefined,
    createdAt: undefined,
    lastDeploymentJob: undefined,
    lastDeploymentStatus: undefined,
    lastDeploymentTime: undefined,
    name: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (
    output.lastDeploymentJob !== undefined &&
    output.lastDeploymentJob !== null
  ) {
    contents.lastDeploymentJob = output.lastDeploymentJob;
  }
  if (
    output.lastDeploymentStatus !== undefined &&
    output.lastDeploymentStatus !== null
  ) {
    contents.lastDeploymentStatus = output.lastDeploymentStatus;
  }
  if (
    output.lastDeploymentTime !== undefined &&
    output.lastDeploymentTime !== null
  ) {
    contents.lastDeploymentTime = new Date(
      Math.round(output.lastDeploymentTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1Fleets = (
  output: any,
  context: __SerdeContext
): Array<Fleet> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Fleet(entry, context)
  );
};

const deserializeAws_restJson1_1LaunchConfig = (
  output: any,
  context: __SerdeContext
): LaunchConfig => {
  let contents: any = {
    __type: "LaunchConfig",
    environmentVariables: undefined,
    launchFile: undefined,
    packageName: undefined,
    portForwardingConfig: undefined
  };
  if (
    output.environmentVariables !== undefined &&
    output.environmentVariables !== null
  ) {
    contents.environmentVariables = deserializeAws_restJson1_1EnvironmentVariableMap(
      output.environmentVariables,
      context
    );
  }
  if (output.launchFile !== undefined && output.launchFile !== null) {
    contents.launchFile = output.launchFile;
  }
  if (output.packageName !== undefined && output.packageName !== null) {
    contents.packageName = output.packageName;
  }
  if (
    output.portForwardingConfig !== undefined &&
    output.portForwardingConfig !== null
  ) {
    contents.portForwardingConfig = deserializeAws_restJson1_1PortForwardingConfig(
      output.portForwardingConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1LoggingConfig = (
  output: any,
  context: __SerdeContext
): LoggingConfig => {
  let contents: any = {
    __type: "LoggingConfig",
    recordAllRosTopics: undefined
  };
  if (
    output.recordAllRosTopics !== undefined &&
    output.recordAllRosTopics !== null
  ) {
    contents.recordAllRosTopics = output.recordAllRosTopics;
  }
  return contents;
};

const deserializeAws_restJson1_1NetworkInterface = (
  output: any,
  context: __SerdeContext
): NetworkInterface => {
  let contents: any = {
    __type: "NetworkInterface",
    networkInterfaceId: undefined,
    privateIpAddress: undefined,
    publicIpAddress: undefined
  };
  if (
    output.networkInterfaceId !== undefined &&
    output.networkInterfaceId !== null
  ) {
    contents.networkInterfaceId = output.networkInterfaceId;
  }
  if (
    output.privateIpAddress !== undefined &&
    output.privateIpAddress !== null
  ) {
    contents.privateIpAddress = output.privateIpAddress;
  }
  if (output.publicIpAddress !== undefined && output.publicIpAddress !== null) {
    contents.publicIpAddress = output.publicIpAddress;
  }
  return contents;
};

const deserializeAws_restJson1_1OutputLocation = (
  output: any,
  context: __SerdeContext
): OutputLocation => {
  let contents: any = {
    __type: "OutputLocation",
    s3Bucket: undefined,
    s3Prefix: undefined
  };
  if (output.s3Bucket !== undefined && output.s3Bucket !== null) {
    contents.s3Bucket = output.s3Bucket;
  }
  if (output.s3Prefix !== undefined && output.s3Prefix !== null) {
    contents.s3Prefix = output.s3Prefix;
  }
  return contents;
};

const deserializeAws_restJson1_1PortForwardingConfig = (
  output: any,
  context: __SerdeContext
): PortForwardingConfig => {
  let contents: any = {
    __type: "PortForwardingConfig",
    portMappings: undefined
  };
  if (output.portMappings !== undefined && output.portMappings !== null) {
    contents.portMappings = deserializeAws_restJson1_1PortMappingList(
      output.portMappings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PortMapping = (
  output: any,
  context: __SerdeContext
): PortMapping => {
  let contents: any = {
    __type: "PortMapping",
    applicationPort: undefined,
    enableOnPublicIp: undefined,
    jobPort: undefined
  };
  if (output.applicationPort !== undefined && output.applicationPort !== null) {
    contents.applicationPort = output.applicationPort;
  }
  if (
    output.enableOnPublicIp !== undefined &&
    output.enableOnPublicIp !== null
  ) {
    contents.enableOnPublicIp = output.enableOnPublicIp;
  }
  if (output.jobPort !== undefined && output.jobPort !== null) {
    contents.jobPort = output.jobPort;
  }
  return contents;
};

const deserializeAws_restJson1_1PortMappingList = (
  output: any,
  context: __SerdeContext
): Array<PortMapping> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PortMapping(entry, context)
  );
};

const deserializeAws_restJson1_1ProgressDetail = (
  output: any,
  context: __SerdeContext
): ProgressDetail => {
  let contents: any = {
    __type: "ProgressDetail",
    currentProgress: undefined,
    estimatedTimeRemainingSeconds: undefined,
    percentDone: undefined,
    targetResource: undefined
  };
  if (output.currentProgress !== undefined && output.currentProgress !== null) {
    contents.currentProgress = output.currentProgress;
  }
  if (
    output.estimatedTimeRemainingSeconds !== undefined &&
    output.estimatedTimeRemainingSeconds !== null
  ) {
    contents.estimatedTimeRemainingSeconds =
      output.estimatedTimeRemainingSeconds;
  }
  if (output.percentDone !== undefined && output.percentDone !== null) {
    contents.percentDone = output.percentDone;
  }
  if (output.targetResource !== undefined && output.targetResource !== null) {
    contents.targetResource = output.targetResource;
  }
  return contents;
};

const deserializeAws_restJson1_1RenderingEngine = (
  output: any,
  context: __SerdeContext
): RenderingEngine => {
  let contents: any = {
    __type: "RenderingEngine",
    name: undefined,
    version: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1Robot = (
  output: any,
  context: __SerdeContext
): Robot => {
  let contents: any = {
    __type: "Robot",
    architecture: undefined,
    arn: undefined,
    createdAt: undefined,
    fleetArn: undefined,
    greenGrassGroupId: undefined,
    lastDeploymentJob: undefined,
    lastDeploymentTime: undefined,
    name: undefined,
    status: undefined
  };
  if (output.architecture !== undefined && output.architecture !== null) {
    contents.architecture = output.architecture;
  }
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.createdAt !== undefined && output.createdAt !== null) {
    contents.createdAt = new Date(Math.round(output.createdAt * 1000));
  }
  if (output.fleetArn !== undefined && output.fleetArn !== null) {
    contents.fleetArn = output.fleetArn;
  }
  if (
    output.greenGrassGroupId !== undefined &&
    output.greenGrassGroupId !== null
  ) {
    contents.greenGrassGroupId = output.greenGrassGroupId;
  }
  if (
    output.lastDeploymentJob !== undefined &&
    output.lastDeploymentJob !== null
  ) {
    contents.lastDeploymentJob = output.lastDeploymentJob;
  }
  if (
    output.lastDeploymentTime !== undefined &&
    output.lastDeploymentTime !== null
  ) {
    contents.lastDeploymentTime = new Date(
      Math.round(output.lastDeploymentTime * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1RobotApplicationConfig = (
  output: any,
  context: __SerdeContext
): RobotApplicationConfig => {
  let contents: any = {
    __type: "RobotApplicationConfig",
    application: undefined,
    applicationVersion: undefined,
    launchConfig: undefined
  };
  if (output.application !== undefined && output.application !== null) {
    contents.application = output.application;
  }
  if (
    output.applicationVersion !== undefined &&
    output.applicationVersion !== null
  ) {
    contents.applicationVersion = output.applicationVersion;
  }
  if (output.launchConfig !== undefined && output.launchConfig !== null) {
    contents.launchConfig = deserializeAws_restJson1_1LaunchConfig(
      output.launchConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1RobotApplicationConfigs = (
  output: any,
  context: __SerdeContext
): Array<RobotApplicationConfig> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RobotApplicationConfig(entry, context)
  );
};

const deserializeAws_restJson1_1RobotApplicationNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1RobotApplicationSummaries = (
  output: any,
  context: __SerdeContext
): Array<RobotApplicationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RobotApplicationSummary(entry, context)
  );
};

const deserializeAws_restJson1_1RobotApplicationSummary = (
  output: any,
  context: __SerdeContext
): RobotApplicationSummary => {
  let contents: any = {
    __type: "RobotApplicationSummary",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    robotSoftwareSuite: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.robotSoftwareSuite !== undefined &&
    output.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      output.robotSoftwareSuite,
      context
    );
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1RobotDeployment = (
  output: any,
  context: __SerdeContext
): RobotDeployment => {
  let contents: any = {
    __type: "RobotDeployment",
    arn: undefined,
    deploymentFinishTime: undefined,
    deploymentStartTime: undefined,
    failureCode: undefined,
    failureReason: undefined,
    progressDetail: undefined,
    status: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.deploymentFinishTime !== undefined &&
    output.deploymentFinishTime !== null
  ) {
    contents.deploymentFinishTime = new Date(
      Math.round(output.deploymentFinishTime * 1000)
    );
  }
  if (
    output.deploymentStartTime !== undefined &&
    output.deploymentStartTime !== null
  ) {
    contents.deploymentStartTime = new Date(
      Math.round(output.deploymentStartTime * 1000)
    );
  }
  if (output.failureCode !== undefined && output.failureCode !== null) {
    contents.failureCode = output.failureCode;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.progressDetail !== undefined && output.progressDetail !== null) {
    contents.progressDetail = deserializeAws_restJson1_1ProgressDetail(
      output.progressDetail,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1RobotDeploymentSummary = (
  output: any,
  context: __SerdeContext
): Array<RobotDeployment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RobotDeployment(entry, context)
  );
};

const deserializeAws_restJson1_1RobotSoftwareSuite = (
  output: any,
  context: __SerdeContext
): RobotSoftwareSuite => {
  let contents: any = {
    __type: "RobotSoftwareSuite",
    name: undefined,
    version: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1Robots = (
  output: any,
  context: __SerdeContext
): Array<Robot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Robot(entry, context)
  );
};

const deserializeAws_restJson1_1S3KeyOutput = (
  output: any,
  context: __SerdeContext
): S3KeyOutput => {
  let contents: any = {
    __type: "S3KeyOutput",
    etag: undefined,
    s3Key: undefined
  };
  if (output.etag !== undefined && output.etag !== null) {
    contents.etag = output.etag;
  }
  if (output.s3Key !== undefined && output.s3Key !== null) {
    contents.s3Key = output.s3Key;
  }
  return contents;
};

const deserializeAws_restJson1_1S3KeyOutputs = (
  output: any,
  context: __SerdeContext
): Array<S3KeyOutput> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1S3KeyOutput(entry, context)
  );
};

const deserializeAws_restJson1_1S3Object = (
  output: any,
  context: __SerdeContext
): S3Object => {
  let contents: any = {
    __type: "S3Object",
    bucket: undefined,
    etag: undefined,
    key: undefined
  };
  if (output.bucket !== undefined && output.bucket !== null) {
    contents.bucket = output.bucket;
  }
  if (output.etag !== undefined && output.etag !== null) {
    contents.etag = output.etag;
  }
  if (output.key !== undefined && output.key !== null) {
    contents.key = output.key;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroups = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SimulationApplicationConfig = (
  output: any,
  context: __SerdeContext
): SimulationApplicationConfig => {
  let contents: any = {
    __type: "SimulationApplicationConfig",
    application: undefined,
    applicationVersion: undefined,
    launchConfig: undefined
  };
  if (output.application !== undefined && output.application !== null) {
    contents.application = output.application;
  }
  if (
    output.applicationVersion !== undefined &&
    output.applicationVersion !== null
  ) {
    contents.applicationVersion = output.applicationVersion;
  }
  if (output.launchConfig !== undefined && output.launchConfig !== null) {
    contents.launchConfig = deserializeAws_restJson1_1LaunchConfig(
      output.launchConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SimulationApplicationConfigs = (
  output: any,
  context: __SerdeContext
): Array<SimulationApplicationConfig> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SimulationApplicationConfig(entry, context)
  );
};

const deserializeAws_restJson1_1SimulationApplicationNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SimulationApplicationSummaries = (
  output: any,
  context: __SerdeContext
): Array<SimulationApplicationSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SimulationApplicationSummary(entry, context)
  );
};

const deserializeAws_restJson1_1SimulationApplicationSummary = (
  output: any,
  context: __SerdeContext
): SimulationApplicationSummary => {
  let contents: any = {
    __type: "SimulationApplicationSummary",
    arn: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    robotSoftwareSuite: undefined,
    simulationSoftwareSuite: undefined,
    version: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.robotSoftwareSuite !== undefined &&
    output.robotSoftwareSuite !== null
  ) {
    contents.robotSoftwareSuite = deserializeAws_restJson1_1RobotSoftwareSuite(
      output.robotSoftwareSuite,
      context
    );
  }
  if (
    output.simulationSoftwareSuite !== undefined &&
    output.simulationSoftwareSuite !== null
  ) {
    contents.simulationSoftwareSuite = deserializeAws_restJson1_1SimulationSoftwareSuite(
      output.simulationSoftwareSuite,
      context
    );
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1SimulationJob = (
  output: any,
  context: __SerdeContext
): SimulationJob => {
  let contents: any = {
    __type: "SimulationJob",
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
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (
    output.clientRequestToken !== undefined &&
    output.clientRequestToken !== null
  ) {
    contents.clientRequestToken = output.clientRequestToken;
  }
  if (output.dataSources !== undefined && output.dataSources !== null) {
    contents.dataSources = deserializeAws_restJson1_1DataSources(
      output.dataSources,
      context
    );
  }
  if (output.failureBehavior !== undefined && output.failureBehavior !== null) {
    contents.failureBehavior = output.failureBehavior;
  }
  if (output.failureCode !== undefined && output.failureCode !== null) {
    contents.failureCode = output.failureCode;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.iamRole !== undefined && output.iamRole !== null) {
    contents.iamRole = output.iamRole;
  }
  if (output.lastStartedAt !== undefined && output.lastStartedAt !== null) {
    contents.lastStartedAt = new Date(Math.round(output.lastStartedAt * 1000));
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.loggingConfig !== undefined && output.loggingConfig !== null) {
    contents.loggingConfig = deserializeAws_restJson1_1LoggingConfig(
      output.loggingConfig,
      context
    );
  }
  if (
    output.maxJobDurationInSeconds !== undefined &&
    output.maxJobDurationInSeconds !== null
  ) {
    contents.maxJobDurationInSeconds = output.maxJobDurationInSeconds;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.networkInterface !== undefined &&
    output.networkInterface !== null
  ) {
    contents.networkInterface = deserializeAws_restJson1_1NetworkInterface(
      output.networkInterface,
      context
    );
  }
  if (output.outputLocation !== undefined && output.outputLocation !== null) {
    contents.outputLocation = deserializeAws_restJson1_1OutputLocation(
      output.outputLocation,
      context
    );
  }
  if (
    output.robotApplications !== undefined &&
    output.robotApplications !== null
  ) {
    contents.robotApplications = deserializeAws_restJson1_1RobotApplicationConfigs(
      output.robotApplications,
      context
    );
  }
  if (
    output.simulationApplications !== undefined &&
    output.simulationApplications !== null
  ) {
    contents.simulationApplications = deserializeAws_restJson1_1SimulationApplicationConfigs(
      output.simulationApplications,
      context
    );
  }
  if (
    output.simulationTimeMillis !== undefined &&
    output.simulationTimeMillis !== null
  ) {
    contents.simulationTimeMillis = output.simulationTimeMillis;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagMap(output.tags, context);
  }
  if (output.vpcConfig !== undefined && output.vpcConfig !== null) {
    contents.vpcConfig = deserializeAws_restJson1_1VPCConfigResponse(
      output.vpcConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SimulationJobSummaries = (
  output: any,
  context: __SerdeContext
): Array<SimulationJobSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SimulationJobSummary(entry, context)
  );
};

const deserializeAws_restJson1_1SimulationJobSummary = (
  output: any,
  context: __SerdeContext
): SimulationJobSummary => {
  let contents: any = {
    __type: "SimulationJobSummary",
    arn: undefined,
    dataSourceNames: undefined,
    lastUpdatedAt: undefined,
    name: undefined,
    robotApplicationNames: undefined,
    simulationApplicationNames: undefined,
    status: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.dataSourceNames !== undefined && output.dataSourceNames !== null) {
    contents.dataSourceNames = deserializeAws_restJson1_1DataSourceNames(
      output.dataSourceNames,
      context
    );
  }
  if (output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null) {
    contents.lastUpdatedAt = new Date(Math.round(output.lastUpdatedAt * 1000));
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.robotApplicationNames !== undefined &&
    output.robotApplicationNames !== null
  ) {
    contents.robotApplicationNames = deserializeAws_restJson1_1RobotApplicationNames(
      output.robotApplicationNames,
      context
    );
  }
  if (
    output.simulationApplicationNames !== undefined &&
    output.simulationApplicationNames !== null
  ) {
    contents.simulationApplicationNames = deserializeAws_restJson1_1SimulationApplicationNames(
      output.simulationApplicationNames,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_restJson1_1SimulationJobs = (
  output: any,
  context: __SerdeContext
): Array<SimulationJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SimulationJob(entry, context)
  );
};

const deserializeAws_restJson1_1SimulationSoftwareSuite = (
  output: any,
  context: __SerdeContext
): SimulationSoftwareSuite => {
  let contents: any = {
    __type: "SimulationSoftwareSuite",
    name: undefined,
    version: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1Source = (
  output: any,
  context: __SerdeContext
): Source => {
  let contents: any = {
    __type: "Source",
    architecture: undefined,
    etag: undefined,
    s3Bucket: undefined,
    s3Key: undefined
  };
  if (output.architecture !== undefined && output.architecture !== null) {
    contents.architecture = output.architecture;
  }
  if (output.etag !== undefined && output.etag !== null) {
    contents.etag = output.etag;
  }
  if (output.s3Bucket !== undefined && output.s3Bucket !== null) {
    contents.s3Bucket = output.s3Bucket;
  }
  if (output.s3Key !== undefined && output.s3Key !== null) {
    contents.s3Key = output.s3Key;
  }
  return contents;
};

const deserializeAws_restJson1_1Sources = (
  output: any,
  context: __SerdeContext
): Array<Source> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Source(entry, context)
  );
};

const deserializeAws_restJson1_1Subnets = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1VPCConfigResponse = (
  output: any,
  context: __SerdeContext
): VPCConfigResponse => {
  let contents: any = {
    __type: "VPCConfigResponse",
    assignPublicIp: undefined,
    securityGroups: undefined,
    subnets: undefined,
    vpcId: undefined
  };
  if (output.assignPublicIp !== undefined && output.assignPublicIp !== null) {
    contents.assignPublicIp = output.assignPublicIp;
  }
  if (output.securityGroups !== undefined && output.securityGroups !== null) {
    contents.securityGroups = deserializeAws_restJson1_1SecurityGroups(
      output.securityGroups,
      context
    );
  }
  if (output.subnets !== undefined && output.subnets !== null) {
    contents.subnets = deserializeAws_restJson1_1Subnets(
      output.subnets,
      context
    );
  }
  if (output.vpcId !== undefined && output.vpcId !== null) {
    contents.vpcId = output.vpcId;
  }
  return contents;
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
