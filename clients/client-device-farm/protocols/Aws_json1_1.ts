import {
  CreateDevicePoolCommandInput,
  CreateDevicePoolCommandOutput
} from "../commands/CreateDevicePoolCommand";
import {
  CreateInstanceProfileCommandInput,
  CreateInstanceProfileCommandOutput
} from "../commands/CreateInstanceProfileCommand";
import {
  CreateNetworkProfileCommandInput,
  CreateNetworkProfileCommandOutput
} from "../commands/CreateNetworkProfileCommand";
import {
  CreateProjectCommandInput,
  CreateProjectCommandOutput
} from "../commands/CreateProjectCommand";
import {
  CreateRemoteAccessSessionCommandInput,
  CreateRemoteAccessSessionCommandOutput
} from "../commands/CreateRemoteAccessSessionCommand";
import {
  CreateTestGridProjectCommandInput,
  CreateTestGridProjectCommandOutput
} from "../commands/CreateTestGridProjectCommand";
import {
  CreateTestGridUrlCommandInput,
  CreateTestGridUrlCommandOutput
} from "../commands/CreateTestGridUrlCommand";
import {
  CreateUploadCommandInput,
  CreateUploadCommandOutput
} from "../commands/CreateUploadCommand";
import {
  CreateVPCEConfigurationCommandInput,
  CreateVPCEConfigurationCommandOutput
} from "../commands/CreateVPCEConfigurationCommand";
import {
  DeleteDevicePoolCommandInput,
  DeleteDevicePoolCommandOutput
} from "../commands/DeleteDevicePoolCommand";
import {
  DeleteInstanceProfileCommandInput,
  DeleteInstanceProfileCommandOutput
} from "../commands/DeleteInstanceProfileCommand";
import {
  DeleteNetworkProfileCommandInput,
  DeleteNetworkProfileCommandOutput
} from "../commands/DeleteNetworkProfileCommand";
import {
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput
} from "../commands/DeleteProjectCommand";
import {
  DeleteRemoteAccessSessionCommandInput,
  DeleteRemoteAccessSessionCommandOutput
} from "../commands/DeleteRemoteAccessSessionCommand";
import {
  DeleteRunCommandInput,
  DeleteRunCommandOutput
} from "../commands/DeleteRunCommand";
import {
  DeleteTestGridProjectCommandInput,
  DeleteTestGridProjectCommandOutput
} from "../commands/DeleteTestGridProjectCommand";
import {
  DeleteUploadCommandInput,
  DeleteUploadCommandOutput
} from "../commands/DeleteUploadCommand";
import {
  DeleteVPCEConfigurationCommandInput,
  DeleteVPCEConfigurationCommandOutput
} from "../commands/DeleteVPCEConfigurationCommand";
import {
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput
} from "../commands/GetAccountSettingsCommand";
import {
  GetDeviceCommandInput,
  GetDeviceCommandOutput
} from "../commands/GetDeviceCommand";
import {
  GetDeviceInstanceCommandInput,
  GetDeviceInstanceCommandOutput
} from "../commands/GetDeviceInstanceCommand";
import {
  GetDevicePoolCommandInput,
  GetDevicePoolCommandOutput
} from "../commands/GetDevicePoolCommand";
import {
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput
} from "../commands/GetDevicePoolCompatibilityCommand";
import {
  GetInstanceProfileCommandInput,
  GetInstanceProfileCommandOutput
} from "../commands/GetInstanceProfileCommand";
import {
  GetJobCommandInput,
  GetJobCommandOutput
} from "../commands/GetJobCommand";
import {
  GetNetworkProfileCommandInput,
  GetNetworkProfileCommandOutput
} from "../commands/GetNetworkProfileCommand";
import {
  GetOfferingStatusCommandInput,
  GetOfferingStatusCommandOutput
} from "../commands/GetOfferingStatusCommand";
import {
  GetProjectCommandInput,
  GetProjectCommandOutput
} from "../commands/GetProjectCommand";
import {
  GetRemoteAccessSessionCommandInput,
  GetRemoteAccessSessionCommandOutput
} from "../commands/GetRemoteAccessSessionCommand";
import {
  GetRunCommandInput,
  GetRunCommandOutput
} from "../commands/GetRunCommand";
import {
  GetSuiteCommandInput,
  GetSuiteCommandOutput
} from "../commands/GetSuiteCommand";
import {
  GetTestCommandInput,
  GetTestCommandOutput
} from "../commands/GetTestCommand";
import {
  GetTestGridProjectCommandInput,
  GetTestGridProjectCommandOutput
} from "../commands/GetTestGridProjectCommand";
import {
  GetTestGridSessionCommandInput,
  GetTestGridSessionCommandOutput
} from "../commands/GetTestGridSessionCommand";
import {
  GetUploadCommandInput,
  GetUploadCommandOutput
} from "../commands/GetUploadCommand";
import {
  GetVPCEConfigurationCommandInput,
  GetVPCEConfigurationCommandOutput
} from "../commands/GetVPCEConfigurationCommand";
import {
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput
} from "../commands/InstallToRemoteAccessSessionCommand";
import {
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput
} from "../commands/ListArtifactsCommand";
import {
  ListDeviceInstancesCommandInput,
  ListDeviceInstancesCommandOutput
} from "../commands/ListDeviceInstancesCommand";
import {
  ListDevicePoolsCommandInput,
  ListDevicePoolsCommandOutput
} from "../commands/ListDevicePoolsCommand";
import {
  ListDevicesCommandInput,
  ListDevicesCommandOutput
} from "../commands/ListDevicesCommand";
import {
  ListInstanceProfilesCommandInput,
  ListInstanceProfilesCommandOutput
} from "../commands/ListInstanceProfilesCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "../commands/ListJobsCommand";
import {
  ListNetworkProfilesCommandInput,
  ListNetworkProfilesCommandOutput
} from "../commands/ListNetworkProfilesCommand";
import {
  ListOfferingPromotionsCommandInput,
  ListOfferingPromotionsCommandOutput
} from "../commands/ListOfferingPromotionsCommand";
import {
  ListOfferingTransactionsCommandInput,
  ListOfferingTransactionsCommandOutput
} from "../commands/ListOfferingTransactionsCommand";
import {
  ListOfferingsCommandInput,
  ListOfferingsCommandOutput
} from "../commands/ListOfferingsCommand";
import {
  ListProjectsCommandInput,
  ListProjectsCommandOutput
} from "../commands/ListProjectsCommand";
import {
  ListRemoteAccessSessionsCommandInput,
  ListRemoteAccessSessionsCommandOutput
} from "../commands/ListRemoteAccessSessionsCommand";
import {
  ListRunsCommandInput,
  ListRunsCommandOutput
} from "../commands/ListRunsCommand";
import {
  ListSamplesCommandInput,
  ListSamplesCommandOutput
} from "../commands/ListSamplesCommand";
import {
  ListSuitesCommandInput,
  ListSuitesCommandOutput
} from "../commands/ListSuitesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput
} from "../commands/ListTestGridProjectsCommand";
import {
  ListTestGridSessionActionsCommandInput,
  ListTestGridSessionActionsCommandOutput
} from "../commands/ListTestGridSessionActionsCommand";
import {
  ListTestGridSessionArtifactsCommandInput,
  ListTestGridSessionArtifactsCommandOutput
} from "../commands/ListTestGridSessionArtifactsCommand";
import {
  ListTestGridSessionsCommandInput,
  ListTestGridSessionsCommandOutput
} from "../commands/ListTestGridSessionsCommand";
import {
  ListTestsCommandInput,
  ListTestsCommandOutput
} from "../commands/ListTestsCommand";
import {
  ListUniqueProblemsCommandInput,
  ListUniqueProblemsCommandOutput
} from "../commands/ListUniqueProblemsCommand";
import {
  ListUploadsCommandInput,
  ListUploadsCommandOutput
} from "../commands/ListUploadsCommand";
import {
  ListVPCEConfigurationsCommandInput,
  ListVPCEConfigurationsCommandOutput
} from "../commands/ListVPCEConfigurationsCommand";
import {
  PurchaseOfferingCommandInput,
  PurchaseOfferingCommandOutput
} from "../commands/PurchaseOfferingCommand";
import {
  RenewOfferingCommandInput,
  RenewOfferingCommandOutput
} from "../commands/RenewOfferingCommand";
import {
  ScheduleRunCommandInput,
  ScheduleRunCommandOutput
} from "../commands/ScheduleRunCommand";
import {
  StopJobCommandInput,
  StopJobCommandOutput
} from "../commands/StopJobCommand";
import {
  StopRemoteAccessSessionCommandInput,
  StopRemoteAccessSessionCommandOutput
} from "../commands/StopRemoteAccessSessionCommand";
import {
  StopRunCommandInput,
  StopRunCommandOutput
} from "../commands/StopRunCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput
} from "../commands/UpdateDeviceInstanceCommand";
import {
  UpdateDevicePoolCommandInput,
  UpdateDevicePoolCommandOutput
} from "../commands/UpdateDevicePoolCommand";
import {
  UpdateInstanceProfileCommandInput,
  UpdateInstanceProfileCommandOutput
} from "../commands/UpdateInstanceProfileCommand";
import {
  UpdateNetworkProfileCommandInput,
  UpdateNetworkProfileCommandOutput
} from "../commands/UpdateNetworkProfileCommand";
import {
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput
} from "../commands/UpdateProjectCommand";
import {
  UpdateTestGridProjectCommandInput,
  UpdateTestGridProjectCommandOutput
} from "../commands/UpdateTestGridProjectCommand";
import {
  UpdateUploadCommandInput,
  UpdateUploadCommandOutput
} from "../commands/UpdateUploadCommand";
import {
  UpdateVPCEConfigurationCommandInput,
  UpdateVPCEConfigurationCommandOutput
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
  DevicePool,
  DevicePoolCompatibilityResult,
  DeviceSelectionConfiguration,
  DeviceSelectionResult,
  ExecutionConfiguration,
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
  VPCEConfiguration
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_json1_1CreateDevicePoolCommand(
  input: CreateDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateDevicePool";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateDevicePoolRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateInstanceProfileCommand(
  input: CreateInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateInstanceProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateInstanceProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateNetworkProfileCommand(
  input: CreateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateNetworkProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateNetworkProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateProjectCommand(
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateRemoteAccessSessionCommand(
  input: CreateRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateRemoteAccessSession";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateRemoteAccessSessionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateTestGridProjectCommand(
  input: CreateTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateTestGridProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateTestGridProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateTestGridUrlCommand(
  input: CreateTestGridUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateTestGridUrl";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateTestGridUrlRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateUploadCommand(
  input: CreateUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateUpload";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateUploadRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1CreateVPCEConfigurationCommand(
  input: CreateVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.CreateVPCEConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1CreateVPCEConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteDevicePoolCommand(
  input: DeleteDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteDevicePool";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteDevicePoolRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteInstanceProfileCommand(
  input: DeleteInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteInstanceProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteInstanceProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteNetworkProfileCommand(
  input: DeleteNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteNetworkProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteNetworkProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteProjectCommand(
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteRemoteAccessSessionCommand(
  input: DeleteRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteRemoteAccessSession";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteRemoteAccessSessionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteRunCommand(
  input: DeleteRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteRun";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteTestGridProjectCommand(
  input: DeleteTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteTestGridProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteTestGridProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteUploadCommand(
  input: DeleteUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteUpload";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteUploadRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1DeleteVPCEConfigurationCommand(
  input: DeleteVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.DeleteVPCEConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1DeleteVPCEConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetAccountSettingsCommand(
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetAccountSettings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetAccountSettingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDeviceCommand(
  input: GetDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetDevice";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetDeviceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDeviceInstanceCommand(
  input: GetDeviceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetDeviceInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDeviceInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDevicePoolCommand(
  input: GetDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetDevicePool";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDevicePoolRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetDevicePoolCompatibilityCommand(
  input: GetDevicePoolCompatibilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetDevicePoolCompatibility";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetDevicePoolCompatibilityRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetInstanceProfileCommand(
  input: GetInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetInstanceProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetInstanceProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetJobCommand(
  input: GetJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetJob";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetNetworkProfileCommand(
  input: GetNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetNetworkProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetNetworkProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetOfferingStatusCommand(
  input: GetOfferingStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetOfferingStatus";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetOfferingStatusRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetProjectCommand(
  input: GetProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetProject";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetProjectRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRemoteAccessSessionCommand(
  input: GetRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetRemoteAccessSession";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetRemoteAccessSessionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetRunCommand(
  input: GetRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetRun";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetSuiteCommand(
  input: GetSuiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetSuite";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetSuiteRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTestCommand(
  input: GetTestCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetTest";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetTestRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTestGridProjectCommand(
  input: GetTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetTestGridProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetTestGridProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetTestGridSessionCommand(
  input: GetTestGridSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetTestGridSession";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetTestGridSessionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetUploadCommand(
  input: GetUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetUpload";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetUploadRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1GetVPCEConfigurationCommand(
  input: GetVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.GetVPCEConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1GetVPCEConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1InstallToRemoteAccessSessionCommand(
  input: InstallToRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.InstallToRemoteAccessSession";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1InstallToRemoteAccessSessionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListArtifactsCommand(
  input: ListArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListArtifacts";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListArtifactsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDeviceInstancesCommand(
  input: ListDeviceInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListDeviceInstances";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDeviceInstancesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDevicePoolsCommand(
  input: ListDevicePoolsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListDevicePools";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListDevicePoolsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListDevicesCommand(
  input: ListDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListDevices";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDevicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListInstanceProfilesCommand(
  input: ListInstanceProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListInstanceProfiles";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListInstanceProfilesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListJobsCommand(
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListJobs";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListNetworkProfilesCommand(
  input: ListNetworkProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListNetworkProfiles";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListNetworkProfilesRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListOfferingPromotionsCommand(
  input: ListOfferingPromotionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListOfferingPromotions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOfferingPromotionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListOfferingTransactionsCommand(
  input: ListOfferingTransactionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListOfferingTransactions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOfferingTransactionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListOfferingsCommand(
  input: ListOfferingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListOfferings";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListOfferingsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListProjectsCommand(
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListProjects";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListProjectsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRemoteAccessSessionsCommand(
  input: ListRemoteAccessSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListRemoteAccessSessions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListRemoteAccessSessionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListRunsCommand(
  input: ListRunsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListRuns";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListRunsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListSamplesCommand(
  input: ListSamplesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListSamples";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSamplesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListSuitesCommand(
  input: ListSuitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListSuites";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListSuitesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTagsForResourceCommand(
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTagsForResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTagsForResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTestGridProjectsCommand(
  input: ListTestGridProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTestGridProjects";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTestGridProjectsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTestGridSessionActionsCommand(
  input: ListTestGridSessionActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTestGridSessionActions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTestGridSessionActionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTestGridSessionArtifactsCommand(
  input: ListTestGridSessionArtifactsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTestGridSessionArtifacts";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTestGridSessionArtifactsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTestGridSessionsCommand(
  input: ListTestGridSessionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTestGridSessions";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListTestGridSessionsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListTestsCommand(
  input: ListTestsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListTests";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTestsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListUniqueProblemsCommand(
  input: ListUniqueProblemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListUniqueProblems";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListUniqueProblemsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListUploadsCommand(
  input: ListUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListUploads";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListUploadsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ListVPCEConfigurationsCommand(
  input: ListVPCEConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ListVPCEConfigurations";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1ListVPCEConfigurationsRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1PurchaseOfferingCommand(
  input: PurchaseOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.PurchaseOffering";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1PurchaseOfferingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1RenewOfferingCommand(
  input: RenewOfferingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.RenewOffering";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1RenewOfferingRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1ScheduleRunCommand(
  input: ScheduleRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.ScheduleRun";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ScheduleRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopJobCommand(
  input: StopJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.StopJob";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopRemoteAccessSessionCommand(
  input: StopRemoteAccessSessionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.StopRemoteAccessSession";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1StopRemoteAccessSessionRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1StopRunCommand(
  input: StopRunCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.StopRun";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopRunRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.TagResource";
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UntagResource";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UntagResourceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDeviceInstanceCommand(
  input: UpdateDeviceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateDeviceInstance";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDeviceInstanceRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateDevicePoolCommand(
  input: UpdateDevicePoolCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateDevicePool";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateDevicePoolRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateInstanceProfileCommand(
  input: UpdateInstanceProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateInstanceProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateInstanceProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateNetworkProfileCommand(
  input: UpdateNetworkProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateNetworkProfile";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateNetworkProfileRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateProjectCommand(
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateTestGridProjectCommand(
  input: UpdateTestGridProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateTestGridProject";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateTestGridProjectRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateUploadCommand(
  input: UpdateUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateUpload";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateUploadRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function serializeAws_json1_1UpdateVPCEConfigurationCommand(
  input: UpdateVPCEConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: __HeaderBag = {};
  headers["Content-Type"] = "application/x-amz-json-1.1";
  headers["X-Amz-Target"] = "DeviceFarm_20150623.UpdateVPCEConfiguration";
  let body: any;
  body = JSON.stringify(
    serializeAws_json1_1UpdateVPCEConfigurationRequest(input, context)
  );
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
}

export async function deserializeAws_json1_1CreateDevicePoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevicePoolCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDevicePoolResult(data, context);
  const response: CreateDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDevicePoolResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateDevicePoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDevicePoolCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateInstanceProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateInstanceProfileCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateInstanceProfileResult(data, context);
  const response: CreateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateInstanceProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateInstanceProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInstanceProfileCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateNetworkProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateNetworkProfileCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateNetworkProfileResult(data, context);
  const response: CreateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateNetworkProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateNetworkProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkProfileCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateProjectResult(data, context);
  const response: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagOperationException":
    case "com.amazon.devicefarm.model#TagOperationException":
      response = {
        ...(await deserializeAws_json1_1TagOperationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateRemoteAccessSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRemoteAccessSessionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateRemoteAccessSessionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateRemoteAccessSessionResult(
    data,
    context
  );
  const response: CreateRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRemoteAccessSessionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateRemoteAccessSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRemoteAccessSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateTestGridProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTestGridProjectCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTestGridProjectResult(data, context);
  const response: CreateTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTestGridProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateTestGridProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateTestGridUrlCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridUrlCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateTestGridUrlCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateTestGridUrlResult(data, context);
  const response: CreateTestGridUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateTestGridUrlResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateTestGridUrlCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestGridUrlCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateUploadResult(data, context);
  const response: CreateUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUploadResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1CreateVPCEConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCEConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1CreateVPCEConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVPCEConfigurationResult(data, context);
  const response: CreateVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVPCEConfigurationResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1CreateVPCEConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVPCEConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteDevicePoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevicePoolCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDevicePoolResult(data, context);
  const response: DeleteDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDevicePoolResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteDevicePoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDevicePoolCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteInstanceProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteInstanceProfileCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteInstanceProfileResult(data, context);
  const response: DeleteInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInstanceProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteInstanceProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInstanceProfileCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteNetworkProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteNetworkProfileCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNetworkProfileResult(data, context);
  const response: DeleteNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteNetworkProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteNetworkProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkProfileCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteProjectResult(data, context);
  const response: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteRemoteAccessSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemoteAccessSessionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRemoteAccessSessionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRemoteAccessSessionResult(
    data,
    context
  );
  const response: DeleteRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRemoteAccessSessionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRemoteAccessSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRemoteAccessSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteRunCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteRunResult(data, context);
  const response: DeleteRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRunResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteRunCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRunCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteTestGridProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestGridProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteTestGridProjectCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteTestGridProjectResult(data, context);
  const response: DeleteTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteTestGridProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteTestGridProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestGridProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "CannotDeleteException":
    case "com.amazon.devicefarm.model#CannotDeleteException":
      response = {
        ...(await deserializeAws_json1_1CannotDeleteExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUploadCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteUploadResult(data, context);
  const response: DeleteUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteUploadResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUploadCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1DeleteVPCEConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCEConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1DeleteVPCEConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVPCEConfigurationResult(data, context);
  const response: DeleteVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVPCEConfigurationResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1DeleteVPCEConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVPCEConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazon.devicefarm.model#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetAccountSettingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetAccountSettingsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccountSettingsResult(data, context);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccountSettingsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetAccountSettingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetDeviceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDeviceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeviceResult(data, context);
  const response: GetDeviceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeviceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDeviceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetDeviceInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDeviceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDeviceInstanceResult(data, context);
  const response: GetDeviceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDeviceInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDeviceInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetDevicePoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDevicePoolResult(data, context);
  const response: GetDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDevicePoolResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDevicePoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetDevicePoolCompatibilityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCompatibilityCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetDevicePoolCompatibilityCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetDevicePoolCompatibilityResult(
    data,
    context
  );
  const response: GetDevicePoolCompatibilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDevicePoolCompatibilityResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetDevicePoolCompatibilityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicePoolCompatibilityCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetInstanceProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetInstanceProfileCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceProfileResult(data, context);
  const response: GetInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInstanceProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetInstanceProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceProfileCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetJobResult(data, context);
  const response: GetJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetNetworkProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetNetworkProfileCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNetworkProfileResult(data, context);
  const response: GetNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetNetworkProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetNetworkProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkProfileCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetOfferingStatusCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOfferingStatusCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetOfferingStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOfferingStatusResult(data, context);
  const response: GetOfferingStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetOfferingStatusResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetOfferingStatusCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOfferingStatusCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotEligibleException":
    case "com.amazon.devicefarm.model#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetProjectResult(data, context);
  const response: GetProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetRemoteAccessSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemoteAccessSessionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRemoteAccessSessionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRemoteAccessSessionResult(data, context);
  const response: GetRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRemoteAccessSessionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRemoteAccessSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRemoteAccessSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetRunCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetRunResult(data, context);
  const response: GetRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRunResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetRunCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRunCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetSuiteCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetSuiteCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetSuiteResult(data, context);
  const response: GetSuiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSuiteResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetSuiteCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSuiteCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetTestCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTestCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTestResult(data, context);
  const response: GetTestCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTestResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTestCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetTestGridProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTestGridProjectCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTestGridProjectResult(data, context);
  const response: GetTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTestGridProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTestGridProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetTestGridSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridSessionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetTestGridSessionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetTestGridSessionResult(data, context);
  const response: GetTestGridSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTestGridSessionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetTestGridSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestGridSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetUploadResult(data, context);
  const response: GetUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUploadResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUploadCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1GetVPCEConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVPCEConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1GetVPCEConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetVPCEConfigurationResult(data, context);
  const response: GetVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVPCEConfigurationResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1GetVPCEConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVPCEConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1InstallToRemoteAccessSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstallToRemoteAccessSessionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1InstallToRemoteAccessSessionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1InstallToRemoteAccessSessionResult(
    data,
    context
  );
  const response: InstallToRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InstallToRemoteAccessSessionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1InstallToRemoteAccessSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InstallToRemoteAccessSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListArtifactsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListArtifactsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListArtifactsResult(data, context);
  const response: ListArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListArtifactsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListArtifactsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListArtifactsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListDeviceInstancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceInstancesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDeviceInstancesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDeviceInstancesResult(data, context);
  const response: ListDeviceInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDeviceInstancesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListDeviceInstancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceInstancesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListDevicePoolsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePoolsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDevicePoolsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDevicePoolsResult(data, context);
  const response: ListDevicePoolsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDevicePoolsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListDevicePoolsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicePoolsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListDevicesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListDevicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDevicesResult(data, context);
  const response: ListDevicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDevicesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListDevicesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDevicesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListInstanceProfilesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListInstanceProfilesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstanceProfilesResult(data, context);
  const response: ListInstanceProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListInstanceProfilesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListInstanceProfilesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstanceProfilesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListJobsResult(data, context);
  const response: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListNetworkProfilesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkProfilesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListNetworkProfilesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNetworkProfilesResult(data, context);
  const response: ListNetworkProfilesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListNetworkProfilesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListNetworkProfilesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkProfilesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListOfferingPromotionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingPromotionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListOfferingPromotionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOfferingPromotionsResult(data, context);
  const response: ListOfferingPromotionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOfferingPromotionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListOfferingPromotionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingPromotionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotEligibleException":
    case "com.amazon.devicefarm.model#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListOfferingTransactionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingTransactionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListOfferingTransactionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOfferingTransactionsResult(
    data,
    context
  );
  const response: ListOfferingTransactionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOfferingTransactionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListOfferingTransactionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingTransactionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotEligibleException":
    case "com.amazon.devicefarm.model#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListOfferingsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListOfferingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOfferingsResult(data, context);
  const response: ListOfferingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListOfferingsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListOfferingsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOfferingsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotEligibleException":
    case "com.amazon.devicefarm.model#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListProjectsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListProjectsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListProjectsResult(data, context);
  const response: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProjectsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListProjectsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListRemoteAccessSessionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRemoteAccessSessionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRemoteAccessSessionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRemoteAccessSessionsResult(
    data,
    context
  );
  const response: ListRemoteAccessSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRemoteAccessSessionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRemoteAccessSessionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRemoteAccessSessionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListRunsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListRunsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListRunsResult(data, context);
  const response: ListRunsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRunsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListRunsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRunsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListSamplesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSamplesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSamplesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSamplesResult(data, context);
  const response: ListSamplesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSamplesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListSamplesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSamplesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListSuitesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuitesCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListSuitesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListSuitesResult(data, context);
  const response: ListSuitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSuitesResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListSuitesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSuitesCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTagsForResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTagsForResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagOperationException":
    case "com.amazon.devicefarm.model#TagOperationException":
      response = {
        ...(await deserializeAws_json1_1TagOperationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTestGridProjectsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridProjectsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTestGridProjectsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestGridProjectsResult(data, context);
  const response: ListTestGridProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTestGridProjectsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTestGridProjectsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridProjectsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTestGridSessionActionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionActionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTestGridSessionActionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestGridSessionActionsResult(
    data,
    context
  );
  const response: ListTestGridSessionActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTestGridSessionActionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTestGridSessionActionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionActionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTestGridSessionArtifactsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionArtifactsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTestGridSessionArtifactsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestGridSessionArtifactsResult(
    data,
    context
  );
  const response: ListTestGridSessionArtifactsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTestGridSessionArtifactsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTestGridSessionArtifactsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionArtifactsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTestGridSessionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTestGridSessionsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestGridSessionsResult(data, context);
  const response: ListTestGridSessionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTestGridSessionsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTestGridSessionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestGridSessionsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListTestsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListTestsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTestsResult(data, context);
  const response: ListTestsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTestsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListTestsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListUniqueProblemsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUniqueProblemsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListUniqueProblemsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUniqueProblemsResult(data, context);
  const response: ListUniqueProblemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUniqueProblemsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListUniqueProblemsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUniqueProblemsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListUploadsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUploadsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListUploadsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListUploadsResult(data, context);
  const response: ListUploadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUploadsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListUploadsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUploadsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ListVPCEConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCEConfigurationsCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ListVPCEConfigurationsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListVPCEConfigurationsResult(data, context);
  const response: ListVPCEConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVPCEConfigurationsResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ListVPCEConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVPCEConfigurationsCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1PurchaseOfferingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1PurchaseOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1PurchaseOfferingResult(data, context);
  const response: PurchaseOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PurchaseOfferingResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1PurchaseOfferingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseOfferingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotEligibleException":
    case "com.amazon.devicefarm.model#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1RenewOfferingCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewOfferingCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1RenewOfferingCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RenewOfferingResult(data, context);
  const response: RenewOfferingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RenewOfferingResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1RenewOfferingCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RenewOfferingCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotEligibleException":
    case "com.amazon.devicefarm.model#NotEligibleException":
      response = {
        ...(await deserializeAws_json1_1NotEligibleExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1ScheduleRunCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleRunCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1ScheduleRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ScheduleRunResult(data, context);
  const response: ScheduleRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ScheduleRunResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1ScheduleRunCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ScheduleRunCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "IdempotencyException":
    case "com.amazon.devicefarm.model#IdempotencyException":
      response = {
        ...(await deserializeAws_json1_1IdempotencyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopJobResult(data, context);
  const response: StopJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopJobResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopJobCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopRemoteAccessSessionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRemoteAccessSessionCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopRemoteAccessSessionCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRemoteAccessSessionResult(data, context);
  const response: StopRemoteAccessSessionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopRemoteAccessSessionResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopRemoteAccessSessionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRemoteAccessSessionCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1StopRunCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRunCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1StopRunCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1StopRunResult(data, context);
  const response: StopRunCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopRunResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1StopRunCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopRunCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagOperationException":
    case "com.amazon.devicefarm.model#TagOperationException":
      response = {
        ...(await deserializeAws_json1_1TagOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagPolicyException":
    case "com.amazon.devicefarm.model#TagPolicyException":
      response = {
        ...(await deserializeAws_json1_1TagPolicyExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazon.devicefarm.model#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceResponse",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TagOperationException":
    case "com.amazon.devicefarm.model#TagOperationException":
      response = {
        ...(await deserializeAws_json1_1TagOperationExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateDeviceInstanceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceInstanceCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDeviceInstanceCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDeviceInstanceResult(data, context);
  const response: UpdateDeviceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDeviceInstanceResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDeviceInstanceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceInstanceCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateDevicePoolCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePoolCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateDevicePoolCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDevicePoolResult(data, context);
  const response: UpdateDevicePoolCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDevicePoolResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateDevicePoolCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDevicePoolCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateInstanceProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateInstanceProfileCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateInstanceProfileResult(data, context);
  const response: UpdateInstanceProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateInstanceProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateInstanceProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceProfileCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateNetworkProfileCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateNetworkProfileCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateNetworkProfileResult(data, context);
  const response: UpdateNetworkProfileCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateNetworkProfileResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateNetworkProfileCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkProfileCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateProjectCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateProjectResult(data, context);
  const response: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateTestGridProjectCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestGridProjectCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateTestGridProjectCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateTestGridProjectResult(data, context);
  const response: UpdateTestGridProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateTestGridProjectResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateTestGridProjectCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestGridProjectCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceException":
    case "com.amazon.devicefarm.model#InternalServiceException":
      response = {
        ...(await deserializeAws_json1_1InternalServiceExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUploadCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateUploadCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateUploadResult(data, context);
  const response: UpdateUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateUploadResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUploadCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazon.devicefarm.model#LimitExceededException":
      response = {
        ...(await deserializeAws_json1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

export async function deserializeAws_json1_1UpdateVPCEConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVPCEConfigurationCommandOutput> {
  if (output.statusCode >= 400) {
    return deserializeAws_json1_1UpdateVPCEConfigurationCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVPCEConfigurationResult(data, context);
  const response: UpdateVPCEConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVPCEConfigurationResult",
    ...contents
  };
  return Promise.resolve(response);
}

async function deserializeAws_json1_1UpdateVPCEConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVPCEConfigurationCommandOutput> {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  const errorTypeParts: String = parsedOutput.body["__type"].split("#");
  errorCode =
    errorTypeParts[1] === undefined ? errorTypeParts[0] : errorTypeParts[1];
  switch (errorCode) {
    case "ArgumentException":
    case "com.amazon.devicefarm.model#ArgumentException":
      response = {
        ...(await deserializeAws_json1_1ArgumentExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidOperationException":
    case "com.amazon.devicefarm.model#InvalidOperationException":
      response = {
        ...(await deserializeAws_json1_1InvalidOperationExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazon.devicefarm.model#NotFoundException":
      response = {
        ...(await deserializeAws_json1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceAccountException":
    case "com.amazon.devicefarm.model#ServiceAccountException":
      response = {
        ...(await deserializeAws_json1_1ServiceAccountExceptionResponse(
          parsedOutput,
          context
        )),
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
}

const deserializeAws_json1_1ArgumentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ArgumentException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ArgumentException(
    body,
    context
  );
  const contents: ArgumentException = {
    name: "ArgumentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1CannotDeleteExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CannotDeleteException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CannotDeleteException(
    body,
    context
  );
  const contents: CannotDeleteException = {
    name: "CannotDeleteException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1IdempotencyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IdempotencyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IdempotencyException(
    body,
    context
  );
  const contents: IdempotencyException = {
    name: "IdempotencyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServiceException(
    body,
    context
  );
  const contents: InternalServiceException = {
    name: "InternalServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1InvalidOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidOperationException(
    body,
    context
  );
  const contents: InvalidOperationException = {
    name: "InvalidOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(
    body,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotEligibleExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotEligibleException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotEligibleException(
    body,
    context
  );
  const contents: NotEligibleException = {
    name: "NotEligibleException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotFoundException(
    body,
    context
  );
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1ServiceAccountExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceAccountException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceAccountException(
    body,
    context
  );
  const contents: ServiceAccountException = {
    name: "ServiceAccountException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagOperationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagOperationException(
    body,
    context
  );
  const contents: TagOperationException = {
    name: "TagOperationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TagPolicyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TagPolicyException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TagPolicyException(
    body,
    context
  );
  const contents: TagPolicyException = {
    name: "TagPolicyException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(
    body,
    context
  );
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_json1_1AmazonResourceNames = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1AndroidPaths = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1CreateDevicePoolRequest = (
  input: CreateDevicePoolRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.maxDevices !== undefined) {
    bodyParams["maxDevices"] = input.maxDevices;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  if (input.rules !== undefined) {
    bodyParams["rules"] = serializeAws_json1_1Rules(input.rules, context);
  }
  return bodyParams;
};

const serializeAws_json1_1CreateInstanceProfileRequest = (
  input: CreateInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.excludeAppPackagesFromCleanup !== undefined) {
    bodyParams[
      "excludeAppPackagesFromCleanup"
    ] = serializeAws_json1_1PackageIds(
      input.excludeAppPackagesFromCleanup,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.packageCleanup !== undefined) {
    bodyParams["packageCleanup"] = input.packageCleanup;
  }
  if (input.rebootAfterUse !== undefined) {
    bodyParams["rebootAfterUse"] = input.rebootAfterUse;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateNetworkProfileRequest = (
  input: CreateNetworkProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.downlinkBandwidthBits !== undefined) {
    bodyParams["downlinkBandwidthBits"] = input.downlinkBandwidthBits;
  }
  if (input.downlinkDelayMs !== undefined) {
    bodyParams["downlinkDelayMs"] = input.downlinkDelayMs;
  }
  if (input.downlinkJitterMs !== undefined) {
    bodyParams["downlinkJitterMs"] = input.downlinkJitterMs;
  }
  if (input.downlinkLossPercent !== undefined) {
    bodyParams["downlinkLossPercent"] = input.downlinkLossPercent;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  if (input.uplinkBandwidthBits !== undefined) {
    bodyParams["uplinkBandwidthBits"] = input.uplinkBandwidthBits;
  }
  if (input.uplinkDelayMs !== undefined) {
    bodyParams["uplinkDelayMs"] = input.uplinkDelayMs;
  }
  if (input.uplinkJitterMs !== undefined) {
    bodyParams["uplinkJitterMs"] = input.uplinkJitterMs;
  }
  if (input.uplinkLossPercent !== undefined) {
    bodyParams["uplinkLossPercent"] = input.uplinkLossPercent;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateProjectRequest = (
  input: CreateProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.defaultJobTimeoutMinutes !== undefined) {
    bodyParams["defaultJobTimeoutMinutes"] = input.defaultJobTimeoutMinutes;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRemoteAccessSessionConfiguration = (
  input: CreateRemoteAccessSessionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.billingMethod !== undefined) {
    bodyParams["billingMethod"] = input.billingMethod;
  }
  if (input.vpceConfigurationArns !== undefined) {
    bodyParams[
      "vpceConfigurationArns"
    ] = serializeAws_json1_1AmazonResourceNames(
      input.vpceConfigurationArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1CreateRemoteAccessSessionRequest = (
  input: CreateRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.clientId !== undefined) {
    bodyParams["clientId"] = input.clientId;
  }
  if (input.configuration !== undefined) {
    bodyParams[
      "configuration"
    ] = serializeAws_json1_1CreateRemoteAccessSessionConfiguration(
      input.configuration,
      context
    );
  }
  if (input.deviceArn !== undefined) {
    bodyParams["deviceArn"] = input.deviceArn;
  }
  if (input.instanceArn !== undefined) {
    bodyParams["instanceArn"] = input.instanceArn;
  }
  if (input.interactionMode !== undefined) {
    bodyParams["interactionMode"] = input.interactionMode;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  if (input.remoteDebugEnabled !== undefined) {
    bodyParams["remoteDebugEnabled"] = input.remoteDebugEnabled;
  }
  if (input.remoteRecordAppArn !== undefined) {
    bodyParams["remoteRecordAppArn"] = input.remoteRecordAppArn;
  }
  if (input.remoteRecordEnabled !== undefined) {
    bodyParams["remoteRecordEnabled"] = input.remoteRecordEnabled;
  }
  if (input.skipAppResign !== undefined) {
    bodyParams["skipAppResign"] = input.skipAppResign;
  }
  if (input.sshPublicKey !== undefined) {
    bodyParams["sshPublicKey"] = input.sshPublicKey;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateTestGridProjectRequest = (
  input: CreateTestGridProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateTestGridUrlRequest = (
  input: CreateTestGridUrlRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.expiresInSeconds !== undefined) {
    bodyParams["expiresInSeconds"] = input.expiresInSeconds;
  }
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateUploadRequest = (
  input: CreateUploadRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.contentType !== undefined) {
    bodyParams["contentType"] = input.contentType;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1CreateVPCEConfigurationRequest = (
  input: CreateVPCEConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.serviceDnsName !== undefined) {
    bodyParams["serviceDnsName"] = input.serviceDnsName;
  }
  if (input.vpceConfigurationDescription !== undefined) {
    bodyParams["vpceConfigurationDescription"] =
      input.vpceConfigurationDescription;
  }
  if (input.vpceConfigurationName !== undefined) {
    bodyParams["vpceConfigurationName"] = input.vpceConfigurationName;
  }
  if (input.vpceServiceName !== undefined) {
    bodyParams["vpceServiceName"] = input.vpceServiceName;
  }
  return bodyParams;
};

const serializeAws_json1_1CustomerArtifactPaths = (
  input: CustomerArtifactPaths,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.androidPaths !== undefined) {
    bodyParams["androidPaths"] = serializeAws_json1_1AndroidPaths(
      input.androidPaths,
      context
    );
  }
  if (input.deviceHostPaths !== undefined) {
    bodyParams["deviceHostPaths"] = serializeAws_json1_1DeviceHostPaths(
      input.deviceHostPaths,
      context
    );
  }
  if (input.iosPaths !== undefined) {
    bodyParams["iosPaths"] = serializeAws_json1_1IosPaths(
      input.iosPaths,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteDevicePoolRequest = (
  input: DeleteDevicePoolRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteInstanceProfileRequest = (
  input: DeleteInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteNetworkProfileRequest = (
  input: DeleteNetworkProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteProjectRequest = (
  input: DeleteProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRemoteAccessSessionRequest = (
  input: DeleteRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteRunRequest = (
  input: DeleteRunRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteTestGridProjectRequest = (
  input: DeleteTestGridProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteUploadRequest = (
  input: DeleteUploadRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeleteVPCEConfigurationRequest = (
  input: DeleteVPCEConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1DeviceFilter = (
  input: DeviceFilter,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attribute !== undefined) {
    bodyParams["attribute"] = input.attribute;
  }
  if (input.operator !== undefined) {
    bodyParams["operator"] = input.operator;
  }
  if (input.values !== undefined) {
    bodyParams["values"] = serializeAws_json1_1DeviceFilterValues(
      input.values,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1DeviceFilterValues = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DeviceFilters = (
  input: Array<DeviceFilter>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1DeviceFilter(entry, context));
  }
  return contents;
};

const serializeAws_json1_1DeviceHostPaths = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1DeviceSelectionConfiguration = (
  input: DeviceSelectionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1DeviceFilters(
      input.filters,
      context
    );
  }
  if (input.maxDevices !== undefined) {
    bodyParams["maxDevices"] = input.maxDevices;
  }
  return bodyParams;
};

const serializeAws_json1_1ExecutionConfiguration = (
  input: ExecutionConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.accountsCleanup !== undefined) {
    bodyParams["accountsCleanup"] = input.accountsCleanup;
  }
  if (input.appPackagesCleanup !== undefined) {
    bodyParams["appPackagesCleanup"] = input.appPackagesCleanup;
  }
  if (input.jobTimeoutMinutes !== undefined) {
    bodyParams["jobTimeoutMinutes"] = input.jobTimeoutMinutes;
  }
  if (input.skipAppResign !== undefined) {
    bodyParams["skipAppResign"] = input.skipAppResign;
  }
  if (input.videoCapture !== undefined) {
    bodyParams["videoCapture"] = input.videoCapture;
  }
  return bodyParams;
};

const serializeAws_json1_1GetAccountSettingsRequest = (
  input: GetAccountSettingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  return bodyParams;
};

const serializeAws_json1_1GetDeviceInstanceRequest = (
  input: GetDeviceInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDevicePoolCompatibilityRequest = (
  input: GetDevicePoolCompatibilityRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.appArn !== undefined) {
    bodyParams["appArn"] = input.appArn;
  }
  if (input.configuration !== undefined) {
    bodyParams["configuration"] = serializeAws_json1_1ScheduleRunConfiguration(
      input.configuration,
      context
    );
  }
  if (input.devicePoolArn !== undefined) {
    bodyParams["devicePoolArn"] = input.devicePoolArn;
  }
  if (input.test !== undefined) {
    bodyParams["test"] = serializeAws_json1_1ScheduleRunTest(
      input.test,
      context
    );
  }
  if (input.testType !== undefined) {
    bodyParams["testType"] = input.testType;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDevicePoolRequest = (
  input: GetDevicePoolRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetDeviceRequest = (
  input: GetDeviceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetInstanceProfileRequest = (
  input: GetInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetJobRequest = (
  input: GetJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetNetworkProfileRequest = (
  input: GetNetworkProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetOfferingStatusRequest = (
  input: GetOfferingStatusRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1GetProjectRequest = (
  input: GetProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRemoteAccessSessionRequest = (
  input: GetRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetRunRequest = (
  input: GetRunRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetSuiteRequest = (
  input: GetSuiteRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTestGridProjectRequest = (
  input: GetTestGridProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTestGridSessionRequest = (
  input: GetTestGridSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  if (input.sessionArn !== undefined) {
    bodyParams["sessionArn"] = input.sessionArn;
  }
  if (input.sessionId !== undefined) {
    bodyParams["sessionId"] = input.sessionId;
  }
  return bodyParams;
};

const serializeAws_json1_1GetTestRequest = (
  input: GetTestRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetUploadRequest = (
  input: GetUploadRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1GetVPCEConfigurationRequest = (
  input: GetVPCEConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1InstallToRemoteAccessSessionRequest = (
  input: InstallToRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.appArn !== undefined) {
    bodyParams["appArn"] = input.appArn;
  }
  if (input.remoteAccessSessionArn !== undefined) {
    bodyParams["remoteAccessSessionArn"] = input.remoteAccessSessionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1InstanceLabels = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1IosPaths = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1ListArtifactsRequest = (
  input: ListArtifactsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDeviceInstancesRequest = (
  input: ListDeviceInstancesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDevicePoolsRequest = (
  input: ListDevicePoolsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ListDevicesRequest = (
  input: ListDevicesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.filters !== undefined) {
    bodyParams["filters"] = serializeAws_json1_1DeviceFilters(
      input.filters,
      context
    );
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListInstanceProfilesRequest = (
  input: ListInstanceProfilesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListJobsRequest = (
  input: ListJobsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListNetworkProfilesRequest = (
  input: ListNetworkProfilesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOfferingPromotionsRequest = (
  input: ListOfferingPromotionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOfferingTransactionsRequest = (
  input: ListOfferingTransactionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListOfferingsRequest = (
  input: ListOfferingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListProjectsRequest = (
  input: ListProjectsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRemoteAccessSessionsRequest = (
  input: ListRemoteAccessSessionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListRunsRequest = (
  input: ListRunsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListSamplesRequest = (
  input: ListSamplesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListSuitesRequest = (
  input: ListSuitesRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTestGridProjectsRequest = (
  input: ListTestGridProjectsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResult !== undefined) {
    bodyParams["maxResult"] = input.maxResult;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTestGridSessionActionsRequest = (
  input: ListTestGridSessionActionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResult !== undefined) {
    bodyParams["maxResult"] = input.maxResult;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.sessionArn !== undefined) {
    bodyParams["sessionArn"] = input.sessionArn;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTestGridSessionArtifactsRequest = (
  input: ListTestGridSessionArtifactsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResult !== undefined) {
    bodyParams["maxResult"] = input.maxResult;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.sessionArn !== undefined) {
    bodyParams["sessionArn"] = input.sessionArn;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTestGridSessionsRequest = (
  input: ListTestGridSessionsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.creationTimeAfter !== undefined) {
    bodyParams["creationTimeAfter"] = Math.round(
      input.creationTimeAfter.getTime() / 1000
    );
  }
  if (input.creationTimeBefore !== undefined) {
    bodyParams["creationTimeBefore"] = Math.round(
      input.creationTimeBefore.getTime() / 1000
    );
  }
  if (input.endTimeAfter !== undefined) {
    bodyParams["endTimeAfter"] = Math.round(
      input.endTimeAfter.getTime() / 1000
    );
  }
  if (input.endTimeBefore !== undefined) {
    bodyParams["endTimeBefore"] = Math.round(
      input.endTimeBefore.getTime() / 1000
    );
  }
  if (input.maxResult !== undefined) {
    bodyParams["maxResult"] = input.maxResult;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  if (input.status !== undefined) {
    bodyParams["status"] = input.status;
  }
  return bodyParams;
};

const serializeAws_json1_1ListTestsRequest = (
  input: ListTestsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListUniqueProblemsRequest = (
  input: ListUniqueProblemsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1ListUploadsRequest = (
  input: ListUploadsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1ListVPCEConfigurationsRequest = (
  input: ListVPCEConfigurationsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxResults !== undefined) {
    bodyParams["maxResults"] = input.maxResults;
  }
  if (input.nextToken !== undefined) {
    bodyParams["nextToken"] = input.nextToken;
  }
  return bodyParams;
};

const serializeAws_json1_1Location = (
  input: Location,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.latitude !== undefined) {
    bodyParams["latitude"] = input.latitude;
  }
  if (input.longitude !== undefined) {
    bodyParams["longitude"] = input.longitude;
  }
  return bodyParams;
};

const serializeAws_json1_1PackageIds = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1PurchaseOfferingRequest = (
  input: PurchaseOfferingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.offeringId !== undefined) {
    bodyParams["offeringId"] = input.offeringId;
  }
  if (input.offeringPromotionId !== undefined) {
    bodyParams["offeringPromotionId"] = input.offeringPromotionId;
  }
  if (input.quantity !== undefined) {
    bodyParams["quantity"] = input.quantity;
  }
  return bodyParams;
};

const serializeAws_json1_1Radios = (
  input: Radios,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.bluetooth !== undefined) {
    bodyParams["bluetooth"] = input.bluetooth;
  }
  if (input.gps !== undefined) {
    bodyParams["gps"] = input.gps;
  }
  if (input.nfc !== undefined) {
    bodyParams["nfc"] = input.nfc;
  }
  if (input.wifi !== undefined) {
    bodyParams["wifi"] = input.wifi;
  }
  return bodyParams;
};

const serializeAws_json1_1RenewOfferingRequest = (
  input: RenewOfferingRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.offeringId !== undefined) {
    bodyParams["offeringId"] = input.offeringId;
  }
  if (input.quantity !== undefined) {
    bodyParams["quantity"] = input.quantity;
  }
  return bodyParams;
};

const serializeAws_json1_1Rule = (
  input: Rule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.attribute !== undefined) {
    bodyParams["attribute"] = input.attribute;
  }
  if (input.operator !== undefined) {
    bodyParams["operator"] = input.operator;
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_json1_1Rules = (
  input: Array<Rule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Rule(entry, context));
  }
  return contents;
};

const serializeAws_json1_1ScheduleRunConfiguration = (
  input: ScheduleRunConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.auxiliaryApps !== undefined) {
    bodyParams["auxiliaryApps"] = serializeAws_json1_1AmazonResourceNames(
      input.auxiliaryApps,
      context
    );
  }
  if (input.billingMethod !== undefined) {
    bodyParams["billingMethod"] = input.billingMethod;
  }
  if (input.customerArtifactPaths !== undefined) {
    bodyParams[
      "customerArtifactPaths"
    ] = serializeAws_json1_1CustomerArtifactPaths(
      input.customerArtifactPaths,
      context
    );
  }
  if (input.extraDataPackageArn !== undefined) {
    bodyParams["extraDataPackageArn"] = input.extraDataPackageArn;
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.location !== undefined) {
    bodyParams["location"] = serializeAws_json1_1Location(
      input.location,
      context
    );
  }
  if (input.networkProfileArn !== undefined) {
    bodyParams["networkProfileArn"] = input.networkProfileArn;
  }
  if (input.radios !== undefined) {
    bodyParams["radios"] = serializeAws_json1_1Radios(input.radios, context);
  }
  if (input.vpceConfigurationArns !== undefined) {
    bodyParams[
      "vpceConfigurationArns"
    ] = serializeAws_json1_1AmazonResourceNames(
      input.vpceConfigurationArns,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ScheduleRunRequest = (
  input: ScheduleRunRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.appArn !== undefined) {
    bodyParams["appArn"] = input.appArn;
  }
  if (input.configuration !== undefined) {
    bodyParams["configuration"] = serializeAws_json1_1ScheduleRunConfiguration(
      input.configuration,
      context
    );
  }
  if (input.devicePoolArn !== undefined) {
    bodyParams["devicePoolArn"] = input.devicePoolArn;
  }
  if (input.deviceSelectionConfiguration !== undefined) {
    bodyParams[
      "deviceSelectionConfiguration"
    ] = serializeAws_json1_1DeviceSelectionConfiguration(
      input.deviceSelectionConfiguration,
      context
    );
  }
  if (input.executionConfiguration !== undefined) {
    bodyParams[
      "executionConfiguration"
    ] = serializeAws_json1_1ExecutionConfiguration(
      input.executionConfiguration,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  if (input.test !== undefined) {
    bodyParams["test"] = serializeAws_json1_1ScheduleRunTest(
      input.test,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1ScheduleRunTest = (
  input: ScheduleRunTest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.filter !== undefined) {
    bodyParams["filter"] = input.filter;
  }
  if (input.parameters !== undefined) {
    bodyParams["parameters"] = serializeAws_json1_1TestParameters(
      input.parameters,
      context
    );
  }
  if (input.testPackageArn !== undefined) {
    bodyParams["testPackageArn"] = input.testPackageArn;
  }
  if (input.testSpecArn !== undefined) {
    bodyParams["testSpecArn"] = input.testSpecArn;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_json1_1StopJobRequest = (
  input: StopJobRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1StopRemoteAccessSessionRequest = (
  input: StopRemoteAccessSessionRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1StopRunRequest = (
  input: StopRunRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  return bodyParams;
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  const bodyParams: any = {};
  if (input.Key !== undefined) {
    bodyParams["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_json1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_json1_1TagList = (
  input: Array<Tag>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_json1_1Tag(entry, context));
  }
  return contents;
};

const serializeAws_json1_1TagResourceRequest = (
  input: TagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_json1_1TagList(input.Tags, context);
  }
  return bodyParams;
};

const serializeAws_json1_1TestParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_json1_1UntagResourceRequest = (
  input: UntagResourceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_json1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDeviceInstanceRequest = (
  input: UpdateDeviceInstanceRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.labels !== undefined) {
    bodyParams["labels"] = serializeAws_json1_1InstanceLabels(
      input.labels,
      context
    );
  }
  if (input.profileArn !== undefined) {
    bodyParams["profileArn"] = input.profileArn;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateDevicePoolRequest = (
  input: UpdateDevicePoolRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.clearMaxDevices !== undefined) {
    bodyParams["clearMaxDevices"] = input.clearMaxDevices;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.maxDevices !== undefined) {
    bodyParams["maxDevices"] = input.maxDevices;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.rules !== undefined) {
    bodyParams["rules"] = serializeAws_json1_1Rules(input.rules, context);
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateInstanceProfileRequest = (
  input: UpdateInstanceProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.excludeAppPackagesFromCleanup !== undefined) {
    bodyParams[
      "excludeAppPackagesFromCleanup"
    ] = serializeAws_json1_1PackageIds(
      input.excludeAppPackagesFromCleanup,
      context
    );
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.packageCleanup !== undefined) {
    bodyParams["packageCleanup"] = input.packageCleanup;
  }
  if (input.rebootAfterUse !== undefined) {
    bodyParams["rebootAfterUse"] = input.rebootAfterUse;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateNetworkProfileRequest = (
  input: UpdateNetworkProfileRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.downlinkBandwidthBits !== undefined) {
    bodyParams["downlinkBandwidthBits"] = input.downlinkBandwidthBits;
  }
  if (input.downlinkDelayMs !== undefined) {
    bodyParams["downlinkDelayMs"] = input.downlinkDelayMs;
  }
  if (input.downlinkJitterMs !== undefined) {
    bodyParams["downlinkJitterMs"] = input.downlinkJitterMs;
  }
  if (input.downlinkLossPercent !== undefined) {
    bodyParams["downlinkLossPercent"] = input.downlinkLossPercent;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  if (input.uplinkBandwidthBits !== undefined) {
    bodyParams["uplinkBandwidthBits"] = input.uplinkBandwidthBits;
  }
  if (input.uplinkDelayMs !== undefined) {
    bodyParams["uplinkDelayMs"] = input.uplinkDelayMs;
  }
  if (input.uplinkJitterMs !== undefined) {
    bodyParams["uplinkJitterMs"] = input.uplinkJitterMs;
  }
  if (input.uplinkLossPercent !== undefined) {
    bodyParams["uplinkLossPercent"] = input.uplinkLossPercent;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateProjectRequest = (
  input: UpdateProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.defaultJobTimeoutMinutes !== undefined) {
    bodyParams["defaultJobTimeoutMinutes"] = input.defaultJobTimeoutMinutes;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateTestGridProjectRequest = (
  input: UpdateTestGridProjectRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.projectArn !== undefined) {
    bodyParams["projectArn"] = input.projectArn;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateUploadRequest = (
  input: UpdateUploadRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.contentType !== undefined) {
    bodyParams["contentType"] = input.contentType;
  }
  if (input.editContent !== undefined) {
    bodyParams["editContent"] = input.editContent;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  return bodyParams;
};

const serializeAws_json1_1UpdateVPCEConfigurationRequest = (
  input: UpdateVPCEConfigurationRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.arn !== undefined) {
    bodyParams["arn"] = input.arn;
  }
  if (input.serviceDnsName !== undefined) {
    bodyParams["serviceDnsName"] = input.serviceDnsName;
  }
  if (input.vpceConfigurationDescription !== undefined) {
    bodyParams["vpceConfigurationDescription"] =
      input.vpceConfigurationDescription;
  }
  if (input.vpceConfigurationName !== undefined) {
    bodyParams["vpceConfigurationName"] = input.vpceConfigurationName;
  }
  if (input.vpceServiceName !== undefined) {
    bodyParams["vpceServiceName"] = input.vpceServiceName;
  }
  return bodyParams;
};

const deserializeAws_json1_1AccountSettings = (
  output: any,
  context: __SerdeContext
): AccountSettings => {
  let contents: any = {
    __type: "AccountSettings",
    awsAccountNumber: undefined,
    defaultJobTimeoutMinutes: undefined,
    maxJobTimeoutMinutes: undefined,
    maxSlots: undefined,
    skipAppResign: undefined,
    trialMinutes: undefined,
    unmeteredDevices: undefined,
    unmeteredRemoteAccessDevices: undefined
  };
  if (
    output.awsAccountNumber !== undefined &&
    output.awsAccountNumber !== null
  ) {
    contents.awsAccountNumber = output.awsAccountNumber;
  }
  if (
    output.defaultJobTimeoutMinutes !== undefined &&
    output.defaultJobTimeoutMinutes !== null
  ) {
    contents.defaultJobTimeoutMinutes = output.defaultJobTimeoutMinutes;
  }
  if (
    output.maxJobTimeoutMinutes !== undefined &&
    output.maxJobTimeoutMinutes !== null
  ) {
    contents.maxJobTimeoutMinutes = output.maxJobTimeoutMinutes;
  }
  if (output.maxSlots !== undefined && output.maxSlots !== null) {
    contents.maxSlots = deserializeAws_json1_1MaxSlotMap(
      output.maxSlots,
      context
    );
  }
  if (output.skipAppResign !== undefined && output.skipAppResign !== null) {
    contents.skipAppResign = output.skipAppResign;
  }
  if (output.trialMinutes !== undefined && output.trialMinutes !== null) {
    contents.trialMinutes = deserializeAws_json1_1TrialMinutes(
      output.trialMinutes,
      context
    );
  }
  if (
    output.unmeteredDevices !== undefined &&
    output.unmeteredDevices !== null
  ) {
    contents.unmeteredDevices = deserializeAws_json1_1PurchasedDevicesMap(
      output.unmeteredDevices,
      context
    );
  }
  if (
    output.unmeteredRemoteAccessDevices !== undefined &&
    output.unmeteredRemoteAccessDevices !== null
  ) {
    contents.unmeteredRemoteAccessDevices = deserializeAws_json1_1PurchasedDevicesMap(
      output.unmeteredRemoteAccessDevices,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1AndroidPaths = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1ArgumentException = (
  output: any,
  context: __SerdeContext
): ArgumentException => {
  let contents: any = {
    __type: "ArgumentException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Artifact = (
  output: any,
  context: __SerdeContext
): Artifact => {
  let contents: any = {
    __type: "Artifact",
    arn: undefined,
    extension: undefined,
    name: undefined,
    type: undefined,
    url: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.extension !== undefined && output.extension !== null) {
    contents.extension = output.extension;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.url = output.url;
  }
  return contents;
};

const deserializeAws_json1_1Artifacts = (
  output: any,
  context: __SerdeContext
): Array<Artifact> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Artifact(entry, context)
  );
};

const deserializeAws_json1_1CPU = (
  output: any,
  context: __SerdeContext
): CPU => {
  let contents: any = {
    __type: "CPU",
    architecture: undefined,
    clock: undefined,
    frequency: undefined
  };
  if (output.architecture !== undefined && output.architecture !== null) {
    contents.architecture = output.architecture;
  }
  if (output.clock !== undefined && output.clock !== null) {
    contents.clock = output.clock;
  }
  if (output.frequency !== undefined && output.frequency !== null) {
    contents.frequency = output.frequency;
  }
  return contents;
};

const deserializeAws_json1_1CannotDeleteException = (
  output: any,
  context: __SerdeContext
): CannotDeleteException => {
  let contents: any = {
    __type: "CannotDeleteException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Counters = (
  output: any,
  context: __SerdeContext
): Counters => {
  let contents: any = {
    __type: "Counters",
    errored: undefined,
    failed: undefined,
    passed: undefined,
    skipped: undefined,
    stopped: undefined,
    total: undefined,
    warned: undefined
  };
  if (output.errored !== undefined && output.errored !== null) {
    contents.errored = output.errored;
  }
  if (output.failed !== undefined && output.failed !== null) {
    contents.failed = output.failed;
  }
  if (output.passed !== undefined && output.passed !== null) {
    contents.passed = output.passed;
  }
  if (output.skipped !== undefined && output.skipped !== null) {
    contents.skipped = output.skipped;
  }
  if (output.stopped !== undefined && output.stopped !== null) {
    contents.stopped = output.stopped;
  }
  if (output.total !== undefined && output.total !== null) {
    contents.total = output.total;
  }
  if (output.warned !== undefined && output.warned !== null) {
    contents.warned = output.warned;
  }
  return contents;
};

const deserializeAws_json1_1CreateDevicePoolResult = (
  output: any,
  context: __SerdeContext
): CreateDevicePoolResult => {
  let contents: any = {
    __type: "CreateDevicePoolResult",
    devicePool: undefined
  };
  if (output.devicePool !== undefined && output.devicePool !== null) {
    contents.devicePool = deserializeAws_json1_1DevicePool(
      output.devicePool,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateInstanceProfileResult = (
  output: any,
  context: __SerdeContext
): CreateInstanceProfileResult => {
  let contents: any = {
    __type: "CreateInstanceProfileResult",
    instanceProfile: undefined
  };
  if (output.instanceProfile !== undefined && output.instanceProfile !== null) {
    contents.instanceProfile = deserializeAws_json1_1InstanceProfile(
      output.instanceProfile,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateNetworkProfileResult = (
  output: any,
  context: __SerdeContext
): CreateNetworkProfileResult => {
  let contents: any = {
    __type: "CreateNetworkProfileResult",
    networkProfile: undefined
  };
  if (output.networkProfile !== undefined && output.networkProfile !== null) {
    contents.networkProfile = deserializeAws_json1_1NetworkProfile(
      output.networkProfile,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateProjectResult = (
  output: any,
  context: __SerdeContext
): CreateProjectResult => {
  let contents: any = {
    __type: "CreateProjectResult",
    project: undefined
  };
  if (output.project !== undefined && output.project !== null) {
    contents.project = deserializeAws_json1_1Project(output.project, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): CreateRemoteAccessSessionResult => {
  let contents: any = {
    __type: "CreateRemoteAccessSessionResult",
    remoteAccessSession: undefined
  };
  if (
    output.remoteAccessSession !== undefined &&
    output.remoteAccessSession !== null
  ) {
    contents.remoteAccessSession = deserializeAws_json1_1RemoteAccessSession(
      output.remoteAccessSession,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateTestGridProjectResult = (
  output: any,
  context: __SerdeContext
): CreateTestGridProjectResult => {
  let contents: any = {
    __type: "CreateTestGridProjectResult",
    testGridProject: undefined
  };
  if (output.testGridProject !== undefined && output.testGridProject !== null) {
    contents.testGridProject = deserializeAws_json1_1TestGridProject(
      output.testGridProject,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CreateTestGridUrlResult = (
  output: any,
  context: __SerdeContext
): CreateTestGridUrlResult => {
  let contents: any = {
    __type: "CreateTestGridUrlResult",
    expires: undefined,
    url: undefined
  };
  if (output.expires !== undefined && output.expires !== null) {
    contents.expires = new Date(Math.round(output.expires * 1000));
  }
  if (output.url !== undefined && output.url !== null) {
    contents.url = output.url;
  }
  return contents;
};

const deserializeAws_json1_1CreateUploadResult = (
  output: any,
  context: __SerdeContext
): CreateUploadResult => {
  let contents: any = {
    __type: "CreateUploadResult",
    upload: undefined
  };
  if (output.upload !== undefined && output.upload !== null) {
    contents.upload = deserializeAws_json1_1Upload(output.upload, context);
  }
  return contents;
};

const deserializeAws_json1_1CreateVPCEConfigurationResult = (
  output: any,
  context: __SerdeContext
): CreateVPCEConfigurationResult => {
  let contents: any = {
    __type: "CreateVPCEConfigurationResult",
    vpceConfiguration: undefined
  };
  if (
    output.vpceConfiguration !== undefined &&
    output.vpceConfiguration !== null
  ) {
    contents.vpceConfiguration = deserializeAws_json1_1VPCEConfiguration(
      output.vpceConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1CustomerArtifactPaths = (
  output: any,
  context: __SerdeContext
): CustomerArtifactPaths => {
  let contents: any = {
    __type: "CustomerArtifactPaths",
    androidPaths: undefined,
    deviceHostPaths: undefined,
    iosPaths: undefined
  };
  if (output.androidPaths !== undefined && output.androidPaths !== null) {
    contents.androidPaths = deserializeAws_json1_1AndroidPaths(
      output.androidPaths,
      context
    );
  }
  if (output.deviceHostPaths !== undefined && output.deviceHostPaths !== null) {
    contents.deviceHostPaths = deserializeAws_json1_1DeviceHostPaths(
      output.deviceHostPaths,
      context
    );
  }
  if (output.iosPaths !== undefined && output.iosPaths !== null) {
    contents.iosPaths = deserializeAws_json1_1IosPaths(
      output.iosPaths,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeleteDevicePoolResult = (
  output: any,
  context: __SerdeContext
): DeleteDevicePoolResult => {
  let contents: any = {
    __type: "DeleteDevicePoolResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteInstanceProfileResult = (
  output: any,
  context: __SerdeContext
): DeleteInstanceProfileResult => {
  let contents: any = {
    __type: "DeleteInstanceProfileResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteNetworkProfileResult = (
  output: any,
  context: __SerdeContext
): DeleteNetworkProfileResult => {
  let contents: any = {
    __type: "DeleteNetworkProfileResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteProjectResult = (
  output: any,
  context: __SerdeContext
): DeleteProjectResult => {
  let contents: any = {
    __type: "DeleteProjectResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): DeleteRemoteAccessSessionResult => {
  let contents: any = {
    __type: "DeleteRemoteAccessSessionResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteRunResult = (
  output: any,
  context: __SerdeContext
): DeleteRunResult => {
  let contents: any = {
    __type: "DeleteRunResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteTestGridProjectResult = (
  output: any,
  context: __SerdeContext
): DeleteTestGridProjectResult => {
  let contents: any = {
    __type: "DeleteTestGridProjectResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteUploadResult = (
  output: any,
  context: __SerdeContext
): DeleteUploadResult => {
  let contents: any = {
    __type: "DeleteUploadResult"
  };
  return contents;
};

const deserializeAws_json1_1DeleteVPCEConfigurationResult = (
  output: any,
  context: __SerdeContext
): DeleteVPCEConfigurationResult => {
  let contents: any = {
    __type: "DeleteVPCEConfigurationResult"
  };
  return contents;
};

const deserializeAws_json1_1Device = (
  output: any,
  context: __SerdeContext
): Device => {
  let contents: any = {
    __type: "Device",
    arn: undefined,
    availability: undefined,
    carrier: undefined,
    cpu: undefined,
    fleetName: undefined,
    fleetType: undefined,
    formFactor: undefined,
    heapSize: undefined,
    image: undefined,
    instances: undefined,
    manufacturer: undefined,
    memory: undefined,
    model: undefined,
    modelId: undefined,
    name: undefined,
    os: undefined,
    platform: undefined,
    radio: undefined,
    remoteAccessEnabled: undefined,
    remoteDebugEnabled: undefined,
    resolution: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.availability !== undefined && output.availability !== null) {
    contents.availability = output.availability;
  }
  if (output.carrier !== undefined && output.carrier !== null) {
    contents.carrier = output.carrier;
  }
  if (output.cpu !== undefined && output.cpu !== null) {
    contents.cpu = deserializeAws_json1_1CPU(output.cpu, context);
  }
  if (output.fleetName !== undefined && output.fleetName !== null) {
    contents.fleetName = output.fleetName;
  }
  if (output.fleetType !== undefined && output.fleetType !== null) {
    contents.fleetType = output.fleetType;
  }
  if (output.formFactor !== undefined && output.formFactor !== null) {
    contents.formFactor = output.formFactor;
  }
  if (output.heapSize !== undefined && output.heapSize !== null) {
    contents.heapSize = output.heapSize;
  }
  if (output.image !== undefined && output.image !== null) {
    contents.image = output.image;
  }
  if (output.instances !== undefined && output.instances !== null) {
    contents.instances = deserializeAws_json1_1DeviceInstances(
      output.instances,
      context
    );
  }
  if (output.manufacturer !== undefined && output.manufacturer !== null) {
    contents.manufacturer = output.manufacturer;
  }
  if (output.memory !== undefined && output.memory !== null) {
    contents.memory = output.memory;
  }
  if (output.model !== undefined && output.model !== null) {
    contents.model = output.model;
  }
  if (output.modelId !== undefined && output.modelId !== null) {
    contents.modelId = output.modelId;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.os !== undefined && output.os !== null) {
    contents.os = output.os;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.radio !== undefined && output.radio !== null) {
    contents.radio = output.radio;
  }
  if (
    output.remoteAccessEnabled !== undefined &&
    output.remoteAccessEnabled !== null
  ) {
    contents.remoteAccessEnabled = output.remoteAccessEnabled;
  }
  if (
    output.remoteDebugEnabled !== undefined &&
    output.remoteDebugEnabled !== null
  ) {
    contents.remoteDebugEnabled = output.remoteDebugEnabled;
  }
  if (output.resolution !== undefined && output.resolution !== null) {
    contents.resolution = deserializeAws_json1_1Resolution(
      output.resolution,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeviceFilter = (
  output: any,
  context: __SerdeContext
): DeviceFilter => {
  let contents: any = {
    __type: "DeviceFilter",
    attribute: undefined,
    operator: undefined,
    values: undefined
  };
  if (output.attribute !== undefined && output.attribute !== null) {
    contents.attribute = output.attribute;
  }
  if (output.operator !== undefined && output.operator !== null) {
    contents.operator = output.operator;
  }
  if (output.values !== undefined && output.values !== null) {
    contents.values = deserializeAws_json1_1DeviceFilterValues(
      output.values,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DeviceFilterValues = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeviceFilters = (
  output: any,
  context: __SerdeContext
): Array<DeviceFilter> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DeviceFilter(entry, context)
  );
};

const deserializeAws_json1_1DeviceHostPaths = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1DeviceInstance = (
  output: any,
  context: __SerdeContext
): DeviceInstance => {
  let contents: any = {
    __type: "DeviceInstance",
    arn: undefined,
    deviceArn: undefined,
    instanceProfile: undefined,
    labels: undefined,
    status: undefined,
    udid: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.deviceArn !== undefined && output.deviceArn !== null) {
    contents.deviceArn = output.deviceArn;
  }
  if (output.instanceProfile !== undefined && output.instanceProfile !== null) {
    contents.instanceProfile = deserializeAws_json1_1InstanceProfile(
      output.instanceProfile,
      context
    );
  }
  if (output.labels !== undefined && output.labels !== null) {
    contents.labels = deserializeAws_json1_1InstanceLabels(
      output.labels,
      context
    );
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.udid !== undefined && output.udid !== null) {
    contents.udid = output.udid;
  }
  return contents;
};

const deserializeAws_json1_1DeviceInstances = (
  output: any,
  context: __SerdeContext
): Array<DeviceInstance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DeviceInstance(entry, context)
  );
};

const deserializeAws_json1_1DeviceMinutes = (
  output: any,
  context: __SerdeContext
): DeviceMinutes => {
  let contents: any = {
    __type: "DeviceMinutes",
    metered: undefined,
    total: undefined,
    unmetered: undefined
  };
  if (output.metered !== undefined && output.metered !== null) {
    contents.metered = output.metered;
  }
  if (output.total !== undefined && output.total !== null) {
    contents.total = output.total;
  }
  if (output.unmetered !== undefined && output.unmetered !== null) {
    contents.unmetered = output.unmetered;
  }
  return contents;
};

const deserializeAws_json1_1DevicePool = (
  output: any,
  context: __SerdeContext
): DevicePool => {
  let contents: any = {
    __type: "DevicePool",
    arn: undefined,
    description: undefined,
    maxDevices: undefined,
    name: undefined,
    rules: undefined,
    type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.maxDevices !== undefined && output.maxDevices !== null) {
    contents.maxDevices = output.maxDevices;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.rules !== undefined && output.rules !== null) {
    contents.rules = deserializeAws_json1_1Rules(output.rules, context);
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1DevicePoolCompatibilityResult = (
  output: any,
  context: __SerdeContext
): DevicePoolCompatibilityResult => {
  let contents: any = {
    __type: "DevicePoolCompatibilityResult",
    compatible: undefined,
    device: undefined,
    incompatibilityMessages: undefined
  };
  if (output.compatible !== undefined && output.compatible !== null) {
    contents.compatible = output.compatible;
  }
  if (output.device !== undefined && output.device !== null) {
    contents.device = deserializeAws_json1_1Device(output.device, context);
  }
  if (
    output.incompatibilityMessages !== undefined &&
    output.incompatibilityMessages !== null
  ) {
    contents.incompatibilityMessages = deserializeAws_json1_1IncompatibilityMessages(
      output.incompatibilityMessages,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1DevicePoolCompatibilityResults = (
  output: any,
  context: __SerdeContext
): Array<DevicePoolCompatibilityResult> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DevicePoolCompatibilityResult(entry, context)
  );
};

const deserializeAws_json1_1DevicePools = (
  output: any,
  context: __SerdeContext
): Array<DevicePool> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1DevicePool(entry, context)
  );
};

const deserializeAws_json1_1DeviceSelectionResult = (
  output: any,
  context: __SerdeContext
): DeviceSelectionResult => {
  let contents: any = {
    __type: "DeviceSelectionResult",
    filters: undefined,
    matchedDevicesCount: undefined,
    maxDevices: undefined
  };
  if (output.filters !== undefined && output.filters !== null) {
    contents.filters = deserializeAws_json1_1DeviceFilters(
      output.filters,
      context
    );
  }
  if (
    output.matchedDevicesCount !== undefined &&
    output.matchedDevicesCount !== null
  ) {
    contents.matchedDevicesCount = output.matchedDevicesCount;
  }
  if (output.maxDevices !== undefined && output.maxDevices !== null) {
    contents.maxDevices = output.maxDevices;
  }
  return contents;
};

const deserializeAws_json1_1Devices = (
  output: any,
  context: __SerdeContext
): Array<Device> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Device(entry, context)
  );
};

const deserializeAws_json1_1GetAccountSettingsResult = (
  output: any,
  context: __SerdeContext
): GetAccountSettingsResult => {
  let contents: any = {
    __type: "GetAccountSettingsResult",
    accountSettings: undefined
  };
  if (output.accountSettings !== undefined && output.accountSettings !== null) {
    contents.accountSettings = deserializeAws_json1_1AccountSettings(
      output.accountSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDeviceInstanceResult = (
  output: any,
  context: __SerdeContext
): GetDeviceInstanceResult => {
  let contents: any = {
    __type: "GetDeviceInstanceResult",
    deviceInstance: undefined
  };
  if (output.deviceInstance !== undefined && output.deviceInstance !== null) {
    contents.deviceInstance = deserializeAws_json1_1DeviceInstance(
      output.deviceInstance,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDevicePoolCompatibilityResult = (
  output: any,
  context: __SerdeContext
): GetDevicePoolCompatibilityResult => {
  let contents: any = {
    __type: "GetDevicePoolCompatibilityResult",
    compatibleDevices: undefined,
    incompatibleDevices: undefined
  };
  if (
    output.compatibleDevices !== undefined &&
    output.compatibleDevices !== null
  ) {
    contents.compatibleDevices = deserializeAws_json1_1DevicePoolCompatibilityResults(
      output.compatibleDevices,
      context
    );
  }
  if (
    output.incompatibleDevices !== undefined &&
    output.incompatibleDevices !== null
  ) {
    contents.incompatibleDevices = deserializeAws_json1_1DevicePoolCompatibilityResults(
      output.incompatibleDevices,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDevicePoolResult = (
  output: any,
  context: __SerdeContext
): GetDevicePoolResult => {
  let contents: any = {
    __type: "GetDevicePoolResult",
    devicePool: undefined
  };
  if (output.devicePool !== undefined && output.devicePool !== null) {
    contents.devicePool = deserializeAws_json1_1DevicePool(
      output.devicePool,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetDeviceResult = (
  output: any,
  context: __SerdeContext
): GetDeviceResult => {
  let contents: any = {
    __type: "GetDeviceResult",
    device: undefined
  };
  if (output.device !== undefined && output.device !== null) {
    contents.device = deserializeAws_json1_1Device(output.device, context);
  }
  return contents;
};

const deserializeAws_json1_1GetInstanceProfileResult = (
  output: any,
  context: __SerdeContext
): GetInstanceProfileResult => {
  let contents: any = {
    __type: "GetInstanceProfileResult",
    instanceProfile: undefined
  };
  if (output.instanceProfile !== undefined && output.instanceProfile !== null) {
    contents.instanceProfile = deserializeAws_json1_1InstanceProfile(
      output.instanceProfile,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetJobResult = (
  output: any,
  context: __SerdeContext
): GetJobResult => {
  let contents: any = {
    __type: "GetJobResult",
    job: undefined
  };
  if (output.job !== undefined && output.job !== null) {
    contents.job = deserializeAws_json1_1Job(output.job, context);
  }
  return contents;
};

const deserializeAws_json1_1GetNetworkProfileResult = (
  output: any,
  context: __SerdeContext
): GetNetworkProfileResult => {
  let contents: any = {
    __type: "GetNetworkProfileResult",
    networkProfile: undefined
  };
  if (output.networkProfile !== undefined && output.networkProfile !== null) {
    contents.networkProfile = deserializeAws_json1_1NetworkProfile(
      output.networkProfile,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetOfferingStatusResult = (
  output: any,
  context: __SerdeContext
): GetOfferingStatusResult => {
  let contents: any = {
    __type: "GetOfferingStatusResult",
    current: undefined,
    nextPeriod: undefined,
    nextToken: undefined
  };
  if (output.current !== undefined && output.current !== null) {
    contents.current = deserializeAws_json1_1OfferingStatusMap(
      output.current,
      context
    );
  }
  if (output.nextPeriod !== undefined && output.nextPeriod !== null) {
    contents.nextPeriod = deserializeAws_json1_1OfferingStatusMap(
      output.nextPeriod,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1GetProjectResult = (
  output: any,
  context: __SerdeContext
): GetProjectResult => {
  let contents: any = {
    __type: "GetProjectResult",
    project: undefined
  };
  if (output.project !== undefined && output.project !== null) {
    contents.project = deserializeAws_json1_1Project(output.project, context);
  }
  return contents;
};

const deserializeAws_json1_1GetRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): GetRemoteAccessSessionResult => {
  let contents: any = {
    __type: "GetRemoteAccessSessionResult",
    remoteAccessSession: undefined
  };
  if (
    output.remoteAccessSession !== undefined &&
    output.remoteAccessSession !== null
  ) {
    contents.remoteAccessSession = deserializeAws_json1_1RemoteAccessSession(
      output.remoteAccessSession,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetRunResult = (
  output: any,
  context: __SerdeContext
): GetRunResult => {
  let contents: any = {
    __type: "GetRunResult",
    run: undefined
  };
  if (output.run !== undefined && output.run !== null) {
    contents.run = deserializeAws_json1_1Run(output.run, context);
  }
  return contents;
};

const deserializeAws_json1_1GetSuiteResult = (
  output: any,
  context: __SerdeContext
): GetSuiteResult => {
  let contents: any = {
    __type: "GetSuiteResult",
    suite: undefined
  };
  if (output.suite !== undefined && output.suite !== null) {
    contents.suite = deserializeAws_json1_1Suite(output.suite, context);
  }
  return contents;
};

const deserializeAws_json1_1GetTestGridProjectResult = (
  output: any,
  context: __SerdeContext
): GetTestGridProjectResult => {
  let contents: any = {
    __type: "GetTestGridProjectResult",
    testGridProject: undefined
  };
  if (output.testGridProject !== undefined && output.testGridProject !== null) {
    contents.testGridProject = deserializeAws_json1_1TestGridProject(
      output.testGridProject,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetTestGridSessionResult = (
  output: any,
  context: __SerdeContext
): GetTestGridSessionResult => {
  let contents: any = {
    __type: "GetTestGridSessionResult",
    testGridSession: undefined
  };
  if (output.testGridSession !== undefined && output.testGridSession !== null) {
    contents.testGridSession = deserializeAws_json1_1TestGridSession(
      output.testGridSession,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1GetTestResult = (
  output: any,
  context: __SerdeContext
): GetTestResult => {
  let contents: any = {
    __type: "GetTestResult",
    test: undefined
  };
  if (output.test !== undefined && output.test !== null) {
    contents.test = deserializeAws_json1_1Test(output.test, context);
  }
  return contents;
};

const deserializeAws_json1_1GetUploadResult = (
  output: any,
  context: __SerdeContext
): GetUploadResult => {
  let contents: any = {
    __type: "GetUploadResult",
    upload: undefined
  };
  if (output.upload !== undefined && output.upload !== null) {
    contents.upload = deserializeAws_json1_1Upload(output.upload, context);
  }
  return contents;
};

const deserializeAws_json1_1GetVPCEConfigurationResult = (
  output: any,
  context: __SerdeContext
): GetVPCEConfigurationResult => {
  let contents: any = {
    __type: "GetVPCEConfigurationResult",
    vpceConfiguration: undefined
  };
  if (
    output.vpceConfiguration !== undefined &&
    output.vpceConfiguration !== null
  ) {
    contents.vpceConfiguration = deserializeAws_json1_1VPCEConfiguration(
      output.vpceConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1IdempotencyException = (
  output: any,
  context: __SerdeContext
): IdempotencyException => {
  let contents: any = {
    __type: "IdempotencyException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IncompatibilityMessage = (
  output: any,
  context: __SerdeContext
): IncompatibilityMessage => {
  let contents: any = {
    __type: "IncompatibilityMessage",
    message: undefined,
    type: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1IncompatibilityMessages = (
  output: any,
  context: __SerdeContext
): Array<IncompatibilityMessage> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1IncompatibilityMessage(entry, context)
  );
};

const deserializeAws_json1_1InstallToRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): InstallToRemoteAccessSessionResult => {
  let contents: any = {
    __type: "InstallToRemoteAccessSessionResult",
    appUpload: undefined
  };
  if (output.appUpload !== undefined && output.appUpload !== null) {
    contents.appUpload = deserializeAws_json1_1Upload(
      output.appUpload,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1InstanceLabels = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1InstanceProfile = (
  output: any,
  context: __SerdeContext
): InstanceProfile => {
  let contents: any = {
    __type: "InstanceProfile",
    arn: undefined,
    description: undefined,
    excludeAppPackagesFromCleanup: undefined,
    name: undefined,
    packageCleanup: undefined,
    rebootAfterUse: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.excludeAppPackagesFromCleanup !== undefined &&
    output.excludeAppPackagesFromCleanup !== null
  ) {
    contents.excludeAppPackagesFromCleanup = deserializeAws_json1_1PackageIds(
      output.excludeAppPackagesFromCleanup,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.packageCleanup !== undefined && output.packageCleanup !== null) {
    contents.packageCleanup = output.packageCleanup;
  }
  if (output.rebootAfterUse !== undefined && output.rebootAfterUse !== null) {
    contents.rebootAfterUse = output.rebootAfterUse;
  }
  return contents;
};

const deserializeAws_json1_1InstanceProfiles = (
  output: any,
  context: __SerdeContext
): Array<InstanceProfile> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1InstanceProfile(entry, context)
  );
};

const deserializeAws_json1_1InternalServiceException = (
  output: any,
  context: __SerdeContext
): InternalServiceException => {
  let contents: any = {
    __type: "InternalServiceException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1InvalidOperationException = (
  output: any,
  context: __SerdeContext
): InvalidOperationException => {
  let contents: any = {
    __type: "InvalidOperationException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1IosPaths = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Job = (
  output: any,
  context: __SerdeContext
): Job => {
  let contents: any = {
    __type: "Job",
    arn: undefined,
    counters: undefined,
    created: undefined,
    device: undefined,
    deviceMinutes: undefined,
    instanceArn: undefined,
    message: undefined,
    name: undefined,
    result: undefined,
    started: undefined,
    status: undefined,
    stopped: undefined,
    type: undefined,
    videoCapture: undefined,
    videoEndpoint: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.counters !== undefined && output.counters !== null) {
    contents.counters = deserializeAws_json1_1Counters(
      output.counters,
      context
    );
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.device !== undefined && output.device !== null) {
    contents.device = deserializeAws_json1_1Device(output.device, context);
  }
  if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
    contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(
      output.deviceMinutes,
      context
    );
  }
  if (output.instanceArn !== undefined && output.instanceArn !== null) {
    contents.instanceArn = output.instanceArn;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (output.started !== undefined && output.started !== null) {
    contents.started = new Date(Math.round(output.started * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.stopped !== undefined && output.stopped !== null) {
    contents.stopped = new Date(Math.round(output.stopped * 1000));
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.videoCapture !== undefined && output.videoCapture !== null) {
    contents.videoCapture = output.videoCapture;
  }
  if (output.videoEndpoint !== undefined && output.videoEndpoint !== null) {
    contents.videoEndpoint = output.videoEndpoint;
  }
  return contents;
};

const deserializeAws_json1_1Jobs = (
  output: any,
  context: __SerdeContext
): Array<Job> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Job(entry, context)
  );
};

const deserializeAws_json1_1LimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1ListArtifactsResult = (
  output: any,
  context: __SerdeContext
): ListArtifactsResult => {
  let contents: any = {
    __type: "ListArtifactsResult",
    artifacts: undefined,
    nextToken: undefined
  };
  if (output.artifacts !== undefined && output.artifacts !== null) {
    contents.artifacts = deserializeAws_json1_1Artifacts(
      output.artifacts,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDeviceInstancesResult = (
  output: any,
  context: __SerdeContext
): ListDeviceInstancesResult => {
  let contents: any = {
    __type: "ListDeviceInstancesResult",
    deviceInstances: undefined,
    nextToken: undefined
  };
  if (output.deviceInstances !== undefined && output.deviceInstances !== null) {
    contents.deviceInstances = deserializeAws_json1_1DeviceInstances(
      output.deviceInstances,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDevicePoolsResult = (
  output: any,
  context: __SerdeContext
): ListDevicePoolsResult => {
  let contents: any = {
    __type: "ListDevicePoolsResult",
    devicePools: undefined,
    nextToken: undefined
  };
  if (output.devicePools !== undefined && output.devicePools !== null) {
    contents.devicePools = deserializeAws_json1_1DevicePools(
      output.devicePools,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListDevicesResult = (
  output: any,
  context: __SerdeContext
): ListDevicesResult => {
  let contents: any = {
    __type: "ListDevicesResult",
    devices: undefined,
    nextToken: undefined
  };
  if (output.devices !== undefined && output.devices !== null) {
    contents.devices = deserializeAws_json1_1Devices(output.devices, context);
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListInstanceProfilesResult = (
  output: any,
  context: __SerdeContext
): ListInstanceProfilesResult => {
  let contents: any = {
    __type: "ListInstanceProfilesResult",
    instanceProfiles: undefined,
    nextToken: undefined
  };
  if (
    output.instanceProfiles !== undefined &&
    output.instanceProfiles !== null
  ) {
    contents.instanceProfiles = deserializeAws_json1_1InstanceProfiles(
      output.instanceProfiles,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListJobsResult = (
  output: any,
  context: __SerdeContext
): ListJobsResult => {
  let contents: any = {
    __type: "ListJobsResult",
    jobs: undefined,
    nextToken: undefined
  };
  if (output.jobs !== undefined && output.jobs !== null) {
    contents.jobs = deserializeAws_json1_1Jobs(output.jobs, context);
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListNetworkProfilesResult = (
  output: any,
  context: __SerdeContext
): ListNetworkProfilesResult => {
  let contents: any = {
    __type: "ListNetworkProfilesResult",
    networkProfiles: undefined,
    nextToken: undefined
  };
  if (output.networkProfiles !== undefined && output.networkProfiles !== null) {
    contents.networkProfiles = deserializeAws_json1_1NetworkProfiles(
      output.networkProfiles,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListOfferingPromotionsResult = (
  output: any,
  context: __SerdeContext
): ListOfferingPromotionsResult => {
  let contents: any = {
    __type: "ListOfferingPromotionsResult",
    nextToken: undefined,
    offeringPromotions: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.offeringPromotions !== undefined &&
    output.offeringPromotions !== null
  ) {
    contents.offeringPromotions = deserializeAws_json1_1OfferingPromotions(
      output.offeringPromotions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListOfferingTransactionsResult = (
  output: any,
  context: __SerdeContext
): ListOfferingTransactionsResult => {
  let contents: any = {
    __type: "ListOfferingTransactionsResult",
    nextToken: undefined,
    offeringTransactions: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.offeringTransactions !== undefined &&
    output.offeringTransactions !== null
  ) {
    contents.offeringTransactions = deserializeAws_json1_1OfferingTransactions(
      output.offeringTransactions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListOfferingsResult = (
  output: any,
  context: __SerdeContext
): ListOfferingsResult => {
  let contents: any = {
    __type: "ListOfferingsResult",
    nextToken: undefined,
    offerings: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.offerings !== undefined && output.offerings !== null) {
    contents.offerings = deserializeAws_json1_1Offerings(
      output.offerings,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListProjectsResult = (
  output: any,
  context: __SerdeContext
): ListProjectsResult => {
  let contents: any = {
    __type: "ListProjectsResult",
    nextToken: undefined,
    projects: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.projects !== undefined && output.projects !== null) {
    contents.projects = deserializeAws_json1_1Projects(
      output.projects,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListRemoteAccessSessionsResult = (
  output: any,
  context: __SerdeContext
): ListRemoteAccessSessionsResult => {
  let contents: any = {
    __type: "ListRemoteAccessSessionsResult",
    nextToken: undefined,
    remoteAccessSessions: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.remoteAccessSessions !== undefined &&
    output.remoteAccessSessions !== null
  ) {
    contents.remoteAccessSessions = deserializeAws_json1_1RemoteAccessSessions(
      output.remoteAccessSessions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListRunsResult = (
  output: any,
  context: __SerdeContext
): ListRunsResult => {
  let contents: any = {
    __type: "ListRunsResult",
    nextToken: undefined,
    runs: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.runs !== undefined && output.runs !== null) {
    contents.runs = deserializeAws_json1_1Runs(output.runs, context);
  }
  return contents;
};

const deserializeAws_json1_1ListSamplesResult = (
  output: any,
  context: __SerdeContext
): ListSamplesResult => {
  let contents: any = {
    __type: "ListSamplesResult",
    nextToken: undefined,
    samples: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.samples !== undefined && output.samples !== null) {
    contents.samples = deserializeAws_json1_1Samples(output.samples, context);
  }
  return contents;
};

const deserializeAws_json1_1ListSuitesResult = (
  output: any,
  context: __SerdeContext
): ListSuitesResult => {
  let contents: any = {
    __type: "ListSuitesResult",
    nextToken: undefined,
    suites: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.suites !== undefined && output.suites !== null) {
    contents.suites = deserializeAws_json1_1Suites(output.suites, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  let contents: any = {
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  if (output.Tags !== undefined && output.Tags !== null) {
    contents.Tags = deserializeAws_json1_1TagList(output.Tags, context);
  }
  return contents;
};

const deserializeAws_json1_1ListTestGridProjectsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridProjectsResult => {
  let contents: any = {
    __type: "ListTestGridProjectsResult",
    nextToken: undefined,
    testGridProjects: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.testGridProjects !== undefined &&
    output.testGridProjects !== null
  ) {
    contents.testGridProjects = deserializeAws_json1_1TestGridProjects(
      output.testGridProjects,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTestGridSessionActionsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionActionsResult => {
  let contents: any = {
    __type: "ListTestGridSessionActionsResult",
    actions: undefined,
    nextToken: undefined
  };
  if (output.actions !== undefined && output.actions !== null) {
    contents.actions = deserializeAws_json1_1TestGridSessionActions(
      output.actions,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTestGridSessionArtifactsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionArtifactsResult => {
  let contents: any = {
    __type: "ListTestGridSessionArtifactsResult",
    artifacts: undefined,
    nextToken: undefined
  };
  if (output.artifacts !== undefined && output.artifacts !== null) {
    contents.artifacts = deserializeAws_json1_1TestGridSessionArtifacts(
      output.artifacts,
      context
    );
  }
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  return contents;
};

const deserializeAws_json1_1ListTestGridSessionsResult = (
  output: any,
  context: __SerdeContext
): ListTestGridSessionsResult => {
  let contents: any = {
    __type: "ListTestGridSessionsResult",
    nextToken: undefined,
    testGridSessions: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.testGridSessions !== undefined &&
    output.testGridSessions !== null
  ) {
    contents.testGridSessions = deserializeAws_json1_1TestGridSessions(
      output.testGridSessions,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListTestsResult = (
  output: any,
  context: __SerdeContext
): ListTestsResult => {
  let contents: any = {
    __type: "ListTestsResult",
    nextToken: undefined,
    tests: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.tests !== undefined && output.tests !== null) {
    contents.tests = deserializeAws_json1_1Tests(output.tests, context);
  }
  return contents;
};

const deserializeAws_json1_1ListUniqueProblemsResult = (
  output: any,
  context: __SerdeContext
): ListUniqueProblemsResult => {
  let contents: any = {
    __type: "ListUniqueProblemsResult",
    nextToken: undefined,
    uniqueProblems: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.uniqueProblems !== undefined && output.uniqueProblems !== null) {
    contents.uniqueProblems = deserializeAws_json1_1UniqueProblemsByExecutionResultMap(
      output.uniqueProblems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1ListUploadsResult = (
  output: any,
  context: __SerdeContext
): ListUploadsResult => {
  let contents: any = {
    __type: "ListUploadsResult",
    nextToken: undefined,
    uploads: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (output.uploads !== undefined && output.uploads !== null) {
    contents.uploads = deserializeAws_json1_1Uploads(output.uploads, context);
  }
  return contents;
};

const deserializeAws_json1_1ListVPCEConfigurationsResult = (
  output: any,
  context: __SerdeContext
): ListVPCEConfigurationsResult => {
  let contents: any = {
    __type: "ListVPCEConfigurationsResult",
    nextToken: undefined,
    vpceConfigurations: undefined
  };
  if (output.nextToken !== undefined && output.nextToken !== null) {
    contents.nextToken = output.nextToken;
  }
  if (
    output.vpceConfigurations !== undefined &&
    output.vpceConfigurations !== null
  ) {
    contents.vpceConfigurations = deserializeAws_json1_1VPCEConfigurations(
      output.vpceConfigurations,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Location = (
  output: any,
  context: __SerdeContext
): Location => {
  let contents: any = {
    __type: "Location",
    latitude: undefined,
    longitude: undefined
  };
  if (output.latitude !== undefined && output.latitude !== null) {
    contents.latitude = output.latitude;
  }
  if (output.longitude !== undefined && output.longitude !== null) {
    contents.longitude = output.longitude;
  }
  return contents;
};

const deserializeAws_json1_1MaxSlotMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1MonetaryAmount = (
  output: any,
  context: __SerdeContext
): MonetaryAmount => {
  let contents: any = {
    __type: "MonetaryAmount",
    amount: undefined,
    currencyCode: undefined
  };
  if (output.amount !== undefined && output.amount !== null) {
    contents.amount = output.amount;
  }
  if (output.currencyCode !== undefined && output.currencyCode !== null) {
    contents.currencyCode = output.currencyCode;
  }
  return contents;
};

const deserializeAws_json1_1NetworkProfile = (
  output: any,
  context: __SerdeContext
): NetworkProfile => {
  let contents: any = {
    __type: "NetworkProfile",
    arn: undefined,
    description: undefined,
    downlinkBandwidthBits: undefined,
    downlinkDelayMs: undefined,
    downlinkJitterMs: undefined,
    downlinkLossPercent: undefined,
    name: undefined,
    type: undefined,
    uplinkBandwidthBits: undefined,
    uplinkDelayMs: undefined,
    uplinkJitterMs: undefined,
    uplinkLossPercent: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (
    output.downlinkBandwidthBits !== undefined &&
    output.downlinkBandwidthBits !== null
  ) {
    contents.downlinkBandwidthBits = output.downlinkBandwidthBits;
  }
  if (output.downlinkDelayMs !== undefined && output.downlinkDelayMs !== null) {
    contents.downlinkDelayMs = output.downlinkDelayMs;
  }
  if (
    output.downlinkJitterMs !== undefined &&
    output.downlinkJitterMs !== null
  ) {
    contents.downlinkJitterMs = output.downlinkJitterMs;
  }
  if (
    output.downlinkLossPercent !== undefined &&
    output.downlinkLossPercent !== null
  ) {
    contents.downlinkLossPercent = output.downlinkLossPercent;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (
    output.uplinkBandwidthBits !== undefined &&
    output.uplinkBandwidthBits !== null
  ) {
    contents.uplinkBandwidthBits = output.uplinkBandwidthBits;
  }
  if (output.uplinkDelayMs !== undefined && output.uplinkDelayMs !== null) {
    contents.uplinkDelayMs = output.uplinkDelayMs;
  }
  if (output.uplinkJitterMs !== undefined && output.uplinkJitterMs !== null) {
    contents.uplinkJitterMs = output.uplinkJitterMs;
  }
  if (
    output.uplinkLossPercent !== undefined &&
    output.uplinkLossPercent !== null
  ) {
    contents.uplinkLossPercent = output.uplinkLossPercent;
  }
  return contents;
};

const deserializeAws_json1_1NetworkProfiles = (
  output: any,
  context: __SerdeContext
): Array<NetworkProfile> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1NetworkProfile(entry, context)
  );
};

const deserializeAws_json1_1NotEligibleException = (
  output: any,
  context: __SerdeContext
): NotEligibleException => {
  let contents: any = {
    __type: "NotEligibleException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1NotFoundException = (
  output: any,
  context: __SerdeContext
): NotFoundException => {
  let contents: any = {
    __type: "NotFoundException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1Offering = (
  output: any,
  context: __SerdeContext
): Offering => {
  let contents: any = {
    __type: "Offering",
    description: undefined,
    id: undefined,
    platform: undefined,
    recurringCharges: undefined,
    type: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (
    output.recurringCharges !== undefined &&
    output.recurringCharges !== null
  ) {
    contents.recurringCharges = deserializeAws_json1_1RecurringCharges(
      output.recurringCharges,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1OfferingPromotion = (
  output: any,
  context: __SerdeContext
): OfferingPromotion => {
  let contents: any = {
    __type: "OfferingPromotion",
    description: undefined,
    id: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.id = output.id;
  }
  return contents;
};

const deserializeAws_json1_1OfferingPromotions = (
  output: any,
  context: __SerdeContext
): Array<OfferingPromotion> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OfferingPromotion(entry, context)
  );
};

const deserializeAws_json1_1OfferingStatus = (
  output: any,
  context: __SerdeContext
): OfferingStatus => {
  let contents: any = {
    __type: "OfferingStatus",
    effectiveOn: undefined,
    offering: undefined,
    quantity: undefined,
    type: undefined
  };
  if (output.effectiveOn !== undefined && output.effectiveOn !== null) {
    contents.effectiveOn = new Date(Math.round(output.effectiveOn * 1000));
  }
  if (output.offering !== undefined && output.offering !== null) {
    contents.offering = deserializeAws_json1_1Offering(
      output.offering,
      context
    );
  }
  if (output.quantity !== undefined && output.quantity !== null) {
    contents.quantity = output.quantity;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1OfferingStatusMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: OfferingStatus } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1OfferingStatus(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1OfferingTransaction = (
  output: any,
  context: __SerdeContext
): OfferingTransaction => {
  let contents: any = {
    __type: "OfferingTransaction",
    cost: undefined,
    createdOn: undefined,
    offeringPromotionId: undefined,
    offeringStatus: undefined,
    transactionId: undefined
  };
  if (output.cost !== undefined && output.cost !== null) {
    contents.cost = deserializeAws_json1_1MonetaryAmount(output.cost, context);
  }
  if (output.createdOn !== undefined && output.createdOn !== null) {
    contents.createdOn = new Date(Math.round(output.createdOn * 1000));
  }
  if (
    output.offeringPromotionId !== undefined &&
    output.offeringPromotionId !== null
  ) {
    contents.offeringPromotionId = output.offeringPromotionId;
  }
  if (output.offeringStatus !== undefined && output.offeringStatus !== null) {
    contents.offeringStatus = deserializeAws_json1_1OfferingStatus(
      output.offeringStatus,
      context
    );
  }
  if (output.transactionId !== undefined && output.transactionId !== null) {
    contents.transactionId = output.transactionId;
  }
  return contents;
};

const deserializeAws_json1_1OfferingTransactions = (
  output: any,
  context: __SerdeContext
): Array<OfferingTransaction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1OfferingTransaction(entry, context)
  );
};

const deserializeAws_json1_1Offerings = (
  output: any,
  context: __SerdeContext
): Array<Offering> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Offering(entry, context)
  );
};

const deserializeAws_json1_1PackageIds = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_json1_1Problem = (
  output: any,
  context: __SerdeContext
): Problem => {
  let contents: any = {
    __type: "Problem",
    device: undefined,
    job: undefined,
    message: undefined,
    result: undefined,
    run: undefined,
    suite: undefined,
    test: undefined
  };
  if (output.device !== undefined && output.device !== null) {
    contents.device = deserializeAws_json1_1Device(output.device, context);
  }
  if (output.job !== undefined && output.job !== null) {
    contents.job = deserializeAws_json1_1ProblemDetail(output.job, context);
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (output.run !== undefined && output.run !== null) {
    contents.run = deserializeAws_json1_1ProblemDetail(output.run, context);
  }
  if (output.suite !== undefined && output.suite !== null) {
    contents.suite = deserializeAws_json1_1ProblemDetail(output.suite, context);
  }
  if (output.test !== undefined && output.test !== null) {
    contents.test = deserializeAws_json1_1ProblemDetail(output.test, context);
  }
  return contents;
};

const deserializeAws_json1_1ProblemDetail = (
  output: any,
  context: __SerdeContext
): ProblemDetail => {
  let contents: any = {
    __type: "ProblemDetail",
    arn: undefined,
    name: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1Problems = (
  output: any,
  context: __SerdeContext
): Array<Problem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Problem(entry, context)
  );
};

const deserializeAws_json1_1Project = (
  output: any,
  context: __SerdeContext
): Project => {
  let contents: any = {
    __type: "Project",
    arn: undefined,
    created: undefined,
    defaultJobTimeoutMinutes: undefined,
    name: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (
    output.defaultJobTimeoutMinutes !== undefined &&
    output.defaultJobTimeoutMinutes !== null
  ) {
    contents.defaultJobTimeoutMinutes = output.defaultJobTimeoutMinutes;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1Projects = (
  output: any,
  context: __SerdeContext
): Array<Project> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Project(entry, context)
  );
};

const deserializeAws_json1_1PurchaseOfferingResult = (
  output: any,
  context: __SerdeContext
): PurchaseOfferingResult => {
  let contents: any = {
    __type: "PurchaseOfferingResult",
    offeringTransaction: undefined
  };
  if (
    output.offeringTransaction !== undefined &&
    output.offeringTransaction !== null
  ) {
    contents.offeringTransaction = deserializeAws_json1_1OfferingTransaction(
      output.offeringTransaction,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1PurchasedDevicesMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_json1_1Radios = (
  output: any,
  context: __SerdeContext
): Radios => {
  let contents: any = {
    __type: "Radios",
    bluetooth: undefined,
    gps: undefined,
    nfc: undefined,
    wifi: undefined
  };
  if (output.bluetooth !== undefined && output.bluetooth !== null) {
    contents.bluetooth = output.bluetooth;
  }
  if (output.gps !== undefined && output.gps !== null) {
    contents.gps = output.gps;
  }
  if (output.nfc !== undefined && output.nfc !== null) {
    contents.nfc = output.nfc;
  }
  if (output.wifi !== undefined && output.wifi !== null) {
    contents.wifi = output.wifi;
  }
  return contents;
};

const deserializeAws_json1_1RecurringCharge = (
  output: any,
  context: __SerdeContext
): RecurringCharge => {
  let contents: any = {
    __type: "RecurringCharge",
    cost: undefined,
    frequency: undefined
  };
  if (output.cost !== undefined && output.cost !== null) {
    contents.cost = deserializeAws_json1_1MonetaryAmount(output.cost, context);
  }
  if (output.frequency !== undefined && output.frequency !== null) {
    contents.frequency = output.frequency;
  }
  return contents;
};

const deserializeAws_json1_1RecurringCharges = (
  output: any,
  context: __SerdeContext
): Array<RecurringCharge> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RecurringCharge(entry, context)
  );
};

const deserializeAws_json1_1RemoteAccessSession = (
  output: any,
  context: __SerdeContext
): RemoteAccessSession => {
  let contents: any = {
    __type: "RemoteAccessSession",
    arn: undefined,
    billingMethod: undefined,
    clientId: undefined,
    created: undefined,
    device: undefined,
    deviceMinutes: undefined,
    deviceUdid: undefined,
    endpoint: undefined,
    hostAddress: undefined,
    instanceArn: undefined,
    interactionMode: undefined,
    message: undefined,
    name: undefined,
    remoteDebugEnabled: undefined,
    remoteRecordAppArn: undefined,
    remoteRecordEnabled: undefined,
    result: undefined,
    skipAppResign: undefined,
    started: undefined,
    status: undefined,
    stopped: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.billingMethod !== undefined && output.billingMethod !== null) {
    contents.billingMethod = output.billingMethod;
  }
  if (output.clientId !== undefined && output.clientId !== null) {
    contents.clientId = output.clientId;
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.device !== undefined && output.device !== null) {
    contents.device = deserializeAws_json1_1Device(output.device, context);
  }
  if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
    contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(
      output.deviceMinutes,
      context
    );
  }
  if (output.deviceUdid !== undefined && output.deviceUdid !== null) {
    contents.deviceUdid = output.deviceUdid;
  }
  if (output.endpoint !== undefined && output.endpoint !== null) {
    contents.endpoint = output.endpoint;
  }
  if (output.hostAddress !== undefined && output.hostAddress !== null) {
    contents.hostAddress = output.hostAddress;
  }
  if (output.instanceArn !== undefined && output.instanceArn !== null) {
    contents.instanceArn = output.instanceArn;
  }
  if (output.interactionMode !== undefined && output.interactionMode !== null) {
    contents.interactionMode = output.interactionMode;
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.remoteDebugEnabled !== undefined &&
    output.remoteDebugEnabled !== null
  ) {
    contents.remoteDebugEnabled = output.remoteDebugEnabled;
  }
  if (
    output.remoteRecordAppArn !== undefined &&
    output.remoteRecordAppArn !== null
  ) {
    contents.remoteRecordAppArn = output.remoteRecordAppArn;
  }
  if (
    output.remoteRecordEnabled !== undefined &&
    output.remoteRecordEnabled !== null
  ) {
    contents.remoteRecordEnabled = output.remoteRecordEnabled;
  }
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (output.skipAppResign !== undefined && output.skipAppResign !== null) {
    contents.skipAppResign = output.skipAppResign;
  }
  if (output.started !== undefined && output.started !== null) {
    contents.started = new Date(Math.round(output.started * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.stopped !== undefined && output.stopped !== null) {
    contents.stopped = new Date(Math.round(output.stopped * 1000));
  }
  return contents;
};

const deserializeAws_json1_1RemoteAccessSessions = (
  output: any,
  context: __SerdeContext
): Array<RemoteAccessSession> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1RemoteAccessSession(entry, context)
  );
};

const deserializeAws_json1_1RenewOfferingResult = (
  output: any,
  context: __SerdeContext
): RenewOfferingResult => {
  let contents: any = {
    __type: "RenewOfferingResult",
    offeringTransaction: undefined
  };
  if (
    output.offeringTransaction !== undefined &&
    output.offeringTransaction !== null
  ) {
    contents.offeringTransaction = deserializeAws_json1_1OfferingTransaction(
      output.offeringTransaction,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Resolution = (
  output: any,
  context: __SerdeContext
): Resolution => {
  let contents: any = {
    __type: "Resolution",
    height: undefined,
    width: undefined
  };
  if (output.height !== undefined && output.height !== null) {
    contents.height = output.height;
  }
  if (output.width !== undefined && output.width !== null) {
    contents.width = output.width;
  }
  return contents;
};

const deserializeAws_json1_1Rule = (
  output: any,
  context: __SerdeContext
): Rule => {
  let contents: any = {
    __type: "Rule",
    attribute: undefined,
    operator: undefined,
    value: undefined
  };
  if (output.attribute !== undefined && output.attribute !== null) {
    contents.attribute = output.attribute;
  }
  if (output.operator !== undefined && output.operator !== null) {
    contents.operator = output.operator;
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_json1_1Rules = (
  output: any,
  context: __SerdeContext
): Array<Rule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Rule(entry, context)
  );
};

const deserializeAws_json1_1Run = (
  output: any,
  context: __SerdeContext
): Run => {
  let contents: any = {
    __type: "Run",
    appUpload: undefined,
    arn: undefined,
    billingMethod: undefined,
    completedJobs: undefined,
    counters: undefined,
    created: undefined,
    customerArtifactPaths: undefined,
    deviceMinutes: undefined,
    devicePoolArn: undefined,
    deviceSelectionResult: undefined,
    eventCount: undefined,
    jobTimeoutMinutes: undefined,
    locale: undefined,
    location: undefined,
    message: undefined,
    name: undefined,
    networkProfile: undefined,
    parsingResultUrl: undefined,
    platform: undefined,
    radios: undefined,
    result: undefined,
    resultCode: undefined,
    seed: undefined,
    skipAppResign: undefined,
    started: undefined,
    status: undefined,
    stopped: undefined,
    testSpecArn: undefined,
    totalJobs: undefined,
    type: undefined,
    webUrl: undefined
  };
  if (output.appUpload !== undefined && output.appUpload !== null) {
    contents.appUpload = output.appUpload;
  }
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.billingMethod !== undefined && output.billingMethod !== null) {
    contents.billingMethod = output.billingMethod;
  }
  if (output.completedJobs !== undefined && output.completedJobs !== null) {
    contents.completedJobs = output.completedJobs;
  }
  if (output.counters !== undefined && output.counters !== null) {
    contents.counters = deserializeAws_json1_1Counters(
      output.counters,
      context
    );
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (
    output.customerArtifactPaths !== undefined &&
    output.customerArtifactPaths !== null
  ) {
    contents.customerArtifactPaths = deserializeAws_json1_1CustomerArtifactPaths(
      output.customerArtifactPaths,
      context
    );
  }
  if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
    contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(
      output.deviceMinutes,
      context
    );
  }
  if (output.devicePoolArn !== undefined && output.devicePoolArn !== null) {
    contents.devicePoolArn = output.devicePoolArn;
  }
  if (
    output.deviceSelectionResult !== undefined &&
    output.deviceSelectionResult !== null
  ) {
    contents.deviceSelectionResult = deserializeAws_json1_1DeviceSelectionResult(
      output.deviceSelectionResult,
      context
    );
  }
  if (output.eventCount !== undefined && output.eventCount !== null) {
    contents.eventCount = output.eventCount;
  }
  if (
    output.jobTimeoutMinutes !== undefined &&
    output.jobTimeoutMinutes !== null
  ) {
    contents.jobTimeoutMinutes = output.jobTimeoutMinutes;
  }
  if (output.locale !== undefined && output.locale !== null) {
    contents.locale = output.locale;
  }
  if (output.location !== undefined && output.location !== null) {
    contents.location = deserializeAws_json1_1Location(
      output.location,
      context
    );
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.networkProfile !== undefined && output.networkProfile !== null) {
    contents.networkProfile = deserializeAws_json1_1NetworkProfile(
      output.networkProfile,
      context
    );
  }
  if (
    output.parsingResultUrl !== undefined &&
    output.parsingResultUrl !== null
  ) {
    contents.parsingResultUrl = output.parsingResultUrl;
  }
  if (output.platform !== undefined && output.platform !== null) {
    contents.platform = output.platform;
  }
  if (output.radios !== undefined && output.radios !== null) {
    contents.radios = deserializeAws_json1_1Radios(output.radios, context);
  }
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (output.resultCode !== undefined && output.resultCode !== null) {
    contents.resultCode = output.resultCode;
  }
  if (output.seed !== undefined && output.seed !== null) {
    contents.seed = output.seed;
  }
  if (output.skipAppResign !== undefined && output.skipAppResign !== null) {
    contents.skipAppResign = output.skipAppResign;
  }
  if (output.started !== undefined && output.started !== null) {
    contents.started = new Date(Math.round(output.started * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.stopped !== undefined && output.stopped !== null) {
    contents.stopped = new Date(Math.round(output.stopped * 1000));
  }
  if (output.testSpecArn !== undefined && output.testSpecArn !== null) {
    contents.testSpecArn = output.testSpecArn;
  }
  if (output.totalJobs !== undefined && output.totalJobs !== null) {
    contents.totalJobs = output.totalJobs;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.webUrl !== undefined && output.webUrl !== null) {
    contents.webUrl = output.webUrl;
  }
  return contents;
};

const deserializeAws_json1_1Runs = (
  output: any,
  context: __SerdeContext
): Array<Run> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Run(entry, context)
  );
};

const deserializeAws_json1_1Sample = (
  output: any,
  context: __SerdeContext
): Sample => {
  let contents: any = {
    __type: "Sample",
    arn: undefined,
    type: undefined,
    url: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.url = output.url;
  }
  return contents;
};

const deserializeAws_json1_1Samples = (
  output: any,
  context: __SerdeContext
): Array<Sample> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Sample(entry, context)
  );
};

const deserializeAws_json1_1ScheduleRunResult = (
  output: any,
  context: __SerdeContext
): ScheduleRunResult => {
  let contents: any = {
    __type: "ScheduleRunResult",
    run: undefined
  };
  if (output.run !== undefined && output.run !== null) {
    contents.run = deserializeAws_json1_1Run(output.run, context);
  }
  return contents;
};

const deserializeAws_json1_1ServiceAccountException = (
  output: any,
  context: __SerdeContext
): ServiceAccountException => {
  let contents: any = {
    __type: "ServiceAccountException",
    message: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  return contents;
};

const deserializeAws_json1_1StopJobResult = (
  output: any,
  context: __SerdeContext
): StopJobResult => {
  let contents: any = {
    __type: "StopJobResult",
    job: undefined
  };
  if (output.job !== undefined && output.job !== null) {
    contents.job = deserializeAws_json1_1Job(output.job, context);
  }
  return contents;
};

const deserializeAws_json1_1StopRemoteAccessSessionResult = (
  output: any,
  context: __SerdeContext
): StopRemoteAccessSessionResult => {
  let contents: any = {
    __type: "StopRemoteAccessSessionResult",
    remoteAccessSession: undefined
  };
  if (
    output.remoteAccessSession !== undefined &&
    output.remoteAccessSession !== null
  ) {
    contents.remoteAccessSession = deserializeAws_json1_1RemoteAccessSession(
      output.remoteAccessSession,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1StopRunResult = (
  output: any,
  context: __SerdeContext
): StopRunResult => {
  let contents: any = {
    __type: "StopRunResult",
    run: undefined
  };
  if (output.run !== undefined && output.run !== null) {
    contents.run = deserializeAws_json1_1Run(output.run, context);
  }
  return contents;
};

const deserializeAws_json1_1Suite = (
  output: any,
  context: __SerdeContext
): Suite => {
  let contents: any = {
    __type: "Suite",
    arn: undefined,
    counters: undefined,
    created: undefined,
    deviceMinutes: undefined,
    message: undefined,
    name: undefined,
    result: undefined,
    started: undefined,
    status: undefined,
    stopped: undefined,
    type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.counters !== undefined && output.counters !== null) {
    contents.counters = deserializeAws_json1_1Counters(
      output.counters,
      context
    );
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
    contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(
      output.deviceMinutes,
      context
    );
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (output.started !== undefined && output.started !== null) {
    contents.started = new Date(Math.round(output.started * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.stopped !== undefined && output.stopped !== null) {
    contents.stopped = new Date(Math.round(output.stopped * 1000));
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1Suites = (
  output: any,
  context: __SerdeContext
): Array<Suite> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Suite(entry, context)
  );
};

const deserializeAws_json1_1Tag = (
  output: any,
  context: __SerdeContext
): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output.Key !== undefined && output.Key !== null) {
    contents.Key = output.Key;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_json1_1TagList = (
  output: any,
  context: __SerdeContext
): Array<Tag> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Tag(entry, context)
  );
};

const deserializeAws_json1_1TagOperationException = (
  output: any,
  context: __SerdeContext
): TagOperationException => {
  let contents: any = {
    __type: "TagOperationException",
    message: undefined,
    resourceName: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.resourceName !== undefined && output.resourceName !== null) {
    contents.resourceName = output.resourceName;
  }
  return contents;
};

const deserializeAws_json1_1TagPolicyException = (
  output: any,
  context: __SerdeContext
): TagPolicyException => {
  let contents: any = {
    __type: "TagPolicyException",
    message: undefined,
    resourceName: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.resourceName !== undefined && output.resourceName !== null) {
    contents.resourceName = output.resourceName;
  }
  return contents;
};

const deserializeAws_json1_1TagResourceResponse = (
  output: any,
  context: __SerdeContext
): TagResourceResponse => {
  let contents: any = {
    __type: "TagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1Test = (
  output: any,
  context: __SerdeContext
): Test => {
  let contents: any = {
    __type: "Test",
    arn: undefined,
    counters: undefined,
    created: undefined,
    deviceMinutes: undefined,
    message: undefined,
    name: undefined,
    result: undefined,
    started: undefined,
    status: undefined,
    stopped: undefined,
    type: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.counters !== undefined && output.counters !== null) {
    contents.counters = deserializeAws_json1_1Counters(
      output.counters,
      context
    );
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.deviceMinutes !== undefined && output.deviceMinutes !== null) {
    contents.deviceMinutes = deserializeAws_json1_1DeviceMinutes(
      output.deviceMinutes,
      context
    );
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.result !== undefined && output.result !== null) {
    contents.result = output.result;
  }
  if (output.started !== undefined && output.started !== null) {
    contents.started = new Date(Math.round(output.started * 1000));
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.stopped !== undefined && output.stopped !== null) {
    contents.stopped = new Date(Math.round(output.stopped * 1000));
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_json1_1TestGridProject = (
  output: any,
  context: __SerdeContext
): TestGridProject => {
  let contents: any = {
    __type: "TestGridProject",
    arn: undefined,
    created: undefined,
    description: undefined,
    name: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_json1_1TestGridProjects = (
  output: any,
  context: __SerdeContext
): Array<TestGridProject> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TestGridProject(entry, context)
  );
};

const deserializeAws_json1_1TestGridSession = (
  output: any,
  context: __SerdeContext
): TestGridSession => {
  let contents: any = {
    __type: "TestGridSession",
    arn: undefined,
    billingMinutes: undefined,
    created: undefined,
    ended: undefined,
    seleniumProperties: undefined,
    status: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.billingMinutes !== undefined && output.billingMinutes !== null) {
    contents.billingMinutes = output.billingMinutes;
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.ended !== undefined && output.ended !== null) {
    contents.ended = new Date(Math.round(output.ended * 1000));
  }
  if (
    output.seleniumProperties !== undefined &&
    output.seleniumProperties !== null
  ) {
    contents.seleniumProperties = output.seleniumProperties;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  return contents;
};

const deserializeAws_json1_1TestGridSessionAction = (
  output: any,
  context: __SerdeContext
): TestGridSessionAction => {
  let contents: any = {
    __type: "TestGridSessionAction",
    action: undefined,
    duration: undefined,
    requestMethod: undefined,
    started: undefined,
    statusCode: undefined
  };
  if (output.action !== undefined && output.action !== null) {
    contents.action = output.action;
  }
  if (output.duration !== undefined && output.duration !== null) {
    contents.duration = output.duration;
  }
  if (output.requestMethod !== undefined && output.requestMethod !== null) {
    contents.requestMethod = output.requestMethod;
  }
  if (output.started !== undefined && output.started !== null) {
    contents.started = new Date(Math.round(output.started * 1000));
  }
  if (output.statusCode !== undefined && output.statusCode !== null) {
    contents.statusCode = output.statusCode;
  }
  return contents;
};

const deserializeAws_json1_1TestGridSessionActions = (
  output: any,
  context: __SerdeContext
): Array<TestGridSessionAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TestGridSessionAction(entry, context)
  );
};

const deserializeAws_json1_1TestGridSessionArtifact = (
  output: any,
  context: __SerdeContext
): TestGridSessionArtifact => {
  let contents: any = {
    __type: "TestGridSessionArtifact",
    filename: undefined,
    type: undefined,
    url: undefined
  };
  if (output.filename !== undefined && output.filename !== null) {
    contents.filename = output.filename;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.url = output.url;
  }
  return contents;
};

const deserializeAws_json1_1TestGridSessionArtifacts = (
  output: any,
  context: __SerdeContext
): Array<TestGridSessionArtifact> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TestGridSessionArtifact(entry, context)
  );
};

const deserializeAws_json1_1TestGridSessions = (
  output: any,
  context: __SerdeContext
): Array<TestGridSession> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1TestGridSession(entry, context)
  );
};

const deserializeAws_json1_1Tests = (
  output: any,
  context: __SerdeContext
): Array<Test> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Test(entry, context)
  );
};

const deserializeAws_json1_1TooManyTagsException = (
  output: any,
  context: __SerdeContext
): TooManyTagsException => {
  let contents: any = {
    __type: "TooManyTagsException",
    message: undefined,
    resourceName: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.resourceName !== undefined && output.resourceName !== null) {
    contents.resourceName = output.resourceName;
  }
  return contents;
};

const deserializeAws_json1_1TrialMinutes = (
  output: any,
  context: __SerdeContext
): TrialMinutes => {
  let contents: any = {
    __type: "TrialMinutes",
    remaining: undefined,
    total: undefined
  };
  if (output.remaining !== undefined && output.remaining !== null) {
    contents.remaining = output.remaining;
  }
  if (output.total !== undefined && output.total !== null) {
    contents.total = output.total;
  }
  return contents;
};

const deserializeAws_json1_1UniqueProblem = (
  output: any,
  context: __SerdeContext
): UniqueProblem => {
  let contents: any = {
    __type: "UniqueProblem",
    message: undefined,
    problems: undefined
  };
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.problems !== undefined && output.problems !== null) {
    contents.problems = deserializeAws_json1_1Problems(
      output.problems,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UniqueProblems = (
  output: any,
  context: __SerdeContext
): Array<UniqueProblem> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1UniqueProblem(entry, context)
  );
};

const deserializeAws_json1_1UniqueProblemsByExecutionResultMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<UniqueProblem> } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_json1_1UniqueProblems(output[key], context);
  });
  return mapParams;
};

const deserializeAws_json1_1UntagResourceResponse = (
  output: any,
  context: __SerdeContext
): UntagResourceResponse => {
  let contents: any = {
    __type: "UntagResourceResponse"
  };
  return contents;
};

const deserializeAws_json1_1UpdateDeviceInstanceResult = (
  output: any,
  context: __SerdeContext
): UpdateDeviceInstanceResult => {
  let contents: any = {
    __type: "UpdateDeviceInstanceResult",
    deviceInstance: undefined
  };
  if (output.deviceInstance !== undefined && output.deviceInstance !== null) {
    contents.deviceInstance = deserializeAws_json1_1DeviceInstance(
      output.deviceInstance,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateDevicePoolResult = (
  output: any,
  context: __SerdeContext
): UpdateDevicePoolResult => {
  let contents: any = {
    __type: "UpdateDevicePoolResult",
    devicePool: undefined
  };
  if (output.devicePool !== undefined && output.devicePool !== null) {
    contents.devicePool = deserializeAws_json1_1DevicePool(
      output.devicePool,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateInstanceProfileResult = (
  output: any,
  context: __SerdeContext
): UpdateInstanceProfileResult => {
  let contents: any = {
    __type: "UpdateInstanceProfileResult",
    instanceProfile: undefined
  };
  if (output.instanceProfile !== undefined && output.instanceProfile !== null) {
    contents.instanceProfile = deserializeAws_json1_1InstanceProfile(
      output.instanceProfile,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateNetworkProfileResult = (
  output: any,
  context: __SerdeContext
): UpdateNetworkProfileResult => {
  let contents: any = {
    __type: "UpdateNetworkProfileResult",
    networkProfile: undefined
  };
  if (output.networkProfile !== undefined && output.networkProfile !== null) {
    contents.networkProfile = deserializeAws_json1_1NetworkProfile(
      output.networkProfile,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateProjectResult = (
  output: any,
  context: __SerdeContext
): UpdateProjectResult => {
  let contents: any = {
    __type: "UpdateProjectResult",
    project: undefined
  };
  if (output.project !== undefined && output.project !== null) {
    contents.project = deserializeAws_json1_1Project(output.project, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateTestGridProjectResult = (
  output: any,
  context: __SerdeContext
): UpdateTestGridProjectResult => {
  let contents: any = {
    __type: "UpdateTestGridProjectResult",
    testGridProject: undefined
  };
  if (output.testGridProject !== undefined && output.testGridProject !== null) {
    contents.testGridProject = deserializeAws_json1_1TestGridProject(
      output.testGridProject,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1UpdateUploadResult = (
  output: any,
  context: __SerdeContext
): UpdateUploadResult => {
  let contents: any = {
    __type: "UpdateUploadResult",
    upload: undefined
  };
  if (output.upload !== undefined && output.upload !== null) {
    contents.upload = deserializeAws_json1_1Upload(output.upload, context);
  }
  return contents;
};

const deserializeAws_json1_1UpdateVPCEConfigurationResult = (
  output: any,
  context: __SerdeContext
): UpdateVPCEConfigurationResult => {
  let contents: any = {
    __type: "UpdateVPCEConfigurationResult",
    vpceConfiguration: undefined
  };
  if (
    output.vpceConfiguration !== undefined &&
    output.vpceConfiguration !== null
  ) {
    contents.vpceConfiguration = deserializeAws_json1_1VPCEConfiguration(
      output.vpceConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_json1_1Upload = (
  output: any,
  context: __SerdeContext
): Upload => {
  let contents: any = {
    __type: "Upload",
    arn: undefined,
    category: undefined,
    contentType: undefined,
    created: undefined,
    message: undefined,
    metadata: undefined,
    name: undefined,
    status: undefined,
    type: undefined,
    url: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.category !== undefined && output.category !== null) {
    contents.category = output.category;
  }
  if (output.contentType !== undefined && output.contentType !== null) {
    contents.contentType = output.contentType;
  }
  if (output.created !== undefined && output.created !== null) {
    contents.created = new Date(Math.round(output.created * 1000));
  }
  if (output.message !== undefined && output.message !== null) {
    contents.message = output.message;
  }
  if (output.metadata !== undefined && output.metadata !== null) {
    contents.metadata = output.metadata;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  if (output.url !== undefined && output.url !== null) {
    contents.url = output.url;
  }
  return contents;
};

const deserializeAws_json1_1Uploads = (
  output: any,
  context: __SerdeContext
): Array<Upload> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1Upload(entry, context)
  );
};

const deserializeAws_json1_1VPCEConfiguration = (
  output: any,
  context: __SerdeContext
): VPCEConfiguration => {
  let contents: any = {
    __type: "VPCEConfiguration",
    arn: undefined,
    serviceDnsName: undefined,
    vpceConfigurationDescription: undefined,
    vpceConfigurationName: undefined,
    vpceServiceName: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.arn = output.arn;
  }
  if (output.serviceDnsName !== undefined && output.serviceDnsName !== null) {
    contents.serviceDnsName = output.serviceDnsName;
  }
  if (
    output.vpceConfigurationDescription !== undefined &&
    output.vpceConfigurationDescription !== null
  ) {
    contents.vpceConfigurationDescription = output.vpceConfigurationDescription;
  }
  if (
    output.vpceConfigurationName !== undefined &&
    output.vpceConfigurationName !== null
  ) {
    contents.vpceConfigurationName = output.vpceConfigurationName;
  }
  if (output.vpceServiceName !== undefined && output.vpceServiceName !== null) {
    contents.vpceServiceName = output.vpceServiceName;
  }
  return contents;
};

const deserializeAws_json1_1VPCEConfigurations = (
  output: any,
  context: __SerdeContext
): Array<VPCEConfiguration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_json1_1VPCEConfiguration(entry, context)
  );
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

const buildHttpRpcRequest = (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): __HttpRequest => {
  const contents: any = {
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    path: path,
    headers: headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
