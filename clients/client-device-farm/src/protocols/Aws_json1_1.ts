// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
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
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  Artifact,
  CannotDeleteException,
  Counters,
  CPU,
  CreateDevicePoolRequest,
  CreateDevicePoolResult,
  CreateInstanceProfileRequest,
  CreateInstanceProfileResult,
  CreateNetworkProfileRequest,
  CreateNetworkProfileResult,
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
  CreateVPCEConfigurationResult,
  CustomerArtifactPaths,
  DeleteDevicePoolRequest,
  DeleteDevicePoolResult,
  DeleteInstanceProfileRequest,
  DeleteInstanceProfileResult,
  DeleteNetworkProfileRequest,
  DeleteNetworkProfileResult,
  DeleteProjectRequest,
  DeleteProjectResult,
  DeleteRemoteAccessSessionRequest,
  DeleteRemoteAccessSessionResult,
  DeleteRunRequest,
  DeleteRunResult,
  DeleteTestGridProjectRequest,
  DeleteTestGridProjectResult,
  DeleteUploadRequest,
  DeleteUploadResult,
  DeleteVPCEConfigurationRequest,
  DeleteVPCEConfigurationResult,
  Device,
  DeviceFilter,
  DeviceInstance,
  DeviceMinutes,
  DevicePlatform,
  DevicePool,
  DevicePoolCompatibilityResult,
  DeviceSelectionConfiguration,
  DeviceSelectionResult,
  ExecutionConfiguration,
  ExecutionResult,
  GetAccountSettingsRequest,
  GetAccountSettingsResult,
  GetDeviceInstanceRequest,
  GetDeviceInstanceResult,
  GetDevicePoolCompatibilityRequest,
  GetDevicePoolCompatibilityResult,
  GetDevicePoolRequest,
  GetDevicePoolResult,
  GetDeviceRequest,
  GetDeviceResult,
  GetInstanceProfileRequest,
  GetInstanceProfileResult,
  GetJobRequest,
  GetJobResult,
  GetNetworkProfileRequest,
  GetNetworkProfileResult,
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
  GetVPCEConfigurationResult,
  IdempotencyException,
  IncompatibilityMessage,
  InstallToRemoteAccessSessionRequest,
  InstallToRemoteAccessSessionResult,
  InstanceProfile,
  InternalServiceException,
  InvalidOperationException,
  Job,
  LimitExceededException,
  ListArtifactsRequest,
  ListArtifactsResult,
  ListDeviceInstancesRequest,
  ListDeviceInstancesResult,
  ListDevicePoolsRequest,
  ListDevicePoolsResult,
  ListDevicesRequest,
  ListDevicesResult,
  ListInstanceProfilesRequest,
  ListInstanceProfilesResult,
  ListJobsRequest,
  ListJobsResult,
  ListNetworkProfilesRequest,
  ListNetworkProfilesResult,
  ListOfferingPromotionsRequest,
  ListOfferingPromotionsResult,
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
  ListSamplesResult,
  ListSuitesRequest,
  ListSuitesResult,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTestGridProjectsRequest,
  ListTestGridProjectsResult,
  ListTestGridSessionActionsRequest,
  ListTestGridSessionActionsResult,
  ListTestGridSessionArtifactsRequest,
  ListTestGridSessionArtifactsResult,
  ListTestGridSessionsRequest,
  ListTestGridSessionsResult,
  ListTestsRequest,
  ListTestsResult,
  ListUniqueProblemsRequest,
  ListUniqueProblemsResult,
  ListUploadsRequest,
  ListUploadsResult,
  ListVPCEConfigurationsRequest,
  ListVPCEConfigurationsResult,
  Location,
  MonetaryAmount,
  NetworkProfile,
  NotEligibleException,
  NotFoundException,
  Offering,
  OfferingPromotion,
  OfferingStatus,
  OfferingTransaction,
  Problem,
  ProblemDetail,
  Project,
  PurchaseOfferingRequest,
  PurchaseOfferingResult,
  Radios,
  RecurringCharge,
  RemoteAccessSession,
  RenewOfferingRequest,
  RenewOfferingResult,
  Resolution,
  Rule,
  Run,
  Sample,
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
  TagResourceResponse,
  Test,
  TestGridProject,
  TestGridSession,
  TestGridSessionAction,
  TestGridSessionArtifact,
  TestGridVpcConfig,
  TooManyTagsException,
  TrialMinutes,
  UniqueProblem,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDeviceInstanceRequest,
  UpdateDeviceInstanceResult,
  UpdateDevicePoolRequest,
  UpdateDevicePoolResult,
  UpdateInstanceProfileRequest,
  UpdateInstanceProfileResult,
  UpdateNetworkProfileRequest,
  UpdateNetworkProfileResult,
  UpdateProjectRequest,
  UpdateProjectResult,
  UpdateTestGridProjectRequest,
  UpdateTestGridProjectResult,
  UpdateUploadRequest,
  UpdateUploadResult,
  UpdateVPCEConfigurationRequest,
  UpdateVPCEConfigurationResult,
  Upload,
  VpcConfig,
  VPCEConfiguration,
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
  body = JSON.stringify(se_CreateDevicePoolRequest(input, context));
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
  body = JSON.stringify(se_CreateInstanceProfileRequest(input, context));
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
  body = JSON.stringify(se_CreateNetworkProfileRequest(input, context));
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
  body = JSON.stringify(se_CreateProjectRequest(input, context));
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
  body = JSON.stringify(se_CreateRemoteAccessSessionRequest(input, context));
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
  body = JSON.stringify(se_CreateTestGridProjectRequest(input, context));
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
  body = JSON.stringify(se_CreateTestGridUrlRequest(input, context));
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
  body = JSON.stringify(se_CreateUploadRequest(input, context));
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
  body = JSON.stringify(se_CreateVPCEConfigurationRequest(input, context));
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
  body = JSON.stringify(se_DeleteDevicePoolRequest(input, context));
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
  body = JSON.stringify(se_DeleteInstanceProfileRequest(input, context));
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
  body = JSON.stringify(se_DeleteNetworkProfileRequest(input, context));
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
  body = JSON.stringify(se_DeleteProjectRequest(input, context));
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
  body = JSON.stringify(se_DeleteRemoteAccessSessionRequest(input, context));
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
  body = JSON.stringify(se_DeleteRunRequest(input, context));
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
  body = JSON.stringify(se_DeleteTestGridProjectRequest(input, context));
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
  body = JSON.stringify(se_DeleteUploadRequest(input, context));
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
  body = JSON.stringify(se_DeleteVPCEConfigurationRequest(input, context));
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
  body = JSON.stringify(se_GetAccountSettingsRequest(input, context));
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
  body = JSON.stringify(se_GetDeviceRequest(input, context));
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
  body = JSON.stringify(se_GetDeviceInstanceRequest(input, context));
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
  body = JSON.stringify(se_GetDevicePoolRequest(input, context));
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
  body = JSON.stringify(se_GetInstanceProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetJobCommand
 */
export const se_GetJobCommand = async (input: GetJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetJob");
  let body: any;
  body = JSON.stringify(se_GetJobRequest(input, context));
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
  body = JSON.stringify(se_GetNetworkProfileRequest(input, context));
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
  body = JSON.stringify(se_GetOfferingStatusRequest(input, context));
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
  body = JSON.stringify(se_GetProjectRequest(input, context));
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
  body = JSON.stringify(se_GetRemoteAccessSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetRunCommand
 */
export const se_GetRunCommand = async (input: GetRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRun");
  let body: any;
  body = JSON.stringify(se_GetRunRequest(input, context));
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
  body = JSON.stringify(se_GetSuiteRequest(input, context));
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
  body = JSON.stringify(se_GetTestRequest(input, context));
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
  body = JSON.stringify(se_GetTestGridProjectRequest(input, context));
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
  body = JSON.stringify(se_GetTestGridSessionRequest(input, context));
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
  body = JSON.stringify(se_GetUploadRequest(input, context));
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
  body = JSON.stringify(se_GetVPCEConfigurationRequest(input, context));
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
  body = JSON.stringify(se_InstallToRemoteAccessSessionRequest(input, context));
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
  body = JSON.stringify(se_ListArtifactsRequest(input, context));
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
  body = JSON.stringify(se_ListDeviceInstancesRequest(input, context));
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
  body = JSON.stringify(se_ListDevicePoolsRequest(input, context));
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
  body = JSON.stringify(se_ListDevicesRequest(input, context));
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
  body = JSON.stringify(se_ListInstanceProfilesRequest(input, context));
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
  body = JSON.stringify(se_ListJobsRequest(input, context));
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
  body = JSON.stringify(se_ListNetworkProfilesRequest(input, context));
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
  body = JSON.stringify(se_ListOfferingPromotionsRequest(input, context));
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
  body = JSON.stringify(se_ListOfferingsRequest(input, context));
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
  body = JSON.stringify(se_ListOfferingTransactionsRequest(input, context));
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
  body = JSON.stringify(se_ListProjectsRequest(input, context));
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
  body = JSON.stringify(se_ListRemoteAccessSessionsRequest(input, context));
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
  body = JSON.stringify(se_ListRunsRequest(input, context));
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
  body = JSON.stringify(se_ListSamplesRequest(input, context));
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
  body = JSON.stringify(se_ListSuitesRequest(input, context));
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
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
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
  body = JSON.stringify(se_ListTestGridProjectsRequest(input, context));
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
  body = JSON.stringify(se_ListTestGridSessionActionsRequest(input, context));
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
  body = JSON.stringify(se_ListTestGridSessionArtifactsRequest(input, context));
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
  body = JSON.stringify(se_ListTestsRequest(input, context));
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
  body = JSON.stringify(se_ListUniqueProblemsRequest(input, context));
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
  body = JSON.stringify(se_ListUploadsRequest(input, context));
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
  body = JSON.stringify(se_ListVPCEConfigurationsRequest(input, context));
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
  body = JSON.stringify(se_PurchaseOfferingRequest(input, context));
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
  body = JSON.stringify(se_RenewOfferingRequest(input, context));
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
  body = JSON.stringify(se_StopJobRequest(input, context));
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
  body = JSON.stringify(se_StopRemoteAccessSessionRequest(input, context));
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
  body = JSON.stringify(se_StopRunRequest(input, context));
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
  body = JSON.stringify(se_TagResourceRequest(input, context));
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
  body = JSON.stringify(se_UntagResourceRequest(input, context));
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
  body = JSON.stringify(se_UpdateDeviceInstanceRequest(input, context));
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
  body = JSON.stringify(se_UpdateDevicePoolRequest(input, context));
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
  body = JSON.stringify(se_UpdateInstanceProfileRequest(input, context));
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
  body = JSON.stringify(se_UpdateNetworkProfileRequest(input, context));
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
  body = JSON.stringify(se_UpdateProjectRequest(input, context));
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
  body = JSON.stringify(se_UpdateTestGridProjectRequest(input, context));
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
  body = JSON.stringify(se_UpdateUploadRequest(input, context));
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
  body = JSON.stringify(se_UpdateVPCEConfigurationRequest(input, context));
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
  contents = de_CreateDevicePoolResult(data, context);
  const response: CreateDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateInstanceProfileResult(data, context);
  const response: CreateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateNetworkProfileResult(data, context);
  const response: CreateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateVPCEConfigurationResult(data, context);
  const response: CreateVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteDevicePoolResult(data, context);
  const response: DeleteDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteInstanceProfileResult(data, context);
  const response: DeleteInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteNetworkProfileResult(data, context);
  const response: DeleteNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteProjectResult(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteRemoteAccessSessionResult(data, context);
  const response: DeleteRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteRunResult(data, context);
  const response: DeleteRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteTestGridProjectResult(data, context);
  const response: DeleteTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteUploadResult(data, context);
  const response: DeleteUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteVPCEConfigurationResult(data, context);
  const response: DeleteVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetDeviceInstanceResult(data, context);
  const response: GetDeviceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetDevicePoolResult(data, context);
  const response: GetDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetInstanceProfileResult(data, context);
  const response: GetInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetNetworkProfileResult(data, context);
  const response: GetNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetVPCEConfigurationResult(data, context);
  const response: GetVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListArtifactsResult(data, context);
  const response: ListArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListDeviceInstancesResult(data, context);
  const response: ListDeviceInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListDevicePoolsResult(data, context);
  const response: ListDevicePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListInstanceProfilesResult(data, context);
  const response: ListInstanceProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListNetworkProfilesResult(data, context);
  const response: ListNetworkProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListOfferingPromotionsResult(data, context);
  const response: ListOfferingPromotionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListSamplesResult(data, context);
  const response: ListSamplesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTestGridSessionArtifactsResult(data, context);
  const response: ListTestGridSessionArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListVPCEConfigurationsResult(data, context);
  const response: ListVPCEConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateDeviceInstanceResult(data, context);
  const response: UpdateDeviceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateDevicePoolResult(data, context);
  const response: UpdateDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateInstanceProfileResult(data, context);
  const response: UpdateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateNetworkProfileResult(data, context);
  const response: UpdateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateVPCEConfigurationResult(data, context);
  const response: UpdateVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ArgumentExceptionRes
 */
const de_ArgumentExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ArgumentException(body, context);
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
  const deserialized: any = de_CannotDeleteException(body, context);
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
  const deserialized: any = de_IdempotencyException(body, context);
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
  const deserialized: any = de_InternalServiceException(body, context);
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
  const deserialized: any = de_InvalidOperationException(body, context);
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
  const deserialized: any = de_LimitExceededException(body, context);
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
  const deserialized: any = de_NotEligibleException(body, context);
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
  const deserialized: any = de_NotFoundException(body, context);
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
  const deserialized: any = de_ServiceAccountException(body, context);
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
  const deserialized: any = de_TagOperationException(body, context);
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
  const deserialized: any = de_TagPolicyException(body, context);
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
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AmazonResourceNames
 */
const se_AmazonResourceNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AndroidPaths
 */
const se_AndroidPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CreateDevicePoolRequest
 */
const se_CreateDevicePoolRequest = (input: CreateDevicePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.maxDevices != null && { maxDevices: input.maxDevices }),
    ...(input.name != null && { name: input.name }),
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.rules != null && { rules: se_Rules(input.rules, context) }),
  };
};

/**
 * serializeAws_json1_1CreateInstanceProfileRequest
 */
const se_CreateInstanceProfileRequest = (input: CreateInstanceProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.excludeAppPackagesFromCleanup != null && {
      excludeAppPackagesFromCleanup: se_PackageIds(input.excludeAppPackagesFromCleanup, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.packageCleanup != null && { packageCleanup: input.packageCleanup }),
    ...(input.rebootAfterUse != null && { rebootAfterUse: input.rebootAfterUse }),
  };
};

/**
 * serializeAws_json1_1CreateNetworkProfileRequest
 */
const se_CreateNetworkProfileRequest = (input: CreateNetworkProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.downlinkBandwidthBits != null && { downlinkBandwidthBits: input.downlinkBandwidthBits }),
    ...(input.downlinkDelayMs != null && { downlinkDelayMs: input.downlinkDelayMs }),
    ...(input.downlinkJitterMs != null && { downlinkJitterMs: input.downlinkJitterMs }),
    ...(input.downlinkLossPercent != null && { downlinkLossPercent: input.downlinkLossPercent }),
    ...(input.name != null && { name: input.name }),
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.type != null && { type: input.type }),
    ...(input.uplinkBandwidthBits != null && { uplinkBandwidthBits: input.uplinkBandwidthBits }),
    ...(input.uplinkDelayMs != null && { uplinkDelayMs: input.uplinkDelayMs }),
    ...(input.uplinkJitterMs != null && { uplinkJitterMs: input.uplinkJitterMs }),
    ...(input.uplinkLossPercent != null && { uplinkLossPercent: input.uplinkLossPercent }),
  };
};

/**
 * serializeAws_json1_1CreateProjectRequest
 */
const se_CreateProjectRequest = (input: CreateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.defaultJobTimeoutMinutes != null && { defaultJobTimeoutMinutes: input.defaultJobTimeoutMinutes }),
    ...(input.name != null && { name: input.name }),
    ...(input.vpcConfig != null && { vpcConfig: se_VpcConfig(input.vpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateRemoteAccessSessionConfiguration
 */
const se_CreateRemoteAccessSessionConfiguration = (
  input: CreateRemoteAccessSessionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.billingMethod != null && { billingMethod: input.billingMethod }),
    ...(input.vpceConfigurationArns != null && {
      vpceConfigurationArns: se_AmazonResourceNames(input.vpceConfigurationArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateRemoteAccessSessionRequest
 */
const se_CreateRemoteAccessSessionRequest = (input: CreateRemoteAccessSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.configuration != null && {
      configuration: se_CreateRemoteAccessSessionConfiguration(input.configuration, context),
    }),
    ...(input.deviceArn != null && { deviceArn: input.deviceArn }),
    ...(input.instanceArn != null && { instanceArn: input.instanceArn }),
    ...(input.interactionMode != null && { interactionMode: input.interactionMode }),
    ...(input.name != null && { name: input.name }),
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.remoteDebugEnabled != null && { remoteDebugEnabled: input.remoteDebugEnabled }),
    ...(input.remoteRecordAppArn != null && { remoteRecordAppArn: input.remoteRecordAppArn }),
    ...(input.remoteRecordEnabled != null && { remoteRecordEnabled: input.remoteRecordEnabled }),
    ...(input.skipAppResign != null && { skipAppResign: input.skipAppResign }),
    ...(input.sshPublicKey != null && { sshPublicKey: input.sshPublicKey }),
  };
};

/**
 * serializeAws_json1_1CreateTestGridProjectRequest
 */
const se_CreateTestGridProjectRequest = (input: CreateTestGridProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.vpcConfig != null && { vpcConfig: se_TestGridVpcConfig(input.vpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1CreateTestGridUrlRequest
 */
const se_CreateTestGridUrlRequest = (input: CreateTestGridUrlRequest, context: __SerdeContext): any => {
  return {
    ...(input.expiresInSeconds != null && { expiresInSeconds: input.expiresInSeconds }),
    ...(input.projectArn != null && { projectArn: input.projectArn }),
  };
};

/**
 * serializeAws_json1_1CreateUploadRequest
 */
const se_CreateUploadRequest = (input: CreateUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.name != null && { name: input.name }),
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1CreateVPCEConfigurationRequest
 */
const se_CreateVPCEConfigurationRequest = (input: CreateVPCEConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.serviceDnsName != null && { serviceDnsName: input.serviceDnsName }),
    ...(input.vpceConfigurationDescription != null && {
      vpceConfigurationDescription: input.vpceConfigurationDescription,
    }),
    ...(input.vpceConfigurationName != null && { vpceConfigurationName: input.vpceConfigurationName }),
    ...(input.vpceServiceName != null && { vpceServiceName: input.vpceServiceName }),
  };
};

/**
 * serializeAws_json1_1CustomerArtifactPaths
 */
const se_CustomerArtifactPaths = (input: CustomerArtifactPaths, context: __SerdeContext): any => {
  return {
    ...(input.androidPaths != null && { androidPaths: se_AndroidPaths(input.androidPaths, context) }),
    ...(input.deviceHostPaths != null && { deviceHostPaths: se_DeviceHostPaths(input.deviceHostPaths, context) }),
    ...(input.iosPaths != null && { iosPaths: se_IosPaths(input.iosPaths, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteDevicePoolRequest
 */
const se_DeleteDevicePoolRequest = (input: DeleteDevicePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteInstanceProfileRequest
 */
const se_DeleteInstanceProfileRequest = (input: DeleteInstanceProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteNetworkProfileRequest
 */
const se_DeleteNetworkProfileRequest = (input: DeleteNetworkProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteProjectRequest
 */
const se_DeleteProjectRequest = (input: DeleteProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteRemoteAccessSessionRequest
 */
const se_DeleteRemoteAccessSessionRequest = (input: DeleteRemoteAccessSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteRunRequest
 */
const se_DeleteRunRequest = (input: DeleteRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteTestGridProjectRequest
 */
const se_DeleteTestGridProjectRequest = (input: DeleteTestGridProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.projectArn != null && { projectArn: input.projectArn }),
  };
};

/**
 * serializeAws_json1_1DeleteUploadRequest
 */
const se_DeleteUploadRequest = (input: DeleteUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeleteVPCEConfigurationRequest
 */
const se_DeleteVPCEConfigurationRequest = (input: DeleteVPCEConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1DeviceFilter
 */
const se_DeviceFilter = (input: DeviceFilter, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_DeviceFilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_json1_1DeviceFilters
 */
const se_DeviceFilters = (input: DeviceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DeviceFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1DeviceFilterValues
 */
const se_DeviceFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeviceHostPaths
 */
const se_DeviceHostPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeviceSelectionConfiguration
 */
const se_DeviceSelectionConfiguration = (input: DeviceSelectionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_DeviceFilters(input.filters, context) }),
    ...(input.maxDevices != null && { maxDevices: input.maxDevices }),
  };
};

/**
 * serializeAws_json1_1ExecutionConfiguration
 */
const se_ExecutionConfiguration = (input: ExecutionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.accountsCleanup != null && { accountsCleanup: input.accountsCleanup }),
    ...(input.appPackagesCleanup != null && { appPackagesCleanup: input.appPackagesCleanup }),
    ...(input.jobTimeoutMinutes != null && { jobTimeoutMinutes: input.jobTimeoutMinutes }),
    ...(input.skipAppResign != null && { skipAppResign: input.skipAppResign }),
    ...(input.videoCapture != null && { videoCapture: input.videoCapture }),
  };
};

/**
 * serializeAws_json1_1GetAccountSettingsRequest
 */
const se_GetAccountSettingsRequest = (input: GetAccountSettingsRequest, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_1GetDeviceInstanceRequest
 */
const se_GetDeviceInstanceRequest = (input: GetDeviceInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetDevicePoolCompatibilityRequest
 */
const se_GetDevicePoolCompatibilityRequest = (
  input: GetDevicePoolCompatibilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.configuration != null && { configuration: se_ScheduleRunConfiguration(input.configuration, context) }),
    ...(input.devicePoolArn != null && { devicePoolArn: input.devicePoolArn }),
    ...(input.test != null && { test: se_ScheduleRunTest(input.test, context) }),
    ...(input.testType != null && { testType: input.testType }),
  };
};

/**
 * serializeAws_json1_1GetDevicePoolRequest
 */
const se_GetDevicePoolRequest = (input: GetDevicePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetDeviceRequest
 */
const se_GetDeviceRequest = (input: GetDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetInstanceProfileRequest
 */
const se_GetInstanceProfileRequest = (input: GetInstanceProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetJobRequest
 */
const se_GetJobRequest = (input: GetJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetNetworkProfileRequest
 */
const se_GetNetworkProfileRequest = (input: GetNetworkProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetOfferingStatusRequest
 */
const se_GetOfferingStatusRequest = (input: GetOfferingStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1GetProjectRequest
 */
const se_GetProjectRequest = (input: GetProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetRemoteAccessSessionRequest
 */
const se_GetRemoteAccessSessionRequest = (input: GetRemoteAccessSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetRunRequest
 */
const se_GetRunRequest = (input: GetRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetSuiteRequest
 */
const se_GetSuiteRequest = (input: GetSuiteRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetTestGridProjectRequest
 */
const se_GetTestGridProjectRequest = (input: GetTestGridProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.projectArn != null && { projectArn: input.projectArn }),
  };
};

/**
 * serializeAws_json1_1GetTestGridSessionRequest
 */
const se_GetTestGridSessionRequest = (input: GetTestGridSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.sessionArn != null && { sessionArn: input.sessionArn }),
    ...(input.sessionId != null && { sessionId: input.sessionId }),
  };
};

/**
 * serializeAws_json1_1GetTestRequest
 */
const se_GetTestRequest = (input: GetTestRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetUploadRequest
 */
const se_GetUploadRequest = (input: GetUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1GetVPCEConfigurationRequest
 */
const se_GetVPCEConfigurationRequest = (input: GetVPCEConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1InstallToRemoteAccessSessionRequest
 */
const se_InstallToRemoteAccessSessionRequest = (
  input: InstallToRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.remoteAccessSessionArn != null && { remoteAccessSessionArn: input.remoteAccessSessionArn }),
  };
};

/**
 * serializeAws_json1_1InstanceLabels
 */
const se_InstanceLabels = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1IosPaths
 */
const se_IosPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListArtifactsRequest
 */
const se_ListArtifactsRequest = (input: ListArtifactsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ListDeviceInstancesRequest
 */
const se_ListDeviceInstancesRequest = (input: ListDeviceInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListDevicePoolsRequest
 */
const se_ListDevicePoolsRequest = (input: ListDevicePoolsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ListDevicesRequest
 */
const se_ListDevicesRequest = (input: ListDevicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.filters != null && { filters: se_DeviceFilters(input.filters, context) }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListInstanceProfilesRequest
 */
const se_ListInstanceProfilesRequest = (input: ListInstanceProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListJobsRequest
 */
const se_ListJobsRequest = (input: ListJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListNetworkProfilesRequest
 */
const se_ListNetworkProfilesRequest = (input: ListNetworkProfilesRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ListOfferingPromotionsRequest
 */
const se_ListOfferingPromotionsRequest = (input: ListOfferingPromotionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListOfferingsRequest
 */
const se_ListOfferingsRequest = (input: ListOfferingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListOfferingTransactionsRequest
 */
const se_ListOfferingTransactionsRequest = (input: ListOfferingTransactionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListProjectsRequest
 */
const se_ListProjectsRequest = (input: ListProjectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListRemoteAccessSessionsRequest
 */
const se_ListRemoteAccessSessionsRequest = (input: ListRemoteAccessSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListRunsRequest
 */
const se_ListRunsRequest = (input: ListRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListSamplesRequest
 */
const se_ListSamplesRequest = (input: ListSamplesRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListSuitesRequest
 */
const se_ListSuitesRequest = (input: ListSuitesRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1ListTestGridProjectsRequest
 */
const se_ListTestGridProjectsRequest = (input: ListTestGridProjectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResult != null && { maxResult: input.maxResult }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListTestGridSessionActionsRequest
 */
const se_ListTestGridSessionActionsRequest = (
  input: ListTestGridSessionActionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResult != null && { maxResult: input.maxResult }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sessionArn != null && { sessionArn: input.sessionArn }),
  };
};

/**
 * serializeAws_json1_1ListTestGridSessionArtifactsRequest
 */
const se_ListTestGridSessionArtifactsRequest = (
  input: ListTestGridSessionArtifactsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResult != null && { maxResult: input.maxResult }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sessionArn != null && { sessionArn: input.sessionArn }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ListTestGridSessionsRequest
 */
const se_ListTestGridSessionsRequest = (input: ListTestGridSessionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.creationTimeAfter != null && { creationTimeAfter: Math.round(input.creationTimeAfter.getTime() / 1000) }),
    ...(input.creationTimeBefore != null && {
      creationTimeBefore: Math.round(input.creationTimeBefore.getTime() / 1000),
    }),
    ...(input.endTimeAfter != null && { endTimeAfter: Math.round(input.endTimeAfter.getTime() / 1000) }),
    ...(input.endTimeBefore != null && { endTimeBefore: Math.round(input.endTimeBefore.getTime() / 1000) }),
    ...(input.maxResult != null && { maxResult: input.maxResult }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.status != null && { status: input.status }),
  };
};

/**
 * serializeAws_json1_1ListTestsRequest
 */
const se_ListTestsRequest = (input: ListTestsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListUniqueProblemsRequest
 */
const se_ListUniqueProblemsRequest = (input: ListUniqueProblemsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1ListUploadsRequest
 */
const se_ListUploadsRequest = (input: ListUploadsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1ListVPCEConfigurationsRequest
 */
const se_ListVPCEConfigurationsRequest = (input: ListVPCEConfigurationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_1Location
 */
const se_Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.latitude != null && { latitude: __serializeFloat(input.latitude) }),
    ...(input.longitude != null && { longitude: __serializeFloat(input.longitude) }),
  };
};

/**
 * serializeAws_json1_1PackageIds
 */
const se_PackageIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1PurchaseOfferingRequest
 */
const se_PurchaseOfferingRequest = (input: PurchaseOfferingRequest, context: __SerdeContext): any => {
  return {
    ...(input.offeringId != null && { offeringId: input.offeringId }),
    ...(input.offeringPromotionId != null && { offeringPromotionId: input.offeringPromotionId }),
    ...(input.quantity != null && { quantity: input.quantity }),
  };
};

/**
 * serializeAws_json1_1Radios
 */
const se_Radios = (input: Radios, context: __SerdeContext): any => {
  return {
    ...(input.bluetooth != null && { bluetooth: input.bluetooth }),
    ...(input.gps != null && { gps: input.gps }),
    ...(input.nfc != null && { nfc: input.nfc }),
    ...(input.wifi != null && { wifi: input.wifi }),
  };
};

/**
 * serializeAws_json1_1RenewOfferingRequest
 */
const se_RenewOfferingRequest = (input: RenewOfferingRequest, context: __SerdeContext): any => {
  return {
    ...(input.offeringId != null && { offeringId: input.offeringId }),
    ...(input.quantity != null && { quantity: input.quantity }),
  };
};

/**
 * serializeAws_json1_1Rule
 */
const se_Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_1Rules
 */
const se_Rules = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Rule(entry, context);
    });
};

/**
 * serializeAws_json1_1ScheduleRunConfiguration
 */
const se_ScheduleRunConfiguration = (input: ScheduleRunConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.auxiliaryApps != null && { auxiliaryApps: se_AmazonResourceNames(input.auxiliaryApps, context) }),
    ...(input.billingMethod != null && { billingMethod: input.billingMethod }),
    ...(input.customerArtifactPaths != null && {
      customerArtifactPaths: se_CustomerArtifactPaths(input.customerArtifactPaths, context),
    }),
    ...(input.extraDataPackageArn != null && { extraDataPackageArn: input.extraDataPackageArn }),
    ...(input.locale != null && { locale: input.locale }),
    ...(input.location != null && { location: se_Location(input.location, context) }),
    ...(input.networkProfileArn != null && { networkProfileArn: input.networkProfileArn }),
    ...(input.radios != null && { radios: se_Radios(input.radios, context) }),
    ...(input.vpceConfigurationArns != null && {
      vpceConfigurationArns: se_AmazonResourceNames(input.vpceConfigurationArns, context),
    }),
  };
};

/**
 * serializeAws_json1_1ScheduleRunRequest
 */
const se_ScheduleRunRequest = (input: ScheduleRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.appArn != null && { appArn: input.appArn }),
    ...(input.configuration != null && { configuration: se_ScheduleRunConfiguration(input.configuration, context) }),
    ...(input.devicePoolArn != null && { devicePoolArn: input.devicePoolArn }),
    ...(input.deviceSelectionConfiguration != null && {
      deviceSelectionConfiguration: se_DeviceSelectionConfiguration(input.deviceSelectionConfiguration, context),
    }),
    ...(input.executionConfiguration != null && {
      executionConfiguration: se_ExecutionConfiguration(input.executionConfiguration, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.test != null && { test: se_ScheduleRunTest(input.test, context) }),
  };
};

/**
 * serializeAws_json1_1ScheduleRunTest
 */
const se_ScheduleRunTest = (input: ScheduleRunTest, context: __SerdeContext): any => {
  return {
    ...(input.filter != null && { filter: input.filter }),
    ...(input.parameters != null && { parameters: se_TestParameters(input.parameters, context) }),
    ...(input.testPackageArn != null && { testPackageArn: input.testPackageArn }),
    ...(input.testSpecArn != null && { testSpecArn: input.testSpecArn }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StopJobRequest
 */
const se_StopJobRequest = (input: StopJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1StopRemoteAccessSessionRequest
 */
const se_StopRemoteAccessSessionRequest = (input: StopRemoteAccessSessionRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1StopRunRequest
 */
const se_StopRunRequest = (input: StopRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
  };
};

/**
 * serializeAws_json1_1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1TestGridVpcConfig
 */
const se_TestGridVpcConfig = (input: TestGridVpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.securityGroupIds != null && { securityGroupIds: se_SecurityGroupIds(input.securityGroupIds, context) }),
    ...(input.subnetIds != null && { subnetIds: se_SubnetIds(input.subnetIds, context) }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  };
};

/**
 * serializeAws_json1_1TestParameters
 */
const se_TestParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDeviceInstanceRequest
 */
const se_UpdateDeviceInstanceRequest = (input: UpdateDeviceInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.labels != null && { labels: se_InstanceLabels(input.labels, context) }),
    ...(input.profileArn != null && { profileArn: input.profileArn }),
  };
};

/**
 * serializeAws_json1_1UpdateDevicePoolRequest
 */
const se_UpdateDevicePoolRequest = (input: UpdateDevicePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.clearMaxDevices != null && { clearMaxDevices: input.clearMaxDevices }),
    ...(input.description != null && { description: input.description }),
    ...(input.maxDevices != null && { maxDevices: input.maxDevices }),
    ...(input.name != null && { name: input.name }),
    ...(input.rules != null && { rules: se_Rules(input.rules, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateInstanceProfileRequest
 */
const se_UpdateInstanceProfileRequest = (input: UpdateInstanceProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.description != null && { description: input.description }),
    ...(input.excludeAppPackagesFromCleanup != null && {
      excludeAppPackagesFromCleanup: se_PackageIds(input.excludeAppPackagesFromCleanup, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.packageCleanup != null && { packageCleanup: input.packageCleanup }),
    ...(input.rebootAfterUse != null && { rebootAfterUse: input.rebootAfterUse }),
  };
};

/**
 * serializeAws_json1_1UpdateNetworkProfileRequest
 */
const se_UpdateNetworkProfileRequest = (input: UpdateNetworkProfileRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.description != null && { description: input.description }),
    ...(input.downlinkBandwidthBits != null && { downlinkBandwidthBits: input.downlinkBandwidthBits }),
    ...(input.downlinkDelayMs != null && { downlinkDelayMs: input.downlinkDelayMs }),
    ...(input.downlinkJitterMs != null && { downlinkJitterMs: input.downlinkJitterMs }),
    ...(input.downlinkLossPercent != null && { downlinkLossPercent: input.downlinkLossPercent }),
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
    ...(input.uplinkBandwidthBits != null && { uplinkBandwidthBits: input.uplinkBandwidthBits }),
    ...(input.uplinkDelayMs != null && { uplinkDelayMs: input.uplinkDelayMs }),
    ...(input.uplinkJitterMs != null && { uplinkJitterMs: input.uplinkJitterMs }),
    ...(input.uplinkLossPercent != null && { uplinkLossPercent: input.uplinkLossPercent }),
  };
};

/**
 * serializeAws_json1_1UpdateProjectRequest
 */
const se_UpdateProjectRequest = (input: UpdateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.defaultJobTimeoutMinutes != null && { defaultJobTimeoutMinutes: input.defaultJobTimeoutMinutes }),
    ...(input.name != null && { name: input.name }),
    ...(input.vpcConfig != null && { vpcConfig: se_VpcConfig(input.vpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateTestGridProjectRequest
 */
const se_UpdateTestGridProjectRequest = (input: UpdateTestGridProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.projectArn != null && { projectArn: input.projectArn }),
    ...(input.vpcConfig != null && { vpcConfig: se_TestGridVpcConfig(input.vpcConfig, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateUploadRequest
 */
const se_UpdateUploadRequest = (input: UpdateUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.contentType != null && { contentType: input.contentType }),
    ...(input.editContent != null && { editContent: input.editContent }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_1UpdateVPCEConfigurationRequest
 */
const se_UpdateVPCEConfigurationRequest = (input: UpdateVPCEConfigurationRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.serviceDnsName != null && { serviceDnsName: input.serviceDnsName }),
    ...(input.vpceConfigurationDescription != null && {
      vpceConfigurationDescription: input.vpceConfigurationDescription,
    }),
    ...(input.vpceConfigurationName != null && { vpceConfigurationName: input.vpceConfigurationName }),
    ...(input.vpceServiceName != null && { vpceServiceName: input.vpceServiceName }),
  };
};

/**
 * serializeAws_json1_1VpcConfig
 */
const se_VpcConfig = (input: VpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.securityGroupIds != null && {
      securityGroupIds: se_VpcSecurityGroupIds(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: se_VpcSubnetIds(input.subnetIds, context) }),
    ...(input.vpcId != null && { vpcId: input.vpcId }),
  };
};

/**
 * serializeAws_json1_1VpcSecurityGroupIds
 */
const se_VpcSecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1VpcSubnetIds
 */
const se_VpcSubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1AccountSettings
 */
const de_AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return {
    awsAccountNumber: __expectString(output.awsAccountNumber),
    defaultJobTimeoutMinutes: __expectInt32(output.defaultJobTimeoutMinutes),
    maxJobTimeoutMinutes: __expectInt32(output.maxJobTimeoutMinutes),
    maxSlots: output.maxSlots != null ? de_MaxSlotMap(output.maxSlots, context) : undefined,
    skipAppResign: __expectBoolean(output.skipAppResign),
    trialMinutes: output.trialMinutes != null ? de_TrialMinutes(output.trialMinutes, context) : undefined,
    unmeteredDevices:
      output.unmeteredDevices != null ? de_PurchasedDevicesMap(output.unmeteredDevices, context) : undefined,
    unmeteredRemoteAccessDevices:
      output.unmeteredRemoteAccessDevices != null
        ? de_PurchasedDevicesMap(output.unmeteredRemoteAccessDevices, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AndroidPaths
 */
const de_AndroidPaths = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ArgumentException
 */
const de_ArgumentException = (output: any, context: __SerdeContext): ArgumentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Artifact
 */
const de_Artifact = (output: any, context: __SerdeContext): Artifact => {
  return {
    arn: __expectString(output.arn),
    extension: __expectString(output.extension),
    name: __expectString(output.name),
    type: __expectString(output.type),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1Artifacts
 */
const de_Artifacts = (output: any, context: __SerdeContext): Artifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Artifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CannotDeleteException
 */
const de_CannotDeleteException = (output: any, context: __SerdeContext): CannotDeleteException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Counters
 */
const de_Counters = (output: any, context: __SerdeContext): Counters => {
  return {
    errored: __expectInt32(output.errored),
    failed: __expectInt32(output.failed),
    passed: __expectInt32(output.passed),
    skipped: __expectInt32(output.skipped),
    stopped: __expectInt32(output.stopped),
    total: __expectInt32(output.total),
    warned: __expectInt32(output.warned),
  } as any;
};

/**
 * deserializeAws_json1_1CPU
 */
const de_CPU = (output: any, context: __SerdeContext): CPU => {
  return {
    architecture: __expectString(output.architecture),
    clock: __limitedParseDouble(output.clock),
    frequency: __expectString(output.frequency),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDevicePoolResult
 */
const de_CreateDevicePoolResult = (output: any, context: __SerdeContext): CreateDevicePoolResult => {
  return {
    devicePool: output.devicePool != null ? de_DevicePool(output.devicePool, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateInstanceProfileResult
 */
const de_CreateInstanceProfileResult = (output: any, context: __SerdeContext): CreateInstanceProfileResult => {
  return {
    instanceProfile: output.instanceProfile != null ? de_InstanceProfile(output.instanceProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateNetworkProfileResult
 */
const de_CreateNetworkProfileResult = (output: any, context: __SerdeContext): CreateNetworkProfileResult => {
  return {
    networkProfile: output.networkProfile != null ? de_NetworkProfile(output.networkProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateProjectResult
 */
const de_CreateProjectResult = (output: any, context: __SerdeContext): CreateProjectResult => {
  return {
    project: output.project != null ? de_Project(output.project, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateRemoteAccessSessionResult
 */
const de_CreateRemoteAccessSessionResult = (output: any, context: __SerdeContext): CreateRemoteAccessSessionResult => {
  return {
    remoteAccessSession:
      output.remoteAccessSession != null ? de_RemoteAccessSession(output.remoteAccessSession, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateTestGridProjectResult
 */
const de_CreateTestGridProjectResult = (output: any, context: __SerdeContext): CreateTestGridProjectResult => {
  return {
    testGridProject: output.testGridProject != null ? de_TestGridProject(output.testGridProject, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateTestGridUrlResult
 */
const de_CreateTestGridUrlResult = (output: any, context: __SerdeContext): CreateTestGridUrlResult => {
  return {
    expires:
      output.expires != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.expires))) : undefined,
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1CreateUploadResult
 */
const de_CreateUploadResult = (output: any, context: __SerdeContext): CreateUploadResult => {
  return {
    upload: output.upload != null ? de_Upload(output.upload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateVPCEConfigurationResult
 */
const de_CreateVPCEConfigurationResult = (output: any, context: __SerdeContext): CreateVPCEConfigurationResult => {
  return {
    vpceConfiguration:
      output.vpceConfiguration != null ? de_VPCEConfiguration(output.vpceConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomerArtifactPaths
 */
const de_CustomerArtifactPaths = (output: any, context: __SerdeContext): CustomerArtifactPaths => {
  return {
    androidPaths: output.androidPaths != null ? de_AndroidPaths(output.androidPaths, context) : undefined,
    deviceHostPaths: output.deviceHostPaths != null ? de_DeviceHostPaths(output.deviceHostPaths, context) : undefined,
    iosPaths: output.iosPaths != null ? de_IosPaths(output.iosPaths, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDevicePoolResult
 */
const de_DeleteDevicePoolResult = (output: any, context: __SerdeContext): DeleteDevicePoolResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteInstanceProfileResult
 */
const de_DeleteInstanceProfileResult = (output: any, context: __SerdeContext): DeleteInstanceProfileResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteNetworkProfileResult
 */
const de_DeleteNetworkProfileResult = (output: any, context: __SerdeContext): DeleteNetworkProfileResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteProjectResult
 */
const de_DeleteProjectResult = (output: any, context: __SerdeContext): DeleteProjectResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRemoteAccessSessionResult
 */
const de_DeleteRemoteAccessSessionResult = (output: any, context: __SerdeContext): DeleteRemoteAccessSessionResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteRunResult
 */
const de_DeleteRunResult = (output: any, context: __SerdeContext): DeleteRunResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteTestGridProjectResult
 */
const de_DeleteTestGridProjectResult = (output: any, context: __SerdeContext): DeleteTestGridProjectResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteUploadResult
 */
const de_DeleteUploadResult = (output: any, context: __SerdeContext): DeleteUploadResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeleteVPCEConfigurationResult
 */
const de_DeleteVPCEConfigurationResult = (output: any, context: __SerdeContext): DeleteVPCEConfigurationResult => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return {
    arn: __expectString(output.arn),
    availability: __expectString(output.availability),
    carrier: __expectString(output.carrier),
    cpu: output.cpu != null ? de_CPU(output.cpu, context) : undefined,
    fleetName: __expectString(output.fleetName),
    fleetType: __expectString(output.fleetType),
    formFactor: __expectString(output.formFactor),
    heapSize: __expectLong(output.heapSize),
    image: __expectString(output.image),
    instances: output.instances != null ? de_DeviceInstances(output.instances, context) : undefined,
    manufacturer: __expectString(output.manufacturer),
    memory: __expectLong(output.memory),
    model: __expectString(output.model),
    modelId: __expectString(output.modelId),
    name: __expectString(output.name),
    os: __expectString(output.os),
    platform: __expectString(output.platform),
    radio: __expectString(output.radio),
    remoteAccessEnabled: __expectBoolean(output.remoteAccessEnabled),
    remoteDebugEnabled: __expectBoolean(output.remoteDebugEnabled),
    resolution: output.resolution != null ? de_Resolution(output.resolution, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeviceFilter
 */
const de_DeviceFilter = (output: any, context: __SerdeContext): DeviceFilter => {
  return {
    attribute: __expectString(output.attribute),
    operator: __expectString(output.operator),
    values: output.values != null ? de_DeviceFilterValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeviceFilters
 */
const de_DeviceFilters = (output: any, context: __SerdeContext): DeviceFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceFilterValues
 */
const de_DeviceFilterValues = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1DeviceHostPaths
 */
const de_DeviceHostPaths = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1DeviceInstance
 */
const de_DeviceInstance = (output: any, context: __SerdeContext): DeviceInstance => {
  return {
    arn: __expectString(output.arn),
    deviceArn: __expectString(output.deviceArn),
    instanceProfile: output.instanceProfile != null ? de_InstanceProfile(output.instanceProfile, context) : undefined,
    labels: output.labels != null ? de_InstanceLabels(output.labels, context) : undefined,
    status: __expectString(output.status),
    udid: __expectString(output.udid),
  } as any;
};

/**
 * deserializeAws_json1_1DeviceInstances
 */
const de_DeviceInstances = (output: any, context: __SerdeContext): DeviceInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DeviceInstance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceMinutes
 */
const de_DeviceMinutes = (output: any, context: __SerdeContext): DeviceMinutes => {
  return {
    metered: __limitedParseDouble(output.metered),
    total: __limitedParseDouble(output.total),
    unmetered: __limitedParseDouble(output.unmetered),
  } as any;
};

/**
 * deserializeAws_json1_1DevicePool
 */
const de_DevicePool = (output: any, context: __SerdeContext): DevicePool => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    maxDevices: __expectInt32(output.maxDevices),
    name: __expectString(output.name),
    rules: output.rules != null ? de_Rules(output.rules, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1DevicePoolCompatibilityResult
 */
const de_DevicePoolCompatibilityResult = (output: any, context: __SerdeContext): DevicePoolCompatibilityResult => {
  return {
    compatible: __expectBoolean(output.compatible),
    device: output.device != null ? de_Device(output.device, context) : undefined,
    incompatibilityMessages:
      output.incompatibilityMessages != null
        ? de_IncompatibilityMessages(output.incompatibilityMessages, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DevicePoolCompatibilityResults
 */
const de_DevicePoolCompatibilityResults = (output: any, context: __SerdeContext): DevicePoolCompatibilityResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DevicePoolCompatibilityResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DevicePools
 */
const de_DevicePools = (output: any, context: __SerdeContext): DevicePool[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DevicePool(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Devices
 */
const de_Devices = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Device(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DeviceSelectionResult
 */
const de_DeviceSelectionResult = (output: any, context: __SerdeContext): DeviceSelectionResult => {
  return {
    filters: output.filters != null ? de_DeviceFilters(output.filters, context) : undefined,
    matchedDevicesCount: __expectInt32(output.matchedDevicesCount),
    maxDevices: __expectInt32(output.maxDevices),
  } as any;
};

/**
 * deserializeAws_json1_1GetAccountSettingsResult
 */
const de_GetAccountSettingsResult = (output: any, context: __SerdeContext): GetAccountSettingsResult => {
  return {
    accountSettings: output.accountSettings != null ? de_AccountSettings(output.accountSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDeviceInstanceResult
 */
const de_GetDeviceInstanceResult = (output: any, context: __SerdeContext): GetDeviceInstanceResult => {
  return {
    deviceInstance: output.deviceInstance != null ? de_DeviceInstance(output.deviceInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDevicePoolCompatibilityResult
 */
const de_GetDevicePoolCompatibilityResult = (
  output: any,
  context: __SerdeContext
): GetDevicePoolCompatibilityResult => {
  return {
    compatibleDevices:
      output.compatibleDevices != null
        ? de_DevicePoolCompatibilityResults(output.compatibleDevices, context)
        : undefined,
    incompatibleDevices:
      output.incompatibleDevices != null
        ? de_DevicePoolCompatibilityResults(output.incompatibleDevices, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDevicePoolResult
 */
const de_GetDevicePoolResult = (output: any, context: __SerdeContext): GetDevicePoolResult => {
  return {
    devicePool: output.devicePool != null ? de_DevicePool(output.devicePool, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetDeviceResult
 */
const de_GetDeviceResult = (output: any, context: __SerdeContext): GetDeviceResult => {
  return {
    device: output.device != null ? de_Device(output.device, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceProfileResult
 */
const de_GetInstanceProfileResult = (output: any, context: __SerdeContext): GetInstanceProfileResult => {
  return {
    instanceProfile: output.instanceProfile != null ? de_InstanceProfile(output.instanceProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetJobResult
 */
const de_GetJobResult = (output: any, context: __SerdeContext): GetJobResult => {
  return {
    job: output.job != null ? de_Job(output.job, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetNetworkProfileResult
 */
const de_GetNetworkProfileResult = (output: any, context: __SerdeContext): GetNetworkProfileResult => {
  return {
    networkProfile: output.networkProfile != null ? de_NetworkProfile(output.networkProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOfferingStatusResult
 */
const de_GetOfferingStatusResult = (output: any, context: __SerdeContext): GetOfferingStatusResult => {
  return {
    current: output.current != null ? de_OfferingStatusMap(output.current, context) : undefined,
    nextPeriod: output.nextPeriod != null ? de_OfferingStatusMap(output.nextPeriod, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1GetProjectResult
 */
const de_GetProjectResult = (output: any, context: __SerdeContext): GetProjectResult => {
  return {
    project: output.project != null ? de_Project(output.project, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRemoteAccessSessionResult
 */
const de_GetRemoteAccessSessionResult = (output: any, context: __SerdeContext): GetRemoteAccessSessionResult => {
  return {
    remoteAccessSession:
      output.remoteAccessSession != null ? de_RemoteAccessSession(output.remoteAccessSession, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetRunResult
 */
const de_GetRunResult = (output: any, context: __SerdeContext): GetRunResult => {
  return {
    run: output.run != null ? de_Run(output.run, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetSuiteResult
 */
const de_GetSuiteResult = (output: any, context: __SerdeContext): GetSuiteResult => {
  return {
    suite: output.suite != null ? de_Suite(output.suite, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTestGridProjectResult
 */
const de_GetTestGridProjectResult = (output: any, context: __SerdeContext): GetTestGridProjectResult => {
  return {
    testGridProject: output.testGridProject != null ? de_TestGridProject(output.testGridProject, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTestGridSessionResult
 */
const de_GetTestGridSessionResult = (output: any, context: __SerdeContext): GetTestGridSessionResult => {
  return {
    testGridSession: output.testGridSession != null ? de_TestGridSession(output.testGridSession, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetTestResult
 */
const de_GetTestResult = (output: any, context: __SerdeContext): GetTestResult => {
  return {
    test: output.test != null ? de_Test(output.test, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetUploadResult
 */
const de_GetUploadResult = (output: any, context: __SerdeContext): GetUploadResult => {
  return {
    upload: output.upload != null ? de_Upload(output.upload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetVPCEConfigurationResult
 */
const de_GetVPCEConfigurationResult = (output: any, context: __SerdeContext): GetVPCEConfigurationResult => {
  return {
    vpceConfiguration:
      output.vpceConfiguration != null ? de_VPCEConfiguration(output.vpceConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IdempotencyException
 */
const de_IdempotencyException = (output: any, context: __SerdeContext): IdempotencyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IncompatibilityMessage
 */
const de_IncompatibilityMessage = (output: any, context: __SerdeContext): IncompatibilityMessage => {
  return {
    message: __expectString(output.message),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1IncompatibilityMessages
 */
const de_IncompatibilityMessages = (output: any, context: __SerdeContext): IncompatibilityMessage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IncompatibilityMessage(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InstallToRemoteAccessSessionResult
 */
const de_InstallToRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): InstallToRemoteAccessSessionResult => {
  return {
    appUpload: output.appUpload != null ? de_Upload(output.appUpload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InstanceLabels
 */
const de_InstanceLabels = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1InstanceProfile
 */
const de_InstanceProfile = (output: any, context: __SerdeContext): InstanceProfile => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    excludeAppPackagesFromCleanup:
      output.excludeAppPackagesFromCleanup != null
        ? de_PackageIds(output.excludeAppPackagesFromCleanup, context)
        : undefined,
    name: __expectString(output.name),
    packageCleanup: __expectBoolean(output.packageCleanup),
    rebootAfterUse: __expectBoolean(output.rebootAfterUse),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceProfiles
 */
const de_InstanceProfiles = (output: any, context: __SerdeContext): InstanceProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InternalServiceException
 */
const de_InternalServiceException = (output: any, context: __SerdeContext): InternalServiceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidOperationException
 */
const de_InvalidOperationException = (output: any, context: __SerdeContext): InvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1IosPaths
 */
const de_IosPaths = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Job
 */
const de_Job = (output: any, context: __SerdeContext): Job => {
  return {
    arn: __expectString(output.arn),
    counters: output.counters != null ? de_Counters(output.counters, context) : undefined,
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    device: output.device != null ? de_Device(output.device, context) : undefined,
    deviceMinutes: output.deviceMinutes != null ? de_DeviceMinutes(output.deviceMinutes, context) : undefined,
    instanceArn: __expectString(output.instanceArn),
    message: __expectString(output.message),
    name: __expectString(output.name),
    result: __expectString(output.result),
    started:
      output.started != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.started))) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopped))) : undefined,
    type: __expectString(output.type),
    videoCapture: __expectBoolean(output.videoCapture),
    videoEndpoint: __expectString(output.videoEndpoint),
  } as any;
};

/**
 * deserializeAws_json1_1Jobs
 */
const de_Jobs = (output: any, context: __SerdeContext): Job[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Job(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1ListArtifactsResult
 */
const de_ListArtifactsResult = (output: any, context: __SerdeContext): ListArtifactsResult => {
  return {
    artifacts: output.artifacts != null ? de_Artifacts(output.artifacts, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDeviceInstancesResult
 */
const de_ListDeviceInstancesResult = (output: any, context: __SerdeContext): ListDeviceInstancesResult => {
  return {
    deviceInstances: output.deviceInstances != null ? de_DeviceInstances(output.deviceInstances, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDevicePoolsResult
 */
const de_ListDevicePoolsResult = (output: any, context: __SerdeContext): ListDevicePoolsResult => {
  return {
    devicePools: output.devicePools != null ? de_DevicePools(output.devicePools, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDevicesResult
 */
const de_ListDevicesResult = (output: any, context: __SerdeContext): ListDevicesResult => {
  return {
    devices: output.devices != null ? de_Devices(output.devices, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListInstanceProfilesResult
 */
const de_ListInstanceProfilesResult = (output: any, context: __SerdeContext): ListInstanceProfilesResult => {
  return {
    instanceProfiles:
      output.instanceProfiles != null ? de_InstanceProfiles(output.instanceProfiles, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListJobsResult
 */
const de_ListJobsResult = (output: any, context: __SerdeContext): ListJobsResult => {
  return {
    jobs: output.jobs != null ? de_Jobs(output.jobs, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListNetworkProfilesResult
 */
const de_ListNetworkProfilesResult = (output: any, context: __SerdeContext): ListNetworkProfilesResult => {
  return {
    networkProfiles: output.networkProfiles != null ? de_NetworkProfiles(output.networkProfiles, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListOfferingPromotionsResult
 */
const de_ListOfferingPromotionsResult = (output: any, context: __SerdeContext): ListOfferingPromotionsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    offeringPromotions:
      output.offeringPromotions != null ? de_OfferingPromotions(output.offeringPromotions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListOfferingsResult
 */
const de_ListOfferingsResult = (output: any, context: __SerdeContext): ListOfferingsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    offerings: output.offerings != null ? de_Offerings(output.offerings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListOfferingTransactionsResult
 */
const de_ListOfferingTransactionsResult = (output: any, context: __SerdeContext): ListOfferingTransactionsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    offeringTransactions:
      output.offeringTransactions != null ? de_OfferingTransactions(output.offeringTransactions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListProjectsResult
 */
const de_ListProjectsResult = (output: any, context: __SerdeContext): ListProjectsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    projects: output.projects != null ? de_Projects(output.projects, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRemoteAccessSessionsResult
 */
const de_ListRemoteAccessSessionsResult = (output: any, context: __SerdeContext): ListRemoteAccessSessionsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    remoteAccessSessions:
      output.remoteAccessSessions != null ? de_RemoteAccessSessions(output.remoteAccessSessions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListRunsResult
 */
const de_ListRunsResult = (output: any, context: __SerdeContext): ListRunsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    runs: output.runs != null ? de_Runs(output.runs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSamplesResult
 */
const de_ListSamplesResult = (output: any, context: __SerdeContext): ListSamplesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    samples: output.samples != null ? de_Samples(output.samples, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListSuitesResult
 */
const de_ListSuitesResult = (output: any, context: __SerdeContext): ListSuitesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    suites: output.suites != null ? de_Suites(output.suites, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTestGridProjectsResult
 */
const de_ListTestGridProjectsResult = (output: any, context: __SerdeContext): ListTestGridProjectsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    testGridProjects:
      output.testGridProjects != null ? de_TestGridProjects(output.testGridProjects, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTestGridSessionActionsResult
 */
const de_ListTestGridSessionActionsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionActionsResult => {
  return {
    actions: output.actions != null ? de_TestGridSessionActions(output.actions, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTestGridSessionArtifactsResult
 */
const de_ListTestGridSessionArtifactsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionArtifactsResult => {
  return {
    artifacts: output.artifacts != null ? de_TestGridSessionArtifacts(output.artifacts, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListTestGridSessionsResult
 */
const de_ListTestGridSessionsResult = (output: any, context: __SerdeContext): ListTestGridSessionsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    testGridSessions:
      output.testGridSessions != null ? de_TestGridSessions(output.testGridSessions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTestsResult
 */
const de_ListTestsResult = (output: any, context: __SerdeContext): ListTestsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    tests: output.tests != null ? de_Tests(output.tests, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUniqueProblemsResult
 */
const de_ListUniqueProblemsResult = (output: any, context: __SerdeContext): ListUniqueProblemsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    uniqueProblems:
      output.uniqueProblems != null ? de_UniqueProblemsByExecutionResultMap(output.uniqueProblems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListUploadsResult
 */
const de_ListUploadsResult = (output: any, context: __SerdeContext): ListUploadsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    uploads: output.uploads != null ? de_Uploads(output.uploads, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListVPCEConfigurationsResult
 */
const de_ListVPCEConfigurationsResult = (output: any, context: __SerdeContext): ListVPCEConfigurationsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    vpceConfigurations:
      output.vpceConfigurations != null ? de_VPCEConfigurations(output.vpceConfigurations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Location
 */
const de_Location = (output: any, context: __SerdeContext): Location => {
  return {
    latitude: __limitedParseDouble(output.latitude),
    longitude: __limitedParseDouble(output.longitude),
  } as any;
};

/**
 * deserializeAws_json1_1MaxSlotMap
 */
const de_MaxSlotMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1MonetaryAmount
 */
const de_MonetaryAmount = (output: any, context: __SerdeContext): MonetaryAmount => {
  return {
    amount: __limitedParseDouble(output.amount),
    currencyCode: __expectString(output.currencyCode),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkProfile
 */
const de_NetworkProfile = (output: any, context: __SerdeContext): NetworkProfile => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    downlinkBandwidthBits: __expectLong(output.downlinkBandwidthBits),
    downlinkDelayMs: __expectLong(output.downlinkDelayMs),
    downlinkJitterMs: __expectLong(output.downlinkJitterMs),
    downlinkLossPercent: __expectInt32(output.downlinkLossPercent),
    name: __expectString(output.name),
    type: __expectString(output.type),
    uplinkBandwidthBits: __expectLong(output.uplinkBandwidthBits),
    uplinkDelayMs: __expectLong(output.uplinkDelayMs),
    uplinkJitterMs: __expectLong(output.uplinkJitterMs),
    uplinkLossPercent: __expectInt32(output.uplinkLossPercent),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkProfiles
 */
const de_NetworkProfiles = (output: any, context: __SerdeContext): NetworkProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NetworkProfile(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NotEligibleException
 */
const de_NotEligibleException = (output: any, context: __SerdeContext): NotEligibleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1NotFoundException
 */
const de_NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1Offering
 */
const de_Offering = (output: any, context: __SerdeContext): Offering => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    platform: __expectString(output.platform),
    recurringCharges:
      output.recurringCharges != null ? de_RecurringCharges(output.recurringCharges, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1OfferingPromotion
 */
const de_OfferingPromotion = (output: any, context: __SerdeContext): OfferingPromotion => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
  } as any;
};

/**
 * deserializeAws_json1_1OfferingPromotions
 */
const de_OfferingPromotions = (output: any, context: __SerdeContext): OfferingPromotion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OfferingPromotion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Offerings
 */
const de_Offerings = (output: any, context: __SerdeContext): Offering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Offering(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OfferingStatus
 */
const de_OfferingStatus = (output: any, context: __SerdeContext): OfferingStatus => {
  return {
    effectiveOn:
      output.effectiveOn != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.effectiveOn)))
        : undefined,
    offering: output.offering != null ? de_Offering(output.offering, context) : undefined,
    quantity: __expectInt32(output.quantity),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1OfferingStatusMap
 */
const de_OfferingStatusMap = (output: any, context: __SerdeContext): Record<string, OfferingStatus> => {
  return Object.entries(output).reduce((acc: Record<string, OfferingStatus>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_OfferingStatus(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1OfferingTransaction
 */
const de_OfferingTransaction = (output: any, context: __SerdeContext): OfferingTransaction => {
  return {
    cost: output.cost != null ? de_MonetaryAmount(output.cost, context) : undefined,
    createdOn:
      output.createdOn != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdOn))) : undefined,
    offeringPromotionId: __expectString(output.offeringPromotionId),
    offeringStatus: output.offeringStatus != null ? de_OfferingStatus(output.offeringStatus, context) : undefined,
    transactionId: __expectString(output.transactionId),
  } as any;
};

/**
 * deserializeAws_json1_1OfferingTransactions
 */
const de_OfferingTransactions = (output: any, context: __SerdeContext): OfferingTransaction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OfferingTransaction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PackageIds
 */
const de_PackageIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Problem
 */
const de_Problem = (output: any, context: __SerdeContext): Problem => {
  return {
    device: output.device != null ? de_Device(output.device, context) : undefined,
    job: output.job != null ? de_ProblemDetail(output.job, context) : undefined,
    message: __expectString(output.message),
    result: __expectString(output.result),
    run: output.run != null ? de_ProblemDetail(output.run, context) : undefined,
    suite: output.suite != null ? de_ProblemDetail(output.suite, context) : undefined,
    test: output.test != null ? de_ProblemDetail(output.test, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ProblemDetail
 */
const de_ProblemDetail = (output: any, context: __SerdeContext): ProblemDetail => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_json1_1Problems
 */
const de_Problems = (output: any, context: __SerdeContext): Problem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Problem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Project
 */
const de_Project = (output: any, context: __SerdeContext): Project => {
  return {
    arn: __expectString(output.arn),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    defaultJobTimeoutMinutes: __expectInt32(output.defaultJobTimeoutMinutes),
    name: __expectString(output.name),
    vpcConfig: output.vpcConfig != null ? de_VpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Projects
 */
const de_Projects = (output: any, context: __SerdeContext): Project[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Project(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PurchasedDevicesMap
 */
const de_PurchasedDevicesMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [DevicePlatform | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1PurchaseOfferingResult
 */
const de_PurchaseOfferingResult = (output: any, context: __SerdeContext): PurchaseOfferingResult => {
  return {
    offeringTransaction:
      output.offeringTransaction != null ? de_OfferingTransaction(output.offeringTransaction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Radios
 */
const de_Radios = (output: any, context: __SerdeContext): Radios => {
  return {
    bluetooth: __expectBoolean(output.bluetooth),
    gps: __expectBoolean(output.gps),
    nfc: __expectBoolean(output.nfc),
    wifi: __expectBoolean(output.wifi),
  } as any;
};

/**
 * deserializeAws_json1_1RecurringCharge
 */
const de_RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return {
    cost: output.cost != null ? de_MonetaryAmount(output.cost, context) : undefined,
    frequency: __expectString(output.frequency),
  } as any;
};

/**
 * deserializeAws_json1_1RecurringCharges
 */
const de_RecurringCharges = (output: any, context: __SerdeContext): RecurringCharge[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecurringCharge(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RemoteAccessSession
 */
const de_RemoteAccessSession = (output: any, context: __SerdeContext): RemoteAccessSession => {
  return {
    arn: __expectString(output.arn),
    billingMethod: __expectString(output.billingMethod),
    clientId: __expectString(output.clientId),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    device: output.device != null ? de_Device(output.device, context) : undefined,
    deviceMinutes: output.deviceMinutes != null ? de_DeviceMinutes(output.deviceMinutes, context) : undefined,
    deviceUdid: __expectString(output.deviceUdid),
    endpoint: __expectString(output.endpoint),
    hostAddress: __expectString(output.hostAddress),
    instanceArn: __expectString(output.instanceArn),
    interactionMode: __expectString(output.interactionMode),
    message: __expectString(output.message),
    name: __expectString(output.name),
    remoteDebugEnabled: __expectBoolean(output.remoteDebugEnabled),
    remoteRecordAppArn: __expectString(output.remoteRecordAppArn),
    remoteRecordEnabled: __expectBoolean(output.remoteRecordEnabled),
    result: __expectString(output.result),
    skipAppResign: __expectBoolean(output.skipAppResign),
    started:
      output.started != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.started))) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopped))) : undefined,
    vpcConfig: output.vpcConfig != null ? de_VpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RemoteAccessSessions
 */
const de_RemoteAccessSessions = (output: any, context: __SerdeContext): RemoteAccessSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RemoteAccessSession(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1RenewOfferingResult
 */
const de_RenewOfferingResult = (output: any, context: __SerdeContext): RenewOfferingResult => {
  return {
    offeringTransaction:
      output.offeringTransaction != null ? de_OfferingTransaction(output.offeringTransaction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Resolution
 */
const de_Resolution = (output: any, context: __SerdeContext): Resolution => {
  return {
    height: __expectInt32(output.height),
    width: __expectInt32(output.width),
  } as any;
};

/**
 * deserializeAws_json1_1Rule
 */
const de_Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    attribute: __expectString(output.attribute),
    operator: __expectString(output.operator),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_1Rules
 */
const de_Rules = (output: any, context: __SerdeContext): Rule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Rule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Run
 */
const de_Run = (output: any, context: __SerdeContext): Run => {
  return {
    appUpload: __expectString(output.appUpload),
    arn: __expectString(output.arn),
    billingMethod: __expectString(output.billingMethod),
    completedJobs: __expectInt32(output.completedJobs),
    counters: output.counters != null ? de_Counters(output.counters, context) : undefined,
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    customerArtifactPaths:
      output.customerArtifactPaths != null
        ? de_CustomerArtifactPaths(output.customerArtifactPaths, context)
        : undefined,
    deviceMinutes: output.deviceMinutes != null ? de_DeviceMinutes(output.deviceMinutes, context) : undefined,
    devicePoolArn: __expectString(output.devicePoolArn),
    deviceSelectionResult:
      output.deviceSelectionResult != null
        ? de_DeviceSelectionResult(output.deviceSelectionResult, context)
        : undefined,
    eventCount: __expectInt32(output.eventCount),
    jobTimeoutMinutes: __expectInt32(output.jobTimeoutMinutes),
    locale: __expectString(output.locale),
    location: output.location != null ? de_Location(output.location, context) : undefined,
    message: __expectString(output.message),
    name: __expectString(output.name),
    networkProfile: output.networkProfile != null ? de_NetworkProfile(output.networkProfile, context) : undefined,
    parsingResultUrl: __expectString(output.parsingResultUrl),
    platform: __expectString(output.platform),
    radios: output.radios != null ? de_Radios(output.radios, context) : undefined,
    result: __expectString(output.result),
    resultCode: __expectString(output.resultCode),
    seed: __expectInt32(output.seed),
    skipAppResign: __expectBoolean(output.skipAppResign),
    started:
      output.started != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.started))) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopped))) : undefined,
    testSpecArn: __expectString(output.testSpecArn),
    totalJobs: __expectInt32(output.totalJobs),
    type: __expectString(output.type),
    vpcConfig: output.vpcConfig != null ? de_VpcConfig(output.vpcConfig, context) : undefined,
    webUrl: __expectString(output.webUrl),
  } as any;
};

/**
 * deserializeAws_json1_1Runs
 */
const de_Runs = (output: any, context: __SerdeContext): Run[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Run(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Sample
 */
const de_Sample = (output: any, context: __SerdeContext): Sample => {
  return {
    arn: __expectString(output.arn),
    type: __expectString(output.type),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1Samples
 */
const de_Samples = (output: any, context: __SerdeContext): Sample[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Sample(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ScheduleRunResult
 */
const de_ScheduleRunResult = (output: any, context: __SerdeContext): ScheduleRunResult => {
  return {
    run: output.run != null ? de_Run(output.run, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SecurityGroupIds
 */
const de_SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1ServiceAccountException
 */
const de_ServiceAccountException = (output: any, context: __SerdeContext): ServiceAccountException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_1StopJobResult
 */
const de_StopJobResult = (output: any, context: __SerdeContext): StopJobResult => {
  return {
    job: output.job != null ? de_Job(output.job, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopRemoteAccessSessionResult
 */
const de_StopRemoteAccessSessionResult = (output: any, context: __SerdeContext): StopRemoteAccessSessionResult => {
  return {
    remoteAccessSession:
      output.remoteAccessSession != null ? de_RemoteAccessSession(output.remoteAccessSession, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1StopRunResult
 */
const de_StopRunResult = (output: any, context: __SerdeContext): StopRunResult => {
  return {
    run: output.run != null ? de_Run(output.run, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1Suite
 */
const de_Suite = (output: any, context: __SerdeContext): Suite => {
  return {
    arn: __expectString(output.arn),
    counters: output.counters != null ? de_Counters(output.counters, context) : undefined,
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    deviceMinutes: output.deviceMinutes != null ? de_DeviceMinutes(output.deviceMinutes, context) : undefined,
    message: __expectString(output.message),
    name: __expectString(output.name),
    result: __expectString(output.result),
    started:
      output.started != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.started))) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopped))) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1Suites
 */
const de_Suites = (output: any, context: __SerdeContext): Suite[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Suite(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
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
 * deserializeAws_json1_1TagOperationException
 */
const de_TagOperationException = (output: any, context: __SerdeContext): TagOperationException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_json1_1TagPolicyException
 */
const de_TagPolicyException = (output: any, context: __SerdeContext): TagPolicyException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Test
 */
const de_Test = (output: any, context: __SerdeContext): Test => {
  return {
    arn: __expectString(output.arn),
    counters: output.counters != null ? de_Counters(output.counters, context) : undefined,
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    deviceMinutes: output.deviceMinutes != null ? de_DeviceMinutes(output.deviceMinutes, context) : undefined,
    message: __expectString(output.message),
    name: __expectString(output.name),
    result: __expectString(output.result),
    started:
      output.started != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.started))) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.stopped))) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_1TestGridProject
 */
const de_TestGridProject = (output: any, context: __SerdeContext): TestGridProject => {
  return {
    arn: __expectString(output.arn),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    vpcConfig: output.vpcConfig != null ? de_TestGridVpcConfig(output.vpcConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TestGridProjects
 */
const de_TestGridProjects = (output: any, context: __SerdeContext): TestGridProject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestGridProject(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestGridSession
 */
const de_TestGridSession = (output: any, context: __SerdeContext): TestGridSession => {
  return {
    arn: __expectString(output.arn),
    billingMinutes: __limitedParseDouble(output.billingMinutes),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    ended: output.ended != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ended))) : undefined,
    seleniumProperties: __expectString(output.seleniumProperties),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_1TestGridSessionAction
 */
const de_TestGridSessionAction = (output: any, context: __SerdeContext): TestGridSessionAction => {
  return {
    action: __expectString(output.action),
    duration: __expectLong(output.duration),
    requestMethod: __expectString(output.requestMethod),
    started:
      output.started != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.started))) : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

/**
 * deserializeAws_json1_1TestGridSessionActions
 */
const de_TestGridSessionActions = (output: any, context: __SerdeContext): TestGridSessionAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestGridSessionAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestGridSessionArtifact
 */
const de_TestGridSessionArtifact = (output: any, context: __SerdeContext): TestGridSessionArtifact => {
  return {
    filename: __expectString(output.filename),
    type: __expectString(output.type),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1TestGridSessionArtifacts
 */
const de_TestGridSessionArtifacts = (output: any, context: __SerdeContext): TestGridSessionArtifact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestGridSessionArtifact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestGridSessions
 */
const de_TestGridSessions = (output: any, context: __SerdeContext): TestGridSession[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestGridSession(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestGridVpcConfig
 */
const de_TestGridVpcConfig = (output: any, context: __SerdeContext): TestGridVpcConfig => {
  return {
    securityGroupIds:
      output.securityGroupIds != null ? de_SecurityGroupIds(output.securityGroupIds, context) : undefined,
    subnetIds: output.subnetIds != null ? de_SubnetIds(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_json1_1Tests
 */
const de_Tests = (output: any, context: __SerdeContext): Test[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Test(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

/**
 * deserializeAws_json1_1TrialMinutes
 */
const de_TrialMinutes = (output: any, context: __SerdeContext): TrialMinutes => {
  return {
    remaining: __limitedParseDouble(output.remaining),
    total: __limitedParseDouble(output.total),
  } as any;
};

/**
 * deserializeAws_json1_1UniqueProblem
 */
const de_UniqueProblem = (output: any, context: __SerdeContext): UniqueProblem => {
  return {
    message: __expectString(output.message),
    problems: output.problems != null ? de_Problems(output.problems, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UniqueProblems
 */
const de_UniqueProblems = (output: any, context: __SerdeContext): UniqueProblem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
): Record<string, UniqueProblem[]> => {
  return Object.entries(output).reduce(
    (acc: Record<string, UniqueProblem[]>, [key, value]: [ExecutionResult | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_UniqueProblems(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDeviceInstanceResult
 */
const de_UpdateDeviceInstanceResult = (output: any, context: __SerdeContext): UpdateDeviceInstanceResult => {
  return {
    deviceInstance: output.deviceInstance != null ? de_DeviceInstance(output.deviceInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateDevicePoolResult
 */
const de_UpdateDevicePoolResult = (output: any, context: __SerdeContext): UpdateDevicePoolResult => {
  return {
    devicePool: output.devicePool != null ? de_DevicePool(output.devicePool, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateInstanceProfileResult
 */
const de_UpdateInstanceProfileResult = (output: any, context: __SerdeContext): UpdateInstanceProfileResult => {
  return {
    instanceProfile: output.instanceProfile != null ? de_InstanceProfile(output.instanceProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateNetworkProfileResult
 */
const de_UpdateNetworkProfileResult = (output: any, context: __SerdeContext): UpdateNetworkProfileResult => {
  return {
    networkProfile: output.networkProfile != null ? de_NetworkProfile(output.networkProfile, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateProjectResult
 */
const de_UpdateProjectResult = (output: any, context: __SerdeContext): UpdateProjectResult => {
  return {
    project: output.project != null ? de_Project(output.project, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateTestGridProjectResult
 */
const de_UpdateTestGridProjectResult = (output: any, context: __SerdeContext): UpdateTestGridProjectResult => {
  return {
    testGridProject: output.testGridProject != null ? de_TestGridProject(output.testGridProject, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateUploadResult
 */
const de_UpdateUploadResult = (output: any, context: __SerdeContext): UpdateUploadResult => {
  return {
    upload: output.upload != null ? de_Upload(output.upload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateVPCEConfigurationResult
 */
const de_UpdateVPCEConfigurationResult = (output: any, context: __SerdeContext): UpdateVPCEConfigurationResult => {
  return {
    vpceConfiguration:
      output.vpceConfiguration != null ? de_VPCEConfiguration(output.vpceConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Upload
 */
const de_Upload = (output: any, context: __SerdeContext): Upload => {
  return {
    arn: __expectString(output.arn),
    category: __expectString(output.category),
    contentType: __expectString(output.contentType),
    created:
      output.created != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.created))) : undefined,
    message: __expectString(output.message),
    metadata: __expectString(output.metadata),
    name: __expectString(output.name),
    status: __expectString(output.status),
    type: __expectString(output.type),
    url: __expectString(output.url),
  } as any;
};

/**
 * deserializeAws_json1_1Uploads
 */
const de_Uploads = (output: any, context: __SerdeContext): Upload[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Upload(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VpcConfig
 */
const de_VpcConfig = (output: any, context: __SerdeContext): VpcConfig => {
  return {
    securityGroupIds:
      output.securityGroupIds != null ? de_VpcSecurityGroupIds(output.securityGroupIds, context) : undefined,
    subnetIds: output.subnetIds != null ? de_VpcSubnetIds(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

/**
 * deserializeAws_json1_1VPCEConfiguration
 */
const de_VPCEConfiguration = (output: any, context: __SerdeContext): VPCEConfiguration => {
  return {
    arn: __expectString(output.arn),
    serviceDnsName: __expectString(output.serviceDnsName),
    vpceConfigurationDescription: __expectString(output.vpceConfigurationDescription),
    vpceConfigurationName: __expectString(output.vpceConfigurationName),
    vpceServiceName: __expectString(output.vpceServiceName),
  } as any;
};

/**
 * deserializeAws_json1_1VPCEConfigurations
 */
const de_VPCEConfigurations = (output: any, context: __SerdeContext): VPCEConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VPCEConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VpcSecurityGroupIds
 */
const de_VpcSecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_json1_1VpcSubnetIds
 */
const de_VpcSubnetIds = (output: any, context: __SerdeContext): string[] => {
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
