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

/**
 * serializeAws_json1_1CreateAppCommand
 */
export const se_CreateAppCommand = async (
  input: CreateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.CreateApp",
  };
  let body: any;
  body = JSON.stringify(se_CreateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReplicationJobCommand
 */
export const se_CreateReplicationJobCommand = async (
  input: CreateReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.CreateReplicationJob",
  };
  let body: any;
  body = JSON.stringify(se_CreateReplicationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppCommand
 */
export const se_DeleteAppCommand = async (
  input: DeleteAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteApp",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppLaunchConfigurationCommand
 */
export const se_DeleteAppLaunchConfigurationCommand = async (
  input: DeleteAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppLaunchConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAppLaunchConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppReplicationConfigurationCommand
 */
export const se_DeleteAppReplicationConfigurationCommand = async (
  input: DeleteAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppReplicationConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAppReplicationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppValidationConfigurationCommand
 */
export const se_DeleteAppValidationConfigurationCommand = async (
  input: DeleteAppValidationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteAppValidationConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAppValidationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReplicationJobCommand
 */
export const se_DeleteReplicationJobCommand = async (
  input: DeleteReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteReplicationJob",
  };
  let body: any;
  body = JSON.stringify(se_DeleteReplicationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServerCatalogCommand
 */
export const se_DeleteServerCatalogCommand = async (
  input: DeleteServerCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DeleteServerCatalog",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServerCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateConnectorCommand
 */
export const se_DisassociateConnectorCommand = async (
  input: DisassociateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.DisassociateConnector",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateChangeSetCommand
 */
export const se_GenerateChangeSetCommand = async (
  input: GenerateChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GenerateChangeSet",
  };
  let body: any;
  body = JSON.stringify(se_GenerateChangeSetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateTemplateCommand
 */
export const se_GenerateTemplateCommand = async (
  input: GenerateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GenerateTemplate",
  };
  let body: any;
  body = JSON.stringify(se_GenerateTemplateRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppCommand
 */
export const se_GetAppCommand = async (input: GetAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetApp",
  };
  let body: any;
  body = JSON.stringify(se_GetAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppLaunchConfigurationCommand
 */
export const se_GetAppLaunchConfigurationCommand = async (
  input: GetAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppLaunchConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_GetAppLaunchConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppReplicationConfigurationCommand
 */
export const se_GetAppReplicationConfigurationCommand = async (
  input: GetAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppReplicationConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_GetAppReplicationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppValidationConfigurationCommand
 */
export const se_GetAppValidationConfigurationCommand = async (
  input: GetAppValidationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppValidationConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_GetAppValidationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppValidationOutputCommand
 */
export const se_GetAppValidationOutputCommand = async (
  input: GetAppValidationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput",
  };
  let body: any;
  body = JSON.stringify(se_GetAppValidationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConnectorsCommand
 */
export const se_GetConnectorsCommand = async (
  input: GetConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetConnectors",
  };
  let body: any;
  body = JSON.stringify(se_GetConnectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReplicationJobsCommand
 */
export const se_GetReplicationJobsCommand = async (
  input: GetReplicationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetReplicationJobs",
  };
  let body: any;
  body = JSON.stringify(se_GetReplicationJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReplicationRunsCommand
 */
export const se_GetReplicationRunsCommand = async (
  input: GetReplicationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetReplicationRuns",
  };
  let body: any;
  body = JSON.stringify(se_GetReplicationRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServersCommand
 */
export const se_GetServersCommand = async (
  input: GetServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.GetServers",
  };
  let body: any;
  body = JSON.stringify(se_GetServersRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportAppCatalogCommand
 */
export const se_ImportAppCatalogCommand = async (
  input: ImportAppCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.ImportAppCatalog",
  };
  let body: any;
  body = JSON.stringify(se_ImportAppCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportServerCatalogCommand
 */
export const se_ImportServerCatalogCommand = async (
  input: ImportServerCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.ImportServerCatalog",
  };
  let body: any;
  body = JSON.stringify(se_ImportServerCatalogRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LaunchAppCommand
 */
export const se_LaunchAppCommand = async (
  input: LaunchAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.LaunchApp",
  };
  let body: any;
  body = JSON.stringify(se_LaunchAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAppsCommand
 */
export const se_ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.ListApps",
  };
  let body: any;
  body = JSON.stringify(se_ListAppsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyAppValidationOutputCommand
 */
export const se_NotifyAppValidationOutputCommand = async (
  input: NotifyAppValidationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput",
  };
  let body: any;
  body = JSON.stringify(se_NotifyAppValidationOutputRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAppLaunchConfigurationCommand
 */
export const se_PutAppLaunchConfigurationCommand = async (
  input: PutAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppLaunchConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_PutAppLaunchConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAppReplicationConfigurationCommand
 */
export const se_PutAppReplicationConfigurationCommand = async (
  input: PutAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppReplicationConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_PutAppReplicationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAppValidationConfigurationCommand
 */
export const se_PutAppValidationConfigurationCommand = async (
  input: PutAppValidationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.PutAppValidationConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_PutAppValidationConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAppReplicationCommand
 */
export const se_StartAppReplicationCommand = async (
  input: StartAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartAppReplication",
  };
  let body: any;
  body = JSON.stringify(se_StartAppReplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartOnDemandAppReplicationCommand
 */
export const se_StartOnDemandAppReplicationCommand = async (
  input: StartOnDemandAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartOnDemandAppReplication",
  };
  let body: any;
  body = JSON.stringify(se_StartOnDemandAppReplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartOnDemandReplicationRunCommand
 */
export const se_StartOnDemandReplicationRunCommand = async (
  input: StartOnDemandReplicationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.StartOnDemandReplicationRun",
  };
  let body: any;
  body = JSON.stringify(se_StartOnDemandReplicationRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAppReplicationCommand
 */
export const se_StopAppReplicationCommand = async (
  input: StopAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.StopAppReplication",
  };
  let body: any;
  body = JSON.stringify(se_StopAppReplicationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateAppCommand
 */
export const se_TerminateAppCommand = async (
  input: TerminateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.TerminateApp",
  };
  let body: any;
  body = JSON.stringify(se_TerminateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAppCommand
 */
export const se_UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.UpdateApp",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAppRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateReplicationJobCommand
 */
export const se_UpdateReplicationJobCommand = async (
  input: UpdateReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSServerMigrationService_V2016_10_24.UpdateReplicationJob",
  };
  let body: any;
  body = JSON.stringify(se_UpdateReplicationJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateAppCommand
 */
export const de_CreateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAppResponse(data, context);
  const response: CreateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAppCommandError
 */
const de_CreateAppCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateReplicationJobCommand
 */
export const de_CreateReplicationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReplicationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateReplicationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateReplicationJobResponse(data, context);
  const response: CreateReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateReplicationJobCommandError
 */
const de_CreateReplicationJobCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "NoConnectorsAvailableException":
    case "com.amazonaws.sms#NoConnectorsAvailableException":
      throw await de_NoConnectorsAvailableExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ReplicationJobAlreadyExistsException":
    case "com.amazonaws.sms#ReplicationJobAlreadyExistsException":
      throw await de_ReplicationJobAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServerCannotBeReplicatedException":
    case "com.amazonaws.sms#ServerCannotBeReplicatedException":
      throw await de_ServerCannotBeReplicatedExceptionRes(parsedOutput, context);
    case "TemporarilyUnavailableException":
    case "com.amazonaws.sms#TemporarilyUnavailableException":
      throw await de_TemporarilyUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAppCommand
 */
export const de_DeleteAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAppResponse(data, context);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAppCommandError
 */
const de_DeleteAppCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAppLaunchConfigurationCommand
 */
export const de_DeleteAppLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppLaunchConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAppLaunchConfigurationResponse(data, context);
  const response: DeleteAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAppLaunchConfigurationCommandError
 */
const de_DeleteAppLaunchConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAppReplicationConfigurationCommand
 */
export const de_DeleteAppReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppReplicationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppReplicationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAppReplicationConfigurationResponse(data, context);
  const response: DeleteAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAppReplicationConfigurationCommandError
 */
const de_DeleteAppReplicationConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteAppValidationConfigurationCommand
 */
export const de_DeleteAppValidationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAppValidationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAppValidationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAppValidationConfigurationResponse(data, context);
  const response: DeleteAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteAppValidationConfigurationCommandError
 */
const de_DeleteAppValidationConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteReplicationJobCommand
 */
export const de_DeleteReplicationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReplicationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteReplicationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteReplicationJobResponse(data, context);
  const response: DeleteReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteReplicationJobCommandError
 */
const de_DeleteReplicationJobCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ReplicationJobNotFoundException":
    case "com.amazonaws.sms#ReplicationJobNotFoundException":
      throw await de_ReplicationJobNotFoundExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteServerCatalogCommand
 */
export const de_DeleteServerCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServerCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServerCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServerCatalogResponse(data, context);
  const response: DeleteServerCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteServerCatalogCommandError
 */
const de_DeleteServerCatalogCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DisassociateConnectorCommand
 */
export const de_DisassociateConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DisassociateConnectorResponse(data, context);
  const response: DisassociateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DisassociateConnectorCommandError
 */
const de_DisassociateConnectorCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GenerateChangeSetCommand
 */
export const de_GenerateChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateChangeSetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateChangeSetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateChangeSetResponse(data, context);
  const response: GenerateChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GenerateChangeSetCommandError
 */
const de_GenerateChangeSetCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GenerateTemplateCommand
 */
export const de_GenerateTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GenerateTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GenerateTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GenerateTemplateResponse(data, context);
  const response: GenerateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GenerateTemplateCommandError
 */
const de_GenerateTemplateCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAppCommand
 */
export const de_GetAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAppResponse(data, context);
  const response: GetAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAppCommandError
 */
const de_GetAppCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetAppCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalError":
    case "com.amazonaws.sms#InternalError":
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAppLaunchConfigurationCommand
 */
export const de_GetAppLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAppLaunchConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAppLaunchConfigurationResponse(data, context);
  const response: GetAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAppLaunchConfigurationCommandError
 */
const de_GetAppLaunchConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAppReplicationConfigurationCommand
 */
export const de_GetAppReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppReplicationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAppReplicationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAppReplicationConfigurationResponse(data, context);
  const response: GetAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAppReplicationConfigurationCommandError
 */
const de_GetAppReplicationConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAppValidationConfigurationCommand
 */
export const de_GetAppValidationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppValidationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAppValidationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAppValidationConfigurationResponse(data, context);
  const response: GetAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAppValidationConfigurationCommandError
 */
const de_GetAppValidationConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAppValidationOutputCommand
 */
export const de_GetAppValidationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAppValidationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAppValidationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAppValidationOutputResponse(data, context);
  const response: GetAppValidationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAppValidationOutputCommandError
 */
const de_GetAppValidationOutputCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetConnectorsCommand
 */
export const de_GetConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetConnectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetConnectorsResponse(data, context);
  const response: GetConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetConnectorsCommandError
 */
const de_GetConnectorsCommandError = async (
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
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetReplicationJobsCommand
 */
export const de_GetReplicationJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetReplicationJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReplicationJobsResponse(data, context);
  const response: GetReplicationJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetReplicationJobsCommandError
 */
const de_GetReplicationJobsCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetReplicationRunsCommand
 */
export const de_GetReplicationRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReplicationRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetReplicationRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetReplicationRunsResponse(data, context);
  const response: GetReplicationRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetReplicationRunsCommandError
 */
const de_GetReplicationRunsCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetServersCommand
 */
export const de_GetServersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServersCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServersResponse(data, context);
  const response: GetServersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetServersCommandError
 */
const de_GetServersCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportAppCatalogCommand
 */
export const de_ImportAppCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportAppCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportAppCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportAppCatalogResponse(data, context);
  const response: ImportAppCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportAppCatalogCommandError
 */
const de_ImportAppCatalogCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ImportServerCatalogCommand
 */
export const de_ImportServerCatalogCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportServerCatalogCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ImportServerCatalogCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ImportServerCatalogResponse(data, context);
  const response: ImportServerCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ImportServerCatalogCommandError
 */
const de_ImportServerCatalogCommandError = async (
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
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "NoConnectorsAvailableException":
    case "com.amazonaws.sms#NoConnectorsAvailableException":
      throw await de_NoConnectorsAvailableExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1LaunchAppCommand
 */
export const de_LaunchAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LaunchAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_LaunchAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_LaunchAppResponse(data, context);
  const response: LaunchAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1LaunchAppCommandError
 */
const de_LaunchAppCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListAppsCommand
 */
export const de_ListAppsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAppsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAppsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAppsResponse(data, context);
  const response: ListAppsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListAppsCommandError
 */
const de_ListAppsCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1NotifyAppValidationOutputCommand
 */
export const de_NotifyAppValidationOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyAppValidationOutputCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyAppValidationOutputCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_NotifyAppValidationOutputResponse(data, context);
  const response: NotifyAppValidationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1NotifyAppValidationOutputCommandError
 */
const de_NotifyAppValidationOutputCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutAppLaunchConfigurationCommand
 */
export const de_PutAppLaunchConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppLaunchConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAppLaunchConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAppLaunchConfigurationResponse(data, context);
  const response: PutAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAppLaunchConfigurationCommandError
 */
const de_PutAppLaunchConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutAppReplicationConfigurationCommand
 */
export const de_PutAppReplicationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppReplicationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAppReplicationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAppReplicationConfigurationResponse(data, context);
  const response: PutAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAppReplicationConfigurationCommandError
 */
const de_PutAppReplicationConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PutAppValidationConfigurationCommand
 */
export const de_PutAppValidationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAppValidationConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAppValidationConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PutAppValidationConfigurationResponse(data, context);
  const response: PutAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1PutAppValidationConfigurationCommandError
 */
const de_PutAppValidationConfigurationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartAppReplicationCommand
 */
export const de_StartAppReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartAppReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartAppReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartAppReplicationResponse(data, context);
  const response: StartAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartAppReplicationCommandError
 */
const de_StartAppReplicationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartOnDemandAppReplicationCommand
 */
export const de_StartOnDemandAppReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandAppReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartOnDemandAppReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartOnDemandAppReplicationResponse(data, context);
  const response: StartOnDemandAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartOnDemandAppReplicationCommandError
 */
const de_StartOnDemandAppReplicationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StartOnDemandReplicationRunCommand
 */
export const de_StartOnDemandReplicationRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOnDemandReplicationRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartOnDemandReplicationRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartOnDemandReplicationRunResponse(data, context);
  const response: StartOnDemandReplicationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StartOnDemandReplicationRunCommandError
 */
const de_StartOnDemandReplicationRunCommandError = async (
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
      throw await de_DryRunOperationExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ReplicationRunLimitExceededException":
    case "com.amazonaws.sms#ReplicationRunLimitExceededException":
      throw await de_ReplicationRunLimitExceededExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopAppReplicationCommand
 */
export const de_StopAppReplicationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopAppReplicationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopAppReplicationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopAppReplicationResponse(data, context);
  const response: StopAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopAppReplicationCommandError
 */
const de_StopAppReplicationCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TerminateAppCommand
 */
export const de_TerminateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TerminateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TerminateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TerminateAppResponse(data, context);
  const response: TerminateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TerminateAppCommandError
 */
const de_TerminateAppCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateAppCommand
 */
export const de_UpdateAppCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAppCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAppCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateAppResponse(data, context);
  const response: UpdateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateAppCommandError
 */
const de_UpdateAppCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateReplicationJobCommand
 */
export const de_UpdateReplicationJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReplicationJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateReplicationJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateReplicationJobResponse(data, context);
  const response: UpdateReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateReplicationJobCommandError
 */
const de_UpdateReplicationJobCommandError = async (
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
      throw await de_InternalErrorRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.sms#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.sms#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "OperationNotPermittedException":
    case "com.amazonaws.sms#OperationNotPermittedException":
      throw await de_OperationNotPermittedExceptionRes(parsedOutput, context);
    case "ReplicationJobNotFoundException":
    case "com.amazonaws.sms#ReplicationJobNotFoundException":
      throw await de_ReplicationJobNotFoundExceptionRes(parsedOutput, context);
    case "ServerCannotBeReplicatedException":
    case "com.amazonaws.sms#ServerCannotBeReplicatedException":
      throw await de_ServerCannotBeReplicatedExceptionRes(parsedOutput, context);
    case "TemporarilyUnavailableException":
    case "com.amazonaws.sms#TemporarilyUnavailableException":
      throw await de_TemporarilyUnavailableExceptionRes(parsedOutput, context);
    case "UnauthorizedOperationException":
    case "com.amazonaws.sms#UnauthorizedOperationException":
      throw await de_UnauthorizedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DryRunOperationExceptionRes
 */
const de_DryRunOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DryRunOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DryRunOperationException(body, context);
  const exception = new DryRunOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalErrorRes
 */
const de_InternalErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalError(body, context);
  const exception = new InternalError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterException(body, context);
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MissingRequiredParameterExceptionRes
 */
const de_MissingRequiredParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MissingRequiredParameterException(body, context);
  const exception = new MissingRequiredParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NoConnectorsAvailableExceptionRes
 */
const de_NoConnectorsAvailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NoConnectorsAvailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NoConnectorsAvailableException(body, context);
  const exception = new NoConnectorsAvailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationNotPermittedExceptionRes
 */
const de_OperationNotPermittedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotPermittedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotPermittedException(body, context);
  const exception = new OperationNotPermittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReplicationJobAlreadyExistsExceptionRes
 */
const de_ReplicationJobAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationJobAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicationJobAlreadyExistsException(body, context);
  const exception = new ReplicationJobAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReplicationJobNotFoundExceptionRes
 */
const de_ReplicationJobNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationJobNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicationJobNotFoundException(body, context);
  const exception = new ReplicationJobNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ReplicationRunLimitExceededExceptionRes
 */
const de_ReplicationRunLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ReplicationRunLimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ReplicationRunLimitExceededException(body, context);
  const exception = new ReplicationRunLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServerCannotBeReplicatedExceptionRes
 */
const de_ServerCannotBeReplicatedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerCannotBeReplicatedException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServerCannotBeReplicatedException(body, context);
  const exception = new ServerCannotBeReplicatedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TemporarilyUnavailableExceptionRes
 */
const de_TemporarilyUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TemporarilyUnavailableException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TemporarilyUnavailableException(body, context);
  const exception = new TemporarilyUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnauthorizedOperationExceptionRes
 */
const de_UnauthorizedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_UnauthorizedOperationException(body, context);
  const exception = new UnauthorizedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AppIds
 */
const se_AppIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AppValidationConfiguration
 */
const se_AppValidationConfiguration = (input: AppValidationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.appValidationStrategy != null && { appValidationStrategy: input.appValidationStrategy }),
    ...(input.name != null && { name: input.name }),
    ...(input.ssmValidationParameters != null && {
      ssmValidationParameters: se_SSMValidationParameters(input.ssmValidationParameters, context),
    }),
    ...(input.validationId != null && { validationId: input.validationId }),
  };
};

/**
 * serializeAws_json1_1AppValidationConfigurations
 */
const se_AppValidationConfigurations = (input: AppValidationConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AppValidationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateAppRequest
 */
const se_CreateAppRequest = (input: CreateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleName != null && { roleName: input.roleName }),
    ...(input.serverGroups != null && { serverGroups: se_ServerGroups(input.serverGroups, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateReplicationJobRequest
 */
const se_CreateReplicationJobRequest = (input: CreateReplicationJobRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1DeleteAppLaunchConfigurationRequest
 */
const se_DeleteAppLaunchConfigurationRequest = (
  input: DeleteAppLaunchConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1DeleteAppReplicationConfigurationRequest
 */
const se_DeleteAppReplicationConfigurationRequest = (
  input: DeleteAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1DeleteAppRequest
 */
const se_DeleteAppRequest = (input: DeleteAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.forceStopAppReplication != null && { forceStopAppReplication: input.forceStopAppReplication }),
    ...(input.forceTerminateApp != null && { forceTerminateApp: input.forceTerminateApp }),
  };
};

/**
 * serializeAws_json1_1DeleteAppValidationConfigurationRequest
 */
const se_DeleteAppValidationConfigurationRequest = (
  input: DeleteAppValidationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1DeleteReplicationJobRequest
 */
const se_DeleteReplicationJobRequest = (input: DeleteReplicationJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
  };
};

/**
 * serializeAws_json1_1DeleteServerCatalogRequest
 */
const se_DeleteServerCatalogRequest = (input: DeleteServerCatalogRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1DisassociateConnectorRequest
 */
const se_DisassociateConnectorRequest = (input: DisassociateConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.connectorId != null && { connectorId: input.connectorId }),
  };
};

/**
 * serializeAws_json1_1GenerateChangeSetRequest
 */
const se_GenerateChangeSetRequest = (input: GenerateChangeSetRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.changesetFormat != null && { changesetFormat: input.changesetFormat }),
  };
};

/**
 * serializeAws_json1_1GenerateTemplateRequest
 */
const se_GenerateTemplateRequest = (input: GenerateTemplateRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.templateFormat != null && { templateFormat: input.templateFormat }),
  };
};

/**
 * serializeAws_json1_1GetAppLaunchConfigurationRequest
 */
const se_GetAppLaunchConfigurationRequest = (input: GetAppLaunchConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1GetAppReplicationConfigurationRequest
 */
const se_GetAppReplicationConfigurationRequest = (
  input: GetAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1GetAppRequest
 */
const se_GetAppRequest = (input: GetAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1GetAppValidationConfigurationRequest
 */
const se_GetAppValidationConfigurationRequest = (
  input: GetAppValidationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1GetAppValidationOutputRequest
 */
const se_GetAppValidationOutputRequest = (input: GetAppValidationOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1GetConnectorsRequest
 */
const se_GetConnectorsRequest = (input: GetConnectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetReplicationJobsRequest
 */
const se_GetReplicationJobsRequest = (input: GetReplicationJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
  };
};

/**
 * serializeAws_json1_1GetReplicationRunsRequest
 */
const se_GetReplicationRunsRequest = (input: GetReplicationRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
  };
};

/**
 * serializeAws_json1_1GetServersRequest
 */
const se_GetServersRequest = (input: GetServersRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.vmServerAddressList != null && {
      vmServerAddressList: se_VmServerAddressList(input.vmServerAddressList, context),
    }),
  };
};

/**
 * serializeAws_json1_1ImportAppCatalogRequest
 */
const se_ImportAppCatalogRequest = (input: ImportAppCatalogRequest, context: __SerdeContext): any => {
  return {
    ...(input.roleName != null && { roleName: input.roleName }),
  };
};

/**
 * serializeAws_json1_1ImportServerCatalogRequest
 */
const se_ImportServerCatalogRequest = (input: ImportServerCatalogRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1LaunchAppRequest
 */
const se_LaunchAppRequest = (input: LaunchAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1ListAppsRequest
 */
const se_ListAppsRequest = (input: ListAppsRequest, context: __SerdeContext): any => {
  return {
    ...(input.appIds != null && { appIds: se_AppIds(input.appIds, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1NotificationContext
 */
const se_NotificationContext = (input: NotificationContext, context: __SerdeContext): any => {
  return {
    ...(input.status != null && { status: input.status }),
    ...(input.statusMessage != null && { statusMessage: input.statusMessage }),
    ...(input.validationId != null && { validationId: input.validationId }),
  };
};

/**
 * serializeAws_json1_1NotifyAppValidationOutputRequest
 */
const se_NotifyAppValidationOutputRequest = (input: NotifyAppValidationOutputRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.notificationContext != null && {
      notificationContext: se_NotificationContext(input.notificationContext, context),
    }),
  };
};

/**
 * serializeAws_json1_1PutAppLaunchConfigurationRequest
 */
const se_PutAppLaunchConfigurationRequest = (input: PutAppLaunchConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.autoLaunch != null && { autoLaunch: input.autoLaunch }),
    ...(input.roleName != null && { roleName: input.roleName }),
    ...(input.serverGroupLaunchConfigurations != null && {
      serverGroupLaunchConfigurations: se_ServerGroupLaunchConfigurations(
        input.serverGroupLaunchConfigurations,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1PutAppReplicationConfigurationRequest
 */
const se_PutAppReplicationConfigurationRequest = (
  input: PutAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.serverGroupReplicationConfigurations != null && {
      serverGroupReplicationConfigurations: se_ServerGroupReplicationConfigurations(
        input.serverGroupReplicationConfigurations,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1PutAppValidationConfigurationRequest
 */
const se_PutAppValidationConfigurationRequest = (
  input: PutAppValidationConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.appValidationConfigurations != null && {
      appValidationConfigurations: se_AppValidationConfigurations(input.appValidationConfigurations, context),
    }),
    ...(input.serverGroupValidationConfigurations != null && {
      serverGroupValidationConfigurations: se_ServerGroupValidationConfigurations(
        input.serverGroupValidationConfigurations,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1S3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.key != null && { key: input.key }),
  };
};

/**
 * serializeAws_json1_1Server
 */
const se_Server = (input: Server, context: __SerdeContext): any => {
  return {
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
    ...(input.replicationJobTerminated != null && { replicationJobTerminated: input.replicationJobTerminated }),
    ...(input.serverId != null && { serverId: input.serverId }),
    ...(input.serverType != null && { serverType: input.serverType }),
    ...(input.vmServer != null && { vmServer: se_VmServer(input.vmServer, context) }),
  };
};

/**
 * serializeAws_json1_1ServerGroup
 */
const se_ServerGroup = (input: ServerGroup, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.serverGroupId != null && { serverGroupId: input.serverGroupId }),
    ...(input.serverList != null && { serverList: se_ServerList(input.serverList, context) }),
  };
};

/**
 * serializeAws_json1_1ServerGroupLaunchConfiguration
 */
const se_ServerGroupLaunchConfiguration = (input: ServerGroupLaunchConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.launchOrder != null && { launchOrder: input.launchOrder }),
    ...(input.serverGroupId != null && { serverGroupId: input.serverGroupId }),
    ...(input.serverLaunchConfigurations != null && {
      serverLaunchConfigurations: se_ServerLaunchConfigurations(input.serverLaunchConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1ServerGroupLaunchConfigurations
 */
const se_ServerGroupLaunchConfigurations = (input: ServerGroupLaunchConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerGroupLaunchConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1ServerGroupReplicationConfiguration
 */
const se_ServerGroupReplicationConfiguration = (
  input: ServerGroupReplicationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.serverGroupId != null && { serverGroupId: input.serverGroupId }),
    ...(input.serverReplicationConfigurations != null && {
      serverReplicationConfigurations: se_ServerReplicationConfigurations(
        input.serverReplicationConfigurations,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1ServerGroupReplicationConfigurations
 */
const se_ServerGroupReplicationConfigurations = (
  input: ServerGroupReplicationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerGroupReplicationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1ServerGroups
 */
const se_ServerGroups = (input: ServerGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerGroup(entry, context);
    });
};

/**
 * serializeAws_json1_1ServerGroupValidationConfiguration
 */
const se_ServerGroupValidationConfiguration = (
  input: ServerGroupValidationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.serverGroupId != null && { serverGroupId: input.serverGroupId }),
    ...(input.serverValidationConfigurations != null && {
      serverValidationConfigurations: se_ServerValidationConfigurations(input.serverValidationConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1ServerGroupValidationConfigurations
 */
const se_ServerGroupValidationConfigurations = (
  input: ServerGroupValidationConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerGroupValidationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1ServerLaunchConfiguration
 */
const se_ServerLaunchConfiguration = (input: ServerLaunchConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.associatePublicIpAddress != null && { associatePublicIpAddress: input.associatePublicIpAddress }),
    ...(input.configureScript != null && { configureScript: se_S3Location(input.configureScript, context) }),
    ...(input.configureScriptType != null && { configureScriptType: input.configureScriptType }),
    ...(input.ec2KeyName != null && { ec2KeyName: input.ec2KeyName }),
    ...(input.iamInstanceProfileName != null && { iamInstanceProfileName: input.iamInstanceProfileName }),
    ...(input.instanceType != null && { instanceType: input.instanceType }),
    ...(input.logicalId != null && { logicalId: input.logicalId }),
    ...(input.securityGroup != null && { securityGroup: input.securityGroup }),
    ...(input.server != null && { server: se_Server(input.server, context) }),
    ...(input.subnet != null && { subnet: input.subnet }),
    ...(input.userData != null && { userData: se_UserData(input.userData, context) }),
    ...(input.vpc != null && { vpc: input.vpc }),
  };
};

/**
 * serializeAws_json1_1ServerLaunchConfigurations
 */
const se_ServerLaunchConfigurations = (input: ServerLaunchConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerLaunchConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1ServerList
 */
const se_ServerList = (input: Server[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Server(entry, context);
    });
};

/**
 * serializeAws_json1_1ServerReplicationConfiguration
 */
const se_ServerReplicationConfiguration = (input: ServerReplicationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.server != null && { server: se_Server(input.server, context) }),
    ...(input.serverReplicationParameters != null && {
      serverReplicationParameters: se_ServerReplicationParameters(input.serverReplicationParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1ServerReplicationConfigurations
 */
const se_ServerReplicationConfigurations = (input: ServerReplicationConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerReplicationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1ServerReplicationParameters
 */
const se_ServerReplicationParameters = (input: ServerReplicationParameters, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1ServerValidationConfiguration
 */
const se_ServerValidationConfiguration = (input: ServerValidationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.server != null && { server: se_Server(input.server, context) }),
    ...(input.serverValidationStrategy != null && { serverValidationStrategy: input.serverValidationStrategy }),
    ...(input.userDataValidationParameters != null && {
      userDataValidationParameters: se_UserDataValidationParameters(input.userDataValidationParameters, context),
    }),
    ...(input.validationId != null && { validationId: input.validationId }),
  };
};

/**
 * serializeAws_json1_1ServerValidationConfigurations
 */
const se_ServerValidationConfigurations = (input: ServerValidationConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServerValidationConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1Source
 */
const se_Source = (input: Source, context: __SerdeContext): any => {
  return {
    ...(input.s3Location != null && { s3Location: se_S3Location(input.s3Location, context) }),
  };
};

/**
 * serializeAws_json1_1SSMValidationParameters
 */
const se_SSMValidationParameters = (input: SSMValidationParameters, context: __SerdeContext): any => {
  return {
    ...(input.command != null && { command: input.command }),
    ...(input.executionTimeoutSeconds != null && { executionTimeoutSeconds: input.executionTimeoutSeconds }),
    ...(input.instanceId != null && { instanceId: input.instanceId }),
    ...(input.outputS3BucketName != null && { outputS3BucketName: input.outputS3BucketName }),
    ...(input.scriptType != null && { scriptType: input.scriptType }),
    ...(input.source != null && { source: se_Source(input.source, context) }),
  };
};

/**
 * serializeAws_json1_1StartAppReplicationRequest
 */
const se_StartAppReplicationRequest = (input: StartAppReplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1StartOnDemandAppReplicationRequest
 */
const se_StartOnDemandAppReplicationRequest = (
  input: StartOnDemandAppReplicationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.description != null && { description: input.description }),
  };
};

/**
 * serializeAws_json1_1StartOnDemandReplicationRunRequest
 */
const se_StartOnDemandReplicationRunRequest = (
  input: StartOnDemandReplicationRunRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.replicationJobId != null && { replicationJobId: input.replicationJobId }),
  };
};

/**
 * serializeAws_json1_1StopAppReplicationRequest
 */
const se_StopAppReplicationRequest = (input: StopAppReplicationRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TerminateAppRequest
 */
const se_TerminateAppRequest = (input: TerminateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
  };
};

/**
 * serializeAws_json1_1UpdateAppRequest
 */
const se_UpdateAppRequest = (input: UpdateAppRequest, context: __SerdeContext): any => {
  return {
    ...(input.appId != null && { appId: input.appId }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.roleName != null && { roleName: input.roleName }),
    ...(input.serverGroups != null && { serverGroups: se_ServerGroups(input.serverGroups, context) }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateReplicationJobRequest
 */
const se_UpdateReplicationJobRequest = (input: UpdateReplicationJobRequest, context: __SerdeContext): any => {
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

/**
 * serializeAws_json1_1UserData
 */
const se_UserData = (input: UserData, context: __SerdeContext): any => {
  return {
    ...(input.s3Location != null && { s3Location: se_S3Location(input.s3Location, context) }),
  };
};

/**
 * serializeAws_json1_1UserDataValidationParameters
 */
const se_UserDataValidationParameters = (input: UserDataValidationParameters, context: __SerdeContext): any => {
  return {
    ...(input.scriptType != null && { scriptType: input.scriptType }),
    ...(input.source != null && { source: se_Source(input.source, context) }),
  };
};

/**
 * serializeAws_json1_1VmServer
 */
const se_VmServer = (input: VmServer, context: __SerdeContext): any => {
  return {
    ...(input.vmManagerName != null && { vmManagerName: input.vmManagerName }),
    ...(input.vmManagerType != null && { vmManagerType: input.vmManagerType }),
    ...(input.vmName != null && { vmName: input.vmName }),
    ...(input.vmPath != null && { vmPath: input.vmPath }),
    ...(input.vmServerAddress != null && { vmServerAddress: se_VmServerAddress(input.vmServerAddress, context) }),
  };
};

/**
 * serializeAws_json1_1VmServerAddress
 */
const se_VmServerAddress = (input: VmServerAddress, context: __SerdeContext): any => {
  return {
    ...(input.vmId != null && { vmId: input.vmId }),
    ...(input.vmManagerId != null && { vmManagerId: input.vmManagerId }),
  };
};

/**
 * serializeAws_json1_1VmServerAddressList
 */
const se_VmServerAddressList = (input: VmServerAddress[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VmServerAddress(entry, context);
    });
};

/**
 * deserializeAws_json1_1Apps
 */
const de_Apps = (output: any, context: __SerdeContext): AppSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppSummary
 */
const de_AppSummary = (output: any, context: __SerdeContext): AppSummary => {
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
    launchDetails: output.launchDetails != null ? de_LaunchDetails(output.launchDetails, context) : undefined,
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

/**
 * deserializeAws_json1_1AppValidationConfiguration
 */
const de_AppValidationConfiguration = (output: any, context: __SerdeContext): AppValidationConfiguration => {
  return {
    appValidationStrategy: __expectString(output.appValidationStrategy),
    name: __expectString(output.name),
    ssmValidationParameters:
      output.ssmValidationParameters != null
        ? de_SSMValidationParameters(output.ssmValidationParameters, context)
        : undefined,
    validationId: __expectString(output.validationId),
  } as any;
};

/**
 * deserializeAws_json1_1AppValidationConfigurations
 */
const de_AppValidationConfigurations = (output: any, context: __SerdeContext): AppValidationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AppValidationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppValidationOutput
 */
const de_AppValidationOutput = (output: any, context: __SerdeContext): AppValidationOutput => {
  return {
    ssmOutput: output.ssmOutput != null ? de_SSMOutput(output.ssmOutput, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Connector
 */
const de_Connector = (output: any, context: __SerdeContext): Connector => {
  return {
    associatedOn:
      output.associatedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.associatedOn)))
        : undefined,
    capabilityList:
      output.capabilityList != null ? de_ConnectorCapabilityList(output.capabilityList, context) : undefined,
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

/**
 * deserializeAws_json1_1ConnectorCapabilityList
 */
const de_ConnectorCapabilityList = (output: any, context: __SerdeContext): (ConnectorCapability | string)[] => {
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
 * deserializeAws_json1_1ConnectorList
 */
const de_ConnectorList = (output: any, context: __SerdeContext): Connector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Connector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAppResponse
 */
const de_CreateAppResponse = (output: any, context: __SerdeContext): CreateAppResponse => {
  return {
    appSummary: output.appSummary != null ? de_AppSummary(output.appSummary, context) : undefined,
    serverGroups: output.serverGroups != null ? de_ServerGroups(output.serverGroups, context) : undefined,
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateReplicationJobResponse
 */
const de_CreateReplicationJobResponse = (output: any, context: __SerdeContext): CreateReplicationJobResponse => {
  return {
    replicationJobId: __expectString(output.replicationJobId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteAppLaunchConfigurationResponse
 */
const de_DeleteAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppLaunchConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteAppReplicationConfigurationResponse
 */
const de_DeleteAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppReplicationConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteAppResponse
 */
const de_DeleteAppResponse = (output: any, context: __SerdeContext): DeleteAppResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteAppValidationConfigurationResponse
 */
const de_DeleteAppValidationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAppValidationConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteReplicationJobResponse
 */
const de_DeleteReplicationJobResponse = (output: any, context: __SerdeContext): DeleteReplicationJobResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteServerCatalogResponse
 */
const de_DeleteServerCatalogResponse = (output: any, context: __SerdeContext): DeleteServerCatalogResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DisassociateConnectorResponse
 */
const de_DisassociateConnectorResponse = (output: any, context: __SerdeContext): DisassociateConnectorResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DryRunOperationException
 */
const de_DryRunOperationException = (output: any, context: __SerdeContext): DryRunOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1GenerateChangeSetResponse
 */
const de_GenerateChangeSetResponse = (output: any, context: __SerdeContext): GenerateChangeSetResponse => {
  return {
    s3Location: output.s3Location != null ? de_S3Location(output.s3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GenerateTemplateResponse
 */
const de_GenerateTemplateResponse = (output: any, context: __SerdeContext): GenerateTemplateResponse => {
  return {
    s3Location: output.s3Location != null ? de_S3Location(output.s3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetAppLaunchConfigurationResponse
 */
const de_GetAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppLaunchConfigurationResponse => {
  return {
    appId: __expectString(output.appId),
    autoLaunch: __expectBoolean(output.autoLaunch),
    roleName: __expectString(output.roleName),
    serverGroupLaunchConfigurations:
      output.serverGroupLaunchConfigurations != null
        ? de_ServerGroupLaunchConfigurations(output.serverGroupLaunchConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetAppReplicationConfigurationResponse
 */
const de_GetAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppReplicationConfigurationResponse => {
  return {
    serverGroupReplicationConfigurations:
      output.serverGroupReplicationConfigurations != null
        ? de_ServerGroupReplicationConfigurations(output.serverGroupReplicationConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetAppResponse
 */
const de_GetAppResponse = (output: any, context: __SerdeContext): GetAppResponse => {
  return {
    appSummary: output.appSummary != null ? de_AppSummary(output.appSummary, context) : undefined,
    serverGroups: output.serverGroups != null ? de_ServerGroups(output.serverGroups, context) : undefined,
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetAppValidationConfigurationResponse
 */
const de_GetAppValidationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppValidationConfigurationResponse => {
  return {
    appValidationConfigurations:
      output.appValidationConfigurations != null
        ? de_AppValidationConfigurations(output.appValidationConfigurations, context)
        : undefined,
    serverGroupValidationConfigurations:
      output.serverGroupValidationConfigurations != null
        ? de_ServerGroupValidationConfigurations(output.serverGroupValidationConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetAppValidationOutputResponse
 */
const de_GetAppValidationOutputResponse = (output: any, context: __SerdeContext): GetAppValidationOutputResponse => {
  return {
    validationOutputList:
      output.validationOutputList != null ? de_ValidationOutputList(output.validationOutputList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetConnectorsResponse
 */
const de_GetConnectorsResponse = (output: any, context: __SerdeContext): GetConnectorsResponse => {
  return {
    connectorList: output.connectorList != null ? de_ConnectorList(output.connectorList, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetReplicationJobsResponse
 */
const de_GetReplicationJobsResponse = (output: any, context: __SerdeContext): GetReplicationJobsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    replicationJobList:
      output.replicationJobList != null ? de_ReplicationJobList(output.replicationJobList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetReplicationRunsResponse
 */
const de_GetReplicationRunsResponse = (output: any, context: __SerdeContext): GetReplicationRunsResponse => {
  return {
    nextToken: __expectString(output.nextToken),
    replicationJob: output.replicationJob != null ? de_ReplicationJob(output.replicationJob, context) : undefined,
    replicationRunList:
      output.replicationRunList != null ? de_ReplicationRunList(output.replicationRunList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetServersResponse
 */
const de_GetServersResponse = (output: any, context: __SerdeContext): GetServersResponse => {
  return {
    lastModifiedOn:
      output.lastModifiedOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedOn)))
        : undefined,
    nextToken: __expectString(output.nextToken),
    serverCatalogStatus: __expectString(output.serverCatalogStatus),
    serverList: output.serverList != null ? de_ServerList(output.serverList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ImportAppCatalogResponse
 */
const de_ImportAppCatalogResponse = (output: any, context: __SerdeContext): ImportAppCatalogResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ImportServerCatalogResponse
 */
const de_ImportServerCatalogResponse = (output: any, context: __SerdeContext): ImportServerCatalogResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1InternalError
 */
const de_InternalError = (output: any, context: __SerdeContext): InternalError => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidParameterException
 */
const de_InvalidParameterException = (output: any, context: __SerdeContext): InvalidParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1LaunchAppResponse
 */
const de_LaunchAppResponse = (output: any, context: __SerdeContext): LaunchAppResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1LaunchDetails
 */
const de_LaunchDetails = (output: any, context: __SerdeContext): LaunchDetails => {
  return {
    latestLaunchTime:
      output.latestLaunchTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.latestLaunchTime)))
        : undefined,
    stackId: __expectString(output.stackId),
    stackName: __expectString(output.stackName),
  } as any;
};

/**
 * deserializeAws_json1_1ListAppsResponse
 */
const de_ListAppsResponse = (output: any, context: __SerdeContext): ListAppsResponse => {
  return {
    apps: output.apps != null ? de_Apps(output.apps, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1MissingRequiredParameterException
 */
const de_MissingRequiredParameterException = (
  output: any,
  context: __SerdeContext
): MissingRequiredParameterException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NoConnectorsAvailableException
 */
const de_NoConnectorsAvailableException = (output: any, context: __SerdeContext): NoConnectorsAvailableException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NotifyAppValidationOutputResponse
 */
const de_NotifyAppValidationOutputResponse = (
  output: any,
  context: __SerdeContext
): NotifyAppValidationOutputResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1OperationNotPermittedException
 */
const de_OperationNotPermittedException = (output: any, context: __SerdeContext): OperationNotPermittedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1PutAppLaunchConfigurationResponse
 */
const de_PutAppLaunchConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutAppLaunchConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutAppReplicationConfigurationResponse
 */
const de_PutAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutAppReplicationConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1PutAppValidationConfigurationResponse
 */
const de_PutAppValidationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): PutAppValidationConfigurationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1ReplicationJob
 */
const de_ReplicationJob = (output: any, context: __SerdeContext): ReplicationJob => {
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
      output.replicationRunList != null ? de_ReplicationRunList(output.replicationRunList, context) : undefined,
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
    vmServer: output.vmServer != null ? de_VmServer(output.vmServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationJobAlreadyExistsException
 */
const de_ReplicationJobAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ReplicationJobAlreadyExistsException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationJobList
 */
const de_ReplicationJobList = (output: any, context: __SerdeContext): ReplicationJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationJobNotFoundException
 */
const de_ReplicationJobNotFoundException = (output: any, context: __SerdeContext): ReplicationJobNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationRun
 */
const de_ReplicationRun = (output: any, context: __SerdeContext): ReplicationRun => {
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
    stageDetails: output.stageDetails != null ? de_ReplicationRunStageDetails(output.stageDetails, context) : undefined,
    state: __expectString(output.state),
    statusMessage: __expectString(output.statusMessage),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationRunLimitExceededException
 */
const de_ReplicationRunLimitExceededException = (
  output: any,
  context: __SerdeContext
): ReplicationRunLimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ReplicationRunList
 */
const de_ReplicationRunList = (output: any, context: __SerdeContext): ReplicationRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReplicationRun(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ReplicationRunStageDetails
 */
const de_ReplicationRunStageDetails = (output: any, context: __SerdeContext): ReplicationRunStageDetails => {
  return {
    stage: __expectString(output.stage),
    stageProgress: __expectString(output.stageProgress),
  } as any;
};

/**
 * deserializeAws_json1_1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    bucket: __expectString(output.bucket),
    key: __expectString(output.key),
  } as any;
};

/**
 * deserializeAws_json1_1Server
 */
const de_Server = (output: any, context: __SerdeContext): Server => {
  return {
    replicationJobId: __expectString(output.replicationJobId),
    replicationJobTerminated: __expectBoolean(output.replicationJobTerminated),
    serverId: __expectString(output.serverId),
    serverType: __expectString(output.serverType),
    vmServer: output.vmServer != null ? de_VmServer(output.vmServer, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServerCannotBeReplicatedException
 */
const de_ServerCannotBeReplicatedException = (
  output: any,
  context: __SerdeContext
): ServerCannotBeReplicatedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ServerGroup
 */
const de_ServerGroup = (output: any, context: __SerdeContext): ServerGroup => {
  return {
    name: __expectString(output.name),
    serverGroupId: __expectString(output.serverGroupId),
    serverList: output.serverList != null ? de_ServerList(output.serverList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServerGroupLaunchConfiguration
 */
const de_ServerGroupLaunchConfiguration = (output: any, context: __SerdeContext): ServerGroupLaunchConfiguration => {
  return {
    launchOrder: __expectInt32(output.launchOrder),
    serverGroupId: __expectString(output.serverGroupId),
    serverLaunchConfigurations:
      output.serverLaunchConfigurations != null
        ? de_ServerLaunchConfigurations(output.serverLaunchConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServerGroupLaunchConfigurations
 */
const de_ServerGroupLaunchConfigurations = (output: any, context: __SerdeContext): ServerGroupLaunchConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerGroupLaunchConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerGroupReplicationConfiguration
 */
const de_ServerGroupReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerGroupReplicationConfiguration => {
  return {
    serverGroupId: __expectString(output.serverGroupId),
    serverReplicationConfigurations:
      output.serverReplicationConfigurations != null
        ? de_ServerReplicationConfigurations(output.serverReplicationConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServerGroupReplicationConfigurations
 */
const de_ServerGroupReplicationConfigurations = (
  output: any,
  context: __SerdeContext
): ServerGroupReplicationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerGroupReplicationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerGroups
 */
const de_ServerGroups = (output: any, context: __SerdeContext): ServerGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerGroupValidationConfiguration
 */
const de_ServerGroupValidationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerGroupValidationConfiguration => {
  return {
    serverGroupId: __expectString(output.serverGroupId),
    serverValidationConfigurations:
      output.serverValidationConfigurations != null
        ? de_ServerValidationConfigurations(output.serverValidationConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServerGroupValidationConfigurations
 */
const de_ServerGroupValidationConfigurations = (
  output: any,
  context: __SerdeContext
): ServerGroupValidationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerGroupValidationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerLaunchConfiguration
 */
const de_ServerLaunchConfiguration = (output: any, context: __SerdeContext): ServerLaunchConfiguration => {
  return {
    associatePublicIpAddress: __expectBoolean(output.associatePublicIpAddress),
    configureScript: output.configureScript != null ? de_S3Location(output.configureScript, context) : undefined,
    configureScriptType: __expectString(output.configureScriptType),
    ec2KeyName: __expectString(output.ec2KeyName),
    iamInstanceProfileName: __expectString(output.iamInstanceProfileName),
    instanceType: __expectString(output.instanceType),
    logicalId: __expectString(output.logicalId),
    securityGroup: __expectString(output.securityGroup),
    server: output.server != null ? de_Server(output.server, context) : undefined,
    subnet: __expectString(output.subnet),
    userData: output.userData != null ? de_UserData(output.userData, context) : undefined,
    vpc: __expectString(output.vpc),
  } as any;
};

/**
 * deserializeAws_json1_1ServerLaunchConfigurations
 */
const de_ServerLaunchConfigurations = (output: any, context: __SerdeContext): ServerLaunchConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerLaunchConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerList
 */
const de_ServerList = (output: any, context: __SerdeContext): Server[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Server(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerReplicationConfiguration
 */
const de_ServerReplicationConfiguration = (output: any, context: __SerdeContext): ServerReplicationConfiguration => {
  return {
    server: output.server != null ? de_Server(output.server, context) : undefined,
    serverReplicationParameters:
      output.serverReplicationParameters != null
        ? de_ServerReplicationParameters(output.serverReplicationParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ServerReplicationConfigurations
 */
const de_ServerReplicationConfigurations = (output: any, context: __SerdeContext): ServerReplicationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerReplicationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerReplicationParameters
 */
const de_ServerReplicationParameters = (output: any, context: __SerdeContext): ServerReplicationParameters => {
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

/**
 * deserializeAws_json1_1ServerValidationConfiguration
 */
const de_ServerValidationConfiguration = (output: any, context: __SerdeContext): ServerValidationConfiguration => {
  return {
    name: __expectString(output.name),
    server: output.server != null ? de_Server(output.server, context) : undefined,
    serverValidationStrategy: __expectString(output.serverValidationStrategy),
    userDataValidationParameters:
      output.userDataValidationParameters != null
        ? de_UserDataValidationParameters(output.userDataValidationParameters, context)
        : undefined,
    validationId: __expectString(output.validationId),
  } as any;
};

/**
 * deserializeAws_json1_1ServerValidationConfigurations
 */
const de_ServerValidationConfigurations = (output: any, context: __SerdeContext): ServerValidationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServerValidationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerValidationOutput
 */
const de_ServerValidationOutput = (output: any, context: __SerdeContext): ServerValidationOutput => {
  return {
    server: output.server != null ? de_Server(output.server, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Source
 */
const de_Source = (output: any, context: __SerdeContext): Source => {
  return {
    s3Location: output.s3Location != null ? de_S3Location(output.s3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SSMOutput
 */
const de_SSMOutput = (output: any, context: __SerdeContext): SSMOutput => {
  return {
    s3Location: output.s3Location != null ? de_S3Location(output.s3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SSMValidationParameters
 */
const de_SSMValidationParameters = (output: any, context: __SerdeContext): SSMValidationParameters => {
  return {
    command: __expectString(output.command),
    executionTimeoutSeconds: __expectInt32(output.executionTimeoutSeconds),
    instanceId: __expectString(output.instanceId),
    outputS3BucketName: __expectString(output.outputS3BucketName),
    scriptType: __expectString(output.scriptType),
    source: output.source != null ? de_Source(output.source, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StartAppReplicationResponse
 */
const de_StartAppReplicationResponse = (output: any, context: __SerdeContext): StartAppReplicationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StartOnDemandAppReplicationResponse
 */
const de_StartOnDemandAppReplicationResponse = (
  output: any,
  context: __SerdeContext
): StartOnDemandAppReplicationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1StartOnDemandReplicationRunResponse
 */
const de_StartOnDemandReplicationRunResponse = (
  output: any,
  context: __SerdeContext
): StartOnDemandReplicationRunResponse => {
  return {
    replicationRunId: __expectString(output.replicationRunId),
  } as any;
};

/**
 * deserializeAws_json1_1StopAppReplicationResponse
 */
const de_StopAppReplicationResponse = (output: any, context: __SerdeContext): StopAppReplicationResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TemporarilyUnavailableException
 */
const de_TemporarilyUnavailableException = (output: any, context: __SerdeContext): TemporarilyUnavailableException => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TerminateAppResponse
 */
const de_TerminateAppResponse = (output: any, context: __SerdeContext): TerminateAppResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UnauthorizedOperationException
 */
const de_UnauthorizedOperationException = (output: any, context: __SerdeContext): UnauthorizedOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateAppResponse
 */
const de_UpdateAppResponse = (output: any, context: __SerdeContext): UpdateAppResponse => {
  return {
    appSummary: output.appSummary != null ? de_AppSummary(output.appSummary, context) : undefined,
    serverGroups: output.serverGroups != null ? de_ServerGroups(output.serverGroups, context) : undefined,
    tags: output.tags != null ? de_Tags(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateReplicationJobResponse
 */
const de_UpdateReplicationJobResponse = (output: any, context: __SerdeContext): UpdateReplicationJobResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UserData
 */
const de_UserData = (output: any, context: __SerdeContext): UserData => {
  return {
    s3Location: output.s3Location != null ? de_S3Location(output.s3Location, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UserDataValidationParameters
 */
const de_UserDataValidationParameters = (output: any, context: __SerdeContext): UserDataValidationParameters => {
  return {
    scriptType: __expectString(output.scriptType),
    source: output.source != null ? de_Source(output.source, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ValidationOutput
 */
const de_ValidationOutput = (output: any, context: __SerdeContext): ValidationOutput => {
  return {
    appValidationOutput:
      output.appValidationOutput != null ? de_AppValidationOutput(output.appValidationOutput, context) : undefined,
    latestValidationTime:
      output.latestValidationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.latestValidationTime)))
        : undefined,
    name: __expectString(output.name),
    serverValidationOutput:
      output.serverValidationOutput != null
        ? de_ServerValidationOutput(output.serverValidationOutput, context)
        : undefined,
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    validationId: __expectString(output.validationId),
  } as any;
};

/**
 * deserializeAws_json1_1ValidationOutputList
 */
const de_ValidationOutputList = (output: any, context: __SerdeContext): ValidationOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VmServer
 */
const de_VmServer = (output: any, context: __SerdeContext): VmServer => {
  return {
    vmManagerName: __expectString(output.vmManagerName),
    vmManagerType: __expectString(output.vmManagerType),
    vmName: __expectString(output.vmName),
    vmPath: __expectString(output.vmPath),
    vmServerAddress: output.vmServerAddress != null ? de_VmServerAddress(output.vmServerAddress, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1VmServerAddress
 */
const de_VmServerAddress = (output: any, context: __SerdeContext): VmServerAddress => {
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
