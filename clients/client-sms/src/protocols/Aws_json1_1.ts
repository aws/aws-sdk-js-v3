// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  Connector,
  CreateAppRequest,
  CreateAppResponse,
  CreateReplicationJobRequest,
  DeleteAppLaunchConfigurationRequest,
  DeleteAppReplicationConfigurationRequest,
  DeleteAppRequest,
  DeleteAppValidationConfigurationRequest,
  DeleteReplicationJobRequest,
  DeleteServerCatalogRequest,
  DisassociateConnectorRequest,
  DryRunOperationException,
  GenerateChangeSetRequest,
  GenerateTemplateRequest,
  GetAppLaunchConfigurationRequest,
  GetAppReplicationConfigurationRequest,
  GetAppReplicationConfigurationResponse,
  GetAppRequest,
  GetAppResponse,
  GetAppValidationConfigurationRequest,
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
  ImportServerCatalogRequest,
  InternalError,
  InvalidParameterException,
  LaunchAppRequest,
  LaunchDetails,
  ListAppsRequest,
  ListAppsResponse,
  MissingRequiredParameterException,
  NoConnectorsAvailableException,
  NotificationContext,
  NotifyAppValidationOutputRequest,
  OperationNotPermittedException,
  PutAppLaunchConfigurationRequest,
  PutAppReplicationConfigurationRequest,
  PutAppValidationConfigurationRequest,
  ReplicationJob,
  ReplicationJobAlreadyExistsException,
  ReplicationJobNotFoundException,
  ReplicationRun,
  ReplicationRunLimitExceededException,
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
  Source,
  SSMValidationParameters,
  StartAppReplicationRequest,
  StartOnDemandAppReplicationRequest,
  StartOnDemandReplicationRunRequest,
  StopAppReplicationRequest,
  Tag,
  TemporarilyUnavailableException,
  TerminateAppRequest,
  UnauthorizedOperationException,
  UpdateAppRequest,
  UpdateAppResponse,
  UpdateReplicationJobRequest,
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
  const headers: __HeaderBag = sharedHeaders("CreateApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateReplicationJobCommand
 */
export const se_CreateReplicationJobCommand = async (
  input: CreateReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateReplicationJob");
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
  const headers: __HeaderBag = sharedHeaders("DeleteApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppLaunchConfigurationCommand
 */
export const se_DeleteAppLaunchConfigurationCommand = async (
  input: DeleteAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAppLaunchConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppReplicationConfigurationCommand
 */
export const se_DeleteAppReplicationConfigurationCommand = async (
  input: DeleteAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAppReplicationConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteAppValidationConfigurationCommand
 */
export const se_DeleteAppValidationConfigurationCommand = async (
  input: DeleteAppValidationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAppValidationConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteReplicationJobCommand
 */
export const se_DeleteReplicationJobCommand = async (
  input: DeleteReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteReplicationJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServerCatalogCommand
 */
export const se_DeleteServerCatalogCommand = async (
  input: DeleteServerCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteServerCatalog");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateConnectorCommand
 */
export const se_DisassociateConnectorCommand = async (
  input: DisassociateConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateConnector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateChangeSetCommand
 */
export const se_GenerateChangeSetCommand = async (
  input: GenerateChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateChangeSet");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GenerateTemplateCommand
 */
export const se_GenerateTemplateCommand = async (
  input: GenerateTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GenerateTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppCommand
 */
export const se_GetAppCommand = async (input: GetAppCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppLaunchConfigurationCommand
 */
export const se_GetAppLaunchConfigurationCommand = async (
  input: GetAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAppLaunchConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppReplicationConfigurationCommand
 */
export const se_GetAppReplicationConfigurationCommand = async (
  input: GetAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAppReplicationConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppValidationConfigurationCommand
 */
export const se_GetAppValidationConfigurationCommand = async (
  input: GetAppValidationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAppValidationConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAppValidationOutputCommand
 */
export const se_GetAppValidationOutputCommand = async (
  input: GetAppValidationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAppValidationOutput");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetConnectorsCommand
 */
export const se_GetConnectorsCommand = async (
  input: GetConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetConnectors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReplicationJobsCommand
 */
export const se_GetReplicationJobsCommand = async (
  input: GetReplicationJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetReplicationJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetReplicationRunsCommand
 */
export const se_GetReplicationRunsCommand = async (
  input: GetReplicationRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetReplicationRuns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServersCommand
 */
export const se_GetServersCommand = async (
  input: GetServersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServers");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportAppCatalogCommand
 */
export const se_ImportAppCatalogCommand = async (
  input: ImportAppCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportAppCatalog");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ImportServerCatalogCommand
 */
export const se_ImportServerCatalogCommand = async (
  input: ImportServerCatalogCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ImportServerCatalog");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1LaunchAppCommand
 */
export const se_LaunchAppCommand = async (
  input: LaunchAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("LaunchApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListAppsCommand
 */
export const se_ListAppsCommand = async (
  input: ListAppsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListApps");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1NotifyAppValidationOutputCommand
 */
export const se_NotifyAppValidationOutputCommand = async (
  input: NotifyAppValidationOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyAppValidationOutput");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAppLaunchConfigurationCommand
 */
export const se_PutAppLaunchConfigurationCommand = async (
  input: PutAppLaunchConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAppLaunchConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PutAppReplicationConfigurationCommand
 */
export const se_PutAppReplicationConfigurationCommand = async (
  input: PutAppReplicationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PutAppReplicationConfiguration");
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
  const headers: __HeaderBag = sharedHeaders("PutAppValidationConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartAppReplicationCommand
 */
export const se_StartAppReplicationCommand = async (
  input: StartAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartAppReplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartOnDemandAppReplicationCommand
 */
export const se_StartOnDemandAppReplicationCommand = async (
  input: StartOnDemandAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartOnDemandAppReplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartOnDemandReplicationRunCommand
 */
export const se_StartOnDemandReplicationRunCommand = async (
  input: StartOnDemandReplicationRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartOnDemandReplicationRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopAppReplicationCommand
 */
export const se_StopAppReplicationCommand = async (
  input: StopAppReplicationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopAppReplication");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TerminateAppCommand
 */
export const se_TerminateAppCommand = async (
  input: TerminateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TerminateApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateAppCommand
 */
export const se_UpdateAppCommand = async (
  input: UpdateAppCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateApp");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateReplicationJobCommand
 */
export const se_UpdateReplicationJobCommand = async (
  input: UpdateReplicationJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateReplicationJob");
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteServerCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DisassociateConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GenerateChangeSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GenerateTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ImportAppCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ImportServerCatalogCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: LaunchAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: NotifyAppValidationOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutAppLaunchConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutAppReplicationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: PutAppValidationConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartOnDemandAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StartOnDemandReplicationRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: StopAppReplicationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TerminateAppCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateReplicationJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new UnauthorizedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AppIds omitted.

// se_AppValidationConfiguration omitted.

// se_AppValidationConfigurations omitted.

// se_CreateAppRequest omitted.

/**
 * serializeAws_json1_1CreateReplicationJobRequest
 */
const se_CreateReplicationJobRequest = (input: CreateReplicationJobRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    encrypted: [],
    frequency: [],
    kmsKeyId: [],
    licenseType: [],
    numberOfRecentAmisToKeep: [],
    roleName: [],
    runOnce: [],
    seedReplicationTime: (_) => Math.round(_.getTime() / 1000),
    serverId: [],
  });
};

// se_DeleteAppLaunchConfigurationRequest omitted.

// se_DeleteAppReplicationConfigurationRequest omitted.

// se_DeleteAppRequest omitted.

// se_DeleteAppValidationConfigurationRequest omitted.

// se_DeleteReplicationJobRequest omitted.

// se_DeleteServerCatalogRequest omitted.

// se_DisassociateConnectorRequest omitted.

// se_GenerateChangeSetRequest omitted.

// se_GenerateTemplateRequest omitted.

// se_GetAppLaunchConfigurationRequest omitted.

// se_GetAppReplicationConfigurationRequest omitted.

// se_GetAppRequest omitted.

// se_GetAppValidationConfigurationRequest omitted.

// se_GetAppValidationOutputRequest omitted.

// se_GetConnectorsRequest omitted.

// se_GetReplicationJobsRequest omitted.

// se_GetReplicationRunsRequest omitted.

// se_GetServersRequest omitted.

// se_ImportAppCatalogRequest omitted.

// se_ImportServerCatalogRequest omitted.

// se_LaunchAppRequest omitted.

// se_ListAppsRequest omitted.

// se_NotificationContext omitted.

// se_NotifyAppValidationOutputRequest omitted.

// se_PutAppLaunchConfigurationRequest omitted.

/**
 * serializeAws_json1_1PutAppReplicationConfigurationRequest
 */
const se_PutAppReplicationConfigurationRequest = (
  input: PutAppReplicationConfigurationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    appId: [],
    serverGroupReplicationConfigurations: (_) => se_ServerGroupReplicationConfigurations(_, context),
  });
};

// se_PutAppValidationConfigurationRequest omitted.

// se_S3Location omitted.

// se_Server omitted.

// se_ServerGroup omitted.

// se_ServerGroupLaunchConfiguration omitted.

// se_ServerGroupLaunchConfigurations omitted.

/**
 * serializeAws_json1_1ServerGroupReplicationConfiguration
 */
const se_ServerGroupReplicationConfiguration = (
  input: ServerGroupReplicationConfiguration,
  context: __SerdeContext
): any => {
  return take(input, {
    serverGroupId: [],
    serverReplicationConfigurations: (_) => se_ServerReplicationConfigurations(_, context),
  });
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

// se_ServerGroups omitted.

// se_ServerGroupValidationConfiguration omitted.

// se_ServerGroupValidationConfigurations omitted.

// se_ServerLaunchConfiguration omitted.

// se_ServerLaunchConfigurations omitted.

// se_ServerList omitted.

/**
 * serializeAws_json1_1ServerReplicationConfiguration
 */
const se_ServerReplicationConfiguration = (input: ServerReplicationConfiguration, context: __SerdeContext): any => {
  return take(input, {
    server: _json,
    serverReplicationParameters: (_) => se_ServerReplicationParameters(_, context),
  });
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
  return take(input, {
    encrypted: [],
    frequency: [],
    kmsKeyId: [],
    licenseType: [],
    numberOfRecentAmisToKeep: [],
    runOnce: [],
    seedTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ServerValidationConfiguration omitted.

// se_ServerValidationConfigurations omitted.

// se_Source omitted.

// se_SSMValidationParameters omitted.

// se_StartAppReplicationRequest omitted.

// se_StartOnDemandAppReplicationRequest omitted.

// se_StartOnDemandReplicationRunRequest omitted.

// se_StopAppReplicationRequest omitted.

// se_Tag omitted.

// se_Tags omitted.

// se_TerminateAppRequest omitted.

// se_UpdateAppRequest omitted.

/**
 * serializeAws_json1_1UpdateReplicationJobRequest
 */
const se_UpdateReplicationJobRequest = (input: UpdateReplicationJobRequest, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    encrypted: [],
    frequency: [],
    kmsKeyId: [],
    licenseType: [],
    nextReplicationRunStartTime: (_) => Math.round(_.getTime() / 1000),
    numberOfRecentAmisToKeep: [],
    replicationJobId: [],
    roleName: [],
  });
};

// se_UserData omitted.

// se_UserDataValidationParameters omitted.

// se_VmServer omitted.

// se_VmServerAddress omitted.

// se_VmServerAddressList omitted.

/**
 * deserializeAws_json1_1Apps
 */
const de_Apps = (output: any, context: __SerdeContext): AppSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AppSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AppSummary
 */
const de_AppSummary = (output: any, context: __SerdeContext): AppSummary => {
  return take(output, {
    appId: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    importedAppId: __expectString,
    lastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestReplicationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    launchConfigurationStatus: __expectString,
    launchDetails: (_: any) => de_LaunchDetails(_, context),
    launchStatus: __expectString,
    launchStatusMessage: __expectString,
    name: __expectString,
    replicationConfigurationStatus: __expectString,
    replicationStatus: __expectString,
    replicationStatusMessage: __expectString,
    roleName: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    totalServerGroups: __expectInt32,
    totalServers: __expectInt32,
  }) as any;
};

// de_AppValidationConfiguration omitted.

// de_AppValidationConfigurations omitted.

// de_AppValidationOutput omitted.

/**
 * deserializeAws_json1_1Connector
 */
const de_Connector = (output: any, context: __SerdeContext): Connector => {
  return take(output, {
    associatedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    capabilityList: _json,
    connectorId: __expectString,
    ipAddress: __expectString,
    macAddress: __expectString,
    status: __expectString,
    version: __expectString,
    vmManagerId: __expectString,
    vmManagerName: __expectString,
    vmManagerType: __expectString,
  }) as any;
};

// de_ConnectorCapabilityList omitted.

/**
 * deserializeAws_json1_1ConnectorList
 */
const de_ConnectorList = (output: any, context: __SerdeContext): Connector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Connector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAppResponse
 */
const de_CreateAppResponse = (output: any, context: __SerdeContext): CreateAppResponse => {
  return take(output, {
    appSummary: (_: any) => de_AppSummary(_, context),
    serverGroups: _json,
    tags: _json,
  }) as any;
};

// de_CreateReplicationJobResponse omitted.

// de_DeleteAppLaunchConfigurationResponse omitted.

// de_DeleteAppReplicationConfigurationResponse omitted.

// de_DeleteAppResponse omitted.

// de_DeleteAppValidationConfigurationResponse omitted.

// de_DeleteReplicationJobResponse omitted.

// de_DeleteServerCatalogResponse omitted.

// de_DisassociateConnectorResponse omitted.

// de_DryRunOperationException omitted.

// de_GenerateChangeSetResponse omitted.

// de_GenerateTemplateResponse omitted.

// de_GetAppLaunchConfigurationResponse omitted.

/**
 * deserializeAws_json1_1GetAppReplicationConfigurationResponse
 */
const de_GetAppReplicationConfigurationResponse = (
  output: any,
  context: __SerdeContext
): GetAppReplicationConfigurationResponse => {
  return take(output, {
    serverGroupReplicationConfigurations: (_: any) => de_ServerGroupReplicationConfigurations(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetAppResponse
 */
const de_GetAppResponse = (output: any, context: __SerdeContext): GetAppResponse => {
  return take(output, {
    appSummary: (_: any) => de_AppSummary(_, context),
    serverGroups: _json,
    tags: _json,
  }) as any;
};

// de_GetAppValidationConfigurationResponse omitted.

/**
 * deserializeAws_json1_1GetAppValidationOutputResponse
 */
const de_GetAppValidationOutputResponse = (output: any, context: __SerdeContext): GetAppValidationOutputResponse => {
  return take(output, {
    validationOutputList: (_: any) => de_ValidationOutputList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetConnectorsResponse
 */
const de_GetConnectorsResponse = (output: any, context: __SerdeContext): GetConnectorsResponse => {
  return take(output, {
    connectorList: (_: any) => de_ConnectorList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetReplicationJobsResponse
 */
const de_GetReplicationJobsResponse = (output: any, context: __SerdeContext): GetReplicationJobsResponse => {
  return take(output, {
    nextToken: __expectString,
    replicationJobList: (_: any) => de_ReplicationJobList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetReplicationRunsResponse
 */
const de_GetReplicationRunsResponse = (output: any, context: __SerdeContext): GetReplicationRunsResponse => {
  return take(output, {
    nextToken: __expectString,
    replicationJob: (_: any) => de_ReplicationJob(_, context),
    replicationRunList: (_: any) => de_ReplicationRunList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetServersResponse
 */
const de_GetServersResponse = (output: any, context: __SerdeContext): GetServersResponse => {
  return take(output, {
    lastModifiedOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nextToken: __expectString,
    serverCatalogStatus: __expectString,
    serverList: _json,
  }) as any;
};

// de_ImportAppCatalogResponse omitted.

// de_ImportServerCatalogResponse omitted.

// de_InternalError omitted.

// de_InvalidParameterException omitted.

// de_LaunchAppResponse omitted.

/**
 * deserializeAws_json1_1LaunchDetails
 */
const de_LaunchDetails = (output: any, context: __SerdeContext): LaunchDetails => {
  return take(output, {
    latestLaunchTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stackId: __expectString,
    stackName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListAppsResponse
 */
const de_ListAppsResponse = (output: any, context: __SerdeContext): ListAppsResponse => {
  return take(output, {
    apps: (_: any) => de_Apps(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_MissingRequiredParameterException omitted.

// de_NoConnectorsAvailableException omitted.

// de_NotifyAppValidationOutputResponse omitted.

// de_OperationNotPermittedException omitted.

// de_PutAppLaunchConfigurationResponse omitted.

// de_PutAppReplicationConfigurationResponse omitted.

// de_PutAppValidationConfigurationResponse omitted.

/**
 * deserializeAws_json1_1ReplicationJob
 */
const de_ReplicationJob = (output: any, context: __SerdeContext): ReplicationJob => {
  return take(output, {
    description: __expectString,
    encrypted: __expectBoolean,
    frequency: __expectInt32,
    kmsKeyId: __expectString,
    latestAmiId: __expectString,
    licenseType: __expectString,
    nextReplicationRunStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    numberOfRecentAmisToKeep: __expectInt32,
    replicationJobId: __expectString,
    replicationRunList: (_: any) => de_ReplicationRunList(_, context),
    roleName: __expectString,
    runOnce: __expectBoolean,
    seedReplicationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    serverId: __expectString,
    serverType: __expectString,
    state: __expectString,
    statusMessage: __expectString,
    vmServer: _json,
  }) as any;
};

// de_ReplicationJobAlreadyExistsException omitted.

/**
 * deserializeAws_json1_1ReplicationJobList
 */
const de_ReplicationJobList = (output: any, context: __SerdeContext): ReplicationJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationJob(entry, context);
    });
  return retVal;
};

// de_ReplicationJobNotFoundException omitted.

/**
 * deserializeAws_json1_1ReplicationRun
 */
const de_ReplicationRun = (output: any, context: __SerdeContext): ReplicationRun => {
  return take(output, {
    amiId: __expectString,
    completedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    encrypted: __expectBoolean,
    kmsKeyId: __expectString,
    replicationRunId: __expectString,
    scheduledStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stageDetails: _json,
    state: __expectString,
    statusMessage: __expectString,
    type: __expectString,
  }) as any;
};

// de_ReplicationRunLimitExceededException omitted.

/**
 * deserializeAws_json1_1ReplicationRunList
 */
const de_ReplicationRunList = (output: any, context: __SerdeContext): ReplicationRun[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReplicationRun(entry, context);
    });
  return retVal;
};

// de_ReplicationRunStageDetails omitted.

// de_S3Location omitted.

// de_Server omitted.

// de_ServerCannotBeReplicatedException omitted.

// de_ServerGroup omitted.

// de_ServerGroupLaunchConfiguration omitted.

// de_ServerGroupLaunchConfigurations omitted.

/**
 * deserializeAws_json1_1ServerGroupReplicationConfiguration
 */
const de_ServerGroupReplicationConfiguration = (
  output: any,
  context: __SerdeContext
): ServerGroupReplicationConfiguration => {
  return take(output, {
    serverGroupId: __expectString,
    serverReplicationConfigurations: (_: any) => de_ServerReplicationConfigurations(_, context),
  }) as any;
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
      return de_ServerGroupReplicationConfiguration(entry, context);
    });
  return retVal;
};

// de_ServerGroups omitted.

// de_ServerGroupValidationConfiguration omitted.

// de_ServerGroupValidationConfigurations omitted.

// de_ServerLaunchConfiguration omitted.

// de_ServerLaunchConfigurations omitted.

// de_ServerList omitted.

/**
 * deserializeAws_json1_1ServerReplicationConfiguration
 */
const de_ServerReplicationConfiguration = (output: any, context: __SerdeContext): ServerReplicationConfiguration => {
  return take(output, {
    server: _json,
    serverReplicationParameters: (_: any) => de_ServerReplicationParameters(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ServerReplicationConfigurations
 */
const de_ServerReplicationConfigurations = (output: any, context: __SerdeContext): ServerReplicationConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServerReplicationConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServerReplicationParameters
 */
const de_ServerReplicationParameters = (output: any, context: __SerdeContext): ServerReplicationParameters => {
  return take(output, {
    encrypted: __expectBoolean,
    frequency: __expectInt32,
    kmsKeyId: __expectString,
    licenseType: __expectString,
    numberOfRecentAmisToKeep: __expectInt32,
    runOnce: __expectBoolean,
    seedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ServerValidationConfiguration omitted.

// de_ServerValidationConfigurations omitted.

// de_ServerValidationOutput omitted.

// de_Source omitted.

// de_SSMOutput omitted.

// de_SSMValidationParameters omitted.

// de_StartAppReplicationResponse omitted.

// de_StartOnDemandAppReplicationResponse omitted.

// de_StartOnDemandReplicationRunResponse omitted.

// de_StopAppReplicationResponse omitted.

// de_Tag omitted.

// de_Tags omitted.

// de_TemporarilyUnavailableException omitted.

// de_TerminateAppResponse omitted.

// de_UnauthorizedOperationException omitted.

/**
 * deserializeAws_json1_1UpdateAppResponse
 */
const de_UpdateAppResponse = (output: any, context: __SerdeContext): UpdateAppResponse => {
  return take(output, {
    appSummary: (_: any) => de_AppSummary(_, context),
    serverGroups: _json,
    tags: _json,
  }) as any;
};

// de_UpdateReplicationJobResponse omitted.

// de_UserData omitted.

// de_UserDataValidationParameters omitted.

/**
 * deserializeAws_json1_1ValidationOutput
 */
const de_ValidationOutput = (output: any, context: __SerdeContext): ValidationOutput => {
  return take(output, {
    appValidationOutput: _json,
    latestValidationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    serverValidationOutput: _json,
    status: __expectString,
    statusMessage: __expectString,
    validationId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ValidationOutputList
 */
const de_ValidationOutputList = (output: any, context: __SerdeContext): ValidationOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ValidationOutput(entry, context);
    });
  return retVal;
};

// de_VmServer omitted.

// de_VmServerAddress omitted.

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

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSServerMigrationService_V2016_10_24.${operation}`,
  };
}

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
