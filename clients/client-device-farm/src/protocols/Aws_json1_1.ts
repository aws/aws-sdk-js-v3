// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput } from "../commands/CreateDevicePoolCommand";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput,
} from "../commands/CreateInstanceProfileCommand";
import {
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput,
} from "../commands/CreateNetworkProfileCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import {
  CreateRemoteAccessSessionCommandInput,
  CreateRemoteAccessSessionCommandOutput,
} from "../commands/CreateRemoteAccessSessionCommand";
import {
  CreateTestGridProjectCommandInput,
  CreateTestGridProjectCommandOutput,
} from "../commands/CreateTestGridProjectCommand";
import { CreateTestGridUrlCommandInput, CreateTestGridUrlCommandOutput } from "../commands/CreateTestGridUrlCommand";
import { CreateUploadCommandInput, CreateUploadCommandOutput } from "../commands/CreateUploadCommand";
import {
  CreateVPCEConfigurationCommandInput,
  CreateVPCEConfigurationCommandOutput,
} from "../commands/CreateVPCEConfigurationCommand";
import { DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput } from "../commands/DeleteDevicePoolCommand";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput,
} from "../commands/DeleteInstanceProfileCommand";
import {
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput,
} from "../commands/DeleteNetworkProfileCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import {
  DeleteRemoteAccessSessionCommandInput,
  DeleteRemoteAccessSessionCommandOutput,
} from "../commands/DeleteRemoteAccessSessionCommand";
import { DeleteRunCommandInput, DeleteRunCommandOutput } from "../commands/DeleteRunCommand";
import {
  DeleteTestGridProjectCommandInput,
  DeleteTestGridProjectCommandOutput,
} from "../commands/DeleteTestGridProjectCommand";
import { DeleteUploadCommandInput, DeleteUploadCommandOutput } from "../commands/DeleteUploadCommand";
import {
  DeleteVPCEConfigurationCommandInput,
  DeleteVPCEConfigurationCommandOutput,
} from "../commands/DeleteVPCEConfigurationCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetDeviceCommandInput, GetDeviceCommandOutput } from "../commands/GetDeviceCommand";
import { GetDeviceInstanceCommandInput, GetDeviceInstanceCommandOutput } from "../commands/GetDeviceInstanceCommand";
import { GetDevicePoolCommandInput, GetDevicePoolCommandOutput } from "../commands/GetDevicePoolCommand";
import {
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput,
} from "../commands/GetDevicePoolCompatibilityCommand";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput } from "../commands/GetInstanceProfileCommand";
import { GetJobCommandInput, GetJobCommandOutput } from "../commands/GetJobCommand";
import { GetNetworkProfileCommandInput, GetNetworkProfileCommandOutput } from "../commands/GetNetworkProfileCommand";
import { GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput } from "../commands/GetOfferingStatusCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "../commands/GetProjectCommand";
import {
  GetRemoteAccessSessionCommandInput,
  GetRemoteAccessSessionCommandOutput,
} from "../commands/GetRemoteAccessSessionCommand";
import { GetRunCommandInput, GetRunCommandOutput } from "../commands/GetRunCommand";
import { GetSuiteCommandInput, GetSuiteCommandOutput } from "../commands/GetSuiteCommand";
import { GetTestCommandInput, GetTestCommandOutput } from "../commands/GetTestCommand";
import { GetTestGridProjectCommandInput, GetTestGridProjectCommandOutput } from "../commands/GetTestGridProjectCommand";
import { GetTestGridSessionCommandInput, GetTestGridSessionCommandOutput } from "../commands/GetTestGridSessionCommand";
import { GetUploadCommandInput, GetUploadCommandOutput } from "../commands/GetUploadCommand";
import {
  GetVPCEConfigurationCommandInput,
  GetVPCEConfigurationCommandOutput,
} from "../commands/GetVPCEConfigurationCommand";
import {
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput,
} from "../commands/InstallToRemoteAccessSessionCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "../commands/ListArtifactsCommand";
import {
  ListDeviceInstancesCommandInput,
  ListDeviceInstancesCommandOutput,
} from "../commands/ListDeviceInstancesCommand";
import { ListDevicePoolsCommandInput, ListDevicePoolsCommandOutput } from "../commands/ListDevicePoolsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "../commands/ListDevicesCommand";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput,
} from "../commands/ListInstanceProfilesCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListNetworkProfilesCommandInput,
  ListNetworkProfilesCommandOutput,
} from "../commands/ListNetworkProfilesCommand";
import {
  ListOfferingPromotionsCommandInput,
  ListOfferingPromotionsCommandOutput,
} from "../commands/ListOfferingPromotionsCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "../commands/ListOfferingsCommand";
import {
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "../commands/ListOfferingTransactionsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput,
} from "../commands/ListRemoteAccessSessionsCommand";
import { ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { ListSamplesCommandInput, ListSamplesCommandOutput } from "../commands/ListSamplesCommand";
import { ListSuitesCommandInput, ListSuitesCommandOutput } from "../commands/ListSuitesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput,
} from "../commands/ListTestGridProjectsCommand";
import {
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput,
} from "../commands/ListTestGridSessionActionsCommand";
import {
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput,
} from "../commands/ListTestGridSessionArtifactsCommand";
import {
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput,
} from "../commands/ListTestGridSessionsCommand";
import { ListTestsCommandInput, ListTestsCommandOutput } from "../commands/ListTestsCommand";
import { ListUniqueProblemsCommandInput, ListUniqueProblemsCommandOutput } from "../commands/ListUniqueProblemsCommand";
import { ListUploadsCommandInput, ListUploadsCommandOutput } from "../commands/ListUploadsCommand";
import {
  ListVPCEConfigurationsCommandInput,
  ListVPCEConfigurationsCommandOutput,
} from "../commands/ListVPCEConfigurationsCommand";
import { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "../commands/PurchaseOfferingCommand";
import { RenewOfferingCommandInput, RenewOfferingCommandOutput } from "../commands/RenewOfferingCommand";
import { ScheduleRunCommandInput, ScheduleRunCommandOutput } from "../commands/ScheduleRunCommand";
import { StopJobCommandInput, StopJobCommandOutput } from "../commands/StopJobCommand";
import {
  StopRemoteAccessSessionCommandInput,
  StopRemoteAccessSessionCommandOutput,
} from "../commands/StopRemoteAccessSessionCommand";
import { StopRunCommandInput, StopRunCommandOutput } from "../commands/StopRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput,
} from "../commands/UpdateDeviceInstanceCommand";
import { UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput } from "../commands/UpdateDevicePoolCommand";
import {
  UpdateInstanceProfileCommandInput,
  UpdateInstanceProfileCommandOutput,
} from "../commands/UpdateInstanceProfileCommand";
import {
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput,
} from "../commands/UpdateNetworkProfileCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import {
  UpdateTestGridProjectCommandInput,
  UpdateTestGridProjectCommandOutput,
} from "../commands/UpdateTestGridProjectCommand";
import { UpdateUploadCommandInput, UpdateUploadCommandOutput } from "../commands/UpdateUploadCommand";
import {
  UpdateVPCEConfigurationCommandInput,
  UpdateVPCEConfigurationCommandOutput,
} from "../commands/UpdateVPCEConfigurationCommand";
import { DeviceFarmServiceException as __BaseException } from "../models/DeviceFarmServiceException";
import {
  AccountSettings,
  ArgumentException,
  CannotDeleteException,
  CPU,
  CreateDevicePoolRequest,
  CreateInstanceProfileRequest,
  CreateNetworkProfileRequest,
  CreateProjectRequest,
  CreateProjectResult,
  CreateRemoteAccessSessionConfiguration,
  CreateRemoteAccessSessionRequest,
  CreateRemoteAccessSessionResult,
  CreateTestGridProjectRequest,
  CreateTestGridProjectResult,
  CreateTestGridUrlRequest,
  CreateTestGridUrlResult,
  CreateUploadRequest,
  CreateUploadResult,
  CreateVPCEConfigurationRequest,
  CustomerArtifactPaths,
  DeleteDevicePoolRequest,
  DeleteInstanceProfileRequest,
  DeleteNetworkProfileRequest,
  DeleteProjectRequest,
  DeleteRemoteAccessSessionRequest,
  DeleteRunRequest,
  DeleteTestGridProjectRequest,
  DeleteUploadRequest,
  DeleteVPCEConfigurationRequest,
  Device,
  DeviceFilter,
  DeviceMinutes,
  DevicePoolCompatibilityResult,
  DeviceSelectionConfiguration,
  ExecutionConfiguration,
  ExecutionResult,
  GetAccountSettingsRequest,
  GetAccountSettingsResult,
  GetDeviceInstanceRequest,
  GetDevicePoolCompatibilityRequest,
  GetDevicePoolCompatibilityResult,
  GetDevicePoolRequest,
  GetDeviceRequest,
  GetDeviceResult,
  GetInstanceProfileRequest,
  GetJobRequest,
  GetJobResult,
  GetNetworkProfileRequest,
  GetOfferingStatusRequest,
  GetOfferingStatusResult,
  GetProjectRequest,
  GetProjectResult,
  GetRemoteAccessSessionRequest,
  GetRemoteAccessSessionResult,
  GetRunRequest,
  GetRunResult,
  GetSuiteRequest,
  GetSuiteResult,
  GetTestGridProjectRequest,
  GetTestGridProjectResult,
  GetTestGridSessionRequest,
  GetTestGridSessionResult,
  GetTestRequest,
  GetTestResult,
  GetUploadRequest,
  GetUploadResult,
  GetVPCEConfigurationRequest,
  IdempotencyException,
  InstallToRemoteAccessSessionRequest,
  InstallToRemoteAccessSessionResult,
  InternalServiceException,
  InvalidOperationException,
  Job,
  LimitExceededException,
  ListArtifactsRequest,
  ListDeviceInstancesRequest,
  ListDevicePoolsRequest,
  ListDevicesRequest,
  ListDevicesResult,
  ListInstanceProfilesRequest,
  ListJobsRequest,
  ListJobsResult,
  ListNetworkProfilesRequest,
  ListOfferingPromotionsRequest,
  ListOfferingsRequest,
  ListOfferingsResult,
  ListOfferingTransactionsRequest,
  ListOfferingTransactionsResult,
  ListProjectsRequest,
  ListProjectsResult,
  ListRemoteAccessSessionsRequest,
  ListRemoteAccessSessionsResult,
  ListRunsRequest,
  ListRunsResult,
  ListSamplesRequest,
  ListSuitesRequest,
  ListSuitesResult,
  ListTagsForResourceRequest,
  ListTestGridProjectsRequest,
  ListTestGridProjectsResult,
  ListTestGridSessionActionsRequest,
  ListTestGridSessionActionsResult,
  ListTestGridSessionArtifactsRequest,
  ListTestGridSessionsRequest,
  ListTestGridSessionsResult,
  ListTestsRequest,
  ListTestsResult,
  ListUniqueProblemsRequest,
  ListUniqueProblemsResult,
  ListUploadsRequest,
  ListUploadsResult,
  ListVPCEConfigurationsRequest,
  Location,
  MonetaryAmount,
  NotEligibleException,
  NotFoundException,
  Offering,
  OfferingStatus,
  OfferingTransaction,
  Problem,
  Project,
  PurchaseOfferingRequest,
  PurchaseOfferingResult,
  Radios,
  RecurringCharge,
  RemoteAccessSession,
  RenewOfferingRequest,
  RenewOfferingResult,
  Rule,
  Run,
  ScheduleRunConfiguration,
  ScheduleRunRequest,
  ScheduleRunResult,
  ScheduleRunTest,
  ServiceAccountException,
  StopJobRequest,
  StopJobResult,
  StopRemoteAccessSessionRequest,
  StopRemoteAccessSessionResult,
  StopRunRequest,
  StopRunResult,
  Suite,
  Tag,
  TagOperationException,
  TagPolicyException,
  TagResourceRequest,
  Test,
  TestGridProject,
  TestGridSession,
  TestGridSessionAction,
  TestGridVpcConfig,
  TooManyTagsException,
  TrialMinutes,
  UniqueProblem,
  UntagResourceRequest,
  UpdateDeviceInstanceRequest,
  UpdateDevicePoolRequest,
  UpdateInstanceProfileRequest,
  UpdateNetworkProfileRequest,
  UpdateProjectRequest,
  UpdateProjectResult,
  UpdateTestGridProjectRequest,
  UpdateTestGridProjectResult,
  UpdateUploadRequest,
  UpdateUploadResult,
  UpdateVPCEConfigurationRequest,
  Upload,
  VpcConfig,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateDevicePoolCommand
 */
export const se_CreateDevicePoolCommand = async (
  input: CreateDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDevicePool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateInstanceProfileCommand
 */
export const se_CreateInstanceProfileCommand = async (
  input: CreateInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateInstanceProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateNetworkProfileCommand
 */
export const se_CreateNetworkProfileCommand = async (
  input: CreateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateNetworkProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateRemoteAccessSessionCommand
 */
export const se_CreateRemoteAccessSessionCommand = async (
  input: CreateRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRemoteAccessSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTestGridProjectCommand
 */
export const se_CreateTestGridProjectCommand = async (
  input: CreateTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTestGridProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateTestGridUrlCommand
 */
export const se_CreateTestGridUrlCommand = async (
  input: CreateTestGridUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTestGridUrl");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateUploadCommand
 */
export const se_CreateUploadCommand = async (
  input: CreateUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateUpload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVPCEConfigurationCommand
 */
export const se_CreateVPCEConfigurationCommand = async (
  input: CreateVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVPCEConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDevicePoolCommand
 */
export const se_DeleteDevicePoolCommand = async (
  input: DeleteDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDevicePool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteInstanceProfileCommand
 */
export const se_DeleteInstanceProfileCommand = async (
  input: DeleteInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteInstanceProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNetworkProfileCommand
 */
export const se_DeleteNetworkProfileCommand = async (
  input: DeleteNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteNetworkProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRemoteAccessSessionCommand
 */
export const se_DeleteRemoteAccessSessionCommand = async (
  input: DeleteRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRemoteAccessSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteRunCommand
 */
export const se_DeleteRunCommand = async (
  input: DeleteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTestGridProjectCommand
 */
export const se_DeleteTestGridProjectCommand = async (
  input: DeleteTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTestGridProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteUploadCommand
 */
export const se_DeleteUploadCommand = async (
  input: DeleteUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteUpload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVPCEConfigurationCommand
 */
export const se_DeleteVPCEConfigurationCommand = async (
  input: DeleteVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVPCEConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccountSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeviceCommand
 */
export const se_GetDeviceCommand = async (
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDevice");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDeviceInstanceCommand
 */
export const se_GetDeviceInstanceCommand = async (
  input: GetDeviceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeviceInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDevicePoolCommand
 */
export const se_GetDevicePoolCommand = async (
  input: GetDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDevicePool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetDevicePoolCompatibilityCommand
 */
export const se_GetDevicePoolCompatibilityCommand = async (
  input: GetDevicePoolCompatibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDevicePoolCompatibility");
  let body: any;
  body = JSON.stringify(se_GetDevicePoolCompatibilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstanceProfileCommand
 */
export const se_GetInstanceProfileCommand = async (
  input: GetInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstanceProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobCommand
 */
export const se_GetJobCommand = async (input: GetJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNetworkProfileCommand
 */
export const se_GetNetworkProfileCommand = async (
  input: GetNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetNetworkProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOfferingStatusCommand
 */
export const se_GetOfferingStatusCommand = async (
  input: GetOfferingStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOfferingStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetProjectCommand
 */
export const se_GetProjectCommand = async (
  input: GetProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRemoteAccessSessionCommand
 */
export const se_GetRemoteAccessSessionCommand = async (
  input: GetRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRemoteAccessSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRunCommand
 */
export const se_GetRunCommand = async (input: GetRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetSuiteCommand
 */
export const se_GetSuiteCommand = async (
  input: GetSuiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetSuite");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTestCommand
 */
export const se_GetTestCommand = async (
  input: GetTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTest");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTestGridProjectCommand
 */
export const se_GetTestGridProjectCommand = async (
  input: GetTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTestGridProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTestGridSessionCommand
 */
export const se_GetTestGridSessionCommand = async (
  input: GetTestGridSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTestGridSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetUploadCommand
 */
export const se_GetUploadCommand = async (
  input: GetUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetUpload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetVPCEConfigurationCommand
 */
export const se_GetVPCEConfigurationCommand = async (
  input: GetVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetVPCEConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1InstallToRemoteAccessSessionCommand
 */
export const se_InstallToRemoteAccessSessionCommand = async (
  input: InstallToRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("InstallToRemoteAccessSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListArtifactsCommand
 */
export const se_ListArtifactsCommand = async (
  input: ListArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListArtifacts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDeviceInstancesCommand
 */
export const se_ListDeviceInstancesCommand = async (
  input: ListDeviceInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeviceInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDevicePoolsCommand
 */
export const se_ListDevicePoolsCommand = async (
  input: ListDevicePoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDevicePools");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDevicesCommand
 */
export const se_ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDevices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstanceProfilesCommand
 */
export const se_ListInstanceProfilesCommand = async (
  input: ListInstanceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInstanceProfiles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNetworkProfilesCommand
 */
export const se_ListNetworkProfilesCommand = async (
  input: ListNetworkProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNetworkProfiles");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOfferingPromotionsCommand
 */
export const se_ListOfferingPromotionsCommand = async (
  input: ListOfferingPromotionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOfferingPromotions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOfferingsCommand
 */
export const se_ListOfferingsCommand = async (
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOfferings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOfferingTransactionsCommand
 */
export const se_ListOfferingTransactionsCommand = async (
  input: ListOfferingTransactionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOfferingTransactions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListProjects");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRemoteAccessSessionsCommand
 */
export const se_ListRemoteAccessSessionsCommand = async (
  input: ListRemoteAccessSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRemoteAccessSessions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListRunsCommand
 */
export const se_ListRunsCommand = async (
  input: ListRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRuns");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSamplesCommand
 */
export const se_ListSamplesCommand = async (
  input: ListSamplesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSamples");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListSuitesCommand
 */
export const se_ListSuitesCommand = async (
  input: ListSuitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListSuites");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTestGridProjectsCommand
 */
export const se_ListTestGridProjectsCommand = async (
  input: ListTestGridProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTestGridProjects");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTestGridSessionActionsCommand
 */
export const se_ListTestGridSessionActionsCommand = async (
  input: ListTestGridSessionActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTestGridSessionActions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTestGridSessionArtifactsCommand
 */
export const se_ListTestGridSessionArtifactsCommand = async (
  input: ListTestGridSessionArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTestGridSessionArtifacts");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTestGridSessionsCommand
 */
export const se_ListTestGridSessionsCommand = async (
  input: ListTestGridSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTestGridSessions");
  let body: any;
  body = JSON.stringify(se_ListTestGridSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTestsCommand
 */
export const se_ListTestsCommand = async (
  input: ListTestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTests");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUniqueProblemsCommand
 */
export const se_ListUniqueProblemsCommand = async (
  input: ListUniqueProblemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUniqueProblems");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListUploadsCommand
 */
export const se_ListUploadsCommand = async (
  input: ListUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListUploads");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVPCEConfigurationsCommand
 */
export const se_ListVPCEConfigurationsCommand = async (
  input: ListVPCEConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVPCEConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1PurchaseOfferingCommand
 */
export const se_PurchaseOfferingCommand = async (
  input: PurchaseOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PurchaseOffering");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RenewOfferingCommand
 */
export const se_RenewOfferingCommand = async (
  input: RenewOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RenewOffering");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ScheduleRunCommand
 */
export const se_ScheduleRunCommand = async (
  input: ScheduleRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ScheduleRun");
  let body: any;
  body = JSON.stringify(se_ScheduleRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopJobCommand
 */
export const se_StopJobCommand = async (
  input: StopJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopRemoteAccessSessionCommand
 */
export const se_StopRemoteAccessSessionCommand = async (
  input: StopRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopRemoteAccessSession");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopRunCommand
 */
export const se_StopRunCommand = async (
  input: StopRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopRun");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDeviceInstanceCommand
 */
export const se_UpdateDeviceInstanceCommand = async (
  input: UpdateDeviceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDeviceInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDevicePoolCommand
 */
export const se_UpdateDevicePoolCommand = async (
  input: UpdateDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDevicePool");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInstanceProfileCommand
 */
export const se_UpdateInstanceProfileCommand = async (
  input: UpdateInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateInstanceProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateNetworkProfileCommand
 */
export const se_UpdateNetworkProfileCommand = async (
  input: UpdateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateNetworkProfile");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateTestGridProjectCommand
 */
export const se_UpdateTestGridProjectCommand = async (
  input: UpdateTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTestGridProject");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateUploadCommand
 */
export const se_UpdateUploadCommand = async (
  input: UpdateUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateUpload");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVPCEConfigurationCommand
 */
export const se_UpdateVPCEConfigurationCommand = async (
  input: UpdateVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVPCEConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateDevicePoolCommand
 */
export const de_CreateDevicePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevicePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDevicePoolCommandError
 */
const de_CreateDevicePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevicePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateInstanceProfileCommand
 */
export const de_CreateInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateInstanceProfileCommandError
 */
const de_CreateInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateNetworkProfileCommand
 */
export const de_CreateNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateNetworkProfileCommandError
 */
const de_CreateNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateProjectResult(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateProjectCommandError
 */
const de_CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
    case "TagOperationException":
    case "com.amazonaws.devicefarm#TagOperationException":
      throw await de_TagOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateRemoteAccessSessionCommand
 */
export const de_CreateRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateRemoteAccessSessionResult(data, context);
  const response: CreateRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateRemoteAccessSessionCommandError
 */
const de_CreateRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateTestGridProjectCommand
 */
export const de_CreateTestGridProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTestGridProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTestGridProjectResult(data, context);
  const response: CreateTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTestGridProjectCommandError
 */
const de_CreateTestGridProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateTestGridUrlCommand
 */
export const de_CreateTestGridUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTestGridUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateTestGridUrlResult(data, context);
  const response: CreateTestGridUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateTestGridUrlCommandError
 */
const de_CreateTestGridUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateUploadCommand
 */
export const de_CreateUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateUploadResult(data, context);
  const response: CreateUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateUploadCommandError
 */
const de_CreateUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1CreateVPCEConfigurationCommand
 */
export const de_CreateVPCEConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCEConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVPCEConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateVPCEConfigurationCommandError
 */
const de_CreateVPCEConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCEConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteDevicePoolCommand
 */
export const de_DeleteDevicePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevicePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDevicePoolCommandError
 */
const de_DeleteDevicePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevicePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteInstanceProfileCommand
 */
export const de_DeleteInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteInstanceProfileCommandError
 */
const de_DeleteInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteNetworkProfileCommand
 */
export const de_DeleteNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteNetworkProfileCommandError
 */
const de_DeleteNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteProjectCommandError
 */
const de_DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRemoteAccessSessionCommand
 */
export const de_DeleteRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRemoteAccessSessionCommandError
 */
const de_DeleteRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteRunCommand
 */
export const de_DeleteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteRunCommandError
 */
const de_DeleteRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteTestGridProjectCommand
 */
export const de_DeleteTestGridProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestGridProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTestGridProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTestGridProjectCommandError
 */
const de_DeleteTestGridProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestGridProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "CannotDeleteException":
    case "com.amazonaws.devicefarm#CannotDeleteException":
      throw await de_CannotDeleteExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteUploadCommand
 */
export const de_DeleteUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteUploadCommandError
 */
const de_DeleteUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1DeleteVPCEConfigurationCommand
 */
export const de_DeleteVPCEConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCEConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVPCEConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteVPCEConfigurationCommandError
 */
const de_DeleteVPCEConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCEConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.devicefarm#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccountSettingsResult(data, context);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetAccountSettingsCommandError
 */
const de_GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDeviceCommand
 */
export const de_GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeviceResult(data, context);
  const response: GetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeviceCommandError
 */
const de_GetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDeviceInstanceCommand
 */
export const de_GetDeviceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeviceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDeviceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDeviceInstanceCommandError
 */
const de_GetDeviceInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDevicePoolCommand
 */
export const de_GetDevicePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDevicePoolCommandError
 */
const de_GetDevicePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetDevicePoolCompatibilityCommand
 */
export const de_GetDevicePoolCompatibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCompatibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDevicePoolCompatibilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDevicePoolCompatibilityResult(data, context);
  const response: GetDevicePoolCompatibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetDevicePoolCompatibilityCommandError
 */
const de_GetDevicePoolCompatibilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCompatibilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetInstanceProfileCommand
 */
export const de_GetInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetInstanceProfileCommandError
 */
const de_GetInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetJobCommand
 */
export const de_GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetJobResult(data, context);
  const response: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetJobCommandError
 */
const de_GetJobCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetNetworkProfileCommand
 */
export const de_GetNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetNetworkProfileCommandError
 */
const de_GetNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetOfferingStatusCommand
 */
export const de_GetOfferingStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOfferingStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOfferingStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOfferingStatusResult(data, context);
  const response: GetOfferingStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetOfferingStatusCommandError
 */
const de_GetOfferingStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOfferingStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      throw await de_NotEligibleExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetProjectCommand
 */
export const de_GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetProjectResult(data, context);
  const response: GetProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetProjectCommandError
 */
const de_GetProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRemoteAccessSessionCommand
 */
export const de_GetRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRemoteAccessSessionResult(data, context);
  const response: GetRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRemoteAccessSessionCommandError
 */
const de_GetRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetRunCommand
 */
export const de_GetRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRunResult(data, context);
  const response: GetRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetRunCommandError
 */
const de_GetRunCommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<GetRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetSuiteCommand
 */
export const de_GetSuiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetSuiteCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetSuiteResult(data, context);
  const response: GetSuiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetSuiteCommandError
 */
const de_GetSuiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTestCommand
 */
export const de_GetTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTestResult(data, context);
  const response: GetTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTestCommandError
 */
const de_GetTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTestGridProjectCommand
 */
export const de_GetTestGridProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTestGridProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTestGridProjectResult(data, context);
  const response: GetTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTestGridProjectCommandError
 */
const de_GetTestGridProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetTestGridSessionCommand
 */
export const de_GetTestGridSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTestGridSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTestGridSessionResult(data, context);
  const response: GetTestGridSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTestGridSessionCommandError
 */
const de_GetTestGridSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetUploadCommand
 */
export const de_GetUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetUploadResult(data, context);
  const response: GetUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetUploadCommandError
 */
const de_GetUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1GetVPCEConfigurationCommand
 */
export const de_GetVPCEConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVPCEConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetVPCEConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetVPCEConfigurationCommandError
 */
const de_GetVPCEConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVPCEConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1InstallToRemoteAccessSessionCommand
 */
export const de_InstallToRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstallToRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_InstallToRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_InstallToRemoteAccessSessionResult(data, context);
  const response: InstallToRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1InstallToRemoteAccessSessionCommandError
 */
const de_InstallToRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstallToRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListArtifactsCommand
 */
export const de_ListArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListArtifactsCommandError
 */
const de_ListArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListDeviceInstancesCommand
 */
export const de_ListDeviceInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeviceInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDeviceInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDeviceInstancesCommandError
 */
const de_ListDeviceInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListDevicePoolsCommand
 */
export const de_ListDevicePoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDevicePoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListDevicePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDevicePoolsCommandError
 */
const de_ListDevicePoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListDevicesCommand
 */
export const de_ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDevicesResult(data, context);
  const response: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListDevicesCommandError
 */
const de_ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListInstanceProfilesCommand
 */
export const de_ListInstanceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstanceProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListInstanceProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListInstanceProfilesCommandError
 */
const de_ListInstanceProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListJobsResult(data, context);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListJobsCommandError
 */
const de_ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListNetworkProfilesCommand
 */
export const de_ListNetworkProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNetworkProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListNetworkProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListNetworkProfilesCommandError
 */
const de_ListNetworkProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListOfferingPromotionsCommand
 */
export const de_ListOfferingPromotionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingPromotionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOfferingPromotionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListOfferingPromotionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListOfferingPromotionsCommandError
 */
const de_ListOfferingPromotionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingPromotionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      throw await de_NotEligibleExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListOfferingsCommand
 */
export const de_ListOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOfferingsResult(data, context);
  const response: ListOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListOfferingsCommandError
 */
const de_ListOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      throw await de_NotEligibleExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListOfferingTransactionsCommand
 */
export const de_ListOfferingTransactionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingTransactionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOfferingTransactionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOfferingTransactionsResult(data, context);
  const response: ListOfferingTransactionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListOfferingTransactionsCommandError
 */
const de_ListOfferingTransactionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingTransactionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      throw await de_NotEligibleExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListProjectsResult(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListProjectsCommandError
 */
const de_ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRemoteAccessSessionsCommand
 */
export const de_ListRemoteAccessSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRemoteAccessSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRemoteAccessSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRemoteAccessSessionsResult(data, context);
  const response: ListRemoteAccessSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRemoteAccessSessionsCommandError
 */
const de_ListRemoteAccessSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRemoteAccessSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListRunsCommand
 */
export const de_ListRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListRunsResult(data, context);
  const response: ListRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListRunsCommandError
 */
const de_ListRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSamplesCommand
 */
export const de_ListSamplesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSamplesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSamplesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListSamplesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSamplesCommandError
 */
const de_ListSamplesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSamplesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListSuitesCommand
 */
export const de_ListSuitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuitesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListSuitesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListSuitesResult(data, context);
  const response: ListSuitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListSuitesCommandError
 */
const de_ListSuitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
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
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TagOperationException":
    case "com.amazonaws.devicefarm#TagOperationException":
      throw await de_TagOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTestGridProjectsCommand
 */
export const de_ListTestGridProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTestGridProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTestGridProjectsResult(data, context);
  const response: ListTestGridProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTestGridProjectsCommandError
 */
const de_ListTestGridProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTestGridSessionActionsCommand
 */
export const de_ListTestGridSessionActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTestGridSessionActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTestGridSessionActionsResult(data, context);
  const response: ListTestGridSessionActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTestGridSessionActionsCommandError
 */
const de_ListTestGridSessionActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTestGridSessionArtifactsCommand
 */
export const de_ListTestGridSessionArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTestGridSessionArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTestGridSessionArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTestGridSessionArtifactsCommandError
 */
const de_ListTestGridSessionArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTestGridSessionsCommand
 */
export const de_ListTestGridSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTestGridSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTestGridSessionsResult(data, context);
  const response: ListTestGridSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTestGridSessionsCommandError
 */
const de_ListTestGridSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListTestsCommand
 */
export const de_ListTestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTestsResult(data, context);
  const response: ListTestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTestsCommandError
 */
const de_ListTestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListUniqueProblemsCommand
 */
export const de_ListUniqueProblemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUniqueProblemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUniqueProblemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUniqueProblemsResult(data, context);
  const response: ListUniqueProblemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUniqueProblemsCommandError
 */
const de_ListUniqueProblemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUniqueProblemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListUploadsCommand
 */
export const de_ListUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUploadsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListUploadsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListUploadsResult(data, context);
  const response: ListUploadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListUploadsCommandError
 */
const de_ListUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ListVPCEConfigurationsCommand
 */
export const de_ListVPCEConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCEConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVPCEConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListVPCEConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListVPCEConfigurationsCommandError
 */
const de_ListVPCEConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCEConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1PurchaseOfferingCommand
 */
export const de_PurchaseOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PurchaseOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PurchaseOfferingResult(data, context);
  const response: PurchaseOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1PurchaseOfferingCommandError
 */
const de_PurchaseOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      throw await de_NotEligibleExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1RenewOfferingCommand
 */
export const de_RenewOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RenewOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RenewOfferingResult(data, context);
  const response: RenewOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RenewOfferingCommandError
 */
const de_RenewOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      throw await de_NotEligibleExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ScheduleRunCommand
 */
export const de_ScheduleRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ScheduleRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ScheduleRunResult(data, context);
  const response: ScheduleRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ScheduleRunCommandError
 */
const de_ScheduleRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "IdempotencyException":
    case "com.amazonaws.devicefarm#IdempotencyException":
      throw await de_IdempotencyExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopJobCommand
 */
export const de_StopJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopJobResult(data, context);
  const response: StopJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopJobCommandError
 */
const de_StopJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopRemoteAccessSessionCommand
 */
export const de_StopRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopRemoteAccessSessionResult(data, context);
  const response: StopRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopRemoteAccessSessionCommandError
 */
const de_StopRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1StopRunCommand
 */
export const de_StopRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StopRunResult(data, context);
  const response: StopRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StopRunCommandError
 */
const de_StopRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommandError
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
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TagOperationException":
    case "com.amazonaws.devicefarm#TagOperationException":
      throw await de_TagOperationExceptionRes(parsedOutput, context);
    case "TagPolicyException":
    case "com.amazonaws.devicefarm#TagPolicyException":
      throw await de_TagPolicyExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.devicefarm#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
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
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "TagOperationException":
    case "com.amazonaws.devicefarm#TagOperationException":
      throw await de_TagOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateDeviceInstanceCommand
 */
export const de_UpdateDeviceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDeviceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDeviceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDeviceInstanceCommandError
 */
const de_UpdateDeviceInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateDevicePoolCommand
 */
export const de_UpdateDevicePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDevicePoolCommandError
 */
const de_UpdateDevicePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateInstanceProfileCommand
 */
export const de_UpdateInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateInstanceProfileCommandError
 */
const de_UpdateInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateNetworkProfileCommand
 */
export const de_UpdateNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateNetworkProfileCommandError
 */
const de_UpdateNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateProjectResult(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateProjectCommandError
 */
const de_UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateTestGridProjectCommand
 */
export const de_UpdateTestGridProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestGridProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTestGridProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateTestGridProjectResult(data, context);
  const response: UpdateTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateTestGridProjectCommandError
 */
const de_UpdateTestGridProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestGridProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateUploadCommand
 */
export const de_UpdateUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateUploadResult(data, context);
  const response: UpdateUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateUploadCommandError
 */
const de_UpdateUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1UpdateVPCEConfigurationCommand
 */
export const de_UpdateVPCEConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVPCEConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVPCEConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateVPCEConfigurationCommandError
 */
const de_UpdateVPCEConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVPCEConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      throw await de_ArgumentExceptionRes(parsedOutput, context);
    case "InvalidOperationException":
    case "com.amazonaws.devicefarm#InvalidOperationException":
      throw await de_InvalidOperationExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      throw await de_ServiceAccountExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_1ArgumentExceptionRes
 */
const de_ArgumentExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ArgumentException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1CannotDeleteExceptionRes
 */
const de_CannotDeleteExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new CannotDeleteException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IdempotencyExceptionRes
 */
const de_IdempotencyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IdempotencyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidOperationExceptionRes
 */
const de_InvalidOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotEligibleExceptionRes
 */
const de_NotEligibleExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotEligibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NotEligibleException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceAccountExceptionRes
 */
const de_ServiceAccountExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceAccountException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagOperationExceptionRes
 */
const de_TagOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TagOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TagPolicyExceptionRes
 */
const de_TagPolicyExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TagPolicyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AmazonResourceNames omitted.

// se_AndroidPaths omitted.

// se_CreateDevicePoolRequest omitted.

// se_CreateInstanceProfileRequest omitted.

// se_CreateNetworkProfileRequest omitted.

// se_CreateProjectRequest omitted.

// se_CreateRemoteAccessSessionConfiguration omitted.

// se_CreateRemoteAccessSessionRequest omitted.

// se_CreateTestGridProjectRequest omitted.

// se_CreateTestGridUrlRequest omitted.

// se_CreateUploadRequest omitted.

// se_CreateVPCEConfigurationRequest omitted.

// se_CustomerArtifactPaths omitted.

// se_DeleteDevicePoolRequest omitted.

// se_DeleteInstanceProfileRequest omitted.

// se_DeleteNetworkProfileRequest omitted.

// se_DeleteProjectRequest omitted.

// se_DeleteRemoteAccessSessionRequest omitted.

// se_DeleteRunRequest omitted.

// se_DeleteTestGridProjectRequest omitted.

// se_DeleteUploadRequest omitted.

// se_DeleteVPCEConfigurationRequest omitted.

// se_DeviceFilter omitted.

// se_DeviceFilters omitted.

// se_DeviceFilterValues omitted.

// se_DeviceHostPaths omitted.

// se_DeviceSelectionConfiguration omitted.

// se_ExecutionConfiguration omitted.

// se_GetAccountSettingsRequest omitted.

// se_GetDeviceInstanceRequest omitted.

/**
 * serializeAws_json1_1GetDevicePoolCompatibilityRequest
 */
const se_GetDevicePoolCompatibilityRequest = (
  input: GetDevicePoolCompatibilityRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    appArn: [],
    configuration: (_) => se_ScheduleRunConfiguration(_, context),
    devicePoolArn: [],
    test: _json,
    testType: [],
  });
};

// se_GetDevicePoolRequest omitted.

// se_GetDeviceRequest omitted.

// se_GetInstanceProfileRequest omitted.

// se_GetJobRequest omitted.

// se_GetNetworkProfileRequest omitted.

// se_GetOfferingStatusRequest omitted.

// se_GetProjectRequest omitted.

// se_GetRemoteAccessSessionRequest omitted.

// se_GetRunRequest omitted.

// se_GetSuiteRequest omitted.

// se_GetTestGridProjectRequest omitted.

// se_GetTestGridSessionRequest omitted.

// se_GetTestRequest omitted.

// se_GetUploadRequest omitted.

// se_GetVPCEConfigurationRequest omitted.

// se_InstallToRemoteAccessSessionRequest omitted.

// se_InstanceLabels omitted.

// se_IosPaths omitted.

// se_ListArtifactsRequest omitted.

// se_ListDeviceInstancesRequest omitted.

// se_ListDevicePoolsRequest omitted.

// se_ListDevicesRequest omitted.

// se_ListInstanceProfilesRequest omitted.

// se_ListJobsRequest omitted.

// se_ListNetworkProfilesRequest omitted.

// se_ListOfferingPromotionsRequest omitted.

// se_ListOfferingsRequest omitted.

// se_ListOfferingTransactionsRequest omitted.

// se_ListProjectsRequest omitted.

// se_ListRemoteAccessSessionsRequest omitted.

// se_ListRunsRequest omitted.

// se_ListSamplesRequest omitted.

// se_ListSuitesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTestGridProjectsRequest omitted.

// se_ListTestGridSessionActionsRequest omitted.

// se_ListTestGridSessionArtifactsRequest omitted.

/**
 * serializeAws_json1_1ListTestGridSessionsRequest
 */
const se_ListTestGridSessionsRequest = (input: ListTestGridSessionsRequest, context: __SerdeContext): any => {
  return take(input, {
    creationTimeAfter: (_) => Math.round(_.getTime() / 1000),
    creationTimeBefore: (_) => Math.round(_.getTime() / 1000),
    endTimeAfter: (_) => Math.round(_.getTime() / 1000),
    endTimeBefore: (_) => Math.round(_.getTime() / 1000),
    maxResult: [],
    nextToken: [],
    projectArn: [],
    status: [],
  });
};

// se_ListTestsRequest omitted.

// se_ListUniqueProblemsRequest omitted.

// se_ListUploadsRequest omitted.

// se_ListVPCEConfigurationsRequest omitted.

/**
 * serializeAws_json1_1Location
 */
const se_Location = (input: Location, context: __SerdeContext): any => {
  return take(input, {
    latitude: __serializeFloat,
    longitude: __serializeFloat,
  });
};

// se_PackageIds omitted.

// se_PurchaseOfferingRequest omitted.

// se_Radios omitted.

// se_RenewOfferingRequest omitted.

// se_Rule omitted.

// se_Rules omitted.

/**
 * serializeAws_json1_1ScheduleRunConfiguration
 */
const se_ScheduleRunConfiguration = (input: ScheduleRunConfiguration, context: __SerdeContext): any => {
  return take(input, {
    auxiliaryApps: _json,
    billingMethod: [],
    customerArtifactPaths: _json,
    extraDataPackageArn: [],
    locale: [],
    location: (_) => se_Location(_, context),
    networkProfileArn: [],
    radios: _json,
    vpceConfigurationArns: _json,
  });
};

/**
 * serializeAws_json1_1ScheduleRunRequest
 */
const se_ScheduleRunRequest = (input: ScheduleRunRequest, context: __SerdeContext): any => {
  return take(input, {
    appArn: [],
    configuration: (_) => se_ScheduleRunConfiguration(_, context),
    devicePoolArn: [],
    deviceSelectionConfiguration: _json,
    executionConfiguration: _json,
    name: [],
    projectArn: [],
    test: _json,
  });
};

// se_ScheduleRunTest omitted.

// se_SecurityGroupIds omitted.

// se_StopJobRequest omitted.

// se_StopRemoteAccessSessionRequest omitted.

// se_StopRunRequest omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TestGridVpcConfig omitted.

// se_TestParameters omitted.

// se_UntagResourceRequest omitted.

// se_UpdateDeviceInstanceRequest omitted.

// se_UpdateDevicePoolRequest omitted.

// se_UpdateInstanceProfileRequest omitted.

// se_UpdateNetworkProfileRequest omitted.

// se_UpdateProjectRequest omitted.

// se_UpdateTestGridProjectRequest omitted.

// se_UpdateUploadRequest omitted.

// se_UpdateVPCEConfigurationRequest omitted.

// se_VpcConfig omitted.

// se_VpcSecurityGroupIds omitted.

// se_VpcSubnetIds omitted.

/**
 * deserializeAws_json1_1AccountSettings
 */
const de_AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return take(output, {
    awsAccountNumber: __expectString,
    defaultJobTimeoutMinutes: __expectInt32,
    maxJobTimeoutMinutes: __expectInt32,
    maxSlots: _json,
    skipAppResign: __expectBoolean,
    trialMinutes: (_: any) => de_TrialMinutes(_, context),
    unmeteredDevices: _json,
    unmeteredRemoteAccessDevices: _json,
  }) as any;
};

// de_AndroidPaths omitted.

// de_ArgumentException omitted.

// de_Artifact omitted.

// de_Artifacts omitted.

// de_CannotDeleteException omitted.

// de_Counters omitted.

/**
 * deserializeAws_json1_1CPU
 */
const de_CPU = (output: any, context: __SerdeContext): CPU => {
  return take(output, {
    architecture: __expectString,
    clock: __limitedParseDouble,
    frequency: __expectString,
  }) as any;
};

// de_CreateDevicePoolResult omitted.

// de_CreateInstanceProfileResult omitted.

// de_CreateNetworkProfileResult omitted.

/**
 * deserializeAws_json1_1CreateProjectResult
 */
const de_CreateProjectResult = (output: any, context: __SerdeContext): CreateProjectResult => {
  return take(output, {
    project: (_: any) => de_Project(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateRemoteAccessSessionResult
 */
const de_CreateRemoteAccessSessionResult = (output: any, context: __SerdeContext): CreateRemoteAccessSessionResult => {
  return take(output, {
    remoteAccessSession: (_: any) => de_RemoteAccessSession(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateTestGridProjectResult
 */
const de_CreateTestGridProjectResult = (output: any, context: __SerdeContext): CreateTestGridProjectResult => {
  return take(output, {
    testGridProject: (_: any) => de_TestGridProject(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateTestGridUrlResult
 */
const de_CreateTestGridUrlResult = (output: any, context: __SerdeContext): CreateTestGridUrlResult => {
  return take(output, {
    expires: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateUploadResult
 */
const de_CreateUploadResult = (output: any, context: __SerdeContext): CreateUploadResult => {
  return take(output, {
    upload: (_: any) => de_Upload(_, context),
  }) as any;
};

// de_CreateVPCEConfigurationResult omitted.

// de_CustomerArtifactPaths omitted.

// de_DeleteDevicePoolResult omitted.

// de_DeleteInstanceProfileResult omitted.

// de_DeleteNetworkProfileResult omitted.

// de_DeleteProjectResult omitted.

// de_DeleteRemoteAccessSessionResult omitted.

// de_DeleteRunResult omitted.

// de_DeleteTestGridProjectResult omitted.

// de_DeleteUploadResult omitted.

// de_DeleteVPCEConfigurationResult omitted.

/**
 * deserializeAws_json1_1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return take(output, {
    arn: __expectString,
    availability: __expectString,
    carrier: __expectString,
    cpu: (_: any) => de_CPU(_, context),
    fleetName: __expectString,
    fleetType: __expectString,
    formFactor: __expectString,
    heapSize: __expectLong,
    image: __expectString,
    instances: _json,
    manufacturer: __expectString,
    memory: __expectLong,
    model: __expectString,
    modelId: __expectString,
    name: __expectString,
    os: __expectString,
    platform: __expectString,
    radio: __expectString,
    remoteAccessEnabled: __expectBoolean,
    remoteDebugEnabled: __expectBoolean,
    resolution: _json,
  }) as any;
};

// de_DeviceFilter omitted.

// de_DeviceFilters omitted.

// de_DeviceFilterValues omitted.

// de_DeviceHostPaths omitted.

// de_DeviceInstance omitted.

// de_DeviceInstances omitted.

/**
 * deserializeAws_json1_1DeviceMinutes
 */
const de_DeviceMinutes = (output: any, context: __SerdeContext): DeviceMinutes => {
  return take(output, {
    metered: __limitedParseDouble,
    total: __limitedParseDouble,
    unmetered: __limitedParseDouble,
  }) as any;
};

// de_DevicePool omitted.

/**
 * deserializeAws_json1_1DevicePoolCompatibilityResult
 */
const de_DevicePoolCompatibilityResult = (output: any, context: __SerdeContext): DevicePoolCompatibilityResult => {
  return take(output, {
    compatible: __expectBoolean,
    device: (_: any) => de_Device(_, context),
    incompatibilityMessages: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DevicePoolCompatibilityResults
 */
const de_DevicePoolCompatibilityResults = (output: any, context: __SerdeContext): DevicePoolCompatibilityResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DevicePoolCompatibilityResult(entry, context);
    });
  return retVal;
};

// de_DevicePools omitted.

/**
 * deserializeAws_json1_1Devices
 */
const de_Devices = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Device(entry, context);
    });
  return retVal;
};

// de_DeviceSelectionResult omitted.

/**
 * deserializeAws_json1_1GetAccountSettingsResult
 */
const de_GetAccountSettingsResult = (output: any, context: __SerdeContext): GetAccountSettingsResult => {
  return take(output, {
    accountSettings: (_: any) => de_AccountSettings(_, context),
  }) as any;
};

// de_GetDeviceInstanceResult omitted.

/**
 * deserializeAws_json1_1GetDevicePoolCompatibilityResult
 */
const de_GetDevicePoolCompatibilityResult = (
  output: any,
  context: __SerdeContext
): GetDevicePoolCompatibilityResult => {
  return take(output, {
    compatibleDevices: (_: any) => de_DevicePoolCompatibilityResults(_, context),
    incompatibleDevices: (_: any) => de_DevicePoolCompatibilityResults(_, context),
  }) as any;
};

// de_GetDevicePoolResult omitted.

/**
 * deserializeAws_json1_1GetDeviceResult
 */
const de_GetDeviceResult = (output: any, context: __SerdeContext): GetDeviceResult => {
  return take(output, {
    device: (_: any) => de_Device(_, context),
  }) as any;
};

// de_GetInstanceProfileResult omitted.

/**
 * deserializeAws_json1_1GetJobResult
 */
const de_GetJobResult = (output: any, context: __SerdeContext): GetJobResult => {
  return take(output, {
    job: (_: any) => de_Job(_, context),
  }) as any;
};

// de_GetNetworkProfileResult omitted.

/**
 * deserializeAws_json1_1GetOfferingStatusResult
 */
const de_GetOfferingStatusResult = (output: any, context: __SerdeContext): GetOfferingStatusResult => {
  return take(output, {
    current: (_: any) => de_OfferingStatusMap(_, context),
    nextPeriod: (_: any) => de_OfferingStatusMap(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetProjectResult
 */
const de_GetProjectResult = (output: any, context: __SerdeContext): GetProjectResult => {
  return take(output, {
    project: (_: any) => de_Project(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRemoteAccessSessionResult
 */
const de_GetRemoteAccessSessionResult = (output: any, context: __SerdeContext): GetRemoteAccessSessionResult => {
  return take(output, {
    remoteAccessSession: (_: any) => de_RemoteAccessSession(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetRunResult
 */
const de_GetRunResult = (output: any, context: __SerdeContext): GetRunResult => {
  return take(output, {
    run: (_: any) => de_Run(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetSuiteResult
 */
const de_GetSuiteResult = (output: any, context: __SerdeContext): GetSuiteResult => {
  return take(output, {
    suite: (_: any) => de_Suite(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTestGridProjectResult
 */
const de_GetTestGridProjectResult = (output: any, context: __SerdeContext): GetTestGridProjectResult => {
  return take(output, {
    testGridProject: (_: any) => de_TestGridProject(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTestGridSessionResult
 */
const de_GetTestGridSessionResult = (output: any, context: __SerdeContext): GetTestGridSessionResult => {
  return take(output, {
    testGridSession: (_: any) => de_TestGridSession(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetTestResult
 */
const de_GetTestResult = (output: any, context: __SerdeContext): GetTestResult => {
  return take(output, {
    test: (_: any) => de_Test(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetUploadResult
 */
const de_GetUploadResult = (output: any, context: __SerdeContext): GetUploadResult => {
  return take(output, {
    upload: (_: any) => de_Upload(_, context),
  }) as any;
};

// de_GetVPCEConfigurationResult omitted.

// de_IdempotencyException omitted.

// de_IncompatibilityMessage omitted.

// de_IncompatibilityMessages omitted.

/**
 * deserializeAws_json1_1InstallToRemoteAccessSessionResult
 */
const de_InstallToRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): InstallToRemoteAccessSessionResult => {
  return take(output, {
    appUpload: (_: any) => de_Upload(_, context),
  }) as any;
};

// de_InstanceLabels omitted.

// de_InstanceProfile omitted.

// de_InstanceProfiles omitted.

// de_InternalServiceException omitted.

// de_InvalidOperationException omitted.

// de_IosPaths omitted.

/**
 * deserializeAws_json1_1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return take(output, {
    arn: __expectString,
    counters: _json,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    device: (_: any) => de_Device(_, context),
    deviceMinutes: (_: any) => de_DeviceMinutes(_, context),
    instanceArn: __expectString,
    message: __expectString,
    name: __expectString,
    result: __expectString,
    started: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    stopped: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
    videoCapture: __expectBoolean,
    videoEndpoint: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Jobs
 */
const de_Jobs = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Job(entry, context);
    });
  return retVal;
};

// de_LimitExceededException omitted.

// de_ListArtifactsResult omitted.

// de_ListDeviceInstancesResult omitted.

// de_ListDevicePoolsResult omitted.

/**
 * deserializeAws_json1_1ListDevicesResult
 */
const de_ListDevicesResult = (output: any, context: __SerdeContext): ListDevicesResult => {
  return take(output, {
    devices: (_: any) => de_Devices(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListInstanceProfilesResult omitted.

/**
 * deserializeAws_json1_1ListJobsResult
 */
const de_ListJobsResult = (output: any, context: __SerdeContext): ListJobsResult => {
  return take(output, {
    jobs: (_: any) => de_Jobs(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListNetworkProfilesResult omitted.

// de_ListOfferingPromotionsResult omitted.

/**
 * deserializeAws_json1_1ListOfferingsResult
 */
const de_ListOfferingsResult = (output: any, context: __SerdeContext): ListOfferingsResult => {
  return take(output, {
    nextToken: __expectString,
    offerings: (_: any) => de_Offerings(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListOfferingTransactionsResult
 */
const de_ListOfferingTransactionsResult = (output: any, context: __SerdeContext): ListOfferingTransactionsResult => {
  return take(output, {
    nextToken: __expectString,
    offeringTransactions: (_: any) => de_OfferingTransactions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListProjectsResult
 */
const de_ListProjectsResult = (output: any, context: __SerdeContext): ListProjectsResult => {
  return take(output, {
    nextToken: __expectString,
    projects: (_: any) => de_Projects(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRemoteAccessSessionsResult
 */
const de_ListRemoteAccessSessionsResult = (output: any, context: __SerdeContext): ListRemoteAccessSessionsResult => {
  return take(output, {
    nextToken: __expectString,
    remoteAccessSessions: (_: any) => de_RemoteAccessSessions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListRunsResult
 */
const de_ListRunsResult = (output: any, context: __SerdeContext): ListRunsResult => {
  return take(output, {
    nextToken: __expectString,
    runs: (_: any) => de_Runs(_, context),
  }) as any;
};

// de_ListSamplesResult omitted.

/**
 * deserializeAws_json1_1ListSuitesResult
 */
const de_ListSuitesResult = (output: any, context: __SerdeContext): ListSuitesResult => {
  return take(output, {
    nextToken: __expectString,
    suites: (_: any) => de_Suites(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListTestGridProjectsResult
 */
const de_ListTestGridProjectsResult = (output: any, context: __SerdeContext): ListTestGridProjectsResult => {
  return take(output, {
    nextToken: __expectString,
    testGridProjects: (_: any) => de_TestGridProjects(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTestGridSessionActionsResult
 */
const de_ListTestGridSessionActionsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionActionsResult => {
  return take(output, {
    actions: (_: any) => de_TestGridSessionActions(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListTestGridSessionArtifactsResult omitted.

/**
 * deserializeAws_json1_1ListTestGridSessionsResult
 */
const de_ListTestGridSessionsResult = (output: any, context: __SerdeContext): ListTestGridSessionsResult => {
  return take(output, {
    nextToken: __expectString,
    testGridSessions: (_: any) => de_TestGridSessions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListTestsResult
 */
const de_ListTestsResult = (output: any, context: __SerdeContext): ListTestsResult => {
  return take(output, {
    nextToken: __expectString,
    tests: (_: any) => de_Tests(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListUniqueProblemsResult
 */
const de_ListUniqueProblemsResult = (output: any, context: __SerdeContext): ListUniqueProblemsResult => {
  return take(output, {
    nextToken: __expectString,
    uniqueProblems: (_: any) => de_UniqueProblemsByExecutionResultMap(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListUploadsResult
 */
const de_ListUploadsResult = (output: any, context: __SerdeContext): ListUploadsResult => {
  return take(output, {
    nextToken: __expectString,
    uploads: (_: any) => de_Uploads(_, context),
  }) as any;
};

// de_ListVPCEConfigurationsResult omitted.

/**
 * deserializeAws_json1_1Location
 */
const de_Location = (output: any, context: __SerdeContext): Location => {
  return take(output, {
    latitude: __limitedParseDouble,
    longitude: __limitedParseDouble,
  }) as any;
};

// de_MaxSlotMap omitted.

/**
 * deserializeAws_json1_1MonetaryAmount
 */
const de_MonetaryAmount = (output: any, context: __SerdeContext): MonetaryAmount => {
  return take(output, {
    amount: __limitedParseDouble,
    currencyCode: __expectString,
  }) as any;
};

// de_NetworkProfile omitted.

// de_NetworkProfiles omitted.

// de_NotEligibleException omitted.

// de_NotFoundException omitted.

/**
 * deserializeAws_json1_1Offering
 */
const de_Offering = (output: any, context: __SerdeContext): Offering => {
  return take(output, {
    description: __expectString,
    id: __expectString,
    platform: __expectString,
    recurringCharges: (_: any) => de_RecurringCharges(_, context),
    type: __expectString,
  }) as any;
};

// de_OfferingPromotion omitted.

// de_OfferingPromotions omitted.

/**
 * deserializeAws_json1_1Offerings
 */
const de_Offerings = (output: any, context: __SerdeContext): Offering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Offering(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OfferingStatus
 */
const de_OfferingStatus = (output: any, context: __SerdeContext): OfferingStatus => {
  return take(output, {
    effectiveOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    offering: (_: any) => de_Offering(_, context),
    quantity: __expectInt32,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OfferingStatusMap
 */
const de_OfferingStatusMap = (output: any, context: __SerdeContext): Record<string, OfferingStatus> => {
  return Object.entries(output).reduce((acc: Record<string, OfferingStatus>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_OfferingStatus(value, context);
    return acc;
  }, {} as Record<string, OfferingStatus>);
};

/**
 * deserializeAws_json1_1OfferingTransaction
 */
const de_OfferingTransaction = (output: any, context: __SerdeContext): OfferingTransaction => {
  return take(output, {
    cost: (_: any) => de_MonetaryAmount(_, context),
    createdOn: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    offeringPromotionId: __expectString,
    offeringStatus: (_: any) => de_OfferingStatus(_, context),
    transactionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1OfferingTransactions
 */
const de_OfferingTransactions = (output: any, context: __SerdeContext): OfferingTransaction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OfferingTransaction(entry, context);
    });
  return retVal;
};

// de_PackageIds omitted.

/**
 * deserializeAws_json1_1Problem
 */
const de_Problem = (output: any, context: __SerdeContext): Problem => {
  return take(output, {
    device: (_: any) => de_Device(_, context),
    job: _json,
    message: __expectString,
    result: __expectString,
    run: _json,
    suite: _json,
    test: _json,
  }) as any;
};

// de_ProblemDetail omitted.

/**
 * deserializeAws_json1_1Problems
 */
const de_Problems = (output: any, context: __SerdeContext): Problem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Problem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Project
 */
const de_Project = (output: any, context: __SerdeContext): Project => {
  return take(output, {
    arn: __expectString,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultJobTimeoutMinutes: __expectInt32,
    name: __expectString,
    vpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1Projects
 */
const de_Projects = (output: any, context: __SerdeContext): Project[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Project(entry, context);
    });
  return retVal;
};

// de_PurchasedDevicesMap omitted.

/**
 * deserializeAws_json1_1PurchaseOfferingResult
 */
const de_PurchaseOfferingResult = (output: any, context: __SerdeContext): PurchaseOfferingResult => {
  return take(output, {
    offeringTransaction: (_: any) => de_OfferingTransaction(_, context),
  }) as any;
};

// de_Radios omitted.

/**
 * deserializeAws_json1_1RecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return take(output, {
    cost: (_: any) => de_MonetaryAmount(_, context),
    frequency: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1RecurringCharges
 */
const de_RecurringCharges = (output: any, context: __SerdeContext): RecurringCharge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecurringCharge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemoteAccessSession
 */
const de_RemoteAccessSession = (output: any, context: __SerdeContext): RemoteAccessSession => {
  return take(output, {
    arn: __expectString,
    billingMethod: __expectString,
    clientId: __expectString,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    device: (_: any) => de_Device(_, context),
    deviceMinutes: (_: any) => de_DeviceMinutes(_, context),
    deviceUdid: __expectString,
    endpoint: __expectString,
    hostAddress: __expectString,
    instanceArn: __expectString,
    interactionMode: __expectString,
    message: __expectString,
    name: __expectString,
    remoteDebugEnabled: __expectBoolean,
    remoteRecordAppArn: __expectString,
    remoteRecordEnabled: __expectBoolean,
    result: __expectString,
    skipAppResign: __expectBoolean,
    started: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    stopped: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    vpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1RemoteAccessSessions
 */
const de_RemoteAccessSessions = (output: any, context: __SerdeContext): RemoteAccessSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RemoteAccessSession(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RenewOfferingResult
 */
const de_RenewOfferingResult = (output: any, context: __SerdeContext): RenewOfferingResult => {
  return take(output, {
    offeringTransaction: (_: any) => de_OfferingTransaction(_, context),
  }) as any;
};

// de_Resolution omitted.

// de_Rule omitted.

// de_Rules omitted.

/**
 * deserializeAws_json1_1Run
 */
const de_Run = (output: any, context: __SerdeContext): Run => {
  return take(output, {
    appUpload: __expectString,
    arn: __expectString,
    billingMethod: __expectString,
    completedJobs: __expectInt32,
    counters: _json,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customerArtifactPaths: _json,
    deviceMinutes: (_: any) => de_DeviceMinutes(_, context),
    devicePoolArn: __expectString,
    deviceSelectionResult: _json,
    eventCount: __expectInt32,
    jobTimeoutMinutes: __expectInt32,
    locale: __expectString,
    location: (_: any) => de_Location(_, context),
    message: __expectString,
    name: __expectString,
    networkProfile: _json,
    parsingResultUrl: __expectString,
    platform: __expectString,
    radios: _json,
    result: __expectString,
    resultCode: __expectString,
    seed: __expectInt32,
    skipAppResign: __expectBoolean,
    started: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    stopped: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    testSpecArn: __expectString,
    totalJobs: __expectInt32,
    type: __expectString,
    vpcConfig: _json,
    webUrl: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Runs
 */
const de_Runs = (output: any, context: __SerdeContext): Run[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Run(entry, context);
    });
  return retVal;
};

// de_Sample omitted.

// de_Samples omitted.

/**
 * deserializeAws_json1_1ScheduleRunResult
 */
const de_ScheduleRunResult = (output: any, context: __SerdeContext): ScheduleRunResult => {
  return take(output, {
    run: (_: any) => de_Run(_, context),
  }) as any;
};

// de_SecurityGroupIds omitted.

// de_ServiceAccountException omitted.

/**
 * deserializeAws_json1_1StopJobResult
 */
const de_StopJobResult = (output: any, context: __SerdeContext): StopJobResult => {
  return take(output, {
    job: (_: any) => de_Job(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopRemoteAccessSessionResult
 */
const de_StopRemoteAccessSessionResult = (output: any, context: __SerdeContext): StopRemoteAccessSessionResult => {
  return take(output, {
    remoteAccessSession: (_: any) => de_RemoteAccessSession(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StopRunResult
 */
const de_StopRunResult = (output: any, context: __SerdeContext): StopRunResult => {
  return take(output, {
    run: (_: any) => de_Run(_, context),
  }) as any;
};

// de_SubnetIds omitted.

/**
 * deserializeAws_json1_1Suite
 */
const de_Suite = (output: any, context: __SerdeContext): Suite => {
  return take(output, {
    arn: __expectString,
    counters: _json,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deviceMinutes: (_: any) => de_DeviceMinutes(_, context),
    message: __expectString,
    name: __expectString,
    result: __expectString,
    started: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    stopped: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Suites
 */
const de_Suites = (output: any, context: __SerdeContext): Suite[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Suite(entry, context);
    });
  return retVal;
};

// de_Tag omitted.

// de_TagList omitted.

// de_TagOperationException omitted.

// de_TagPolicyException omitted.

// de_TagResourceResponse omitted.

/**
 * deserializeAws_json1_1Test
 */
const de_Test = (output: any, context: __SerdeContext): Test => {
  return take(output, {
    arn: __expectString,
    counters: _json,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deviceMinutes: (_: any) => de_DeviceMinutes(_, context),
    message: __expectString,
    name: __expectString,
    result: __expectString,
    started: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    stopped: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TestGridProject
 */
const de_TestGridProject = (output: any, context: __SerdeContext): TestGridProject => {
  return take(output, {
    arn: __expectString,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    name: __expectString,
    vpcConfig: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1TestGridProjects
 */
const de_TestGridProjects = (output: any, context: __SerdeContext): TestGridProject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestGridProject(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestGridSession
 */
const de_TestGridSession = (output: any, context: __SerdeContext): TestGridSession => {
  return take(output, {
    arn: __expectString,
    billingMinutes: __limitedParseDouble,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ended: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    seleniumProperties: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TestGridSessionAction
 */
const de_TestGridSessionAction = (output: any, context: __SerdeContext): TestGridSessionAction => {
  return take(output, {
    action: __expectString,
    duration: __expectLong,
    requestMethod: __expectString,
    started: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    statusCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TestGridSessionActions
 */
const de_TestGridSessionActions = (output: any, context: __SerdeContext): TestGridSessionAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestGridSessionAction(entry, context);
    });
  return retVal;
};

// de_TestGridSessionArtifact omitted.

// de_TestGridSessionArtifacts omitted.

/**
 * deserializeAws_json1_1TestGridSessions
 */
const de_TestGridSessions = (output: any, context: __SerdeContext): TestGridSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestGridSession(entry, context);
    });
  return retVal;
};

// de_TestGridVpcConfig omitted.

/**
 * deserializeAws_json1_1Tests
 */
const de_Tests = (output: any, context: __SerdeContext): Test[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Test(entry, context);
    });
  return retVal;
};

// de_TooManyTagsException omitted.

/**
 * deserializeAws_json1_1TrialMinutes
 */
const de_TrialMinutes = (output: any, context: __SerdeContext): TrialMinutes => {
  return take(output, {
    remaining: __limitedParseDouble,
    total: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1UniqueProblem
 */
const de_UniqueProblem = (output: any, context: __SerdeContext): UniqueProblem => {
  return take(output, {
    message: __expectString,
    problems: (_: any) => de_Problems(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UniqueProblems
 */
const de_UniqueProblems = (output: any, context: __SerdeContext): UniqueProblem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UniqueProblem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1UniqueProblemsByExecutionResultMap
 */
const de_UniqueProblemsByExecutionResultMap = (
  output: any,
  context: __SerdeContext
): Partial<Record<ExecutionResult, UniqueProblem[]>> => {
  return Object.entries(output).reduce(
    (acc: Partial<Record<ExecutionResult, UniqueProblem[]>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as ExecutionResult] = de_UniqueProblems(value, context);
      return acc;
    },
    {} as Partial<Record<ExecutionResult, UniqueProblem[]>>
  );
};

// de_UntagResourceResponse omitted.

// de_UpdateDeviceInstanceResult omitted.

// de_UpdateDevicePoolResult omitted.

// de_UpdateInstanceProfileResult omitted.

// de_UpdateNetworkProfileResult omitted.

/**
 * deserializeAws_json1_1UpdateProjectResult
 */
const de_UpdateProjectResult = (output: any, context: __SerdeContext): UpdateProjectResult => {
  return take(output, {
    project: (_: any) => de_Project(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateTestGridProjectResult
 */
const de_UpdateTestGridProjectResult = (output: any, context: __SerdeContext): UpdateTestGridProjectResult => {
  return take(output, {
    testGridProject: (_: any) => de_TestGridProject(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateUploadResult
 */
const de_UpdateUploadResult = (output: any, context: __SerdeContext): UpdateUploadResult => {
  return take(output, {
    upload: (_: any) => de_Upload(_, context),
  }) as any;
};

// de_UpdateVPCEConfigurationResult omitted.

/**
 * deserializeAws_json1_1Upload
 */
const de_Upload = (output: any, context: __SerdeContext): Upload => {
  return take(output, {
    arn: __expectString,
    category: __expectString,
    contentType: __expectString,
    created: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    message: __expectString,
    metadata: __expectString,
    name: __expectString,
    status: __expectString,
    type: __expectString,
    url: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Uploads
 */
const de_Uploads = (output: any, context: __SerdeContext): Upload[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Upload(entry, context);
    });
  return retVal;
};

// de_VpcConfig omitted.

// de_VPCEConfiguration omitted.

// de_VPCEConfigurations omitted.

// de_VpcSecurityGroupIds omitted.

// de_VpcSubnetIds omitted.

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
    "x-amz-target": `DeviceFarm_20150623.${operation}`,
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
