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
import {
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput,
} from "../commands/ListOfferingTransactionsCommand";
import { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "../commands/ListOfferingsCommand";
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
import {
  AccountSettings,
  ArgumentException,
  Artifact,
  CPU,
  CannotDeleteException,
  Counters,
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
  ListOfferingTransactionsRequest,
  ListOfferingTransactionsResult,
  ListOfferingsRequest,
  ListOfferingsResult,
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
  VPCEConfiguration,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_json1_1CreateDevicePoolCommand = async (
  input: CreateDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateDevicePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDevicePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateInstanceProfileCommand = async (
  input: CreateInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateInstanceProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateInstanceProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateNetworkProfileCommand = async (
  input: CreateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateRemoteAccessSessionCommand = async (
  input: CreateRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateRemoteAccessSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateRemoteAccessSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTestGridProjectCommand = async (
  input: CreateTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateTestGridProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTestGridProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateTestGridUrlCommand = async (
  input: CreateTestGridUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateTestGridUrl",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateTestGridUrlRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateUploadCommand = async (
  input: CreateUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateUpload",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVPCEConfigurationCommand = async (
  input: CreateVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.CreateVPCEConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVPCEConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDevicePoolCommand = async (
  input: DeleteDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteDevicePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDevicePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteInstanceProfileCommand = async (
  input: DeleteInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteInstanceProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteInstanceProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNetworkProfileCommand = async (
  input: DeleteNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRemoteAccessSessionCommand = async (
  input: DeleteRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteRemoteAccessSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRemoteAccessSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteRunCommand = async (
  input: DeleteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteTestGridProjectCommand = async (
  input: DeleteTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteTestGridProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteTestGridProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteUploadCommand = async (
  input: DeleteUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteUpload",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVPCEConfigurationCommand = async (
  input: DeleteVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.DeleteVPCEConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVPCEConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetAccountSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAccountSettingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeviceCommand = async (
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetDevice",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDeviceInstanceCommand = async (
  input: GetDeviceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetDeviceInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeviceInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDevicePoolCommand = async (
  input: GetDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetDevicePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDevicePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetDevicePoolCompatibilityCommand = async (
  input: GetDevicePoolCompatibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetDevicePoolCompatibility",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDevicePoolCompatibilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstanceProfileCommand = async (
  input: GetInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetInstanceProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetJobCommand = async (
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetNetworkProfileCommand = async (
  input: GetNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOfferingStatusCommand = async (
  input: GetOfferingStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetOfferingStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOfferingStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetProjectCommand = async (
  input: GetProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRemoteAccessSessionCommand = async (
  input: GetRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetRemoteAccessSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRemoteAccessSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetRunCommand = async (
  input: GetRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetSuiteCommand = async (
  input: GetSuiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetSuite",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSuiteRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTestCommand = async (
  input: GetTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetTest",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTestGridProjectCommand = async (
  input: GetTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetTestGridProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTestGridProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetTestGridSessionCommand = async (
  input: GetTestGridSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetTestGridSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTestGridSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetUploadCommand = async (
  input: GetUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetUpload",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetVPCEConfigurationCommand = async (
  input: GetVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.GetVPCEConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetVPCEConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1InstallToRemoteAccessSessionCommand = async (
  input: InstallToRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.InstallToRemoteAccessSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1InstallToRemoteAccessSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListArtifactsCommand = async (
  input: ListArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListArtifacts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListArtifactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDeviceInstancesCommand = async (
  input: ListDeviceInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListDeviceInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDeviceInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDevicePoolsCommand = async (
  input: ListDevicePoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListDevicePools",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDevicePoolsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDevicesCommand = async (
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListDevices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInstanceProfilesCommand = async (
  input: ListInstanceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListInstanceProfiles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInstanceProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListNetworkProfilesCommand = async (
  input: ListNetworkProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListNetworkProfiles",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListNetworkProfilesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOfferingPromotionsCommand = async (
  input: ListOfferingPromotionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListOfferingPromotions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOfferingPromotionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOfferingsCommand = async (
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListOfferings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOfferingsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOfferingTransactionsCommand = async (
  input: ListOfferingTransactionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListOfferingTransactions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOfferingTransactionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListProjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListProjectsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRemoteAccessSessionsCommand = async (
  input: ListRemoteAccessSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListRemoteAccessSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRemoteAccessSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListRunsCommand = async (
  input: ListRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListRuns",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSamplesCommand = async (
  input: ListSamplesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListSamples",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSamplesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListSuitesCommand = async (
  input: ListSuitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListSuites",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSuitesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTestGridProjectsCommand = async (
  input: ListTestGridProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListTestGridProjects",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTestGridProjectsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTestGridSessionActionsCommand = async (
  input: ListTestGridSessionActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListTestGridSessionActions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTestGridSessionActionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTestGridSessionArtifactsCommand = async (
  input: ListTestGridSessionArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListTestGridSessionArtifacts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTestGridSessionArtifactsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTestGridSessionsCommand = async (
  input: ListTestGridSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListTestGridSessions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTestGridSessionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTestsCommand = async (
  input: ListTestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListTests",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUniqueProblemsCommand = async (
  input: ListUniqueProblemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListUniqueProblems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUniqueProblemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListUploadsCommand = async (
  input: ListUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListUploads",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUploadsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListVPCEConfigurationsCommand = async (
  input: ListVPCEConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ListVPCEConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListVPCEConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1PurchaseOfferingCommand = async (
  input: PurchaseOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.PurchaseOffering",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1PurchaseOfferingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RenewOfferingCommand = async (
  input: RenewOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.RenewOffering",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RenewOfferingRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ScheduleRunCommand = async (
  input: ScheduleRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.ScheduleRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ScheduleRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopJobCommand = async (
  input: StopJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.StopJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopRemoteAccessSessionCommand = async (
  input: StopRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.StopRemoteAccessSession",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopRemoteAccessSessionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopRunCommand = async (
  input: StopRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.StopRun",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDeviceInstanceCommand = async (
  input: UpdateDeviceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UpdateDeviceInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDeviceInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDevicePoolCommand = async (
  input: UpdateDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UpdateDevicePool",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDevicePoolRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateInstanceProfileCommand = async (
  input: UpdateInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UpdateInstanceProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateInstanceProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateNetworkProfileCommand = async (
  input: UpdateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UpdateNetworkProfile",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateNetworkProfileRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UpdateProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateTestGridProjectCommand = async (
  input: UpdateTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UpdateTestGridProject",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateTestGridProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateUploadCommand = async (
  input: UpdateUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UpdateUpload",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVPCEConfigurationCommand = async (
  input: UpdateVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "DeviceFarm_20150623.UpdateVPCEConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVPCEConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateDevicePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevicePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDevicePoolResult(data, context);
  const response: CreateDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDevicePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevicePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstanceProfileResult(data, context);
  const response: CreateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNetworkProfileResult(data, context);
  const response: CreateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectResult(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagOperationException":
    case "com.amazonaws.devicefarm#TagOperationException":
      response = {
        ...(await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRemoteAccessSessionResult(data, context);
  const response: CreateRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateTestGridProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTestGridProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTestGridProjectResult(data, context);
  const response: CreateTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTestGridProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateTestGridUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridUrlCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateTestGridUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTestGridUrlResult(data, context);
  const response: CreateTestGridUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateTestGridUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUploadResult(data, context);
  const response: CreateUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateVPCEConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCEConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVPCEConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVPCEConfigurationResult(data, context);
  const response: CreateVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVPCEConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCEConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteDevicePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevicePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDevicePoolResult(data, context);
  const response: DeleteDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDevicePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevicePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceProfileResult(data, context);
  const response: DeleteInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNetworkProfileResult(data, context);
  const response: DeleteNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectResult(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRemoteAccessSessionResult(data, context);
  const response: DeleteRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRunResult(data, context);
  const response: DeleteRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteTestGridProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestGridProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteTestGridProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTestGridProjectResult(data, context);
  const response: DeleteTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteTestGridProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestGridProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "CannotDeleteException":
    case "com.amazonaws.devicefarm#CannotDeleteException":
      response = {
        ...(await deserializeAws_json1_1CannotDeleteExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUploadResult(data, context);
  const response: DeleteUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteVPCEConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCEConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVPCEConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVPCEConfigurationResult(data, context);
  const response: DeleteVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVPCEConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCEConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.devicefarm#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccountSettingsResult(data, context);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeviceResult(data, context);
  const response: GetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDeviceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDeviceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeviceInstanceResult(data, context);
  const response: GetDeviceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDeviceInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDevicePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDevicePoolResult(data, context);
  const response: GetDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDevicePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetDevicePoolCompatibilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCompatibilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetDevicePoolCompatibilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDevicePoolCompatibilityResult(data, context);
  const response: GetDevicePoolCompatibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetDevicePoolCompatibilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCompatibilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceProfileResult(data, context);
  const response: GetInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobResult(data, context);
  const response: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNetworkProfileResult(data, context);
  const response: GetNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetOfferingStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOfferingStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOfferingStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOfferingStatusResult(data, context);
  const response: GetOfferingStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOfferingStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOfferingStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProjectResult(data, context);
  const response: GetProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRemoteAccessSessionResult(data, context);
  const response: GetRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRunResult(data, context);
  const response: GetRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetSuiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetSuiteCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSuiteResult(data, context);
  const response: GetSuiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetSuiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTestCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTestResult(data, context);
  const response: GetTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTestCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTestGridProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTestGridProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTestGridProjectResult(data, context);
  const response: GetTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTestGridProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetTestGridSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetTestGridSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTestGridSessionResult(data, context);
  const response: GetTestGridSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetTestGridSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUploadResult(data, context);
  const response: GetUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetVPCEConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVPCEConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetVPCEConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVPCEConfigurationResult(data, context);
  const response: GetVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetVPCEConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVPCEConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1InstallToRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstallToRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1InstallToRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InstallToRemoteAccessSessionResult(data, context);
  const response: InstallToRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1InstallToRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstallToRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListArtifactsResult(data, context);
  const response: ListArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListDeviceInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDeviceInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeviceInstancesResult(data, context);
  const response: ListDeviceInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDeviceInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListDevicePoolsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePoolsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDevicePoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDevicePoolsResult(data, context);
  const response: ListDevicePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDevicePoolsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePoolsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDevicesResult(data, context);
  const response: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListInstanceProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListInstanceProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstanceProfilesResult(data, context);
  const response: ListInstanceProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstanceProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListJobsResult(data, context);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListNetworkProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkProfilesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListNetworkProfilesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNetworkProfilesResult(data, context);
  const response: ListNetworkProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListNetworkProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListOfferingPromotionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingPromotionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOfferingPromotionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOfferingPromotionsResult(data, context);
  const response: ListOfferingPromotionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOfferingPromotionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingPromotionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListOfferingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOfferingsResult(data, context);
  const response: ListOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOfferingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListOfferingTransactionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingTransactionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOfferingTransactionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOfferingTransactionsResult(data, context);
  const response: ListOfferingTransactionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOfferingTransactionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingTransactionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProjectsResult(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListRemoteAccessSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRemoteAccessSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRemoteAccessSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRemoteAccessSessionsResult(data, context);
  const response: ListRemoteAccessSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRemoteAccessSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRemoteAccessSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListRunsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRunsResult(data, context);
  const response: ListRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListRunsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListSamplesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSamplesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSamplesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSamplesResult(data, context);
  const response: ListSamplesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSamplesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSamplesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListSuitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuitesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListSuitesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSuitesResult(data, context);
  const response: ListSuitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListSuitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagOperationException":
    case "com.amazonaws.devicefarm#TagOperationException":
      response = {
        ...(await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTestGridProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridProjectsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTestGridProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestGridProjectsResult(data, context);
  const response: ListTestGridProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTestGridProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTestGridSessionActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTestGridSessionActionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestGridSessionActionsResult(data, context);
  const response: ListTestGridSessionActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTestGridSessionActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTestGridSessionArtifactsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionArtifactsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTestGridSessionArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestGridSessionArtifactsResult(data, context);
  const response: ListTestGridSessionArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTestGridSessionArtifactsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionArtifactsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTestGridSessionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTestGridSessionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestGridSessionsResult(data, context);
  const response: ListTestGridSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTestGridSessionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTestsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestsResult(data, context);
  const response: ListTestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTestsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListUniqueProblemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUniqueProblemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListUniqueProblemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUniqueProblemsResult(data, context);
  const response: ListUniqueProblemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUniqueProblemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUniqueProblemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUploadsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListUploadsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUploadsResult(data, context);
  const response: ListUploadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListVPCEConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCEConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListVPCEConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVPCEConfigurationsResult(data, context);
  const response: ListVPCEConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListVPCEConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCEConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1PurchaseOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1PurchaseOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PurchaseOfferingResult(data, context);
  const response: PurchaseOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1PurchaseOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RenewOfferingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewOfferingCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RenewOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RenewOfferingResult(data, context);
  const response: RenewOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RenewOfferingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewOfferingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotEligibleException":
    case "com.amazonaws.devicefarm#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ScheduleRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ScheduleRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ScheduleRunResult(data, context);
  const response: ScheduleRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ScheduleRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "IdempotencyException":
    case "com.amazonaws.devicefarm#IdempotencyException":
      response = {
        ...(await deserializeAws_json1_1IdempotencyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StopJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopJobResult(data, context);
  const response: StopJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StopRemoteAccessSessionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRemoteAccessSessionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopRemoteAccessSessionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRemoteAccessSessionResult(data, context);
  const response: StopRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopRemoteAccessSessionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRemoteAccessSessionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1StopRunCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRunCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRunResult(data, context);
  const response: StopRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopRunCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRunCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagOperationException":
    case "com.amazonaws.devicefarm#TagOperationException":
      response = {
        ...(await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagPolicyException":
    case "com.amazonaws.devicefarm#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.devicefarm#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TagOperationException":
    case "com.amazonaws.devicefarm#TagOperationException":
      response = {
        ...(await deserializeAws_json1_1TagOperationExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateDeviceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDeviceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDeviceInstanceResult(data, context);
  const response: UpdateDeviceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDeviceInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateDevicePoolCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePoolCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDevicePoolResult(data, context);
  const response: UpdateDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDevicePoolCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePoolCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateInstanceProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateInstanceProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateInstanceProfileResult(data, context);
  const response: UpdateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateInstanceProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateNetworkProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNetworkProfileResult(data, context);
  const response: UpdateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateNetworkProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProjectResult(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateTestGridProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestGridProjectCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateTestGridProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTestGridProjectResult(data, context);
  const response: UpdateTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateTestGridProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestGridProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceException":
    case "com.amazonaws.devicefarm#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUploadCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUploadResult(data, context);
  const response: UpdateUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.devicefarm#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateVPCEConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVPCEConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateVPCEConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVPCEConfigurationResult(data, context);
  const response: UpdateVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVPCEConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVPCEConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazonaws.devicefarm#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidOperationException":
    case "com.amazonaws.devicefarm#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.devicefarm#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAccountException":
    case "com.amazonaws.devicefarm#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(parsedOutput, context)),
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

const deserializeAws_json1_1ArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ArgumentException(body, context);
  const contents: ArgumentException = {
    name: "ArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1CannotDeleteExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CannotDeleteException(body, context);
  const contents: CannotDeleteException = {
    name: "CannotDeleteException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1IdempotencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotencyException(body, context);
  const contents: IdempotencyException = {
    name: "IdempotencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(body, context);
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(body, context);
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotEligibleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotEligibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotEligibleException(body, context);
  const contents: NotEligibleException = {
    name: "NotEligibleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(body, context);
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceAccountExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceAccountException(body, context);
  const contents: ServiceAccountException = {
    name: "ServiceAccountException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagOperationException(body, context);
  const contents: TagOperationException = {
    name: "TagOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TagPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagPolicyException(body, context);
  const contents: TagPolicyException = {
    name: "TagPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1AmazonResourceNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AndroidPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1CreateDevicePoolRequest = (input: CreateDevicePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.maxDevices !== undefined && input.maxDevices !== null && { maxDevices: input.maxDevices }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    ...(input.rules !== undefined &&
      input.rules !== null && { rules: serializeAws_json1_1Rules(input.rules, context) }),
  };
};

const serializeAws_json1_1CreateInstanceProfileRequest = (
  input: CreateInstanceProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.excludeAppPackagesFromCleanup !== undefined &&
      input.excludeAppPackagesFromCleanup !== null && {
        excludeAppPackagesFromCleanup: serializeAws_json1_1PackageIds(input.excludeAppPackagesFromCleanup, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.packageCleanup !== undefined &&
      input.packageCleanup !== null && { packageCleanup: input.packageCleanup }),
    ...(input.rebootAfterUse !== undefined &&
      input.rebootAfterUse !== null && { rebootAfterUse: input.rebootAfterUse }),
  };
};

const serializeAws_json1_1CreateNetworkProfileRequest = (
  input: CreateNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.downlinkBandwidthBits !== undefined &&
      input.downlinkBandwidthBits !== null && { downlinkBandwidthBits: input.downlinkBandwidthBits }),
    ...(input.downlinkDelayMs !== undefined &&
      input.downlinkDelayMs !== null && { downlinkDelayMs: input.downlinkDelayMs }),
    ...(input.downlinkJitterMs !== undefined &&
      input.downlinkJitterMs !== null && { downlinkJitterMs: input.downlinkJitterMs }),
    ...(input.downlinkLossPercent !== undefined &&
      input.downlinkLossPercent !== null && { downlinkLossPercent: input.downlinkLossPercent }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.uplinkBandwidthBits !== undefined &&
      input.uplinkBandwidthBits !== null && { uplinkBandwidthBits: input.uplinkBandwidthBits }),
    ...(input.uplinkDelayMs !== undefined && input.uplinkDelayMs !== null && { uplinkDelayMs: input.uplinkDelayMs }),
    ...(input.uplinkJitterMs !== undefined &&
      input.uplinkJitterMs !== null && { uplinkJitterMs: input.uplinkJitterMs }),
    ...(input.uplinkLossPercent !== undefined &&
      input.uplinkLossPercent !== null && { uplinkLossPercent: input.uplinkLossPercent }),
  };
};

const serializeAws_json1_1CreateProjectRequest = (input: CreateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.defaultJobTimeoutMinutes !== undefined &&
      input.defaultJobTimeoutMinutes !== null && { defaultJobTimeoutMinutes: input.defaultJobTimeoutMinutes }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1CreateRemoteAccessSessionConfiguration = (
  input: CreateRemoteAccessSessionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.billingMethod !== undefined && input.billingMethod !== null && { billingMethod: input.billingMethod }),
    ...(input.vpceConfigurationArns !== undefined &&
      input.vpceConfigurationArns !== null && {
        vpceConfigurationArns: serializeAws_json1_1AmazonResourceNames(input.vpceConfigurationArns, context),
      }),
  };
};

const serializeAws_json1_1CreateRemoteAccessSessionRequest = (
  input: CreateRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientId !== undefined && input.clientId !== null && { clientId: input.clientId }),
    ...(input.configuration !== undefined &&
      input.configuration !== null && {
        configuration: serializeAws_json1_1CreateRemoteAccessSessionConfiguration(input.configuration, context),
      }),
    ...(input.deviceArn !== undefined && input.deviceArn !== null && { deviceArn: input.deviceArn }),
    ...(input.instanceArn !== undefined && input.instanceArn !== null && { instanceArn: input.instanceArn }),
    ...(input.interactionMode !== undefined &&
      input.interactionMode !== null && { interactionMode: input.interactionMode }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    ...(input.remoteDebugEnabled !== undefined &&
      input.remoteDebugEnabled !== null && { remoteDebugEnabled: input.remoteDebugEnabled }),
    ...(input.remoteRecordAppArn !== undefined &&
      input.remoteRecordAppArn !== null && { remoteRecordAppArn: input.remoteRecordAppArn }),
    ...(input.remoteRecordEnabled !== undefined &&
      input.remoteRecordEnabled !== null && { remoteRecordEnabled: input.remoteRecordEnabled }),
    ...(input.skipAppResign !== undefined && input.skipAppResign !== null && { skipAppResign: input.skipAppResign }),
    ...(input.sshPublicKey !== undefined && input.sshPublicKey !== null && { sshPublicKey: input.sshPublicKey }),
  };
};

const serializeAws_json1_1CreateTestGridProjectRequest = (
  input: CreateTestGridProjectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.vpcConfig !== undefined &&
      input.vpcConfig !== null && { vpcConfig: serializeAws_json1_1TestGridVpcConfig(input.vpcConfig, context) }),
  };
};

const serializeAws_json1_1CreateTestGridUrlRequest = (
  input: CreateTestGridUrlRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.expiresInSeconds !== undefined &&
      input.expiresInSeconds !== null && { expiresInSeconds: input.expiresInSeconds }),
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
  };
};

const serializeAws_json1_1CreateUploadRequest = (input: CreateUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1CreateVPCEConfigurationRequest = (
  input: CreateVPCEConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceDnsName !== undefined &&
      input.serviceDnsName !== null && { serviceDnsName: input.serviceDnsName }),
    ...(input.vpceConfigurationDescription !== undefined &&
      input.vpceConfigurationDescription !== null && {
        vpceConfigurationDescription: input.vpceConfigurationDescription,
      }),
    ...(input.vpceConfigurationName !== undefined &&
      input.vpceConfigurationName !== null && { vpceConfigurationName: input.vpceConfigurationName }),
    ...(input.vpceServiceName !== undefined &&
      input.vpceServiceName !== null && { vpceServiceName: input.vpceServiceName }),
  };
};

const serializeAws_json1_1CustomerArtifactPaths = (input: CustomerArtifactPaths, context: __SerdeContext): any => {
  return {
    ...(input.androidPaths !== undefined &&
      input.androidPaths !== null && { androidPaths: serializeAws_json1_1AndroidPaths(input.androidPaths, context) }),
    ...(input.deviceHostPaths !== undefined &&
      input.deviceHostPaths !== null && {
        deviceHostPaths: serializeAws_json1_1DeviceHostPaths(input.deviceHostPaths, context),
      }),
    ...(input.iosPaths !== undefined &&
      input.iosPaths !== null && { iosPaths: serializeAws_json1_1IosPaths(input.iosPaths, context) }),
  };
};

const serializeAws_json1_1DeleteDevicePoolRequest = (input: DeleteDevicePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteInstanceProfileRequest = (
  input: DeleteInstanceProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteNetworkProfileRequest = (
  input: DeleteNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteProjectRequest = (input: DeleteProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteRemoteAccessSessionRequest = (
  input: DeleteRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteRunRequest = (input: DeleteRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteTestGridProjectRequest = (
  input: DeleteTestGridProjectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
  };
};

const serializeAws_json1_1DeleteUploadRequest = (input: DeleteUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeleteVPCEConfigurationRequest = (
  input: DeleteVPCEConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1DeviceFilter = (input: DeviceFilter, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_json1_1DeviceFilterValues(input.values, context) }),
  };
};

const serializeAws_json1_1DeviceFilters = (input: DeviceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DeviceFilter(entry, context);
    });
};

const serializeAws_json1_1DeviceFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeviceHostPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1DeviceSelectionConfiguration = (
  input: DeviceSelectionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1DeviceFilters(input.filters, context) }),
    ...(input.maxDevices !== undefined && input.maxDevices !== null && { maxDevices: input.maxDevices }),
  };
};

const serializeAws_json1_1ExecutionConfiguration = (input: ExecutionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.accountsCleanup !== undefined &&
      input.accountsCleanup !== null && { accountsCleanup: input.accountsCleanup }),
    ...(input.appPackagesCleanup !== undefined &&
      input.appPackagesCleanup !== null && { appPackagesCleanup: input.appPackagesCleanup }),
    ...(input.jobTimeoutMinutes !== undefined &&
      input.jobTimeoutMinutes !== null && { jobTimeoutMinutes: input.jobTimeoutMinutes }),
    ...(input.skipAppResign !== undefined && input.skipAppResign !== null && { skipAppResign: input.skipAppResign }),
    ...(input.videoCapture !== undefined && input.videoCapture !== null && { videoCapture: input.videoCapture }),
  };
};

const serializeAws_json1_1GetAccountSettingsRequest = (
  input: GetAccountSettingsRequest,
  context: __SerdeContext
): any => {
  return {};
};

const serializeAws_json1_1GetDeviceInstanceRequest = (
  input: GetDeviceInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetDevicePoolCompatibilityRequest = (
  input: GetDevicePoolCompatibilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appArn !== undefined && input.appArn !== null && { appArn: input.appArn }),
    ...(input.configuration !== undefined &&
      input.configuration !== null && {
        configuration: serializeAws_json1_1ScheduleRunConfiguration(input.configuration, context),
      }),
    ...(input.devicePoolArn !== undefined && input.devicePoolArn !== null && { devicePoolArn: input.devicePoolArn }),
    ...(input.test !== undefined &&
      input.test !== null && { test: serializeAws_json1_1ScheduleRunTest(input.test, context) }),
    ...(input.testType !== undefined && input.testType !== null && { testType: input.testType }),
  };
};

const serializeAws_json1_1GetDevicePoolRequest = (input: GetDevicePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetDeviceRequest = (input: GetDeviceRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetInstanceProfileRequest = (
  input: GetInstanceProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetJobRequest = (input: GetJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetNetworkProfileRequest = (
  input: GetNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetOfferingStatusRequest = (
  input: GetOfferingStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1GetProjectRequest = (input: GetProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetRemoteAccessSessionRequest = (
  input: GetRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetRunRequest = (input: GetRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetSuiteRequest = (input: GetSuiteRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetTestGridProjectRequest = (
  input: GetTestGridProjectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
  };
};

const serializeAws_json1_1GetTestGridSessionRequest = (
  input: GetTestGridSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    ...(input.sessionArn !== undefined && input.sessionArn !== null && { sessionArn: input.sessionArn }),
    ...(input.sessionId !== undefined && input.sessionId !== null && { sessionId: input.sessionId }),
  };
};

const serializeAws_json1_1GetTestRequest = (input: GetTestRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetUploadRequest = (input: GetUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1GetVPCEConfigurationRequest = (
  input: GetVPCEConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1InstallToRemoteAccessSessionRequest = (
  input: InstallToRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.appArn !== undefined && input.appArn !== null && { appArn: input.appArn }),
    ...(input.remoteAccessSessionArn !== undefined &&
      input.remoteAccessSessionArn !== null && { remoteAccessSessionArn: input.remoteAccessSessionArn }),
  };
};

const serializeAws_json1_1InstanceLabels = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1IosPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListArtifactsRequest = (input: ListArtifactsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1ListDeviceInstancesRequest = (
  input: ListDeviceInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListDevicePoolsRequest = (input: ListDevicePoolsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1ListDevicesRequest = (input: ListDevicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_json1_1DeviceFilters(input.filters, context) }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListInstanceProfilesRequest = (
  input: ListInstanceProfilesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListJobsRequest = (input: ListJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListNetworkProfilesRequest = (
  input: ListNetworkProfilesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1ListOfferingPromotionsRequest = (
  input: ListOfferingPromotionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListOfferingsRequest = (input: ListOfferingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListOfferingTransactionsRequest = (
  input: ListOfferingTransactionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListProjectsRequest = (input: ListProjectsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListRemoteAccessSessionsRequest = (
  input: ListRemoteAccessSessionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListRunsRequest = (input: ListRunsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListSamplesRequest = (input: ListSamplesRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListSuitesRequest = (input: ListSuitesRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1ListTestGridProjectsRequest = (
  input: ListTestGridProjectsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResult !== undefined && input.maxResult !== null && { maxResult: input.maxResult }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListTestGridSessionActionsRequest = (
  input: ListTestGridSessionActionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResult !== undefined && input.maxResult !== null && { maxResult: input.maxResult }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sessionArn !== undefined && input.sessionArn !== null && { sessionArn: input.sessionArn }),
  };
};

const serializeAws_json1_1ListTestGridSessionArtifactsRequest = (
  input: ListTestGridSessionArtifactsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResult !== undefined && input.maxResult !== null && { maxResult: input.maxResult }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sessionArn !== undefined && input.sessionArn !== null && { sessionArn: input.sessionArn }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1ListTestGridSessionsRequest = (
  input: ListTestGridSessionsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.creationTimeAfter !== undefined &&
      input.creationTimeAfter !== null && { creationTimeAfter: Math.round(input.creationTimeAfter.getTime() / 1000) }),
    ...(input.creationTimeBefore !== undefined &&
      input.creationTimeBefore !== null && {
        creationTimeBefore: Math.round(input.creationTimeBefore.getTime() / 1000),
      }),
    ...(input.endTimeAfter !== undefined &&
      input.endTimeAfter !== null && { endTimeAfter: Math.round(input.endTimeAfter.getTime() / 1000) }),
    ...(input.endTimeBefore !== undefined &&
      input.endTimeBefore !== null && { endTimeBefore: Math.round(input.endTimeBefore.getTime() / 1000) }),
    ...(input.maxResult !== undefined && input.maxResult !== null && { maxResult: input.maxResult }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    ...(input.status !== undefined && input.status !== null && { status: input.status }),
  };
};

const serializeAws_json1_1ListTestsRequest = (input: ListTestsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListUniqueProblemsRequest = (
  input: ListUniqueProblemsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1ListUploadsRequest = (input: ListUploadsRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1ListVPCEConfigurationsRequest = (
  input: ListVPCEConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_1Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.latitude !== undefined && input.latitude !== null && { latitude: __serializeFloat(input.latitude) }),
    ...(input.longitude !== undefined && input.longitude !== null && { longitude: __serializeFloat(input.longitude) }),
  };
};

const serializeAws_json1_1PackageIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1PurchaseOfferingRequest = (input: PurchaseOfferingRequest, context: __SerdeContext): any => {
  return {
    ...(input.offeringId !== undefined && input.offeringId !== null && { offeringId: input.offeringId }),
    ...(input.offeringPromotionId !== undefined &&
      input.offeringPromotionId !== null && { offeringPromotionId: input.offeringPromotionId }),
    ...(input.quantity !== undefined && input.quantity !== null && { quantity: input.quantity }),
  };
};

const serializeAws_json1_1Radios = (input: Radios, context: __SerdeContext): any => {
  return {
    ...(input.bluetooth !== undefined && input.bluetooth !== null && { bluetooth: input.bluetooth }),
    ...(input.gps !== undefined && input.gps !== null && { gps: input.gps }),
    ...(input.nfc !== undefined && input.nfc !== null && { nfc: input.nfc }),
    ...(input.wifi !== undefined && input.wifi !== null && { wifi: input.wifi }),
  };
};

const serializeAws_json1_1RenewOfferingRequest = (input: RenewOfferingRequest, context: __SerdeContext): any => {
  return {
    ...(input.offeringId !== undefined && input.offeringId !== null && { offeringId: input.offeringId }),
    ...(input.quantity !== undefined && input.quantity !== null && { quantity: input.quantity }),
  };
};

const serializeAws_json1_1Rule = (input: Rule, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_json1_1Rules = (input: Rule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Rule(entry, context);
    });
};

const serializeAws_json1_1ScheduleRunConfiguration = (
  input: ScheduleRunConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.auxiliaryApps !== undefined &&
      input.auxiliaryApps !== null && {
        auxiliaryApps: serializeAws_json1_1AmazonResourceNames(input.auxiliaryApps, context),
      }),
    ...(input.billingMethod !== undefined && input.billingMethod !== null && { billingMethod: input.billingMethod }),
    ...(input.customerArtifactPaths !== undefined &&
      input.customerArtifactPaths !== null && {
        customerArtifactPaths: serializeAws_json1_1CustomerArtifactPaths(input.customerArtifactPaths, context),
      }),
    ...(input.extraDataPackageArn !== undefined &&
      input.extraDataPackageArn !== null && { extraDataPackageArn: input.extraDataPackageArn }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.location !== undefined &&
      input.location !== null && { location: serializeAws_json1_1Location(input.location, context) }),
    ...(input.networkProfileArn !== undefined &&
      input.networkProfileArn !== null && { networkProfileArn: input.networkProfileArn }),
    ...(input.radios !== undefined &&
      input.radios !== null && { radios: serializeAws_json1_1Radios(input.radios, context) }),
    ...(input.vpceConfigurationArns !== undefined &&
      input.vpceConfigurationArns !== null && {
        vpceConfigurationArns: serializeAws_json1_1AmazonResourceNames(input.vpceConfigurationArns, context),
      }),
  };
};

const serializeAws_json1_1ScheduleRunRequest = (input: ScheduleRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.appArn !== undefined && input.appArn !== null && { appArn: input.appArn }),
    ...(input.configuration !== undefined &&
      input.configuration !== null && {
        configuration: serializeAws_json1_1ScheduleRunConfiguration(input.configuration, context),
      }),
    ...(input.devicePoolArn !== undefined && input.devicePoolArn !== null && { devicePoolArn: input.devicePoolArn }),
    ...(input.deviceSelectionConfiguration !== undefined &&
      input.deviceSelectionConfiguration !== null && {
        deviceSelectionConfiguration: serializeAws_json1_1DeviceSelectionConfiguration(
          input.deviceSelectionConfiguration,
          context
        ),
      }),
    ...(input.executionConfiguration !== undefined &&
      input.executionConfiguration !== null && {
        executionConfiguration: serializeAws_json1_1ExecutionConfiguration(input.executionConfiguration, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    ...(input.test !== undefined &&
      input.test !== null && { test: serializeAws_json1_1ScheduleRunTest(input.test, context) }),
  };
};

const serializeAws_json1_1ScheduleRunTest = (input: ScheduleRunTest, context: __SerdeContext): any => {
  return {
    ...(input.filter !== undefined && input.filter !== null && { filter: input.filter }),
    ...(input.parameters !== undefined &&
      input.parameters !== null && { parameters: serializeAws_json1_1TestParameters(input.parameters, context) }),
    ...(input.testPackageArn !== undefined &&
      input.testPackageArn !== null && { testPackageArn: input.testPackageArn }),
    ...(input.testSpecArn !== undefined && input.testSpecArn !== null && { testSpecArn: input.testSpecArn }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1StopJobRequest = (input: StopJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1StopRemoteAccessSessionRequest = (
  input: StopRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1StopRunRequest = (input: StopRunRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
  };
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1TestGridVpcConfig = (input: TestGridVpcConfig, context: __SerdeContext): any => {
  return {
    ...(input.securityGroupIds !== undefined &&
      input.securityGroupIds !== null && {
        securityGroupIds: serializeAws_json1_1SecurityGroupIds(input.securityGroupIds, context),
      }),
    ...(input.subnetIds !== undefined &&
      input.subnetIds !== null && { subnetIds: serializeAws_json1_1SubnetIds(input.subnetIds, context) }),
    ...(input.vpcId !== undefined && input.vpcId !== null && { vpcId: input.vpcId }),
  };
};

const serializeAws_json1_1TestParameters = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDeviceInstanceRequest = (
  input: UpdateDeviceInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.labels !== undefined &&
      input.labels !== null && { labels: serializeAws_json1_1InstanceLabels(input.labels, context) }),
    ...(input.profileArn !== undefined && input.profileArn !== null && { profileArn: input.profileArn }),
  };
};

const serializeAws_json1_1UpdateDevicePoolRequest = (input: UpdateDevicePoolRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.clearMaxDevices !== undefined &&
      input.clearMaxDevices !== null && { clearMaxDevices: input.clearMaxDevices }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.maxDevices !== undefined && input.maxDevices !== null && { maxDevices: input.maxDevices }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.rules !== undefined &&
      input.rules !== null && { rules: serializeAws_json1_1Rules(input.rules, context) }),
  };
};

const serializeAws_json1_1UpdateInstanceProfileRequest = (
  input: UpdateInstanceProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.excludeAppPackagesFromCleanup !== undefined &&
      input.excludeAppPackagesFromCleanup !== null && {
        excludeAppPackagesFromCleanup: serializeAws_json1_1PackageIds(input.excludeAppPackagesFromCleanup, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.packageCleanup !== undefined &&
      input.packageCleanup !== null && { packageCleanup: input.packageCleanup }),
    ...(input.rebootAfterUse !== undefined &&
      input.rebootAfterUse !== null && { rebootAfterUse: input.rebootAfterUse }),
  };
};

const serializeAws_json1_1UpdateNetworkProfileRequest = (
  input: UpdateNetworkProfileRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.downlinkBandwidthBits !== undefined &&
      input.downlinkBandwidthBits !== null && { downlinkBandwidthBits: input.downlinkBandwidthBits }),
    ...(input.downlinkDelayMs !== undefined &&
      input.downlinkDelayMs !== null && { downlinkDelayMs: input.downlinkDelayMs }),
    ...(input.downlinkJitterMs !== undefined &&
      input.downlinkJitterMs !== null && { downlinkJitterMs: input.downlinkJitterMs }),
    ...(input.downlinkLossPercent !== undefined &&
      input.downlinkLossPercent !== null && { downlinkLossPercent: input.downlinkLossPercent }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
    ...(input.uplinkBandwidthBits !== undefined &&
      input.uplinkBandwidthBits !== null && { uplinkBandwidthBits: input.uplinkBandwidthBits }),
    ...(input.uplinkDelayMs !== undefined && input.uplinkDelayMs !== null && { uplinkDelayMs: input.uplinkDelayMs }),
    ...(input.uplinkJitterMs !== undefined &&
      input.uplinkJitterMs !== null && { uplinkJitterMs: input.uplinkJitterMs }),
    ...(input.uplinkLossPercent !== undefined &&
      input.uplinkLossPercent !== null && { uplinkLossPercent: input.uplinkLossPercent }),
  };
};

const serializeAws_json1_1UpdateProjectRequest = (input: UpdateProjectRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.defaultJobTimeoutMinutes !== undefined &&
      input.defaultJobTimeoutMinutes !== null && { defaultJobTimeoutMinutes: input.defaultJobTimeoutMinutes }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1UpdateTestGridProjectRequest = (
  input: UpdateTestGridProjectRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.projectArn !== undefined && input.projectArn !== null && { projectArn: input.projectArn }),
    ...(input.vpcConfig !== undefined &&
      input.vpcConfig !== null && { vpcConfig: serializeAws_json1_1TestGridVpcConfig(input.vpcConfig, context) }),
  };
};

const serializeAws_json1_1UpdateUploadRequest = (input: UpdateUploadRequest, context: __SerdeContext): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
    ...(input.editContent !== undefined && input.editContent !== null && { editContent: input.editContent }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_json1_1UpdateVPCEConfigurationRequest = (
  input: UpdateVPCEConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.arn !== undefined && input.arn !== null && { arn: input.arn }),
    ...(input.serviceDnsName !== undefined &&
      input.serviceDnsName !== null && { serviceDnsName: input.serviceDnsName }),
    ...(input.vpceConfigurationDescription !== undefined &&
      input.vpceConfigurationDescription !== null && {
        vpceConfigurationDescription: input.vpceConfigurationDescription,
      }),
    ...(input.vpceConfigurationName !== undefined &&
      input.vpceConfigurationName !== null && { vpceConfigurationName: input.vpceConfigurationName }),
    ...(input.vpceServiceName !== undefined &&
      input.vpceServiceName !== null && { vpceServiceName: input.vpceServiceName }),
  };
};

const deserializeAws_json1_1AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return {
    awsAccountNumber: __expectString(output.awsAccountNumber),
    defaultJobTimeoutMinutes: __expectInt32(output.defaultJobTimeoutMinutes),
    maxJobTimeoutMinutes: __expectInt32(output.maxJobTimeoutMinutes),
    maxSlots:
      output.maxSlots !== undefined && output.maxSlots !== null
        ? deserializeAws_json1_1MaxSlotMap(output.maxSlots, context)
        : undefined,
    skipAppResign: __expectBoolean(output.skipAppResign),
    trialMinutes:
      output.trialMinutes !== undefined && output.trialMinutes !== null
        ? deserializeAws_json1_1TrialMinutes(output.trialMinutes, context)
        : undefined,
    unmeteredDevices:
      output.unmeteredDevices !== undefined && output.unmeteredDevices !== null
        ? deserializeAws_json1_1PurchasedDevicesMap(output.unmeteredDevices, context)
        : undefined,
    unmeteredRemoteAccessDevices:
      output.unmeteredRemoteAccessDevices !== undefined && output.unmeteredRemoteAccessDevices !== null
        ? deserializeAws_json1_1PurchasedDevicesMap(output.unmeteredRemoteAccessDevices, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AndroidPaths = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ArgumentException = (output: any, context: __SerdeContext): ArgumentException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Artifact = (output: any, context: __SerdeContext): Artifact => {
  return {
    arn: __expectString(output.arn),
    extension: __expectString(output.extension),
    name: __expectString(output.name),
    type: __expectString(output.type),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1Artifacts = (output: any, context: __SerdeContext): Artifact[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Artifact(entry, context);
    });
};

const deserializeAws_json1_1CannotDeleteException = (output: any, context: __SerdeContext): CannotDeleteException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Counters = (output: any, context: __SerdeContext): Counters => {
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

const deserializeAws_json1_1CPU = (output: any, context: __SerdeContext): CPU => {
  return {
    architecture: __expectString(output.architecture),
    clock: __limitedParseDouble(output.clock),
    frequency: __expectString(output.frequency),
  } as any;
};

const deserializeAws_json1_1CreateDevicePoolResult = (output: any, context: __SerdeContext): CreateDevicePoolResult => {
  return {
    devicePool:
      output.devicePool !== undefined && output.devicePool !== null
        ? deserializeAws_json1_1DevicePool(output.devicePool, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateInstanceProfileResult = (
  output: any,
  context: __SerdeContext
): CreateInstanceProfileResult => {
  return {
    instanceProfile:
      output.instanceProfile !== undefined && output.instanceProfile !== null
        ? deserializeAws_json1_1InstanceProfile(output.instanceProfile, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateNetworkProfileResult = (
  output: any,
  context: __SerdeContext
): CreateNetworkProfileResult => {
  return {
    networkProfile:
      output.networkProfile !== undefined && output.networkProfile !== null
        ? deserializeAws_json1_1NetworkProfile(output.networkProfile, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateProjectResult = (output: any, context: __SerdeContext): CreateProjectResult => {
  return {
    project:
      output.project !== undefined && output.project !== null
        ? deserializeAws_json1_1Project(output.project, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): CreateRemoteAccessSessionResult => {
  return {
    remoteAccessSession:
      output.remoteAccessSession !== undefined && output.remoteAccessSession !== null
        ? deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTestGridProjectResult = (
  output: any,
  context: __SerdeContext
): CreateTestGridProjectResult => {
  return {
    testGridProject:
      output.testGridProject !== undefined && output.testGridProject !== null
        ? deserializeAws_json1_1TestGridProject(output.testGridProject, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateTestGridUrlResult = (
  output: any,
  context: __SerdeContext
): CreateTestGridUrlResult => {
  return {
    expires:
      output.expires !== undefined && output.expires !== null ? new Date(Math.round(output.expires * 1000)) : undefined,
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1CreateUploadResult = (output: any, context: __SerdeContext): CreateUploadResult => {
  return {
    upload:
      output.upload !== undefined && output.upload !== null
        ? deserializeAws_json1_1Upload(output.upload, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVPCEConfigurationResult = (
  output: any,
  context: __SerdeContext
): CreateVPCEConfigurationResult => {
  return {
    vpceConfiguration:
      output.vpceConfiguration !== undefined && output.vpceConfiguration !== null
        ? deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomerArtifactPaths = (output: any, context: __SerdeContext): CustomerArtifactPaths => {
  return {
    androidPaths:
      output.androidPaths !== undefined && output.androidPaths !== null
        ? deserializeAws_json1_1AndroidPaths(output.androidPaths, context)
        : undefined,
    deviceHostPaths:
      output.deviceHostPaths !== undefined && output.deviceHostPaths !== null
        ? deserializeAws_json1_1DeviceHostPaths(output.deviceHostPaths, context)
        : undefined,
    iosPaths:
      output.iosPaths !== undefined && output.iosPaths !== null
        ? deserializeAws_json1_1IosPaths(output.iosPaths, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteDevicePoolResult = (output: any, context: __SerdeContext): DeleteDevicePoolResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteInstanceProfileResult = (
  output: any,
  context: __SerdeContext
): DeleteInstanceProfileResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteNetworkProfileResult = (
  output: any,
  context: __SerdeContext
): DeleteNetworkProfileResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteProjectResult = (output: any, context: __SerdeContext): DeleteProjectResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): DeleteRemoteAccessSessionResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteRunResult = (output: any, context: __SerdeContext): DeleteRunResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteTestGridProjectResult = (
  output: any,
  context: __SerdeContext
): DeleteTestGridProjectResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteUploadResult = (output: any, context: __SerdeContext): DeleteUploadResult => {
  return {} as any;
};

const deserializeAws_json1_1DeleteVPCEConfigurationResult = (
  output: any,
  context: __SerdeContext
): DeleteVPCEConfigurationResult => {
  return {} as any;
};

const deserializeAws_json1_1Device = (output: any, context: __SerdeContext): Device => {
  return {
    arn: __expectString(output.arn),
    availability: __expectString(output.availability),
    carrier: __expectString(output.carrier),
    cpu: output.cpu !== undefined && output.cpu !== null ? deserializeAws_json1_1CPU(output.cpu, context) : undefined,
    fleetName: __expectString(output.fleetName),
    fleetType: __expectString(output.fleetType),
    formFactor: __expectString(output.formFactor),
    heapSize: __expectLong(output.heapSize),
    image: __expectString(output.image),
    instances:
      output.instances !== undefined && output.instances !== null
        ? deserializeAws_json1_1DeviceInstances(output.instances, context)
        : undefined,
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
    resolution:
      output.resolution !== undefined && output.resolution !== null
        ? deserializeAws_json1_1Resolution(output.resolution, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeviceFilter = (output: any, context: __SerdeContext): DeviceFilter => {
  return {
    attribute: __expectString(output.attribute),
    operator: __expectString(output.operator),
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_json1_1DeviceFilterValues(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeviceFilters = (output: any, context: __SerdeContext): DeviceFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeviceFilter(entry, context);
    });
};

const deserializeAws_json1_1DeviceFilterValues = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DeviceHostPaths = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1DeviceInstance = (output: any, context: __SerdeContext): DeviceInstance => {
  return {
    arn: __expectString(output.arn),
    deviceArn: __expectString(output.deviceArn),
    instanceProfile:
      output.instanceProfile !== undefined && output.instanceProfile !== null
        ? deserializeAws_json1_1InstanceProfile(output.instanceProfile, context)
        : undefined,
    labels:
      output.labels !== undefined && output.labels !== null
        ? deserializeAws_json1_1InstanceLabels(output.labels, context)
        : undefined,
    status: __expectString(output.status),
    udid: __expectString(output.udid),
  } as any;
};

const deserializeAws_json1_1DeviceInstances = (output: any, context: __SerdeContext): DeviceInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DeviceInstance(entry, context);
    });
};

const deserializeAws_json1_1DeviceMinutes = (output: any, context: __SerdeContext): DeviceMinutes => {
  return {
    metered: __limitedParseDouble(output.metered),
    total: __limitedParseDouble(output.total),
    unmetered: __limitedParseDouble(output.unmetered),
  } as any;
};

const deserializeAws_json1_1DevicePool = (output: any, context: __SerdeContext): DevicePool => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    maxDevices: __expectInt32(output.maxDevices),
    name: __expectString(output.name),
    rules:
      output.rules !== undefined && output.rules !== null
        ? deserializeAws_json1_1Rules(output.rules, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1DevicePoolCompatibilityResult = (
  output: any,
  context: __SerdeContext
): DevicePoolCompatibilityResult => {
  return {
    compatible: __expectBoolean(output.compatible),
    device:
      output.device !== undefined && output.device !== null
        ? deserializeAws_json1_1Device(output.device, context)
        : undefined,
    incompatibilityMessages:
      output.incompatibilityMessages !== undefined && output.incompatibilityMessages !== null
        ? deserializeAws_json1_1IncompatibilityMessages(output.incompatibilityMessages, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DevicePoolCompatibilityResults = (
  output: any,
  context: __SerdeContext
): DevicePoolCompatibilityResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DevicePoolCompatibilityResult(entry, context);
    });
};

const deserializeAws_json1_1DevicePools = (output: any, context: __SerdeContext): DevicePool[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DevicePool(entry, context);
    });
};

const deserializeAws_json1_1Devices = (output: any, context: __SerdeContext): Device[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Device(entry, context);
    });
};

const deserializeAws_json1_1DeviceSelectionResult = (output: any, context: __SerdeContext): DeviceSelectionResult => {
  return {
    filters:
      output.filters !== undefined && output.filters !== null
        ? deserializeAws_json1_1DeviceFilters(output.filters, context)
        : undefined,
    matchedDevicesCount: __expectInt32(output.matchedDevicesCount),
    maxDevices: __expectInt32(output.maxDevices),
  } as any;
};

const deserializeAws_json1_1GetAccountSettingsResult = (
  output: any,
  context: __SerdeContext
): GetAccountSettingsResult => {
  return {
    accountSettings:
      output.accountSettings !== undefined && output.accountSettings !== null
        ? deserializeAws_json1_1AccountSettings(output.accountSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDeviceInstanceResult = (
  output: any,
  context: __SerdeContext
): GetDeviceInstanceResult => {
  return {
    deviceInstance:
      output.deviceInstance !== undefined && output.deviceInstance !== null
        ? deserializeAws_json1_1DeviceInstance(output.deviceInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDevicePoolCompatibilityResult = (
  output: any,
  context: __SerdeContext
): GetDevicePoolCompatibilityResult => {
  return {
    compatibleDevices:
      output.compatibleDevices !== undefined && output.compatibleDevices !== null
        ? deserializeAws_json1_1DevicePoolCompatibilityResults(output.compatibleDevices, context)
        : undefined,
    incompatibleDevices:
      output.incompatibleDevices !== undefined && output.incompatibleDevices !== null
        ? deserializeAws_json1_1DevicePoolCompatibilityResults(output.incompatibleDevices, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDevicePoolResult = (output: any, context: __SerdeContext): GetDevicePoolResult => {
  return {
    devicePool:
      output.devicePool !== undefined && output.devicePool !== null
        ? deserializeAws_json1_1DevicePool(output.devicePool, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetDeviceResult = (output: any, context: __SerdeContext): GetDeviceResult => {
  return {
    device:
      output.device !== undefined && output.device !== null
        ? deserializeAws_json1_1Device(output.device, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstanceProfileResult = (
  output: any,
  context: __SerdeContext
): GetInstanceProfileResult => {
  return {
    instanceProfile:
      output.instanceProfile !== undefined && output.instanceProfile !== null
        ? deserializeAws_json1_1InstanceProfile(output.instanceProfile, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetJobResult = (output: any, context: __SerdeContext): GetJobResult => {
  return {
    job: output.job !== undefined && output.job !== null ? deserializeAws_json1_1Job(output.job, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetNetworkProfileResult = (
  output: any,
  context: __SerdeContext
): GetNetworkProfileResult => {
  return {
    networkProfile:
      output.networkProfile !== undefined && output.networkProfile !== null
        ? deserializeAws_json1_1NetworkProfile(output.networkProfile, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOfferingStatusResult = (
  output: any,
  context: __SerdeContext
): GetOfferingStatusResult => {
  return {
    current:
      output.current !== undefined && output.current !== null
        ? deserializeAws_json1_1OfferingStatusMap(output.current, context)
        : undefined,
    nextPeriod:
      output.nextPeriod !== undefined && output.nextPeriod !== null
        ? deserializeAws_json1_1OfferingStatusMap(output.nextPeriod, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1GetProjectResult = (output: any, context: __SerdeContext): GetProjectResult => {
  return {
    project:
      output.project !== undefined && output.project !== null
        ? deserializeAws_json1_1Project(output.project, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): GetRemoteAccessSessionResult => {
  return {
    remoteAccessSession:
      output.remoteAccessSession !== undefined && output.remoteAccessSession !== null
        ? deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetRunResult = (output: any, context: __SerdeContext): GetRunResult => {
  return {
    run: output.run !== undefined && output.run !== null ? deserializeAws_json1_1Run(output.run, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetSuiteResult = (output: any, context: __SerdeContext): GetSuiteResult => {
  return {
    suite:
      output.suite !== undefined && output.suite !== null
        ? deserializeAws_json1_1Suite(output.suite, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTestGridProjectResult = (
  output: any,
  context: __SerdeContext
): GetTestGridProjectResult => {
  return {
    testGridProject:
      output.testGridProject !== undefined && output.testGridProject !== null
        ? deserializeAws_json1_1TestGridProject(output.testGridProject, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTestGridSessionResult = (
  output: any,
  context: __SerdeContext
): GetTestGridSessionResult => {
  return {
    testGridSession:
      output.testGridSession !== undefined && output.testGridSession !== null
        ? deserializeAws_json1_1TestGridSession(output.testGridSession, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetTestResult = (output: any, context: __SerdeContext): GetTestResult => {
  return {
    test:
      output.test !== undefined && output.test !== null ? deserializeAws_json1_1Test(output.test, context) : undefined,
  } as any;
};

const deserializeAws_json1_1GetUploadResult = (output: any, context: __SerdeContext): GetUploadResult => {
  return {
    upload:
      output.upload !== undefined && output.upload !== null
        ? deserializeAws_json1_1Upload(output.upload, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetVPCEConfigurationResult = (
  output: any,
  context: __SerdeContext
): GetVPCEConfigurationResult => {
  return {
    vpceConfiguration:
      output.vpceConfiguration !== undefined && output.vpceConfiguration !== null
        ? deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IdempotencyException = (output: any, context: __SerdeContext): IdempotencyException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IncompatibilityMessage = (output: any, context: __SerdeContext): IncompatibilityMessage => {
  return {
    message: __expectString(output.message),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1IncompatibilityMessages = (
  output: any,
  context: __SerdeContext
): IncompatibilityMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IncompatibilityMessage(entry, context);
    });
};

const deserializeAws_json1_1InstallToRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): InstallToRemoteAccessSessionResult => {
  return {
    appUpload:
      output.appUpload !== undefined && output.appUpload !== null
        ? deserializeAws_json1_1Upload(output.appUpload, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InstanceLabels = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1InstanceProfile = (output: any, context: __SerdeContext): InstanceProfile => {
  return {
    arn: __expectString(output.arn),
    description: __expectString(output.description),
    excludeAppPackagesFromCleanup:
      output.excludeAppPackagesFromCleanup !== undefined && output.excludeAppPackagesFromCleanup !== null
        ? deserializeAws_json1_1PackageIds(output.excludeAppPackagesFromCleanup, context)
        : undefined,
    name: __expectString(output.name),
    packageCleanup: __expectBoolean(output.packageCleanup),
    rebootAfterUse: __expectBoolean(output.rebootAfterUse),
  } as any;
};

const deserializeAws_json1_1InstanceProfiles = (output: any, context: __SerdeContext): InstanceProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceProfile(entry, context);
    });
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1IosPaths = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Job = (output: any, context: __SerdeContext): Job => {
  return {
    arn: __expectString(output.arn),
    counters:
      output.counters !== undefined && output.counters !== null
        ? deserializeAws_json1_1Counters(output.counters, context)
        : undefined,
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    device:
      output.device !== undefined && output.device !== null
        ? deserializeAws_json1_1Device(output.device, context)
        : undefined,
    deviceMinutes:
      output.deviceMinutes !== undefined && output.deviceMinutes !== null
        ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
        : undefined,
    instanceArn: __expectString(output.instanceArn),
    message: __expectString(output.message),
    name: __expectString(output.name),
    result: __expectString(output.result),
    started:
      output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
    type: __expectString(output.type),
    videoCapture: __expectBoolean(output.videoCapture),
    videoEndpoint: __expectString(output.videoEndpoint),
  } as any;
};

const deserializeAws_json1_1Jobs = (output: any, context: __SerdeContext): Job[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Job(entry, context);
    });
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1ListArtifactsResult = (output: any, context: __SerdeContext): ListArtifactsResult => {
  return {
    artifacts:
      output.artifacts !== undefined && output.artifacts !== null
        ? deserializeAws_json1_1Artifacts(output.artifacts, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDeviceInstancesResult = (
  output: any,
  context: __SerdeContext
): ListDeviceInstancesResult => {
  return {
    deviceInstances:
      output.deviceInstances !== undefined && output.deviceInstances !== null
        ? deserializeAws_json1_1DeviceInstances(output.deviceInstances, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDevicePoolsResult = (output: any, context: __SerdeContext): ListDevicePoolsResult => {
  return {
    devicePools:
      output.devicePools !== undefined && output.devicePools !== null
        ? deserializeAws_json1_1DevicePools(output.devicePools, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListDevicesResult = (output: any, context: __SerdeContext): ListDevicesResult => {
  return {
    devices:
      output.devices !== undefined && output.devices !== null
        ? deserializeAws_json1_1Devices(output.devices, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListInstanceProfilesResult = (
  output: any,
  context: __SerdeContext
): ListInstanceProfilesResult => {
  return {
    instanceProfiles:
      output.instanceProfiles !== undefined && output.instanceProfiles !== null
        ? deserializeAws_json1_1InstanceProfiles(output.instanceProfiles, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListJobsResult = (output: any, context: __SerdeContext): ListJobsResult => {
  return {
    jobs:
      output.jobs !== undefined && output.jobs !== null ? deserializeAws_json1_1Jobs(output.jobs, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListNetworkProfilesResult = (
  output: any,
  context: __SerdeContext
): ListNetworkProfilesResult => {
  return {
    networkProfiles:
      output.networkProfiles !== undefined && output.networkProfiles !== null
        ? deserializeAws_json1_1NetworkProfiles(output.networkProfiles, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListOfferingPromotionsResult = (
  output: any,
  context: __SerdeContext
): ListOfferingPromotionsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    offeringPromotions:
      output.offeringPromotions !== undefined && output.offeringPromotions !== null
        ? deserializeAws_json1_1OfferingPromotions(output.offeringPromotions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListOfferingsResult = (output: any, context: __SerdeContext): ListOfferingsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    offerings:
      output.offerings !== undefined && output.offerings !== null
        ? deserializeAws_json1_1Offerings(output.offerings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListOfferingTransactionsResult = (
  output: any,
  context: __SerdeContext
): ListOfferingTransactionsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    offeringTransactions:
      output.offeringTransactions !== undefined && output.offeringTransactions !== null
        ? deserializeAws_json1_1OfferingTransactions(output.offeringTransactions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListProjectsResult = (output: any, context: __SerdeContext): ListProjectsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    projects:
      output.projects !== undefined && output.projects !== null
        ? deserializeAws_json1_1Projects(output.projects, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRemoteAccessSessionsResult = (
  output: any,
  context: __SerdeContext
): ListRemoteAccessSessionsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    remoteAccessSessions:
      output.remoteAccessSessions !== undefined && output.remoteAccessSessions !== null
        ? deserializeAws_json1_1RemoteAccessSessions(output.remoteAccessSessions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListRunsResult = (output: any, context: __SerdeContext): ListRunsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    runs:
      output.runs !== undefined && output.runs !== null ? deserializeAws_json1_1Runs(output.runs, context) : undefined,
  } as any;
};

const deserializeAws_json1_1ListSamplesResult = (output: any, context: __SerdeContext): ListSamplesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    samples:
      output.samples !== undefined && output.samples !== null
        ? deserializeAws_json1_1Samples(output.samples, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListSuitesResult = (output: any, context: __SerdeContext): ListSuitesResult => {
  return {
    nextToken: __expectString(output.nextToken),
    suites:
      output.suites !== undefined && output.suites !== null
        ? deserializeAws_json1_1Suites(output.suites, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTestGridProjectsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridProjectsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    testGridProjects:
      output.testGridProjects !== undefined && output.testGridProjects !== null
        ? deserializeAws_json1_1TestGridProjects(output.testGridProjects, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTestGridSessionActionsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionActionsResult => {
  return {
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_json1_1TestGridSessionActions(output.actions, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListTestGridSessionArtifactsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionArtifactsResult => {
  return {
    artifacts:
      output.artifacts !== undefined && output.artifacts !== null
        ? deserializeAws_json1_1TestGridSessionArtifacts(output.artifacts, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_1ListTestGridSessionsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    testGridSessions:
      output.testGridSessions !== undefined && output.testGridSessions !== null
        ? deserializeAws_json1_1TestGridSessions(output.testGridSessions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTestsResult = (output: any, context: __SerdeContext): ListTestsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    tests:
      output.tests !== undefined && output.tests !== null
        ? deserializeAws_json1_1Tests(output.tests, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListUniqueProblemsResult = (
  output: any,
  context: __SerdeContext
): ListUniqueProblemsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    uniqueProblems:
      output.uniqueProblems !== undefined && output.uniqueProblems !== null
        ? deserializeAws_json1_1UniqueProblemsByExecutionResultMap(output.uniqueProblems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListUploadsResult = (output: any, context: __SerdeContext): ListUploadsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    uploads:
      output.uploads !== undefined && output.uploads !== null
        ? deserializeAws_json1_1Uploads(output.uploads, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListVPCEConfigurationsResult = (
  output: any,
  context: __SerdeContext
): ListVPCEConfigurationsResult => {
  return {
    nextToken: __expectString(output.nextToken),
    vpceConfigurations:
      output.vpceConfigurations !== undefined && output.vpceConfigurations !== null
        ? deserializeAws_json1_1VPCEConfigurations(output.vpceConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Location = (output: any, context: __SerdeContext): Location => {
  return {
    latitude: __limitedParseDouble(output.latitude),
    longitude: __limitedParseDouble(output.longitude),
  } as any;
};

const deserializeAws_json1_1MaxSlotMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectInt32(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1MonetaryAmount = (output: any, context: __SerdeContext): MonetaryAmount => {
  return {
    amount: __limitedParseDouble(output.amount),
    currencyCode: __expectString(output.currencyCode),
  } as any;
};

const deserializeAws_json1_1NetworkProfile = (output: any, context: __SerdeContext): NetworkProfile => {
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

const deserializeAws_json1_1NetworkProfiles = (output: any, context: __SerdeContext): NetworkProfile[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NetworkProfile(entry, context);
    });
};

const deserializeAws_json1_1NotEligibleException = (output: any, context: __SerdeContext): NotEligibleException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1NotFoundException = (output: any, context: __SerdeContext): NotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1Offering = (output: any, context: __SerdeContext): Offering => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
    platform: __expectString(output.platform),
    recurringCharges:
      output.recurringCharges !== undefined && output.recurringCharges !== null
        ? deserializeAws_json1_1RecurringCharges(output.recurringCharges, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1OfferingPromotion = (output: any, context: __SerdeContext): OfferingPromotion => {
  return {
    description: __expectString(output.description),
    id: __expectString(output.id),
  } as any;
};

const deserializeAws_json1_1OfferingPromotions = (output: any, context: __SerdeContext): OfferingPromotion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OfferingPromotion(entry, context);
    });
};

const deserializeAws_json1_1Offerings = (output: any, context: __SerdeContext): Offering[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Offering(entry, context);
    });
};

const deserializeAws_json1_1OfferingStatus = (output: any, context: __SerdeContext): OfferingStatus => {
  return {
    effectiveOn:
      output.effectiveOn !== undefined && output.effectiveOn !== null
        ? new Date(Math.round(output.effectiveOn * 1000))
        : undefined,
    offering:
      output.offering !== undefined && output.offering !== null
        ? deserializeAws_json1_1Offering(output.offering, context)
        : undefined,
    quantity: __expectInt32(output.quantity),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1OfferingStatusMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: OfferingStatus } => {
  return Object.entries(output).reduce((acc: { [key: string]: OfferingStatus }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1OfferingStatus(value, context),
    };
  }, {});
};

const deserializeAws_json1_1OfferingTransaction = (output: any, context: __SerdeContext): OfferingTransaction => {
  return {
    cost:
      output.cost !== undefined && output.cost !== null
        ? deserializeAws_json1_1MonetaryAmount(output.cost, context)
        : undefined,
    createdOn:
      output.createdOn !== undefined && output.createdOn !== null
        ? new Date(Math.round(output.createdOn * 1000))
        : undefined,
    offeringPromotionId: __expectString(output.offeringPromotionId),
    offeringStatus:
      output.offeringStatus !== undefined && output.offeringStatus !== null
        ? deserializeAws_json1_1OfferingStatus(output.offeringStatus, context)
        : undefined,
    transactionId: __expectString(output.transactionId),
  } as any;
};

const deserializeAws_json1_1OfferingTransactions = (output: any, context: __SerdeContext): OfferingTransaction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OfferingTransaction(entry, context);
    });
};

const deserializeAws_json1_1PackageIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Problem = (output: any, context: __SerdeContext): Problem => {
  return {
    device:
      output.device !== undefined && output.device !== null
        ? deserializeAws_json1_1Device(output.device, context)
        : undefined,
    job:
      output.job !== undefined && output.job !== null
        ? deserializeAws_json1_1ProblemDetail(output.job, context)
        : undefined,
    message: __expectString(output.message),
    result: __expectString(output.result),
    run:
      output.run !== undefined && output.run !== null
        ? deserializeAws_json1_1ProblemDetail(output.run, context)
        : undefined,
    suite:
      output.suite !== undefined && output.suite !== null
        ? deserializeAws_json1_1ProblemDetail(output.suite, context)
        : undefined,
    test:
      output.test !== undefined && output.test !== null
        ? deserializeAws_json1_1ProblemDetail(output.test, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ProblemDetail = (output: any, context: __SerdeContext): ProblemDetail => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1Problems = (output: any, context: __SerdeContext): Problem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Problem(entry, context);
    });
};

const deserializeAws_json1_1Project = (output: any, context: __SerdeContext): Project => {
  return {
    arn: __expectString(output.arn),
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    defaultJobTimeoutMinutes: __expectInt32(output.defaultJobTimeoutMinutes),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_json1_1Projects = (output: any, context: __SerdeContext): Project[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Project(entry, context);
    });
};

const deserializeAws_json1_1PurchasedDevicesMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [DevicePlatform | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: __expectInt32(value) as any,
      };
    },
    {}
  );
};

const deserializeAws_json1_1PurchaseOfferingResult = (output: any, context: __SerdeContext): PurchaseOfferingResult => {
  return {
    offeringTransaction:
      output.offeringTransaction !== undefined && output.offeringTransaction !== null
        ? deserializeAws_json1_1OfferingTransaction(output.offeringTransaction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Radios = (output: any, context: __SerdeContext): Radios => {
  return {
    bluetooth: __expectBoolean(output.bluetooth),
    gps: __expectBoolean(output.gps),
    nfc: __expectBoolean(output.nfc),
    wifi: __expectBoolean(output.wifi),
  } as any;
};

const deserializeAws_json1_1RecurringCharge = (output: any, context: __SerdeContext): RecurringCharge => {
  return {
    cost:
      output.cost !== undefined && output.cost !== null
        ? deserializeAws_json1_1MonetaryAmount(output.cost, context)
        : undefined,
    frequency: __expectString(output.frequency),
  } as any;
};

const deserializeAws_json1_1RecurringCharges = (output: any, context: __SerdeContext): RecurringCharge[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RecurringCharge(entry, context);
    });
};

const deserializeAws_json1_1RemoteAccessSession = (output: any, context: __SerdeContext): RemoteAccessSession => {
  return {
    arn: __expectString(output.arn),
    billingMethod: __expectString(output.billingMethod),
    clientId: __expectString(output.clientId),
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    device:
      output.device !== undefined && output.device !== null
        ? deserializeAws_json1_1Device(output.device, context)
        : undefined,
    deviceMinutes:
      output.deviceMinutes !== undefined && output.deviceMinutes !== null
        ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
        : undefined,
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
      output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
  } as any;
};

const deserializeAws_json1_1RemoteAccessSessions = (output: any, context: __SerdeContext): RemoteAccessSession[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1RemoteAccessSession(entry, context);
    });
};

const deserializeAws_json1_1RenewOfferingResult = (output: any, context: __SerdeContext): RenewOfferingResult => {
  return {
    offeringTransaction:
      output.offeringTransaction !== undefined && output.offeringTransaction !== null
        ? deserializeAws_json1_1OfferingTransaction(output.offeringTransaction, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Resolution = (output: any, context: __SerdeContext): Resolution => {
  return {
    height: __expectInt32(output.height),
    width: __expectInt32(output.width),
  } as any;
};

const deserializeAws_json1_1Rule = (output: any, context: __SerdeContext): Rule => {
  return {
    attribute: __expectString(output.attribute),
    operator: __expectString(output.operator),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_json1_1Rules = (output: any, context: __SerdeContext): Rule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Rule(entry, context);
    });
};

const deserializeAws_json1_1Run = (output: any, context: __SerdeContext): Run => {
  return {
    appUpload: __expectString(output.appUpload),
    arn: __expectString(output.arn),
    billingMethod: __expectString(output.billingMethod),
    completedJobs: __expectInt32(output.completedJobs),
    counters:
      output.counters !== undefined && output.counters !== null
        ? deserializeAws_json1_1Counters(output.counters, context)
        : undefined,
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    customerArtifactPaths:
      output.customerArtifactPaths !== undefined && output.customerArtifactPaths !== null
        ? deserializeAws_json1_1CustomerArtifactPaths(output.customerArtifactPaths, context)
        : undefined,
    deviceMinutes:
      output.deviceMinutes !== undefined && output.deviceMinutes !== null
        ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
        : undefined,
    devicePoolArn: __expectString(output.devicePoolArn),
    deviceSelectionResult:
      output.deviceSelectionResult !== undefined && output.deviceSelectionResult !== null
        ? deserializeAws_json1_1DeviceSelectionResult(output.deviceSelectionResult, context)
        : undefined,
    eventCount: __expectInt32(output.eventCount),
    jobTimeoutMinutes: __expectInt32(output.jobTimeoutMinutes),
    locale: __expectString(output.locale),
    location:
      output.location !== undefined && output.location !== null
        ? deserializeAws_json1_1Location(output.location, context)
        : undefined,
    message: __expectString(output.message),
    name: __expectString(output.name),
    networkProfile:
      output.networkProfile !== undefined && output.networkProfile !== null
        ? deserializeAws_json1_1NetworkProfile(output.networkProfile, context)
        : undefined,
    parsingResultUrl: __expectString(output.parsingResultUrl),
    platform: __expectString(output.platform),
    radios:
      output.radios !== undefined && output.radios !== null
        ? deserializeAws_json1_1Radios(output.radios, context)
        : undefined,
    result: __expectString(output.result),
    resultCode: __expectString(output.resultCode),
    seed: __expectInt32(output.seed),
    skipAppResign: __expectBoolean(output.skipAppResign),
    started:
      output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
    testSpecArn: __expectString(output.testSpecArn),
    totalJobs: __expectInt32(output.totalJobs),
    type: __expectString(output.type),
    webUrl: __expectString(output.webUrl),
  } as any;
};

const deserializeAws_json1_1Runs = (output: any, context: __SerdeContext): Run[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Run(entry, context);
    });
};

const deserializeAws_json1_1Sample = (output: any, context: __SerdeContext): Sample => {
  return {
    arn: __expectString(output.arn),
    type: __expectString(output.type),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1Samples = (output: any, context: __SerdeContext): Sample[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Sample(entry, context);
    });
};

const deserializeAws_json1_1ScheduleRunResult = (output: any, context: __SerdeContext): ScheduleRunResult => {
  return {
    run: output.run !== undefined && output.run !== null ? deserializeAws_json1_1Run(output.run, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SecurityGroupIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1ServiceAccountException = (
  output: any,
  context: __SerdeContext
): ServiceAccountException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_1StopJobResult = (output: any, context: __SerdeContext): StopJobResult => {
  return {
    job: output.job !== undefined && output.job !== null ? deserializeAws_json1_1Job(output.job, context) : undefined,
  } as any;
};

const deserializeAws_json1_1StopRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): StopRemoteAccessSessionResult => {
  return {
    remoteAccessSession:
      output.remoteAccessSession !== undefined && output.remoteAccessSession !== null
        ? deserializeAws_json1_1RemoteAccessSession(output.remoteAccessSession, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1StopRunResult = (output: any, context: __SerdeContext): StopRunResult => {
  return {
    run: output.run !== undefined && output.run !== null ? deserializeAws_json1_1Run(output.run, context) : undefined,
  } as any;
};

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_json1_1Suite = (output: any, context: __SerdeContext): Suite => {
  return {
    arn: __expectString(output.arn),
    counters:
      output.counters !== undefined && output.counters !== null
        ? deserializeAws_json1_1Counters(output.counters, context)
        : undefined,
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    deviceMinutes:
      output.deviceMinutes !== undefined && output.deviceMinutes !== null
        ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
        : undefined,
    message: __expectString(output.message),
    name: __expectString(output.name),
    result: __expectString(output.result),
    started:
      output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1Suites = (output: any, context: __SerdeContext): Suite[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Suite(entry, context);
    });
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagOperationException = (output: any, context: __SerdeContext): TagOperationException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

const deserializeAws_json1_1TagPolicyException = (output: any, context: __SerdeContext): TagPolicyException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Test = (output: any, context: __SerdeContext): Test => {
  return {
    arn: __expectString(output.arn),
    counters:
      output.counters !== undefined && output.counters !== null
        ? deserializeAws_json1_1Counters(output.counters, context)
        : undefined,
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    deviceMinutes:
      output.deviceMinutes !== undefined && output.deviceMinutes !== null
        ? deserializeAws_json1_1DeviceMinutes(output.deviceMinutes, context)
        : undefined,
    message: __expectString(output.message),
    name: __expectString(output.name),
    result: __expectString(output.result),
    started:
      output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
    status: __expectString(output.status),
    stopped:
      output.stopped !== undefined && output.stopped !== null ? new Date(Math.round(output.stopped * 1000)) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_1TestGridProject = (output: any, context: __SerdeContext): TestGridProject => {
  return {
    arn: __expectString(output.arn),
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    description: __expectString(output.description),
    name: __expectString(output.name),
    vpcConfig:
      output.vpcConfig !== undefined && output.vpcConfig !== null
        ? deserializeAws_json1_1TestGridVpcConfig(output.vpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1TestGridProjects = (output: any, context: __SerdeContext): TestGridProject[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TestGridProject(entry, context);
    });
};

const deserializeAws_json1_1TestGridSession = (output: any, context: __SerdeContext): TestGridSession => {
  return {
    arn: __expectString(output.arn),
    billingMinutes: __limitedParseDouble(output.billingMinutes),
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    ended: output.ended !== undefined && output.ended !== null ? new Date(Math.round(output.ended * 1000)) : undefined,
    seleniumProperties: __expectString(output.seleniumProperties),
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_1TestGridSessionAction = (output: any, context: __SerdeContext): TestGridSessionAction => {
  return {
    action: __expectString(output.action),
    duration: __expectLong(output.duration),
    requestMethod: __expectString(output.requestMethod),
    started:
      output.started !== undefined && output.started !== null ? new Date(Math.round(output.started * 1000)) : undefined,
    statusCode: __expectString(output.statusCode),
  } as any;
};

const deserializeAws_json1_1TestGridSessionActions = (
  output: any,
  context: __SerdeContext
): TestGridSessionAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TestGridSessionAction(entry, context);
    });
};

const deserializeAws_json1_1TestGridSessionArtifact = (
  output: any,
  context: __SerdeContext
): TestGridSessionArtifact => {
  return {
    filename: __expectString(output.filename),
    type: __expectString(output.type),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1TestGridSessionArtifacts = (
  output: any,
  context: __SerdeContext
): TestGridSessionArtifact[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TestGridSessionArtifact(entry, context);
    });
};

const deserializeAws_json1_1TestGridSessions = (output: any, context: __SerdeContext): TestGridSession[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TestGridSession(entry, context);
    });
};

const deserializeAws_json1_1TestGridVpcConfig = (output: any, context: __SerdeContext): TestGridVpcConfig => {
  return {
    securityGroupIds:
      output.securityGroupIds !== undefined && output.securityGroupIds !== null
        ? deserializeAws_json1_1SecurityGroupIds(output.securityGroupIds, context)
        : undefined,
    subnetIds:
      output.subnetIds !== undefined && output.subnetIds !== null
        ? deserializeAws_json1_1SubnetIds(output.subnetIds, context)
        : undefined,
    vpcId: __expectString(output.vpcId),
  } as any;
};

const deserializeAws_json1_1Tests = (output: any, context: __SerdeContext): Test[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Test(entry, context);
    });
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    message: __expectString(output.message),
    resourceName: __expectString(output.resourceName),
  } as any;
};

const deserializeAws_json1_1TrialMinutes = (output: any, context: __SerdeContext): TrialMinutes => {
  return {
    remaining: __limitedParseDouble(output.remaining),
    total: __limitedParseDouble(output.total),
  } as any;
};

const deserializeAws_json1_1UniqueProblem = (output: any, context: __SerdeContext): UniqueProblem => {
  return {
    message: __expectString(output.message),
    problems:
      output.problems !== undefined && output.problems !== null
        ? deserializeAws_json1_1Problems(output.problems, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UniqueProblems = (output: any, context: __SerdeContext): UniqueProblem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1UniqueProblem(entry, context);
    });
};

const deserializeAws_json1_1UniqueProblemsByExecutionResultMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: UniqueProblem[] } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: UniqueProblem[] }, [key, value]: [ExecutionResult | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_json1_1UniqueProblems(value, context),
      };
    },
    {}
  );
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDeviceInstanceResult = (
  output: any,
  context: __SerdeContext
): UpdateDeviceInstanceResult => {
  return {
    deviceInstance:
      output.deviceInstance !== undefined && output.deviceInstance !== null
        ? deserializeAws_json1_1DeviceInstance(output.deviceInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateDevicePoolResult = (output: any, context: __SerdeContext): UpdateDevicePoolResult => {
  return {
    devicePool:
      output.devicePool !== undefined && output.devicePool !== null
        ? deserializeAws_json1_1DevicePool(output.devicePool, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateInstanceProfileResult = (
  output: any,
  context: __SerdeContext
): UpdateInstanceProfileResult => {
  return {
    instanceProfile:
      output.instanceProfile !== undefined && output.instanceProfile !== null
        ? deserializeAws_json1_1InstanceProfile(output.instanceProfile, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateNetworkProfileResult = (
  output: any,
  context: __SerdeContext
): UpdateNetworkProfileResult => {
  return {
    networkProfile:
      output.networkProfile !== undefined && output.networkProfile !== null
        ? deserializeAws_json1_1NetworkProfile(output.networkProfile, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateProjectResult = (output: any, context: __SerdeContext): UpdateProjectResult => {
  return {
    project:
      output.project !== undefined && output.project !== null
        ? deserializeAws_json1_1Project(output.project, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateTestGridProjectResult = (
  output: any,
  context: __SerdeContext
): UpdateTestGridProjectResult => {
  return {
    testGridProject:
      output.testGridProject !== undefined && output.testGridProject !== null
        ? deserializeAws_json1_1TestGridProject(output.testGridProject, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateUploadResult = (output: any, context: __SerdeContext): UpdateUploadResult => {
  return {
    upload:
      output.upload !== undefined && output.upload !== null
        ? deserializeAws_json1_1Upload(output.upload, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateVPCEConfigurationResult = (
  output: any,
  context: __SerdeContext
): UpdateVPCEConfigurationResult => {
  return {
    vpceConfiguration:
      output.vpceConfiguration !== undefined && output.vpceConfiguration !== null
        ? deserializeAws_json1_1VPCEConfiguration(output.vpceConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Upload = (output: any, context: __SerdeContext): Upload => {
  return {
    arn: __expectString(output.arn),
    category: __expectString(output.category),
    contentType: __expectString(output.contentType),
    created:
      output.created !== undefined && output.created !== null ? new Date(Math.round(output.created * 1000)) : undefined,
    message: __expectString(output.message),
    metadata: __expectString(output.metadata),
    name: __expectString(output.name),
    status: __expectString(output.status),
    type: __expectString(output.type),
    url: __expectString(output.url),
  } as any;
};

const deserializeAws_json1_1Uploads = (output: any, context: __SerdeContext): Upload[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Upload(entry, context);
    });
};

const deserializeAws_json1_1VPCEConfiguration = (output: any, context: __SerdeContext): VPCEConfiguration => {
  return {
    arn: __expectString(output.arn),
    serviceDnsName: __expectString(output.serviceDnsName),
    vpceConfigurationDescription: __expectString(output.vpceConfigurationDescription),
    vpceConfigurationName: __expectString(output.vpceConfigurationName),
    vpceServiceName: __expectString(output.vpceServiceName),
  } as any;
};

const deserializeAws_json1_1VPCEConfigurations = (output: any, context: __SerdeContext): VPCEConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1VPCEConfiguration(entry, context);
    });
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
