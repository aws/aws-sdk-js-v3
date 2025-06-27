// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/batchDeleteWorlds");
  let body: any;
  body = JSON.stringify(
    take(input, {
      worlds: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDescribeSimulationJobCommand
 */
export const se_BatchDescribeSimulationJobCommand = async (
  input: BatchDescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/batchDescribeSimulationJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      jobs: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelDeploymentJobCommand
 */
export const se_CancelDeploymentJobCommand = async (
  input: CancelDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cancelDeploymentJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelSimulationJobCommand
 */
export const se_CancelSimulationJobCommand = async (
  input: CancelSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cancelSimulationJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelSimulationJobBatchCommand
 */
export const se_CancelSimulationJobBatchCommand = async (
  input: CancelSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cancelSimulationJobBatch");
  let body: any;
  body = JSON.stringify(
    take(input, {
      batch: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelWorldExportJobCommand
 */
export const se_CancelWorldExportJobCommand = async (
  input: CancelWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cancelWorldExportJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelWorldGenerationJobCommand
 */
export const se_CancelWorldGenerationJobCommand = async (
  input: CancelWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/cancelWorldGenerationJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeploymentJobCommand
 */
export const se_CreateDeploymentJobCommand = async (
  input: CreateDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createDeploymentJob");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFleetCommand
 */
export const se_CreateFleetCommand = async (
  input: CreateFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createFleet");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRobotCommand
 */
export const se_CreateRobotCommand = async (
  input: CreateRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createRobot");
  let body: any;
  body = JSON.stringify(
    take(input, {
      architecture: [],
      greengrassGroupId: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRobotApplicationCommand
 */
export const se_CreateRobotApplicationCommand = async (
  input: CreateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createRobotApplication");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRobotApplicationVersionCommand
 */
export const se_CreateRobotApplicationVersionCommand = async (
  input: CreateRobotApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createRobotApplicationVersion");
  let body: any;
  body = JSON.stringify(
    take(input, {
      application: [],
      currentRevisionId: [],
      imageDigest: [],
      s3Etags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSimulationApplicationCommand
 */
export const se_CreateSimulationApplicationCommand = async (
  input: CreateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createSimulationApplication");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSimulationApplicationVersionCommand
 */
export const se_CreateSimulationApplicationVersionCommand = async (
  input: CreateSimulationApplicationVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createSimulationApplicationVersion");
  let body: any;
  body = JSON.stringify(
    take(input, {
      application: [],
      currentRevisionId: [],
      imageDigest: [],
      s3Etags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSimulationJobCommand
 */
export const se_CreateSimulationJobCommand = async (
  input: CreateSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createSimulationJob");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorldExportJobCommand
 */
export const se_CreateWorldExportJobCommand = async (
  input: CreateWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createWorldExportJob");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorldGenerationJobCommand
 */
export const se_CreateWorldGenerationJobCommand = async (
  input: CreateWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createWorldGenerationJob");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateWorldTemplateCommand
 */
export const se_CreateWorldTemplateCommand = async (
  input: CreateWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/createWorldTemplate");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFleetCommand
 */
export const se_DeleteFleetCommand = async (
  input: DeleteFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteFleet");
  let body: any;
  body = JSON.stringify(
    take(input, {
      fleet: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRobotCommand
 */
export const se_DeleteRobotCommand = async (
  input: DeleteRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteRobot");
  let body: any;
  body = JSON.stringify(
    take(input, {
      robot: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRobotApplicationCommand
 */
export const se_DeleteRobotApplicationCommand = async (
  input: DeleteRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteRobotApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      application: [],
      applicationVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSimulationApplicationCommand
 */
export const se_DeleteSimulationApplicationCommand = async (
  input: DeleteSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteSimulationApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      application: [],
      applicationVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteWorldTemplateCommand
 */
export const se_DeleteWorldTemplateCommand = async (
  input: DeleteWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deleteWorldTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      template: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterRobotCommand
 */
export const se_DeregisterRobotCommand = async (
  input: DeregisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/deregisterRobot");
  let body: any;
  body = JSON.stringify(
    take(input, {
      fleet: [],
      robot: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDeploymentJobCommand
 */
export const se_DescribeDeploymentJobCommand = async (
  input: DescribeDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeDeploymentJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeFleetCommand
 */
export const se_DescribeFleetCommand = async (
  input: DescribeFleetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeFleet");
  let body: any;
  body = JSON.stringify(
    take(input, {
      fleet: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRobotCommand
 */
export const se_DescribeRobotCommand = async (
  input: DescribeRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeRobot");
  let body: any;
  body = JSON.stringify(
    take(input, {
      robot: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRobotApplicationCommand
 */
export const se_DescribeRobotApplicationCommand = async (
  input: DescribeRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeRobotApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      application: [],
      applicationVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSimulationApplicationCommand
 */
export const se_DescribeSimulationApplicationCommand = async (
  input: DescribeSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeSimulationApplication");
  let body: any;
  body = JSON.stringify(
    take(input, {
      application: [],
      applicationVersion: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSimulationJobCommand
 */
export const se_DescribeSimulationJobCommand = async (
  input: DescribeSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeSimulationJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeSimulationJobBatchCommand
 */
export const se_DescribeSimulationJobBatchCommand = async (
  input: DescribeSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeSimulationJobBatch");
  let body: any;
  body = JSON.stringify(
    take(input, {
      batch: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeWorldCommand
 */
export const se_DescribeWorldCommand = async (
  input: DescribeWorldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeWorld");
  let body: any;
  body = JSON.stringify(
    take(input, {
      world: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeWorldExportJobCommand
 */
export const se_DescribeWorldExportJobCommand = async (
  input: DescribeWorldExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeWorldExportJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeWorldGenerationJobCommand
 */
export const se_DescribeWorldGenerationJobCommand = async (
  input: DescribeWorldGenerationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeWorldGenerationJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeWorldTemplateCommand
 */
export const se_DescribeWorldTemplateCommand = async (
  input: DescribeWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/describeWorldTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      template: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetWorldTemplateBodyCommand
 */
export const se_GetWorldTemplateBodyCommand = async (
  input: GetWorldTemplateBodyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/getWorldTemplateBody");
  let body: any;
  body = JSON.stringify(
    take(input, {
      generationJob: [],
      template: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeploymentJobsCommand
 */
export const se_ListDeploymentJobsCommand = async (
  input: ListDeploymentJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listDeploymentJobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFleetsCommand
 */
export const se_ListFleetsCommand = async (
  input: ListFleetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listFleets");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRobotApplicationsCommand
 */
export const se_ListRobotApplicationsCommand = async (
  input: ListRobotApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listRobotApplications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      versionQualifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRobotsCommand
 */
export const se_ListRobotsCommand = async (
  input: ListRobotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listRobots");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSimulationApplicationsCommand
 */
export const se_ListSimulationApplicationsCommand = async (
  input: ListSimulationApplicationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listSimulationApplications");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      versionQualifier: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSimulationJobBatchesCommand
 */
export const se_ListSimulationJobBatchesCommand = async (
  input: ListSimulationJobBatchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listSimulationJobBatches");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSimulationJobsCommand
 */
export const se_ListSimulationJobsCommand = async (
  input: ListSimulationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listSimulationJobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorldExportJobsCommand
 */
export const se_ListWorldExportJobsCommand = async (
  input: ListWorldExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listWorldExportJobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorldGenerationJobsCommand
 */
export const se_ListWorldGenerationJobsCommand = async (
  input: ListWorldGenerationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listWorldGenerationJobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorldsCommand
 */
export const se_ListWorldsCommand = async (
  input: ListWorldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listWorlds");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListWorldTemplatesCommand
 */
export const se_ListWorldTemplatesCommand = async (
  input: ListWorldTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/listWorldTemplates");
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterRobotCommand
 */
export const se_RegisterRobotCommand = async (
  input: RegisterRobotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/registerRobot");
  let body: any;
  body = JSON.stringify(
    take(input, {
      fleet: [],
      robot: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RestartSimulationJobCommand
 */
export const se_RestartSimulationJobCommand = async (
  input: RestartSimulationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restartSimulationJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      job: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartSimulationJobBatchCommand
 */
export const se_StartSimulationJobBatchCommand = async (
  input: StartSimulationJobBatchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/startSimulationJobBatch");
  let body: any;
  body = JSON.stringify(
    take(input, {
      batchPolicy: (_) => _json(_),
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      createSimulationJobRequests: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1SyncDeploymentJobCommand
 */
export const se_SyncDeploymentJobCommand = async (
  input: SyncDeploymentJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/syncDeploymentJob");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      fleet: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRobotApplicationCommand
 */
export const se_UpdateRobotApplicationCommand = async (
  input: UpdateRobotApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateRobotApplication");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSimulationApplicationCommand
 */
export const se_UpdateSimulationApplicationCommand = async (
  input: UpdateSimulationApplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateSimulationApplication");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateWorldTemplateCommand
 */
export const se_UpdateWorldTemplateCommand = async (
  input: UpdateWorldTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/updateWorldTemplate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      name: [],
      template: [],
      templateBody: [],
      templateLocation: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchDeleteWorldsCommand
 */
export const de_BatchDeleteWorldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteWorldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1BatchDescribeSimulationJobCommand
 */
export const de_BatchDescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CancelDeploymentJobCommand
 */
export const de_CancelDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSimulationJobCommand
 */
export const de_CancelSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelSimulationJobBatchCommand
 */
export const de_CancelSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelWorldExportJobCommand
 */
export const de_CancelWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelWorldGenerationJobCommand
 */
export const de_CancelWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentJobCommand
 */
export const de_CreateDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateFleetCommand
 */
export const de_CreateFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateRobotCommand
 */
export const de_CreateRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateRobotApplicationCommand
 */
export const de_CreateRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateRobotApplicationVersionCommand
 */
export const de_CreateRobotApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRobotApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateSimulationApplicationCommand
 */
export const de_CreateSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateSimulationApplicationVersionCommand
 */
export const de_CreateSimulationApplicationVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationApplicationVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateSimulationJobCommand
 */
export const de_CreateSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateWorldExportJobCommand
 */
export const de_CreateWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateWorldGenerationJobCommand
 */
export const de_CreateWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateWorldTemplateCommand
 */
export const de_CreateWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteFleetCommand
 */
export const de_DeleteFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRobotCommand
 */
export const de_DeleteRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRobotApplicationCommand
 */
export const de_DeleteRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSimulationApplicationCommand
 */
export const de_DeleteSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteWorldTemplateCommand
 */
export const de_DeleteWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterRobotCommand
 */
export const de_DeregisterRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeDeploymentJobCommand
 */
export const de_DescribeDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeFleetCommand
 */
export const de_DescribeFleetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFleetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeRobotCommand
 */
export const de_DescribeRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeRobotApplicationCommand
 */
export const de_DescribeRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeSimulationApplicationCommand
 */
export const de_DescribeSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeSimulationJobCommand
 */
export const de_DescribeSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeSimulationJobBatchCommand
 */
export const de_DescribeSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeWorldCommand
 */
export const de_DescribeWorldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeWorldExportJobCommand
 */
export const de_DescribeWorldExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldExportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeWorldGenerationJobCommand
 */
export const de_DescribeWorldGenerationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldGenerationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeWorldTemplateCommand
 */
export const de_DescribeWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetWorldTemplateBodyCommand
 */
export const de_GetWorldTemplateBodyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorldTemplateBodyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListDeploymentJobsCommand
 */
export const de_ListDeploymentJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListFleetsCommand
 */
export const de_ListFleetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFleetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRobotApplicationsCommand
 */
export const de_ListRobotApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRobotsCommand
 */
export const de_ListRobotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRobotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListSimulationApplicationsCommand
 */
export const de_ListSimulationApplicationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationApplicationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListSimulationJobBatchesCommand
 */
export const de_ListSimulationJobBatchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobBatchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListSimulationJobsCommand
 */
export const de_ListSimulationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSimulationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListWorldExportJobsCommand
 */
export const de_ListWorldExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldExportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListWorldGenerationJobsCommand
 */
export const de_ListWorldGenerationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldGenerationJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListWorldsCommand
 */
export const de_ListWorldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListWorldTemplatesCommand
 */
export const de_ListWorldTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWorldTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1RegisterRobotCommand
 */
export const de_RegisterRobotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterRobotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1RestartSimulationJobCommand
 */
export const de_RestartSimulationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestartSimulationJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartSimulationJobBatchCommand
 */
export const de_StartSimulationJobBatchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartSimulationJobBatchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1SyncDeploymentJobCommand
 */
export const de_SyncDeploymentJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SyncDeploymentJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRobotApplicationCommand
 */
export const de_UpdateRobotApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRobotApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateSimulationApplicationCommand
 */
export const de_UpdateSimulationApplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSimulationApplicationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateWorldTemplateCommand
 */
export const de_UpdateWorldTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateWorldTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.robomaker#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ConcurrentDeploymentException":
    case "com.amazonaws.robomaker#ConcurrentDeploymentException":
      throw await de_ConcurrentDeploymentExceptionRes(parsedOutput, context);
    case "IdempotentParameterMismatchException":
    case "com.amazonaws.robomaker#IdempotentParameterMismatchException":
      throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.robomaker#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.robomaker#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.robomaker#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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

const _tK = "tagKeys";
