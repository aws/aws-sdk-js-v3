// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateAppCommandInput, CreateAppCommandOutput } from "../commands/CreateAppCommand";
import {
  CreateReplicationJobCommandInput,
  CreateReplicationJobCommandOutput,
} from "../commands/CreateReplicationJobCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "../commands/DeleteAppCommand";
import {
  DeleteAppLaunchConfigurationCommandInput,
  DeleteAppLaunchConfigurationCommandOutput,
} from "../commands/DeleteAppLaunchConfigurationCommand";
import {
  DeleteAppReplicationConfigurationCommandInput,
  DeleteAppReplicationConfigurationCommandOutput,
} from "../commands/DeleteAppReplicationConfigurationCommand";
import {
  DeleteAppValidationConfigurationCommandInput,
  DeleteAppValidationConfigurationCommandOutput,
} from "../commands/DeleteAppValidationConfigurationCommand";
import {
  DeleteReplicationJobCommandInput,
  DeleteReplicationJobCommandOutput,
} from "../commands/DeleteReplicationJobCommand";
import {
  DeleteServerCatalogCommandInput,
  DeleteServerCatalogCommandOutput,
} from "../commands/DeleteServerCatalogCommand";
import {
  DisassociateConnectorCommandInput,
  DisassociateConnectorCommandOutput,
} from "../commands/DisassociateConnectorCommand";
import { GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput } from "../commands/GenerateChangeSetCommand";
import { GenerateTemplateCommandInput, GenerateTemplateCommandOutput } from "../commands/GenerateTemplateCommand";
import { GetAppCommandInput, GetAppCommandOutput } from "../commands/GetAppCommand";
import {
  GetAppLaunchConfigurationCommandInput,
  GetAppLaunchConfigurationCommandOutput,
} from "../commands/GetAppLaunchConfigurationCommand";
import {
  GetAppReplicationConfigurationCommandInput,
  GetAppReplicationConfigurationCommandOutput,
} from "../commands/GetAppReplicationConfigurationCommand";
import {
  GetAppValidationConfigurationCommandInput,
  GetAppValidationConfigurationCommandOutput,
} from "../commands/GetAppValidationConfigurationCommand";
import {
  GetAppValidationOutputCommandInput,
  GetAppValidationOutputCommandOutput,
} from "../commands/GetAppValidationOutputCommand";
import { GetConnectorsCommandInput, GetConnectorsCommandOutput } from "../commands/GetConnectorsCommand";
import { GetReplicationJobsCommandInput, GetReplicationJobsCommandOutput } from "../commands/GetReplicationJobsCommand";
import { GetReplicationRunsCommandInput, GetReplicationRunsCommandOutput } from "../commands/GetReplicationRunsCommand";
import { GetServersCommandInput, GetServersCommandOutput } from "../commands/GetServersCommand";
import { ImportAppCatalogCommandInput, ImportAppCatalogCommandOutput } from "../commands/ImportAppCatalogCommand";
import {
  ImportServerCatalogCommandInput,
  ImportServerCatalogCommandOutput,
} from "../commands/ImportServerCatalogCommand";
import { LaunchAppCommandInput, LaunchAppCommandOutput } from "../commands/LaunchAppCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "../commands/ListAppsCommand";
import {
  NotifyAppValidationOutputCommandInput,
  NotifyAppValidationOutputCommandOutput,
} from "../commands/NotifyAppValidationOutputCommand";
import {
  PutAppLaunchConfigurationCommandInput,
  PutAppLaunchConfigurationCommandOutput,
} from "../commands/PutAppLaunchConfigurationCommand";
import {
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
} from "../commands/PutAppReplicationConfigurationCommand";
import {
  PutAppValidationConfigurationCommandInput,
  PutAppValidationConfigurationCommandOutput,
} from "../commands/PutAppValidationConfigurationCommand";
import {
  StartAppReplicationCommandInput,
  StartAppReplicationCommandOutput,
} from "../commands/StartAppReplicationCommand";
import {
  StartOnDemandAppReplicationCommandInput,
  StartOnDemandAppReplicationCommandOutput,
} from "../commands/StartOnDemandAppReplicationCommand";
import {
  StartOnDemandReplicationRunCommandInput,
  StartOnDemandReplicationRunCommandOutput,
} from "../commands/StartOnDemandReplicationRunCommand";
import { StopAppReplicationCommandInput, StopAppReplicationCommandOutput } from "../commands/StopAppReplicationCommand";
import { TerminateAppCommandInput, TerminateAppCommandOutput } from "../commands/TerminateAppCommand";
import { UpdateAppCommandInput, UpdateAppCommandOutput } from "../commands/UpdateAppCommand";
import {
  UpdateReplicationJobCommandInput,
  UpdateReplicationJobCommandOutput,
} from "../commands/UpdateReplicationJobCommand";
import {
  AppSummary,
  AppValidationConfiguration,
  AppValidationOutput,
  Connector,
  ConnectorCapability,
  CreateAppRequest,
  CreateAppResponse,
  CreateReplicationJobRequest,
  CreateReplicationJobResponse,
  DeleteAppLaunchConfigurationRequest,
  DeleteAppLaunchConfigurationResponse,
  DeleteAppReplicationConfigurationRequest,
  DeleteAppReplicationConfigurationResponse,
  DeleteAppRequest,
  DeleteAppResponse,
  DeleteAppValidationConfigurationRequest,
  DeleteAppValidationConfigurationResponse,
  DeleteReplicationJobRequest,
  DeleteReplicationJobResponse,
  DeleteServerCatalogRequest,
  DeleteServerCatalogResponse,
  DisassociateConnectorRequest,
  DisassociateConnectorResponse,
  DryRunOperationException,
  GenerateChangeSetRequest,
  GenerateChangeSetResponse,
  GenerateTemplateRequest,
  GenerateTemplateResponse,
  GetAppLaunchConfigurationRequest,
  GetAppLaunchConfigurationResponse,
  GetAppReplicationConfigurationRequest,
  GetAppReplicationConfigurationResponse,
  GetAppRequest,
  GetAppResponse,
  GetAppValidationConfigurationRequest,
  GetAppValidationConfigurationResponse,
  GetAppValidationOutputRequest,
  GetAppValidationOutputResponse,
  GetConnectorsRequest,
  GetConnectorsResponse,
  GetReplicationJobsRequest,
  GetReplicationJobsResponse,
  GetReplicationRunsRequest,
  GetReplicationRunsResponse,
  GetServersRequest,
  GetServersResponse,
  ImportAppCatalogRequest,
  ImportAppCatalogResponse,
  ImportServerCatalogRequest,
  ImportServerCatalogResponse,
  InternalError,
  InvalidParameterException,
  LaunchAppRequest,
  LaunchAppResponse,
  LaunchDetails,
  ListAppsRequest,
  ListAppsResponse,
  MissingRequiredParameterException,
  NoConnectorsAvailableException,
  NotificationContext,
  NotifyAppValidationOutputRequest,
  NotifyAppValidationOutputResponse,
  OperationNotPermittedException,
  PutAppLaunchConfigurationRequest,
  PutAppLaunchConfigurationResponse,
  PutAppReplicationConfigurationRequest,
  PutAppReplicationConfigurationResponse,
  PutAppValidationConfigurationRequest,
  PutAppValidationConfigurationResponse,
  ReplicationJob,
  ReplicationJobAlreadyExistsException,
  ReplicationJobNotFoundException,
  ReplicationRun,
  ReplicationRunLimitExceededException,
  ReplicationRunStageDetails,
  S3Location,
  Server,
  ServerCannotBeReplicatedException,
  ServerGroup,
  ServerGroupLaunchConfiguration,
  ServerGroupReplicationConfiguration,
  ServerGroupValidationConfiguration,
  ServerLaunchConfiguration,
  ServerReplicationConfiguration,
  ServerReplicationParameters,
  ServerValidationConfiguration,
  ServerValidationOutput,
  Source,
  SSMOutput,
  SSMValidationParameters,
  StartAppReplicationRequest,
  StartAppReplicationResponse,
  StartOnDemandAppReplicationRequest,
  StartOnDemandAppReplicationResponse,
  StartOnDemandReplicationRunRequest,
  StartOnDemandReplicationRunResponse,
  StopAppReplicationRequest,
  StopAppReplicationResponse,
  Tag,
  TemporarilyUnavailableException,
  TerminateAppRequest,
  TerminateAppResponse,
  UnauthorizedOperationException,
  UpdateAppRequest,
  UpdateAppResponse,
  UpdateReplicationJobRequest,
  UpdateReplicationJobResponse,
  UserData,
  UserDataValidationParameters,
  ValidationOutput,
  VmServer,
  VmServerAddress,
} from "../models/models_0";
import { SMSServiceException as __BaseException } from "../models/SMSServiceException";

export const serializeAws_json1_1CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.CreateApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateReplicationJobCommand = async (
  input: CreateReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.CreateReplicationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateReplicationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAppLaunchConfigurationCommand = async (
  input: DeleteAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAppLaunchConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAppReplicationConfigurationCommand = async (
  input: DeleteAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAppReplicationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteAppValidationConfigurationCommand = async (
  input: DeleteAppValidationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteAppValidationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteReplicationJobCommand = async (
  input: DeleteReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteReplicationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServerCatalogCommand = async (
  input: DeleteServerCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteServerCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateConnectorCommand = async (
  input: DisassociateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DisassociateConnector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GenerateChangeSetCommand = async (
  input: GenerateChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GenerateChangeSet",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateChangeSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GenerateTemplateCommand = async (
  input: GenerateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GenerateTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GenerateTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAppCommand = async (
  input: GetAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAppLaunchConfigurationCommand = async (
  input: GetAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAppLaunchConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAppReplicationConfigurationCommand = async (
  input: GetAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAppReplicationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAppValidationConfigurationCommand = async (
  input: GetAppValidationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAppValidationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAppValidationOutputCommand = async (
  input: GetAppValidationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAppValidationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetConnectorsCommand = async (
  input: GetConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetConnectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetConnectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReplicationJobsCommand = async (
  input: GetReplicationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetReplicationJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetReplicationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetReplicationRunsCommand = async (
  input: GetReplicationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetReplicationRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetReplicationRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServersCommand = async (
  input: GetServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetServers",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportAppCatalogCommand = async (
  input: ImportAppCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.ImportAppCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportAppCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ImportServerCatalogCommand = async (
  input: ImportServerCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.ImportServerCatalog",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ImportServerCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1LaunchAppCommand = async (
  input: LaunchAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.LaunchApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1LaunchAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.ListApps",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListAppsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1NotifyAppValidationOutputCommand = async (
  input: NotifyAppValidationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1NotifyAppValidationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAppLaunchConfigurationCommand = async (
  input: PutAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAppLaunchConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAppReplicationConfigurationCommand = async (
  input: PutAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAppReplicationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PutAppValidationConfigurationCommand = async (
  input: PutAppValidationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PutAppValidationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartAppReplicationCommand = async (
  input: StartAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartAppReplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartAppReplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartOnDemandAppReplicationCommand = async (
  input: StartOnDemandAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartOnDemandAppReplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StartOnDemandReplicationRunCommand = async (
  input: StartOnDemandReplicationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StartOnDemandReplicationRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopAppReplicationCommand = async (
  input: StopAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.StopAppReplication",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopAppReplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TerminateAppCommand = async (
  input: TerminateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.TerminateApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TerminateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.UpdateApp",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateReplicationJobCommand = async (
  input: UpdateReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateReplicationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAppResponse(data, context);
  const response: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateReplicationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateReplicationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateReplicationJobResponse(data, context);
  const response: CreateReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateReplicationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "NoConnectorsAvailableException":
    case "com.amazonaws.sms#NoConnectorsAvailableException":
      throw await deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ReplicationJobAlreadyExistsException":
    case "com.amazonaws.sms#ReplicationJobAlreadyExistsException":
      throw await deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServerCannotBeReplicatedException":
    case "com.amazonaws.sms#ServerCannotBeReplicatedException":
      throw await deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(parsedOutput, context);
    case "TemporarilyUnavailableException":
    case "com.amazonaws.sms#TemporarilyUnavailableException":
      throw await deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAppResponse(data, context);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAppLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAppLaunchConfigurationResponse(data, context);
  const response: DeleteAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAppReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppReplicationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAppReplicationConfigurationResponse(data, context);
  const response: DeleteAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteAppValidationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppValidationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteAppValidationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteAppValidationConfigurationResponse(data, context);
  const response: DeleteAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteAppValidationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppValidationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteReplicationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteReplicationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteReplicationJobResponse(data, context);
  const response: DeleteReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteReplicationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ReplicationJobNotFoundException":
    case "com.amazonaws.sms#ReplicationJobNotFoundException":
      throw await deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteServerCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteServerCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServerCatalogResponse(data, context);
  const response: DeleteServerCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteServerCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateConnectorResponse(data, context);
  const response: DisassociateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GenerateChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateChangeSetResponse(data, context);
  const response: GenerateChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateChangeSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateChangeSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GenerateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GenerateTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GenerateTemplateResponse(data, context);
  const response: GenerateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GenerateTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppResponse(data, context);
  const response: GetAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAppLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAppLaunchConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppLaunchConfigurationResponse(data, context);
  const response: GetAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAppLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAppReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppReplicationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAppReplicationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppReplicationConfigurationResponse(data, context);
  const response: GetAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAppReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAppValidationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppValidationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAppValidationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppValidationConfigurationResponse(data, context);
  const response: GetAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAppValidationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppValidationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetAppValidationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppValidationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAppValidationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAppValidationOutputResponse(data, context);
  const response: GetAppValidationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAppValidationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppValidationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetConnectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetConnectorsResponse(data, context);
  const response: GetConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetReplicationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetReplicationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReplicationJobsResponse(data, context);
  const response: GetReplicationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReplicationJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetReplicationRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetReplicationRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetReplicationRunsResponse(data, context);
  const response: GetReplicationRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetReplicationRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1GetServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServersResponse(data, context);
  const response: GetServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetServersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportAppCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportAppCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportAppCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportAppCatalogResponse(data, context);
  const response: ImportAppCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportAppCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportAppCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ImportServerCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportServerCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ImportServerCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ImportServerCatalogResponse(data, context);
  const response: ImportServerCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ImportServerCatalogCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportServerCatalogCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "NoConnectorsAvailableException":
    case "com.amazonaws.sms#NoConnectorsAvailableException":
      throw await deserializeAws_json1_1NoConnectorsAvailableExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1LaunchAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LaunchAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1LaunchAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1LaunchAppResponse(data, context);
  const response: LaunchAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1LaunchAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LaunchAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListAppsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListAppsResponse(data, context);
  const response: ListAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListAppsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1NotifyAppValidationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyAppValidationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1NotifyAppValidationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1NotifyAppValidationOutputResponse(data, context);
  const response: NotifyAppValidationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1NotifyAppValidationOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyAppValidationOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutAppLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAppLaunchConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAppLaunchConfigurationResponse(data, context);
  const response: PutAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAppLaunchConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppLaunchConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutAppReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppReplicationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAppReplicationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAppReplicationConfigurationResponse(data, context);
  const response: PutAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAppReplicationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppReplicationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1PutAppValidationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppValidationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PutAppValidationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PutAppValidationConfigurationResponse(data, context);
  const response: PutAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PutAppValidationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppValidationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartAppReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartAppReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartAppReplicationResponse(data, context);
  const response: StartAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartAppReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartOnDemandAppReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandAppReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartOnDemandAppReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartOnDemandAppReplicationResponse(data, context);
  const response: StartOnDemandAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartOnDemandAppReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandAppReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StartOnDemandReplicationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandReplicationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StartOnDemandReplicationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StartOnDemandReplicationRunResponse(data, context);
  const response: StartOnDemandReplicationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StartOnDemandReplicationRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandReplicationRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DryRunOperationException":
    case "com.amazonaws.sms#DryRunOperationException":
      throw await deserializeAws_json1_1DryRunOperationExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ReplicationRunLimitExceededException":
    case "com.amazonaws.sms#ReplicationRunLimitExceededException":
      throw await deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1StopAppReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAppReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopAppReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopAppReplicationResponse(data, context);
  const response: StopAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopAppReplicationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAppReplicationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TerminateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TerminateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TerminateAppResponse(data, context);
  const response: TerminateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TerminateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateAppResponse(data, context);
  const response: UpdateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateAppCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateReplicationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateReplicationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateReplicationJobResponse(data, context);
  const response: UpdateReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateReplicationJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await deserializeAws_json1_1InternalErrorResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await deserializeAws_json1_1InvalidParameterExceptionResponse(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await deserializeAws_json1_1MissingRequiredParameterExceptionResponse(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await deserializeAws_json1_1OperationNotPermittedExceptionResponse(parsedOutput, context);
    case "ReplicationJobNotFoundException":
    case "com.amazonaws.sms#ReplicationJobNotFoundException":
      throw await deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse(parsedOutput, context);
    case "ServerCannotBeReplicatedException":
    case "com.amazonaws.sms#ServerCannotBeReplicatedException":
      throw await deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse(parsedOutput, context);
    case "TemporarilyUnavailableException":
    case "com.amazonaws.sms#TemporarilyUnavailableException":
      throw await deserializeAws_json1_1TemporarilyUnavailableExceptionResponse(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await deserializeAws_json1_1UnauthorizedOperationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_1DryRunOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DryRunOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DryRunOperationException(body, context);
  const exception = new DryRunOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalError(body, context);
  const exception = new InternalError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MissingRequiredParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingRequiredParameterException(body, context);
  const exception = new MissingRequiredParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NoConnectorsAvailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoConnectorsAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NoConnectorsAvailableException(body, context);
  const exception = new NoConnectorsAvailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1OperationNotPermittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotPermittedException(body, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationJobAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplicationJobAlreadyExistsException(body, context);
  const exception = new ReplicationJobAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReplicationJobNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationJobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplicationJobNotFoundException(body, context);
  const exception = new ReplicationJobNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ReplicationRunLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationRunLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ReplicationRunLimitExceededException(body, context);
  const exception = new ReplicationRunLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServerCannotBeReplicatedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerCannotBeReplicatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServerCannotBeReplicatedException(body, context);
  const exception = new ServerCannotBeReplicatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1TemporarilyUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TemporarilyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TemporarilyUnavailableException(body, context);
  const exception = new TemporarilyUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnauthorizedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnauthorizedOperationException(body, context);
  const exception = new UnauthorizedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AppIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AppValidationConfiguration = (
  input: AppValidationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.appValidationStrategy != null && { appValidationStrategy: input.appValidationStrategy }),
    ...(input.name != null && { name: input.name }),
    ...(input.ssmValidationParameters != null && {
      ssmValidationParameters: serializeAws_json1_1SSMValidationParameters(input.ssmValidationParameters, context),
    }),
    ...(input.validationId != null && { validationId: input.validationId }),
  };
};

const serializeAws_json1_1AppValidationConfigurations = (
  input: AppValidationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1AppValidationConfiguration(entry, context);
    });
};

const serializeAws_json1_1CreateAppRequest = (input: CreateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleName != null && { roleName: input.roleName }),
    ...(input.serverGroups != null && { serverGroups: serializeAws_json1_1ServerGroups(input.serverGroups, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1CreateReplicationJobRequest = (
  input: CreateReplicationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.encrypted != null && { encrypted: input.encrypted }),
    ...(input.frequency != null && { frequency: input.frequency }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.licenseType != null && { licenseType: input.licenseType }),
    ...(input.numberOfRecentAmisToKeep != null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep }),
    ...(input.roleName != null && { roleName: input.roleName }),
    ...(input.runOnce != null && { runOnce: input.runOnce }),
    ...(input.seedReplicationTime != null && {
      seedReplicationTime: Math.round(input.seedReplicationTime.getTime() / 1000),
    }),
    ...(input.serverId != null && { serverId: input.serverId }),
  };
};

const serializeAws_json1_1DeleteAppLaunchConfigurationRequest = (
  input: DeleteAppLaunchConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1DeleteAppReplicationConfigurationRequest = (
  input: DeleteAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1DeleteAppRequest = (input: DeleteAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.forceStopAppReplication != null && { forceStopAppReplication: input.forceStopAppReplication }),
    ...(input.forceTerminateApp != null && { forceTerminateApp: input.forceTerminateApp }),
  };
};

const serializeAws_json1_1DeleteAppValidationConfigurationRequest = (
  input: DeleteAppValidationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1DeleteReplicationJobRequest = (
  input: DeleteReplicationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
  };
};

const serializeAws_json1_1DeleteServerCatalogRequest = (
  input: DeleteServerCatalogRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1DisassociateConnectorRequest = (
  input: DisassociateConnectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.connectorId != null && { connectorId: input.connectorId }),
  };
};

const serializeAws_json1_1GenerateChangeSetRequest = (
  input: GenerateChangeSetRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.changesetFormat != null && { changesetFormat: input.changesetFormat }),
  };
};

const serializeAws_json1_1GenerateTemplateRequest = (input: GenerateTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.templateFormat != null && { templateFormat: input.templateFormat }),
  };
};

const serializeAws_json1_1GetAppLaunchConfigurationRequest = (
  input: GetAppLaunchConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1GetAppReplicationConfigurationRequest = (
  input: GetAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1GetAppRequest = (input: GetAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1GetAppValidationConfigurationRequest = (
  input: GetAppValidationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1GetAppValidationOutputRequest = (
  input: GetAppValidationOutputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1GetConnectorsRequest = (input: GetConnectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetReplicationJobsRequest = (
  input: GetReplicationJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
  };
};

const serializeAws_json1_1GetReplicationRunsRequest = (
  input: GetReplicationRunsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
  };
};

const serializeAws_json1_1GetServersRequest = (input: GetServersRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vmServerAddressList != null && {
      vmServerAddressList: serializeAws_json1_1VmServerAddressList(input.vmServerAddressList, context),
    }),
  };
};

const serializeAws_json1_1ImportAppCatalogRequest = (input: ImportAppCatalogRequest, context: __SerdeContext): any => {
  return {
    ...(input.roleName != null && { roleName: input.roleName }),
  };
};

const serializeAws_json1_1ImportServerCatalogRequest = (
  input: ImportServerCatalogRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1LaunchAppRequest = (input: LaunchAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1ListAppsRequest = (input: ListAppsRequest, context: __SerdeContext): any => {
  return {
    ...(input.appIds != null && { appIds: serializeAws_json1_1AppIds(input.appIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1NotificationContext = (input: NotificationContext, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
    ...(input.statusMessage != null && { statusMessage: input.statusMessage }),
    ...(input.validationId != null && { validationId: input.validationId }),
  };
};

const serializeAws_json1_1NotifyAppValidationOutputRequest = (
  input: NotifyAppValidationOutputRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.notificationContext != null && {
      notificationContext: serializeAws_json1_1NotificationContext(input.notificationContext, context),
    }),
  };
};

const serializeAws_json1_1PutAppLaunchConfigurationRequest = (
  input: PutAppLaunchConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.autoLaunch != null && { autoLaunch: input.autoLaunch }),
    ...(input.roleName != null && { roleName: input.roleName }),
    ...(input.serverGroupLaunchConfigurations != null && {
      serverGroupLaunchConfigurations: serializeAws_json1_1ServerGroupLaunchConfigurations(
        input.serverGroupLaunchConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutAppReplicationConfigurationRequest = (
  input: PutAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.serverGroupReplicationConfigurations != null && {
      serverGroupReplicationConfigurations: serializeAws_json1_1ServerGroupReplicationConfigurations(
        input.serverGroupReplicationConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1PutAppValidationConfigurationRequest = (
  input: PutAppValidationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.appValidationConfigurations != null && {
      appValidationConfigurations: serializeAws_json1_1AppValidationConfigurations(
        input.appValidationConfigurations,
        context
      ),
    }),
    ...(input.serverGroupValidationConfigurations != null && {
      serverGroupValidationConfigurations: serializeAws_json1_1ServerGroupValidationConfigurations(
        input.serverGroupValidationConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.key != null && { key: input.key }),
  };
};

const serializeAws_json1_1Server = (input: Server, context: __SerdeContext): any => {
  return {
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
    ...(input.replicationJobTerminated != null && { replicationJobTerminated: input.replicationJobTerminated }),
    ...(input.serverId != null && { serverId: input.serverId }),
    ...(input.serverType != null && { serverType: input.serverType }),
    ...(input.vmServer != null && { vmServer: serializeAws_json1_1VmServer(input.vmServer, context) }),
  };
};

const serializeAws_json1_1ServerGroup = (input: ServerGroup, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.serverGroupId != null && { serverGroupId: input.serverGroupId }),
    ...(input.serverList != null && { serverList: serializeAws_json1_1ServerList(input.serverList, context) }),
  };
};

const serializeAws_json1_1ServerGroupLaunchConfiguration = (
  input: ServerGroupLaunchConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.launchOrder != null && { launchOrder: input.launchOrder }),
    ...(input.serverGroupId != null && { serverGroupId: input.serverGroupId }),
    ...(input.serverLaunchConfigurations != null && {
      serverLaunchConfigurations: serializeAws_json1_1ServerLaunchConfigurations(
        input.serverLaunchConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ServerGroupLaunchConfigurations = (
  input: ServerGroupLaunchConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServerGroupLaunchConfiguration(entry, context);
    });
};

const serializeAws_json1_1ServerGroupReplicationConfiguration = (
  input: ServerGroupReplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.serverGroupId != null && { serverGroupId: input.serverGroupId }),
    ...(input.serverReplicationConfigurations != null && {
      serverReplicationConfigurations: serializeAws_json1_1ServerReplicationConfigurations(
        input.serverReplicationConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ServerGroupReplicationConfigurations = (
  input: ServerGroupReplicationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServerGroupReplicationConfiguration(entry, context);
    });
};

const serializeAws_json1_1ServerGroups = (input: ServerGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServerGroup(entry, context);
    });
};

const serializeAws_json1_1ServerGroupValidationConfiguration = (
  input: ServerGroupValidationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.serverGroupId != null && { serverGroupId: input.serverGroupId }),
    ...(input.serverValidationConfigurations != null && {
      serverValidationConfigurations: serializeAws_json1_1ServerValidationConfigurations(
        input.serverValidationConfigurations,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ServerGroupValidationConfigurations = (
  input: ServerGroupValidationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServerGroupValidationConfiguration(entry, context);
    });
};

const serializeAws_json1_1ServerLaunchConfiguration = (
  input: ServerLaunchConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.associatePublicIpAddress != null && { associatePublicIpAddress: input.associatePublicIpAddress }),
    ...(input.configureScript != null && {
      configureScript: serializeAws_json1_1S3Location(input.configureScript, context),
    }),
    ...(input.configureScriptType != null && { configureScriptType: input.configureScriptType }),
    ...(input.ec2KeyName != null && { ec2KeyName: input.ec2KeyName }),
    ...(input.iamInstanceProfileName != null && { iamInstanceProfileName: input.iamInstanceProfileName }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.logicalId != null && { logicalId: input.logicalId }),
    ...(input.securityGroup != null && { securityGroup: input.securityGroup }),
    ...(input.server != null && { server: serializeAws_json1_1Server(input.server, context) }),
    ...(input.subnet != null && { subnet: input.subnet }),
    ...(input.userData != null && { userData: serializeAws_json1_1UserData(input.userData, context) }),
    ...(input.vpc != null && { vpc: input.vpc }),
  };
};

const serializeAws_json1_1ServerLaunchConfigurations = (
  input: ServerLaunchConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServerLaunchConfiguration(entry, context);
    });
};

const serializeAws_json1_1ServerList = (input: Server[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Server(entry, context);
    });
};

const serializeAws_json1_1ServerReplicationConfiguration = (
  input: ServerReplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.server != null && { server: serializeAws_json1_1Server(input.server, context) }),
    ...(input.serverReplicationParameters != null && {
      serverReplicationParameters: serializeAws_json1_1ServerReplicationParameters(
        input.serverReplicationParameters,
        context
      ),
    }),
  };
};

const serializeAws_json1_1ServerReplicationConfigurations = (
  input: ServerReplicationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServerReplicationConfiguration(entry, context);
    });
};

const serializeAws_json1_1ServerReplicationParameters = (
  input: ServerReplicationParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.encrypted != null && { encrypted: input.encrypted }),
    ...(input.frequency != null && { frequency: input.frequency }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.licenseType != null && { licenseType: input.licenseType }),
    ...(input.numberOfRecentAmisToKeep != null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep }),
    ...(input.runOnce != null && { runOnce: input.runOnce }),
    ...(input.seedTime != null && { seedTime: Math.round(input.seedTime.getTime() / 1000) }),
  };
};

const serializeAws_json1_1ServerValidationConfiguration = (
  input: ServerValidationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.server != null && { server: serializeAws_json1_1Server(input.server, context) }),
    ...(input.serverValidationStrategy != null && { serverValidationStrategy: input.serverValidationStrategy }),
    ...(input.userDataValidationParameters != null && {
      userDataValidationParameters: serializeAws_json1_1UserDataValidationParameters(
        input.userDataValidationParameters,
        context
      ),
    }),
    ...(input.validationId != null && { validationId: input.validationId }),
  };
};

const serializeAws_json1_1ServerValidationConfigurations = (
  input: ServerValidationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1ServerValidationConfiguration(entry, context);
    });
};

const serializeAws_json1_1Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.s3Location != null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) }),
  };
};

const serializeAws_json1_1SSMValidationParameters = (input: SSMValidationParameters, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: input.command }),
    ...(input.executionTimeoutSeconds != null && { executionTimeoutSeconds: input.executionTimeoutSeconds }),
    ...(input.instanceId != null && { instanceId: input.instanceId }),
    ...(input.outputS3BucketName != null && { outputS3BucketName: input.outputS3BucketName }),
    ...(input.scriptType != null && { scriptType: input.scriptType }),
    ...(input.source != null && { source: serializeAws_json1_1Source(input.source, context) }),
  };
};

const serializeAws_json1_1StartAppReplicationRequest = (
  input: StartAppReplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1StartOnDemandAppReplicationRequest = (
  input: StartOnDemandAppReplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.description != null && { description: input.description }),
  };
};

const serializeAws_json1_1StartOnDemandReplicationRunRequest = (
  input: StartOnDemandReplicationRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
  };
};

const serializeAws_json1_1StopAppReplicationRequest = (
  input: StopAppReplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TerminateAppRequest = (input: TerminateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

const serializeAws_json1_1UpdateAppRequest = (input: UpdateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleName != null && { roleName: input.roleName }),
    ...(input.serverGroups != null && { serverGroups: serializeAws_json1_1ServerGroups(input.serverGroups, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_1Tags(input.tags, context) }),
  };
};

const serializeAws_json1_1UpdateReplicationJobRequest = (
  input: UpdateReplicationJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.encrypted != null && { encrypted: input.encrypted }),
    ...(input.frequency != null && { frequency: input.frequency }),
    ...(input.kmsKeyId != null && { kmsKeyId: input.kmsKeyId }),
    ...(input.licenseType != null && { licenseType: input.licenseType }),
    ...(input.nextReplicationRunStartTime != null && {
      nextReplicationRunStartTime: Math.round(input.nextReplicationRunStartTime.getTime() / 1000),
    }),
    ...(input.numberOfRecentAmisToKeep != null && { numberOfRecentAmisToKeep: input.numberOfRecentAmisToKeep }),
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
    ...(input.roleName != null && { roleName: input.roleName }),
  };
};

const serializeAws_json1_1UserData = (input: UserData, context: __SerdeContext): any => {
  return {
    ...(input.s3Location != null && { s3Location: serializeAws_json1_1S3Location(input.s3Location, context) }),
  };
};

const serializeAws_json1_1UserDataValidationParameters = (
  input: UserDataValidationParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.scriptType != null && { scriptType: input.scriptType }),
    ...(input.source != null && { source: serializeAws_json1_1Source(input.source, context) }),
  };
};

const serializeAws_json1_1VmServer = (input: VmServer, context: __SerdeContext): any => {
  return {
    ...(input.vmManagerName != null && { vmManagerName: input.vmManagerName }),
    ...(input.vmManagerType != null && { vmManagerType: input.vmManagerType }),
    ...(input.vmName != null && { vmName: input.vmName }),
    ...(input.vmPath != null && { vmPath: input.vmPath }),
    ...(input.vmServerAddress != null && {
      vmServerAddress: serializeAws_json1_1VmServerAddress(input.vmServerAddress, context),
    }),
  };
};

const serializeAws_json1_1VmServerAddress = (input: VmServerAddress, context: __SerdeContext): any => {
  return {
    ...(input.vmId != null && { vmId: input.vmId }),
    ...(input.vmManagerId != null && { vmManagerId: input.vmManagerId }),
  };
};

const serializeAws_json1_1VmServerAddressList = (input: VmServerAddress[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1VmServerAddress(entry, context);
    });
};

const deserializeAws_json1_1Apps = (output: any, context: __SerdeContext): AppSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AppSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AppSummary = (output: any, context: __SerdeContext): AppSummary => {
  return {
    appId: __expectString(output.appId),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    description: __expectString(output.description),
    importedAppId: __expectString(output.importedAppId),
    lastModified:
      output.lastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModified)))
        : undefined,
    latestReplicationTime:
      output.latestReplicationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.latestReplicationTime)))
        : undefined,
    launchConfigurationStatus: __expectString(output.launchConfigurationStatus),
    launchDetails:
      output.launchDetails != null ? deserializeAws_json1_1LaunchDetails(output.launchDetails, context) : undefined,
    launchStatus: __expectString(output.launchStatus),
    launchStatusMessage: __expectString(output.launchStatusMessage),
    name: __expectString(output.name),
    replicationConfigurationStatus: __expectString(output.replicationConfigurationStatus),
    replicationStatus: __expectString(output.replicationStatus),
    replicationStatusMessage: __expectString(output.replicationStatusMessage),
    roleName: __expectString(output.roleName),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    totalServerGroups: __expectInt32(output.totalServerGroups),
    totalServers: __expectInt32(output.totalServers),
  } as any;
};

const deserializeAws_json1_1AppValidationConfiguration = (
  output: any,
  context: __SerdeContext
): AppValidationConfiguration => {
  return {
    appValidationStrategy: __expectString(output.appValidationStrategy),
    name: __expectString(output.name),
    ssmValidationParameters:
      output.ssmValidationParameters != null
        ? deserializeAws_json1_1SSMValidationParameters(output.ssmValidationParameters, context)
        : undefined,
    validationId: __expectString(output.validationId),
  } as any;
};

const deserializeAws_json1_1AppValidationConfigurations = (
  output: any,
  context: __SerdeContext
): AppValidationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AppValidationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AppValidationOutput = (output: any, context: __SerdeContext): AppValidationOutput => {
  return {
    ssmOutput: output.ssmOutput != null ? deserializeAws_json1_1SSMOutput(output.ssmOutput, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Connector = (output: any, context: __SerdeContext): Connector => {
  return {
    associatedOn:
      output.associatedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.associatedOn)))
        : undefined,
    capabilityList:
      output.capabilityList != null
        ? deserializeAws_json1_1ConnectorCapabilityList(output.capabilityList, context)
        : undefined,
    connectorId: __expectString(output.connectorId),
    ipAddress: __expectString(output.ipAddress),
    macAddress: __expectString(output.macAddress),
    status: __expectString(output.status),
    version: __expectString(output.version),
    vmManagerId: __expectString(output.vmManagerId),
    vmManagerName: __expectString(output.vmManagerName),
    vmManagerType: __expectString(output.vmManagerType),
  } as any;
};

const deserializeAws_json1_1ConnectorCapabilityList = (
  output: any,
  context: __SerdeContext
): (ConnectorCapability | string)[] => {
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

const deserializeAws_json1_1ConnectorList = (output: any, context: __SerdeContext): Connector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Connector(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateAppResponse = (output: any, context: __SerdeContext): CreateAppResponse => {
  return {
    appSummary: output.appSummary != null ? deserializeAws_json1_1AppSummary(output.appSummary, context) : undefined,
    serverGroups:
      output.serverGroups != null ? deserializeAws_json1_1ServerGroups(output.serverGroups, context) : undefined,
    tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateReplicationJobResponse = (
  output: any,
  context: __SerdeContext
): CreateReplicationJobResponse => {
  return {
    replicationJobId: __expectString(output.replicationJobId),
  } as any;
};

const deserializeAws_json1_1DeleteAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppLaunchConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppReplicationConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteAppResponse = (output: any, context: __SerdeContext): DeleteAppResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteAppValidationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppValidationConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteReplicationJobResponse = (
  output: any,
  context: __SerdeContext
): DeleteReplicationJobResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeleteServerCatalogResponse = (
  output: any,
  context: __SerdeContext
): DeleteServerCatalogResponse => {
  return {} as any;
};

const deserializeAws_json1_1DisassociateConnectorResponse = (
  output: any,
  context: __SerdeContext
): DisassociateConnectorResponse => {
  return {} as any;
};

const deserializeAws_json1_1DryRunOperationException = (
  output: any,
  context: __SerdeContext
): DryRunOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1GenerateChangeSetResponse = (
  output: any,
  context: __SerdeContext
): GenerateChangeSetResponse => {
  return {
    s3Location: output.s3Location != null ? deserializeAws_json1_1S3Location(output.s3Location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GenerateTemplateResponse = (
  output: any,
  context: __SerdeContext
): GenerateTemplateResponse => {
  return {
    s3Location: output.s3Location != null ? deserializeAws_json1_1S3Location(output.s3Location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppLaunchConfigurationResponse => {
  return {
    appId: __expectString(output.appId),
    autoLaunch: __expectBoolean(output.autoLaunch),
    roleName: __expectString(output.roleName),
    serverGroupLaunchConfigurations:
      output.serverGroupLaunchConfigurations != null
        ? deserializeAws_json1_1ServerGroupLaunchConfigurations(output.serverGroupLaunchConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppReplicationConfigurationResponse => {
  return {
    serverGroupReplicationConfigurations:
      output.serverGroupReplicationConfigurations != null
        ? deserializeAws_json1_1ServerGroupReplicationConfigurations(
            output.serverGroupReplicationConfigurations,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetAppResponse = (output: any, context: __SerdeContext): GetAppResponse => {
  return {
    appSummary: output.appSummary != null ? deserializeAws_json1_1AppSummary(output.appSummary, context) : undefined,
    serverGroups:
      output.serverGroups != null ? deserializeAws_json1_1ServerGroups(output.serverGroups, context) : undefined,
    tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetAppValidationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppValidationConfigurationResponse => {
  return {
    appValidationConfigurations:
      output.appValidationConfigurations != null
        ? deserializeAws_json1_1AppValidationConfigurations(output.appValidationConfigurations, context)
        : undefined,
    serverGroupValidationConfigurations:
      output.serverGroupValidationConfigurations != null
        ? deserializeAws_json1_1ServerGroupValidationConfigurations(output.serverGroupValidationConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetAppValidationOutputResponse = (
  output: any,
  context: __SerdeContext
): GetAppValidationOutputResponse => {
  return {
    validationOutputList:
      output.validationOutputList != null
        ? deserializeAws_json1_1ValidationOutputList(output.validationOutputList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetConnectorsResponse = (output: any, context: __SerdeContext): GetConnectorsResponse => {
  return {
    connectorList:
      output.connectorList != null ? deserializeAws_json1_1ConnectorList(output.connectorList, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetReplicationJobsResponse = (
  output: any,
  context: __SerdeContext
): GetReplicationJobsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    replicationJobList:
      output.replicationJobList != null
        ? deserializeAws_json1_1ReplicationJobList(output.replicationJobList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetReplicationRunsResponse = (
  output: any,
  context: __SerdeContext
): GetReplicationRunsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    replicationJob:
      output.replicationJob != null ? deserializeAws_json1_1ReplicationJob(output.replicationJob, context) : undefined,
    replicationRunList:
      output.replicationRunList != null
        ? deserializeAws_json1_1ReplicationRunList(output.replicationRunList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetServersResponse = (output: any, context: __SerdeContext): GetServersResponse => {
  return {
    lastModifiedOn:
      output.lastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedOn)))
        : undefined,
    nextToken: __expectString(output.nextToken),
    serverCatalogStatus: __expectString(output.serverCatalogStatus),
    serverList: output.serverList != null ? deserializeAws_json1_1ServerList(output.serverList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ImportAppCatalogResponse = (
  output: any,
  context: __SerdeContext
): ImportAppCatalogResponse => {
  return {} as any;
};

const deserializeAws_json1_1ImportServerCatalogResponse = (
  output: any,
  context: __SerdeContext
): ImportServerCatalogResponse => {
  return {} as any;
};

const deserializeAws_json1_1InternalError = (output: any, context: __SerdeContext): InternalError => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidParameterException = (
  output: any,
  context: __SerdeContext
): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1LaunchAppResponse = (output: any, context: __SerdeContext): LaunchAppResponse => {
  return {} as any;
};

const deserializeAws_json1_1LaunchDetails = (output: any, context: __SerdeContext): LaunchDetails => {
  return {
    latestLaunchTime:
      output.latestLaunchTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.latestLaunchTime)))
        : undefined,
    stackId: __expectString(output.stackId),
    stackName: __expectString(output.stackName),
  } as any;
};

const deserializeAws_json1_1ListAppsResponse = (output: any, context: __SerdeContext): ListAppsResponse => {
  return {
    apps: output.apps != null ? deserializeAws_json1_1Apps(output.apps, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1MissingRequiredParameterException = (
  output: any,
  context: __SerdeContext
): MissingRequiredParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NoConnectorsAvailableException = (
  output: any,
  context: __SerdeContext
): NoConnectorsAvailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NotifyAppValidationOutputResponse = (
  output: any,
  context: __SerdeContext
): NotifyAppValidationOutputResponse => {
  return {} as any;
};

const deserializeAws_json1_1OperationNotPermittedException = (
  output: any,
  context: __SerdeContext
): OperationNotPermittedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1PutAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutAppLaunchConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutAppReplicationConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1PutAppValidationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutAppValidationConfigurationResponse => {
  return {} as any;
};

const deserializeAws_json1_1ReplicationJob = (output: any, context: __SerdeContext): ReplicationJob => {
  return {
    description: __expectString(output.description),
    encrypted: __expectBoolean(output.encrypted),
    frequency: __expectInt32(output.frequency),
    kmsKeyId: __expectString(output.kmsKeyId),
    latestAmiId: __expectString(output.latestAmiId),
    licenseType: __expectString(output.licenseType),
    nextReplicationRunStartTime:
      output.nextReplicationRunStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.nextReplicationRunStartTime)))
        : undefined,
    numberOfRecentAmisToKeep: __expectInt32(output.numberOfRecentAmisToKeep),
    replicationJobId: __expectString(output.replicationJobId),
    replicationRunList:
      output.replicationRunList != null
        ? deserializeAws_json1_1ReplicationRunList(output.replicationRunList, context)
        : undefined,
    roleName: __expectString(output.roleName),
    runOnce: __expectBoolean(output.runOnce),
    seedReplicationTime:
      output.seedReplicationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.seedReplicationTime)))
        : undefined,
    serverId: __expectString(output.serverId),
    serverType: __expectString(output.serverType),
    state: __expectString(output.state),
    statusMessage: __expectString(output.statusMessage),
    vmServer: output.vmServer != null ? deserializeAws_json1_1VmServer(output.vmServer, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ReplicationJobAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ReplicationJobAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReplicationJobList = (output: any, context: __SerdeContext): ReplicationJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationJob(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationJobNotFoundException = (
  output: any,
  context: __SerdeContext
): ReplicationJobNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReplicationRun = (output: any, context: __SerdeContext): ReplicationRun => {
  return {
    amiId: __expectString(output.amiId),
    completedTime:
      output.completedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.completedTime)))
        : undefined,
    description: __expectString(output.description),
    encrypted: __expectBoolean(output.encrypted),
    kmsKeyId: __expectString(output.kmsKeyId),
    replicationRunId: __expectString(output.replicationRunId),
    scheduledStartTime:
      output.scheduledStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.scheduledStartTime)))
        : undefined,
    stageDetails:
      output.stageDetails != null
        ? deserializeAws_json1_1ReplicationRunStageDetails(output.stageDetails, context)
        : undefined,
    state: __expectString(output.state),
    statusMessage: __expectString(output.statusMessage),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1ReplicationRunLimitExceededException = (
  output: any,
  context: __SerdeContext
): ReplicationRunLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ReplicationRunList = (output: any, context: __SerdeContext): ReplicationRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ReplicationRun(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ReplicationRunStageDetails = (
  output: any,
  context: __SerdeContext
): ReplicationRunStageDetails => {
  return {
    stage: __expectString(output.stage),
    stageProgress: __expectString(output.stageProgress),
  } as any;
};

const deserializeAws_json1_1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
  } as any;
};

const deserializeAws_json1_1Server = (output: any, context: __SerdeContext): Server => {
  return {
    replicationJobId: __expectString(output.replicationJobId),
    replicationJobTerminated: __expectBoolean(output.replicationJobTerminated),
    serverId: __expectString(output.serverId),
    serverType: __expectString(output.serverType),
    vmServer: output.vmServer != null ? deserializeAws_json1_1VmServer(output.vmServer, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ServerCannotBeReplicatedException = (
  output: any,
  context: __SerdeContext
): ServerCannotBeReplicatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ServerGroup = (output: any, context: __SerdeContext): ServerGroup => {
  return {
    name: __expectString(output.name),
    serverGroupId: __expectString(output.serverGroupId),
    serverList: output.serverList != null ? deserializeAws_json1_1ServerList(output.serverList, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ServerGroupLaunchConfiguration = (
  output: any,
  context: __SerdeContext
): ServerGroupLaunchConfiguration => {
  return {
    launchOrder: __expectInt32(output.launchOrder),
    serverGroupId: __expectString(output.serverGroupId),
    serverLaunchConfigurations:
      output.serverLaunchConfigurations != null
        ? deserializeAws_json1_1ServerLaunchConfigurations(output.serverLaunchConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServerGroupLaunchConfigurations = (
  output: any,
  context: __SerdeContext
): ServerGroupLaunchConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerGroupLaunchConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServerGroupReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerGroupReplicationConfiguration => {
  return {
    serverGroupId: __expectString(output.serverGroupId),
    serverReplicationConfigurations:
      output.serverReplicationConfigurations != null
        ? deserializeAws_json1_1ServerReplicationConfigurations(output.serverReplicationConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServerGroupReplicationConfigurations = (
  output: any,
  context: __SerdeContext
): ServerGroupReplicationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerGroupReplicationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServerGroups = (output: any, context: __SerdeContext): ServerGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServerGroupValidationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerGroupValidationConfiguration => {
  return {
    serverGroupId: __expectString(output.serverGroupId),
    serverValidationConfigurations:
      output.serverValidationConfigurations != null
        ? deserializeAws_json1_1ServerValidationConfigurations(output.serverValidationConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServerGroupValidationConfigurations = (
  output: any,
  context: __SerdeContext
): ServerGroupValidationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerGroupValidationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServerLaunchConfiguration = (
  output: any,
  context: __SerdeContext
): ServerLaunchConfiguration => {
  return {
    associatePublicIpAddress: __expectBoolean(output.associatePublicIpAddress),
    configureScript:
      output.configureScript != null ? deserializeAws_json1_1S3Location(output.configureScript, context) : undefined,
    configureScriptType: __expectString(output.configureScriptType),
    ec2KeyName: __expectString(output.ec2KeyName),
    iamInstanceProfileName: __expectString(output.iamInstanceProfileName),
    instanceType: __expectString(output.instanceType),
    logicalId: __expectString(output.logicalId),
    securityGroup: __expectString(output.securityGroup),
    server: output.server != null ? deserializeAws_json1_1Server(output.server, context) : undefined,
    subnet: __expectString(output.subnet),
    userData: output.userData != null ? deserializeAws_json1_1UserData(output.userData, context) : undefined,
    vpc: __expectString(output.vpc),
  } as any;
};

const deserializeAws_json1_1ServerLaunchConfigurations = (
  output: any,
  context: __SerdeContext
): ServerLaunchConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerLaunchConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServerList = (output: any, context: __SerdeContext): Server[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Server(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServerReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerReplicationConfiguration => {
  return {
    server: output.server != null ? deserializeAws_json1_1Server(output.server, context) : undefined,
    serverReplicationParameters:
      output.serverReplicationParameters != null
        ? deserializeAws_json1_1ServerReplicationParameters(output.serverReplicationParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ServerReplicationConfigurations = (
  output: any,
  context: __SerdeContext
): ServerReplicationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerReplicationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServerReplicationParameters = (
  output: any,
  context: __SerdeContext
): ServerReplicationParameters => {
  return {
    encrypted: __expectBoolean(output.encrypted),
    frequency: __expectInt32(output.frequency),
    kmsKeyId: __expectString(output.kmsKeyId),
    licenseType: __expectString(output.licenseType),
    numberOfRecentAmisToKeep: __expectInt32(output.numberOfRecentAmisToKeep),
    runOnce: __expectBoolean(output.runOnce),
    seedTime:
      output.seedTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.seedTime))) : undefined,
  } as any;
};

const deserializeAws_json1_1ServerValidationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerValidationConfiguration => {
  return {
    name: __expectString(output.name),
    server: output.server != null ? deserializeAws_json1_1Server(output.server, context) : undefined,
    serverValidationStrategy: __expectString(output.serverValidationStrategy),
    userDataValidationParameters:
      output.userDataValidationParameters != null
        ? deserializeAws_json1_1UserDataValidationParameters(output.userDataValidationParameters, context)
        : undefined,
    validationId: __expectString(output.validationId),
  } as any;
};

const deserializeAws_json1_1ServerValidationConfigurations = (
  output: any,
  context: __SerdeContext
): ServerValidationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServerValidationConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ServerValidationOutput = (output: any, context: __SerdeContext): ServerValidationOutput => {
  return {
    server: output.server != null ? deserializeAws_json1_1Server(output.server, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Source = (output: any, context: __SerdeContext): Source => {
  return {
    s3Location: output.s3Location != null ? deserializeAws_json1_1S3Location(output.s3Location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SSMOutput = (output: any, context: __SerdeContext): SSMOutput => {
  return {
    s3Location: output.s3Location != null ? deserializeAws_json1_1S3Location(output.s3Location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SSMValidationParameters = (
  output: any,
  context: __SerdeContext
): SSMValidationParameters => {
  return {
    command: __expectString(output.command),
    executionTimeoutSeconds: __expectInt32(output.executionTimeoutSeconds),
    instanceId: __expectString(output.instanceId),
    outputS3BucketName: __expectString(output.outputS3BucketName),
    scriptType: __expectString(output.scriptType),
    source: output.source != null ? deserializeAws_json1_1Source(output.source, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StartAppReplicationResponse = (
  output: any,
  context: __SerdeContext
): StartAppReplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartOnDemandAppReplicationResponse = (
  output: any,
  context: __SerdeContext
): StartOnDemandAppReplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1StartOnDemandReplicationRunResponse = (
  output: any,
  context: __SerdeContext
): StartOnDemandReplicationRunResponse => {
  return {
    replicationRunId: __expectString(output.replicationRunId),
  } as any;
};

const deserializeAws_json1_1StopAppReplicationResponse = (
  output: any,
  context: __SerdeContext
): StopAppReplicationResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TemporarilyUnavailableException = (
  output: any,
  context: __SerdeContext
): TemporarilyUnavailableException => {
  return {} as any;
};

const deserializeAws_json1_1TerminateAppResponse = (output: any, context: __SerdeContext): TerminateAppResponse => {
  return {} as any;
};

const deserializeAws_json1_1UnauthorizedOperationException = (
  output: any,
  context: __SerdeContext
): UnauthorizedOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1UpdateAppResponse = (output: any, context: __SerdeContext): UpdateAppResponse => {
  return {
    appSummary: output.appSummary != null ? deserializeAws_json1_1AppSummary(output.appSummary, context) : undefined,
    serverGroups:
      output.serverGroups != null ? deserializeAws_json1_1ServerGroups(output.serverGroups, context) : undefined,
    tags: output.tags != null ? deserializeAws_json1_1Tags(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateReplicationJobResponse = (
  output: any,
  context: __SerdeContext
): UpdateReplicationJobResponse => {
  return {} as any;
};

const deserializeAws_json1_1UserData = (output: any, context: __SerdeContext): UserData => {
  return {
    s3Location: output.s3Location != null ? deserializeAws_json1_1S3Location(output.s3Location, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UserDataValidationParameters = (
  output: any,
  context: __SerdeContext
): UserDataValidationParameters => {
  return {
    scriptType: __expectString(output.scriptType),
    source: output.source != null ? deserializeAws_json1_1Source(output.source, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ValidationOutput = (output: any, context: __SerdeContext): ValidationOutput => {
  return {
    appValidationOutput:
      output.appValidationOutput != null
        ? deserializeAws_json1_1AppValidationOutput(output.appValidationOutput, context)
        : undefined,
    latestValidationTime:
      output.latestValidationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.latestValidationTime)))
        : undefined,
    name: __expectString(output.name),
    serverValidationOutput:
      output.serverValidationOutput != null
        ? deserializeAws_json1_1ServerValidationOutput(output.serverValidationOutput, context)
        : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    validationId: __expectString(output.validationId),
  } as any;
};

const deserializeAws_json1_1ValidationOutputList = (output: any, context: __SerdeContext): ValidationOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ValidationOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1VmServer = (output: any, context: __SerdeContext): VmServer => {
  return {
    vmManagerName: __expectString(output.vmManagerName),
    vmManagerType: __expectString(output.vmManagerType),
    vmName: __expectString(output.vmName),
    vmPath: __expectString(output.vmPath),
    vmServerAddress:
      output.vmServerAddress != null
        ? deserializeAws_json1_1VmServerAddress(output.vmServerAddress, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1VmServerAddress = (output: any, context: __SerdeContext): VmServerAddress => {
  return {
    vmId: __expectString(output.vmId),
    vmManagerId: __expectString(output.vmManagerId),
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
